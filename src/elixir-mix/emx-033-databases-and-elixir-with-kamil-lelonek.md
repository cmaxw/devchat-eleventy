---
layout: layouts/post.njk
title: >
      EMx 033: Databases and Elixir with Kamil Lelonek
date: 2018-12-25 11:00:14
episode_number: 033
duration: 51:00
audio_url: https://media.devchat.tv/elixir-mix/EMx_033_Databases_and_Elixir_with%20Kamil_Lelonek.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Charles Max Wood

**Special Guest:** [Kamil Lelonek&nbsp;](https://twitter.com/kamillelonek?lang=en)

In this episode of Elixir Mix, the panel talks with [Kamil Lelonek](https://twitter.com/kamillelonek?lang=en) who is a full-stack developer and programmer. Chuck, Mark, and Kamil talk about Elixir, Postgrex, databases, and so much more! Check it out!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

0:48 – Chuck: Hello! Our panel today is Mark and myself. Friendly reminder to listeners: check out my show the [DevRev](http://thedevrev.com). Our guest today is [Kamil Lelonek!](https://twitter.com/KamilLelonek?lang=en)

1:23 – Guest.

1:43 – Chuck: Today, we are talking about databases.

1:55 – Guest.

3:10 – Mark: We have your blog that you wrote in our show notes. Talk about your experience with exploring these features?

3:39 – Chuck.

3:46 – Mark: I didn’t know those features are in Postgrex. Can you talk about your experience and your journey?

4:10 – Guest.

6:17 – Mark: I am curious, what problem were you trying to solve?

6:31 – Guest.

8:12 – Mark: I like you saying: rather than modifying the application code itself, you created a separate application. I think Elixir is a good fit for that – what’s your experience with this?

8:40 – Guest: I agree with this, but let’s think about it in the other way.

9:48 – Mark: Yeah I can see that. It’s good to be aware of the upsides and downsides. It’s an interesting idea.

10:40 – Guest.

11:38 – Chuck: My experience is mostly in Rails. The other way I have solved this problem is “pulling” but this way is more elegant. Before we have talked with Chris McCord about LiveVue. Is there a way to hook this handler up to LiveVue to stream the changes all the way up to the frontend of web application with Phoenix?

12:20 – Guest.

12:55 – _Mark talks about Elixir and GenServer._

13:29 – Guest.

13:49 – Mark: Please go and read Kamil’s blog post because it’s simple and it’s written well!

Mark: I think Elixir is a great usage for GenServers.

14:28 – Guest.

14:35 – Chuck: You setup a store procedure, which I don’t see a lot of people doing within the communities. How necessary is that store procedure that you’ve created there?

15:00 – Guest.

16:16 – Chuck: What if you want to do targeted notifications?

16:28 – Guest.

17:33 – Mark: I am curious if you have experimented with the practical limitations of this? Like at one point does it start to break down?

18:00 – Guest.

20:00 – Chuck: I will be honest I am kind of lazy. Outside of the general use I don’t go looking for these, but when I hear about them I say: wow!

20:09 – Guest.

20:57 – Chuck.

21:15 – _Guest talks about solutions that he’s found._

22:08 – [FreshBooks!](https://www.freshbooks.com)

23:17 – Mark: What other kind of databases have you had experience with for comparison reasons?

23:40 – Guest.

24:56 – Mark: You talked about defaults and I want to come back to this topic.

25:08 – _Mark asks Chuck a question._

25:12 – Chuck: I don’t know.

25:23 – _Mark talks about the databases that his work utilizes._

26:45 – Mark and Chuck go back-and-forth.

27:49 – _Guest mentions a solution to the before-mentioned problem that Mark gave._

28:47 – Mark: It can get messy. I don’t repose this as a permanent solution, but it allows you do a staged-migration.

29:15 – Chuck: Do you run into problems with Postgrex? Most technologies if you don’t run into problems you aren’t pushing it enough (at least that’s my experience).

29:29 – _Guest answers the question._

30:26 – _Mark talks about active, active, active._

31:14 – Guest.

33:25 – Mark: In Elixir, we talk about the things that are in the box and one thing that comes up is “mnesia.” Can you talk about this please?

33:47 – _Guest talks about mnesia._

35:17 – _Mark talks about mnesia some more._

Mark: It is an available option (mnesia), but I don’t know if it’s something that people want when they are looking for something more traditional.

37:04 – Guest.

37:30 – Mark: Yeah something people should be aware of. If you are encountering problems it’s good to know the different tools that are out there and available.

38:42 – Mark: One question: What are some of your favorite features of Postgrex?

38:57 – Guest.

41:08 – _Mark talks about Postgrex’s features._

42:14 – Guest.

43:10 – Mark: I had a case where Elixir and Erlang and you can convert term to binary and binary to term. I took some data structure and converted it to a binary and using Ecto and tell it: serialize this and when it loads back out it is a native Elixir type. It’s not always the right solution, but in my cases it actually worked.

43:59 – _Guest talks about a library that he wrote back-in-the-day._

44:40 – Chuck: Anything else? Nope? Okay – Picks!

44:52 – [Ad: Lootcrate.com](https://www.lootcrate.com)

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
- [“How to use LISTEN and NOTIFY PostgreSQL commands in Elixir?" By Kamil Lelonek](https://blog.lelonek.me/listen-and-notify-postgresql-commands-in-elixir-187c49597851)
- [Guest’s Medium Blog](https://blog.lelonek.me)
- [Postgrex.Notifications](https://hexdocs.pm/postgrex/Postgrex.Notifications.html)
- [Redis.io](https://redis.io)
- [Event Store](https://eventstore.org)
- [PostgreSQL](https://www.postgresql.org)
- [MongoDB](https://www.mongodb.com)
- [Erlang: mnesia](http://erlang.org/doc/man/mnesia.html)
- [GitHub: cachex](https://github.com/whitfin/cachex)
- [GitHub: meh / amnesia](https://github.com/meh/amnesia)
- [PostGIS](https://postgis.net)
- [When to use Ecto, when to use Mnesia](https://elixirforum.com/t/when-to-use-ecto-when-to-use-mnesia/661/6)
- [PostgreSQL](https://www.postgresql.org/docs/9.0/hstore.html)
- [Ecto.Type](https://hexdocs.pm/ecto/Ecto.Type.html)
- [GitHub: Exnumerator](https://github.com/KamilLelonek/exnumerator)
- [YouTube: Entreprogrammers](https://www.youtube.com/user/entreprogrammers/videos)
- [Kamil’s Twitter](https://twitter.com/KamilLelonek?lang=en)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [CacheFly](https://www.cachefly.com)

**Picks:**

Mark

- Being professionally proactive!

Chuck

- [Get A Coder Job eBook](https://devchat.tv/store/get-a-coder-job-ebook/)
- [Challenge: Pomodoro Technique](https://francescocirillo.com/pages/pomodoro-technique)

Kamil

- [Book: Thinking, Fast and Slow by Daniel Kahneman](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555)
- [My Blog](https://blog.lelonek.me)
- [My Site](https://biohacking.lelonek.me)


### Transcript


