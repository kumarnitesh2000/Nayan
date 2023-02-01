import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Users } from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Contact from "./components/Contact";
import CreateUser from "./components/CreateUser";
import { getAllUsers, createUser } from "./services/UserService";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const userCreate = (e) => {
    createUser(user).then((response) => {
      console.log(response);
      window.location.reload();
      setNumberOfUsers(numberOfUsers + 1);
    });
  };

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  }, []);

  const onChangeForm = (e) => {
    console.log(e.target.value);
    if (e.target.id == "resume") {
      user.image = e.target.files[0];
    } else {
      user.event = e.target.value;
    }
    console.log(user);
    setUser(user);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Container lg={12}>
                <Header />
                <Row lg={12}>
                  <Col>
                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="http://www.nayanevents.com/images/sliders/8820210921103450.jpeg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          {/* <h3>First slide label</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="http://www.nayanevents.com/images/sliders/7120210820115701.jpeg"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          {/* <h3>Second slide label</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="http://www.nayanevents.com/images/sliders/7920210819010723.jpeg"
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          {/* <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
                <Row lg={12}>
                  <Col>
                    <Card
                      body
                      style={{
                        backgroundImage:
                          'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "cursive",
                          textAlign: "center",
                        }}
                      >
                        <b>About</b> <span className="text-muted">Us</span>
                      </h2>
                      <p className="mt-3">
                        Event planning is the energizing art of choreographing
                        people and activities in order to create a show that
                        creates memories of a lifetime. Designing and producing
                        an event, whether it’s a Wedding, Birthday, meeting,
                        corporate event, fund-raiser, tradeshow or any other
                        event, is in many ways comparable to directing a live
                        stage performance.
                      </p>
                      <p className="mt-3">
                        A bonus, for those who love to travel, it provides an
                        amazing opportunity to travel to luxurious hotels,
                        interesting new places and meet speakers and attendees
                        from around the world. All of this, while enjoying a
                        high level of autonomy and independence!
                      </p>
                    </Card>
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
                            Let the color of Mehndi and the joy of your wedding
                            grow more and more.
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
                            Get the best Wedding Reception decoration only with
                            Nayan Pro & Events
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
                            Best Indian wedding decoration from Nayan Pro &
                            Events.
                          </Card.Text>
                          <Button className="btn-warning">View More</Button>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <div
                      style={{
                        backgroundImage:
                          'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
                      }}
                    >
                      <Users users={users}></Users>
                      <Button
                        className="btn-warning mt-2 mb-3"
                        onClick={() => window.location.replace("./add")}
                      >
                        Add Event
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Contact />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    {/* <Footer /> */}
                  </Col>
                </Row>
              </Container>
            </div>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <div>
              <Header />

              <div className="col-md-8">
                <CreateUser
                  user={user}
                  onChangeForm={onChangeForm}
                  createUser={userCreate}
                ></CreateUser>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
                }}
              >
                <Users users={users}></Users>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
