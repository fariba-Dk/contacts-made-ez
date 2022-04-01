import React from 'react';
import App from '../src/App';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

// import "../node_modules/font-awesome/scss"
// import "../node_modules/bootstrap/dist/css"
// import "../node_modules/bootstrap/dist/js"

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
// Create *and* render a root with hydration.

root.render(<App tab="home" />);
