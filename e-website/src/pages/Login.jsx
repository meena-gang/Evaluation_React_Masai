import React, { useContext, useState } from 'react'
import axios from 'axios'
import { authContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// Please use below creds only to login in application
// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

const Login = () => {
    const auth = useContext(authContext);
    const navigate = useNavigate();

    const[details,setDetails] = useState({
        email:"",
        password:""
    });
    const inputHandler = (e) => {
        let newDetails = {...details, [e.target.name] : e.target.value};
        setDetails(newDetails);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const submitData = async () => {
            let a = await axios.post('https://reqres.in/api/login',details);
            if(a.data.token === 'QpwL5tke4Pnpja7X4'){
                auth.setAuth(true);
                navigate('/products');
            }
            else{
                auth.setAuth(false);
            }

        }
        submitData();
    }
  return (
    <div>
       <h2>Login Here</h2>
       <form onSubmit={submitHandler}>
            <input type='email' name='email' placeholder='Enter email' onInput={inputHandler}/><br/>
            <input type='password' name='password' placeholder='Enter password' onInput={inputHandler}/>
            <br/>
            <input type='submit'/>
       </form>
    </div>
  )
}

export default Login