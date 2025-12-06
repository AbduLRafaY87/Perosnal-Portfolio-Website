import P1 from "../assets/projects/1.png"
import P2 from "../assets/projects/2.png"
import P3 from "../assets/projects/3.png"
import P4 from "../assets/projects/4.png"
import P5 from "../assets/projects/5.png"
import P6 from "../assets/projects/6.png"
import P7 from "../assets/projects/7.png"
import P10 from "../assets/projects/10.webp"
import P9 from "../assets/projects/9.webp"
import P8 from "../assets/projects/8.webp"

// Add new images if available

const projects = [
    {
        title: "PrimeCreators – Creative Agency Website",
        category: "website",
        techStack: ['React.jS', 'CSS', 'JavaScript'],
        image: P9, // replace with P9
        description: "Creative digital agency website.",
        slug: "prime-creators-agency",
        longDescription: "A clean, modern, and brand-focused website developed for PrimeCreators.",
        liveLink: "https://www.primecreators.co/"
    },
    {
        title: "PGS Education – School / Education Platform",
        category: "website",
        techStack: ['Node.js','React.js','CSS','Online APIs'], // update later
        image: P8, // replace with P8 when you add an image
        description: "A modern educational institute website.",
        slug: "pgs-education-website",
        longDescription: "A responsive and professional website created for PGS Education. You can expand this description.",
        liveLink: "https://pgseducation.com/"
    },
    {
        title: 'Artfolio - Premium Sketch Artist Portfolio',
        category: 'portfolio',
        techStack: ['CSS', 'React.js'],
        image: P3,
        description: 'A creative portfolio site for a sketch artist, showcasing artwork galleries, client reviews, and appointment scheduling options.',
        slug: "artist-premium-portfolio-website",
        longDescription: `Artfolio is a modern, minimalist portfolio website designed for a premium sketch artist. Developed using React.js and styled with custom CSS, it features high-quality image galleries, categorized by style and medium. Visitors can view client reviews, learn about the artist’s journey, and schedule appointments via a contact module. Special attention was given to visual hierarchy, page speed, and mobile responsiveness to ensure the artist’s work is the main focal point.`,
        liveLink: "https://adeena-sajjad.vercel.app"
    },
    {
        title: `CosheShell - In-Browser Code Editor`,
        category: 'app',
        techStack: ['CSS', 'React.js', 'Monaco Editor'],
        image: P4,
        description: 'A browser-based code editor with live preview and syntax highlighting for HTML, CSS, and JavaScript using Monaco Editor.',
        slug: "inbrowser-code-editor",
        longDescription: `CosheShell is a full-featured in-browser code editor designed for frontend web development practice and demos.`,
        liveLink: "https://code-shell.vercel.app"
    },
    {
        title: 'Model United Nation Website',
        category: 'website',
        techStack: ['React.Js', 'CSS', 'JavaScript', 'Parallax Tilt'],
        image: P7,
        description: 'A responsive website for a Model United Nations conference, featuring event details, registration forms, and a gallery of past events.',
        slug: "mun-website",
        longDescription: `This project is a responsive website designed for a Model United Nations (MUN) conference. It features sections for event details, registration forms, and a gallery showcasing past events. The site is built using HTML, CSS, and JavaScript, with Bootstrap for responsive design. The layout is clean and user-friendly, ensuring easy navigation for participants. The registration form is interactive and validates user input to enhance the user experience. Overall, this website serves as an informative platform for MUN enthusiasts.`,
        liveLink: "https://akespmun-iv.vercel.app"
    },
    {
        title: "MrFixer Dubai – Handyman / Repair Services Website",
        category: "website",
        techStack: ['HTML', 'CSS', 'JavaScript'],
        image: P10, // replace with P10
        description: "A website for home repair and handyman services in Dubai.",
        slug: "mrfixer-dubai-services",
        longDescription: "A professional service website for MrFixer Dubai, featuring services, contact, and booking functionality.",
        liveLink: "https://mrfixerdubai.com/"
    },
    {
        title: 'SSC - Beauty Products E-commerce',
        category: 'ecommerce',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        image: P1,
        description: 'A responsive e-commerce platform for cosmetics, featuring product filtering, shopping cart functionality, and secure user authentication.',
        slug: "cosmetics-website",
        longDescription: `This project is a sleek and responsive e-commerce platform built specifically for selling beauty and cosmetic products online. It features a dynamic product listing page, filtering by category or price, and a fully functional shopping cart. Users can add or remove items, view totals, and check out securely. The site also includes user authentication with registration and login features to ensure a personalized shopping experience.`,
        liveLink: "https://sanasajjadcosmetics.netlify.app"
    },
    {
        title: 'Educational Institute Website',
        category: 'website',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        image: P2,
        description: 'An accessible and modern website for an educational institute, with course listings, staff profiles, and a functional contact form.',
        slug: "educational-website",
        longDescription: `This website was developed for TechTicsClub, an educational institute focused on STEM education. The site presents a structured layout with course listings, instructor profiles, testimonials, and student success stories.`,
        liveLink: "https://techticsclub.netlify.app"
    },
    {
        title: 'DevSphere - Personal Developer Portfolio',
        category: 'portfolio',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        image: P5,
        description: 'A professional and interactive portfolio showcasing development projects, skills, and integrated email contact functionality.',
        slug: "developer-portfolio",
        longDescription: `DevSphere is a personal developer portfolio created to professionally present skills, projects, and services.`,
        liveLink: "https://ars-developers.netlify.app"
    },
    {
        title: 'SmileCare - Dental Clinic Website',
        category: 'website',
        techStack: ['HTML', 'CSS'],
        image: P6,
        description: 'A clean and modern website for a dental clinic, featuring service information, doctor bios, and an appointment booking form.',
        slug: "dental-clinic-website",
        longDescription: `SmileCare is a sleek and informative website built for a local dental clinic.`,
        liveLink: "https://drbillo.netlify.app"
    },
];

export default projects;
