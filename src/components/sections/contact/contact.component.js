import React from 'react'
import './contact.styles.css'

const Contact = () => {
    return (
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
    )
}

export default Contact
