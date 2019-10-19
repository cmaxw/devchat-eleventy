---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 435: Alternatives to Adding React with Graham Conzett'
date: 2019-10-22T10:00:11.272Z
episode_number: '435'
duration: '59:28'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_435_Graham_Conzett.mp3'
tags:
  - ruby_rogues
  - podcast
  - React
  - rails-ujs
  - frontend frameworks
  - Ruby
  - Ruby on Rails
  - Rails
  - Graham Conzett
  - Charles Max Wood
  - David Kumura
  - Nate Hopkins
  - Andrew Mason
question1: >-
  What should I consider when making the decision to add a frontend framework
  like React to my app?
answer1: >-
  Consider your issue and if there is a way to solve it without bringing in
  JavaScript. There are many old tools available that may fit your needs, but
  sometimes the best solution is to bring in something like React. Consider the
  impact it will have on your team. What is the learning curve with this new
  technology? Will it require that more people who specialize in this be hired? 
  Remember that multiple technologies can exist side by side, so choosing to use
  a new one is not mutually exclusive. If you’re considering adding a frontend
  framework, start with minimal JS and then talk to your team about when it
  feels right to do it. Sometimes things will force the issue and make you want
  to explore using frontend frameworks. When it’s a time saver, it makes your
  team scale better, or when you have something you just can’t do without it,
  then that might be the right time to use React.
question2: How can I prevent things like React from taking over my app?
answer2: >-
  Explicitly define where and why  you will use things like React and add it to
  your company documentation. This will keep React limited and prevent it from
  taking over.
question3: What are the tradeoffs between staying in Ruby and adding React?
answer3: ' If you bring in React, you have to bring in a different testing framework. React also has a bigger learning curve than standard HTML or CSS. There are far less conventions around React than Rails, so you have to spend time coming to a consensus as a team. Webpacker helps with this to a degree, but it also pulls in a bunch of third party plugins, so Rails is no longer writing the rules and you may have to debug random plugins.'
question4: What is rails-ujs?
answer4: >-
  An abbreviation for Unobtrusive JavaScript. These are JavaScript ‘helpers’
  included in the Rails bundle that you can add to various buttons that help you
  decorate and enhance. You don’t have to change much of your HTML frontend code
  but it makes it more interactive. Ujs can be used anywhere in your app.
---
Graham Conzett has been a developer for 12 years. He has worked with Ruby and Rails for half of that, and currently works for a company that does large format touchscreens. Graham gave a talk at RailsConf 2018 called "Old School JavaScript and Rails" where he talks about the experience of JavaScript fatigue. The world of JavaScript changes very quickly, and sometimes it feels like there's a new framework every week. Because there is no clear winner among these frameworks, many Rails developers feel compelled to reach for something like React. However, there are many strategies for doing JavaScript in Ruby and in Rails that existed before these frameworks, so you can accomplish what you want to get done without bringing one in. Remember that all of them can coexist side by side, so you don't have to pick one strategy. The panel discusses the effect that adopting a new technology can have on the team, such as the learning curve and hiring people that specialize in it. 

To illustrate this, Graham talks about the company he works for. Their app is a 90% is a Rails app, and one component has a lot of React. He talks about how they came up with that strategy and how they have kept React isolated to that page. It's crept into some other little places, but there is a document in the team charter that defines where and why they use certain things, and that has kept it limited.

Graham talks about the tradeoffs between choosing to stay in Rails or introduce React. If you bring in React, you have to bring in a different testing framework. React also has a bigger learning curve than standard HTML or CSS. There are far less conventions around React than Rails, so you have to spend time coming to a consensus as a team. Webpacker helps with this to a degree, but it also pulls in a bunch of third party plugins, so Rails is no longer writing the rules and you may have to debug random plugins.

If you want to avoid adding a framework like React, consider using ujs, or Unobtrusive JavaScript. These are JavaScript 'helpers' included in the Rails bundle that you can add to various buttons that help you decorate and enhance. You don't have to change much of your HTML frontend code but it makes it more interactive. Graham talks about he uses them and why he likes them. The panel compares using ujs to other strategies like using Stimulus or 'sprinkles' of JavaScript. For small JS sprinkles, Graham advises to keep that focused on a single HTML element and bound to a single event handler. Ujs works best when you piggyback off of that Rails/Rest related stuff, and Stimulus is more about manipulating parts on the page that don't have a need for asynchronous request. You can really use ujs everywhere, so the three techniques are not mutually exclusive.

Graham gives advice to developers considering pulling in a frontend framework. He says to start with minimal JS and then talk to your team about when it feels right to do it, because that's a tricky conversation to know what your expectations are and problems you're trying to solve. Sometimes things will force the issue and make you want to explore using frontend frameworks. When it's a time saver, it makes your team scale better, or when you have something you just can't do without it, then that might be the right time to use React.

The show concludes with the panel discussing their experiences with different compiling languages like TypeScript. They talk about what influences the tools people choose. They agree that the most important thing is getting working code out there, it doesn't really matter how it's written, but to only pull things in when you know you need it.

### Panelists

-   Charles Max Wood

-   Andrew Mason

-   David Kimura

-   Nate Hopkins

With special guest: Graham Conzett

Sponsors
--------

-   [Sentry](http://sentry.io/) use the code "devchat" for 2 months free on Sentry's small plan

-   [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues) Try Cloud 66 Rails for FREE & get $66 free credits with promo code RubyRogues

-   [Adventures in Angular](https://devchat.tv/adv-in-angular/)

Links

-   [Old School JavaScript and Rails at RailsConf 2018](https://www.youtube.com/watch?v=lh5qfV2iP80)

-   [React](https://reactjs.org/)

-   [React Native](http://www.reactnative.com/)

-   [React Native Web](https://github.com/necolas/react-native-web)

-   [Jest](https://jestjs.io/)

-   [Capybara](https://github.com/teamcapybara/capybara)

-   [Webpacker](https://github.com/rails/webpacker)

-   [Rails-ujs](https://github.com/rails/rails-ujs)

-   [Turbolinks](https://github.com/turbolinks/turbolinks)

-   [Stimulus](https://stimulusjs.org/)

-   [Stimulus Reflex](https://github.com/hopsoft/stimulus_reflex)

-   [Babel](https://babeljs.io/)

-   [TypeScript](https://www.typescriptlang.org/)

-   [Actionview components](https://github.com/github/actionview-component)

-   [Angular](https://angular.io/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

### Picks

Charles Max Wood:

-   [St. George Marathon](https://www.stgeorgemarathon.com/)

-   [OBS](https://obsproject.com/)

David Kimura:

-   [WeDo 2.0 by Lego](https://education.lego.com/en-us/elementary/intro/wedo2)

-   [Workflow Automation Self Hosted](https://github.com/n8n-io/n8n)

Andrew Mason:

-   [Publish to Github action](https://github.com/mikeal/publish-to-github-action)

-   [JustDunning.com](https://www.justdunning.com/)

Nate Hopkins:

-   [Company of One by Paul Jarvis](https://www.goodreads.com/book/show/37570605-company-of-one)

-   [IndieHackers](https://www.indiehackers.com)

Graham Conzett:

-   [Basecamp's Shape Up](https://basecamp.com/shapeup)

-   [Pigeonforteachers.com](https://pigeonforteachers.com/) 

-   [IKE Smart City](https://www.ikesmartcity.com/)

Follow Graham [@gconzett](https://twitter.com/gconzett?lang=en) on Twitter and [Github](https://github.com/conzett)
