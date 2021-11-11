import React from 'react'
import './workcard.css'

function Workcard({work}) {
    return (
        <div className="workcard">
            <img src={work.icon} className="work-logo"></img>
            <div className="work-info">
                <label className="company-name">{work.company}</label>
                <div className="work-date">
                    <label>{work.joindate} to {work.enddate}</label>
                </div>
                <div className="work-des">
                    <p>{work.work}</p>
                </div>
            </div>
        </div>
    )
}

export default Workcard
