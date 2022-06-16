import React from "react";

function Hero() {
  return (
    <div classNameName="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Ruine Immo</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Découvrez un nouveau style d'agence immobilière : <br></br>
          Avec nous, pas de surprise... les biens sont identiques aux photos. <br></br>
          Et en plus nous avons un code promo pour notre premier courageux client ! 
        </p>
        {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Secondary
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Hero;
