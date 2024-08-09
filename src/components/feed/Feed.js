import React, { useState } from "react";
import './Feed.css'
import { feedData } from "../../data/Data";
import { HeartIcon } from "../../assets/HeartIcon";
import { CommentIcon } from "../../assets/CommentIcon";
import { FilledHeartIcon } from "../../assets/FilledHeartIcon";

export default function Feed() {
  const [favourite, setFavourite] = useState({});

  return (
    <div className="feed-container">
      <div className="feed-text-container">
        <h1 className="feed-title">Feed</h1>
        <a className="feed-tab-link" href="#">
          <span className="feed-text latest">Latest</span>
          <span className="feed-text popular">Popular</span>
        </a>
      </div>

      <div className="feed-gallery-scroll">
        <section className="feed-gallery">
          {feedData?.map((feed, id) => {
            return (
              <div key={id} className="feed-units">
                <img
                  className="feed-img"
                  src={feed.img}
                  alt={`${feed.username}'s Latest Upload`}
                />
                <div className="feed-info-container">
                  <div className="feed-user-info">
                    <img
                      className="feed-user"
                      src={feed.avatar}
                      alt={`${feed.username}'s Avatar`}
                    />
                    <p className="feed-user-handle">{feed.username}</p>
                  </div>
                  <div className="feed-notifications">
                    <div className="feed-user-likes" onClick={() => setFavourite(prev => ({...prev, [id]: !prev[id]}))}>
                      { favourite[id] ? <FilledHeartIcon /> : <HeartIcon />}
                      <p className="feed-notification">{feed.likes}</p>
                    </div>
                    <div className="feed-user-comments">
                      <CommentIcon />
                      <p className="feed-notification">{feed.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
