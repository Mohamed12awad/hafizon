import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const HowToApply = () => {
  return (
    <section className="howToApply my-5 py-md-3 py-2">
      <Container>
        {/* about section courses */}
        <div className="steps about-head">
          <h2 className="h2 pt-3 h-100 text-capitalize text-center">
            <b>How To Apply</b>
          </h2>
          <div className="mx-auto d-flex justify-content-center pb-3">
            <img src={require("../imgs/Vector-1.png")} alt="" />
          </div>
          <p className="text-center mx-auto w-50">
            A few simple steps separate you from starting to learn the Quran and
            Islam with the best teachers at Hafizon Academy.
          </p>
          <Row className="py-3">
            <Col md="4">
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 px-5 mb-3"
                  variant="top"
                  src={require("../imgs/group17.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title className="fs-5 fw-semibold">
                    Fill Out the Contact <br /> Form Easily
                  </Card.Title>
                  <Card.Text className="text-center fs-6 lh-sm">
                    Fill in the registration form with your name, email, phone
                    number and country
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 px-5 mb-3"
                  variant="top"
                  src={require("../imgs/group18.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title className="fs-5 fw-semibold">
                    Get Free Trial Classes at Your <br /> Desired Time
                  </Card.Title>
                  <Card.Text className="text-center lh-sm">
                    Fill in the registration form with your name, email, phone
                    number and country
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="border-0" style={{ width: "100%" }}>
                <Card.Img
                  className="rounded-3 px-5 mb-3"
                  variant="top"
                  src={require("../imgs/group19.png")}
                />
                <Card.Body className="px-0 text-center">
                  <Card.Title className="fs-5 fw-semibold">
                    Sign up If You Like & Start <br /> Learning Quran
                  </Card.Title>
                  <Card.Text className="text-center lh-sm">
                    Fill in the registration form with your name, email, phone
                    number and country
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Button
              href="#"
              variant="primary"
              className="book-button py-2 px-3 mx-auto bg-theme-2"
            >
              Book Free Session
            </Button>
          </div>
        </div>

        {/* start how to study quran section */}
        <div className="study mt-5">
          <h2 className="h2 pt-3 h-100 text-capitalize text-center">
            <b>Study Quran with Hafizon Academy</b>
          </h2>
          <div className="mx-auto d-flex justify-content-center pb-3">
            <img src={require("../imgs/Vector-1.png")} alt="" />
          </div>
          <p className="study-text text-center mx-auto w-50">
            Learn Quran online for kids and adults! Our deeply experienced and
            certified tutors will teach you how to read the Quran.
          </p>

          <Row>
            <Col md="6">
              <Card className="border-0 rounded-3 my-3 bg-light w-100">
                <Card.Img
                  className="rounded-3 mb-3"
                  variant="top"
                  src={require("../imgs/study-1.png")}
                />
                <Card.Body className="px-4">
                  <Card.Title className="fs-5 text-wrap fw-semibold">
                    Online Quran Classes with Tajweed For Adults and Children
                  </Card.Title>
                  <Card.Text className="bx-3 lh-sm">
                    We created an online Quran academy because we believe that
                    Muslims often find it difficult to dedicate as much time to
                    studying the Quran as they would like due to their
                    responsibilities and life duties. In order to provide our
                    students with a true chance to learn the Quran, we offer a
                    wide variety of classes that are flexible enough to fit into
                    even the busiest schedules.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-0 rounded-3 my-3 bg-light w-100">
                <Card.Img
                  className="rounded-3 mb-3"
                  variant="top"
                  src={require("../imgs/study-2.png")}
                />
                <Card.Body className="px-4">
                  <Card.Title className="fs-5 text-wrap fw-semibold">
                    Learn Quran Online Is Important for Your Children
                  </Card.Title>
                  <Card.Text className="bx-3 lh-sm">
                    We created an online Quran academy because we believe that
                    Muslims often find it difficult to dedicate as much time to
                    studying the Quran as they would like due to their
                    responsibilities and life duties. In order to provide our
                    students with a true chance to learn the Quran, we offer a
                    wide variety of classes that are flexible enough to fit into
                    even the busiest schedules.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-0 rounded-3 my-3 bg-light w-100">
                <Card.Img
                  className="rounded-3 mb-3"
                  variant="top"
                  src={require("../imgs/study-3.png")}
                />
                <Card.Body className="px-4">
                  <Card.Title className="fs-5 text-wrap fw-semibold">
                    Learn Quran Online with Expert Teachers
                  </Card.Title>
                  <Card.Text className="bx-3 lh-sm">
                    There's no doubt that the teachers at Hafizon Academy are
                    some of the best in the business. They re knowledgeable,
                    experienced, and passionate about their work. But what makes
                    them truly special is their dedication to their students.
                    They go above and beyond to make sure their students are
                    getting the best education possible
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-0 rounded-3 my-3 bg-light w-100">
                <Card.Img
                  className="rounded-3 mb-3"
                  variant="top"
                  src={require("../imgs/study-4.png")}
                />
                <Card.Body className="px-4">
                  <Card.Title className="fs-5 text-wrap fw-semibold">
                    Learn Quran Online in Engaging, Interesting and Effective
                    manner
                  </Card.Title>
                  <Card.Text className="bx-3 lh-sm">
                    Many instructors in the Muslim world now offer Quran classes
                    online, and we offer a special focus on teaching the rules
                    and rules of recitation of verses of the Qur an, known in
                    Arabic as Tajweed. Hafizon Academy brings the teachings of
                    the Holy Quran into the comfort and safety of your home.
                    Tthrough face to face learning with interactive live
                    sessions with learned and esteemed teachers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HowToApply;
