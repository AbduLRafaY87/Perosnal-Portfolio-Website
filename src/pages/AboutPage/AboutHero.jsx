import React from 'react'

const AboutHero = () => {
  return (
    <section className="aboutHero">
      <div className="aboutHeroContainer">
        <div className="aboutHeroContent">
          <h1 className="aboutHeroTitle">Turning <span>Ideas</span> Into Functional, Beautiful <span>Digital Solutions</span></h1>
          <p className="aboutHeroSubtitle">
            I’m a full-stack developer and digital designer who loves building products that solve real problems. Over the years, I’ve worked on a wide range of projects—each one pushing me to refine my craft, think deeper, and design with intention.
            <br />
            My focus is simple: clean code, thoughtful design, and meaningful user experiences. I believe great products are built at the intersection of creativity and engineering, and that’s exactly where I do my best work.
          </p>

          <div className="aboutHeroStats">
            <div className="heroStat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="heroStat">
              <h3>15+</h3>
              <p>Projects Shipped</p>
            </div>
            <div className="heroStat">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* <div className="aboutHeroImage">
          <div className="heroImagePlaceholder">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="95" fill="url(#grad1)" opacity="0.2" />
              <circle cx="100" cy="100" r="75" fill="url(#grad1)" opacity="0.15" />
              <circle cx="100" cy="100" r="55" fill="url(#grad1)" opacity="0.1" />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutHero
