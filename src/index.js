import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'normalize.css'
import '@/assets/css/index.less'
import store from './store';
import { theme } from '@/assets/theme'

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
);
