import React from 'react'
import SEO from '../../components/common/SEO'
import '../../styling/servicesStyling.css'
import ServicesPageOriginal from './ServicesPage'

const ServicesPageSEO = () => {
  return (
    <>
      <SEO pageKey="services" />
      <ServicesPageOriginal />
    </>
  )
}

export default ServicesPageSEO
