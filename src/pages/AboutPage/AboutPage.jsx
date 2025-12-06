import React from 'react'
import "../../styling/aboutStyling.css"
import AboutHero from './AboutHero'
import ValuesSection from './ValuesSection'
import JourneyTimeline from './JourneyTimeline'
import CertificatesSection from './CertificatesSection'

const AboutPage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div onLoad={goToTop()} className='aboutPage'>
      <AboutHero />
      <ValuesSection />
      <JourneyTimeline />
      <CertificatesSection />
    </div>
  )
}

export default AboutPage