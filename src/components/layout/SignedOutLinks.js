import React from "react";
import {NavLink} from 'react-router-dom';
import '../../styles/navbarstyle.css';

const SignedOutLinks = () =>{
 return(
   <ul className='navbar-links'>
    
    <li><NavLink className="navbar-link" to='/signin'>Login</NavLink></li>
   </ul>
 )
}

export default SignedOutLinks