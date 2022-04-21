import React from "react";
import { Container, Grid, List, Header } from "semantic-ui-react";

export default function Footer() {
  return (
    <div style={{backgroundColor : "#1B1C1D"}}>
          <Container>
            <Grid divided stackable >
              <Grid.Row style={{marginLeft:"20px"}}>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" style={{color:"white"}}/>
                  <List link>
                    <List.Item as="a" style={{color:"gray"}}>Sitemap</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Contact Us</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Religious Ceremonies</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" style={{color:"white"}}/>
                  <List link>
                    <List.Item as="a" style={{color:"gray"}}>Sitemap</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Contact Us</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Religious Ceremonies</List.Item>
                    <List.Item as="a" style={{color:"gray"}}>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" style={{color:"white"}}>Telif Hakkı</Header>
                  <p style={{color:"gray"}}>
                    Puip ekibi tarafından tasarlandı ve kodlandı. - Tüm hakları
                    saklıdır.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </div>
  );
}
