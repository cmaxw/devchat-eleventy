---
layout: layouts/post.njk
title: >
      094 AiA ng-conf 2016 Live!
date: 2016-05-26 07:00:57
episode_number: 094
duration: 45:33
audio_url: https://media.devchat.tv/adventures-in-angular/AiA094AdventuresinAngularLiveNGConf.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

This episode was recorded live from [ng-conf](https://www.ng-conf.org/) 2016. The conference and conference experiences, goals, and sessions are discussed amongst all the latest and greatest announcements in Angular such as The Release Candidate.&nbsp;Picks
- [Tero Parviainen: Generative Art in Angular 2 @ ng-conf 2016](https://www.youtube.com/watch?v=vsl5O4ps7LE) (Ward)
- [Sunny Leggett](https://twitter.com/sunny4days) and [ZeroSlope Events](https://zeroslopeevents.com/) (Jules & Joe & John)
- [The ng-show with Shai Reznik](https://www.youtube.com/watch?v=aSFfLVxT5vA) (Katya)
- The ng-conf sponsors (Chuck)
- Karaoke (Aaron)


### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not that’s totally up to you. You can check it out at KendoUI.com]_**

**CHUCK:&nbsp;** Welcome to Adventures in Angular live at ng-conf. This week on our panel, I'm just going to go along here and you can all do whatever you do when you introduce yourself live on stage. We have Jules Kremer.

**JULES:&nbsp;** Hey, everyone.

**CHUCK:&nbsp;** Katya Eames.

**KATYA:&nbsp;** Hello.

**CHUCK:** Joe Eames.

**JOE:&nbsp;** Hey there.

**CHUCK:&nbsp;** They might be related. I'm Charles Max Wood. This is John Papa.

**JOHN:&nbsp;** Hello.

**CHUCK:&nbsp;** And Aaron Frost.

**AARON:&nbsp;** Hello.

**JULES:&nbsp;** Let me just start off by saying it's really cool to not be little squares on a computer with you all today.

[Laughter]

**CHUCK:&nbsp;** Yeah, it's really fun to do the in-person thing. Earlier in the year I was at Build conference and we did a couple of live episodes and it's nice to be able to actually see people and see the way that they move and the way that they interact so to speak.

**AARON:&nbsp;** Until they throw the lights up and then you can't see anyone again.

[Chuckles]

**JOE:&nbsp;** I actually have to wear clothes here. Usually [inaudible] my pajamas to do the show.

[Laughter]

**CHUCK:&nbsp;** Yeah.

[Laughter]

**JULES:&nbsp;** I'm going to leave that one alone.

**JOHN:&nbsp;** No comment, Chuck.

**JOE:&nbsp;** In person can be a bad thing.

[Laughter]

**CHUCK:&nbsp;** I know, right? I won't tell you what I wear. Anyway…

**JOE:&nbsp;** Footies.

**CHUCK:&nbsp;** [Chuckles] So, we did this last year and usually what we do as Adventures in Angular is we just talk about the conference. There were some things that were talked about during the keynote. There were things that were talking about during some of the talks that were really interesting. There are some things that are relatively new that if you were paying attention to what the Angular team puts out there and what some community members put out there are probably not big surprises. But if you're not following along then there were a lot exciting things announced. So, to start off, I'm really curious. What did all of you see or hear that was exciting or interesting that you think people ought to know about here at ng-conf?

**JOE:&nbsp;** Let's start with Jules.

**JULES:&nbsp;** Oh, me? Well, I kind of knew what was going to happen before we got here. So, there weren’t a lot of surprises. I think the animation stuff is really cool. Mattias has done such a great job with that. That's my favorite thing so far.

**CHUCK:&nbsp;** How about you, Joe?

**JOE:&nbsp;** Me?

**CHUCK:&nbsp;** Well, you're holding a mic.

**JOE:&nbsp;** I am holding a mic.

[Chuckles]

**JOE:&nbsp;** Let's see. I really like Scott's talk. I like how he made some good things to relate to learning Angular 2.

**AARON:&nbsp;** Scott's talks are always awesome, though.

**JOE:&nbsp;** Yeah, they are always awesome. I really liked Alyssa Nicoll's talk. She was our backup speaker and spoke in a side place. We weren't able to get it recorded unfortunately. But I really liked her talk. She actually had two talks that were on our backup list. She didn't even know. That made it easy for her to be our backup speaker. I really liked hers. And then I think that

Fair Day was pretty fun. I'm seeing a lot of people going around doing a lot of things.

**CHUCK:&nbsp;** How about you, Katya?

**KATYA:&nbsp;** I was working in other rooms for most of it. [Chuckles]

**AARON:&nbsp;** She worked hard. She did awesome this year. We've never made her part of the crew, at least not to the level she was this year, and it was pretty awesome. She killed it for us.

**CHUCK:&nbsp;** Awesome. I am curious though, since you're around the conference and around the attendees and you see people walking down the hall. What's your read on the conference? What are people feeling or thinking or what do you pick up when you see people walking through the conference?

**KATYA:&nbsp;** So far, from everything that I've seen, everyone… well most everyone that I've talked to has loved it. I've heard very few complaints about the conference even though it's such a hugely… we've more than doubled it from what it was last year. So, I know from being around him and being around [inaudible] everyone that it was really, really hard to get it all together. But I've heard very, very few complaints about how the conference is going. And it's really cool to hear people and see people just having a good time and enjoying the conference.

**CHUCK:&nbsp;** Cool. That's kind of what I've been seeing too. So, it's good to hear it. Because I haven't been looking for it I guess. But what about you, John?

**JOHN:&nbsp;** I think the energy level is not surprising but it's still awesome to see. Everybody walking around and having great conversations, congratulating everybody else, attendees, speakers, staff. Everybody's super friendly. This is one of my favorite conferences because you have real conversations with people. And it's just the right size. It's not too big where you can't… you get lost. And it's not too small where you're seeing the same person every five seconds. So, it's a really good size, a really good energy in the conference level.

**CHUCK:&nbsp;** Well, what did you see, Frosty?

**AARON:&nbsp;** So, I've never done karaoke before in my life.

**JOE:&nbsp;** Seriously?

**AARON:&nbsp;** Ever.

**JOE:&nbsp;** What?

**AARON:&nbsp;** And so, on the party night on Wednesday night there was karaoke. It was like, me and my twin brother, my older brother, and my sister and 10 other people. It was so much fun. I was like, “We're doing it again tomorrow night.” And so, last night until 12:30 at night, we had so much… like Katya was singing. I sang.

**KATYA:&nbsp;** Miško sang.

**AARON:&nbsp;** Miško did his first karaoke.

**KATYA:&nbsp;** Papa Miško.

**AARON:&nbsp;** Papa Miško, they introduced him.

**JOE:&nbsp;** Papa Miško.

**AARON:&nbsp;** Papa Miško. But no, the community. I don't know why it surprises me every time. But it's the best. Every time I come here it's like I have 1400 friends. And some of them I'd met once or twice but it's like the hug is as if I saw them at work every day or something. So, it's a lot of fun. The community is absolutely untouchable as far as awesome communities go.

**CHUCK:&nbsp;** So, one thing that I wanted to just mention that kind of hit home during one of the keynotes, and it was when Jules was bringing different people on the stage and they were talking about what they were doing with Angular, with NativeScript, or with some of the other ways that you can use Angular, that Angular has become a platform as opposed to just a framework. And seeing that it can be used in all these different areas, I mean there was a freaking Simon game that you could play. So, people are using it in IoT. And it's just something that's really cool to me that I thought was an interesting thing that it seems like the Angular team is really focused on.

**AARON:&nbsp;** It's funny because a lot of people are like, “Oh no, we're not a framework. We're smaller than, or different than what a framework is. We're going smaller.” And Angular is like, “No, we're bigger. We're a platform. We jumped the framework straight into platform.” And so, maybe Backbone will jump in and be a platform or someone will fill the framework gap, because it seems like no one wants to be a framework. It seems like there's a divide. Some people are going under framework and Angular is saying, “We want to fill up something bigger,” which is a platform. And so, that's something that I've noticed and I thought that was cool, too.

**JOHN:&nbsp;** So, what I've been really noticing too is the big announcement this week, obviously. And I think Jules, direct feedback live here, I think you guys undersold how important the RC was this week, in the keynote.

**JOE:&nbsp;** Agreed.

**JOHN:&nbsp;** The RC is huge to have a release candidate out there that people can rely on and go. And it's great that it's out. That was the biggest thing for me. And then somebody asked me just recently about how do you compare Angular 2 to Angular 1 in a nutshell. And I thought, let's see. It's faster. It's smaller and it's easier. And you didn't lose any features. So, what's the downside? I'm still waiting for the downside, Jules.

**JULES:&nbsp;** [Chuckles]

**JOHN:&nbsp;** When is it coming?

[Chuckles]

**JULES:&nbsp;** Hopefully never. But with regard to the RC I think maybe I can give you guys some of the background story. We actually talked a lot about whether we should do an RC and whether… how it would be perceived if we did it for ng-conf? Are we really ready for RC? Should we just release a final? There's… believe it or not we actually super care about how we deliver this and how people will perceive it and whether it was ready. And we didn't want to do it just for ng-conf.

And I remember we had this meeting where there was a very long discussion about the perception of RC here at ng-conf because not all of the bits are done. And I asked the question, because I get to play devil's advocate in my role an awful lot, and I said, “Well, are all the main pieces good and stable?” and they were like, “Yeah.” But we test these on hundreds of internal apps and we know how they perform and we know the issues with lots of use cases that many businesses have. And I think it was Igor who made the comment, “But we really need to know how other people will use it.” And I was like, “Well, then that's the right time to release an RC and we need to get up there and say we think it's stable and we've hopefully identified all the pieces that we don't think are stable. But we can't make it final until we know it works for you. We know it works for Google. Does it work for you guys?” And so, I think that was a lot of the thinking behind, “Should we do this? Is it ready?”

**JOHN:&nbsp;** And I think, what does RC mean to most people? And I think it means slightly different to everybody. But to me, and I used to work at Microsoft and we had these similar kinds of conversations about products. RC generally feels to me like it's the time when the company is saying, “Go forth and use this in a production app. We will back you. We'll go forward.” And maybe there are edge cases that won't work and we'll tweak it. But the core piece in Angular, like Angular core, that should be solid. Maybe there's an outlier like internationalization or something that isn't ready. But so to me, it was a great endorsement of “We're ready for you to go use this.” And I think it's what people were waiting for and I think they got that.

**AARON:&nbsp;** Yeah, I totally agree with that, what you said, John. Because I love Angular 1 a lot. But I know it's legacy code. Even when I'm writing 1.5 which is the greatest Angular 1, I know it's legacy code still. And I have a huge interest financially for work and personally to stop writing legacy code. So, the sooner this thing gets into an RC and I could know if I wrote this today when I ship it by Christmas or whatever it's going to be a general release [inaudible]. So for me, it was huge to know I can start using something knowing that I'm not writing legacy code anymore. I can start saving money for the business and start getting us into where we need to be going forward. So, that's why I agree. I think it was huge.

**CHUCK:&nbsp;** Yeah. For me, along the same lines. Having a release candidate is, “Hey, we think we're done, or we think we're close.” And as Jules said, it's we all at this point, if we want it to work for us, this is the time to make sure that they know when it doesn't. And so, they think it's done or they think it's stable. And so yeah, it's our time now to plug it in, figure it out. Because it's not as volatile as a beta or an alpha. And so, hook it up and let's really see what it does.

**JOHN:&nbsp;** And let's say there are changes that come. I just watched Mike Brocchi's talk about the CLI. One of the things they're working on is, “Hey, if you use the CLI to develop an app we are promising or at least hoping to have a way to help give you hints on how to upgrade that moving forward.” Like the ngFor syntax recently changed before RC. And I imagine if the CLI was to do something about that, it would say, “Hey, here's your ngFor syntax. Would you like me to change that for you?” and it could flip the switch in there and go run through your code. That's cool.

**JULES:&nbsp;** And let me just follow up the rest of this conversation with I'm not one of the engineers actually building this product. But I've been on a lot of product teams at launch. And I've never seen a group of engineers come together over some late changes that we knew were significant and big, and pulling all-nighters and really putting their soul into making sure that we gave speakers enough notice to adjust their code. I've seen a lot of tweets…

**JOHN:&nbsp;** Thank you.

**JULES:&nbsp;** About how amazing it was that the code was up-to-date coming here. And also, making the decisions that were right instead of just pushing forward to get to RC for this conference. They really went out of their way to say, “We could do this. It wouldn't be the right thing long-term. So, let's just bust our butts and get it done.” And that's what they did.

**CHUCK:&nbsp;** I'm really curious, Jules. Because it sounds like the Angular team did a lot of preparation for this conference. And I can imagine why. This is a large group of people who use Angular. What's the message that they really wanted us to get? I saw a lot of things in the keynotes. I got a lot of ideas of things that I could do with Angular. But what are the key things that they were trying to get across to us as Angular developers and communicate to us that we could do or should do or should think about with Angular?

**JULES:&nbsp;** I think that's a huge question. There are so many different things that you can use with Angular because it's not just a simple framework anymore. So, I think our goal was to try to give as much of a broad view of what it's going to be in its totality while still being true and honest to where it actually is right now, today for you. I could go through all of the things we put in the keynote but you could obviously go and [re-read] that. And we spent a lot of time reiterating that keynote to make sure it said exactly was those messages were that we wanted you guys to hear. But I think the other thing we really… here's something I'm going to say because I don't think people realize it. Ng-conf is not run by us. We don't make it. We don't pay for it. And if the listeners don't realize at the first ng-conf, you guys mortgaged your houses to pull this together and really make it or whatever [chuckles], I don't mean that literally. But [chuckles] to really…

**JOE:&nbsp;** We came this close to doing exactly that, FYI.

**AARON:&nbsp;** Yeah. Mortgage, housing mortgaging was on the table.

**JULES:&nbsp;** [Laughs]

**JOE:&nbsp;** That was a discussion that happened.

**JULES:&nbsp;** I believe I had heard that story.

**AARON:&nbsp;** Yeah.

**JULES:&nbsp;** And my point is that we feel a commitment to you guys who have shown so much love to Angular and to the community that comes here to view it. And I think that's the biggest message that if Brad was here he'd want to say, is it's all about you and your feedback to us. And we're listening.

**CHUCK:&nbsp;** Awesome. You know, you did address the organizers and I'm curious. I want to ask a similar question to Joe and Aaron who are up here. What is your goal with ng-conf? What are you hoping that people come away from ng-conf with? Is it a connection to the Angular team? Is it better skills to do cool stuff with Angular? Just a fun experience? Fair Day seemed like it was pretty focused on that, among other things. What are you looking at people getting out of the conference?

**JOE:&nbsp;** I think that we all have a very unified vision on ng-conf of what we as organizers want to get out of the conference. And that's obviously, for us very obviously two-fold. And the first one came up in an Angular Air episode that we were on last week where they were asking us what they want people to take away. And that was that the community of Angular is awesome. And so for us, number one priority of this conference is to build the Angular community. And to that, we have the whole Extended thing that goes on, right? Very few conferences… a lot of conferences stream but very few conferences spend time because it's just, it takes a lot of time and energy and money to do this. Very few conferences can spend the time to actually try to make those that are watching remotely feel more like part of what's going on. So, this is all Aaron's doing year two. He had the idea, “Let's do this,” and took it under his wing and did a ton of work and effort. And now we've turned over [inaudible] of that.

**JOHN:&nbsp;** Can you guys explain a little bit to people listening what ng Extended really is besides watching a live stream?

**JOE:&nbsp;** Aaron can.

**AARON:&nbsp;** So, it's an idea that we borrowed from Google. When they do Google I/O yearly they do Google I/O Extendeds which is they organize remote viewing parties around the globe and they encourage the organizers to be in touch with them to get a little bit of behind the scenes, information about what will be going on, and to be their liaison for those remote groups. Set up ticketing and get venues and try and do t-shirts or food or whatever you can. So, we borrowed that same idea because I ran a couple of Extendeds, I/O Extendeds and they went well. They went really well. So, we thought it would be amazing to bring on an Extended ng-conf because year two, we were in a venue that let us have 700 people and we got beat up for only doing 700 people to come. And so, we needed to get some… a different way for people to enjoy ng-conf as a community.

**JOHN:&nbsp;** Didn't the tickets sell out last year, for last year it seems like, 10 minutes or something?

**AARON:&nbsp;** Just yeah, if the servers hadn't crashed it would have been seconds, right? It's insane. Anything that really, any cart that ropes itself to the Angular horse is on, it needs to be ready for a ride. Because it gets crazy once you're attached to the Angular team. So, yeah. But that was a big piece. The message we want is about building bridges for other people and making the community the best that it possibly can be. And so…

**JOE:&nbsp;** I've had a…

**AARON:&nbsp;** Go ahead, Joe.

**JOE:&nbsp;** Well, to that and the other aspect of that was we wanted ng-conf to be the kind of conference that we wanted to attend. There is a style and a flavor to a conference. And not everybody that's going to come to this conference is going to appreciate it as much as a different kind of conference. And that's okay. We're totally okay with that. We want this to be a conference that as many people as possible can enjoy but when we decide “Do we do A or do we do B?” we always decide what would we like to have if we went to a conference. And so, that's our goal in the organizing.

**CHUCK:&nbsp;** I have to say, mission accomplished. Because I showed up, and this is based on my experience last year and now this year, I tracked Sunny down and I said, “What would it take to do a podcasting conference like this?” because… this, it's a fairly unique conference in the sense that we all, it's all single track which in a venue like this you usually don't get. Usually they put the partitions up and you have two or three tracks going at a time except for the keynotes. And then just all of the extra stuff. So, we showed up, or I showed up. I live here so I parked under the hotel and came up and there was a Cantina Band and there were just fun elements. It was not just Angular. It was, “Hey, look. We're going to have some flavor. We're going to have some culture. We're going to have some good feeling and just all around fun.” And then Fair Day was, well, do you want to go to the NativeScript one or the CLI one? Or do you want to go learn to play the ukulele? Have some chocolate-covered bacon? Just the overall feeling of, “Hey, look. This isn't all serious and work and stuff. We love what we do and we're going to do some stuff that we love to do.”

**JULES:&nbsp;** I didn't have the chocolate-covered bacon. How was it?

**CHUCK:&nbsp;** It was really good.

**AARON:&nbsp;** You don messed up, because it was good.

**KATYA:&nbsp;** It was weird. It was weird.

[Laughter]

**JULES:&nbsp;** That was what I thought it would be, weird.

**KATYA:&nbsp;** It wasn't as good as the deep-fried Twinkies.

**JOHN:&nbsp;** I love chocolate. I love bacon. I don't know. Together that sounds kind of weird to me, though.

[Laughter]

**KATYA:&nbsp;** Deep-fried Twinkies were the best. Just saying.

**CHUCK:&nbsp;** Yeah, you put them together and you get a heart attack.

**AARON:&nbsp;** I thought the bacon-wrapped-bacon-wrapped-bacon was the best, but…

**CHUCK:&nbsp;** I must have missed that.

**AARON:&nbsp;** I could be insane. But it was amazing.

**JOHN:&nbsp;** You know, we were talking about the Extended confs and it's actually helped me build a bridge. So for example, I'm going to Barcelona this summer. [Inaudible] of that.

**AARON:&nbsp;** Angular Beer guys.

**JOHN:&nbsp;** Angular Beers. Awesome name for a group, right?

**AARO N:&nbsp;** Yeah.

**JOHN:** Over there. I happened to ask the guys. I said, “Hey, you guys are going to be putting together some stuff. Would you like to organize the day where Dan Wahlin and I are going to Barcelona? And this guy, and within a day he'd set up a 24-hour turnaround, an event that we're going to be doing over in Barcelona now this summer on Angular.

**AARON:&nbsp;** Which is awesome, by the way.

**JOHN:&nbsp;** Those guys are great.

**AARON:&nbsp;** Your partners over there are great. Those guys are really, really cool.

**JOHN:&nbsp;** They did a great job. They ran an ng-conf Extended and I saw many of the pictures. Wonderful job.

**AARON:&nbsp;** They ran it in a movie theater. And the ads were on the movie theater screens and everything they went way, way, way up. It was our… I think the biggest ng-conf Extended was theirs.

**JOHN:&nbsp;** Yeah, they created a Slack channel that I joined on the internet and 300 people in that room as soon as the Slack channel opened.

**JOE:&nbsp;** Holy cow.

**CHUCK:&nbsp;** That's amazing.

**JOHN:&nbsp;** So, it's great to see the communities that are out there talking about this.

**AARON:** Yeah.

**JOE:&nbsp;** I think another thing that's worth mentioning about how we organize is the principles under which we organize. So, probably our number one principle is that our conference is welcoming. Every decision that we make we look at, is this a welcoming… is something that we're doing welcoming? We're okay if people don't like Star Wars. We're not trying to shove Star Wars [down their throats].

**JULES:&nbsp;** As Ward Bell walks up the hallway.

**JOHN:&nbsp;** Yeah, you notice Ward Bell is not [inaudible].

**JOE:&nbsp;** And speaking.

**AARON:&nbsp;** Ward Bell enters the room.

[Laughter]

**JOE:&nbsp;** I summoned him.

**AARON:&nbsp;** He heard Star Wars and comes in.

**JOE:&nbsp;** He appeared like a demon that was summoned by incantation.

[Laughter]

**JOHN:&nbsp;** Did you know that Ward Bell actually, they gave away these awesome Lego Star Wars sets to speakers. Thank you. My son will love that.

**JOE:&nbsp;** Grab a chair.

**JOHN:&nbsp;** Ward Bell actually gave me his.

**JOE:&nbsp;** Grab a chair.

**JOHN:&nbsp;** He hates Star Wars that much.

**AARON:&nbsp;** Or he loves you that much.

[Laughter]

**JOE:&nbsp;** Come up right by Jules.

**JOHN:&nbsp;** You coming up, Ward? Alright.

**WARD:&nbsp;** Are we talking Star Wars yet?

[Laughter]

**JOE:&nbsp;** We are at the moment. Ward and I have a fun time, and John. We all have a fun time messing around with Star Wars. But we're okay if somebody doesn't enjoy one of the activities that go on. But if they don't feel welcome, we want to know why and we want to work to make sure that we don't do things that don't make anybody feel welcome. So, that's one of our principles.

Another one of our principles is it's about the education. We throw all the fun on that we want but if the education isn't there, we have a problem. So, every time we talk about what fun we're going to do we make sure that behind that is good content.

**AARON:&nbsp;** So one thing, just to… an actual case of what Joe's talking about. So this year, we have these wacky speaker intros. Has anyone noticed the crazy speaker intros? And the people in the audience and viewing on a live stream, I don't think that they know. I think they think that Dave and I wrote the intros. So, they might think it's silly. The beautiful thing is that the speakers wrote the intros about each other. So, we assigned…

**CHUCK:&nbsp;** That's awesome.

**AARON:&nbsp;** One speaker to intro another speaker, and then that person would in turn intro them. For the Angular team we had the most funny person on the team.

**JOE:&nbsp;** [Laughs]

**JULES:&nbsp;** Oh, he's here, too.

**AARON:&nbsp;** Yeah, Jules looks right at Jeff. We had Jeff write the intros for the Angular team.

**JOE:&nbsp;** He is. But looks aren't everything.

[Laughter]

**AARON:&nbsp;** So, we made sure the talks are killer. We made sure the talks are killer but then we tried to just throw some fun around it to make it entertaining because you're in a room for seven hours and it can be tough. Am I right?

**JOHN:&nbsp;** So, you guys did an intro with me and mentioned I worked in a prison? [Laughs]

**AARON:&nbsp;** People thought that was real.

**JULES:&nbsp;** People actually wanted to know if that was real.

**JOHN:&nbsp;** They did. I was getting text messaged. And people on the Angular team even going, “Hey, that's really great to do that. Can you help you my friend?”

[Laughter]

**AARON:&nbsp;** I believe that. He looks like he worked at a prison.

**JOHN:&nbsp;** So thanks, Joe.

[Laughter]

**JOE:&nbsp;** You're welcome.

**CHUCK:&nbsp;** Yeah, but that said. Even the Star Wars party, there were Star Wars stuff all over the place on Wednesday?

**JOHN:&nbsp;** And Ward was holding a lightsaber, by the way. I have pictures.

**CHUCK:&nbsp;** Ooh, proof positive. [Inaudible]

**JULES:&nbsp;** I seem to have seen a video of Ward actually having a lightsaber duel.

**JOHN:&nbsp;** Fighting Naomi on the Angular team with a lightsaber.

**JULES:&nbsp;** Says you don't like Star Wars.

**CHUCK:&nbsp;** But the thing is…

**AARON:&nbsp;** Is this true, Ward? Is this true?

**WARD:&nbsp;** Yeah, I got into a fencing match with Naomi with the lightsabers.

[Laughter]

**JOHN:&nbsp;** I have video. I have video.

**JULES:&nbsp;** I don't think they called it fencing back then.

**AARON:&nbsp;** Well, that I can understand.

**JULES:&nbsp;** Or whatever, in Star Wars. It's not fencing, is it?

**CHUCK:&nbsp;** But the thing is you come to these events, you go to the after party. It's a Star Wars themed after party. But the great thing is you can walk in, they had poker tables and stuff up in here. And if that wasn't your speed then you could go talk to people in the little foyer area out there.

**AARON:&nbsp;** Or the dueling pianos.

**CHUCK:&nbsp;** Yeah. But there were so many great people here that it really doesn't matter. So, you could talk to some crazy guy who was wearing a Jedi robe. Or you could talk to, you know…

[Laughter]

**AARON:&nbsp;** Who was that crazy [that's here] though, seriously?

**JOE:&nbsp;** Yeah, who's that crazy?

**CHUCK:&nbsp;** I don't know.

**KATYA:&nbsp;** Hmm.

**CHUCK:&nbsp;** But John has the same haircut as that guy. Anyway…

[Laughter]

**CHUCK:&nbsp;** You know, you could find people. We all have something in common. And there are so many great people here that yeah, that welcoming aspect, I think it comes out of the community as much as how the conference is organized. I hope that doesn't hurt anyone's feelings. But it really is. We have a terrific community. And then it's, “Hey, just come and be part of the group.”

**JOE:&nbsp;** Absolutely.

**JOHN:&nbsp;** So, we talked a little about the sessions and some of our favorite ones. But I think it's really important to note that I think one of the reasons we didn't talk too much about them is a good conference doesn't mean great sessions. It's nice to have the sessions but that's not the reason you go. At least it's not why I go. I can watch them on the internet, watch them on YouTube. It's the camaraderie to people. It's the conversations we're having that you can't have unless you're here with these people all the time. And I've learned so much from so many people, the feedback they're giving us, about how they use Angular, problems they're trying to solve, what they like, what they don't like. That stuff you just can't get. It's like a 1400-person focus group. So to me, that's really valuable to see what people want to do.

**CHUCK:&nbsp;** Yeah. Can I tell a story really quick about that? Because I was sitting at lunch, I think it was yesterday. And I was talking to a few people. And somebody mentioned that their biggest problem was their build process. And they mentioned that they have people working on different parts of the frontend. And then… no, I think it was at dinner last night. Anyway, so they were saying, there were 14 different pieces that have to get pulled together as part of their build process. And just sitting there and thinking through a problem that I had never even considered was an issue because most of the Angular I'd done backs up onto a Rails application and it's all just part of the same blob.

And so, you get to see that and it's like, “Oh, okay.” So, they're looking at Webpack or jspm or SystemJS or whatever through a completely different lens than I am. And how do we solve that problem? How do we look at these things? And just hearing how people deal with that. Or, “Well, I found testing this particular type of component was really hard.” I've heard that a few times. And just figuring out how people think about this or hearing people talk about how they plan to use the CLI. It's all of that stuff. That's the magic here. And if you come here with a problem, there's probably somebody here with a solution. And I've seen this at multiple conferences where I have come to the conference trying to figure something out, I talk to a few people, and they all say, “Well, that guy's the guy you want to talk to.” And then other people will help me find that particular person because they have the expertise that I need. And you just, yeah, you can't get that anywhere else.

**JOHN:&nbsp;** So Ward, what did you think of the conference? Because you just joined us.

**WARD:&nbsp;** Well, I loved it and I loved it for all the reasons that you described. There are an enormous number of hallway conversations that go places that you weren't even knowing that you could go. And there's a friendliness to it and an openness to talking and sharing uncertainties that we all have and are uncomfortable sharing that comes right out. There were a number of things that were done at the conference to promote that. The Ask Me Anything’s were really cool because people would do it there. But it could be you're standing in line, they get a drink [inaudible] and you're there in that line. And that's an opportunity for us to turn to each other, somebody you don't know, and have your mind blown.

I would also say the sessions were very strong. The formal presentations for which we were all gathered together and we all saw it at the same time were very strong. And there was one in particular, maybe you all called it out already, that I was deeply moved by which was Tero's generative art one. That took me to a different place. It brought computing to the soul somehow. And I admire that one a lot. And I hope that one of the things seeing something like that can do is make me think about how I can present my own stuff in the future to try and touch people.

**AARON:&nbsp;** That talk, I think that talk was amazing. And to go with what John was talking about, that's what you get when you come. It's one thing to hear his talk but to come here and meet Tero is the next level. Because he's one of the nicest people ever. And his talk, I think it meant a lot to a lot of people. And the NativeScript team that's here, they went and they modded his repo or whatever and they've built it in the native iOS and Android app now using NativeScript. And they deployed it to the App Store or to the Play Store. So, that talk in particular is a focus point for a lot of really cool things that happened here. I agree.

**JOE:&nbsp;** So, I'm curious, specifically John, Ward, as speakers. One of the things that we did this year which was I think a little bit different is we gave speakers assignments besides just speaking. In addition to speaking you had to do your AMA kind of Q&A session which isn't that unusual. But we also had two rooms, a Tour of Heroes room where people could go and walk through the tutorial on Angular 2 and we had an expert's room as well. And we asked speakers, we actually assigned speakers a couple of hours on Fair Day that they needed to be in the room and be there for attendees. And I've had conversations with John about how he loves the hallway conversations and this is almost like you want a hallway conversation, it might happen in the hallway. But if you go to this room they will happen. So for you guys, in the time that you spent in those rooms, what was your impression and experiences there?

**JOHN:&nbsp;** It was fantastic. Those who don't quite understand all the details Joe, if you weren't here, there was a Tour of Heroes room which people could come in and work on the Tour of Heroes tutorial and we would help you, the four or five people in the room at a time. There was another room, the Ask Me Anything’s. I think people have experienced that before. And experts rooms. We also had side sessions too. And those side sessions were packed which was amazing. I could barely get to the stage when I was five minutes late to getting here, because I was trying to run from a Tour of Heroes room to that one, when Dan and I were speaking. But to me it was great. I was exhausted yesterday. I think I did six of those. And by the end of it I probably looked it. But it was amazing. I love all the people I got to speak with. I wish every conference would do that, honestly.

**CHUCK:&nbsp;** That is really cool.

**WARD:&nbsp;** I was going to just say I agree. We need these kinds of opportunities to meet with people and to see them solve problems. And the hallway encounters are great. But this broke some of the barriers to people talking to each other. It was exhausting but was as exhausting for them as for us. But it got us… there's no sitting around in the speaker room which is what happens at a lot of conferences where speakers…

**JOHN:&nbsp;** Thank you for not having a speaker room.

**WARD:&nbsp;** Yeah, thanks for ha-… yeah, we don't need a speaker room. Our speaker room is right out there with the people who are coming and attending and having them look us right in the face and say, “Man, this doesn't make any sense to me.” That's gold.

**JOHN:&nbsp;** That's a new wave, too. I got to say this because I helped chair some other conferences. I don't run them like you guys do but I help chair them. And I've been trying to bring this idea to them that people here pay to interact with everybody. That's what they're… They're here to interact, not just to hear the session. And when speakers go hide in a room for eight hours and you never see them, you lose that interaction. And they are going to hear back as speakers are like, “Well, I need the time to prepare.” You've had six months. So, come here and talk to people. Where else can I meet everybody? So, that seemed very…

**WARD:&nbsp;** I like [it] a lot.

**AARON:&nbsp;** That, your comment kind of brings us back to a point that Joe was talking about that I wanted to come back to anyway. One of the purposes we have, one of the outcomes we hope for, because we have multiple. But along the way Jules mentioned that this isn't the Angular team's conference but we try and respect as many of the things that Jules or her team would asked for. And one of the things they've asked for is, “We need a chance to say hi to every attendee.” Like every attendee needs to meet at least one of the core team members. And so, part of what we do is to try and make it an environment where the Angular team can be available for anyone who wants to, to come up, say hi to them. They need to be approachable. And they've agreed to be there and to welcome anyone who wants to come up and talk to them.

And so, part of our goal, another one of the goals was to create an environment where anyone who wants to can go chat and meet Jules for the first time, which I recommend because she's really cool. And ever since she's come on the team, I've had a lot more fun communicating with the team. So, that's another one of our big goals. Because that's one of their big goals. They've asked us to do a few things. That's one of the more, the things that they're more serious about, is “We need to meet everyone.” So, yeah.

**JOHN:&nbsp;** Jules, have you said hi to everybody yet?

**JULES:&nbsp;** Hi.

**JOHN:&nbsp;** Everybody here want to say hi to Jules? Count of three? One, two, three.

**AUDIENCE:&nbsp;** Hi Jules!

**JOHN:&nbsp;** There you go. You just [inaudible] half the conference.

[Chuckles]

**JULES:&nbsp;** I'm blushing.

**CHUCK:&nbsp;** She was even nice to me.

**AARON:&nbsp;** Ready for next year.

[Laughter]

**CHUCK:&nbsp;** Alright. Well, I want to make sure that we're respectful of time that there is… I just wanted to mention Shai's talk. Because I love every year that there's something just to laugh at. And it's something that is specific to us, right? We're all insiders and it's all inside jokes. And it's just, it just adds another flavor to the conference. So, last year it was 'ng-wat'. And this year it was 'The ng-show' which I thought was kind of a fun name there.

**JULES:&nbsp;** I mentioned that when I was here last year at ng-conf that I didn't work on the Angular team, never planned to work on the Angular team. I was here just trying to get a vibe for how the developer community had moved since the last time I was a part of it. And in my ng-conf trip report I had a whole paragraph on Shai's ng-wat session. They were all inside jokes to your guys. But the thing that I saw from… I actually cried in the audience last year because it was so funny. And I didn't even know what any of the things meant. I had never used Angular at that point.

[Laughter]

**JULES:&nbsp;** But the thing that it showed me last year and when I had the opportunity to meet Brad and they asked me to join the team, I went back to that moment of sitting in the audience last year and hearing everybody just really come together over these funny things. And it was an amazing experience for me being external to the team at the time. And then to be able to sit in the front row and see the one this year and know a lot of what was behind it was really [just] a great session.

**CHUCK:&nbsp;** So, one last thing I want to bring up is there are a lot of talks and they happen really fast. Some of them are 20 minutes. So, you just get that taste of something and then it moves onto something else. And I think sometimes I come to these conferences and I'm like, “I'd really like to go get a deep dive.” But the flip-side of it is that I get to see a little bit of everything and then move ahead with that. I wonder how deliberate that is though with the conference format when you think about that. Are you looking at these topics and going, “Yeah, that's a 20-minute topic and that's a 45-minute topic”?

**JOE:&nbsp;** Sometimes.

**AARON:&nbsp;** We don't really do 45-minute topics. So, before we did ng-conf Joe and Dave and myself had spoken quite a bit at conferences around and gone to a lot of conferences as well. I know a lot of us in the room have. And you get there and when you have a 60-minute talk or a 45-minute talk, the talk actually lasts 30 minutes or 45 minutes when it's a 60-minute talk. And then there's 15 minutes of fluff. So, that means you got a 10-minute intro of who they are and you got to sit and listen to John talk about everything he's done including the prison work.

**JOHN:&nbsp;** [Laughs]

**AARON:&nbsp;** And every repo he's ever owned and whatevs, right? And then after 10 minutes of the warm-up he'll actually do some stuff.

**WARD:&nbsp;** Wait a minute. You're not going to take away those 10 minutes of John's time in prison, are you?

**AARON:&nbsp;** No, no.

[Laughter]

**AARON:&nbsp;** And so, we were like, "We're done with that. That's not a talk that's going to happen if we're organizing.” These talks will have zero time to intro yourself other than your name and your Twitter handle. And then at that point you've got 19 minutes and 40 seconds left to actually get your point across which is not easy. And John's spoken where multiple times. Ward's spoken here multiple times. They know. Katya's spoken here. It's not easy to fit your talk in that time limit. So, that's what we're doing. We're challenging the speakers to go straight to the point. And there's no fluff. So, when it's that intense though, it has to be a lot of fun as well. Because…

**JOHN:&nbsp;** Yeah.

**AARON:&nbsp;** By the end of the day your brain is like, “I'm shutting down now.” It's over. So, yeah.

**CHUCK:&nbsp;** Unless you put an electrode in it.

**AARON:&nbsp;** You could do that.

**JOHN:&nbsp;** But it's great, because if you come to a conference wanting to learn, to learn like a 40-hour workshop kind of thing, that's not a conference in my mind. Today I get asked more than any other question at this conference, I've been asked, and it's at every conference, “How do you keep up with things?” And one of the ways I love at this conference that kind of goes with that is because I'm getting so much content, information, I'm being inspired to look into some things. Other things I saw and I'm like, “That's cool but I can't use it right now.” But I can file it away for later and know how to get back to it. I come here to be inspired by topics, not to learn every single feature and how it works under the covers. And you guys provide that avenue and I think that's really valuable.

**CHUCK:&nbsp;** Yeah. Now, I know we're up against a time barrier. So, we're going to go ahead and just go straight to picks. If you listen to the show you know what those are. If you don't, it's just one or two things that make our lives better is the way I describe it. So, it could be a TV show that makes you laugh or it can be a technical tool that makes work easier. We'll start down here with Ward and we'll just work our way down.

**WARD:&nbsp;** That's terrible, man. I'm just going to say go watch Tero's talk and think about how you can combine the art and something personal in your life with your technology.

**JULES:&nbsp;** My pick is for you and your entire team of people who, the ng-conf… you know, I've been working with Sunny and you guys for a number of months now to try to make sure that this event gets pulled off right, that we have everything. And I don't think the attendees realize how much work this team has put in to making sure this conference is great. You show up, the chairs are there. The food is there. You get 1500 water bottles and Girl Scout cookies dispersed and everyone to be where they are is super, super, super hard and takes a lot of coordination. So, thank you for all you guys did.

[Applause]

**KATYA:&nbsp;** I'll pass the sentiments along to Sunny. [Chuckles] My pick is the Shai show.

[Chuckles]

**KATYA:&nbsp;** That was showed. I don't know how many of you saw the live stream but it was showed during the live stream on the TV outside. I was actually in the news room watching it on a little computer screen and it was hilarious the antics that Shai got up to. So, that's my pick is the Shai show from the news room live stream yesterday.

**JOE:&nbsp;** I'm going to do the same thing as Jules, having a little bit of inside information as well. I'm going to pick Sunny and her staff. Year one we asked Sunny to just do some things that we couldn't do because we had day jobs. Year two, Sunny was basically running every aspect that didn't involve us making a decision. And then year three Sunny is one of our decision makers. So, she's an amazing entrepreneur, an amazing organizer.

**AARON:&nbsp;** The whole ZeroSlope Events team is just awesome.

**JOE:&nbsp;** Yeah. She's brought on now multiple people that work a lot for her. And a lot of people that work a little for her. And she has done a great job picking staff that is amazing. Every aspect of being an entrepreneur I admire about what she does. And working with her is a pleasure. And having her on our organizing committee is just invaluable. So, that's going to be my pick is Sunny and her staff.

**CHUCK:&nbsp;** I'm really quickly, since I have a moment to shout out, I'm going to pick the sponsors. I think a lot of times we think… We come in. They have their [boots] and they want us to come talk to them. But honestly a lot of these companies are out there providing solutions to our problems. And we need to take a minute to go see what they're about. The other thing is that these conferences can't happen without them. And so, the fact that they are generous enough to put some money down, send some people out to meet us and see how they can help us, and then we get to show up essentially at a discount because they're covering some of the costs so that we can have a great event, I just think it's terrific.

**JOE:&nbsp;** Here, here.

**CHUCK:&nbsp;** So, I'm going to pick them.

**JOHN:&nbsp;** Yeah, I'll pick the organizers again and for a different reason. Something they do here that's genius that I'm not sure everybody in the live stream can see is in between sessions, there's three minutes, sometimes five or six pending technical difficulties or a speaker not getting up there, like me. And one thing they do is they give away these prizes. And the prizes are either one of two categories that I've seen. They're either something really cool or something so bizarre I have no idea where they found it. Like a Veggetti?

**AARON:&nbsp;** Veggetti.

[Laughter]

**AARON:&nbsp;** What?

**CHUCK:&nbsp;** This is a clean show.

**JOHN:&nbsp;** A vegetables pasta maker.

**AARON:&nbsp;** Yeah, vegetable spaghetti. Veggetti.

**JOHN:&nbsp;** But it keeps people… it's genius because it keeps people in their seats in between the sessions and people don't leave. The whole day they're in this room and they're paying attention and it's fantastic.

**CHUCK:&nbsp;** The problem is that they can't say anyone's name unless it's Dave.

[Chuckles]

**JOHN:&nbsp;** Yeah.

**AARON:&nbsp;** Yeah, that was weird how many Dave's there were. We actually have a competition going right now. Make sure to tweet 'ngDave' with your guess on how many Daves we had.

My pick is karaoke. It was insane. I don't know what karaoke night is usually like because that was my first time. But it was absolutely insane, dude. The last few songs, the whole room… is that normal? The whole room sings it.

**KATYA:&nbsp;** No. That's kind of [inaudible]

**AARON:&nbsp;** So, Bohemian Rhapsody and then closing time comes and it was insane.

[Laughter]

**AARON:&nbsp;** And half of us were completely sober. That was the silliest part, was we had no excuse. We were just insane. So, yeah.

**KATYA:&nbsp;** Bohemian Rhapsody number was my favorite. That was awesome. [Chuckles]

**AARON:&nbsp;** Yeah, that was fun.

**CHUCK:&nbsp;** Alright. Well, we'll go ahead and wrap this up. Thank you to our live audience. There are a lot of people in here today. If you're interested in the podcast you can find it at AdventuresInAngular.com. And we're on iTunes and Google Play Store now. They just opened that up for podcasts.

**AARON:&nbsp;** Nice.

**CHUCK:&nbsp;** And Stitcher and wherever else you get podcasts from. So, just a big thank you to conference attendees, to the listeners, and to our panel.

[Applause]

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**


