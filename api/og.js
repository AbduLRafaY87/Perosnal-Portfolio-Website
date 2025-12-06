// Vercel Serverless Function for generating Open Graph images
// This endpoint can be called to generate dynamic OG images for social sharing

const seoPages = {
  '/': {
    title: 'Abdul Rafay Chatriwala | Web Developer & Designer',
    description: 'Professional web developer and designer creating impactful branding and high-end websites.',
  },
  '/about-me': {
    title: 'About Me | Chatriwala - Web Developer & Designer',
    description: 'Learn about my journey, skills, and experience in web development and design.',
  },
  '/my-services': {
    title: 'Services | Chatriwala - Web Development, Design & Branding',
    description: 'Explore my comprehensive services including web development, UI/UX design, and branding.',
  },
  '/my-portfolio': {
    title: 'Portfolio | Chatriwala - Showcase of Web Projects',
    description: 'View my latest web development and design projects.',
  },
  '/my-blogs': {
    title: 'Blog | Chatriwala - Web Design & Development Tips',
    description: 'Read articles and insights about web design and development.',
  },
  '/get-in-touch': {
    title: 'Contact | Chatriwala - Get in Touch',
    description: 'Ready to start your project? Get in touch and let\'s create something amazing together.',
  },
}

export default function handler(req, res) {
  const { path = '/' } = req.query
  const page = seoPages[path] || seoPages['/']

  // Set CORS and cache headers
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')

  return res.status(200).json({
    ...page,
    url: `https://www.archatriwala.com${path}`,
  })
}
