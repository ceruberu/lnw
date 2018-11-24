import React, { Component } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

import "./Signup.css";

const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterUserInput) {
    registerUser(input: $input) {
      authToken
    }
  }
`;

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      nickname: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Mutation mutation={REGISTER_USER}>
        {(registerUser, { loading, error, data }) => (
          <div className="Signup">
            <Link to="/" className="SignupLogo">
              Welcome to lnw
            </Link>
            <h2 className="SignupType">Registration</h2>
            <form 
              className="emailSignupForm"
              onSubmit={e => {
                e.preventDefault();
                registerUser({variables: {
                  input: {
                    email: this.state.email,
                    nickname: this.state.nickname,
                    password: this.state.password
                  }
                }})
              }}
            >
              <input
                className="emailSignupInput"
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <input
                className="emailSignupInput"
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={this.state.nickname}
                onChange={this.handleChange}
              />
              <input
                className="emailSignupInput"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button type="submit" className="emailSignupButton">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Signup;
