import "./Display.css";

import React from 'react'

const Display = (props) => {
    return ( <
        div className = "ui massive input Display" >
        <
        input type = "text"
        placeholder = "Enter"
        value = {
            props.data
        }
        /> < /
        div >
    )
}

export default Display