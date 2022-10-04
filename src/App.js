import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Careers from './Pages/Careers';
import LetsTalk from './Pages/LetsTalk';
import Services from './Pages/Services.js';
import Specialties from './Pages/Specialties';
import Work from './Pages/Work.js';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="router-container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/specialties" element={<Specialties />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/letstalk" element={<LetsTalk />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
