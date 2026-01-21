import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    hero {
      badge,
      headlineLines,
      highlightedLine,
      tagline,
      ctaText,
      ctaLink,
      heroImage,
      imageCaption,
      badgeText
    },
    marqueeItems,
    trustBar {
      label,
      partners[]-> {
        _id,
        name,
        logo
      }
    },
    valueProps {
      title,
      subtitle,
      items[] {
        icon,
        title,
        subtitle,
        description,
        image
      }
    },
    howItWorks {
      title,
      subtitle,
      steps[] {
        number,
        title,
        description,
        image
      }
    },
    assortment {
      title,
      description,
      ctaText,
      ctaLink,
      categories[] {
        name,
        image,
        height
      }
    },
    about {
      label,
      title,
      description,
      image,
      imageBadge,
      features[] {
        title,
        description
      },
      linkText,
      linkHref
    },
    stats[] {
      value,
      label
    },
    featuredTestimonial-> {
      quote,
      authorName,
      authorTitle,
      authorCompany,
      authorImage
    },
    cta {
      title,
      subtitle,
      primaryButton,
      secondaryButton
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`

export const navigationQuery = groq`
  *[_type == "navigation"][0] {
    mainNav[] {
      text,
      href,
      isExternal
    },
    ctaButton {
      text,
      href
    }
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteTagline,
    logo,
    footer {
      address,
      phone,
      email,
      certifications,
      socialLinks[] {
        platform,
        url
      },
      sitemapLinks[] {
        text,
        href,
        isExternal
      },
      legalLinks[] {
        text,
        href,
        isExternal
      },
      copyrightText,
      locationTag
    }
  }
`
