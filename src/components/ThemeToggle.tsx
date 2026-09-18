"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-[var(--border-subtle)]/30 flex items-center justify-center opacity-50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-subtle)]/40 hover:border-[var(--border-subtle)] transition-all duration-300 bg-[var(--bg-card)] text-[var(--text-main)] hover:shadow-sm"
    >
      <span className="sr-only">Alternar tema</span>
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-emerald-950 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
