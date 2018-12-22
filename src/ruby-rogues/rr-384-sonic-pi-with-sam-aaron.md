---
layout: layouts/post.njk
title: >
      RR 384: “Sonic Pi” with Sam Aaron
date: 2018-10-16 10:00:41
episode_number: 384
duration: 53:25
audio_url: https://media.devchat.tv/ruby-rogues/RR_384_Sam_Aaron_Sonic_Pi.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- [Dave Kimura](https://www.linkedin.com/in/kobaltz)
- Eric Berry
**Special Guest:** Sam Aaron

In this episode of Ruby Rogues, the panel talks with Sam Aaron who is the creator of [Sonic Pi](https://github.com/samaaron/sonic-pi/graphs/contributors), which is the main topic that he and the panel talk about today. Sam is a computer scientist who has his Ph.D., and uses the Ruby language. He is also a programmer, educator, live coding musician, and father.

**Show Topics:**

1:25 – Panelist: Tell us what you are doing?

1:27 – Sam: Good question. I do a lot of different things and I try to challenge programming and take it a new

How can I be the most expressive person with code? I have written things to write music with code.

2:00 – Code is just a medium like dancing and writing. You can write to write code but as to write poetry.

2:33 – Tell us about Sonic Pi – the project you have developed to generate music from code.

2:42 – Sam: It’s a very simple program. It’s an app that you can run on Mac or Windows and others. It was written as a response to the UK opening a new system. How can we get children engaged? And this was my answer to that question.

3:37 – Was this developed by a team?

3:41 – Sam: Most of it was developed by myself – no real team – but a lot of it was through open source.

4:01 – What was the motivation? Why music; why not a drawing library like something visual?

4:19 – Sam: Many years ago I had a tragedy in the family. I was struggling mentally with it. One thing that helped me was I picked up a book on a specific language.

When I see these visual systems...it can be very daunting and difficult. To me when I use programming tools I thought naturally music.

6:14 – Can you talk about the architecture of [Sonic Pi](https://github.com/samaaron/sonic-pi/graphs/contributors)?

6:50 – Guest: [Sonic Pi](https://github.com/samaaron/sonic-pi/graphs/contributors) came purely from response and had a small amount of money to spend – teaching kids how to code. I wanted to get this overtone.

I used to be a Ruby programmer. The original core was taken from these overtones. And the way it works is that you have a simple server, Ruby server, and...

Three separate processes all talking over the network.

9:08 – I want to give the listeners an idea of what this sounds like – it’s pretty amazing.

Here is a sound that is 4 lines of code in Ruby. Can you tell us what is going in to make that sound work?

9:37 – Sam: The bottom layer is...the different waveforms for that sound clip. There is a mathematician who figured out...

_Sam talks about how sound works and how Sonic Pi works._

12:24 – Sam: The way to record a sound and the way to...

12:35 – Acid Walk – let’s take a listen.

12:50 – That is purely very intricate – that was about 60-80 lines.

13:00 –Sam: The bass line was...and the ticking sound was how long to wait again. It sounds complicated but take notes from a scale (different color palettes of notes) – notes you pick from. It will create the melody randomly for you. Adding some distortions and reverbs, etc.

14:03 – I am not musically inclined. So when I think of Raspberry Pi – why did you choose Ruby and not Python for developing the Sonic Pi engine?

14:27 – Sam: Your statement – “You are not musically inclined,” bothers me. We can all wave our arms around and dance. Having that mind thought is a barrier to your well-being. There was an interview with a lady over 100 years old. Any regrets? When I was 80 – I could have been playing for 20 years!

15:43 – Sam: My contract was about to expire and then was the same year that Raspberry Pi released and had staggering success. They didn’t necessarily have...

Every week I went into the classroom with a different version.

Actually there are different pros and cons in an educational context.

19:00 – Looking at the Sonic Pi in [Ruby](https://www.ruby-lang.org/en/) but also some [Erlang](https://www.erlang.org) in there?

19:15 – Sam: I talked earlier about the three components.

_Sam talks in-detail about Ruby and why he also used some_ [_Erlang_](https://www.erlang.org)_.&nbsp;_

22:30 – Sam: [Erlang](https://www.erlang.org) has a beautiful design and there is no garbage collector. It was the right architecture. I thought – how am I going to sit down and learn Erlang? Well you just make friends. Another program we used that takes these messages and...

23:40 – Have you had any requests to make this an ONLINE application?

23:50 – Sam: I have been thinking about this for some time. The web audio isn’t super solid. You would have to have a really decent invitation in web audio that is rock solid. The music applications still don’t use the web because it isn’t there quite, yet.

25:35 – Advertisement – [Get A Coder Job](https://devchat.tv/get-a-coder-job/)

26:16 – Can you talk about the inspiration to the DSL that you are using on Sonic Pi? Why create your own DSL?

26:31 – Sam: Sure! Your syntax is a data structure, which...

28:28 – You have been using this since 2013?

28:41 – Sam: Yes I do the majority of the work. It is an open source project and a core team of developers who are the core contributors. People own their work that they have done. It’s a powerful team. There are visual contributions among many different ways. I have done the crappy jobs.

29:51 – You have put so much time into this? Are you getting paid for this?

30:05 – Sam: I am extremely fortunate to be getting paid for this. It’s being funded by various sources. These people allowed me the freedom to create Sonic Pi the way that I wanted to build it. The Pi Top they provided some funding, among other donors and such. I have a patron page that is growing. I am doing more keynotes and conferences. This was designed to help students learn how to code. I do look for contributors. The language is there but we need the tools.

32:46 – I run a company called CodeFund to bring money to open source. There are different ways that people can generate funds for projects. There are organizations that are helping us to make our projects sustainable.

33:22 – Sam comments.

Sam: I am trying to find ways to be sustainable, so I can be comfortable.

33:53 – Where can people go to donate?

34:02 – Go to SonicPi.net. Don’t donate if you don’t like it. If it makes you smile then please donate. You can join and donate.

34:43 – Sam: When you have funding it can be removed in one sweep.

35:19 – You have an [active community](https://in-thread.sonic-pi.net)?

35:20 – Yes! Programming music communities are great. Yes, we have musicians in there and coders in there.

36:33 – People can post their music – they aren’t posting music they are posting code.

36:47 – Sam: Yes! If you can represent your music in some weird syntax, that can be stored somewhere like dots and lines (like Western music notation) then that’s great.

It’s not just what the trumpet and the violin should play but what studio effects we should add. Even if you are using multiple threads those tings are always resolved. I can take my new code and hear the exact same things that I’ve heard. When you go to see performances and see live coding performance.

39:50 – Panelist comments.

What does the future look like for Sonic Pi?

40:02 – Sam: It’s a business problem more than a technical problem. I am working on accessibility. I am making sure that this and that works well, and navigation to work with. Also, collaboration, too; the ability to share and contribute their compositions in one place. Can we get children from Africa to write pieces with children from Finland?

41:57 – Anything else that we should know about Sonic Pi?

42:08 – Sam: It really depends. What’s important to realize that this whole coding /music thing is a really new thing. When you see a guitar it’s had thousands of years to evolve. What we have right now is really exciting. We should see this as new musical instruments. Its’ really tough to hear people say, “code cannot make music.” Also, not to have any pre-conceived ideas, and to share their work with others. We aren’t professional musicians and just to explore, experiment, and play. People might be too reluctant to share because they are comparing it to music that they adore.

44:56 – Panelist: [This whole song is 206 lines of code of the Mario Theme Song.](https://gist.github.com/xavriley/87ef7548039d1ee301bb)

46:12 – Intro and outro for podcasts.

46:37 – How can we find these?

46:42 – Sam: I tweet these. A few years ago I got into Rolling Stone magazine. Download an opera and download a rock song.

48:49 – [Advertisement – Fresh Books!](https://www.freshbooks.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Erlang](https://www.erlang.org)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby Motion](http://www.rubymotion.com)
- [Ruby on Rails](https://rubyonrails.org)
- [Sonic Pi](https://sonic-pi.net)
- [Sonic Pi – GitHub](https://github.com/samaaron/sonic-pi/graphs/contributors)
- [In Thread Sonic Pi](https://in-thread.sonic-pi.net)
- [Xavriley – ReadME.md](https://gist.github.com/xavriley/87ef7548039d1ee301bb)
- [Undercover](https://github.com/grodowski/undercover)
- [SimpleCov](https://github.com/colszowka/simplecov)
- [ClarionHub](https://clarionhub.com)
- [Atomic Object – Sam Aaron](https://spin.atomicobject.com/2018/06/09/sonic-pi-introduction/)
- [Sam Aaron’s Twitter](https://twitter.com/samaaron)
- [Sam Aaron’s Instagram](https://www.instagram.com/samaaron/)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)

**Picks:**

Eric

- [Sonic Pi](https://sonic-pi.net)
- [Clarion Hub](https://clarionhub.com/)
- [Artiphon](https://artiphon.com/shop/)

Dave

- [Simple Cov](https://github.com/colszowka/simplecov)
- [Under Cover](https://github.com/grodowski/undercover)

Sam

- [Emacs Program Editor](https://www.gnu.org/software/emacs/)


### Transcript


