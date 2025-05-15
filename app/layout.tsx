import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sagar Pise | Product Manager',
    template: '%s | Sagar Pise'
  },
  description: 'Product Manager portfolio showcasing experience in digital transformation and product development',
  keywords: ['Product Manager', 'Digital Transformation', 'IoT', 'Portfolio', 'Product Development'],
  authors: [{ name: 'Sagar Pise' }],
  creator: 'Sagar Pise',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagarpise.com',
    title: 'Sagar Pise | Product Manager',
    description: 'Product Manager portfolio showcasing experience in digital transformation and product development',
    siteName: 'Sagar Pise Portfolio'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text-primary`}>
        {children}
      </body>
    </html>
  )
} 