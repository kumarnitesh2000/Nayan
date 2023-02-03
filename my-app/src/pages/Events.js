import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllUsers } from "../services/UserService";
import Users from "../components/Users";
function Events() {
  const [users, setUsers] = useState([]);
  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
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
              <Users users={users} />
            </div>
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

export default Events;
