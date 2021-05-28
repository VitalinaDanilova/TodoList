import React from 'react';
import { TodosConsumer } from '../../contexts/context';
import { ItemComponent } from '../../components';
import PropTypes from 'prop-types';

const ItemContainer = ({ task: { id, title, openEditor } }) => {
  return (
    <TodosConsumer>
      {({ handleRemove }) => {
        return (
          <ItemComponent
            id={id}
            title={title}
            openEditor={openEditor}
            handleRemove={handleRemove}
          />
        );
      }}
    </TodosConsumer>
  );
};

ItemContainer.propTypes = {
  task: PropTypes.string.isRequired,
};

export default ItemContainer;
