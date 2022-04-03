import React from "react";
import {
  Container,
  Header,
  Card,
  Icon,
  Grid,
  GridRow,
  GridColumn,
  Divider
} from "semantic-ui-react";


export default function Hakkimizda() {
  return (
    <div>
      <Icon name="book" size="large" color="green"></Icon>
    <Container textAlign='justified'>
      <b>Justified</b>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>

      <Grid columns={4}>
        <GridRow>
          <GridColumn>
            <Card
              header="Altan ANAY"
              meta="Joker"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Okab Avcu"
              meta="Teorikçi Başı"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Cumhur Utku ATAK"
              meta="Yazılım"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Ahmet Suat Dirav"
              meta="Yazılım"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Card
              header="Berkay Alişan"
              meta="Ara bulucu"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Yusuf Keçer"
              meta="Photoshop"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Ayşe Bayam"
              meta="Fikir Babası"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
          <GridColumn>
            <Card
              header="Gamze Nur Akmeşe"
              meta="Öğrenci İşleri"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
        
      
    </div>
  );
}
