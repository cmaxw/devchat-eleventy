---
layout: layouts/post.njk
title: >
  JSJ 336: “The Origin of ESLint” with Nicholas Zakas
date: 2018-10-23 10:00:10
episode_number: 336
duration: 1:08:01
audio_url: https://media.devchat.tv/js-jabber/JSJ_336_The_Origin_of_ESLint_with_Nicholas_Zakas.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

**Panel:**

- [Aimee Knight](https://www.aimeemarieknight.com)
- [Charles Max Wood](https://twitter.com/cmaxw?lang=en) (DevChat TV)
- [Christopher Ferdinandi (Boston)](https://2013.boston.wordcamp.org/speakers/)
- [Cory House (Kansas City)](https://twitter.com/housecor)
- [Joe Eames](https://twitter.com/josepheames)

**Special Guests:** [Nicholas Zakas](https://twitter.com/slicknet)

In this episode, the panel talks with [Nicholas Zakas](https://twitter.com/slicknet) who writes on his site, Human Who Codes. He is the creator of [ESLint](https://twitter.com/geteslint), also the author of several books, and he blogs, too. He was employed through Box and today he talks about ESLint in full detail! Check it out!&nbsp;

**Show Topics:**

0:05 – [Advertisement: KENDO UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

0:37 – Hello! The panel is...(Chuck introduces everyone).

1:04 – Nicholas who are you?

1:17 – Nicholas: Yeah it’s been about 5 years and then you invited me again, but I couldn’t come on to talk about ESLint back then. That’s probably what people know me most for at this point. I created ESLint and I kicked that off and now a great team of people is maintaining it.

1:58 – Chuck: What is it?

2:04 – It’s a Linter for JavaScript. It falls into the same category as JSLint. The purpose of ESLint is to help you find problems with your code. It has grown quite a bit since I’ve created it. It can help with bugs and enforcing style guides and other things.

2:53 – Where did it come from?

2:57 – Guest: The idea popped into my head when I worked at Pop. One of my teammates was working on a bug and at that time we were using...

Nothing was working and after investigating someone had written a JavaScript code that was using a native code to make an Ajax request. It wasn’t the best practice for the company at the time. For whatever reason the person was unaware of that. When using that native XML...there was a little bit of trickiness to it because it was a wrapper around the...

We used a library to work around those situations and add a line (a Linter) for all JavaScript files. It was a text file and when you tried to render code through the process it would run and run the normal expression and it would fail if any of the...matched.

I am not comfortable using normal expressions to write code for this. You could be matching in side of a string and it’s not a good way to be checking code for problems. I wanted to find a better way.

6:04 – Why did you choose to create a product vs. using other options out there?

6:15 – Guest: Both of those weren’t around. JSHint was pretty much the defector tool that everyone was using. My first thought was if JSHint could help with this problem?

I went back to look at JSHint and I saw that on their roadmap you could create your own rules, and I thought that’s what we need. Why would I build something new? I didn’t see anything on GitHub and didn’t see the status of that. I wanted to see what the plan was, and they weren’t going to get to it. I said that I really needed this tool and I thought it would be helpful to others, too.

8:04 – My history was only back when it was customizable.

8:13 – Aimee: It’s interesting to see that they are basing it on regular expressions.

8:32 – Guest: Interesting thing at Box was that there was...I am not sure but one of the engineers at Box wrote...

9:03 – Aimee: I was going to ask in your opinion what do you think ES Lint is the standard now?

9:16 – Guest: How easy it is to plug things in. That was always my goal because I wanted the tool not to be boxed in – in anyway.

_The guest continues to talk about how pluggable ESLint is and the other features of this tool._

13:41 – One thing I like about ESLint is that it can be an educational tool for a team. Did you see that being an educational tool?

14:24 – Guest: How do you start introducing new things to a team that is running at full capacity? That is something that I’ve wondered throughout my career. As a result of that, I found that a new team there were some problems I the code base that were really hard to get resolved, because when one person recognizes it there isn’t a god way to share that information within a team in a non-confrontational way. It’s better to get angry at a tool rather than a person.

_Guest goes into what this can teach people._

18:07 – Panelist: I am not surprised. Is there a best practice to get a team to start with ESLint?

Do you get the whole team in a room and show them the options or take the best guess and turn it on?

18:34 – Guest: The thing I recommend is that first and foremost get ESLint in your system with zero rules on. It starts that mindset into your development process. We can do something to automatically check...

Get Syntax checking and you will se improvements on the number of bugs that are getting out of production. I recommend using the default the ESLint configuration. This has all of the things that we have found that are most likely errors and runtime errors vs. syntax errors. You can go through with those and sometimes it is easier to run that check with...

Using those ESLint rules will clean up a lot of problems that you didn’t know you had with your code. There are too many problems with those rules. I recommend instead of turning them off then put the severity to warning and not error. That is something we started with in the beginning. We turned on as many rules as we could and it drove people crazy. They didn’t feel like when they were committing to a file why should I be...

The idea with the different scenario levels you don’t’ want to turn off rules so people don’t know there is a problem. There can be a rule on so people will know that there is a problem, but...

Doing that alone will give you a lot of benefit in using ESLint. How do you decide as a team on the rules that are maybe not for finding errors but for stylistic in error? Do we use four spaces, semi-colons, etc. To figure that out I am a big component on finding a pre-existing style guide and adapting it. Get everyone to agree.

There is no right or wrong when it comes to stylistic preferences. It really is just getting everyone to do the same thing. I think it was Crawford that said: Whether you drive on the right side of the left side of the road – it doesn’t matter as long as everyone is dong the same thing. I agree with that and it applies to style guides. It can get heated but for the best thing for the team is stick with a guide and work together.

24:36 – Aimee: I can go through the options to pick one of the style guides out there and then it will automatically create my configuration for me is helpful. Question: If you had to pick 2 or 3 rules that you are super helpful what would they be?

25:30 – Guest: To touch briefly on indentation. Whether you like four spaces or whether you are wild and like tabs, I think the indent rule is very helpful. Just for wiping out and eliminating that discussion through your team. Have your editor setup however they want but on the pre-hook...

But my favorite rules I tend to lean towards the ones that saved me.

_The Guest goes through his favorite rules with ESLint. Check it out!_

26:51 – Guest mentions his second favorite rule, here!

28:24 – Guest mentions his third favorite rule, here!

29:03 – Guest mentions the rule that makes him giggle a lot, here!

30:07 – [Advertisement – Sentry!](https://sentry.io/welcome/)

31:22 – What is your take on running Fix? Does it make sense to run Fix?

32:00 – Guest: It depends and the idea behind Fix is the idea of doing a one time (at the start) fix everything that it can find wrong b/c I don’t want to do it by hand. It morphed into a more of a tool that people are using all the time. I too have mixed feelings about it. I think the greatest value you get out of Fix is that when you first install it or when you enable a new rule. I think in those situations you get a lot of value out of Fix. I think that when people were getting aggressive with their code styles it took us down a path where we...

As a pre-commit hook it could be to fix things and part of the built system you wouldn’t want...

People are probably wondering: Why doesn’t ESLint doesn’t fix all the time?

It can be a team decision: do you want to run Fix at the point that the developer is writing the code, do you want to use Fix as running it as a build when you are bundling? It really seems more of a personal preference. I am on the fence about it. Even though I am leaning more towards...

35:16 – Do you run Premier?

35:20 – Guest: No I don’t. I don’t have anything against [Premier](https://github.com/Premier) but I think [Prettier](https://github.com/prettier/prettier) uses a very interesting space.

37:50 – Chuck: What is next for ESLint and what is next for you?

37:55 – Guest: Well, to be honest I am not sure what is next for ESLint. I haven’t been involved with keeping it maintained for the last few years. I do help out with feedback with decisions. But in general the ESLint the direction is that let’s add tings that help people avoid language hazards and make sure that ESLint is still pluggable. Lastly, that we will be there to help people and the community. There is this virtuosic cycle and tools like Babble and then tools like ESLint introducing rules adapting new rules and features better.

For myself, and the future, I haven’t been involved with ESLint because I am focusing on my health. I was diagnosed with Lyme Disease and it meant that I needed to focus on my health. That’s why, too, I wasn’t able to join a few years ago. I am doing better but I am a few years away for working fulltime and writing books and blogging, again. The trajectory is upward. I want to stress that you need to take care of yourself.

There is interesting stuff that we are doing and I love it, but make sure you take care of yourself! If you don’t have your health then nothing will really matter. I want to encourage you all to take care of yourselves better. This industry can take a toll on your body b/c it is high-stressed. If you are stressed your immune system will shut down. For a lot of us we are working too much and there isn’t an off-switch. I would like to encourage people to examine their life and their time.

When you take time to turn off your analytic brain, and work on your creative brain then the pathways will connect better.

Please save your money!

Lyme disease is spread through tick bites.

44:30 – Aimee: Thank you for sharing that!

44:38 – Chuck: It’s encouraging to me that you are still trying to come back even after this disease. I think we take things for granted sometimes. You can’t always count on things going the way you want it to go.

45:19 – Guest: What happened to me was I left work and one Friday afternoon I had a normal weekend. My health was on the decline, and I rested all weekend. And Monday I couldn’t get out of bed. That started this whole period where I stopped leaving the house completely. That’s how quickly things can change for you. I harp on people a lot to save their money. If I didn’t have savings there would be a very different end to my story. I want to encourage people to save.

46:33 – Chuck: I think on that note let’s go to picks. Where can people find you?

46:45 – Guest: My blog is [Human Who Codes.](https://humanwhocodes.com)

47:10 – Chuck: Anything people can do to help you? [Check out his books you won’t regret it!](https://www.amazon.com/Nicholas-C.-Zakas/e/B001IGUTOC)

47:33 – Guest: Buying books is always helpful. I would say that if you can spend some time contributing to [ESLint](https://eslint.org) that is always a great help. Anything you can do to help them will help me. I want to make sure that those folks are happy, healthy and productive. For me, personally, I love when people Tweet at me and say HI! I love hearing other people’s stories of how they have overcome past diseases or illnesses. If you want to send monetary gifts – donate to a wonderful [organization](https://lymelightfoundation.org) that helps children with [Lyme disease](https://lymelightfoundation.org). I would encourage you to support if you feel inclined.

50:49 – Chuck: We appreciate it, and I appreciate you being so open about your personal story.

51:11 – [Advertisement – eBook: Get a coder job!](https://devchat.tv/get-a-coder-job/)

**Links:**

- [JavaScript](https://www.javascript.com)
- [jQuery](https://jquery.com)
- [React](https://reactjs.org)
- [Elixir](https://elixir-lang.org)
- [Elm](https://elm-lang.org)
- [Vue](https://vuejs.org)
- [GitHub – Prettier](https://github.com/prettier/prettier)
- [GitHub – Premier](https://github.com/Premier)
- [Lyme Light Foundation](https://lymelightfoundation.org)
- [Inclusive Components](https://inclusive-components.design)
- [ESLint – Disallow Specific Imports](https://eslint.org/docs/rules/no-restricted-imports)
- [State of JS](https://stateofjs.com)
- [Learn JavaScript](https://gomakethings.com/resources/)
- [Book: Total Recall](https://www.amazon.com/Total-Recall-Unbelievably-True-Story-ebook/dp/B006VGGAC4)
- [Goodbye Redux](https://hackernoon.com/goodbye-redux-26e6a27b3a0b)
- [YouTube Channel – Sideways](https://www.youtube.com/channel/UCi7l9chXMljpUft67vw78qw)
- [Human Who Codes – Nicholas Zakas](https://humanwhocodes.com)
- [Nicholas’ Books](https://www.amazon.com/s/ref=as_li_ss_tl?url=search-alias=aps&field-keywords=nicholas+zakas&linkCode=sl2&tag=devchattv-20&linkId=3eaa2ae8a34b5d0bf1d2fbed49f57e87&language=en_US)
- [Nicholas’ Twitter](https://twitter.com/slicknet)
- [Nicholas’ GitHub](https://github.com/nzakas/)
- [Nicholas’ LinkedIn](https://www.linkedin.com/in/nzakas)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry](https://sentry.io/welcome/)
- [Cache Fly](https://www.cachefly.com)
- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)

**Picks:**

Aimee

- [Technical debt](https://hackernoon.com/there-are-3-main-types-of-technical-debt-heres-how-to-manage-them-4a3328a4c50c)
- [Professional JavaScript for Web Developers](https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691/ref=sr_1_3?ie=UTF8&qid=1540162058&sr=8-3&keywords=nicholas+zakas)

Chris

- [Inclusive Components Blog](https://inclusive-components.design/)
- [CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- JS Jabber - code

Cory

- [No Restricted Imports](https://eslint.org/docs/rules/no-restricted-imports)
- [State of JS](https://stateofjs.com/)
- [Total Recall](https://www.amazon.com/Total-Recall-Unbelievably-True-Story-ebook/dp/B006VGGAC4)

Charles

- My JavaScript Story

Joe

- Thought bubbles...
- [Goodbye Redux](https://hackernoon.com/goodbye-redux-26e6a27b3a0b)
- [Sideways Channel](https://www.youtube.com/channel/UCi7l9chXMljpUft67vw78qw)

Nicholas

- [The Brain that Changes Its Self](https://www.amazon.com/Brain-That-Changes-Itself-Frontiers-ebook/dp/B000QCTNIW/ref=sr_1_1?ie=UTF8&qid=1540162755&sr=8-1&keywords=the+brain+that+changes+itself)
- [Ghost Boy](https://www.amazon.com/Ghost-Boy-Miraculous-Misdiagnosed-Trapped-ebook/dp/B00C5QA94O/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1540162815&sr=1-1&keywords=Ghost+Boy)
- Tip - Turn off your Wi-Fi before Bed

### Transcript
