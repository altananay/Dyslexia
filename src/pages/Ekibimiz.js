import React from "react";
import {
  Container,
  Card,
  Icon,
  Grid,
  GridRow,
  GridColumn,
  Divider,
  Image,
} from "semantic-ui-react";

export default function Hakkimizda() {
  return (
    <div>
      <Container textAlign="justified">
        <b>Biz Kimiz</b>
        <Divider />
        <p>
          Pamukkale üniversitesi yönetim bilişim sistemleri 3.sınıf öğrencileri
          olarak bilime ve teknolojiye gönül veren, yenilikler çok sıkı takip
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

        {/* large screen*/}
        <Grid stackable columns={4}>
          <GridRow only="tablet">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="tablet">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    <h4>Gamze AKMEŞE</h4>
                  </Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
        {/* mobile */}
        <Grid columns={2}>
          <GridRow only="mobile">
            <GridColumn>
              <Card style={{ marginBottom: "20px" }}>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="mobile">
            <GridColumn>
              <Card style={{ marginBottom: "20px" }}>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    <h4>Gamze AKMEŞE</h4>
                  </Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>

        {/* large screen */}
        <Grid stackable columns={4}>
          <GridRow only="large screen">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur Utku ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ahmet Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="large screen">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    <h4>Gamze Nur AKMEŞE</h4>
                  </Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
