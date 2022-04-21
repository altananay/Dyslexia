import React from "react";
import {
  Container,
  GridColumn,
  Card,
  Image,
  Icon,
  Grid,
  GridRow
} from "semantic-ui-react";

export default function EkibimizSecond() {
  return (
    <div>
      <Container>
        <Grid container stackable columns={4} style={{ marginTop: "20px" }}>
          <GridRow>
            <GridColumn>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Altan ANAY</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Okan AVCI</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Cumhur Utku ATAK</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Ahmet Suat DİRAV</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn style={{ marginTop: "20px" }}>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Berkay ALİŞAN</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn style={{ marginTop: "20px" }}>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Yusuf KEÇER</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn style={{ marginTop: "20px" }}>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Ayşe BAYAM</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn style={{ marginTop: "20px" }}>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <h5>Gamze Nur AKMEŞE</h5>
                  </Card.Header>
                  <Card.Description>
                    <Icon name="linkedin" color="blue" size="big"></Icon>
                    <Icon name="instagram" color="pink" size="big"></Icon>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
