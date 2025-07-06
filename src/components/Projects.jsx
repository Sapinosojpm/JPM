import React from 'react'
import assets from '../assets/assets'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "Project 1",
      
    },
    {
      id: 2,
      title: "Printastic Studio",
      description: "Printastic Studio is your go-to online printing platform, designed to turn your creative ideas into stunning physical products. Whether it’s for business branding, personal gifts, or event merchandise.",
      tech: ["React", "Tailwind"],
      image: assets.printastic,
      link: "https://printastic-studio.vercel.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts and interactive maps.",
      tech: ["JavaScript", "API", "CSS3"],
      image: "Project 3"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image && typeof project.image === 'string' && project.image.startsWith('data') === false && project.image.endsWith('.png') ? (
                  <img src={project.image} alt={project.title} />
                ) : project.image && typeof project.image === 'string' && (project.image.startsWith('http') || project.image.endsWith('.jpg') || project.image.endsWith('.jpeg') || project.image.endsWith('.avif')) ? (
                  <img src={project.image} alt={project.title} />
                ) : project.image && typeof project.image === 'string' && project.image !== '' ? (
                  <div className="image-placeholder">{project.image}</div>
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 