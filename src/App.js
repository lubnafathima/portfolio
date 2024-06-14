import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import References from "./references/page";
import Contact from "./contact/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
