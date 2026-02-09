import React from 'react';

function Three() {
    return (
        <div className="blog-post">
            <h1>Shuky Meyer's Guest Visit and AI Essay</h1>
            <small>02-09-2026</small>
            <p>
                This week, I'll be giving my key takeaways from Shuky Meyer's visit as a guest speaker in our class. Along with that, I've been given Cory Doctorow's essay, <a href="https://www.theguardian.com/us-news/ng-interactive/2026/jan/18/tech-ai-bubble-burst-reverse-centaur" target="_blank" rel="noopener noreferrer">AI Companies Will Fail</a>. After reading, I'll write my own response to the ideas in the essay.
            </p>
            <br />
            <h2>Shuky Meyer's Visit</h2>
            <p>
                <a href="https://www.linkedin.com/in/shukymeyer/" target="_blank" rel="noopener noreferrer">Shuky Meyer</a> is a Software Engineer at AuditBoard with a background in AI development enablement who gave a fascinating talk to my class, about AI development. After listening to his presentation, there's one very important point that he made no less than 5 times; it's the idea that AI is a probability landscape that the user is in charge of shaping. What that means is that your conversations with an AI agent don't consist of questions and answers. Those conversations with AI agents are really just instances of the user constraining the output space of the agent. Every piece of context or word in a prompt will adjust the AI agent's output space accordingly. To apply this, we should structure our prompt with context, a list of tasks (steps), and what format we'd like our output in. Applying these skills will cause AI agents to give a much better output.
            </p>
            <br />
            <h2>My Thoughts on Cory Doctorow's AI Essay</h2>
            <p>
                In the second section of Doctorow's Essay, he focuses on how technology, specifically AI is aiming towards creating an "army of centaurs". What he means by this is that we are becoming, or will become, so reliant on AI that we will be used for the creation of things in the interest of a machine. To me, this is obviously an exageration. It's not true in the current state of technology, and it won't be true as long as AI lacks the ability to think critically. Right now, humans are still designing systems and asking AI to help with creation. I don't agree that we're  being turned into reverse centaurs because all people have the ability to think for themselves, and sequentially, avoid listening to whatever a machine says.
            </p>
            <br />
            <p>
                Doctorow also mentions how he believes that large corporations are using their power in advertisements and the media to hype up AI. This way, the companies who are using AI and growing in the technology field will continue to gain investors. I fully agree with Doctorow's point here. It feels like every year there's a new subfield of techonlogy that gets hyped up and turns out to be much less impactful than they say.
            </p>
            <br />
            <p>
                Similarly, Doctorow is very clear in the fact that he thinks that corporations exagerate the amount of jobs that will be taken by AI. AI can only help you do your job, not do it for you. I strongly agree with Doctorow here. Maybe AI will take a lot of basic coding jobs. When those jobs are taken, coding adjacent jobs will open up. Demand will incrase for jobs that use system design and prompt engineering. Although certain jobs will be taken, adjacent jobs will open up as a result.
            </p>
        </div>
    );
}

export default Three;