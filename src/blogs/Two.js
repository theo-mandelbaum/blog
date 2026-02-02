import React from 'react';

function Two() {
    return (
        <div className="blog-post">
            <h1>Fictional Interview and Chain of Thought Prompting</h1>
            <small>02-02-2026</small>
            <p>
                This week, I've been tasked with reading Addy Osmani's article, <a href="https://addyosmani.com/blog/next-two-years/" target="_blank" rel="noopener noreferrer">The Next Two Years of Software Engineering</a>. After reading, I am to make a fictional job interview dialog between a seasoned software engineer and an interviewee that is a about to graduate with a computer science degree. I'll be using many of the AI related ideas from Osmani's article to drive my fictional interview dialog. Along with that, I will be finding an LLM prompt that fails until I apply Chain of Thought techniques and sharing my findings.
            </p>
            <br />
            <h2>Fictional Job Interview</h2>
            <p>
                In this interview, I'll be giving names to the interviewer and the interviewee for the sake of simplification. The interviewer will be named James and the students name is Michael
            </p>
            <p>
                *Zoom call starts*
                <br />
                <b>James:</b> Hey Michael, how are you doing?
                <br />
                <b>Michael:</b> I'm doing great, how are you?
                <br />
                <b>James:</b> Good! You're actually my last interview of the day.
                <br />
                <b>Michael:</b> Well hopefully you saved the best for last, haha.
                <br />
                <b>James:</b> I hope so! Let's get started. The first question here is going to be a basic distinction between data structures. Explain the difference between a stack and a queue.
                <br />
                <b>Michael:</b> Alright. A queue is a data structure that stores and accesses information following the FIFO principle, which means first in first out. Meanwhile, a stack stores information following the LIFO principle, meaning last in first out. The difference in the way that these data structures store data allows for them to be useful in different algorithms. For example, a queue is used when creating the algorithm for breadth-first search, while a stack is used for depth-first search.
                <br />
                <b>James:</b> Right, so how would you implement a queue using two stacks?
                <br />
                <b>Michael:</b> I've never actually solved this problem, so I can't tell you exactly how to do it. However, I know that it has something to do with using two stacks to effectively reverse the order of the data inputs.
                <br />
                <b>James:</b> You're actually on the right track here with the reversal idea. I appreciate that you're honest about not knowing, I'd rather hear you talk through your thinking than pretend to know something. That said, let's move on.<br />
                At our company, we are integrating the use of AI for many of the smaller technical tasks. For the reason, we value knowledge and instincts surrounding software arechitecture. So, explain how you would choose between a relational database and non-relational database for a system.
                <br />
                <b>Michael:</b> I'm glad that you guys are implementing AI! I've done my own experimenting with AI tools and have found them extremely useful for my own projects. In terms of relational vs. non-relational databases, the first aspect of my system that I look at is how coupled the data is for said system, as a database with tightly couple attributes would likely require a relational database. Secondly, I look at the size of the system's required database, because a large database may lend itself to a non-relational database.
                <br />
                <b>James:</b> Good, I like that you mention coupling. Coupling is a very important topic when it comes to designing systems. To stay on AI, how do you see AI changing the role of software engineers or similar roles?
                <br />
                <b>Michael:</b> I think AI is going to take over a lot of the tedious work that engineers do, like writing boilerplate code or debugging simple issues. Where I don't think AI can take over is the design and architecture portion of engineering. Just like we were talking about with databases, someone still needs to understand the system well enough to tell the AI what to build. From my own experience, AI is great when you give it a clear, small task, but it struggles when you throw a vague, large problem at it. So, I think the engineers who can break down problems and review AI's code for optimization will thrive.
                <br />
                <b>James:</b> I agree with that. That's actually why we've been shifting our interview process to focus more on system design than coding puzzles. Alright Michael, that's all I have for you today. Do you have any questions for me?
                <br />
                <b>Michael:</b> Yeah, what's your favorite part about working at the company?
                <br />
                <b>James:</b> Honestly, the team. Everyone here is willing to help each other out, and that makes a big difference when you're working on tough problems. Alright, well it was great talking to you Michael. We'll be in touch soon.
                <br />
                <b>Michael:</b> Sounds good, thanks for your time James. Have a good one!
                <br />
                *Zoom call ends*
            </p>
            <h2>Chain of Thought Prompting</h2>
            <p>
                In this transcript, I ask Claude to solve a problem regarding class scheduling. It fails to get an answer that matches my requirements until I provide further questioning.
                <br />
                Me: I have 52 credits remaining and must graduate in three semesters. Courses have prerequisites, limited semester availability, and fixed meeting times. I must complete minimum category requirements (upper-division, labs, writing). I can only attend classes starting after 12 pm on MWF and ending before 2 pm on TuTh. I must work at least 6 hours per week in contiguous blocks, with at least one work-only weekday. Minimize days on campus and avoid more than 3 consecutive class hours.
                <br />
                LLM: I'd be happy to help you create an optimized course schedule, but I need more specific information to work with. The constraints you've described create a complex optimization problem, and the solution depends heavily on your specific situation.
                <br />
                Here's what I need from you:
                <br />
                Required Information
                <br />
                1. Degree Requirements
                - What's your major/program?
                - How many credits are required to graduate?
                - What specific category minimums do you need? (e.g., "6 credits upper-division," "2 lab courses," "1 writing-intensive")
                <br />
                2. Course Catalog
                - What courses are available to you?
                - For each course: credits, prerequisites, which semesters it's offered, and meeting times
                - Which requirements does each course satisfy?
                <br />
                3. Your Current Status
                - Which prerequisites have you already completed?
                - How many credits in each category have you already earned?
                <br />
                To Clarify Your Constraints
                <br />
                Your time restrictions as I understand them:
                - MWF: Classes must start at 12 pm or later
                - TuTh: Classes must end before 2 pm (so they need to start early enough to finish by 2 pm)
                - Work: Minimum 6 hours/week in contiguous blocks, with at least one full weekday reserved for work only
                - Goals: Minimize days on campus, no more than 3 consecutive hours of class
                <br />
                Once you provide the course list and requirements, I can help you map out a three-semester plan that satisfies all constraints while minimizing your time on campus.
                <br />
                ---
                <br />
                Me: I have 52 credits remaining and must graduate in three semesters. Among these credits, I have three required courses with prerequisites. Each one must be taken after the other. Let's call them courses A, B, and C. So, course A must be taken before B, and B must be taken before C. Start by placing A in my first semester of the 3, then B in the following semester, and C in the final semester. I also have limited semester availability and fixed meeting times. I must complete minimum category requirements (upper-division, labs, writing). I can only attend classes starting after 12 pm on MWF and ending before 2 pm on TuTh. I must work at least 6 hours per week in contiguous blocks, with at least one work-only weekday. Minimize days on campus and avoid more than 3 consecutive class hours. The easiest way to isolate one day for work is by having no Friday classes. For each semester, block off friday as a no class, only work day. That way, I will have 75 minute classes ONLY on some combination of Monday, Tuesday, Wednesday and Thursday.
                <br />
                LLM: This is a good framework. Let me summarize what we've established and identify what's still needed.
                <br />
                Confirmed Structure
                <br />
                Semester 1: Course A
                Semester 2: Course B
                Semester 3: Course C
                <br />
                Weekly Schedule Framework (each semester):
                - Monday, Wednesday: Classes starting at 12 pm or later (75-minute blocks)
                - Tuesday, Thursday: Classes ending before 2 pm (75-minute blocks)
                - Friday: Reserved for work only (no classes)
                <br />
                Time Slot Analysis
                <br />
                With 75-minute classes:
                <br />
                Monday/Wednesday options (must start at or after 12 pm):
                - 12:00-1:15 pm
                - 1:30-2:45 pm
                - 3:00-4:15 pm
                - etc.
                <br />
                Tuesday/Thursday options (must end before 2 pm):
                - 8:00-9:15 am
                - 9:30-10:45 am
                - 11:00 am-12:15 pm
                - 12:30-1:45 pm (this is the latest possible)
                <br />
                Still Needed
                <br />
                To build your actual schedule, I need:
                <br />
                1. Course details for A, B, and C - When are they offered? What times?
                2. Remaining 52 credits breakdown - How many credits are A, B, and C? What other courses must you take?
                3. Category requirements - How many upper-division, lab, and writing credits do you still need?
                4. Available electives/requirements - What courses can fill the remaining slots, and when do they meet?
                <br />
                Once you provide the course catalog or list of options, I can build out a three-semester plan that minimizes your days on campus while avoiding more than 3 consecutive class hours.
                <br />
                ---
                <br />
                Me: Here is a course catalog. With this catalog, please create a semester by semester schedule that fits all of the constraints provided above:
                <br />
                COURSE A - Foundations of Systems
                * 4 credits
                * MW 12:00-1:15
                * Fall Only
                * Prerequisite: none
                <br />
                COURSE B - Intermediate Systems Design
                * 4 credits (UD, W)
                * TuTh 12:30-1:45
                * Spring Only
                * Prerequisite: COURSE A
                <br />
                COURSE C - Advanced Systems Capstone
                * 4 credits (UD, W)
                * MW 12:00-1:15
                * Fall Only
                * Prerequisite: COURSE B
                <br />
                Lab Courses
                <br />
                LAB 210 - Computational Lab I
                * 3 credits (LAB)
                * Tu 9:30-10:45
                * Fall and Spring
                <br />
                LAB 310 - Computational Lab II
                * 3 credits (LAB, UD)
                * Th 9:30-10:45
                * Spring Only
                * Prerequisite: LAB 210
                <br />
                LAB 410 - Applied Systems Lab
                * 3 credits (LAB, UD)
                * Tu 12:30-1:45
                * Fall Only
                * Prerequisite: LAB 310
                <br />
                Writing and Theory Courses
                <br />
                WRIT 220 - Technical Communication
                * 3 credits (W)
                * TuTh 11:00-12:15
                * Fall and Spring
                <br />
                PHIL 330 - Ethics of Technology
                * 3 credits (UD, W)
                * MW 1:30-2:45
                * Fall Only
                <br />
                HIST 305 - History of Computing
                * 3 credits (UD, W)
                * TuTh 10:00-11:15
                * Spring Only
                <br />
                Core and Electives
                <br />
                STAT 240 - Applied Statistics
                * 4 credits
                * TuTh 8:30-9:45
                * Fall and Spring
                <br />
                CS 260 - Human-Centered Computing
                * 3 credits
                * MW 1:30-2:45
                * Spring Only
                <br />
                CS 340 - Software Architecture
                * 4 credits (UD)
                * TuTh 12:30-1:45
                * Fall Only
                <br />
                CS 360 - Distributed Applications
                * 4 credits (UD)
                * MW 12:00-1:15
                * Spring Only
                <br />
                LLM: Looking at this catalog, I need to map out a three-semester plan. Let me work through the constraints systematically.
                <br />
                Key Constraints Recap
                <br />
                - 52 credits needed over 3 semesters (~17-18 per semester)
                - Fridays: No classes (work day)
                - MW: Classes must start at or after 12 pm
                - TuTh: Classes must end before 2 pm
                - No more than 3 consecutive class hours
                - Must complete: Course A, then B, then C sequence
                - Category minimums needed: Upper-division, Labs, Writing (you haven't specified exact numbers, so I'll maximize coverage)
                <br />
                Semester Sequence
                <br />
                Since Course A and C are Fall only, and Course B is Spring only:
                - Semester 1: Fall (Course A)
                - Semester 2: Spring (Course B)
                - Semester 3: Fall (Course C)
                <br />
                ---
                <br />
                Semester 1 - Fall
                <br />
                Day: MW, Time: 12:00-1:15, Course: Course A, Credits: 4, Categories: -
                Day: MW, Time: 1:30-2:45, Course: PHIL 330, Credits: 3, Categories: UD, W
                Day: Tu, Time: 9:30-10:45, Course: LAB 210, Credits: 3, Categories: LAB
                Day: TuTh, Time: 11:00-12:15, Course: WRIT 220, Credits: 3, Categories: W
                Day: TuTh, Time: 12:30-1:45, Course: CS 340, Credits: 4, Categories: UD
                <br />
                Total: 17 credits
                Categories earned: 2 Writing, 2 Upper-Division, 1 Lab
                <br />
                Schedule check:
                - MW: 12:00-2:45 (2.75 hours consecutive) - OK
                - Tu: 9:30-10:45, then 11:00-1:45 = 9:30-1:45 with a 15-min gap. That's roughly 4 hours on campus but only 3.25 hours of class (with a break). Consecutive class hours: 11:00-1:45 is 2.75 hours - OK
                - Thursday: 11:00-1:45 = 2.75 hours - OK
                <br />
                Total: 17 credits - OK
                <br />
                ---
                <br />
                Semester 2 - Spring
                <br />
                Day: TuTh, Time: 12:30-1:45, Course: Course B, Credits: 4, Categories: UD, W
                Day: MW, Time: 12:00-1:15, Course: CS 360, Credits: 4, Categories: UD
                Day: MW, Time: 1:30-2:45, Course: CS 260, Credits: 3, Categories: -
                Day: Th, Time: 9:30-10:45, Course: LAB 310, Credits: 3, Categories: LAB, UD
                Day: TuTh, Time: 11:00-12:15, Course: WRIT 220, Credits: 3, Categories: W
                <br />
                Thursday: 9:30-10:45, 11:00-12:15, 12:30-1:45 = 9:30-1:45 with two 15-min gaps. Consecutive blocks: 1.25 + 1.25 + 1.25 hours with breaks - OK
                <br />
                Tuesday: 11:00-12:15, 12:30-1:45 = 2.75 hours - OK
                <br />
                Total: 17 credits - OK
                <br />
                But wait - I already used WRIT 220 in Semester 1. Let me revise.
                <br />
                Final Semester 2:
                <br />
                Day: TuTh, Time: 12:30-1:45, Course: Course B, Credits: 4, Categories: UD, W
                Day: MW, Time: 12:00-1:15, Course: CS 360, Credits: 4, Categories: UD
                Day: MW, Time: 1:30-2:45, Course: CS 260, Credits: 3, Categories: -
                Day: Th, Time: 9:30-10:45, Course: LAB 310, Credits: 3, Categories: LAB, UD
                <br />
                Total: 14 credits
                <br />
                ---
                <br />
                Semester 3 - Fall
                <br />
                Remaining: 52 - 17 - 14 = 21 credits needed
                <br />
                Available untaken courses:
                - Course C (4, UD, W) - required
                - LAB 410 (3, LAB, UD)
                - STAT 240 (4)
                <br />
                Day: MW, Time: 12:00-1:15, Course: Course C, Credits: 4, Categories: UD, W
                Day: Tu, Time: 12:30-1:45, Course: LAB 410, Credits: 3, Categories: LAB, UD
                Day: TuTh, Time: 8:30-9:45, Course: STAT 240, Credits: 4, Categories: -
                <br />
                Total: 11 credits
                <br />
                I need 21, but only 11 available. The catalog is insufficient.
                <br />
                ---
                <br />
                Problem Identified
                <br />
                The course catalog doesn't provide enough courses to reach 52 credits while satisfying all constraints. Let me total what's available:
                <br />
                Course A: 4 credits
                Course B: 4 credits
                Course C: 4 credits
                LAB 210: 3 credits
                LAB 310: 3 credits
                LAB 410: 3 credits
                WRIT 220: 3 credits
                PHIL 330: 3 credits
                HIST 305: 3 credits
                STAT 240: 4 credits
                CS 260: 3 credits
                CS 340: 4 credits
                CS 360: 4 credits
                Total: 45 credits
                <br />
                The catalog only offers 45 credits, but you need 52. You'll need 7 additional credits from courses not listed.
                <br />
                ---
                <br />
                Optimized Schedule (with available courses)
                <br />
                Semester 1 - Fall (17 credits)
                <br />
                Day: MW, Time: 12:00-1:15, Course: Course A, Credits: 4, Categories: -
                Day: MW, Time: 1:30-2:45, Course: PHIL 330, Credits: 3, Categories: UD, W
                Day: Tu, Time: 9:30-10:45, Course: LAB 210, Credits: 3, Categories: LAB
                Day: TuTh, Time: 11:00-12:15, Course: WRIT 220, Credits: 3, Categories: W
                Day: TuTh, Time: 12:30-1:45, Course: CS 340, Credits: 4, Categories: UD
                <br />
                - Days on campus: M, Tu, W, Th (4 days)
                - Friday: Work only - OK
                - Consecutive hours: MW 2.75 hrs OK, Tu 9:30-1:45 with breaks OK, Th 2.75 hrs OK
                <br />
                ---
                <br />
                Semester 2 - Spring (17 credits)
                <br />
                Day: MW, Time: 12:00-1:15, Course: CS 360, Credits: 4, Categories: UD
                Day: MW, Time: 1:30-2:45, Course: CS 260, Credits: 3, Categories: -
                Day: TuTh, Time: 8:30-9:45, Course: STAT 240, Credits: 4, Categories: -
                Day: TuTh, Time: 10:00-11:15, Course: HIST 305, Credits: 3, Categories: UD, W
                Day: TuTh, Time: 12:30-1:45, Course: Course B, Credits: 4, Categories: UD, W
                <br />
                Wait - HIST 305 is 10:00-11:15, not 11:00-12:15. Let me check for conflicts.
                <br />
                Thursday conflict: LAB 310 (9:30-10:45) and HIST 305 (10:00-11:15) overlap.
                <br />
                I need to sacrifice either STAT 240 or LAB 310. Since LAB 310 is required for LAB 410, I'll drop STAT 240:
                <br />
                Final Semester 2:
                <br />
                Day: MW, Time: 12:00-1:15, Course: CS 360, Credits: 4, Categories: UD
                Day: MW, Time: 1:30-2:45, Course: CS 260, Credits: 3, Categories: -
                Day: Th, Time: 9:30-10:45, Course: LAB 310, Credits: 3, Categories: LAB, UD
                Day: TuTh, Time: 11:00-12:15, Course: WRIT 220, Credits: 3, Categories: W
                Day: TuTh, Time: 12:30-1:45, Course: Course B, Credits: 4, Categories: UD, W
                <br />
                Thursday: 9:30-10:45, 11:00-12:15, 12:30-1:45 = three blocks with 15-min gaps. OK
                <br />
                Total: 17 credits - OK
                <br />
                But I used WRIT 220 - I hadn't taken it in Semester 1 in this revision. OK
                <br />
                ---
                <br />
                Revised Complete Schedule
                <br />
                Semester 1 - Fall (14 credits)
                <br />
                Day: MW, Time: 12:00-1:15, Course: Course A, Credits: 4, Categories: -
                Day: MW, Time: 1:30-2:45, Course: PHIL 330, Credits: 3, Categories: UD, W
                Day: Tu, Time: 9:30-10:45, Course: LAB 210, Credits: 3, Categories: LAB
                Day: TuTh, Time: 12:30-1:45, Course: CS 340, Credits: 4, Categories: UD
                <br />
                Total: 14 credits
                <br />
                ---
                <br />
                Semester 2 - Spring (17 credits)
                <br />
                Day: MW, Time: 12:00-1:15, Course: CS 360, Credits: 4, Categories: UD
                Day: MW, Time: 1:30-2:45, Course: CS 260, Credits: 3, Categories: -
                Day: Th, Time: 9:30-10:45, Course: LAB 310, Credits: 3, Categories: LAB, UD
                Day: TuTh, Time: 11:00-12:15, Course: WRIT 220, Credits: 3, Categories: W
                Day: TuTh, Time: 12:30-1:45, Course: Course B, Credits: 4, Categories: UD, W
                <br />
                Total: 17 credits - OK
                <br />
                ---
                <br />
                Semester 3 - Fall
                <br />
                Available untaken courses: Course C, LAB 410, STAT 240 = 11 credits
                <br />
                Day: MW, Time: 12:00-1:15, Course: Course C, Credits: 4, Categories: UD, W
                Day: Tu, Time: 12:30-1:45, Course: LAB 410, Credits: 3, Categories: LAB, UD
                Day: TuTh, Time: 8:30-9:45, Course: STAT 240, Credits: 4, Categories: -
                <br />
                Achievable total: 45 credits
                <br />
                ---
                <br />
                Summary
                <br />
                You need 7 additional credits from courses not in this catalog. The constraints and course availability create conflicts that prevent completing all lab prerequisites while maximizing credits.
                <br />
                Recommendation: Consult your advisor about additional course options that meet your time constraints (MW at or after 12pm, TuTh ending before 2pm, no Fridays) to fill the remaining 7 credits.
                <br />
                Would you like me to adjust any priorities (e.g., skip the lab sequence to fit more credits elsewhere)?
                <br />
                ---
                <br />
                Me: You're assuming that my semesters begin in the fall. They begin in the spring. Does that make it possible
                <br />
                LLM: Yes, that changes everything! Let me rework this.
                <br />
                Revised Semester Sequence
                <br />
                - Semester 1: Spring (Course B's prerequisite Course A must already be done... wait, that's a problem)
                <br />
                Actually, this creates a prerequisite issue:
                <br />
                - Course A (Fall only) then Course B (Spring only) then Course C (Fall only)
                <br />
                If you start in Spring, you can't take Course A until the following Fall. Let me re-examine:
                <br />
                - Semester 1 - Spring: Cannot take Course A (Fall only)
                - Semester 2 - Fall: Take Course A
                - Semester 3 - Spring: Take Course B
                <br />
                But then Course C (Fall only) can't be taken until a 4th semester.
                <br />
                This sequence is impossible in 3 semesters starting in Spring.
                <br />
                Unless - have you already completed Course A? If so:
                <br />
                - Semester 1 - Spring: Course B
                - Semester 2 - Fall: Course C
                - Semester 3 - Spring: Remaining courses
                <br />
                Does that match your situation? If you've already taken Course A, this works perfectly and actually opens up the schedule significantly. Please confirm and I'll build out the full plan.
            </p>
        </div>
    );
}

export default Two;