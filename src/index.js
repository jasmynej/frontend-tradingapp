import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App'
import LogIn from './screens/LogIn';
import Layout from './components/Layout'
import Profile from './screens/Profile'
import Register from './screens/Register'
ReactDOM.render(
  <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/:username" element={<Profile/>} />
        <Route path="/create-account" element={<Register/>} />
      </Routes>
   
  </BrowserRouter>,
  document.getElementById('root')
);


