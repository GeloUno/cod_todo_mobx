import React from 'react';
import styles from './layout.module.css';
import { mystore } from '../store/todos';
import { Button } from '../components/todoList';
// import { ToDoList } from './../store/todos';
import ToDolist from '../components/todoList';
import Form from '../components/form/form';

interface ILayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div style={{ width: '450px' }}>
          <Form />
        </div>
        <div style={{ width: '450px' }}>
          <ToDolist store={mystore} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
