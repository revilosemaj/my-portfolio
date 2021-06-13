import React from 'react'
import AddFileImage from '../../../assets/add_file.svg';
import './welcome.styles.css'

const Welcome = () => {
    return (
        <section id="welcome" className="grid">
            <div className="welcome-text">
                <h2>Space Enthusiast<br />& JavaScript Developer</h2>
                <p className="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo consequat.</p>
                <a href="#projects" className="button">View our work</a>
            </div>
            <div className="welcome-img">
                <img src={AddFileImage} alt="Add File Illustrator" />
            </div>
    </section>
    )
}

export default Welcome
