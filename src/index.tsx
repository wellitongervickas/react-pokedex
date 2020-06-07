import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';

import 'assets/scss/app.scss';
import 'normalize.css';

import {
  StoreContextProvider,
} from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <section>
        <Routes />
      </section>
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
