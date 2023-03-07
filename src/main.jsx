import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="466450377863-j17ddqo08gomifrmopk2bea7m9c6ofvd.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>,
)
