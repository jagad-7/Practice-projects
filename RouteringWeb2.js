import React from "react";
import './RouteringWeb.css'
import Home from "./Home2";
import AboutUs from "./AboutUs2";
import ContactUs from "./ContactUs2";
import Login from "./Login2";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import User, { Orders, Profile } from "./User";

function Header() {
  return (
    <div className="rout">
    <ul>
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link className="link" to="/about">AboutUs</Link>
      </li>
      <li>
        <Link className="link" to="/contact">ContactUs</Link>
      </li>
      <li>
        <Link className="link" to="/login">Login</Link>
      </li>
      <li>
        <Link className="link" to="/user">User</Link>
      </li>
    </ul>
    </div>
  )
}

export default function RouteringWeb2() {
  return (
    <div>
      <h1>Routering Components</h1>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />

          <Route path="user" element={<User />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
