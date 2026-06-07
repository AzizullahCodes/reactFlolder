import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  const navigate = useNavigate('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    let getData = JSON.parse(localStorage.getItem('user')) || null;

    if (getData) {
      if (
        email === getData.email &&
        password === getData.password
      ) {
        alert('login successful');
        // localStorage.setItem("isLoggedIn", "true") && localStorage.setItem("isAvailable", "false");
        navigate('/');
      } else {
        alert('wrong password and email');
      }
    } else {
      alert('user not existed');
      navigate('/signup');
    }

    setPassword('');
    setEmail('');
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">

        <div className="logo">
          <h1>DilsayBuy</h1>
        </div>

        <div className="loginCard">

          <h2>Sign In</h2>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoCapitalize="new-email"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="new-password"
            />
          </div>

          <button
            className="loginBtn"
            onClick={loginHandler}
          >
            Sign In
          </button>

          <p className="terms">
            By continuing, you agree to DilsayBuy's
            Terms & Conditions and Privacy Policy.
          </p>

          <hr />

          <div className="signupSection">
            <span>New to DilsayBuy?</span>
            <Link to="/signup"> Create Account</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;