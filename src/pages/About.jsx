import React from "react";
import Header from "../components/Header";
import '../styles/About.css';

function About() {
  return (
    <>
      <Header />

      <div className="about-wrapper text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">

              <h1 className="mb-4">About Us</h1>

              <p className="lead">
                This is a simple React project inspired by Netflix design.
              </p>

              <p>
                The goal of this project is to practice React, routing,
                and UI styling using Bootstrap. It includes components,
                state management, and basic navigation.
              </p>

              <hr className="my-4" />

              <div className="row mt-4">
                <div className="col-md-4">
                  <h5>⚛️ React</h5>
                  <p>Component-based UI</p>
                </div>
                <div className="col-md-4">
                  <h5>🎨 Bootstrap</h5>
                  <p>Clean and responsive design</p>
                </div>
                <div className="col-md-4">
                  <h5>🔗 Router</h5>
                  <p>Navigation between pages</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;