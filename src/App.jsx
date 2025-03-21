import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Freelancing from "./pages/Freelancing";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Skills from "./pages/Skills"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/freelancing" element={<Freelancing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
