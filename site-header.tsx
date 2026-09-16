"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/book", label: "The Book" },
  { href: "/about", label: "About Dinah" },
  { href: "/ministry", label: "Our Mission" },
  { href: "/contact", label: "Join the Launch" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af5a]/20 bg-[#0b1220]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl tracking-wide text-[#f4ecd8]">
          ROLL CALL<span className="text-gold">!</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm uppercase tracking-[0.15em] text-[#f4ecd8]/70 transition-colors hover:text-[#d4af5a]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="text-[#f4ecd8] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#d4af5a]/20 bg-[#0b1220] px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-body text-sm uppercase tracking-[0.15em] text-[#f4ecd8]/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
