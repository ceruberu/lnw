import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSocialLogin = this.handleSocialLogin.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "200469147505716",
        cookie: true,
        xfbml: true,
        version: "v3.2"
      });

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return (
      <div className="Login">
        <div className="loginLogo">Welcome to lnw</div>
        <p className="loginType">Social Login</p>
        <a 
          className="socialLogin" 
          href="http://localhost:4000/auth/facebook"
        >
          Login with Facebook
        </a>
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
