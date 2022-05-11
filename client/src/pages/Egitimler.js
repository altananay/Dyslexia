import React, { useState } from "react";
import { Container, Step, Icon } from "semantic-ui-react";
import FarkliKelime from "./FarkliKelime";
import Memory from "./Memory";
export default function Egitimler() {
  const [showMemory, setShowMemory] = useState(false);
  const [showKelime, setShowKelime] = useState(false);

  const isClicked = () => {
    setShowMemory(true);
    setShowKelime(false);
  }

  const isClicked2 = () => {
    setShowKelime(true);
    setShowMemory(false);
  }

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
            <Step.Content onClick={() => isClicked()}>
              <Step.Title>Hafıza Uygulaması</Step.Title>
            </Step.Content>
          </Step>
          <Step>
            <Icon
              name="bold"
            onClick={()=> setShowKelime(false)}></Icon>
            <Step.Content onClick={() => isClicked2()}>
              <Step.Title>Farklı Kelime</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {showMemory ? <Memory></Memory> : <div></div>}
        {showKelime ? <FarkliKelime></FarkliKelime> : <div></div>}
      </Container>
    </div>
  );
}
