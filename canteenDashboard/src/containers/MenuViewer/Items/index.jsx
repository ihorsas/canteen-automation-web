import React, { useState } from 'react';

import { Query } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import CenteredSpinner from '../../../components/Spinner/CenteredSpinner';

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import ItemCard from './ItemCard';

export default function ViewItems() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(s => !s);
  const [itemEdit, setItemEdit] = useState();

  return (
    <Container fluid>
      <Row>
        <Query query={queries.GET_MENU}>
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
                <div className="flex-column">

                  {data.menu_items.map(c => <ItemCard key={c.category} onDelete={refetch} className="px-0" {...c} onEdit={() => { toggle(); setItemEdit(c); }} />)}
                </div>
              </Col>
            );
          }}
        </Query>
      </Row>
    </Container>
  );
}
