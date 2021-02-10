/*eslint no-eval: 0*/  // manera de desactivar el warning de eval.

//importacion
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers";
import Result from './components/Result'
import "./App.css";

//generacion de la funcion
const App = () =>{
    const [stack, setStack] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)// devuelve un array de los numeros
    const neg = items.length===1 && Math.sign(parseInt(stack)) < 0 ? true : false //para saber si el resultado es negativo
    
    const clickHandler = (text) => {
        console.log("Button.clickHandler ",text)
        setStack(`${stack}${text}`)
    }

    console.log("Renderizacion App")
    return (
    <main className='react-calculator'>
        <Result value = {items.length >0 ? neg ? `${items[items.length-1]}-` : items[items.length-1] : "0"}/>
        <Numbers onClickNumber={clickHandler}/>
        <Functions 
            onContentClear={() =>{
                console.log("Clear")
                setStack("")}}
            onDelete={() =>{
                if(stack.length >0){
                    console.log("Delete")
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack)
                }
                }}/>
        <MathOperations 
            onClickOperation={operation => { 
                console.log("Operation ", operation)
                setStack(`${stack}${operation}`)}}
            onClickEqual={equal => {
                console.log("Equal ", equal)
                setStack(eval(stack).toString())
                }}/>
    </main>)
}

//exportacion
export default App;