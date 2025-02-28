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

import MenuItem from './ItemCard';
import AddItemModal from './AddItemModal';

export default function Items() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(s => !s);
  const [itemEdit, setItemEdit] = useState();

  return (
    <Container fluid>
      <Row className="border-bottom align-items-center">
        <Col sm={10}>
          <h2 className="text-center my-3">Items</h2>
        </Col>
        <Col sm={2}>
          <Button variant="success" size="sm" onClick={toggle}> + </Button>
        </Col>
      </Row>

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
                  {data.menu_items.map(c => <MenuItem key={c.id} onDelete={refetch} className="px-0" {...c} onEdit={() => { toggle(); setItemEdit(c); }} />)}
                </div>
                <AddItemModal show={show} onHide={onHide} item={itemEdit} />
              </Col>
            );
          }}
        </Query>
      </Row>
    </Container>
  );
}
