import React from 'react'
import './skillcard.css'

function Skillcard({skill}) {
    return (
        <div className="skillcard">
            <img className="skill-icon" src={skill.icon}></img>
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default Skillcard
