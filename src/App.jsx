import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Nav/>}/>
      </Routes>
    </Router>
  );
}

export default App;
