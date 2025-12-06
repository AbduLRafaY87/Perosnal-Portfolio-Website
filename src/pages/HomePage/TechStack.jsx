import React, { useState } from 'react'
import { Code2, Server, Palette, Wrench, Cloud, Zap } from 'lucide-react'
import { techStackData } from '../../data/techStackData'

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(0)
  const activeCategory = techStackData[activeTab]

  const getCategoryIcon = (index) => {
    const icons = [Code2, Server, Palette, Wrench, Cloud, Zap]
    return icons[index]
  }

  return (
    <section className="techStackSection">
      <div className="techStackContainer">
        <h2 className="techStackTitle">Technologies I Work With</h2>
        <p className="techStackSubtitle">A comprehensive overview of my technical toolkit and expertise</p>

        {/* Tab Navigation */}
        <div className="techTabs">
          {techStackData.map((category, idx) => {
            const IconComponent = getCategoryIcon(idx)
            return (
              <button
                key={idx}
                className={`techTab ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <IconComponent size={18} />
                <span>{category.name}</span>
                <span className="techCount">{category.technologies.length}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content - Grid of Cards */}
        <div className="techTabContent">
          <h3 className="categoryTitle">{activeCategory.name}</h3>
          <p className="categoryDescription">{activeCategory.description}</p>

          <div className="techGrid">
            {activeCategory.technologies.map((tech, idx) => {
              const IconComponent = tech.icon
              return (
                <div key={idx} className="techCard">
                  <div className="techCardIcon" style={{ background: `linear-gradient(135deg, ${tech.color} 0%, ${tech.color}dd 100%)` }}>
                    <IconComponent size={32} color="#fff" strokeWidth={1.5} />
                  </div>
                  <h4 className="techCardName">{tech.name}</h4>
                  <div className="skillBar">
                    <div 
                      className="skillFill" 
                      style={{ 
                        width: `${tech.proficiency}%`,
                        background: tech.color
                      }} 
                    />
                  </div>
                  <p className="skillPercentage">{tech.proficiency}%</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
