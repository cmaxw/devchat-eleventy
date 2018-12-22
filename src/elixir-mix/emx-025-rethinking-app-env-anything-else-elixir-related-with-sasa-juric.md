---
layout: layouts/post.njk
title: >
      EMx 025: Rethinking App Env & Anything else Elixir related with Saša Jurić
date: 2018-10-30 10:00:32
episode_number: 025
duration: 1:04:39
audio_url: https://media.devchat.tv/elixir-mix/EMx_025_Rethinking_app_env_%26_anything_else_Elixir_related_with_Sasa_Juric.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Josh Adams 
- Charles Max Wood 

**Special Guest:** Sasa Juric

In this episode of Elixir Mix, the panel talks with Sasa Juric who is the author of Elixir in Action (2<sup>nd</sup> edition) and uses Elixir, Erlang, and OTP. He is from Zagreb, Croatia and you can check out his blog [here](https://www.theerlangelist.com)! The panel talks about his [book,](https://www.manning.com/books/elixir-in-action-second-edition) past and current projects, in addition to configurations, and Elixir.

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

0:50 – Chuck: Panel. Our guest is Sasa Juric. Introduce yourself to us please.

1:12 – Guest: I am known for writing my book and my blogs. I am president to the Elixir forum and helping people out. I have been using Elixir for 5 years; in the past I have used C++ and others.

1:46 – Chuck: App env and configuration and sounds like we could talk about more. Let’s start there, though.

1:59 – Guest.

2:03 – Panel: A little background with configuration b/c it’s been a topic in the community. There is a lot of discussion around it. What is the right way? And there is a change in how we deploy software. We have more docker containers and multiple stages of deployment and tons of configurations through environment settings. Anything you can talk about that?

2:51 – (_Guest answers those questions. He discusses in detail about_ [_docker configurations._](https://docs.docker.com/engine/reference/commandline/config/)

_Also, the guest talks about the various settings per the different environments.)_

7:25 – Panel: That was a thorough summary.

7:29 – Guest: I can talk more.

7:35 – Panel: So we have background on configuration is setup and the goals we have. What are some of the ways that a person with Elixir – how do they start? Tips / advice? They have their app and trying to go to production?

8:22 – (_Guest answers the question.)_

Guest: 90% of the time, this is what you want to do. This is what you do...build it and put it in the folder structure, and you are good to go. Why is this good? You don’t have to have a bunch of...

If you are using Phoenix than you need Node.js and you don’t want to have that on your production. You can easily run side-by-side different versions of Erlang and Phoenix.

11:40 – Panel: You can do that in a single docker file?

11:47 – Guest.

11:51 – Panel: You just copy the files...

11:56 – Panel: I learned I could do that by the distiller 2.0...I hadn’t encountered that before.

12:11 – Guest: Look into the distillery. I want to give compliments to Paul and the team is great. Go to Distillery and see the tutorials.

12:37 – Panel: People think I don’t want to use docker there is an option....

13:01 – Guest.

13:04 – Chuck: Different types of configuration?

13:13 – Guest: Right this discussion too which is probably talking about my blog post, and I have this wild thought about configurations. We can discuss the issues and different solutions. We have these configurations files and they contain these time various configurations and...

There is usually more than 1 configuration file.

17:53 – Panel: You only get agreement. I have had that problem, too, saying what is this configuration? What are THE Settings that are present and yeah that is a problem? You identify these problems in your blog, where it’s not checked in and the code will not...

I have had to work around that in my projects. We are going to create a sample project and it will have defaults. So we can improve the situation.

18:45 – Panel: Class based configurations – I get angry.

19:05 – Guest: I try to challenge this status quo. Some people agree and others disagree. Some say this blanket statement.

19:54 – [Loot Crate!](https://www.lootcrate.com)

20:47 – Guest: Another thing to note is that configurations are free form key values. Remember, my point is that it boils down to some function being involved with these values.

_(Guest continues...)_

23:36 – What is your direction that you are proposing?

23:40 – Guest: We are going to discuss other issues.

23:49 – Panel: As background, as apart of that whole configuration in those distillery docs...

24:41 – What is the next step in the discussion?

24:48 – Guest: Let’s take a step back.

_(Guest talks about Distillery 2.0.)_

27:09 – _Guest continues..._

29:50 – Panel: That makes sense and flexible.

29:58 – Guest: The other complaint is that the Phoenix generator is pushing the community in the wrong direction by forcing a lot of things by default. When you generate your project with...

My team we have used the configuration b/c it seems the right way to do, but what constitutes this? Should this go here and what is a configuration?

30:52 – Panel: I don’t have a synced answer – I don’t have a boundary to say what does or doesn’t’ go in there.

31:13 – Guest: Like the operator might decide to change the HPP port or maybe you want to...? You have to make the decision – what will those things be?

31:32 – Panel: React to a configuration change, it’s very clear to...

31:57 – Guest: It is very arbitrary by its nature. One of the main things (in the blog post) my coworker said it felt like a configuration. What does that mean? Should we have some sort of rules? What is a configuration and what isn’t?

32:33 – Panel comments.

32:55 – Guest: Now I am swinging in a new extreme. You started with parameters nothing more and there is nothing more than functions and parameters.

34:41 – Chuck: You keep bringing up [JSON](https://www.json.org) is there a reason why?

34:55 – Guest: I am not a super fan of JSON for various reasons but we decided on JSON b/c it’s fairly easy. Most of our clients and admin can add it.

35:18 – Chuck: Asks a question.

35:30 – Guest: Getting a configuration...

36:35 – Panel.

36:39 – Guest: With Distillery 2.0...

36:47 – Chuck: What formats do you like if you don’t like JSON?

36:58 – Guest: I am not sure. I would like to run everything in [Elixir](https://elixir-lang.org) directly.

37:47 – Panel: I have been using [Kubernetes](https://twitter.com/kubernetesio?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor). I like that I can have comments.

38:00 – Panel.

38:10 – Panel.

38:17 – JSON is terrible but you can use it and everyone can, too.

38:27 – Guest: I would probably pick JSON between those two. It’s the lesser of 2 evils.

38:40 – Panel.

39:03 – Guest: The key is to clean up this configuration in the first place. My impression is...

39:30 – Panel: I wrote a library, and there was configuration but it doesn’t belong – it’s not a configuration setting nor...so where should those kinds of settings be? I know they are just parameters, but...so we can pull out our configuration files?

40:11 – Guest: It should be grouped by scope. Take Phoenix application...

41:54 – Panel: That’s your exposed configuration – conceivably – but it should be hard coded.

42:04 – Guest: It won’t be hard coded, and the server will be different in production than your machine.

42:17 – Panel.

42:30 – Guest: Precisely. You have to ask: is this a configured parameter or not?

42:43 – Chuck: Can you talk about how to encrypt and/or protect these secrets?

42:56 – Guest: There are these secrets that are broad secrets via...and it depends on you how you’re going to protect them. Use some encryption scheme.

43:20 – Panel.

43:28 – Guest: Right.

43:31 – Chuck: In [Rails](https://rubyonrails.org) it has a secret file, too and you have to provide the key to the app. Then your KEY is a secret. It feels like this circular problem.

43:53 – Guest.

44:54 – Panel: When you are dealing with that sort of thing...library will absolutely assume...and it limits flexibility.

45:17 – Guest: It’s not just an [Elixir](https://elixir-lang.org) thing I have seen it in [Erlang](https://www.erlang.org), too.

47:32 – Chuck: Any stories of people getting this wrong or right? I guess people don’t talk about that; any good stories?

47:54 – Guest: A lot of stories, actually!&nbsp;

49:52 – Panel: Being that Elixir is a more functional language, how do I put in a configuration that will be available at runtime and available very early. I think that is why we stick things up there by putting it in there.

50:35 – Panel.

50:43 – Panel: If it is a library and passes it to a configuration - where does it put it?

50:53 – Panel: A library and not an application...

51:05 – Guest.

51:45 – Panel: Where do I put it?

52:03 – Guest: There are some libraries that have to be configured before we start. The only case that needs some setting before we start is [LOGGER.](https://docs.oracle.com/javase/7/docs/api/java/util/logging/Logger.html)

53:00 – Panel.

53:15 – Guest.

54:00 – (_Guest mentions à la Carte – check it out_ [_here!_](https://libraryh3lp.blogspot.com/2013/06/library-la-carte-resurrected-open.html) _It’s just a factory.)_

55:38 – Chuck: Let’s do picks!

55:46 – [Fresh Books!](https://www.freshbooks.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [JavaScript](https://www.javascript.com)
- [React](https://reactjs.org)
- [Erlang](https://www.erlang.org)
- [Kubernetes](https://twitter.com/kubernetesio?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [JSON](https://www.json.org)
- [Logger](https://docs.oracle.com/javase/7/docs/api/java/util/logging/Logger.html)
- [Docker Config](https://docs.docker.com/engine/reference/commandline/config/)
- [Rethinking App Env](https://www.theerlangelist.com)
- [Distillery Documentation](https://hexdocs.pm/distillery/config/runtime.html)
- [Elixir in Action](https://www.manning.com/books/elixir-in-action)
- [Elixir in Action – Book – 2nd edition](https://www.manning.com/books/elixir-in-action-second-edition)
- [Elixir – Library Guidelines](https://hexdocs.pm/elixir/library-guidelines.html)
- [Elixir Forum](https://elixirforum.com)
- [The 12-Factor App](https://12factor.net)
- [Distillery’s Documentation](https://hexdocs.pm/distillery/home.html)
- [GitHub: Toml-Elixir](https://github.com/bitwalker/toml-elixir)
- [GitHub: Riak\_Ensemble](https://github.com/basho/riak_ensemble)
- [GitHub: Elm – Beam](https://github.com/hkgumbs/elm-beam)
- [GitHub: CodeC-Beam](https://github.com/hkgumbs/codec-beam)
- [Library Guidelines – Elixir](https://hexdocs.pm/elixir/library-guidelines.html)
- [Configuring Elixir Libraries](https://michal.muskala.eu/2017/07/30/configuring-elixir-libraries.html)
- [Handling Configurations](https://hexdocs.pm/distillery/config/runtime.html#a-la-carte-otp-applications)
- [Etcher](https://etcher.io)
- [Tweet Mashup](https://tweetmashup.com)
- [Sasa’s YouTube Video](https://www.youtube.com/watch?v=pO4_Wlq8JeI)
- [Sasa’s Twitter](https://twitter.com/sasajuric?lang=en)
- [Sasa’s GitHub](https://github.com/sasa1977)
- [Sasa’s Information at Elixir Conf](https://www.elixirconf.eu/elixirconf2016/sasa-juric)
- [Sasa’s LinkedIn](https://www.linkedin.com/in/sa%25C5%25A1a-juri%25C4%2587-21b23186/)
- Josh Adams’ Email: josh@smoothterminal.com

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)

**Picks:**

Sasa

- [Run-time](https://hexdocs.pm/distillery/config/runtime.html)
- [Library Guidelines](https://hexdocs.pm/elixir/library-guidelines.html#content)
- [Elixir in Action – Book – 2nd edition](https://www.manning.com/books/elixir-in-action-second-edition)
- [The Erlangelist](https://www.theerlangelist.com)
- [Solid Ground](https://www.youtube.com/watch?v=pO4_Wlq8JeI)

Chuck

- [Tweet Mashup](https://tweetmashup.com)
- [My JavaScript Story Channel](https://devchat.tv/my-javascript-story/)
- [Shush App](https://itunes.apple.com/us/app/shush-microphone-manager/id496437906?mt=12)

Mark

- [Etcher.io](https://etcher.io)

Josh

- [Elm Beam](https://github.com/hkgumbs/elm-beam)


### Transcript


