import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import './Profile.css';

const LOGIN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;

// const PROFILE_QUERY = gql`
//   query {
//     currentUser {
//       id
//       username
//       picture
//     }
//   }
// `;


const Profile = () => (
  <Query query={LOGIN_QUERY}>
    {({ data: { isLoggedIn } }) => {
      if (isLoggedIn) {
        return (
          <span>
            HEY You are logged IN
          </span>
        );
      }
      return (
        <Link className="profileLogin" to="/login">
          Login
        </Link>
      );
    }}
  </Query>
);

export default Profile
