/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import { Query } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import CenteredSpinner from '../../../components/Spinner/CenteredSpinner';

import {
  Container,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';

import CategoryItem from './CategoryCard';

export default function Categories() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(s => !s);

  return (
    <Container fluid>
      <Row>
        <Query query={queries.GET_CATEGORIES}>
          {({
            data,
            loading,
            error,
            refetch,
          }) => {
            if (loading) {
              return <CenteredSpinner />;
            }

            if (error) {
              return `Error is ${error}`;
            }

            const onHide = () => {
              toggle();
              refetch();
            };

            return (
              <Col>
                {data.categories.map(c => <CategoryItem key={c.id} onDelete={refetch} className="px-0" {...c} />)}
              </Col>
            );
          }}
        </Query>
      </Row>
    </Container>
  );
}
