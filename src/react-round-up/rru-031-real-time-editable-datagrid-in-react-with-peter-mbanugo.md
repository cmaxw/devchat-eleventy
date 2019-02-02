---
layout: layouts/post.njk
title: >
  RRU 031: "Real-time Editable Datagrid In React" with Peter Mbanugo
date: 2018-10-02 10:00:03
episode_number: 031
duration: 51:23
audio_url: https://media.devchat.tv/reactroundup/RRU_031_Real-time_Editable_Datagrid_In_React_with_Peter_Mbanugo.mp3
podcast: react-round-up
tags:
  - react_round_up
  - podcast
---

**Panel:**

- [Charles Max Wood](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Lucas Reis](https://twitter.com/iamlucasmreis?lang=en)
- [Justin Bennett](https://twitter.com/zephraph)

**Special Guests:** [Peter Mbanugo](https://twitter.com/p_mbanugo?lang=en)

In this episode, the panel talks with guest speaker, Peter Mbanugo. Peter is a computer software specialist who works with Field Intelligence and writes technical articles for Progress Software and a few others. He studied at SMC University and currently resides in Nigeria. They talk about his creation, [Hamoni Sync](https://www.hamoni.tech/), and article,&nbsp;[Real-time editable data grid in React](https://medium.freecodecamp.org/how-to-build-a-real-time-editable-datagrid-in-react-c13a37b646ec). Also, other topics such as Offline-First,&nbsp;[Speed Curve](https://speedcurve.com/),&nbsp;[Kendo UI](https://www.telerik.com/kendo-ui)&nbsp;are talked about, too. Check out today’s episode

**Show Topics:**

1:30 – Chuck: Let’s talk about what you built and how it works. Topic: Real-time editable data grid in React.

1:40 – Peter: Real time editing. It allows you to edit and have the data go across the different devices. Synchronizing your applications. For the&nbsp;

2:47 – I saw that you built also the...

2:58 – [Peter:](https://twitter.com/p_mbanugo?lang=en) Yes, I built that with Real-time.

Most of the time I have to figure out how to build something to go across the channel, such as the message. Then I built the chats.

Next month

4:33 – Justin: It says that it can go offline. That is challenging. How are you going about that?

4:51 – Peter answers the question.

Peter: When you loose connections and when the network comes back on then it will try to publish anything to the server while offline.

If you are trying to initialize the...

5:42 – Awesome.

5:45 – Peter continues his thoughts.

5:56 – Lucas: This is really interesting. Form something really simple to tackle this problem. I have gotten into so many problems. Congratulations on at least having the courage to try such a system.

6:35 – Justin: When you have someone interacting with one of these applications, lose connectivity, is the service handling this behind the scenes?

6:56 – Peter: Yes.&nbsp;

Peter goes into detail.

7:19 – Justin: Neat. That would be interesting to dig more into that.

7:35 – Lucas: I had a friend who sent me links and I was like WHOAH. It’s not an easy task.

7:57 – Peter: Yes, offline – I am learning each and everyday. There are different ways to go about it. Then I go write something about conflict free of different types. I thought that was the way to go. I didn’t want it to be something of the declines.

8:50 – Lucas: How did React work for you?

9:24 – Peter answers the question.

9:58 – Panelist: I was trying to synchronize the system. There are 2 types: Operational Transformations and CRDTs.

It’s a really hard problem.

10:35 – Lucas: Now we have multiple devices and they can be far away from each other. Updates to send to the same server. I think that this is really complicated world. Even consider new techniques that we use in RI. You have a long in process.

You need to react to them. Maybe dates that you cannot get.

Hard problem we are solving now.

11:56 –Justin: Even interacting with applications that ... it has made our products that aren’t approachable if someone doesn’t have a good Internet connection.

Synchronizing connections while offline. So you can have offline support. These are problems that we can resolve hopefully.

13:01 – Lucas: It affects everyone. Back in Brazil we had problems with connections, because it’s connections. Now I live in NY but the subway my connection is hurt.

13:40 – Peter: Yes, I agree.

Peter talks about his connections being an issue while living in Africa.

14:52 – Justin: How does that affect your development workflow?

15:08 –[Peter](https://ng.linkedin.com/in/pmbanugo) answers the question.

17:23 – Justin: Shout-out to the Chrome team.

Tool called LIGHTHOUSE. It can test for accessibility, SEOs and etc. Good same defaults and trying to test Mobile First. When I was learning about performance I wasn’t thinking about the types of devices that people would use. The edits tab really helps think about those things.

18:41 – [Digital Ocean’s Advertisement](https://www.digitalocean.com/products/droplets/?_campaign=G%257CSEARCH%257CB%257CCORE&_adgroup=CORE%257CDigitalOcean&_keyword=digital%2520ocean&_device=c&_copytype=biz_ad&_adposition=1t1&_medium=brand_sem&_source=google&_dkitrig=&_2dkitrig=&gclid=EAIaIQobChMIgc2dmr_o3QIVVrnACh0Quw8sEAAYASAAEgLWVPD_BwE)

19:18 – Justin: Any tools to help test your download speeds or anything authentication tools?

19:36 – Peter answers this question.

20:15 – Panelist asks the same question to Lucas.

20:22 – Lucas: interesting question. Even though the website was doing pretty well we were in the dark. We did a huge migration and it wasn’t clear about the performance. So my first mission here was start using a tool called SPEED CURVE. It only gets better. For a company who needs to acquire a tool SPEED CURVE is great. They have the LIGHTHOUSE measurements in their dashboards. So it can follow through time your scores and all of your analysis. These are the tools we use today. They have both synthetic and real user monitoring. So when we are measuring things on our Chrome it is a picture of your machine (biased picture) they make it both synthetic and film your page and compare through time. Analyze your assets. Some code on your application and collects statistics for each user. Relic I have used before, too. I do believe those tools are of great help. I am sure there are opensource initiatives, but I haven’t played

22:56 – Peter: Have you tried...?

23:07 – Lucas continues.

LIGHTHOUSE.

23:56 – Justin: It gives great visualizations for people to see. [SPEED CURVE.](https://speedcurve.com)

Where we are at – so they can see that – it’s powerful.

24:40 – Lucas: Interesting story we used SPEED CURVE. Real users and synthetic measurements; our website was getting slower and slower. We couldn’t figure it out. What is happening to our application? It turned out that the app more people were using it on the mobile. The real user speed was going up because they were using mobile. The share of mobile users and performance was getting better. You look at the overall average it was getting slower. Interesting lesson on how to look at data, interpret data and insights. It was really interesting.

26:21 – Peter.

26:25 – Lucas continues the previous conversation from 24:40.

27:00 – Justin: Taking the conversation back.

It’s always a challenging problem because the implications are hard to use. What was your experience with React Table? What are the pros and cons?

27:40 – Peter: React Table is quite light. It is pretty good on data. I haven’t had much of a problem. It is okay to use. The other ones I haven’t tried them, yet.

28:08 – Justin: Same question to Charles and to Lucas.

28:21 – Lucas: I have never worked with big tables to render the massive data or tables that need to be edits and stuff like that. I don’t have experience with those components. Play here and there. It is interesting, because it is one of those components that are fighting the platform and it’s a good source of interesting solutions.

29:05 – Chuck: Kendo UI has one.

I need something that his more barebones.

AG Grid.

30:03 – Justin: React Windows. It optimizes long lists. It just renders what is in the current window.

30:22 – Ryan Vaughn.

30:28 – Justin: Cool library.

30:36 – Lucas: Use it as a learning tool.

How do you all decide when to actually start using a library? As early as you can? Libraries to solve our problems?

31:19 – Peter: It depends on what I am doing.

31:53 – Fascinating question. Not one size fits all. It’s a balance between product deliverable needs and...

There can be risks involved.

Fine balance.

I find myself doing a lot is I will default using a library first. Library that isn’t too large but what I need for that project. If there is a hairy feature I will use the library until my needs are met.&nbsp;

33:49 – Lucas adds his comments.

Lucas: You want to differentiate yourself. I love GitHub.

35:36 – Question to Charles: I know you have tons of stuff going on. What’s your thought process?

35:53 – Chuck: If I can find stuff on the shelf I will pay for it.

My time adds up much more quickly then what the dollars do. I will pay for something off the shelf. I only mess around for a while but if I can’t find something to help me then I will go and build something of my own. I got close with Zapier, but I got to the point that I wanted to put something together that I built my own thing through Ruby on Rails. Generally I will pay for it.

37:07 – Panelist: Yes, I don’t think we all don’t value our time and how expensive time is.

37:25 – Chuck: I own the business. My time is of value – it’s more important to me.

It’s a trap that people fall into not to value their time.

38:11 – Lucas: We are not all working on what we SHOULD be working on. This isn’t going to bring business

Productive time that we are using with stuff that is not our business or our main focus. Focus on the core product. Try to get the customers to have a better life. The mission of the company. The web community that started that most is the Ruby community. Having solutions and focusing on the problem. I think that JavaScript is now doing a better job of this.

As we know it’s easy to fall into this trap and play with building blocks.

39:52 – Chuck: I have had a few people remind me that I am a DEVELOPER!

40:19 – Justin: The thing I have estimating is the difficulty of something. I can build it because I am a developer. Is it valuable for me?

41:10 – Lucas: The sunken costs sink in – I have done all this work and now look where I am at?

41:33 – Chuck: Anything else?

41:43 – Peter: Check out me through Twitter and the Dev blog. Message me anytime.

42:13 – Chuck: Picks!

42:18 – Advertisement.

**Links:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [Redux](https://redux.js.org)
- [Agile](https://en.wikipedia.org/wiki/Agile_software_development)
- [Real-time editable data grid in React](https://medium.freecodecamp.org/how-to-build-a-real-time-editable-datagrid-in-react-c13a37b646ec)
- [Peter Mbanugo’s Twitter](https://twitter.com/p_mbanugo?lang=en)
- [Peter Mbanguo’s LinkedIn](https://ng.linkedin.com/in/pmbanugo)
- [Peter Mbanguo’s Dev.To](https://dev.to/pmbanugo)
- [Peter Mbanguo’s GitHub](https://github.com/pmbanugo)
- [Peter Mbanguo’s WordPress](https://pmbanugo.wordpress.com/about/)
- Lucas Reis’ Email: [lucasmreis@gmail.com](mailto:lucasmreis@gmail.com)
- [Charles Max Wood’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)

**Picks:**

Charles

- Book: [The ONE Thing](https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776/ref=sr_1_1/137-0725019-0100315?ie=UTF8&qid=1538510433&sr=8-1&keywords=the+one+thing+books)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/) – It will be out next week!
- T-Shirts & Mugs – Podcast Artwork - SWAG
- [Kickstarter – Code Badge.Org](https://www.kickstarter.com/projects/521063736/codebadgeorg)

Justin

- [RC BLOG](http://artsy.github.io)
- Podcast: [Indie Hackers](https://www.indiehackers.com/podcast)
- [Indie Hackers](https://www.indiehackers.com/products)

Lucas

- Blog Post: [Thirteen Ways of Looking at a Turtle](https://fsharpforfunandprofit.com/posts/13-ways-of-looking-at-a-turtle/)

Peter

- Library – Opensource
- [Masters of Skill – Podcast](https://www.stitcher.com/podcast/stitcher/masters-of-scale)
- Book: [Ego is the Enemy](https://www.amazon.com/Ego-Enemy-Ryan-Holiday/dp/1591847818)
- Book

### Transcript
