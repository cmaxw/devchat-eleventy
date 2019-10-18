---
layout: layouts/post.njk
podcast: adv-in-angular
title: 'AiA 258: Angular Architecture with Manfred Steyer'
date: 2019-09-24T10:00:18.736Z
episode_number: '258'
duration: '1:08:17'
audio_url: 'https://media.devchat.tv/adventures-in-angular/AIA_258_Manfred_Steyer.mp3'
tags:
  - adv_in_angular
  - podcast
  - Manfred Steyer
  - Aaron Frost
  - Brian Love
  - Shai Reznik
---
In this week’s episode of Adventures in Angular the panel interviews Manfred Steyer, the creator of ngx-build-plus and angular architecture expert and consultant. Ngx-build-plus is a way to extend how the CLI is doing its build. Manfred explains how ngx-build plus works in two different ways. The first is that it provides a partial webpack configurations file that merges with the webpack configuration that the CLI is using. The second, it provides a plugin with free methods that influence the CLI. 

Manfred consults with companies on architecture, he explains that the main problem when people take a simple application and make it complex, big, with a lot of entities and forms. This makes it difficult to manage in the long term. He borrows ideas from domain-driven design to help these companies structure their applications. 

Strategic domain-driven design is one of the main strategies he uses when structuring an application. Strategic domain-driven design is subdividing a big application into subdomains, then modeling those subdomains separately. By modeling the separately, the coupling is limited. This makes it easier to change parts of the code without breaking anything unrelated in the application. 

The panel asks Manfred for recommendations for using domain-driven design in their architecture. Manfred recommends using libraries within monorepos and outlines the benefits. Using this method creates isolation, you can’t easily access everything in the library because of the public API. Manfred explains how a public API works like a facade. 

Nx is the recommended tool for the monorepos, as it adds many great features to the CLI and is not as heavyweight as other monorepo solutions. Manfred explains one of his favorite features called tagging. This restricts which libraries can access another library. The panel discusses some examples of tagging. 

The panel wonders about Manfred’s opinions on state management solutions. Manfred explains that he doesn’t believe that every application needs a state management solution. When used at the wrong time a state management solution is an overkill. He also explains that not using a state management library does not make someone a bad person.

The panel discusses how you know if you need a state management solution. Manfred indicates two things to look for when considering the use of a state management library. First, is there a lot of state? Second, is the state going to be used by many different components? 

If you are not sure he recommends starting with a facade and adding a state management library later if needed.  The panel explains what a facade is. A facade is when you combine a lot of systems under a single API, like jquery. Manfred gives an example of what a management facade should look like. The panel shares experiences explaining how it works and gives advice and examples of using a facade. 

The topic turns to the importance of testing. Manfred shares his testing philosophy, asking how do you sleep at night knowing you have to change a part of the application? Does it scare you because you know you are going to break everything in a terrible and painful way? Or, Do sleep soundly because you know you are safe to do what needs to be done. Shai Reznik equates this to the shake meter, how much does your hand shake when you push the button to execute a change.

Manfred’s recommends starting with unit testing, testing where you need it and avoid a testing coverage goal. Unit testing he explains are more stable than end-to-end testing. You do need end-to-end testing but very little in comparison to unit testing. Aaron Frost shares the tool protractor flake as a way to combat the flakiness of end-to-end testing.

Manfred explains that there are two common mistakes people make in their angular architecture. The first is over-engineering and under-engineering an application. He explains the problems that arise with each and how to combat this problem. The sweet spot can be found by knowing what you want, finding the right structuring to fit what you want. 

The panel wonders how to measure the cleanliness of code in an application. Manfred recommends looking at each indirection and deciding if it is necessary. The panel explains what indirections are, an example is event mechanisms, you can’t see a direct effect. The panel discusses NgRx as an indirection framework. Manfred warns not to use NgRx all the time only when you need it.

This launches the panel onto a tangent of choosing tools and how to weight the pros and cons of each tool. The phrase “use it when you need it” is considered by the panel, the genericness of the phrase is discusses. The panel advises new developers who don’t have the experience to gauge if they need something or not to do the research necessary to understand a tool and to experiment with it. 

The panel comes back to the other common mistake made with architecture which is chatty applications. Applications that send thousands of requests to the backend causing the application to slow. The panel considers why this happens. Aaron explains the concept of affordance and how this results in chatty applications. 


**Panelists**

- Aaron Frost
- Brian Love
- Shai Reznik

**Guest**

- Manfred Steyer

## _Adventures in Angular is produced by DevChat.TV in partnership with Hero Devs_

**Sponsors**

- [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry small plan
- [Angular Bootcamp](https://angularbootcamp.com/)
- [Cachefly](https://www.cachefly.com/)

**Links**

- [NgRx + Facades: Better State Management](https://medium.com/@thomasburlesonIA/ngrx-facades-better-state-management-82a04b9a1e39)
- [https://www.npmjs.com/package/protractor-flake](https://www.npmjs.com/package/protractor-flake)
- [https://twitter.com/manfredsteyer?lang=en](https://twitter.com/manfredsteyer?lang=en)
- [https://www.softwarearchitekt.at/](https://www.softwarearchitekt.at/)
- [https://www.facebook.com/adventuresinangular](https://www.facebook.com/adventuresinangular/)
- [https://twitter.com/angularpodcast](https://twitter.com/angularpodcast)

**Picks**

**Brain Love:**

- [The 5 Big Features of TypeScript 3.7 and How to Use Them](https://httptoolkit.tech/blog/5-big-features-of-typescript-3.7/)

**Shai Reznik:**

- [Angular Testing Course](https://hirez.io/pages/test-angular)
- [Hip-Hop Evolution](https://www.netflix.com/title/80141782)

**Aaron Frost:**

- [RxJs Live](https://rxjs.live)
- [Lover](https://music.youtube.com/playlist?list=OLAK5uy_nAF_sXI8U1xc8DjaTMUcf7v1BTxYfCQTQ)

**Manfred Steyer:**

- [Star Trek: Picard](https://www.cbs.com/shows/star-trek-picard/)
- [ngrx-etc](https://www.npmjs.com/package/ngrx-etc)
