import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store.js';
import { Provider } from 'react-redux';

import App from './App.jsx';

import './shared/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
