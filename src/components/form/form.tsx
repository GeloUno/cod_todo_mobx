import React from 'react';
import Button from '../button/button';
import styles from './form.module.css';
function Form() {
  function addToDoHandle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className={styles.content}>
      <form onSubmit={(event) => addToDoHandle(event)} className={styles.body}>
        <div className={styles.section}>
          <label htmlFor="title">
            <h4>title:</h4>
          </label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.section}>
          <label htmlFor="description">
            <h4>description:</h4>
          </label>
          <input type="text" id="" className={styles.input} />
        </div>
        <div className={styles.section}>
          <Button onClick={() => {}} variant="primary">
            Add
          </Button>
          <Button onClick={() => {}} variant="danger">
            Clean
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
