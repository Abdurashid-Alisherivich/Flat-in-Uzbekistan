import React from "react";
import Container from 'react-bootstrap/Container';
import logoCom from '../../Assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import signUp from "../../Assets/signUp.jpg";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
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
    <div className="signUpWrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Ro'yhatdan o'tish</h2>
            <div className="input-group mb-3">
              <form>
                <input
                  type="text"
                  className="form-control signUpInputStyle"
                  placeholder="Ismingizni kiriting"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="text"
                  className="form-control signUpInputStyle mt-2"
                  placeholder="Familiyangizni kiriting"
                  aria-label="surname"
                  aria-describedby="basic-addon1"
                />

                <div className="mt-2">
                  <button
                    className="btn btn-white  dropdown-toggle w-100 signUpBtn"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Siz kimsiz
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-item">Ijaraga qo'yuvchi</li>
                    <li className="dropdown-item">Ijaraga oluvchi</li>
                  </ul>
                </div>
                <input
                  type="number"
                  className="form-control signUpInputStyle mt-2"
                  placeholder="+998 9 "
                  aria-label="surname"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="email"
                  className="form-control signUpInputStyle mt-2"
                  placeholder="Email kiriting "
                  aria-label="surname"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="password"
                  className="form-control signUpInputStyle mt-2"
                  placeholder="Parol yarating"
                  aria-label="surname"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="password"
                  className="form-control signUpInputStyle mt-2"
                  placeholder="Parolni qayta kiriting"
                  aria-label="surname"
                  aria-describedby="basic-addon1"
                />
                <button type="submit" className="btn btn-primary btn-lg mt-2">
                  Tasdiqlash
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <img src={signUp} alt="" />
            <Link to="/signIn">
              <p className="accountBor">Profilga o'tish</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
