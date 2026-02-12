import { ShieldCheck, HeartHandshake, Users, Clock, Headset } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Scientific Accuracy",
    description:
      "Modern instrumentation, structured methodologies, and globally aligned standards for dependable results every time.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity at Every Step",
    description:
      "Honesty, transparency, and ethical disclosure. Each report reflects a commitment to building trust across the supply chain.",
  },
  {
    icon: Users,
    title: "Experienced Gemmologists",
    description:
      "Our team is trained in advanced techniques and continuously updates skills aligned with international practices.",
  },
  {
    icon: Clock,
    title: "Reliable & Timely",
    description:
      "Precise evaluations within committed timelines. We understand the pace of the trade without compromising quality.",
  },
  {
    icon: Headset,
    title: "Customer-Centric",
    description:
      "Personalised guidance and clear communication for jewellers, retailers, traders, and consumers at every stage.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-accent" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">
                Why TGEM
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Built on trust,
              <br />
              driven by <span className="italic font-normal">science</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              Every gemstone tells a story. We ensure that story is told with
              accuracy, transparency, and care.
            </p>
          </div>

          {/* Right: reasons list */}
          <div className="flex flex-col">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group flex gap-6 border-b border-border py-8 first:pt-0 last:border-b-0 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <reason.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
