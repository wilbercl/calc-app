import React from "react";
import PropTypes from "prop-types";
import "./Button.css"

const Button = ({type, text, clickHandler}) =>{
    //debugger
    return (     
            <button className={type} onClick={()=>{
                console.log('onClick en el Button')
                //debugger
                clickHandler(text)
            }}>
                <span>
                    {text}
                </span>
            </button>
        )
}

Button.propTypes ={
    type:PropTypes.string,
    text:PropTypes.string.isRequired,
    clickHandler:PropTypes.func.isRequired
}

export default Button