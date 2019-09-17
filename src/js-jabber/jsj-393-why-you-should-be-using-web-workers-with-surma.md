---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 393: Why You Should Be Using Web Workers with Surma'
date: 2019-09-19T10:00:38.427Z
episode_number: '393'
duration: '57:36'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_393_Surma.mp3'
image: /images/uploads/javascript_jabber_thumb.jpg
tags:
  - js_jabber
  - podcast
  - Charles Max Wood
  - Christopher Buecheler
  - Aimee Knight
  - AJ O'Neal
  - Surma
  - web workers
  - multithreading
  - JavaScript
---
### **Episode Summary**

Surma is an open web advocate for Google currently working with WebAssembly team. He was invited on the show today to talk about using web workers and how to move work away from the browser’s main thread. His primary platform is bringing multithreading out of the fringes and into the web. 

The panel talks about their past experience with web workers, and many of them found them isolated and difficult to use. Surma believes that web workers should pretty much always be sued because the main thread is an inherently bad place to run your code because it has to do so much. Surma details the differences between web workers, service workers, and worklets and explains what the compositer is. 

The panel discusses what parts should be moved off the main thread and how to move the logic over. Surma notes that the additional cost of using a worker is basically nonexistent, changes almost nothing in your workflow, and takes up only one kilobyte of memory. Therefore, the cost/benefit ratio of using web workers gets very large. They discuss debugging in a web worker and Surma details how debugging is better in web workers. 

Surma wants to see people use workers not because it will make it faster, but because it will make your app more resilient across all devices. Every piece of JavaScript you run could be the straw that breaks the camel’s back. There’s so much to do on the main thread for the browser, especially when it has a weaker processor, that the more stuff you can move away, the better.

The web is tailored for the most powerful phones, but a large portion of the population does not have the most powerful phone available, and moving things over to a web worker will benefit the average phone. Surma talks about his experience using the Nokia 2, on which simple apps run very slow because they are not being frugal with the user’s resources. Moving things to another thread will help phones like this run faster.  

The panel discusses the benefit of using web workers from a business standpoint. The argument is similar to that for accessibility. Though a user may not need that accessibility all the time, they could become in need of it. Making the app run better on low end devices will also increase the target audience, which is helpful is user acquisition is your principle metric for success. 

Surma wants businesses to understand that while this is beneficial for people in countries like India, there is also a very wide spectrum of phone performance in America. He wants to help all of these people and wants companies acknowledge this spectrum and to look at the benefits of using web workers to improve performance.


### **Panelists**



*   Charles Max Wood
*   Christopher Buecheler
*   Aimee Knight
*   AJ O’Neal

With special guest: Surma


## **Sponsors**



*   [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Adventures in Angular](https://devchat.tv/adv-in-angular/)

**Links**



*   [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
*   [Service workers](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API)
*   [Worklets](https://developer.mozilla.org/en-US/docs/Web/API/Worklet) 
*   [Ecto model](https://hexdocs.pm/phoenix/1.3.0-rc.1/ecto_models.html)
*   [Babel](https://babeljs.io/)
*   [Swoosh](https://www.npmjs.com/package/swoosh)
*   [Comlink](https://github.com/GoogleChromeLabs/comlink)
*   [WhatsApp](https://www.whatsapp.com/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Charles Max Wood:**



*   [For Love of Mother-Not](https://www.goodreads.com/book/show/218661.For_Love_of_Mother_Not)

**Surma:**



*   Follow Surma @DasSurma on Twitter and at [dassur.ma](https://dassur.ma/)
*   [WebAssembly Spec](https://webassembly.github.io/spec/core/index.html)

**AJ O’Neal:**



*   [The GameCube Ultimate](https://coolaj86.com/articles/the-gamecube-ultimate/)
*   [Pikmin for Wii](https://amzn.to/2LmPsJ7) and [GameCube](https://ebay.to/2lxw56L)
*   [Super Monkey Ball](https://ebay.to/2krbsci)

**Christopher Buecheler**



*   [CinemaSins Sincast podcast](https://cinemasins.com/sincast)

<!-- Docs to Markdown version 1.0β17 -->
