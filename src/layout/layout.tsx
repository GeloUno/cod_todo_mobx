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
        <div className={`${styles.section} ${styles.leftSection}`}>
          <ToDoDetailSwitch store={mystore} />
        </div>
        <div className={`${styles.section} ${styles.rightSection}`}>
          <InputToDo store={mystore} />
          <ToDolist store={mystore} isLoading={false} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
