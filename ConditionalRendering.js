import React from 'react'
import './ConditionalRendering.css'

const loggedIn = true;
const isAdmin = true;

export default function ConditionalRendering() {
  return (
    <div>
        <Header />
        {/* Ternary operator  the both true and false condition use this way*/}
        {/* {
            isAdmin ? (<Admin></Admin>) : null
        } */}

        {/* && operator  this only condition true && use */}
        {
            isAdmin && (<Admin></Admin>) 
        }
    </div>
  )
}



function Header(){
    return(
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
           
           {/* Ternary operator */}
            {
                loggedIn ? ( <li>Logout</li>) : (<li>Login</li>)
            }
        </ul>
    )
}

function Admin(){
    return(
        <h1>This is Admin DashBoard</h1>
    )
}
