"use client";

import { useCallback } from 'react';

export default function DownloadButton({ url, filename }: { url: string; filename: string }) {
    const download = useCallback(async () => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download failed', error);
            window.open(url, '_blank');
        }
    }, [url, filename]);

    return (
        <button
            onClick={download}
            className="bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-bold text-white flex items-center gap-2 transition-all active:scale-95 shadow-sm"
        >
            <span className="material-symbols-outlined text-sm">download</span> DOWNLOAD
        </button>
    );
}
