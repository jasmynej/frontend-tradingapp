import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App'
import Layout from './components/Layout'
ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App/>} />
      </Routes>
    </Layout>
    
  </BrowserRouter>,
  document.getElementById('root')
);


