import React from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Table,
  Tab,
} from "semantic-ui-react";

const panes = [
  { menuItem: "Vinegrad Testi", render: () => <Tab.Pane>Vinegrad buraya...</Tab.Pane> },
  { menuItem: "Okuma Hatası", render: () => <Tab.Pane><Table celled>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Okuma Hatası</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>Harf Atlaması</Table.Cell>
      <Table.Cell selectable>
        <a href="#">Edit</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Hece Atlama</Table.Cell>
      <Table.Cell selectable>
        <a href="#">Edit</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcük Atlama</Table.Cell>
      <Table.Cell selectable>
        <a href="#">Edit</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row warning>
      <Table.Cell>Harf Ekleme</Table.Cell>
      <Table.Cell selectable warning>
        <a href="#">Requires change</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Hece Ekleme</Table.Cell>
      <Table.Cell selectable positive>
        <a href="#">Approve</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sonunu Uydurma</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Harflerin Yerini Değiştirme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcüklerin Yerini Değiştirme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Harf Değiştirme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Hece Değiştirme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Yerine farklı sözcük okuma</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcüğü tersten okuma</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Harfleri tersten okuma</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Kendini düzeltme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Heceleyerek Okuma</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Satır Atlama</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcüğü tekrarlama</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcük grubunu tekrarlama</Table.Cell>
      <Table.Cell
        selectable
        negative
        onClick={() => (
          <Icon
            name="checkmark"
            color="green"
            size="large"
          ></Icon>
        )}
      >
        <a>Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcüğün bir kısmını tekrarlama</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Sözcük ekleme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Satır Tekrarı</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Parmakla takip etme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Okuduğu yeri kaybetme</Table.Cell>
      <Table.Cell selectable negative>
        <a href="#">Remove</a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table></Tab.Pane> },
];

export default function Test() {
  return (
    <div>
      <Container>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={panes}
        />
      </Container>

      <Grid>
        <GridRow>
          <GridColumn width={16}>
            <Container textAlign="center">
              
            </Container>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
