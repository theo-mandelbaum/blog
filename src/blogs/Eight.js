import React from 'react';

function Eight() {
    return (
        <div className="blog-post">
            <h1>Dalia Abo Sheasha's Visit, Martin Fowler, and Stack Overflow's AI Survey</h1>
            <small>03-15-2026</small>
            <p>
                This week in my AI class, we're preparing for a conversation with Dalia Abo Sheasha, a project manager
                for Visual Studio at Microsoft. Along with that, I watched Gergely Orosz's interview with Martin Fowler,
                a pioneer of agile software development, and explored Stack Overflow's 2025 survey on AI.
                I'll also be sharing my progress on my Nogramming assignment.
            </p>
            <br />
            <h2>Stack Overflow's AI Survey</h2>
            <h3>First Standout Result</h3>
            <p>
                Something that stood out to me is that early devs have noticeably higher numbers in terms of AI usage, compared to experienced devs.
                However, experienced devs have reported higher levels of positive sentiment than early career devs.
                I believe that less experienced devs have a more negative experience with AI because their lack of
                experience can push them to confusion. More experienced devs are better versed in their field, allowing them to get less lost when chatting with AI.
            </p>
            <h3>Second Standout Result</h3>
            <p>
                Another result that caught my eye is the data on AI tool frustrations. 66% of developers said their biggest frustration is
                dealing with AI solutions that are almost right, but not quite. On top of that, 45% said that debugging AI-generated code
                is more time-consuming than writing it themselves. These numbers line up with my own experience—AI gets you close,
                but that last stretch of fixing its mistakes can eat up all the time you thought you were saving. It makes sense why
                only 3% of developers say they highly trust AI output, and why 75% said they would still ask a human for help
                when they don't trust AI's answers.
            </p>
            <br />
            <h2>Nogramming Assignment Progress</h2>
            <p>
                This week, I'm going to begin assembling my framework for my LLM. I'm making a physical model of what's going on inside of an LLM, so I'll need to make some sort of physical framework.
                Since I've already picked up my materials for the model, I'll begin gluing them together, starting with the weigths of the probabilities.
            </p>
        </div>
    );
}

export default Eight;
