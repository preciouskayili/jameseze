import React from "react";
import AudioPlayer from "./AudioPlayer";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import Playlists from "./data/playlist.json";
const Audio = () => {
  return (
    <>
      <Navbar />
      <div
        className="col-md-6 mt-5 mb-5 mx-auto"
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

      <div className="container mb-5">
        <div className="row">
          {Playlists.map((pl) => (
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-img-top hover-zoom">
                  <img
                    src={require(`./assets/img/${pl.cover}`).default}
                    className="w-100 img-responsive"
                    style={{ objectFit: "cover", height: "13rem" }}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h4 className="font-weight-bold">{pl.singer}</h4>
                    <p>{pl.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AudioPlayer playlists={Playlists} />
    </>
  );
};

export default Audio;
