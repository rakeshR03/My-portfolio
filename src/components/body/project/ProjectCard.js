import React from 'react'
import './projectCard.css'
import GitHub from '../../../../node_modules/@mui/icons-material/GitHub'

function ProjectCard({project}) {
    return (
        <div className="projectCard">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.github && <a className="project-link" href={project.github} >
                        <div className="link-button">
                            <GitHub />Github
                        </div>   
                    </a>}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag)=>{ 
                        return <label className="tag">{tag}</label>
                    })}
                </div>
            </div>
            <img src={project.image} className="project-photo"></img>
        </div>
    )
}

export default ProjectCard

