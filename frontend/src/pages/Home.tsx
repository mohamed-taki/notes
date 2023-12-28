import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import { logoutMyUser } from "../features/auth/authSlice";
import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";

function Home() {
  const authState = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    dispatch(logoutMyUser());
  };

  useEffect(() => {
    if (!authState.user || !localStorage.getItem('user')) {
      navigate("/login");
    }
  }, [authState, navigate, dispatch]);
  return (
    <div>

      <Stack direction="horizontal">

          <Container>
              <Button variant="danger" onClick={logout} className="align-self-start m-2">
                Logout
              </Button>
              <AddNotes />
              <NotesList />
          </Container>
      </Stack>
    </div>
  );
}

export default Home;
