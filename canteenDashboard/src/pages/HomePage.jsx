import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import MenuViewer from '../containers/MenuViewer/MenuViewer';

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuViewer />
        </Col>
      </Row>
    </Container>
  );
}
