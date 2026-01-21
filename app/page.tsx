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

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans selection:bg-sage selection:text-white">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Marquee
          items={['Fulfillment', 'Dropshipping', 'Warehousing', 'Quality Control', 'Packaging']}
          speed={30}
        />
        <TrustBar />
        <ValueProps />
        <HowItWorks />
        <Assortment />
        <About />
        <Stats />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
