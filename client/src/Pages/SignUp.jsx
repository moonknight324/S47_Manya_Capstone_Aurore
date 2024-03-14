import React from 'react';
import '../Styles/Login.css'; 
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

function SignUpForm() {

  return (
    <div className="loginPage">
    <div className="wrapper">
      <form>
        <h1>Sign Up</h1>
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
            type="email"
            placeholder="Email"
            required
          />
          <i><IoMail /></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <div className="register-link">
          <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SignUpForm;
