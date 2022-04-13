import React from "react";
import { Button, Header, Segment, Image, Grid, GridRow, GridColumn , Container, Divider} from "semantic-ui-react";


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
      
      <Segment style={{ padding: '0em' }} basic>
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
                src="/logoWhite.jpg" style={{marginLeft:"10px", marginBottom:"20px"}}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
    <Segment style={{padding:"0em"}}>
      <Grid celled="internally" columns="equal" stackable>
        <GridRow textAlign="center">
          <GridColumn style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </GridColumn>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </GridRow>
      </Grid>
    </Segment>

    <Segment style={{ padding: '4em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    </div>
  );
}
