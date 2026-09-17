import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#b8862f]/25 bg-[#f1e8d2] px-6 py-12 text-center">
      <p className="font-display text-xl text-[#17203a]">
        Every name carries a truth.
      </p>
      <p className="mt-1 font-body text-sm text-[#17203a]/60">
        Every truth can reach the reader who needs it.
      </p>
      <div className="gold-divider mx-auto my-6 w-24" />
      <div className="flex flex-wrap justify-center gap-6 font-body text-xs uppercase tracking-[0.15em] text-[#17203a]/65">
        <Link href="/book" className="hover:text-[#b8862f]">The Book</Link>
        <Link href="/about" className="hover:text-[#b8862f]">About Dinah</Link>
        <Link href="/ministry" className="hover:text-[#b8862f]">I Know A Guy Ministries</Link>
        <Link href="/contact" className="hover:text-[#b8862f]">Join the Launch List</Link>
      </div>
      <p className="mt-8 font-body text-xs text-[#17203a]/40">
        &copy; {new Date().getFullYear()} Dinah Cochran. All proceeds support
        I Know A Guy Ministries, Inc.
      </p>
    </footer>
  );
}
