import { Icons } from '../constants/icons.js';
import styles from './State.module.css';

export default function EmptyState({
  message = 'Try changing search or filters.',
}) {
  return (
    <div className={styles.state}>
      <h2>
        {Icons.empty} {message}.
      </h2>
    </div>
  );
}
