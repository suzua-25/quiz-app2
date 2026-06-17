import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ① PostHogを読み込む
import posthog from 'posthog-js';

// ② PostHogを初期化する（このブロックを追記）
// ※APIキーとHost URLをセット
posthog.init('phc_kJwQgtBGa5rxYEvph4EWDst8JzoKsgtWvMsXqm9B5BCp', {
  api_host: 'https://us.i.posthog.com',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
