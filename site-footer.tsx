import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d4af5a]/20 bg-[#080d17] px-6 py-12 text-center">
      <p className="font-display text-xl text-[#f4ecd8]">
        Every name carries a truth.
      </p>
      <p className="mt-1 font-body text-sm text-[#f4ecd8]/50">
        Every truth can reach the reader who needs it.
      </p>
      <div className="gold-divider mx-auto my-6 w-24" />
      <div className="flex flex-wrap justify-center gap-6 font-body text-xs uppercase tracking-[0.15em] text-[#f4ecd8]/60">
        <Link href="/book" className="hover:text-[#d4af5a]">The Book</Link>
        <Link href="/about" className="hover:text-[#d4af5a]">About Dinah</Link>
        <Link href="/ministry" className="hover:text-[#d4af5a]">I Know A Guy Ministries</Link>
        <Link href="/contact" className="hover:text-[#d4af5a]">Join the Launch List</Link>
      </div>
      <p className="mt-8 font-body text-xs text-[#f4ecd8]/30">
        &copy; {new Date().getFullYear()} Dinah Cochran. All proceeds support
        I Know A Guy Ministries, Inc.
      </p>
    </footer>
  );
}
