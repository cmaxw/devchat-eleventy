---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 069: Distributed Databases with Wiebe-Marten ("Marten") Wijnja'
date: 2019-09-17T10:00:40.535Z
episode_number: 069
duration: '1:14:11'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_069_Wiebe-Marten_Wijnja.mp3'
tags:
  - elixir_mix
  - podcast
  - elixir
  - Wiebe-Marten ("Marten") Wijnja
  - Mark Ericksen
  - Josh Adams
  - Distributed
  - Databases
---
**Episode Summary**
 
In this week’s episode of Elixir Mix the panel follows up with Wiebe-Marten ("Marten") Wijnja about his talk at Elixir Conf EU, where he spoke about the distributed system his team was working on. 

They start by discussing the eight fallacies of distributed computing that Marten talked about in talk. He lays out a couple of the fallacies and invites listeners to watch his talk for all eight. Marten explains that these fallacies most commonly happen to developers who are used to working with a single system. The panel discusses how to be mindful of these mistakes and how developers take for granted of how easy one system is to use. 

Marten gives some tool recommendations to help with these fallacies. TLA+ is a small programming language that lets the developer describe their system and it will point out when something is wrong but it works purely on concepts. Erlang quick check implementation is also a tool that will help combat these problems. The last suggestion which was given by the panel is a library called comcast on github that will simulate poor network connections so the developer can see how the system runs on a poor connection. 

Marten describes the byzantine problem. Two nodes or generals are trying to agree on something but communication keeps failing. The various outcomes are considered and Mark Ericksen gives an additional example of he and Josh Adams trying to connect to record a podcast, and how the miscommunication could change the outcome. This is a big problem that complicates using a distributed system. 

The panel discussed CRDT’s and how they are a better way for nodes to sync up. Marten gives a very simple example of a CRDT as a counter. The panel discusses when to use CRDT’s and when not too. Marten explains what questions to ask before using CRDT’s. 

Another way of solving the byzantine problem is by connecting the nodes. The panel discusses the tools they use to connect their nodes. Partisan is one tool, instead of connecting all nodes, each node connects to a specific number of nodes. That way if one node goes down the whole system doesn’t stop, while at the same time not, overwhelming the nodes. Libcluster, another tool, uses Kubernetes and has multiple strategies for connecting nodes so developers can choose the right one for their system.  

The panel asks Marten about multicall and abcast. Marten explains that these tools help one node talk to all the other nodes in a cluster, and multicall will gather the results. Multicall also tells the developer which nodes failed to respond to the request. Mark shares an example of using these tools to effectively communicate between gen servers. 

In Marten’s talk, he described four distributed databases. The panel asks Marten to talk about each one of them. The first one is mnesia. Marten talks about his first experience with Mnesia and how he thought it was amazing. He soon realized while it is still a great tool it also has its quirks.

 He explains that each of these databases has its own quirks. Mnesia doesn't do conflict resolution, that along with a few other things the developer will need to build themselves. This can be a good and bad thing because developers can customize the database to their needs but it’s not ready out of the box. Mark explains the use cases mnesia is good for and even references the mnesia documentation.  

Cassandra is the next database Marten describes. Cassandra is the database discord uses. Cassandra does not let developers control their own conflict resolution. It always uses the latest time-stamp and with nodes that can be confusing. 

Couchdb is another database they discuss. Again, couchdb is also not made to deal with conflicts. It will either solve them randomly or the developer can opt into resolving it themselves. The panel discusses times when this is useful, such as when connectivity is intermittent. 

Riak is the final database and the one Marten’s team chose for their distributed system project. Riak was written in Erlang and is a key-value store and uses CRDT’s. It uses a CRDT conflict resolution. Marten shares his experience using Riak. The panel considers Riak’s history and need for some love.  

Marten gives an update on planga, the chat application they were building the distributed system for. Marten explains that during the talk they were in the middle of development. He shares the story of why they wanted a distributed system for this chat application. The client they were doing it for wanted to do video streaming but pulled out in the end. When the client no longer needed the video streaming solution they stopped building the distributed system. Marten is still hopeful they will go back and finish it. 

