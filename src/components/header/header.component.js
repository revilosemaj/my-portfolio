import React from 'react'
import './header.styles.css'
import Scrollspy from 'react-scrollspy'

function Header() {
    return (
        <header className="header">
            <nav className="site-nav grid">
                <h1>Alfie's Border</h1>
                <ul>
                <Scrollspy 
                    items={ ['projects', 'skills', 'contact'] } 
                    currentClassName="is-current">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </Scrollspy>
                </ul>
            </nav>
        </header>
    )
}

export default Header
