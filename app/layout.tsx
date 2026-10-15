import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Work_Sans } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' })

export const metadata: Metadata = {
  title: 'Tigershark Coffee | Specialty Coffee in Scheveningen',
  description:
    'Specialty espresso bar on Badhuisstraat 114 in Scheveningen, Den Haag. Great coffee, toasties, cakes and pastéis de nata — a few steps from the beach.',
  icons: {
    icon: '/images/tiger-emblem.jpg',
    apple: '/images/tiger-emblem.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f6f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${anton.variable} ${workSans.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
