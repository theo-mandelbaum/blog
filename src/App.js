import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import One from './blogs/One';
import Two from './blogs/Two';
import Three from './blogs/Three';
import Four from './blogs/Four';
import Fifth from './blogs/Fifth';
import Six from './blogs/Six';
import Seven from './blogs/Seven';
import Eight from './blogs/Eight';
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
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Fifth />} />
          <Route path="/six" element={<Six />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
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
