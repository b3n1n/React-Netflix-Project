import React from "react";
import Header from "../components/Header";
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <Header />

      <div className="contact-wrapper text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">

              <h1 className="text-center mb-4">Contact Us</h1>

              <p className="text-center mb-5">
                Have questions or feedback? Send us a message.
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-danger px-4">
                    Send Message
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;