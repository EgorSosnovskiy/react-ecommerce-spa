import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';

import { ROUTES } from 'shared/constants/routes';

import { useLoginMutation } from '../api/authApi.js';
import { setCredentials } from '../store/authSlice.js';
import { saveAuthData } from '../utils/authStorage.js';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await login(data).unwrap();
      dispatch(setCredentials(user));
      saveAuthData(user);
      navigate(ROUTES.CATALOG);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>Login</h1>

      <div className={styles.field}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>

        <input
          id="username"
          type="text"
          autoComplete="username"
          className={
            errors.username
              ? `${styles.input} ${styles.inputError}`
              : styles.input
          }
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must contain at least 3 characters',
            },
          })}
        />

        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>

        <div className={styles.passwordField}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            className={
              errors.password
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must contain at least 8 characters',
              },
            })}
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🔒' : '👁️'}
          </button>
        </div>

        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
