import { Mail, Phone, MapPin } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Report Types", href: "#reports" },
]

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 py-20 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-primary-foreground/30">
                <span className="font-serif text-lg font-bold leading-none text-primary-foreground">
                  T
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wide leading-tight">
                  TGEM
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] leading-tight text-primary-foreground/50">
                  Stones Laboratory Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              Committed to bringing accuracy, integrity, and industry-leading
              expertise to every gemstone we examine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/40">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-[hsl(40,55%,65%)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/40">
              Contact Us
            </h4>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary-foreground/5">
                  <Mail className="h-4 w-4 text-[hsl(40,55%,65%)]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/40">
                    Email
                  </p>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">
                    info@tgemlab.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary-foreground/5">
                  <Phone className="h-4 w-4 text-[hsl(40,55%,65%)]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/40">
                    Phone
                  </p>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary-foreground/5">
                  <MapPin className="h-4 w-4 text-[hsl(40,55%,65%)]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/40">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">
                    Ambabari, Jaipur, Rajasthan, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-primary-foreground/35 tracking-wide">
            &copy; {new Date().getFullYear()} TGEM Stones Laboratory Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[11px] italic text-primary-foreground/25 tracking-wide">
            {"Precision isn't just a process \u2014 it's our promise."}
          </p>
        </div>
      </div>
    </footer>
  )
}
