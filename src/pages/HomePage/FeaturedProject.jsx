import React, { useState } from 'react'
import { featuredProjectData } from '../../data/featuredProjectData'
import { ExternalLink, Github, X } from 'lucide-react'

const FeaturedProject = () => {
  const [open, setOpen] = useState(false)
  const p = featuredProjectData

  return (
    <section className="featuredProjectSection">
      <div className="featuredContainer">
        <div className="featuredInner">
          <div className="featuredMedia">
            <img src={p.image} alt={p.title} className="featuredImage" />
            <div className="featuredOverlay">
              <a href={p.liveLink} target="_blank" rel="noreferrer" className="featuredAction">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a href={p.githubLink} target="_blank" rel="noreferrer" className="featuredAction ghost">
                <Github size={16} />
                <span>View Code</span>
              </a>
            </div>
          </div>

          <div className="featuredContent">
            <div className="featuredBadge">Featured Project</div>
            <h2 className="featuredTitle">{p.title}</h2>
            <p className="featuredDesc">{p.description}</p>

            <div className="featuredTechs">
              {p.techStack.map((t, i) => (
                <span key={i} className="techChip">{t}</span>
              ))}
            </div>

            <div className="featuredCTAs">
              <a href={p.liveLink} className="btn primary" target="_blank" rel="noreferrer">
                Live Preview <ExternalLink size={14} />
              </a>
              <a href={p.githubLink} className="btn outline" target="_blank" rel="noreferrer">
                GitHub <Github size={14} />
              </a>
              {/* <button className="btn subtle" onClick={() => setOpen(true)}>
                Case Study
              </button> */}
            </div>

            {/* <div className="featuredFooter">
              <span className="smallMuted">Built with:</span>
              <span className="footerTechs">{p.techStack.join(' • ')}</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fpModal" role="dialog" aria-modal="true">
          <div className="fpModalContent">
            <button className="fpClose" onClick={() => setOpen(false)} aria-label="Close">
              <X />
            </button>
            <h3>{p.title}</h3>
            <p className="caseStudyText">{p.caseStudy}</p>
            <div className="modalActions">
              <a href={p.liveLink} target="_blank" rel="noreferrer" className="btn primary">
                Visit Live
              </a>
              <a href={p.githubLink} target="_blank" rel="noreferrer" className="btn outline">
                View Source
              </a>
            </div>
          </div>
          <div className="fpModalBackdrop" onClick={() => setOpen(false)} />
        </div>
      )}
    </section>
  )
}

export default FeaturedProject
