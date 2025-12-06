import { pageSEO, SITE_DOMAIN, structuredData } from '../config/seoConfig'

/**
 * Create structured data for a blog post
 */
export const createBlogPostSchema = (blog, image) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: blog.title,
  description: blog.excerpt || blog.title,
  image: image || `${SITE_DOMAIN}/blog-default.jpg`,
  datePublished: blog.date || new Date().toISOString(),
  dateModified: blog.date || new Date().toISOString(),
  author: {
    '@type': 'Person',
    name: 'Chatriwala',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chatriwala',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_DOMAIN}/logo.png`,
    },
  },
})

/**
 * Create structured data for a portfolio project
 */
export const createProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description || project.longDescription,
  url: `${SITE_DOMAIN}/my-portfolio`,
  image: project.image,
  creator: {
    '@type': 'Person',
    name: 'Chatriwala',
  },
  dateCreated: project.date || new Date().toISOString(),
})

/**
 * Create structured data for a service
 */
export const createServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: {
    '@type': 'Person',
    name: 'Chatriwala',
    url: SITE_DOMAIN,
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_DOMAIN}/my-services`,
  },
})

/**
 * Generate breadcrumb schema
 */
export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
})

/**
 * Generate FAQ schema
 */
export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
