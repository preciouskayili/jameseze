import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="brand fw-bold mb-4">James Eze</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium, cumque. Maiores ab ea sapiente.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/books" className="text-reset">
                    Book Store
                  </Link>
                </p>
                <p>
                  <a
                    href="https://www.amazon.com/dispossessed-poetry-innocence-transgression-atonement/dp/1988832470"
                    className="text-reset"
                  >
                    Published books
                  </a>
                </p>
                <p>
                  <Link to="/gallery" className="text-reset">
                    Gallery
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Jos, Plateau State, NG
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  jameseze@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 234 90 493 298 17
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
          }}
        >
          &copy; {new Date().getFullYear()} Copyright:
          <a
            className="text-reset fw-bold"
            href="https://presh-lines.netlify.app"
          >
            Presh Enterprise
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
