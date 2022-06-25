import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export default function FarkliKelime() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    setScore(score+1)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setFinalResults(false);
    setScore(0);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((currentQuestion -= 1));
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 !== questions.length) {
      setCurrentQuestion((currentQuestion += 1));
    }
  };

  const questions = [
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Kangal", isCorrect: false },
        { id: 1, text: "Doberman", isCorrect: false },
        { id: 2, text: "Kaplumbağa", isCorrect: true },
        { id: 3, text: "Terrier", isCorrect: false },
        { id: 4, text: "Sibirya Kurdu", isCorrect: false },
        { id: 5, text: "Golden", isCorrect: false },
      ],
    },
    {
      text: "Aşağıdaki sporlardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Hokey", isCorrect: false },
        { id: 1, text: "Futbol", isCorrect: false },
        { id: 2, text: "Beyzbol", isCorrect: false },
        { id: 3, text: "Tenis", isCorrect: true },
        { id: 4, text: "Basketbol", isCorrect: false },
        { id: 5, text: "Voleybol", isCorrect: false },
      ],
    },
    {
      text: "Aşağıdaki teknolojik aletlerden hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Akıllı telefon", isCorrect: false },
        { id: 1, text: "Tablet", isCorrect: false },
        { id: 2, text: "Ev Telefonu", isCorrect: true },
        { id: 3, text: "Bilgisayar", isCorrect: false },
      ],
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Papağan", isCorrect: false },
        { id: 1, text: "Kartal", isCorrect: false },
        { id: 2, text: "Akbaba", isCorrect: false },
        { id: 3, text: "Köpek", isCorrect: true }
      ],
    },
    {
      text: "Aşağıdaki taşıtlardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Otobüs", isCorrect: false },
        { id: 1, text: "Taksi", isCorrect: false },
        { id: 2, text: "Uçak", isCorrect: true },
        { id: 3, text: "Dolmuş", isCorrect: false }
      ],
    },
    {
      text: "Aşağıdaki şekillerden hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Dikdörtgen", isCorrect: false },
        { id: 1, text: "Kare", isCorrect: false },
        { id: 2, text: "Üçgen", isCorrect: false },
        { id: 3, text: "Daire", isCorrect: true }
      ]
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Aslan", isCorrect: false },
        { id: 1, text: "Kartal", isCorrect: true },
        { id: 2, text: "Kutup Ayısı", isCorrect: false },
        { id: 3, text: "Zebra", isCorrect: false }
      ],
    },
    {
      text: "Aşağıdaki gıdalardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Su", isCorrect: false },
        { id: 1, text: "Ekmek", isCorrect: true },
        { id: 2, text: "Çay", isCorrect: false },
        { id: 3, text: "Kahve", isCorrect: false }
      ],
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Yılan", isCorrect: false },
        { id: 1, text: "Kertenkele", isCorrect: false },
        { id: 2, text: "İguana", isCorrect: false },
        { id: 3, text: "Baykuş", isCorrect: true }
      ],
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Deve", isCorrect: false },
        { id: 1, text: "At", isCorrect: false },
        { id: 2, text: "Eşek", isCorrect: false },
        { id: 3, text: "Yılan", isCorrect: true }
      ],
    },
    {
      text: "Aşağıdaki teknolojik aletlerden hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Kulaklık", isCorrect: false },
        { id: 1, text: "Fare", isCorrect: false },
        { id: 2, text: "Klavye", isCorrect: false },
        { id: 3, text: "Klima", isCorrect: true }
      ],
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Tavuk", isCorrect: false },
        { id: 1, text: "Zürafa", isCorrect: true },
        { id: 2, text: "Ördek", isCorrect: false },
        { id: 3, text: "Deve Kuşu", isCorrect: false }
      ],
    },
    {
      text: "Aşağıdaki canlılardan hangisi diğerlerinden farklıdır?",
      options: [
        { id: 0, text: "Güvercin", isCorrect: false },
        { id: 1, text: "Atmaca", isCorrect: false },
        { id: 2, text: "Muhabbet Kuşu", isCorrect: false },
        { id: 3, text: "Kaplumbağa", isCorrect: true }
      ],
    },
  ];

  return (
    <div>
      <h2>Skor: {score} </h2>
      <h2>Toplam Soru Sayısı: {questions.length}</h2>
      <div className="question-card">
        <h2>{currentQuestion + 1}. Soru</h2>

        {showFinalResults ? (
          <div>
            <h1>Sonuç</h1>
            <h2>
              Doğru cevap sayısı: {score} <br></br>
              <button className="buton" onClick={() => restartGame()}>Yeniden Başlat</button>
            </h2>
          </div>
        ) : (
          <div>
            <Icon
              name="arrow left"
              size="big"
              style={{ float: "left" }}
              onClick={() => prevQuestion()}
            ></Icon>
            <Icon
              name="arrow right"
              size="big"
              style={{ float: "right" }}
              onClick={() => nextQuestion()}
            ></Icon>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <Button
                    color="orange"
                    onClick={() => optionClicked(option.isCorrect)}
                    style={{ marginRight: "30px", marginTop: "20px" }}
                    key={option.id}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
