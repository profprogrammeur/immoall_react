import "./App.css";
import axios from "axios";
import Properties from "./components/Properties";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        localStorage.setItem("properties", JSON.stringify(items));
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App container-fluid">
      <Navbar />
      <Hero />
      <Properties properties={properties} />
      <Footer />
    </div>
  );
}

export default App;
