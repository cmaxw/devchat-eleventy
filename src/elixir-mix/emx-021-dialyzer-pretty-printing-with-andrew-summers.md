---
layout: layouts/post.njk
title: >
      EMx 021: “Dialyzer Pretty Printing” with Andrew Summers
date: 2018-10-02 10:00:26
episode_number: 012
duration: 53:34
audio_url: https://media.devchat.tv/elixir-mix/EMx_021%20_Dialyzer_Pretty_Printing_with_Andrew_Summers.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Charles Max Wood
- Mark Eriksen
- Eric Berry
- **Special Guest:** [Andrew Summers](https://twitter.com/chris_mccord?lang=en) 

In this episode of Elixir Mix, the panel talks to Andrew Summers who lives in Chicago, currently. Working on Elixir development, and here to talk about how he wrote the dialyzer pretty printer. He is a software engineer for Albert.io, makes cool stuff every day, loves punk music, and Philadelphia sports. The panel talks about the Dialyzer pretty printing, Elixir, code writing, and more!

**Show Topics:**

1:07 – Why are you famous?

1:11 – Andrew: Answers the question.

1:34 – Chuck: Nice. Is the dialyzer printer complete pretty printing or is it more than that?

1:45 – Andrew talks. He mentions the background information on this specific printer, which was written a decade ago.

4:13 – Panel: One thing that is helpful is that it is a static code analysis. In the Elixir we are writing these spec statements. For nothing else than this type is coming out. Then this looks at the code, and your spec says you are returning this, but I can tell that you are also returning X, Y, or Z. So it is helping us see what we are declaring a code to do, and that’s really what the code is doing.

5:28 – Guest: Yes, exactly. To continue that topic here is what else it’s saying...

6:08 – Panel: Our panelist is not here, but he has had to fix code before with that problem. With Dialect Dialyzer – how do we say this library is out-of-date? The code is out-of-date. How do I get my stuff to pass – to clean up my site?

6:54 – Guest: Containing that warning.

Guest goes into further detail how to problem-solve this issue.

8:02 – Panel: So you are saying that I can funnel.

8:20 – Panel & Guest go back-and-forth talking about this topic.

9:49 – Panel: I am still diving into the system. Haven’t really used the printer, yet.

Panelist asks Guest a question.

10:04 – Guest: At the forefront there are some configurations to help with that.

11:16 – Panel: Why would someone not want to use this? What are the cons?

11:23 – Guest: It would have to do more with CI than anything (one con).

13:06 – Panel: Lots of people are coming to Elixir New. Great. What is the selling point? Why should someone invest his or her time in this project?

13:33 – Guest: I find looking for a type spec is one more piece of information that could help the reader that would tell them what the code should be doing. Any information from the original author to be passed down is great. Having the machine to check that, whenever you push code, it’s an imperfect check (as we were saying). If it can tell you that you did something wrong, then why not? It gives you that extra red flag. There are huge benefits to that. Same reason we write unit tests.

15:20 – Panel: You are learning Elixir right, Chuck?

Panelist talks about tech specs, code writing, and learning projects.

16:25 – Panel: Here is a tip to learning. One thing that I did I came to an existing project and writing a sub-system ( as series of modules) Writing the tech specs. As they are interacting with each other, then writing Dial Elixir, and grab the output to the file path to where my code is. Within my own code find where I am inconsistent. Andrew – you could get pages of output, right? Any tips for users?

17:37 – Guest: Isolate portions of your code base.

19:27 – Chuck: I do like the idea of the umbrella. Phoenix app out into an umbrella. A sub apps and they are more centered, smaller sized. Then, yeah. Start with Dialyzer on just that project. Isolate it, and this app in the umbrella. The output is much smaller, and good success with that. Now, one of the new features you added was the language / the code that it reports is an ERLANG term. That is not familiar to most Elixir developers. Especially if you are new to it. If you are turning this into a friendly Elixir thing, then you had to learn other programs. How did you get into this path?

21:00 – Andrew: Whenever there was complicated “something” at work – I was the person to go to.

As I started to do it more and more I saw patterns in the output. Things were kind of predictable, and how to format things. It synchronizes weird. What would I do to write this task? Researched. There are 2 tools = [LEEX](http://erlang.org/doc/man/leex.html) and [YECC](http://erlang.org/doc/man/yecc.html). If you have 2 files in your source directory...

22:56 – Advertisement – [Digital Ocean](https://www.digitalocean.com/)

23:39 – Panel: It’s cool.

23:58 – Guest: It brought me back to some courses from school. I thought that was funny. They are pretty contained tools.

24:36 – Panel: Part of your motivation was from Jose.

24:49 – Guest: Yes, definitely.

25:39 – Did you have any questions for Jose?

26:35 – Panel: You added the feature of...

[CREDO is pretty well-known.](https://github.com/rrrene/credo)

27:28 – Guest: Sure, I guess I did skip some of that.

Andrew talked about different libraries, ERLANG modules, and so on.

28:38 – Panel: What else are you doing?

28:45 – Getting error messages fixed for version 1.0. Trying to close-up the residual things.

30:18 – Guest keeps talking about support and other bugs.

Andrew: If you see something, say something.

31:00 - Panel: There are languages that run on the beam. Something to create something more standard so different languages can depend on. Is there anything like that? To help you with your tooling?

31:40 – Andrew: Good question! Some of the things that happen at the Dialyzer level, stuff just gets dropped.

33:47 – Guest: How this works all together...

35:15 – Chuck: How to contribute to Dialyxir?

35:30 – Guest: Around error messages – is the best place to look. If you have a good editor hand, good place for that. If you are further into the compiler land – might want to play with that.

36:29 – Guest: [ERLEX](https://github.com/asummers/erlex)

36:43 – Chuck: What did you learn about building these libraries?

36:55 – Guest: I learned a lot about the construction of Elixir.

Guest dives into this more.

38:25 – Chuck: The principle that you cannot bind...

38:51 – Guest: ...this area of my code-base... it would be nice to turn off those features. When I really do need it – I need it, but not so if I don’t need it.

39:39 – Panel: I want to point someone to a resource: [TypeSpecs](https://hexdocs.pm/elixir/typespecs.html).

39:54 – Guest: I used that so much! Wonderful resource, I learned so much stuff! I stole all the output from that. I didn’t know that language had that?!

40:20 – Panel chimes in about this resource some more.

41:02 – Guest: We really do have a simple language. There are some weird things, but not a lot of constructs under the hood. Only a few data structures. It could have been more complicated. I was worried about that – but that never happened, because...

41:41 – Panel: Thanks for adding that. Very true.

42:51 – Guest talks about other things that are very simple, too.

44:35 – Panel: Are you doing fulltime with Elixir for programming?

44:35 – Guest: Yes, we are using other Elixir and JS App. In another life I used...

They all can teach you something. Sometimes the journey of going there and realizing WHY you don’t want to be there is sometimes worth the journey!

45:20 – Panel asks guest a question.

45:25 – Guest answers question.

Andrew: We have enjoyed our time in Elixir. It’s nice.

46:27 – Panel: Anything else?

46:33 – Panel: Where can people find you online?

46:40 – Guest: Elixir Slack, Twitter, GitHub.

47:01 – Picks!

47:05 – Advertisement – [Code Badges](http://codebadge.org/)

**Links:**

- [Andrew Summers’ Twitter](https://twitter.com/_asummers)
- [Credo](https://github.com/rrrene/credo)
- [Erlang](http://erlang.org/doc/man/code.html)
- [Dialyxir](https://github.com/jeremyjh/dialyxir)
- [LEEX](http://erlang.org/doc/man/leex.html)
- [YECC](http://erlang.org/doc/man/yecc.html)
- [Credo](https://github.com/rrrene/credo)
- [ERLEX](https://github.com/asummers/erlex)
- [TypeSpecs](https://hexdocs.pm/elixir/typespecs.html)
- [Curated Dev News for Busy Developers](https://www.dailynow.co)
- [EX\_JSON\_SCHEMA](https://github.com/jonasschmidt/ex_json_schema)
- [React – Jsonschema – form](https://github.com/mozilla-services/react-jsonschema-form)
- [Announcing Distillery 2.0](https://dockyard.com/blog/2018/08/23/announcing-distillery-2-0?utm_source=elixirdigest&utm_medium=email&utm_campaign=featured)
- [Distillery’s documentation!](https://hexdocs.pm/distillery/home.html)
- [MKDocs](https://www.mkdocs.org)
- [EX\_Json\_Schema](https://github.com/jonasschmidt/ex_json_schema)

**Sponsors:**

- [Get a Coder Job](http://getacoderjob.com/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Code Badges](http://codebadge.org/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

**Eric**

- [Chrome Extension for News](https://www.dailynow.co/)

**Mark**

- [Announcing Distillery 2.0](https://dockyard.com/blog/2018/08/23/announcing-distillery-2-0)
- [MKdocs](https://www.mkdocs.org)
- https://hexdocs.pm/distillery/home.html. 

**Charles&nbsp;**

- [Launch by Jeff Walker](https://www.audible.com/pd/Launch-Audiobook/B01ETNAEE0?source_code=GO1GB907OSH060513&gclid=Cj0KCQjw_7HdBRDPARIsAN_ltcLGbGMYb5b6fSGgPXj19xLTJ8puo1yq6lrFAy4Yb9lpmN19Y2XfRJoaAi-OEALw_wcB&gclsrc=aw.ds)
- [Downcast](http://www.downcastapp.com)

**Andrew**

- [Ex json Schema](https://github.com/jonasschmidt/ex_json_schema)
- [React json schema from](https://github.com/mozilla-services/react-jsonschema-form)


### Transcript


