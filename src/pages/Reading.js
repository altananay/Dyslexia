import React, { useState } from "react";


export default function Reading() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Sağ ve sol ayrımı yapmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Harita takibinde veya yol bulmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Yüksek sesle okumaktan rahatsızlık duyuyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Bir sayfayı okumanız normalden daha uzun bir zaman mı alıyor?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Okumakta olduğunuz konuyu takip etmekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Uzun kitap okumaktan sıkılır mısınız?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Yazınız ve imlanız zayıf mı?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "El yazınız okunaksız mı?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Kalabalık önünde konuşmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Telefonda başkaları için not alıp gerekli kişiye iletmekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Uzunca bir kelimeyi söylemekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Kafanızdan hesap yapmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Telefon çevirirken (tuşlarken) numaraları karıştırıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Ayları peş peşe doğru sırada söylemekte zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Ayları sondan başlayarak geri sıralamakta zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Hiç tarihleri karıştırıp randevularınızı kaçırdığınız oluyor mu?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Çek yazarken yanlışlıklar yapıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Form doldururken zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Örneğin 59 ile 95 gibi otobüs numaralarını karıştırıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
    {
      text: "Öğrenciyken çarpım tablosunu ezberlemekte zorluk çekmiş miydiniz?",
      options: [
        { id: 0, text: "Evet", isCorrect: false },
        { id: 1, text: "Hayır", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
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

  return (
    <div>
      <div className="App">
        <h1>Okuma Hatası Testi</h1>

        <h2>Skor: {score} </h2>
        {showFinalResults ? (
          <div className="final-results">
            <h1>Sonuç</h1>
            <h2>
              Doğru cevap sayısı: {score} <br></br>
              <button onClick={() => restartGame()}>Yeniden Başlat</button>
            </h2>
          </div>
        ) : (
          <div className="question-card">
            <h2>{currentQuestion + 1}. Soru</h2>
            <h2>Toplam Soru Sayısı: {questions.length}</h2>

            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
