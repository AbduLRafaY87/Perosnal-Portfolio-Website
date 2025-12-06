import React, { useEffect, useState } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import HeroImg from '../../assets//images/heroImg.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const words = [
    'Full-Stack Developer',
    'Front-End Developer',
    'Backend Developer',
    'Graphic Designer',
    'Content Creator'
  ]

  const typed = useTypewriter(words, { typingSpeed: 110, deletingSpeed: 60, pause: 400 })
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setShowCursor(s => !s), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="heroSection">
      <div className="left">
        <div className="heroBadge">Hey there! I am</div>
        <h1>Abdul Rafay</h1>
        <h2><span className='IamSpan'>I'm</span> {typed}<span className="cursor" style={{ opacity: showCursor ? 1 : 0, marginLeft: 0 }}>{'_'}</span></h2>
        <p>
          I am a passionate developer with expertise in creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills to deliver high-quality solutions.
        </p>
        <div className="stats">
          <div className="stat">
            <h3>2.5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>1.2K+</h3>
            <p>Followers on social Media</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={HeroImg} alt="" />
        <div className="heroBtns">
          <Link className="btn primaryBtn" to='get-in-touch'>Start a Project</Link>
          <Link to="my-services" className="btn secondaryBtn">Explore Services</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

