import React, { useState } from "react";
import { Container, Step, Icon } from "semantic-ui-react";
import FarkliKelime from "./FarkliKelime";
import Harf from "./Harf";
import Memory from "./Memory";

export default function Egitimler() {
  const [showMemory, setShowMemory] = useState(false);
  const [showKelime, setShowKelime] = useState(false);
  const [showHarf, setShowHarf] = useState(false);

  const isClicked = () => {
    setShowMemory(true);
    setShowKelime(false);
    setShowHarf(false);
  }

  const isClicked2 = () => {
    setShowKelime(true);
    setShowMemory(false);
    setShowHarf(false);
  }
  
  const isClicked3 = () => {
    setShowKelime(false);
    setShowMemory(false);
    setShowHarf(true);
  }

  return (
    <div style={{backgroundColor: "#fffdd0"}}>
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
          <Step>
            <Icon
              name="bold"
            onClick={()=> setShowKelime(false)}></Icon>
            <Step.Content onClick={() => isClicked3()}>
              <Step.Title>Harf</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {showMemory ? <Memory></Memory> : <div></div>}
        {showKelime ? <FarkliKelime></FarkliKelime> : <div></div>}
        {showHarf ? <Harf></Harf> : <div></div>}
      </Container>
    </div>
  );
}
