"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// The <html data-theme> attribute is the single source of truth.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};
const getTheme = () =>
  document.documentElement.getAttribute("data-theme") as Theme | null;
const getServerTheme = () => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    if (getTheme()) return;
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
        ? "dark"
        : "light";

    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  if (!theme) return <div className="w-9 h-9" />;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
    >
      {theme === "light" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
