import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  Menu,
  Flag,
  Segment,
  Container,
  Button,
} from "semantic-ui-react";
import { toast } from "react-toastify";
export default function Navi({ user, setUser }) {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  return (
    <div>
      <Segment
        vertical
        textAlign="center"
        style={{ padding: "1em 0em", backgroundColor: "#fffdd0" }}
      >
        <Container>
          {user ? (
            <Menu pointing secondary>
              <Menu.Item
                name="disleksi"
                active={activeItem === "disleksi"}
                onClick={() => handleItemClick()}
                as={NavLink}
                to="/"
              >
                <img src="/dys3.png" loading="lazy"></img>
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
                name="Uygulamalar"
                active={activeItem === "Uygulamalar"}
                onClick={() => handleItemClick()}
                as={NavLink}
                to="/uygulamalar"
                style={{ marginBottom: "3px" }}
              />
              <Menu.Item
                name="Vinegrad Testi"
                active={activeItem === "Test"}
                onClick={() => handleItemClick()}
                as={NavLink}
                to="/vinegrad"
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
              <Menu.Item
                name="Çıkış Yap"
                active={activeItem === "Çıkış Yap"}
                onClick={() => {
                  handleItemClick();
                  localStorage.removeItem("user");
                  setUser(null);
                  toast.warning("Çıkış yapıldı..");
                }}
                style={{ marginBottom: "3px" }}
                position="right"
              />
            </Menu>
          ) : (
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
                name="Uygulamalar"
                active={activeItem === "Uygulamalar"}
                onClick={() => handleItemClick()}
                as={NavLink}
                to="/uygulamalar"
                style={{ marginBottom: "3px" }}
              />
              <Menu.Item
                name="Vinegrad Testi"
                active={activeItem === "Vinegrad Testi"}
                onClick={() => handleItemClick()}
                as={NavLink}
                to="/vinegrad"
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
              <Menu.Item
                name="Kayıt Ol"
                active={activeItem === "Kayıt Ol"}
                onClick={() => handleItemClick()}
                style={{ marginBottom: "3px" }}
                as={NavLink}
                to="/kayitol"
                position="right"
              />
              <Menu.Item
                name="Giriş Yap"
                active={activeItem === "Giriş Yap"}
                onClick={() => handleItemClick()}
                style={{ marginBottom: "3px" }}
                as={NavLink}
                to="/girisyap"
              />
            </Menu>
          )}
        </Container>
      </Segment>
    </div>
  );
}
