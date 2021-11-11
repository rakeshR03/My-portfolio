import React from 'react'
import './skill.css'
import Separator from '../common/Separator'
import { Skilldata } from '../../data/Skilldata'
import Skillcard from './Skillcard'

function Skill() {
    const data = Skilldata;
    return (
        <div class="skill">
            < Separator />
            <label className="section-title">Skills</label>
            <div className="skill-container">
                {data.map((item)=>{
                    return (
                        <div className="skill-section">
                            <label className="skill-section-title">{item.type}</label>
                            <div className="skill-list">
                                {item.list.map((skill)=>{
                                    return (
                                        <Skillcard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
