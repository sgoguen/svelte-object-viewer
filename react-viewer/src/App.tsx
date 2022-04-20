import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Viewer } from './Viewer';

const person = {
  name: "Steveo",
  age: 27,
  todo: [
    { task: "Do this", priority: 2 },
    { task: "Do this", priority: 1 },
    { task: "Do this", priority: 5 },
  ],
};

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Viewer value={person}></Viewer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
