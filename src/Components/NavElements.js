import React from 'react'
import logo from '../images/logo.png'
import '../Stylesheets/NavElements.css'
import '../App.css'

const NavElements = () => {
  return (
    <div className='NavElements'>
        <img className='Logo' src={logo}  alt='wow Talent'/>
        <ul className='NavList'>
            <ul >DASHBOARD</ul>
            <ul >CREATE</ul>
            <ul >BLOGS</ul>
            <ul >CAREERS</ul>
            <ul >HOW TO</ul>
            <ul >ABOUT US</ul>
            <ul >JOIN US</ul>
            <ul >CONTACT US</ul>
        </ul>
    </div>
  )
}

export default NavElements