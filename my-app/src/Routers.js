import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";

export default function Routers() {
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </Router>;
}
