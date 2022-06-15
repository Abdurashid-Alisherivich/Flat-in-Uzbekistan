import Contact from "./Components/Contact/Contact";
import NavbarPage from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutUs/About";
import Home from "./Components/Home/Home";
import Landlord from "./Components/Landlord/Landlord";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aloqa" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="landlord" element={<Landlord />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
