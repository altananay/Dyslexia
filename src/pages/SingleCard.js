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
          <img className="front" src={card.src} alt="kart front"></img>
          <img
            className="back"
            src="/img/cover.png"
            onClick={() => handleClick()}
            alt="kart back"
          ></img>
          {/* <Card image={card.src} className="front"></Card>
          <Card image="/img/cover.png" className="back" onClick={() => handleClick()}></Card> */}
        </div>
      </div>
    </div>
  );
}
