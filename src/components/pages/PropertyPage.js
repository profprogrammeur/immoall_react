import React from "react";
import { useParams } from 'react-router';
import Property from "../Property";

console.log ('lol')

const PropertyPage = () => {
  const { id } = useParams();
  return(
    <div>
      <h1>PropertyPage</h1>
      <h2>id = {id}</h2>
      {/* <Property property={properties[0]} 
        title={property.title}
        description={property.description}
        image_url={property.image_url}
        price={property.price} */}
      {/* /> */}
      {/* <h3>{properties}</h3> */}
    </div>
    
   );
};

export default PropertyPage;
