import React from "react";

import Names from "./Names";
import {Col, Row} from "react-bootstrap";
const NamesListAdded = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          Added Names
        </Col>
        <Col xs={12}>
          <Names index={"1"} userName={"Awantha"}/>
          <Names index={"2"} userName={"Mihi"}/>
          <Names index={"3"} userName={"Vimu"}/>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default NamesListAdded