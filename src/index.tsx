import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {LanguageContextProvider} from './contexts/language.context';
import {ConnectionContextProvider} from './contexts/connection.context';
import {DatabaseContextProvider} from './contexts/database.context';
import {KeyspaceContextProvider} from './contexts/keyspace.context';
import {TableContextProvider} from './contexts/table.context';
import {TypeContextProvider} from './contexts/type.context';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ConnectionContextProvider>
        <DatabaseContextProvider>
          <KeyspaceContextProvider>
            <TableContextProvider>
              <TypeContextProvider>
                <App />
              </TypeContextProvider>
            </TableContextProvider>
          </KeyspaceContextProvider>
        </DatabaseContextProvider>
      </ConnectionContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
