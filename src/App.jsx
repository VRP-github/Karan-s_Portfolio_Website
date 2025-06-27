import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/homeScreen';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';
import Project from './components/project';
import Certificates from './components/certificates'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="project" element={<Project />}></Route>
        <Route path="/certificates" element={<Certificates />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
