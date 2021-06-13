import React from 'react'
import './projects.styles.css'

const Projects = () => {
    return (
        <section id="projects">
            <h3>Some of our Projects</h3>
            <div className="projects grid">
                <a href="/">
                    <img src="/assets/project_1.png" alt="space race" />
                    <h4>Space Race Game</h4>
                </a>
                <a href="/">
                    <img src="/assets/project_2.png" alt="planet boy" />
                    <h4>Planet Boy API</h4>
                </a>
                <a href="/">
                    <img src="/assets/project_3.png" alt="captain cosmo" />
                    <h4>Captain Cosmo Blog</h4>
                </a>
            </div>
        </section>
    )
}

export default Projects
