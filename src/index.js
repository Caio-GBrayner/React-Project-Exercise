import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [importnatItem, second, third] = [
  "Book",
  "Calculator",
  "Pen",
  "Ruler",
]

console.log(importnatItem, second, third);


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.Fragment>
    <App authorized={false}/>
  </React.Fragment>,
  
);