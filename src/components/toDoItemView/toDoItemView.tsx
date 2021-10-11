import React from 'react';
import { ToDo } from '../../store/todos';
import { observer } from 'mobx-react-lite';
import styles from './toDoItemView.module.css';
import Button from '../button/button';

const ToDoItemView = observer(
  ({ description, done, id, title, toggleDoneTodo }: ToDo) => {
    const stylesBoxState = done ? styles.todoBox : styles.doneBox;
    const stylesTextState = done ? styles.todoText : styles.doneText;
    return (
      <div className={styles.content}>
        <div className={stylesBoxState}></div>
        <div className={styles.body}>
          <div>
            <h4 className={`${stylesTextState}`}>{title}</h4>
          </div>
          <div>
            <p className={`${stylesTextState}`}>{description}</p>
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
