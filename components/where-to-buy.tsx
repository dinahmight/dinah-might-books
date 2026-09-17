import { ExternalLink, Clock } from "lucide-react";
import { retailerLinks } from "@/lib/retailer-links";

export function WhereToBuy() {
  return (
    <div>
      <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
        Where to Buy
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {retailerLinks.map((r) =>
          r.url ? (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#b8862f]/40 px-6 py-3 font-body text-sm text-[#17203a] transition-colors hover:bg-[#b8862f] hover:text-white"
            >
              {r.name} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span
              key={r.name}
              className="inline-flex cursor-not-allowed items-center gap-2 border border-[#17203a]/15 px-6 py-3 font-body text-sm text-[#17203a]/40"
              title="Link goes live at launch"
            >
              {r.name} <Clock className="h-3.5 w-3.5" />
            </span>
          )
        )}
      </div>
      <p className="mt-3 font-body text-xs text-[#17203a]/45">
        Retailer links go live October 1, 2026. Buttons activate the moment
        each one is added.
      </p>
    </div>
  );
}
