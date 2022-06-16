import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import PropertyPage from "./components/pages/PropertyPage";
import Hero from "./components/Hero";
import Property from "./components/Property"
import UserContext from "./UserContext";
import axios from "axios";
import { useEffect, useState } from "react";


// const API_URL = "http://localhost:3000/properties";

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }
// getAPIData().then((items) => {
//     const properties=items;})
// const getProperties = async() => {
// let properties = getAPIData()
// let properties =properties1
// return properties
// }
// let properties = getProperties()

// let properties = {}
// let mounted = true;
// function getProperties (){
  // let properties
  // function setItem (item) {properties=item}
//   function Lol () {return 
// const [properties, setProperties] = useState([]);
//   }
// Lol()

// getAPIData().then((items) => {
//     console.log(items)
  // let properties =items
  // }
  // )
  // async function f1() {
  // let pp = await getAPIData()
  // return pp}
// console.log(properties)
// let ppp = f1()
// console.log(ppp)
// console.log(getProperties())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  // <UserContext.Provider value = {{properties}}>
  //   {

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
    // }
    // </UserContext.Provider>
 
);
