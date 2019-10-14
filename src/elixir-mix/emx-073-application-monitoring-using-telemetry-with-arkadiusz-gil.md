---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 073: Application Monitoring Using Telemetry With Arkadiusz Gil'
date: 2019-10-15T10:00:13.461Z
episode_number: '073'
duration: '40:34'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_073_Arkadiusz_Gil.mp3'
image: /images/uploads/elixirmix.jpg
tags:
  - elixir_mix
  - podcast
  - elixir
  - erlang
  - BEAM
  - web development
  - Eric Oestrich
  - Josh Adams
  - Mark Ericksen
question1: What language is Telemetry written in?
answer1: Telemetry started as an Elixir project but ended up being written in Erlang.
question2: >-
  What tools exist for monitoring business data and activity in Elixir
  applications?
answer2: Telemetry is a dynamic dispatching library for metrics and instrumentations
question3: How far reaching is the scope of Telemetry?
answer3: >-
  Telemetry can be used any time a user wants to expose a specific piece of data
  at runtime.
question4: Which languages work with OpenCensus?
answer4: >-
  OpenCensus works with a variety of languages including Go, Java, C#, Node.js,
  C++, Ruby, Erlang/Elixir, Python, Scala and PHP.
---
**Episode Summary**

This episode of Elixir Mix features Arkadiusz Gil. Arkadiusz is a software engineer at Erlang Solutions. He is also a member of the observability working group of the Erlang Ecosystem Foundation. The purpose of this working group is to nurture different areas of the community to maintain libraries, improve tooling, and create documentation. He became a member of this group because of his work on Telemetry. The panelists discuss the background of Telemetry and Arkadiusz explains how it was originally written in Elixir and why they decided to switch over to Erlang. Arkadiusz explains how he became involved in Elixir and Erlang. When Mark asks why he prefers Elixir to Erlang he responds with explaining his affinity for the Elixir syntax and tooling that’s available. 

The conversation then moves to how Telemetry came about. Telemetry started with the goal of creating a tool for monitoring Elixir applications but the creators had no idea what that application would be like. Arkadiusz then describes how he did an exercise with colleagues to identify the specific needs for such an application and how to implement it. The panelists discuss how Telemetry is integrated. They also discuss how to get started with Telemetry metrics and Arkadiusz shares some of the details of how the monitoring service works. 

The next topic that the Elixir experts cover is how to monitor business data and activity. Arkadiusz explains the mechanism that can be used to attach to events in a custom way to retrieve the exact data that the user needs. He shares that Telemetry can really be used any time a user wants to expose a specific piece of data at runtime. Mark asks how this attaching works and this leads to a deeper technical discussion on how Telemetry attaches a mechanism to the application and returns that data, as well as how the listeners work when an event is fired and new data is sent to it. 

The panelists then discuss how OpenCensus works with Telemetry. OpenCensus is a project created to culminate API’s that can be used in different languages to create metrics and other data. Arkadiusz shares a hypothetical example of how this works and how Telemetry works with it. The observability working group has helped contribute to OpenCensus. OpenCensus has a smooth integration and is built to run as smooth as possible. A user can use OpenCensus to build metrics based off of Telemetry events. The OpenCensus project is now called OpenTelemetry and it is a merger of OpenCensus and OpenTracing.

Finally the Elixir experts cover real world examples of users implementing Telemetry as well as how to get involved with the observability working group and Telemetry. For the observability working group it is best to reach out to them telling them what kind of tooling that would be great to work across the ecosystem and other help they need. One of their goals is to put together a set of best practices for monitoring services. 

**Panelists**



*   Mark Ericksen
*   Eric Oestrich
*   Josh Adams

**Guest**



*   Arkadiusz Gil

**Sponsors**



*   [Sentry.io](https://sentry.io/)
*   [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
*   [Adventures in Angular](https://devchat.tv/adv-in-angular/)

**Links**



*   [Erlang Solutions](https://www.erlang-solutions.com/)
*   [Observability Working Group](https://erlef.org/wg/observability)
*   [Erlang Ecosystem Foundation](https://erlef.org/)
*   [Erlang ](https://www.erlang.org/)
*   [Telemetry](https://github.com/beam-telemetry/telemetry)
*   [Telemetry.Metrics](https://github.com/beam-telemetry/telemetry_metrics)
*   [AWS CloudWatch Events](https://hexdocs.pm/aws/AWS.CloudWatch.Events.html)
*   [Programming Elixir](https://pragprog.com/book/elixir/programming-elixir)
*   [OpenCensus](https://hex.pm/packages/opencensus)
*   [OpenTelemetry](https://github.com/open-telemetry)
*   [OpenTelemetry.io](https://opentelemetry.io/)
*   [OpenTracing](https://opentracing.io/)
*   [arkgil on GitHub ](https://github.com/arkgil)
*   [Exometer - Erlang Implementation Package](https://github.com/Feuerlabs/exometer)
*   [Prometheus.ex](https://github.com/deadtrickster/prometheus.ex)

**Picks**

**Eric Oestrich**



*   [UCL parser in Elixir](https://github.com/oestrich/ucl-elixir)

**Josh Adams**



*   [The Depths of Deep Space Nine - YouTube](https://www.youtube.com/watch?v=Lx84P0tQ3zk&list=PLmirOw7JCi82lequHZ-qDacNsPYOVi9fM)

**Mark Ericksen**



*   [How to Create Desktop Application With Elixir](https://puddleofcode.com/story/how-to-create-desktop-application-with-elixir)
*   Terminal command “lscpu”

**Arkadiusz**



*   [Alchemist’s Code](https://www.youtube.com/watch?v=XGeK9q6yjsg)
*   [Philosophy of Software Design](https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201)
*   [The Anatomy of Next](https://foundersfund.com/anatomy-of-next/)
