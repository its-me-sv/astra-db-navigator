import React from 'react';

import {useMainContext} from './contexts/main.context';

import HomePage from './pages/home';
import BlockLoader from './components/block-loader';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading, appToken, database} = useMainContext();
  
  return (
    <>
      {loading && <BlockLoader />}
      {!(appToken.length > 0 && database.length > 0)
      ? <HomePage /> : <h1>ur in</h1>}
    </>
  );
};

export default App;
