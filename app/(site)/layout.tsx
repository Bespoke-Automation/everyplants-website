import type { Metadata } from 'next'
import { Inter, Archivo } from 'next/font/google'
import { client } from '@/sanity/lib/client'
import { homepageQuery } from '@/sanity/lib/queries'

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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch(homepageQuery)
    return {
      title: data?.seo?.metaTitle || 'EveryPlants | Fulfillment Partners',
      description:
        data?.seo?.metaDescription ||
        'B2B Plant Fulfillment - De logistieke ruggengraat voor jouw plantenwebshop.',
    }
  } catch {
    return {
      title: 'EveryPlants | Fulfillment Partners',
      description: 'B2B Plant Fulfillment - De logistieke ruggengraat voor jouw plantenwebshop.',
    }
  }
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${archivo.variable} font-sans`}>{children}</div>
}
