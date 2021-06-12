import React from 'react'
import './footer.styles.css'

function Footer() {
    return (
        <footer>
            <div className="grid">
                <p className="copyright">Copyright 2020 Cosmo Junkie</p>
                <ul className="social">
                <li>
                    <a href="/">
                        <img src="/assets/icon_fb.svg" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src="/assets/icon_tw.svg" alt="twitter" />
                    </a>
                </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer 
