---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 075: Live View Implementation With Jeff Kreeftmeijer'
date: 2019-10-29T10:00:50.424Z
episode_number: '075'
duration: '34:19'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_075_Jeff_Kreeftmeijer.mp3'
tags:
  - elixir_mix
  - podcast
  - Elixir
  - Jeff Kreeftmeijer
  - Michael Ries
  - Eric Oestrich
  - Josh Adams
  - Mark Ericksen
  - Functional Programming
  - Web Development
question1: What is Live View?
answer1: 'Live View is a library that leverages server rendered HTML. '
question2: What is a GenServer?
answer2: A GenServer is an Elixir process that can be used to keep state.
question3: What is a Pub/Sub?
answer3: >-
  Pub/Sub is short for publish/subscribe and is a messaging pattern that
  publishes messages to a topic rather than sending them directly to receivers.
question4: What is a Dynamic Superviser
answer4: >-
  A supervisor is a process that supervises other processes. A dynamic
  superviser starts with no children and they are created on demand.
---
**Episode Summary**

Jeff Kreeftmeijer works at Appsignal where they create a tool for application monitoring that works in Ruby and Elixir. He works specifically with integrations focusing in Elixir and also writes articles for their Elixir and Ruby newsletters. Jeff started as a Ruby programmer but had an interest in functional programming which lead him to gain an interest in Elixir. When he started at Appsignal they were already considering an Elixir integration and that made it a perfect fit. 

Jeff then shares more details about his involvement in Appsignal’s two newsletters called Ruby magic and Elixir alchemy, both of which are aimed at more experienced programmers. He also details his experience with articles that he wrote on Live Share and how he came to write them. The panelists also introduce the Go game that is written about in these articles.

The next topic covered by the Elixir experts is the Go game Live View implementation mentioned in Jeff’s articles. The panelists draw comparisons of how something similar could have been implemented in React. Jeff highlights that he doesn’t have to write JavaScript and doesn’t have to worry about state either. However, in part 1 of Jeff’s current implementation he used a struct to track the state. In part 2 of the implementation, where he implements the code rule, he has another struct that tracks the game. 

The panelists then discuss how Jeff maintains the game state. In the first version of the implementation he keeps it in the Live View process and when he implemented multiplayer he had to move the game state to a GenServer. He also shares some of the details of why using a GenServer is necessary for multiplayer. Jeff is then asked what his experience was like using a dynamic supervisor and he shares the technical ideas of how this helped him in the project. 

Next the conversation moves to how the game is able to communicate moves between players to each other. The issue with connecting two sessions to the same Live View is that one player won’t be updated if the other makes a move. Jeff details how using a Pub/Sub helps to overcome this issue. The panelists also discuss ideas of how the game could be implemented in a multi server instance. 

Jeff shares how his article series still has many more installments that can come out, specifically citing that they haven’t even covered assigning player connections with different player callers. This kind of functionality would handle the assignment of which players controlled which pieces. Jeff closes with highlighting the convenience that comes from using the libraries that they are using as they natively come with technologies they find helpful for building out an interactive, collaborative project.

Lastly, the panelists discuss what Jeff is currently doing to work more with these same technologies. Jeff shares that he has a side project where he tries to build a fish tank with artificial intelligence and how he uses Live View for this project. 

**Panelists**



*   Mark Ericksen
*   Eric Oestrich
*   Josh Adams
*   Michael Ries

**Guest**



*   Jeff Kreeftmeijer	

**Sponsors**



*   [Sentry.io](https://sentry.io/) use code “devchat” for two months free.
*   [ElixirCasts](https://elixircasts.io/)
*   [JavaScript Jabber](https://devchat.tv/js-jabber/)

**Links**



*   [Appsignal.com](https://appsignal.com/)
*   [Live View article](https://blog.appsignal.com/2019/06/18/elixir-alchemy-building-go-with-phoenix-live-view.html)
*   [Computers and Go](https://en.wikipedia.org/wiki/Go_(game)#Computers_and_Go)
*   [Building the Go Game in Elixir: Time Travel and the Ko Rule](https://blog.appsignal.com/2019/07/04/elixir-alchemy-building-go-in-elixir-time-travel-and-the-ko-rule.html)
*   [Multiplayer Go with Elixir’s Registry, PubSub and Dynamic Supervisors](https://blog.appsignal.com/2019/08/13/elixir-alchemy-multiplayer-go-with-registry-pubsub-and-dynamic-supervisors.html)
*   [Dynamic Supervisor](https://hexdocs.pm/elixir/DynamicSupervisor.html)
*   [PubSub](https://hexdocs.pm/phoenix_pubsub/Phoenix.PubSub.html)
*   [Hayago Github](https://github.com/jeffkreeftmeijer/hayago/tree/master)
*   [GenServer](https://hexdocs.pm/elixir/GenServer.html)
*   [Functional Web Development With Elixir, OTP, and Phoenix](amazon.com/Functional-Web-Development-Elixir-Phoenix/dp/1680502433)
*   [Asciiquarium](https://robobunny.com/projects/asciiquarium/html/)
*   [Terminal Asciiquarium](https://www.fahmi.my.id/terminal-ascii-aquarium.html)
*   [The NeuroEvolution of Augmenting Topologies User Page](https://www.cs.ucf.edu/~kstanley/neat.html)
*   [The NeuroEvolution of Augmenting Topologies](https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies)
*   [Jeff Kreeftmeijer Twitter](https://twitter.com/jkreeftmeijer)
*   [Jeff Kreeftmeijer.com](https://jeffkreeftmeijer.com)

**Picks**

**Josh Adams**



*   [Haskell Parser](https://serokell.io/blog/parsing-typed-edsl)

**Eric Oestrich**



*   [Dragon Quest 11](https://www.nintendo.com/games/detail/dragon-quest-xi-s-echoes-of-an-elusive-age-definitive-edition-switch/)
*   [Wingspan](https://stonemaiergames.com/games/wingspan/)

**Michael Ries**



*   [Fireball Island](https://restorationgames.com/fireball-island/)
*   [Observer CLI](https://hex.pm/packages/observer_cli)

**Mark Ericksen**



*   [Acquired](https://www.acquired.fm/)

**Jeff Kreeftmeijer**



*   [Go (game)](https://en.wikipedia.org/wiki/Go_(game))
*   [Mansions of Madness](https://www.fantasyflightgames.com/en/products/mansions-of-madness-second-edition/)
*   [Alphago Documentary](https://www.alphagomovie.com/)
