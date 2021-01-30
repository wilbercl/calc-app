import React from 'react'
import PropTypes from "prop-types"

const Result = ({value}) =>{
    console.log("Renderizacion Result", value)
    return (<div className="result">
        <span>
            {value}
        </span>
    </div>)
} 

Result.propTypes = {
    value:PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result;