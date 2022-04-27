import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export default function FarkliKelime() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect && score !== 2) {
      setScore(score + 1);
    }

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
      text: "Kategoriye göre anlamı farklı olan kelimeyi seçin.",
      header: "Köpek Cinsleri",
      options: [
        { id: 0, text: "Kangal", isCorrect: false },
        { id: 1, text: "Doberman", isCorrect: false },
        { id: 2, text: "Kaplumbağa", isCorrect: true, isClicked: false },
        { id: 3, text: "Terrier", isCorrect: false },
        { id: 4, text: "Sibirya Kurdu", isCorrect: false },
        { id: 5, text: "Golden", isCorrect: false },
      ],
    },
    {
      text: "Kategoriye göre anlamı farklı olan kelimeyi seçin.",
      header: "Takım Sporları",
      options: [
        { id: 0, text: "Hokey", isCorrect: false },
        { id: 1, text: "Futbol", isCorrect: false },
        { id: 2, text: "Beyzbol", isCorrect: false },
        { id: 3, text: "Tenis", isCorrect: true },
        { id: 4, text: "Basketbol", isCorrect: false },
        { id: 5, text: "Voleybol", isCorrect: false },
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
              <button onClick={() => restartGame()}>Yeniden Başlat</button>
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
            <h3>{questions[currentQuestion].header}</h3>
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
