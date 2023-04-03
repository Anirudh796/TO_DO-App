import React from 'react';
import { deleteTodo } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import '../../styles/card.css';
import {NavLink} from 'react-router-dom';
import { useNavigate } from  'react-router-dom';

const TodoSummary = ({todo}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getColor = () =>{
        const currentDate = new Date().toISOString().split("T")[0];
        
        if(currentDate === todo.dueDate){
            return 'yellow';
        }
        else if(todo.dueDate < currentDate){
            return 'red';
        }
        else{
            return 'transparent';
        }

    }
    return (
        <div className="card cta-card" style={{backgroundColor : getColor()}} >
            <h1 onClick={() => navigate(`/todo/${todo.id}`) } style={{cursor:"pointer"}}>{todo.title}</h1>
               <p className='due-date'>{todo.dueDate}</p>
               <p className='description'>{todo.description}</p>
               <p className='priority'>{todo.priority}</p>
            <NavLink className='cta-btn' to={`/update-task/${todo.id}`}>EDIT</NavLink>
            <button className='cta-btn' onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>
        
        </div>
    )
}

export default TodoSummary;