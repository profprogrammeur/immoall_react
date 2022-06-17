import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to={`/`}>
            <a href="#" className="nav-link px-2 link-secondary">
              Accueil
            </a>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
            <a href="#" className="nav-link px-2 link-dark">
              Contact
            </a>
            </Link>
          </li>
        </ul>

        <div className=" text-end">
          <button type="button" className="btn btn-outline-secondary me-2">
            Se connecter
          </button>
          <button type="button" className="btn btn-secondary">
            S'inscrire
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
