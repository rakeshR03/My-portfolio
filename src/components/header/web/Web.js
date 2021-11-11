import React from 'react'
import './web.css'
import Brush from '../../../../node_modules/@mui/icons-material/Brush'
import Work from '../../../../node_modules/@mui/icons-material/Work'
import Laptop from '../../../../node_modules/@mui/icons-material/Laptop'
import Person from '../../../../node_modules/@mui/icons-material/Person'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                    <Brush  style={{fontSize: '18px'}}/> Project
                </a>
            </div>
            <div className="web-option">
                <a href="#skill"> 
                    <Laptop style={{fontSize: '18px'}}/> Skill
                </a>
            </div>
            <div className="web-option"> 
                <a href="#work">
                    <Work style={{fontSize: '18px'}}/> Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <Person style={{fontSize: '18px'}}/>Contact
                </a>
            </div>

        </div>
    )
}

export default Web
