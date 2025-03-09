import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function AppTwo() {
  return (
    <h1>This is the second app</h1>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.Fragment>
    <AppTwo/>
    <App/>
  </React.Fragment>,
  
);