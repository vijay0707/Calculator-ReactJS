import "./index.css";

import React from 'react';
import {
    useState
} from "react";
import ReactDOM from 'react-dom';
import Button from './Button/Button'
import ButtonPad from './ButtonPad/ButtonPad';
import Display from './Display/Display';


const App = () => {

    const [data, setData] = useState("");

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(data);
            setData(result);
        } catch (e) {
            setData('error');
        }
    }


    const handleClick = e => {
        const value = e.target.getAttribute('value');
        switch (value) {
            case 'clear':
                setData('');
                break;
            case 'equal':
                calculate();
                break;
            default:
                setData(data + value);
        };
    }

    return ( <
        div className = "App ui center aligned container" >
        <
        h1 className = "heading" > CALCULATOR < /h1> <
        Display data = {
            data
        }
        /> <
        ButtonPad >
        <
        Button label = "9"
        value = "9"
        onClick = {
            handleClick
        }
        /> <
        Button label = "4"
        value = "4"
        onClick = {
            handleClick
        }
        /> <
        Button label = "3"
        value = "3"
        onClick = {
            handleClick
        }
        /> <
        Button label = "C"
        value = "clear"
        color = "red"
        onClick = {
            handleClick
        }
        />

        <
        Button label = "8"
        value = "8"
        onClick = {
            handleClick
        }
        /> <
        Button label = "5"
        value = "5"
        onClick = {
            handleClick
        }
        /> <
        Button label = "2"
        value = "2"
        onClick = {
            handleClick
        }
        /> <
        Button label = "0"
        value = "0"
        onClick = {
            handleClick
        }
        />

        <
        Button label = "7"
        value = "7"
        onClick = {
            handleClick
        }
        /> <
        Button label = "6"
        value = "6"
        onClick = {
            handleClick
        }
        /> <
        Button label = "1"
        value = "1"
        onClick = {
            handleClick
        }
        /> <
        Button label = "."
        value = "."
        onClick = {
            handleClick
        }
        />

        <
        Button label = "*"
        value = "*"
        color = "purple"
        onClick = {
            handleClick
        }
        /> <
        Button label = "-"
        value = "-"
        color = "purple"
        onClick = {
            handleClick
        }
        /> <
        Button label = "+"
        value = "+"
        color = "purple"
        onClick = {
            handleClick
        }
        /> <
        Button label = "/"
        value = "/"
        color = "purple"
        onClick = {
            handleClick
        }
        />

        <
        Button label = "="
        value = "equal"
        color = "green"
        size = '2'
        onClick = {
            handleClick
        }
        />                  <
        /ButtonPad>

        <
        br / > < br / > < br / >

        <
        a href = "https://github.com/vijay0707" >
        <
        i class = "github huge icon" > < /i> <
        h2 > Vijay < /h2> <
        /a> 

        <
        /div>
    );
};


ReactDOM.render( <
    App / > , document.querySelector('#root')
);