---
layout: layouts/post.njk
title: >
      EMx 024: “Sagas” with Andrew Dryga from Hammer Corporation
date: 2018-10-23 10:00:52
episode_number: 024
duration: 54:00
audio_url: https://media.devchat.tv/elixir-mix/EMx_024_Sagas_with_Andrew_Dryga_from_Hammer_Corp.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Eric Berry
- Josh Adams 
- Nathan Hopkins 

**Special Guest:** [Andrew Dryga](http://www.dryga.com)

In this episode of Elixir Mix, the panel talks with [Andrew Dryga](https://medium.com/@andrew_dryga) who is a software engineer (full-stack), entrepreneur, blockchain architect, and consultant. He currently works for Hammer and previous employers include Contractbook, Nebo #15, BEST Money Transfers among others. He studied at the National Technical University of Ukraine. Check out today’s episode where the panel and guest talk about Sagas and Sage.

**Show Topics:**

1:52 – Our guest today is [Andrew Dryga](https://medium.com/@andrew_dryga). Why are you into Elixir?

2:04 – Andrew: I have worked in Elixir for a few years. I worked on one of the biggest opensource projects for a while now.

2:42 – Let’s talk about Sage!

2:49 – [Andrew:](https://twitter.com/andrew_dryga) I felt like I was doing the same thing over, and over again.

_Andrew talks about how he was on a mission to solve a problem that he was having._

3:48 – Panelist: I have run into this problem before, and I am looking forward

We have distribution systems and anything that is external for us (Stripe), and one of the solutions was to create a multi. Let’s create a user, register theses different pieces, and then...

Then we realized that this request was taking too long. Our transaction is timing out. The other connection went to the other server. We had database records removed from the other side. People aren’t aware that they have these distribution problems. I think Stripe is a good example of that. I started with my multi...

5:24 – Andrew: I am trying to be very programmatic.

I don’t want to do that, so write now the project is multi. It’s doable if you know what you are doing. If you are dealing with just one it’s simple. But if you can monitor them (Sage Read Me)...

56:16 – Let’s talk about Sagas!

6:19 – Andrew talks about what Sagas are.

8:20 – You are right it is a new mental model. That’s why I love the Sage library because it is simple. It gives structure to that mental model. The idea that I will take step one and create a user, step two another entry, step three now an external entry. It can fail for any reason. Then these compensating functions are saying: what is the undo for this? It could be just delete this specific entry. But do I have that right?

9:53 – Andrew gives his comments on those comments.

10:26 – Andrew continues his ideas.

11:09 – When you start with a new team, you don’t bring Sage right off the back? What is your strategy to figure out that pain?

11:32 – Andrew: I don’t have a plan – how do I feel about THAT coder. After about 2 services and 1 call it’s time to use Sage or it will be too complex. Integration is the case. So if you try to integrate substitution then...

12:29 – Question to Andrew.

12:35 – Andrew: Figure it out by judgment and it varies by situation. I enjoy working with them but I’m not like them. I use my best judgment.

12:59 – You talked at Code Beam and talked about Sagas and Sage. I think that’s a good resource to defend you case. To talk about the sequence of events, something goes wrong, and then rollback the changes. What feedback have you received?

13:46 – Andrew: Yes, good feedback. There some people will say that there are problems, but I know there are companies that are actively using it. People say that it simplifies their projects. I think the presentation slides can definitely help.

14:39 – Yes, check out the show notes links.

14:45 – Are you a consultant or are you fulltime?

14:53 – Andrew: I used to be fulltime and do large projects for companies.

_Andrew talks about those projects in detail._

Andrew: Those projects we used Elixir (see above).

I do a lot of opensource, too. Last time I check it was...

16:04 – That’s a good number.

16:08 – Andrew: I am trying to participate in conversations, but if I had more times I would work more in Sage and opensource; to have a persistent nature behind Sage. I think it can be done a much better way.

16:55 – How do you envision doing that? Configuring it to a repo or something else?

17:07 – Andrew: I want to solve the problem of...

17:56 – That’s cool.

18:03 – Andrew: Yeah, everything I find a new application built in.

18:17 – Andrew and panelist go back-and-forth.

18:32 – Andrew continues talking about Sage and models.

18:43 – Proxy channel – I think I want to do a Mud. Anyway...

18:59 – Question.

19:11 – There is a WX library that is built into Erlang which was talked about at the conference. That one looked interesting. How they built the debugger and the widgets. It looked that there was more there than I thought.

19:47 – Great to have out of the box.

19:56 – [Andrew](https://medium.com/@andrew_dryga) comments.

Andrew: I saw the talk from Canada and...

20:08 – It’s early to work with. Someone tweeted about it and now I’m rambling.&nbsp; &nbsp;

20:08 – Andrew: Someone made the keyboard while on the plane.

21:04 – I hope we are going that route eventually.

21:12 – Panel and Andrew go back-and-forth.

21:39 – What other applications have you found that Saga would work for?

21:50 – Stripe.

21:56 – Panelist: When I make an authorization request, capture the funds. Even when I am dealing with one of their services there are multi-interactions.

22:03 – [Andrew](https://github.com/AndrewDryga) comments.

23:32 – I have an app that I would prefer using Saga because of the...

23:44 – Loot Crate! Check out their deal!

24:37 – Andrew talks about the core team, Elixir and Sage.

26:03 – Panelist: To solve a problem with SAGA let’s talk about the pros and cons. I had an umbrella application and one of the applications was supposed to be the interface to that service. It could be like a payment service and other payment gateways. I am going to make my request to this app, and it’s going to track the app. The main thing continues and talks to the bank and/or Stripe. Depending on the problems but you still have THAT problem because maybe the account wasn’t set up properly. Now we’ve talked to the bank, medium intervention, and let’s run this. I like SAGE and SAGAS because I don’t’ have to go to that level to break out the proxies. I just need to talk with the sales force or something. I need a reliable system when it can recover when something goes wrong. It might be over engineered but I don’t know.

28:17 – Andrew comments about that particular example (see above).

29:03 – With Sagas you can loose them...

29:09 – I haven’t played with Rabbit, yet. The one that is built into AWS? There’s Simple Q and there is something else. Rabbit is built with Erlang. What’s that like for you?

29:40 – Andrew: It’s pretty painful.

_Andrew mentions MPP._

30:37 – Interesting; I haven’t gotten that far, yet.

30:45 – My first Elixir application had...behind it. That was the worst part. I feel those pains.

31:00 – Andrew: That’s the case.

31:51 – The other service I was thinking of was...

31:56 – Question for Andrew.

31:59 – Andrew answers.

32:39 – That is the problem we are having at work because of older code. How can we resend them out? That probably will be a good fit for us.

33:18 – Andrew.&nbsp;

34:31 – Andrew: Once you’ve found the bug...

35:16 – When you are coming to a new language, it could be React or...the first few things will be pretty awful. What has this path been like for you, Nathan?

35:40 – Nathan: Yeah I am very early days. Yesterday, I had a set of code that I was creating to try just to function and it was really ugly. But I was okay with that because I was just trying to solve the issue.

36:05 – You have to be okay with that. The idea that: You are trying to just make it work. When you come to Elixir and being fresh and thinking I don’t even know what to do.

36:32 – I have a buddy with that now saying: How do I even start with this?!

36:40 – Andrew: It takes time to break your head and a different way to rethink the code.

Once I have the basic concepts then it makes me feel super efficient.

37:24 – I am curious what languages have you had experience with?

37:38 – Andrew: I started commercial projects in my teenage years. I built websites for them.

I have some JavaScript knowledge and that was good going to Elixir.

39:04 – I favor that side, too. It’s not hard to build solutions with the things that are in the box (Erlang). I don’t like to bring in all of these libraries that people are creating. It’s great but, at the same time, I have been burned by Rails and JavaScript where you bring in all of these different libraries, and it becomes really nasty. I could have solved it more natively.

39:55 – Andrew: In Elixir you can...

40:28 – Oh, that’s all I needed – those 2 lines.

40:40 – Andrew.

40:46 – That’s an interesting dynamic.

41:09 – Andrew comments talks about Elixir and Hex.

41:23 – Andrew: I think it’s a good thing. I think there needs to be work in Hex because it’s underdeveloped. To name a few...

43:08 – Part of the keynote this year that it won’t be merged, or they aren’t promising to merge it.

43:29 – Andrew.

44:08 – I haven’t used 3, yet.

44:10 – Andrew.

44:55 – They are talking about the Read Me. I didn’t know there was an [Ecto Mnesia?](https://github.com/Nebo15/ecto_mnesia)

45:20 – Andrew: Yeah I helped build it and the plan was...

45:50 – Yeah I can see the issue there, do I maintain it or...?

46:02 – Andrew comments and talks about the community and different codes.

46:36 – Andrew, anything else that you want to talk about?

46:48 – There are tons of notes in our chat, which the listeners can’t see.

46:58 – Advertisement – [Fresh Books’ Advertisement! 30-Day Trial!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866057&source=GOOGLE&gclid=EAIaIQobChMI7u77x52H3gIVkLfACh0pQgTEEAAYASAAEgJ_-PD_BwE&gclsrc=aw.ds&dclid=CP7VqMmdh94CFcW-wAodpeoN9Q)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [JavaScript](https://www.javascript.com)
- [React](https://reactjs.org)
- [Erlang – Disk Log](http://erlang.org/doc/man/disk_log.html)
- Erlang WX
- [Railway Oriented Programming](https://fsharpforfunandprofit.com/posts/recipe-part2/)
- [Nebo 15](http://nebo15.com)
- [GitHub – Scenic](https://github.com/boydm/scenic)
- [Kafka](https://kafka.apache.org)
- [Rabbit MQ](https://www.rabbitmq.com)
- [AWS](https://aws.amazon.com/sqs/)
- [AWS – Kinesis](https://aws.amazon.com/kinesis/)
- [GitHub – Firenest](https://github.com/phoenixframework/firenest)
- [XHTTP](https://github.com/ericmj/xhttp/tree/master/lib/xhttp)
- [GitHub – Ecto](https://github.com/elixir-ecto/ecto)
- [GitHub – Ecto Mnesia](https://github.com/Nebo15/ecto_mnesia)
- [Saga and Medium](https://medium.com/@andrew_dryga/you-can-compose-the-saga-69f209bc6194)
- [Introducing Sage](https://medium.com/nebo-15/introducing-sage-a-sagas-pattern-implementation-in-elixir-3ad499f236f6)
- [Andrew Dryga’s Website](http://www.dryga.com)
- [Andrew Dryga’s Medium](https://medium.com/@andrew_dryga)
- [Andrew Dryga’s GitHub](https://github.com/AndrewDryga)
- [Andrew Dryga’s LinkedIn](https://ua.linkedin.com/in/andrew-dryga-bb382557)
- [Andrew Dryga’s Twitter](https://twitter.com/andrew_dryga)
- [Andrew Dryga’s FB](https://www.facebook.com/andrew.dryga)
- [Andrew’s YouTube Channel](https://www.youtube.com/channel/UCIpDrdCfu9LscfqmVSUy43g)
- [Andrew’s Sagas of Elixir Video](https://www.youtube.com/watch?v=excmcS6Id2E)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Mark

- [Mark of the Ninja](https://store.steampowered.com/agecheck/app/214560/)

Josh

- [A Sneak Peek at Ecto 3.0: Breaking Changes](http://blog.plataformatec.com.br/2018/10/a-sneak-peek-at-ecto-3-0-breaking-changes/)

Nate

- [Pragmatic Studio](https://pragmaticstudio.com/courses/elixir)

Eric

- Looking of Elixir Developers 
- Metabase.com
- [Polymail](https://polymail.io/)

Andrew

- [Tide of History](https://wondery.com/shows/tides-of-history/)


### Transcript


