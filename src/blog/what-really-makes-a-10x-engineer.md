---
title: What Really Makes a 10x Engineer
author: charles-max-wood
date: 2019-07-16 8:00:00
image: /images/uploads/unicorn.jpg
tags:
  - blog
  - 10x-engineer
  - productivity
  - leadership
  - teams
---
A while back, there was a tweet that caused a splash stating that startup founders should hire "10x engineers" and then listed 11 ways to find them.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">10x engineers<br><br>Founders if you ever come across this rare breed of engineers, grab them. If you have a 10x engineer as part of your first few engineers, you increase the odds of your startup success significantly.<br><br>OK, here is a tough question.<br><br>How do you spot a 10x engineer?</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302828420067328?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There was blowback on both the ideas of there being a "10x engineer" and the ideas on how you find them. To these two points, I have to state that measuring developer performance is extremely difficult, but I do believe that there are "10x engineers". That said, the criteria put forward by the follow up tweets are almost entirely garbage.

So, what *is* a "10x engineer"?

In the tweets, Kirani doesn't specify this. So, let's assume that the engineer is 10x more productive than the average developer.

Now, before you freak out over this definition, I need to clarify.

I measure output as a team or group output, not as much an individual output. So, a "10x engineer" in my mind is someone who causes the team's output to increase by 10x what it would have increased by if the company had hired someone else.

Obviously you can't actually know the results of decisions you don't make, but let's run with this for a moment.

The ways you identify "10x engineers" changes drastically from the list posited on Twitter.

Here are my 11 ways to identify "10x engineers".

## 1. 10x Engineers are Excellent Communicators

My brother and cousin are studying Computer Science in college. They've both asked me what skills are most important for developers. I'm assuming they're expecting that I'll mention algorithms or techniques. My answer for the last few years is "Your ability to work with other people."

Sometimes we see prototypes or simple apps being built by a single developer. This is in line with the Sekhar Kirani tweet. He thinks that a 10x developer is the one who will generate a prototype in 3 days. He ignores that in the long term, that code will likely grow into a full-scale app and the programmer who wrote it will have to explain it to other developers.n

However, when you think about applications that encapsulate any level of complexity, you're very likely going to need more than one person to build it.

The ability to communicate about problems, coach people through integrating with the API's you just built, or help someone get unstuck is critical. Plus, if you can remove enough blockers to double someone else's productivity, that makes you a 2x engineer, even though they're doing the work.

## 2. 10x Engineers are Consistent Learners

All the people I've looked up to over my career---the ones I considered to be "10x engineers"---loved to code. They were constantly wanting to learn new things and explore better ways to build software.

In a lot of ways, that's how Ruby Rogues stared, which scaled up into Devchat.tv. There was a group of us who knew each other from attending conferences, blogging, and podcasting. We were learning from each other and started a show to facilitate that for the community.

If you're looking for a "10x engineer", ask them what they've been learning and what they've been working on in their spare time. Most of them will be able to mention a book, video course, conference talk, or podcast episode they've latched onto and have spent time leveling up on.

This aligns with point #8 on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">8. 10x engineers are always learning new frameworks, languages ahead of everyone in the company. They are not afraid of anything new. If there is something new (e.g. blockchain) they gobble up, setup, experiment before anyone is getting started.</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302844291338240?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 3. 10x Engineers' Code is Easy to Understand

Mindful software developers recognize that some of the efficiency of their work is going to manifest in the future. They know that their code is likely to change. Either new functionality is going to need to be added to it, or circumstances may cause the problem to require a different kind of solution.

Maintainable code is generally easy to read code. If you can read through the code and quickly recognize what everything does and where to find the implementation, then you can change it and be confident that your changes are the right ones in the right place.

In other words, some of the 10x may happen when someone else saves a day or two reacquainting themselves with that part of the code because it's easy to understand. Your "10x engineer" may look like an 8x engineer until you encounter this.

This point mostly contradicts point 4 in Kirani's list:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">4. 10x engineers know every line of the code that has gone into production. If a QA or support folks alert an issue, they know precisely where the fault (or bug) is and can fix the same in hours vs days</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302836808704001?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 4. 10x Engineers Write Tests

Did your head explode? Keep reading...

As stated in point #3, a "10x engineer" knows that the code will need to change. In smaller projects, you can often hold a lot of the implementation details in your head. And, if you're consistently working in that codebase, you'll be able to remember most of it.

But, once your project becomes larger and more complicated, you begin to make assumptions about how other parts of the system work. Most of the time you can keep track of the broad strokes of the application, and some implementation details of things you spent lots of time on or worked on recently. However, even then, it's easier to check that your assumptions about what the code does and where its used are correct if you have code you can run that verifies it.

Furthermore, even if you can remember how everything works, if you have teammates, they won't know the details of everything you've done. Tests help alleviate this problem.

This also contradicts point 4 in Kirani's list.

## 5. 10x Engineers are Good Googlers

I've only met one person who demonstrated an encyclopedic knowledge of a programming language or framework. James Edward Gray II seemed to know all the nooks and crannies of Ruby. I can't tell you how many times someone would mention something on the podcast and James would give them an elegant way of doing what they hacked together that was already built into the language.

