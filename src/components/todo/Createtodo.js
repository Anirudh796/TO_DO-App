import React , {useState, useEffect} from 'react';
import { addTodo } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import '../../styles/formstyle.css';
import { useNavigate } from  'react-router-dom';


const Createtodo = () => {
    const initialValues = {title:"",description:"",dueDate:"",priority:"medium"};
    const [formValues, setformValues] = useState(initialValues);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [eTitle,seteTitle] = useState(false);
    const [eDate,seteDate] = useState(false);
    const errorMsgTitle = <p className="input-field" style={{color:'white',borderColor:'red',backgroundColor:'red'}}>Make sure the title does contain only alphanumeric characters</p>
    const errorMsgDate = <p className="input-field" style={{color:'white',borderColor:'red',backgroundColor:'red'}}>Please Pick a Date</p>

    useEffect(()=>{
        const token = localStorage.getItem('token') 
        ? JSON.parse(localStorage.getItem('token'))
        : "";
        if(token === ""){
            navigate("/signin");
        }
    })
     const isAphanumeric = (str) => {
        return /^[a-zA-Z0-9]+$/.test(str);
     }

    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name==="dueDate"){
            console.log("In dueDAte")
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

    const addToDatabse = () =>{
        dispatch(addTodo(formValues));
        alert("Task Created Successfully");
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        if(!isAphanumeric(formValues.title)){
            seteTitle(true);
            
        }
        else{
            seteTitle(false);
        }
        if(formValues.dueDate === ""){
            seteDate(true);
        }
        else{
            seteDate(false);
        }

        if(isAphanumeric(formValues.title) && formValues.dueDate!==""){
            setTimeout(addToDatabse,50);
        }
        
        

    };
    
    
    return (
       <div className="main">
       <div className='main-form'>
       <h2 >Create TO-DO Task</h2>
        <form onSubmit={handleSubmit} className='main-form-field'>
            <label htmlFor='title' >Title</label>
            <br></br>
            <input type="text" className="input-field" id="title" name="title"  onChange={handleChange} value={formValues.title} placeholder="title" maxLength={20} />
            {eTitle && errorMsgTitle}
            <br></br>
            <br></br>
            <label htmlFor='description'> Description </label>
            <br></br>
            <textarea className="input-field" rows="4" cols="50" id="description" name="description"  onChange={handleChange} value={formValues.description} placeholder="description" maxLength={100}></textarea>
            <br></br>
            <br></br>
            <label htmlFor='dueDate'> Due Date</label>
            <br></br>
            <input type="date" className="input-field" id="dueDate" name="dueDate" onChange={handleChange} value={formValues.dueDate} />
            {eDate && errorMsgDate}
            <br></br>
            <br></br>
           <label htmlFor="priority">Priority</label>
           <br></br>   
           <select className="input-field" id="priority" name="priority" value={formValues.priority} onChange={handleChange}>
             <option value="high">High</option>
             <option value="medium">Medium</option>
             <option value="low">Low</option>
           </select>
           <br></br>
           <br></br> 
            <input type="submit" className="submit-button" id="submit" name="submit" value="Add Task"/>
          
        </form>
        </div>
        </div>
         
    )
}


export default Createtodo;