import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";

function Faq() {
  return (
    <section className="faq">
      <Container>
        <Row>
          <Col md={4}>
            <div className="py-3 my-3">
              <h3 className="fw-bold">
                Frequently <br /> Asked Questions
              </h3>
              <img alt="#" src={require("../imgs/Vector-2.png")} />

              <p className="fw-light pt-3">
                Learn Quran online for kids and adults! Our deeply experienced
                and certified tutors will teach you how to read the Quran.
              </p>
              <a href="./" target={"self"} className="fw-bold nav-link">
                Contact us
              </a>
            </div>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>
                  <span className="fs-6 text-wrap fw-semibold">
                    What is the payment methods avaliable?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  There s no doubt that the teachers at Hafizon Academy are some
                  of the best in the business. They re knowledgeable,
                  experienced, and passionate about their work. But what makes
                  them truly special is their dedication to their students. They
                  go above and beyond to make sure their students are getting
                  the best education possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header>
                  <span className="fs-6 text-wrap fw-semibold">
                    What is the payment methods avaliable?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  There s no doubt that the teachers at Hafizon Academy are some
                  of the best in the business. They re knowledgeable,
                  experienced, and passionate about their work. But what makes
                  them truly special is their dedication to their students. They
                  go above and beyond to make sure their students are getting
                  the best education possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0">
                <Accordion.Header>
                  <span className="fs-6 text-wrap fw-semibold">
                    What is the payment methods avaliable?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  There s no doubt that the teachers at Hafizon Academy are some
                  of the best in the business. They re knowledgeable,
                  experienced, and passionate about their work. But what makes
                  them truly special is their dedication to their students. They
                  go above and beyond to make sure their students are getting
                  the best education possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border-0">
                <Accordion.Header>
                  <span className="fs-6 text-wrap fw-semibold">
                    What is the payment methods avaliable?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  There s no doubt that the teachers at Hafizon Academy are some
                  of the best in the business. They re knowledgeable,
                  experienced, and passionate about their work. But what makes
                  them truly special is their dedication to their students. They
                  go above and beyond to make sure their students are getting
                  the best education possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-0">
                <Accordion.Header>
                  <span className="fs-6 text-wrap fw-semibold">
                    What is the payment methods avaliable?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  There s no doubt that the teachers at Hafizon Academy are some
                  of the best in the business. They re knowledgeable,
                  experienced, and passionate about their work. But what makes
                  them truly special is their dedication to their students. They
                  go above and beyond to make sure their students are getting
                  the best education possible.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faq;
