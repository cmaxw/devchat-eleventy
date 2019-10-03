---
layout: layouts/post.njk
podcast: react-round-up
title: 'RRU 081: NX and Monorepos with Jeffrey Cross and Victor Savkin'
date: 2019-10-01T10:00:05.647Z
episode_number: 081
duration: '49:29'
audio_url: >-
  https://media.devchat.tv/reactroundup/RRU_081_Jeffrey_Cross_And_Victor_Savkin.mp3
image: /images/uploads/charles-wood-react-round-up-album-art-2-300x300-1.jpg
tags:
  - react_round_up
  - podcast
  - monorepo
  - NRWL
  - NX
  - monorepo tooling
  - Leslie Cohn-Wein
  - Dave Ceddia
  - Lucas Reis
  - Jeffery Cross
  - Victor Savkin
question1: What is a monorepo?
answer1: >-
  Monorepo style development is a way to develop applications such that you
  develop multiple projects in the same repository and you use tooling to
  orchestrate development. The tooling connects everything, makes the experience
  coherent, and ultimately makes the monorepo style work
question2: What are the benefits of monorepo development?
answer2: >-
  The benefits of monorepo development are that the tool chain enables you to
  interact with different projects in the same fashion, collaboration is more
  effective, and multiple apps can be refactored at once.
question3: >-
  What are some situations that are and aren’t appropriate for monorepo
  development? 
answer3: >-
  Any company with more than one large product would benefit from a monorepo,
  but it would not benefit a company that wants to keep their teams distinct
  from one another.
question4: How do I start a monorepo for a pre-established project?
answer4: >-
  If you wanted to start your own monorepo, you can start by taking a project or
  handful of projects and moving them to the same place. As you develop, pull
  pieces of your applications out and put them into packages.
---
Jeffrey Cross and Victor Savkin are the cofounders of NRWL. They used to work together at Google on the Angular team and started NRWL so that people could use Angular 2 well. Victor talks about NRWL’s tool NX, which came from the desire to help people develop like the tech giants. Companies like Google and Facebook develop in the same repository so that people can collaborate. NX is an open source tool for this collaborative development, known as a monorepo. 

Monorepo style development is a way to develop applications such that you develop multiple projects in the same repository and you use tooling to orchestrate development. The tooling connects everything, makes the experience coherent, and ultimately makes the monorepo style work. The benefits of monorepo development are that the tool chain enables you to interact with different projects in the same fashion, collaboration is more effective, and multiple apps can be refactored at once. 

The panel discusses what situations are appropriate for a monorepo and which are not. Victor believes that any company with more than one large product would benefit from a monorepo, but it would not benefit a company that wants to keep their teams distinct from one another. The hosts express some concerns about implementation, such as scaling and creating the infrastructure. Victor assures them that a monorepo is inherently scalable, and most tools will work for years and years. As for the infrastructure, companies like NRWL specialize in helping companies set up monorepos, and NX provides many of the necessary tools for a monorepo. A monorepo can be tailor-made to fit any size of company, and can even be created for already established projects. 

If you wanted to start your own monorepo, you can start by taking a project or handful of projects and moving them to the same place. As you develop, pull pieces of your applications out and put them into packages. Victor cautions that monorepos tend towards a single version policy, so you’ll want to get on the same version as your third party dependencies before you move your next application in. You can move things in and temporarily have different versions, but plan to make them the same version eventually.

Victor talks about how the CI in a monorepo setup looks different, because you run tests against everything that might be broken by that change, not just the project its in. So, when you change something in your code, you need to consider what other pieces of code need to be taken into account. A monorepo does make dependencies more explicit, and when you have good tooling it’s easier to see the effect the changes you make have. This is where NX excels. One of the big advantages of NX is that it allows you to partition your application into packages with a well defined API, and prevents the project from becoming one giant node. You can then interact with those packages, and see what happens when you change something. You have a lot more clarity of how your app is partitioned and what the restraints are. NX allows you to share stuff between the front and backend. 

The show concludes with the conversation turning to Jeffrey and Victor’s consulting work. They talk about some of the interesting features that are happening outside of React that we are missing out on. Victor is very impressed with tooling in the Angular community. He talks about a tool called Console for NX. They end by talking about the schematic powered migrations in Angular. 

**Panelists**



*   Leslie Cohn-Wein
*   Dave Ceddia
*   Lucas Reis

With special guest: Jeffrey Cross and Victor Savkin


## **Sponsors**



*   [Sustain Our Software](https://devchat.tv/sustain-our-software/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [My JavaScript Story](https://devchat.tv/my-javascript-story/)

**Links**



*   [NRWL](https://nrwl.io/)
*   [Angular](https://angular.io/)
*   [NX](https://nx.dev)
*   [Building Fullstack React Applications in Monorepo](https://blog.nrwl.io/building-full-stack-react-applications-in-a-monorepo-7dfa1714b988)
*   [Angular CLI](https://cli.angular.io/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Lucas Reis:**



*   [Dear Startup](http://kyleprifogle.com/dear-startup/)
*   [Cryptocurrencies video by 1Blue1Brown](https://www.youtube.com/watch?v=bBC-nXj3Ng4)

**Dave Ceddia:**



*   [Help, I’ve Fallen (into code) and I Can’t Get Up!](https://gist.github.com/hydrosquall/5e72f226ec2d2ab35620a0998f705284)
*   [Code maps frontend](https://github.com/hydrosquall/code-maps-frontend)

**Victor Savkin:**



*   [Ember Mug](https://ember.com/)
*   [Heal the Internet](https://m.signalvnoise.com/heal-the-internet-reprise/)

**Jeffrey Cross: **



*   [lululemon Commission pant](https://shop.lululemon.com/c/men-pants/_/N-7ub?CID=Google_All_PPC%2BBrand_US&gclid=Cj0KCQjwz8bsBRC6ARIsAEyNnvoIPICJloTpYU7cQN2SpZDBx-E-AEX5afeAEBtLDtuMA_2Xs5EqWFoaAo-cEALw_wcB&gclsrc=aw.ds)

**Leslie Cohn-Wein**



*   [Why I’m No Longer Talking to White People](https://www.amazon.com/Longer-Talking-White-People-About/dp/1635572959/ref=tmm_pap_swatch_0??ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [Everylayout.dev ](https://every-layout.dev/)
