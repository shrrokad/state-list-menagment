import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/page/home';
import PageNotFound from './Components/page/PageNotFound';
import Adduser from './Components/page/Addustate';
import District from './Components/page/District';
import Districtlist from './Components/page/Districtlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/adduser-details' element={<Adduser/>}/>
      <Route path='/Districtlist/:id' element={<District/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
