import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToDoList } from '../../store/todos';
import ToDoItemView from '../toDoItemView/toDoItemView';
import Message from '../message/message';

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
    return <Message message={`no ToDo found`} />;
  }

  return (
    <Message
      message={`To see detail of todo, press show button in item todo`}
    />
  );
});

export default ToDoDetailSwitch;
