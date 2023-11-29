import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from "./components/pages/Home.jsx";

import './App.css';

function App() {

  return (
      <div className="container-fluid">
          <div className="row">
              <BrowserRouter>
                  <Header />
                      <Routes>
                        <Route path="/" element={<Home />} exact />
                      </Routes>
                  <Footer />
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;
