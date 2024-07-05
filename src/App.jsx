import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <h1>hello from app</h1>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
