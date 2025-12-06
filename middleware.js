import { NextResponse } from 'next/server'

const seoData = {
  '/': {
    title: 'Abdul Rafay Chatriwala | Web Developer & Designer',
    description: 'Professional web developer and designer creating impactful branding and high-end websites.',
    canonical: 'https://www.archatriwala.com/',
  },
  '/about-me': {
    title: 'About Me | Chatriwala - Web Developer & Designer',
    description: 'Learn about my journey, skills, and experience in web development and design.',
    canonical: 'https://www.archatriwala.com/about-me',
  },
  '/my-services': {
    title: 'Services | Chatriwala - Web Development, Design & Branding',
    description: 'Explore my comprehensive services including web development, UI/UX design, and branding.',
    canonical: 'https://www.archatriwala.com/my-services',
  },
  '/my-portfolio': {
    title: 'Portfolio | Chatriwala - Showcase of Web Projects',
    description: 'View my latest web development and design projects.',
    canonical: 'https://www.archatriwala.com/my-portfolio',
  },
  '/my-blogs': {
    title: 'Blog | Chatriwala - Web Design & Development Tips',
    description: 'Read articles and insights about web design and development.',
    canonical: 'https://www.archatriwala.com/my-blogs',
  },
  '/get-in-touch': {
    title: 'Contact | Chatriwala - Get in Touch',
    description: 'Ready to start your project? Get in touch and let\'s create something amazing together.',
    canonical: 'https://www.archatriwala.com/get-in-touch',
  },
}

export function middleware(request) {
  // This middleware can be extended to add custom headers
  // For now, it serves as a placeholder
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
