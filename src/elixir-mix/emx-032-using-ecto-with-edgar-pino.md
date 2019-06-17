---
layout: layouts/post.njk
title: >
      EMx 032: Using Ecto with Edgar Pino
date: 2018-12-18 11:00:28
episode_number: 032
duration: 46:18
audio_url: https://media.devchat.tv/elixir-mix/EMx_032_Using_Ecto_with_Edgar_Pino.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen 
- Josh Adams

**Special Guest:** Edgar Pino&nbsp; &nbsp;

In this episode of Elixir Mix, the panel talks with [Edgar Pino](https://github.com/edgar971?tab=followers) who talks with the panel about the latest version of Ecto! They discuss Ecto’s new features and how easy of a transition it was to go from the previous to the newest version. [Edgar Pino](https://github.com/edgar971?tab=followers) is a software engineer who currently resides in Utah! Check out today’s episode!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

1:04 – Mark: Hello! Please give us your background?

1:16 – Guest: I have been in [Elixir](https://elixir-lang.org) for the past year or two and I have been living in Utah.

1:48 – Mark: I love the nature and state parks. Winter is coming, so I hope you are ready!

1:58 – Guest: Winter...hopefully it will be great!

2:20 – _Panelists and guest go back-and-forth._

2:30 – Mark: Let’s talk about your blog posts about Ecto. What are your new announcements?

2:52 – Guest: Our new version was released a few weeks ago.

3:32 – Panel.

3:38 – _The guest talks about the old and new versions of Ecto._

4:03 – Panel: What is new and how is this going to affect me (the new version)?

4:11 – Panel: The transition was pretty painless for me. The only change was the breaking-up of the adapter ad also the timestamp bit. That was it.

4:34 – Panel: Yeah that micro-timestamp surprised me for a second, but it wasn’t that bad after all.

4:52 – Guest: Yeah it was painless for me, too.

5:19 – Panel: Edgar can you talk about the change and what they did with the timestamps?

5:32 – _The guest answers the question._

5:54 – Panel: Elm opted to use the micro-millisecond, too. Time zones aren’t a thing.

6:24 – Mark.

7:08 – Panel: My tests are the only reason why I care about the millisecond.

7:21 – Mark: With the upgrade don’t do what I did.

_Mark talks about how he updated and the issues he had._

8:47 – Guest: Pattern matching?

8:53 – Mark: Yep that sort of stuff. I didn’t need to do it and it was a learning experience. Edgar, please give us an introduction to the blog posts? Why did you want to document it?

9:18 – Guest: I always used Ecto with Phoenix but started learning Ecto by itself. I jotted down notes that I thought was interesting. That’s how it started.

10:17 – Mark: See links in the show notes. Using a gen to use the repo – this is one thing that I didn’t know was an option.

10:46 – Guest.

11:01 – _Mark asks a question._

11:10 – Guest: Not really PHP applications but listening to web messages and hot topics but you are doing the database and serving data...

11:40 – _Guest talks about Ecto and the different versions and features._

12:09 – _Mark chimes-in._

12:23 – Panel: Yep – it’s under the hood and it’s for business logic and doesn’t have a web piece. Stop writing tings for the web – it’s a fad.

12:50 – Mark: It’s an umbrella and saw this through the Phoenix generators.

13:54 – _Guest talks about web applications._

14:06 – Mark: Let’s talk about schema and databases?

14:23 – _Panelist chimes-in._

14:51 – _Panelists and guest talk about schemas, apps, and more. Check it out here._

16:13 – Guest: You will get the data and pass it in as a structure and...

16:23 – Mark: Here is a map of what I’d like you to do on my behalf. It goes to a chain set and I will turn it into a string and this is why it’s failed.

17:25 – Panel.

17:31 – Mark: It’s not hard and it’s pretty easy. Let’s talk about blog posts.&nbsp;

18:10 – Panel.

18:22 – Mark: I use [Absinthe](https://github.com/absinthe-graphql/absinthe) in the library in Elixir to support [GraphQL.](https://graphql.org)

18:50 – Panel.

19:06 – Guest: The total number of results and only once did I need a more complicated thing.

19:34 – Mark: I haven’t had a need for those.

20:01 – _Panelists and guests talk about the hypothetical situations where and how they would use certain features for said situations._

20:23 – Guest: You don’t have to understand right out-of-the-box.

20:40 – Panel: Have you used stored functions as meta-columns in an [Ecto](https://hexdocs.pm/ecto/Ecto.html) schema?

20:48 – _Panelist explains._

21:24 – Guest: I have used them in the past and now I don’t. For me it was hard to debug – maybe it’s just me.

21:43 – Panel: I was introduced to them through a colleague of mine.

21:53 – _Mark chimes-in and talks about him being a DOT NET developer._

22:18 – _Panelist chime-in, too!_

22:50 – Mark.

23:16 – Panel: It was an awful time and not a good idea. 70 pages! Debugging it was hard.

23:35 – Mark: That experience was apart of that burn that I had before. I wanted to stay far away from it as far as I could.

24:00 – Panel: When I was doing it in DOT NET we didn’t have migrations.

24:12 – _Panelist continues._

24:32 – Guest: I wonder if...

24:37 – Panel: It’s just a sequel – it’s not just an [Ecto](https://hexdocs.pm/ecto/Ecto.html) specific feature.

24:48 – Guest.

24:53 – [FreshBooks!](https://www.freshbooks.com)

26:01 – Mark: Edgar you were interested also in HOW Ecto was built. What experience did you have?

26:21 – Guest answers the question.

28:22 – Panel: No you typed REPO there.

28:30 – Guest: Whenever you save or make an update it’s a method. Unlike Ecto you have to all it something else.

28:47 – Panel: Hey let me get those article posted and someone did it in Loop and that is a lot of queries.

29:03 – Guest: Yeah that’s a good point.

29:45 – Mark: Something I’ve noticed is that they talk about performance improvements and better memory usage. Go read about it- it’s great. They talk about HOW Ecto is working and what is behind the scenes.

31:15 – Mark: Another feature that I have seen is UPSERTS.

31:50 – _Guest talks about UPSERTS, too._

32:34 – Mark: Say I have a system that has 3 servers and it’s rolling updates (it will take down one and put up the new code, etc. and it will cycle) one thing they added was a lock on the migration table. I don’t know if you’ve had this – once it hits production data it is slow.

_Mark continues._

33:20 – Panel: I think it was just luck of the draw.

33:30 – _Mark continues._

33:57 – The guest talks about his experience with the above-mentioned scenario.

34:20 – Mark: I like that you both have had goo experiences with your upgrades. I want people to be excited and know that there are great features out there.

34:49 – Guest: Yes, I have found that the blog post is helpful. It’s good to get adapted to the new changes.

35:17 – Panel: Yeah I normally don’t have teasers up to the actual upgrade.

35:28 – Panel: The community is nice and people made a good effort to communicate and help people. They did a GOOD job of helping people to feel comfortable within the transition from one version to the next!

41:37 – [Ad: Lootcrate.com](https://www.lootcrate.com)

END – [CacheFly!](https://www.cachefly.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [Elixir: GenServer](https://elixir-lang.org/getting-started/mix-otp/genserver.html)
- [GenServers](https://elixir-lang.org/getting-started/mix-otp/genserver.html)
- [Elm](https://elm-lang.org)
- [JavaScript](https://www.javascript.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [React](https://reactjs.org)
- [Edgar Pino](https://edgardev.com/getting-started-with-ecto-part-1/)
- [A sneak peek at Ecto 3](http://blog.plataformatec.com.br/2018/10/a-sneak-peek-at-ecto-3-0-breaking-changes/)
- [Ecto](https://hexdocs.pm/ecto/Ecto.html)
- [Active Record Pattern](https://en.wikipedia.org/wiki/Active_record_pattern)
- [Repository](https://martinfowler.com/eaaCatalog/repository.html)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [CacheFly](https://www.cachefly.com)

**Picks:**

Mark

- [Plex](https://www.plex.tv/#modal-tidal)

Josh

- [This Erlang Life](https://erlang-life.tumblr.com)

Guest

- [Ecto](https://hexdocs.pm/ecto/Ecto.html) Documentation! 
- [Edgar Pino](https://edgardev.com) – My blog! 


### Transcript


