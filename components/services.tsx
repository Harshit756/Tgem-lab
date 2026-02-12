import { Search, Globe, FlaskConical, Gem, GraduationCap } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Gemstone Identification",
    description:
      "Precise identification of natural, treated, and synthetic gemstones using advanced gemmological instruments and globally accepted testing standards.",
  },
  {
    icon: Globe,
    title: "Origin Assessment",
    description:
      "Specialised testing to evaluate geological indicators that may suggest a gemstone's potential origin with comparative reference data.",
  },
  {
    icon: FlaskConical,
    title: "Treatment Detection",
    description:
      "Accurate analysis of heating, filling, diffusion, irradiation, dyeing, and other enhancement processes with complete transparency.",
  },
  {
    icon: Gem,
    title: "Jewellery Certification",
    description:
      "Comprehensive evaluation of mounted gemstones and finished jewellery, including identification, quality grading, and documentation.",
  },
  {
    icon: GraduationCap,
    title: "Workshops & Training",
    description:
      "Skill-building programs for jewellers, traders, students, and enthusiasts in gem identification, grading, and industry best practices.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-28 md:py-36 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-accent" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[hsl(40,55%,65%)]">
              What We Offer
            </p>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/60 leading-relaxed">
            From identification to education, a complete suite of gemmological
            services backed by science and integrity.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-primary p-10 transition-all hover:bg-[hsl(170,55%,15%)]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-primary-foreground/20 text-[hsl(40,55%,65%)] transition-colors group-hover:border-accent group-hover:bg-accent/10">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/55">
                {service.description}
              </p>
              <div className="mt-6 h-px w-8 bg-accent/40 transition-all group-hover:w-16 group-hover:bg-accent" />
            </div>
          ))}

          {/* Empty cell for visual balance */}
          <div className="hidden lg:block bg-primary p-10">
            <div className="flex h-full items-center justify-center">
              <p className="font-serif text-2xl italic text-primary-foreground/20 text-center">
                {"Precision isn't just a process"}
                <br />
                {"it's our promise."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
