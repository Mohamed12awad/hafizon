import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../imgs/logo-lg.png";

function NavBar() {
  return (
    <>
      <Navbar key="lg" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-uppercase">
            <img alt="#" className="nav-logo" src={logo} />
            <div className="d-flex"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-lg`}
                className="text-uppercase fw-bold h5"
              >
                Hafizon academy
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center text-capitalize flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown
                  title="Courses"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">About us</Nav.Link>
                <Nav.Link href="#action2">pricing</Nav.Link>
                <Nav.Link href="#action2">blog</Nav.Link>
                <Nav.Link href="#action2">contact us</Nav.Link>
              </Nav>
              <Button
                href="#"
                variant="primary"
                className="book-button bg-theme-2 mt-2"
              >
                Book Free Session
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
