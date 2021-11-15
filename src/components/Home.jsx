import React from "react";
import Navbar from "./Navbar";
import bg from "./assets/img/bg.jpeg";
import { Link } from "react-router-dom";
import "./assets/css/home.css";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="cover-header container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
              <img
                src={bg}
                alt="Profile"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
                width="300"
                height="300"
              />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <h1
                className="font-weight-bold text-light"
                style={{ fontSize: "60px" }}
              >
                I AM{" "}
                <span
                  className="navbar-brand text-white"
                  style={{ fontSize: "25px" }}
                >
                  James Ngwu Eze
                </span>
              </h1>
              <p className="text-light">
                James Eze was born in Enugu, southeast Nigeria, shortly after
                the Biafran War. He was the pioneer Literary Editor of Sunday
                Sun. As Head of External Communications at Fidelity Bank, He
                worked in partnership with the novelist Chimamanda Adichie to
                begin her popular international Creative Writing Workshop
                series.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="col-md-11 mx-auto">
          <div className="row">
            <div className="col-md-7 my-auto">
              <h1 className="font-weight-bold">Dispossessed</h1>
              <p className="text-muted">
                Poetry of innocence, transparency and atonement
              </p>
              <p>
                He is the curator of Under African Skies which hosts a Flutter
                in the Woods; a yearly evening of poetry and songs in Awka,
                Anambra state. He also co-founded The Return to Idoto, a poetry
                festival in honour of Christopher Okigbo. His poems have
                appeared in Camouflage: Best of Contemporary Writing from
                Nigeria.
              </p>
            </div>
            <div className="col-md-5">
              <div class="bg-image hover-zoom hover-shadow">
                <img
                  className="w-100 img-responsive shadow-1-strong rounded"
                  src={require("./assets/img/disposed.jpeg").default}
                  alt="Dispossessed"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light">
        <div className="pricing8 py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h3 className="mb-3">Pricing to make your reading Effective</h3>
                <h6 className="subtitle font-weight-normal">
                  We offer 100% satisfaction and Money back Guarantee
                </h6>
              </div>
            </div>
            {/* row  */}
            <div className="row mt-4">
              {/* column  */}
              <div className="col-md-4 ml-auto pricing-box align-self-center">
                <div className="card mb-4">
                  <div className="card-body p-4 text-center">
                    <h5 className="font-weight-normal">Regular Plan</h5>
                    <sup>NGN</sup>
                    <span className="text-dark display-5">240</span>
                    <h6 className="font-weight-light font-14">YEARLY</h6>
                    <p className="mt-4">
                      The Master license allows you to read, store and even
                      download books offered on this platform
                    </p>
                  </div>
                  <Link
                    className="btn btn-info-gradient p-3 btn-block border-0 text-white"
                    to="#"
                  >
                    CHOOSE PLAN{" "}
                  </Link>
                </div>
              </div>
              {/* column  */}
              {/* column  */}
              <div className="col-md-4 ml-auto pricing-box align-self-center">
                <div className="card mb-4">
                  <div className="card-body p-4 text-center">
                    <h5 className="font-weight-normal">Master Plan</h5>
                    <sup>NGN</sup>
                    <span className="text-dark display-5">540</span>
                    <h6 className="font-weight-light font-14">YEARLY</h6>
                    <p className="mt-4">
                      The Master license allows you to read, store and even
                      download books offered on this platform
                    </p>
                  </div>
                  <Link
                    className="btn btn-danger-gradient p-3 btn-block border-0 text-white"
                    to="#"
                  >
                    CHOOSE PLAN{" "}
                  </Link>
                </div>
              </div>
              {/* column  */}
              {/* column  */}
              <div className="col-md-4 ml-auto pricing-box align-self-center">
                <div className="card mb-4">
                  <div className="card-body p-4 text-center">
                    <h5 className="font-weight-normal">Premium Plan</h5>
                    <sup>NGN</sup>
                    <span className="text-dark display-5">2,400</span>
                    <h6 className="font-weight-light font-14">YEARLY</h6>
                    <p className="mt-4">
                      The Master license allows you to read, store and even
                      download books offered on this platform
                    </p>
                  </div>
                  <Link
                    className="btn btn-info-gradient p-3 btn-block border-0 text-white"
                    to="#"
                  >
                    CHOOSE PLAN{" "}
                  </Link>
                </div>
              </div>
              {/* column  */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <h3 className="text-center">Contact Us</h3>
        <p className="text-center mb-5">
          Send us a message and we will get back to you!
        </p>
        <div className="row">
          <div className="col-md-5">
            <div className="text-center">
              <LocationOnOutlined
                className="rounded-circle p-3"
                style={{ fontSize: "125px", border: "1px solid #ccc" }}
              />
              <p className="mt-4 font-weight-bold">
           
              Contact us
             </p>
              <p>Awka, Anambra state</p>
            </div>
          </div>
          <div className="col-md-7">
            <form>
              {/* Name input */}
              <div className="mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              {/* Email input */}
              <div className="mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              {/* Message input */}
              <div className="mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows={4}
                  defaultValue={"Message"}
                />
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
