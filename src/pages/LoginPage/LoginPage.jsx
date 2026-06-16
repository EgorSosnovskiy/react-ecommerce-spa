import { LoginForm } from 'modules/auth';

import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <LoginForm />
    </main>
  );
}
