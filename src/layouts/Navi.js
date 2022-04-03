import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Menu, Flag } from "semantic-ui-react";

const name = "                      Dyslexia"

export default class MenuExampleSizeHuge extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="huge" stackable>
        <Menu.Item
          name="dyslexia"
          active={activeItem === "dyslexia"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/"
        >
          <img src="/dys3.png"></img><span style={{marginLeft:"10px"}}>Dyslexia</span>
        </Menu.Item>

        <Menu.Item
          name="disleksi hakkında"
          active={activeItem === "disleksi hakkında"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/disleksihakkinda"
        />

        <Menu.Item
          name="ekibimiz"
          active={activeItem === "ekibimiz"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/ekibimiz"
        />

        

        <Menu.Item
          name="egitimler"
          active={activeItem === "egitimler"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/egitimler"
        />

        <Menu.Item name="forum"
          active={activeItem === "forum"}
          onClick={this.handleItemClick} href="https://www.suatdirav.com/Home/Index" target="_blank">
          </Menu.Item>

          <Menu.Item name="video"
          active={activeItem === "video"}
          onClick={this.handleItemClick} as={NavLink} to="/video">
          </Menu.Item>

          <Menu.Item name="iletisim"
          active={activeItem === "iletisim"}
          onClick={this.handleItemClick} as={NavLink} to="/iletisim">
          </Menu.Item>

          <Menu.Item name="test"
          active={activeItem === "test"}
          onClick={this.handleItemClick} as={NavLink} to="/test">
          </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown item text="Diller">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Flag name="tr"> Türkçe</Flag>
              </Dropdown.Item>
              <Dropdown.Item>
                <Flag name="us"> İngilizce</Flag>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
