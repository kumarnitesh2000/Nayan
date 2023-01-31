import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
        <h2>{user.event}</h2>
        <img
          src={`http://localhost/${user.image}`}
          style={{ height: "200px", width: "200px", border: "1px solid black" }}
        />
        <br />
        <button
          style={{ margin: "20px" }}
          id={user._id}
          onClick={(e) => handleDelete(e)}
        >
          Delete Event
        </button>
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
