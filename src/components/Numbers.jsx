import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//DRY Don't repeat yourself
const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButton = onClickNumber =>{
    return numbers.map(item => (<Button key={item} text={item.toString()} clickHandler={onClickNumber}/>))
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
    {
        renderButton(onClickNumber)
    }
    </section>
)

Numbers.propTypes = {
    onClickNumber:PropTypes.func.isRequired
}

export default Numbers