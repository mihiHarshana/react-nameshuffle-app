import React from "react";
import {Button, Form} from "react-bootstrap";

const NamesForm : React.FC= () => {
  return (
    <React.Fragment>
      <h3>Names Form</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter the name to the list</Form.Label>
          <Form.Control required type="text" placeholder="Enter Name" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="mb-3">
          Add Name
        </Button>
      </Form>
    </React.Fragment>
  )
}
export default NamesForm