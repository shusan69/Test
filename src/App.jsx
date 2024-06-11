import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects'; 
import Services from './components/Services'; 
import Contact from './components/Contact'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
