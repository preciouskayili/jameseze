import React, { useState } from "react";
import Navbar from "./Navbar";
import Player from "./Player";
import Footer from "./Footer";

const Videos = () => {
  const [id, setId] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8">
            <Player id="6whHTP6L2Is" />
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
