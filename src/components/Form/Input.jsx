import React from 'react';
import './Input.css';

function Input({name, id, textArea=false, modifires=false}) {
    let inputField = textArea ? <textarea className="Form__textArea" name={name} id={id} rows="4"></textarea> : <input className="Form__input" type="text" name={ name } id={id} />;
    return (
        <div className={`Form__field ${modifires ? modifires : ''}` }>
            <label className="Form__label" for={id}>{ name }</label>
            { inputField }
        </div>
    )
}

export default Input;