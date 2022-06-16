import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import PropertyPage from "./components/pages/PropertyPage";
import Hero from "./components/Hero";
import Property from "./components/Property"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/property/" element={<PropertyPage />} />
      {/* <Route path="/property/:id" element={<PropertyPage />} /> */}
      <Route path="/property/:id" element={<PropertyPage />} />
      {/* <Route
        path="/property/:id"
        render={() => <PropertyPage element={Property.id} />}
      /> */}

      <Route path="/Hero" element={<Hero />} />

    </Routes>
  </BrowserRouter>
);
