---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 434: Surviving Webpack with Ross Kaffenberger'
date: 2019-10-15T10:00:58.765Z
episode_number: '434'
duration: '1:23:43'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_434_Ross_Kaffenberger.mp3'
image: /images/uploads/ruby-rogues-thumb-1-300x300.jpg
tags:
  - ruby_rogues
  - podcast
  - ruby
  - ruby on rails
  - rails
  - web development
  - Webpacker
  - Dave Kumura
  - Andrew Mason
  - Nate Hopkins
  - Charles Max Wood
  - Ross Kaffenberger
question1: How did you go from Rails 5 to Rails 6 with the new webpacker?
answer1: >-
  They took an iterative approach, moving files over one bit at a time. They
  manually divided their code so that the vendor libraries were in separate
  files.
question2: What should I consider when updating to Webpack?
answer2: >-
  It’s important to consider your app size, your comfort level with Webpack,
  your team dynamic, and your timeframe. Ross recommends the iterative approach
  that they took, which took longer, but allowed them to learn as they went.
question3: Where should I put my source code in Webpack?
answer3: >-
  When you install Webpack for the first time, create a JS folder under App, it
  will place a ‘application.js’ file in another file called ‘Packs”. The idea of
  that pack file (application.js file under Packs) is that it’s the entry point
  for all of the JS that you’re going to add to your Webpack build. But if you
  add additional files to that Pack folder, Webpacker will instruct Webpack to
  treat each of those files as a separate entry point in a dependency graph.
  Make sure that only files that are intended to be the entry points for your
  Webpack builds are in that packs folder.
question4: Is it worth it to switch to Webpack?
answer4: >-
  Ross believes that it has improved their development experience, though he
  cautions that it is not for everybody.
---

Ross Kaffenberger is a software engineer at Stitch Fix and has been developing web applications for the past 12 years, mostly in Ruby and JavaScript. Today he and the panel are discussing how to survive Webpack. When many folks first encounter Webpack, they feel confused, overwhelmed, and don’t know how to get it to do what you want it to. In the latest version they tried to introduce some more sane default settings, but it is still a major change in technology.

Ross talks about how his company transitioned Rails 5 to Rails 6 with the new Webpacker. His company chose to take an iterative approach and slowly migrated to Webpacker. His app was very JS heavy with a large number of libraries, many of which were not very Webpack friendly. They chose to separate out the vendor libraries into a separate bundle, that way they could contain each deploy. They still had to add some configuration, especially to make things available on global scope.As they started moving jQuery plugins over, sometimes the functionality would disappear, and Ross talks about how they figured out their mistakes. It was difficult for them to get out of their Sprockets mindset and into the new mindset of Webpack, which requires different techniques. There are also things that Webpack can do to keep you out of that situation

Ross gives some strategy advice for someone who is in a position to update from Sprockets to Webpack. It’s important to consider your app size, your comfort level with Webpack, your team dynamic, and your timeframe. Ross recommends the iterative approach that they took, which took longer, but allowed them to learn as they went.

Ross talks about the changes that happened in the switch from Webpack 3 to Webpack 4, and some of the contributions they made. He talks about some of his preferred Webpack configs and plugins. They discuss some of the drawbacks of Webpack, particularly the plethora of plugins that can make it seem daunting.

One of the big gotchas with Webpack is the location of your source code. When you install Webpack for the first time, create a JS folder under App, it will place a ‘application.js’ file in another file called ‘Packs”. The idea of that pack file (application.js file under Packs) is that it’s the entry point for all of the JS that you’re going to add to your Webpack build. But if you add additional files to that Pack folder, Webpacker will instruct Webpack to treat each of those files as a separate entry point in a dependency graph. Make sure that only files that are intended to be the entry points for your Webpack builds are in that packs folder.

It is also important to understand how you’re using global scope inside your JavaScript modules in your build. There’s a way to allow Webpack to inspect each of the files for a certain variable, such as a dollar sign. If he could go back and do it again, Ross would not split his code manually, but instead Embrace the notion that Webpack understands how to do code splitting for you, as long as instruct it to do it the right way.


Ultimately, it took Ross’ company 3 rather tedious months to transition to Webpack. It could’ve gone faster if they’d known more about Webpack to begin with. The panel discusses whether it was worth it to switch to Webpack. Transitioning to Webpack has changed their team dynamic and their day to day coding and debugging. One nice feature of Webpack is the source maps that aid in debugging. There are still areas for improvement, but now that it’s set up most folks on the team don’t think about it. Overall, the development experience has improved, and he thinks it was worth it, but it’s not for everybody.

**Panelists**

* Dave Kimura

* Andrew Mason

* Nate Hopkins

* Charles Max Wood

With special guest: Ross Kaffenberger

**Sponsors**

* [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan

* [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues) Try Cloud 66 Rails for FREE & get $66 free credits with promo code RubyRogues

* [Views on Vue](https://devchat.tv/views-on-vue/)

**Links**

* [RailsConf talk: A Webpack Survival Guide for Rails Developers](https://www.youtube.com/watch?v=fKOq5_2qj54&feature=youtu.be&t=230)

* [How we switched from Sprockets to Webpack](https://rossta.net/blog/from-sprockets-to-webpack.html)

* [Webpack](https://webpack.js.org/)

* [Webpacker](https://github.com/rails/webpacker)

* [Sprockets](https://github.com/rails/sprockets)

* [Knockout.js](https://knockoutjs.com/)

* [CKEditor](https://ckeditor.com/)

* [Chosen](https://harvesthq.github.io/chosen/)

* [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

* [Manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

* [Module shimming](https://webpack.js.org/guides/shimming/)

* [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

* [Vue](https://vuejs.org/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Dave Kimura:**

* [Avengers Quinjet Lego set](https://www.lego.com/en-us/product/avengers-ultimate-quinjet-76126)

* [Portable air conditioner](https://www.homedepot.com/p/LG-Electronics-8-000-BTU-5-500-BTU-DOE-Portable-Air-Conditioner-115-Volt-w-Dehumidifier-Function-and-LCD-Remote-in-White-LP0817WSR/300422892)

**Nate Hopkins:**

* [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

* [Brandon Sanderson’s Mistborn series ](https://www.goodreads.com/series/40910-mistborn)

**Charles Max Wood:**

* [Restream](https://restream.io/)

* [Twitch](https://www.twitch.tv/)

* [OBS](https://obsproject.com/)

**Ross Kaffenberger: **

* [Exploring ES6](https://exploringjs.com/es6/)

* [1 Second Everyday](https://1se.co/)

* [One Sentence Journal](https://gretchenrubin.com/2007/08/why-i-started-k/)

* Follow Ross on [Twitter](https://twitter.com/rossta?lang=en) and [Github](https://github.com/rossta), and on his [blog](https://rossta.net/)


<!-- Docs to Markdown version 1.0β17 -->
