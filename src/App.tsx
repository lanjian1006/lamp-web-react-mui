import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import Dictionary from 'pages/Dictionary/Dictionary';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/' element={<Home/>}>
            <Route path='/dictionary' element={<Dictionary />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
