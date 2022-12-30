import { App } from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(

    <HashRouter>
      <App />
    </HashRouter>

);
