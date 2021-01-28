//importacion
import React from 'react'

import Button from "./components/Button"
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations"
import Result from './components/Result'
import "./App.css";


//generacion de la funcion
const App = () =>{
    const clickHandler = (text) => {
        console.log("Button.clickHandler ",text)
    }

    console.log("Renderizacion App")
    return (
    <main className='react-calculator'>
        <Result value = {undefined}/>
        <div className="numbers">
            <Button text={"1"} clickHandler={clickHandler}/>
            <Button text={"2"} clickHandler={clickHandler}/>
            <Button text={"3"} clickHandler={clickHandler}/>
            <Button text={"4"} clickHandler={clickHandler}/>
            <Button text={"5"} clickHandler={clickHandler}/>
            <Button text={"6"} clickHandler={clickHandler}/>
            <Button text={"7"} clickHandler={clickHandler}/>
            <Button text={"8"} clickHandler={clickHandler}/>
            <Button text={"9"} clickHandler={clickHandler}/>
            <Button text={"0"} clickHandler={clickHandler}/>
        </div>
        <Functions onContentClear={() =>{console.log("Clear")}}
                   onDelete={() =>{console.log("Delete")}}/>
        <MathOperations onClickOperation={operation => { console.log("Operation ", operation)}}
                        onClickEqual={equal => {console.log("Equal ", equal)}}/>
    </main>)
}

//exportacion
export default App;