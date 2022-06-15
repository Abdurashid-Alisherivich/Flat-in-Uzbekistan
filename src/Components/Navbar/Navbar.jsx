import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import logoCom from '../Assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';

function NavbarPage() {
  return (
    <>
      <Navbar bg="white" expand="lg" className="mb-3 navbarSticyRes">
        <Container fluid>
          <Navbar.Brand href="/home"><img className='logoCom' src={logoCom} alt="Img" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="responsive-navbar-nav">
                <img className='logoCom' src={logoCom} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Bosh Sahifa</Nav.Link>
                <Nav.Link href="/about">Biz Haqimizda</Nav.Link>
                <Nav.Link href="/aloqa">Aloqa</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Qidiruv"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Qidiruv</Button>
              </Form>
              
            <div className="btn-group shadow-0 registrNavbar">
              <button type="button" className="btn bg-dark btn-link dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                Registration
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/signUp">Sign Up</a></li>
                <li><a className="dropdown-item" href="/signIn">Sign In</a></li>
              </ul>
            </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;