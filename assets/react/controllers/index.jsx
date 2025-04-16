import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Ces données peuvent venir du HTML généré côté Symfony (dans un data-props par exemple)

function index() {
  const props = window.appProps || {};
  return (
    <BrowserRouter>
      <App {...props} />
    </BrowserRouter>
  );
}

export default index;