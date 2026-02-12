import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-gemstones.jpg"
        alt="Assorted precious gemstones on dark velvet"
        fill
        className="object-cover scale-105"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(170,55%,8%)]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-8 h-px w-16 bg-[hsl(40,55%,55%)]" />

        <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.4em] text-[hsl(40,55%,65%)]">
          Precision in Every Gemstone
        </p>

        <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          TGEM Stones
          <br />
          <span className="italic font-normal text-[hsl(40,55%,70%)]">Laboratory</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          A trusted name in scientific gemstone testing and transparent
          certification. Accuracy, integrity, and industry-leading expertise
          in every gemstone we examine.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="inline-flex bg-[hsl(40,55%,55%)] px-10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-[hsl(170,55%,8%)] transition-all hover:bg-[hsl(40,55%,60%)]"
          >
            Explore Services
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-white border border-white/20 transition-all hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
