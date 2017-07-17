import React, { Component, PropTypes } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: this.props.navLinks || [],
        };

        this.navHandler = this.navHandler.bind(this);

    }

    navHandler(event) {
        event.preventDefault();

        let navLinks = this.state.navLinks.map( nav => {
            nav.status = false
            if(nav.id === event.target.id ) {
                nav.status = true;
                this.props.switchHandler(nav.id);
            }
            return nav;
        })

        this.setState({
            navLinks
        })
    }

    render() {
        let links = this.state.navLinks.map(({name, id }) => {
            return (<a href={id} id={id} key={id} className="Nav__link" onClick={this.navHandler}>{name}</a>)
        })
        return (
            <nav className="Nav">
                {links}
            </nav>
        );
    }
}

Nav.propTypes = {
    navLinks: PropTypes.array.isRequired,
};

export default Nav;