/**
 * SEO Configuration for Chatriwala Portfolio
 * Centralized meta tags, Open Graph, and structured data
 */

export const SITE_NAME = 'Abdul Rafay Chatriwala | Web Developer & Designer'
export const SITE_DOMAIN = 'https://www.archatriwala.com' // Updated to user's domain
export const SITE_DESCRIPTION = 'Professional web developer and designer creating impactful branding and high-end websites for creative professionals.'
export const SOCIAL_IMAGE = `${SITE_DOMAIN}/og-image.png`
export const TWITTER_HANDLE = '@ars_chatriwala' // Update with your Twitter handle if different

// Global SEO Meta Tags
export const globalSEO = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: 'web development, web design, branding, portfolio, creative design, UI/UX',
  canonical: SITE_DOMAIN,
  og: {
    type: 'website',
    url: SITE_DOMAIN,
    image: SOCIAL_IMAGE,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    handle: TWITTER_HANDLE,
  },
}

// Page-specific SEO
export const pageSEO = {
  home: {
    title: 'Home | Chatriwala - Web Developer & Designer',
    description: 'Welcome to my portfolio. I create impactful branding and high-end websites for creative professionals.',
    keywords: 'web developer, web designer, portfolio, creative, branding, design',
    canonical: SITE_DOMAIN,
  },
  about: {
    title: 'About Me | Chatriwala - Web Developer & Designer',
    description: 'Learn about my journey, skills, and experience in web development and design.',
    keywords: 'about, web developer, designer, experience, skills, portfolio',
    canonical: `${SITE_DOMAIN}/about-me`,
  },
  services: {
    title: 'Services | Chatriwala - Web Development, Design & Branding',
    description: 'Explore my comprehensive services including web development, UI/UX design, branding, SEO optimization, and content creation.',
    keywords: 'services, web development, design, branding, SEO, content creation',
    canonical: `${SITE_DOMAIN}/my-services`,
  },
  portfolio: {
    title: 'Portfolio | Chatriwala - Showcase of Web Projects',
    description: 'View my latest web development and design projects. Explore my work and see how I help businesses grow online.',
    keywords: 'portfolio, projects, web development, design, case studies',
    canonical: `${SITE_DOMAIN}/my-portfolio`,
  },
  blog: {
    title: 'Blog | Chatriwala - Web Design & Development Tips',
    description: 'Read articles and insights about web design, development, and digital marketing strategies.',
    keywords: 'blog, web design, development, tips, insights, tutorials',
    canonical: `${SITE_DOMAIN}/my-blogs`,
  },
  contact: {
    title: 'Contact | Chatriwala - Get in Touch',
    description: 'Ready to start your project? Get in touch and let\'s create something amazing together.',
    keywords: 'contact, inquiry, project, web development, design',
    canonical: `${SITE_DOMAIN}/get-in-touch`,
  },
}

// JSON-LD Structured Data
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chatriwala',
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://twitter.com/archatriwala', // Update with actual social links
      'https://linkedin.com/in/archatriwala',
      'https://instagram.com/archatriwala',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@archatriwala.com', // Update with actual email
    },
  },
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chatriwala',
    url: SITE_DOMAIN,
    image: `${SITE_DOMAIN}/profile.jpg`,
    description: SITE_DESCRIPTION,
    jobTitle: 'Web Developer & Designer',
    sameAs: [
      'https://twitter.com/archatriwala',
      'https://linkedin.com/in/archatriwala',
    ],
  },
}

/**
 * Helper function to create page meta tags
 */
export const createPageMeta = (pageKey, customOverrides = {}) => {
  const page = pageSEO[pageKey] || globalSEO
  return {
    ...page,
    ...customOverrides,
    og: {
      ...globalSEO.og,
      ...page.og,
      ...customOverrides.og,
    },
  }
}
