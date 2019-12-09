---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 081: Discussing Deployment'
date: 2019-12-10T11:00:57.522Z
episode_number: 081
duration: '51:28'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_081_Panel.mp3'
tags:
  - elixir_mix
  - podcast
question1: What is a benefit of releases?
answer1: Faster start up time.
question2: Should you use hot code reload in production?
answer2: >-
  The panel advises playing with it and trying it out but wait to use it in
  production until you have some expertise with it. 
question3: What should you ask yourself before choosing a deployment process?
answer3: Am I the one who has to manage the whole thing? Do I have an operations team?
question4: What is Heroku good for?
answer4: 'small or midsize projects. '
---
In this episode of Elixir Mix the panel has a conversation about a few things they have been thinking about. First, they shout out to anyone who would love to chat about config change callbacks. Then they dive into deployment discussing the updates that have happened this year. They share their experiences with the changes and compare the Elixir release to Distillery.

There are many options for deployment and they discuss some of the ones they have used. They consider services and do it yourself options. The panel shares lessons learned through their deployment experiences and give pro-tips for beginners and those new to Elixir.

The next topic they discuss is hot code reload. Michael shares his fascination with this practice and explains what it is. The panel discusses the possibilities and use-cases for hot code reload. Hot code upgrade is also discussed.

**Panelists**

- Mark Ericksen
- Michael Ries
- Eric Oestrich

**Sponsors**

- [Sentry](http://sentry.io/)– use the code "devchat" for two months free on Sentry's small plan
- [CacheFly](https://www.cachefly.com/)

## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

> **"The MaxCoders Guide to Finding Your Dream Developer Job" by Charles Max Wood is now available on Amazon.**  [**Get Your Copy Today!**](https://www.amazon.com/gp/product/B081MBL5C9/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=devchattv-20&linkId=9d61363241636e2546ef46abba198746&language=en_US)

## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

**Links**

- [grapevine](https://github.com/oestrich/grapevine/blob/master/Dockerfile.releaser)
- [Deploying with Docker](https://hexdocs.pm/distillery/guides/working_with_docker.html)
- [https://hexdocs.pm/phoenix/heroku.html](https://hexdocs.pm/phoenix/heroku.html)
- [https://www.heroku.com/](https://www.heroku.com/)
- [https://cloud.google.com/kubernetes-engine/](https://cloud.google.com/kubernetes-engine/)
- [https://www.ansible.com/](https://www.ansible.com/)
- [https://gigalixir.com/](https://gigalixir.com/)
- [sh](https://gist.github.com/oestrich/52ac2afa26f48e927d0078d885afc01b)
- [Running migrations](https://hexdocs.pm/distillery/guides/running_migrations.html)
- [release\_tasks.ex](https://github.com/oestrich/grapevine/blob/master/lib/grapevine/release_tasks.ex)
- [Configuration and releases](https://elixir-lang.org/getting-started/mix-otp/config-and-releases.html#releases)
- [mix release](https://hexdocs.pm/mix/Mix.Tasks.Release.html)
- [bserver\_cli](https://github.com/zhongwencool/observer_cli)
- [Erlang: The Movie](https://www.youtube.com/watch?v=xrIjfIjssLE)
- [Using Erlang Distribution to test hardware](https://embedded-elixir.com/post/2018-12-10-using-distribution-to-test-hardware/)
- [The Athens Affair](https://spectrum.ieee.org/telecom/security/the-athens-affair)
- [ElixirConf 2018 - Docker and OTP Friends or Foes - Daniel Azuma](https://www.youtube.com/watch?v=nLApFANtkHs)
- [Richard Carlsson - The art of the live upgrade - 10 yrs of evolving a live system | Code BEAM SF 19](https://codesync.global/media/the-art-live-upgrade-richard-carlsson/)
- [https://www.facebook.com/Elixir-Mix](https://www.facebook.com/Elixir-Mix)
- [https://twitter.com/elixir\_mix](https://twitter.com/elixir_mix)

**Picks**

**Mark Ericksen:**

- [Hot Rod](https://www.imdb.com/title/tt0787475/)
- [Install Elixir using asdf](https://thinkingelixir.com/install-elixir-using-asdf/)

**Michael Ries:**

- [https://twitter.com/fhunleth/status/1195524113617637376](https://twitter.com/fhunleth/status/1195524113617637376)
- [scenic sensor](https://github.com/boydm/scenic_sensor)

**Eric Oestrich:**

- [Elixir Wizards](https://podcast.smartlogic.io/?season=1)
