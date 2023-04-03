import React from 'react';
import TodoSummary from './TodoSummary';
import { useSelector } from 'react-redux'; 
import '../../styles/todolist.css';

const TodoList = () => {
  const todos = useSelector((state)=> state.todoReducers.todos);

  return(
    <div className="cta-section">
      <div className="cards-container">
            {todos && todos.map((todo) => {
                 return (
                  <TodoSummary todo={todo} key={todo.id} />
                 )
            })}
          
        </div>
    </div>
  )
}
export default TodoList;