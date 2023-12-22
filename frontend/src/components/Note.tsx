import React from "react";
import { NoteProps } from "../helpers/types";
import { Button, Card } from "react-bootstrap";

function Note({ note }: NoteProps) {
  return (
    <div className="col-3 rounded p-2">
      <Card className="text-dark">
        <Card.Header className="text-end">
          <Button variant="info text-white py-0">x</Button>
        </Card.Header>
        <Card.Body>{note.content}</Card.Body>
        <Card.Footer>{note.creationDate ? `Created: ${note.creationDate}` : `Updated: ${note.modificationDate}`}</Card.Footer>
      </Card>
    </div>
  );
}

export default Note;
