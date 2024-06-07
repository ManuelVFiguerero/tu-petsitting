import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
