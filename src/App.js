import Contact from "./Components/Contact/Contact";
import NavbarPage from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
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
          <Route path="aloqa" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
