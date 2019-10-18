---
layout: layouts/post.njk
podcast: adv-in-angular
title: 'AiA 260: NgRx, The Mystical Machine, with Wes Grimes'
date: 2019-10-08T10:00:23.353Z
episode_number: '260'
duration: '51:51'
audio_url: 'https://media.devchat.tv/adventures-in-angular/AiA_260_Wes_Grimes.mp3'
tags:
  - adv_in_angular
  - podcast
  - Wes Grimes
  - Aaron Frost
  - Brian Love
  - Jennifer Wadella
  - Shai Reznik
  - Alyssa Nicoll
question1: 'What is the biggest problem people run into when using NgRx. '
answer1: They do not know where all their actions are.
question2: What does Wes's article on best practice for NgRx cover?
answer2: >-
  The main point covered in the article was how to organize the store and how to
  store it in the file system. It walks through creating angular modules for
  each slice of the store. The second point is covers heavily is the use of
  barrels.
question3: Why does Wes advise against the use of facades in NgRx?
answer3: >-
  When using a facade it entices developers to hop back and for between
  imperative and declarative code.
question4: What are some strategies to help developers code reactively in NgRx?
answer4: >-
  Wes recommends requesting data from the server. This pattern is straight
  forward to implement and handles a lot of the common use cases in the store.
  Aaron suggests turning off default change detection, doing so will force the
  programmers to code reactively. Another way suggested is to structure teams
  separating concerns.
---
In this week’s episode of Adventures in Angular the panel has fun interviewing Narwhal rocks star and NgRx expert, Wes Grimes. Wes starts by sharing how he got started in NgRx. In a previous company, Wes was the lead architect for a project that had need of a state management solution, so it was his job to figure out how to use NgRx. While figuring it out he created a structure for using NgRx and used that structure to write a blog article about best practices for NgRx. 

This blog article took the world by a storm and now has over 200,00 views. People are now building libraries and courses based on his article. The panel has a little considering the possible searches that lead people to his article. Jennifer Wadella shares some of the weirder searches that have led people to her posts. After their fun, the panel tries to get back on track. 

This article thrust Wes into the world of helping people understand NgRx, what he calls a mystical machine. He explains how this article was only the beginning of learning NgRx and that he is currently working on revising that first post. The main point covered in the article was how to organize the store and how to store it in the file system. It walks through creating angular modules for each slice of the store. The second point is covers heavily is the use of barrels.

The biggest problem Wes see people run into in NgRx is they do not know where all their actions are. He shares the solution he uses for this problem, using a public API to group actions so they are easier to find. The panel expresses their frustration with the hard time the CLI has with barrel files. Wes explains why this is a common problem and shares a solution. 

The panel asks for other gotcha’s to watch for when using NgRx. Wes explains how and what developers miss out on when they fail to use selectors to their fullest. When selectors are used correctly and completely developers receive all the benefits of the testing they do on NgRx. The other benefits are builtin memoization and reusability. 

Another gotcha he warns against is using facades before fully understanding NgRx. This really fires up the panel, who then debates the use of facades in NgRx. Aaron Frost expresses his opinion that NgRx isn’t for everything and that by using facades you may not need to use NgRx. Wes explains that the large companies he works for are already committed to NgRx as their solution and he advises them not to use facades.

Wes explains the downsides of using NgRx, the first is when developers jump in before they understand it and back themselves into a corner. Another downside is the upfront investment cost when learning NgRx. 

The panel jumps in wondering what Wes thinks of hiding those developers unfamiliar in NgRx with a facade. Wes explains how in doing this the team would be compromising architecture in order to avoid teaching developers to use NgRx properly. He clarifies that he doesn’t think facades are bad but in order to use them correctly in NgRx developers must first understand how NgRx works. Aaron explains why when working with developers unfamiliar with angular he advises them not to learn NgRx right away.

Wes shares how he has seen developers misuse facades. When using a facade it entices developers to hop back and for between imperative and declarative code. Aaron jumps in and explains that imperative code in reactive programming is very bad. He invites listeners to go out and learn more about this because it is very important to understand. 

The panel considers strategies to help teams code reactively. Wes recommends requesting data from the server. This pattern is straight forward to implement and handles a lot of the common use cases in the store. Aaron suggests turning off default change detection, doing so will force the programmers to code reactively. Another way suggested is to structure teams separating concerns. 

The episode ends with Wes sharing his experience joining the NgRx core team by working in the documentation, filling in gaps that he found. He also shares what will be coming to NgRx. The platform will be expanding beyond just state management, supplying reactive libraries for angular. They are also getting ready for an experimental release of NgRx component. 


**Panelists**

- Aaron Frost
- Brian Love
- Jennifer Wadella
- Shai Reznik
- Alyssa Nicoll

**Guest**

- Wes Grimes

## _Adventures in Angular is produced by DevChat.TV in partnership with Hero Devs_

**Sponsors**

- [Sentry](http://sentry.io/) use the code &quot;devchat&quot; for 2 months free on Sentry small plan
- [Angular Bootcamp](https://angularbootcamp.com/)
- [Flatfile](https://try.flatfile.io/we-built-your-data-importer?utm_source=Devchat-TV-Podcast-Audio-October-2019-EP-1&amp;utm_medium=Podcast&amp;utm_campaign=Devchat-TV-Podcast-EP-1&amp;utm_term=Episode-1&amp;utm_content=Engineer)
- [Cachefly](https://www.cachefly.com/)

**Links**

- [NgRx — Best Practices for Enterprise Angular Applications](https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7)
- [The Facade of NgRx Facades](https://www.pluralsight.com/courses/angular-denver-2019-session-10)
- [Building with Ivy: rethinking reactive Angular | Mike Ryan | #AngularConnect 2019](https://www.youtube.com/watch?v=rz-rcaGXhGk)
- [https://twitter.com/wesgrimes](https://twitter.com/wesgrimes)
- [https://www.facebook.com/adventuresinangular](https://www.facebook.com/adventuresinangular/)
- [https://twitter.com/angularpodcast](https://twitter.com/angularpodcast)

**Picks**

**Brain Love:**

- [The Great Hack](https://www.netflix.com/title/80117542)

**Shai Reznik:**

- [RxJS: A Better Way To Write Frontend Applications - Hannah Howard - JSConf US 2018](https://www.youtube.com/watch?v=zz_o7A0HET8)
- [Complex Features Made Easy With RxJS - Ben Lesh](https://www.youtube.com/watch?v=E3Eego8xKdk)

**Aaron Frost:**

- [Lizzo](https://www.lizzomusic.com)

**Jennifer Wadella:**

-  [https://twitter.com/began\_7/status/1177880930549223424](https://twitter.com/began_7/status/1177880930549223424)
-  [https://github.com/vmbrasseur/Public\_Speaking](https://github.com/vmbrasseur/Public_Speaking)

**Wes Grimes:**

- [ngGirls](http://ng-girls.org/)
