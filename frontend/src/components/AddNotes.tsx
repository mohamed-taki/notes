import React from 'react'
import { Button, Card, Container, Form, Stack } from 'react-bootstrap'

function AddNotes() {
  return (
    <Container className='d-flex justify-content-center my-2'>
        <Card className='col-4'>
            <Card.Body>
                <Stack direction='horizontal' gap={2}>
                    <Form.Control 
                        as='textarea'
                        placeholder="Add a new note"
                        />
                    <Button variant='primary'>+</Button>
                </Stack>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default AddNotes
