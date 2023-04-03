import React , {useState} from 'react';
import {  deleteTodo} from '../../actions/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../../styles/selectstyle.css';
import SelectTodoSummary from './SelectTodoSummary';


const Select = () => {

    const [isChecked,setisChecked] = useState([]);
    const todos = useSelector((state)=> state.todoReducers.todos);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
          const { value , checked } =e.target;
          if(checked){
            setisChecked([...isChecked,value]);
          }
          else{
            setisChecked(isChecked.filter( (id) => id!==value));
          }
    }

    const deleteSelect = () => {
         isChecked.forEach((value)=>{
            dispatch(deleteTodo(value));
         })
    }
    console.log("todos"+todos);

    return(
        <div className="select-section">
        <div className="select-container">
            {todos && todos.map((todo) => {
                 return (
                    <SelectTodoSummary todo={todo} handleChange={handleChange} key={todo.id} />
                 )
            })}
        
        </div>
       { todos.length>0 ? <button className='select-btn' onClick={deleteSelect}>DELETE</button> : <h1>No Tasks to select</h1>}
    </div>
    )



}

export default Select