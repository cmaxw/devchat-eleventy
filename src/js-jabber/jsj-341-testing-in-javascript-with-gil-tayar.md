---
layout: layouts/post.njk
title: >
      JSJ 341: Testing in JavaScript with Gil Tayar
date: 2018-11-27 11:00:05
episode_number: 341
duration: 1:02:49
audio_url: https://media.devchat.tv/js-jabber/JSJ_341_Testing_in_JavaScript_with_Gil_Tayar.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

 **Panel:**

- Aimee Knight
- AJ O’Neal
- Charles Max Wood

**Special Guest:** [Gil Tayar](https://twitter.com/giltayar?lang=en)

In this episode, the panel talks with [Gil Tayar](https://twitter.com/giltayar?lang=en) who is currently residing in Tel Aviv and is a software engineer. He is currently the Senior Architect at [Applitools](https://applitools.com) in Israel. The panel and the guest talk about the different types of tests and when/how one is to use a certain test in a particular situation. They also mention Node, React, Selenium, Puppeteer, and much more!

**Show Topics:**

0:00 – [Advertisement: KENDO UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

0:35 – Chuck: Our panel is AJ, Aimee, myself – and our special guest is Gil Tayar. Tell us why you are famous!

1:13 – [_Gil_](https://twitter.com/giltayar?lang=en) _talks about where he resides and his background._&nbsp;

2:27 – Chuck: What is the landscape like now with testing and testing tools now?

2:39 – Guest: There is a huge renaissance with the JavaScript community. Testing has moved forward in the frontend and backend. Today we have lots of testing tools.&nbsp; We can do frontend testing that wasn’t possible 5 years ago. The major change was React.

_The guest talks about Node, React, tools, and more!_

4:17 – Aimee: I advocate for tests and testing. There is a grey area though...how do you treat that? If you have to get something into production, but it’s not THE thing to get into production, does that fall into product or...what?

5:02 – Guest: We decided to test everything in the beginning. We actually cam through and did that and since then I don’t think I can use the right code without testing. There are a lot of different situations, though, to consider.

_The guest gives hypothetical situations that people could face._

6:27 – Aimee.

6:32 – Guest: The horror to changing code without tests, I don’t know, I haven’t done that for a while. You write with fear in your heart. Your design is driven by fear, and not what you think is right. In the beginning don’t write those tests, but...

7:22 – Aimee: I totally agree and I could go on and on and on.

7:42 – Panel: I want to do tests when I know they will create value. I don’t want to do it b/c it’s a mundane thing. Secondly, I find that some times I am in a situation where I cannot write the test b/c I would have to know the business logic is correct. I am in this discovery mode of what is the business logic? I am not just building your app.

I guess I just need advice in this area, I guess.

8:55 – Guest gives advice to panelist’s question. He mentions how there are two schools of thought.

10:20 – Guest: Don’t mock too much.

10:54 – Panel: Are unit tests the easiest? I just reach for unit testing b/c it helps me code faster. But 90% of my code is NOT that.

11:18 – Guest: Exactly! Most of our test is glue – gluing together a bunch of different stuff! Those are best tested as a medium-sized integration suite.

12:39 – Panel: That seems like a lot of work, though! I loathe the database stuff b/c they don’t map cleanly. I hate this database stuff.

13:06 – Guest: I agree, but don’t knock the database, but knock the level above the database.

13:49 – Guest: Yes, it takes time! Building the script and the testing tools, but when you have it then adding to it is zero time. Once you are in the air it’s smooth sailing.

14:17 – Panel: I guess I can see that. I like to do the dumb-way the first time. I am not clear on the transition.

14:47 – Guest: Write the code, and then write the tests.

_The guest gives a hypothetical situation on how/when to test in a certain situation._

16:25 – Panel: Can you talk about that more, please?

16:50 – Guest: Don’t have the same unit – do browser and business logic stuff separated. The real business logic stuff needs to be above that level. First principle is separation of concerns.

18:04 – _Panel talks about dependency interjection and asks a question._

18:27 – Guest: What I am talking about very, very light inter-dependency interjection.

19:19 – Panel: You have a main function and you are doing requires in the main function. You are passing the pieces of that into the components that need it.

19:44 – Guest: I only do it when it’s necessary; it’s not a religion for me. I do it only for those layers that I know will need to be mocked; like database layers, etc.

20:09 – Panel.

20:19 – Guest: It’s taken me 80 years to figure out, but I have made plenty of mistakes a long the way. A test should run for 2-5 minutes max for package.

20:53 – Panel: What if you have a really messy legacy system? How do you recommend going into that? Do you write tests for things that you think needs to get tested?

21:39 – _Guest answers the question and mentions_ [_Selenium!_](https://www.seleniumhq.org)

24:27 – Panel: I like that approach.

24:35 – Chuck: When you say integration test what do you mean?

24:44 – Guest: Integration tests aren’t usually talked about. For most people it’s tests that test the database level against the database. For me, the integration tests are taking a set of classes as they are in the application and testing them together w/o the...so they can run in millisecond time.

26:54 – [Advertisement – Sentry.io](https://sentry.io/welcome/)

27:52 – Chuck: How much do the tools matter?

28:01 – Guest: The revolutions matter. Whether you use Jasmine or Mocha or whatever I don’t think it matters. The tests matter not the tools.

28:39 – Aimee: Yes and no. I think some tools are outdated.

28:50 – Guest: I got a lot of flack about [my blog](https://applitools.com/blog/cypress-vs-selenium-webdriver-better-or-just-different) where I talk about [Cypress](https://www.cypress.io) versus [Selenium](https://www.seleniumhq.org). I will never use Jasmine. In the end it’s the

29:29 – Aimee: I am curious would you be willing to expand on what the [Selenium](https://www.seleniumhq.org) folks were saying about Puppeteer and others may not provide?

29:54 – Guest: [Cypress](https://www.cypress.io) was built for frontend developers. They don’t care about cross browser, and they tested in Chrome. Most browsers are typically the same. [Selenium](https://www.seleniumhq.org) was built with the QA mindset – end to end tests that we need to do cross browser.

_The guest continues with this topic._

30:54 – _Aimee mentions_ [_Cypress._](https://www.cypress.io)

31:08 – Guest: My guessing is that their priority is not there. I kind of agree with them.

31:21 – Aimee: I think they are focusing on mobile more.

31:24 – Guest: I think cross browser testing is less of an issue now. There is one area that is important it’s the visual area! It’s important to test visually across these different browsers.

32:32 – Guest: [Selenium](https://www.seleniumhq.org) is a Swiss knife – it can do everything.

33:32 – Chuck: I am thinking about different topics to talk about. I haven’t used Puppeteer. What’s that about?

33:49 – Guest: [Puppeteer](https://github.com/GoogleChrome/puppeteer) is much more like [Selenium](https://www.seleniumhq.org). The reason why it’s great is b/c [Puppeteer](https://github.com/GoogleChrome/puppeteer) will always be [Google Chrome.](https://www.google.com/chrome/)

35:42 – Chuck: When should you be running your tests? I like to use some unit tests when I am doing my development but how do you break that down?

36:06 – Guest.

38:30 – Chuck: You run tests against production?

38:45 – Guest: Don’t run tests against production...let me clarify!

39:14 – Chuck.

39:21 – Guest: When I am talking about integration testing in the backend...

40:37 – _Chuck asks a question._

40:47 – Guest: I am constantly running between frontend and backend.

I didn’t know how to run tests for frontend. I had to invent a new thing and I “invented” the package JS DONG. It’s an implementation of Dong in Node. I found out that I wasn’t the only one and that there were others out there, too.

43:14 – Chuck: Nice! You talked in the prep docs that you urged a new frontend developer to not run the app in the browser for 2 months?

43:25 – Guest: Yeah, I found out that she was running the application...she said she knew how to write tests. I wanted her to see it my way and it probably was a radical train-of-thought, and that was this...

44:40 – Guest: Frontend is so visual.

45:12 – Chuck: What are you working on now?

45:16 – Guest: I am working with [Applitools](https://applitools.com) and I was impressed with what they were doing.

_The guest goes into further detail._

46:08 – Guest: Those screenshots are never the same.

48:36 – Panel: It’s...comparing the output to the static site to the...

48:50 – Guest: Yes, that static site – if you have 30 pages in your app – most of those are the same. We have this trick where we don’t upload it again and again. Uploading the whole static site is usually very quick. The second thing is we don’t wait for the results. We don’t wait for the whole rendering and we continue with the tests.

50:28 – Guest: I am working mostly (right now) in backend.

50:40 – Chuck: Anything else? Picks!

50:57 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

END – [Advertisement: CacheFly!](https://www.cachefly.com)

**Links:**

- [JavaScript](https://www.javascript.com)
- [React](https://reactjs.org)
- [Elixir](https://elixir-lang.org)
- [Node.js](https://nodejs.org/en/)
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Cypress](https://www.cypress.io)
- [SeleniumHQ](https://www.seleniumhq.org)
- [Article – Ideas.Ted.Com](https://ideas.ted.com/how-showing-vulnerability-helps-build-a-stronger-team/)
- [Book: Never Split the Difference](https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/1847941494/ref=as_li_ss_tl?ie=UTF8&qid=1540326875&sr=8-1&keywords=never+split+the+difference&dpID=5119RQ4ZRlL&preST=_SY344_BO1,204,203,200_QL70_&dpSrc=srch&linkCode=sl1&tag=co0dcd-20&linkId=8f1be5a9753630f03a868b6f119dc664&language=en_US)
- [Applitools](https://applitools.com)
- [Guest’s Blog Article about Cypress vs. Selenium](https://applitools.com/blog/cypress-vs-selenium-webdriver-better-or-just-different)
- [Gil’s Twitter](https://twitter.com/giltayar?lang=en)
- [Gil’s Medium](https://medium.com/@giltayar)
- [Gil’s LinkedIn](https://il.linkedin.com/in/giltayar)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry](https://sentry.io/welcome/)
- [CacheFly](https://www.cachefly.com)

**Picks:**

Aimee

- [How Showing Vulnerability Helps Build a Stronger Team](https://ideas.ted.com/how-showing-vulnerability-helps-build-a-stronger-team/)

AJ

- [Never Split the Difference](https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2)
- [Project - TeleBit](https://telebit.cloud)

Charles

- [Monster Hunter International](https://www.amazon.com/Monster-Hunter-International-Hunters-Book-ebook/dp/B00APAH7PQ)
- [Metabase](https://www.metabase.com/)

Gil

- [Cat Zero](https://www.amazon.com/Cat-Zero-Jennifer-Rohn/dp/1938463668)
- [The Origin of Consciousness in the Breakdown of the Bicameral Mind](https://www.julianjaynes.org/bicameralmind.php)


### Transcript


