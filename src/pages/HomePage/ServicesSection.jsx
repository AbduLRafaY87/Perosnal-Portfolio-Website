import React from 'react'
import '../../styling/homeStyling.css'
import servicesData from '../../data/servicesData'

const ServicesSection = () => {
  return (
    <section className="servicesSection">
      <div className="servicesContainer">
        <h2 className="servicesTitle">Services</h2>
        <p className="servicesSubtitle">What I build and help teams ship.</p>

        <div className="servicesGrid">
          {servicesData.map((s) => (
            <article key={s.id} className="serviceCard">
              <div className="serviceIcon">
                {s.icon ? <s.icon size={28} /> : null}
              </div>
              <h3 className="serviceName">{s.title}</h3>
              <p className="serviceShort">{s.subtitle}</p>
              <p className="serviceDesc">{s.description}</p>
              <ul className="serviceHighlights">
                {s.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
