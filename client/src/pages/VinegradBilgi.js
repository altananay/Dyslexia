import React from "react";
import { Button, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function VinegradBilgi() {
  return (
    <div>
      <Container textAlign="center">
        <h2>Vinegrad Testi</h2>
        <p>
          1994 yılında Michael Vinegrad tarafından kağıt tabanlı bir test olarak
          tasarlanmıştır. Adult Dyslexia Checklist, The Dyslexia Institute
          tarafından hazırlanmış olmakla birlikte daha çok M. Vinegrad’ın ismine
          ithafen Vinegrad testi olarak tanınmaktadır. Test “Evet” veya “Hayır”
          şeklinde cevaplandırılacak 20 sorudan oluşmaktadır. Disleksik bir
          yetişkinin sadece dil becerilerinde değil, aynı zamanda örgütsel
          beceriler gibi diğer alanlarda da zayıflık alanlarını tanımlamasına
          yardımcı olmak için tasarlanmıştır. Test sonuçları tıbbi anlamda kesin
          bir bilgi vermemektedir. Bu testler kendinizle ilgili farkındalığınızı
          arttırmak içindir, tek başına tanı koydurmaz. Vinegrad testi 18-60 yaş
          arası yetişkinler için yapılmış bir testtir. 20 sorunun 8 tanesine
          "evet" yanıtı gelirse, testi çözen birey, disleksi için riskli
          durumdadır. 20 sorunun 5 dakika içinde çözülmesi tavsiye edilmektedir
          fakat testi çözen birey kendini baskı altında hissetmemesi ve rahat
          bir şekilde çözebilmesi için süre sınırı koyulmamıştır.
        </p>
        <Container textAlign="center" style={{ marginTop: "20px" }}>
          <Button as={NavLink} to="/test">
            Teste Git
          </Button>
        </Container>
      </Container>
    </div>
  );
}
