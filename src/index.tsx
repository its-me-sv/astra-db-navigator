import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {LanguageContextProvider} from './contexts/language.context';
import {MainContextProvider} from './contexts/main.context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
