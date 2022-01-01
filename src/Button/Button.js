import "./Button.css";

import React from 'react';


const Button = (props) => {
    return ( <
        div className = {
            `key ui huge inverted ${props.color} button`
        }
        value = {
            props.value
        }
        size = {
            props.size
        }
        onClick = {
            props.onClick
        } > {
            props.label
        } <
        /div>
    )
}

Button.defaultProps = {
    label: 'num',
    color: 'primary',
    value: 'null',
};

export default Button