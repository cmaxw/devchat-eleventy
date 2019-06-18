---
layout: layouts/post.njk
title: >
  100 AiA Episode 100! Here's to 100 more!!
date: 2016-07-07 07:00:28
episode_number: 100
duration: 39:57
audio_url: https://media.devchat.tv/adventures-in-angular/AiA100.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

## Check out [Angular Remote Conf](https://allremoteconfs.com/angular-2016)! Buy tickets! Submit a CFP! Check out the speakers!

&nbsp;03:00 - The Origin Story and Success of [Adventures in Angular](https://devchat.tv/adv-in-angular)

- [ng-conf](https://www.ng-conf.org)
- [Angular Air Podcast](https://angularair.com/)
  14:00 - The Angular Community17:30 - Where is Angular heading?
- [Suggest A Guest!](https://devchat.tv/adventures-in-angular-guest-recommendation)
- [Microsoft Build Conference](https://build.microsoft.com/)
  24:39 - Favorite Episodes
- [NativeScript](https://www.nativescript.org/)
  - [Episode #74: NativeScript with Burke Holland and TJ VanToll](https://devchat.tv/adv-in-angular/074-aia-nativescript-with-burke-holland-and-tj-vantoll)
  - [Episode #90: NativeScript Part 2 with TJ VanToll](https://devchat.tv/adv-in-angular/090-aia-nativescript-part-2-with-tj-vantoll)
- [Episode #16: NG 1.3 and 2.0 with Brad Green, Igor Minar, and Miško Hevery](https://devchat.tv/adv-in-angular/016-aia-ng-1-3-and-2-0-with-brad-green-igor-minar-and-misko-hevery)
- [Dan Wahlin](https://twitter.com/DanWahlin)
  - [Episode #20: Structuring Code in an AngularJS App with Dan Wahlin](https://devchat.tv/adv-in-angular/020-aia-structuring-code-in-an-angularjs-app-with-dan-wahlin)
  - [Episode #41: TypeScript with Dan Wahlin](https://devchat.tv/adv-in-angular/041-aia-typescript-with-dan-wahlin)
  - [Episode #96: Angular 2 and TypeScript with Dan Wahlin](https://devchat.tv/adv-in-angular/096-aia-angular-2-and-typescript-with-dan-wahlin)
- [Episode #59: Learning Resources](https://devchat.tv/adv-in-angular/059-aia-learning-resources)
- [Episode #34: LIVE! from ng-conf 2015](https://devchat.tv/adv-in-angular/034-aia-live-from-ng-conf-2015)
- [Episode #94: LIVE! from ng-conf 2016](https://devchat.tv/adv-in-angular/094-aia-ng-conf-2016-live) &nbsp;&nbsp;
- [Episode #99: Firebase and AngularFire2 with David East and Jeff Cross](https://devchat.tv/adv-in-angular/099-aia-firebase-and-angularfire2-with-david-east-and-jeff-cross)
- [Episode #77: 2016 Year Predictions](https://devchat.tv/adv-in-angular/077-aia-2016-year-predictions)
- [Episode #70: Holiday Pick List](https://devchat.tv/adv-in-angular/070-aia-holiday-pick-list)
- [Episode #51: The Angular 1 Compiler with Tero Parviainen](https://devchat.tv/adv-in-angular/051-aia-the-angular-1-compiler-with-tero-parviainen)
- [Episode #17: AtScript with Miško Hevery](https://devchat.tv/adv-in-angular/017-aia-atscript-with-misko-hevery)
- [Episode #55: Promises](https://devchat.tv/adv-in-angular/055-aia-promises)
  &nbsp;Picks
- [NativeScript](https://www.nativescript.org/) (John)
- [Snap Power Chargers](https://www.snappower.com/snappower-chargers/) (John)
- [Stellaris](https://store.steampowered.com/app/281990/) (Joe)
- [ng-conf 2017](https://www.ng-conf.org) (Joe)
- [Burke Holland](https://twitter.com/burkeholland) (Aaron)
- [AngularConnect](https://angularconnect.com/) (Aaron)
- [Rocket League](https://store.steampowered.com/app/252950/) (Chuck)
- [Zig Ziglar](https://www.ziglar.com/) (Chuck)
- Going offline (Chuck)
- Shooting firearms (Chuck)
- [Angular Remote Conf](https://allremoteconfs.com/angular-2016) (Chuck)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send your developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not, that’s totally up to you. You can check it out at KendoUI.com]_**

**CHUCK:** Hey everybody and welcome to episode 100 of the Adventures in Angular Show. This week on our panel we have Joe Eames.

**JOE:** Hey everybody.

**CHUCK:** John Papa.

**JOHN:** Hello.

**CHUCK:** I'm Charles Max Wood from DevChat.TV. Quick shout-out about Angular Remote Conf that's going to be September 14th through 16th. We also have Aaron Frost with us who was one of the original panelists on the show.

**AARON:** Hello. It's good to be back.

**CHUCK:** It's really interesting. We've been doing this for almost two years now.

**JOE:** Yeah, it's crazy.

**CHUCK:** We've been live at two ng-confs. We've talked about this stuff since I think before they announced Angular 2.

**AARON:** Angular 2 has been long in the making. It'll be tough to say which one came first.

**JOE:** Looooong….

**AARON:** Angular 2 has been looooong in the making.

**CHUCK:** Does that make us the chicken or the egg?

**AARON:** If it was Adventures to Angular, maybe.

**JOE:** I'm pretty sure when we talked about doing this podcast that we didn't know about Angular 2.

**CHUCK:** I'm pretty sure as well.

**JOE:** I remember when we – do you remember when we first talked about this podcast, Chuck?

**CHUCK:** Yeah, it took me a few months to come around. So, I think it was like in February or March of…

**AARON:** 2014?

**JOE:** Do you remember where and when that was?

**CHUCK:** No.

**JOE:** I do. It was at Code Camp, whatever year that was.

**CHUCK:** Oh, really?

**JOE:** University of Utah. You and I were hanging out in the green room.

**CHUCK:** I haven’t been at the Code Camp since.

**JOHN:** I'm curious from you guys to hear about the creation stories. I think I came in maybe seven or eight episodes in. But how did you guys get this idea? I mean, nobody was doing podcast about Angular at that time. I think you guys were the first that I know of.

**JOE:** Yeah, it was actually Aaron's idea.

**CHUCK:** Oh, really?

**AARON:** Mine?

**JOE:** Yeah. You came to me and said, "We should do a podcast," you were on JavaScript Jabber at that time. You're like, "We should do an Angular podcast with Chuck."

**CHUCK:** So were you, Joe.

**JOE:** Oh, yeah. I was on JavaScript Jabber at that time.

**CHUCK:** And Merrick as well.

**JOE:** And Merrick was. I went and talked to Chuck at that Code Camp and presented the idea. He was relatively warm, I remember. Then we met at that Thai place for lunch and talked about it.

**CHUCK:** I remember initially I was like, "I don’t know if I have time for another show," but I liked the idea. And you guys kept bringing it up. So finally I said, "Alright, let's do it." That's what I remember.

**JOE:** Right.

**JOHN:** So today, we're going to talk about – you mentioned Chuck that we're going to talk about 100 shows in review and what our favorite parts were. Tell us about this.

**CHUCK:** Yeah. I don’t know if there's more to tell about the origin story of the show.

**JOHN:** What made you guys think this was going to work? I mean, you think about this perspective. Yeah, Angular is big now and it was big then, but I think it's bigger even now.

**CHUCK:** I think so too.

**JOHN:** But to have a podcast on a single framework, that seems kind of limiting. I don’t think it has been, but it seems kind of limiting when you first think about it. So, how did you get there?&nbsp;

**AARON:** I think the reason was I thought it would be good, I don’t know about anyone else. But local to where we, all three of us - Joe, Chuck and I - are, we had an insanely successful JavaScript user group that grew every month. Every month got bigger and more successful. And then, I don’t know if it was around that time, I think it was kind of around, then they broke out and started – I mean, that JavaScript group was just getting inundated with requests and they broke out and did their own like AngularJS meet up. I think we just saw how much demand there was locally. We knew it was probably similar everywhere. That was kind of what kind of made me [inaudible]. Anything Angular at this point is probably going to be pretty successful.

**JOHN:** Do you think that the podcast and even things like ng-conf, do you think those things have been successful because of Angular? Or do you think those things have helped contribute to kind of the widespread knowledge about it?

**CHUCK:** I want to jump in here and answer your last question first. I think it ties in to what you're asking now. But for me, from my perspective, the other reason that this appealed to me, as far as doing a podcast about Angular, was that I have friends that have done much more niche-down shows than say, JavaScript for JavaScript Jabber. And what they found is that they got a more focused, more engaged community out of it than some of the more general podcasts tend to. And so, I wasn’t so concerned about it being as big or as successful as Ruby Rogues or JavaScript Jabber. I knew that it would get as big as it needed to. Like Aaron, I had some idea that we would gather enough people from the Angular community to make it a success.

As far as your next questions go, I think the answer is both – we have helped shape and create conversations around the Angular community. But I also think that the growth of Angular has contributed to the success of the show mainly because there are a certain number of people that tend to like to get their information in an audio format. And so, by having the shows available in a podcast format and have it available so that people can hear the conversations and get the information that we're putting out there and finding out any news that we bring up and things like that, I think that contributes to that.

It's raised awareness of at least a couple of conferences that I'm aware of including ng-conf and Angular U and Angular Remote Conf. Then the other thing is we've also had people come in and try and contribute to, "Hey, how about a conversation about this, how about a conversation about that." And so, in some ways, we act as a surrogate for the community in providing a gathering place for the community so that the Angular community has&nbsp; more than just Angular.io or Angular.google.com or wherever that information is to go to, to get the information that's out there.

And so I think it's all kind of been a little bit synergistic in the sense that we both represent, contribute to, and benefit from the community.

**JOE:** Well said.&nbsp;

**AARON:** Yeah. To answer John's question which is who makes who, who made it who - ng-conf and Adventures in Angular and how to make Angular or the other way around, I think ng-conf and Adventures in Angular and things of these nature help Angular. What my feeling is that any cart that [inaudible] to the Angular horse is [inaudible] beyond for a pretty wild ride.

My thought is that Angular and Angular team is what make this stuff big and they encourage a [inaudible] from the community which I think whatever you want to say about any other framework or this framework, the community around Angular unparalleled compared to any other community around any other framework. I really think it's Angular itself and the Angular team.

**JOE:** I agree with you, Aaron, that I think Angular has become so big and it's been big for a while. And I think a lot of people are really excited to do anything with it to the point that people are craving for a while. And even still now, people are craving anything to find out information. It's really hard in this day and age to figure out, "How do I keep up with technology XYZ?" And there's a lot of ways. There's Twitter, there's blogs, there's Angular.io docs, there's podcasts, there's conferences, there's podcasts, there's videocasts, meet-ups, user groups, all sorts of things. I don’t think there's any one way to do it, but I do think that having these types of things and Angular Adventures, we're just one piece of it. But I think all these things are needed to keep Angular moving. Otherwise, there's some groups of people who only listen to podcasts and some people who only watch Twitter, and so on and so forth.

**CHUCK:** One thing I just want to add to what Aaron said too was that anything that hitches its horse to Angular is in for a ride, I think that’s mostly true. But I also think it needs to add something to the community or at least be in sync with the community and the feel of the framework and the message that the core team is putting out there. If you're in there and you're trying to spoil or cause problems or if you're just slightly out of sync with the rest of the community and not on message with what people are really doing or thinking or feeling about the framework, then I think you're going to lose enough people to where you're not going to be successful.

But the flipside of that is that there's such a strong feeling among the people who use Angular as to what it is and what they want it to be and what they get from their community that it's pretty easy to figure out what that is and fall in line with it and then help augment it so that we bring more people into the community that match up with what we want the community to be.

**AARON:** Yeah, I agree with that. I think you have to add something, right?

**CHUCK:** Yeah.

**JOE:** Like today, I know of a couple of different podcasts that do Angular and there's also the Angular Air Podcast where these guys are pretty successful too and doing a good job. But I think you can't just have 20 podcasts of the same thing. There's definitely rooms for perspectives or 20 [inaudible] of the same thing. They get to add something. I still think there's plenty of room for people to add things to the Angular community. So if you're feeling you're out there, if you feel like you have something to offer either as a blog or a podcast or something else entirely, or just a GitHub repo that shows how to do something wicked cool with it, I think there's plenty of room and opportunity to still do that.

**CHUCK:** I think it's interesting you say that because it really does (a) line up with the message of Angular, but (b) yeah, I mean, Ward has a bunch of perspective from writing the docs and you have a bunch of perspective from building stuff in Angular and writing the style guides. Aaron has perspective from his work and from the people that he interacts with. And he and Joe have perspective from organizing ng-conf and we all have perspective from talking to some of the people that we've had on the show. Jules who's a regular on the show has a perspective from being in contact with the folks that are building Angular on a day-to-day basis.

And so, all of those perspectives are valuable and the guys on Angular Air, Patrick and Jeff and all of those guys, they're coming at things from a little bit different place and they have their experience to bring as well. And so, we don’t invalidate each other by kind of doing the same thing. I think eventually it could saturate the market, but I think then it just comes down to 'I don’t have time to pull in one more voice on Angular'. And so, there's a particular show or a particular resource that gets [inaudible] more than the others.

**JOE:** And to be clear, I do this show because I find value in the conversations and the perspectives that we hear from our guests. It's not the answers we provide but the questions in a way of thinking about the problems. If I didn’t find value in these things, I wouldn’t be part of the show. I wouldn’t listen to it either [inaudible].

As long as we're posing the right questions, it's not just about finding the answers, but how do you think about these problems? I think that’s value.

**CHUCK:** And this ties directly in because I've been thinking about what's kind of the core mission of DevChat.TV in all of the shows that I participate in week to week. My overarching goal is to help developers recognize that we all have a particular talent or skill that we can use to impact the world in ways. We are empowered people and we have a certain level of opportunity and privilege that we can go and make a difference. We can go work for the companies that are making the difference we want to make, or we can go and share our skills with people who are trying to move up in the world, or whatever. But the world is running more and more on code like what we write.

And so, all of these perspectives, all of those levels of experience, all the conversations we have, all directly contribute to helping people who are trying to make that difference have the tools necessary to do that work. I think that kind of synergy and that understanding between all of us that we care not just about the code but about people writing code and about the reasons why we write code, I think that all comes into the podcast that makes it what it is. It goes well beyond just 'oh, there's another library out there that makes Angular nicer'.

**AARON:** I think the community running here is pretty cool. We have a lot of diversity as far as people's experience levels. I think that’s one of the very things that I know is it lends itself well to all the experience levels. Guys like John Papa could do it and liking it and enjoying it [inaudible], all the way down to people who are just beginning and it lends itself well. Angular 1 lends itself very well and Angular 2 looks like it's going to lend itself well.

And I think that creates us a pretty community. At ng-conf, one of the things we highlighted was we found these two guys who just apparently sit on Stack Overflow and answer AngularJS tags all day long. And we had a really special moment where we pulled Marc up on stage. [Inaudible] Jack and I was like, "Who knows this guy?" I looked in the audience and one person said his name. One person raised his hand and I knew he knows him. "Okay, even though you don’t know this person, I didn’t know him. He has affected all of us more than you even know. He has helped Angular more any of us probably could. He's got the all-time high score on Stack Overflow for answering Angular questions." The applause that this guy Marc got was just absolutely insane. And he was so humble, "I don’t think I should speak; I don’t really want to speak. I'm just here to be part of the event." I think there are so many people who are like that. They're just like, "I just want to help."

Early on, when people were just wild-westing it, John Papa, Todd Motto and a couple of other people pumped up with this really valuable, insanely valuable style guides to help us all kind of wrangle a [inaudible] as far as writing things the right way. This has just happened again and again and again, and I think other communities are missing these types of investments and contributions. They get so many contributions but I don’t think they get them like the way that Angular community gets them. And I think that’s a really special thing. Anyone listening, I think the people listening here are the ones who make it special. I think the community specifically is what makes it what it is, which is the framework of choice.

**JOE:** I agree with you. And I think if you really look at why that really happens, we really cut in [inaudible]. You can build awesome solutions with Angular 1 or 2. When it comes down to it, how are you going to be allowed to use a technology at work? Your leadership needs to feel confident entrusting you and your team to build the solution that you're trying to do, the business solution. They can do that with Angular 1, and now with Angular 2. I think because that trust and that confidence is there in such a great product, that kind of lends itself to the community wanting to go above and beyond.

**AARON:** I agree. I totally agree with that. And because the community, when you're at work and you get stuck, that's your 1-800 number, right? It's not like a Microsoft product where you call Microsoft. It's open source and how do you get unstuck? Stack Overflow and local user groups and stuff like that. So, the community is so important more than I think most people realize when you're building an enterprise team of developers around a specific framework. I think Angular know that story really well. Thanks to the Angular team but also thank to the community just made it really easy to understand that these are people here for you, this is the 1-800 number and it really works and it's super effective and everyone's really friendly.

**CHUCK:** We've been kind of talking about the community and kind of the path that Angular has been on, path that the podcast has sort of paralleled in certain ways. Where are we going and how does the community and the core team and all these other things that we've been talking about, how do they kind of fit in to that?

**AARON:** That's a good question. That’s a really good question. In my opinion, and this is just one I realize and I don’t know if it's official, when we are picking talks for ng-conf, one of these talks came up and he was like, "Hey, these inline styles that you can do in Angular 2, I think these are really important and you should talk about them." I kind of got his vision. My [inaudible] thinks it's going to be important in here too. He gave a killer talk at ng-conf. I think the community just by picking the topics they think are valuable, I think they get to direct everyone on where we're going to go. But also, the guys like John and the people who are in there using it right now, who are dealing with the major API [inaudible], they are the people that are getting to shape Angular 2. And it doesn’t matter if you just started Angular 2 today, you have a chance to be one of the movers and shakers. It's a pretty good time to relive what we lived on Angular 1 like see a bunch of pioneers come up and help everyone. That's my thought.

**JOHN:** I 100% agree with you. I think the more feedback we get on the community on the talks, my favorite sessions, my favorite shows are the ones where somebody has said, "I really wish I knew how to solve this problem. I really wish I knew how directives should be written."

[Distorted audio] about it, those are the ones that I get the most enjoyment and value at it. So, I'd love to actually collect [inaudible]. If you're interested in a topic and we haven’t done it or you want to see us do it better, contact us on Twitter at the Twitter handle that Chuck can give you here. And let us know. We'll find people to go on the show to do it.

**CHUCK:** The other thing that you could do is if you go to AdventuresInAngular.com and you click on 'suggest a guest' or 'suggest a topic', you can actually fill stuff in there and we get those in [inaudible] that we work off. Mandy in particular works off of that to get us the right people to have these conversations with.

**AARON:** Kind of looking back at Angular since this is 100th episode, I look back at kind of where was at 2013 when I started using it. I think it was a big deal back then. It was nothing like it is today but it certainly was a big deal and it was certainly changing things.

I with a couple of my friends got lucky enough to start a conference around. I think Joe and I have been these – it's kind of a weird group of people to be oddly benefitted by the growth of Angular and be embraced by the Angular community. We're not guys who wrote some amazing library in Angular or did some amazing style guide. I feel fairly average as far as my contribution to the community. I've done a lot of presentation but I haven’t done anything like course altering.

But we did get to sit down and do a conference around it and it’s been pretty well accepted. And the community is pretty odd and overwhelming how thankful and gracious people can be when they talk to you about your stuff. I hope that everyone doing like contributing to the community whether it's pull request on the repo or Stack Overflow or meet-ups or whatever you're doing, I hope everyone's getting the same feeling of graciousness from the community because it’s been overwhelming.

Joe, I think you can agree that it's been kind of oddly overwhelming.

**JOE:** Yeah, absolutely.

**JOHN:** Don’t diminish what you guys have done because the conference you guys did, yeah, it's just another conference. But there's nothing quite like ng-conf out there. It's more than a conference to me. What you guys did with that is so unique. I've literally been to probably 70 different conferences around the world and many of them multiple times, there are some good ones and some bad ones. Ng-conf is at the top of my list because of the way you guys run it and the atmosphere and the environment. So I think you guys have got a significant impact on [inaudible]. People want to be there and that’s different than some conferences.

**CHUCK:** I agree just for the [inaudible] in general. The other thing is that how many ideas came out of ng-conf? I mean, there's just no way to know that. How many conversations happened that are going to change the way a company uses Angular or the way that the community thinks about a particular problem? How many people showed up at some of the workshops and figured out that there were some other things they can do to empower people or to learn how to do particular things that they can share with their teams.

**JOHN:** I'll tell you an example about that too, Chuck, is Joe and I helped introduce some of the Microsoft folks to the some of the Google folks two ng-confs ago, if you remember, Joe. Microsoft folks who I know pretty well were looking to meet the Google folks who Joe knows really well and we're okay. "Why don’t you come to ng-conf and we'll do that?" And some really cool things have come out of that.

**CHUCK:** One thing that I'll point out is that I was at Build this year which is Microsoft's Build Conference and they had a whole section there for the Angular team and Google folks. They were all there. Most of the core team was there.

**JOE:** Which is insane to think about that collaboration. These two giant monolith companies working so closely on something is pretty awesome.

**CHUCK:** Yup. I was walking by at some point and I saw Anders Hejlsberg, who works for Microsoft, he was standing there working over a problem with Misko. And Brad, and Igor and Rob were all standing there commenting on it. It's just a funny thing, right?

**AARON:** Right, that was interesting. The same is true for this podcast. I think it would be cool if you can quantify, even though you know you can't, how many people came on, heard a guest or one of you guys, and said, "Hmmm…I'm going to go make a difference." And so, there's no way to like go out and extrapolate some sort of meaningful answer, but I think this podcast has been also a super successful.

I feel lame because I was only on for the first, I don’t know, 10 or 15? As I travel around in my talk, these people were like, "Oh dude, you're on Adventures in Angular." I'm like, "Well, kind of but…" I think it's meaningful, the way people talk about it. It makes a difference. I think this podcast is pretty killer.

**CHUCK:** Cool. You were asking what people's favorite episodes or topics were, so I'll jump in with a couple that I've gotten really excited over. One of them is the NativeScript stuff. I think that’s really cool and I'm super excited with that. I think it's just interesting to see Angular move off of the web and into some of these other areas where it becomes a similar code organization paradigm but at the same time, the view logic is native view logic, it's not web view logic.

At ng-conf, I think I saw a talk or a topic where somebody – it may have been somewhere else, it may not have been ng-conf, where somebody was talking about using Angular on React Native which is kind of a similar idea. But then going and looking at the fact that NativeScript has a sort of hacky way of making it work on the Apple TV. And so you get into that, and then what about Apple TV becoming a home automation hub and what are the possibilities there. And so as you see these things start to grow and reach into more areas, it's like, "Okay, what's the limit of what this could do?" It's just super exciting for me. Not just from the standpoint of, "Oh, this makes my web apps nicer," but what else can I touch with this powerful framework?

**AARON:** When I think about doing one of my favorite episodes, I like the nuance around things as much as I like the details. So, the episode where we had Misko on, it was one of the earlier episodes. We were able to talk to him about, "Hey, tell us the origin of story on Angular," because I think everyone really enjoys those kinds of topics. At least I know we all did with [inaudible] on JS Jabber.

And so, Misko sat down and he was like he kind of explained it to us how it started and I think that – am I remembering it right, guys? It was code named Manila, either Manila or Manila Envelope like [inaudible]. And we were like, "What? Manila? Are you saying Manila?" And he was like, "Yeah, Manila." We got to sit there and kind of [inaudible] about that and learn about the early, early days. And that for me was a lot of fun to hear where it started.

And then here where it's come at ng-conf, they're like, "You know, sincerely we didn’t know what we were doing when we wrote ng-1. At least in ng-2, we know we're doing it." [Inaudible] around, "Hey, we didn’t even know what we were doing back then, but now we do and Angular 2 is harboring all this [inaudible]." That episode combined with some of the [inaudible] has been a really fun experience for me. So, go check that episode out.

**CHUCK:** How about you, John?

**JOHN:** There's a couple. I've been thinking about this since I know we're doing this show. These were the first ones that came to my mind and there were the ones that I think impacted me and some people I know the most. And so, I'll mention both these. First, the ones that first came to mind are every time Dan Wahlin gets on the show, I think it's been three times now – he and I are really good friends. So obviously, I enjoy it from that side. We’ve been good friends for over a decade. But every time [distorted audio], I learn something new. And I think that’s [distorted audio]. He just got a wicked knack for being approachable, a super nice guy. And he's teaching you something along the way too in a way that’s really easy to kind of grasp. I really like doing shows with Dan. He's one of the reasons I always [inaudible] back home.

[Inaudible] an episode that I really enjoyed, might have been [distorted audio]. A year ago, we challenged each other to figure out how do we dive into Angular 2 and really understand this, and kind of share our experience in learning Angular 2 with the listeners. We weren’t really involved with Angular 2, but frankly, it was like alpha 27 or 28. Things were starting to shape up.

I think the whole panel, we all agreed we're going to try this and then come back in three or four weeks and share what we learned. To me, those episodes really, really helped, at least from what I've heard from a lot of people, they really loved those episodes because they got to walk in the same shoes you're walking in, those same steps. You know what? We're not the only people struggling with this at that time, because there were other people trying to learn Angular 2 as it was alpha. I think those kind of episodes where we try things out and talk about the successes and the failures along the way in the learning [inaudible] were really good. I really enjoyed those episodes.

**AARON:** Out of that, I organized this local thing called ng2 hack night. I got [inaudible] prizes for some reason. I don’t even know how I got prizes for such an informal hack night. Misko came and judged everything that everyone did. And John [inaudible] came and gave their own tutorial. It was insanely successful for [inaudible] 20 minutes to kind of [inaudible] out of the event. And then these kind of ng2 hack nights popped up all over the world. I think that was an episode that I enjoyed as well. I think that was pretty cool.

**JOHN:** I forgot about the hack nights. Actually, you were the one who inspired me and the others to do hacks. So, thank you Aaron.

**AARON:** Yeah, the ng2 hack nights were big and I think it was because from the same episode you were talking about.&nbsp;

**CHUCK:** Awesome. How about you, Joe?

**JOE:** I would say that my favorite episodes are always the live episodes we do at ng-conf.

**CHUCK:** Those are always fun.

**JOE:** Yeah, I really enjoyed those. Listeners don’t know that we can edit as we record the episodes. Not that we really do it that often, usually we only edit because of internet problems. But there you're just like live, chilling out, chatting with a whole bunch of people. [Inaudible]. It was like six people sitting and watching. I don’t know how many people watch live, but that was a lot of fun.

**JOHN:** And usually, Ward is running up the stage 5 or 10 minutes late.

**JOE:** Yeah, I love that too. We're always just crazy like Ward does. But also, the other kinds of episodes that I really like were the ones – I just like getting to hear from either friends or celebrities in both the Angular community and related communities, the [inaudible] communities.

Episodes that had some really big people that I admire when we had David East on talking about AngularFire, one of my favorite tools. That was really cool. Of course, Kevin [inaudible] is awesome. Other episodes that I liked are the ones that are a little bit different like our Predictions for the Year episode, Episode 77. That was really fun. It's fun to guess what's about to go on.

**AARON:** Did you audit any of those yet?

**JOE:** No, I didn’t. I totally should.

**AARON:** You should do an audit and see what's happened.

**JOE:** Yeah.

**CHUCK:** Or we may just do that every year and then pull it out next year.

**JOE:** They were all wrong. I'm sure they're all wrong.

[Laughter]

**JOHN:** Yeah, totally.

**JOE:** Holiday Pick List, that was a fun episode to do. For ones that are very technical, one that sticks out to me is Episode 51 which is Angular 1 Compiler with Tero – I'll slaughter his last name if I even try it.

**AARON:** Just Tero.

**JOE:** Yeah, episodes like that that are super technical, I love. So those are my favorite episodes.

**AARON:** It's hard not to love any of these [inaudible], let's be honest.

**JOHN:** Yeah.

**JOE:** There's another episode I want to give a shout-out to, Episode 17 which was about AtScript with Misko Hevery.

**AARON:** AtScript, oh yeah.

**JOE:** It doesn’t even exist anymore. I think that was fun. And I'm glad it doesn’t exist.&nbsp;

**CHUCK:** I think one of the more popular ones has been Promises episode that we did.

**JOHN:** We actually won that one, didn’t we? Because I remember talking about 'what are we going to talk about'. And we had a lot of questions on Twitter and Stack Overflow [inaudible] about how to deal with Promises.

**AARON:** Who was the guest on that one? Was there a guest?

**CHUCK:** It was just us.

**AARON:** Cool. Promises can be a mind job but you get a good explanation on and you realize that they can be powerful as well, and that’s a good episode.

**CHUCK:** Yeah.

**AARON:** I should go listen to that one.

**CHUCK:** All right. I know that we have some time pressure, so I'm going to push us to picks. John, you want to start us off with picks?

**JOHN:** Sure. I've got two here. One is something you mentioned earlier, Chuck. And I've been looking pretty heavily into it lately because I've been looking into mobile products quite a bit. NativeScript has really caught my eye personally. For some other reasons that you mentioned and for some others as well, I find it's great because I can pick my Angular 2 skills and easily write a native mobile app. I don’t have to worry about – while Cordova is awesome and I love Ionic for that to make it easy. There are still places where it feels like – and it just doesn’t feel as good as Native unless I do like ninja programming. NativeScript kind of makes that go away from you because you're not using Cordova, you're using a native app. For that, I really, really like where NativeScript is heading with it and I'm going to keep diving in there. I haven’t yet gone to the point where I'm going to say, "This is the thing." But I really like where they're heading at this point. I'd like to see more their test platforms, their dev ops, and all the other kind of tooling, but it looks good.

On the non-technical side, actually it's still technical. There's a product called Snap Power. It's at SnapPower.com, I'll put a link in the show notes. It's great because basically it's a plug, it's a wall outlet cover which also now has a USB plug built into it.

**CHUCK:** Oh, nice.

**JOHN:** So, I've purchased these and I've put them in my kitchens and places that usually has got 22 little iPod plugs and now you can just use that and it frees up the regular outlets to normal things like blenders or toasters. They're like 15 bucks a pop, so they're a little pricey but frankly in my house, I think I bought five and I used three and I gave two to my dad for Father's Day. **CHUCK:** Nice. Joe, what are your picks?

**JOE:** I'm going to pick another video game and I've been playing this game called Stellaris [inaudible] Steam. It's a 4X game, so I can't remember what all the X stand for. It's like a space game. We have to explore, expand, conquer, that sort of thing, super sci-fi game, fairly slow-paced kind of easy going. Kind of like Civilization for anybody who’s played games like that. Super fun, just really enjoyed it, got really great reviews, so I'm going to pick that.

I'm going to pick ng-conf 2017. We just signed our contract today for the venue and the location and date. So, I'm excited already for that. We're already working on it. So, those are my picks.

**CHUCK:** Awesome. How about you Frosty?

**AARON:** I'm going to do two picks. First pick, I'm picking Burke Holland. This week, [inaudible] he's one of the developer folks over at Selerik or Telerik, they're the NativeScript and Kendo UI people. This week he tweeted something that kind of weirded me out. He tweeted about the patents policy on the React repo, I think it's something everyone should go read. It could potentially be really scary for a company using that. So, I'm going to go ahead and do a pick of Burke for that because I think that was a huge call-out. Those aren’t always easy to call-out.

The other thing I'm going to pick is I'm going to pick AngularConnect which is the giant Angular event, the main one in Europe and it was great year one, and looks like it's going to be great in year two. Tonight actually, they're picking the talks, or probably right now as we speak. I'm excited for that event. I'm really excited to see what happens there and to see what new things come out of that. So, I'm going to pick AngularConnect and their talk selection they're doing right now.

**CHUCK:** Awesome. I've got a handful of picks as well. The first one is something that I played at ng-conf and that is Rocket League. That is a game where you play soccer with cars and it was way fun. We were at ng-conf and I was like, "That was super fun." So, that’s definitely a pick.

Another pick that I have, this is something that I am committed to doing by the end of the year and that is to consume every bit of ZIg Ziglar content on Audible in English. They have some Spanish stuff too. But anyway, I've gotten into Zig Ziglar stuff. He talks a lot about life, he talks a lot about sales, he talks a lot about just being a good person, marriage, all kinds of stuff, just terrific stuff. So I'm going to pick his stuff as well.

As I've mentioned probably on this show or on another show. And in fact the episode that comes out next week, I missed because I was out of town last week. I was in Oklahoma and the house we were staying in had no connectivity which means that I think I got two text messages the entire time I was there which was for four days. I couldn’t actually send text messages and I had no internet connection at all. And I'm just going to pick going offline. It was super nice to be able to just not worry about anything. I could go out on the lake with my kids. I could go shooting with my father-in-law and brother-in-law. Just all kinds of stuff. I told everybody I was going to not have a connection and then I just didn’t even worry about it anymore. It was super nice. Going offline – sometimes it's hard but super nice.

Then the last pick I have is we did go out and shoot rifles and shotguns and stuff. And it was a lot of fun. I really like shooting firearms. So, I'm going to pick shooting firearms. And those are my picks.

I also need to shout-out about Angular Remote Conf again. That’s coming up September 14th through 16th which is about two weeks before AngularConnect, if you want kind of a worldwide experience. Last year we had a whole bunch of great speakers. I'm assuming we'll have great speakers again this year. So yeah, definitely check that out.

I'm also working on the conference schedule for next year. So if you are interested in remote conferences, check that out at AllRemoteConfs.com. And those are my picks.

We'll go ahead and wrap up the show. Thanks to all of our panelists and guests over the last couple of years for 100 awesome episodes and we look forward to 100 more.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**
