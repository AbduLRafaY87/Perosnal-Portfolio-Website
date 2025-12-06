import React, { useEffect } from 'react'
import { createPageMeta, structuredData, SITE_DOMAIN, SITE_NAME } from '../../config/seoConfig'

function ensureMeta(attrName, attrValue, content, attrKey = 'name') {
  if (!content) return
  const selector = `meta[${attrKey}="${attrValue}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrKey, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ensureLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function ensureJsonLd(id, obj) {
  if (!obj) return
  const scriptId = `ld-json-${id || 'page'}`
  let el = document.getElementById(scriptId)
  const json = JSON.stringify(obj)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = scriptId
    el.textContent = json
    document.head.appendChild(el)
  } else {
    el.textContent = json
  }
}

const SEO = ({
  pageKey,
  title,
  description,
  keywords,
  canonical,
  image,
  imageAlt,
  author,
  publishedDate,
  modifiedDate,
  type = 'website',
  customStructuredData,
}) => {
  useEffect(() => {
    const meta = createPageMeta(pageKey, { title, description, keywords, canonical })
    const canonicalUrl = canonical || meta.canonical
    const imageUrl = image || meta.og?.image

    // Document title
    if (meta.title) document.title = meta.title

    // Primary meta tags
    ensureMeta('name', 'title', meta.title)
    ensureMeta('name', 'description', meta.description)
    if (meta.keywords) ensureMeta('name', 'keywords', meta.keywords)
    ensureMeta('name', 'viewport', 'width=device-width, initial-scale=1.0')
    ensureMeta('name', 'charset', 'UTF-8')
    ensureMeta('name', 'author', author || SITE_NAME)
    ensureMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // Canonical
    ensureLink('canonical', canonicalUrl)

    // Open Graph
    ensureMeta('property', 'og:type', type, 'property')
    ensureMeta('property', 'og:url', canonicalUrl, 'property')
    ensureMeta('property', 'og:title', meta.title, 'property')
    ensureMeta('property', 'og:description', meta.description, 'property')
    if (imageUrl) ensureMeta('property', 'og:image', imageUrl, 'property')
    if (imageAlt) ensureMeta('property', 'og:image:alt', imageAlt, 'property')
    ensureMeta('property', 'og:site_name', SITE_NAME, 'property')

    // Twitter
    ensureMeta('property', 'twitter:card', meta.twitter?.card || 'summary_large_image', 'property')
    ensureMeta('property', 'twitter:url', canonicalUrl, 'property')
    ensureMeta('property', 'twitter:title', meta.title, 'property')
    ensureMeta('property', 'twitter:description', meta.description, 'property')
    if (imageUrl) ensureMeta('property', 'twitter:image', imageUrl, 'property')
    if (meta.twitter?.handle) ensureMeta('property', 'twitter:creator', meta.twitter.handle, 'property')

    // Additional
    ensureMeta('name', 'language', 'English')
    ensureMeta('http-equiv', 'cache-control', 'max-age=3600', 'http-equiv')
    ensureMeta('name', 'theme-color', '#0a0c14')

    // Article specific
    if (publishedDate) ensureMeta('property', 'article:published_time', publishedDate, 'property')
    if (modifiedDate) ensureMeta('property', 'article:modified_time', modifiedDate, 'property')

    // JSON-LD
    if (customStructuredData) ensureJsonLd(pageKey || 'custom', customStructuredData)
    ensureJsonLd('organization', structuredData.organization)

    // Preconnect/dns-prefetch links
    ensureLink('preconnect', 'https://fonts.googleapis.com')
    // create preconnect with crossorigin
    let preconnect2 = document.head.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')
    if (!preconnect2) {
      preconnect2 = document.createElement('link')
      preconnect2.setAttribute('rel', 'preconnect')
      preconnect2.setAttribute('href', 'https://fonts.gstatic.com')
      preconnect2.setAttribute('crossorigin', 'anonymous')
      document.head.appendChild(preconnect2)
    }
    ensureLink('dns-prefetch', 'https://www.google-analytics.com')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageKey, title, description, keywords, canonical, image, imageAlt, author, publishedDate, modifiedDate])

  return null
}

export default SEO
