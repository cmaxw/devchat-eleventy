---
layout: layouts/post.njk
title: >
      RRU 043: Testing React Apps Without Testing Implementation Details with Kent C. Dodds
date: 2018-12-25 11:00:37
episode_number: 043
duration: 1:15:55
audio_url: https://media.devchat.tv/reactroundup/RRU_043_Testing_React_Apps_without_Testing_Implementation_Details_with_Kent_C_Dodds.mp3
podcast: react-round-up
tags: 
  - react_round_up
  - podcast
---

 **Panel:**

- Lucas Reis
- Justin Bennett
- Charles Max Wood

**Special Guest:** [Kent C. Dodds](https://twitter.com/kentcdodds)

In this episode, the panelist talk with today’s guest, [Kent C. Dodds](https://twitter.com/kentcdodds) who works for PayPal, is an instructor, and works through open source! Kent lives in Utah with his wife and four children. Kent and the panel talk today about testing – check it out!

**Show Topics:**

0:00 – [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

0:32 – Chuck: Hello! My new show is [TheDevRev](https://thedevrev.com) – please go check it out!

1:35 – Panel: I want all of it!

1:43 – Chuck: Our guest is Kent C. Dodds! You were on the show for a while and then you got busy.

2:06 – Guest.&nbsp;

3:09 – Panel: The kid part is impressive.

3:20 – Guest: Yeah it’s awesome, but the kid part is my wife!&nbsp;

4:09 – Panel: 10 years ago we weren’t having any tests and then now we are thinking about how to write better tests. It’s the next step on that subject. What is your story with tests and what sparked these ideas?

4:50 – Guest.

7:25 – Panel: We have a bunch of tests at my work. “There is no such thing as too many tests” are being said a lot! Then we started talking about unit tests and there was this shift. The tests, for me, felt cumbersome. How do I know that this suite of tests are actually helping me and not hurting me?

8:32 – Guest: I think that is a valuable insight.

11:03 – Panel: What is the make-up of a good test?

11:13 – Guest: Test every line – everything! No.

11:19 – Chuck: “Look at everything!” I don’t know where to start, man!

11:30 – Guest: How do you avoid those false negatives and false positives.

15:38 – Panel: The end user is going to be like more of integration test, and the developer user will be more like a unit tester?

16:01 – Guest: I don’t care too much of the distinction between unit and integration tests.

18:36 – Panel: I have worked in testing in the past. One of the big things that fall on the users’ flow is that it’s difficult b/c maybe a tool like Selenium: when will things render? Are you still testing things in isolation?

19:33 – Guest: It depends. When I talk about UI integration testing I am still mocking the backend.

23:10 – Chuck: I am curious, where do you decide these are expensive (so I don’t want to do too many of them), but at what point is it worth it to do it?

23:30 – _Guest mentions the testing pyramid._

28:14 – Chuck: Why do you care about confidence? What is confidence and what does it matter?

28:35 – [FreshBooks!](https://www.freshbooks.com)

29:50 – Guest.

32:20 – Panel: I have something to add about the testing pyramid.

_Lucas talks about tooling, Mocha, JS Dong, and more!_

33:44 – Guest: I think the testing pyramid is outdated and I have created my own.

_Guest talks about static testing, LINT, Cypress, and more!_

35:32 – Chuck: When I was a new developer, people talked about using tests to track down bugs. What if it’s a hairy bug?

36:07 – Guest: If you can, you can use this methodical approach...

39:46 – Panel: Let’s talk about the React library for a little bit?

Panel: Part of the confidence of the tests we write we ask ourselves “will it stand the test of time?” How does the React Testing library go about to solve that?

41:05 – Guest.

47:51 – Panel: A few more questions. When you are getting something and testing and grabbing the label by its text have you found that to be fragile? Is it reasonably reliable?

48:57 – Guest: Yeah this is a concern and it relies on content.

53:06 – Panel: I like this idea of having a different library. Sometimes we think that a powerful tool is better, but after spending some time with other tools that’s not always the case.

54:16 – Guest: “You tie your hands to free your mind.” It does less but what it does less it does better.

55:42 – Panel: I think that with Cypress, too?

55:51 – Guest: Yeah that’s why Cypress is great to use.

57:17 – Panel: I wrote a small library here at work and it deals with metrics. I automated all of those small clicks – write a bit – click a bit – and it was really good. I felt quite efficient. Those became the tests.

57:58 – Panel: One more question: What about react Native? That comes up a lot. At looking at testing libraries we try to keep parody between the two. Do you have any thoughts on that?

58:34 – _Guest talks about React Native._

1:00:22 – Panel: Anything else? It’s fascinating to talk about and dive-into these topics. When we talk about confidence that is very powerful, too.

1:01:02 – _Panelist asks the last question!_

1:01:38 – Guest: You could show them the coverage support.

**Links:**

- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [JavaScript](https://www.javascript.com)
- [Elm](https://elm-lang.org/community)
- [Phoenix](https://phoenixframework.org)
- [GitHub](https://github.com)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [React Testing Library](https://github.com/kentcdodds/react-testing-library)
- [Cypress.io](https://www.cypress.io)
- [Hillel Wayne](https://www.hillelwayne.com)
- [Testing JavaScript with Kent C. Dodds](https://testingjavascript.com)
- [Kent Dodds’ News](https://buttondown.email/kentcdodds)
- [Kent Dodds’ Blog](https://blog.kentcdodds.com)
- [Egghead.io – Kent C. Dodds](https://egghead.io/playlists/react-hooks-and-suspense-650307f2)
- [Ready to Write a Novel?](https://nanowrimo.org)
- [Practical TLA+](https://www.apress.com/us/book/9781484238288?gclid=EAIaIQobChMIy6n4jevC3gIVx16GCh2CgwddEAQYAiABEgJWKPD_BwE)
- [GitHub: Circleci-queue](https://github.com/eddiewebb/circleci-queue)
- [GitHub: sstephenson / bats](https://github.com/sstephenson/bats)
- [Todoist](https://todoist.com)
- [Discord](https://discordapp.com/invite/7PhUYPd)
- [Kent’s Twitter](https://twitter.com/kentcdodds)

**Sponsors:**

- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%257Efreshbooks&kw=fresh%2520books&campaignid=717543354&adgroupid=53169078638&kwid=kwd-299596828929&dv=c&ntwk=g&crid=289653575014&source=GOOGLE&gclid=EAIaIQobChMIwr_9ofSJ3gIVyrfACh1DkQVNEAAYASAAEgJIUvD_BwE&gclsrc=aw.ds&dclid=CPaQ6KX0id4CFUTcwAodvfQEcA)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- 

**Picks:**

Lucas

- [Hillel Wayne](https://www.hillelwayne.com/)
- [Practical TLA+](https://www.apress.com/us/book/9781484238288?gclid=EAIaIQobChMIy6n4jevC3gIVx16GCh2CgwddEAQYAiABEgJWKPD_BwE)

Justin

- [Circle CI Queue](https://github.com/eddiewebb/circleci-queue)
- [Bats](https://github.com/sstephenson/bats)
- [Todoists](https://todoist.com)

Charles

- [MFCEO Project Podcast](https://andyfrisella.com/blogs/mfceo-project-podcast)
- [The DevRev](https://thedevrev.com)

Kent

- [Discord Devs Who Write](https://discord.gg/7PhUYPdhttps://discord.gg/7PhUYPd)
- Finding your Why! 
- [TestingJavaScript.com](https://testingjavascript.com/)
- [kcd.im/news](https://buttondown.email/kentcdodds)
- kcd.i./hooks-and-suspense 
- [NaNoWriMo](https://nanowrimo.org)


### Transcript


