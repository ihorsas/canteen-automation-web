/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';
import CenteredSpinner from '../../../components/Spinner/CenteredSpinner';
import ItemCard from '../Items/ItemCard';

import {
  ListGroupItem,
  Col,
  Row
} from 'react-bootstrap';

export default function CategoryWithItemsCard(props) {
  const { id, name, onDelete } = props;
  const [show, setShow] = useState(false);
  const toggle = () => setShow(s => !s);
  const [itemEdit, setItemEdit] = useState();

  return (
    <Col>
      <Row style={{display: 'flex', justifyContent: 'center'}}>
          <h3>{name}</h3>
      </Row>
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
                  {data.menu_items.filter((i) => i.category.name == name).map(i => <ItemCard key={i.id} onDelete={refetch} className="px-0" {...i} onEdit={() => { toggle(); setItemEdit(i); }} />)}
                </div>
              </Col>
            );
          }}
        </Query>
        </Col>
  );
}

CategoryWithItemsCard.defaultProps = {
  onDelete: null,
};

CategoryWithItemsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
