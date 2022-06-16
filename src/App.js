import "./App.css";
import axios from "axios";
import Properties from "./components/Properties";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Property from "./components/Property";
import React, { createContext, useContext } from "react";


import UserContext from "./UserContext"

// const UserContext = createContext({properties_ :[]});


const API_URL = "http://localhost:3000/properties";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {

  // const [properties, setProperties] = useState(
  //   localStorage.getItem("properties")
  //     ? localStorage.getItem("darkMode")
  //     : false
  // );
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  // });

  

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setProperties(items);
        localStorage.setItem("properties", JSON.stringify(items));
      }
    });
    return () => (mounted = false);
  }, []);
// let properties_="=properties
// const UserContext2 = createContext({ properties: properties });

  return (
   
      
    <div className="App container-fluid">
      <Navbar />
      <Hero />
      <Properties properties={properties} />
    </div>
    

  );
}

export default App;
