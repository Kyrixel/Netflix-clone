import React from "react";
import "./Login.css";
import logo from "../../assets/full-logo.png";
import background from "../../assets/login-bg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">

      <div className="login-background">
        <img src={background} alt="Background" className="background-image" />
        <div className="background-overlay"></div>
      </div>


      <div className="login-content">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1>Welcome Back!</h1>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <Link to="/" className="login-button">
            <button type="submit">
              Login
            </button>
          </Link>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>


      <div className="background-text">
        <h2>Discover a world of entertainment</h2>
        <p>Join us and explore thousands of movies and TV shows.</p>
      </div>
    </div>
  );
};

export default Login;
