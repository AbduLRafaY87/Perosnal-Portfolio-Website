import React from 'react'
import "../../styling/homeStyling.css"
import HeroSection from './HeroSection'
import TechStack from './TechStack'
import InstaReelSection from './InstaReelSection'
import FeaturedProject from './FeaturedProject'
import ServicesSection from './ServicesSection'


const HomePage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div onLoad={goToTop()} className="homePage">
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <FeaturedProject />
      <InstaReelSection />
    </div>
  )
}

export default HomePage