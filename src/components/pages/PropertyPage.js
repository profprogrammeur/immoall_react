import React from "react";
import { useParams } from 'react-router';
import Property from "../Property";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../UserContext"



// const API_URL = "http://localhost:3000/properties";
// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }


  const PropertyPage = () => {
    const properties__ = useContext(UserContext)
  // const [properties, setProperties] = useState([]);
  // useEffect(() => {
  //   let mounted = true;
  //   getAPIData().then((items) => {
  //     if (mounted) {
  //       setProperties(items);
  //       // console.log("lolitems : " + items)
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  // console.log(properties.find(x=>x.id === 38))


  const { id } = useParams();
  // console.log("id = " + id)
  // let property = properties.find(x => x.id === parseInt(id))
  console.log(properties__)
  // console.log(properties.find(x => x.id === parseInt(id)))

  return(
    <div>
      <h1>PropertyPage</h1>
      <h2>id = {id}</h2>
      {/* <h3>{properties[0]}</h3> */}
      {/* <Property 
        title={property.title}
        description={property.description}
        image_url={property.image_url}
        price={property.price} /> */}
   
    </div>
    
   );
};

export default PropertyPage;
