import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row d-flex justify-content-sm-center">
          <div className="col-md-3 col-sm-6 col-8 g-3">
            <div className="card">
              <div className="card-body">
                <h5> EARNINGS (MONTHLY)</h5>
                <strong className="text-success">$36,000</strong>
                <button className="btn btn-success ms-5 ">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-8 g-3">
            <div className="card">
              <div className="card-body">
                <h5> EARNINGS (MONTHLY)</h5>
                <strong className="text-success">$40,000</strong>
                <button className="btn btn-success ms-5 ">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-8 g-3">
            <div className="card">
              <div className="card-body">
                <h5> EARNINGS (MONTHLY)</h5>
                <strong className="text-success">$28,000</strong>
                <button className="btn btn-success ms-5 ">Buy</button>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-8 g-3">
            <div className="card">
              <div className="card-body">
                <h5> EARNINGS (MONTHLY)</h5>
                <strong className="text-success">$12,000</strong>
                <button className="btn btn-success ms-5 ">Buy</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-sm-center">
          <div className="col-md-12 col-sm-12 col-8 mt-3 ">
            <div className="card d-flex">
              <div className="card-header text-center ">
                <Link to="/" className="navbar-brand me-auto fw-bold">
                  React Manyağı
                </Link>
              </div>
              <div className="card-body">
                <span className="text-primary fw-bold">Hello My name Adem</span>{" "}
                sit, amet consectetur adipisicing elit. Consectetur magnam
                aliquid, aperiam commodi eos adipisci dolor labore at corrupti,
                vitae recusandae, enim quam debitis minima. Excepturi, ab
                pariatur assumenda repudiandae aspernatur facere nobis et rem
                magni voluptate beatae quas veritatis quae neque sit illum autem
                doloribus cupiditate dolor quisquam tempora! Quia, impedit.
                Doloribus, provident porro dolor laudantium voluptatum
                architecto eos, expedita facilis minima neque fuga quia in
                itaque doloremque ex ut aperiam culpa! Reiciendis aliquid earum
                dicta id, voluptatem officia voluptatum ea porro quibusdam nam.
                Odit vel tenetur rem at dolorum voluptatem rerum illum ea eius
                sint, neque, provident eum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
