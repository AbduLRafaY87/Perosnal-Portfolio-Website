import React from 'react'
import SEO from '../../components/common/SEO'
import '../../styling/aboutStyling.css'
import AboutHero from './AboutHero'
import ValuesSection from './ValuesSection'

const AboutPageSEO = () => {
  return (
    <>
      <SEO pageKey="about" />
      <div className="aboutPage">
        <AboutHero />
        <ValuesSection />
      </div>
    </>
  )
}

export default AboutPageSEO
