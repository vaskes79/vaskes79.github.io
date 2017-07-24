import React, { Component } from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
           name: props.name || 'form', 
        };
    }
    render() {
        console.log(this.props.name)
        return (
            <form className="Form">
                <h1 className="Form__title">{ this.state.name }</h1>
                <div className="Form__field--half">
                    <Input name="name" id="name" />
                    <Input name="email" id="email" />
                </div>
                <Input name="message" id="message" textArea={true} />
                <div className="Form__actions">
                   <Button type="submit" text="Send Messages" id="Form" /> 
                   <Button type="resset" text="Reset" id="Form_Resset" /> 
                </div>
            </form>
        );
    }
}

export default Form