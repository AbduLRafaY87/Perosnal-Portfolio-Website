import React from 'react'
import SEO from '../../components/common/SEO'
import "../../styling/homeStyling.css"
import HeroSection from './HeroSection'
import TechStack from './TechStack'
import InstaReelSection from './InstaReelSection'
import FeaturedProject from './FeaturedProject'
import ServicesSection from './ServicesSection'
import { structuredData } from '../../config/seoConfig'

const HomePage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <SEO
        pageKey="home"
        customStructuredData={structuredData.person}
      />
      <div onLoad={goToTop()} className="homePage">
        <HeroSection />
        <TechStack />
        <ServicesSection />
        <FeaturedProject />
        <InstaReelSection />
      </div>
    </>
  )
}

export default HomePage
