import React from "react";
import NavbarPage from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavbarPage />
      <div className="homeWrapper">
        <h1>Home Section</h1>
        <Footer />
      </div>
    </div>
  );
}