To end the episode Marten shares his programming journey. He started programming at age nine. At age 12 he started doing professional web development. After a few years of that, he started doing some frontend work in JavaScript. Once that got old, bitcoin was getting big so he and some friends got into that. Finally, he got a job doing backend work with Ruby while at university. When he heard about Elixir he was so excited he learned the basics in one weekend and has loved it ever since. 


**Panelists**

- Mark Ericksen
- Josh Adams

**Guest**

- Wiebe-Marten ("Marten") Wijnja

**Sponsors**

- [Sentry](http://sentry.io/)– use the code "devchat" for two months free on Sentry's small plan
- [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
- [My Ruby Story](https://devchat.tv/my-ruby-story/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [Wiebe Marten Wijnja - An adventure in distributed programming - ElixirConf EU 2019](https://www.youtube.com/watch?v=u-b4rJ0RTrk)
- [https://elixirforum.com/](https://elixirforum.com/)
- [https://lamport.azurewebsites.net/tla/tla.html](https://lamport.azurewebsites.net/tla/tla.html)
- [http://www.quviq.com/products/erlang-quickcheck/](http://www.quviq.com/products/erlang-quickcheck/)
- [https://github.com/tylertreat/Comcast](https://github.com/tylertreat/Comcast)
- [https://en.wikipedia.org/wiki/Byzantine\_fault#Byzantine\_Generals&#39;\_Problem](https://en.wikipedia.org/wiki/Byzantine_fault#Byzantine_Generals&#39;_Problem)
- [https://en.wikipedia.org/wiki/Conflict-free\_replicated\_data\_type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)
- [https://github.com/bitwalker/libcluster](https://github.com/bitwalker/libcluster)
- [http://partisan.cloud/](http://partisan.cloud/)
- [http://erlang.org/doc/man/mnesia.html](http://erlang.org/doc/man/mnesia.html)
- [https://learnyousomeerlang.com/mnesia](https://learnyousomeerlang.com/mnesia)
- [How Discord Stores Billions of Messages](https://blog.discordapp.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7?source=---------0-----------------------)
- [https://pouchdb.com/](https://pouchdb.com/)
- [https://planga.io/](https://planga.io/)
- [https://riak.com/](https://riak.com/)
- [https://github.com/basho/riak\_core](https://github.com/basho/riak_core)
- [https://riak.com/where-to-start-with-riak-core/](https://riak.com/where-to-start-with-riak-core/)
- [Using Erlang, Riak and the ORSWOT CRDT at bet365 (...) - Michael Owen - Erlang User Conference 2015](https://www.youtube.com/watch?v=WXmO1IvzIZY)
- [https://hex.pm/packages/effects](https://hex.pm/packages/effects)
- [https://github.com/graninas/automatic-whitebox-testing-showcase](https://github.com/graninas/automatic-whitebox-testing-showcase)
- [https://github.com/Qqwy/elixir-riak\_ecto3](https://github.com/Qqwy/elixir-riak_ecto3)
- [https://hex.pm/packages/sea](https://hex.pm/packages/sea)
- [https://twitter.com/WiebeMarten](https://twitter.com/WiebeMarten)
- [https://github.com/qqwy/](https://github.com/qqwy/)
- [https://wmcode.nl](https://wmcode.nl)
- [https://www.facebook.com/Elixir-Mix](https://www.facebook.com/Elixir-Mix)
- [https://twitter.com/elixir\_mix](https://twitter.com/elixir_mix)

**Picks**

**Mark Ericksen:**

- [ElixirConf YouTube Channel](https://www.youtube.com/channel/UC0l2QTnO1P2iph-86HHilMQ/videos)

**Josh Adams:**

- [Automatic White-Box Testing with Free Monads](https://www.reddit.com/r/haskell/comments/ctuems/automatic_whitebox_testing_with_free_monads/)

**Wiebe-Marten ("Marten") Wijnja:**

- [https://propertesting.com/](https://propertesting.com/)
- [https://globalgamejam.org/](https://globalgamejam.org/)
- [https://polyphasic.net/](https://polyphasic.net/)
