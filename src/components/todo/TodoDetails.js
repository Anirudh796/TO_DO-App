import React from 'react';
import {useParams} from 'react-router-dom';
import {  useSelector} from 'react-redux';
import  '../../styles/tododetailsstyle.css';

const TodoDetails = () => {
   const params = useParams();
   const id=params.id;
   const todos = useSelector((state)=> state.todoReducers.todos);
   const todo = todos.find(todo => todo.id ===  id);
  return (
    
        <div className="details-card ">
            <div className="card-content">
              <div className='div-title'>
              <h3>Title: </h3><span className='details-title'>{todo.title}</span>
              </div>
              <div className='div-description'>
              <h3>Description:</h3>
              <div className='details-description'>{todo.description}</div>
              </div>
              <div className='div-dueDate'>
              <h3>Due Date:</h3><span className='details-dueDate'>{todo.dueDate}</span>
              </div>
              <div className='div-priority'>
              <h3>Priority:</h3><span className='details-priority'>{todo.priority}</span>
              </div>
            </div>  
        </div>
  )
}

export default TodoDetails;

