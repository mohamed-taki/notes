import React, { useState } from "react";
import { NoteProps } from "../helpers/types";
import { Button, Card, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function Note({ note }: NoteProps) {
  const [noteContent, setNoteContent] = useState(note.content);
  const [doChange, setDoChange] = useState(false);
  return (
    <div className="col-3 rounded p-2">
      <Card className="text-dark">
        <Card.Header className="text-end">
          <Button variant="info text-white py-0">x</Button>
        </Card.Header>
        <Card.Body>
          <FormControl
            as="textarea"
            value={noteContent}
            key={note._id}
            onChange={(e) => { setNoteContent(e.target.value) }}
            />
            <Button variant="primary">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </Card.Body>
        <Card.Footer>{note.createdAt ? `Created: #${note.createdAt.split('T')[0]}` : `Updated: ${note.updatedAt}`}</Card.Footer>
      </Card>
    </div>
  );
}

export default Note;
