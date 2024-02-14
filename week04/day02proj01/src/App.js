import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
