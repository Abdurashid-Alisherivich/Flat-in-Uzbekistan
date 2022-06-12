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
      <Navbar bg="white" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#"><img className='logoCom' src={logoCom} alt="Img" /></Navbar.Brand>
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
                <Nav.Link href="#action1">Bosh Sahifa</Nav.Link>
                <Nav.Link href="#action2">Biz Haqimizda</Nav.Link>
                <Nav.Link href="aloqa">Aloqa</Nav.Link>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;