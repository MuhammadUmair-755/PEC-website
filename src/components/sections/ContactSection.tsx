'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { companyInfo } from '@/data/company'
import { WHATSAPP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { MapPin, Phone, Globe, MessageCircle, CheckCircle, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  company: z
    .string()
    .min(1, 'Company name is required'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\d{11}$/, 'Phone must be exactly 11 digits (e.g. 03212121221)'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email (e.g. example@gmail.com)'),
  projectType: z
    .string()
    .min(1, 'Please select a project type'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  'Road Construction',
  'Tuff Paver',
  'Drainage',
  'PCC Works',
  'Sewerage',
  'Earthwork',
  'Other',
]

function fieldBorderClass(hasError: boolean, isDirty: boolean, isValid: boolean | undefined) {
  if (hasError) return 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30'
  if (isDirty && isValid) return 'border-success focus-visible:border-success focus-visible:ring-success/30'
  return ''
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, touchedFields },
    reset,
    setValue,
    trigger,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      projectType: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericOnly = e.target.value.replace(/\D/g, '').slice(0, 11)
    setValue('phone', numericOnly, { shouldValidate: true, shouldDirty: true })
  }

  const isFieldValid = (field: keyof ContactFormData) =>
    (dirtyFields[field] || touchedFields[field]) && !errors[field]

  const isFieldError = (field: keyof ContactFormData) =>
    !!(errors[field] && (dirtyFields[field] || touchedFields[field]))

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

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-success/30 bg-success/5 p-12 text-center">
                <CheckCircle className="h-16 w-16 text-success" />
                <h3 className="mt-4 text-2xl font-bold text-brand">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-muted-text">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                {/* Name & Company */}
                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <Label htmlFor="name" className="text-sm font-semibold text-charcoal">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register('name')}
                      className={cn(
                        'h-11',
                        fieldBorderClass(
                          isFieldError('name'),
                          !!dirtyFields.name,
                          isFieldValid('name')
                        )
                      )}
                    />
                    {isFieldError('name') && (
                      <p className="text-[13px] font-medium text-red-500">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="company" className="text-sm font-semibold text-charcoal">
                      Company <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      {...register('company')}
                      className={cn(
                        'h-11',
                        fieldBorderClass(
                          isFieldError('company'),
                          !!dirtyFields.company,
                          isFieldValid('company')
                        )
                      )}
                    />
                    {isFieldError('company') && (
                      <p className="text-[13px] font-medium text-red-500">
                        {errors.company?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <Label htmlFor="phone" className="text-sm font-semibold text-charcoal">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="03212121221"
                      {...register('phone', { onChange: handlePhoneInput })}
                      className={cn(
                        'h-11',
                        fieldBorderClass(
                          isFieldError('phone'),
                          !!dirtyFields.phone,
                          isFieldValid('phone')
                        )
                      )}
                    />
                    {isFieldError('phone') && (
                      <p className="text-[13px] font-medium text-red-500">
                        {errors.phone?.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="email" className="text-sm font-semibold text-charcoal">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      {...register('email')}
                      onBlur={() => trigger('email')}
                      className={cn(
                        'h-11',
                        fieldBorderClass(
                          isFieldError('email'),
                          !!dirtyFields.email,
                          isFieldValid('email')
                        )
                      )}
                    />
                    {isFieldError('email') && (
                      <p className="text-[13px] font-medium text-red-500">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2.5">
                  <Label htmlFor="projectType" className="text-sm font-semibold text-charcoal">
                    Project Type <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className={cn(
                      'flex h-11 w-full rounded-lg border bg-transparent px-3 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                      isFieldError('projectType')
                        ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30'
                        : dirtyFields.projectType && isFieldValid('projectType')
                          ? 'border-success focus-visible:border-success focus-visible:ring-success/30'
                          : 'border-input'
                    )}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {isFieldError('projectType') && (
                    <p className="text-[13px] font-medium text-red-500">
                      {errors.projectType?.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2.5">
                  <Label htmlFor="message" className="text-sm font-semibold text-charcoal">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    {...register('message')}
                    className={cn(
                      fieldBorderClass(
                        isFieldError('message'),
                        !!dirtyFields.message,
                        isFieldValid('message')
                      )
                    )}
                  />
                  {isFieldError('message') && (
                    <p className="text-[13px] font-medium text-red-500">
                      {errors.message?.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !isValid}
                  className={cn(
                    'w-full px-10 text-base font-semibold text-white sm:w-auto',
                    isValid
                      ? 'bg-accent hover:bg-accent-hover'
                      : 'cursor-not-allowed bg-accent/50'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-border-light bg-surface p-6">
              <h3 className="mb-4 text-lg font-bold text-brand">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Address</p>
                    <p className="text-sm text-muted-text">
                      {companyInfo.address}, {companyInfo.city}, {companyInfo.country}
                    </p>
                  </div>
                </li>
                {companyInfo.phones.map((phone) => (
                  <li key={phone} className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Phone</p>
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-sm text-muted-text hover:text-accent"
                      >
                        {phone}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Operational Area</p>
                    <p className="text-sm text-muted-text">{companyInfo.operationalArea}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">WhatsApp</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-text hover:text-accent"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-border-light">
              <iframe
                title="PEC Office Location — Talagang, Punjab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53456.72!2d72.39!3d32.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b0e2a3e7f7f7%3A0x1234567890abcdef!2sTalagang%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="280"
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
