---
layout: layouts/post.njk
podcast: iphreaks
title: 'iPS 275: Finding Quality Packages using SwiftPM Library with Dave Verwer'
date: 2019-10-15T10:00:49.882Z
episode_number: '275'
duration: '57:08'
audio_url: 'https://media.devchat.tv/iphreaks/iPS_275_Dave_Verwer.mp3'
tags:
  - iphreaks
  - podcast
question1: What is SwiftPM Library?
answer1: >-
  SwiftPM Library is a site that aims to make it easy for people to find quality
  packages that support the Swift Package Manager to integrate into their
  project. It is a repository of all the packages he can find and anyone can
  contribute packages to it.
question2: What is Github package registry?
answer2: ' The Github package registry is a multiplatform, multilanguage tool for registering packages.'
question3: >-
  Why would someone what to use SwiftPM Library instead of Github package
  registry?
answer3: >-
  SwiftPM is faster. Supports only Swift and will a swift specific metadata. The
  packages in SwiftPM Library will be ranked based on quality. 
question4: What are the limitations of SwiftPM?
answer4: >-
  Right now in SwiftPM, it does not support resources, such as zip files and
  images, in packages. Another major limitation of SwiftPM is that you cannot
  switch between languages in a Swift package.
---
In this episode of The iPhreaks Show the panel interviews Dave Verwer about his new SwiftPM Library. Dave is an iOS developer from the UK, he’s been working with iOS since the beginning. He is mostly known for his weekly email newsletter, iOS Dev Weekly, which is released every Friday afternoon.

SwiftPM Library is a site that aims to make it easy for people to find quality packages that support the Swift Package Manager to integrate into their project. It is a repository of all the packages he can find and anyone can contribute packages to it. 

The CocoaPods Quality Index was his inspiration for this library. The CocoaPods Quality Index gives a quality score based on a few metrics, Dave wanted to do this but specifically for packages that support SwiftPM. The panel considers what this means for SwiftPM, which unlike most package managers it does not have a library of packages to use.
 
Dave sees two outcomes for the SwiftPM Library, either it becomes the go-to place for people to discover new packages or Github package registry will come along and kill it. The Github package registry is a multiplatform, multilanguage tool for registering packages. Daves explains the features that SwiftPM Library has that gives it a fighting chance against the Github package registry. 

First, the SwiftPM Library was built with speed in mind. The Github package registry piggybacks on Github search which therefore will take longer. Also, Github is likely to list its packages in a way that he take those packages and include them in his library as well, so Github will not have more Swift supporting packages than the SwiftPM Library.
 
Another thing that sets apart SwiftPM Library is that it is all about 
Swift. The Github package registry also supports other languages like Ruby and Java. It is doubtful that Github will have very many Swift specific features and metadata on their site, where at the SwiftPM Library Dave already has many of those in place. 

The panel asks Dave about SwiftPM and how it compares to CocoaPods and Carthage. He explains that SwiftPM is very similar to using Cocoapods, however, you can create a library using X code and also include other libraries as dependencies. He gives a brief walkthrough of how to replace CocoaPods with SwiftPM in a project. 

SwiftPM has a couple of limitations that the SwiftPM team is currently working on. Right now in SwiftPM, it does not support resources, such as zip files and images, in packages. Another major limitation of SwiftPM is that you cannot switch between languages in a Swift package. The panel considers these limitations and shares how they affect whether or not they choose SwiftPM. 

Once these problems are solved, Dave hopes that everyone will transition to SwiftPM. SwiftPM is managed by Apple, therefore, is a cleaner and better option even though the transition may be painful. The panel shares the things they like about SwiftPM, including how easy it is to use. It becomes so easy to update packages and dependencies after the transition.

Back to the SwiftPM Library, the panel asks Dave more about it works. Dave explains how the quality index works, giving each package a score based on a few quality metrics. The value of a quality index comes from the need to be careful when adding a dependency. The search results on his site are based on the quality score of each package. 

The metrics Dave is currently using to measure are: Does it support the latest version of Swift? How many versions of the package have been released? How many stars does it have on its Github repository? Does the license file exist and is it an open source license that is unencumbered? 

The panel takes a look at what the search results look like. Dave includes everything a developer would need to know in order to choose the best package for their project. The search results highlight the license source. It includes how many libraries and executables are included in the package. The search results show what version of swift and other platforms are supported. Not only does it show you the master branch but also the latest stable version and the latest beta of the package when possible.

Dave walks the listeners through how to contribute packages to the library. Dave explains his philosophy when it comes to running the site, his role is not a gatekeeper. He doesn’t want to decide which packages to include and which to exclude. His hope is that the quality indexing will sort the good from the bad. Anyone can add to the library and anyone can request a removal from the library. Any problems with packages should be deferred back to there maintainers. 


**Panelists**

- Jaim Zuber
- Abbey Jackson
- Gui Rambo
- Andrew Madsen

**Guest**

- Dave Verwer

**Sponsors**

- [Sentry](http://sentry.io/)– use the code “devchat” for two months free on Sentry’s small plan
- [Adventures in .NET](https://devchat.tv/adventures-in-dotnet/)
- [Adventures in Angular](https://devchat.tv/adv-in-angular/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [Launching the SwiftPM Library](https://daveverwer.com/blog/launching-the-swiftpm-library/)
- [Quality Indexes](https://guides.cocoapods.org/making/quality-indexes.html)
- [WWDC 2019 Keynote — Apple](https://www.youtube.com/watch?v=psL_5RIBqnY)
- [Github Package Registry](https://github.com/features/package-registry)
- [Carthage](https://github.com/Carthage/Carthage)
- [Elasticsearch](https://www.elastic.co/start?ultron=%5BEL%5D-%5BB%5D-%5BAMER%5D-US+CA-Exact&amp;blade=adwords-s&amp;Device=c&amp;thor=elasticsearch&amp;gclid=Cj0KCQjw3JXtBRC8ARIsAEBHg4lfQse_MyTndpviuZZ7mZWao-VD0i7l_5--VvLPAwTDrj6KIBCxteoaAiDuEALw_wcB)
- [https://forums.swift.org/c/development/SwiftPM](https://forums.swift.org/c/development/SwiftPM)
- [https://daveverwer.com/](https://daveverwer.com/)
- [https://twitter.com/daveverwer?lang=en](https://twitter.com/daveverwer?lang=en)
- [https://www.facebook.com/ReactNativeRadio/](https://www.facebook.com/ReactNativeRadio/)
- [https://twitter.com/R\_N\_Radio](https://twitter.com/R_N_Radio)

**Picks**

**Dave Verwer:**

- [Advice for Software Apprentices](http://bthdonohue.com/2019/09/27/advice-software-apprentices.html)

**Jaim Zuber:**

- [https://iosdevweekly.com/](https://iosdevweekly.com/)
- Try it using the RSS feed

**Andrew Madsen:**

- [iTerm 2](https://www.iterm2.com/)

**Gui Rambo:**

- [NES Emulator Part #1: Bitwise Basics &amp; Overview](https://www.youtube.com/watch?v=F8kx56OZQhg)
- [NES Emulator Part #2: The CPU (6502 Implementation)](https://www.youtube.com/watch?v=8XmxKPJDGU0)
- [NES Emulator Part #3: Buses, RAMs, ROMs &amp; Mappers](https://www.youtube.com/watch?v=xdzOvpYPmGE)

**Abbey Jackson:**

- [https://cocoahub.app/](https://cocoahub.app/)
