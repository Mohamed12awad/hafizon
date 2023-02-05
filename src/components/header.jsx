import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <header className="header my-4">
      <Container>
        <Row>
          <Col md={6}>
            <Row className="flex-column">
              <Col>
                <div className="frame-1-2">
                  <div className="frame-1-3">
                    <h1 className="learn-quran-anywherpoppins-bold-eerie-black-56px">
                      <span className="main-text">
                        Learn Quran, Anywhere with Online classes for Kids and
                        Adults.
                      </span>
                    </h1>
                    <p className="learn-quran-by-one-tpoppins-light-eerie-black-22px">
                      <span className="poppins-light-eerie-black-22px">
                        Learn Quran by one-to-one online sessions with excellent
                        teachers helping you in a Convenient, Innovative yet
                        Affordable Way.
                      </span>
                    </p>
                  </div>
                  <div className="frame-1 my-3">
                    <Button
                      href="#"
                      variant="primary"
                      className="book-button bg-theme-2 bx-3 py-2"
                    >
                      Book Free Session
                    </Button>
                    <Button
                      href="#"
                      variant="outline-dark"
                      className="book-button bx-3 py-2"
                    >
                      Pricing &amp; Plans
                    </Button>
                  </div>
                </div>
              </Col>
              {/* <img className="group-2-1" src="group-2-1.png" alt="Group 2" /> */}
              <Col>
                <div className="overlap-group1">
                  <p className="starting-at-only-17-monthpoppins-semi-bold-absolute-zero-18px">
                    <span className="poppins-semi-bold-absolute-zero-18px">
                      Starting at Only $17 / Month
                    </span>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="group-3">
                  <div className="frame-3-2">
                    <img
                      className="frame"
                      src={require("../imgs/frame.png")}
                      alt="Frame"
                    />
                    <div className="x100-money-back-guaranteepoppins-light-black-16px">
                      <span className="poppins-light-black-16px">
                        100% Money
                        <br />
                        Back Guarantee
                      </span>
                    </div>
                  </div>
                  <div className="frame-5-2">
                    <img
                      className="frame"
                      src={require("../imgs/frame.png")}
                      alt="Frame"
                    />
                    <div className="experienced-teachersexperiencedpoppins-light-black-16px">
                      <span className="poppins-light-black-16px">
                        Experienced
                        <br />
                        Teachers
                      </span>
                    </div>
                  </div>
                  <div className="frame-6-1">
                    <img
                      className="frame"
                      src={require("../imgs/frame.png")}
                      alt="Frame"
                    />
                    <div className="flexible-schedulepoppins-light-black-16px">
                      <span className="poppins-light-black-16px">
                        Flexible
                        <br />
                        Schedule
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={{ order: 1 }}>
            <img
              className="mask-group-1 w-100"
              src={require("../imgs/Group-2-1.png")}
              alt="Mask group"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
