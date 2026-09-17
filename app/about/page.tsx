import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="grain mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[380px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-sm overflow-hidden border border-[#b8862f]/30">
          <Image
            src="https://g.tlcdn.com/gen/84d7a2488e2d4e12a726638665e80086.png"
            alt="Portrait of Dinah Cochran"
            width={1024}
            height={1536}
            className="w-full"
          />
        </div>

        <div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
            About the Author
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#17203a]">
            Dinah Cochran
          </h1>
          <p className="mt-2 font-display text-xl italic text-[#b8862f]">
            &ldquo;Remember my name &mdash; I&apos;m Dinah-Might!&rdquo;
          </p>

          <p className="mt-8 font-body text-lg leading-relaxed text-[#17203a]/85">
            Dinah Cochran is a woman committed to sharing the Gospel of Jesus
            Christ with anyone who has an ear to hear. She is passionate
            about others knowing God &mdash; not just knowing about Him, but
            encountering Him personally, in the middle of real life.
          </p>
          <p className="mt-5 font-body leading-relaxed text-[#17203a]/75">
            As a wife, mother, grandmother, and combat veteran, she has
            walked through her share of trials &mdash; and along the way,
            she discovered something that reshaped her faith: God has a way
            of using every one of those trials to help someone else. That
            conviction became the seed of ROLL CALL! &mdash; a 31-day
            journey through the names of God, written not as a theology
            lesson, but as an invitation to actually meet Him.
          </p>
          <p className="mt-5 font-body leading-relaxed text-[#17203a]/75">
            Dinah co-leads I Know A Guy Ministries, Inc. with her husband
            TC, a faith-based nonprofit dedicated to restoration,
            community, and purposeful service &mdash; proof that her
            message doesn&apos;t stay on the page.
          </p>

          <div className="mt-12 gold-divider" />

          <blockquote className="mt-12 font-display text-3xl italic leading-snug text-[#17203a]">
            &ldquo;Come as you are. He already knows your name &mdash; and
            He&apos;s calling you by His.&rdquo;
          </blockquote>
        </div>
      </div>
    </main>
  );
}
