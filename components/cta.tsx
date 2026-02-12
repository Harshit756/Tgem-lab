import Image from "next/image"

export function CTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-gemstones.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(170,55%,8%)]/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-8 h-px w-16 bg-[hsl(40,55%,55%)]" />
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
          Ready to certify
          <br />
          your <span className="italic font-normal text-[hsl(40,55%,70%)]">gemstones</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/60 leading-relaxed">
          Whether you are a jeweller, trader, or collector, our team provides
          the trusted certification you need. Reach out today.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex bg-[hsl(40,55%,55%)] px-12 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-[hsl(170,55%,8%)] transition-all hover:bg-[hsl(40,55%,60%)]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
