---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 398: Node 12 with Paige Niedringhaus'
date: 2019-10-08T10:00:02.190Z
episode_number: '398'
duration: '1:04:45'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_398_Paige_Niedringhaus.mp3'
image: /images/uploads/javascript_jabber_thumb.jpg
tags:
  - js_jabber
  - podcast
  - Node 12
  - J.C. Hyatt
  - Steve Edwards
  - AJ O'Neal
  - Paige Niedringhaus
  - JavaScript
question1: What are you most excited about in Node 12?
answer1: >-
  EcmaScript support has been greatly improved,  so now things that previously
  required React, Vue, and Angular can be done in Node.
question2: What are some other features of Node 12?
answer2: >-
  New features include better security, formatted diagnostic summaries,
  increased help with the debugging process, improved keypairing, and worker
  threads.
question3: What are worker threads?
answer3: >-
  Worker threads are really beneficial for CPU intensive JavaScript operations.
  Worker threads are there for those things that eat up all of your memory, they
  can alleviate the load and keep your program running efficiently while doing
  their own operations on the sideline, and returning to the main thread once
  they’ve finished their job
question4: What are the new compiler and minimum platform standards?
answer4: >-
  GCC minimum 6; GLIVC minimum 2.17 on platforms other than Mac and Windows
  (Linux); Mac users need at least 8 and Mac OS 10.10; If you’ve been running
  node 11 builds in Windows, you’re up to speed; Linux binaries supported are
  Enterprise Linux 7, Debian 8, and Ubuntu 14.04; If you have different
  requirements, go to the Node website.
---
Guest Paige Niedringhaus has been a developer full time for 3 years, and today she is here to talk about Node 12. One of the things she is most excited about is the ES6 support that is now available, so things that used to require React, Angular, or Vue can now be done in Node. The require function will not have to be used in Node 12. AJ is worried about some of these changes and expresses his concerns. Paige assures him that in the beginning you won’t have to switch things to imports. You may have to change file extensions/types so Node can pick up what it’s supposed to be using. They are also trying to make it compatible with CommonJS.

Node 12 also boasts an improved startup time. The panel discusses what specifically this means. They talk about the code cache and how Node caches the built in libraries that it comes prepackaged with. The V8 engine is also getting many performance enhancements. 

Paige talks about the shift from promises to async. In Node 12, async functions will actually be faster than promises. They discuss some of the difficulties they’ve had in the past with Async08, and especially callbacks. 

Another feature of Node 12 is better security. The transcripted security layer (TLS), which is how Node handles encrypted strains of communication, is upgrading to 1.3. The protocol is simpler to implement, quicker to negotiate sessions between the applications, provides increased end user privacy, and reduces request time. Overall, this means less latency for everybody. 1.3 also gets rid of the edge cases that caused TLS to be way far slower than it needed to be. 

The conversation turns to properly configuring default heap limits to prevent an ‘out of memory’ error. Configuring heap limits is something necessary when constructing an incredibly large object or array of objects. Node 12 also offers formatted diagnostic summaries, which can include information on total memory, used memory, memory limits, and environment lags. It can report on uncaught exceptions and fatal errors. Overall, Node 12 is trying to help with the debugging process. They talk about the different parsers available and how issues with key pairing in Node have been solved. 

Paige talks about using worker threads in Node 12. Worker threads are really beneficial for CPU intensive JavaScript operations. Worker threads are there for those things that eat up all of your memory, they can alleviate the load and keep your program running efficiently while doing their own operations on the sideline, and returning to the main thread once they’ve finished their job. None of the panelists have really used worker threads, so they discuss why that is and how they might use Worker Threads in Node 12. 

In addition, Node 12 is making Native module creation and support easier, as well as all the different binaries a node developer would want to support. Paige makes it a point to mention the new compiler and minimum platform standards. They are as follows:



*   GCC minimum 6
*   GLIVC minimum 2.17 on platforms other than Mac and Windows (Linux)
*   Mac users need at least 8 and Mac OS 10.10
*   If you’ve been running node 11 builds in Windows, you’re up to speed
*   Linux binaries supported are Enterprise Linux 7, Debian 8, and Ubuntu 14.04
*   If you have different requirements, go to the Node website


### **Panelists**



*   J.C. Hyatt
*   Steve Edwards
*   AJ O’Neal

With special guest: Paige Niedringhaus

**Sponsors**



*   [Tidelift](https://tidelift.com/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Sustain Our Software](https://devchat.tv/sustain-our-software/)

**Links**



*   [Async](https://caolan.github.io/async/)
*   [CommonJS](https://flaviocopes.com/commonjs/)
*   [njs](https://nginx.org/en/docs/njs/)
*   [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [Node](https://nodejs.org/en/)
*   [Event Stream](https://www.npmjs.com/package/event-stream)
*   [llhttp](https://github.com/nodejs/llhttp)
*   [llparse](https://github.com/nodejs/llparse)
*   [LLVM](https://llvm.org/)
*   [Papa Parse](https://www.papaparse.com/)
*   [Json.stringify ](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
*   [Json.parse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
*   [Optimizing Web Performance TLS 1.3](https://blog.thousandeyes.com/optimizing-web-performance-tls-1-3/)
*   [Overlocking SSL](https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html)
*   [Generate Keypair](https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**J.C. Hyatt:**



*   [AWS Amplify framework](https://aws-amplify.github.io/)
*   [12 Rules for Life: An Antidote to Chaos by Jordan Petersen](https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021)
*   React and Gatsby workshops

**Steve Edwards:**



*   The Farside comic coming back?

**AJ O’Neal:**



*   [Field of Hopes and Strings](https://stringplayergamer.bandcamp.com/album/field-of-hopes-and-strings)
*   [Link’s Awakening](https://amzn.to/34QjU7q?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [Dune](https://amzn.to/2O6gE1K?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)

**Paige Niedringhaus:**



*   [DeLonghi Magnifica XS Automatic Espresso Machine, Cappuccino Maker](https://www.delonghi.com/en-us/products/coffee-and-espresso/coffee-makers/automatic-coffee-makers/magnifica-ecam-22110sb-0132213092)
*   [CONNECT.TECH Conference](https://connect.tech/)
*   Follow Paige on [Twitter](@pniedri), [Medium](https://link.medium.com/vCQSqTegiZ), and [Github](https://github.com/paigen11)
