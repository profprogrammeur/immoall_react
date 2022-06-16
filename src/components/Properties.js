import React, { Component } from "react";
import Property from "./Property";
import { Link } from "react-router-dom";

function Properties(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
      {props.properties.map((property) => {
        // const { title, description, price} = property.property;

        return (
          // <Link href={`/properties/${property.id}`} key={property.id}>
          //   <a>
              <Property
                title={property.title}
                description={property.description}
                image_url={property.image_url}
                price={property.price}
                id={property.id}
              />
          //   </a>
          // </Link>
        );
      })}
    
    </div>
  );
}

export default Properties;
