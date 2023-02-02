import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
function Gallery() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row lg={12}>
          <Col>
            <h2
              style={{
                fontFamily: "cursive",
                textAlign: "center",
              }}
            >
              Gallery
            </h2>
            <CardGroup
              style={{
                backgroundImage:
                  'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
              }}
            >
              <Card>
                <Card.Img
                  className="p-3 m-2"
                  variant="top"
                  src="https://images.unsplash.com/photo-1670139020122-fa0659de63d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "cursive",
                      textAlign: "center",
                    }}
                  >
                    Other Events
                  </Card.Title>
                  <Card.Text>
                    We cover decor needs for all your events.
                  </Card.Text>
                  <Button className="btn-warning">View More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className="p-3 m-2"
                  variant="top"
                  src="https://images.unsplash.com/photo-1670139018938-af8bf748a1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "cursive",
                      textAlign: "center",
                    }}
                  >
                    Mehndi Ceremony
                  </Card.Title>
                  <Card.Text>
                    Let the color of Mehndi and the joy of your wedding grow
                    more and more.
                  </Card.Text>
                  <Button className="btn-warning">View More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className="p-3 m-2"
                  variant="top"
                  src="https://images.unsplash.com/photo-1596491365022-9a23584889b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "cursive",
                      textAlign: "center",
                    }}
                  >
                    Reception
                  </Card.Title>
                  <Card.Text>
                    Get the best Wedding Reception decoration only with Nayan
                    Pro & Events
                  </Card.Text>
                  <Button className="btn-warning">View More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className="p-3 m-2"
                  variant="top"
                  src="https://images.unsplash.com/photo-1670151791172-af9ad99c671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title>Wedding</Card.Title>
                  <Card.Text>
                    Best Indian wedding decoration from Nayan Pro & Events.
                  </Card.Text>
                  <Button className="btn-warning">View More</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
