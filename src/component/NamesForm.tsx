import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type NamesFormProps = {
  onAddName: (name: string) => void
}
const NamesForm: React.FC<NamesFormProps> = (props) => {
  const [name, setName] = useState<string>("");

  const nameChanged = (name: string) => {
    setName(name);
  }

  const onSubmit = () => {
    if (!name) {
    } else {
      props.onAddName(name);
      setName("");
    }
  }

  return (
    <React.Fragment>
      <h3>Names Form</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter the name to the list</Form.Label>
          <Form.Control
            required
            placeholder="Enter Name"
            value={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
              nameChanged(ev.target.value)}
          />

        </Form.Group>
        <Button variant="secondary" type="submit" className="mb-3" onClick={onSubmit}>
          Add Name
        </Button>
      </Form>
    </React.Fragment>
  )
}
export default NamesForm