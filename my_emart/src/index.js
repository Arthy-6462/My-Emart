import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
// import { CartProvider } from './stores/components/context/CartContext'; 
 import {ProviderCart} from './stores/components/context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Auth0Provider
    domain="dev-fcde3a6snftecgjq.us.auth0.com"
    clientId="PzIfv7PUCNiafHkF2cKCclnJEOAaCmc9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <ProviderCart>
    <App />
    </ProviderCart>
  </Auth0Provider>
  


 
   
 
//   </reportWebVitals>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
