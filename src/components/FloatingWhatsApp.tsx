"use client";

import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip Hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] text-xs font-heading uppercase tracking-wider border border-[var(--border-subtle)]/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar no WhatsApp
      </span>

      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento direto pelo WhatsApp"
        className="w-14 h-14 rounded-full bg-[#143525] hover:bg-[#0d2319] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 pulse-whatsapp relative"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
      </a>
    </div>
  );
}
