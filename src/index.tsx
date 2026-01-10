import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css'; // 최상위(root)에 있는 index.css를 가져옵니다.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);