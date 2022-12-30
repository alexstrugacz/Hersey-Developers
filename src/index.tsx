import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCod50YOupCVIdKQwBTTQFTV-crUmDe3FE",
  authDomain: "hersey-developers.firebaseapp.com",
  projectId: "hersey-developers",
  storageBucket: "hersey-developers.appspot.com",
  messagingSenderId: "1043961349718",
  appId: "1:1043961349718:web:630812c7b43a3994b41df7",
  measurementId: "G-41VDJ0JLD0"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

