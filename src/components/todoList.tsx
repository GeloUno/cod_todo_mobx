import React from 'react';
import { ToDo, ToDoList } from '../store/todos';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import ToDoItemView from './toDoItemView/toDoItemView';

interface TodoListProps {
  toDoList: Array<ToDo>;
}

export const Button = observer(({ store }: { store: ToDoList }) => {
  return (
    <div>
      <button
        onClick={() =>
          store.addToDo(
            new ToDo({
              description: 'example5',
              done: false,
              title: 'some5',
              id: nanoid(),
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
});

const ToDolist = observer(({ store }: { store: ToDoList }) => {
  // console.log(`object`, store);
  return (
    <div>
      {store.list.map((li) => (
        <ToDoItemView
          key={li.id}
          description={li.description}
          done={li.done}
          id={li.id}
          title={li.title}
          toggleDoneTodo={() => store.toggleDone(li.id)}
        />
      ))}
    </div>
  );
});

export default ToDolist;
