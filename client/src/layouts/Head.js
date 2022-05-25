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
                  Disleksi, disleksili insanlar için geliştirilmiş bir uygulama
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
                  Disleksi, pratik ve basit uygulamalar ile disleksili, özel
                  öğrenme güçlüğüne sahip insanların yaşadığı sorunlara
                  yardımcı olmayı amaçlamaktadır.
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
                style={{ marginLeft: "30px", marginBottom: "20px" }}
              ></img>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "30px" }}>
                Bu sitede neler bulunmakta?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "30px" }}>
                Bu platform, Disleksili bireyler için geliştirilmiş web tabanlı
                uygulama sitesidir. Forum kısmında, aile veya disleksili birey
                olarak duygu düşünceleriniz paylaşabileceğiniz başka bir
                platform bulunmaktadır.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "30px" }}>
                Neden Web Tabanlı Uygulama?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "30px" }}>
                Geliştirdiğimiz web tabanlı uygulama sayesinde disleksili
                bireylerin okul ve özel eğitim dışında kendini geliştirmeye devam edebileceği platform sağlıyoruz.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em", marginTop: "50px" }} basic>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "30px" }}>
                Mobil Uygulamamız Hakkında
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "30px" }}>
                Mobil uygulamamız IOS ve Android platformlarında yer alacaktır.
                Mobil uygulamamız ve web sitemiz, birbirleriyle koordineli bir
                şekilde geliştirilecektir.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "30px" }}>
                Mobil Uygulamamız
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "30px" }}>
                Web sitemizde bulunan uygulamalarımız mobil uygulamamızda da
                bulunacaktır. Sitemize giren kullanıcılarımız dilerlerse mobil
                uygulamamızdan da aynı işlemleri yapabilirler.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <img
                src="/mobile.png"
                loading="lazy"
                alt="logo"
                style={{ marginLeft: "30px"}}
              ></img>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em", backgroundColor: "#fffdd0", marginLeft:"20px" }}>
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
              <p style={{ fontSize: "1.33em", marginLeft:"20px" }}>
                Disleksi, zeka ile ilgisi olmayan bir rahatsızlıktır. Daha çok
                hafızadan getirme problemidir.
              </p>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>

      <Segment vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "1.5em" }}>
            Testlerimiz
          </Header>
          <p style={{ fontSize: "1.22em" }}>
            Test kısmında Vinegrad testi bulunmaktadır. Vinegrad testi daha çok
            yetişkinlere yönelik olup, sadece bilgilendirme amaçlı bir testtir.
            Yetişkin bireylerin çözmesi önerilir. Okul Öncesi ve Okuma Yazma
            Bilen ilkokul öğrencileri için testlerimiz yapım aşamasındadır.
          </p>

          <Header as="h3" style={{ fontSize: "1.5em" }}>
            Uygulamalarımız
          </Header>
          <p style={{ fontSize: "1.22em", marginBottom: "20px" }}>
            Uygulamalar kısmında yer alan hafıza uygulaması; disleksili bireyler
            için hem görsel hem de hafıza anlamında gelişim sağlamaları için
            hazırlanmıştır. Farklı Kelime uygulamamız ise kelime haznesini
            geliştirmek, kelime gruplarını oluşturmak amacıyla yapıldı.
          </p>
        </Container>
      </Segment>
    </div>
  );
}
