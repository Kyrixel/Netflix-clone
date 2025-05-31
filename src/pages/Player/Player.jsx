import React from "react";
import "./Player.css";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <div className="player">
      <Link to={'/'}className="back-icon">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/2gTC4uWP3_Y"
        title="trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="info">
        <p>
          <i className="fas fa-calendar-alt"></i> Published Date
        </p>
        <p>
          <i className="fas fa-film"></i> Name
        </p>
        <p>
          <i className="fas fa-tag"></i> Type
        </p>
      </div>
    </div>
  );
};

export default Player;
