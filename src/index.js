import React from 'react';
import App from './App'
import ReactDom from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(<App />)