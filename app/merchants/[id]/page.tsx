"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { fetchBranches, fetchMerchants } from "@/lib/data";
import { Branch, Merchant } from "@/types";
import DownloadButton from "@/components/DownloadButton";

export default function POSBranchList({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [merchant, setMerchant] = useState<Merchant | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        Promise.all([fetchMerchants(), fetchBranches(id)])
            .then(([merchants, branchesData]) => {
                const currentMerchant = merchants.find((m) => m.id === id);
                if (!currentMerchant) {
                    setError("Merchant not found");
                } else {
                    setMerchant(currentMerchant);
                    setBranches(branchesData);
                }
            })
            .catch(() => setError("Failed to fetch branch data."))
            .finally(() => setLoading(false));
    }, [id]);

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center p-6">
                <div className="text-center space-y-4">
                    <div className="text-red-600 bg-red-50 px-6 py-4 rounded-2xl border border-red-100 text-sm font-medium">
                        {error}
                    </div>
                    <Link href="/" className="inline-block text-slate-900 hover:text-indigo-600 font-bold underline text-sm">
                        Go back to selection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-8">
            <header className="space-y-4">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 group transition-colors">
                    <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Back</span>
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Branches: <span className="text-indigo-600"> {merchant?.name}</span>
                </h1>
            </header>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-500 border-b border-slate-200">
                                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-wider">Location</th>
                                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-wider">Address</th>
                                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-wider">Account Name</th>
                                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-wider">Account Number</th>
                                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-wider text-center">QR Code</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                Array(3).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-8"><div className="h-4 w-32 bg-slate-100 rounded-full"></div></td>
                                        <td className="px-6 py-8"><div className="h-4 w-48 bg-slate-100 rounded-full"></div></td>
                                        <td className="px-6 py-8"><div className="h-4 w-32 bg-slate-100 rounded-full"></div></td>
                                        <td className="px-6 py-8"><div className="h-4 w-24 bg-slate-100 rounded-full"></div></td>
                                        <td className="px-6 py-8 flex justify-center"><div className="w-16 h-16 bg-slate-100 rounded-xl"></div></td>
                                    </tr>
                                ))
                            ) : branches.length > 0 ? (
                                branches.map((branch) => (
                                    <tr key={branch.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-8 align-top">
                                            <div className="font-bold text-slate-900">{branch.location}</div>
                                        </td>
                                        <td className="px-6 py-8 align-top">
                                            <div className="text-slate-500 text-sm max-w-[250px] leading-relaxed">{branch.address}</div>
                                        </td>
                                        <td className="px-6 py-8 align-top font-medium text-slate-700">
                                            {branch.account_name}
                                        </td>
                                        <td className="px-6 py-8 align-top font-mono text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                                            {branch.account_number}
                                        </td>
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="size-20 p-2 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:border-indigo-200 transition-all">
                                                    <img src={branch.qr_code_url} alt="QR Code" className="w-full h-full object-contain" />
                                                </div>
                                                <DownloadButton url={branch.qr_code_url} filename={`QR_${branch.location}.png`} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center text-slate-400 text-sm">
                                        No active branches found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
