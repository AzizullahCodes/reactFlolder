import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const userHandler = () => {
    let obj = {
      name,
      email,
      password,
    };

    let getUser = JSON.parse(localStorage.getItem("user")) || null;

    if (!getUser) {
      localStorage.setItem("user", JSON.stringify(obj));
      alert("succefully signup");
      navigate('/login')
    } else {
      alert("user already existed");
      navigate("/login");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signupPage">
      <div className="signupContainer">
        <div className="logo">
          <h1>DilsayBuy</h1>
        </div>

        <div className="signupCard">
          <h2>Create Account</h2>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="new-email"
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

          <button className="signupBtn" onClick={userHandler}>
            Create your account
          </button>

          <p className="terms">
            By creating an account, you agree to DilsayBuy's
            Terms of Service and Privacy Policy.
          </p>

          <hr />

          <div className="loginSection">
            <span>Already have an account?</span>
            <Link to="/login"> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;