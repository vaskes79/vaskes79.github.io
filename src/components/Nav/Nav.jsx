import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav">
                <a href="#" className="Nav__link">intro</a>
                <a href="#" className="Nav__link">works</a>
                <a href="#" className="Nav__link">about</a>
                <a href="#" className="Nav__link">contact</a>
            </nav>
        );
    }
}

export default Nav;