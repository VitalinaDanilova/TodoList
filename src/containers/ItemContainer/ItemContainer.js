import React from 'react';
import { TodosConsumer } from '../../contexts/context';
import { TodoBox } from '../../components';
import PropTypes from 'prop-types';

const ItemContainer = () => {
  return (
    <TodosConsumer>
      {({ tasks, handleRemove }) => {
        return <TodoBox tasks={tasks} handleRemove={handleRemove} />;
      }}
    </TodosConsumer>
  );
};

ItemContainer.propTypes = {
  tasks: PropTypes.array,
};

export default ItemContainer;
