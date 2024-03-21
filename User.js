import React from 'react'
import './User.css'
import { Link, Outlet } from 'react-router-dom'

export default function User() {
  return (
    <div>
        <h1>This is User Component</h1>
        <Outlet />
        <div>
            <button><Link className='btn' to="orders">Orders</Link></button>
            <button><Link className='btn' to="profile">Profile</Link></button>
        </div>
    </div>
  )
}

export function Orders(){
    return(
        <div>
            <h3>This is Order Component</h3>
        </div>
    )
}

export function Profile(){
    return(
        <div>
            <h3>This is Profile Component</h3>
        </div>
    )
}