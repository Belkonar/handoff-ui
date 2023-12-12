import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRoot} from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './main-store.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppRoot />
      </Provider>
    </React.StrictMode>
  );
