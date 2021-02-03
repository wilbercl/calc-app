//importacion
import React, {useState} from 'react'

import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers";
import Result from './components/Result'
import "./App.css";

//generacion de la funcion
const App = () =>{
    const [stack, setStack] = useState("")

    const clickHandler = (text) => {
        console.log("Button.clickHandler ",text)
        setStack(text)
    }

    console.log("Renderizacion App")
    return (
    <main className='react-calculator'>
        <Result value = {stack}/>
        <Numbers onClickNumber={clickHandler}/>
        <Functions onContentClear={() =>{console.log("Clear")}}
                   onDelete={() =>{console.log("Delete")}}/>
        <MathOperations onClickOperation={operation => { console.log("Operation ", operation)}}
                        onClickEqual={equal => {console.log("Equal ", equal)}}/>
    </main>)
}

//exportacion
export default App;