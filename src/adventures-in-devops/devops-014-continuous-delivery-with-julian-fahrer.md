---
layout: layouts/post.njk
podcast: adventures-in-devops
title: 'DevOps 014: Continuous Delivery With Julian Fahrer'
date: 2019-10-22T10:00:37.784Z
episode_number: '014'
duration: '1:00:54'
audio_url: 'https://media.devchat.tv/adventures-in-devops/ADO_014_Julian_Fahrer.mp3'
tags:
  - adventures_in_devops
  - podcast
  - docker
  - kubernetes
  - cloud
  - devops
  - CICD
  - continuous integration
  - continuous delivery
  - Nell Shamrell-Harrington
  - Charles Max Wood
  - Scott Nixon
  - Julian Fahrer
question1: What is continuous delivery?
answer1: >-
  Continuous delivery is the ability to deploy to any environment at any point
  in time.
question2: >-
  What is a way to mitigate the risk of breaking code changes being pushed to
  production in a CI/CD environment?
answer2: >-
  Feature flags provide the ability to have certain features only be available
  to certain people. 
question3: How can a team ensure stability of their continuous delivery system?
answer3: >-
  Test automation can help to ensure stability of the system after changes and
  ensure it adheres to standards.
question4: Who should write integration tests for a continuous delivery system?
answer4: It is common to have a dedicated team for writing integration tests.
---
Julian Fahrer is a software engineer with a systems administration and operations background. He currently works at Hover and is helping them move towards continuous delivery. 

Nell opens up the discussion by asking Julian to explain what continuous integration and continuous delivery are. He shares that continuous integration revolves around having testing and automation around the code being pushed to ensure that it works and conforms to standards. Continuous delivery feeds off of the concept of continuous integration and is the ability to deploy to any environment at any point in time. Chuck puts these ideas together by saying that continuous delivery and continuous deployment is about making sure that it’s possible to deploy at any time and actually doing so. 

The next topic covered by the Adventures in DevOps panelists is how to handle apprehension around having a continuous integration / continuous deployment (CI/CD) pipeline. Julian shares that big cultural changes are required to make CI/CD successful. They share that a lot of organizations are nervous about code with breaking changes immediately being deployed. One way to handle this vulnerability is by hiding features behind feature flags so that only certain people, for example the QA team, will have access to the feature.They share why an organization would want to change to a continuous delivery pipeline and some real world examples that they have experienced

Chuck asks what some prerequisites are for a CI/CD pipeline. Scott says that one thing that needs to happen is backfilling areas of the application that previously did not have tests and expanding the testing coverage of the system. Julian shares that these prerequisites depend on how changes are made and shares some specific examples of what that entails. 

Nell asks what it takes for an organization to be able to do continuous delivery. Julian shares that it is mostly process driven. They establish some rules such as shortening the lifetime of development branches and improving how they are deployed. They also have a discussion on how integration tests should come about and who should write them. Julian mentions that you want to empower people and give them the tools they need to succeed. They then cover some of the work that Julian has done with Hover and some of the details of the continuous delivery environment he is building and the steps they took to begin moving towards that workflow.

The topic then moves to dependency management. Nell asks Julian how he approached dependencies in his applications. Julian details how his usage of containers and specific tools helped him. For external environments he says that a database is required and that it would help to have standards for managing dependencies. 

They share how the current development culture is to give the QA team enough time to test a feature before it goes out. With a CI/CD environment, feature flags can be used to gradually roll out a changes and if a certain users needs a specific set of features then an individual environment can be spun up for their use case. The panelists share some thoughts on environments setup and production best practices and tooling.

**Panelists**



*   Nell Shamrell-Harrington
*   Charles Max Wood
*   Scott Nixon

**Guest**



*   Julian Fahrer

**Sponsors**



*   [Adventures in .NET](https://devchat.tv/adventures-in-dotnet/)
*   [Ruby Rogues](https://devchat.tv/ruby-rogues/)
*   [React Native Radio](https://devchat.tv/react-native-radio/)

**Links**



*   [Hover](https://hover.to)
*   [Launch Darkly](https://launchdarkly.com/)
*   [Split.io](https://split.io)
*   [Codefresh.io](https://codefresh.io/)
*   [Argo CD](https://argoproj.github.io/argo-cd/)
*   [Flux](https://fluxcd.io/)
*   [12 factor](https://www.12factor.net/)
*   [The Phoenix Project](https://amzn.to/33fdNru)

**Picks**

**Nell Shamrell-Harrington**



*   [Beef on Weck](https://en.wikipedia.org/wiki/Beef_on_weck)

**Charles Max Wood**



*   [St. George Marathon](https://www.stgeorgemarathon.com/)
*   Marathon Training
*   [Maxcoders.io](https://maxcoders.io)
*   His electric smoker
*   [3-2-1 method for ribs](https://heygrillhey.com/3-2-1-ribs-perfect-fall-off-the-bone-ribs/)
*   The word delightful

**Scott Nixon**



*   Broccoli rabe philly cheesesteak
*   [Ultra Learning by Scott Young](https://amzn.to/31ZAGz6)
*   [Libby app](https://meet.libbyapp.com/) 

**Julian Fahrer**



*   [Accelerate](https://amzn.to/33iuceU)
*   [The State of DevOps](https://puppet.com/resources/whitepaper/state-of-devops-report)
*   [Walk in Balance](https://walkinbalance.net)
