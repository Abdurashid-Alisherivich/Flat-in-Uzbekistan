import React from "react";
import signIn from "../../Assets/siginIn.jpg";
import Container from 'react-bootstrap/Container';
import logoCom from '../../Assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  return (
    <div>
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
    <div className="signInWrapper">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={signIn} alt="" />
            <Link to="/signUp">
              <p className="accountBor">Profil yaratish</p>
            </Link>
          </div>
          <div class="col container">
            <h1>Profilga kirish</h1>
            <form className="mt-5">
              <input
                type="email"
                className="form-control w-50"
                placeholder="Email kiriting"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input
                type="password"
                className="form-control mt-2 w-50"
                placeholder="Parol kiriting"
                aria-label="surname"
                aria-describedby="basic-addon1"
              />

              <input
                type="password"
                className="form-control mt-2 w-50"
                placeholder="Parolni takrorlang"
                aria-label="surname"
                aria-describedby="basic-addon1"
              />
              <button type="submit" className="btn btn-primary btn-lg mt-2">
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
