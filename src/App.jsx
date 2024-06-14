import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
