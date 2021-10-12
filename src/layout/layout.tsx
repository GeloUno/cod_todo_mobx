import React from 'react';
import styles from './layout.module.css';
import { mystore } from '../store/todos';
import ToDolist from '../components/todoList';
import InputToDo from '../components/inputToDo/inputToDo';
import ToDoDetailSwitch from '../components/toDoDetailSwitch/ToDoDetailSwitch';

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div style={{ width: '450px' }}>
          <ToDoDetailSwitch store={mystore} />
        </div>
        <div style={{ width: '450px' }}>
          <InputToDo store={mystore} />
          <ToDolist store={mystore} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
