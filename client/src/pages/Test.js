import React, { useState } from "react";
import { Container, Step, Icon } from "semantic-ui-react";
import Vinegrad from "./Vinegrad";
import "../css/Vinegrad.css"


export default function Test() {

  const [showVinegrad, setShowVinegrad] = useState(false);

  const isClicked = (clicked) => {
    if (clicked) {
      setShowVinegrad(true);
    }
    else
    {
      setShowVinegrad(false);
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
        </Step.Group>
        {showVinegrad ? <Vinegrad></Vinegrad>  : <div></div>}
      </Container>
    </div>
  );
}
