import React, { useState, useMemo } from 'react'
import projects from '../../data/allProjects'
import '../../styling/portfolioStyling.css'
import { ExternalLink, Search, Grid, X } from 'lucide-react'

const uniqueCategories = ['All', ...new Set(projects.map((p) => p.category))]

const PortfolioPage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  }
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [activeProject, setActiveProject] = useState(null)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.join(' ').toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, query])

  return (
    <div onLoad={goToTop()} className="portfolioPage">
      <section className="portfolioHero">
        <div className="portfolioHeroInner">
          <h1 className="portfolioTitle"><span>Work</span> That Speaks Louder Than <span>Words</span></h1>
          <p className="portfolioSubtitle">Great design is not just how it looks — it's how it works. These projects represent my process-driven approach to building digital solutions that are both beautiful and effective.</p>
        </div>
      </section>

      <section className="portfolioControls">
        <div className="controlsInner">
          <div className="filters">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                className={`filterBtn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="searchWrap">
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech (e.g. React, CSS)"
            />
          </div>
        </div>
      </section>

      <section className="portfolioGrid">
        <div className="gridInner">
          {filtered.map((proj) => (
            <article key={proj.slug} className="projectCard" onClick={() => setActiveProject(proj)}>
              <div className="projectImage">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="projectInfo">
                <h3>{proj.title}</h3>
                <p className="projectCat">{proj.category}</p>
                <p className="projectDesc">{proj.description}</p>
                <div className="techList">
                  {proj.techStack.map((t) => (
                    <span key={t} className="techBadge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="noProjects">No projects match your search.</div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {activeProject && (
        <div className="projectModal" onClick={() => setActiveProject(null)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setActiveProject(null)}><X/></button>
            <div className="modalBody">
              <div className="modalImage">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
              <div className="modalContent">
                <h2>{activeProject.title}</h2>
                {/* <p className="modalLong">{activeProject.longDescription}</p>    */}
                <div className="modalMeta">
                  <div className="metaRow">
                    <strong>Category:</strong>
                    <span>{activeProject.category}</span>
                  </div>
                  <div className="metaRow">
                    <strong>Tech:</strong>
                    <span>{activeProject.techStack.join(', ')}</span>
                  </div>
                </div>
                <div className="modalActions">
                  {activeProject.liveLink && (
                    <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="liveBtn">
                      View Live <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage