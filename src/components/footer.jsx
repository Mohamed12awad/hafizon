import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer mt-md-5 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div>
              <img
                className="w-75"
                alt="./"
                src={require("../imgs/logo-lg.png")}
              />
            </div>
            <p className="foot-text mt-3">
              We are Hafizon Academy, an online Quran teaching academy that
              provides Quran courses online, memorization techniques, and
              tajweed rules. Our mission is to help Muslims all over the world
              learn and understand the Quran.
            </p>
          </div>
          <div className="col-12 col-lg-2">
            <h5 className="h5 px-0 px-md-3">
              <b>Useful Links</b>
            </h5>
            <ul className="list-group list-group-flush text-capitalize">
              <li className="list-group-item border-0 p-0 px-md-3">
                <a href="./" className="nav-link px-0">
                  about us
                </a>
              </li>
              <li className="list-group-item border-0 p-0 px-md-3">
                <a href="./" className="nav-link px-0">
                  courses
                </a>
              </li>
              <li className="list-group-item border-0 p-0 px-md-3">
                <a href="./" className="nav-link px-0">
                  pricing
                </a>
              </li>
              <li className="list-group-item border-0 p-0 px-md-3">
                <a href="./" className="nav-link px-0">
                  blog
                </a>
              </li>
              <li className="list-group-item  border-0 p-0 px-md-3">
                <a href="./" className="nav-link px-0">
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mt-3 mt-md-0">
            <h5 className="h5">
              <b>Subscribe to Newsletter</b>
            </h5>
            <p className="foot-text">
              We hate spam. Just join the mailing list for updates, features,
              tips & giveaways about the latest elements in the industry.
            </p>
            <InputGroup className="my-3">
              <div className="my-auto fs-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "10px",
                    zIndex: 99,
                  }}
                />
              </div>
              <Form.Control
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="px-5 fs-6"
                style={{ borderRadius: "20px" }}
                // style={{ borderRadius: "20px 0 0px 20px" }}
              />
              <a
                className="btn subscribe-btn"
                id="button-addon2"
                href="./"
                style={{
                  position: "absolute",
                  right: "0",
                  zIndex: 99,
                  borderRadius: "20px",
                }}
              >
                Subscribe
              </a>
            </InputGroup>
          </div>
          <div className="col-12 col-lg-3">
            <span className="fw-semibold footer-provide">
              We provide you with the convenience of all available payment
              methods
            </span>
            <div>
              <img
                className="w-100 pt-3 mb-0"
                src={require("../imgs/footer.png")}
                alt="footer"
              />
            </div>
            {/* <ul className="list-group list-group-horizontal text-muted text-capitalize d-flex">
              <li className="list-group-item border-0">
                <a href="./" className="nav-link px-0">
                  about
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="./" className="nav-link px-0">
                  careers
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="./" className="nav-link px-0">
                  mobile
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <p className="text-muted py-3 mb-0 text-center ">
          Copyright {new Date().getFullYear()} all right resirved to Hafizon.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
