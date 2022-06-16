import React from "react";

function SalesPage() {
  return (
    <div className="container">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Titre </h2>
          <p className="lead">Description</p>
          <p className="lead">Prix</p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      <br></br>
      <div className="card text-bg-warning mb-3">
        <div className="card-header">Contacter le vendeur</div>
        <div className="card-body">
          <h5 className="card-title">Nom vendeur</h5>
          <p className="card-text">
            Addresse du bien
          </p>
          <button type="button" class="btn btn-light">Écrire au vendeur (peut être mort si pas de réponse...)</button>
        </div>
      </div>{" "}
    </div>
  );
}

export default SalesPage;
