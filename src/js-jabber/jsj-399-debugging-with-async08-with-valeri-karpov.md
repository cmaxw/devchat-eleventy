---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 399:  Debugging with Async08 with Valeri Karpov'
date: 2019-10-10T10:00:02.307Z
episode_number: '399'
duration: '1:03:47'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_399_Valeri_Karpov.mp3'
image: /images/uploads/javascript_jabber_thumb.jpg
tags:
  - js_jabber
  - podcast
  - JavaScript
  - async08
  - debugging
  - Christopher Buecheler
  - AJ O'Neal
  - Charles Max Wood
  - Valeri Karpov
---

Valeri Karpov is a maintainer on Mongoose, has started a few companies, and works for a company called Booster Fuels. Today’s topic debugging with Async 08. The panel talks about some of the challenges of debugging with Async. AJ, however, has never encountered the same problems, so he shares his debugging method. 

Valeri differentiates between .catch vs try...catch, and talks about why he prefers .catch. There are two ways to handle all errors in an async function without leading to an unhandled promise rejection. The first is to wrap the entire body of the async function in a try...catch, has some limitations. Calling an async function always returns a promise, so the other approach is calling .catch on the promise to handle any errors that occur in that function body. One of the key differences is if you return a promise within an async function, and that return promise is wrapped in a try...catch, the catch block won’t get called if that promise is rejected, whereas if you call .catch on the promise that the function returns, you’ll actually catch that error. There are rare instances where this can get tricky and unintuitive, such as where you have to call new promise and have resolve and reject, and you can get unexpected behavior.

The panel discusses Valeri’s current favorite JS interview question, which is,  “Given a stream, implement a function called ‘stream to promise’ that, given a stream, returns a promise that resolves to the concatenation of all the data chunks emitted by the stream, or rejects if the stream emits an error event.” It’s really simple to get this qustion right, and really simple to get it wrong, and the difference can be catastrophic. AJ cautions listeners to never use the data event except in the cases Val was talking about, only use the readable event.

The conversation turns to the function of a readable event. Since data always pushes data, when you get a readable event, it’s up to you to call read inside the function handler, and then you get back a chunk of data, call read again and again until the read returns null. When you use readable, you are in control and you avoid piling functions into RAM. In addition, the right function will return true or false to let you know if the buffer is full or not. This is a way to mix imperative style into a stream.

The next discussion topics are the differences between imperative style and reactive style and how a waits and promises work in a normal four loop. A wait suspends the execution of a function until the promise is resolved. Does a wait actually stop the loop or is it just transpiling like a promise and it doesn’t stop the loop. AJ wrote a module called Batch Async to be not as greedy as promise.all but not as limited as other options.

The JavaScript panelists talk about different async iterators they’ve used, such as Babel. They discuss the merits of Babel, especially since baseline Android phones (which a significant portion of the population of the world uses) run UC Browser that doesn’t support Babel, and so a significant chunk of the population of the world. On the other hand, if you want to target a large audience, you need to use Babel.

Since frameworks in general don’t handle async very well, the panel discusses ways to mitigate this. They talk about different frameworks like Vue, React, and Express and how they support async functions. They discuss why there is no way for you to actually cancel an async option in an actual case, how complex canceling is, and what you are really trying to solve for in the cancellation process. 

Canceling something is a complex problem. Valeri talks about his one case where he had a specific bug that required non-generic engineering to solve, and cancelling actually solved something. When AJ has come across cancellation issues, it’s very specific to that use case. The rest of the panelists talk about their experiences with having to cancel something. 

Finally, they talk about their experience with async generator functions. A generator is a function that lets you enter into the function later. This makes sense for very large or long running data sets, but when you have a bounded items, don’t complicate your code this way. When an async generator function yields, you explicitly need to call next in order for it to pick up again. If you don’t call ‘next’, it’s essentially cancelled. Remember that object.keys and object.values are your friends. 


### **Panelists**



*   Christopher Buecheler
*   AJ O’Neal
*   Charles Max Wood

With special guest: Valeri Karpov

**Sponsors**



*   [The DevEd Podcast](https://devchat.tv/dev-ed/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)

**Links**



*   [Mongoose](https://mongoosejs.com/)
*   [Express 5](https://expressjs.com/en/5x/api.html)
*   [Node Streams](https://nodejs.org/api/stream.html)
*   [Pull Streams](https://github.com/pull-stream/pull-stream)
*   [Masteringjs.io](https://masteringjs.io/)
*   [MongoDB](https://www.mongodb.com/)
*   [Babel](https://babeljs.io/)
*   [HTML](https://www.w3schools.com/html/)
*   [Webpack](https://webpack.js.org/)
*   [Vue](https://vuejs.org/)
*   [Express](https://expressjs.com/)
*   [RxJS](https://rxjs-dev.firebaseapp.com/)
*   [Console.log](https://developer.mozilla.org/en/docs/Web/API/Console/log)
*   [Json.stringify](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
*   [Batchasync.js](https://git.coolaj86.com/coolaj86/batchasync.js)
*   [How to Write Batch Async Functions](https://coolaj86.com/articles/batching-async-requests-50-lines-of-vanilla-js/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**AJ O’Neal:**



*   [Ethan Garofolo YouTube](https://www.youtube.com/playlist?list=PLZaEVINf2Bq96e_Z2NvY7tx5HWlECCsK8)

**Christopher Buecheler:**



*   [Functional Design Patterns for Express.js](https://jonathanleemartin.com/books/)

**Charles Max Wood:**



*   [Microsoft Ignite](https://www.microsoft.com/en-us/ignite)
*   Maxcoders.io

**Valeri Karpov:**



*   Follow Valeri on Twitter [@code_barbarian](https://twitter.com/code_barbarian?lang=en) and Github [@vkarpov15](https://github.com/vkarpov15)
*   [Masteringjs.io](https://masteringjs.io/)
*   [Jurassic Park: A Novel](https://www.amazon.com/Jurassic-Park-Novel-Michael-Crichton/dp/0345538986?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
