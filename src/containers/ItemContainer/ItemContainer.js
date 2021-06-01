import React, { useState } from 'react';
import { TodosConsumer } from '../../contexts/context';
import { TodoBox, ConfirmComponent } from '../../components';
import PropTypes from 'prop-types';

const ItemContainer = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleRemove = (taskId) => {
    setCurrentTask(taskId);
    setShowConfirmModal(true);
  };
  const handleClose = () => {
    setShowConfirmModal(false);
  };
  return (
    <TodosConsumer>
      {({ tasks, removeTodoItem }) => {
        return (
          <>
            <TodoBox tasks={tasks} handleRemove={handleRemove} />{' '}
            {showConfirmModal && (
              <ConfirmComponent
                isShown={showConfirmModal}
                title="Delete a task?"
                handleCancel={handleClose}
                handleConfirm={() => {
                  removeTodoItem(currentTask);
                  setCurrentTask(null);
                  setShowConfirmModal(false);
                }}
              />
            )}
          </>
        );
      }}
    </TodosConsumer>
  );
};

ItemContainer.propTypes = {
  tasks: PropTypes.array,
};

export default ItemContainer;
