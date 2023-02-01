import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  const [showShayari, setShowShayari] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="lignt"
      variant="dark"
      style={{
        backgroundImage: 'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="http://www.nayanevents.com/images/logo.png"
            width={150}
            height={80}
            alt="Nayan Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-info mx-1">
              <h5> Home</h5>
            </Nav.Link>

            <Nav.Link href="/aboutUs" className="text-info mx-1">
              <h5>About Us </h5>
            </Nav.Link>
            <Nav.Link href="/gallery" className="text-info mx-1">
              <h5>
                Gallery{" "}
                {/* <span>
                  <FaAngleDown />
                </span> */}
              </h5>
            </Nav.Link>
            <Nav.Link href="/events" className="text-info mx-1">
              <h5>
                Events{" "}
                {/* <span>
                  <FaAngleDown />
                </span> */}
              </h5>
            </Nav.Link>
            <Nav.Link className="text-info mx-1">
              <Link to="/ContactUs" className="text-info">
                <h5>Contact Us</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
