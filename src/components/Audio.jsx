import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import Playlists from "./data/playlist.json";

const Audio = () => {
  const [songData, setSongData] = useState([
    {
      name: Playlists[0].name,
      singer: Playlists[0].singer,
      cover: Playlists[0].cover,
      musicSrc: Playlists[0].musicSrc,
    },
  ]);

  const handleClick = (pl) => {
    setSongData([
      {
        name: pl.name,
        singer: pl.singer,
        cover: pl.cover,
        musicSrc: pl.musicSrc,
      },
    ]);
  };
  return (
    <>
      <div className="bg-light">
        <Navbar />
        <div
          className="col-md-9 mt-5 mb-3 mx-auto"
          style={{ marginTop: "-1rem" }}
        >
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

        <div className="container mb-5">
          <div className="row mt-5 mb-3">
            {Playlists.map((pl) => (
              <div className="col-lg-4 col-md-6 mb-2">
                <div
                  className="card ripple"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(pl)}
                >
                  <div className="card-img-top">
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
        <AudioPlayer className="mt-5" songData={songData} showLyric={true} />
      </div>
    </>
  );
};

export default Audio;
