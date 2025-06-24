import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* ✅ Toast Container must be included once globally */}
      <ToastContainer position="top-right" className="transition-all"/>
    </div>
  );
};

export default App;
