import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import listPiket from "./listpiket";

const JadwalPiket = () => {
  console.log(listPiket);
  return (
    <div>
      <HeaderChild />
      <div className="container">
        <Card>
          <Card.Header>Senin</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default JadwalPiket;
