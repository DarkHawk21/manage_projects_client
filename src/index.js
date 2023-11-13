import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import HomeView from './views/HomeView';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HomeView/>
  </React.StrictMode>
);
