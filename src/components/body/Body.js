import React from 'react'
import './body.css'
import About from'./about/About'
import Project from './project/Project'
import Skill from './skill/Skill'
import Work from './work/Work'
import Contact from './contact/Contact'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="skill">
                <Skill />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
