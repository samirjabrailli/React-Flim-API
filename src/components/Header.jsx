import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className="d-flex jusifay-content-center  aligin-items-center bg-dark ">
        <NavLink className=" link text-light p-3" to="/home"> Home</NavLink>
        <NavLink className=" link text-light p-3" to="/about"> About</NavLink>
        <NavLink className=" link text-light p-3" to="/contact"> Contact</NavLink>
    </div>
  )
}

export default Header