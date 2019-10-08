---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 082: Progressive SSR with Dinesh Pandiyan'
date: 2019-10-08T10:00:32.550Z
episode_number: 082
duration: '50:20'
audio_url: 'https://media.devchat.tv/reactroundup/RRU_082_Dinesh_Pandiyan.mp3'
image: /images/uploads/charles-wood-react-round-up-album-art-2-300x300-1.jpg
tags:
  - react_round_up
  - podcast
  - Dinesh Pandiyan
question1: How is backend development different from frontend development?
answer1: >-
  On the backend he was working in Java and it ran on a server, but on the
  frontend, code runs in a browser and the browser is very different for each
  user. 
question2: What are some of the most surprising features of React dev tools?
answer2: >-
  You can benchmark your preferences and identify weaklings in your project,
  which are things that slow down your application or things that might slow it
  down. On an application level, you have to build a mental model of how the
  data flows from the top, where things change, etc, and dev tools can help you
  build that pretty easily.
question3: 'What are the differences between SSR, CSSR, and PSSR?'
answer3: >-
  For SSR (Server Side Rendering), rendering happens on the server and you send
  it to the client. CSSR (Client Server Side Rendering) is when all the
  rendering happens on the client’s side. PSSR (Progressive Server Side
  Rendering) is where you render small chunks on the server and then send it to
  the client bit by bit.
question4: What is LIve View Now for the Phoenix framework on Elixir?
answer4: >-
  For this feature, you don’t need client side frameworks to generate dynamic
  content and it enables two way streaming. However, it does not scale well for
  extremely large apps
---
Dinesh Pandiyan is a developer from India. He started as a backend engineer and then moved to frontend. Currently he is working for ThinkMill in Sidney, Australia. Today Dinesh and the panel are talking about devtools and progressive SSR.

Dinesh got started with React Redux. The panelists talk about their experiences using primarily Redux for projects. Dinesh talks about his transition from backend to frontend and how it’s a totally different world. On the backend he was working in Java and it ran on a server, but on the frontend, code runs in a browser and the browser is very different for each user. Frontend development is tricky because you don’t know where your code is going to run.

One of the trickiest parts of frontend development is debugging something in production. Unless you have good logging tools, you won’t know what’s going on. Debugging this stuff when it’s running on client browsers is hard, but when you’re in development mode your own browser you’ve got handy tools. 

They talk about some of the tools in React, and agree that console.log is the greatest debugging tool of all time. Dinesh talks about some of the most surprising features about React dev tools. You can benchmark your preferences and identify weaklings in your project, which are things that slow down your application or things that might slow it down. On an application level, you have to build a mental model of how the data flows from the top, where things change, etc, and dev tools can help you build that pretty easily. They talk about how things had to be done before great React tools. In fact, Dinesh chose React just for the devtools. They talk about how the dev tools for React compare to Java. The most important thing is that you have a good debugger that can stop where you want it to. 

They transition to talking about the differences between SSR and progressive SSR For SSR (Server Side Rendering), rendering happens on the server and you send it to the client. CSSR (Client Server Side Rendering) is when all the rendering happens on the client’s side. PSSR (Progressive Server Side Rendering) is where you render small chunks on the server and then send it to the client bit by bit. They talk about how this has been occurring from the beginning of the internet. This concept is similar to microfrontends. 

Dinesh gives advice on how to implement PSSR. He says that when you surver render, it loads on differently. Your framework has to do one complete pass of the histiema, so this means you cannot send things to the client until the whole histema is designated. To beat this they’ve been doing a mix of SSR and CSR, with the header, body, and non critical content rendering on the client side. PSSR bridges the gap between SSR and CSSR.

The panel discusses ways to make PSSR a reality. Dinesh has been experimenting with it with extra services, and he gives his method for doing it, emphasizing the importance of where you divide your code is very important, it has to be in sequence. CSS Grid solves this problem, so you could render things out of order and the browser puts it in the right spot. They talk about other ways to get around it. Lucas shares some of the difficulties he’s encountered with streaming and rendering. They talk about the new feature for the Phoenix framework for Elixir, Live View Now. For this feature, you don’t need client side frameworks to generate dynamic content and it enables two way streaming. However, it does not scale well for extremely large apps. They talk about some of the tradeoffs for using this feature. They conclude by discussing the gap between website optimization and device performance. 

**Panelists**

* Thomas Aylott
* Dave Ceddia
* Lucas Reis

With special guest: Dinesh Pandiyan

## **Sponsors**

* [Progress KendoReact ](https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-8)| Try now for FREE: [kendoreact.com/reactroundup](https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-8)
* [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
* [My JavaScript Story](https://devchat.tv/my-javascript-story/)

**Links**

* [React Redux](https://react-redux.js.org/)
* [Console.log](https://developer.mozilla.org/en/docs/Web/API/Console/log) 
* [Puppeteer](https://developers.google.com/web/tools/puppeteer)
* [Webpack](https://webpack.js.org/)
* [Datadog](https://www.datadoghq.com/) 
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Transport headers](https://www.ibm.com/support/knowledgecenter/en/SS9H2Y_7.7.0/com.ibm.dp.doc/transport-headers_js.html)
* [Phoenix](https://phoenixframework.org/)
* [Elixir](https://elixir-lang.org/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

### **Picks**

**Lucas Reis:**

* [Ben Hoyt Wholesome Learning Elm](https://benhoyt.com/writings/learning-elm/)
* [Cast iron skillet](https://shop.lodgemfg.com/prodcat/skillets-and-covers.asp)

**Thomas Aylott:**

* [6 Lessons Children Need to Learn](https://www.jw.org/en/publications/magazines/awake-no2-2019-jul-aug/)

**Dinesh Pandiyan:**

* [To-Do List app](https://todoist.com/?lang=en)

**David Ceddia:** 

* [On the Utility of Phoenix Live View](https://jclem.net/posts/on-the-utility-of-phoenix-liveview)

<!-- Docs to Markdown version 1.0β17 -->
