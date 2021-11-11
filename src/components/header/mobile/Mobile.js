import React from 'react'
import './mobile.css'
import Cancel from '../../../../node_modules/@mui/icons-material/Cancel'
import Brush from '../../../../node_modules/@mui/icons-material/Brush'
import Work from '../../../../node_modules/@mui/icons-material/Work'
import Laptop from '../../../../node_modules/@mui/icons-material/Laptop'
import Person from '../../../../node_modules/@mui/icons-material/Person'

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
                <Cancel style={{fontSize: '25px'}}/>
            </div>
            <div className="mobile-option-container">
                <div className="mobile-option">
                    <a href="#project">
                        <Brush  style={{fontSize: '25px'}}/> Project
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skill"> 
                        <Laptop style={{fontSize: '25px'}}/> Skill
                    </a>
                </div>
                <div className="mobile-option"> 
                    <a href="#work">
                        <Work style={{fontSize: '25px'}}/> Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <Person style={{fontSize: '25px'}}/>Contact
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Mobile
