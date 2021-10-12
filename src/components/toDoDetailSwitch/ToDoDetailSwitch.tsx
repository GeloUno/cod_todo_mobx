import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ToDoList } from '../../store/todos';
import ToDoItemView from '../toDoItemView/toDoItemView';
import NoToDoDataMessage from '../noToDoDataMessage/noToDoDataMessage';

const ToDoDetailSwitch = observer(({ store }: { store: ToDoList }) => {
  console.log(`idToDoDetailView`, store.idToDoDetailView);
  if (store.idToDoDetailView) {
    const data = store.getToDoById(store.idToDoDetailView);
    if (data) {
      console.log(`data`, data);
      return (
        <ToDoItemView
          dateCreate={data.dateCreate}
          deadline={data.deadline}
          description={data.description}
          done={data.done}
          id={data.id}
          isShowDetail={true}
          title={data.title}
          toggleDoneTodo={data.toggleDoneTodo}
          //TODO: what should be better empty or optional ? :-/
          setIdToDoDetailView={() => {}}
          removeToDo={() => {}}
        />
      );
    }
    return <NoToDoDataMessage message={`no to do found`} />;
  }

  return <NoToDoDataMessage message={`no to do selsected`} />;
});

export default ToDoDetailSwitch;
