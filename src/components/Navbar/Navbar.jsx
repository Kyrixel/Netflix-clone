import React from "react";
import "./Navbar.css";
import logo from "../../assets/full-logo.png";
import search_icon from "../../assets/search-icon.svg";
import bell_icon from "../../assets/bell-icon.svg";
import caret_icon from "../../assets/caret-icon.svg";
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className="icon" />
        <p>Children</p>
        <img src={bell_icon} alt="notifications" className="icon" />
        <div className="navbar-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
            className="profile"
          />
          <img src={caret_icon} alt="dropdown" className="caret" />
          <Link to={'/login'} className="dropdown">
            <p>Sign Out</p>

            {/* <ul>
              <li>Manage Profiles</li>
              <li>Account</li>
              <li>Help Center</li>
              <li>Sign Out</li>
            </ul> YE ABHI USE NHI KARNA BAADMEIN DEEKHNA HAI IDK MAN*/}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
