import React from "react";

import Names from "./Names";
import {Col, Row} from "react-bootstrap";
const NamesListShuffled = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          Shuffled Names List
        </Col>
        <Col xs={12}>
          <Names index={1} name={"Awantha"}/>
          <Names index={1} name={"Mihi"}/>
          <Names index={1} name={"Vimu"}/>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default NamesListShuffled