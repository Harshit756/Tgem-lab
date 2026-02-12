import { FileText, BarChart3, Eye, MapPin, Gem } from "lucide-react"

const reports = [
  {
    icon: FileText,
    title: "Gemstone Identification Report",
    description:
      "A detailed scientific assessment confirming natural, synthetic, or imitation status, along with species, variety, and key characteristics.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Gemstone Grading Report",
    description:
      "Evaluation of colour, clarity, cut, and carat weight designed for both loose stones and mounted jewellery.",
    number: "02",
  },
  {
    icon: Eye,
    title: "Treatment Disclosure Report",
    description:
      "Clear documentation of any enhancements detected, helping buyers make informed, responsible choices.",
    number: "03",
  },
  {
    icon: MapPin,
    title: "Origin Opinion Report",
    description:
      "Provided only when sufficient gemmological evidence supports a potential origin conclusion.",
    number: "04",
  },
  {
    icon: Gem,
    title: "Jewellery Report",
    description:
      "Complete assessment of finished jewellery items, including stone identification, grading, and craftsmanship notes.",
    number: "05",
  },
]

export function Reports() {
  return (
    <section id="reports" className="scroll-mt-20 py-28 md:py-36 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-accent" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">
              Documentation
            </p>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Report Types
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Each report is crafted with scientific rigour and presented with
            clarity for all stakeholders in the gemstone industry.
          </p>
        </div>

        {/* Report cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <div
              key={report.title}
              className="group relative bg-card p-8 border border-border transition-all hover:border-accent/50 hover:shadow-lg"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-serif text-4xl font-bold text-foreground/5 group-hover:text-accent/15 transition-colors">
                {report.number}
              </span>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center text-accent">
                <report.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground pr-8">
                {report.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {report.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex items-center justify-center bg-primary p-8 text-center">
            <div>
              <p className="font-serif text-xl font-bold text-primary-foreground">
                Need a custom report?
              </p>
              <p className="mt-2 text-sm text-primary-foreground/60">
                Contact us for specialized requirements
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex bg-accent px-8 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-foreground transition-all hover:bg-accent/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
