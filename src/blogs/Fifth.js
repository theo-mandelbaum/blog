import React from 'react';

function Fifth() {
    return (
        <div className="blog-post">
            <h1>Jeff Larkin's Visit and The Possible Futures of Software Engineering</h1>
            <small>02-23-2026</small>
            <p>
                This past week in my AI class, we had <a href='https://www.linkedin.com/in/jefflarkin/' target="_blank" rel="noopener noreferrer">Jeff Larkin</a> come in as a guest speaker.
                Jeff is the director of high-performance computing at NVIDIA, and his presentation was one of the more thought-provoking
                conversations we've had in this class. In my blog for this week, I'll be sharing my takeaways from Jeff's visit.
                Scott Hanselman's podcast episode <a href='https://www.youtube.com/watch?v=n9wAqMjgHx0' target='_blank' rel="noopener noreferrer">The AI Vampire with Gas Town's Steve Yegge</a> has been shared with me.
                I'm to listen to the podcast episode, share my thoughts, and then write an additional two paragraphs acting as a software engineer 50 years in the future—one positive and one negative.
            </p>
            <br />
            <h2>What Jeff Talked About</h2>
            <p>
                To me, the most interesting topic that Jeff covered was the real world applications of AI.
                He showed us a system that NVIDIA has been developing that uses AI to predict many different weather forecast possibilities.
                Each one is assigned a likelihood; after looking at the likelihood of each storm path, the most likely ones can be run through
                the real, accurate system that meteorologists use. The benefit of using AI is that you can test more possibilities with less compute time.
                I've always thought of AI as a very powerful computational tool, but seeing the real world potential revealed a new sense of value to me, regarding these tools.
            </p>
            <br />
            <h2>The AI Vampire with Gas Town's Steve Yegge</h2>
            <p>
                A huge majority of this conversation was regarding how AI is actually overworking our brains, despite the fact that it's meant to lessen our workload. 
                They expained that the reason why we're being overworked is because AI forces us to multitask. 
                When I'm coding with AI, it becomes wildly difficult to focus on one specific aspect of my code. AI actively changes your code and your files 
                and stunts the your learning. I wil also find myself working on multiple things at once, since the AI agent 
                can write parts of the code for me. while it's writing code, I will work on something else. Then, I'll switch my focus back 
                to my code once the agent is finished.
            </p>
            <br />
            <h2>The Possible Futures of Software Engineering. Write Two Possible Diary Entries of a Software Engineer 50 Years in an AI-powered Future</h2>
            <h4>Positive Future</h4>
            <p>
                This week at work, my team of five and I deployed 10,000 lines of code. We were able to build the majority of code for a program for two 
                different government agencies over the past week. This efficiency was only possible because of our built-in AI agents.
                Our new AI system has its own auditory agent that listens in on our meetings and creates a well structured AI prompt for a separate coding agent.
                This prompt is reread by our team and our team makes additions to the prompt, providing any additional context that the coding agent may need 
                to create boilerplate code. Once this boilerplate code is finished, our team splits up the program five ways and proof reads it for understanding and clarity.
                Every time we find an undesirable function in our program, we add a new requirement to the project requirements. We then pass our new requirements 
                into the AI agent and receive its changes. We repeat that process until we have a satisfactory final product.
                This way, we can finish projects exponentially quicker than ever before!
            </p>
            <br />
            <h4>Negative Future</h4>
            <p>
                Every week, it seems like another one of my colleagues is let go by management. Our skills are becoming obsolete; AI can basically do our jobs for us 
                and it really only needs a few humans to help guide it in the right direction. I feel like it's only a matter of time 
                before they can me too. I've been taking late nights and early mornings just to study every single SE topic that I know; 
                maybe if I keep my skills as sharp as possible, I'll be able to keep my job. Maybe I should spend that time studying for another profession. 
                Anyway, we're finishing projects really quickly, but it's because of the coding agents. The extinction of software engineering seems inevitable 
                and I'm not sure what to do. Get out while you can.
            </p>
        </div>
    );
}

export default Fifth;
