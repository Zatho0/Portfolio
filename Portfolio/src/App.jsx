import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import MobileMenu from './components/Layout/MobileMenu/MobileMenu';
import Footer from './components/Layout/Footer/Footer';
import Hero from './components/Sections/Hero/Hero';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Skills from './components/Sections/Skills/Skills';
import Contact from './components/Sections/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;