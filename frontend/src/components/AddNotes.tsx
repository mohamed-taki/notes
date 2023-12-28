import React, { useState } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { addNewNote } from "../features/notes/notesSlice";
import { useAppDispatch } from "../app/hooks";

function AddNotes() {
  const [noteContent, setNoteContent] = useState("");

  const dispatch = useAppDispatch();

  const addNote = async () => {
    if (noteContent.trim() != "") {
      await dispatch(addNewNote({ content: noteContent, isUpdated: false}));
      setNoteContent('');
    } else {
      alert("A note can't be empty.");
    }
  };

  return (
    <Container className="d-flex justify-content-center my-2">
      <Card className="col-lg-4 col-md-6 col-12">
        <Card.Body>
          <Stack direction="horizontal" gap={2}>
            <Form.Control
              as="textarea"
              value={noteContent}
              key={1}
              onChange={(e) => {
                setNoteContent(e.target.value);
              }}
              placeholder="Add a new note"
            />
            <Button
              variant="primary"
              onClick={(e) => {
                addNote();
              }}
            >
              +
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddNotes;
