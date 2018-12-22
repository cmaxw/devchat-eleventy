---
layout: layouts/post.njk
title: >
      RR 386: Web Console Internals with Genadi Samokovarov
date: 2018-10-30 10:00:32
episode_number: 386
duration: 41:44
audio_url: https://media.devchat.tv/ruby-rogues/RR_386_Web_Console_Internals_with_Genadi_Samokovarov.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Dave Kimura
- Charles Max Wood
- David Richards

**Special Guest:** [Genadi Samokovarov](https://twitter.com/gsamokovarov?lang=en)

In this episode of Ruby Rogues, the panel talks with [Genadi Samokovarov](https://twitter.com/gsamokovarov?lang=en) who is a software developer and loves using Ruby. Genadi also likes dance music. You can check out his code at [GitHub](https://github.com/gsamokovarov) and his mixes on [SoundCloud.](https://soundcloud.com/gsamokovarov) Finally, he blogs about technology that he cares about. Check-out his post about a curious Proc.new case in Ruby. If you are interested in his work experience, check out his resume [here](http://gsamokovarov.com/resume/). Send Genadi an email or follow his [social links.](https://twitter.com/gsamokovarov)

**Show Topics:**

0:00 – [Sentry.IO – Advertisement!](https://sentry.io/welcome/)

1:30 – Chuck: Introduce yourself please.

1:39 – _The guest talks about his background and the company he works for._

2:03 – Chuck: Did you build the web console or something else?

2:05 – Guest.

3:20 – Chuck: How do you run Ruby on the web console?

3:40 – Guest answers Chuck’s question.

4:13 – Chuck: The other question is about security concerns – you don’t want to run in production?

4:25 – Guest: No, you don’t want to do that.&nbsp;

4:31 – Chuck: Use at home - don’t use it on your work server.

5:15 – Panel: It’s one of those features that people overlook on Rails. You have to proactively add in a pack to launch in a web console in that particular view. A lot of times people will either throw away rays (ERB) and they are able to get the same thing but you can interact with the page w/o full rendering of the application.

What I just mentioned what does a web console has a space for?

6:18 – Guest.

7:23 – Panel: What would happen – if I put a debugging code in my application and it got committed and shipped – what would happen?

7:46 – Guest answers.

8:24 – Chuck: When you deploy a production I don’t even know what this tag is?

8:33 – Guest.

9:10 – Chuck: Can I run it on [Sinatra](http://sinatrarb.com)...or the other ones?

9:20 – Guest: If you make a bit of effort...

9:42 – Chuck: How does it pass things to the backend?

9:52 – Guest.

11:22 – Chuck: Let’s say you set this up and you would include the gem in the Rails app – I guess it comes by default.

11:36 – Guest.

11:58 – Panel: And if you want to embed it in a view in Rails?

12:05 – Guest.

12:06 – Chuck: That’s nice.

12:08 – Guest.

12:43 – Panel: I would think that would be the most exciting things. I know the views and how it’s included there is a little bit of a black box for me. I don’t know quite what is going on and that’s after many years of use. Being able to open the web console and see what’s going on and see what I was thinking. Sometimes when I have hard times with my code it’s because I didn’t understand the Rails way and how they organize things. So for me to take a look it dawns on me.

13:33 – Guest.

13:41 – Panel: I learned Rails on a laptop. I went to terminal mode only and I learned it really, really well.

14:21 – Guest.

14:27 – Panel: Can web console do a separate JavaScript app and then you have a Ruby API backend – can you use console any plugin to integrate with that?

15:00 – Guest.

16:20 – Panel: That’s really cool, and good note. When people are developing a gem they keep one type of Ruby or whatever. They don’t take into account that Ruby or the MRI or whatever they are using it’s cool that you are proactive keeping into account the different interpreters and it works across the platform.

16:56 – Guest: It’s a tricky business.

18:39 – Panel: So is this under active development or...?

18:45 – Guest.

18:53 – Chuck: What was the hardest part to put this together?

19:00 – Guest: Getting it to work!

19:09 – Chuck: Nope...just getting it to work.

19:15 – Guest.

20:43 – Panel: That’s something where I have been in situations where it has given back the Rails spec trace. Not the actual application – I have no idea how to debug it. Then I dig in deeper and find it’s in my application part. It is important to have that.

21:13 – Guest.

21:51 – [Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

22:15 – Chuck: Anything else or should we talk about the conference for a minute?

22:30 – Guest.

24:09 – Panel: So you are getting these conferences going – is there a healthy/strong Ruby following in Bulgaria, generally?

24:25 – Guest: We do Meetups. It’s pretty active and a healthy community. It’s not as strong as the States, but it’s strong.

25:26 – Panel: Nice. I find that it’s interesting – I was around with Ruby in 2004, and people have been using Ruby for a while and Rails was new. It’s fun to build an organization around that and empower people to do great things. It’s great to do work that are learning Ruby.

26:08 – Guest.

26:25 – Panel: So that’s one of my coworkers and got him using VS code and show people the light to make the switch.

26:50 – Chuck: I’ve already switched.

27:01 – Panel: We like our tools.

27:17 – Guest: I guess my people like VS code b/c it’s easier to maintain.

27:35 – Panel: Maybe my mind is so feeble-minded.

27:45 – Chuck: I turned on the EMAX for along time and turned on my EMAX in my KS code. I get the nice extras. I don’t feel like there are 10 zillion things to worry about.

28:12 – Guest.

28:21 – Panel: I think the key is the expressiveness – get it the ways I want

28:38 – Chuck: I just want to think of the fact that I am using code – and that’s a good thing.

28:54 – Guest.

29:04 – Panel: How many attendees did you have?

29:08 – Guest.

29:22 – Chuck: The conferences that I like to attend that have an attendance of 150, I like b/c it’s intimate. The larger conferences I feel lost in the crowd. It’s just different for me.

30:17 – Panel: It makes it easy to break into groups if the conference is small.

30:30 – Panel: There are so many things that the experts can teach and show to the beginners. They could teach me something that I didn’t know. It’s powerful b/c you’re talking about projects and get to know each other.

31:39 – Guest.

32:16 – Panel: One thing I like is that the attendees make a Slack channel, and the speaker can address that during the talk. Sometimes they get answered, but just in case.

32:40 – Chuck: Anything you’re working on now?

32:43 – Guest.

32:52 – Panel: Nice.

33:00 – Guest.

33:37 – Chuck: How can people find out about these different conferences?

33:50 – Guest: We have a Twitter account.

33:04 – Chuck: Let’s go to picks!

34:12 – [Advertisement – Fresh Books!](https://www.freshbooks.com)

41:31 – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby Motion](http://www.rubymotion.com)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [Ruby Issue Tracking System](https://bugs.ruby-lang.org/users/7585)
- [Libraries.io](https://libraries.io/github/gsamokovarov)
- [Balkan Ruby](https://balkanruby.com)
- [Partial Conf](http://partialconf.com)
- [Chaos Group](https://www.chaosgroup.com)
- [Genadi Samokovarov’s Twitter](https://twitter.com/gsamokovarov?lang=en)
- [Genadi Samokovarov’s GitHub](https://github.com/gsamokovarov)
- [Genadi Samokovarov’s Website](http://gsamokovarov.com)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- Cache Fly

**Picks:**

David

- [Creative Quest by Quest Love](https://www.amazon.com/Creative-Quest-Questlove/dp/0062670557/ref=tmm_hrd_swatch_0?_encoding=UTF8&coliid=I3CCMFYKRBJ3EP&colid=VWHQF5V1539U&qid=&sr=)
- [The Rhythm in Everything](https://www.newyorker.com/magazine/2012/11/12/the-rhythm-in-everything)

Dave

- [Dewalt Clamps](https://www.homedepot.com/p/DEWALT-Clamp-Set-4-Piece-DWHT83196D/205418759)
- [Action Text](https://www.youtube.com/watch?v=HJZ9TnKrt7Q)

Charles

- [The Diabetes Code](https://www.amazon.com/Diabetes-Code-Prevent-Reverse-Naturally-ebook/dp/B0795BLS8D/ref=sr_1_1?s=books&ie=UTF8&qid=1540669361&sr=1-1&keywords=the+diabetes+code)
- Keto Diet
- [Endorsed Local Providers via Dave Ramsey](https://www.daveramsey.com/elp)

Genadi

- [Long Walk Freedom](https://www.amazon.com/Long-Walk-Freedom-Autobiography-Mandela/dp/0316548189)


### Transcript


