import React from "react";
import {NavLink} from 'react-router-dom'
import '../../styles/navbarstyle.css'

const SignedInLinks = (props) =>{
 return(
   <ul className='navbar-links'>
    <li><NavLink className="navbar-link" to='/'>Home</NavLink></li>
    <li><NavLink className="navbar-link" to='/create-todo-task'>Add Task</NavLink></li>
    <li><NavLink className="navbar-link" to='/select'>Select</NavLink></li>
    <li><button className="navbar-button" onClick={props.handleClick}>Log-Out</button></li>
   </ul>
 )
}

export default SignedInLinks