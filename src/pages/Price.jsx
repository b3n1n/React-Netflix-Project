import React from "react";
import Header from "../components/Header";
import '../styles/Price.css';

function Price() {
  return (
    <>
      <Header />

      <div className="price-wrapper container py-5 text-white">
        <h1 className="text-center mb-5">Choose Your Plan</h1>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100 border-secondary">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Basic</h4>
                <h2 className="my-3">$5</h2>
                <p>720p Quality</p>
                <p>1 Device</p>
                <p>Limited Content</p>
                <button className="btn btn-outline-light mt-auto">
                  Choose
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100 border-danger">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Standard</h4>
                <h2 className="my-3">$10</h2>
                <p>1080p Quality</p>
                <p>2 Devices</p>
                <p>Most Popular</p>
                <button className="btn btn-danger mt-auto">Choose</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100 border-secondary">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Premium</h4>
                <h2 className="my-3">$15</h2>
                <p>4K Quality</p>
                <p>4 Devices</p>
                <p>All Content</p>
                <button className="btn btn-outline-light mt-auto">Choose</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;