---
layout: layouts/post.njk
title: >
      269 RR Testing
date: 2016-07-20 07:00:37
episode_number: 269
duration: 59:49
audio_url: http://media.devchat.tv/ruby-rogues/RR269Testing.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

## [Rails Remote Conf](https://allremoteconfs.com/rails-2016)
&nbsp;02:07 - Testing07:28 - Adding Tests Later; When is the test useful?
- [TDD (Test-driven Development)](https://en.wikipedia.org/wiki/Test-driven_development)
14:35 - Testing the Happy Path16:48 - Writing Tests First18:53 - Sharing Code 
- [Larry Wall: Three Virtues](http://threevirtues.com/)
27:34 - Testing Error Messages29:04 - External vs Mocking/Stubbing34:11 - [Exploratory Tests](https://en.wikipedia.org/wiki/Exploratory_testing) and [Characterization Tests](https://en.wikipedia.org/wiki/Characterization_test)
- [Sunk Cost Fallacy](https://en.wikipedia.org/wiki/Sunk_costs)
- [Katrina Owen: Therapeutic Refactoring](http://confreaks.tv/videos/cascadiaruby2012-therapeutic-refactoring)
39:07 - Refactoring47:22 - Mocking and Stubbing (Cont’d)
- [Justin Searls: To Mock or Not to Mock @ SCNA 2012](https://vimeo.com/54045166)
- [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
  - [Practical Object-Oriented Design in Ruby by Sandi Metz](http://poodr.com/)
- Spies
&nbsp;Picks
- [How American Politics Went Insane](http://www.theatlantic.com/magazine/archive/2016/07/how-american-politics-went-insane/485570/) (Jessica)
- [Alex Kitchens’ Minecraft Tweet](https://twitter.com/alexcameron89/status/743985053332475904) (Sam)
- [The "Is It a DSL or an API?" Ten Question Checklist](https://gist.github.com/geeksam/24ef10be8c773a2c1bd4) (Sam)
- [Transmit](https://panic.com/transmit/) (Chuck)
- [Zoom](http://zoom.us/) (Chuck)
- [Rails Remote Conf](https://allremoteconfs.com/rails-2016) (Chuck)


### Transcript

 **JESSICA:** I totally envy the beard thing sometimes. I mean, I don't have to shave my face daily. That's kind of nice. But I can't grow a mustache. Mustaches are so cool.

**_[This episode is sponsored by Hired.com. Every week on hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It's totally free for users. And when you're hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the Ruby Rogues link, you'll get a $2,000 instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**_[I'm excited to tell you about a new sponsor to the show, Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to debug issues, or a million alerts flooding your inbox ruining your day. With Rollbar's full-stack error monitoring, you get the context and insights and control you need to find and fix bugs faster. It's easy to install. You could start tracking production errors and deployments in eight minutes or less, or automatically create new issues in GitHub, JIRA, Pivotal Tracker, et cetera. They have a special offer for Ruby Rogues listeners. Go to Rollbar.com/RubyRogues to sign up and get the bootstrap plan free for 90 days. That's 300,000 errors tracked free. Give Rollbar a try today. Go to Rollbar.com/RubyRogues.]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 269 of the Ruby Rogues Podcast. This week on our panel we have Jessica Kerr.

**JESSICA:&nbsp;** Good morning.

**CHUCK:** Sam Livingston-Gray.

**SAM:&nbsp;** Insert witty and insightful tag line here.

**CHUCK:&nbsp;** I think David's used that one. I'm Charles Max Wood from DevChat.tv.

**SAM:&nbsp;** [Inaudible]

**JESSICA:&nbsp;** [Laughs]

**CHUCK:&nbsp;** And I'm just going to shout out real quick about Rails Remote Conf because that's what I'm working on these days related to this show. This week we're going to be talking about testing and in particular I think we're going to talk more along the lines of when to test, when not to test, what some of the pain points are around not testing and what similar pain points are around testing. And just get an idea about that. This started out because Jessica actually in the chat before we got recording, we had a guest lined up and then at the last minute he had to reschedule. So she said, “Can I complain about what it's like to work on a Ruby app with no tests?” So Jessica, go.

**JESSICA:&nbsp;** Okay. [Chuckles] Okay. So, at Stripe I'm actually doing Ruby now. But I took over maintenance completely voluntarily, I totally asked for this, of our deployment app which is in Ruby. But it was written like three years ago by an intern who is awesome and still works there which is fantastic. But it was written without TDD. And on the one hand, I think that makes complete sense. When you are an early stage startup you just need stuff to go. And it goes and it worked for three years. Clearly, people have been able to maintain it. But as a new person coming in to learn this code I want to change it. I want to change it. I want to incorporate myself into the system and to understand it. And that is terrifying without tests. Because it's Ruby. And I get, “That method doesn't exist,” in production. Well…

**SAM:&nbsp;** [Chuckles]

**JESSICA:** Production fortunately here is internal production. I'm only messing up my coworkers.

**CHUCK:&nbsp;** [Laughs]

**JESSICA:&nbsp;** But…

**SAM:&nbsp;** But that's okay. They don't matter, right?

**CHUCK:&nbsp;** Yeah, that's right.

**JESSICA:&nbsp;** Ah. Well, they're nice. They are.

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** They're nice.

**SAM:&nbsp;** Yes.

**JESSICA:&nbsp;** [Laughs] But ‘my coworkers’ is an increasingly large number of people. And one reason I wanted to take over this app and start improving it was because when you have 10 people and your deployment system is a little finicky that's fine. That's fine. 10 people can learn what to type and how to find failures. But when you're at a hundred engineers, that's not okay. That's wasting a lot of people's times. And what's more, as we're hiring multiple engineers per month, all of those new people are stymied and frustrated and feel stupid and feel like they'll never be productive here when they have to learn all these little niggly things to get their deploys out. I'm trying to streamline that and make that easier, make that less painful. Great. But there are no tests.

**CHUCK:&nbsp;** So, let me see if I can [tee] this up properly.

**JESSICA:&nbsp;** Yeah.

**CHUCK:&nbsp;** Did you read the documentation?

**JESSICA:&nbsp;** Ha! I did. [Inaudible] readme, right?

**SAM:&nbsp;** [Chuckles]

**JESSICA:&nbsp;** But most of the readme is out of date, too. [Chuckles] The point being, tribal knowledge is fine for a while. But eventually you have more people and you need something more solid. And I need to not get ‘no method’ errors in production. So then, you want to add tests. And so, we're adding tests. But in order to add tests, you have to go back and make the code testable.

**SAM:&nbsp;** [Chuckles] Yeah.

**JESSICA:&nbsp;** So, doing things like instead of making HTTP calls just in the middle of the code, pass in something that has a method that in production does an HTTP call but in your test you can mock it or fake it. I hate mocks. I like fakes. We can argue about that later.

**CHUCK:&nbsp;** [Laughs] I think we should. But I think it's interesting that you're…

**JESSICA:&nbsp;** [Chuckles]

**SAM:&nbsp;** Definitely. And spies, too.

**CHUCK:&nbsp;** Yeah. You're talking about though that the tests make the code more maintainable, make it easier to refactor, make it safe to refactor.

**JESSICA:&nbsp;** To make it safe. To make it safe to not just refactor but also to change functionality. To make any change at all, I need tests. Unfortunately to write tests, I need to make changes.

**CHUCK:&nbsp;** Right.

**SAM:&nbsp;** Right.

**JESSICA:&nbsp;** That's the catch 22.

**SAM:&nbsp;** I have another reason that I like to have tests on a thing and that's because as I'm playing with a new system I often find that people have written things in non-idiomatic ways or used variable names that just don't make sense to me yet. And so, part of how I develop my understanding of the code is I sit there and I refactor it and I run the tests and I see, “Did that work? Was that okay?” And even if the tests are woefully incomplete, they're still better than having nothing at all. Because I can say, “At least this thing that somebody thought was so important that it should fail if the code doesn't do this, I haven't broken that.”

**JESSICA:&nbsp;** If it runs the code at all. In Ruby, it's crucial…

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** To have a test that just exercises the code. I don't care if it checks nothing. At least I know…

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** Whether I've called a method that isn't a thing or used a variable that doesn't exist anymore.

**CHUCK:&nbsp;** Right, because at a minimum it will trigger any exceptions that you're going through.

**SAM:&nbsp;** Yeah, totally.

**JESSICA:&nbsp;** Exactly. Because that stuff looks really stupid when other people run this code on their machine and the client is like, “Bam, no method exception,” and I'm like, “Oh my god. Oh, I did that.” [Chuckles]

**SAM:&nbsp;** I think it's the Stockholm syndrome talking but it's been my experience that a certain amount of no method error on nil is just part of 95% of Ruby apps. Because Ruby teaches us that, you know it's okay not to care about the value of something going in. And there's all this stuff that makes it easy to pretend that nil isn't really a problem. But yeah, no tests makes that so much worse. [Chuckles]

**CHUCK:&nbsp;** Alright. So, I want to back up here, because…

**SAM:&nbsp;** Yeah.

**CHUCK:&nbsp;** Jessica said something that I thought was interesting. And that was when you're a startup and you're being scrappy it's okay not to write the tests because you just need crap to get done and you need stuff that works.

**JESSICA:&nbsp;** And this is an internal tool. If you get no method error on nil, you go fix it yourself.

**CHUCK:&nbsp;** Right.

**SAM:&nbsp;** Sure.

**CHUCK:&nbsp;** But the thing is that in my experience as well and I've worked several contracts at various stages, I've worked at different startups at various stages, and my experience is that if you're not writing the tests from the beginning, there's a lot of resistance to starting to write them later.

**JESSICA:&nbsp;** Exactly. Because it's really hard to write them later.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** And now that we do have a few tests around it, now whenever we want to make a change we're like, “Oh, I'll just make a test for it. No problem.” Because the framework is there. There's those little integration points that we can fake out instead of trying to hit the outside world or the database or something like that. Now that we have tests, adding tests is easy because the code is testable. But there was a scary bit where we had to do changing the code at the same time as writing the tests and at the same time that we're trying to learn what it's supposed to do. Fortunately, we had that slack. The company gave us room to spend a couple of months doing that and making a few errors.

**SAM:&nbsp;** [Chuckles]

**JESSICA:** And now it's in a much better state.

**CHUCK:&nbsp;** Well, and I can see the value there just from the standpoint of you have a system that deploys stuff, which effectively is a form of automation. Even if somebody has to trigger it.

**JESSICA:&nbsp;** Yup.

**CHUCK:&nbsp;** So, you wind up saving a whole lot more time having that just work properly than having people unfamiliar with it having to troubleshoot it regularly. However I'm still curious because well, there are two things. One is a little bit anecdotal. I've heard people basically say, “I work faster using TDD than without it.”

**SAM:&nbsp;** That would be me.

**CHUCK:&nbsp;** And then I've also, I'm also thinking again back to the example where people don't write the tests in the beginning and then they never get around to writing those tests. And then they wind up paying that cost over and over again with having to troubleshoot things without actually having that safety net in place. So, I'm curious. Is it every really appropriate to not write the tests? How scrappy do you have to be in order to ignore writing the tests in the first place?

**JESSICA:&nbsp;** I think in this case when you're automating something, there is a test that you're running without writing any automated test. You're testing the question of, is this useful?

**CHUCK:&nbsp;** Uhuh.

**JESSICA:&nbsp;** And if it's not useful, you're going to throw the code away. It's never going to get run. There's no point making sure it's correct.

**SAM:&nbsp;** You're going to find a way to do your job without that bit of code, maybe write your own new thing, right?'

**JESSICA:&nbsp;** Yeah. Maybe it's something else that you actually want to do for deploys. So, I think that… and I mean, it's a working prototype at that point.

**CHUCK:&nbsp;** So…

**JESSICA:&nbsp;** And if you can answer the question, is it useful? Then it's worth writing tests after that, after it's useful.

**SAM:&nbsp;** So, consider the initial thing a spike?

**JESSICA:&nbsp;** Yeah, you can.

**SAM:&nbsp;** And rewrite it? I've almost never seen anybody actually throw the thing away that they've put time into. But…

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** In theory… [Laughs]

**JESSICA:&nbsp;** Do you think that's for the sunk cost or…?

**CHUCK:&nbsp;** I'm laughing because I have worked on projects that it was like, “Yeah, we're going to prototype this just to see if it works. And then we'll go back and we'll write the real production thing.” And no, the prototype just turns into the production.

**SAM:&nbsp;** No, no. You never do.

**JESSICA:&nbsp;** Right.

**CHUCK:&nbsp;** So, yeah.

**JESSICA:&nbsp;** But is the production thing causing problems? Somebody's got to be in charge of it. I think that's crucial. Someone has to have ownership of that code. And if you wrote it and you don't want to go back and write it, it's your job to fix it whenever it goes down. And then…

**SAM** :&nbsp; As long as you still work there.

**JESSICA:&nbsp;** As long as you still work there, yeah. Or your team's job.

**SAM:&nbsp;** Right.

**JESSICA:&nbsp;** But I do think… I think it’s legit that this deploy system ran for years.

**CHUCK:&nbsp;** Yeah.

**JESSICA:&nbsp;** Without tests. And we're coming back and we're adding tests. And it is a lot of work but I'm okay with that.

**CHUCK:&nbsp;** Yeah. I definitely agree with you from the standpoint of this is an exploration. We're just seeing if this is possible. We may throw it away. Yeah, the tests may or may not be useful for that, depending on how long of an experiment it is and how much pain it's going to cause you to not have that safety net.

**SAM:&nbsp;** So, what's your threshold for that? I find mine is about four hours. [Chuckles]

**JESSICA:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Yeah, that's what I was going to ask, is so how far down that road do you get before the tests really start to pay off in time savings and frustration savings?

**JESSICA:&nbsp;** Okay, okay. The last time I wrote something personally which was like yesterday in Scala and I started out with no tests because I'm like, “I just want the script to do this thing,” and it took me about four hours.

[Laughter]

**JESSICA:&nbsp;** And then I was writing tests. [Inaudible] probably closer to three. But what I did was I wrote the test that I needed for the error that I got in production. Because the thing about test first is the first thing you need to know when you write a test is what's it supposed to do? And sometimes you don't know that yet.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** What do I want it to do? I don't know. Let me type something on the command line. Oh, that failed. Alright. Now I know what I want it to do, though. I can write a test.

**SAM:&nbsp;** Yeah.

**CHUCK:&nbsp;** Yeah. What you said right there is more or less how I approach it. So, I've never watched the clock to see, “Okay, I got three and a half hours in and then I had to write my first test.”

[Chuckles]

**CHUCK:&nbsp;** But yeah, generally what I do is I work on it until I start running into stuff regularly and then I start putting tests around it to make sure that it's catching at least those common bugs. It's like, “Okay, I've hit this bug and I can't seem to figure it out,” or, “I've hit this bug and I'm tired of running into it and so I'll put a [test around it].”

**JESSICA:&nbsp;** Because the thing we're trying to figure out here is when is the test useful?

**CHUCK:&nbsp;** Yeah.

**JESSICA:&nbsp;** And you just said, I hit this bug. I know this test is useful. Therefore I will write this test.

**SAM:&nbsp;** [Laughs] There's another angle on this too, which is that all three of us are pretty well-experienced in TDD and development in general. The first couple of years that I had learned TDD and was trying to figure out how to apply it I really sort of got unit testing or thought I did. And so, I tried to write all of my tests in TDD, everything from the bottom up. And I would find often as I was doing that, that I was describing the wrong classes and didn't really get the interfaces between them properly. And it sounds like Jessica, the approach you're describing is you wrote some stuff and then you got to a point where you had a bug that you wanted coverage around. And you wrote that test, it sounds like, I'm guessing from the top down.

**JESSICA:&nbsp;** Oh, yeah.

**SAM:&nbsp;** Is that a fair characterization?

**JESSICA:&nbsp;** I always test from as far outside as I can feasibly test because that gives me the freedom to change things on the inside.

**CHUCK:&nbsp;** Mmhmm.

**SAM:&nbsp;** Yeah. And that lets me code in a way that I like which is at any given layer I'm writing this high-level thing and I'm skipping over the details. And that lets me apply this question that actually I picked up somewhere, I think from Jim Weirich, of what's the code that I would like to write here?

**JESSICA:&nbsp;** Mmhmm.

**SAM:&nbsp;** Because I'm not tied down by having any existing classes or methods to bias my thinking in one direction or the other. I can say, “What makes sense right here?” And then I can go write that and then recursively get all the way down.

**JESSICA:&nbsp;** Write the code that you wish would work and then make it executable.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** Yeah, totally.

**CHUCK:&nbsp;** So, what I'm wondering though is the way that we've talked about this is, I get to the point where I need a test to make sure that I'm not hitting this same problem over and over again. So, I know the test is useful. So, do you actually go in then and test that the happy path works? Because I know a lot of people do that, right? It's, “Well, this should actually work this way. This should do this.” And then it sounds like you just work the happy path until it doesn't work and then you start writing tests on it. And that's kind of the approach that I tend to take to a certain degree, too. But…

**JESSICA:&nbsp;** Yeah. I'll test the happy path when I mess it up. Or when I want to do a serious refactor and be sure. The tests that I find myself running manually, like at the command line if it's a command line utility, I will eventually automate out of laziness.

**CHUCK:&nbsp;** Right.

**JESSICA:** But most of my test cases wind up being around error messages.

**SAM:&nbsp;** Hmm.

**JESSICA:&nbsp;** I'm kind of obsessed with the error paths, relative to other people. Other people seem to get happy if the happy path works and they want to go on making the happy path longer. And I'm like, “Oh, but this one time I fell off the happy path over here.” And I will have a test of, “Okay, well if this happens then you get this error message back.” So, on Sunday when I was writing my little command line utility that, “Why is this just not… oh, I totally should have been able to brew install something to just run a velocity template.” But no, I couldn't find that. So, I'm writing this little utility and I observe that my naming is crap. I have no code organization. But the error messages are beautiful.

[Laughter]

**JESSICA:&nbsp;** And that makes me happy when I'm using it because whenever I mess something up I get a helpful error message that tells me what to do.

**CHUCK:&nbsp;** Right.

**SAM:&nbsp;** That's great.

**JESSICA:&nbsp;** Chuck, you said something about we're all experienced in TDD. I think there's a really important point here that we can write the code and then come back and add the tests because we have habits of writing code in a testable style.

**SAM:&nbsp;** Yes. Definitely.

**CHUCK:&nbsp;** I think Sam said that. I don't think I said that.

**JESSICA:&nbsp;** Ah.

**SAM:&nbsp;** It's okay. We look alike. It's all good.

[Laughter]

**CHUCK:&nbsp;** Attribution, right? Anyway yeah, I think it's interesting though. Sam, one thing that I want to go into with you, you said that you're faster writing TDD than not TDD. So, do you just start out with the test then? Or do you spike and then come back?

**SAM:&nbsp;** I will spike. Actually sometimes when I do what I call a spike I'm still TDD-ing. [Laughs] I just, I take a run at the problem and I sort of figure out a shape that may or may not work. But that gives me some insight into what the actual shape of the problem is. And maybe I'll take that and throw it away and then take another run at it with that knowledge in mind. But yeah, I like to joke that I use TDD to compensate for my ADD. Because for the first couple of years of my career I was just writing these functions in Visual Basic and I would load up, I would open up the debugger window and I would invoke it with a certain set of objects or parameters that I knew would cause it to take a particular path. And as I would work on these things, they develop more different paths to them. And I would have to remember, “Okay here are the 10 things I have to test each time.” And I didn't know any better. [Chuckles]

So, when I found TDD it was like, “Wait, that's right. I've been an idiot. This is what computers are for. They can do these repetitive things over and over again and not complain.” So, that's part of my motivation for writing tests first, is just that it reduces the cognitive load that I have to carry. As I'm working through a new problem I don't want to have to remember, “Oh, but then what happens in this case?” Like my interest there is to just write that down and have the computer tell me when I screw it up. Does that make sense?

**CHUCK:&nbsp;** Mmhmm.

**JESSICA:&nbsp;** Yeah. Different people have different ways of exploring the problem space. Sometimes it's writing code. Sometimes it's writing tests. For some people, just lay in their hammock and think about the problem for hours and hours and fit the whole thing in their heads. And then they know what it's supposed to do and how it's going to work.

**SAM:&nbsp;** [Chuckles] Yeah, that's [inaudible].

[Laughter]

**JESSICA:&nbsp;** Most of us are more about poking at it.

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** Right, or standing in front of a whiteboard for half an hour going, “Huh. What about that?” [Chuckles]

**JESSICA:&nbsp;** [Laughs]

**SAM:&nbsp;** Does that shape make sense?

**CHUCK:&nbsp;** So, one other thing that I'm wondering about just out of what Jessica said is that other people were using the code that she was trying to maintain. And I'm wondering if that lowers the threshold at all for, “Ouch this really hurts because I don't have tests.”

**JESSICA:&nbsp;** Yeah, it was embarrassing.

**CHUCK:&nbsp;** You know, as opposed to if you were the only person working on it and using it, right?

**JESSICA:&nbsp;** Yeah.

**CHUCK:&nbsp;** How far would you push it without tests if it was just you versus how far would you push it because other people are trying to use it and make it work?

**SAM:&nbsp;** Well, yeah. I feel really self-conscious about when I provide a tool to somebody else that they actually be able to use it and understand it. Like, the reason I got into programming or one of the reasons is that I really get a lot out of making other people's lives easier, like make their jobs better. And take away the repetitive stuff. And initially that was the end users I was working with. But more and more I'm applying that to the other developers I work with because that way I feel like I get to be a force multiplier for these other people who are also force multipliers. And everybody wins that way.

**JESSICA:&nbsp;** As engineering infrastructure I think it is crucial to consider my job a customer service job. And if people are confused or getting errors on their deploy, that is not their fault. Oh, you didn't type dash blah-blah-blah. That is my fault for not making that clear. And my first job is customer service. So, if I'm working on something and someone posts in the channel, “Hey, my deploy failed,” I'm dropping what I'm doing and I'm helping them fix the deploy. And then hopefully I'm going to automate something so that next time that same thing happens, they don't have to ask.

**SAM:&nbsp;** Right.

**JESSICA:&nbsp;** Or someone new doesn't have to ask.

**SAM:&nbsp;** And there's some empathy there too, right? Because in my experience when I'm deploying a new feature, it's often something that I'm a little nervous about. And so, when I try to deploy and then I have deploy problems my stress levels just go through the roof.

**JESSICA:&nbsp;** Yeah, yeah. Because a build deploy is not the problem you want to solve.

**SAM:&nbsp;** Right.

[Laughter]

**JESSICA:&nbsp;** Yeah. And I am here to shave that yak for them.

**SAM:&nbsp;** I wanted to bring up the classic Larry Wall quote about the three virtues of a great programmer. I think he said a great Perl programmer but we'll skip that part.

**JESSICA:&nbsp;** [Laughs]

**SAM:&nbsp;** Which are laziness, impatience, and hubris. And it sounds like we've been talking a lot about hubris just now, which is that quality that makes you want to write code that other people want to say nice things about.

**JESSICA:&nbsp;** Yeah.

**CHUCK:&nbsp;** Yeah, but the thing is it also, this does play into laziness. What we're talking about…

**SAM:&nbsp;** Oh, absolutely.

**CHUCK:&nbsp;** In this instance is an automatable task. I may kick off the deploy manually but I'm not running all those commands on the servers. It just pushes the code, pulls it from Git, does whatever build steps it has to do, and then it's done. And it's interesting too because there's a whole value proposition behind what you're doing. And it's not just your time in maintaining it. But it's everybody else's time in running that.

**JESSICA:&nbsp;** And as Sam points out, there's stress level.

**CHUCK:&nbsp;** Yes. I don't know how often we account for that, but yeah.

**SAM:&nbsp;** Yeah, because when people get stressed they make terrible decisions. [Laughs]

**JESSICA:&nbsp;** Yeah, yeah.

**SAM:&nbsp;** At least I do.

**JESSICA:&nbsp;** Yeah, I think you're right Chuck. We tend to count time. But I have an intuition that time is totally the wrong thing to count when we're measuring the cost of an activity. I think it's…

**CHUCK:&nbsp;** I both agree and disagree. I think I mostly agree in the sense that there are a lot of other things that go into what we do and how we do it that are much more relevant than time.

**JESSICA:&nbsp;** Yeah.

**CHUCK:&nbsp;** However I also would point out, and I was going to ask a question about this, and that is that that is also the measure that's ultimately in some ways what our bosses are paying us for, right? Is that we have a salary, they expect us to work roughly 2,000 hours a year, blah, blah, blah, right? So, as much as we can get done in those 2,000 hours then…

**JESSICA:&nbsp;** Time is a limitation.

**CHUCK:&nbsp;** Yes.

**JESSICA:** &nbsp; I don't think it's currently our limiting factor.

**CHUCK:** I agree. I'm just saying I know a lot of managers that measure the value they get from people based on the amount of time that they spend doing [inaudible] tasks.

**JESSICA:&nbsp;** Yeah.

**SAM:&nbsp;** Which is…

**JESSICA:&nbsp;** Yeah.

**SAM:&nbsp;** Yeah. So, I just wrote a little note in the chat so that I didn't forget this. One of the things that Glenn Vanderburg said that I found interesting was this idea that people are really bad at accounting for things where there are multiple orders of effects going on.

**CHUCK:&nbsp;** Mm.

**SAM:&nbsp;** And what you're talking about Chuck is a manager looking at a direct report and seeing how much time they spent on something. And maybe if you're lucky they'll pay attention to how much time you saved the other people on your team by doing that. But in my experience, even that's a stretch for managers.

And then to take that and multiply it out, like in your example Jessica you're working on the deploy script which there's your time that goes into it which hopefully saves 99 other engineers in your company a certain amount of time and stress. And then what effects does that have in especially lowering their stress levels and allowing them to go and do other things? Because if they're not fighting with a deploy system for an hour and it totally demolishes their morale for the rest of their day, what else can they go on and do? And humans, we're really terrible at measuring stuff like that. But I think if we were able to properly account for all of that, we might be able to legitimately argue that time is the metric that matters.

JESSICA:&nbsp; Maybe at some point time will be the metric that matters.

**SAM:&nbsp;** [Laughs] Okay.

**JESSICA:&nbsp;** It's certainly one limitation. But I think we focus so much on that already.

**SAM:&nbsp;** Sure.

**JESSICA:&nbsp;** Because it's the easiest to measure. The stress level, the decision power, what do you call it? There's a certain amount of capacity that people have for both will power and decision making?

**SAM:&nbsp;** Oh, are you talking about ego depletion?

**JESSICA:&nbsp;** Yeah, sure.

**CHUCK:&nbsp;** [Laughs] Yeah, sure didn't sound very convincing.

**JESSICA:&nbsp;** I don't know if that's the term that I've…

**CHUCK:&nbsp;** Yes, but I've heard the same description, yeah. You have a certain capacity for making decisions, especially stressful decisions.

**JESSICA:&nbsp;** And coding is all decisions.

**CHUCK:&nbsp;** Yeah.

**JESSICA:&nbsp;** I noticed that I have a more productive morning at work if I don't drive to work.

**SAM:&nbsp;** Oh yeah.

**JESSICA:&nbsp;** Driving is so depleting.

**SAM:&nbsp;** Just commuting in general for me is the same way. I didn't realize how happy I was working at home until after a couple of years I took a job outside the house again. I was like, “Wait, even if I'm walking and I'm theoretically getting exercise,” like, “This is really stressful.”

**JESSICA:&nbsp;** Oh, I'm good with walking and riding the train. I am totally fine with that. For me it's driving. So, here's a new analogy. I want our deployment system, I want to replace a four-way stop with a roundabout. I want people to be able to keep moving and not have to stop, go, stop, go, stop, go, waste all their gas.

**CHUCK:&nbsp;** Yeah see, for me well for one, when I go driving, because I work from home as well, when I drive I just go drive off. I take the highway basically as far as I'm going to take it. Until I'm relaxed.

**JESSICA:&nbsp;** No four-way stops.

**CHUCK:&nbsp;** Until I'm…

**JESSICA:&nbsp;** No roundabouts.

**CHUCK:&nbsp;** Yeah, until I'm relaxed and then I come back. Yeah, there are a couple of stoplights before I just wind up driving out to a little teeny town out here called cedar fork. But yeah, I get what you're saying as far as the stress of do I change lanes, do I turn, do I stop, do I… all these things. But yeah, it's interesting.

**JESSICA:&nbsp;** Yeah, yeah. Yeah. Yeah, so I agree with Sam in the chat that we should… we could bring this back to testing. Because having those tests running, it's like your car is partially self-driving.

**CHUCK:&nbsp;** Mmhmm.

**JESSICA:&nbsp;** And you only have to think about, “Where am I going now?” You don't have to think about, “Did I turn the turn signal off?”

**CHUCK:&nbsp;** Yeah. The other thing is you're talking about your particular process, making it so that it's like taking the train for your coworkers, right? You get on the train, you get off the train, and you're there. And…

**JESSICA:&nbsp;** Right.

**CHUCK:&nbsp;** In this particular instance, if it stops, if it hits a hiccup, if it has a problem, then it's like okay, well then they have to make the decision, “Do I get out and walk? Do I wait 'til they fix the train?” So, you're then into this ego depletion that Sam pointed out. And it's like, “Now what?” right? And what you really want is yeah, you want it to the point where it's just yeah, get on the train, get off the train. And it's not just the time that they spend trying to figure out why it failed. But it's also yeah, it's that interruption in something that they want to make [routine].

**JESSICA:&nbsp;** Yeah, and it's worse when the train stops and there's no announcements and you don't know what's going on. So, even if they have to make a decision I can provide them the information to make that decision not terrifying, not stressful.

**CHUCK:&nbsp;** Yeah, but a lot of times all the information you have is, “It broke.” [Chuckles] Right?

[Laughter]

**SAM:&nbsp;** Right.

**CHUCK:&nbsp;** So, that's one thing that I'm curious about as you're writing these tests, is do you test the error messages?

**JESSICA:&nbsp;** I do.

**CHUCK:&nbsp;** It told them how to fix it, test.

**JESSICA:&nbsp;** Yeah. I mean I might not test the exact test but I'm going to be like, the error message contains the thing you typed wrong.

**SAM:&nbsp;** Yeah, I've done that at occasion. I don't know. I feel like at some point if I'm writing good enough error messages and I know… like I know exactly what's wrong and how you can fix it but I'm not going to fix it for you. You got to go and do that. I struggle with, “Well, why don't I just make my code smarter so it doesn't need to display this error message?”

**CHUCK:&nbsp;** [Chuckles]

**SAM:&nbsp;** Is there a balance there?

**JESSICA:&nbsp;** Sometimes you can. Yeah, there totally is. But you can start with supplying the information. So, one of the things that I want to do is when I identify a particular failure that's common, step one is can I identify that in the code? Can I recognize when this happens? And then print that to a log. Because if I print it to a log that goes into Splunk, then I can count how many times it happens. And from there, I could say…

**SAM:&nbsp;** And how much you have to care.

**JESSICA:&nbsp;** Right. How much do I care? Which of these is worth putting in the work to automate the solution as well? Or there's like lots of in between too. There's link to the documentation that tells you how to solve this. There are a lot of different levels of help short of automating it completely.

**SAM:&nbsp;** Wait, documentation?

**JESSICA:&nbsp;** Internal documentation. Yeah.

**SAM:&nbsp;** I'm joking.

**JESSICA:&nbsp;** Which is in our internal lingo. That's a little easier than writing public-facing documentation.

**SAM:&nbsp;** Yeah, totally.

**CHUCK:&nbsp;** I kind of want to dig into the external… I mean you're talking about a deployment process so there are all these external things that you're touching, right? So, how do you write your tests around things that you're touching that aren't part of the local system?

**JESSICA:&nbsp;** I fake them.

**CHUCK:&nbsp;** Okay.

**JESSICA:** Mostly.

**CHUCK:&nbsp;** And that is different from mocking or stubbing how?

**JESSICA:&nbsp;** Okay. Alright, alright, alright. Say for instance we interact with Git for instance. I'm going to add a fake Git client or I'm going to add a Git client interface that knows how to do things like tell me what branch we're on or tell me whether this commit is in the history of this other commit. And I'm going to make those into methods instead of specific Git commands. And then I'm going to be able to write an implementation of that Git client interface that fakes that out. That I can have it behave however.

Now some people will use a mock to implement this. And the mock… so, the evil thing about the mock is you tell it, “Okay, expect this method call with these arguments and then return this other thing.” And it's like making sure that method call happened exactly so. But that's not what I'm trying to test, exactly what method was called on what. Because I don't actually care. I care about the result. And if I can put the interface at a meaningful point that describes the outside interaction and then fake the outside stuff just enough to get my code to work, then I'm not testing the implementation detail of exactly what method. I'm being explicit in my test about what I care about and not trying to specify every method call everywhere. Ah. Does that make sense?

**CHUCK:&nbsp;** I'm trying to think of a way to restate what I heard…

**JESSICA:&nbsp;** Alright. Yeah.

**CHUCK:&nbsp;** And then you can tell me that I got it wrong. And essentially what I heard was that instead of creating a mock object that is essentially duck typed to whatever APIs I'm going to call, you actually create some kind of object or class that implements the interface that you're going to need and then you effectively inject it into whatever you're testing so that it doesn't matter necessarily that I know as part of my test that the internals of what I'm testing are going to call these methods on this mock object. Instead I just have a fake that responds to all the right things. And so, it just does what it's supposed to do without me having to explicitly tell it that these methods exist every time I want to test that particular interface.

**JESSICA:&nbsp;** Yeah, that is true. Let me try again.

**CHUCK:&nbsp;** [Laughs]

**JESSICA:&nbsp;** Either way I'm going to set up an interface that separates my code from the outside world. And there's a real implementation that talks to the actual outside world. And then my preference is a fake that mimics the outside world just enough to let my code work. A mock on the other hand is very specific about exactly what method my code must call with precisely these arguments and precisely this number of times.

**CHUCK:&nbsp;** [Inaudible]

**JESSICA:&nbsp;** And I don't actually care about that. I…

**SAM:&nbsp;** Mm, okay.

**JESSICA:&nbsp;** I want my fake to just let my code work so I can test what I'm trying to test. I don't want to be any more specific than that.

**SAM:&nbsp;** Okay. So, I actually can see a point where I would use both of those. And in a case where I'm directly testing… like say I have an adapter that calls out to another microservice. So in my code, all of my Ruby code calls to this one adapter and then that adapter makes HTTP calls over the network. So, when I'm testing that adapter directly I want to mock it. I want to say that when I call this method it makes these three calls in sequence with these parameters because I'm being overly cautious about [chuckles] what this thing is going to send across the network. So, when I'm looking at that adapter directly then yeah, I want to use mocks. But everywhere else where the adapter is just incidental, yeah totally I will replace that with a… or I'll just in Ruby I'll just stub out a method on that adapter and say, “It doesn't matter if this gets called or not.”

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** Does that maybe capture what you're going for?

**JESSICA:&nbsp;** Yeah. Except I don't test my adapters. I mean…

[Laughter]

**JESSICA:&nbsp;** I don't unit test my adapters. I will integration test them with the real method, the real thing.

**SAM:&nbsp;** Really? I avoid the remote integration tests as much as possible because maybe that's my background of working in places where it's hard to set up a production-like environment for testing. And it's just painful to run those tests. I don't know.

**JESSICA:&nbsp;** Yeah, it is. And I won't run them nearly as often. But the adapter hardly ever changes. And really, what I care about with that adapter is that the other service is still doing what the adapter expects.

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** Which I find much more likely to change.

**SAM:** Makes sense.

**JESSICA:&nbsp;** Yeah, so I tend to even if it's something I run by hand, I tend to only integration test that adapter code.

**SAM:&nbsp;** Interesting.

**JESSICA:&nbsp;** And that gets to exploratory tests and what was the other thing you mentioned, Sam?

**SAM:&nbsp;** Oh yeah. The…

**JESSICA:&nbsp;** Characterization tests.

**SAM:&nbsp;** Characterization tests, yes.

**JESSICA:&nbsp;** Exploratory tests?

**SAM:&nbsp;** Yeah, that was it.

**JESSICA:&nbsp;** Yeah. Maybe that's the same thing. But that's writing tests for someone else's code, right?

**CHUCK:&nbsp;** Mmhmm.

**JESSICA:&nbsp;** For a library, for a service. It's about testing your own assumptions about someone else's stuff?

**CHUCK:&nbsp;** Yeah. I think if there is a difference, the characterization tests are casting that wider safety net, in my opinion anyway, and the exploratory tests are more about what does this actually do and I'm probably going to throw these away once…

**JESSICA:&nbsp;** Mm.

**CHUCK:** I get the understanding…

**SAM:&nbsp;** Mm, yeah.

**CHUCK:** That I'm seeking from them.

**SAM:&nbsp;** Oh yeah, there's a…

**JESSICA:&nbsp;** Whereas the characteriz-… go ahead.

**SAM:&nbsp;** I was saying there's a really interesting idea, the idea that you can write a test and then throw it away. It took me so long to get comfortable with that.

**JESSICA:&nbsp;** [Laughs]

**CHUCK:&nbsp;** I did all of that work.

**SAM:&nbsp;** It's like I've invested this time in this test. And I have to keep it and then make everybody run it forever.

**JESSICA:&nbsp;** Ah, the sunk cost fallacy. It's everywhere.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** Deleting code including test code is great.

**CHUCK:&nbsp;** Oh, yeah. And I find that with the sunk cost fallacy I find myself falling for it. So it's like, “Oh yeah, I won't fall for it over here because I understand this now,” and the, another area of code I'll, “Oh, I'm falling for sunk cost fallacy all over again.”

**SAM:&nbsp;** Well, that's the thing about cognitive biases. The reason that they're called cognitive biases or they're categorized as such is that even when you're aware of them you can still fall prey to them very easily.

**JESSICA:&nbsp;** Oh yeah, you can't get rid of them. You can't eliminate these biases. What you could do is recognize them and compensate for them.

**SAM:&nbsp;** And develop habits that maybe steer you around the worst of it. But yeah.

**CHUCK:&nbsp;** Well, the other thing is though is that I find that I create coping mechanisms for them in one place and then I fall for the same cognitive bias somewhere else.

**SAM:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Because the coping mechanism doesn't apply for whatever reason in that other place.

**SAM:&nbsp;** Right.

**CHUCK:&nbsp;** So, I have to come up with a new one for the other circumstance. And so yeah, so I get over the cognitive bias of the sunk cost fallacy for tests. And then there's a method in one of my classes that I just can't get myself to throw away.

**SAM:&nbsp;** Yeah. So, one of the habits that I have that incidentally helps with that in general is that here on my desk I have a mason jar full of water. And I drink several of these a day which means that I have plenty of opportunities throughout the day to step away from the computer.

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** The bathroom. It's the new smoke break.

**SAM:&nbsp;** Totally. And it gives me a chance to go…

**JESSICA:&nbsp;** [Laughs]

**SAM:&nbsp;** Wait, why am I doing this?

[Laughter]

**JESSICA:&nbsp;** It is. It [inaudible].

**SAM:** I don't have to do this.

**JESSICA:&nbsp;** Yeah. I like pairing for that, too. Because then there's twice as many people who are going to be like, “Wait, wait, wait. Why are we doing this again?”

**SAM:&nbsp;** Totally. So, I was going to bring up a question earlier on in your rant Jessica about your experience of inheriting a project that had zero tests. And I think once you've got some tests in you have a wedge. It's the camel's nose in the tent as the expression goes.

**JESSICA:&nbsp;** You know what's worse than zero tests?

**SAM:&nbsp;** [Inaudible] tests?

**JESSICA:&nbsp;** Like three tests that don't actually test squat.

[Laughter]

**SAM:&nbsp;** Yeah, okay.

**JESSICA:&nbsp;** A file named IntegrationTest.rb that has like…

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** One unit test and doesn't run in the build.

**SAM:&nbsp;** [Laughs] This is true.

**JESSICA:&nbsp;** The appearance of tests…

**SAM:&nbsp;** [Inaudible] testing.

**JESSICA:&nbsp;** Is worse than none.

**SAM:&nbsp;** [Laughs] Fair enough.

**CHUCK:&nbsp;** Hypocritical code. Is that it?

**JESSICA:&nbsp;** [Laughs]

**SAM:&nbsp;** But what I was going to say is a couple of years ago Katrina Owen gave this wonderful, wonderful talk called 'Therapeutic Refactoring'. And one of the major takeaways for me from that talk was this idea of writing characterization tests which when I sat down and actually tried to do it, I wound up literally going down and walking through every line of code. And if I hit a branch or a line that I hadn't executed yet I would sit down and I would write another test and craft my inputs in such a way that that line of code would be reached. And then I would write a test for the expected output from there. Is that something that you tried with this project or did you have a different approach for that?

**JESSICA:&nbsp;** Very roughly yes. I mean, we didn't go to that level of detail. We started with, “Okay, can we make a test that executes most of this code?” And then gradually as we start changing the rare cases, we've had to add options for stuff like, “Okay, I know you're in QA but pretend you're in prod so that you'll actually hit…”

**SAM:&nbsp;** [Laughs]

**JESSICA:** “this code path that's only checked in prod.”&nbsp; We have done that. And we've had to make code modifications to make that even possible.

**SAM: &nbsp;** Oh, yeah.

**JESSICA:&nbsp;** Which is fun.

**SAM:&nbsp;** Okay.

**JESSICA:&nbsp;** Yeah, so I guess when you're going back and adding tests even though this is the code we're maintaining it's still a characterization test at that point because I don't know what it does yet.

**SAM:&nbsp;** [Laughs] Right.

**JESSICA:&nbsp;** Yeah. You brought up something much earlier Sam that I wanted to get back to. And that was refactoring in order to learn the code. So, software is a system but it's not a system that can change by itself. We have to become part of its system.

**SAM:&nbsp;** Mmhmm.

**JESSICA:&nbsp;** Part of watching it run and part of changing it and then it gives us output. And then that changes our opinions. And I really feel like when I start maintaining an application or start at a new company especially, I need to integrate myself into that system. And changing the code is a beautiful way to do this. My coworker Ben remarks that often he will refactor a bunch of code that he's learning when he's learning the code and then throw that away. Because the main point of refactoring was to help him explore it.

**SAM:&nbsp;** Oh, yeah.

**JESSICA:&nbsp;** And the refactoring isn't even that important.

**SAM:&nbsp;** Totally. Yeah, it's… you just phrased that in a very engineering sort of way about talking about a system and understanding the system and how it works and how to change it. And I feel like there's another metaphor that applies equally well, at least the way I approach things. Is when I'm going into a new codebase, this is an essay that somebody has written about how a thing happens. And hopefully they included a little bit about why it happens and why we care.

So, as I'm going in and I'm looking at somebody's code they've usually written it in their particular voice. And my voice is often very different from most of the other people that I work with. And so, I have to try and spend some time understanding what do they mean when they use this phrase instead of the one that I would use? Is there an important difference there? Or is it just a reasonable dialect? When they structured their argument this way, was it because that was the way that made sense or was it because that was just the phrasing that they knew? And so for me, refactoring is basically going over something with a red pen and just trying to edit it and see I can make sense of it that way.

**JESSICA:&nbsp;** Oh, that's beautiful. So, that metaphor explains why we hate very specific code style guidelines. Because it's squashing…

**SAM:&nbsp;** Or why we hate [other people's] code?

[Laughter]

**JESSICA:&nbsp;** Both, yeah. Yeah, we hate other people's code. We want them to follow in our style. But yet when we tell someone what style to use, we're squashing their voice.

**SAM:&nbsp;** Mmhmm. Which is why when I pair with people and I do something differently, I try to say not, “Here's what you should do,” but I will say, “Here is what I do. Here is why I do it,” and if I can think of it, “Here's why you might not want to in your case.” So, it's not like I'm telling somebody what to do. It's I'm trying to give them the tools to figure out for themselves which voice to use.

**JESSICA:&nbsp;** Hmm. Today I was listening to a biography of Igor Stravinsky and we've got to the part where Stravinsky who started the modern era in music with Rite of Spring, with very weird asymmetrical rhythms and just bizarre sounding music. It's not pretty. It's interesting.

**SAM:&nbsp;** [Chuckles]

**JESSICA:** And then he goes back and he starts orchestrating this Italian baroque composer's work and you've got this baroque music that's a total… it's like a completely different musical language. But it's still got Stravinsky's voice in it.

**SAM:&nbsp;** Mmhmm.

**JESSICA:&nbsp;** When now and then you think it's 4/4 time but once in a while a measure has five beats in it. And that is an example of him refactoring the music into his voice which updates it to modern style.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** Probably would have driven the Italian composer nuts.

[Laughter]

**SAM:&nbsp;** Probably.

**CHUCK:&nbsp;** Ma dai! It's interesting.

**JESSICA:** Yeah, that's interesting, the code style as voice. Because my tendency to write interfaces for things or to think of Ruby as having an interface even though that's not a formal thing in Ruby comes from my Java background. And from Scala and even more so from doing Elm I tend to write in a very testable style even when I'm not writing tests. Which saves my butt when I go back and want to add tests later.

**SAM:&nbsp;** Yeah. And one other thing that had occurred to me about that was that Sandi Metz talks a lot about writing roles and not objects which I think is really just maybe a more Ruby friendly way of saying interface, because…

**JESSICA:&nbsp;** [Laughs]

**SAM:&nbsp;** You know, when we hear terms from Java we break out in hives. But yeah, I was going to bring this up earlier about how in Java if you want to insert a different object into your test that plays the same role as your adapter you have to implement the entire interface with that other thing.

**JESSICA:** Oh, yeah. In Ruby I can be totally lazy and implement only the methods that it's actually going to call.

**SAM:&nbsp;** Right. And if you're going to do that you may as well do it in the beginning of the test with a couple of lines of well-crafted RSpec. And that's just what I'm used to. But yeah, as you talked about I'm like, “Oh wait, that's right. If you're used to something else then that totally makes sense and that's totally valid.”

**JESSICA:&nbsp;** Yeah. I tend to do it by just defining a class rather than using RSpec and mocking language just because, let's just say I'm not intimately familiar with RSpec and the DSL and the mocking DSL. But I know how to do classes. Everybody knows how to do classes in Ruby.

**SAM:&nbsp;** [Laughs]

**JESSICA:&nbsp;** Whoever comes back and reads my code will know what that is doing because it's just a class. It's not anything sneaky. It's not as concise. But it's explicit.

**SAM:&nbsp;** Yeah.

**JESSICA:** So, that's my style. And I'll just like run the test. Oh look, I've got a method not defined. Guess I'll stick that on my fake.

[Laughter]

**SAM:** Right.

**JESSICA:&nbsp;** So, I get to do exception-driven testing.

**SAM:** Yeah. And I feel like the difference between the style that you're talking about and maybe even also the difference between people who prefer RSpec and the people who prefer MiniTest is again maybe one of style and voice. Because I'm used to RSpec because it gives me a lot of packaged functionality that lets me specifically tweak things and run things the way that I want to. But a lot of the value proposition that RSpec has is that it lets you write tests that are expressive in a more English-like way. There's still code. But you can read through them and it almost maybe sounds like English as you read it. Whereas maybe with MiniTest you're thinking much more in terms of methods and classes. And that is okay too, if that's how you think.

**JESSICA:&nbsp;** It is a different voice. And personally, especially after writing Elm I don't want my code to read like English anymore. I want it to read like code.

[Laughter]

**JESSICA:&nbsp;** I want my Ruby to look like Ruby. [Chuckles] And a subset of Ruby that everyone who writes Ruby understands. Oh well, where by everyone I mean me.

**SAM:&nbsp;** Oh, naturally.

**JESSICA:&nbsp;** Yeah. [Laughs] But yeah, that's a beautiful way to think of it.

**CHUCK:&nbsp;** I just like the idea of exception-driven test-driven development.

**JESSICA:&nbsp;** [Laughs] Well yeah, I'm writing a characterization test. What's supposed to happen here? I'll just find out what does.

**SAM:&nbsp;** Yeah, it's funny. I also learn a lot about my own style from inflicting it on other people.

[Laughter]

**SAM:&nbsp;** By which I mean like when I'm pairing with somebody I have this really terrible tendency. I've been pair programming for over 10 years. And to this day I still have this tendency to just grab the keyboard and run with it. So, when I'm doing that. I sometimes find that I'm writing a test and I'm like, “Oh, we'll stub this thing. And we'll mock that thing and we'll do an [ordered] expectation here.” And my pair is like, “What are you doing?”

[Laughter]

**SAM:&nbsp;** I mean, that really sort of emphasizes for me this idea that for people who are earlier on in their journey of understanding testing at all and test-driven development and the techniques used there in particular, it's really confusing. We don't know what the difference is between a double and a mock and stub and a spy and a fake, right? And I could tell you what each of those things are. But they're all very jargon-y and they're hard to tell apart when you're new.

**JESSICA:&nbsp;** Justin Searls has a great talk on that.

**SAM:&nbsp;** Yeah, I like a lot of stuff that Justin has to say about testing.

**CHUCK:&nbsp;** Yeah.

**JESSICA:&nbsp;** Oh, yeah.

**SAM:&nbsp;** So, are there ways that… is it worth going into that for maybe newer listeners?

**CHUCK:&nbsp;** Yeah, let's do that and then let's do picks.

**SAM:&nbsp;** Okay.

**JESSICA:&nbsp;** We did mock and fake earlier, right?

**CHUCK:&nbsp;** Yeah.

**JESSICA:&nbsp;** Yeah.

**SAM:&nbsp;** Yeah. Well, we didn't exactly define what a mock was. So, I can take a stab at that one and then we can talk…

**JESSICA:&nbsp;** Good idea. Go for it.

**SAM:&nbsp;** Talk about something else. But so, in my experience a mock is… so, I think all of these things fall under the category of a double which is to say it's an impostor object that you insert into your test because it's not the thing you're testing directly. It's, and this is a unit testing technique. When you're writing unit tests you're interested in the class that you're testing and all of its collaborators are sort of peripheral. So, in order to make your tests go faster we have this desire to replace its collaborators with things that don't actually do any work. They just reply with canned answers.

And so, a mock is one of those kinds of doubles. And the thing that makes a mock a mock is that it has a certain set of expectations that it will receive these messages possibly in this order or not, with these arguments. And you can be more or less flexible about that, but that's the idea is that it expects certain things to happen. And when those things don't happen it will complain and it will fail your test for you.

So, somebody else want to take stubs or fakes? Well, we talked about fakes.

**CHUCK:&nbsp;** So generally, stubs when I think of stubs, stubs are you take an existing object and instead of putting in an object that doesn't do the work you just put in something that captures that message or that method call and does effectively the same thing. It doesn't do the work.

**SAM:&nbsp;** Yeah. And I guess that's a very Ruby thing because we can redefine methods at runtime.

**CHUCK:&nbsp;** Yes.

**SAM:&nbsp;** Because we can say, “Here, take this real object that does everything else you want. But that little thing, we're going to skip that.”

**JESSICA:&nbsp;** Oh, yeah. That's right. In Ruby you can replace just one method.

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** Yeah, it lets us do that.

**CHUCK:&nbsp;** [Inaudible] classes.

**JESSICA:&nbsp;** Yeah, I don't do that.

**CHUCK:&nbsp;** [Laughs] You just, the way you said that…

**SAM:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Was like, “That just sounds gross.”

**SAM:&nbsp;** But I'm not judging you.

[Laughter]

**JESSICA:&nbsp;** Some of our tests that other people stub out things like time now.

**SAM:&nbsp;** Yeah.

**CHUCK:&nbsp;** Uhuh.

**SAM:&nbsp;** Which is better than not, but yeah.

**JESSICA:&nbsp;** Eh, it's… oh. It is better than like not testing. But it causes problems in some weird places.

**SAM:&nbsp;** Yeah. So…

**JESSICA:&nbsp;** We've had to remove a lot of that stubbing from a lot of our code.

**SAM:&nbsp;** Well actually, that…

**CHUCK:&nbsp;** Oh, come on. Monkey-patching actual core Ruby classes never causes problems.

**JESSICA:** [Laughs]

**SAM:&nbsp;** Thank you, time-cop.

**CHUCK:&nbsp;** [Chuckles]

**SAM:&nbsp;** So, that brings up an interesting point. And I had a little Twitter micro-rant about this last week. Which is that if you're stubbing time now to return a specific time, that's a sign that maybe you have a dependency on the current time. And rather than going out to the time class and stubbing now which by the way will not work if your code calls Time.zone.now or Time.zone.current…

**CHUCK:&nbsp;** Right.

**SAM:&nbsp;** You have a bunch of other different things that you have to think about which one they're going to use, maybe that's a sign that you should have a clock object that you pass around to everything that has a dependency on time. And then testing is much easier because if you have something that it tests that five seconds after this happens then that happens, you could stub Time.now twice. You could sleep, which would be terrible. Or you could just inject a clock that the first time you call something you inject a clock for at time of 10 seconds ago and then the second time you call it you inject a different clock which has a time of five seconds ago. And your test reads really well. And your code has abstracted out that dependency on time.

**JESSICA:&nbsp;** Yeah. Because time is part of the outside world.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** And if you're looking to code in a functional style which the beauty of that is that it's inherently testable…

**SAM:** [Chuckles] Right.

**JESSICA:&nbsp;** You need to stub out everything that's in the outside world and pass that in either to the method or the class constructor. Or injected some weird Ruby mutable way. And that gives you an explicitness to your class and method signature that says, “This is what I depend on in the outside world.” And then most of your tests maybe default to just whatever, give it the current clock. Give it the real clock. I don't care. It's not relevant to this test. And when you do fake it out, then it's super clear what you're testing and what dependency that test has on the outside world.

**CHUCK:&nbsp;** There' are some pretty awesome examples of this in 'Practical Object-Oriented Design in Ruby' by Sandi Metz.

**SAM:&nbsp;** Yeah.

**CHUCK:&nbsp;** And I would definitely refer people to that. Because she does a ton of this kind of testing with dependency injection where it effectively does what Jessica just described.

**JESSICA:&nbsp;** Sweet.

**SAM:&nbsp;** The only other term I wanted to define was one I used earlier that was spies.

**CHUCK:&nbsp;** Yeah, spies is something…

**JESSICA:&nbsp;** Ooh, spies.

**CHUCK:&nbsp;** That I'm not as familiar with.

**JESSICA:&nbsp;** Ooh, I use those, too.

**SAM:&nbsp;** Tell us about them.

**JESSICA:&nbsp;** Oh, spies are like the verification half of mock. So, mocks really do two things. They both, you specify what they're going to return and they check that you called it a certain way. The spy is like, “I'm going to keep track of what methods were called with what arguments. And then I'm going to give you that data for your assertions,” right?

**SAM:&nbsp;** Yeah, totally. And I don't know if this is true. But maybe it's just that I only encountered it recently. But it feels like that's a more recent introduction to at least the Ruby testing world. Is that accurate?

**JESSICA:&nbsp;** I don't know.

**CHUCK:&nbsp;** The first place I saw them was in JavaScript. And they tended to come out of more of the functional style testing.

**SAM:** Mm.

**CHUCK:&nbsp;** And so, I've seen them in Ruby but I don't see them as much because yeah, for whatever reason they just, I don't know. But I may be looking at different code from everybody else. But in my experience they're not used as often as mocks and stubs. And I don't know if that's because mocks and stubs are more established and more widely accepted. Because of that or if spies are actually just a better use case in other more functional languages.

**SAM:&nbsp;** Well yeah. So, I became aware of them when they were added to RSpec recently. I might have heard of them before that. But really, it was RSpec that caused me to pay attention to them. And what I found with spies is that they avoid a certain subtle problem with mocks which is that if you have… if you set up a mock in a test you say, “I expect this, this, and this to happen.” And then you call your code which supposedly causes this, this, and this to happen. And then in the third phase of your tests you do verification. So, you've basically got several assertions embedded in a single test case. And for better…

**JESSICA:&nbsp;** Ooh, yeah.

**SAM:&nbsp;** For better or worse I do that a lot. What I've found is that if you have a mock followed by an explicit assertion, if the explicit assertion fails you will not find out that the mock also failed. Because mocks only do their verification after the test is done and is cleaning up. And they are checked to say, “Hey, did everything happen that I expected to happen?” Whereas with spies you have more explicit control. You could say, “Here have a spy and it's going to record everything that happened.” And then later I can say, “Oh by the way, first thing I expect is that this thing actually got that method. And then assuming that it got that then I expect this other had this resulting value.” I don't know if…

**JESSICA:&nbsp;** Yeah.

**SAM:&nbsp;** That makes a lot of sense. But that's what I see as their main advantage over mocks.

**JESSICA:** I like the explicitness of that. It's kind of the same thing with the fakes of, “I've got this default fake that's just going to work. But for this test it's important that it return this thing.”

**SAM:&nbsp;** Yeah.

**CHUCK:&nbsp;** That's really interesting. I'm going to have to go dig into it. I didn't realize that they had been added to RSpec.

**SAM:&nbsp;** Yeah.

**JESSICA:&nbsp;** Okay. Chuck really wants to do picks.

**CHUCK:&nbsp;** Ah, yeah.

**SAM:&nbsp;** Chuck is like on a schedule or something.

**CHUCK:&nbsp;** Yeah. I've got three more podcasts I'm recording today. And the next one starts in about 15 minutes. So Jessica, do you want to start us off with picks?

**JESSICA:&nbsp;** Okay. I have a pick today. I read this article yesterday that just, I found super fascinating. So, the article is about politics in the US. But what's interesting about it is it's about the political system and it questions, it brings up maybe term limits and campaign finance reform. Maybe those are shooting us in the foot, because maybe the consolidation of power in the political parties was important to actually getting anything done. And we've moved more toward actual democracy with direct… many voters having more direct influence. And maybe, the system doesn't work smoothly like that. So, its' really fascinating from a systems thinking perspective. I'll link to the article. It's in The Atlantic and it was called 'How American Politics Went Insane' I think, which is kind of a flashy title. It's really not as incendiary as the title.

**SAM:&nbsp;** That implies that American politics was ever not insane.

**JESSICA:&nbsp;** Relative, it's all relative.

**CHUCK:&nbsp;** [Laughs] Oh, I could talk about that for hours. I think it'd be really interesting…

**SAM:&nbsp;** Let's not.

**CHUCK:&nbsp;** To dig into that. But yeah, don't have time. So…

**SAM:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Sam, do you have some picks for us?

**SAM:&nbsp;** Yeah, I have a couple quick ones. Let's see. The first of these is actually a shout-out to a listener, Alex Kitchens. Dave tweeted something about Minecraft a couple of weeks ago. And Alex replied that he plays Minecraft while listening to Ruby Rogues. And I just thought that was kind of an amusing combination. And so, I wanted to call out his tweet. I'll leave a link in the show notes.

And then the other thing that I wanted to pick is actually something really old. This is from May 2007 and it was tweeted during RailsConf 2007 which I happened to be at. This is chromatic who is well-known in the Perl community. And he wrote this little blog post. It's called 'The “Is it a DSL or an API?” Ten Question Checklist'. And this battle has long been fought and lost but this is a nice, cute clever snarky way of dissecting the difference between what Rubyists call a DSL and what everybody else might just call an API. And I'll link that in the show notes as well.

And them's my picks.

**CHUCK:&nbsp;** Awesome. I've got a couple of picks here. The first pick that I'm going to pick is a program that I use pretty frequently for the stuff that I do. It's an FTP and S3, et cetera, et cetera client. It's called Transmit. And it's just really nice for being able to move files around the internet and things like that. Very, very handy.

I'm also going to pick another tool that I use. I've started doing team meetings every week which Mandy and some of the other folks who help me get the stuff done here for the podcasts. And we use Zoom. It's kind of like GoToMeeting I guess, in the sense…

**JESSICA:&nbsp;** I love Zoom.

**CHUCK:&nbsp;** Yeah. You can do video chats. You can share screens. You can schedule calls, all that stuff.

**JESSICA:** You can share screens while you see the other people.

**SAM:&nbsp;** [Gasps]

**CHUCK:** So, I'm going to pick Zoom because it's just, it's really handy. There have been a couple of times where it's like, “Okay, well what exactly is the problem you're running into?” and then yeah, you pull up the screen. They share the screen, blah, blah, blah. And yeah, we get stuff solved. So, I'm really liking it. So anyway, those are my picks.

And yeah, I also want to just shout out about Rails Remote Conf. If you want to speak, the call for proposals is still open. And yeah, super excited to hear what folks have to say.

And with that I guess we'll wrap up and we'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world's fastest CDN. Deliver your content fast with CacheFly. Visit C-A-C-H-E-F-L-Y dot com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**


