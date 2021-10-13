import React from 'react';
import { ToDo } from '../../store/todos';
import { observer } from 'mobx-react-lite';
import styles from './toDoItemView.module.css';
import Button from '../button/button';
import Moment from 'react-moment';

interface ToDoProps extends Omit<ToDo, 'showAsEditForm'> {
  isShowDetail: boolean;
  //TODO: what should be better empty or optional ? :-/
  setIdToDoDetailView(): void;
  removeToDo(): void;
  showInEditForm?(): void;
}

const ToDoItemView = observer(
  ({
    description,
    done,
    id,
    title,
    toggleDoneTodo,
    dateCreate,
    deadline,
    isShowDetail,
    setIdToDoDetailView,
    removeToDo,
    showInEditForm,
  }: ToDoProps) => {
    const stylesBoxState = done ? styles.doneBox : styles.todoBox;
    const stylesTextState = done ? styles.doneText : styles.todoText;
    return (
      <div className={styles.content}>
        <div className={stylesBoxState}></div>
        <div className={styles.body}>
          <div>
            <h4 className={`${stylesTextState}`}>{title}</h4>
          </div>
          {isShowDetail && (
            <div>
              <p className={`${stylesTextState}`}>{description}</p>
            </div>
          )}
          {isShowDetail && (
            <div>
              <p className={`${stylesTextState}`}>
                Created at:{' '}
                <strong>
                  <Moment format="YYYY-DD-MM">{dateCreate}</Moment>
                </strong>
              </p>
            </div>
          )}
          {isShowDetail && (
            <div>
              <p className={`${stylesTextState}`}>
                Deadline:{' '}
                <strong>
                  <Moment format="YYYY-DD-MM">{deadline}</Moment>
                </strong>
              </p>
            </div>
          )}
          {!isShowDetail && (
            <Button onClick={setIdToDoDetailView} variant="primary">
              Show
            </Button>
          )}
          {!isShowDetail && (
            <Button onClick={showInEditForm} variant="secondary">
              Edit
            </Button>
          )}
          {!isShowDetail && (
            <Button
              onClick={toggleDoneTodo}
              variant={done ? `warning` : `success`}
            >
              {done ? `ToDo` : `Done`}
            </Button>
          )}

          {!isShowDetail && (
            <Button onClick={removeToDo} variant="danger">
              Remove
            </Button>
          )}
        </div>
      </div>
    );
  }
);

export default ToDoItemView;
