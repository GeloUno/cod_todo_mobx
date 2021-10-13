import styles from './message.module.css';
interface INoToDoMessageProps {
  message: string;
}

function Message({ message }: INoToDoMessageProps) {
  return (
    <div className={styles.content}>
      <h4 className={styles.textBox}>{message}</h4>
    </div>
  );
}

export default Message;
