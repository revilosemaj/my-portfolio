import React from 'react'
import { 
    SiJavascript,
    SiFirebase,
    SiFlutter 
} from 'react-icons/si';
import { FaReact } from "react-icons/fa";
import './skills.styles.css'

const Skills = () => {
    return (
        <section id="skills">
            <h3>Things We Can Do</h3>
            <ul className="grid">
                <li>
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
    )
}

export default Skills
