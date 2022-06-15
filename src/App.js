import "./App.css";
import axios from "axios";
import Properties from "./components/Properties";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Property from "./components/Property";

const API_URL = "http://localhost:3000/properties";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setProperties(items);
        // console.log("lolitems : " + items)
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties properties={properties} />
  
    </div>
  );
}

export default App;
