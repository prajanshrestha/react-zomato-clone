import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="max-width header">
      <Link to="/">
        <img src={logo} alt="Zomato-Logo" className="header-logo cursor-pointer" />
      </Link>
      <div className="header-right">
        {/* location and search container */}
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Nepalgunj</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>

        {/* profile */}
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">User</span>
          <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
}
