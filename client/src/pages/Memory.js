import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard"
import "../css/Memory.css";
import { Button} from "semantic-ui-react";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //kartları karıştır
  const shuffleCards = () => {
    //cardImages dizisinin 2 tane kopyası alınıp tek bir diziye atıldı.
    //daha sonra resimlerin sırası karıştırıldı.
    //Karıştırıldıktan sonra her resime rastgele id atandı
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceOne(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  //seçimi yönet
  const handleChoice = (card) => {
    //choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    choiceOne && choiceOne !== card ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //seçilen 2 kartı karşılaştır
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //kart dönüşlerini sıfırla ve arttır
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //otomatik olarak yeni oyun başlat
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory">
      <Button onClick={() => shuffleCards()} color="facebook">Yeni Oyun</Button>

      <div className="kart-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          ></SingleCard>
        ))}
      </div>
      <p>Deneme: {turns}</p>
    </div>
  );
}
