import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
  variable: '--font-heading',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pyramid Engineering and Construction | Road & Civil Works Punjab',
    template: '%s | Pyramid Engineering and Construction',
  },
  description:
    'PEC licensed civil and road construction company based in Talagang, Punjab. Specializing in road construction, tuff paver, drainage, and infrastructure development.',
  keywords: [
    'construction company talagang',
    'road construction punjab pakistan',
    'civil works contractor',
    'PEC licensed contractor',
    'tuff paver installation',
    'drainage construction pakistan',
    'sewerage construction khushab',
    'pyramid engineering',
  ],
  openGraph: {
    title: 'Pyramid Engineering and Construction',
    description: 'Where Strength Meets Engineering — Professional road and civil construction across Punjab, Pakistan.',
    images: ['/assets/images/Khushab 1.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
      </body>
    </html>
  )
}
