---
layout: layouts/post.njk
title: >
      017 iPhreaks Show – Performance Tuning with Brandon Alexander
date: 2013-08-22 11:00:00
episode_number: 017
duration: 
audio_url: https://media.devchat.tv/iphreaks/iPhreaks017PerformanceTuning.mp3
podcast: iphreaks
tags: 
  - iphreaks
  - podcast
---

Panel Brandon Alexander (twitter github blog) Pete Hodgson (twitter github blog) Jaim Zuber (twitter Sharp Five Software) Andrew Madsen (twitter github blog) Rod Schmidt (twitter github infiniteNIL) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:19 - Brandon Alexander Introduction Black Pixel Pro iOS 5 Tools: Xcode, Instruments and Build Tools by Brandon Alexander 02:00 - Performance Tooling & User Experience 04:30 - Reproducibility with Experiments 07:50 - Measuring Frame Rate 09:31 - CPU vs GPU 12:56 - Tools Frames Per Second Time Profiler 16:24 - OpenGL ES 17:35 - Performance Tuning for Memory-Bound Applications 19:26 - Memory Allocation 28:16 - Network Requests “ns run loop modes” NSURLConnection 36:14 - Visual Changes in iOS 7 and Performance Tuning 39:05 - Mocking and Stubbing 41:15 - Battery Life 45:24 - Profiling CPU-Bound Stuff Picks mmap (Jaim) appledoc (Andrew) CocoaDocs (Andrew) Cocoanetics (Andrew) Wil Shipley: Pimp My Code, Part 15: The Greatest Bug of All (Andrew) WWDC Videos (Pete) Having a "device lab": picking your supported devices, and test on them (Pete) Instapaper (Pete) Network Link Conditioner (Pete) FormatterKit (Rod) The Mathematical Hacker (Rod) Pivotal Tracker (Chuck) Redmine (Chuck) Xcode (Brandon) Dash (Brandon) Kaleidoscope (Brandon) LLDB Python Reference (Brandon) Next Week Software Craftsmanship with Ken Auer Transcript [This show is sponsored by The Pragmatic Studio. The Pragmatic Studio has been teaching iOS development since November of 2008. They have a 4-day hands-on course where you'll learn all the tools, APIs, and techniques to build iOS Apps with confidence and understand how all the pieces fit together. They have two courses coming up: the first one is in July, from the 22nd - 25th, in Western Virginia, and you can get early registration up through June 21st; you can also sign up for their August course, and that's August 26th - 29th in Denver, Colorado, and you can get early registration through July 26th. If you want a private course for teams of 5 developers or more, you can also sign up on their website at pragmaticstudio.com.] CHUCK: Hey everybody and welcome to Episode 17 of The iPhreaks Show! This week on our panel, we have Pete Hodgson. PETE: Hello, hello from San Francisco! CHUCK: Jaim Zuber. JAIM: Hello from Minneapolis! CHUCK: Andrew Madsen. ANDREW: Hi from Salt Lake City! CHUCK: Rod Schimdt. ROD: Hello, hello from Salt Lake! CHUCK: I’m Charles Max Wood from DevChat.tv. This week we have a special guest, and that is Brandon Alexander. BRANDON: Hello! I’m coming from Atlanta, Georgia. CHUCK: Since you haven’t been on the show before, do you want to give us a brief introduction, let us know who you are? BRANDON: I’m currently a iOS and hopefully Mac developer for Black Pixel. I do a lot of the client development work and test as much as I can a lot of our products. I’m also an author, a conference speaker, and I’ve also done a training video to appear soon. CHUCK: Nice! Sounds like fun! What book did you write? I’m curious… BRANDON: The book I wrote is called “Pro iOS 5 Tools”. It’s a couple of versions of iOS old, but the techniques in the book are still completely valid today. CHUCK: Very nice. Alright, we’ll tell people to go check it out. We brought you on the show to talk about “Performance Tuning” for your iOS app. I think it’s interesting; we’re talking about a resource-constrained environment. Is it about the user’s experience? Or, are there other concerns as well that we’re trying to optimize for? BRANDON: Ultimately, it’s about the user experience. If you try to implement something and the user doesn’t have a good experience with it, or it does something over the phone like battery life, you might want to rethink that feature or rethink the assumptions of your application.



### Transcript

01:19 - Brandon Alexander Introduction

- [twitter](https://twitter.com/balexander)
- [github](https://github.com/whilethis)
- [blog](http://www.whilethis.com/)
- [Black Pixel](http://blackpixel.com/)
- [Pro iOS 5 Tools: Xcode, Instruments and Build Tools by Brandon Alexander](http://www.amazon.com/gp/product/1430236086/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1430236086&linkCode=as2&tag=chamaxwoo-20)

02:00 - Performance Tooling & User Experience

04:30 - Reproducibility with Experiments

07:50 - Measuring Frame Rate

09:31 - CPU vs GPU

12:56 - Tools

- Frames Per Second
- Time Profiler

16:24 - [OpenGL ES](http://www.khronos.org/opengles/)

17:35 - Performance Tuning for Memory-Bound Applications

19:26 - Memory Allocation

28:16 - Network Requests

- [“ns run loop modes”](http://www.google.com/#bav=on.2,or.r_cp.r_qf.&fp=864939a8a6565982&q=ns+run+loop+modes)
- [NSURLConnection](http://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSURLConnection_Class/Reference/Reference.html)

36:14 - Visual Changes in iOS 7 and Performance Tuning

39:05 - Mocking and Stubbing

41:15 - Battery Life

45:24 - Profiling CPU-Bound Stuff

### Next Week
Software Craftsmanship with Ken Auer
