import FadeLoader from 'react-spinners/ClipLoader';
import styles from './spinner.module.css';
function Spinner() {
  return (
    <div className={styles.content}>
      <FadeLoader color={`hsl(217, 91%, 60%)`} />
    </div>
  );
}

export default Spinner;
