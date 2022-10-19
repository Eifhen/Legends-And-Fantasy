import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/bundle.css';
import RouterManager from './Router/router.manager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterManager />
  // </React.StrictMode>
  <RouterManager />
);

