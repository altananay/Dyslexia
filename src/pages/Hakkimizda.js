import React from "react";
import {
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Image,
  Segment,
  List,
} from "semantic-ui-react";
export default function () {
  return (
    <div>
      <Container textAlign="justified">
        <p>
          Disleksi, terimsel tanımıyla okuma güçlü olarak adlandırılır. Özel
          öğrenme güçlüğünün bir alt dalıdır fakat yaygın olarak görülen bir alt
          tür olduğu için günlük hayatta geniş kapsamlı olarak kullanılmaktadır.
          Disleksi ile birlikte , özel öğrenme güçlüğü kendi içinde genel olarak
          3’e ayrılmaktadır. Aritmetik bozukluk(Diskalkuli), Yazılı anlatım
          bozukluğu(Disgrafi) ve Okuma bozukluğu(Disleksi) olarak karşımıza
          çıkmaktadır. Disleksinin biraz daha detaylı bir tanımına giricek
          olursak; Yeterli zeka, sosyakültürel fırsatlar ve bireye uygulanan
          eğitime rağmen verimli okuma becerisi kazanmada meydana gelen
          beklenmedik ve kalıcı başarısızlık olarak tanımlanır.Yani aslında bu
          tanımdan da anlaşılabileceği gibi, zeka ile alakası olmayan daha çok
          hafızasal bir rahatsızlıktır. Disleksi her bireyde aynı düzeyde ve
          aynı şekilde görülmemektedir, bireyin yapısı, çevresel faktörler, aile
          desteği, aldığı eğitim süresi ve etkililiği, bireydeki disleksinin
          yapısını değiştirmektedir. Bu tanımlardan sonra herkesin aklında
          oluşan soru ise; Bir birey Disleksi olduğunu nasıl anlayabilir?
          Belirtileri nelerdir? Disleksi’nin her bireyde farklılık
          gösterebileceğini yazını başlarında belirtmiştik fakat yaygın olarak
          görülen belirtiler aşağıda maddeler halinde verilmiştir.
        </p>
        
          <List bulleted>
            <List.Item>Konuşmayı öğrenmede gecikme</List.Item>
            <List.Item>
              Harfleri ve onlara ait olan sesleri yeterince öğrenememe,
            </List.Item>
            <List.Item>
              <List.Item>Sözlü ve yazılı dili organize edememe</List.Item>
            </List.Item>
            <List.Item>Numaraları ezberlemede sıkıntı yaşama,</List.Item>
            <List.Item>Akıcı okumada sıkıntı yaşama</List.Item>
            <List.Item>
              Uzun okuma parçalarını takip etme ve anlamada sıkıntı yaşama
            </List.Item>
            <List.Item>Yazmada güçlüklerle karşılaşma</List.Item>
            <List.Item>Yabancı bir dil öğrenmede problem yaşama</List.Item>
            <List.Item>
              Matematiksel işlemleri yapmada sıkıntı yaşamadır
            </List.Item>
          </List>
        
        <p>
          Tabi bu belirtilerden bazılarına sahip olan bireyler kesinlikle
          Disleksi’dir diye kesin bir tespit yapılamamakla birlikte bunlara
          sahip olmayan bireylerde de hiçbir Öğrenme bozukluğu yoktur diye bir
          tespit yapılamaz. Akıla gelen diğer bir soru ise tedavi edilebilinir?
          Bir hastalık gibi ilaç ile kesin bir çözümü yoktur. Doğru eğitim,
          olumlu çevre ile hafifletilebilecek bir rahatsızlıktır. Disleksi
          yaygın ama çok bilinmeyen bir rahatsızlık olduğu için, hakkında da çok
          fazla yanlış bilinen veya yayılan bilgiler mevcuttur bunlar;
          <br></br>
          <List bulleted>
              <List.Item>Disleksili Bireyler ‘Geriye Okuma’ Yaparlar</List.Item>
              <List.Item>
                Erkeklerin Kızlara Oranla Disleksi Olma Durumu Fazladır
              </List.Item>
              <List.Item>
                <List.Item>
                  Sol El Kullananların Disleksili Olma Oranı Daha Fazladır
                </List.Item>
              </List.Item>
              <List.Item>
                Zekâ ile Disleksi Arasında Doğrusal Bir İlişki Vardır
              </List.Item>
              <List.Item>
                Disleksi Toplumlarda Nadir Görülen Bir Durumdur
              </List.Item>
              <List.Item>
                Bir Birey Okuyabiliyorsa O Disleksili Olamaz
              </List.Item>
              <List.Item>
                Okuma Eğitimi Başlamadan Önce Bireydeki Disleksi Teşhis Edilemez
              </List.Item>
              <List.Item>
                Disleksi çocuklarda bulunur, yetişkinlerde bulunmaz
              </List.Item>
            
          </List>
        </p>
        <p>
          Bunlar ve daha bir çok Disleksi hakkında çok fazla yanlış bilgi
          bulunmaktadır. Yanlış bilgilerin yanı sıra bu konu hakkında hiçbir
          bilgi sahip olmayan insanlar ve bireyler vardır. Aslında toplum
          olarak, temel görevimiz böyle konularda sadece sevdiğimiz insanların
          başına geldiğinde değil her insanda olabilir düşüncesiyle hareket
          edip, bu konularda çevremizde olabilecek potansiyel bireyleri
          yönlendirmek bu konuda yapılan çalışmalara katılmak veya yardımcı
          olmaktır.
        </p>
        <Container text>
          <Segment vertical>
            <Grid container stackable verticalAlign="middle">
              <GridRow>
                <GridColumn>
                  <Image src="/hakkimizda.png" size="huge"></Image>
                </GridColumn>
              </GridRow>
            </Grid>
          </Segment>
        </Container>
      </Container>
    </div>
  );
}
