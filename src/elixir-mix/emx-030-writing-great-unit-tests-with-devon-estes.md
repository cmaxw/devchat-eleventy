---
layout: layouts/post.njk
title: >
      EMx 030: Writing Great Unit Tests with Devon Estes
date: 2018-12-04 11:00:42
episode_number: 030
duration: 59:43
audio_url: https://media.devchat.tv/elixir-mix/EMx_030_Writing_Great_Unit_Tests_with_Devon_Estes.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Josh Adams
- Charles Max Wood 
- Mark Ericksen 
**Special Guest:** Devon Estes 

In this episode of Elixir Mix, the panel talks with [Devon Estes](https://twitter.com/devoncestes?lang=en) who is a software developer who uses Elixir. He currently resides in Berlin, Germany and has been working there for the past four years. The panelists and the guest talk about [Elixir](https://elixir-lang.org), testing, and much more! Check it out!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

0:49 – Chuck: I am starting a new show called [The DevRev](https://thedevrev.com). Check it out [here!](https://thedevrev.com) Our special guest today is Devon Estes. [Episode 18](https://devchat.tv/elixir-mix/emx-018-devon-estes-all-in-on-elixir/) is a past episode you’ve been on – check it out [here!](https://devchat.tv/elixir-mix/emx-018-devon-estes-all-in-on-elixir/)

1:26 – Devon: I am American but live in Berlin, Germany for about 4 years now. I was a freelancer, but now I am at a “real” job now where I am a software developer using [Elixir.](https://elixir-lang.org)

1:50 – Chuck: Cool!

2:05 – Guest: Something to always talk about testing – it’s evergreen!

2:15 – Chuck: What are the benefits you get from testing and what is your approach?

2:24 – _The guest answers the question._

3:53 – _Panelist chimes in._

4:18 – Panel: I like playing around and I know when something is terrible. I have to poke around to figure out if I like it or not. I am an exploratory developer. I write a test and it looks great at first but the implementation is terrible or something.

5:54 – Mark comments on developers and how they interact with their code.

7:15 – Mark: How do you approach that? I heard you talking about tests, spikes and other things.

7:22 – Guest: If it is something that is small I will write the test first. If it’s larger I will usually do 2-3 spikes to figure out what is going on.

_The guest continues with this topic._

8:54 – Panel: I found that over the years I couldn’t do that.

9:21 – Guest: With the topic of testing in[Elixir](https://elixir-lang.org) I have these “rules” but I break them all the time. Sometimes you get better, cleaner tests out of it if you were to break the rule(s.). Tests are only there for 90% of the time, in my own opinion. Sometimes you have to play around to see what’s going on.

10:36 – Panel: I agree a lot, especially with integrations.

10:49 – Guest.

12:18 – Panel: You have these guidelines or rules and you know when to break those rules. You talked about these specific rules and I thought it was interesting. I was reading through these and I have the same rules but you codified them with examples. Can you walk us through your guidelines?

13:00 – Guest: To be super clear I am talking about unit tests. When I think of testing there is this testing pyramid.

13:52 – Panel.

14:57 – Guest: Like I said, these rules are meant to be broken, if appropriate.

16:39 – _Guest continues with unit testing and other types of testing. He talks about easier to more difficult kinds of tests._

17:42 – Guest (continues): Sometimes the tests are accurately true, and sometimes not. It can be easy to get into those traps. Hopefully they will tell you what is expected.

18:25 – Panel: In Ruby, there is a test that would modify your code and remove stuff? Was it Mutant? [Mutant testing.](https://github.com/topics/mutation-testing)

19:03 – _Guest answers the question._

19:38 – Guest: I don’t know if [Elixir](https://elixir-lang.org) has anything like that, yet, but it would be pretty cool. It would be a good idea for someone to take on!

20:00 – Chuck: I have had conversations with a colleague – they both pushed back and talked more about [Cypress.io](https://www.cypress.io) and integrated tests.

21:04 – Chuck: I think it’s interesting to see the different approaches!

21:14 – Guest: We are lucky to have great tooling in [Elixir!!](https://elixir-lang.org)

_The guest mentions_ [_Wallaby.js!_](https://wallabyjs.com)

24:39 – _The guest talks about unit levels. Check it out here!_

26:35 – Panel.

26:48 – Chuck: How does it affect my workflow? I like end-to-end tests. The efficiency, if it’s repeating stuff – I don’t care – as long as it’s fast enough. If it ruins my workflow then it’s a problem.

27:22 – Panel.

28:12 – The topic “_test coverage” is mentioned by Chuck._

28:25 – Panel.

29:02 – [FreshBooks!](https://www.freshbooks.com)

30:10 – _Guest talks about Wallaby.js.&nbsp;_

32:24 – Panel: We’ve had you on before, and the idea is that you are all into Elixir and its path. ([EMx 018 – Episode with Devon Estes](https://devchat.tv/elixir-mix/emx-018-devon-estes-all-in-on-elixir/))

32:57 – Guest: I think testing in Elixir is simpler.&nbsp;

34:04 – Panel.

34:07 – Guest: You have commands and you have queries.

_The guest gives a hypothetical example! The guest also mentions_[_GenServers_](https://elixir-lang.org/getting-started/mix-otp/genserver.html)_, too._

35:42 – Guest: There are two ways that you can interact with the process: command & queries.

37:00 – Guest talks about different libraries such as: [MoX](https://github.com/mox-project/).

37:41 – Panel: Any tips on testing the servers; just any GenServer?

38:25 – _Panelist shares his approach with this._

39:54 – Guest: I don’t test name servers b/c they are by definition global state.

_The guest goes into great detail about testing – check it out!_

46:29 – Panel.

47:01 – [Guest:](https://github.com/devonestes) I kind of hate the term dependency interjection in the functional context.

47:17 – Panel: I think it’s helpful, because...

47:28 – Guest.

47:49 – _Panelists go back-and-forth!_

48:20 – Panel: Sending a message to the testing process – this was something that was stated by Devon earlier. I find this really helpful.

49:00 – Chuck: Picks!

49:05 – [Ad: Lootcrate.com](https://www.lootcrate.com)

END – [CacheFly!](https://www.cachefly.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [GenServers](https://elixir-lang.org/getting-started/mix-otp/genserver.html)
- [Elm](https://elm-lang.org)
- [JavaScript](https://www.javascript.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [React](https://reactjs.org)
- [Wallaby](https://wallabyjs.com)
- [Cypress.io](https://www.cypress.io)
- [Mutation Testing – GitHub](https://github.com/topics/mutation-testing)
- [MoX](https://github.com/mox-project/)
- [MRS 003 – Episode with Devon Estes](https://devchat.tv/ruby-rogues/my-ruby-story-devon-c-estes/)
- [RR 295 – Episode with Devon Estes](https://devchat.tv/ruby-rogues/rr-295-the-european-ruby-community-with-devon-c-estes/)
- [RR 330 – Episode with Devon Estes](https://devchat.tv/ruby-rogues/rr-330-functions-vs-methods-devon-estes/)
- [EMx 018 – Episode with Devon Estes](https://devchat.tv/elixir-mix/emx-018-devon-estes-all-in-on-elixir/)
- [Devon’s GitHub](https://github.com/devonestes)
- [Devon’s Twitter](https://twitter.com/devoncestes?lang=en)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [CacheFly](https://www.cachefly.com)

**Picks:**

Mark

- [Get Alias](https://brainlid.org/dev/2018/11/13/git-aliases.html)
- Blog - Mox 

Josh

- [GitPitch.com](https://gitpitch.com)
- Slide Deck by Josh

Charles

- Values 
- [Extreme Ownership](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2)
- Sit down with your team 
- [Discord server for DevChat](https://discord.gg/z7RNTHR)
- [Recommendation Page for Elixir](https://devchat.tv/elixir-mix-guests/)

Devon

- [Dell Laptop XPS 13](https://www.dell.com/en-us/shop/dell-laptops/xps-13/spd/xps-13-9360-laptop)
- [Play Station Mini](https://www.gamespot.com/articles/playstation-classic-mini-game-list-release-date-us/1100-6461870/)
- Test&nbsp; - devonestes@gmail.com


### Transcript


