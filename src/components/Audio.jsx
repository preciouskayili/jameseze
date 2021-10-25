import React from "react";
import AudioPlayer from "./AudioPlayer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchIcon from "@mui/icons-material/Search";
const Audio = () => {
  return (
    <>
      <Navbar />
      <div
        className="col-md-6 mt-3 mb-5 mx-auto"
        style={{ marginTop: "-1rem" }}
      >
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

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-img-top">
                <img
                  src={require("./assets/img/disposed.jpeg").default}
                  className="w-100 img-responsive"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4 className="font-weight-bold">James Eze</h4>
                  <p>Dispossessed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AudioPlayer />
    </>
  );
};

export default Audio;
