---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 083: Reactive Programming with Storybook with Dean Radcliffe'
date: 2019-10-15T10:00:02.396Z
episode_number: 083
duration: '50:53'
audio_url: 'https://media.devchat.tv/reactroundup/RRU_083_Dean_Radcliffe.mp3'
image: /images/uploads/charles-wood-react-round-up-album-art-2-300x300-1.jpg
tags:
  - react_round_up
  - podcast
  - React.js
  - Redux
  - Storybook
  - reactive programming
  - state management
  - Charles Max Wood
  - Dean Radcliffe
question1: 'How early did you get into React? '
answer1: '2014, almost as soon as it came out'
question2: What is Storybook?
answer2: >-
  Storybook is a tool available for React and other frameworks, which lets you
  jump directly to each state you want to view instead of having to go through
  them all one by one.
question3: Why is Storybook useful?
answer3: >-
  These states facilitate development and the feedback cycle going back to the
  designers, allowing them to see more than just the finished application and
  enabling them to circumvent mistakes.
question4: ' What does RX Helper do?'
answer4: >-
  RX helper allows you to listen for custom events raised from the individual
  components of a form, and you respond to those events with observables, and
  the observables produce values over time.
---
Dean Radcliffe has been web developing since the table tag was the new hotness. His interests include his wife and two kids, music, sports, and he likes to say he helps people make whatever they can dream of. Since starting to move towards the frontend, React has been his weapon of choice, which he got started with in 2014. 

Dean works at G2.com, a software review site. They are developing a review form, which requires the code to react to events. For example, a person’s position in the company would affect what questions they see, so the form needs to react to which box is checked. Dean talks about the use cases for building a reactive form and what kind of things are going to happen when you fill in an input. For his form, the input will be remembered, and they want to increase the user’s involvement with the form through incentives. To accomplish this, Dean uses component driven development with Storybook.

Storybook is a tool available for React and other frameworks, which lets you jump directly to each state you want to view instead of having to go through them all one by one. Basically, it gives you shortcuts directly to the visual states of your components. These states facilitate development and the feedback cycle going back to the designers, allowing them to see more than just the finished application and enabling them to circumvent mistakes. 

Storybook relates to reactive programming because component driven development lets you discover the API and what sets of props are necessary to put this component into each possible state that can be displayed. Dean does not use it as a test environment on his team, but it does help them write unit tests. It has an addon that lets you write unit tests in Storybook, but he hasn’t used it. Dean compares where reactivity and Storybook come together by comparing it to a thermometer.A thermometer will get readings over time of discrete values, and that timing is how people experience your components. You can create an observable of those states, and Storybook Animate ties them together. Your components, however, are still your responsibility.

Dean talks about how he creates the observables. The observables are hardcoded, but the great thing is you don’t need to know where it came from. Dean describes how the observables are connected to the components. Dean feels that having this dynamic feed cycle makes it kind of fun to write tests. There is also a function called After which creates a set time out, which creates an observable of that value over time. 

Dean talks about his other tool, RX Helper. RX Helper provides an ‘after’ abstraction, and an event oriented layer in React. RX helper allows you to listen for custom events raised from the individual components of a form, and you respond to those events with observables, and the observables produce values over time.The goal of RX Helper provides some transparency and makes it easier to try out concurrency designs. The show concludes with Dean talking about some of the changes he’s made to his tools and how he came up with the idea. 

**Panelists**

* Charles Max Wood

With special guest: Dean Radcliffe

**Sponsors**

* [Progress KendoReact ](https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-15) | Try now for FREE: [kendoreact.com/reactroundup](https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-15)
* [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
* [My JavaScript Story](https://devchat.tv/my-javascript-story/)

**Links**

* [Knockout.js](https://knockoutjs.com/)
* [G2.com](https://www.g2.com)
* [Storybook](https://storybook.js.org/)
* [StorybookAnimate](https://github.com/deanius/storybook-animate)
* [RX Helper](https://github.com/deanius/rx-helper)
* [Meteor JS](https://www.meteor.com/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

### **Picks**

**Dean Radcliffe:**

* Follow him on [Github](https://github.com/deanius) and [Twitter](https://twitter.com/deaniusol) 
* [Kent C. Dodds](https://kentcdodds.com/)
* [@davidkpiano XState](https://github.com/davidkpiano/xstate)
* [Gangstagrass](http://gangstagrass.com/)

**Charles Max Wood:**

* [St. George Marathon](https://www.stgeorgemarathon.com/)
* [The 360 Degree Leader](https://www.amazon.com/360-Degree-Leader-Developing-Organization/dp/1400203597)

<!-- Docs to Markdown version 1.0β17 -->
