import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Profile from './Profile';

import "./Sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.orig = document.body.className;
    document.body.className = `${this.orig} noScroll`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  componentWillUnmount() {
    document.body.className = this.orig;
  }

  render() {
    const { loading, error, data, handleClose, handlePropagation } = this.props;
    return (
      <div className="wrapper" onClick={handleClose}>
        <div className="sidebar" onClick={handlePropagation}>
          <div className="sidebarProfile">
            <Profile loading={loading} error={error} data={data} handleClose={handleClose}/>
          </div>
          <NavLink
            className="sidebarNavMenu"
            exact
            onClick={handleClose}
            to="/"
          >
            Main
          </NavLink>
          <NavLink
            className="sidebarNavMenu"
            onClick={handleClose}
            to="/featured"
          >
            Featured
          </NavLink>
          <NavLink
            className="sidebarBigMenu"
            onClick={handleClose}
            to="/guide"
          >
            Guide
          </NavLink>
          <div className="sidebarClasses">
            <NavLink onClick={handleClose} to="/guide/class/tank">
              <div className="sidebarClass class_tank-1x" />
              Tank
            </NavLink>
            <NavLink onClick={handleClose} to="/guide/class/warrior">
              <div className="sidebarClass class_warrior-1x" />
              Warrior
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/guide/class/assassin"
            >
              <div className="sidebarClass class_assassin-1x" />
              Assassin
            </NavLink>
            <NavLink onClick={handleClose} to="/guide/class/ranger">
              <div className="sidebarClass class_ranger-1x" />
              Ranger
            </NavLink>
            <NavLink onClick={handleClose} to="/guide/class/mage">
              <div className="sidebarClass class_mage-1x" />
              Mage
            </NavLink>
            <NavLink onClick={handleClose} to="/guide/class/support">
              <div className="sidebarClass class_support-1x" />
              Support
            </NavLink>
          </div>
          <NavLink
            className="sidebarBigMenu"
            onClick={handleClose}
            to="/community"
          >
            Community
          </NavLink>
          <NavLink
            className="sidebarSubMenu"
            onClick={handleClose}
            to="/community/type/news"
          >
            News
          </NavLink>
          <NavLink
            className="sidebarSubMenu"
            onClick={handleClose}
            to="/community/type/general"
          >
            General
          </NavLink>
          <NavLink
            className="sidebarSubMenu"
            onClick={handleClose}
            to="/community/type/funny"
          >
            Funny
          </NavLink>
          <div className="sidbarLogout">Log Out</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
