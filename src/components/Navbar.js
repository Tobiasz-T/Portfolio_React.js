import React from 'react';
import '../App.css';
import {  NavLink } from "react-router-dom";


function Nav() {
    return (   
          
        <div id="nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='/' className="nav-link"> Home </NavLink>
            <NavLink to='/projects' className="nav-link">Projects</NavLink>
            <NavLink to='/experience' className="nav-link">Experience</NavLink>
            <NavLink to='/skils' className="nav-link">Skils</NavLink>
            <NavLink to='/contact' className="nav-link">Contact</NavLink>
          </nav>
          </div>
          
    );  
}


export default Nav;