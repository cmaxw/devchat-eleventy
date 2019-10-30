---
layout: layouts/post.njk
podcast: react-native-radio
title: 'RNR 141: EEON with Mitch Masia'
date: 2019-10-29T10:00:00.000Z
episode_number: '141'
duration: '54:14'
audio_url: 'https://media.devchat.tv/reactnativeradio/RNR_141_Mitch_Masia.mp3'
tags:
  - react_native_radio
  - podcast
  - Charles_Max_Wood
  - Josh_Justice
  - Mitch_Masia
  - react_native_
question1: What is Mitch Masia's new project?
answer1: >-
  EEON, an app that gives the user access to important information and data to
  make wise choices when it comes to zero commission trading apps.
question2: What React Native platform is being used?
answer2: >-
  React Native expo has been really helpful because of its straightforward build
  process.
question3: What is being used for visualization of data?
answer3: >-
  React-Native-echarts-wrapper is a great feature that Mitch recommends to check
  out.
question4: What is the best testing protocol?
answer4: >-
  Mitch uses the "testing diamond" to organize what his priorities are and
  Charles Max Wood shares how his priorities changed with testing through the
  years.
---
## Episode Summary

In this episode of React Native Radio, panelists Josh Justice and Charles Max Wood interview Mitch Masia. He is a software engineer from Chicago and works with all things JavaScript, React, React Native, Node, and is currently working on a project to create a financial research platform.

The product is called EEON. It is inspired by the lack of apps for people to easily research and make informed financial decisions when it comes to investing with all the amazing zero commission trading apps out there. They are looking to expand upon the information available within those apps to be able to give a rating system, real time visualizations, and data on financial statements.

They discuss how this app is constructed and Mitch mentions how great Redis Pub/Sub is for real time functionality. He talks about how difficult it has been to work with multiple services and that recently he has condensed some of those services. React Native with Expo is what he is currently using on his frontend.

Right now, iOS is the focus, but android will be following soon thereafter. Mitch acknowledges that most of this already is online, but there is a lack of resources specifically for apps and the panelists agree that how great it is to have an app specifically meant for what they want to do on a web browser.

The panelists discuss how the project was started with Expo and the many templates and preset configurations that are available and they compare it to Rails for React Native. Mitch states that the build process is the biggest benefit with Expo among many others. They go on to talk about the different services that Mitch is using for his frontend and backend and what he has used in the past.

Mitch talks about how to create a seamless dev experience and his intentionality with constants and consistent build and release process. He uses a library called Semantic Release to release software quicker and more efficiently with an automated system. Redis has been a huge asset for Mitch and has used it as a cache, pub/sub mechanism, and loves the API they expose.

Next, the panelists talk about the visualization of data and how Mitch does it. The design has followed an iOS feel with large text and lots of white space. For the charting he used a web view with React Native echarts wrapper, and it has done an exceptional job and Mitch praises the developers who worked on it.

The panelists question Mitch about GraphQL and its automated updating of the cache. He responds with options of optimistic updates and automatic updates and that he uses the latter. Mitch goes into some of the difficulties with implementing the automatic updates, but they’ve been able to get around it to provide a seamless experience.

They next talk about difficulties with animation and that Mitch ended up using a library called React Native Pose that gives a spring like automation. This leads into a discussion about favorite React Native libraries and Mitch talks about React Native Typography which has a lot of prebuilt styles with default weights and sizes which helps the app feel a lot more Native. For forms they have used Formik and React Final Form.

Next, the panelists talk about testing and how Mitch uses the testing diamond, which is to write few end to end tests, a lot of integration tests, and few unit tests. Charles Max Wood used unit testing in the past, but as he has entered the business side, he does more end to end tests because of its importance with client retention.

The panelists discuss more about EEON and how Mitch wants to make the data that the app provides to the user be given in a heat map form to make it more navigable and within certain parameters that the user sets. He uses React Native Snap Carousel with heat maps nested within it to create a very nice-looking UI (see EEON for visual).

Next, the panel talks about collaborating with the app and how the app will be funded. Mitch talks about how the app will have a generous number of free features but will be funded with premium subscriptions to access all of the information. With regards to collaboration, Mitch says the biggest win has been GraphQL and its graphical data explorer and React Native Expo. Mitch talks about how energizing and fun it is to be greenfielding a project and that they are currently testing with financial experts to create this app.

## Panelists

* Josh Justice
* Charles Max Wood

## Guest

* [Mitch Masia](www.linkedin.com/in/mitch-masia/)

**Sponsors**

* [Infinite Red](mailchi.mp/infinitered/radio)
* [CacheFly](www.cachefly.com/)
* [Ruby Rogues](devchat.tv/ruby-rogues/)
* [iPhreaks ](devchat.tv/iphreaks/)

## Links

* [Mitch Masia - GitHub](github.com/masiamj)
* [Mitch Masia - Blog](medium.com/hexient-labs)
* [EEON](www.eeon.com/)
* [Mitch Masia - Slides](slides.com/mmasia)
* [Expo](expo.io/)
* [React Native Typography](github.com/hectahertz/react-native-typography)
* [React Native Snap Carousel](github.com/archriss/react-native-snap-carousel)
* [React Native Popmotion](popmotion.io/pose/learn/native-get-started/)
* [Redis Pub/Sub](redis.io/topics/pubsub)
* [RNR on Facebook](www.facebook.com/ReactNativeRadio/)
* [RNR on Twitter](twitter.com/R_N_Radio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)

## Picks

Josh Justice

* [MobX](mobx.js.org/getting-started.html)
* [Twitter](twitter.com/?lang=en)

Charles Max Wood

* [St. George Marathon](www.stgeorgemarathon.com/)
* [CES](www.ces.tech/)

Mitch Masia

* [Ant Design](ant.design/docs/react/introduce)
* [GraphQL Shield](github.com/maticzav/graphql-shield)
* [Can it be done in React Native? YouTube videos](www.youtube.com/channel/UC806fwFWpiLQV5y-qifzHnA)
* Raquetball
