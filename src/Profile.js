import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

const LoginLink = (
  <Link className="profileLogin" to="/login">
    Login
  </Link>
);

const Profile = ({ loading, error, data, handleClose }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return LoginLink;
  return <Link onClick={handleClose} to={`/users/${data.me._id}`}>{data.me.nickname}</Link>;
};

export default Profile;
