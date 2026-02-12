import Image from "next/image"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-accent" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">
                About TGEM
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Where precision
              <br />
              meets <span className="italic font-normal">promise</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At TGEM, each gemstone undergoes a meticulous evaluation
                supported by advanced instruments, global standards, and highly
                trained gemmologists. Our goal is to empower jewellers, traders,
                and end-consumers with reports that inspire confidence and uphold
                ethical practices across the value chain.
              </p>
              <p>
                With a focus on continuous innovation, reliable methodologies,
                and educational outreach, TGEM stands as a forward-thinking
                laboratory dedicated to strengthening trust in the gems and
                jewellery industry.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex gap-10 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">5+</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Services</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">100%</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Transparency</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">Global</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Standards</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/gemstone-lab.jpg"
                alt="Gemmologist examining a gemstone through a microscope"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative border offset */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-accent/30 -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
