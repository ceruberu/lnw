import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginLogo">Welcome to lnw</div>
        <p className="loginType">Social Login</p>
        <div className="socialLogin">Login with Facebook</div>
        <div className="socialLogin">Login with Google</div>
        <p className="loginType">Email Login</p>
        <form className="emailLoginForm">
          <input
            className="emailLoginInput"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="emailLoginInput"
            type="password"
            name="password"
            placeholder="Password"
          />
          <Link className="loginLink" to="/passwordRecovery">
            Forgot Password?
          </Link>
          <button className="emailLoginButton">LOGIN</button>
          <p>
            No account?
            <Link className="signupLink" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
