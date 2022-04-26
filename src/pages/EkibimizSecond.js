import React from "react";
import {
  Container,
  GridColumn,
  Card,
  Image,
  Icon,
  Grid,
  GridRow,
  MenuItem,
} from "semantic-ui-react";
import "../css/Ekibimiz.css";
export default function EkibimizSecond() {
  return (
    <div>
      <Container>
        <Grid container stackable columns={4} style={{ marginTop: "20px" }}>
          <GridRow>
            <GridColumn>
              <Card>
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
                <Card.Content>
                  <Card.Header>
                    <h5>Okan AVCI</h5>
                  </Card.Header>
                  <Card.Description>
                    <MenuItem
                      className="link"
                      href="https://www.linkedin.com/in/okan-avc%C4%B1-b275771a5"
                      target="_blank"
                    >
                      <Icon name="linkedin" color="blue" size="big"></Icon>
                    </MenuItem>
                    <MenuItem
                      className="link"
                      href="https://instagram.com/okan.aavci?igshid=YmMyMTA2M2Y="
                      target="_blank"
                    >
                      <Icon name="instagram" color="pink" size="big"></Icon>
                    </MenuItem>
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
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
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  loading="lazy"
                ></img>
                <Card.Content>
                  <Card.Header>
                    <h5>Gamze AKMEŞE</h5>
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
