import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import listPiket from "./listpiket";

const JadwalPiket = () => {
  return (
    <div>
      <HeaderChild headerName="Jadwal Piket" />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "wrap",
          gap: "20px",
          paddingBottom: "2rem",
        }}
      >
        {listPiket.map((piket) => {
          return (
            <Card style={{ minWidth: "180px" }}>
              <Card.Header>{piket.hari}</Card.Header>
              <ListGroup variant="flush">
                {piket.person.map((a, i) => {
                  return <ListGroup.Item key={i}>{a}</ListGroup.Item>;
                })}
              </ListGroup>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default JadwalPiket;
