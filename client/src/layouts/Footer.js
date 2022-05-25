import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, List, Header, Icon } from "semantic-ui-react";


export default function Footer() {
  return (
    <div style={{backgroundColor : "#1B1C1D"}}>
          <Container>
            <Grid divided stackable >
              <Grid.Row style={{marginLeft:"20px"}}>
                <Grid.Column width={3}>
                  <Header as="h4" content="Hakkımızda" style={{color:"white"}}/>
                  <List>
                    <List.Item as={NavLink} to="/disleksihakkinda" style={{color:"gray", textDecoration: "none"}}>Disleksi Hakkında</List.Item>
                    <List.Item as={NavLink} to="/ekibimiz" style={{color:"gray", textDecoration: "none"}}>Ekibimiz</List.Item>
                    <List.Item as={NavLink} to="/iletisim" style={{color:"gray", textDecoration: "none"}}>İletişim</List.Item>
                  </List>
                  
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as="h4" content="Testler" style={{color:"white"}}/>
                  <List>
                    <List.Item as={NavLink} to="/vinegradbilgi" style={{color:"gray", textDecoration: "none"}}>Vinegrad</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7} >
                  <Header as="h4" style={{color:"white"}}>Telif Hakkı</Header>
                  <p style={{color:"gray"}}>
                    <Icon name="copyright outline"></Icon>2022 Disleksi - Tüm Hakları Saklıdır.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </div>
  );
}
