import React from 'react'
import './project.css'
import {ProjectCollection} from '../../data/ProjectCollection'
import ProjectCard from './ProjectCard';
import Separator from '../common/Separator';

function Project() {
    const data = ProjectCollection;
    return (
        <div className="project">
            <Separator />
           <label className="section-title" >Projects</label>
           <div className="project-div">
                {data.map((project) => {
                    return <ProjectCard  project={project} />
                    
                })}
           </div>
        </div>
    )
}

export default Project
