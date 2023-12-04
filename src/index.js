import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

let domain = `${process.env.REACT_APP_AUTH_DOMAIN}`;
let clientId = `${process.env.REACT_APP_CLIENTID}`;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
<Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
</BrowserRouter>);
