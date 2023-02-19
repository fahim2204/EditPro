import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <a href="#" className="project-card style-7">
      <div className="info">
        <h6>{ project.title }</h6>
        <h3>{ project.description }</h3>
      </div>
      <div className="img">
        <img src={project.image} alt="" />
      </div>
    </a>
  )
}

export default ProjectCard