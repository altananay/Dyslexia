import React, { useState, useEffect } from "react";
import {
  Container,
  Divider,
} from "semantic-ui-react";
import EkibimizSecond from "./EkibimizSecond";
import EkibimizThird from "./EkibimizThird";

export default function Hakkimizda() {
  const [hide, setHide] = useState(false);

 
 useEffect(()=>{
   if (window.innerWidth < 800) {
     setHide(true);
   }
 })

  window.onresize = function () {
    if (window.innerWidth < 800) {
      setHide(true);
    }
    else
    {
      setHide(false);
    }
  };

  return (
    <div style={{backgroundColor: "#fffdd0"}}>
      <Container textAlign="justified">
        <h3>Biz Kimiz</h3>
        <p>
          Pamukkale Üniversitesi Yönetim Bilişim Sistemleri 3. Sınıf öğrencileri
          olarak bilime ve teknolojiye gönül veren, yenilikleri çok sıkı takip
          eden ve yaptığımız işi her zaman en iyi şekilde yapma bilinciyle
          hareket eden bir ekibiz. Edindiğimiz bilgi ve tecrübelerle yazılımı
          sağlık ve eğitim sektörüne entegre ederek web ve mobil de uygulamalar
          geliştirmekteyiz.
        </p>
        <p>
          <h3>Misyon</h3>
          <p>
            Disleksili bireyler için web ve mobil alanda geliştirdiğimiz
            uygulamalarla eğitim hayatlarında ve sosyal çevrelerinde yaşadıkları
            problemlere en aza indirgemek için bir araya geldik.
          </p>
          <h3>Vizyon</h3>
          <p>
            Yaptığımız uygulamalarla ve verdiğimiz eğitimlerle disleksi alanında
            etkileşim kurabildiğimiz her insanın hayatına dokunarak yaşadıkları
            sorunlara çözüm olarak Türkiye’de ve Dünyada öncü bir kuruluş olmak
            istiyoruz.
          </p>
        </p>
      </Container>

      <Container>
        {hide ? (
          <EkibimizThird></EkibimizThird>
        ) : (
          <EkibimizSecond></EkibimizSecond>
        )}
      </Container>
    </div>
  );
}
