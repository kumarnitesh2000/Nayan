import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
// import shayar_logo from "../assets/shayar_logo.png";
function Header() {
  const [showShayari, setShowShayari] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showOpenMic, setShowOpenMic] = useState(false);
  const [showBookPublishing, setShowBookPublishing] = useState(false);
  const handleCloseShayari = () => setShowShayari(false);
  const handleShowShayari = () => setShowShayari(true);
  const handleCloseBusiness = () => setShowBusiness(false);
  const handleShowBusiness = () => setShowBusiness(true);
  const handleCloseOpenMic = () => setShowOpenMic(false);
  const handleShowOpenMic = () => setShowOpenMic(true);
  const handleCloseBookPublishing = () => setShowBookPublishing(false);
  const handleShowBookPublishing = () => setShowBookPublishing(true);
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

            <Nav.Link className="text-info mx-1">
              <h5 onMouseMove={handleShowShayari}>Shayari </h5>
              <Modal show={showShayari} onHide={handleCloseShayari} size="lg">
                <Modal.Body className="show-grid">
                  <Container>
                    <Row>
                      <Col xs={6} md={3}>
                        <h5>Love</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Sad</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Attitude</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Others</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={6} md={3}>
                        <Link to="/shayariPage" className="text-dark">
                          Love subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/shayariPage" className="text-dark">
                          Sad subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/shayariPage" className="text-dark">
                          Attitude subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/shayariPage" className="text-dark">
                          Others subtype
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </Nav.Link>
            <Nav.Link className="text-info mx-1">
              <h5 onClick={handleShowBusiness}>About Us </h5>

              <Modal show={showBusiness} onHide={handleCloseBusiness} size="lg">
                <Modal.Body className="show-grid">
                  <Container>
                    <Row>
                      <Col xs={6} md={3}>
                        <h5>Business 1</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Business 2</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Business 3</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Business 4</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={6} md={3}>
                        <Link to="/businesspage" className="text-dark">
                          Business 1 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/businesspage" className="text-dark">
                          Business 2 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/businesspage" className="text-dark">
                          Business 3 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/businesspage" className="text-dark">
                          Business 4 subtype
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </Nav.Link>
            <Nav.Link className="text-info mx-1">
              <h5 onClick={handleShowOpenMic}>
                Gallery{" "}
                {/* <span>
                  <FaAngleDown />
                </span> */}
              </h5>

              <Modal show={showOpenMic} onHide={handleCloseOpenMic} size="lg">
                <Modal.Body className="show-grid">
                  <Container>
                    <Row>
                      <Col xs={6} md={3}>
                        <h5>Open Mic 1</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Open Mic 2</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Open Mic 3</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>Open Mic 4</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={6} md={3}>
                        <Link to="/openmic" className="text-dark">
                          open mic 1 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/openmic" className="text-dark">
                          open mic 2 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/openmic" className="text-dark">
                          open mic 2 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/openmic" className="text-dark">
                          open mic 2 subtype
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </Nav.Link>
            <Nav.Link className="text-info mx-1">
              <h5 onClick={handleShowBookPublishing}>
                Events{" "}
                {/* <span>
                  <FaAngleDown />
                </span> */}
              </h5>

              <Modal
                show={showBookPublishing}
                onHide={handleCloseBookPublishing}
                size="lg"
              >
                <Modal.Body className="show-grid">
                  <Container>
                    <Row>
                      <Col xs={6} md={3}>
                        <h5>BookPublishing 1</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>BookPublishing 2</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>BookPublishing 3</h5>
                      </Col>
                      <Col xs={6} md={3}>
                        <h5>BookPublishing 4</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={6} md={3}>
                        <Link to="/bookpublishingpage" className="text-dark">
                          BookPublishing 1 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/bookpublishingpage" className="text-dark">
                          BookPublishing 2 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/bookpublishingpage" className="text-dark">
                          BookPublishing 3 subtype
                        </Link>
                      </Col>
                      <Col xs={6} md={3}>
                        <Link to="/bookpublishingpage" className="text-dark">
                          BookPublishing 4 subtype
                        </Link>
                      </Col>
                    </Row>
                    <hr />
                  </Container>
                </Modal.Body>
              </Modal>
            </Nav.Link>
            <Nav.Link className="text-info mx-1">
              <Link to="/earnwithus" className="text-info">
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
