import React from "react";

function Property({ title, description, picture, price }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">TITRE : {title}</h5>
        <p className="card-text">
          DESCRIPTION : {description}
        </p>
        <h6>PRIX : {price}</h6>
      </div>
    </div>
  );
}

export default Property;
