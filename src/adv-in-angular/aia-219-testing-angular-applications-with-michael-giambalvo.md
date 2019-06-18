---
layout: layouts/post.njk
title: >
      AiA 219: Testing Angular Applications with Michael Giambalvo
date: 2018-12-11 11:00:42
episode_number: 219
duration: 54:36
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_219_Testing_Angular_Applications_with_Michael_Giambalvo.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

 **Panel:**

- Charles Max Wood 
- Joe Eames
- John Papa
- Alyssa Nicoll

**Special Guest:** &nbsp; Michael Giambalvo

In this episode, Chuck talks with special guest [Michael Giambalvo](https://twitter.com/heathkit) who is an author of the book titled, “Testing Angular Applications.” This book can be purchased through Amazon, Manning Publications, among other sites, too. The panelists and the guest talk about different types of tests, such as end-to-end testing and unit testing. They also talk about Angular, Java, Mocha, Test Café, and much more! Check it out!

**Show Topics:**

0:00 – Advertisement: [AngularBootCamp.Com](https://angularbootcamp.com)

0:53 – Chuck: Our panel is John Papa, Joe Eames, [Alyssa Nicoll](https://twitter.com/AlyssaNicoll), and myself. My new show is the [DevRev](https://thedevrev.com) – check it out, please!

1:26 – Guest: I am a contributing author to our [new book](https://www.manning.com/books/testing-angular-applications), which is about Angular.

1:56 – Chuck: How is it like to write with multiple people?

2:04 – Guest: Yep it’s hard b/c we are in different areas. Back in the 2.0 days, Jesse was writing a book. He was talking about typescript and components. Craig made friends with Jesse and they were talking about the book he was writing. Then we all jumped in to get in finished. We all had areas that we were specialists in!

3:21 – Alyssa: If you break it up that makes sense.

3:31 – Guest.

3:40 – Panel: Pick different words and go around the room.

3:51 – Panel: You write the first ½ of a sentence and then you write the other ½ of the sentence!

4:10 – Guest: You have these big word documents and go back-and-forth.

4:36 – Alyssa: Editing and then pass it back-and-forth – how does that work?

4:46 – Guest: It’s like 8 pass backs-and-forth.

5:35 – Guest: The editing was the main issue – it took forever!

5:50 – Chuck: We were going to co-author a book and we didn’t.

Chuck: If you could break down the book in 4 core topics what would they be? Elevator pitch? What is the starting knowledge?

6:18 – Guest: We expect you to know Angular Intro and that’s it!

6:43 – Chuck: What are the principles?

6:50 – Guest: We talk about the testing component. We highlight the benefits of using Angular vs. Angular.js. That shows up in the book a lot. It’s very example driven.

7:28 – Chuck: We have been talking about testing quite a bit on the show lately.

8:22 – Chuck: Do you see people using the testing in regards to the pyramid?

8:33 – Guest: I am not a huge fan of the pyramid. Some questions I ask are: Does it run quickly? Is it reliable? To give you some background I work on Google Club Platform.

10:21 – _The guest talks about “Page Level Integration Tests.”_

11:31 – Alyssa.

11:50 – Chuck: After your explanation after writing your book I’m sure it’s a breeze now. Knowing these tests and having the confidence is great.

12:13 – Guest: Tools like Cypress is very helpful. Web Driver Testing, too.

12:43 – Chuck: Where do people start? What do you recommend? Do they start at Protractor or do they come down to unit tests?

13:02 – Guest: Finding the balance is important.

14:30 – Chuck: Check out a past episode that we’ve done.

14:40 – Panel asks a question about tools such as Test Café and Cypress.

14:50 – Guest: I really don’t know Test Café. There is a long story in how all of these fit together.

_The guest talks about Selenium, Cypress, Safari, Edge, Chrome, Firefox, and Puppeteer!_

19:24 – Chuck: Does it work in Electron as well, too?

19:26 – Guest: Good question but I don’t know the answer.

19:39 – Chuck: Maybe a listener could write a comment and tell us.

19:43 – Panel: I’ve used Protractor for many years. I like the explanation that you just gave. The great thing about Protractor is that you can...

20:29 – Guest: We wanted to explain the difficulty of Protractor in this book.

Guest: You have this test running in Node but then you have your app running in the browser. You have these 2 different run times. You might have to run them separately and there is tons of complexity.

21:15 – Panel: As I am coding you have this visual browser on one side, and then on the other side you have...

22:22 – Guest asks the panelists a question.

22:32 – Panel: I have only used it for a few months and a few several apps but haven’t had those issues, yet.

22:55 – Guest: I haven’t heard of Test Café at all.

23:05 – Alyssa: Is the book online?

23:13 – Guest: It’s available through Manning Publications and Amazon. I think we have some codes to giveaway!

23:34 – Chuck: Yeah, we are working on those codes and giveaways. We have mentioned about 5 or 6 tools – are you worried about your book going out of date?

24:05 – Guest: Sure that is something we are worried about. When editing took a long time to get through that was one of my thoughts.

_The guest talks about Selenium, control flow, Protractor,_

25:45 – Guest (continues): These new features were coming out while the book was coming out – so there’s that. What’s this thing about control flow and why this matters to you, etc. We were able to add that into the book, which is good. We were able to get those instructions out there. Books have a delay to them.

26:47 – Chuck: We talked about this in JavaScript Jabber. This guest talked about this and he is from Big Nerd Ranch. At what point do you have this breaking point: This isn’t a good fit for Test Café or Selenium BUT a good fit for Mocha or Jest?

27:27 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

28:04 – Guest: Do you have a reason why you would switch testing tools?

28:12 – Chuck.

28:41 – Guest: That’s the tradeoff as you move down the ladder.

29:43 – Panel: If you want to trigger an action that isn’t triggerable?

29:50 – _Guest answers the question._

30:07 – Panel.

30:20 – Chuck.

30:33 – Guest: You can access code. Usually something in a workflow will make it happen. You have to fall back on some type of UI sort of thing. It’s almost like doing Tetris! I’ve never had to directly call something. I am not the best one to answer that.

31:16 – Panel: It’s like a weird mix of tests.

31:29 – _Panelist is talking about unit testing and other tests._

31:55 – _Chuck asks a question._

32:02 – Guest: It depends on the scale of your project.

32:28 – Chuck: Do you guys use a test coverage tool or on the side of: everything should run and then test if there is a bug.

32:43 – Guest: Coverage isn’t the full story.

33:26 – Panel: You said you weren’t a fan of the testing pyramid – can you explain why?

33:43 – Guest: I think it turns too much prescriptive.

Guest: I think there are bigger concerns out there and the test pyramid is an over-simplification.

35:22 – Panel: What’s the difference between fast and slow testing?

35:28 – Guest: It really depends on your level of knowledge. If your test suite runs more than twenty minutes to an hour that is probably too slow!

36:03 – Alyssa.

36:09 – Chuck.

36:16 – Alyssa: There is no way that 20 minutes equals that!

36:26 – Guest: 20 minutes is the extreme limit.&nbsp;

36:51 – Chuck.

37:11 – Panel: Any new Twitter news on Trump?

37:21 – _Panelist talks about test suites!_

37:40 – _Panelists and guests go back-and-forth._

38:11 – Chuck: Do you have any recommendations for the unit testing? Keeping it small or not so much?

38:29 – Guest: Think: What is this test asking? Don’t write tests that won’t fail if some other tests could have caught them.

39:04 – Alyssa: That’s smart!

39:09 – _Guest continues._

39:28 – Chuck: What else to jump on?

Chuck: Do you write your tests in typescript or in Java?

39:48 – _Guest answers the question. He mentions_ [_Python_](https://www.python.org)_, typescript, and more!_

40:17 – Alyssa.

40:22 – _Guest continues._

40:46 – Alyssa: How many people worked on that project?

40:50 – Guest: 2 or 3 framework engineers who did the tooling. About 20 people total for tooling to make sure everything worked.

41:18 – _Panelist asks a question._

41:22 – Guest: About 20 minutes!

42:35 – _Guest wants to talk about the topic: end-to-end testing!_

44:59 – Chuck: Let’s do picks!

45:09 – [Fresh Books!](https://www.freshbooks.com)

END – [CacheFly!](https://www.cachefly.com)

**Links:**

- [Vue](https://vuejs.org)
- [jQuery](https://jquery.com)
- [Angular](https://angular.io)
- [JavaScript](https://www.javascript.com)
- [Python](https://www.python.org)
- [React](https://reactjs.org)
- [Cypress](https://www.cypress.io)
- [Puppeteer – GitHub](https://github.com/GoogleChrome/puppeteer)
- [Protractor Test](https://www.protractortest.org/#/)
- [Mocha.js](https://mochajs.org)
- [Selenium](https://www.seleniumhq.org/projects/webdriver/)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [GitHub: testcafe](https://github.com/DevExpress/testcafe)
- [Istanbul](https://istanbul.js.org)
- [“Protractor: A New Hope” – YouTube Video – Michael Giambalvo & Craig Nishina](https://www.youtube.com/watch?v=6aPfHrSl0Qk)
- [Book: “Testing Angular Applications” – Manning Publications](https://www.manning.com/books/testing-angular-applications)
- [Michael’s GitHub](https://github.com/heathkit?tab=stars)
- [Michael’s Twitter](https://twitter.com/heathkit)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Alyssa

- [Fantastic Beasts](https://www.fantasticbeasts.com/)

Joe

- [Skyward](https://www.amazon.com/Skyward-Brandon-Sanderson/dp/0399555773)
- [War of the Spider Queen](https://www.amazon.com/Dissolution-Forgotten-Realms-Spider-Queen/dp/B00AY44HXS/ref=sr_1_1?ie=UTF8&qid=1544206673&sr=1-1&keywords=war+of+the+spider+queen)
- [Luxur - board game](https://www.amazon.com/Board-Game-Luxor/dp/B07D45SYHT)
- [Testing Angular with Cypress.io](https://www.youtube.com/watch?v=eZyD-8qglWY)
- [Space Cadets](https://boardgamegeek.com/boardgame/123096/space-cadets)
- [Sonar Family](https://www.matagot.com/en/catalog/details/jeux-famille/3/sonar-family/951)

Charles

- [The DevRev Podcast](https://thedevrev.com)
- [Gary Vee Audio Experience](https://itunes.apple.com/us/podcast/the-garyvee-audio-experience/id928159684?mt=2)

Michael

- [Scale](https://www.amazon.com/Scale-Universal-Innovation-Sustainability-Organisms/dp/1594205582)
- [Captain Sonar](https://boardgamegeek.com/boardgame/171131/captain-sonar)


### Transcript


