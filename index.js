import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 확장자 .js는 생략해도 됩니다.

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
