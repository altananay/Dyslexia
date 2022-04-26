import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Flag, Segment, Container } from "semantic-ui-react";

export default function Navi() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Segment
        vertical
        textAlign="center"
        style={{ padding: "1em 0em", backgroundColor: "#F7F7F7" }}
      >
        <Container>
          <Menu pointing secondary>
            <Menu.Item
              name="dyslexia"
              active={activeItem === "dyslexia"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/"
            >
              <img src="/dys3.png"></img>
              <span style={{ marginLeft: "10px" }}>Dyslexia</span>
            </Menu.Item>
            <Menu.Item
              name="Eğitimler"
              active={activeItem === "Eğitimler"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/egitimler"
              style={{marginBottom:"3px"}}
            />
            <Menu.Item
              name="Test"
              active={activeItem === "Test"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/test"
              style={{marginBottom:"3px"}}
            />
            <Menu.Item
              name="Forum"
              active={activeItem === "Forum"}
              onClick={() => handleItemClick()}
              href="https://www.suatdirav.com/Home/Index"
              target="_blank"
              style={{marginBottom:"3px"}}
            />

            <Menu.Menu position="right" style={{marginBottom:"3px"}}>
              <Dropdown item text="Diller">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Flag name="tr">
                      {" "}
                      Türkçe
                    </Flag>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Flag name="us">
                      İngilizce
                    </Flag>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    </div>
  );
}
