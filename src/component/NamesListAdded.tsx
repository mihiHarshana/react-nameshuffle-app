import React from "react";
import Names from "./Names";
import { Col, Row } from "react-bootstrap";

type NamesListAddedProps = {
  arr: string[]
}
const NamesListAdded: React.FC<NamesListAddedProps> = (props) => {
  const listItems = () => {
    return (
      <ol>
        {props.arr.map((name: string, index: number) =>
          <Names name={name} index={index} key={index} />)
        }
      </ol>
    );
  }
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          Added Names
        </Col>
        <Col xs={12}>
          {listItems()}
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default NamesListAdded