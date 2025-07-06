import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React","JavaScript","HTML5", "CSS3", "Tailwind CSS","Bootstrap", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Wireframe", "Git", "Docker", "AWS", "Figma", "VS Code", "Postman", "Cursor", "Vercel", "Render"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 