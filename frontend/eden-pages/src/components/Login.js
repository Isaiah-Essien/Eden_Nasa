import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='cont'>
    <div className='Login'>
      <h1 className='Log-tit'><span>Log</span>in</h1>
      <p>Email/Username</p>
      <input type='text' className='log-info' placeholder= 'Email/Username'/>
      <p>Password</p>
      <input type='text' className='log-info' placeholder= 'Password'/>
      <div className='box'><div className='checkboxcon'><input type='checkbox'/></div><div><p className='ct'>Remember me</p></div> <div  className='forgot'><a href=''>Forgot your password ?</a></div></div>
      <a className='proceed'>Login</a>
      <div className='Register'><p>Don't you have an account ?</p> <link href='' className='options'> Register an account</link></div>
      <div className='Log2'><p>Are you a farmer ?</p> <link href='' className='options'> Register as a farmer</link></div>
      </div>
    </div>
  )
}

export default Login