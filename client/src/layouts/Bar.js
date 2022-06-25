import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../css/Bar.css";
import { toast } from "react-toastify";
export default function Bar({ user, setUser }) {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col as={NavLink} to="/">
            <img
              src="/logo2.png"
              loading="lazy"
              width="150px"
              style={{ marginTop: "20px" }}
            ></img>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {user ? (
          <Navbar expand="md">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
                <Navbar.Brand as={NavLink} to="/">
                  Anasayfa
                </Navbar.Brand>

                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/uygulamalar">
                    Uygulamalar
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/vinegrad">
                    Vinegrad Testi
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.suatdirav.com/Home/Index"
                    target="_blank"
                  >
                    Forum
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/girisyap"
                    onClick={() => {
                      localStorage.removeItem("user");
                      setUser(null);
                      toast.warning("Çıkış yapıldı..");
                    }}
                  >
                    Çıkış Yap
                  </Nav.Link>
                  <NavDropdown title="Dil" id="basic-nav-dropdown">
                    <NavDropdown.Item>Türkçe</NavDropdown.Item>
                    <NavDropdown.Item>English</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : (
          <Navbar expand="md">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
                <Navbar.Brand as={NavLink} to="/">
                  Anasayfa
                </Navbar.Brand>

                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/uygulamalar">
                    Uygulamalar
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/vinegrad">
                    Vinegrad Testi
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.suatdirav.com/Home/Index"
                    target="_blank"
                  >
                    Forum
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/kayitol">
                    Kayıt Ol
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/girisyap">
                    Giriş Yap
                  </Nav.Link>
                  <NavDropdown title="Dil" id="basic-nav-dropdown">
                    <NavDropdown.Item>Türkçe</NavDropdown.Item>
                    <NavDropdown.Item>English</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </Container>
    </div>
  );
}
