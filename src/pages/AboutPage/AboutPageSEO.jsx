import React from 'react'
import SEO from '../../components/common/SEO'
import '../../styling/aboutStyling.css'
import AboutHero from './AboutHero'
import ValuesSection from './ValuesSection'
import JourneyTimeline from './JourneyTimeline'
import CertificatesSection from './CertificatesSection'

const AboutPageSEO = () => {
  return (
    <>
      <SEO pageKey="about" />
      <div className="aboutPage">
        <AboutHero />
        <ValuesSection />
        <JourneyTimeline/>
        <CertificatesSection/>
      </div>
    </>
  )
}

export default AboutPageSEO
