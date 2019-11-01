---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 085: Building Resilient Architecture with Monica Lent'
date: 2019-10-29T10:00:16.685Z
episode_number: 085
duration: '1:04:55'
audio_url: 'https://media.devchat.tv/reactroundup/RRU_085_Monica_Lent.mp3'
tags:
  - react_round_up
  - podcast
  - startups
  - computer architecture
  - sustainable software
  - React
  - React Hooks
  - Leslie Cohn-Wein
  - Thomas Aylott
  - Lucas Reis
  - Monica Lent
  - ''
question1: >-
  Now that you’ve built something from scratch, how is that different from
  building in a large company?
answer1: >-
  Building your own startup is different because you have to decide what is most
  important and what needs to be focused on. You don’t have a boss telling you
  what to prioritize, so the decisions are all up to you. 
question2: What is Monica’s startup?
answer2: >-
  Monica created an analytic tool for bloggers designed around affiliate
  marketing. It has gotten an average of 2.5 million hits per day since the beta
  was released. 
question3: Is it better to copy and paste code or add dependencies?
answer3: >-
  In Monica’s opinion, it is better to copy and paste code. Sometimes, when you
  create an abstraction and combine two pieces of code, this new combination
  makes code more brittle than it would be otherwise. Components put in the
  shared folder almost never leave, and this causes the component to become very
  specialized and only work in specific scenarios.
question4: Is pride a characteristic of junior or senior developers?
answer4: >-
  Pride can be found in any level of programmer. It is important to keep your
  ego out of it when designing constraints, though it is easier for anyone to
  get prideful when they are not working on a big team.
---
Monica Lent has been interested in software from a very young age, and made her first domain name when she was 9 years old. She studied legacy languages Latin and Ancient Greek in university, but ended up keeping her college development job and going into software. She recently left her job and founded a startup, analytic tool designed for bloggers designed around affiliate marketing. She talks about some of the lessons she's learned, including how to sift through data and how to make it useful for people. 

Monica gave a talk at React Finland and she first applies some of her principles from that talk to what she's learned founding a startup. One of the main differences she's found is a small startup has different needs and levels of stability than a business. In early stage business, you have to decide where you want to invest in quality and where you shouldn't be investing. For example, her primary focus is on her algorithm that runs the tool, and UI is less of a priority. In a large company, this might be structured differently. The panel discusses how to distill the priorities from the project manager so you know where to spend your time, something that takes a lot of experience and failure. They agree that if something is business critical and will cause the business to lose money if it fails, those things should be a top priority. 

Second, the panel discusses the merits of different practices such as whether or not to deploy on Friday and having engineers on call. In Monica's React Finland talk, she talks about the importance of constraints, which can help with these kinds of decisions. She explains that instead of thinking of architecture as something super abstract, think of it as enabling constraints, as picking ways to do less and end up with code that is safer to run, longer lasting, and has fewer bugs. Thomas shares how he used to oppose constraints and architecture, and how he changed his mind. They discuss the importance of automation over documentation for building sustainable code. 

Third, Monica explains her opinion on how copying and pasting code instead of adding dependencies is a positive constraint. She prefers this method most of the time but not in all cases because it keeps your code flexible and avoids unnecessary specialization. However she is not advocating for copy/paste over dependencies in every situation : rather the point comes down to using copy/paste instead of inappropriate coupling.

Sometimes, when you create an abstraction and combine two pieces of code, this new combination makes code more brittle than it would be otherwise.

Components put in the shared folder almost never leave. This causes the  component to become very specialized and not work in all scenarios. The panel discusses where this method may not work. Thomas talks about some of his favorite tools for simplifying complexity, React Hooks and Relay. Monica and the panelists discuss the merits of using TypeScript and proper methods for coupling code.

Fourth, the panel discusses how so much of programming is dealing with other people and the importance of keeping your ego out of it when designing constraints, especially since developers hate other developer's abstractions. They debate whether pride is a characteristic of junior or senior developers. They note that it is easier to get prideful and opinionated when you're not working on a team. Thomas believes that if you aren't working on a big team, you should force yourself to talk to people with opposing positions.

The show concludes with the panelists agreeing that it all comes down to the balance between priorities and making things work. Sometimes we can get so focused on making something work that we lose sight of what actually matters. They agree that  collaboration generally yields better results than leaving it to one person. Monica talks about the importance of senior developers nurturing their team by leading from behind to help people come up with their own solutions. The panelists talk about different methods they've seen for doing this.

Panelists

* Leslie Cohn-Wein
* Thomas Aylott
* Lucas Reis

With special guest: Monica Lent

Sponsors

* [Progress KendoReact](https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-8https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-15https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-22https://www.telerik.com/kendo-react-ui/campaigns/free-trial-react-8/?utm_medium=cpm&utm_source=reactroundup&utm_campaign=kendo-ui-react-trial-oct-29) | Try now for FREE:[  kendoreact.com/reactroundup](http://kendoreact.com/reactroundup)
* [Sentry](http://sentry.io/) use the code "devchat" for 2 months free on Sentry's small plan
* [Views on Vue](https://devchat.tv/views-on-vue/)

Links

* [Monica's React Finland talk](https://www.youtube.com/watch?v=brMZLmZ1HR0)
* [Narcissistic design talk](https://www.youtube.com/watch?v=LEZv-kQUSi4)
* [A Philosophy of Software Design](https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Relay](https://relay.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [gRPC](https://github.com/grpc)
* [Prettier](https://prettier.io/)
* [7 Absolute Truths I Unlearned as a Junior Developer](https://monicalent.com/blog/2019/06/03/absolute-truths-unlearned-as-junior-developer/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

### Picks

Leslie Cohn-Wein:

* [Xochimilco, Mexico City, Mexico](https://en.wikipedia.org/wiki/Xochimilco)
* [List of CSS mistakes](https://wiki.csswg.org/ideas/mistakes)

Thomas Aylott:

* [Get the Truth book](https://www.amazon.com/Get-Truth-Former-Officers-Persuade-ebook/dp/B00IWUI4RQ/ref=tmm_kin_swatch_0?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)

Lucas Reis:

* [Lovevery](https://lovevery.com/)
* [Zero Fasting app](https://zerofasting.com/)

Monica Lent:

* [The Mom Test by Rob Fitzpatrick](http://momtestbook.com/)
