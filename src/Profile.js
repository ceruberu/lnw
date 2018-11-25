import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import './Profile.css';

const PROFILE_QUERY = gql`
  query {
    me {
      displayName
    }
  }
`;

const LoginLink = () => (
  <Link className="profileLogin" to="/login">
    Login
  </Link>
)

const Profile = () => (
  <Query query={PROFILE_QUERY}>
    {({loading, error, data }) => {
      if (loading || error) return <LoginLink />;

      return (
        <div>
          { data.me.displayName}
        </div>
      );
    }}
  </Query>
);

export default Profile
