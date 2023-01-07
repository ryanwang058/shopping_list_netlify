import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // https://www.techiediaries.com/react-18-useeffect/
  // tldr: strick mode after react18 (March 22~) 
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
