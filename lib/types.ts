export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface NavLink {
  text: string
  href: string
  isExternal?: boolean
}

export interface SocialLink {
  platform: 'linkedin' | 'instagram' | 'twitter' | 'facebook'
  url: string
}

export interface HeroSection {
  badge: string
  headlineLines: string[]
  highlightedLine: string
  tagline: string
  ctaText: string
  ctaLink: string
  heroImage: SanityImage
  heroImageAlt?: string
  imageCaption: string
  badgeText: string
}

export interface Partner {
  _id: string
  name: string
  logo?: SanityImage
  website?: string
}

export interface TrustBarData {
  label: string
  partners: Partner[]
}

export interface ValueProp {
  icon: string
  title: string
  subtitle: string
  description: string
  image: SanityImage
}

export interface ValuePropsData {
  title: string
  subtitle: string
  items: ValueProp[]
  instructionText?: string
  ctaText?: string
}

export interface WorkflowStep {
  number: string
  title: string
  description: string
  image: SanityImage
}

export interface HowItWorksData {
  title: string
  subtitle: string
  steps: WorkflowStep[]
}

export interface ProductCategory {
  name: string
  image: SanityImage
  height: string
}

export interface AssortmentData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  categories: ProductCategory[]
}

export interface AboutData {
  label: string
  title: string
  description: string
  image: SanityImage
  imageAlt?: string
  imageBadge: { value: string; label: string }
  features: Array<{ title: string; description: string }>
  linkText: string
  linkHref: string
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  authorName: string
  authorTitle?: string
  authorCompany?: string
  authorImage?: SanityImage
}

export interface CTAData {
  title: string
  subtitle: string
  primaryButton: { text: string; href: string }
  secondaryButton: { text: string; href: string }
}

export interface FooterData {
  address: string
  phone: string
  email: string
  certifications: string[]
  socialLinks: SocialLink[]
  sitemapLabel?: string
  sitemapLinks: NavLink[]
  legalLabel?: string
  legalLinks: NavLink[]
  contactLabel?: string
  copyrightText: string
  locationTag: string
}

export interface HomepageData {
  hero: HeroSection
  marqueeItems: string[]
  trustBar: TrustBarData
  valueProps: ValuePropsData
  howItWorks: HowItWorksData
  assortment: AssortmentData
  about: AboutData
  stats: Stat[]
  featuredTestimonial: Testimonial
  cta: CTAData
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage?: SanityImage
  }
}

export interface NavigationData {
  mainNav: NavLink[]
  ctaButton: { text: string; href: string }
}

export interface SiteSettingsData {
  siteName: string
  siteTagline: string
  logo: SanityImage
  logoAlt?: string
  footer: FooterData
}
