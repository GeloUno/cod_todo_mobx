import React from 'react';
import { ToDo } from '../../store/todos';
import { observer } from 'mobx-react-lite';
import styles from './toDoItemView.module.css';
import Button from '../button/button';

const ToDoItemView = observer(
  ({ description, done, id, title, toggleDoneTodo }: ToDo) => {
    const stylesState = done ? styles.todo : styles.done;
    return (
      <div className={styles.content}>
        <div className={stylesState}></div>
        <div className={styles.body}>
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <Button onClick={toggleDoneTodo} variant="primary">
            toggle Done
          </Button>
          <Button onClick={toggleDoneTodo} variant="danger">
            Remove
          </Button>
        </div>
      </div>
    );
  }
);

export default ToDoItemView;
