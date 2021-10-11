import React from 'react';
import styles from './layout.module.css';
import { mystore } from '../store/todos';
import ToDolist from '../components/todoList';
import Form from '../components/form/form';

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div style={{ width: '450px' }}>
          <Form store={mystore} />
        </div>
        <div style={{ width: '450px' }}>
          <ToDolist store={mystore} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
