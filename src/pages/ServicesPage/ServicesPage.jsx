import React, { useState, useMemo } from 'react'
import { serviceCategories, servicesData } from '../../data/servicesPageData'
import '../../styling/servicesStyling.css'
import { ArrowRight, Check } from 'lucide-react'
import Modal from '../../components/layout/Modal'

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredService, setHoveredService] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  // Filter services
  const filteredServices = useMemo(() => {
    return selectedCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory)
  }, [selectedCategory])

  // Count by category
  const getCategoryCount = (catId) => {
    return servicesData.filter((s) => s.category === catId).length
  }

  // Open modal with selected service pre-filled
  const openModalWithService = (serviceName) => {
    setSelectedService(serviceName)
    setModalOpen(true)
  }

  return (
    <div className="servicesPage">
      {/* Hero Section */}
      <section  className="servicesHero">
        <div className="servicesHeroContent">
          <h1 className="servicesHeroTitle">Impactful <span>branding</span> and high-end <span>websites</span> for creatives.</h1>
          <p className="servicesHeroSubtitle">
            Comprehensive solutions for web development, design, optimization, and content creation
          </p>
          <p className="servicesHeroDesc">
            Whether you need a custom website, stunning design, SEO optimization, or engaging content,
            I've got you covered. Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="servicesContent">
        <div className="servicesContainer">
          {/* Category Filter */}
          <div className="categoryFilter">
            <h2 className="filterTitle">Filter by Category</h2>
            <div className="categoryButtons">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`categoryBtn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  {cat.id !== 'all' && (
                    <span className="count">{getCategoryCount(cat.id)}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="servicesGrid">
            {filteredServices.map((service) => {
              const IconComponent = service.icon
              return (
                <article
                  key={service.id}
                  className="serviceCard"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Card Header */}
                  <div className="serviceCardHeader">
                    <div className="serviceIcon">
                      <IconComponent size={32} />
                    </div>
                    <span className="serviceCategoryBadge">{service.category}</span>
                  </div>

                  {/* Card Content */}
                  <div className="serviceCardContent">
                    <h3 className="serviceTitle">{service.title}</h3>
                    <p className="serviceText">{service.text}</p>
                    <p className="serviceDesc">{service.description}</p>

                    {/* Features */}
                    <div className="serviceFeatures">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="featureItem">
                          <Check size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="servicePrice">
                      <span className="priceLabel">Starting at</span>
                      <span className="priceValue">{service.price}</span>
                    </div>

                    {/* CTA Button */}
                    <button
                      className="serviceBtn"
                      onClick={() => openModalWithService(service.title)}
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="noServices">
              <p>No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="servicesCTA">
        <div className="servicesCtaContent">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and find the perfect solution for your needs.</p>
          <a href="/get-in-touch" className="ctaButton">
            Contact Me Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Modal for service inquiry */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} selectedService={selectedService} />
    </div>
  )
}

export default ServicesPage