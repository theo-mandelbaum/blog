import React from 'react';

function One() {
    return (
        <div className="blog-post">
            <h1>The Feeling of Power and My Experience with LLMs</h1>
            <small>01-26-2026</small>
            <p>
                This is my first blog for CS480, Software Development with AI. This week, I've been tasked with reading Isaac Asimov's <a href="https://ia600806.us.archive.org/20/items/TheFeelingOfPower/The%20Feeling%20of%20Power.pdf" target="_blank" rel="noopener noreferrer">The Feeling of Power</a>. After reading, I am to ask myself two questions regarding the story and answer these questions. Along with that I'll be discussing my personal experience with LLMs and how I've used them so far in this course, and describe a possible idea for an upcoming project in this course.
            </p>
            <br />
            <h2>In our society, will we ever reach the point of wanting "liberation from computers" in a computational sense, as they do in "The Feeling of Power"?</h2>
            <p>
                In my opinion, we will never get to this point. In the story, society has forgotten how to do mathematical computation. As a result, they're relearning these skills using algorithms from computers. As currently constructed, our society has millions and millions of records regarding math, science, and other subjects of academia. In order for humans to fully abandon these ideas and defer to computers, one of two things would need to happen; we would either need to become so reliant on computers that we forget basic operations, or, become so reliant on computers that we fail to care about computational subjects. In my eyes, human nature is to make advancements and improvements. In an effort to make advancements, our work will always be based in basic computation. That fact makes computational subjects impossible to forget.
            </p>
            <br />
            <h2>In the story, the government is debating how much more efficient they can be, if they give some of the computing power to humans, rather than computers. In a similar vein, at what point will it be more efficient, specifically cost-efficient, for companies to stop giving to autonomous computers, and revert back to human labor?</h2>
            <p>
                We've all heard about the massive waste of resources that's spearheaded by AI. Although I believe the level of waste from AI is blown out of proportion, I do believe that companies will have to temper their use of it. I believe that many of the tedious computational tasks will be overtaken by AI, such as developing large files of code. However, this still leaves places for the people who can design systems. With the proper design, it becomes increasingly easier to prompt AI agents properly and produce a good result.
            </p>
            <br />
            <h2>My Experience with AI</h2>
            <p>
                On personal projects, I've explored AI agents and prompting enough to get the hang of it. I worked with AI to develop my own <a href="https://mandelbaumtheo.org" target="_blank" rel="noopener noreferrer">website</a> and some of the projects listed there. What I've found is that these LLMs are so much better with small tasks than big ones. Before you begin your project, break it up into a list of steps. That way, you will have a better understanding of your own project, and it will be easier to prompt the LLM with each task. Along with that, there are many different prompting techniques, such as automatic prompting, prompt chaining and reflexion. If you've been using LLMs with no knowledge of these techniques, you've likely used some of them without realizing.
            </p>
            <p>
                The techniques listed above are exactly how I approached this blog project. I broke my project down into steps, starting with the setup of my react routing environment, next working on the header and footer for my html template, and finishing off with styling. By doing this, I was able to successfully build my app. The Claude LLM was also very helpful with troubleshooting my app deployment on DigitalOcean, as I lack some knowledge regarding subdomain systems.
            </p>
            <br />
            <h2>Nogramming Presentation</h2>
            <p>
                In this project, I'll be creating a creative task related to AI that doesn't involve code. Since code is forbidden, my mind immediately jumps to a physical model of some sort. Specifically, I would love to create a physical model of the components related to training and optimizing an LLM—pre-training, weights, fine-tuning, reinforcement learning, and model precision. This way, I could explore the building of AI without coding it.
            </p>
        </div>
    );
}

export default One; 