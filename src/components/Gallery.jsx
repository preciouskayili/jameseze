import React from "react";
import Navbar from "./Navbar";
import { SRLWrapper } from "simple-react-lightbox";
import Data from "./data/gallery.json";

const options = {
  caption: {
    showCaption: false,
  },
};
const Gallery = () => {
  return (
    <div>
      <Navbar />
      {/* Gallery */}
      <div className="container mt-5">
        <h1 className="font-weight-bold">Gallery</h1>
        <small className="font-weight-bold mb-5">
          * Click on an image to view in full screen
        </small>
        <SRLWrapper options={options}>
          <div className="col-md-10 mx-auto mt-5">
            <div className="row">
              {Data.map((d) => (
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom">
                    <img
                      src={require(`./assets/img/${d.img}`).default}
                      alt="Gallery"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      className="w-100 shadow-1-strong rounded mb-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};

export default Gallery;
