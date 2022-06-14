import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Properties from './components/properties';
import { useEffect, useState } from 'react';


const API_URL = "http://localhost:3000/properties"


function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted) {
        setProperties(items);
        // console.log("lolitems : " + items)
      }
    });
    return () => (mounted = false);
  }, [])


  return (
    <div className="App">
      <h1>REACT immoALL</h1>
      <Properties properties={properties} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
