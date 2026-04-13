import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/data/company'
import { services } from '@/data/services'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/images/pec-logo.png"
                alt="PEC Logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">Pyramid</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {companyInfo.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Professional road and civil construction company delivering
              high-quality infrastructure solutions across Punjab, Pakistan.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-white/60">
                  {companyInfo.address}, {companyInfo.city}, {companyInfo.country}
                </span>
              </li>
              {companyInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Pyramid Engineering and Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span>PEC License: {companyInfo.pecLicense}</span>
              <span className="hidden sm:inline">|</span>
              <span>NTN: {companyInfo.ntn}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
