import React from 'react'
import Note from './Note'
import { Container } from 'react-bootstrap'

function NotesList() {
    const notes = [{ content: "this is the note content", creationDate : "2023-12-23" }];
  return (
    <Container className='d-flex flex-wrap gap-2 justify-content-center col-12 text-white bg-success'>
        {notes.map( (note) => {
            return <Note note={note}/>;
        })}
    </Container>
  )
}

export default NotesList
