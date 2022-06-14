import React from 'react'

function Properties(props) {
  return (
  <div >
    <h2> Maisons à vendre</h2>
    <hr></hr>

      <a href="#" className="btn btn-warning mb-2">VOIR MAISON</a>
      
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>


    {props.properties.map((property) => {
      return (
        <div key={property.id}>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>---------------------</p>
        </div>
      );
    })}
  </div>
  );
}

export default Properties 