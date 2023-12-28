import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser } from "../features/auth/authSlice";
import StdAlert from "../components/StdAlert";
import { stdFormStatesOnChange } from "../helpers/types";

export default function Login() {
  const [loginForm, setLoginForm] = useState({username: '', password: ''});

  const navigate = useNavigate();

  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(loginUser(loginForm));
  }

  useEffect(() => {
    if (authState.user) {
      navigate("/home");
    }
  }, [authState, navigate]);

  return (
    <div>
      {authState.isError && (
        <StdAlert message={authState.message} type="danger" />
      )}

      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card className="col-lg-4 col-md-6 col-8" style={{ height: "300px" }}>
          <Card.Header> 
            <h2>Login</h2>
          </Card.Header>

          <Card.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={loginForm.username}
                name="username"
                onChange={(e:ChangeEvent<HTMLInputElement>) => stdFormStatesOnChange(e, loginForm, setLoginForm)}
                placeholder="Username"
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={loginForm.password}
                name="password"
                onChange={(e:ChangeEvent<HTMLInputElement>) => stdFormStatesOnChange(e, loginForm, setLoginForm)}
                placeholder="password"
              ></Form.Control>
            </Form.Group>
          </Card.Body>

          <Card.Footer>
            <Stack direction="horizontal" gap={3}>
              <Button variant="primary" onClick={login}>Login</Button>
              <Link to="/signup">
                <Button variant="">Signup?</Button>
              </Link>
            </Stack>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
