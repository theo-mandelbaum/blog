import React from 'react';

function Ten() {
    return (
        <div className="blog-post">
            <h1>Endre Szakal's Visit and LLM Tool Use</h1>
            <small>03-29-2026</small>
            <p>
                This past week, <a href='https://www.linkedin.com/in/cassidoo/' target="_blank" rel="noopener noreferrer">Cassidy Williams</a>, a Senior Director of Developer Advocacy at Github
                 visit our class. From her visit, I learned a lot about how AI can be beneficial and how AI can be negative. The conclusion is that we shouldn't
                 avoid AI just because of the negative outcomes, because the pros outweight the cons. There are many things that we can do to mitigate the
                 downsides of using AI. It's important to make sure that you check over the code that AI writes for you and verify that it is cohesive and maintainable.
            </p>
            <br />
            <h2>Two Resources on Dynamic Tool Use</h2>
            <p>
                https://www.langchain.com/
                Build systems faster while tracking your system's metrics, infrastructure and security.
            </p>
            <p>
                https://claude.ai/
                Takes advantage of MCP functionality through external server connections.
            </p>
            <br />
            <h2>A Fictional MCP Chat Session</h2>
            <p>
                Me: Hey LLM!
                LLM: Hello Theo
                Me: Today, I'm looking to build a similar product to Google Maps, using the Maps API and large sets of location data.
                LLM: I can help you do that; as an MCP tool I have access to all of those external resources.
                Me: Sweet, give me some boilerplate code for a map of Harrisonburg Virginia. I need something to start with.
                LLM: Here you go. Would you like me to add the Maps API to your program to implement shortest path and other algorithms to your code?
                Me: Yes, please add that.
                LLM: I've added all routing algorithms that are necessary for basic functions of a GPS app by pulling from the Google 
                maps API.
                Me: Looks great, could you now add the street names and locations using geo data files of Harrisonburg, available online?
                LLM: Of course I can do that. Would you like me to include the owners and residents of each house in the city? That information is also accessible through my data 
                tools.
                Me: It's pretty creepy that you can access personal information about who lives in those houses. Please don't add that to my system.
                LLM: Ok, I'll just at the street networks along with corresponding addresses.
            </p>
            <br />
            <h2>Nogramming Assignment Progress</h2>
            <p>
                I will continue building my LLM physically.
            </p>
        </div>
    );
}

export default Ten;
