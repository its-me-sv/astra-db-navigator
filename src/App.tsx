import React from 'react';

import {useMainContext} from './contexts/main.context';

import BlockLoader from './components/block-loader';
import HomePage from './pages/home';
import MainWrapper from './components/main-wrapper';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading, appToken} = useMainContext();
  
  return (
    <>
      {loading && <BlockLoader />}
      {!(appToken.length > 0) ? <HomePage /> : <MainWrapper />}
    </>
  );
};

export default App;
