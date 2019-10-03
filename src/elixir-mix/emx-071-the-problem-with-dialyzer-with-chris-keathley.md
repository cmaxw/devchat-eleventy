---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 071: The Problem with Dialyzer with Chris Keathley'
date: 2019-10-01T10:00:11.951Z
episode_number: '071'
duration: '47:33'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_071_Chris_Keathley.mp3'
tags:
  - elixir_mix
  - podcast
question1: What is the problem with dialyzer?
answer1: >-
  Dialyzer takes a lot of time and has crappy ergonomics. While it tells you a
  lot about an Erlang system that benefit doesn’t extend to Elixir systems.
  Neither doesn’t understand protocols. Mostly he feels that most type algebras
  don’t allow for growth, making changes and making the breaking changes.
  Explaining that type systems all have their costs and benefits, he feels that
  you don’t see the benefits of dialyzer until your system is up and running.
question2: Where does Norm work best?
answer2: In the boundaries of a system
question3: What is the least intuitive way Chris has used Norm?
answer3: Chris has used Norm is to specify the options you need to pass to gen servers.
question4: Why did Chris build Norm?
answer4: >-
  He wrote the library to solve some of the problems seen with dialyzer and
  other problems he was having at work. It is mostly for validating data. He
  wanted to be able to put checks in where ever he wanted and to make it very
  hard to break systems.
---
In this week’s episode of Elixir Mix the panel interviews Chris Keathley about Norm and his recent talk at ElixirConf. Chris is currently working at Bleacher Report, working mostly on backend systems. The panel starts by complimenting his presentation skills and asking him about his dislike for dialyzer. 

Chris shares the many problems he has with dialyzer. Dialyzer takes a lot of time and has crappy ergonomics. While it tells you a lot about an Erlang system that benefit doesn’t extend to Elixir systems. Neither doesn’t understand protocols. Mostly he feels that most type algebras don’t allow for growth, making changes and making the breaking changes. Explaining that type systems all have their costs and benefits, he feels that you don’t see the benefits of dialyzer until your system is up and running.

The panel wonders about Norm, a library written by Chris. Chris explains what it is and what its aims are. He wrote the library to solve some of the problems seen with dialyzer and other problems he was having at work. It is mostly for validating data. He wanted to be able to put checks in where ever he wanted and to make it very hard to break systems. Norm lets you describe data in your system, by taking an arbitrary predicate and making it into a spec. Chris explains how this works and how it will not make any changes until you tell it to. He shares some of the other features offered by Norm. 

The sweet spot for using Norm is the next subject broached by the panel. Chris explains that Norm fits well into the boundaries of systems, this is the most obvious place and the best place to start. The least intuitive way Chris has used Norm is to specify the options you need to pass to gen servers. He explains that it is not the most obvious use for Norm but it has been really helpful with the API.

Next, the panel asks about changesets and how that works with Norm. Chris explains that changesets are very specific while Norm allows more freedom. The biggest difference between the two is that Norm won’t do casting for you. They intentionally built Norm that way because of the way Bleacher Report uses string and atom keys. 

In his talk, Chris explains the concept of design by contract. It means that for every function that you have you can specify preconditions and postconditions. Preconditions are things that have to be true prior to calling the function. Postconditions are things that have to be true after the functions been called. Right now Norm doesn’t provide preconditions and postconditions which provides a way to avoid some of the more expensive costs in production.

Chris uses Norm in all his opensource projects and in projects at work. He shares the benefits he has seen. He believes that most systems will see benefits from Norm if they have room to grow. In his experience, every time they run into something new and think they may need to expand or change Norm, they find that Norm already has everything they need. Chris asks listeners who want to help contribute to Norm to try it out and to give him feedback.


**Panelists**

- Mark Ericksen
- Eric Oestrich
- Josh Adams

**Guest**

- Chris Keathley

**Sponsors**

- [Sentry](http://sentry.io/)– use the code “devchat” for two months free on Sentry’s small plan
- [Adventures in Blockchain](https://devchat.tv/adventures-in-blockchain/)
- [React Round Up](https://devchat.tv/react-round-up/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [ElixirConf 2019 - Contracts for Building Reliable Systems - Chris Keathley](https://www.youtube.com/watch?v=tpo3JUyVIjQ)
- [https://github.com/keathley/norm](https://github.com/keathley/norm)
- [EMx 040: Elixir Outlaws and Adopting Elixir with Chris Keathley](https://devchat.tv/elixir-mix/emx-040-elixir-outlaws-and-adopting-elixir-with-chris-keathley/)
- [EMx 003: Chris Keathley](https://devchat.tv/elixir-mix/emx-003-chris-keathley/)
- [https://keathley.io](https://keathley.io)
- [https://twitter.com/chriskeathley?lang=en](https://twitter.com/chriskeathley?lang=en)
- [https://elixiroutlaws.com/](https://elixiroutlaws.com/)
- [https://en.wikipedia.org/wiki/Design\_by\_contract](https://en.wikipedia.org/wiki/Design_by_contract)
- [https://www.facebook.com/Elixir-Mix](https://www.facebook.com/Elixir-Mix)
- [https://twitter.com/elixir\_mix](https://twitter.com/elixir_mix)

**Picks**

**Mark Ericksen:**

- [zFRAG](https://losttraindude.itch.io/zfrag)

**Eric Oestrich:**

- [War Machine](https://home.privateerpress.com/)

**Josh Adams:**

- ["Unison: a new distributed programming language" by Paul Chiusano](https://youtu.be/gCWtkvDQ2ZI)
- [https://github.com/unisonweb/unison](https://github.com/unisonweb/unison)

**Chris Keathley:**

- [Daniels' Running Formula](https://www.amazon.com/Daniels-Running-Formula-Jack-Tupper/dp/1450431836)
