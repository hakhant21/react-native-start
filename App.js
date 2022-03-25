import React from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';



export default function App() {
  return (
    <GlobalProvider>
        <AppNavContainer />
    </GlobalProvider>
  );
}

