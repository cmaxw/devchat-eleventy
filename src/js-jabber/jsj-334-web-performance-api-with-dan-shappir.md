---
layout: layouts/post.njk
title: >
      JSJ 334: “Web Performance API” with Dan Shappir
date: 2018-10-09 10:00:00
episode_number: 334
duration: 1:07:58
audio_url: https://media.devchat.tv/js-jabber/JSJ_334_Dan_Shappir_Web_Performance_API.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

 **Panel:**

- [Aimee Knight](http://www.aimeemarieknight.com)
- [Charles Max Wood](https://twitter.com/cmaxw?lang=en)
- [Christopher Ferdinandi (Boston)](https://2013.boston.wordcamp.org/speakers/)

**Special Guests:** [Dan Shappir](https://twitter.com/DanShappir?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)(Tel Aviv)

In this episode, the panel talks with [Dan Shappir](https://twitter.com/DanShappir?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) who is a computer software developer and performance specialist at Wix.com. As Dan states, his job is to make 100 million websites (hosted on the Wix platform) load and execute faster! Past employment includes working for companies, such as: Ericom, Ericom Software, and BackWeb. He studied at Technion Institute of Management and currently lives in Tel Aviv, Israel. The panel talks about web performance API among other things. Check it out!

**Show Topics:**

1:29 – Charles: Let us know who you are and why you’re famous!

1:39 – “Hello!” from Dan Shappir.

2:25 – Charles: You should say that you go to EACH site EVERY day out of the millions of sites out there.

2:53 – Charles: My mom mentioned Wix to me at first. My mom teaches High School Math.

3:16 – Dan: Yes that is our mission statement. That everyone can get a website without the knowledge of how to build a website.

3:52 – Aimee makes her comments.

3:59 – Dan: On our platform we try to offer people flexibility. There are bounds and limits, but people can do their very own thing, though. To make Wix faster because as we add more features and functionality that is our goal.

4:40 – Chuck: Okay, I know how to make X perform a little bit better. You are looking at a platform that controls TONS of sites, how do you even go about that?

4:58 – Dan: It is more difficult then that. We have millions of users leveraging the platform but there are a lot of developers in Wix who are developing the platform. I don’t think anyone at Wix has a total grasp of the complexity of the platform that we built. We have hundreds of frontend people working on our platform. All of them have pieces to the kingdom. We have processes in place with code reviews and whatnot, but there is so much going on. There is a change every 2 minutes, 24/7. We need to make sure progressing instead of regressing.&nbsp;

6:54 – Aimee: I think it was interesting in one of the links you sent over. Because you know when something is getting worse you consider that a bug.

7:15 – Dan: It is more than a bug because if we see regression in performance then that is a problem. I can literally see any part of the organization and say, “stop” if it will

7:57 – Chuck: We are talking about performance, but what does that mean? What measures are there?

8:15: Dan: We are looking at performance can mean different things in different contents. User sites, for example, most important aspect is load time. How quickly the page loads and gets open to the viewer to that specific site. When they click something they want it instantly and no drag time. It does change in different contexts.

9:58 – Chuck: People do talk about load time. People have different definitions of it.

10:12: Dan: Excellent question. When you look at the different sites through Wix. Different people who build sites – load time can mean something else to everybody. It can mean when you see the MAIN text or the MAIN image. If it’s on an ECON site then how soon can they purchase or on a booking site, how long can the person book X product.

I heard someone at a conference say that load time is when: HERO TEXT And HERO IMAGE are displayed.

12:14 – Chuck: What is faster [React](https://reactjs.org) or [Vue](https://vuejs.org)?

12:21 – NEW HOST: Not sure. It all depends.

12:34 – Dan: We are big into React. We are one of the big React users outside of Facebook. I joined Wix four years ago, and even back then we were rebuilding our framework using React. One of our main modifications is because we wanted to do server-side rendered.

13:27 – Christopher asks Dan a question.

14:16 – Dan: We are in transition in this regard. Before we were totally client-site rendered, and that was the case until middle of last year. Then we deployed...

Dan: We are 100% server-side rendered now. Some things we are still using JavaScript. We have another project going on now and it’s fully CSS, and little JavaScript as possible. What you might want to do with that site is...

You might get in a few months every Wix site will be visible even if JavaScript is disabled.

16:26 – Aimee adds in her comments and observations to this topic.

16:55 – Dan: We don’t want things displayed incorrectly before it lays out. We hide the content while it’s downloading then make it visible. They lay-outing are done faster, because...

17:44 – Christopher asks Dan a question.

18:04 – Dan: I got into API...

Either you are moving forward or are you moving back. AKA – You are either progressing or regressing.

Different stages:

1.) Development stage

2.) Pre-Production (automated tools that check the performance with specific use cases)

3.) Check it out!

It’s beneficial to use these APIs.

21:11 – Christopher: What is performance APIs?

21:38 – Dan: There is a working group – Todd from Microsoft and others who are exposing the information (that is available in the browser) out into the browser. When the browser downloads a certain source (image, font, etc.) it can measure the various stages of downloading that feature.&nbsp; You have these different sages of downloading this resource. The browser can measure each of these stages and then expose them to you. Basically it’s for the browser to expose this information to you and in a way that is coherent and uniform. It essentially maintains this buffer that puts performance entries sequentially.

Dan continues explaining this topic in detail.

25:55 – Dan: You have this internal buffer...

28:45 – Advertisement – Sentry – They support opensource.

29:39 – Christopher: everything you are saying seems that I can use this or that tab right now...

Why would I prefer the API to something visual, hypothetically?

30:03 – Dan: Three Different Stages. (See above.)

This information is very, very helpful during the developmental stage. Say you got a link from someone...

Dan mentions: [Performance.mark](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark)

34:04 – Aimee: When you were talking about resource-ends. Many people don’t know what this is. Can you spend 2-3 minutes about how you guys are using these? Are there people can add for big bang for their buck?

34:41 – Dan: This might want to be a topic for its own podcast show.

Dan gives a definition of what a resource-end means.

Go back to fonts as an example.

Pre-connect for example, too.

39:03 – Dan: Like I said, it’s a huge topic.

You have to exercise some care. Bandwidth is limited. Make sure you aren’t blocking other resources that you do need right now.

40:02 – Aimee: Sounds like a lot of great things to tap into. Another question I have is about bundling.

40:27 – Dan: One of the things that we try to do (given that we are depending on the JavaScript we are downloading) we need to download JavaScript content to the client side. It has been shown often that JS is the most impactful resources that you need to download. You really want to be as smart as possible with that. What is even more challenging is the network protocols are changing.

_Dan continues to go in-depth about this topic._

Dan: What we have found is that you want to strive to bundle resources together.

44:10 – Aimee: Makes sense.

44:15 – Dan continues talking about this topic.

45:23 – Chuck asks two questions. (First question is now and second question is at 51:32.)

2 Questions:

1. You gather information from web performance AI - What system is that?

45:42 – Dan: I am not the expert in that. I will try not to give misleading information. Actually let me phrase it different. There are 3<sup>rd</sup> party tools that you can use leverage in your website. IF you are building for commercial reasons I highly recommend that you use performance-monitoring solution. I am not going to advertise one because there are tons out there. We ended up rolling out our own infrastructure because our use case is different than most.

At a conference I talked with a vendor and we talked about...

51:32 – 2<sup>nd</sup> Question from Charles to Dan: Now you’ve gathered this information now what to you do? What patterns? What do you look for? And how do you decide to optimize things?

54:23 – Chuck: Back to that question, Dan. How should they react to it and what are they looking for

54:41 – Dan: Three main ways: 1.) Generate alerts 2.) See trends over long period of time 3.) Looking at real-time graphs.

