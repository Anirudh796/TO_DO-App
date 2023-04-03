import React , {useState,useEffect} from 'react';
import { addToken } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from  'react-router-dom';
import '../../styles/formstyle.css';
import Axios from 'axios';


const SignIn = () => {
    const initialValues = {email:"",password:""};
    const [formValues, setformValues] = useState(initialValues);
    const [eEmail, seteEmail] = useState(false);
    const [ePassword, setePassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorMsgEmail = <p className="input-field" style={{color:'white',borderColor:'red',backgroundColor:'red'}}>Enter a valid Email Address</p>
    const errorMsgPassword = <p className="input-field" style={{color:'white',borderColor:'red',backgroundColor:'red'}}>Enter a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character</p>
    

    const handleChange = (e) => {
           const {name,value} = e.target;
           setformValues({
            ...formValues,
            [name]:value
        })
    };

    useEffect(()=>{
        const token = localStorage.getItem('token') 
        ? JSON.parse(localStorage.getItem('token'))
        : "";
        if(token!==""){
            navigate("/");
        }
    })

    const emailValidator = (email) =>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(validRegex);
    }

    const passwordValidator = (password) =>{
        var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        return password.match(validPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
        if(!emailValidator(formValues.email)){
            console.log("does not matche");
            seteEmail(true);
        }
        else{
            console.log("matches");
            seteEmail(false);
        }

        if(!passwordValidator(formValues.password)){
            console.log("Invalid Password");
            setePassword(true);
        }
        else{
            console.log("Valid Password");
            setePassword(false);
        }
       if(emailValidator(formValues.email) && passwordValidator(formValues.password)){
           Axios.get('https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609')
           .then(
              (response) => {
                console.log(response);
                let res_token = response.data.token;
                dispatch(addToken(res_token));
                navigate("/"); 
              }
            )
        }
    };

    
    return (
       <div className='main'>
        <div className='main-form'>
        <h2 >Login</h2>
        <form onSubmit={handleSubmit} className="main-form-field">
            <label htmlFor='email' >Email</label>
            <br></br>
            <input type="text" className="input-field" id="email" name="email"  onChange={handleChange} value={formValues.email} placeholder="email" />
            {eEmail && errorMsgEmail}
            <br></br>
            <br></br>
            <label htmlFor='password'> Password </label>
            <br></br>
            <input type="password" className="input-field" id="password" name="password"  onChange={handleChange} value={formValues.password} placeholder="password"/>
            {ePassword && errorMsgPassword}
            <br></br>
            <br></br>
            <input type="submit" className="submit-button" id="submit" name="LOGIN" value="Sign in"/>
          
        </form>
        </div>
       </div>
    )
    
    
}

export default SignIn;