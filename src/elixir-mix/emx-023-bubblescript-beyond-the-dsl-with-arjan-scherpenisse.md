---
layout: layouts/post.njk
title: >
      EMx 023: “Bubblescript – Beyond the DSL” with Arjan Scherpenisse
date: 2018-10-16 10:00:45
episode_number: 023
duration: 47:34
audio_url: https://media.devchat.tv/elixir-mix/EMx_023_Bubblescript-Beyond_the_DSL_with_Arjan_Scherpenisse.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- [Mark Ericksen](https://github.com/brainlid)
- Eric Berry
**Special Guest:** [Arjan Scherpenisse](https://www.linkedin.com/in/scherpenisse)

In this episode of Elixir Mix, the panel talks with [Arjan Scherpenisse](https://www.linkedin.com/in/scherpenisse) who is the technical co-founder at [BotSquad.](https://www.botsquad.com) Arjan lives in the Amsterdam area of the Netherlands. Also, he is currently working with Miracle Things. Check out today’s episode where the panel and Arjan talk about his [article](https://www.botsquad.com/2018/04/14/beyond-the-dsl/) and his latest projects.

**Show Topics:**

0:50 – Hello!

1:23 – Is that right – got to drink Heineken in Amsterdam?

1:30 – Arjan: It’s the Bud Light version here in Amsterdam.

1:47 – Panelist: I feel pretty stupid now.

1:58 – Eric: I actually just visited Amsterdam to visit a good friend. The canals were gorgeous!

2:25 – Arjan: I actually worked 7 years in the city center and I cycled to work over the tiny bridges. Now I live outside of Amsterdam.

2:47 – Panelist: You have this article on Bubblescript, which is a creation of yours. Can you tell what it is?

3:08 – Arjan: I have been a software developer for 8 years. I have been using Elixir more in the past 2 years. So at some point an agency asked if I could build something for their museum. I thought let’s do it, because that’s a nice project! I got to work with three historical figures, which has their own stories.

4:45 – Is it spoken?

4:51 – Arjan: Just text. It was really meant for a young audience. The creators wrote stories about these figures. Get the younger generation engaged. I thought, well, how could I build something like this? I don’t want to hardcode it because I am the one maintaining it and I don’t want to be a SMS person. I thought, I wanted them to maintain it, but CMS is limited. Then I thought, I will give them a Jason file – each instruction on one line. Those file formats are for...

Then I thought why couldn’t I use Elixir...?

I just wrote something that looped out and spit-out all of these messages through messenger with a timer. Then I made it very simple through UI. Then it would tell you that line the error is. Then in the background you are checking to see if your syntax is correct or broken. Then there is a run button on the side. That’s how it started. It was a lot of work for one project. I found the idea really fascinating, and then last year I showed them this to my friend. He, too, was in Elixir and loved the idea and so we started a company.

8:47 – Panelist: That’s where [BotSquad](https://www.botsquad.com) came from? One of the questions I had been: Is it done through macros?

9:01 – Arjan: Yes, but there is...

I don’t compile it to an Elixir code; I use it as a functional thing. “Hey! Give me the next message...” If that makes sense?

9:59 – Panelist: I see that you have an example through the article. If something is invalid then you can see that it’s on “line 2.” Never used string to coder – I think that’s a great application to that.

10:26 – Arjan: Yep! String to coder.

11:09 – Your path to Elixir went through Erlang first right (2009)?

11:22 – Arjan: Maybe earlier? I was working through an agency back then, and they were building a platform for projects. One of the co-founders left and he started to work (for a year) and worked on this language called Erlang. That was back in 2008/2009. He later went onto create...

He was working on that and he convinced me to use Erlang. I like Erlang because it’s a logical language.

13:06 – What was the path to Elixir? Why would you use Erlang?

13:21 – Arjan: Good question. I haven’t left Erlang totally, yet. It was due to the community. I wasn’t interested the first few years into Elixir, because all of the concepts are the same just different skin. For me, the community was completely different! I think it’s the truth. There is no Erlang [Meetup](https://www.meetup.com) in Amsterdam! For me it was the difference in the communities.

15:22 – We are glad you are here!

15:28 – Arjan: We are trying to make it Open Source. People ask me this all the time. For us we still have to find the right form for it, and it will be a lot of work to maintain it and support it.

16:10 – Panelist: Your chat app – let’s talk about that. It’s a very staple process. You don’t want to keep repeating the story for the characters. Along the lines of...

I am wondering how well they are being a solution for...

[GenServers](https://hexdocs.pm/elixir/GenServer.html) are mentioned.

17:15 – Arjan: That’s exactly how it works. You could do it differently if you wanted to. The interpreter itself is purely functional – you put a message in and you get a message out. What I wrote around that...

19:20 – Panelist: What process registry are you using for that?

19:24 – Arjan answers the question.

20:18 – Panelist comments.

20:53 – Arjan: It is a nice piece of software. And while most of the things are done now it’s making sure that everything is ready for everybody. If you use Swarm then...

21:57 – Panelist: I think it’s fun that you have this GenServer intentionally built in delays?

22:18 – Arjan: Yes, exactly.

22:46 – Yeah it has to feel real – that’s fun.

22:53 – Arjan: Yes. It can actually help with a...

23:12 – [Advertisement – Loot Crate](https://www.lootcrate.com) – check out the code!

24:09 – DeState Struct – I love that pattern – Plus 1 to that and let listeners know. It’s a great way to test how a...

24:48 – It’s a great way to test because you don’t have to wait for anything!

_Arjan continues this conversation._

26:03 – Arjan: It’s fun to test one bot with another bot.

26:14 – Panelist: The bots don’t have to go through the messaging protocol.

26:33 – Arjan: Yep!

26:42 – Anything you want to talk about Bubblescript or BotSquad before another topic?

26:55 – Arjan: It’s not Elixir it looks like Elixir – but check it out!

[Trial account at BotSquad.com!](https://www.botsquad.com/pricing/)

27:17 – You are also talking with Code Elixir in London and you are doing a boot camp series. You are running an actual boot camp – I would love to hear what you are doing there!

27:42 – Arjan: the form is 2 days – it’s meant for programmers who are already well knowledgeable. We have done it 2 years in a row. I teach it with a partner who is from Amsterdam. Two years ago we got together and there were always questions on whether a boot camp was available. So we thought we needed to put something together. There are about 20 students in each boot camp.

29:34 – What are some of the challenges? Where these people are coming from pure functional stuff?

29:51 – Arjan comments.

We start teaching them at the beginning of the boot camp: recursion and better matching. Better matching, in other languages, isn’t there. Recursion can be hard to grasp. Those are the building blocks. Going from there: how can you expand...

31:39 – Panelist: I saw from your video how you showed the [elevator experience](http://erlang.org/pipermail/erlang-questions/2013-January/071434.html)?

31:56 – Arjan: I didn’t know that was HIS analogy.

32:10 – Panelist talks about the [creator of Erlang.](https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer))

33:01 – Arjan: Yes the elevator example is for...

_Arjan continues talking about the elevator example and how students need to implement to be successful with tests and more._

34:48 – Arjan: It’s good to see how people reason with state and to see your thought process.

35:49 – Arjan: The second morning we actually give them the solution.

Second day is getting practical – how can you build something and deploy something with Elixir.

36:32 – Panelist: I think it’s great that you are introducing Elixir to more people. I would like to see more people doing that. I love teaching people and Elixir concepts and other things. I had a Ruby background. It was a head-trip to get that difference – and once you do then you feel powerful: Oh I get it! I get these beneficial properties...

All of these problems I had before don’t exist over here.

When I get to see the

37:48 – Arjan: Yes at those Meetups and those boot camps – you see those light bulb moments. Yes, that’s why I do the teaching because it’s very rewarding.

38:43 – Panelist: Anything else?

38:50 – Arjan: Yes, my company BotSquad is working on a one-day conference – check it out [here!](https://codesync.global/conferences/cbl-amsterdam-2018/)

39:46 – Picks!

39:50 – [Fresh Books’ Advertisement! 30-Day Trial!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866057&source=GOOGLE&gclid=EAIaIQobChMI7u77x52H3gIVkLfACh0pQgTEEAAYASAAEgJ_-PD_BwE&gclsrc=aw.ds&dclid=CP7VqMmdh94CFcW-wAodpeoN9Q)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [JavaScript](https://www.javascript.com)
- [Vue](https://vuejs.org)
- [React](https://reactjs.org)
- [GenServers](https://hexdocs.pm/elixir/GenServer.html)
- [Meetup](https://www.meetup.com)
- [Jekyll](https://jekyllrb.com)
- [StaticGen](https://www.staticgen.com)
- [BotSquad](https://www.botsquad.com)
- [BotSquad: Bubblescript – Beyond the DSL](https://www.botsquad.com/2018/04/14/beyond-the-dsl/)
- [Miracle Things](https://miraclethings.nl)
- [Arjan through Code Sync](https://codesync.global/speaker/arjan-scherpenisse/)
- [Arjan’s LinkedIn](https://www.linkedin.com/in/scherpenisse)
- [Arjan’s Twitter](https://twitter.com/acscherp?lang=en)
- [Arjan’s GitHub](https://github.com/arjan)
- [Arjan’s Video: Bootcamp Stories](https://youtu.be/2Lv_i1JJdsM)
- [Code Beam Lite Amsterdam 2018](https://diversitytickets.org/en/events/252)

**Sponsors:**

- [Get a Coder Job](http://getacoderjob.com/)
- [Loot Crate](https://www.lootcrate.com)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Eric

- [Jackal](https://github.com/jackal)

Mark

- To Be List 

Arjan

- Experimenting 
- Elixir Parser


### Transcript


