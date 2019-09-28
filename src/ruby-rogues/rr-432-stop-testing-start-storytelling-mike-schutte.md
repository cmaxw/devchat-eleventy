---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 432: Stop Testing, Start Storytelling Mike Schutte'
date: 2019-10-01T10:00:41.879Z
episode_number: '423'
duration: '40:36'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_432_Mike_Schutte.mp3'
image: /images/uploads/ruby-rogues-thumb-1-300x300.jpg
tags:
  - ruby_rogues
  - podcast
  - Ruby
  - Ruby on Rails
  - David Kimura
  - Andrew Mason
  - Mike Schutte
  - storytelling in code
  - testing
  - Jest
  - TypeScript
---
Mike Schutte is a fronted developer at TED Conferences and was trained in code school at Turing in Colorado. He likes the idea of code as a communication tool, and in 2018 he gave a talk at RailsConf called _Stop Testing. Start Storytelling. _

Today the panel is discussing what Mike means by storytelling in testing. In order to combat the hesitancy to start testing, Mike believes that changing your mindset to think away from the implementation details while deploying these tests can help them be more efficient. In short, if the test isn’t readable by a non-developer, then it’s not telling a story, it’s just writing code. The test is almost the first point of contact away from the source code, so if that’s unwieldy in a test it will be hard to use elsewhere in the application. We have an intuition for stories, so use tests in order to communicate the intent of what the application should do under certain conditions. If it’s hard to set that up in a succinct way then maybe it should be written differently.

This view is backed up by other experts as well. Sandi Metz and Noel Rappin talk about it in Tech Done Right episode 69. They say if your test isn’t easy to write and you’re having to create tons and tons of objects, then the system or the class your trying to test is too interconnected, so you might want to break that up into more separated concerns so each of your tests can be focused on what you’re actually trying to test. If you follow these principles, your testing will be a lot easier even if there are more classes and modules to test. David applies this approach to an online shopping cart and how to break it up. The idea is to abstract it away from the big picture, in this case the grand total, and breaking it down into smaller stories or things. 

Mike shares methods to put this approach into practice and how to test. He finds that reading the code as if you were reading a section in a novel rather than code helps him sketch out what he needs to test. The panelists discuss different methods for testing, emphasizing keeping the models or classes you write very simple, minimizing the amount of full on feature specs. If you take time to think about the mindset and the process you use to write a test, the tools you use becomes interchangeable in a lot of ways.

Andrew brings up a trend that he’s noticed of tools coming out that are taking mini tests or RSpec and trying to morph it to the programmer’s preferences. Tools like this end up with a lot of weird syntax that is hard to maintain. The panelists acknowledge the challenges that stem from using a custom VIM, and believe that having an agnostic approach makes it easier to jump into different systems. Your focus shouldn’t be your developer preferences or what you’re used to, rather it should be your happiness when you have to update. They agree that because it’s easy to understand, it’s telling a story the reader can understand, which makes it easier to maintain in the long run.

The Ruby Rogues panel talk about different methods for testing, particularly if they’ve ever tested JavaScript code in a Rails app. They talk about some of their preferred tools to test their code, such as StoryBook. Mike talks about what StoryBook is and what it’s like to use it. David talks about his experience using Cucumber, why his team used it, and how it works. The show concludes with Mike sharing some of the benefits he has found from using typed languages like TypeScript and the panel talking about their experience playing around with Actionview components. 


### **Panelists**



*   Andrew Mason
*   David Kimura

With special guest: Mike Schutte


## **Sponsors**



*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues) Try Cloud 66 Rails for FREE & get $66 free credits with promo code RubyRogues
*   [Elixir Mix Podcast](https://devchat.tv/elixir-mix/)

**Links**



*   [Stop Teaching. Start Storytelling (RailsConf 2018)](https://www.youtube.com/watch?v=-vTZzOssR7A)
*   [Tech Done Right episode 69](https://www.techdoneright.io/69)
*   [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter)
*   [Grumpy Old Man](https://github.com/hopsoft/grumpy_old_man)
*   [RSpec](https://rspec.info/)
*   [MaxiTest](https://github.com/grosser/maxitest)
*   [Minitest Spec](https://github.com/metaskills/minitest-spec-rails)
*   [Thoughtbot ](https://github.com/thoughtbot)
*   [Jest](https://jestjs.io/)
*   [Stimulus](https://stimulusjs.org/)
*   [Webpacker](https://github.com/rails/webpacker)
*   [StoryBook](https://storybook.js.org/)
*   [Cucumber](https://cucumber.io/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Actionview component](https://github.com/github/actionview-component)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**David Kimura:**



*   [Rode Podcaster](http://www.rode.com/microphones/podcaster)

**Andrew Mason:**



*   [Drifting Ruby 196](https://www.driftingruby.com/episodes/actionview-components-in-rails-6-1)
*   [VS Code Ruby Debug](https://github.com/castwide/vscode-ruby-debug)

**Mike Schutte:**



*   Follow Mike on Twitter [@tmikeschu](https://twitter.com/tmikeschu?lang=en)
*   [StoryBook.js](https://storybook.js.org/)

<!-- Docs to Markdown version 1.0β17 -->
