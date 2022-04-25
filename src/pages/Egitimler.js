import React, { useState } from "react";
import { Container, Step, Icon } from "semantic-ui-react";
import Memory from "./Memory";
export default function Egitimler() {
  const [showMemory, setShowMemory] = useState(false);

  return (
    <div>
      <Container textAlign="center">
        <Step.Group>
          <Step>
            <Icon
              name="game"
              color="green"
              onClick={() => setShowMemory(false)}
            ></Icon>
            <Step.Content onClick={() => setShowMemory(true)}>
              <Step.Title>Hafıza Oyunu</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {showMemory ? <Memory></Memory> : <div></div>}
      </Container>
    </div>
  );
}
