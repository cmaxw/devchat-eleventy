---
layout: layouts/post.njk
title: >
  264 RR Code Hospitality with Nadia Odunayo
date: 2016-06-15 07:00:23
episode_number: 264
duration: 55:01
audio_url: https://media.devchat.tv/ruby-rogues/RR264CodeHospitality.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## Get your [Ruby Remote Conf](https://allremoteconfs.com/ruby-2016) tickets!

&nbsp;02:42 - Nadia Odunayo Introduction

- [Twitter](https://twitter.com/nodunayo)
- [GitHub](https://github.com/nodunayo)
- [Ignition Works](http://ignition.works/)
- [Nadia Odunayo: Playing Games in the Clouds](http://confreaks.tv/videos/railsconf2015-playing-games-in-the-clouds)
  05:00 - [Ruby Book Club](http://rubybookclub.com/)11:20 - [Nadia Odunayo: The Guest: A Guide To Code Hospitality @ RailsConf 2016](https://www.youtube.com/watch?v=hHzWG1FltaE)17:23 - Collaboration and Pairing: Guest and Host Roles; Driving and Navigating
- [Coderetreat](http://coderetreat.org/)
- [Ruby DCamp](http://rubydcamp.org/)
  24:42 - Perspectives and Mapping
- [Sam Livingston-Gray: Cognitive Shortcuts: Models, Visualizations, Metaphors, and Other Lies @ Cascadia Ruby Conf 2014](http://www.slideshare.net/geeksam/cognitive-shortcuts-models-visualizations-metaphors-and-other-lies-cascadia-ruby-conf-2014)
- [Cortical Homunculus](https://en.wikipedia.org/wiki/Cortical_homunculus)
- [Peter Gardiner Motor and Sensory Homunculi](http://imgc.allpostersimages.com/images/P-473-488-90/72/7231/LXWN100Z/posters/peter-gardiner-motor-and-sensory-homunculi.jpg)
  41:04 - [Ruby Central's Opportunity Scholarship Program](http://rubycentral.org/community)
- [Space Babies](https://www.spacebabies.nl/)
  &nbsp;Picks &nbsp;
- [Case Studies in Apprenticeship](https://medium.com/case-studies-in-apprenticeship/latest) (Coraline)
- [Everything's an Argument by Andrea A. Lunsford and John J. Ruszkiewicz](http://www.amazon.com/Everythings-Argument-Andrea-Lunsford/dp/1457606062) (Sam)
- [RIF6 Cube 2-inch Mobile Projector](https://www.amazon.com/gp/product/B00QXS8L6I/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) (Chuck)
- [Nonviolent Communication: A Language of Life by Marshall B. Rosenberg](http://www.amazon.com/Nonviolent-Communication-Language-Marshall-Rosenberg/dp/1892005034?ie=UTF8&*Version*=1&*entries*=0) (Nadia)
- [Robert Frank on Dinner Table Economics](http://www.econtalk.org/archives/2016/01/robert_frank_on_3.html) (Nadia)
  &nbsp;See Also
- [Ruby Rogues Episode #190: Apprenticeship with Joseph Mastey and Jill Lynch of Enova](https://devchat.tv/ruby-rogues/190-rr-apprenticeship-with-joseph-mastey-and-jill-lynch-of-enova)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It's totally free for users. And when you're hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the Ruby Rogues link, you'll get a $2,000 instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**_[I'm excited to tell you about a new sponsor to the show, Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to debug issues, or a million alerts flooding your inbox ruining your day. With Rollbar's full-stack error monitoring, you get the context and insights and control you need to find and fix bugs faster. It's easy to install. You could start tracking production errors and deployments in eight minutes or less, or automatically create new issues in GitHub, JIRA, Pivotal Tracker, et cetera. They have a special offer for Ruby Rogues listeners. Go to Rollbar.com/RubyRogues to sign up and get the bootstrap plan free for 90 days. That's 300,000 errors tracked free. Give Rollbar a try today. Go to Rollbar.com/RubyRogues.]_**

**_[This episode is sponsored by Shippo. Shippo is a shipping API that connects you with over 15 different shipping carriers such as FedEx, UPS, USPS, Canada Post, and UberRUSH in one integration. You can use Shippo's APIs to compare shipping rates across carriers, print discounted labels, validate shipping addresses, track packages, and power your shipping in many different ways. You can connect directly to the API or use the provided Shippo Ruby gem to print your first label in a few minutes. The Shippo API is free to use. You only pay for the actual shipping label and a five-cent label fee. Sign up by going to GoShippo, that's G-O-S-H-I-P-P-O dot com slash Ruby Rogue to get six months with zero label fees.]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 264 of the Ruby Rogues Podcast. This week on our panel we have Coraline Ada Ehmke.

**CORALINE:&nbsp;** We'll talk more about that later.

**CHUCK:** Sam Livingston-Gray.

**SAM:&nbsp;** This space intentionally left blank.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv, also from RubyRemoteConf.com if you want to go check that out. We have a special guest this week and that's Nadia Odunayo.

**NADIA:&nbsp;** Hey. Well, you did well with the surname. [Chuckles]

**CHUCK:&nbsp;** [Laughs] I tried.

**NADIA:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** Do you want to introduce yourself really quickly?

**NADIA:&nbsp;** Yes. So, I'm Nadia. I'm a software developer and I'm currently running a company called Ignition Works where my co-founder Theo and I are just exploring ways that we can build worthwhile products mainly using Ruby.

**CHUCK:&nbsp;** Nice.

**CORALINE:&nbsp;** So Nadia, I have seen you around at a lot of Ruby and Rails related events. You seem to be really active in the community. What are some of the things you're doing right now?

**NADIA:&nbsp;** Ah, yes. I have been doing a lot of conference speaking lately. So last year, I spoke at my first big Ruby conference. And that was at RailsConf. And I spoke about game theory and distributed systems. So at the time, I was working at Pivotal on Cloud Foundry. And I studied Economics at university. And so, I was just interested in ways that game theory maps to different disciplines. And so, I saw a neat way or a cool opportunity to link those two disciplines in order to help people learn more about distributed systems. And following on from that I was then invited to be on the committee for RubyConf.

So, that was really cool because I got a chance to see behind the scenes with the CFPs, how that all works. And also I got a chance to curate a track. And so, the track that I did was Beyond Ruby. And so, following on in the vein of my game theory talk I wanted other people to submit talks that weren't directly related to Ruby or software but could help us become better developer or better colleagues. And so, that was really fun. And I recently spoke at RailsConf again last, a few weeks ago I think it was, or a month ago. And I saw you there, Coraline.

**CORALINE:&nbsp;** Yeah.

**NADIA:&nbsp;** And I'm now talking about something called code hospitality. So, that's more about how we can collaborate better and communicate better on our teams in order to build better software. And another slightly different thing outside of the conference circuit is that I've recently started the Ruby Book Club podcast with Saron. And so, we've been working through Avdi's 'Confident Ruby' week by week. We read an hour a week and then we have a call a week and discuss it. And then we share that with the rest of the Ruby community.

**CORALINE:&nbsp;** That is such an amazing idea. I'm really interested in that. And where did you get the idea for the Ruby Book Club? Was that you or Saron or did it emerge organically from a discussion? Or how did that happen?

**NADIA:** So, it's a cool story. So, Saron and I had always had conversations on Twitter but we'd never really spoken properly in person. And we had a lot of time to do that at RubyConf, the one in Texas last year. And we'd just been in a talk and we sat behind, it was lunch time but we sat behind and continued talking. And we both had this thing where I said “I've just started this company with Theo and I want to spend more time leveling up as a developer and focusing on my skills and not losing track of that.” And at the time Saron had just started her job at Microsoft running the tech academy. And she was finding less time for development, too. And so, we both had this desire to spend more time coding but were struggling, or we were concerned about how we were going to fit that in with our new roles. And we both also love reading. And I made a comment like, “Oh, I've had 'Confident Ruby' sitting there for ages and I've never opened it.” And Saron said, “Oh, I've had that book on my shelf for a long time, too.” I say on my shelf. We've both got digital copies of this book.

[Laughter]

**NADIA:&nbsp;** And so, I said to her, “Do you want to start a book club?” So, I have this weird thing. I read a lot of novels as well and I have this thing where I've got three or four friends where I have two-person book clubs with them.

[Chuckles]

**NADIA:&nbsp;** Where we'll read a book and then we'll meet up either, if we're in the same country we'll meet up for a meal and discuss it, or if we're not in the same country we'll have a Skype call. And so, this is just me setting up my sixth book club [chuckles] with Saron. But this one was a more technical focused one. And Saron jumps at the idea. She's been talking a lot over the last year or so about her reading code club study group and how you can get better at code by reading. And so, I thought that idea of having a book club would appeal to her but also given that we find ourselves with a lot of time taking up our jobs and other extracurricular activities, having that structure and someone to hold you accountable for would be a good way to ensure that we did it.

And then obviously Saron is very interested in podcasting and she does the successful CodeNewbie podcast. And so, she straightaway said, “Want to make it a podcast?” That was her second question. [Chuckles] And I hesitated. I was like “Oh, okay. But sure, let's do it.” And I thought that would be an interesting way for me to find out more about podcasting and also to share hopefully useful things with lots of other Ruby people who you wouldn't typically get the chance to discuss, sit down and discuss a book with every day.

**CHUCK:&nbsp;** Yeah, I'm actually going to see Saron at Podcast Movement in Chicago. So, we'll have to make sure that we visit Coraline while we're at it. [Chuckles]

**CORALINE:&nbsp;** Yeah, definitely.

**NADIA:&nbsp;** Oh, nice.

**CHUCK:&nbsp;** But that's really, really fascinating. And I'm a little curious. Do you know what books you're going to do after 'Confident Ruby'?

**NADIA:&nbsp;** No, we're not sure. We've had some people give us some suggestions. So, I started a little, a Google sheet of the ones that people have sent to us so far. So, we've had one for 'Eloquent Ruby'. We've had one for 'The Well-Grounded Rubyist'. And we've had someone else give me one I've never heard before which is called 'Ruby Under a Microscope' and the comment was that it might be heavy but it's the kind of thing that's easier to tackle in a book club type environment. So, I don't know whether you guys have comments on those three titles.

**CORALINE:&nbsp;** I really enjoyed 'Ruby Under a Microscope'. For a while I was doing a lot of tooling around code analysis. And that book really helped a lot because it really peels back the covers and shows you what's going on underneath the Ruby that we write. So, that was pretty interesting. It is a little heavier in content than some of the other books you mentioned. But I think it's really, really worthwhile.

**NADIA:&nbsp;** Okay, cool.

**CHUCK:&nbsp;** Oh yeah. I think we've actually done book clubs on most of those books if not all of them for Ruby Rogues.

**NADIA:&nbsp;** Yes, I remember when we first got published on iTunes and I went searching for Ruby Book Club and it was all the Ruby Rogues book clubs. I discovered all of those, too.

[Chuckles]

**NADIA:** I was like “Ah. Those are ones to [get away] and listen to afterwards as well and see how you guys did it. One of the things that Saron and I were worried about was if you don't have the book in front of you, can we make the podcast accessible and useful to you still? Or is it just something that we have to accept that unless you've got the book in front of you, it's going to be difficult to follow along. And we decided to go for “Let's try and make it so that you don't have to have the book in front of you to follow along.” So far, no one's complained. [Chuckles] At least not from what we've seen. But we also think that a high proportion of people are going out and getting the book and reading it, which is amazing.

And I actually just received a message from a listener this morning who normally reads the chapters in advanced based on the reading. We say on the website which sections are coming up next. And he messaged to say that for the first time, for the last episode, I listened to one section having not read it. And although I couldn't quite follow along with everything, when I then went to read the chapter it was much easier because I felt like I'd had an introduction or a primer to it. So, that was interesting feedback to get.

**SAM:&nbsp;** Oh, that's quite interesting, yes.

**CHUCK:&nbsp;** Yup.

**SAM:&nbsp;** I was going to say the other nice thing about a podcast is that even if you do leave somebody behind, it's a podcast. They can always pause it, go back and listen to it again after they've read the chapter or what have you. It gives people a lot of freedom in how they interact with it.

**NADIA:&nbsp;** Yes. That's what I do if I'm at conferences and I've seen technical talks or technical talks that I haven't managed to watch at the time. I often like to set some time aside, watch the talk but have my terminal open or have a code editor open and play along, pause and play along, and then go back to the talk. Which is something that you can't really do during the talk. Or you can but then you miss the experience of being there. So, it's nice to go away and watch the talk afterwards and interact with it and go at your pace.

**CHUCK:&nbsp;** Yeah, I wish I could pause live speaking. But it doesn't work.

**NADIA:&nbsp;** [Laughs]

**SAM:&nbsp;** I'm waiting for the technology to catch up.

**CORALINE:&nbsp;** Works but it's frowned upon.

**SAM:&nbsp;** [Laughs]

**CORALINE:&nbsp;** Oh, you can pause while you're speaking. But people don't like that very much.

[Laughter]

**CHUCK:&nbsp;** Only for emphasis, right?

**CORALINE:&nbsp;** Yeah.

**NADIA:&nbsp;** Yeah, dramatic effect.

**CORALINE:&nbsp;** You have to count the beats.

**SAM:&nbsp;** Well Nadia, I watched almost the entirety of your code hospitality talk before I had to go to bed last night. And I found it quite an interesting framing. I think there are a lot of ways that people find to inject empathy into their interpersonal team relationships. But I liked the way you mapped it onto the idea of being a host. Was there something that you missed out in the talk that you'd like to bring up or share with our listeners?

**NADIA:&nbsp;** I'll just go over the general premise of the talk for people who don't know anything about it. And I'll start with how the idea came about, because I think that helps to set the scene. And essentially I was pairing with Theo one day. So, Theo's the guy I work with. And there's a vast difference in our experience level. So, he's been doing Ruby and Rails for almost 10 years now. And I've only been doing it for a couple of years. So, I did a bootcamp at the end of 2013. And we're pairing. We pair all the time and it's inevitable that there are sometimes occasions where I'm slow to get something or I'm struggling. And if Theo can see the answer, and when you're also running your own company and you've got something that you need to deliver, there can be times of tension or frustration, just naturally.

But one thing I do which I'm really bad at is beat myself up. “Oh, why am I not getting this? Why am I being slow?” or that kind of thing. And I was beating myself up about this one particular concept at the time that I was struggling to pick up. And I was hanging onto this thing as “Why is this so easy for Theo and why am I struggling so much?” And that meant we couldn't progress. And Theo made the comment, “Oh, you've got to remember. Ruby on Rails is like my hometown.” And it wasn't in a territorial way but he was more trying to put across that perspective that I've lived here for a really long time. And it's expected that I get this and I know this like the back of my hand. But you don't have that same familiarity with it. And that's fine. And so, it just put it into perspective that my struggle was expected and was normal. There was nothing wrong with it. And through time and experience and playing around and exploring, that was how I would eventually get to a better understanding. And that comes with time. And it's not something you can rush.

And off the back of that, I started playing around with “Well, if you are going to someone's hometown and you think you might want to live there or you might want to move there, what are some of the things that your host can do to help you to either accelerate that learning or make you feel comfortable or put you in the right frame of mind? And what are some of the things that you can do to also help that process?” whether that's showing your host what you'd like. So, say you go to a new city, the host can be very accommodating but there might be something in particular that you want to see that the host didn't think of. And so as a guest, what are things that you can do like ask questions or talk about how you're feeling so that the host can better help you? And so, that's the general premise of where I was going with the talk.

**CHUCK:&nbsp;** I'm going to make sure everybody has clean towels.

**NADIA:&nbsp;** [Chuckles] Yeah, clean towels. [Laughs] And it's funny because at the beginning of the talk I ask people to think about a time when they've had a guest recently and did they do anything to make their stay more pleasant? And you always get funny comments like people saying, “Yeah. I did nothing. I ignored my guest.” [Chuckles] Or just to be funny. [Laughs]

**SAM:&nbsp;** I put a roof over their head. Isn't that enough?

**CHUCK:&nbsp;** I know, right?

**NADIA:&nbsp;** Yeah. I've had comments like that as well. [Laughs] And…

**SAM:&nbsp;** You have a [inaudible]. What more do you want?

[Laughter]

**NADIA:&nbsp;** Yeah. And so then, in the talk what I do is I sort of say, “Well, given this premise of your guest and a host, how does that help us when we think about onboarding? When we think about pairing? Working together on problems? And then when we think about feedback.” And so, we start with this idea of how do you set the tone right? What can you do so you can… this idea of, I start by talking about this idea of cleaning. But then I say… and so, I talk about you might clean your house. So yes, you might clean your codebase. But we all know it's useful to keep a clean codebase and we also all know that in reality your codebase is not going to be as clean or as perfect as you want it to be. But also, clean means something different to everyone else. But the more important thing is, how do you communicate the setting to your guests?

So, if someone turns up and there is a pile of mess in the corner which for whatever reason you may not have had the chance to tidy up, your guests might be thinking, “Oh, I wonder what's gone on there?” Or it might make them, depending on what it is, they might feel a bit uncomfortable about it. And so, I talk about how as a host, recognize what your guest might be seeing and thinking. And show them that you've thought about… so, show them that you're aware of it, because you're empathizing with what their impression might be. But also explain why things aren't quite as they might expect them to be.

And then there's also the message on the guest side, because it's a two-way thing, which is you don't go into someone's house and start throwing judgments around or making it seem like certain things haven't been thought of before. There's a whole lot of context and history that you're not aware of. And so, the message to the guest is ask questions. But you've got to give your host the benefit of the doubt and be respectful in the sense that there's a lot that you don't know that you're going to come to find out before you make certain judgments when you go into a place.

**CORALINE:&nbsp;** Nadia, I'm curious. Is this predominantly in the context of onboarding or pairing? Or exactly when is it most useful to think about this from a hospitality perspective?

**NADIA:&nbsp;** So, in the talk I start with onboarding and then I move into pairing. And it's not necessarily pairing all the time sitting with someone else. It could just be collaborating with people. But the thing I'm trying to get across is it's just a useful frame of mind for interacting with people in the workplace. And so, in the talk it's like, “Here's how that might map to onboarding. And here's how this might map to coding together. And here's how that might map to feedback.” And so, it's like this three different sections that I cover in the talk.

**CORALINE:&nbsp;** Got it.

**SAM:&nbsp;** One of the things that I really liked about your talk was the way you talked about guests and host roles being very fluid and how they change relative to different domains that you might be working in. And that really reminded me a lot of this model of pairing where people talk about a driver and a navigator and people having those same roles for the entire pairing session. And that's always felt very confining to me. The way that I tend to approach things is there's a lot more back and forth and I'll switch back and forth into teaching mode or exploration or learning mode, sometimes within the stretch of five minutes. And so, that bit of the talk really spoke to me. I liked how you give permission for people to change it up and go through different emotional states. That was really nice.

**NADIA:&nbsp;** Oh, cool. I'm glad you like that bit. Thanks. What got me thinking about that was this idea of familiarity. So, when I was first working through the talk I was concerned that people might think that the more senior person is always this host.

**SAM:&nbsp;** Right.

**NADIA:&nbsp;** And that the more junior person is always the guest. And then that was going to morph into teacher/student relationship all the time. And so, I wanted to make it clear that no, it's just a useful frame of mind. Because whether you've been doing it for one month or 10 years you bring value in different ways.

And so, it could be on the technical stance in the sense that… so for example, I remember when I started at Pivotal just after coming out of bootcamp. And within my first week I was working with someone who'd been doing software development for years. But he had never used Cucumber. And I'd learned Cucumber whilst at Makers Academy. It was a bootcamp in London that I did. And so, I found myself showing him how I was taught Cucumber and how we might use it in the current case that we were looking at. And so, I was the 'host' almost in that sense, which is like, “Hey, here's this ting that you might not know about. Here is how I've used it. And then how can you lend your experience to how you might use it for this project?” But also, it might be also in a non-technical sense.

So, even if for example… oh, and another example I've got in a technical sense is on another project I worked with someone who'd been doing iOS for around 5 years. I'd never done iOS development. But this person had also never done testing. And I'd only ever done… but I started to learn to code, it'd always been testing and TDD. And so, whilst we were working together I was the one that was more familiar with testing. And he was more familiar with iOS. And so, just having that frame of mind of I'm your guide in this sense and you're my guide in that sense and here's how we can communicate to get to where we both need to be.

And it's interesting when you spoke about pairing and this idea of if someone is always the driver and another person is always the navigator or if the roles don't switch. So, when working with Theo we recently realized that a lot of the time he would write the specs and then in the interest of switching it up I would write the implementations. What I realized that was happening internally with me was that I would be thinking in my head Theo knows how… it'll be like it became rather than an equal pairing, in my mind it became like there's an answer that's in Theo's head. That's he's got the answer and now I've got to make this test pass. And making this test pass is getting to the right answer, i.e. what's in Theo's head. But of course that's not what the right answer is and it's not that there's one right answer either.

And so, it was this idea of how we've restructured our pairing to a more ping-pong style which is he writes one test, I write the implementation and then write the next failing test. And that made the pairing feel more equal on both sides. Because it wasn't like one person was always trying to fix things based on an idea that someone else had. It was more like we are doing the similar things and we're spreading out that burden almost.

**SAM:&nbsp;** Yeah, and that gives you both the freedom to move things in unexpected and interesting directions, which is a lot of fun.

**NADIA:&nbsp;** Yes.

**CORALINE:&nbsp;** Nadia, have you ever done Coderetreat?

**NADIA:&nbsp;** I've never done a Coderetreat.

**CORALINE:&nbsp;** I go every year to an event called Ruby DCamp. And it is an invite-only Ruby retreat in the woods of northern Virginia. It's really beautiful. 76 people every year. It's organized by Evan Light. And the first year I went, the first day was called Coderetreat. And this is an idea that I think was started by Corey Haines. Someone can correct me on that. It's basically you pair on Conway's game of life all day long. So, we did 50, five-zero, minute pairing sessions. You had to pair with someone that you had never paired with before and implement as much of Conway's Game of Life as you possibly could in that time. But with each successive round you switch pairs every hour. Every successive round you got a different constraint introduced, like maybe you could not talk to your pair or your pair is hostile, or you can't use enumerables or you have to use recursion. So, it gets more and more challenging both from an interpersonal level and a technical level as the day goes on. And it's an amazing experience and it really showed me the value of pair programming.

**NADIA:&nbsp;** Yes. I feel like I need to do one of these at some point. I've spoken with people who've been on them and I'm friends with people who've organized them. But the ones that have been near me, there's been something else go on or something like that. I haven't managed to go to one. But everyone always has really powerful experiences when they do one.

**CORALINE:&nbsp;** Yeah, it's totally an amazing experience and I highly recommend it. And I've changed a lot over the years. [Chuckles] I used to be a lot more self-assured in terms of presented with problems. Like “Oh, I know the answer to that. Let's just do that,” which made me a terrible pair partner. And it was actually through Coderetreat that I learned to be more comfortable asking questions and leaving space for other people's opinions and ideas. And having fun exploring those ideas and arriving at a good solution in a much more collaborative manner than I was used to doing before. So, it's a great learning experience.

**NADIA:&nbsp;** Yes. It's interesting when you talk about exploring ideas. One of the things that I think about when I've paired for pretty much all of my professional software development. So, working at Pivotal and working with Theo who's also at Pivotal. [We've just naturally] continued pairing and with strong beliefs in the benefits of pairing. But when you're a newer developer it's also making sure that you somehow find time to explore and play, and find time to fail as well. Because that's when you really learn. And sometimes when you're pairing and you're in a work environment, sometimes you can lose sight of that. And so, that's why it's actually very interesting to have those kinds of things like Coderetreats where you have a bit more time to get away from the work environment and to explore new ideas and fail in what I imagine is an incredibly safe space.

**CORALINE:&nbsp;** Yeah. And I think having that safe space to fail cannot be… that is so critical. I've talked to people who do pair programming at work and they do not feel safe pair programming because they're afraid of being seen as wrong or stupid or not smart enough. And if you don't have that safety at work, that's got to be a terrible feeling because that must be like working in perpetual fear, fair of failure.

**NADIA:&nbsp;** So, that's one of the main conclusions or the main messages that I hope people take from my talk. So, you mentioned this idea about right or wrong. And the middle section of the talk, I talk about this idea of perspectives. And so, I say “Well, let's assume that the user story is get inside the Tower of London.” And I say that you're sitting at your computer and you see this picture. And it's this aerial view of the Tower of London. And your pair is sitting at their computer and seeing this view of the standing right outside the doors of the Tower of London. And so, then I say when you're pair programming and you're not communicating about exactly what you're seeing but you're both trying to deliver this user story, you're going to be talking over one another but you won't realize until you somehow express, “Oh, I'm seeing this aerial view. You're standing right outside the doors. No wonder we're not managing to solve this problem.”

And then I say this idea that it's not about right or wrong. And what I mean by that is even if the host, so when I say the host in this case I mean the person who's more familiar with this problem and knows a good solution for it, and can see a flaw in the solution of the person who's less familiar, so they can see “Okay, if we go down this route we're going to have some problems later down the line,” it's not helpful for them to just say “No, that's wrong because this is why.” Rather, a helpful exercise is to say, “Okay, you're seeing this. Now, I'm seeing this. How might my perspective… what are the benefits of my perspective? What are the benefits of your perspective? How can we move closer together?” and through that exercise of that discussion, hopefully the person who's less familiar can start to see some of the pitfalls of why their idea may not have been the best one without just being shut down and saying, “No, that's silly.” And so, that was really the message to the more familiar person, to the more senior person to say try and move away from thinking about “My way is right,” or, “My way is better.” Just think we're both looking at different things right now. So, let's communicate and try and look at the same thing so that we can productively solve this problem.

And one of the ways that, because that's quite abstract, one of the ways in the talk that I say, “Well, what does this actually look like in practice?” is I talk about drawing diagrams. So, Theo and I are going to look at something, I might be struggling to think of a way to put together a test or to do some implementation because I'm thinking what messages need to go where? And so, often I'll draw out. I'll say, “Okay, this is what I'm seeing.” And it's easy for us to say, or Theo might say, “This is what I'm seeing,” and then from these diagrams we can either see if either of us is confused where that confusion might stem from.

So for example, if what you need is something more like a [inaudible] activity diagram but you've drawn random boxes and lines you might be struggling to understand in what order your message [pools] might happen and what's passed where. But once you get that stuff on paper, it gives you a framework to have a discussion around “Okay, why do you see that? Why do you see this? Which is a better starting point? Or maybe we can take these two approaches and work to a different starting point.” And so, it's all about yes, it's about this idea of just trying to think about, empathize with different perspectives and not just cast a judgment on who's right and who's wrong, or who has a better solution or not.

**SAM:&nbsp;** Yes, I love that. One of the things that I find much more useful as somebody who is more often in that senior role is, well it's sort of the 'give a man a fish, feed him for a day' sort of thing. I find it much more useful to inquire as to how somebody came to understand a thing and how they approached it and what aspects of the problem they were focusing on, like you said. Because if I understand where they're coming from I can take my own knowledge of what they might not be seeing at the moment and I can use that to help walk them through how to think about the problem in a different way. And that's much more useful in the long run. It makes for much more effective learning, at the possible cost of a little bit of time spent pairing that you might not otherwise have done. But in the long run, it's a much better investment for everyone.

**NADIA:&nbsp;** Yeah. [This] idea of one of the problems I had or I have and I'm getting better at is worrying about wasting time and that's part of being hard on myself in terms of thinking “Why aren't I getting this now?” and “We don't have time for this.” But it's as you say, you need to invest that time now because that's how you're going to learn in the long term. Otherwise you might have short term speed but that doesn't make for a healthy team which everyone's contributing but also long term learning.

**CHUCK:&nbsp;** One other thing I really like about your approach is just the idea of drawing diagrams. I find myself with my kinds over math concepts or it's usually math for me or other concepts, I've seen my wife do it, where they're having trouble understanding some concept and by drawing a diagram or getting them to draw a diagram immediately I start seeing where they're not understanding some thing or finding a new or better way to explain the way I'm trying to explain to them how to do things. And in the end, it brings us to a place where we both are able to communicate. And we have something to point at and work through, rather than just try and use words for abstract concepts that one or both of us don't entirely understand how the other person perceives it.

**NADIA:&nbsp;** Yes. That was another thing where often I could be [inaudible] with Theo and we're saying the same words but we didn't realize that we were talking about different things. And so, that's why yes, drawing is very helpful just to clarify exactly what you're talking about.

**SAM:&nbsp;** So, one thing that that reminded me of is this idea that I had explored in a talk a year or two ago about cognitive shortcuts. And that was me sort of putting together all of the ways that I had found thus far of taking advantage of different parts of the brain as ways of making it easier to grapple with these really abstract invisible concepts. And diagrams was on the list of course. There was a bunch of other stuff as well. But yeah, it just, it brought up echoes of that for me as well. So, I was wondering if perhaps you had any other of those tricks for talking through a problem or role-playing as an object or something else like that.

**NADIA:&nbsp;** What we do a lot is map, when we're thinking about how our objects might look or how they might interact with one another, we talk a lot about towns and terrains and people. And so, one example is, this might not quite fit into what you were saying Sam but it's something that comes to mind which is we were working on a video platform. Essentially it gave you a custom workout playlist based on some options that you could say I want to do. For this many minutes, I want to work out my legs. And I was coding up the default random playlist which is I'm giving you nothing. Just give me a playlist. And I went to write the controller and this was in Rails and so I was used to for the controller having something like 'playlists slash' and I was struggling to say, “Well, what's the extra bit here?” And it was at this point where Theo said “Well, what do we need? You want a playlist and you want it to be of a certain format,” which was m3u8 which is the [inaudible] format. So, why don't you just make the endpoint playlist.m3u8? And I thought “Oh, yeah.” I had been so used, and I'd only ever seen or mainly ever worked with controllers that looked one way. And so, it didn't cross my… and I was trying to make that fit into this particular use case even though it didn't fit. I needed something else.

And so, what we mapped that to is, so we were saying it's like when you go to a town and you see everyone's dressing the same and you might think as someone's coming to this town for the first place and everyone's wearing purple dresses for example, you might think, “Oh, I have to wear a purple dress to fit in. Otherwise that would be unacceptable.” But actually, it's fine to wear whatever you want. You just haven't seen anyone do it. And so, it's the responsibility of the person who's more familiar to say, “Oh, you might be thinking you have to wear a purple dress but you don't have to. Actually you can wear whatever you want. It just so happens that everyone here happens to be wearing a purple dress.”

And so, it was this idea of how do you particularly when you're new work out “This is how…” particularly when you're learning a framework like Rails that's very opinionated, it's like “Which bits are just how it's done and which bits are actually, you've got a lot more flexibility than you see day to day?” And just being equipped with that knowledge of “Hey, you can have controllers that look like this,” but yes, because that immediately widened the problem domain, the options that I had to explore. But I would have never got there if someone hadn't told me or if I hadn't done a lot of research. I wouldn't have even known what to search for. Because I didn't see it as a problem. I was just trying to make, fit my solution into a framework. That I was like, “Well, this is how you write a Rails controller.”

**SAM:&nbsp;** Oh, I love those moments where I realize that I've been looking at something with blinders on and didn't even realize that I had them. It's so freeing to realize that…

**NADIA:&nbsp;** Yeah.

**SAM:&nbsp;** Wait, there's this whole other way you can do this. It's so great.

**NADIA:&nbsp;** And then you wonder what else.

**CORALINE:&nbsp;** Thanks to a [flaw] in pattern recognition, right? We're designed to seek out patterns and we look at data that affirms our patterns. And it's really hard to see past those patterns sometimes.

**NADIA:&nbsp;** Yeah. It's this idea of how can we better collaborate when we've got all these different experiences so that people can help you see beyond what's a pattern and what is habit and where there's scope for more flexibility and freedom. The other thing I did as part of preparation for the talk was I reached out to lots of developers who had been coding Rails for a few years. And I asked them “Without thinking too much about it, just draw a map of Rails.” When I say draw a map of Rails, what do you see? And everything I got looked completely different. And it was great, because the point I was trying to make was that you take something like Rails and people who've been doing it for many years you'd say, “Well, we know how Rails works. It works like blah, blah, blah, blah.” And if you were to talk about it they would be saying the same things. But when you see it visually, it's quite different how different developers see it.

And so, the point I wanted to try and get across then was it's not about do you understand Rails or not, do you know how Rails works. But look at these vast differences in how these experienced developers see something which if you were talking about there would be no contention or no argument in terms of the general concepts of models, views, controllers, and this is config and that kind of stuff. But visually people are seeing something very different. And so, I wanted to get across this idea that there might be cases where you think you're talking about the same thing but you just see it slightly differently. And that can lead to sometimes jarring conversations where you're saying “We're saying the same words. Why is this not mapping up? Why is this not matching?”

**CORALINE:&nbsp;** Nadia, that is absolutely fascinating. And I apologize I did not have a chance to see your talk yet. But do you have those illustrations in your talk?

**NADIA:&nbsp;** Yes, I show three of them, the first three that I got which proved my point. And so, all the other requests I asked for, I didn't need to put in the talk. But three was enough just to get across the general point of “Look at these differences.” So yes, have a look.

**CORALINE:&nbsp;** That is fascinating.

**CHUCK:&nbsp;** This one's yours. See how many people got it wrong?

**CORALINE:&nbsp;** I think we're moving past right and wrong here, Chuck. [Chuckles]

**CHUCK:&nbsp;** I know.

[Laughter]

**SAM:&nbsp;** You know, that idea of drawing a different map reminds me of a diagram that I've seen occasionally of this things called the cortical homunculus which is this…

**CORALINE:&nbsp;** Yes.

**SAM:&nbsp;** Little stylized picture of a human body but its proportions change based on how much brain space is devoted to processing input from that part of the body. So, you'll see this person who has a fairly small, skinny body, big feet, huge hands and a giant face. Because there's a lot more nerve endings in the face and the fingertips obviously, than maybe along the back of your arm or something. And it's funny to compare that with how we internally represent a thing versus how it might be out in some notional objective space.

**NADIA:&nbsp;** Oh, that's interesting. I've never heard of that before. So, it'd be interesting to check it out later.

**SAM:&nbsp;** Yeah, I'll put a link in the show…

**CORALINE:&nbsp;** It's [inaudible] a creepy picture.

**SAM:** Yeah.

[Chuckles]

**CORALINE:&nbsp;** [Inaudible] creepy picture. But I think it might be interesting Nadia too if, depending on how you frame that question when you ask people to draw what Rails looks like, were they drawing what they saw Rails as or how they would try to explain Rails to someone else?

**NADIA:&nbsp;** So, the question that I put to everyone was get a pen and pencil and draw what comes to mind when I say draw me a map of Rails. And I tried to stress don't think about it. Just draw the first thing that comes to mind when I say draw a map of Rails.

**CORALINE:&nbsp;** Okay. So, your own perception of what Rails was, not their attempt to explain Rails to someone who's new for example.

**NADIA:&nbsp;** Yes. It was their own perception. And that was important because I was trying to say “Look at how starting points can vary before we even get to trying to explain it to someone else.” You have to be aware of “What is my starting point?” And what are things that are truths and what are just ways that you like to do things or habits that you've got? So, one of the things I think about when I think about this idea of a town is, if someone says how do you walk to the shop, so how do you get to the shops? Do you walk? Do you cycle? Do you dance there? [Chuckles] And then think about why do you do it that way? Is it because… What do you need? So, is it the fastest? Or if you walk do you have time to listen to the latest episode of the Ruby Rogues podcast? Or is it just because you've only ever walked and you never even considered doing it another way?

And the thing I think that's interesting there is particularly when you're working in an environment where you've got someone who's more experienced working with someone who's less experienced, it's trying to find the line between “Oh, I just do it this way because I've done it this way for years and I've never thought to do it another way” or “I'm doing it this way because it's going to be the easiest for us in terms of interacting with other objects we've got.”

So for example, sometimes when I've been pairing with developers, I'll be trying to do something one way and they'll spot that I'm trying to do it in a particular way because I think that's the way to do it, because we've had a discussion and that's where the discussions come out. And the other developer will say “Oh, I see you're trying to do it this way. I should clarify that although I spoke about this pattern or this approach, that's just my personal preference. Our colleague would say that they hate that way. And they would do it this way.” And it's those times when my pair has said that to me that I've realized “Oh wow.” It's easy when you're working with someone who's much more experienced to think that what they're talking about is the way you should do it as opposed to “This is just my little habit. This is just my little quirk. This is how I do it.”

**CORALINE:&nbsp;** Yeah.

**NADIA:&nbsp;** As very important it is on both sides to be aware of that line and make sure that someone who's more experienced is saying “Nah, this is my way. Here are some other ways.” And the other person is asking questions. So, one useful way that I've found to learn was if someone said “Let's try it this way” I would say “Why do you think that's a good way?” or “What other ways might we do this?” so that I was exposed to different ideas and different approaches so I could think a bit more myself about, is this a good way to do it or are there other ways? And actually sometimes by asking that question of someone, you might make them come to another conclusion by themselves almost because they'll say “Wait a minute. Why am I doing it this way? Why are we doing it this way?”

**SAM:&nbsp;** [Chuckles]

**NADIA:&nbsp;** You've just given me a good idea. And I don't normally think about it but now we could try something else.

**CORALINE:&nbsp;** That's really important. That's… when I pair with someone and I think maybe especially when I pair with someone who's more early career, I like to ask questions instead of making statements because I recog-… well, for a few reasons. I want them to feel like they're involved and they're making a significant contribution to the direction that we're taking things at. And I want them to know that their opinions and thoughts and ideas are valued. But also I want to challenge my assumptions about how to get something done. Because I came from a non-traditional background and I have my own strange ways of thinking about programming concepts that are not grounded in any sort of formal analysis or formal logic. So, I'm very quirky in the way that I develop. And I am fascinated by seeing how different people work and seeing how different people think about things. So, I love pairing for the opportunity that it gives me too. Like seeing into someone else's brain and get someone else's perspective.

**NADIA:&nbsp;** Yeah.

**SAM:&nbsp;** So, one other thing that comes up with this idea of hospitality and being a guest and a host is the Opportunity Scholarship Program that Ruby Central has been running for a couple of years now. I've done that a couple of times. I understand you've done it as well. Are there any lessons that we can draw from that to bring back into our teams as well?

**NADIA:&nbsp;** Yes. I've done it a couple of times as you say at RubyConf last year and more recently at RailsConf. And I think it fits into this code hospitality thing perfectly. The idea behind is someone who's more experienced and more experienced could mean you've been to a Ruby Central conference before or you're a more experienced developer. You are paired with someone who's never been, they've typically I think never been to a Ruby Central conference before. So, it's their first time. And you pair up with a mentee or a scholar. And you are there to help them think about what they want to get out of the conference. And help them select what talks to go to and hang out with them as much or as little as you both want.

And so, I think the interesting lesson to take away from that is this idea of, so before you can do a good job as a guide you need to understand, what does your scholar want out of the conference? So, I started, I remember sending an email to my scholar, Stephanie, who was amazing, and saying, “Well, what do you want out…?” She asked me, “Oh, how can it… which talk should I go to? Or are there other things I should be doing?” And so, I said to her, “Well, what do you want to get out of the conference?” And I guess if we think about the workplace and having new hires or new teammates we as the ones who are more familiar might fall into “Well, here's how we onboard people.” We take them through this checklist and we show them how we do code and how we deliver features. But often you can forget that the useful thing of saying, “Hey, are you comfortable with everything we've gone over? Is there another way that we might give you this information that might help you?” And this could just be on a one-on-one setting with someone on the team if you spot that “Oh, maybe there's something that they want to get out of this that they haven't gotten out of. And maybe we could do a better job if we just ask them.” [Chuckles] That's a useful lesson.

And then it's again, just empowering and enabling other people. So, I was someone… and just giving more information and highlighting your own vulnerabilities and things like that. So for example, Stephanie spoke about wanting to meet more people in the community and she also wanted to talk to more people about the awesome way that her boss ran his company. So, he only hired or hires new developers. It's this company in the Netherlands called Space Babies. I think you can get to their website SpaceBabies.nl. And he's got two employees so far but both of those employees had never worked professionally as developers. And he would take developers from scratch and help them grow to be consultants. And so she said, “Yeah, I want to meet more people. I want to talk about this. My boss is doing an amazing thing.” And so, I was able to say to Stephanie, “Have you thought about doing a lightning talk?”

So, at Ruby… the other great thing that Ruby Central conferences do and this happens typically at a lot of software conferences is on the day of the conference, on the morning, you can offer the lightning talks. You can sign up on a board and in the main room give a five-minute lightning talk. And so, I was able to raise this with Stephanie and she had never even considered it. Then she also said, “I can't speak at RailsConf,” or, “This is such a big audience for me.” And she made a reference to the fact that I had… she seemed to think because I was speaking at RailsConf and RubyConf that I'd been doing it for a long time. And so, it was neat to say, “Oh no. I'm actually very new to this myself. And I found it to be really accessible this way.” And it's just giving that information and showing, “I am not far from you in this way and I understand how you're feeling and your perspective” and guiding her through that experience.

And so, she ended up doing a lightning talk. And afterwards she was saying to me, “Wow. It's so amazing how much people…” because she also saw, I think saw herself as a bit more of an introvert and was not sure how to reach out to people. And she said to me, “Wow, it's amazing how me getting up on stage and sharing this idea that I really wanted to share with people meant that I've just had people keep coming up to me who saw my talk. And we've been having more deeper discussions now around some of those ideas.” And so, being able to just talk her through, “No, this is where I started and this is how actually the community is very accessible and here's a way that you might get into speaking and sharing ideas with people,” and to see within the feedback loop on that was very cool. Because that was a couple of days. RailsConf was three days. So, having the feedback loop on helping someone talk through that and then seeing, her seeing the results and feeding back to me, that's very, very powerful.

And so, if we think about things at the workplace it's, so you've heard from your new hires and your teammates about what they want to get out of it, you make suggestions. You guide them through that process. And then it's very important to have the feedback back at the end where you say “How was it for you? Did you get what you wanted out of it?” If yes, that's fantastic. How can we keep that going? And if not, what could we do better?

**SAM:&nbsp;** Wonderful. Thank you.

**CHUCK:&nbsp;** Yeah, this overall for me has been really fun just to sit and listen to. Some of these things are things that I hadn't really thought through. And other parts of it were more things that I had thought about and had been exposed to but not in that way. So, just the hospitality and the way that we approach pairing and the way that we approach other people and just thinking about… we have talked about making things welcoming. But I hadn't really thought of it under that context, with the hospitality. So, thank you for expanding the way that I think about some of these things.

**NADIA:&nbsp;** Oh, awesome.

**CHUCK:&nbsp;** Let's go ahead and do some picks. Coraline, do you have some picks for us?

**CORALINE:&nbsp;** I have one pick today. It is a series of interviews/blog posts called 'Case Studies in Apprenticeship'. It is put together by a friend of mine here in Chicago named Joe Mastey. And what he does is interviews companies that run software apprenticeship programs and talks to them about their successes and their struggles in an effort to make it easier for other companies to start advantage of the learning and experience to start their own apprenticeship programs. So, he talks to people who have experience in this to bring their insights to life. There are seven installments so far. He's doing maybe one every other month. Some interesting people he's talked to already are mainly Chicago companies. So, if you're interested in creating an apprenticeship program at your company and you want to know what's involved and what some things to watch out for are and what some of the benefits are, it's a really great series to pay attention to. He goes really in-depth and asks some really, really interesting questions. So, 'Case Studies in Apprenticeship' is my pick for this week.

**CHUCK:&nbsp;** Awesome. We also did an episode with Joe. So, we'll put a link to that in the show notes as well, talking about apprenticeships. Sam, what are your picks?

**SAM:&nbsp;** I'll just do one today. This came up earlier as we were talking about trying to figure out where somebody is coming from. And one of the best tools that I have ever been exposed to for learning how to do that is a textbook that was actually in one of my 100-level required college writing classes. The book is called 'Everything's an Argument'. It's by Andrea Lunsford and John Ruszkiewicz I think. A couple of other authors as well. I'll put a link in the show notes. But this is a sort of very pop culture accessible textbook on rhetoric. And it's basically about trying to view basically all speech through the lens of it being persuasive speech. And it gives you some good exercises and tools for trying to figure out not only what somebody is saying but what is the perspective that could lead them to say that thing in that way as a way to help you understand both the argument and the person a little bit better. And I really got a lot out of it that I was not expecting for a required college course. But it was really good. And that's my only pick today.

**CHUCK:&nbsp;** Awesome. I was thinking about what I wanted to pick today. Of course what I wanted to pick today I picked yesterday when we talked to Tom Stuart. So, I'm just kind of looking around and thinking. One thing that I did get recently that has been kind of handy is this cube. It's a projector. It's about two inches by two inches by two inches.

**SAM:&nbsp;** Whoa.

**CHUCK:&nbsp;** And yeah, it's really small. But it's a projector that you can hook up to your computer or to your iPhone. You have to have an adapter for that. It also has an adapter if you're going to hook it up to something like an Android phone that has the, what is it, mini or micro USB on it. But anyway, you can hook all that up. It has a sort of HDMI thing on it. So, I just had to get the HDMI dongle for my iPad and it works pretty well. It's not super-duper bright. So, if you're going to put it on a big wall with the lights on it's a little hard to see. But I did a presentation for Cub Scout Round Table last month. And I used that to put my slides up. And it worked really well. I had a group of probably 50 or so people there, maybe a little bit more, where yeah we were just talking about Cub Scouts. And yeah, it was really handy. I hooked it up to my laptop in that case, plugged it into the HDMI port and it worked great. But it's nice because it fits into my laptop bag. And so, if I'm going anywhere that I need to present and I need to bring my own presentation hardware then I can definitely do that and I really like it. So, I'm going to go ahead and pick that.

Nadia, what are your picks?

**NADIA:&nbsp;** I've got a couple of picks. So, the first one is a book called 'Nonviolent Communication' by Marshall B. Rosenberg. And…

**CORALINE:&nbsp;** Yes.

**NADIA:&nbsp;** Yay. It's all about how we can communicate better with everyone whether that's people we work with or our partners. And it focuses on this idea of minimizing conflict and surfacing the underlying needs we have. And so, it gives you a framework for saying, “Here's how you talk about your feelings. Here's how you find out what the needs are that have caused you to have those feelings. And here's how you make requests to those around you so that your needs can be met.” And the thesis behind the whole book is that we've been, we're taught to speak in terms of things being right or wrong and casting judgment and making demands. And often we don't know how to communicate very well about what we need. And if we could all just more effectively talk about what we need from ourselves and from one another and empathize with ourselves and one another in that way, then there's going to be a lot less conflict. And so, it's a very, very powerful framework. And I talk about it in the code hospitality talk. And I've been trying to get more and more people to read it. Because I think if everyone applied some nonviolent communication every day, then you wouldn't even see a… it would just be a more healthier way of everyone talking to one another. And we'd all be happier. So, I really recommend that book.

And then the second thing, second one is a podcast episode. So, I studied Economics at university and I like to stay fresh on my economic thinking. And so, I like the EconTalk podcast. And the one I listened to recently, it's an old one called 'Dinner Table Economics'. And it features the guest Professor Robert Frank from Cornell University. And the whole premise of this episode is here are ways that everyone can think like an economist. And they go over some fun problems like why are wedding dresses typically bought but tuxedos rented. And what happens to the price of pork if the feed for pigs goes up. And it's not what you think. And it goes through all of these things that we see day to day and helps you to say, well in the economist frame of thinking you'd look at things like costs and incentives. And here's how you can apply that day to day to think about why certain things are priced in a certain way, why people make certain decisions, and how you can make certain decisions based on opportunity cost and sunk cost and things like that.

So, typically the discussion on that podcast is more focused on, it'll take a current topic or thing and look at that for an hour. So, this was a more fun, here are little bite-sized problems that you can play around with and you can bring up at the dinner table for interesting discussion. So, I really recommend that episode of EconTalk.

**CHUCK:&nbsp;** Awesome. Well, thank you for coming, Nadia. It's been a really, really interesting conversation. And I'm hoping that we can help more than a few people be a little bit more hospitable to other programmers and especially new and aspiring programmers in our communities.

**NADIA:&nbsp;** Oh yes, I hope so, too. I've had a great time chatting with you all.

**CORALINE:&nbsp;** Thank you so much, Nadia.

**SAM:&nbsp;** Yes, thanks.

**NADIA:&nbsp;** Aww, thanks guys.

**_[Bandwidth for this segment is provided by CacheFly, the world's fastest CDN. Deliver your content fast with CacheFly. Visit C-A-C-H-E-F-L-Y dot com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**
