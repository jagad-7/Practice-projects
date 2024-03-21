import React from 'react'
import './BGColor.css'


export default function BGColor() {
  return (
    <div className='Wrapper'>
        <h1>Change the background color in ReactJS</h1>
        <input  type='color' onChange={
            (e) => {
                    document.body.style.background = e.target.value
        }}/>
    </div>
  )
}