For the rest of the "10x engineers" I've worked with or known, they've gotten really good at finding the answers to the questions they have. Most of the time, this is a mixture of knowing what terms to type into Google and then how to quickly identify the Stack Overflow posts, libraries, or github repositories that get them closer to the answer.

They know many of the commonly used means of solving problems, but that's like knowing how to use a hammer because you've spent a bunch of time framing houses. When you need to fix the electrical though, you're watching Youtube videos before opening up the outlet cover like every other home-tinkerer.

This directly contradicts Kirani's point 7:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">7. 10x engineers rarely look at help documentation of classes or methods. They know it in memory and can recall from memory. They write code at the same ease as writing English. No breaks, no pauce, just type.</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302842504540165?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 6. "10x engineer"s Pick a Niche and Fill It

The reason you hire "10x engineers" is because they're good at something. They reason you hire 1x-2x engineers is because you see the potential in them to become "10x engineers".

Software has become complex enough that you often, now, need several types of expertise to build your application. Whether it's a mobile app with a custom build backend, or a Single-Page App that relies on cloud services for data and hosting, you're going to need people with each type of expertise.

You're also going to need the generalist or Full-Stack developer to help you pull it all together.

The engineer you want to hire as a "10x engineer" knows what problems he or she is good at solving, spends time honing those skills, and will quickly identify for you whether or not they can do the job you're hiring them for.

Many of your "10x engineers" will be specialists in a particular framework, technology, or skill set.

This contradicts point #5 in Kirani's list.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">5. Most of the 10x engineers are full-stack engineers. For them code is code, they don&#39;t care whether it is front-end, back-end, API, database, serverless, etc. I have rarely seen them doing UI work.</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302838746464256?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 7. 10x Engineers are Good Mentors

No engineer exists that can get to 10x without augmenting their teammates. Sure, programmers with 25 years experience will likely be ten times more productive than programmers just getting started. But when measured against the average coder, they won't be 10x more productive unless 4x of the 10x is bringing other members of the team up.

People talk about the insular genius coder, but every time I've seen teams with this person on them or worked with this person, the rest of the team wound up compensating for them and the cost to the team outweighed the output of that individual. In other words, they delivered 10x and cost the rest of their team 12x.

The "10x engineer" recognizes that bringing the competency and morale of the team up will result in a better work environment and better output from the team at large.

This doesn't mean that they don't work alone sometimes, but the recognize the value of leveling up the rest of their team.

This contradicts Kirani's point #9:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">9. 10x engineers are poor mentors as they can&#39;t teach others on what to do OR parcel the work. They always think &quot;It takes too long to teach or discuss with others, I would rather do it myself.&quot; They are also poor interviewers.</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302845990031365?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 8. 10x Engineers Align with the Company's Mission, Vision, Values, and Culture

Does this mean that different companies will have different people manifest as "10x engineers" in their organization?

**YES!**

Most people thrive and do better work when they are working on something they believe in. They also work better when they can easily slide into and out of flow on their own and with the rest of the company.

This leads to two conclusions. 

First, someone who fits in with what the company is about and the principles and practices used to get there will thrive in that environment. They may get a 2x lift just from the inspiration and alignment they get at work. 

Second, people who don't fit in this way will interrupt everyone else's flow with behaviors that don't match up.

This doesn't mean people in the second scenario are doing anything wrong per se. What it means is that they'd probably do better finding an organization that better fits who they are and the company would be better off without them.

## 9. 10x Engineers Write Code in their Spare Time

Most of the developers I've worked with who were top end engineers wrote open source code or experimented with code in their spare time. They couldn't really help it. They just had to try new things out and see how they worked.

That said, I have worked with a few that due to personal circumstances really couldn't do this. But they wanted to.

The really passionate ones, though will have a side project or two that they're working on most of the time. You can find these projects by looking them up on Github or by asking them what they're working on in their spare time.

This is one question that I almost always get an interesting answer to.

This also aligns with point #8 on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">8. 10x engineers are always learning new frameworks, languages ahead of everyone in the company. They are not afraid of anything new. If there is something new (e.g. blockchain) they gobble up, setup, experiment before anyone is getting started.</p>&mdash; Shekhar Kirani (@skirani) <a href="https://twitter.com/skirani/status/1149302844291338240?ref_src=twsrc%5Etfw">July 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 10. 10x Engineers Like Working with 10x Engineers

While the best engineers I've worked with have been great mentors, they also like being pushed by people who are at their level. They enjoy learning from people who have experience different from theirs. In many cases, you'll see them attending or speaking at conferences to widen the breadth of people they can associate with.

They also tend to form associations in Users' Groups, meetups, etc. with other top notch engineers. If you want to hire a number of "10x engineers" find one and make their job into a dream job. Then ask them who they know that might be looking. They know who to bring in next to solve your business problems.

## 11. 10x Engineers Identify Problems and Propose Solutions

Most developers can hunker down and write code to get the job done. The programmers that I've worked with that made the biggest difference for both the company and the team were the ones that recognized issues in the way the team worked, the codebase, or the company and worked to alleviate them.

They're the ones who are proposing the most strongly the adoption of meaningful automation, trying new techniques for team interactions, and working behind the scenes to make meetings take less time and achieve more when in progress. 

"10x engineers" recognize that programming is much more than just writing code.
