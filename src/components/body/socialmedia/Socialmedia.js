import React from 'react'
import './socialmedia.css'
import { socialdata } from '../../data/social'

function Socialmedia() {
    const data = socialdata;
    return (
        <div className="social-contact">
            {data.map((item) =>{
                return <a href={item.link} target="_blank" >
                    <div className="social-icon-div">
                        <img src={item.icon} alt="social-logo" className="social-icon" >
                        </img>
                    </div>
                </a>
            })}
        </div>
    )
}

export default Socialmedia
