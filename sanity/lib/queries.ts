import { defineQuery } from 'next-sanity'

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0] {
    hero {
      badge,
      headlineLines,
      highlightedLine,
      tagline,
      ctaText,
      ctaLink,
      heroImage,
      heroImageAlt,
      imageCaption,
      badgeText
    },
    marqueeItems,
    trustBar {
      label,
      partners[]-> {
        _id,
        name,
        logo,
        website
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
      },
      instructionText,
      ctaText
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
      imageAlt,
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
`)

export const navigationQuery = defineQuery(`
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
`)

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    siteName,
    siteTagline,
    logo,
    logoAlt,
    footer {
      address,
      phone,
      email,
      certifications,
      socialLinks[] {
        platform,
        url
      },
      sitemapLabel,
      sitemapLinks[] {
        text,
        href,
        isExternal
      },
      legalLabel,
      legalLinks[] {
        text,
        href,
        isExternal
      },
      contactLabel,
      copyrightText,
      locationTag
    }
  }
`)
