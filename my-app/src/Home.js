import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ConstactUs from "./pages/ContactUs";

export default function home() {
  return (
    <Router>
      <div style={{display: "flex", justifyContent: "flex-start", width:"10%", height: "100%", backgroundColor: "white"}}>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact US</NavLink>
            </li>
          </ul>
        </div>
        <div style={{width:"100%", display: "flex", justifyContent: "space-around", height: "100%"}}>
        <Routes>
        <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact-us" element={<ConstactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}
