import React from "react";
import Slider from "react-slick";
import {
  Header,
  Segment,
  Grid,
  GridRow,
  GridColumn,
  Container,
} from "semantic-ui-react";
import "../css/Arrow.css";

export default function Head() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div>
      <Segment basic textAlign="center">
        <Container text>
          <Slider {...settings}>
            <div>
              <Segment
                basic
                textAlign="center"
                vertical
                style={{ minHeight: 200 }}
              >
                <Header
                  as="h1"
                  style={{ fontWeight: "normal", marginTop: "20px" }}
                >
                  Disleksiler için Web Tabanlı Uygulama
                </Header>
                <Header as="h2" style={{ fontWeight: "normal" }}>
                  Disleksi, disleksili insanlar için geliştirilmiş bir eğitim
                  platformudur.
                </Header>
              </Segment>
            </div>
            <div>
              <Segment
                basic
                textAlign="center"
                vertical
                style={{ minHeight: 200 }}
              >
                <Header
                  as="h1"
                  style={{ fontWeight: "normal", marginTop: "20px" }}
                >
                  Disleksiler için Web Tabanlı Uygulama
                </Header>
                <Header as="h2" style={{ fontWeight: "normal" }}>
                  Disleksi, Pamukkale Üniversitesi Yönetim Bilişim Sistemleri
                  öğrencileri tarafından geliştirilmektedir.
                </Header>
              </Segment>
            </div>
            <div>
              <Segment
                basic
                textAlign="center"
                vertical
                style={{ minHeight: 200 }}
              >
                <Header
                  as="h1"
                  style={{ fontWeight: "normal", marginTop: "20px" }}
                >
                  Disleksiler için Web Tabanlı Uygulama
                </Header>
                <Header as="h2" style={{ fontWeight: "normal" }}>
                  Disleksi, pratik ve basit eğitimler ile disleksili, özel
                  öğrenme güçlüğüne sahip insanların yaşadığı sorunları
                  azaltmayı amaçlamaktadır.
                </Header>
              </Segment>
            </div>
          </Slider>
        </Container>
      </Segment>

      <Segment style={{ padding: "0em", marginTop: "50px" }} basic>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={7}>
              <img
                src="/logoWhite.jpg"
                loading="lazy"
                alt="logo"
                style={{ marginLeft: "10px", marginBottom: "20px" }}
              ></img>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Bu sitede neler bulunmakta?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Bu platform, Disleksili bireyler ve aileler için geliştirilmiş
                web tabanlı eğitim sitesidir. Forum kısmında, aile veya
                disleksili birey olarak duygu düşünceleriniz paylaşabileceğiniz
                başka bir platform bulunmaktadır.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Neden Web Tabanlı Eğitim?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Genel olarak aileler çocuklarını Özel eğitim kurumuna
                göndermekte veya bu alanda çok az bulunan özel öğretmenlere
                başvurmaktadır. İnternetin de yayılmasıyla bütün evlerde bulunan
                bilgisayar aracılığıyla
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em", marginTop: "50px" }} basic>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Bu sitede neler bulunmakta?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Bu platform, Disleksili bireyler ve aileler için geliştirilmiş
                web tabanlı eğitim sitesidir. Forum kısmında, aile veya
                disleksili birey olarak duygu düşünceleriniz paylaşabileceğiniz
                başka bir platform bulunmaktadır.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Neden Web Tabanlı Eğitim?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Genel olarak aileler çocuklarını Özel eğitim kurumuna
                göndermekte veya bu alanda çok az bulunan özel öğretmenlere
                başvurmaktadır. İnternetin de yayılmasıyla bütün evlerde bulunan
                bilgisayar aracılığıyla
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <img
                src="/mobile.png"
                loading="lazy"
                alt="logo"
                style={{ marginLeft: "10px", marginBottom: "20px"}}
              ></img>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em", backgroundColor: "#fffdd0" }}>
        <Grid celled="internally" columns="equal" stackable>
          <GridRow textAlign="center">
            <GridColumn style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Disleksi Toplumda Nadir Görülen Bir Durum Değildir"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yapılan araştırmalara göre her 20 kişiden birinin Disleksik olma
                olasılığı çok yüksektir.
              </p>
            </GridColumn>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Disleksinin Zeka ile İlgisi Yoktur"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Disleksi, zeka ile ilgisi olmayan bir rahatsızlıktır. Daha çok
                hafızadan getirme problemidir.
              </p>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>

      <Segment vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Testlerimiz
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Test kısmında 2 adet farklı test bulunmaktadır. Bunlar; Vinegrad ve
            Okuma Hatası testleridir. Vinegrad testi daha çok yetişkinlere
            yönelik olup, sadece bilgilendirme amaçlı bir testtir. Yetişkin
            bireylerin çözmesi önerilir. Okuma hatası testi ise, çocuklara
            yönelik olup yetişkin bir bireyin gözlemi ile birlikte yapılması
            önerilmektedir.
          </p>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Eğitimlerimiz
          </Header>
          <p style={{ fontSize: "1.33em", marginBottom:"20px" }}>
            Eğitimler kısmında yer alan Hafıza kartı eğitimi, disleksili bireyler
            için hem görsel hem de hafıza anlamında gelişim sağlamaları için
            hazırlanmıştır.
          </p>
        </Container>
      </Segment>
    </div>
  );
}
