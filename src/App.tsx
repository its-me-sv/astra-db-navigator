import React from 'react';

import {useConnectionContext} from './contexts/connection.context';

import BlockLoader from './components/block-loader';
import HomePage from './pages/home';
import MainWrapper from './components/main-wrapper';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading, appToken} = useConnectionContext();
  
  return (
    <>
      {loading && <BlockLoader />}
      {!(appToken.length > 0) ? <HomePage /> : <MainWrapper />}
    </>
  );
};

export default App;
