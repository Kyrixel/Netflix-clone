import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/banner.png"; 
import Footer from "../../components/Footer/Footer";
import banner_text from "../../assets/banner-text.png";
import play_icon from "../../assets/play-icon.svg";
import info_icon from "../../assets/info-icon.svg";
import TitleCards from "../../components/TitleCards/TitleCards";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div className="home">
      <Navbar/>


      <div className="home-content">
        <img src={banner} alt="banner" className="banner-img" />
        <div className="banner-text">
          <img src={banner_text} alt="banner text" className="banner-text-img" />
          <p>
            A psychiatrist takes in a young patient who escaped from a cult,
            putting her family and life in danger.
          </p>
          <Link to={'/player'} className="banner-buttons">
            <button className="button"><img src={play_icon} alt="" />Play</button>
            <button className="button dark-button"><img src={info_icon} alt="" />More Info</button>
          </Link>
          <TitleCards className="testing"/>
        </div>
      </div>



      
      <div className="extra-cards">
        <TitleCards title={"New this week"}/>
        <TitleCards title={"Recommended for you"}/>
        <TitleCards title={"Trending Now"}/>
        <TitleCards title={"Watchlist"}/>
      </div>
      <Footer/>
    </div>

  );
};

export default Home;
