import React from "react";
import {
  Button,
  Header,
  Segment,
  Image,
  Grid,
  GridRow,
  GridColumn,
  Container,
  Divider,
} from "semantic-ui-react";

export default function Head() {
  return (
    <div>
      <Segment basic textAlign="center" vertical style={{ minHeight: 300 }}>
        <Header as="h1" style={{ fontWeight: "normal" }}>
          Disleksiler için Web Tabanlı Uygulama
        </Header>
        <Header as="h2" style={{ fontWeight: "normal" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo
        </Header>
        <Button primary>Get Started</Button>
      </Segment>

      <Segment style={{ padding: "0em" }} basic>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Bu sitede neler bulunmakta?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Bu platform, Disleksili bireyler ve aileler için geliştirilmiş
                web tabanlı eğitim sitesidir. Test kısmında Vinegrad ve okuma
                hatası testleri bulunmaktadır. Vinegrad testi daha çok
                yetişkinlere yönelik bir testtir. Okuma hatası testi ise
                çocuklara yönelik bir test olup, bir yetişkin ile birlikte
                yapılması önerilir. Forum kısmında, aile veya disleksili birey
                olarak duygu düşünceleriniz paylaşabileceğiniz başka bir
                platform bulunmaktadır.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                Neden Web Tabanlı Eğitim?
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                Okulda, her öğretmen maalesef ki sınıf yoğunluğundan öğrenci ile
                bireysel olarak ilgilenememektedir. Genel olarak aileler
                çocuklarını Özel eğitim kurumuna göndermekte veya bu alanda çok
                az bulunan özel öğretmenlere başvurmaktadır . İnternetin de
                yayılmasıyla bütün evlerde bulunan bilgisayar aracılığıyla
                bireyler hiçbir sınır olmaksızın burada eğitici uygulamalara
                erişim saglayabileceklerdir.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                rounded
                size="large"
                src="/logoWhite.jpg"
                style={{ marginLeft: "10px", marginBottom: "20px" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em", backgroundColor: "#F7F7F7" }}>
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

      <Segment style={{ padding: "4em 0em"}} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Evde Eğitim İçin Neler Yapılabilir?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Evde, ilk önce çocuğunuzun hangi öğrenme biçimini sevdiğini veya
            daha yatkın olduğunu öğrenmek ile başlayabilirsiniz. Çocuğunuz
            Görsel, İşitsel, Kinestik, Temas yoluyla bunlardan hangisine yatkın
            ise bu öğrenme biçimini baz alarak bir takım ufak eğitim materyali
            oluşturabilirsiniz.
          </p>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a>Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Eğitim Materyali Önerileri
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Evde, ilk önce çocuğunuzun hangi öğrenme biçimini sevdiğini veya
            daha yatkın olduğunu öğrenmek ile başlayabilirsiniz. Çocuğunuz
            Görsel, İşitsel, Kinestik, Temas yoluyla bunlardan hangisine yatkın
            ise bu öğrenme biçimini baz alarak bir takım ufak eğitim materyali
            oluşturabilirsiniz.
          </p>
        </Container>
      </Segment>
    </div>
  );
}
