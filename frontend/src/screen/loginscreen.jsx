import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import FormContainer from "../components/formcontainer";

const loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submithandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
Sign in
        </Button>
      </Form>
    </FormContainer>
  );
};

export default loginscreen;
