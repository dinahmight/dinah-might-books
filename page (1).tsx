import Image from "next/image";
import { Check } from "lucide-react";
import { WhereToBuy } from "@/components/where-to-buy";

const names = [
  "Jehovah Jireh", "Jehovah Rapha", "Jehovah Shalom", "Jehovah Nissi",
  "Jehovah Rohi", "El Shaddai", "El Elyon", "El Olam",
  "Jehovah Tsuri", "Jehovah Hashopet", "El Deah", "Immanuel",
  "El Chay", "El Hane'eman", "Jehovah Tsidkenu", "El Sabaoth",
];

export default function BookPage() {
  return (
    <main className="grain mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
        <div className="mx-auto w-full max-w-sm md:sticky md:top-28">
          <div className="border border-[#d4af5a]/30 p-3">
            <Image
              src="https://g.tlcdn.com/gen/81291e0fd3ef4f1793858bfcc6b8cb17.png"
              alt="ROLL CALL! book cover"
              width={800}
              height={1200}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-[#d4af5a]">
            The Book
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#f4ecd8]">
            ROLL CALL!
          </h1>
          <p className="mt-2 font-display text-xl italic text-[#f4ecd8]/70">
            A 31-Day Gratitude Journey Through the Names of God
          </p>

          <p className="mt-8 font-body leading-relaxed text-[#f4ecd8]/75">
            Have you ever needed God to be more than a name on a church
            banner? ROLL CALL! is a 31-day devotional journey through the
            covenant names of God &mdash; Jehovah Jireh, El Chay, Jehovah
            Tsidkenu, and more &mdash; paired with modern-day stories of
            provision, identity, grief, and grace.
          </p>
          <p className="mt-4 font-body leading-relaxed text-[#f4ecd8]/75">
            Each day includes Scripture, biblical and modern-day
            illustrations, honest reflection, a Signature Gratitude Prayer,
            and journal prompts &mdash; designed for personal devotion,
            men&apos;s and women&apos;s study, new-believer discipleship, or
            group discussion. This isn&apos;t a book about who God
            <em> was</em>. It&apos;s 31 days with the God who still
            <em> is</em>.
          </p>

          <div className="mt-10 gold-divider" />

          <h2 className="mt-10 font-display text-2xl text-[#f4ecd8]">
            Six Ways to Engage
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Daily Devotion",
              "Journaling",
              "Meditation",
              "In-Depth Study",
              "Declarations",
              "Group Discussion",
            ].map((w) => (
              <li key={w} className="flex items-center gap-2 font-body text-sm text-[#f4ecd8]/70">
                <Check className="h-4 w-4 shrink-0 text-gold" /> {w}
              </li>
            ))}
          </ul>

          <div className="mt-10 gold-divider" />

          <h2 className="mt-10 font-display text-2xl text-[#f4ecd8]">
            31 Names, 31 Days
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {names.map((n) => (
              <span
                key={n}
                className="border border-[#d4af5a]/25 px-3 py-1 font-body text-xs uppercase tracking-wide text-[#f4ecd8]/60"
              >
                {n}
              </span>
            ))}
            <span className="border border-[#d4af5a]/25 px-3 py-1 font-body text-xs uppercase tracking-wide text-[#f4ecd8]/40">
              +15 more inside
            </span>
          </div>

          <div className="mt-14 border border-[#d4af5a]/30 bg-[#0e1729]/60 p-8">
            <WhereToBuy />
          </div>
        </div>
      </div>
    </main>
  );
}
