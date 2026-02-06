"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchMerchants } from "@/lib/data";
import { Merchant } from "@/types";

export default function MerchantSelection() {
  const router = useRouter();
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [selectedMerchantId, setSelectedMerchantId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMerchants()
      .then(setMerchants)
      .catch(() => setError("Failed to fetch merchants."))
      .finally(() => setLoading(false));
  }, []);

  const handleFetchBranches = () => {
    if (selectedMerchantId) {
      router.push(`/merchants/${selectedMerchantId}`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-slate-100">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Select Merchant</h1>
          <p className="text-sm text-slate-500">Pick a merchant to view and manage their POS branches.</p>
        </div>

        {error ? (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium border border-red-100">
            {error}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="merchant-select" className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] pl-1">
                Merchant
              </label>
              <div className="relative group">
                <select
                  id="merchant-select"
                  className="block w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 font-medium focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  value={selectedMerchantId}
                  onChange={(e) => setSelectedMerchantId(e.target.value)}
                  disabled={loading}
                >
                  <option value="" disabled>
                    {loading ? "Loading..." : "Choose a merchant"}
                  </option>
                  {merchants.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-xl">expand_more</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleFetchBranches}
              disabled={!selectedMerchantId || loading}
              className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${selectedMerchantId && !loading
                ? "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-xl shadow-slate-200 active:scale-[0.98]"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
            >
              Fetch POS Branch
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
