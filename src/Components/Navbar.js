import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-lihgt bg-light navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid ">
        {/* // offcanvas */}
        <i
          className="navbar-toggler me-2 bi bi-menu-app p-0"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          // role="button"
          aria-controls="offcanvasExample"
        >
          {/* <i className="bi bi-menu-app"></i> */}
        </i>

        {/* // offcanvas */}
        <Link to={"/"} className="navbar-brand me-auto fw-bold">
          React Manyağı
        </Link>

        <i
          className="navbar-toggler bi-menu-app p-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi "></i>
        </i>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="input-group mb-3 me-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                <i className="bi bi-bell">
                  <span className="position-absolute top-4 start-10  p-1 translate-middle badge rounded-pill bg-danger">
                    +3
                  </span>
                  <span className="visually-hidden">unread messages</span>
                </i>
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                <i className="bi bi-envelope">
                  <span className="position-absolute top-4 start-10  p-1 translate-middle badge rounded-pill bg-danger">
                    7
                  </span>
                  <span className="visually-hidden">unread messages</span>
                </i>
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link ">
                <i className="bi bi-person-circle"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
