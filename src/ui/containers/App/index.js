import React, { StrictMode } from 'react';
import CSSReset from '@tds/core-css-reset';
import Router from '../Router';

const App = () => (
  <StrictMode>
    <CSSReset />
    <Router />
  </StrictMode>
);

export default App;
