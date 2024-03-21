import React, {useState} from 'react'

export default function TwoDataBinding() {
    let [num, setNum] = useState(100)

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>{setNum(200)}}>Click</button>
        <br></br>
        <input type='text' onChange={(e)=>{
            let temp = e.target.value
            setNum(temp)
        }} value={num} />
    </div>
  )
}
