import React from 'react';
import PropTypes from 'prop-types';

import { Mutation } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  Button,
  Card,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

export default function ItemCard(props) {
  const {
    id,
    name,
    price,
    category,
    options,
    onDelete,
    onEdit,
  } = props;

  return (
    <Card className="w-100 m-1">
      <Card.Body className="p-0">
        <Container fluid>
          <Row>
            <Col xs={1} className="bg-success py-3" />
            <Col xs={8}>
              {name}
            </Col>
            <Col xs={3}>
              {price}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

ItemCard.defaultProps = {
  onDelete: null,
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  options: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  is_available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
