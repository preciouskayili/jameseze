import React from "react";
import Navbar from "./Navbar";
import "./assets/css/books.css";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BookData from "./data/books.json";

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
            <div className="input-group rounded-3">
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
                <option defaultValue disabled>
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
          {BookData.map((bd) => (
            <div className="col-lg-4 col-md-6" key={bd.id}>
              <Link to={`book/${bd.id}`}>
                <div className="card rounded-3 book-card">
                  <div className="card-body p-3" style={{ userSelect: "none" }}>
                    <img
                      src={require(`./assets/img/${bd.cover}`).default}
                      alt="Book cover"
                      style={{ height: "22rem", objectFit: "cover" }}
                      className="img-responsive w-100 rounded-3"
                    />
                    <h4 className="text font-weight-bold pt-3">{bd.name}</h4>
                    <p className="text-muted">{bd.author}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookStore;
