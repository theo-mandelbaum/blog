import React from 'react';

function Eleven() {
    return (
        <div className="blog-post">
            <h1>Nick Morgan's Visit and Security in Software Engineering</h1>
            <small>04-13-2026</small>
            <p>
                This past week, <a href='https://www.linkedin.com/in/endre-szakal-78562020a/' target="_blank" rel="noopener noreferrer">Endre Szakal</a> visited
                 our class. From his visit, I learned a lot about the gray area that exists in the world of AI. Endre
                 works with AI as a RAG tool for his systems. While he writes most of his code in Python without agentic assistance,
                 he still uses it as a tool. Even so, he thinks that AI produces bad code and uses it as little as he possibly can.
                 We can all learn from Endre by seeing and considering both sides of the AI argument.
            </p>
            <br />
            <h2>Three Video Responses</h2>
            <h3>Lex Fridman interviews Jim Keller — Moore's Law, Microprocessors, and First Principles</h3>
            <p>
                One of Jim's most prominent points in this interview is the idea that new implementations of technology are always being built,
                 causing developers to start from scratch every 3-5 years. This is evident from how much education has changed
                 over the course of AI's growth in popularity.
            </p>
            <h3>Heather Adkins and Four Flynn — Evaluating Threats & Automating Defense at Google</h3>
            <p>
                The overall point of Google's defense strategy is the idea of eliminating all of the vulnerabilities in the world.
                 In theory, this sounds great, but I think that it would have detrimental side effects. Google's strategy assumes that standardizing and
                 consolidating technology to eliminate vulnerabilities will eliminate the issue. However, consolidation has its own risks; concentrating
                 infrastructure into fewer hands increases single points of failure and could create barriers for new contributors. This solution may
                 be worse than the problem.
            </p>
            <h3>Paul McMillan and Ryan Lopopolo — Code Is Free: Securing Software</h3>
            <p>
                One part of the Code Is Free talk that stood out to me was how they incorporated validation as a part of the code review. When
                 humans are developing code, part of the code review is to test and validate every aspect of the system. Machine learning has been marketed and explained
                 as learning like a human. So shouldn't we treat them like a human by validating their code in code review?
            </p>
            <br />
            <h2>Nogramming Assignment Progress</h2>
            <p>
                I will continue building the physical model of my LLM.
            </p>
        </div>
    );
}

export default Eleven;
