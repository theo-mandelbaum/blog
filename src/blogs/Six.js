import React from 'react';

function Six() {
    return (
        <div className="blog-post">
            <h1>John Miller's Visit and My AI Identity</h1>
            <small>03-01-2026</small>
            <p>
                This past week in my AI class, we had <a href='https://www.linkedin.com/in/johnmmiller/' target="_blank" rel="noopener noreferrer">John Miller</a> come in as a guest speaker.
                John is a software engineering leader at insightsoftware, and his visit prompted a lot of reflection on identity—both professional and personal—in an AI-driven world.
                In addition to sharing my takeaways from John's visit, this week's blog covers a hands-on comparison of AI models using{' '}
                <a href='https://lmarena.ai/' target='_blank' rel='noopener noreferrer'>Arena</a>, along with thoughts on two pieces I was asked to read:
                Dave Gauer's <a href='https://ratfactor.com/cards/programmers-loss' target='_blank' rel='noopener noreferrer'>A Programmer's Loss of Social Identity</a> and
                Bob Nystrom's <a href='https://journal.stuffwithstuff.com/2023/10/19/the-value-of-things/' target='_blank' rel='noopener noreferrer'>The Value of Things</a>.
                I'll also be writing about my own AI identity and what I plan to do this week on my Nogramming assignment.
            </p>
            <br />
            <h2>What I Took From John's Visit</h2>
            <p>
                Compared to previous conversations, John's visit opened my mind up to a new set of approaches AI.
                Previous conversations were centered around how software engineers approach using AI and how AI can
                be used to create useful products. While John's presentation had some of that, he spoke extensively
                about how he judges other employees' work regarding AI. Being a product manager, John oversees a number
                of employees who may use AI to assist them in their work. His view on the value of AI, along with some
                first hand skepticism gave me a wider view of how these tools are used in a real project workflow. Sometimes,
                an employee will miss some points and submit lackluster work because they didn't check behind their AI tool.
                The nature of these tools is that they will make some mistakes, so there's always a need for humans to check behind an AI tool.
            </p>
            <br />
            <h2>Arena Model Comparison</h2>
            <p>
                When testing out the two different AI models in Arena, I noticed a few differences between the two. 
                One model is not inherently better than the other; they both have strengths and weaknesses. Model A 
                is proficient in giving me detailed descriptions of concepts and explaining processes step by step. I 
                found this useful when asking the model about instructions for different mathematical computations. Model 
                B was much better at actually applying the concepts to an example. This was true for math and conversational 
                pieces. When I asked it a question, model B would remember what I have asked about in previous queries and apply
                it to my current question. I prefer model A because I want to be able to apply the ideas myself, rather
                than the automation of critical thinking.
            </p>
            <br />
            <h2>My AI Identity</h2>
            <p>
                After reading A Programmer's Loss of Social Identity and The Value of Things, I've gained a clearer view of my own 
                identity regarding AI. For me, AI hasn't taken over my personal life. Both of the articles discuss their own hobbies
                and how their meaning can be affected by AI. Music, and other meaningful art forms, can lose some value if AI is
                able to reproduce it at a high level. For me, most of my hobbies require some form of physical activity, so I'm immune
                to AI on that front. As a programmer, I do sometimes feel like AI has had an effect on my identity. Just as I was beginning
                to enjoy solving those tough problems and building systems as a computer science student, my classes began to permit AI. 
                While I still could do the assignments without AI, it seems wildly inefficient to lose an extra hour of my day for an assignment, 
                when I could spend that hour on a hobby or other work. With this use of AI, comes a loss of enjoyment of solving those difficult 
                problems alone. The feeling of accomplishment when I've solved a tough problem is something that can't be recreated. 
                In the end, AI is more efficient than my brain at many tasks, so I will continue to leverage it, but I do miss the days 
                of Stack Overflow and YouTube tutorials.
            </p>
            <br />
            <h2>Nogramming Assignment Progress</h2>
            <p>
                This week, I'll finalize a topic for my Nogramming Assignment and gather all the materials that I'll need for the task.
            </p>
        </div>
    );
}

export default Six;
