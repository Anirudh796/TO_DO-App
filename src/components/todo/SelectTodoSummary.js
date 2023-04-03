import React from 'react';
import '../../styles/card.css';
import {NavLink} from 'react-router-dom';

const SelectTodoSummary = ({todo , handleChange}) => {
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
        <div className="card cta-card" style={{backgroundColor : getColor()}}>
            <h1>{todo.title}</h1>
            <p className='due-date'>{todo.dueDate}</p>
            <p className='description'>{todo.description}</p>
            <p className='priority'>{todo.priority}</p>
            <NavLink className='cta-btn' to={`/update-task/${todo.id}`}>EDIT</NavLink>
            <input className="checkbox-field" type="checkbox" value={todo.id} onChange={handleChange}/>
            
        
        </div>
    )
}

export default SelectTodoSummary;