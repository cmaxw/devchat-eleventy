---
layout: layouts/post.njk
title: >
  RR 383: “Rbspy: A New(ish) Ruby Profiler!” with Julia Evans
date: 2018-10-09 10:00:47
episode_number: 383
duration: 49:25
audio_url: https://media.devchat.tv/ruby-rogues/RR_383_Rbspy_a_newish_Ruby_profiler_with_Julia_Evans.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

**Panel:**

- [Charles Max Wood](https://twitter.com/cmaxw?lang=en)
- [Dave Kimura](https://www.linkedin.com/in/kobaltz)
- David Richards

**Special Guests:** Julia Evans

In this episode of Ruby Rogues, the panel talks with Julia Evans who is a software engineer at Stripe and lives in Montreal, Quebec, Canada. The panel talks with Julia about her tool Ruby Spy among other topics. Check it out!

**Show Topics:**

1:34 – Julia gives her background.

1:52 – Chuck: You’ve been on the show before. Listeners, go check it out!

2:30 – What is Ruby Spy?

2:09 – Julia: I wanted to know WHY my computer was doing what it was doing. I felt that it was my right, so I wrote that program.

3:20 – Julia: This does have these profiling tools in Java. I thought it was unfair that Java had better tools than Ruby. I figured Ruby should have it, too.

3:44 – Chuck talks about tools and Ruby Spy.

4:05 – Julia recommends it.

Julia: You had to install the gem in order to use it.

4:30 – Chuck: some people say that it has affected their performance.

4:42 – Julia: Ruby Spy is a separate process.

Julia continues this conversation and goes in-depth of what Ruby Spy is, etc.

5:27 – When would you use something like this, and what kind of data would get you back to debug the slow points.

5:43 – Julia: When you run Ruby Spy it will...

6:20 – Chuck: Does it give you method names?

6:25 – Julia: Yes, 20% in this method or...

6:37 – I can see how that would be helpful on certain aspects. Being able to narrow down the 1,000 methods where you cab get your biggest bang for your buck.

7:05 – Julia comments.

7:35 – Chuck: I know people pay for Relic...

7:56 – Chuck: When it tells you which method is taking a long time, will it look at the stack and THIS method is insufficient b/c this other method is insufficient? How does it do that?

8:35 – Julia answers the questions.

8:58 – Chuck: I’d imagine that it could keep anything in memory. Did you have to do a bunch of work where THAT means THAT?

9:20 – Julia answers.

Julia: The differences weren’t that big between the different versions.

9:54 – Julia goes through the different ways the versions are different.

11:56 – Panelist asks a question.

Is this meant for Ruby Scripts?

12:10 – Julia: It doesn’t care – as long as you are using the Ruby Interpreter.

12:25 – Chuck: Sometimes my performance issues is Ruby, and sometimes it’s the database. For Ruby it will sit there and wait for IO. Is that a blind spot that you will have in Ruby Spy?

12:54 – Julia: Great question. There are 2 ways to do profiling.

_Julia explains these two ways._

13:54 – Wall Clock Time.

14:04 – Chuck: Your computer has a speed and however long it takes to run one cycle. It is similar, but...

14:26 – I guess as long as it’s relative – I was looking at these graphs you wrote.

14:51 – Julia.

14:56 – Panelist: That has been my issue. Changing context into a profiler...

15:27 – Julia.

15:38 – Chuck: Do you have to run it through something...?

15:49 – Julia.

15:53 – Chuck: Is that the most effective way to look at the data through Ruby Spy?

16:07 – Julia: I twill show you the output as it is profiling. 2 visualizations: flame graph and...

16:45 – Chuck.

16:49 – Julia: It is the only visualization that I know of.

17:00 – Chuck: I don’t know.

17:05 – Julia: You have spent this amount of % to...

How much time was spent in this function or that function?

I feel that the flame graph is much more helpful than a list of percentages.

17:33 – Chuck: What are you looking at in the flame graph?

17:37 – Guest: Basically what time was spent in that function. You look at what is big, and then you figure out if that is something to optimize or not. You go to the docs and...

18:36 – Jackal.

18:40 – Main problem that I would run into is the information OVERLOAD.

Now you have the action controllers and all these other components that aren’t normally visual.

Panelist asks a question to Julia.

19:29 – Julia: It does give you everything. If you have a real serious problem often the answer will really jump out at you. What I would say – if something is really slow it is right there.

20:08 – Chuck: You will see the name of the method?

20:15 – Chuck: Any other information it will give you?

20:22 – Julia: The line number.

20:28 – Chuck asks another question.

20:41 – Chuck: Success stories?

20:45 – Julia: Yes, I do. GitHub – success stories.

Julia gives us one of her success stories. This user said that it helped them by 30%.

21:28 – I can’t imagine using a Rail app that is over 10 years old. So much as changed! A lot of the documentation would be harder to find.

22:00 – Julia gives another example of a success story.

22:10 – When it goes to production – my brain turns off and get jittery. Figure out what happens in production and I wouldn’t want to guess for an app that couldn’t be down. This is what is happening right here and right now.

22:46 – Chuck: How do they get it out into production...

22:57 – Julia: Through GitHub that you can download. If you are on a Mac and your developing you can do it through Home Brew.

23:17 – Chuck and Julia go back and forth.

23:27 – Panelist: You don’t need to have it all the time, but a good tool.

23:44 – Julia: I want people to use it but not all the time; only when they need it.

23:58 – Panelist: I think on a lot of these scripts...

_Rails Panel – Panelist mentions this._

25:02 – Panelist asks her a question.

25:12 – Pie Spy is something else that someone wrote.

25:28 – Julia: Ruby Spy came first, and Pie Spy is inspired Ruby Spy. He did a good job building that.

25:50 – Advertisement – Code Badges

26:35 – People still use PHP?

26:42 – Julia: Yep!

26:47 – Chuck talks about his neighbor and how he raves about this feature or that feature.

27:07 – In PHP’s defense it has come a long way. I think they are at version 7 or version 8. Sounds like they did a lot of new things with the language.

27:31 – Julia: Instead of that or this language is better – what TOOLS can we use? I hear Ruby users make fun of Java, but Java has great tools. What can we learn from that language rather than bashing the other languages?

28:13 – Chuck chimes-in.

Dot.net.

28:58 – Chuck: Let’s talk about that with the opensource.

29:09 – Julia talks about the opensource project.

30:30 – Julia: I asked my manager at Stripe to do this sabbatical in advance. I worked on it for 3 months. I got a check from Segment.

31:05 – Panelist adds in his comments and asks a question.

31:26 – Julia never used it.

31:32 – I have done a lot with Ruby Motion in the past. I am curious how that would work with Ruby Spy?

32:18 – IOS is pretty locked down, so I don’t think that would fly.

32:36 – Chuck talks about Ruby Motion and how he thinks Ruby Spy would / wouldn’t fit.

32:56 – What is funny about that, Chuck, is that you can ALT click...

34:07 – Chuck mentions another app.

34:17 – Julia.

34:40 – Chuck.

35:03 – Chuck: What else are you doing with Ruby Spy that is new?

35:05 – Julia: Not much.

It’s fun to see people come in to make contributions.

35:33 – Panelist: Here is a suggestion, some kind of web server that you could...

35:57 – Great idea.

36:04 – Chuck: It wouldn’t be hard to embed it.

36:12 – Julia: Sharing it between...so we don’t have to build the same thing twice.

36:33 – Chuck and Julia go back-and-forth about Ruby Spy and Pie Spy,

37:23 – Julia: Pearl was my first language, and I still love it.

37:32 – Chuck: I guess I can’t knock it because I really haven’t tried it.

37:48 – Ruby was inspired by Pearl so there’s that.

37:57 – Chuck: How do people start using your tool? What is your advice?

38:01 – Julia: Yeah just try it and see. Install it through Home Brew if you have a Mac.

38:25 – Chuck: Picks!

38:32 – Advertisement – Get a Coder Job.

39:07 – Picks!

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby Motion](https://www.rubymotion.com)
- [Ruby on Rails](https://rubyonrails.org)
- [StackProf – GitHub](https://github.com/tmm1/stackprof)
- [Ruby Spy](https://rbspy.github.io)
- [Rails_Panel – GitHub](https://github.com/dejan/rails_panel)
- [Julia Evans’ Twitter](https://twitter.com/b0rk)
- [Julia Evans’ Blog](https://jvns.ca)
- [Julia Evans’ GitHub](https://github.com/jvns)
- [Julia Evans’ LinkedIn](https://www.linkedin.com/in/jvans/?originalSubdomain=ca)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Dave

- [Vise](https://www.amazon.com/Larin-RBV-5-5-Multi-Function-Vise/dp/B00EQ4ZUYW)
- [Deep Freeze](https://www.hisense-usa.com/appliances/refrigerators-freezers/fe703)

Charles

- [Elixir in Phoenix](https://phoenixframework.org/)
- [Vue JS](https://vuejs.org/)
- [Views on Vue](https://devchat.tv/views-on-vue/)
- Side Projects
- [Doc McStuffins Headphones](https://www.amazon.com/s/?ie=UTF8&keywords=doc+mcstuffin+headphones&tag=googhydr-20&index=aps&hvadid=228951601422&hvpos=1t1&hvnetw=g&hvrand=6261848803680440785&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9027276&hvtargid=kwd-315409398959&ref=pd_sl_6a74yt1xtv_e_p37)

David

- [Ed Lahey](https://www.amazon.com/s/ref=nb_sb_noss/144-8883445-7498028?url=search-alias%253Daps&field-keywords=ed+lahey)

Julia

- [Growing a Business](https://www.amazon.ca/Growing-Business-Paul-Hawken/dp/0671671642)
- [Notability App](https://itunes.apple.com/us/app/notability/id360593530?mt=8)

### Transcript
