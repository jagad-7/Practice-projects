import React, {useState} from 'react'
import './Calculator.css'
import Keypad from './Keypad'


export default function Calculator() {
    const [input, setInput] = useState("")

    function handleClick(value){
        setInput(input + value)
    }

    function calculate(value){
        let outputval = eval(input)
        setInput(outputval)
    }
    function handleClear(){
        setInput('')
    }

  return (
    <div className='container'>
        <h1>Calculator App using ReactJS</h1>
        <div className='calculator'>
            <input type='text' value={input} className='output' />
            <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear} />
        </div>
    </div>
  )
}
