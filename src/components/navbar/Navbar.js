import React from "react";
import "./Navbar.css";
import { BellIcon } from "../../assets/BellIcon";
import { MailIcon } from "../../assets/MailIcon";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-right-container">
        <div className="search-container">
          <i className="fa fa-search"></i>
          <div className="input-container">
            <input className="search-input" type="text" placeholder="Search" />
          </div>
        </div>

        <div className="nav-right">
          <div className="notification-container">
            <BellIcon />
            <div className="dot"></div>
          </div>

          <div className="email-container">
            <MailIcon />
            <div className="dot"></div>
          </div>

          <button className="add-photo-btn">
            <i className="gg-add"></i>
            Add photo
          </button>
        </div>
      </div>
    </nav>
  );
}
