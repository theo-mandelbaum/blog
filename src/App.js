import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import One from './blogs/One';
import Two from './blogs/Two';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="logo">TM</div>

          <nav className="nav">
            <a href="/">Home</a>
          </nav>

          <a href="https://mandelbaumtheo.org" className="back-link">Back to Main Site</a>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <nav className="footer-nav">
            <a href="https://www.linkedin.com/in/theo-mandelbaum">LinkedIn</a>
            <a href="https://github.com/theo-mandelbaum">GitHub</a>
            <a href="mailto:mandelbaumtheo@gmail.com">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
