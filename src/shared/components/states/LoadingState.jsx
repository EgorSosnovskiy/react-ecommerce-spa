import styles from './State.module.css';

export default function LoadingState({ message = 'Loading...' }) {
  return (
    <div className={styles.state}>
      <div className={styles.spinner} />

      <p>{message}</p>
    </div>
  );
}
