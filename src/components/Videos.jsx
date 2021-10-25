import React from "react";
import Navbar from "./Navbar";
import Player from "./Player";
import Footer from "./Footer";
import SearchIcon from "@mui/icons-material/Search";
import VideoPlaylist from "./data/videos.json";

const Videos = () => {
  return (
    <div>
      <Navbar />
      <div
        className="col-md-9 mt-3 mb-3 mx-auto"
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
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8">
            <Player id="6whHTP6L2Is" />
            <div className="card mb-5">
              <div className="card-body">
                <h3 className="font-weight-bold mt-3 text-dark">
                  {VideoPlaylist[0].title}
                </h3>
                <p className="font-weight-bold">{VideoPlaylist[0].author}</p>
                <p>{VideoPlaylist[0].desc}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="font-weight-bold text-dark mb-3">Up Next</h3>
            <div className="ripple" style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={`https://img.youtube.com/vi/${
                      String("https://www.youtube.com/watch?v=6whHTP6L2Is")
                        .split("/")[3]
                        .split("?")[1]
                        .split("=")[1]
                    }/hqdefault.jpg`}
                    alt=""
                    style={{ borderRadius: "0.5rem", objectFit: "cover" }}
                    className="w-100 img-responsive"
                  />
                </div>
                <div className="col-md-7 my-auto">
                  <h5 className="font-weight-bold text-dark">
                    Mountain surfing and benefits
                  </h5>

                  <p className="text-muted">21st, September 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
