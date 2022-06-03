import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <div className="container mt-5">
        <div className="row p-5 ">
          <div className=" mb-3 text-center ">
            <Link to="/" className="navbar-brand me-auto fw-bold">
              React Manyağı
            </Link>
          </div>
          <div className="col ">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img
                    height={"500px"}
                    src="https://picsum.photos/700/1000"
                    className="d-block  w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    height={"500px"}
                    src="https://picsum.photos/700/900"
                    className="d-block  w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    height={"500px"}
                    src="https://picsum.photos/700/700"
                    className="d-block  w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
