import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Design2 from "./pages/Design2";
import Design3 from "./pages/Design3";
import Design4 from "./pages/Design4";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} />
      </Routes>

      <Analytics />
    </Router>
  );
}

export default App;
