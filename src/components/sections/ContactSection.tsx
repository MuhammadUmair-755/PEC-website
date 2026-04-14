'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { companyInfo } from '@/data/company'
import { WHATSAPP_URL } from '@/lib/constants'
import { MapPin, Phone, MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Get In Touch"
            title="Contact Us"
            highlight="Contact"
            subtitle="Have a project in mind? Reach out and let's discuss how we can help."
            centered
          />
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Phone numbers */}
          <motion.div
            className="group rounded-2xl border border-border-light bg-surface p-8 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Phone className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand">Telephone</h3>
            <p className="mt-2 text-sm text-muted-text">
              Call us during business hours for inquiries and project discussions.
            </p>
            <div className="mt-6 space-y-3">
              {companyInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-charcoal transition-colors hover:bg-accent/5 hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span className="font-medium">{phone}</span>
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-charcoal transition-colors hover:bg-green-50 hover:text-green-600"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-green-600" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Head Office */}
          <motion.div
            className="group rounded-2xl border border-border-light bg-surface p-8 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10">
              <MapPin className="h-7 w-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-brand">Head Office</h3>
            <p className="mt-2 text-sm text-muted-text">
              Visit us at our head office for in-person meetings and consultations.
            </p>
            <div className="mt-6 rounded-lg bg-white px-4 py-3">
              <p className="font-medium text-charcoal">
                {companyInfo.address}
              </p>
              <p className="mt-1 text-sm text-muted-text">
                {companyInfo.city}, {companyInfo.country}
              </p>
            </div>

            {/* Map */}
            <div className="mt-4 overflow-hidden rounded-lg border border-border-light">
              <iframe
                title="PEC Office Location — Talagang, Punjab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53456.72!2d72.39!3d32.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b0e2a3e7f7f7%3A0x1234567890abcdef!2sTalagang%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
