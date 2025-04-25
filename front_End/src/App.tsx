// import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Verified from "./components/verified";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verified" element={<Verified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
