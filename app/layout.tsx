import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Toycycle B2B - Certified Partner Market',
  description: 'A Brand-Approved Secondary Channel for Professional B-Stock',
  icons: {
    icon: '/images/partners/toycycle_logo.webp',
    shortcut: '/images/partners/toycycle_logo.webp',
    apple: '/images/partners/toycycle_logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

