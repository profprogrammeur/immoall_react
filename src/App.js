import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Properties from "./components/properties";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";

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
      <h1>REACT immoALL</h1>
      <Hero />
      <Properties properties={properties} />
    </div>
  );
}

export default App;
