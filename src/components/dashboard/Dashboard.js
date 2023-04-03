import React , {useEffect} from 'react';
import TodoList from '../todo/TodoList.js';
import { useNavigate } from  'react-router-dom';
import '../../styles/dashboardstyle.css';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token') 
        ? JSON.parse(localStorage.getItem('token'))
        : "";
        if(token === ""){
            navigate("/signin");
        }
    })
    return(
        <div className="dashboard-container">
            
                <div >
                   <TodoList />
                </div>
                
           
        </div>
    )
   
}



export default Dashboard;