import Image from "next/image";

export default function MinistryPage() {
  return (
    <main className="grain">
      {/* Hero — full-quality image, lighter overlay for readability */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://g.tlcdn.com/gen/cc2cdda7c14c4183962f610c71587d34.png"
            alt="Community sharing a meal in warm light"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0b1220]/40" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <Image
            src="https://g.tlcdn.com/view/136b35364ec240348359099563c0dd72.jpg"
            alt="I Know A Guy Ministries, Inc. logo"
            width={110}
            height={110}
            className="mx-auto rounded-full bg-[#f4ecd8] p-2"
          />
          <h1 className="mt-8 font-display text-5xl text-[#f4ecd8] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            I Know A Guy Ministries, Inc.
          </h1>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.3em] text-[#d4af5a] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Faith &middot; Community &middot; Service
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-3xl italic leading-snug text-[#17203a]">
          &ldquo;No past mistake defines a person&apos;s worth or
          future.&rdquo;
        </p>
        <p className="mt-8 font-body leading-relaxed text-[#17203a]/75">
          At the heart of our mission is a belief that no past mistake
          defines a person&apos;s worth or future. Through faith, community,
          and service, we walk alongside individuals on their journey
          toward hope, healing, and independence. We are dedicated to
          providing not just shelter and support, but restoration &mdash;
          helping each person discover their God-given potential and step
          confidently into a new chapter where faith rebuilds, community
          strengthens, and love transforms lives.
        </p>

        <div className="my-14 gold-divider" />

        <h2 className="font-display text-2xl text-[#17203a]">
          How ROLL CALL! Connects
        </h2>
        <p className="mt-5 font-body leading-relaxed text-[#17203a]/75">
          ROLL CALL! isn&apos;t just a devotional &mdash; it&apos;s an
          invitation to experience God up close and personal. Every
          proceed from the book funds the same restoration work Dinah and
          TC lead through the ministry: walking people from &ldquo;who I
          was&rdquo; into who God says they are. Buying the book supports
          the ministry directly.
        </p>

        <a
          href="https://www.iknowaguyministries.org"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 border border-[#b8862f]/40 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#b8862f] transition-colors hover:bg-[#b8862f] hover:text-white"
        >
          Visit I Know A Guy Ministries
        </a>
      </section>
    </main>
  );
}
