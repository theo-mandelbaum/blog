import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Theo's Blog</h1>

      <ul>
        <li><a href="/one">The Feeling of Power and My Experience with LLMs</a></li>
        <li><a href="/two">Fictional Interview and Chain of Thought Prompting</a></li>
        <li><a href="/three">Shuky Meyer's Guest Visit and AI Essay</a></li>
      </ul>
    </div>
  );
}

export default Home;