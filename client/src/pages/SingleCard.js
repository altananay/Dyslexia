import React from "react";
import "../css/Card.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      <div className="kart">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="kart front" loading="lazy"></img>
          <img
            className="back"
            src="/img/cover.png"
            onClick={() => handleClick()}
            alt="kart back" loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
}
