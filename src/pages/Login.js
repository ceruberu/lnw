import React, { Component } from "react";
import FacebookLogo from "../images/f-logo.jpeg";
import GoogleLogo from "../images/g-logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

import "./Login.css";

const isProduction = process.env.NODE_ENV === "production";
const serverURL = isProduction
  ? "https://api.ceruberu.com"
  : "http://localhost:4000";

class Login extends Component {
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

    const gapiScript = document.createElement("script");
    gapiScript.src = "https://apis.google.com/js/api.js?onload=onGapiLoad";
    window.onGapiLoad = function onGapiLoad() {
      window.gapi.load("auth", { callback: onAuthApiLoad });
      function onAuthApiLoad() {
        window.gapi.auth.init();
      }
    };
    document.body.appendChild(gapiScript);
  }

  render() {
    return (
      <div className="Login">
        <div className="loginLogo">Welcome to lnw</div>
        <p className="loginType">Social Login</p>
        <a className="socialLogin facebook" href={`${serverURL}/auth/facebook`}>
          <img className="socialLogo" alt="facebookLogo" src={FacebookLogo} />
          Continue with Facebook
        </a>
        <a className="socialLogin google" href={`${serverURL}/auth/google`}>
          <img className="socialLogo" alt="googleLogo" src={GoogleLogo} />
          Continue with Google
        </a>

        {/* 
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
        */}
      </div>
    );
  }
}

export default Login;
