import React, { useState } from "react"
import {Col, Row} from "react-bootstrap";

import NamesForm from "./NamesForm";
import NamesListAdded from "./NamesListAdded";
import ShuffleButton from "./ShuffleButton";
import NamesListShuffled from "./NamesListShuffled";

const MainApp: React.FC = () => {
  const arr:string[]= ["vimu","navo","lihini"];

  const [name1, setName1] = useState<string[]>(arr)
  const handleOnAddName = (name:string)=>{
    var index=name1.length;
    const allName: string[] = name1.slice();
    allName.splice(index, 1, name);
    setName1(allName);
  }
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} className="bg-dark bg-opacity-50">
          <h1 >Welcome to Shuffle App</h1>
          <h6> Powered by Crazy Coders 2022</h6>
        </Col>
        <Col xs={12} lg={6} className="px-4 bg-primary bg-opacity-10">
          <NamesForm onAddName= {handleOnAddName}/>
        </Col>
        <Col xs={12} lg={6} className="px-4 bg-primary bg-opacity-10">
          <NamesListAdded arr={name1}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ShuffleButton />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <NamesListShuffled />
        </Col>
      </Row>

    </React.Fragment>

  )

}
export default MainApp