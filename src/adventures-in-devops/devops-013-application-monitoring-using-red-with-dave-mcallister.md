---
layout: layouts/post.njk
podcast: adventures-in-devops
title: 'DevOps 013: Application Monitoring Using RED With Dave McAllister'
date: 2019-10-15T10:00:00.000Z
episode_number: '013'
duration: '36:51'
audio_url: 'https://media.devchat.tv/adventures-in-devops/ADO_013_Dave_McAllister.mp3'
image: /images/uploads/adventures-in-devops.jpg
tags:
  - adventures_in_devops
  - podcast
  - kubernetes
  - Nell Shamrell-Harrington
  - Dave McAllister
question1: What is the RED monitoring method?
answer1: >-
  The RED method identifies three key areas that should be measured in every
  microservice. These areas are rate, error, and duration.
question2: Does RED work with the big picture or the finer details of microservices?
answer2: RED works very well with both levels and everything in between.
question3: How should RED metrics be monitored?
answer3: >-
  RED should be displayed as a set of metrics in a dashboard that can be
  aggregated. 
question4: What benefit comes from using service meshes with microservices?
answer4: >-
  Service meshes provide duration to a microservice that requires little work to
  implement.
---
**Episode Summary**

This episode of Adventures in Devops features Dave McAllister. Dave has an extensive background in open source starting in 1994 working with early versions of Linux. He thrives on the concepts of emerging technologies and being able to innovate things. He also loves understanding what people are doing with emerging technology. 

The discussion opens up by introducing the topic of multi-dimensional monitoring in RED. Dave gives us an introduction into RED as a subset of google’s SRE Golden signals. RED stands for rate, errors, and durations and is a concept that is designed for working with micro services. The DevOps panelists discuss concepts such as saturation and how to ensure correct results from their micro services using the RED concepts as well as some best practices for managing micro services.  

Nell asks about the scope of RED and whether it works with the big picture of what the micro service is doing or if it just works with the finer details. Dave shares that the scope of RED pertains to both. RED helps with observability and how to get the right signals out of all the noise and how to respond once the correct signals are found. He shares that RED should be a set of metrics in a dashboard that can be aggregated. He explains that RED gives the user a way of grouping data together and helping them to normalize functionality and find trends. 

The next topic covered by the DevOps experts is how to map the metrics seen in RED to the user experience. Dave explains how RED monitors the users activity and can put together metrics based on what they’re doing. Using RED to follow user metrics will help to identify trends in where users will have issues and identify problem areas. Using micro services with RED introduces a level of granularity that can be monitored to help improve the performance of the application and improve scaling. RED helps with these improvements most notably by improving reaction time once a problem is found to help correct it as soon as possible. The panelists discuss some real world examples and how real world activities and human tendencies can alter patterns seen in the monitoring. Dave points out that one of the strongest recommendations he can make about RED is its ability to start simple and scale upwards as needed. 

The panelists then go on to discuss the human aspect of RED, how a team would react to changing, and how RED really requires a true DevOps team to reach its full potential. The panelists then share experiences they faced earlier in their careers as developers and how RED could have helped them. Nell brings up the idea of service meshes and how RED applies to them. Dave starts by introducing some problems in micro services and service meshes and the opportunity that exists for RED to come in and help solve those problems. He explains how service meshes in micro services give you duration that you don’t have to implement. They finish with covering the usage of Kubernetes operators.

**Panelists**



*   Nell Shamrell-Harrington

**Guest**



*   Dave McAllister 

**Sponsors**



*   [Elixir Mix](https://devchat.tv/elixir-mix/)
*   [Adventures in Angular](https://devchat.tv/adv-in-angular/)
*   [iPhreaks](https://devchat.tv/iphreaks/)

**Links**



*   [RED](https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/)
*   [Google’s Golden Signals ](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#xref_monitoring_golden-signals)
*   [Kubernetes Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
*   [Istio](https://istio.io/)
*   [Envoy](https://www.envoyproxy.io/)
*   [Prometheus](https://prometheus.io/)

**Picks**

**Nell Shamrell-Harrington**	



*   [Fire Emblem: Three Houses](https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch)

**Dave McAllister**



*   Membership card to Fulham football club
