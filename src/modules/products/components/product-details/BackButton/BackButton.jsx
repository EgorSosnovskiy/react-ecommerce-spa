import { useNavigate } from 'react-router';

import styles from './BackButton.module.css';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className={styles.button} onClick={() => navigate(-1)}>
      ←
    </button>
  );
}
