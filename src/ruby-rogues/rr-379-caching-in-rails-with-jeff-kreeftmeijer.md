---
layout: layouts/post.njk
title: >
  RR 379: "Caching in Rails" with Jeff Kreeftmeijer
date: 2018-09-11 10:00:24
episode_number: 379
duration: 53:49
audio_url: https://media.devchat.tv/ruby-rogues/RR_379_Caching_in_Rails_with_Jeff_Kreeftmeijer.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

**Panel:**

- Charles Max Wood
- Dave Kimura
- Eric Berry

**Special Guests:** [Jeff Kreeftmeijer](https://jeffkreeftmeijer.com)

In this episode of Ruby Rogues, the panel talks to [Jeff Kreeftmeijer](https://jeffkreeftmeijer.com) who is a Ruby and Elixir developer at [AppSignal](https://appsignal.com). Jeff writes for the [AppSignal's](https://appsignal.com) newsletter and has a blog. Check out today’s episode where the panel talks about AppSignal, Russian doll caching, Drifting Ruby, JavaScript Sprinkles, cache warming, N+1 plus other topics.

**Show Topics:**

2:47 – Code Fund & [New Relic.](https://newrelic.com/?utm_campaign=googlebrand+JM+ABM+Q1FY19+acq+NORAM&utm_source=Google&utm_medium=PS&gclid=EAIaIQobChMIpbDg_MSz3QIVAhtpCh2qpgebEAAYASAAEgJnivD_BwE)

3:40 – [AppSignal](https://appsignal.com) might be the only support for [Elixir](https://elixir-lang.org).

4:12 – The integration, the ease was so simple and your (Jeff) documentation made it very easy.

4:46 – Comparatively to New Relic, [AppSignal](https://appsignal.com) is cheaper, isn’t it?

4:59 – We don’t charge for host, we charge per request. That’s where to difference in price comes from. You get a number of requests in your plan. [AppSignal](https://appsignal.com) – you pay for what you use.

5:50 – Chuck has used New Relic in the past, but only pay for the month that he needs.

6:07 – Panelist talks with Josh Adams and relays the conversation to the panel and the guest.

6:48 – Eric to Dave: Do you run into this with [Drifting Ruby](https://www.driftingruby.com)? Where people just pay for what they need and cancel afterwards.

7:41 – Dave: Yes, I do come across this. There isn’t much you can do about it. People will do what they need to do.

8:24 – Jeff: We don’t have a lot of this problem with [AppSignal](https://appsignal.com). By the way, I have never done that before – you are all horrible! ☺

9:02 – Chuck: Let’s dive into is what is your approach to performance on Rails?

9:24 – We started the vlog series to help them with that. Sometimes you run into limits of what Ruby can do, and stuff like caching can help. It’s never really a single issue. That’s one of our challenges as a company to hook into everything (integration). We do support, per communication, to help with tech issues, but usually it’s set-up related. Everybody’s problems are different because everyone’s set-up is different.

11:02 – Chuck: Most of these posts are about caching and other topics. I’m going to go to something that I misunderstood for a while and that is [Russian doll caching.](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html) I didn’t quite make the connection in my head.

11:40 – First, let’s talk about fragment caching.

13:49 – Jeff explains [Russian doll caching.](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html)

18:44 – Chuck makes comments and asks Jeff a question.

19:43 – Jeff confirms the panelist’s answer.

22:00 – Jeff: Another solution is [JavaScript Sprinkles.](https://github.com/avand/sprinkles)

22:27 – Digital Ocean’s Advertisement.

23:12 – Question from Chuck to Jeff.

23:38 – Chuck talks about what he will discuss at the Summit conference in October.

23:55 – Panelist has had experience with [Russian doll caching](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html). Performance can be smoke in mirrors. Application he worked on before, we did tons of caching (query caching, [Russian doll caching](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html), and others) it was all about handling the cache key.

25:32 – More comments about caching from another panelist. [Cache warming](https://www.section.io/blog/what-is-cache-warming/) is mentioned, too.

26:46 – How do you utilize [cache warming](https://www.section.io/blog/what-is-cache-warming/)?

27:39 – Chuck asks a question.

27:44 – Question answered.

28:12 – Does something like this exist for [Phoenix](https://www.phoenixsoftware.com/ode.htm)?

28:28 – Jeff: I don’t think there is something like that for [Phoenix](https://www.phoenixsoftware.com/ode.htm).

28:50 – Chuck: When do you want to use one caching over another caching?

29:09 – Jeff: “Depends on a couple of things. [N+1](https://blog.appsignal.com/2018/04/24/active-record-performance-the-n+1-queries-antipattern.html) is a feature and that you “should” rely on [Russian doll caching](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html), and generally that is not an accepted thing. You could do that, but that is applied to a specific thing. What do you guys think?”

30:31 – Panelist: Rendering partials is an expensive endeavor.

31:38 – This topic continues between panelists and Jeff.

32:25 – Jeff: Fragment caching is a good fit for that.

32:56 – Question: You have a blog, one of your posts that you talk about you discuss open source projects maintainable. Talk to me how that led you to write it?

33:32 – Jeff: Three things you should not do, based on mistakes that I made in the past.

1.) [Navvy](https://github.com/jeffkreeftmeijer/navvy) – had adapters for everything.

2.) Dropping support for older visions of your dependencies.

3.) Hand over projects if you can’t help anymore.

This whole article is based on me messing up.

35:07 – Chuck makes some comments.

35:27 – Panelist: Ran into a problem the other day, there is a dependency that hasn’t been updated in over a year. They are waiting to solve all issues. I submitted an issue to be resolved.

37:02 – [N+1 Queries](https://blog.appsignal.com/2018/04/24/active-record-performance-the-n+1-queries-antipattern.html) – is it a bug or a feature?

37:12 – If you do nothing with it then it is a bug.

37:21 – Chuck: to me a bug is an issue. It’s not a bug it’s inefficiency unless you turn it into something else.

37:42 – Jeff: [N+1](https://blog.appsignal.com/2018/04/24/active-record-performance-the-n+1-queries-antipattern.html) is an undesirable feature? It’s not necessarily a bug. You need a very reliable caching layer.

38:25 – Chuck: What is a very reliable caching layer?

38:38 – Jeff answers the question.

40:50 – [Redis](https://redis.io) is mentioned.

42:04 – Jeff (guest) comments on the panelists’ thoughts.

42:37 – Picks?

42:57 – [Advertisement: Chuck’s E-Book Course](https://devchat.tv/get-a-coder-job/)

43:34 – Picks

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [JavaScript](https://www.javascript.com)
- [Phoenix](https://www.phoenixsoftware.com/ode.htm)
- [AppSignal](https://appsignal.com)
- [Russian doll caching](https://blog.appsignal.com/2018/04/03/russian-doll-caching-in-rails.html)
- [JavaScript Sprinkles.](https://github.com/avand/sprinkles)
- [Cache Warming](https://www.section.io/blog/what-is-cache-warming/)
- [N+1 Query](https://blog.appsignal.com/2018/04/24/active-record-performance-the-n+1-queries-antipattern.html)
- [Redis](https://redis.io)
- [Fragment Caching in Rails](https://blog.appsignal.com/2018/03/20/fragment-caching-in-rails.html)
- [Fuubar](https://github.com/thekompanee/fuubar)
- [Navvy](https://github.com/jeffkreeftmeijer/navvy)
- [AsciiDoc Home Page](https://asciidoc.org)
- [AsciiDoctor](https://asciidoctor.org)
- [Elixir Mix – Meet Me.So](https://meetme.so/ElixirMix)
- [New Relic](https://newrelic.com/?utm_campaign=googlebrand+JM+ABM+Q1FY19+acq+NORAM&utm_source=Google&utm_medium=PS&gclid=EAIaIQobChMIpbDg_MSz3QIVAhtpCh2qpgebEAAYASAAEgJnivD_BwE)
- [Elixir](https://elixir-lang.org)
- [Jeff Kreeftmeijer’s Website](https://jeffkreeftmeijer.com)
- [Jeff Kreeftmeijer’s Twitter](https://twitter.com/jkreeftmeijer?lang=en)
- [Jeff Kreeftmeijer’s GitHub](https://github.com/jeffkreeftmeijer)
- [Jeff Kreeftmeijer’s AppSignal Blog](https://blog.appsignal.com/2018/07/17/javascript-sprinkled-rails-applications.html)
- [Jeff Kreeftmeijer’s article, “Keeping open source...”](https://jeffkreeftmeijer.com/open-source-maintainability/)
- [Rails](https://rubyonrails.org/)
- [Bootsnap](https://github.com/Shopify/bootsnap)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Charles

- [Notion.so](https://www.notion.so)
- [Traveller’s Gift by Andy Andrews](https://www.amazon.com/Travelers-Gift-Andy-Andrews/dp/0785273220/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1534870907&sr=1-3&keywords=the+travelers+gift&dpID=51S%252BHG%252BhcAL&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=srch&linkCode=sl1&tag=devchattv-20&linkId=33c1507cffc90ca4a176b9239e31e440&language=en_US)
- [The Shack by William Paul Young](https://www.amazon.com/Shack-William-P-Young/dp/1444701959/ref=as_li_ss_tl?ie=UTF8&qid=1534870854&sr=8-8&keywords=the+shack&linkCode=sl1&tag=devchattv-20&linkId=1048694a072f7e0de616f0a17f5d16fc&language=en_US)

Dave

- [Drift Ruby Episode – Renderer](https://www.driftingruby.com/episodes/actioncontroller-renderer)
- [Tool – Scroll Saw](https://www.homedepot.com/p/Ryobi-1-2-Amp-16-in-Corded-Scroll-Saw-SC165VS/205419917)

Eric

- [Skitch](https://evernote.com/products/skitch) – screen capture tool – free product
- [Library by MERT / eggplanetio by Brian Gonzalez](https://github.com/eggplanetio/mert)

Jeff

- [AsciiDoctor](https://asciidoctor.org)
- [AsciiDoc Home Page](https://asciidoc.org)
- [Performance in Rails – Interview](https://www.youtube.com/watch?v=ktZLpjCanvg)

### Transcript
