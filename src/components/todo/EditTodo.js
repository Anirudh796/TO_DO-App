import React , {useState, useEffect} from 'react';
import {  deleteTodo,  addEditTodo} from '../../actions/actions';
import { useDispatch , useSelector} from 'react-redux';
import '../../styles/formstyle.css'
import {useParams} from 'react-router-dom';
import { useNavigate } from  'react-router-dom';


const EditTodo = () => {
    const params = useParams();
    const id=params.id;
    const todos = useSelector((state)=> state.todoReducers.todos);
    const todo = todos.find(todo => todo.id ===  id);
    const initialValues = {title:todo.title,description:todo.description,dueDate:todo.dueDate,priority:todo.priority};
    const [formValues, setformValues] = useState(initialValues);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name==="dueDate"){
            const currentDate = new Date().toISOString().split("T")[0];
            if(currentDate < value){
                setformValues({
                    ...formValues,
                    [name]:currentDate
                   })
            }
            else{
                setformValues({
                    ...formValues,
                    [name]:value
                   })
            }
        }
        else{
           setformValues({
            ...formValues,
            [name]:value
           })
        }
    };

 const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formValues);
     dispatch(deleteTodo(id))
     dispatch(addEditTodo(formValues,id));
     alert("Task Edited Successfully");
     navigate("/");
     

 };

 useEffect(()=>{
    const token = localStorage.getItem('token') 
    ? JSON.parse(localStorage.getItem('token'))
    : "";
    if(token === ""){
        navigate("/signin");
    }
})
    
    return(
       <div className="main">
       <div className='main-form'>
       <h2 >EDIT TO-DO Task</h2>
        <form onSubmit={handleSubmit} className='main-form-field'>
            <label htmlFor='title' >Title</label>
            <br></br>
            <input type="text" className="input-field" id="title" name="title"   value={formValues.title} placeholder="title" readOnly/>
            <br></br>
            <br></br>
            <label htmlFor='description'> Description </label>
            <br></br>
            <textarea className="input-field" rows="4" cols="50" id="description" name="description"  onChange={handleChange} value={formValues.description} placeholder="description" maxLength={100}></textarea>
            <br></br>
            <br></br>
            <label htmlFor='dueDate'> Due Date</label>
            <br></br>
            <input type="date" className="input-field" id="dueDate" name="dueDate" onChange={handleChange} value={formValues.dueDate} required/>
            <br></br>
            <br></br>
            <label htmlFor="priority">Priority</label>
           <br></br>   
           <select className="input-field" id="priority" name="priority" value={formValues.priority} disabled>
             <option value="high">High</option>
             <option value="medium">Medium</option>
             <option value="low">Low</option>
           </select>
           <br></br>
           <br></br> 
            <input type="submit" className="submit-button" id="submit" name="submit" value="EDIT Task"/>
          
        </form>
        </div>
        </div>
    )

}

export default EditTodo;