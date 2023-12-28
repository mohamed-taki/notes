import React, { useState, MouseEvent, useEffect } from "react";
import { NoteProps } from "../helpers/types";
import { Button, Card, FormControl, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../app/hooks";
import { deleteNote, updateNote } from "../features/notes/notesSlice";
import moment from "moment";
import momentTimezone from "moment-timezone";

function Note({ note }: NoteProps) {
  const [noteContent, setNoteContent] = useState(note.content);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  momentTimezone.tz.setDefault();

  const dispatch = useAppDispatch();

  const updateNoteContent = async (e: MouseEvent) => {
    await dispatch(
      updateNote({ ...note, content: noteContent, isUpdated: true })
    );
    setIsLoading(false);
  };

  const confirmDeleteNote = () => {
    if (window.confirm("Do you want to delete this note?")) {
      dispatch(deleteNote(note._id));
    }
  };

  // useEffect(() => {}, [note, dispatch, isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReload(!reload);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="col-lg-3 col-md-4 col-12 rounded p-2">
      <Card className="text-dark">
        <Card.Header className="text-end">
          <Button
            variant="info text-white py-0"
            onClick={() => confirmDeleteNote()} >
            x
          </Button>
        </Card.Header>
        <Card.Body className="position-relative">
          <FormControl
            as="textarea"
            value={noteContent}
            key={note._id}
            onChange={(e) => {
              setNoteContent(e.target.value);
            }}
          />
          <Button
            variant={(isLoading ? "info" : "primary") + " w-100 mt-2"}
            onClick={(e) => {
              updateNoteContent(e);
              setIsLoading(true);
            }}
          >
            <FontAwesomeIcon
              icon={isLoading ? faSpinner : faEdit}
              className="spinner"
            />
          </Button>
        </Card.Body>
        <Card.Footer>
          {note.isUpdated
            ? `Updated: ${moment(note.updatedAt).fromNow()}`
            : `Created: ${moment(note.createdAt).fromNow()}`}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Note;
