import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 1+ years of experience creating 
              innovative web applications. I specialize in React, Node.js, and modern 
              web technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src={assets.myPic} alt="My Photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 