import React from "react";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from "./SignedOutLinks";
import '../../styles/navbarstyle.css';
import {  useNavigate } from 'react-router-dom';
import { removeTodo } from '../../actions/actions';
import { useDispatch , useSelector } from 'react-redux';

const Navbar = (props) =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state)=> state.todoReducers.token);
  const handleClick = () =>{
        dispatch(removeTodo());
        const newToken = "";
        const newTodos = [];
        localStorage.setItem('token',JSON.stringify(newToken));
        localStorage.setItem('todos',JSON.stringify(newTodos));
        navigate("/signin");
  }
  const links = token ? <SignedInLinks handleClick={handleClick}/> : <SignedOutLinks />;
 return(
  
    <nav className='navbar'>
      <div className='heading'>
        <h4>TO_DO APP</h4>
      </div>
      {/*<ul className='navbar-links'>
       <li><NavLink className="navbar-link" to='/'>Home</NavLink></li>
       <li><NavLink className="navbar-link" to='/signup'>Signup</NavLink></li>
       <li><NavLink className="navbar-link" to='/signin'>Login</NavLink></li>
       <li><NavLink className="navbar-link" to='/create-todo-task'>Add-Task</NavLink></li>
       <li><button className="navbar-button" onClick={handleClick}>Log-Out</button></li>
     </ul>*/}
     {links}
    </nav> 
    
 )
}

export default Navbar