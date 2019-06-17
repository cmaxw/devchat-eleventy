---
layout: layouts/post.njk
title: >
      RR 391: Frontend Testing Like a Rubyist with Josh Justice
date: 2018-12-04 11:00:42
episode_number: 391
duration: 1:07:04
audio_url: https://media.devchat.tv/ruby-rogues/RR_391_Frontend_Testing_Like_a_Rubyist_with_Josh_Justice.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Dave Kimura
- Charles Max Wood
- Nate Hopkins 

**Special Guest:** [Josh Justice](https://twitter.com/CodingItWrong?lang=en)

In this episode of Ruby Rogues, the panelists talk with [Josh Justice](https://twitter.com/CodingItWrong?lang=en) who is a developer, writer, and speaker. Josh streams JavaScript and web development on Friday’s at 2:00 PM (ET) [here!](https://www.twitch.tv/codingitwrong) The panelists and the guest talk about Josh’s background and frontend testing in Ruby. Check it out!

**Show Topics:**

0:00 – Advertisement: [Sentry.io](https://sentry.io/welcome/)

1:04 – Chuck: Hi! Dave, Nate, and myself are on the panel and our special guest is Josh Justice! I am developing a show about developer freedom and it’s called [The DevRev](http://thedevrev.com). It will be streamed through YouTube, and I will record Friday afternoons. Check out Facebook, too!

2:11 – Josh: Thanks! I am happy to be here!

2:18 – Chuck: Introduce yourself, please!

2:24 – Josh: I have been a developer for about 14 years. I have used PHP and then got into Ruby and then frontend development.

2:46 – Chuck: You work for Big Nerd Ranch in Atlanta?

2:56 – Josh: Yep for the last 3-4 years!

3:15 – Chuck: Can you introduce the topic?

3:25 – _The guest talks about Big Nerd Ranch and frontend development. Learn TDD is mentioned, too!_ [_Check it out here!_](https://github.com/CodingItWrong)

5:06 – Panel: How much bouncing do you do between React and [Vue](https://vuejs.org)?

5:11 – Guest.

5:47 – Chuck: We need to get you on our podcast shows for React and [Vue](https://vuejs.org)! It’s an approach that I am familiar with in Ruby – and Selenium what a pain!

6:16 – Guest: I’ve had a good experience with [Cypress](https://www.cypress.io), actually!

7:47 – Guest: Panelist, can you share your experiences?

7:57 – Panel: Not bad experiences with testing, but now I am trying to minimize my use with JavaScript.

8:30 – Guest: I think there is a big push towards considering more server site rendering.

9:35 – Panel: What’s your recommendation to setup [Cypress?](https://www.cypress.io)

9:40 – Guest: Their docs are really great! They had some conference talks on how to set it up!

10:15 – Guest: Check out my talks about this topic. ([Connect Tech 2018](https://www.youtube.com/watch?v=MU7K_V6rFjM)).

10:29 – Panel: I think [Cypress](https://www.cypress.io) is a pretty cool solution but one thing that left me confused is that you have to have an environment that is already stood-up and running. Is that accurate or has that changed?

11:00 – Guest: Can you clarify what you mean by a “running environment”?

11:04 – _Panelist clarifies._

11:44 – Guest: Luckily for me I have something to say b/c I tried a week ago!

12:01 – Guest mentions [Vue CLI 3.](https://cli.vuejs.org)

14:38 – Panel: How can you test your code coverage? I want to know how much of my code coverage am I hitting? The applications are up and running, it’s not going through the files (per se), and is there anything that would indicate how good your coverage is with the [Cypress](https://www.cypress.io) test?

15:10 – Guest: Let me as a follow-up question: How do you approach it on the frontend?

15:24 – _Panelist answers the guest’s question._

16:06 – _The guest mentions_ [_Vue CLI 2 & 3._](https://vuejs.org/v2/guide/installation.html)

18:31 – Chuck: Are you using the tool [Istanbul?](https://github.com/gotwarlost/istanbul)

18:36 – Guest: Yep [Istanbul](https://github.com/gotwarlost/istanbul) is the one!

18:54 – Chuck: I’ve heard some similar rumors, but can’t say.

19:02 – _Panelist talks._

20:13 – Chuck: I have been working on a project and what doesn’t get test-coverage gets a candidate to get pulled-out.

20:40 – Guest: Talking about test-driven development...

Guest: Have you read the original book?

21:02 – Guest: The book: “Effective Testing with RSpec 3” is updated information – [check it out!](https://pragprog.com/book/rspec3/effective-testing-with-rspec-3)

_The guest mentions his live stream on Friday’s. Check out the links found below!_

23:57 – Panel: How is the stability with tests like Cypress with end-to-end tests? If you are testing with a login then the user has to be already created. Or what about a [Twitter](https://twitter.com) app – the user has to be created and not followed? How do you handle that?

24:22 – Guest: I think we are spoiled in the Rails world b/c of those...

24:53 – _The guest answers the panelist’s question!_

26:59 – [Fresh Books!](https://www.freshbooks.com/?ref=ppc-fb&campaignid=717543354&adgroupid=51893696397&targetid=kwd-298507762065&crid=285105591548&dv=c&ntwk=g&source=GOOGLE&gclid=EAIaIQobChMI58PY5t3w3gIVCSlpCh0PLQZpEAAYASAAEgJpEvD_BwE&gclsrc=aw.ds)

28:07 – Guest: Does that help?

28:10 – Panel.

28:21 – Guest: I have been thinking about this, though, recently. Thinking about the contracts through the business. I have dabbled with native development and I see the cost that runs a native app.

30:21 – Panel: It’s refreshing to hear the new market’s demands. I truly haven’t seen an application that requires that. I have built some extensive applications and also very simple ones, too; the need for productivity.

31:17 – _Guest mentions a talk at a conference. See here for that information!_

31:43 – Guest: I have a friend who was a new developer and he really knows his stuff. He said that he didn’t know if he could be a full stack developer in the next 5-10 years. Wait a minute?!

Guest: The freedom to create something that stands alone.

Guest: [Tom Dale](https://twitter.com/tomdale?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) is mentioned by the Guest.

33:35 – Panel: To choose Rails as a new developer (today) it’s not as easy as it was back in the day. Today you have Active Job, Action Cable and so many other components. It’s more complicated today then it was in the past. It could be overwhelming to a new developer.

35:00 – Chuck: I think a lot of that is the community’s fault and not Rails’ fault.

35:57 – Panel.

36:04 – Panel: The counter-argument could say that’s where server-less come in.

36:27 – Chuck: To some degree you can get away with it. You don’t have to worry about the infrastructure or anything else.

36:44 – Panel: Have you tried messing around with server-less functions with [AWS](https://aws.amazon.com)? I have and...it’s not easy. There is not a good flow or good work flow in a server-less environment.

38:01 – Chuck: You can go to this website. It makes the setup easier b/c you are adding your Azure or AWS features.

38:30 – Panel: This topic, though, does tie back to the testing topic we were talking about earlier!

39:14 – Panel: Yeah that is why I haven’t gotten into server-less things. The [Rails](https://github.com/rails/rails) holistic approach is so appealing.

40:14 – Panel continues: I want to take smaller steps when it comes to technology! I want to move into things that we are laying down the tracks to make it easier travelable. That way we can consider the things we’ve learned in the past and help those in the future.

41:07 – Chuck: What are lacking then? What is the friction that is left? Seems like Cypress helped removed that but maybe not?

42:02 – _Panelist mentions_ [_Cypress_](https://www.cypress.io)_,_ [_Jest,_](https://jestjs.io) [_Mocha_](https://mochajs.org)_, and others!_

43:10 – Panel (continues): I am all about experimenting but I want to know all the reasons. What has changed and what hasn’t’ changed?

43:29 – Panel: There is an article written that talks about this topic.

43:59 – _Guest mentions the video “Is TDD Dead?” (See links below.)_

44:29 – Guest: I like brining thoughts together and taking his or her input and come up with my own thoughts.&nbsp;

46:32 – Guest (continues): The testing trophy is heavier on the top (picture of a trophy).

Guest: I think the thing that draws me to unit testing is that...

47:37 – Guest: I am obsessed with testing.

_The guest gives a summary here!_

48:15 – Chuck: We talked with [Quincy Larson](https://twitter.com/ossia?lang=en) last week and it’s a really good take on what we are doing and what we are trying to accomplish with our tests. Check it out – it’s coming out soon!

49:05 – Panel: When you are younger into your career – the way you think about structuring your code – when you are comfortable you really don’t need that guidance.

50:00 – Guest: I would encourage folks who were new to coding to do the following...

51:36 – Guest: Think about WHY you are doing (what you are doing) and being able to articulate well what you are doing and why.

52:03 – Panel: There is no question – every time I test I am surprised how much it shapes my thinking about the code and how many bugs that I catch even in code that I thought was operating well. When you go too far though there is a fallacy there.

52:54 – Panel: Yes, testing is very important. I am a test-after-the-fact programmer. That is my self-key term. Don’t write 500-line methods b/c you won’t be able to test that. Don’t make it too abstract so have a common pattern that you will use. Have a lot of private methods that aren’t exposed to the API.

54:03 – Guest: Yes thinking about how to structure your code can be challenging at first but it gets easier.

55:58 – Chuck: I have had talks with [Corey Haines](https://twitter.com/coreyhaines) about topics like this!

56:47 – Guest: Yes it can be helpful in consultancy now.

59:23 – Guest: Think about this: choosing what level to test at.

1:00:14 – Panel: It’s hard b/c it changes all the time per function or something else. There are tradeoffs with everything we do.

1:00:41 – Chuck: You are the consultant it depends doesn’t it?

1:00:51 – Picks!

1:00:55 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

End – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [Cypress](https://www.cypress.io)
- [Vue](https://vuejs.org)
- [React](https://reactjs.org)
- [VUE CLI 3](https://cli.vuejs.org)
- [Jest.io](https://jestjs.io)
- [Mocha.js](https://mochajs.org)
- [GitHub: Istanbul](https://github.com/gotwarlost/istanbul)
- [The RSpec Book](https://pragprog.com/book/achbd/the-rspec-book)
- [RR 068 Episode](https://devchat.tv/ruby-rogues/068-rr-book-club-growing-object-oriented-software-guided-by-tests-with-steve-freeman-and-nat-pryce/)
- [Ember CLI](https://www.ember-cli-mirage.com)
- [GitHub: Factory\_Bot](https://github.com/thoughtbot/factory_bot)
- [GitHub: VCR](https://github.com/vcr/vcr)
- [Big Nerd Ranch](https://www.bignerdranch.com)
- [Big Nerd Ranch: Josh Justice / Team Manager](https://www.bignerdranch.com/about/the-team/josh-justice/)
- [The Bike Shed](http://bikeshed.fm)
- [Keynote: Tom Dale @ EmberFest 2018](https://www.youtube.com/watch?v=oRzmDobMZ_Q)
- [JSJ 291 Episode](https://devchat.tv/js-jabber/jsj-291-serverless-javascript-gareth-mccumskey/)
- [Serverless](https://serverless.com)
- [Article: Test-Induced Design Damage](http://david.heinemeierhansson.com/2014/test-induced-design-damage.html)
- [Video: Is TDD Dead?](https://www.youtube.com/watch?v=z9quxZsLcfo)
- [Music: Sub Conscious – Electronic / 2004](https://itunes.apple.com/us/album/sub-conscious/472786776)
- [Music: Interloper / 2015](https://itunes.apple.com/us/album/interloper-2015-remaster/976522606)
- [Disney Heroes: Battle Mode](https://itunes.apple.com/us/app/disney-heroes-battle-mode/id1327925104?mt=8)
- [Google Play: Disney Heroes / Battle Mode](https://play.google.com/store/apps/details?id=com.perblue.disneyheroes&hl=en_US)
- [Book Authoring Playlist](https://www.youtube.com/playlist?list=PLt8NYnKC3dzLnr29RTnYZ0vkk27C8tPvO)
- [Tom Dale’s Twitter](https://twitter.com/tomdale?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Corey Haines’ Twitter](https://twitter.com/coreyhaines)
- [Coding It Wrong](https://codingitwrong.com)
- [Josh’s Twitter](https://twitter.com/CodingItWrong?lang=en)
- [Josh’s GitHub](https://github.com/CodingItWrong)
- [Josh’s LinkedIn](https://www.linkedin.com/in/jjustice/)
- [Josh’s Vimeo Video](https://vimeo.com/298277470)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [CacheFly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com)

**Picks:**

Nate

- [Phutureprimitive - Sub Conscious](https://itunes.apple.com/us/album/sub-conscious/472786776)
- [Carbon Based Lifeforms - Interloper](https://itunes.apple.com/us/album/interloper-2015-remaster/976522606)

Dave

- [Dust collections system in Wood Shop](https://www.rockler.com/dust-collection)
- [Doctor Who&nbsp; - Theme Music](https://www.youtube.com/watch?v=rH0hHZA0U5c)

Charles

- [Authoring music](https://www.youtube.com/playlist?list=PLt8NYnKC3dzLnr29RTnYZ0vkk27C8tPvO)
- [Disney Hero Battles](https://play.google.com/store/apps/details?id=com.perblue.disneyheroes&hl=en_US)

Josh

- [Effecting Testing with RSpec 3](https://www.amazon.com/Effective-Testing-RSpec-Build-Confidence/dp/1680501984)
- [Growing Object-Oriented Software, Guided by Test](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)
- [XUnit Test Patterns](https://www.amazon.com/xUnit-Test-Patterns-Refactoring-Code/dp/0131495054)
- [Spectacle App](https://www.spectacleapp.com)
- [Alfred App](https://www.alfredapp.com)


### Transcript


