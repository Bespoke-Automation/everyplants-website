import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: '.env.local' })

const client = createClient({
  projectId: 'honhpkms',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// Content based on Everyplants presentation
const homepageContent = {
  _type: 'homepage',
  _id: 'homepage',
  hero: {
    badge: 'B2B Plantengroothandel',
    headlineLines: ['Everyplants', 'Kwekerij & Fulfilment'],
    highlightedLine: 'voor de groene sector',
    tagline: 'Moderne kwekerij en handelsbedrijf met breed assortiment. Gespecialiseerd in het fijnmazige met E-fulfilment en logistieke dienstverlening.',
    ctaText: 'Neem contact op',
    ctaLink: '#contact',
    heroImageAlt: 'Everyplants kwekerij',
    imageCaption: 'Westland, Nederland',
    badgeText: 'Kwaliteit • Service • Betrouwbaar',
  },
  marqueeItems: [
    'Kamerplanten',
    'Mediterrane Planten',
    'Kunstplanten',
    'Kunstbloemen',
    'Potten',
    'E-Fulfilment',
    'B2B Groothandel',
    'Logistiek',
  ],
  trustBar: {
    label: 'Onze Partners',
  },
  valueProps: {
    title: 'Wat wij doen',
    subtitle: 'Van kweken tot levering, wij regelen het allemaal',
    items: [
      {
        _key: 'vp1',
        icon: 'Leaf',
        title: 'Groothandel',
        subtitle: 'Kweken & Verhandelen',
        description: 'Wij kweken en verhandelen een breed assortiment planten. Van kamerplanten tot mediterrane planten, altijd de beste kwaliteit.',
      },
      {
        _key: 'vp2',
        icon: 'Package',
        title: 'Assortiment',
        subtitle: 'Planten, Potten & Kunstplanten',
        description: 'Naast echte planten bieden wij ook kunstplanten, kunstbloemen en decoratieve potten aan. Alles voor een compleet aanbod.',
      },
      {
        _key: 'vp3',
        icon: 'Truck',
        title: 'E-Fulfilment',
        subtitle: 'Logistieke Dienstverlening',
        description: 'Complete logistieke oplossingen met Picqer integratie. Picking, packing en verzending - speciaal maatwerk voor uw klanten.',
      },
    ],
    instructionText: 'Klik om meer te ontdekken',
    ctaText: 'Bekijk diensten',
  },
  howItWorks: {
    title: 'Ons Proces',
    subtitle: 'Van bestelling tot levering',
    steps: [
      {
        _key: 'step1',
        number: '01',
        title: 'Bestelling',
        description: 'Plaats uw bestelling via Floriday, direct contact of onze partners.',
      },
      {
        _key: 'step2',
        number: '02',
        title: 'Picking',
        description: 'Onze medewerkers verzamelen uw bestelling met ons Picqer WMS systeem.',
      },
      {
        _key: 'step3',
        number: '03',
        title: 'Packing',
        description: 'Zorgvuldige verpakking met aandacht voor kwaliteit en presentatie.',
      },
      {
        _key: 'step4',
        number: '04',
        title: 'Levering',
        description: 'Betrouwbare levering via onze logistieke partners of eigen transport.',
      },
    ],
  },
  assortment: {
    title: 'Ons Assortiment',
    description: 'Een breed scala aan planten en aanverwante producten voor elke behoefte.',
    ctaText: 'Bekijk op Floriday',
    ctaLink: 'https://www.floriday.io',
    categories: [
      { _key: 'cat1', name: 'Kamerplanten', height: 'h-80 md:h-[500px]' },
      { _key: 'cat2', name: 'Mediterrane Planten', height: 'h-64 md:h-80' },
      { _key: 'cat3', name: 'Kunstplanten', height: 'h-64 md:h-80' },
      { _key: 'cat4', name: 'Kunstbloemen', height: 'h-64 md:h-80' },
      { _key: 'cat5', name: 'Potten', height: 'h-80 md:h-[500px]' },
    ],
  },
  about: {
    label: 'Over Ons',
    title: 'Moderne locatie van 5 hectare',
    description: 'Onze locatie in het Westland is efficiënt ingericht met geautomatiseerde systemen en duurzame oplossingen. We combineren traditioneel vakmanschap met moderne technologie voor de beste resultaten.',
    imageAlt: 'Everyplants locatie',
    imageBadge: {
      value: '5',
      label: 'Hectare',
    },
    features: [
      { _key: 'feat1', title: 'Geautomatiseerd', description: 'Moderne systemen voor efficiënte verwerking' },
      { _key: 'feat2', title: 'Duurzaam', description: 'Focus op duurzame oplossingen en processen' },
      { _key: 'feat3', title: 'Efficiënt', description: 'Slimme inrichting voor optimale logistiek' },
    ],
    linkText: 'Meer over ons',
    linkHref: '#contact',
  },
  stats: [
    { _key: 'stat1', value: '5', label: 'Hectare locatie' },
    { _key: 'stat2', value: '1000+', label: 'Plantensoorten' },
    { _key: 'stat3', value: '3', label: 'Certificeringen' },
  ],
  cta: {
    title: 'Klaar om samen te werken?',
    subtitle: 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden.',
    primaryButton: {
      text: 'Neem contact op',
      href: '#contact',
    },
    secondaryButton: {
      text: 'Bekijk assortiment',
      href: '#assortiment',
    },
  },
  seo: {
    metaTitle: 'Everyplants | B2B Plantengroothandel & E-Fulfilment',
    metaDescription: 'Moderne kwekerij en handelsbedrijf voor planten. Groothandel, E-fulfilment en logistieke dienstverlening vanuit het Westland.',
  },
}

const siteSettingsContent = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  siteName: 'Everyplants',
  siteTagline: 'Kwekerij & Fulfilment voor de groene sector',
  logoAlt: 'Everyplants logo',
  footer: {
    certifications: ['GLOBALG.A.P.', 'MPS ABC', 'GRASP'],
    sitemapLabel: 'Navigatie',
    sitemapLinks: [
      { _key: 'nav1', text: 'Home', href: '/' },
      { _key: 'nav2', text: 'Diensten', href: '#diensten' },
      { _key: 'nav3', text: 'Assortiment', href: '#assortiment' },
      { _key: 'nav4', text: 'Over Ons', href: '#over-ons' },
      { _key: 'nav5', text: 'Contact', href: '#contact' },
    ],
    legalLabel: 'Legal',
    legalLinks: [
      { _key: 'leg1', text: 'Privacy', href: '/privacy' },
      { _key: 'leg2', text: 'Voorwaarden', href: '/voorwaarden' },
    ],
    contactLabel: 'Contact',
    copyrightText: '© 2025 Everyplants. Alle rechten voorbehouden.',
    locationTag: 'Westland, Nederland',
  },
  seo: {
    metaTitle: 'Everyplants | B2B Plantengroothandel',
    metaDescription: 'Moderne kwekerij en handelsbedrijf voor planten in het Westland.',
  },
}

const navigationContent = {
  _type: 'navigation',
  _id: 'navigation',
  mainNav: [
    { _key: 'mn1', text: 'Diensten', href: '#diensten' },
    { _key: 'mn2', text: 'Assortiment', href: '#assortiment' },
    { _key: 'mn3', text: 'Over Ons', href: '#over-ons' },
  ],
  ctaButton: {
    text: 'Contact',
    href: '#contact',
  },
}

async function updateContent() {
  console.log('Starting Sanity content update...\n')

  try {
    // Update Homepage
    console.log('Updating Homepage...')
    await client.createOrReplace(homepageContent)
    console.log('✓ Homepage updated\n')

    // Update Site Settings
    console.log('Updating Site Settings...')
    await client.createOrReplace(siteSettingsContent)
    console.log('✓ Site Settings updated\n')

    // Update Navigation
    console.log('Updating Navigation...')
    await client.createOrReplace(navigationContent)
    console.log('✓ Navigation updated\n')

    // Create Partner documents
    console.log('Creating Partner documents...')

    const partners = [
      {
        _type: 'partner',
        _id: 'partner-greenbubble',
        name: 'Green Bubble',
        website: 'https://greenbubble.nl',
      },
      {
        _type: 'partner',
        _id: 'partner-chicplants',
        name: 'ChicPlants',
        website: 'https://chicplants.com',
      },
      {
        _type: 'partner',
        _id: 'partner-floraholland',
        name: 'Royal Flora Holland',
        website: 'https://www.royalfloraholland.com',
      },
    ]

    for (const partner of partners) {
      await client.createOrReplace(partner)
      console.log(`✓ Partner "${partner.name}" created`)
    }

    // Update homepage with partner references
    console.log('\nLinking partners to homepage...')
    await client.patch('homepage')
      .set({
        'trustBar.partners': partners.map(p => ({
          _type: 'reference',
          _ref: p._id,
          _key: p._id,
        }))
      })
      .commit()
    console.log('✓ Partners linked to homepage\n')

    console.log('='.repeat(50))
    console.log('Content update complete!')
    console.log('='.repeat(50))
    console.log('\nNote: Images need to be uploaded manually via Sanity Studio')
    console.log('or using a separate image upload script.')

  } catch (error) {
    console.error('Error updating content:', error)
    process.exit(1)
  }
}

updateContent()
