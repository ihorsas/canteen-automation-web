import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Items from './Items';
import Categories from './Categories';


export default function MenuViewer() {
  return (
    <Container fluid>
      <Row className="border-bottom">
        <Col>
          <h1 className="text-center my-2">Menu Viewer</h1>
        </Col>
      </Row>
      <Row>
          <Categories />
      </Row>
    </Container>
  );
}
