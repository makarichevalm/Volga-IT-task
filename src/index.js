import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(
    document.getElementById('glasses-quiz-widget')
);
root.render(
    <App
        url={document
            .getElementById('glasses-quiz-widget')
            .getAttribute('data-source')}
    />
);
