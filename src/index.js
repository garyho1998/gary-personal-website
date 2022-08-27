import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Invoices from "./routes/invoices";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="invoices" element={<Invoices />} />
        </Routes>
    </BrowserRouter>
    ,document.getElementById('root'));

serviceWorker.register();
