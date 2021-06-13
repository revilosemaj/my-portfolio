import React from 'react'
import './main.styles.css'
import Welcome from '../sections/welcome/welcome.component';
import Projects from '../sections/projects/projects.component';
import Skills from '../sections/skills/skills.component'
import Contact from '../sections/contact/contact.component'

function Main() {
    return (
        <main className="main">
            <Welcome />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}

export default Main
