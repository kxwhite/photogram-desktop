import React from "react";
import "./SideNav.css";
import { sideNavData } from "../../data/Data";

export default function SideNav() {
  return (
    <div className="side-nav">
      <div className="logo-container">
        <img
          className="insta-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          alt="Instagram Logo"
        />
        <img
          className="insta-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
          alt="Instagram Logo"
        />
      </div>

      <div className="profile-container">
        <div className="img-gradient">
          <img
            className="profile-img"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="Looking into the distance"
          />
        </div>
        <div className="profile-text">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-handle">@jdoedoe</p>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <strong className="profile-stat-no">46</strong>
            <p className="profile-stat-text">Posts</p>
          </div>
          <div className="stat-border"></div>
          <div className="profile-stat">
            <strong className="profile-stat-no">2.5k</strong>
            <p className="profile-stat-text">Followers</p>
          </div>
          <div className="stat-border"></div>
          <div className="profile-stat">
            <strong className="profile-stat-no">526</strong>
            <p className="profile-stat-text">Following</p>
          </div>
        </div>
      </div>
      <div className="nav-tabs">
        <div className="nav-tabs-sub-1">
          <div className="nav-tabs-sub-2">
            {sideNavData?.map((tab, id) => {
              return (
                <a key={id} className={`nav-tab-link ${id === 0 ? "active" : ""}`} href="#">
                  <i className={`${tab.icon} side-nav-icon`}></i>
                  <span className="nav-tab-text">{tab.tab}</span>
                  { id === 0 && <div className="verticle-line"></div>}
                </a>
              )
            })}
          </div>
        </div>
        <a className="nav-tab-link logout-btn" href="#">
          <div className="horizontal-border"></div>
          <i className="gg-log-out side-nav-icon"></i>
          <span className="nav-tab-text">Logout</span>
        </a>
      </div>
    </div>
  );
}
