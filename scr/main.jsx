import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* HashRouterを使用して、GitHub Pages上でもルーティング可能にする */}
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
