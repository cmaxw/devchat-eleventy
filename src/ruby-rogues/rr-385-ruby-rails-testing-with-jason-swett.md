---
layout: layouts/post.njk
title: >
      RR 385: “Ruby/Rails Testing” with Jason Swett
date: 2018-10-23 10:00:17
episode_number: 385
duration: 1:02:03
audio_url: https://media.devchat.tv/ruby-rogues/RR_385_Jason_Swett_Ruby_Rails_Testing.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Dave Kimura
- Eric Berry
- Nathan Hopkins
- David Richards

**Special Guest:** Jason Swett

In this episode of Ruby Rogues, the panel talks with Jason Swett who is a host of the podcast show, [_Ruby Testing!_](http://www.rubytestingpodcast.com) Jason also teaches Rails testing at [CodeWithJason.com](https://www.codewithjason.com). He currently resides in the Michigan area and works for Ben Franklin Labs. Check-out today’s episode where the panelists and the guest discuss testing topics.

**Show Topics:**

0:00 – [Sentry.IO – Advertisement!](https://sentry.io/welcome/)

Check out the code: DEVCHAT @ Sentry.io.

1:07 – I am David Kimura and here is the panel! Tell us what is going on?

1:38 – Jason: I started my own podcast, and have been doing that for the past few months. That’s one thing. I started a new site with CodeWithJason.com.

2:04 – You released a course?

2:10 – Jason: Total flop and it doesn’t exist, but I am doing something else.

2:24 – I bet you learned a lot by creating the course?

2:34 – Jason: The endeavor of TEACHING it has helped me a lot.

2:50 – Tell us why we should drink the Koolaid?

3:02 – Jason: What IS testing? Good question. Whether is it is manual testing or automated testing. We might was well automate it.

3:25 – If we are testing our code what does that look like?

3:34 – Jason: Not sure what you mean, but I am doing tests at a fine grain vs. coarser grain.

4:00 – Show of hands who has...?

4:19 – What different tests are there?

4:20 – Jason: Good question. One term that one person uses is different to a different person. Let’s start with unit tests vs. integration tests.

_Jason dives into the similarities and differences between these 2 tests (see above)._

There are different tests, such as: featured tests, acceptance tests, etc.

5:45 – What tests are THE best?

5:50 – Jason: Good question. The kind of tests you are writing depends on what type of coverage you are going for.

If I had a sign-up page for a user, I would...

7:36 – What anti-patterns are you seeing? What is your narrative in teaching people how to use them?

8:07 – Jason talks first about his background and his interaction with one of his colleagues.

8:58 – Question.

9:00 – Jason continues with his answers from 8:07.

9:32 – Jason: Feel free to chime-in. What have you done?

9:42 – I often ignore it until I feel bad and then I say: wait-a-minute I am a professional. Then I realize I ignored the problem because I was acting cowardly.

10:29 – For me it depends on the test that it is.

One gem that I found is: [RSpec RETRY](https://github.com/NoRedInk/rspec-retry).

11:16 – Jason: The test is flapping because of something is wrong with the database or something else. Since you asked about anti-patterns let’s talk about that!

[_Rails_](https://rubyonrails.org) _and_ [_Angular_](https://angular.io) _are mentioned._

13:10 – Do you find that you back off of your unit testing when you are using integration?

13:22 – Jason: It depends on the context we are talking about.

Jason talks about featured testing, model-level testing, and more.

13:58 – What is your view on using MOCKS or FAKES. What should we be doing there?

14:10 – Jason: Going to the Angular world I understand Mocks better than now. There was a [parable](https://www.newyorker.com/books/page-turner/this-is-water) that I think is applicable here about the young and the old fish.

16:23 – Jason continues talking about testing things in isolation.

16:36 – Question.&nbsp;

16:39 – I have been looking for an area to specialize in and I wrote an eBook. (Check out [here](https://www.angularonrails.com/author/jadmin/) to see the articles and books that Jason has authored.)

Then I was looking around and I wanted to see what people’s issues are with Rails? They have a hard time with testing. I wanted to help them feel competent with it.

18:03 – In your course you have how to choose a framework.

I know Ruby has several options on that front – how do you choose?

18:24 – Jason: There are 2 factors to consider.

_Jason tells us what those two factors are._

Jason: Angular, React and Vue.

19:52 – Panelist: I had a conversation with a beginner and we were talking about the different tests. He said the DSL really appealed to him. The surface area of the AI made it approachable for him.

20:27 – Jason: I wished I had figured out DSL out a little better. Understanding the concept of a block. The IT is just a function and you can put parentheses in different areas and...

21:01 – That makes sense. Let’s revisit the Tweet you wrote.

21:35 – Jason: There are certain use cases where it makes sense. Where Gmail was the thing out there. At some point the Internet formed the opinion that...

22:39 – Old saying: Nobody gets fired for using Microsoft and then it was IBM. Nothing wrong with those things if that’s what you are trying to do. Sometimes we make decisions to not be criticized. We try to grab big frameworks and big codes so we are not criticized for.

23:48 – [Jason:](https://www.jasonswett.net) I think developers have this idea that OLD is OUTDATED. Not so. I think it’s mature, not necessarily outdated. I think it’s a pervasive idea.

24:31 – I think it suffers a bit when all the mind shares get lumped into one thing.

_The panelist continues..._

24:53 – Jason: I don’t know if I like this analogy.

26:00 – I agree with that sentiment. It’s crazy that the complexity has become so pervasive.

26:18 – I think of [SPAs](https://en.wikipedia.org/wiki/Single-page_application) as...

26:37 – Jason: Going back to the Tweet I wrote, I am pulling in JavaScript but I am preferring to sprinkle Java into Rails.

27:02 – Absolutely. I think that’s where we agree on. Late in 2017 we had the guest...

“Use JavaScript sprinkles.”

27:49 – Panelist chimes-in.

28:37 – Jason: That make sense. Use your preexisting...

I am afraid of committing to a single framework. I don’t have anything against JavaScript but I am afraid of using only one thing when something else becomes fashionable.

29:30 – Have you found that Java sparkle approach is easy to test?

29:38 – Jason: I think it’s easier. Client server architecture...

30:10 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

30:41 – [Shout-out to the Rails team!](https://rubyonrails.org/community/) What other testing frameworks are there? What if you are not the developer but you are the Quality Assurance (QA) person. They have been given the task of testing on the application.

31:30 – Jason: So someone who is not a developer and they want to test the application. I don’t want to get out of my role of expertise. I did talk to a [QA engineer](https://www.talentlyft.com/en/resources/quality-assurance-qa-engineer-job-description) and I asked them: What do you do? All of his tests are manual. He does the same stuff as a Rails developer would do.

32:52 – _Panelist talks about pseudo code._

34:07 – Jason: I am curious, Dave, about the non-programmer helping with tests what is the team structure?

34:23 – Dave: You will have one QA per three developers.

34:44 – Jason: If you have a QA person he is integrated within the team – that’s what has been the case for me.

35:02 – Dave: It’s a nice thing to have because we need to crank out some features and we have a good idea what is wrong with the app. We can go in there and see if our application is good, but they are combining different scenarios to do the unit tests and see what they are lacking. They are uncovering different problems that we hadn’t thought of.

36:07 – The organization has to have the right culture for that to work.

36:35 – If it’s a small team then it will help to see what everyone is doing – it’s that engagement level. If the team is too large then it could be a problem.

37:15 – Jason: Engagement between whom?

37:27 – Both.

_Panelist goes into detail about different engagement levels throughout the team._

38:10 – Jason: Yeah that’s a tough thing.

38:49 – It’s interesting to see the things that are being created. Testing seems to help that out. We are getting bugs in that area or se didn’t design it well there...

We see that we need some flexibility and getting that input and having a way to solve the problems.

39:32 – Jason: Continuous deployment – let’s segue into this topic.

41:17 – Panelist: Do you have recommendations on how often we should be deploying in that system per day/week?

41:40 – Jason: We would deploy several times a day, which was great. The more the better because the more frequently you are deploying the fewer things will go wrong.

42:21 – More frequently the better and more people involved.

42:45 – Jason continues this conversation.

42:51 – Panelist: Continuous integration – any time you were say to forgo tests or being less rigid?

43:14 – Jason: I don’t test everything. I don’t write tests for things that have little risks.

43:56 – I think it is a good segue into how you write your code. If you write a code that is like spaghetti then it will be a mess. Making things easier to test.

44:48 – Jason: This is fresh in my mind because I am writing an app called [Green Field.](https://stackoverflow.com/questions/1459941/what-are-greenfield-and-brownfield-applications)

46:32 – Uniqueness Validations, is mentioned by Jason.

47:00 – Anything else to add to testing a Rails application?

47:08 – Jason: Let’s talk about 2 things: walking skeleton and small stories.

[This book](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627) is a great resource for automated testing.

Last point that I want to talk about is small stories: continues deployment and continuous delivery. If you make your stories smaller then you are making your stories crisply defined. Have some bullet points to make it really easy to answer the question. Answer the question: is this story done or not done? Someone should be able to run through the bullet points and answer that question.

50:02 – I am in favor of small stories, too. Makes you feel more productive, too.

50:14 – Work tends to lend itself to these types of stories and running a sprint.

51:22 – You don’t have to carry that burden when you go home. You might have too big of a chunk – it carries too much weight to it.

51:47 – Book the Phoenix Project. Work in progress is a bad thing. That makes sense. You want to have fewer balls in the air.

52:17 – Anything else?

52:22 – Jason: You can find me at: CodewithJason.com also Twitter!&nbsp;

52:45 – [Advertisement – Fresh Books!](https://www.freshbooks.com)

1:01:50 – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Erlang](https://www.erlang.org)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby Motion](http://www.rubymotion.com)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [Single Page Application (SPA)](https://en.wikipedia.org/wiki/Single-page_application)
- [RSpec – Retry](https://github.com/NoRedInk/rspec-retry)
- [Ruby Testing Podcast](http://www.rubytestingpodcast.com)
- [The Feynman Technique Model](https://mattyford.com/blog/2014/1/23/the-feynman-technique-model)
- [Book: Growing Object-Oriented Software, Guided by Tests (1st edition)](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)
- [Jason Swett’s Twitter](https://twitter.com/jasonswett?lang=en)
- [Jason Swett’s LinkedIn](https://www.linkedin.com/in/jasonswett)
- [Parable: Young Fish and Old Fish – What is Water?](https://www.newyorker.com/books/page-turner/this-is-water)
- [Jason’s articles and eBook](https://www.angularonrails.com/author/jadmin/)
- [Jason’s Website](https://www.jasonswett.net)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- Cache Fly

**Picks:**

David

- [This is Water](https://www.newyorker.com/books/page-turner/this-is-water)
- [The Feynman Technique Model](https://www.newyorker.com/books/page-turner/this-is-water)

Nate

- Taking some time off
- [Pry Test](https://github.com/hopsoft/pry-test)

Eric

- [Fake App](http://fakeapp.com/)
- [Ruby Hack Conference](https://rubyhack.com)

Dave

- [Brooks Shoes](https://www.brooksrunning.com/en_us/brooks-adrenaline-gts-18-mens-running-shoes/110271.html)

Jason

- [The Food Lab](https://www.amazon.com/Food-Lab-Cooking-Through-Science/dp/0393081087)
- [Growing Object-Oriented Software](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)


### Transcript


