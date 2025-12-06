import React from 'react'
import valuesData from '../../data/valuesData'

const ValuesSection = () => {
  return (
    <section className="valuesSection">
      <div className="valuesContainer">
        <h2 className="valuesTitle">My Values</h2>
        <p className="valuesSubtitle">Principles that guide my work and decisions</p>

        <div className="valuesGrid">
          {valuesData.map((value) => (
            <article key={value.id} className="valueCard">
              <div className="valueIcon">
                {value.icon ? <value.icon size={32} /> : null}
              </div>
              <h3 className="valueName">{value.title}</h3>
              <p className="valueDesc">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
