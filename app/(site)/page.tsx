import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Marquee } from '@/components/ui/Marquee'
import {
  Hero,
  TrustBar,
  ValueProps,
  HowItWorks,
  Assortment,
  About,
  Stats,
  Testimonial,
  CTA,
} from '@/components/HomeSections'
import { client } from '@/sanity/lib/client'
import { homepageQuery, navigationQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import type { HomepageData, NavigationData, SiteSettingsData } from '@/lib/types'

export const revalidate = 60

async function getSanityData() {
  try {
    const [homepage, navigation, siteSettings] = await Promise.all([
      client.fetch<HomepageData>(homepageQuery),
      client.fetch<NavigationData>(navigationQuery),
      client.fetch<SiteSettingsData>(siteSettingsQuery),
    ])
    return { homepage, navigation, siteSettings }
  } catch (error) {
    console.error('Failed to fetch Sanity data:', error)
    return { homepage: null, navigation: null, siteSettings: null }
  }
}

export default async function Home() {
  const { homepage, navigation, siteSettings } = await getSanityData()

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans selection:bg-sage selection:text-white">
      <Header navLinks={navigation?.mainNav} ctaButton={navigation?.ctaButton} />

      <main className="flex-grow">
        <Hero data={homepage?.hero} />
        <Marquee
          items={homepage?.marqueeItems || ['Fulfillment', 'Dropshipping', 'Warehousing', 'Quality Control', 'Packaging']}
          speed={30}
        />
        <TrustBar data={homepage?.trustBar} />
        <ValueProps data={homepage?.valueProps} />
        <HowItWorks data={homepage?.howItWorks} />
        <Assortment data={homepage?.assortment} />
        <About data={homepage?.about} />
        <Stats data={homepage?.stats} />
        <Testimonial data={homepage?.featuredTestimonial} />
        <CTA data={homepage?.cta} />
      </main>

      <Footer data={siteSettings?.footer} />
    </div>
  )
}
