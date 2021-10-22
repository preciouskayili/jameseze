import React from "react";
import Navbar from "./Navbar";
import "./assets/css/books.css";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
const BookStore = () => {
  return (
    <div>
      <Navbar />

      <div className="cover">
        <h1 className="font-weight-bold text-light">Search books</h1>
        <p className="text-white text-center subtitle">
          Search through our enriching library of books
        </p>
      </div>

      <div className="container mb-3">
        <div className="col-md-6 mx-auto" style={{ marginTop: "-1rem" }}>
          <div className="card p-3">
            <div className="input-group rounded">
              <span className="input-group-text border-0" id="search-addon">
                <SearchIcon style={{ color: "#ccc" }} />
              </span>
              <input
                type="search"
                className="form-control border-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <select
                style={{ border: "0px", backgroundColor: "#fff" }}
                className="form-control"
              >
                <option selected disabled>
                  Choose a category...
                </option>
                <option>Poems</option>
                <option>Books</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <small className="font-weight-bold me-2">Suggested: </small>
        <small className="text-danger small me-2">James Eze </small>
        <small className="text-danger small me-2">Dispossessed</small>
        <small className="text-danger small me-2">Poems</small>
        <small className="text-danger small me-2">Books</small>
      </div>

      <div className="container books-section mt-5 text-center mb-5">
        <h2 className="font-weight-bold mb-4">Library</h2>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-md-5">
            <div className="card shadow-none">
              <div className="card-img-top">
                <div class="bg-image hover-zoom">
                  <img
                    src={require("./assets/img/dispossedcover.jpeg").default}
                    className="rounded shadow"
                    alt="Dispossed"
                    style={{
                      width: "300px",
                      height: "399px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="card shadow-none">
              <div className="card-body">
                <h4>Dispossed</h4>
                <small className="text-muted">James Eze</small>
                <br />
                <small className="font-weight-bold text-muted">NGN1000</small>
                <br />
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-md-5">
            <div className="card shadow-none">
              <div className="card-img-top">
                <div class="bg-image hover-zoom">
                  <img
                    src={require("./assets/img/dispossedcover.jpeg").default}
                    className="rounded shadow"
                    alt="Dispossessed"
                    style={{
                      width: "300px",
                      height: "399px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="card shadow-none">
              <div className="card-body">
                <h4>Dispossessed</h4>
                <small className="text-muted">James Eze</small>
                <br />
                <small className="font-weight-bold text-muted">NGN1000</small>
                <br />
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookStore;
