import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { AppClass } from './AppClass';

const rootElement = document.getElementById('root')!;
const root = ReactDom.createRoot(rootElement);

root.render(<App />);
