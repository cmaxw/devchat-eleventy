---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 072: React Hooks for Global State and More Custom Hooks with Daishi Kato'
date: 2019-07-30T10:00:13.285Z
episode_number: '072'
duration: '51:54'
audio_url: 'https://media.devchat.tv/reactroundup/RRU_072_Daishi_Kato.mp3'
tags:
  - react_round_up
  - podcast
  - global state
  - React hooks
  - rendering
  - Thomas Aylott
  - David Ceddia
  - Lucas Reis
  - Daishi Kato
  - React
---
## **Sponsors**



*   [Netlify](https://www.netlify.com/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Triplebyte](https://triplebyte.com/react) offers a $1000 signing bonus


### **Panel**



*   Thomas Aylott
*   David Ceddia
*   Lucas Reis

With special guest: Daishi Kato


### **Episode Summary**

Todays guest Daishi Kato is a freelance programmer and has many open source libraries. He starts off by talking about how he got from tail call optimization to Redux and global state. Daishi talks about his definition of global state, how it differs from a regular state, and why it is a problem with the current context implementation. Thomas talks about his work with Android and how React has helped solved some of the problems they encountered. They talk about when different rendering issues they’ve encountered. Daishi shares his unique approach to solving rendering issues and how it applies to his libraries. His solution is to combine the system in React with proxy based tracking to solve issues with rendering. Daishi explains why this works and the importance of benchmarking. Daishi’s solution is designed as a same use state API, so someone can drop this in and see if it works.

Daishi talks about his definition of proxies and how it triggers the rerender. He also talks about how it handles conditional reads. This tracking happens every render and it doesn’t have the same limitations as hooks. The panel talks about the new version of React Redux library implementation and how it compares to Daishi’s. Daishi’s approach is useful for people earning Redux because the used tracked state gives you all the benefits without a lot of the complexity. Daishi talks about how it deals with deeply nested pieces of code.

The panel discusses the delicate balance of optimizing, but not doing it too soon, but to also remember how vital it is to maintain the performance of your app. Daishi’s work with Reactive React Redux to make sure things perform from the beginning is really important. It’s also important to understand how your product works so that when things do go wrong, you know how to fix it. Daisho talks about his other library React Tract for people who don’t like to use Redux.

**Links**



*   [Mobex](https://www.mobex.biz/)
*   [GraphQL](https://graphql.org/)
*   [Proc SQL](https://support.sas.com/resources/papers/proceedings/proceedings/sugi27/p191-27.pdf)
*   [React-Tracked](https://www.npmjs.com/package/react-tracked)
*   [Immer](https://github.com/immerjs/immer)
*   [Reactive React Redux](https://github.com/dai-shi/reactive-react-redux)
*   [React Redux](https://react-redux.js.org/)

Follow DevChat on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**David Ceddia:**



*   [A Compiler From Scratch video](https://www.destroyallsoftware.com/screencasts/catalog/a-compiler-from-scratch)
*   [Verbal Expressions](https://github.com/VerbalExpressions)

**Thomas Aylott:**



*   [The Making of a Manager](https://juliezhuo.com/book/manager.html) by Julie Zhou
*   [Thomas’ Youtube channel](https://www.youtube.com/channel/UCZo0rCa6jiy8PrdK4TcOv5w?view_as=subscriber)

**Lucas Reis:**



*   [Shun knives](https://shun.kaiusaltd.com/)

**Daishi Kato:**



*   [Remote Faces](https://medium.com/@dai_shi/remote-faces-share-webcam-still-images-with-peerjs-webrtc-a7ed5fe11e49)

<!-- Docs to Markdown version 1.0β17 -->
