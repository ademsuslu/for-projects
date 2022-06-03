import React from "react";
import { Link } from "react-router-dom";

export default function Ofcanvas() {
  return (
    <>
      <div
        className="offcanvas sidebar-nav  offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-body bg-primary">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav d-flex flex-column me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to={"/Home"} className="nav-link text-white">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Login"} className="nav-link text-white">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Motion"} className="nav-link text-white">
                      Animasyonlar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/About"} className="nav-link text-white">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Istatistikler"} className="nav-link text-white">
                      İstatistikler
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Table"} className="nav-link text-white">
                      Table
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Loading"} className="nav-link text-white">
                      Loading Skeleton
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <hr className="text-white border" />

          <p>
            <span
              className="btn btn-white text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Dipnot
            </span>
          </p>
          <div style={{ minHeight: "120px" }}>
            <div
              className="collapse collapse-horizontal"
              id="collapseWidthExample"
            >
              <div className="card card-body" style={{ width: "200px" }}>
                Welcome to React 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
