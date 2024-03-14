import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css'; 

function LoginForm() {

  return (
    <div className="loginPage">
    <div className="wrapper">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
         
            required
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
          
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
            />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
