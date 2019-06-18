---
layout: layouts/post.njk
title: >
      RR 394: Cables, Concurrency, and Ruby 3x3 with Vladimir Dem
date: 2018-12-25 11:00:17
episode_number: 394
duration: 1:01:42
audio_url: https://media.devchat.tv/ruby-rogues/RR_394_Cables_Concurrency_and_Ruby_3x3_with_Vlad_Dem.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Eric Berry
- Dave Kimura
- Nate Hopkins
- Charles Max Wood

**Special Guest:** [Vladimir Dem](https://twitter.com/palkan_tula?lang=en)

In this episode of Ruby Rogues, the panel talks with [Vladimir Dem](https://twitter.com/palkan_tula?lang=en) who is a Ruby developer and currently lives in Brooklyn, New York. Today, the panelists and guest talk about cables, concurrency, and Ruby. Check it out!

**Show Topics:**

0:00 – Advertisement: [Sentry.io](https://sentry.io/welcome/)

1:02 – Chuck: Hello! The panel today is Eric, Dave, Nate, and myself! Our guest is Vlad!

1:30 – [Guest:](https://twitter.com/palkan_tula?lang=en) My name is Vladimir, but people call me Vlad. I have been writing Ruby since 2013 for about 4.5 years. Before that I was a PHP, JavaScript developer among other languages. I am mostly Erlang and Ruby now.

2:29 – _Panel asks Vlad a question._

3:29 – Guest: Yeah something like that. I call it a different server b/c we still use the code base but we do not do anything related to web sockets and connections.

4:20 – Panel: If you wanted to take a normal action cables setup what steps would you have to go through to convert that over to also use the [anycable](https://github.com/anycable/anycable) server?

5:21 – _Guest answers the question._

7:31 – Chuck: This sounds complicated and a bit of work. When I look at this I think: I have a tiny app is it worth it? When does it become worth it?

7:52 – Guest: Definitely not for the tiny app.

8:50 – Panel: You use it when it makes sense. Overcomplicating your infrastructure doesn’t make sense.

9:27 – Guest: That’s the idea.

10:28 – Panel.

11:05 – Guest: The question really is how many connections you have and how long-lived they are?

13:09 – Panel: If I move my project over to [anycable](https://github.com/anycable/anycable) how much new code am I going to have to write?

13:28 – _Guest answers the question._

15:52 – Panel: What’s the update been like for [anycable](https://github.com/anycable/anycable) and how many users use [anycable?](https://github.com/anycable/anycable)

16:05 – Guest: I really don’t have statistics. I hear people at conferences say that they use [anycable](https://github.com/anycable/anycable), but no real statistics right now. I would like to know these numbers, but no idea.

16:30 – Panel: ...is that the time to consider using anycable?

17:05 – Guest: That’s a good point to make.

18:44 – Panel: How is the initial handshake time with anycable? Is there any difference with anycable in that sense?

19:05 – _Guest answers the question._

22:49 – Chuck: Can you define a couple of terms for me? I am hearing terms like: concurrency and real time and others?

23:00 – Guest: Good point. What is real time?

_The guest continues to define these terms._

28:10 – [Fresh Books!](https://www.freshbooks.com/?ref=10400&utm_source=sas&utm_medium=affiliate&utm_campaign=87321&sscid=c1k2_96qpg)

29:10 – Chuck: Ruby 3 is supposed to solve some of these problems. Can you talk about some of those?

29:46 – Guest: Interesting question and I’ve been asked about this before.

35:14 – Panel: Did you say there was some activity around trying to reduce the memory consumption for thread?

35:25 – _Guest answers the question._

36:14 – Panel: Vlad, you are spread from backend to fronted and you’ve mentioned Phoenix Live Vue. Can I pick your brain about it?

36:39 – _Guest answers the question._

38:48 – Panel: It seems like one of the core tenants is empowering small teams to compete with larger teams. I have high hopes to keep small teams competitive.

39:50 – Guest: Yes, that’s the idea of Rails and Ruby itself to build something and try something and perhaps fail.

40:57 – _Panelist mentions Erlang, anycable, and concurrency._

41:14 – Guest: We are working on administration functionality and we want to build something fast.

44:40 – Panel: That’s the interesting thing about turbo links cause I think it was a marketing fail. You have to invest time to learn how to use it and how to use it properly.

45:44 – Guest: I don’t have a good guide for turbo links.

46:00 – Chuck: Anything else we want to talk about?

46:10 – Guest: Two more things I want to mention.

54:02 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

54:35 – Picks!

End – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [The DevRev Podcast Show](https://thedevrev.com)
- [Angular](https://angular.io)
- [DevChat TV](https://devchat.tv)
- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [Cypress](https://www.cypress.io)
- [Vue](https://vuejs.org)
- [React](https://reactjs.org)
- [Faye-Websocket-Ruby](https://github.com/faye/faye-websocket-ruby)
- [Anycable](https://github.com/anycable/anycable)
- [EMx 020 Episode](https://devchat.tv/elixir-mix/emx-020-phoenix-and-liveview-with-chris-mccord/)
- [Entreprogrammers: Episode 248](https://entreprogrammers.com)
- [Socketry](https://github.com/socketry/)
- [The Rails Doctrine](https://rubyonrails.org/doctrine/)
- [Walmart: Invisible Glass](https://www.walmart.com/ip/Invisible-Glass-Reach-Clean-Tool-2pc-Kit/52621454)
- [Bose Wireless Headphones](https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B01E3SNO1G/ref=sr_1_4?ie=UTF8&qid=1543946752&sr=8-4&keywords=quietcomfort+35+bose)
- [Netflix: Newsies / Broadway musical](https://www.netflix.com/title/80182552)
- [KanbanFlow](https://kanbanflow.com)
- [Advent of Code](https://adventofcode.com)
- [Heroku Deployment](https://docs.anycable.io/#/heroku)
- [Guest’s Twitter](https://twitter.com/palkan_tula?lang=en)
- [Guest’s Dev.to](https://dev.to/palkan_tula)
- [Guest’s GitHub](https://github.com/palkan)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [CacheFly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com)

**Picks:**

Dave

- [Invisible Glass](https://www.walmart.com/ip/Invisible-Glass-Reach-Clean-Tool-2pc-Kit/52621454)

Eric

- [Bose Quiet Comfort Headphones](https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B01E3SNO1G/ref=sr_1_4?ie=UTF8&qid=1543946752&sr=8-4&keywords=quietcomfort+35+bose)
- 

Nate

- [The Rails Doctrine](https://rubyonrails.org/doctrine/)
- [Newsies](https://www.netflix.com/title/80182552)

Charles

- [Kanban Flow](https://kanbanflow.com/)
- [EntreProgrammers](https://entreprogrammers.com)
- The pomodoro technique
- masterhunt.com/devchat

Vlad

- [Advent of Code](https://adventofcode.com/)
- [Any Cable](https://docs.anycable.io/%23/heroku)


### Transcript


