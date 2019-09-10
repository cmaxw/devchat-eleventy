---
layout: layouts/post.njk
podcast: adv-in-angular
title: 'AiA 256: Debunking Monorepo Myths  with Victor Savkin'
date: 2019-09-10T10:00:09.387Z
episode_number: '256'
duration: '1:09:34'
audio_url: 'https://media.devchat.tv/adventures-in-angular/AiA_256_Victor_Savkin.mp3'
tags:
  - adv_in_angular
  - podcast
---
**Episode Summary**

Victor Savkin, former angular team member and now cofounder of Narwhal Technologies Inc or Nrwl, returns to Adventures in Angular to teach the panel about monorepos. Victor starts by explaining what monorepos are and why you might need one. Monorepo style development is when multiple projects developed in the same repository and the tools used to manage code between those apps. 

There are many benefits to using monorepos as Victor explains to the panel, such as sharing code between apps. Monorepos help you see what's going on in reality as well as helps you take control of the structure of your code. It also allows for more interesting deployment strategies. Victor talks briefly about his time at Google, working on the toolchain and using a large monorepo.

After the panel asks about the costs of using a monorepo strategy, Victor explains that there are many perceived costs that are actually false or easily overcome. The first perceived cost he tells the panel about is how people get confused and believe that apps have to be deployed together when they really have to be developed in the same repository. The second is the fear of misplaced ownership, that some other developer will come along and ruin their code. Victor explains that ownership can be configured and controlled so that no one you don’t trust can touch your code. 

The next myth developers believe about monorepos is that it doesn’t scale and especially when it comes to performance. Victor explains that when the app is set up correctly and testing used correctly this isn’t a problem. The final perceived cost is that Git will break. Victor debunks this by explaining that you would have to be doing extremely well in order for Git to be a bottleneck and even then there are ways around that problem. 

Victor explains the one real cost and that is you have to change the way you code. The panel discusses a few different coding styles. Victor recommends getting used to single version policy and trunk-based development. He defines trunk-based development, explaining how it works and why it is better for monorepos than long-range branch development. 

Victor sees two types of groups who want to get started in monorepos and he explains what they most commonly do wrong. The first is greenfield projects who jump right in without thinking about it and eventually crash. The second is teams with a giant app and through a monorepo in hoping it will help them structure their app. He explains there is a right way to start using monorepos in both situations.

Asking the important question is how to get started. Agreeing upon the structure, naming, ownership, are you going to build the frontend and backend in the same repo, and the answers to a bunch of other questions will affect your work the most, even more than the tooling you use. Some of these answers will be specific to your company where others will be universal, like naming and ownership. 

With other tools for monorepo out there, the panel asks Victor why Nrwl decided to build their own tool. Victor explains that the current tools on the market do not do it all. Lerna only does one thing great and Bazel is very selective on who can run it. Nrwl is hoping to marry Bazel to Nx, so they can allow everyone to use Bazel. They want Nx to support all tools and even Windows. 

The panel wonders if Nx is perfect. Victor explains that it nearly there. Nx is pluggable and easy to use. It is easy to learn. Victor explains that they really care about developer experience at Nrwl. Nx is free and opensource so everyone can give monorepos a try. 

Resources for learning about monorepos are discussed. Victor invites everyone to watch the ten-minute getting started video on the Nx website. He also lets the listeners know about a new book coming out mid-September and it will be more organizational based than the last. The panel wants to know what comes with Nx. Victor explains that Nx gives you modern tools by setting up Cypress, Jest and other tools for you.

Because Nrwl is a consulting firm, the panel hopes that Victor will have an update on the trends. Victor shares his view that trends don’t really tell you anything about the true status of a framework. How many downloads a framework has doesn’t show the longevity of that framework. Frameworks being used to make large scale apps that will be around for years is how you can tell the longevity of a framework. From that perspective, Victor feels that Angular is doing really well. 

To end the episode, Shai Reznik recalls how passionate Victor was about NgRx a few years ago. He asks Victor if he still feels the same way as before. Victor explains that NgRx is pretty well most of the time, has great docs, is well maintained, and he would still recommend it.


**Panelists**

- Jennifer Wadella
- Brian Love
- Shai Reznik
- Alyssa Nicoll

**Guest**

- Victor Savkin

**Sponsors **

- [Sentry](http://sentry.io/) use the code "devchat" for 2 months free on Sentry's small plan
- [Angular Bootcamp](https://angularbootcamp.com/)
- [My JavaScript Story](https://devchat.tv/my-javascript-story/)
- [Cachefly](https://www.cachefly.com/)

**Links**


- [https://twitter.com/victorsavkin?lang=en](https://twitter.com/victorsavkin?lang=en)
- [Nrwl Nx — An open source toolkit for enterprise Angular applications.](https://blog.nrwl.io/nrwl-nx-an-open-source-toolkit-for-enterprise-angular-applications-38698e94d65)
- [Effective React Development with Nx](https://connect.nrwl.io/app/books/effective-react-with-nx)
- [https://connect.nrwl.io/app/books](https://connect.nrwl.io/app/books)
- [https://nx.dev/angular/getting-started/what-is-nx](https://nx.dev/angular/getting-started/what-is-nx)
- [MAS 040: Victor Savkin](https://devchat.tv/my-angular-story/mas-040-victor-savkin/)
- [042 AiA Dependency Injection and Change Detection with Victor Savkin](https://devchat.tv/adv-in-angular/042-aia-dependency-injection-and-change-detection-with-victor-savkin/)
- [123 AiA Upgrading from Angular 1 to Angular 2 with Victor Savkin](https://devchat.tv/adv-in-angular/123-aia-upgrading-from-angular-1-to-angular-2-with-victor-savkin/)
- [https://nrwl.io/](https://nrwl.io/)
- [https://nx.dev/](https://nx.dev/)
- [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)
- [https://www.facebook.com/adventuresinangular](https://www.facebook.com/adventuresinangular/)
- [https://twitter.com/angularpodcast](https://twitter.com/angularpodcast)

**Picks**

**Brain Love:**

- [https://trunkbaseddevelopment.com/](https://trunkbaseddevelopment.com/)
- [https://www.oreilly.com/library/view/why-angular-for/9781492030294/](https://www.oreilly.com/library/view/why-angular-for/9781492030294/)

**Alyssa Nicoll:**

- Caffeine Content Warning!

**Jennnifer Wadella:**

- The Fall Season
- [NGD Conf](https://www.nvidia.com/en-us/gtc/)
- Laptop Safety at Conferences

**Victor Savkin:**

- [The Boys](https://www.amazon.com/dp/B07QQQ52B3/ref=dvm_us_dl_sl_go_ast_19BOY_TLe%7Cc_375798336448_m_lravi60A-dc_s__?gclid=CjwKCAjw8NfrBRA7EiwAfiVJpWIencec5syX_b3bRgeG8PGZXABeVAKIG7-g0HgHGloSjWWKfqq12RoCmzkQAvD_BwE)
- Use Less Social Media
- [Freedom App](https://freedom.to/)

**Shai Reznik:**

- [https://bit.dev/](https://bit.dev/)
- [True Detective](https://www.amazon.com/gp/video/detail/B07NSNJBXW/ref=atv_dl_rdr)
