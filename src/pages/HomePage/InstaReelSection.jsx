import React, { useEffect } from 'react'
import { Heart, MessageCircle, Share2, Instagram } from 'lucide-react'
import { instagramReelsData } from '../../data/instagramReelsData'

const InstaReelSection = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="instaReelSection">
      <div className="instaContainer">
        {/* Header */}
        <div className="instaHeader">
          <div className="instaHeaderContent">
            <Instagram size={40} className="instaIcon" />
            <div>
              <h2 className="instaTitle">Instagram Reels</h2>
              <p className="instaSubtitle">Check out my latest content and creative work</p>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/rafay.guides" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instaLink"
          >
            Follow on Instagram →
          </a>
        </div>

        {/* Reels Grid */}
        <div className="instaGrid">
          {instagramReelsData.map((reel, idx) => (
            <div key={idx} className="instaReelCard">
              <div className="instaEmbedWrapper">
                <blockquote 
                  className="instagram-media"
                  data-instgrm-permalink={reel.link}
                  data-instgrm-version="14"
                >
                  <a href={reel.link} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                  </a>
                </blockquote>
              </div>
              <div className="instaOverlay">
                <a 
                  href={reel.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instaViewBtn"
                >
                  <Heart size={20} />
                  <span>View on Instagram</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="instaCTA">
          <h3>More creative content coming soon!</h3>
          <p>Follow me on Instagram for daily updates, tutorials, and behind-the-scenes content</p>
          <a 
            href="https://www.instagram.com/rafay.guides" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instaCTABtn"
          >
            <Instagram size={18} />
            Follow @rafay.guides
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstaReelSection
