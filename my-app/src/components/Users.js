import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
export const Users = ({ users }) => {
  console.log("users length:::", users.length);
  if (users.length === 0) return null;
  const handleDelete = async (e) => {
    console.log(e.target.id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: e.target.id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let r = await fetch("http://localhost/api/event", requestOptions);
    let k = await r.json();
    window.location.reload();
  };
  const UserRow = (user, index) => {
    console.log(user);
    return (
      <div style={{ margin: "20px" }}>
        <Row lg={12}>
          <Col>
            <CardGroup
              style={{
                backgroundImage:
                  'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
              }}
            >
              {/* {user &&
                user.map((index, id) => ( */}
              <Card>
                <Card.Img
                  className="p-3 m-2"
                  variant="top"
                  src={`http://localhost/${user.image}`}
                  style={{ width: 300, height: 200 }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "cursive",
                      textAlign: "center",
                    }}
                  >
                    {user.event}
                  </Card.Title>
                  <Card.Text>
                    We cover decor needs for all your events.
                  </Card.Text>
                  <Button
                    className="btn-warning"
                    style={{ margin: "20px" }}
                    id={index._id}
                    onClick={(e) => handleDelete(e)}
                  >
                    Delete Event
                  </Button>
                </Card.Body>
              </Card>
              {/* ))} */}
            </CardGroup>
          </Col>
        </Row>
      </div>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

  return (
    <>
      <Container fluid={true}>
        <Row
          style={{
            backgroundImage:
              'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
          }}
        >
          <Col
            className="h2"
            style={{
              fontFamily: "cursive",
              textAlign: "center",
            }}
          >
            Events
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex" }}>{userTable}</Col>
        </Row>
        <div>{/* <a href="/add">Add Event</a> */}</div>
      </Container>
    </>
  );
};
