import {
  Package,
  FileCode,
  Layout,
  Code2,
  Zap,
  Terminal,
  Database,
  Cloud,
  Palette,
  Wifi,
  Layers,
  GitBranch,
  Settings,
  Cpu
} from 'lucide-react'

export const techStackData = [
  {
    name: 'Frontend',
    description: 'Modern frontend technologies for building interactive user interfaces',
    technologies: [
      { name: 'React.js', proficiency: 95, color: '#61dafb', icon: Package },
      { name: 'JavaScript', proficiency: 90, color: '#f7df1e', icon: FileCode },
      { name: 'Tailwind CSS', proficiency: 92, color: '#06b6d4', icon: Layout },
      { name: 'HTML/CSS', proficiency: 95, color: '#e34c26', icon: Code2 },
      { name: 'Next.js', proficiency: 85, color: '#000000', icon: Package },
    //   { name: 'Framer Motion', proficiency: 88, color: '#0055ff', icon: Zap }
    ]
  },
  {
    name: 'Backend',
    description: 'Server-side technologies for building scalable APIs and applications',
    technologies: [
      { name: 'Node.js', proficiency: 88, color: '#68a063', icon: Terminal },
      { name: 'Express.js', proficiency: 85, color: '#000000', icon: Code2 },
      { name: 'MongoDB', proficiency: 87, color: '#13aa52', icon: Database },
      { name: 'Python', proficiency: 60, color: '#336791', icon: Database },
      { name: 'Firebase', proficiency: 82, color: '#ffa500', icon: Cloud },
    //   { name: 'RESTful APIs', proficiency: 90, color: '#6d28d9', icon: Database }
    ]
  },
  {
    name: 'Design',
    description: 'Design tools and principles for creating beautiful user experiences',
    technologies: [
    //   { name: 'Figma', proficiency: 85, color: '#f24e1e', icon: Palette },
      { name: 'UI/UX Design', proficiency: 83, color: '#ec4899', icon: Layout },
      { name: 'Responsive Design', proficiency: 92, color: '#06b6d4', icon: Wifi },
      { name: 'Wireframing', proficiency: 80, color: '#9333ea', icon: FileCode },
      { name: 'Prototyping', proficiency: 85, color: '#3b82f6', icon: Layers },
      { name: 'Design Systems', proficiency: 82, color: '#f59e0b', icon: Palette }
    ]
  },
  {
    name: 'Tools',
    description: 'Development tools and utilities that enhance productivity',
    technologies: [
      { name: 'Git/GitHub', proficiency: 90, color: '#f1502f', icon: GitBranch },
      { name: 'VS Code', proficiency: 93, color: '#007acc', icon: Settings },
    //   { name: 'Docker', proficiency: 75, color: '#2496ed', icon: Package },
      { name: 'NPM/Yarn', proficiency: 88, color: '#cb3837', icon: Package },
      { name: 'Vite', proficiency: 88, color: '#646cff', icon: Zap },
      { name: 'Postman', proficiency: 85, color: '#ff6c37', icon: FileCode }
    ]
  },
  {
    name: 'Deployment',
    description: 'Platforms and services for deploying and hosting applications',
    technologies: [
      { name: 'Vercel', proficiency: 92, color: '#000000', icon: Cloud },
      { name: 'AWS', proficiency: 78, color: '#ff9900', icon: Cloud },
      { name: 'Netlify', proficiency: 87, color: '#00c7b7', icon: Cloud },
      { name: 'Firebase Hosting', proficiency: 83, color: '#ffa500', icon: Cloud },
    //   { name: 'Linux/Ubuntu', proficiency: 80, color: '#dd4814', icon: Terminal },
    //   { name: 'CI/CD', proficiency: 80, color: '#0099dd', icon: Zap }
    ]
  },
  {
    name: 'Other',
    description: 'Additional technologies and frameworks',
    technologies: [
      { name: 'Content Creation', proficiency: 88, color: '#ff0000', icon: Zap },
      { name: 'Video Editing', proficiency: 82, color: '#1e90ff', icon: Palette },
      { name: 'SEO', proficiency: 85, color: '#4285f4', icon: Settings },
    //   { name: 'Performance Optimization', proficiency: 84, color: '#fbbf24', icon: Cpu },
      { name: 'Testing', proficiency: 78, color: '#06b6d4', icon: Settings },
    //   { name: 'Web Security', proficiency: 80, color: '#ff4444', icon: Settings }
    ]
  }
]
