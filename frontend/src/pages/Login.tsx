import React, { useDebugValue, useEffect, useState } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card className="w-25" style={{ height: "300px" }}>
          <Card.Header>
            <h2>Login</h2>
          </Card.Header>

          <Card.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              ></Form.Control>
            </Form.Group>
          </Card.Body>

          <Card.Footer>
            <Stack direction="horizontal" gap={3}>
                <Button variant="primary">
                    Login
                </Button>
                <Link to="/signup">
                  <Button variant="">
                      Signup?
                  </Button>
                </Link>
            </Stack>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
