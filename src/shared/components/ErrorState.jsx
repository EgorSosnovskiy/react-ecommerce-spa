import { Icons } from '../constants/icons.js';
import styles from './State.module.css';

export default function ErrorState({ message = 'Something went wrong.' }) {
  return (
    <div className={styles.state}>
      <h2>{Icons.error}Error</h2>

      <p>{message}</p>
    </div>
  );
}