Frontend developer pro is that likely being woken up in the middle of the night is lower. We might be looking at the real time graph after we deployed...

57:31 – Advertisement – Get a Coder Job!

58:10 – Picks!

**Links:**

- [JavaScript](https://www.javascript.com)
- [jQuery](https://jquery.com)
- [React](https://reactjs.org)
- [Elixir](https://elixir-lang.org)
- [Elm](http://elm-lang.org)
- [Vue](https://vuejs.org)
- [Wix](https://www.wix.com)
- [Window Performance](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance)
- [Web Performance](https://www.w3.org/webperf/)
- [Terra Genesis](https://itunes.apple.com/us/app/terragenesis-space-colony/id1039841501?mt=8)
- [Terra Genesis: Space Colony](https://play.google.com/store/apps/details?id=com.alexanderwinn.TerraGenesis&hl=en_US)
- [The One Thing](https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776/ref=as_li_ss_tl?ie=UTF8&qid=1535488914&sr=8-1&keywords=the+one+thing&dpID=31bLXJwHXlL&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=srch&linkCode=sl1&tag=devchattv-20&linkId=48a970a5c61e9d72b797162776c7052f&language=en_US)
- [DevChat TV – YouTube](https://www.youtube.com/c/devchattv)
- [GitHub: Off Side](https://github.com/toomuchdesign/offside)
- [HBO: Insecure](https://www.hbo.com/insecure)
- [Wix: Engineering](https://www.wix.engineering)
- [JavaScript Riddle](https://twitter.com/hashtag/JavaScriptRiddle)
- [JavaScript Riddles for Fun and for Profit](https://fwdays.com/en/event/frontend-fwdays-17/review/javascript-riddles)
- [Dan Shappir’s Twitter](https://twitter.com/DanShappir?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Dan Shappir’s LinkedIn](https://il.linkedin.com/in/dshappir)
- [Dan Shappir’s Crunch Base](https://www.crunchbase.com/person/dan-shappir)
- [Dan Shappir’s GitHub](https://github.com/DanShappir)
- [Dan Shappir’s Talk through Fluent](https://conferences.oreilly.com/fluent/fl-ca/public/schedule/speaker/221820)
- [Dan Shappir’s Medium](https://medium.com/@DanShappir)
- [Dan Shappir’s YouTube Talk: JavaScript riddles for fun and profit](https://youtu.be/D-juPGb7EKY)

**Sponsors:**

- [Code Badges](http://codebadge.org)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry](https://sentry.io/welcome/)
- [Digital Ocean](https://www.cachefly.com)
- [Cache Fly](https://www.cachefly.com)
- 

**Picks:**

[Aimee:](http://www.aimeemarieknight.com)

- Waking up early! 
- [How to Deal with Dirty Side Effects in Your Pure Functional JavaScript](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/)

[Chris](https://2013.boston.wordcamp.org/speakers/):

- [Offside - Toomuchdesign](https://github.com/toomuchdesign/offside)
- [Insecure TV Show](https://www.hbo.com/insecure)

[Charles:](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

- [Terraform - Game](https://play.google.com/store/apps/details?id=com.alexanderwinn.TerraGenesis&hl=en_US)
- [“The One Thing"](https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776/ref=as_li_ss_tl?ie=UTF8&qid=1535488914&sr=8-1&keywords=the+one+thing&dpID=31bLXJwHXlL&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=srch&linkCode=sl1&tag=devchattv-20&linkId=48a970a5c61e9d72b797162776c7052f&language=en_US)
- [Code Badge](http://codebadge.org/)
- [DevChat on YouTube](https://www.youtube.com/c/devchattv)

[Dan](https://twitter.com/DanShappir?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

- [Wix Engineering](https://www.wix.engineering/)
- [JavaScript Riddle](https://twitter.com/hashtag/JavaScriptRiddle)


### Transcript


