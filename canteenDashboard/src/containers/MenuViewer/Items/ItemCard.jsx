import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

const imgStyle = {
  'height': '270px',
  'width': 'auto',
  'max-width':'1000px'
};

export default function ItemCard(props) {
  const {
    id,
    name,
    price,
    isAvailable,
    category,
    options,
    image,
    onDelete,
    onEdit,
  } = props;

  var isAvailableColor;
  if (isAvailable) {
    isAvailableColor = "bg-success py-3";
  } else {
    isAvailableColor = "bg-danger py-3";
  }

  return (
    <Card className="w-100 m-1">
      <Card.Body className="p-0">
        <Container fluid>
          <Row>
            <Col xs={1} className= {isAvailableColor}/>
            <Col xs={8}>
              <h5>{name}</h5>
            </Col>
            <Col xs={3}>
              <h3>{price}₴</h3>
            </Col>
          </Row>
          <Row style={{display: 'flex', justifyContent: 'center'}}>
              <img style={imgStyle} src={`${process.env.REACT_APP_GRAPHQL_ENDPOINT}/media/${image}`}></img>
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
