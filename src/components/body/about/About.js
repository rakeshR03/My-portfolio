import React from 'react'
import './about.css'
import workprofile from '../../../Assets/work.jpg'
import Socialmedia from '../socialmedia/Socialmedia'

function about() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi there! 👋
                    <br /> I am <span id="info-name">Rakesh Roy</span>.
                    <br /> I like to learn new things.
                </div>
                <div className="about-photo">
                    <img src={workprofile} alt="work" className="profile-pic"/>
                </div>
            </div>
            <div className="about-bottom">
                <Socialmedia />
            </div>
        </div>
    )
}

export default about
