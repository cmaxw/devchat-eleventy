---
layout: layouts/post.njk
title: >
      EMx 028: Elixir, Node, and Bitcoin with Pete Corey
date: 2018-11-20 11:00:52
episode_number: 028
duration: 45:24
audio_url: https://media.devchat.tv/elixir-mix/EMx_028_Elixir%20with%20Pete_Corey.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Josh Adams 

**Special Guest:** [Pete Corey](https://twitter.com/petecorey)

In this episode of Elixir Mix, the panel talks with [Pete Corey](https://twitter.com/petecorey) who is a software developer who resides in Denver, CO (USA). He uses Node, React, and Elixir and currently is working on two big projects. Listen to today’s episode to hear the panelists and Pete talk about Elixir, Node, Bitcoin, and Gen\_TCP. Check it out!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

0:50 – Mark: Welcome! Our panel is Josh Adams and our guest is [Pete Corey](https://twitter.com/petecorey)! Pete, can you tell people about yourself?

1:12 – [Guest:](https://twitter.com/petecorey) I am a software developer and I run a web development consultancy company. I use Node and React, and I use Elixir in my free time, and I blog about that and various projects.

1:38 – Mark: How did you get into Elixir?

1:40 – Guest: Node has its limitations. I found myself not understanding concurrency at all. I saw Elixir and I came around to it when it was around its 1.0 era. I have been hooked ever since.

2:43 – _Josh asks a question._

3:00 – Guest.

3:42 – Josh: Yeah it felt like I was putting a s

4:03 – Mark: Letting the mantra of letting it fail or let it crash. How do I recover? You are mentioning about your Node situation that you have these complex situations and how do I get back to a good running state. That’s what I like about Elixir. I’m more concerned: how do I get back to a good running state. It’s a mental shift and I really appreciate it. Instead of worrying about this half, I am focusing more on how do I use it to make it run smoothly?

5:20 – Guest: I totally agree. Learning Elixir has really flipped my mind about developing. I know failure happens – figure it how it fails and then anticipating HOW they might fail to make things easier. In terms of bigger projects...

_The guest talks about the BIG project he is working on now! Listen here!_

7:40 – Panel: That sounds cool! Are you building this by yourself or with other people?

7:54 – Guest: It’s a solo project and I want to keep it that way. I was into [Bitcoin](https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388) before and I bought Mastering [Bitcoin](https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388). Started working through that – how to go through private keys and things like that.

8:40 – Panel: I think that it’s great that you are SHARING through the process. I think that’s awesome and you are showing what you are learning and the pitfalls and the gains.

9:11 – Guest: It’s been a learning process with pattern matching.

10:20 – Panel.

10:30 – Guest talks about bytes.

10:59 – Panel: One of the first things I did in Elixir was...

11:27 – Guest: ...moving bytes around and moving integers and things like that. Elixir is much nicer!

11:40 – Panel: Can you talk about [Gen TCP](http://erlang.org/doc/man/gen_tcp.html), please?

11:55 – Guest: A goal of my project tis to dig into the underlining Erlang properties. I think it’s a shame that people don’t explore this.

The guest talks about what [Gen TCP](http://erlang.org/doc/man/gen_tcp.html) is!

13:38 – Panel: I like using Gen TCP.

13:54 – Guest: Every problem that I had boiled down to my lack of knowledge.

14:29 – Panel: What do you mean: it worked out better?

14:35 – Guest: My Gen TCP connection would pass to the...the issue is that Gen TCP is a streaming protocol. It might contain multiple packets or 1½ packets, etc. Every time I received some data I would impend it to a buffer and I would look for head eliminators. After that would be the packet length and I would split that number of bytes from the original buffer. That’s hard to explain, but...

_The guest talks about a solution!!_

16:21 – Panel: I think there are a few great points there. One, Erlang has a lot of rich history. What are available through Erlang already? Join the Elixir Slack Channel!

17:34 – Panel: Sounds like you are using property testing? I think that’s cool – I want to spend more time digging into this! What is it?

18:00 – Guest: It is pretty cool and new to me.

_The guest talks about unit testing and then property testing._

20:20 – Panel: What kind of experience have you had?

20:40 – [Fresh Books!](https://www.freshbooks.com/?ref=ppc-fb&campaignid=717543354&adgroupid=51893696397&targetid=kwd-298507762065&crid=284659279616&dv=c&ntwk=g&source=GOOGLE&gclid=EAIaIQobChMIqISmqeLh3gIVizRpCh28EQ75EAAYASAAEgJYmPD_BwE&gclsrc=aw.ds)

21:48 – Guest: The one place where I am using property testing is...

23:41 – Panel: That’s awesome. I want to get into it more.

23:50 – Guest: Once I get going it falls together pretty easily. It’s hard to come up with the properties that I want to test.

24:11 – Guest: It’s far more eye opening than unit testing. When you have to think about these fundamental properties you see in a different light.

24:33 – Panel: I am dropping in a link to your blog articles that you tagged. Is there anything else you want to say about your project?

24:55 – Guest: It’s an ongoing project. I haven’t actually implemented the meat of the project, yet. Please stay tuned!

25:25 – Panel: Is it your website: petecorey.com?

25:35 – Guest: Yes www.petecorey/blog.com and my newsletter!

25:47 – Panel.

25:55 – _Guest asks a question._

26:05 – Panel.

26:12 – Panel: What else to talk about?

26:40 – Guest: There is another project to talk about and it’s about guitar chords and things like that; if you want?

26:57 – Panel: Yeah, generating music with Elixir is simple. I know you did the distance between chords thing? What else is super cool about it?

27:27 – Guest: It programmatically generates these guitar chords. The coolest piece is the algorithm all of guitar fingers for a guitar chord and fret this fret, etc. Then I can take the chord with a specific fingering and measure the distance.

28:30 – Panel: Have you seen Google Wave Net? It’s fairly recent.

28:39 – Guest: Is it related to Google Labs?

28:47 – Panel: I doubt it.

29:18 – Guest: Very cool, but I don’t have the AI chops.

29:26 – Panel.

29:29 – Guest: Yeah it works my brain a bit.

29:40 – Guest: Yeah I play too much guitar. I had enough money to buy my own guitar and amp.

29:54 – Panel: Talk about the chord charts. I was looking for the word: tablature!&nbsp;

END – [Ad: Lootcrate.com](https://www.lootcrate.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [Elm](https://elm-lang.org)
- [Atom.io](https://atom.io)
- [Flutter.io](https://flutter.io)
- [JavaScript](https://www.javascript.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [React](https://reactjs.org)
- [Bitcoin](https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388)
- [Gen\_TCP](http://erlang.org/doc/man/gen_tcp.html)
- [Stream Data](https://github.com/whatyouhide/stream_data)
- [Bitcoin](http://www.petecorey.com/blog/tags/#bitcoin)
- [YECC](http://erlang.org/doc/man/yecc.html)
- [LEEX](http://erlang.org/doc/man/leex.html)
- [Music](http://www.petecorey.com/blog/tags/#music)
- [Rustler](https://github.com/hansihe/rustler)
- [ElixirWeekly](https://elixirweekly.net)
- [Jsonnet](https://jsonnet.org)
- [Ksonnet](https://ksonnet.io)
- [Pete Corey’s Blog](http://www.petecorey.com/blog/)
- [Pete Corey’s Twitter](https://twitter.com/petecorey)
- [Secure Meteor](http://www.petecorey.com/blog/2018/01/15/secure-meteor/)
- [Grafonnet-lib](https://github.com/grafana/grafonnet-lib)
- [Prometheus-operator](https://github.com/coreos/prometheus-operator/tree/master/contrib/kube-prometheus/jsonnet/kube-prometheus)
- [The Sparrow](https://www.amazon.com/Sparrow-Mary-Doria-Russell/dp/1501247069)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Josh

- [JSonnet](https://jsonnet.org)
- [KSonnet](https://ksonnet.io)
- [Grafonnet](https://github.com/grafana/grafonnet-lib)
- [Prometheus Operator](https://github.com/coreos/prometheus-operator/tree/master/contrib/kube-prometheus/jsonnet/kube-prometheus)
- 

Mark

- [HSTR](https://github.com/dvorka/hstr)

Pete

- [The Sarrow](https://www.amazon.com/Sparrow-Mary-Doria-Russell/dp/1501247069)


### Transcript


