import React from "react";
import { Card, ListGroup, Container, Col, Row } from "react-bootstrap";

import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector((state) => state.reducerUser);
  console.log("user", user);
  return (
    <div style={{ padding: "3rem 2rem 5rem" }}>
      <h1>{user.data ? `Hello, ${user?.data?.fullname}` : "Hello,"}</h1>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{user?.data?.fullname}</ListGroup.Item>
                <ListGroup.Item>{user?.data?.email}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
