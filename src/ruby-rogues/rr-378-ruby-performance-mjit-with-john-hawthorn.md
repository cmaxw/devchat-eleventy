---
layout: layouts/post.njk
title: >
  RR 378: Ruby performance: MJIT with John Hawthorn
date: 2018-09-04 10:00:16
episode_number: 378
duration: 44:17
audio_url: https://media.devchat.tv/ruby-rogues/RR_378_Ruby_performance_MJIT_with_John_Hawthorn.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

**Panel:**

- Charles Max Wood
- David Richards
- Dave Kimura
- Eric Berry

**Special Guests:** John Hawthorn

In this episode of Ruby Rogues, the panel talks to John Hawthorn about MJIT. John has been a [Ruby](https://www.ruby-lang.org/en/) programmer for about 9 years and is based in Victoria, B.C. They talk about what MJIT is, the effects you can see from using the MJIT compiler, and why the JIT doesn’t always work with other languages. They also touch on how you can use the JIT in your own code, how he makes his performance better, and more!

**Show Topics:**

1:36 – John is a Ruby programmer, and has been one for the past 9 years, and he is based out of Victoria, B.C.

5:00 – He had always been curious how a JIT would work and found that it was always too difficult to work with. Since discovering [MJIT](https://github.com/k0kubun/yarv-mjit), he has been able to work with these compilers because he understands how to work with C code.

7:36 – [Ruby](https://www.ruby-lang.org/en/) has a bytecode and it looks a lot like an assembly language, which is approachable to a Rubyist.

8:24 – The core of MJIT is an ERB template which take this bytecode, loops over it, and emits C code.

9:01 – Effects that you can seem from the JIT in your own code is that it uses a really tight math loop, making your code faster.

11:25 – Other languages aren’t suited for compilers like JIT because they are so flexible to begin with. And in some cases, it doesn’t make sense to JIT compile.

13:05 – The compiled code now is not reusable by other workers and works better with one compilation per process.

15:20 – The temp folder gets cleared immediately after its run, but this compiled code is probably going to stay in memory forever.

17:30 – The MJIT doesn’t work as well with [Rails](https://rubyonrails.org/) because the code can’t get warmed up enough. Some things aren’t friendly to a JIT.

20:24 – If someone wants to play with the JIT, as long as you have any Ruby version manager, install any of the previewed releases of 2.6 and then run with --jit.

21:44 – Online, you can look into following people who have written various Ruby libraries to look at performance. You can look at people like [Sam Saffron](https://samsaffron.com/) and [Julia Evans](https://jvns.ca/).

23:57 –[TruffleRuby](https://github.com/oracle/truffleruby) is a new front-end on top of a mature virtual machine whereas MJIT is a brand new virtual machine on top of a Ruby front-end.

27:57 – The MJIT had no effect on his work, it was just really fun and interesting to look into.

28:29 – To make his performance better, he allocates fewer objects, does less loops, and writes better queries.

29:02 – You want to run a profiler that will give you a better idea of where to look for performance issues, but you really need a proper benchmark to say what is wrong with your performance. A great benchmark you can use is [benchmark-ips](https://github.com/evanphx/benchmark-ips).

31:59 – The “gotcha” of doing this kind of work is verifying that you’ve actually improved it.

33:41 – Before we have the JIT in production, we are going to be using these techniques to find out if the JIT is helping us.

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [MJIT](https://github.com/k0kubun/yarv-mjit)
- [_Playing with ruby's new JIT: MJIT_ by John Hawthorn](https://www.johnhawthorn.com/2018/02/playing-with-ruby-jit-mjit/)
- [Rails](https://rubyonrails.org/)
- [Bootsnap](https://github.com/Shopify/bootsnap)
- [Sam Saffron](https://samsaffron.com/)
- [Julia Evans](https://jvns.ca/)
- [TruffleRuby](https://github.com/oracle/truffleruby)
- [benchmark-ips](https://github.com/evanphx/benchmark-ips)
- [@jhawthorn](https://twitter.com/jhawthorn?lang=en)
- [johnhawthorn.com](https://www.johnhawthorn.com/)
- [John’s GitHub](https://github.com/jhawthorn)
-

**Sponsors**

- [Sentry](https://sentry.io/welcome/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Charles

- [_Iron Druid Chronicles_ by Kevin Hearne](https://www.amazon.com/s/ref=as_li_ss_tl?field-keywords=iron%2520druid%2520chronicles&ascsub&ref=aa_scomp_aapi1&linkCode=sl2&tag=devchattv-20&linkId=e49d3e20a9fc3e71c28ac28516e5bd42&language=en_US)
- [Zoom](https://zoom.us/)
- [Notion](https://www.notion.so/)
- Eric Begay

Dave

- [Sony WH-1000XM2](https://www.sony.com/electronics/headband-headphones/wh-1000xm2)
- [Ryobi Bench Sander](https://www.homedepot.com/p/Ryobi-120-Volt-Bench-Sander-BD4601G/205509608)

David

- [Stephen Fry in America](https://www.imdb.com/title/tt1307789/)

Eric

- [Remote for Slides](https://slides.limhenry.xyz/)
- [Zoom](https://zoom.us/)

John

- [Julia Evans Blog Posts](https://jvns.ca/categories/ruby-profiler/)
- [Celeste](http://www.celestegame.com/)

### Transcript
