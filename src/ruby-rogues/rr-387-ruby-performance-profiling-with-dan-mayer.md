---
layout: layouts/post.njk
title: >
      RR 387: Ruby Performance Profiling with Dan Mayer
date: 2018-11-06 11:00:05
episode_number: 387
duration: 48:37
audio_url: https://media.devchat.tv/ruby-rogues/RR_387_Ruby_Performance_Profiling_with_Dan_Mayer.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Dave Kimura
- Charles Max Wood
- David Richards

**Special Guest:** [Dan Mayer](https://www.mayerdan.com)

In this episode of Ruby Rogues, the panel talks with [Dan Mayer](https://twitter.com/danmayer?lang=en) who believes that small distributed software teams can make a large impact. Dan loves Ruby, distributed systems, OSS, and making development easier. The panel and Dan talk about performance and benchmarking. Check out today’s episode to learn more!

**Show Topics:**

0:00 – [Sentry.IO – Advertisement!](https://sentry.io/welcome/)

1:07 – Chuck: Our panel is Dave, David, myself, and our guest is [Dan Mayer](https://twitter.com/danmayer?lang=en). Say “Hi”!

1:24 – Chuck: Give a brief introduction, please.

1:32 – _Dan gives his background and what he currently is working on._

1:53 – Chuck: We wanted to talk to you about benchmarking and performance. Tell us how you got into this?

2:28 – Dan: It has been an interesting timeline for me. About seven years I worked for a large site that had a legacy Rails app. It got a lot of dusty corners over the years and we removed dead code, and removed bugs and confusion for the consumer. We were finding ways to tweak it and not impacting your users. I was using Trace Point but the overhead was quite significant. I moved away from that project but found that I found a need for it, again, a few years later. I actually tried to modify...and basically Eric said “prove that it is slow.” It really wasn’t the type of bottleneck that I was seeing. Since then I am rewriting it. I removed one bottleneck and now...

5:00 – Chuck: ...if that number gets smaller then Ruby is doing well. Is it really that simple? How do you benchmark?

5:15 – _Dan answers the question._

6:40 – Panel: How do you benchmark things front to back?

6:49 – Dan: I look at benchmarking in different layers. You can see the overall impact in the broad range. If you want to see specific things then that’s a little trickier. For Ruby 3x3 he has been working on a Rails Benchmark, and that’s Noah. He has a sample Rails app and...

8:09 – Chuck: He is using discourse, and we talked to him on a past episode.

8:20 – Dan: My original plan was to insert my gem within that project. However, I ran into a few issues and Noah and I are working on that because of the issues.

8:57 – Panel: How does the coverband gem – how does it provide security so you don’t leak out information to in-users?

9:12 – _Dan answers the question._

9:54 – Panel: Then you can build whatever views you want to trace back that sort of information?

10:02 – _Dan answers the question._

10:30 – Chuck: Is it running benchmarks against every method you have in your app or what?

10:40 – _Dan answers question._

11:27 – Panel: I like when I can remove all of the code I feel safe.

1:37 – Dan: The gem was driven by the fact that I love to delete code. These old files have been sitting around – they aren’t valid – let’s get rid of them.

12:04 – Chuck: This is off topic from benchmarking, but...

12:43 – Dan: ...to get that feature at run time it can hurt your performance.&nbsp;

15:20 – Panel: Is there added memory usage?

15:27 – Dan: I rewrote the library around coverage and I put it out. It worked well for my company and myself. But people were saying that they got a huge performance hit. I went from needing to sample to capture...the new bottleneck was collecting the data all of the code usage of your gems and...it went from just recording your custom code to all Ruby code. Where it was slowing down was reporting that.

I didn’t have any benchmarks to capture that. What I was failing to do was...

I can talk about what I did do to help people if you want?

17:41 – Chuck: Looking at how much storage is my app using or how much...How can you even begin to isolate it?

18:11 – Dan: On all the different types of benchmarking – I know there is a benchmarking memory increase. I haven’t benchmarked that, yet. To get at these different levels, how do we ensure that’s fast? It was a new challenge to me.

19:45 – Panel: It sounds like this has become a practice over the years. Is that how you handle it or how do you like to use it?

20:07 – Dan: When I started using this benchmarking is because I wanted to solve something. There were several regressions. We’d go back and address it. What I tried doing is put all the benchmarks into the gem.

I think back by the Ruby 3x3 goals...

21:49 – Panel: What comes to mind is appreciating well-crafted software that really does well – maybe measure what customer output is?

22:43 – Dan: What people care about is their application. You can look to see...

23:33 – Panel: Automating takes that pressure right off of me and I can do

23:47 – Chuck: Recording all the things you want to do. We are talking about this right now you can record some of it in these tests or...

24:06 – Dan: I have fixed these performance things in the past. I have more confidence that these things get fixed before they get released. Having that methodology helps a lot.

24:43 – [Advertisement – RubyMine](https://www.jetbrains.com/ruby/)

25:10 – Panel: I think it’s good to see WHERE your application is getting used the most. To see where you have the MOST code usage.

26:20 – Dan: That’s a good story on back on regressions on benchmarking or performances.

27:46 – Dan: One thing that I think is interesting – I believe the Rails performance testing has gone blank essentially. There are good articles but in the Rails 5 the guides no longer have any information. There is so much talk about performance and benchmarking but things have gotten lost, too.

28:28 – Panel: It’s interesting how we get into x, y, and z. We tend to figure it out and some guys focus on the next thing and the next.

29:24 – Dan: The fads of the things that go in-and-out. It’s definitely coming back: the performance in the Ruby world. My theory is that the tools have gotten that much better and people are doing less. They have offloaded a lot of things for people. It shows, though, it doesn’t do everything.

30:19 – Panel: I think that’s valuable, too.

The WHOLE package – this is how we deliver, and these are the tools and the toolkits. I miss Ruby every time that I have to step away b/c I have to use something else.

31:17 – Dan: It sounds COOL to use Elixir and whatnot, but I just can’t get into it as much as when I use Ruby. When I try to branch out to use another language it isn’t the same.

31:47 – Panel: When the pressure is high I use Ruby so that’s where my heart is.

31:58 – Dan: It falls a little short, sometimes, it’s an easy thing that people say: it’s so slow. It’s one of those that we’d like to have a better answer. Is it something that people have thought of as a continual thing or...?

32:47 – Chuck: It’s generally to resolve an issue here or there.

32:57 – Panel.

33:07 – Chuck: When I do use the benchmarks I have added in my test suite a trip wire that validates that it’s under a certain point.

33:37 – Panel: If I did that my tests would never pass.

33:45 – Chuck.

33:49 – Dan: How can you do that reliably where you get the value but you don’t have a bunch of false failures? A person has to do it to see if it is faster/slower.

34:26 – Panel: For my applications – usually they are slow not b/c of Ruby but b/c of a poor architectural decision we have made.

Every situation you can go and weight it to see what is best. Ultimately they are the ones that are brining in money into your business.

35:27 – Chuck: When I add things into my test suites is b/c there was some major performance hiccup where it ruins the user’s flow.

35:55 – Dan: The way you benchmark it...

Benchmarking a gem or a library it’s how can it impact other people’s apps.

And the Ruby 3x3 is proving that it’s faster – what does that mean – and I think Noah has done some great work on.

36:30 – Dan: The last thing I want to mention is Julia’s work on that is what got me back into coverband. I was thinking I would use a different version of coverband that would use RBSPY.

37:37 – Chuck: Yeah, that was a great episode.

37:44 – Dan: I want to play with it some more. I guess I would have to know more in [Rust,](https://www.rust-lang.org/en-US/) though.

37:57 – Chuck: Anything that you are working on within this space?

38:04 – Dan: There have been 4-5 current people in coverband and we have added a bunch of new benchmarks and they are 60% faster. I am trying to work on getting a simpler version out there. Hopefully it will be live soon after getting rid of the bugs.

39:05 – Chuck: How can people find you?

39:10 – Dan: My blog, Twitter, and GitHub!

39:22 – Chuck: M-A-Y-E-R.

39:36 – Picks!

39:40 – [Advertisement – Fresh Books!](https://www.freshbooks.com)

End – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Rust](https://www.rust-lang.org/en-US/)
- [Ruby Motion](http://www.rubymotion.com)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [Benchmark-IPS](https://github.com/evanphx/benchmark-ips)
- [Rbspy](https://github.com/rbspy/rbspy)
- [Ruby Benchmarking](https://www.mayerdan.com/ruby/2018/03/25/ruby-benchmarking)
- [Benchmarking Bugs](https://www.mayerdan.com/ruby/2018/06/10/benchmarking_bugs)
- [Coverband](https://github.com/danmayer/coverband)
- [TracePoint](https://ruby-doc.org/core-2.0.0/TracePoint.html)
- [RR 362 Episode](https://devchat.tv/ruby-rogues/rr-362-measuring-ruby-performance-with-rails-and-discourse-with-noah-gibbs/)
- [Rails Guides](https://guides.rubyonrails.org/v3.2.13/performance_testing.html)
- [Atomic Habits](https://jamesclear.com/atomic-habits)
- [EasyRes](http://easyresapp.com)
- [Skinny Pop](https://www.skinnypop.com)
- [Blog through AppSignal](https://blog.appsignal.com/2018/09/28/active-record-vs-ecto.html)
- [Book: Extreme Ownership](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B0739PYQSS/ref=as_li_ss_tl?s=digital-text&ie=UTF8&qid=1539709987&sr=1-1&keywords=extreme+ownership&dpID=51LA5FKuExL&preST=_SY445_QL70_&dpSrc=srch&linkCode=sl1&tag=devchattv-20&linkId=d170287249014e59a063d6862b21b920&language=en_US)
- [Noah Gibbs’ Twitter](https://twitter.com/codefolio)
- [Dan Mayer’s Blog](https://www.mayerdan.com)
- [Dan Mayer’s Twitter](https://twitter.com/danmayer?lang=en)
- [Dan Mayer’s GitHub](https://github.com/danmayer)
- [Dan Mayer’s Medium](https://medium.com/@danmayer/highlights)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [RubyMine](https://www.jetbrains.com/ruby/)
- Cache Fly
- [Fresh Books](https://www.freshbooks.com)

**Picks:**

David

- [Atomic Habits by James Clear](https://www.amazon.com/Atomic-Habits-Proven-Build-Break-ebook/dp/B01N5AX61W)

Dave

- [EasyRes](http://easyresapp.com/)
- [Skinny Pop](https://www.skinnypop.com/)

Charles

- [Extreme Ownership](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2)
- [Jocko Willink podcast](http://jockopodcast.com/)
- [2 Keto Dudes](http://2ketodudes.com/)
- [Ketogenic Forums](https://www.ketogenicforums.com)

Dan

- [Artemis](https://www.amazon.com/Artemis-Novel-Andy-Weir-ebook/dp/B06Y55SB48)
- https://blog.appsignal.com/2018/09/28/active-record-vs-ecto.html
- https://github.com/evanphx/benchmark-ips
- https://github.com/rbspy/rbspy


### Transcript


