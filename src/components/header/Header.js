import React, {useState}  from 'react'
import './header.css'
import Mobile from './mobile/Mobile'
import Apps from '../../../node_modules/@mui/icons-material/Apps'
import Web from './web/Web'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                Rakesh Roy
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu ">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <Apps  style={{fontSize: '30px'}}/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>    
            </div>
            
        </div>
    )
}

export default Header
