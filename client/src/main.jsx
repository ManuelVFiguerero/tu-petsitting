import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
