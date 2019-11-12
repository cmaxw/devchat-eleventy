---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 437: Deploying Rails Onto Kubernetes with Khash Sajadi'
date: 2019-11-12T11:00:31.761Z
episode_number: '437'
duration: '55:41'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_437_Khash_Sajadi.mp3'
tags:
  - ruby_rogues
  - podcast
  - Cloud 66
  - Kubernetes
  - containerization
  - platform as a service
  - Rails
  - Ruby on Rails
  - Node.js
  - Heroku
  - David Kimura
  - Andrew Mason
  - Khash Sajadi
  - Kasia Hoffman
question1: What sets Cloud 66 apart from other platform-as-a-service companies?
answer1: >-
  Cloud 66 differs because they decided to break that unit economy from a data
  center to a server, so they don’t own the entire stack. Instead, they deploy
  what looks like an experience from Heroku onto your own server so you can go
  anywhere you want to go. They talk to the public API of those cloud providers
  within the data center that you choose that your account is in, and then
  provision, deploy, and maintain your application the way that you used to with
  Heroku, on that data center.
question2: How does Kubernetes fit into the Cloud 66 model?
answer2: >-
  Cloud 66 was started with Rails, but they wanted to make it generic and
  available on any framework, and decided this was best accomplished through
  containerization. They originally had their own containerization service, but
  then moved over to Kubernetes. Their Kubernetes for Rails product makes
  deployment of a Rails application onto Kubernetes extremely simple.
question3: What are some situations where Kubernetes is useful?
answer3: >-
  Containerization can help a lot with distinguishing and establishing
  boundaries within a team. Kubernetes can help create uniform servers because
  you can tell it what you want and it will help you get there, including
  notifying you when things don’t align. Kubernetes is also excellent at dealing
  with microservices, if you have a need for a repeatable environment, and
  provisioning the infrastructure for commits. 
question4: What was the original goal of Cloud 66?
answer4: >-
  Cloud 66 started in 2012 with the goal of making Rails deployment simple and
  infrastructure easy to understand for application developers.
---
Khash and Kasia works for Cloud 66, a company started in 2012 with a goal to make Rails deployment simple and infrastructure easy to understand for application developers. As the company has moved towards containerization, they have integrated with Kubernetes. Khash talks about what distinguishes Cloud 66 from other platform as a service companies and why the company was started. He begins by talking about the structure of Heroku, how they own the entire stack down to the server, and how they are bound to a data center. Cloud 66 differs because they decided to break that unit economy from a data center to a server, so they don’t own the entire stack. Instead, they deploy what looks like an experience from Heroku onto your own server so you can go anywhere you want to go. They talk to the public API of those cloud providers within the data center that you choose that your account is in, and then provision, deploy, and maintain your application the way that you used to with Heroku, on that data center. 

Khash talks about how Kubernetes fits into the Cloud 66 model. Cloud 66 was started with Rails, but they wanted to make it generic and available on any framework, and decided this was best accomplished through containerization. They originally had their own containerization service, but then moved over to Kubernetes. Their Kubernetes for Rails product makes deployment of a Rails application onto Kubernetes extremely simple. The panel discusses the different ways that people get to containerization, and situations where containerization is not the correct solution. They also discuss situations where a containerization service like Kubernetes is useful.  Containerization can help a lot with distinguishing and establishing boundaries within a team. Kubernetes can help create uniform servers because you can tell it what you want and it will help you get there, including notifying you when things don’t align. Kubernetes is also excellent at dealing with microservices, if you have a need for a repeatable environment, and provisioning the infrastructure for commits. Khash notes that since moving to a unified infrastructure powered by Kubernetes, upgrades in Cloud 66 take significantly less time and talks about how things have been streamlined.

In the past, David has seen some issues with autoscaling in Kubernetes clusters, and Khash talks about how those things have been addressed and how to approach scaling in general. The first two things you need to define with scaling problems is how much is needed and what is ‘normal’ for your product. It is also important to consider if you need to scale up or scale down, as sometimes scaling down can hold more benefits. Khash has noticed that one thing that’s missing in the market is that as Rails developers they’re all about finding the best tools and getting the job done, while this approach is lacking in Kubernetes. He closes the show by talking about how Cloud 66 is trying to address what a Kubernetes deployment means for a Rails stack.

#### Panelists

* Andrew Mason 
* David Kimura 

With special guests: Khash Sajadi and Kasia Hoffman

### Sponsors

* [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan 
* [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues) Try Cloud 66 Rails for FREE & get $100 of free credits with promo code RubyRogues-19
* [My Angular Story](https://devchat.tv/my-angular-story/) 

## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__**

> **Finding Your Dream Developer Job by Charles Max Wood will be out on November 20th on Amazon.  Get your copy on that date only for $1.**
>
> 

## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__**

### Links

* [Heroku](https://www.heroku.com/) 
* [Kubernetes](https://kubernetes.io/) 
* [Node.js](https://nodejs.org/) 
* [Azure](https://azure.microsoft.com/en-us/) 
* [AWS](https://aws.amazon.com/) 
* [Cloud 66](https://www.cloud66.com/) 

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

#### Picks

Andrew Mason:

* [Rubocop linter action](https://github.com/andrewmcodes/rubocop-linter-action) 

David Kimura:

* [Sam’s Club Southern Style Chicken Bites](https://www.samsclub.com/p/members-mark-southern-style-chicken-bites-3lbs/prod22320888) 
* [Cuisinart Air Fryer](https://www.cuisinart.com/shopping/appliances/airfryers/toa-60) 
* [Kubernetic](https://kubernetic.com/) (in beta) 

Khash Sajadi:

* Follow Khash on Twitter [@khash](https://twitter.com/khash) 

Kasia Hoffman:

* [Noticent](https://github.com/cloud66-oss/noticent)
