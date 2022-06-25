import React, { useState } from "react";
import { Message, Icon, Container } from "semantic-ui-react";
import { vinegradResult } from "../api/axios";
import { toast } from "react-toastify";
import "../css/Vinegrad.css";

export default function () {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const questions = [
    {
      text: "Sağ ve sol ayrımı yapmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Harita takibinde veya yol bulmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Yüksek sesle okumaktan rahatsızlık duyuyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Bir sayfayı okumanız normalden daha uzun bir zaman mı alıyor?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Okumakta olduğunuz konuyu takip etmekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Uzun kitap okumaktan sıkılır mısınız?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Yazınız ve imlanız zayıf mı?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "El yazınız okunaksız mı?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Kalabalık önünde konuşmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Telefonda başkaları için not alıp gerekli kişiye iletmekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Uzunca bir kelimeyi söylemekte zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Kafanızdan hesap yapmakta zorlanıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Telefon çevirirken (tuşlarken) numaraları karıştırıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Ayları peş peşe doğru sırada söylemekte zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Ayları sondan başlayarak geri sıralamakta zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Hiç tarihleri karıştırıp randevularınızı kaçırdığınız oluyor mu?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Çek yazarken yanlışlıklar yapıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Form doldururken zorluk çekiyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Örneğin 59 ile 95 gibi otobüs numaralarını karıştırıyor musunuz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
    {
      text: "Öğrenciyken çarpım tablosunu ezberlemekte zorluk çekmiş miydiniz?",
      options: [
        { id: 0, text: "Evet", isCorrect: true },
        { id: 1, text: "Hayır", isCorrect: false },
      ],
    },
  ];

  const handleShow = () => {
    setShowMessage(false);
  };

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

  const database = () => {
    if (localStorage.length > 0) {
      let user = JSON.parse(localStorage.getItem("user"));
      const data = {
        User: {
          UserId: user._id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          age: user.age,
          gender: user.gender,
          grade: user.grade,
          signedAt: user.signedAt,
        },
        Result: score,
      };
      vinegradResult(data)
        .then(() => {
          toast.success("Test sonucu alındı.");
        })
        .catch((error) => {
          toast.warn(error.response.data.message);
        });
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Container>
          <h1>Vinegrad Test</h1>
          {showMessage ? (
            <Message
              onDismiss={() => handleShow()}
              content="Bu testler ön bilgilendirme amaçlı oluşturulmuştur. Doğru bir teşhis için uzman ile görüşmelisiniz."
            ></Message>
          ) : (
            <div></div>
          )}

          <h2>Skor: {score} </h2>
          {showFinalResults ? (
            <div className="final-results">
              <h1>Sonuç</h1>
              <h2>
                Doğru cevap sayısı: {score} <br></br>
                {score >= 8 ? (
                  <h5>
                    Riskli durumdasınız. Disleksili birey olabilirsiniz. Doğru
                    teşhis için lütfen uzman biriyle görüşün.
                  </h5>
                ) : (
                  ""
                )}
                <button
                  className="buton"
                  onClick={() => {
                    database();
                    restartGame();
                  }}
                >
                  Yeniden Başlat
                </button>
              </h2>
            </div>
          ) : (
            <div className="question-card">
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
              <h2>{currentQuestion + 1}. Soru</h2>
              <h2>Toplam Soru Sayısı: {questions.length}</h2>

              <h3 className="question-text">
                {questions[currentQuestion].text}
              </h3>

              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="liste"
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
        </Container>
      </div>
    </div>
  );
}
