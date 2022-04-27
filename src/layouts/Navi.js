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
        style={{ padding: "1em 0em", backgroundColor: "#fffdd0" }}
      >
        <Container>
          <Menu pointing secondary>
            <Menu.Item
              name="disleksi"
              active={activeItem === "disleksi"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/"
            >
              <img src="/dys3.png"></img>
              <span style={{ marginLeft: "10px" }}>Disleksi</span>
            </Menu.Item>

            {/* sonra yap */}
            
            {/* <Menu.Menu style={{ marginBottom: "5px" }}>
              <Dropdown item text="Hakkımızda">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Flag name="tr" style={{ fontSize: "14px" }}>
                      {" "}
                      Türkçe
                    </Flag>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Flag name="us" style={{ fontSize: "14px" }}>
                      {" "}
                      İngilizce
                    </Flag>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu> */}

            <Menu.Item
              name="Eğitimler"
              active={activeItem === "Eğitimler"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/egitimler"
              style={{ marginBottom: "3px" }}
            />
            <Menu.Item
              name="Test"
              active={activeItem === "Test"}
              onClick={() => handleItemClick()}
              as={NavLink}
              to="/test"
              style={{ marginBottom: "3px" }}
            />

            <Menu.Item
              name="Forum"
              active={activeItem === "Forum"}
              onClick={() => handleItemClick()}
              href="https://www.suatdirav.com/Home/Index"
              target="_blank"
              style={{ marginBottom: "3px" }}
            />
          </Menu>
        </Container>
      </Segment>
    </div>
  );
}
