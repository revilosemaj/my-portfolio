import React from 'react'
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide, AppBar } from '@material-ui/core';
import './header.styles.css'

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  }

function Header(props) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar color="#fff" >
                    <header className="header">
                        <nav className="site-nav grid">
                            <h1>Alfie's Border</h1>
                            <ul>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}

export default Header
