import React from "react";
import './Stories.css'
import { storiesData } from "../../data/Data"

export default function Stories() {
  return (
    <div className="stories-container">
      <div className="stories-text-container">
        <h1 className="stories-title">Stories</h1>
        <a className="stories-tab-link" href="#">
          <i className="gg-play-button-o stories-icon"></i>
          <span className="stories-text">Watch all</span>
        </a>
      </div>

      <div className="stories-profile-container">
        {storiesData?.map((story, id) => {
          return (
            <div key={id} className={`${id === 0 ? "fogged" : "img-gradient"}`}>
              <img
                className={`profile-img ${id === 0 ? "fogged-img" : ""}`}
                src={story}
                alt="Looking into the distance"
              />
              <h1 className="stories-plus">+</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
