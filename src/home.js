import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Theo's Blog</h1>

      <ul>
        <li><a href="/one">The Feeling of Power and My Experience with LLMs</a></li>
        <li><a href="/two">Fictional Interview and Chain of Thought Prompting</a></li>
        <li><a href="/three">Shuky Meyer's Guest Visit and Cory Doctorow's AI Essay</a></li>
        <li><a href="/four">AI-Native Employees and Computer Science Educational Changes</a></li>
        <li><a href="/five">Jeff Larkin's Visit and The Possible Futures of Software Engineering</a></li>
        <li><a href="/six">John Miller's Visit and My AI Identity</a></li>
        <li><a href="/seven">The Eternal Promise, The Training Data Paradox, and AI Myths</a></li>
        <li><a href="/eight">Dalia Abo Sheasha's Visit, Martin Fowler, and Stack Overflow's AI Survey</a></li>
        <li><a href="/nine">Cassidy Williams' Visit and Vibe Coding</a></li>
      </ul>
    </div>
  );
}

export default Home;