import React from "react";
import {
  FaPhoneSquare,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container>
      <Container>
        <Row className="f1">
          <Col md={8}>
            <h2 className="text-info">Follow us on Social Media</h2>
          </Col>
          <Col md={4}>
            <Link to={"#"} className="h2 text-info">
              {" "}
              <FaFacebookSquare />
            </Link>
            <Link to={"#"} className="h2 text-info">
              {" "}
              <FaTwitterSquare />
            </Link>
            <Link
              to={
                "https://www.instagram.com/shayar.community/?igshid=YmMyMTA2M2Y%3D"
              }
              className="h2 text-info"
            >
              {" "}
              <FaInstagramSquare />
            </Link>
            <Link
              to={"https://www.youtube.com/channel/UCYy1ppjK6YJC9FRY5N8D6IA"}
              className="h2 text-info"
            >
              {" "}
              <FaYoutubeSquare />
            </Link>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="text-info">About Us</h3>
            <b>
              <p>
                <Link to={"#"} className="text-dark">
                  Aim
                </Link>
              </p>
            </b>
            <b>
              <p>
                <Link to={"#"} className="text-dark">
                  Vision
                </Link>
              </p>
            </b>
            <b>
              <p>
                <Link to={"#"} className="text-dark">
                  Testimonials
                </Link>
              </p>
            </b>
          </Col>
          <Col md={4}>
            <h3 className="text-info">Useful Links</h3>
            <p>
              <b>
                <Link to={"#"} className="text-dark">
                  Shayari
                </Link>
              </b>
            </p>
            <p>
              <b>
                <Link to={"#"} className="text-dark">
                  Writing
                </Link>
              </b>
            </p>
            <p>
              <b>
                {" "}
                <Link to={"#"} className="text-dark">
                  Internships
                </Link>
              </b>
            </p>
            <p>
              <b>
                <Link to={"#"} className="text-dark">
                  Coding
                </Link>
              </b>
            </p>
            <p>
              <b>
                <Link to={"#"} className="text-dark">
                  Teaching
                </Link>
              </b>
            </p>
          </Col>
          <Col md={4}>
            <h3 className="text-info">Contact Us</h3>
            <p>
              <b>
                {" "}
                <FaMapMarkerAlt /> G-405,Darshanam Plaza, Danteshwar,Vadodara,
                Gujarat 390004
              </b>
            </p>
            <p>
              <b>
                <Link href="tel: 7043507789" className="text-dark">
                  <FaPhoneSquare /> +91 70435 07789
                </Link>
              </b>
            </p>
            <p href="mailto:info@shayar.me">
              <b>
                <FaEnvelope /> info@shayar.me
              </b>
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col className="text-info text-center">
            <b>Copyright &copy; Shayari.com</b>
          </Col>
        </Row>
        <hr />
        <Row className="f1">
          <Col className="text-info text-center">
            <b>Switch to Shayari</b>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Footer;
