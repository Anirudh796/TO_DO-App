import React  from 'react';
import { useNavigate } from  'react-router-dom';

const InvalidPath = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      const token = localStorage.getItem('token') 
      ? JSON.parse(localStorage.getItem('token'))
      : "";
      if(token!==""){
        navigate("/");
      }else{
        navigate("/signin")
      }
    }

    return (

        <div>
            <p>Looks like you are lost in Space.Click below to go to valid Page</p>
            <button onClick={handleClick}>GO</button>
        </div>
    )


}


export default InvalidPath