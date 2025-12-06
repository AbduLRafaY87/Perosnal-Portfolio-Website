// import React from 'react'
// import "../../styling/aboutStyling.css"
// import AboutHero from './AboutHero'
// import ValuesSection from './ValuesSection'
// import JourneyTimeline from './JourneyTimeline'
// import CertificatesSection from './CertificatesSection'

// const AboutPage = () => {
//   const journeyData = [
//     {
//       company: "ConnectHear",
//       role: "Full-Stack Developer Intern",
//       dates: "Jun 2025 - Jul 2025",
//       description:
//         "Developed a web app for hearing-impaired users using React & Node.js.",
//       achievements:
//         "Built real-time transcription, optimized performance, improved UX."
//     },
//     {
//       company: "Prime Creators",
//       role: "Co-Founder",
//       dates: "2024 - Present",
//       description:
//         "Leading a creative agency delivering branding & web solutions.",
//       achievements:
//         "Launched multiple projects, built strong client base, drove innovation."
//     },
//     {
//       company: "Mughal Collegiate",
//       role: "Course Instructor",
//       dates: "2023 - 2024",
//       description:
//         "Teaching web development & design using modern tools.",
//       achievements:
//         "Mentored 100+ students; many working in tech now."
//     },
//     {
//       company: "TechTics Club",
//       role: "Web Developer Intern",
//       dates: "2022 - 2023",
//       description:
//         "Improved club website & implemented responsive features.",
//       achievements:
//         "Boosted engagement by 20% with UX improvements."
//     }
//   ];
//   const goToTop = () => {
//     window.scrollTo(0, 0);
//   }

//   React.useEffect(() => {
//     goToTop()
//   }, [])

//   return (
//     <div className='aboutPage'>
//       <section className="">
//         <div className="journeyContainer">
//           <motion.div
//             className="journeyHeader"
//             initial={{ opacity: 0, y: -40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             <h2>My Professional Journey</h2>
//             <p>A timeline of experiences that shaped my path.</p>
//           </motion.div>

//           <div className="journeyTimeline">
//             {journeyData.map((exp, idx) => (
//               <motion.div
//                 key={idx}
//                 className="journeyItem"
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true, amount: 0.1 }}
//               >
//                 <div className="journeyCard">
//                   <div className="journeyDot"></div>
//                   <div className="journeyContent">
//                     <div className="journeyMeta">
//                       <h3>{exp.company}</h3>
//                       <span className="journeyRole">{exp.role}</span>
//                       <span className="journeyDates">{exp.dates}</span>
//                     </div>
//                     <p className="journeyDesc">{exp.description}</p>
//                     <div className="journeyAchievements">
//                       <strong>Key Achievements:</strong> {exp.achievements}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <AboutHero />
//       <CertificatesSection />
//       <ValuesSection />
//       {/* <JourneyTimeline /> */}
//     </div>
//   )
// }

// export default AboutPage