import React from 'react';
import './login.css';
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
        <div className='box'>
          <div className='checkboxcon'>
            <input type='checkbox'/>
          </div>
          <div>
            <p className='ct'>Remember me</p>
          </div>
          <div className='forgot'>
            <a href=''>Forgot your password ?</a>
          </div>
        </div>
        <a className='proceed'>Login</a>
        <div className='Register'>
          <p>Don't you have an account ?</p>
          {/* Use the Link component for internal links */}
          <Link to="/RegPage" className='options'>Register an account</Link>
        </div>
        <div className='Log2'>
          <p>Are you a farmer ?</p>
          <Link to="/Farmers_reg" className='farmerl'>Register as a farmer</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
