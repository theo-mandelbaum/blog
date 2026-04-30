import React from 'react';

function Fourteen() {
    return (
        <div className="blog-post">
            <h1>MCP Exploration</h1>
            <small>04-28-2026</small>
            <br />
            <p>
                Today, we're diving into MCP (model context protocol) servers. What is the value of MCP servers? What do MCP servers do that an LLM can't do already? What does model context protocol even mean? <br />
                These are some of the questions that I'll be finding the answer to today.
            </p>
            <br />
            <p>
                The purpose of an MCP server is to allow an LLM/AI application to gain specific capabilities through external tools. These capabilities are tasks that are impossible
                 for the LLM to accomplish on its own. To accomplish this task, the MCP server is comprised of three building blocks; <strong>tools</strong> enabling AI models to
                 perform actions, <strong>resources</strong> that provide read-only access to information for context, and <strong>prompts</strong> that tell the model to work with
                 specific tools and resources. The term <strong>model context protocol</strong> refers to the usage of these three building blocks that tell our model to run a protocol
                 in a specific context.
            </p>
            <br />
            <h2>Two actions that I want an MCP server to offer</h2>
            <p>
                1. Downloading and opening games
                2. Retrieve random facts from numbersapi.com
            </p>
            <br />
            <h2>I tried to download a game and open it using Clauce. Here's what the LLM told me:</h2>
            <p>
                Can you download and open the video game Bloody Hell for me?
                <br />
                Claude responded: I'm not able to download or open applications on your device — I can only run commands in my own sandboxed Linux container, which is separate from your compute…
                I'm not able to download or open applications on your device — I can only run commands in my own sandboxed Linux container, which is separate from your computer.
                <br />
                To get Bloody Hell, you'd need to find and install it yourself. Do you know which platform it's on (Steam, itch.io, etc.)? I can help you find it if you'd like.
            </p>
            <h2>Next, I tried to retrieve a random fact from numbersapi.com</h2>
            <p>
                Can you retrieve a random fact from numbersapi.com
                <br />
                Claude responded: Unfortunately, numbersapi.com isn't in my allowed domains list, so I can't reach it directly.
                 You can visit numbersapi.com yourself to get a random number fact — just click that link!
            </p>
            <br />
            <h2>The following code is what I used to implement the ability to download and open a game, given a url</h2>
            <pre><code>
                import subprocess<br />
                import zipfile<br />
                from pathlib import Path<br />

                import httpx<br />
                from mcp.server.fastmcp import FastMCP<br />

                mcp = FastMCP("game-launcher")<br />

                GAMES_DIR = Path.home() / "Games"<br />


                @mcp.tool()<br />
                async def download_game(url: str, name: str) -&gt; str:<br />
                    """Download and extract a game zip from a direct URL.<br />

                    Args:<br />
                        url: Direct download URL to a .zip file<br />
                        name: Folder name to extract into (e.g. 'bloody-hell')<br />
                    """<br />
                    dest = GAMES_DIR / name<br />
                    dest.mkdir(parents=True, exist_ok=True)<br />
                    zip_path = dest / "game.zip"<br />

                    async with httpx.AsyncClient(follow_redirects=True, timeout=120) as client:<br />
                        async with client.stream("GET", url) as response:<br />
                            response.raise_for_status()<br />
                            with open(zip_path, "wb") as f:<br />
                                async for chunk in response.aiter_bytes(8192):<br />
                                    f.write(chunk)<br />

                    with zipfile.ZipFile(zip_path) as z:<br />
                        z.extractall(dest)<br />
                    zip_path.unlink()<br />

                    contents = [p.name for p in dest.iterdir()]<br />
                    return f"Extracted to &#123;dest&#125;\nContents: &#123;', '.join(contents)&#125;"<br />


                @mcp.tool()<br />
                def launch_game(name: str, executable: str) -&gt; str:<br />
                    """Launch an executable inside a previously downloaded game folder.<br />

                    Args:<br />
                        name: Game folder name (must match the name used in download_game)<br />
                        executable: Relative path to the binary or .app inside the folder (e.g. 'BloodyHell.app' or 'BloodyHell.x86_64')<br />
                    """<br />
                    exe = GAMES_DIR / name / executable<br />

                    if not exe.exists():<br />
                        return f"Executable not found at &#123;exe&#125;. Check the game folder contents."<br />

                    if executable.endswith(".app"):<br />
                        subprocess.Popen(["open", str(exe)])<br />
                    else:<br />
                        exe.chmod(exe.stat().st_mode | 0o111)  # ensure executable bit is set<br />
                        subprocess.Popen([str(exe)])<br />

                    return f"Launched &#123;exe.name&#125;"<br />
            </code></pre>
            <br />
            <h2>Here is the implementation for retrieving random facts from numbersapi.com</h2>
            <pre><code>
                import httpx<br />
                from mcp.server.fastmcp import FastMCP<br />

                mcp = FastMCP("number-facts")<br />

                VALID_CATEGORIES = &#123;"trivia", "math", "date", "year"&#125;<br />


                @mcp.tool()<br />
                async def random_number_fact(category: str = "trivia", number: str = "random") -&gt; str:<br />
                    """Get a random fact from numbersapi.com.<br />

                    Args:<br />
                        category: Type of fact — 'trivia', 'math', 'date', or 'year' (default: 'trivia')<br />
                        number: A specific number, or 'random' for a random one (default: 'random')<br />
                    """<br />
                    if category not in VALID_CATEGORIES:<br />
                        return f"Invalid category '&#123;category&#125;'. Choose from: &#123;', '.join(sorted(VALID_CATEGORIES))&#125;"<br />

                    async with httpx.AsyncClient(timeout=10) as client:<br />
                        response = await client.get(f"http://numbersapi.com/&#123;number&#125;/&#123;category&#125;")<br />
                        response.raise_for_status()<br />
                        return response.text<br />
            </code></pre>
            <p>
                To connect this code to Claude, I added my python file to the current working directory in '~/.claude/mcp.json'.<br />
                 Connecting my code to Github Copilot was slightly different than connecting it to Claude. For Copilot, I
                 had to add my directory with a list of commands and the file name to Copilot's "servers". This opens up the
                 specified file when Copilot is opened.
            </p>
            <br />
            <h2>Claude's output for the video game</h2>
            <p>
                Download the game from "https://itchio-mirror.cb031a832f44726753d6267436f3b414.r2.cloudflarestorage.com/upload2/game/1507433/<br />
                7249893?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=3edfcce40115d057d0b5606758e7e9ee%2F20260430%2Fauto%2Fs3%2Faws4_request<br />
                &X-Amz-Date=20260430T193310Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=71c4c523c9f037f26694b216884dcfaeb4ae46ac7b9c947eccc36edc4add0369"<br />
                 and save it as bloody-hell<br />

                Launch the game in the bloody-hell folder — the executable is BloodyHell.app<br />

                Claude:
                The downloaded zip is a Windows-only build — it contains Bloody Hell.exe and related Windows/Unity files, but no BloodyHell.app Mac executable. There's no Mac version in this archive, so it can't be launched on macOS directly.
            </p>
            <h2>Copilot's output</h2>
            <p>
                Download the game from "https://itchio-mirror.cb031a832f44726753d6267436f3b414.r2.cloudflarestorage.com/upload2/game/1507433/<br />
                7249893?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=3edfcce40115d057d0b5606758e7e9ee%2F20260430%2Fauto%2Fs3%2Faws4_request<br />
                &X-Amz-Date=20260430T193310Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=71c4c523c9f037f26694b216884dcfaeb4ae46ac7b9c947eccc36edc4add0369"<br />
                 and save it as bloody-hell<br />

                Launch the game in the bloody-hell folder — the executable is BloodyHell.app<br />

                Copilot: 
                The game is a Windows executable (.exe) which can't run directly on macOS without a compatibility layer like Wine or Proton. However, I notice there's already a bloody-hell-folder in your workspace. Let me check if it has a different executable:
            </p>
            <br />
            <p>
                Unfortunately, I have Macbook and the installation is a windows .exe file. So, I can't run the game, but it sucessfully downloaded it for me!
            </p>
        </div>
    );
}

export default Fourteen;
