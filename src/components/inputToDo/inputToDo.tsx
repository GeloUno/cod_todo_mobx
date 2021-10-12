import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './inputToDo.module.css';
import { observer } from 'mobx-react-lite';
import { ToDo, ToDoList } from '../../store/todos';
import { nanoid } from 'nanoid';

const InputToDo = observer(({ store }: { store: ToDoList }) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const deadlineInputRef = useRef<HTMLInputElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  function cleanFormHandler() {
    formRef.current && formRef.current.reset();
  }

  function addToDoHandle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const titleData = titleInputRef.current?.value;
    const descriptionData = descriptionInputRef.current?.value;
    const deadlineDate = deadlineInputRef.current?.value;
    if (titleData && descriptionData && deadlineDate) {
      console.log(`deadlineDate`, deadlineDate);
      store.addToDo(
        new ToDo({
          title: titleData,
          description: descriptionData,
          done: false,
          id: nanoid(),
          deadline: new Date(deadlineDate),
        })
      );
      cleanFormHandler();
    }
  }
  return (
    <div className={styles.content}>
      <form
        onSubmit={(event) => addToDoHandle(event)}
        className={styles.body}
        ref={formRef}
      >
        <div className={styles.section}>
          <label htmlFor="title">
            <h4 className={styles.label}>title:</h4>
          </label>
          <input
            type="text"
            className={styles.input}
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className={styles.section}>
          <label htmlFor="description">
            <h4 className={styles.label}>description:</h4>
          </label>
          <input
            type="text"
            id="description"
            ref={descriptionInputRef}
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <label htmlFor="deadline">
            <h4 className={styles.label}>deadline:</h4>
          </label>
          <input
            type="date"
            id="deadline"
            ref={deadlineInputRef}
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <Button variant="primary">Add</Button>
        </div>
      </form>
      <div className={`${styles.body} ${styles.section}`}>
        <Button onClick={cleanFormHandler} variant="danger">
          Clean
        </Button>
      </div>
    </div>
  );
});

export default InputToDo;