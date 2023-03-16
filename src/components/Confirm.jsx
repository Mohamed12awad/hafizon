import { Container, Button, Col } from "react-bootstrap";

function Confirm() {
  return (
    <Container>
      <div className="confirm">
        <Col md={6} className="mx-auto">
          <h2 className="h2 pt-3 h-100 text-capitalize text-center fw-bold text-white ">
            Learn Quran Online with Multilingual and Expert Tutors
          </h2>
          <p className="text-center mx-auto px-1 px-md-0">
            Learn Quran by one-to-one online sessions with excellent teachers
            helping you in a Convenient, Innovative yet Affordable Way.
          </p>
          <div className="d-flex my-3 mx-auto justify-content-center">
            <Button
              href="#"
              variant="primary"
              className="book-button bg-theme-2 mx-md-3 mx-2 bx-3 py-2"
            >
              Book Free Session
            </Button>
            <Button
              href="#"
              variant="outline-dark"
              className="book-button mx-md-3 mx-2 bx-4 py-2"
            >
              Pricing &amp; Plans
            </Button>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default Confirm;
