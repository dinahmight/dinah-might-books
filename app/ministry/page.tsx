import Image from "next/image";

export default function MinistryPage() {
  return (
    <main className="grain">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://g.tlcdn.com/gen/cc2cdda7c14c4183962f610c71587d34.png"
            alt="Community sharing a meal in warm light"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0b1220]/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <Image
            src="https://g.tlcdn.com/view/136b35364ec240348359099563c0dd72.jpg"
            alt="I Know A Guy Ministries, Inc. logo"
            width={110}
            height={110}
            className="mx-auto rounded-full bg-[#f4ecd8] p-2"
          />
          <h1 className="mt-8 font-display text-5xl text-[#f4ecd8]">
            I Know A Guy Ministries, Inc.
          </h1>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.3em] text-[#d4af5a]">
            Faith &middot; Community &middot; Service
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-3xl italic leading-snug text-[#f4ecd8]">
          &ldquo;No past mistake defines a person&apos;s worth or
          future.&rdquo;
        </p>
        <p className="mt-8 font-body leading-relaxed text-[#f4ecd8]/70">
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

        <h2 className="font-display text-2xl text-[#f4ecd8]">
          How ROLL CALL! Connects
        </h2>
        <p className="mt-5 font-body leading-relaxed text-[#f4ecd8]/70">
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
          className="mt-10 inline-flex items-center gap-2 border border-[#d4af5a]/40 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#d4af5a] transition-colors hover:bg-[#d4af5a] hover:text-[#0b1220]"
        >
          Visit I Know A Guy Ministries
        </a>
      </section>
    </main>
  );
}
