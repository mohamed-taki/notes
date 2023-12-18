import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Stack, Button } from "react-bootstrap";
import { sign } from "crypto";
interface signupForm {
  Fullname: string;
  email: string;
  username: string;
  password: string;
}
export default function Signup() {
  const initialeSignupForm: signupForm = {
    Fullname: "",
    email: "",
    username: "",
    password: "",
  };
  const [signupForm, setSignupForm] = useState(initialeSignupForm);

//   useEffect(() => {
//       console.log(signupForm)
//   }, [signupForm])
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card style={{width: "30%"}}>
          <Card.Header>
            <h2>Signup</h2>
          </Card.Header>

          <Card.Body>
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your fullname"
                value={signupForm.Fullname}
                onChange={(e) => setSignupForm({...signupForm, Fullname: e.target.value})}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                value={signupForm.email}
                onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Username"
                value={signupForm.username}
                onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Password"
                value={signupForm.password}
                onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
              ></Form.Control>
            </Form.Group>

          </Card.Body>

          <Card.Footer>
            <Stack direction="horizontal" gap={3}>
              <Button variant="success">Signup</Button>
              <Link to="/login">
                <Button variant="">Login?</Button>
              </Link>
            </Stack>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
