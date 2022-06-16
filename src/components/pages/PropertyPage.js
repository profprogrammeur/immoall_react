import React from "react";
import { useParams } from 'react-router';
import Property from "../Property";


  const PropertyPage = () => {

  const { id } = useParams();
  const properties = JSON.parse(localStorage.getItem('properties'))
  let property = properties.find(x => x.id === parseInt(id))
  // console.log(properties)
  // console.log(properties.find(x => x.id === parseInt(id)))

  return(
    <div>
      <h1>PropertyPage</h1>
      <h2>id = {id}</h2>
  
      <Property 
        title={property.title}
        description={property.description}
        image_url={property.image_url}
        price={property.price} />
    </div>
    
   );
};

export default PropertyPage;
