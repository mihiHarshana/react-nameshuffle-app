import React from "react";
import {Col, Row} from "react-bootstrap";
import { Edit, Edit2, Trash2} from 'react-feather';

type NamesProps = {
  name: String,
  index: number
}


const Names :React.FC<NamesProps> = (props) => {
  return (

      <Row>
        <Col xs={8} >
          <h6>
            {props.index+1} {props.name}
          </h6>
        </Col>
        <Col xs={4} >
          <Trash2  />
          <Edit />
        </Col>
      </Row>

  )

}
export  default Names
