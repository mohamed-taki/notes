import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Container, Card, Form, Stack, Button } from "react-bootstrap";
import { signupUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import StdAlert from "../components/StdAlert";

interface signupForm {
  username: string,
  password: string,
}
export default function Signup() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const initialeSignupForm: signupForm = {
    username: "",
    password: "",
  };
  const [signupForm, setSignupForm] = useState(initialeSignupForm);
  const submitSignupForm = () => {
    if(signupForm.username.trim() == "" || signupForm.password.trim() == ''){
      return alert("All fields are required!");
    }
    
    dispatch(signupUser(signupForm));
  }
  useEffect(() => {
      if(authState.user){
        navigate('/home');
      }

  }, [authState, navigate])
  return (
    <div>
      { authState.isError && <StdAlert message={authState.message} type="danger"/> }
      { authState.isSuccess && <StdAlert message={authState.message} type="success"/> }

      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }} >
        
        <Card style={{width: "30%"}}>
          <Card.Header>
            <h2>Signup</h2>
          </Card.Header>

          <Card.Body>

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
              <Button variant="success" onClick={() => { submitSignupForm() }}>Signup</Button>
              <Link to="/login"> <Button variant="">Login?</Button> </Link>
            </Stack>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
