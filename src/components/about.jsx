import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faWindowRestore,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const About = () => {
  return (
    <section className="about my-5 py-3">
      <Container>
        {/* about section courses */}
        <div className="provide-sec about-head">
          <h2 className="h2 pt-3 h-100 text-capitalize text-center">
            <b>Quran Online Courses for All Ages</b>
          </h2>
          <div className="mx-auto d-flex justify-content-center pb-3">
            <img src={require("../imgs/Vector-1.png")} alt="" />
          </div>
          <p className="text-center mx-auto w-50">
            Learn Quran online for kids and adults! Our deeply experienced and
            certified tutors will teach you how to read the Quran.
          </p>
          <Row className="py-3">
            <Col md="6">
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3"
                  variant="top"
                  src={require("../imgs/about1.png")}
                />
                <Card.Body className="px-0">
                  <Card.Title className="fs-4 fw-semibold">
                    Kids Classes
                  </Card.Title>
                  <Card.Text className="text-justify mx-auto lh-sm">
                    Your child will learn how to read, recite, and understand
                    the Quran. They will also learn about the Islamic faith and
                    how to apply it in their everyday lives.
                  </Card.Text>
                  <div className="about-labels">
                    <span>
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <span> 4 - 12 Years </span>
                    </span>
                    <span className="px-3">
                      <FontAwesomeIcon icon={faWindowRestore} />
                      <span> 9 Levels </span>
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      <span> 25 hrs/level </span>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3"
                  variant="top"
                  src={require("../imgs/about2.png")}
                />
                <Card.Body className="px-0">
                  <Card.Title className="fs-4 fw-semibold">
                    Adults Classes
                  </Card.Title>
                  <Card.Text className="text-justify mx-auto lh-sm">
                    You will learn how to read, recite, and understand the
                    Quran. You will also learn about the islam and how to apply
                    it in your everyday live.
                  </Card.Text>
                  <div className="about-labels">
                    <span>
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <span> 13 - 65 Years </span>
                    </span>
                    <span className="px-2 px-md-3">
                      <FontAwesomeIcon icon={faWindowRestore} />
                      <span> 9 Levels </span>
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      <span> 25 hrs/level </span>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* <i className="fa-regular fa-image"></i> */}
        </div>
      </Container>
      <div className="about-2">
        <Container>
          <h2 className="h2 fw-bold pt-3 h-100 text-capitalize text-center">
            <b>About Hafizon Academy</b>
          </h2>
          <div className="mx-auto d-flex justify-content-center pb-3">
            <img src={require("../imgs/Vector-1.png")} alt="" />
          </div>
          <p className="text-center mx-auto">
            Hafizon Academy was established in 2018 with the aim of providing
            online Quran teaching to Muslims all over the world. The Academy has
            been working hard to achieve its goals and has succeeded in
            attracting a large number of students from different parts of the
            world.
          </p>

          {/* about statistics */}
          <Row className="d-flex text-center justify-content-center">
            <Col xs={6} md="auto" className="d-flex flex-column">
              <span className="poppins-bold-pizazz-56px t-shadow">+5,000</span>
              <span className="poppins-light-black-16px">
                Students All
                <br />
                Over the World
              </span>
            </Col>
            <Col xs={6} md="auto" className="d-flex flex-column">
              <span className="poppins-bold-pizazz-56px t-shadow">+50</span>
              <span className="poppins-light-black-16px">
                Experienced
                <br />
                Instructors
              </span>
            </Col>
            <Col xs={6} md="auto" className="d-flex flex-column">
              <span className="poppins-bold-pizazz-56px t-shadow">+8</span>
              <span className="poppins-light-black-16px">
                Years Learn
                <br />
                Students
              </span>
            </Col>
            <Col xs={6} md="auto" className="d-flex flex-column">
              <span className="poppins-bold-pizazz-56px t-shadow">+200</span>
              <span className="poppins-light-black-16px">
                Sessions
                <br />
                Monthly
              </span>
            </Col>
          </Row>
          <div className="d-flex justify-content-center about-btn py-4">
            <Button
              href="#"
              variant="outline-dark"
              className="book-button border-dark fw-semibold fs-5 px-3 py-2"
            >
              About Us <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Container>
      </div>
      {/* about // what we provide */}
      <div className="about-3 py-5">
        <Container>
          <Row>
            {/* offer 1 */}
            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-1.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>We Offer Trials with Multiple Tutors</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    it is important to select the right teacher, focus, and
                    level in order to have the greatest benefit. That is why we
                    offer free trial classes with several teachers and classes
                    to see which one is the best fit for you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 2 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-2.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Learn the Holy Quran with Experts</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    Our teachers have a profound understanding of Tajweed and
                    live their lives in accordance with Islamic principles. All
                    of our teachers have completed university or institute level
                    studies & Hafiz.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 3 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-3.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>24/7 Service</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    We offer Quran lessons round the clock to make it possible
                    for you and your kids to learn with the busiest schedules.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 4 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-4.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Worldwide Recognized</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    We award a completion certificates after the successful
                    evaluation of the completed course that is posted to your
                    mail address.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 5 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-5.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Our Prices Are Very Affordable</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    Price is another advantage when studying the Quran online
                    with us. You can study Quran online with four classes a
                    month for as little as $17 a month.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 6 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-6.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Female Quran Tutors for Women</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    Price is another advantage when studying the Quran online
                    with us. You can study Quran online with four classes a
                    month for as little as $17 a month
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 7 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-7.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Multilingual Tutors</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    We strive hard to hire expert Arab and Non-Arab, Male and
                    Female Quran teachers from Egypt and all over the world to
                    ensure the best Quran online experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* offer 8 */}

            <Col xs={6} md={4} lg={3}>
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 w-50 mx-auto px-4"
                  variant="top"
                  src={require("../imgs/frame-8.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title>Evaluation Reports</Card.Title>
                  <Card.Text className="text-justify lh-sm">
                    Our quality control team will not monitor teachers only but
                    will provide you a progress report every month
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
