import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="#" className="nav__link">intro</a>
                <a href="#" className="nav__link">works</a>
                <a href="#" className="nav__link">about</a>
                <a href="#" className="nav__link">contects</a>
            </nav>
        );
    }
}

export default Nav;