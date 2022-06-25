import React, { useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
//import "../css/Harf.css";
import "../css/Vinegrad.css";
import { toast } from "react-toastify";
let soru_cevap = "";
let skor = 0;
let dogru_sayisi = 0;
let yanlis_sayisi = 0;
let soru_numarası = 0;
let kullanici_secimi;

let sorular = [
  {
    soru: "1)db Yan tarafta verilmiş olan harflerin aynısı hangi şıktadır?",
    a_sikki: "db",
    b_sikki: "aa",
    c_sikki: "dd",
    d_sikki: "6b",
    cevap: "A",
  },
  {
    soru: "2)bd Yan tarafta verilmiş olan harflerin aynısı hangi şıktadır?",
    a_sikki: "b6",
    b_sikki: "oo",
    c_sikki: "bb",
    d_sikki: "bd",
    cevap: "D",
  },
  {
    soru: "3)ddbdd Yan tarafta verilmiş olan harflerin aynısı hangi şıktadır?",
    a_sikki: "bddbb",
    b_sikki: "bdbdb",
    c_sikki: "ddbdd",
    d_sikki: "bbdbd",
    cevap: "C",
  },
  {
    soru: "4)bdbbd Yan tarafta verilmiş olan harflerin aynısı hangi şıktadır?",
    a_sikki: "ddbdd",
    b_sikki: "Bdbdd",
    c_sikki: "bdbbd",
    d_sikki: "6bdbb",
    cevap: "C",
  },
  {
    soru: "5)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
  {
    soru: "6)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
  {
    soru: "7)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
  {
    soru: "8)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
  {
    soru: "9)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
  {
    soru: "10)dd6b Yan tarafta verilmiş olan metinin aynısı hangi şıktadır?",
    a_sikki: "dd6b",
    b_sikki: "ddbd",
    c_sikki: "bdbd",
    d_sikki: "ddbb",
    cevap: "A",
  },
];

const basa_don = () => {
  soru_cevap = "";
  skor = 0;
  dogru_sayisi = 0;
  yanlis_sayisi = 0;
  soru_numarası = 0;
  skor_yaz();
  soru_getir(0);
}

const soru_getir = (s_no) => {
  document.getElementById("soru_kutusu").style.display = "block";
  document.getElementById("puan_tablosu").style.display = "block";

  if (soru_numarası == sorular.length) {
    toast.warning("Uygulama bitti.");
    basa_don();
  }
  document.getElementById("soru_metin").innerHTML = sorular[s_no].soru;
  document.getElementById("a_sikki").innerHTML = sorular[s_no].a_sikki;
  document.getElementById("b_sikki").innerHTML = sorular[s_no].b_sikki;
  document.getElementById("c_sikki").innerHTML = sorular[s_no].c_sikki;
  document.getElementById("d_sikki").innerHTML = sorular[s_no].d_sikki;
  soru_cevap = sorular[s_no].cevap;
}

const skor_yaz = () => {
  document.getElementById("d_sayisi").innerHTML = dogru_sayisi;
  document.getElementById("y_sayisi").innerHTML = yanlis_sayisi;
  document.getElementById("skor_yazisi").innerHTML = skor;
}

const cevaplandi = (hangi_sik) => {
  kullanici_secimi = hangi_sik;
  if (soru_cevap == kullanici_secimi) {
    skor = skor + 10;
    dogru_sayisi++;
    skor_yaz();
    toast.success("Doğru cevap");

    soru_ilerlet();
  } else {
    yanlis_sayisi++;
    toast.error("Yanlış cevap");
    skor_yaz();
    soru_ilerlet();
  }
}

const soru_ilerlet = () => {
  soru_numarası++;
  soru_getir(soru_numarası);
}

const Harf = () => {
  useEffect(() => {
    soru_getir(0);
  }, []);

  return (
    <div>
      <div id="puan_tablosu">
        <h2>Doğru Sayısı</h2>
        <div id="d_sayisi">-</div>
        <h2>Yanlış Sayısı</h2>
        <div id="y_sayisi">-</div>
        <div id="skor">
          SKOR: <span id="skor_yazisi">-</span>
        </div>
      </div>

      <div id="soru_kutusu" className="question-card">
        <div id="soru_metin" className="question-text">
          Soru
        </div>
        <div id="cevaplar">
          <div
            id="a_sikki"
            data-secim="A"
            className="liste"
            onClick={() => cevaplandi("A")}
          >
            A
          </div>
          <div
            id="b_sikki"
            data-secim="B"
            className="liste"
            onClick={() => cevaplandi("B")}
          >
            B
          </div>
          <div
            id="c_sikki"
            data-secim="C"
            className="liste"
            onClick={() => cevaplandi("C")}
          >
            C
          </div>
          <div
            id="d_sikki"
            data-secim="D"
            className="liste"
            onClick={() => cevaplandi("D")}
          >
            D
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harf;
