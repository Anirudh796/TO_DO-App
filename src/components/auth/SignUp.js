import React , {useState} from 'react';
import '../../styles/formstyle.css'

const SignUp = () => {
    const initialValues = {email:"",password:"",firstName:"",lastName:""};
    const [formValues, setformValues] = useState(initialValues);

    const handleChange = (e) => {
           const {name,value} = e.target;
           setformValues({...formValues,[name]:value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

    };
    return (
       <div className="main">
        <div className="main-form">
         <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="main-form-field">
            <label htmlFor='email' >Email</label>
            <br></br>
            <input type="email" className="input-field" id="email" name="email"  onChange={handleChange} value={formValues.email} placeholder="email " />
            <br></br>
            <br></br>
            <label htmlFor='password'> Password </label>
            <br></br>
            <input type="password" className="input-field" id="password" name="password"  onChange={handleChange} value={formValues.password} placeholder="password" />
            <br></br>
            <br></br>
            <label htmlFor='firstName'> First Name </label>
            <br></br>
            <input type="text" className="input-field" id="firstName" name="firstName"  onChange={handleChange} value={formValues.firstName} placeholder="firstName"/>
            <br></br>
            <br></br>
            <label htmlFor='lastName'> Last Name </label>
            <br></br>
            <input type="text" className="input-field" id="lastName" name="lastName"  onChange={handleChange} value={formValues.lastName} placeholder="lastName"/>
            <br></br>
            <br></br>
            <input type="submit" className="submit-button" id="submit" name="submit" value="SIGN UP"/>
        </form>
        </div>
       </div>
    )
}

export default SignUp;