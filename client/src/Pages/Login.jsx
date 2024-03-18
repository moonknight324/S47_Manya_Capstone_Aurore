import React from 'react';
import '../Styles/Login.css';
import { Link } from 'react-router-dom'; 

function LoginForm() {
  const loginwithgoogle = () => {
    window.open("http://localhost:5000/auth/google/callback","_self")
  }
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
          <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
        </div>
      </form>
      <button className='login-with-google-btn' onClick={loginwithgoogle}>
            Log in with Google
          </button>
    </div>
    </div>
  );
}

export default LoginForm;
