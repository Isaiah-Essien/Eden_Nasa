import React from 'react'
import './Reg.css';
import { Link } from 'react-router-dom';
// import FarmReg from '../routes/FarmReg';

const Reg = () => {
  return (
		<div className="cont">
			<div className="Login">
				<h1 className="Log-tit">
					<span>Sign</span>up
				</h1>
				<div className="forms">
					<p>First Name</p>
					<input type="text" className="log-info" placeholder="First name" />
					<p>Last Name</p>
					<input type="text" className="log-info" placeholder="Last Name" />
					<p>Email</p>
					<input type="text" className="log-info" placeholder="Email" />
					<p>Username</p>
					<input type="text" className="log-info" placeholder="Username" />
					<p>Password</p>
					<input type="text" className="log-info" placeholder="Password" />
					<p>confirm password</p>
					<input
						type="text"
						className="log-info"
						placeholder="confirm password"
					/>
				</div>
				<div className="box">
					<div className="checkboxcon">
						<input type="checkbox" />
					</div>
					<div>
						<p className="ct">Remember me</p>
					</div>
					<div className="forgot">
						<a href="">Forgot your password ?</a>
					</div>
				</div>
				<a className="proceed">Login</a>
				<div className="Register">
					<p>You already have an account ?</p>
					{/* Use the Link component for internal links */}
					<Link to="/LoginPage" className="options">
						Log in
					</Link>
				</div>
				<div className="Log2">
					<p>Are you a farmer ?</p>
					<Link to="/FarmReg" className="farmerl">
						Register as a farmer
					</Link>
				</div>
			</div>
		</div>
	)
};

export default Reg;
