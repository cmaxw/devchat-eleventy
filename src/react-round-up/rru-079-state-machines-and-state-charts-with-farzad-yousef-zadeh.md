---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 079: State Machines and State Charts with Farzad Yousef Zadeh'
date: 2019-09-17T10:00:23.631Z
episode_number: 079
duration: '49:32'
audio_url: 'https://media.devchat.tv/reactroundup/RRU_079_Farzad_YousefZadeh.mp3'
tags:
  - react_round_up
  - podcast
  - David Ceddia
  - Lucas Reis
  - Leslie Cohn-Wein
  - Thomas Aylott
  - Farzad Yousef Zadeh
  - state machines
  - state charts
  - React
---
### **Episode Summary**

Today’s guest is Farzad Yousef Zadeh, a developer from Iran with a unique path into computer programming. He started by studying astrophysics and aerospace engineering in college, then dropped out in his last semester because it wasn’t the right path. He then taught himself to code, working mostly in web programming and frontend development. Despite his change in course, Farzad remains passionate about observing the night sky. 

Farzad is here today to talk about the ideas in his talk _Explicitness and Consistency in UI, _where he talks about the difficulties of developing a user interface and how the experience can be improved by using state machines and state charts. He talks about his inspiration for the talk and how he has implemented state machines and state charts into his work. 

The panel backtracks and talks about the definition of state machines and state charts. A state machine, from an academic background, is a model for computing something. It's for managing and controlling, taking over branching and managing a finite amount of state declaratively. State machines are not so much about sharing or reusing, but about how your communicate a certain behavior. Despite the fact that event driven programming permeates the programming consciousness, thinking about state charts and state machines is actually more natural than it first appears. The panel explains how it’s the same principle as whiteboarding to solve a problem.

Lucas asks how state charts are different from pure React. Farzad talks about how it’s important not to just treat your static states as first class, but also the transitions between them. Otherwise, you would end up with something that looks like a map with cities and towns, but no roads. Using statecharts and state machines makes testing an application much easier, and in some ways you let the machine test itself. The machine will know what to do with your states because you define the path, and the machine will take the path for you. 

They again talk about the difference between state machines and state charts. A state machine defines a finite set of states and defining the events that the machine can take and respond to when transitioning from state A to B. If you use only this, you will encounter a snag called ‘state explosion’ because not non-concrete things cannot be modeled. So, state charts were invented to compensate for this. A state chart brings the idea of an extended state, or the context and data you need to hold and reason from. 

Farzad talks about other types of machines and supports that exist for branching, entry actions, and exit actions. This is similar to the use effect hook in React. He gives examples of where you would use this logic and how it would be worked into frameworks. Farzad talks about how your machine is just a definition, a declarative model of how something is supposed to behave, and how having that separation between the definition of the logic and behavior vs the implementation of API has given us so much more freedom and portability

The panel talks about how using state machines and charts is an investment in the long term maintainability of your code. They agree that using state machines and charts makes it easier to communicate with other developers, new team members, and even non developers. They talk about Cerebral.js and its contributions and model. 

As with everything in programming, state machines are not a silver bullet and don’t work in every situation. Farzad talks about situations where state machines can be unhelpful. It is still valuable to consider state machines and charts because it forces you to dedicate time thinking and organizing your thoughts so that you can build something maintainable that won’t just be thrown away. The panel discusses how thinking things out before starting to code can be beneficial. They finish by talking about how React Hooks has started them on the path to implement state machines and charts into their code. 


### **Panelists**



*   David Ceddia
*   Lucas Reis
*   Leslie Cohn-Wein
*   Thomas Aylott

With special guest: Farzad Yousef Zadeh


## **Sponsors**



*   [Sustain Our Software](https://devchat.tv/sustain-our-software/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [My Angular Story](https://devchat.tv/my-angular-story/)

**Links**



*   [Explicitness and Consistency in UI](https://www.youtube.com/watch?v=miDQ5dDDOJk)
*   [David Khourshid xstate library](https://github.com/davidkpiano/xstate)
*   [RRU 069: The State Machines in React with David Khourshid](https://dev.to/reactroundup/rru-069-the-state-machines-in-react-with-david-khourshid)
*   [State machine](https://blog.markshead.com/869/state-machines-computer-science/)
*   [State chart](https://www.tutorialspoint.com/uml/uml_statechart_diagram.htm)
*   [Cerebral JS](https://cerebraljs.com/)
*   [Origami by Facebook](https://origami.design/)
*   [Elm](https://elm-lang.org/) 
*   [The GaryVee Content Model](https://www.slideshare.net/vaynerchuk/the-garyvee-content-model-107343659)
*   [Overmind JS](https://overmindjs.org/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**David Ceddia:**



*   [Reverse Interview](https://github.com/viraptor/reverse-interview)

**Thomas Aylott:**



*   [Machine Learning Zero to Hero](https://www.youtube.com/watch?v=VwVg9jCtqaU&feature=youtu.be)
*   [TensorFlow at Google I/O 2019 channel](https://www.youtube.com/playlist?list=PLQY2H8rRoyvy2_vtWvCpQWM9GJXNTa5rV)

**Lucas Reis:**



*   [How to Learn D3.js](https://wattenberger.com/blog/d3#intro)

**Leslie Cohn-Wein:**



*   [Write Fewer Tests! From Automation to Autogeneration by David Khourshid](https://www.youtube.com/watch?v=tpNmPKjPSFQ)

**Farzad Yousef Zadeh:**



*   [Don’t Let Architecture Astronauts Scare You](https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/)

<!-- Docs to Markdown version 1.0β17 -->
