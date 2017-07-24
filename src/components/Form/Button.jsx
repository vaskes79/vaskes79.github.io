import React from 'react';
import './Button.css';

function Button({type, id, text}) {
    return (
        <div className="Form__field">
            <button type={ type } value={ text } className="Form__button">{ text }</button>
        </div>
    )
}

export default Button;