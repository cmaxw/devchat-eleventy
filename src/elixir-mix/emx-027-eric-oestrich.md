---
layout: layouts/post.njk
title: >
      EMx 027:  ExVenture with Eric Oestrich
date: 2018-11-13 11:00:44
episode_number: 027
duration: 55:22
audio_url: https://media.devchat.tv/elixir-mix/EMx_027_Eric_Oestrich.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Josh Adams 
- Nate Hopkins 
- Charles Max Wood 

**Special Guest:** [Eric Oestrich](https://twitter.com/ericoestrich)

In this episode of Elixir Mix, the panel talks with [Eric Oestrich](https://twitter.com/ericoestrich) who is a web developer who resides in Indianapolis, Indiana. He and the panel talk about ExVenture, Gossip, Cowboy, Raisin, Grapevine, and much more! Listen to today’s episode to hear all about it! Finally, check out Eric’s [ElixirConf talk](https://www.youtube.com/watch?v=lCUKQnkjajo) and his [blog](https://blog.oestrich.org), too!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

0:51 – _Charles introduces the panel._

1:14 – _Nate talks about his background._

1:27 – Chuck: My first programming job I worked with Nate. Nate also works now with Eric Berry. We have a special guest and that is Eric Oestrich. Tell us who you are, please!

1:55 – [Eric:](https://twitter.com/ericoestrich) I work for Smart Logic, LLC. We are a consultancy who has moved to Elixir for the last 2 years.

2:14 – Chuck: Tell us what ExVenture is?

2:46 – Eric: Late 80’s to mid-90’s it’s like a MUD tech space game.

_Eric goes into detail of what ExVenture is._

3:28 – Panel: Familiar with MUDS.

3:36 – Panel: Audience can’t tell that Eric isn’t an old guy. Eric – you aren’t an old gentleman – how did you get into it?!

4:02 – Eric: The concept has fascinated me. It’s pure game mechanics. In school I wrote things in Python and try to make it threaded. Never got it going. After that I wanted to do a MUD but not good enough in C and couldn’t get it working in Ruby neither. But one faithful day (a year ago) I got an echo and chat server and now we have a MUD.

5:02 – Panel: Why should you be interested? I will tell you why. ExVenture is an open source...

I encourage everyone to dig into and play with it! It is a game (so that makes it more fun) but you are dealing with game mechanics. I am also curious where you wanted this to go? What made you say: I want to create this and make it open source?

6:37 – Eric: I like it and work has mostly played for it. It’s MIT because of that. Early in the project (between client work) it was a common thread and that’s why it’s open source.

7:27 – Panel: I ran into you at the conference and you were showing me...

Talk about getting metrics out of your system, please?

8:20 – _Eric answers the question._

9:09 – Panel: When people are trying to get metrics out of their system – what EVEN makes a good metric?

9:21- Eric: I am trying to figure that out myself, actually. I want to know how long it takes for someone to login? Is that someone trying to hack into my system? If you speak at a global channel or something else...

_Eric goes into more detail. Eric also mentions_ [_Prometheus._](https://github.com/prometheus/prometheus)

10:31 – Panel: You mentioned: What would you want to see on a dashboard?

11:01 – _Eric answers the question and mentions_ [_Prometheus EX._](https://github.com/deadtrickster/prometheus.ex)

12:19 – Panel: As you starting building this you were pulling libraries out of it and making them separate libraries. Are you pretty proud of [GOSSIP?](https://gossip.haus)

12:37 – Eric: Yes! [Gossip](https://gossip.haus) is based on web sockets and it’s a[cowboy](https://github.com/ninenines/cowboy) socket.

_Eric talks about Gossip._

13:10 – Panel: What other clients are you trying to support?

13:15 – Eric: There is a JavaScript client and Node-based game called...

There is a bundle system for that. There is also a Python option.

The one thing we haven’t done yet is a C client. That is important b/c most of the games that you could connect to are 25-30 years old.

14:26 – _Panel asks a question._

14:34 – Eric: That is the C client we are waiting for.

14:43 – Panel: You talked at the conference [(see the show notes)](https://www.youtube.com/watch?v=lCUKQnkjajo) you talked about things you learned along the way. Can you talk about your process? What kind of bottlenecks and how did you resolve those issues?

15:10 – _Eric answers the question._

16:44 – Panel: Did you run out of processes?

16:47 – Eric: The VM shut-off – it was just done. That was the first go-around.

19:27 – Eric: After the ElixirConf, I wanted to see how far I could push it.

_Eric continues._

19:51 – Panel: I want to identify some of these principles you just talked about. First, the major block was the gen server is a single process.

20:21 – Panel.

20:24 – Panel: I think that is a common mistake when people come to Elixir in the beginning stages. How did you solve it?

20:50 – _Panelist answers the above question._

21:30 – Panel: That’s one of the big things. It’s an architectural issue. Second, you mentioned really LARGE messages. You were sending around really large messages.

22:20 – Eric: For every 100 players was a gigabyte of ram – it was a lot. And that was mostly b/c every copy...when a new character enters the room then that message gets sent out then it gets copied again, and...

23:08 – Panel.

23:24 – Panel: The third one you mentioned was around data base blocking or...?

Can you talk about this one a little more, please?

23:33 – _Eric answers the question._

24:02 – Panel.

24:30 – Eric: It was always saving...I tricked Echo into saving...There is a lot of things that could be better to save specifically faster.

24:52 – Panel: I think people would hit those 3 points eventually – there is a lot of value to that.

25:09 –Eric: Yes that was near the end of my ElixirConf talk and my blog.

25:23 – Panel.

25:33 – Eric: It came out in May and I figured out that I needed to learn how to cluster in Elixir. That’s what the ElixirConf was a bout from single node to multiple nodes.

_Eric continues._

28:38 – Panel: When you have a cluster – and I join – when I transfer from one room to another room, I could be passed off to another server or node?

29:01 – Eric: Whatever you mean by “being passed off.” Whatever server you land on that’s the one you will be on. The magic is that...

30:08 – Advertisement: [Fresh Books!](https://www.freshbooks.com)

31:15 – Panel: I am going through the code base now and I am excited. It’s going to help me get better at Elixir.

31:32 – Eric: That’s the point of ExVenture.

31:48 – Panel: You host a server so people can see what it’s about – and that’s Mid Mud, right?

32:09 – Eric: Yep, the first hour of you playing. There is a town crier, you request, and then combat monsters. Also, it is plugged into Gossip and you can talk to them.

32:44 – Eric: Yep, there you go: player logged-in!

32:55 – Panel: Maybe not b/c it will turn into a new podcast soon.

33:07 – Panel: What if I want to use Gossip, what is involved there?

33:16 – Eric: [Gossip.Haus/docs](https://gossip.haus/docs) – Go there! Set it up and start sending and receiving events.

34:40 – Panel: When I was trying to understand the Prometheus metrics it helped. And then in downloading it (as a tip), for me, it was easy to use the DOCKER instructions.

35:32 – Eric: Yep, that was done by a community member.

35:40 – Panel: Are you looking for people to contribute?

35:50 – Eric: Yep, I have a public Trello board. There are 2 tags.

36:12 – Panel: Sounds like you have people involved?

36:22 – Eric: Bunch of people came on after the ElixirConf.

36:33 – Panel: If people download it (another tip) in the SEEDS file you will find out the admin username and password. I guess that’s something you can add. Login: ADMIN and Password: PASSWORD. What I thought was fun (playing with it) in the admin screen I got a sense that it’s generic enough that I could create a space game. Like playing with sectors of space. Does that make sense?

37:42 – Eric: I don’t want it to be tied JUST to fantasy b/c that’s what MUD is. Everything should be good for historical/ fantasy/ etc. any genre that you want to do!

38:13 – Panel: I could see a HackFest and the company could create one for their business. You could have a lot of fun with it.

38:38 – Panel.

38:44 – Panel: Hidden things on their websites.

38:50 – Eric: Search TEXT ADVENTURE in Google Search. See show notes below.

39:24 – Panel: There is a whole subculture that people are interested in and I didn’t know that these people existed. I think that is interesting.

39:45 – Eric: There are tons of games out there that are 20+ years old!

39:55 – Panel: What is your favorite old school MUD game?

40:02 – _Eric lists his favorite old school games! One of them is_ [_Achaea!_](https://www.achaea.com)

40:51 – Panel: I like the status bars are really cool. If you haven’t played it you have a health bar. Also you have these expiring times and it’s very cool – modern MUD.

41:22 – Eric.

42:00 – Panel: You came from a Ruby background – what was your transition to Elixir like for you? How did you come to Elixir? What was that like for you?

42:15 – Eric: Yeah some of my friends were into Elixir from a functional standpoint about 2 years ago. They were reading about Phoenix and such. They wanted to see how it was going to go.

43:06 – Panel: Try by fire. Coming from Ruby to Elixir – what some advice would you give the same person?

43:37 – Eric: It was less of a culture shock b/c Phoenix was still kind of “Railsy.”

44:35 – Panel: When I was first learning ERLANG, and telling them that it was a standard library.

44:59 – Eric: It’s using Cowboys Ranch.

45:19 – Eric: There are a number of people out there that they want people to run to SSH b/c it’s more secure.

45:46 – Eric: I guess if we are on this topic about secure...

46:40 – Chuck.

46:51 – Panel: I think there is a lot of value, Eric, and the lessons you’ve learned and the path you’ve gone down. If you are new to Elixir going to ExVenture is a great way to start.

47:20 – Eric.

47:35 – Panel: Just run the format and we can do it that way. I encourage people to download it and see what it’s like as a user, and play with it as an admin. We have a [Meetup](https://www.meetup.com) coming up this Thursday. Eric is coming in virtually into our [Meetup](https://www.meetup.com) group.

48:29 – Eric: Gossip is open source. Grapevine and Raisin – check these out, too, b/c they are open source, too.

48:58 – Panel: Where can people contact you?

49:05 – Eric: [Twitter!](https://twitter.com/ericoestrich) [GitHub!](https://github.com/oestrich) [Mudcoders.com.](https://mudcoders.com)

49:39 – Picks!

49:44 – [Ad: Lootcrate.com](https://www.lootcrate.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [Elm](https://elm-lang.org)
- [Atom.io](https://atom.io)
- [Flutter.io](https://flutter.io)
- [JavaScript](https://www.javascript.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [React](https://reactjs.org)
- [Erlang](https://www.erlang.org)
- [ExVenture](https://exventure.org)
- [Ex\_Venture](https://github.com/oestrich/ex_venture)
- [ExVenture’s Trello Board](https://trello.com/b/PFGmFWmu/exventure)
- [Prometheus](https://github.com/prometheus/prometheus)
- [Prometheus EX](https://github.com/deadtrickster/prometheus.ex)
- [Gossip](https://gossip.haus)
- [GitHub: Gossip](https://github.com/oestrich/gossip)
- [2018 – Conference Talk @ Elixir Conf with Eric Oestrich](https://www.youtube.com/watch?v=lCUKQnkjajo)
- [Eric’s Blog](https://blog.oestrich.org/2018/09/introducing-squabble)
- [Libcluster](https://github.com/bitwalker/libcluster)
- [Raft – GitHub.io – The Raft Consensus Algorithm](https://raft.github.io)
- [pg2](http://erlang.org/doc/man/pg2.html)
- [MidMUD](https://midmud.com)
- [Gossip/Haus/Docs](https://gossip.haus/docs)
- [ExVenture: Docker Environment](https://exventure.org/docker/)
- [Google: Text Adventure](https://www.google.com/search?source=hp&ei=amXPW9DgHtHszgLX1oeYDw&q=text+adventure&btnK=Google+Search&oq=text+adventure&gs_l=psy-ab.3..35i39j0i131l2j0l7.6024.7660..7809...1.0..0.161.1486.14j2......0....1..gws-wiz.....0..0i67j0i131i20i264j0i20i264j0i131i67.BFs-6aK_Hno)
- [Achaea](https://www.achaea.com)
- [Cowboy](https://github.com/ninenines/cowboy)
- [SSH](http://erlang.org/doc/man/ssh.html)
- [Grapevine](https://github.com/oestrich/grapevine)
- [Raisin](https://github.com/oestrich/raisin)
- [ASDF Plugins](https://github.com/asdf-vm/asdf-plugins)
- [Eric’s GitHub](https://github.com/oestrich/)
- [Eric’s Twitter](https://twitter.com/ericoestrich)
- [Brooklyn Nine-Nine](https://en.wikipedia.org/wiki/Brooklyn_Nine-Nine)
- [Elm Packages](https://package.elm-lang.org/packages/mdgriffith/elm-ui/latest/)
- [MetaBase](https://metabase.com)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Eric

- [MUD Coders](https://mudcoders.com/)
- [Elixir LS](https://github.com/JakeBecker/elixir-ls)

Mark

- [ASDF Library](https://github.com/asdf-vm/asdf-plugins)

Josh

- [Brooklyn Nine-Nine](https://en.wikipedia.org/wiki/Brooklyn_Nine-Nine)
- [Elm UI](https://package.elm-lang.org/packages/mdgriffith/elm-ui/latest/)

Nate

- Mentoring and Paired Programming 
- [Metabase](https://metabase.com/)

Charles

- [Monster Hunters International](https://www.amazon.com/Monster-Hunter-International/dp/B004S4ZCMU/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=)


### Transcript


