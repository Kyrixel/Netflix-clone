import React, { useMemo } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/cards.js";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const TitleCards = ({ title, category }) => {

  const shuffledCards = useMemo(() => shuffleArray(cards_data), []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {shuffledCards.map((card, index) => (
          <Link to={'/player'}className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <div className="card-info">
              <h5>{card.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
