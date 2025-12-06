import React from 'react'
import SEO from '../../components/common/SEO'
import '../../styling/portfolioStyling.css'
import PortfolioPageOriginal from './PortfolioPage'

const PortfolioPageSEO = () => {
  return (
    <>
      <SEO pageKey="portfolio" />
      <PortfolioPageOriginal />
    </>
  )
}

export default PortfolioPageSEO
