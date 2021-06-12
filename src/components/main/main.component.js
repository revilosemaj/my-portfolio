import React from 'react'
import './main.styles.css'
import AddFileImage from '../../assets/add_file.svg';
import { 
    SiJavascript,
    SiFirebase,
    SiFlutter 
} from 'react-icons/si';
import { FaReact } from "react-icons/fa";

function Main() {
    return (
        <main>
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
            <section id="skills">
                <h3>Things We Can Do</h3>
                <ul className="grid">
                    <li>
                        {/* <img src="/assets/comet_1.svg" alt="comet" /> */}
                        <SiJavascript size="5em"  color="yellow"/>
                        <h4>Javascript</h4>
                    </li>
                    <li>
                        <FaReact size="5em" color="#61dafb" />
                        <h4>React</h4>
                    </li>
                    <li>
                        <SiFirebase size="5em" color="orange"/>
                        <h4>Firebase</h4>
                    </li>
                    <li>
                        <SiFlutter size="5em" color="orange" />
                        <h4>Flutter</h4>
                    </li>
                </ul>
                <p className="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lacus diam. Mauris fringilla consectetur nibh, sit amet tempus augue.</p>
            </section>
            <section id="contact">
                <h3>Get In Touch</h3>
                <p className="leading">Lorem ipsum dolor sit amet, consectetur.</p>
                <form>
                    <input type="text" placeholder='NAME' />
                    <input type="email" placeholder='EMAIL' />
                    <textarea placeholder='YOUR MESSAGE'></textarea>
                    <button className="button">Send Flare</button>
                </form>
            </section>
        </main>
    )
}

export default Main
