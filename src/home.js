import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Theo's Blog</h1>

      <ul>
        <li><a href="/one">Blog One</a></li>
        <li><a href="/two">Blog Two</a></li>
      </ul>
    </div>
  );
}

export default Home;