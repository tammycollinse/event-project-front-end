import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route,Routes, Link, BrowserRouter} from "react-router-dom";

import Auth from "./components/Auth.js"
import EventManager from "./components/EventManager"
import CreateForm from "./components/CreateForm"
import HomeEvents from "./components/HomeEvents"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  )






