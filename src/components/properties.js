import React, { Component } from "react";
import Property from "./Property";

function Properties(props) {
  return (
    <div>
      {/* <p>TESTTTTTT</p> */}
     { props.properties.map(property => {
        // const { title, description, price} = property.property;

        return (
          // <Link href={`/properties/${id}`} key={id}>
         
            <Property
              title={property.title}
            description={property.description}
            picture={property.picture}
            price={property.price}
            />
          
        )})
}
      {/* <p>TESTTTTTT</p> */}


    
    
      {/* <h2> Maisons à vendre</h2>
      <hr></hr>

      <a href="#" className="btn btn-warning mb-2">
        VOIR MAISON
      </a>
     */}

      {/* <Property /> */}


      {/* {props.properties.map((property) => {
        return (
          <div key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
            <p>{property.adress}</p>
            <p>---------------------</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default Properties;
