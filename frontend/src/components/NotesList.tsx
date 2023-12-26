import React, { useEffect } from "react";
import Note from "./Note";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getNotes } from "../features/notes/notesSlice";

function NotesList() {
  const dispatch = useAppDispatch();
  const notesState = useAppSelector((state) => state.notes);
  const { notes } = notesState;

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <Container className="d-flex flex-wrap gap-2 justify-content-center col-12 text-white">
      {notes.map((note) => {
        return <Note note={note} key={note._id}/>;
      })}
    </Container>
  );
}

export default NotesList;
