import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import App from './App';
import { UserContext } from "./components/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <React.StrictMode>
    
      <App />
      <Footer />
   
  </React.StrictMode>
);

reportWebVitals();
