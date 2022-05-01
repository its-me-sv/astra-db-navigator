import React from 'react';

import {useMainContext} from './contexts/main.context';

import HomePage from './pages/home';
import BlockLoader from './components/block-loader';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading} = useMainContext();
  
  return (
    <>
      {loading && <BlockLoader />}
      <HomePage />
    </>
  );
};

export default App;
