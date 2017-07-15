import React, {PropTypes} from 'react';
import './Content.css';

function Content (props) {
    let {name, description} = props;
    return (
        <section className="Content">
            <div className="Content__wrap">
                <h1 className="Content__header">{name}</h1>
                <p className="Content__description">{description}</p>
            </div>
        </section>
    );
}

Content.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Content;