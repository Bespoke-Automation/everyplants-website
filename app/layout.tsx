import type { Metadata } from 'next'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'EveryPlants | Fulfillment Partners',
  description: 'B2B Plant Fulfillment - De logistieke ruggengraat voor jouw plantenwebshop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${archivo.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
