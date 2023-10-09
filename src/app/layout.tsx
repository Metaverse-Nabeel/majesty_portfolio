import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Majesty Portfolio',
  description: 'Personal Portfolio website for design, art and photos. It is a landing page. It contains contact, bolgs and projects sections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
