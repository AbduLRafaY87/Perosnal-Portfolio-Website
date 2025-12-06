import { Code, Monitor, Layout, Zap, Cloud } from 'lucide-react'

export const servicesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Responsive websites & web apps',
    description:
      'Build fast, accessible and responsive web applications using modern tools and best practices.',
    highlights: ['React', 'Vite', 'Accessibility', 'Performance'],
    icon: Code,
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    subtitle: 'Design systems & prototypes',
    description:
      'Design intuitive interfaces and user flows, from wireframes to high-fidelity prototypes.',
    highlights: ['Figma', 'Design Systems', 'Prototyping'],
    icon: Layout,
  },
  {
    id: 'product',
    title: 'Product Strategy',
    subtitle: 'MVPs & feature planning',
    description:
      'Help shape product direction, prioritize features and plan iteratively to deliver value quickly.',
    highlights: ['MVP Roadmaps', 'User Research', 'Prioritization'],
    icon: Monitor,
  },
  {
    id: 'automation',
    title: 'Automation & Tooling',
    subtitle: 'Improve developer workflows',
    description:
      'Automate repetitive tasks, set up CI/CD pipelines and improve developer experience.',
    highlights: ['CI/CD', 'Scripts', 'Build Optimizations'],
    icon: Zap,
  },
  {
    id: 'cloud',
    title: 'Cloud & Infra',
    subtitle: 'Deployment & hosting',
    description:
      'Deploy, monitor and scale applications with reliable cloud infrastructure and practices.',
    highlights: ['Vercel', 'Netlify', 'Basic infra'],
    icon: Cloud,
  },
]

export default servicesData
