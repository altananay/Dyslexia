import React, { useState } from "react";
import { Container, Step, Icon } from "semantic-ui-react";
import Vinegrad from "./Vinegrad";
import "../css/Vinegrad.css"
import Reading from "./Reading";


export default function Test({...props}) {

  const [showVinegrad, setShowVinegrad] = useState(false);
  const [showReading, setShowReading] = useState(false);

  const isClicked = (clicked) => {
    if (clicked) {
      setShowVinegrad(true);
      setShowReading(false);
    }
    else
    {
      setShowVinegrad(false);
    }
  }

  const isClicked2 = (clicked) => {
    if (clicked) {
      setShowReading(true);
      setShowVinegrad(false);
    }
    else
    {
      setShowReading(false);
    }
  }

  return (
    <div>
      <Container textAlign="center">
        <Step.Group stackable="tablet">
          <Step>
            <Icon name="question" color="green" onClick={()=>isClicked(false)}></Icon>
            <Step.Content>
              <Step.Title onClick={()=>isClicked(true)}>Vinegrad</Step.Title>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="book" color="yellow" onClick={()=>isClicked2(false)}/>
            <Step.Content>
              <Step.Title onClick={()=>isClicked2(true)}>Okuma Hatası</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {showVinegrad ? <Vinegrad></Vinegrad>  : <div></div>}
        {showReading ? <Reading></Reading> : <div></div>}
      </Container>
    </div>
  );
}
