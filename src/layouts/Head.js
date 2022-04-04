import React from "react";
import { Button, Header, Segment, Image, Grid } from "semantic-ui-react";

const src = "/dyslexia.png";

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
      <Segment vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                We Help Companies and Companions
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "10px" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Header as="h3" style={{ fontSize: "2em", marginLeft: "10px" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft:"10px" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                rounded
                size="large"
                src="/kitap.png" style={{marginLeft:"10px"}}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
    </div>
  );
}
