import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToDoList } from '../../store/todos';
import ToDoItemView from '../toDoItemView/toDoItemView';
import NoToDoDataMessage from '../noToDoDataMessage/noToDoDataMessage';

const ToDoDetailSwitch = observer(({ store }: { store: ToDoList }) => {
  if (store.idToDoDetailView) {
    const data = store.getToDoById(store.idToDoDetailView);

    if (data) {
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
    return <NoToDoDataMessage message={`no ToDo found`} />;
  }

  return (
    <NoToDoDataMessage
      message={`To see detail of todo press show button in to todo`}
    />
  );
});

export default ToDoDetailSwitch;
