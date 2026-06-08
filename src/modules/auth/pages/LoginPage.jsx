import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '../store/authSlice.js';

export default function LoginPage() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <>
      <h1>Login Page</h1>

      <pre>{JSON.stringify(auth, null, 2)}</pre>

      <button
        onClick={() =>
          dispatch(
            login({
              id: 1,
              username: 'Egor',
            }),
          )
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}
