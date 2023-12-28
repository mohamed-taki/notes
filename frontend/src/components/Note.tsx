import React, { useState, MouseEvent, useEffect } from "react";
import { NoteProps } from "../helpers/types";
import { Button, Card, FormControl, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../app/hooks";
import { updateNote } from "../features/notes/notesSlice";

function Note({ note }: NoteProps) {
  const [noteContent, setNoteContent] = useState(note.content);
  const [doChange, setDoChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const noteUpdateDate = note.updatedAt ? note.updatedAt?.replace('Z','').split('T') : ["", ""];
  const noteCreatedDate = note.createdAt ? note.createdAt?.replace('Z','').split('T'): ["", ""];

  const dispatch = useAppDispatch();

  const updateNoteContent = async (e:MouseEvent) => {
    await dispatch(updateNote({...note, content: noteContent, isUpdated: true}));
    setIsLoading(false);
  }  

  // useEffect(() => { }, [note, dispatch, isLoading]);
  return (
    <div className="col-3 rounded p-2">
      <Card className="text-dark">
        <Card.Header className="text-end">
          <Button variant="info text-white py-0">x</Button>
        </Card.Header>
        <Card.Body className="position-relative">
          <FormControl
            as="textarea"
            value={noteContent}
            key={note._id}
            onChange={(e) => { setNoteContent(e.target.value) }}
            />
            <Button variant= { (isLoading ? "info" : "primary") + " w-100 mt-2"} onClick={e => {updateNoteContent(e); setIsLoading(true)}}>
              <FontAwesomeIcon icon={isLoading ? faSpinner : faEdit} className="spinner"/>
            </Button>
          </Card.Body>
        <Card.Footer>{note.isUpdated ? `Updated: ${noteUpdateDate[0]}-${noteUpdateDate[1]}` : `Created: #${noteCreatedDate[0]}-${noteCreatedDate[1]}`}</Card.Footer>
      </Card>
    </div>
  );
}

export default Note;
