---
layout: layouts/post.njk
title: >
  216 JSJ Angular with Rob Wormald Live from Microsoft Build 2016
date: 2016-06-15 07:00:09
episode_number: 216
duration: 01:02:19
audio_url: http://media.devchat.tv/js-jabber/JSJ216BUILDRobWormald.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

This episode was recorded live from The [Microsoft Build Conference](https://build.microsoft.com/) 2016. In this episode we chatted with Rob Wormald of the Angular Core team at Google about [Angular](https://angular.io/). You can follow him on [Twitter](https://twitter.com/robwormald), or check out what he’s done over on [GitHub](https://github.com/robwormald).&nbsp;Picks

- [Visual Studio Code](https://code.visualstudio.com/) (Rob)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (Rob)
- [Richard Campbell](https://twitter.com/richcampbell) and [Carl Franklin](https://twitter.com/carlfranklin) from [.NETRocks](https://www.dotnetrocks.com/) (Chuck)

### Transcript

**_[This episode is sponsored by Frontend Masters. They have a terrific lineup of live courses you can attend either online or in person. They also have a terrific backlog of courses you can watch including JavaScript the Good Parts, Build Web Applications with Node.js, AngularJS In-Depth, and Advanced JavaScript. You can go check them out at FrontEndMasters.com.]_**

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the JavaScript Jabber link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job and know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/JavaScriptJabber.]_**

**_[Let's face it. Bookkeeping is hard and it's not really what you're good at anyway. Bench.co is the online bookkeeping service that pairs you with a team of dedicated bookkeepers who use simple, elegant software to do your bookkeeping for you. Check it out and get your free trial today at Bench.co/JavaScriptJabber for 20% off today. They focus on what matters most and that's why they're there. Once again that's Bench.co/JavaScriptJabber.]_**

**CHUCK:&nbsp;** Hey everybody, we're back. We're doing another of these Build episodes at Build conference. This time we're here with Rob Wormald from the Angular core team.

**ROB:&nbsp;** Hi. Hey, I'm here. [Laughs]

**CHUCK:&nbsp;** Have you been on JavaScript Jabber before? You've been on Adventures in Angular a few times.

**ROB:&nbsp;** I've been on Adventures in Angular. I don't think I've been on JavaScript Jobber directly, no. Jabber.

**CHUCK:&nbsp;** Well, maybe we should have you do a quick little intro. Do you want to tell us about yourself real quick?

**ROB:&nbsp;** Yeah. As you said, I'm Rob Wormald. I work on the Angular core team at Google. I'm the newest, actually the only currently developer advocate, which is something the Angular team has never had before. So, I was an Angular dev for, I don't know, three years before this. And then about a month ago I joined the, I joined Google full-time to be the developer advocate.

**CHUCK:&nbsp;** Yeah, I remember us talking about it in the car on the way back to the airport.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** At [ng-ml].

**ROB:&nbsp;** And I think at that point… had I joined or was I still crossing my fingers at that point? I don't…

**CHUCK:&nbsp;** I think you had been offered the job then.

**ROB:&nbsp;** Okay.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** Yeah. That was about a six-month long process I think to get in finally.

**CHUCK:&nbsp;** So yeah, so we're going to be talking about Angular. We've talked about Angular on the show before, so I kind of want to start with a little bit different angle.

**ROB:** Okay.

**CHUCK:&nbsp;** And that is that I think one, people have this idea of big tech companies liking each other and hating each other at the same time. And then the other thing is that at least the people I talk to, they tend to think of Angular as this open source JavaScript framework that they use to do their web development. And a lot of people have this older idea of Microsoft where it's this company that suppresses open source and blah, blah, blah. We're finding out that that's not the case. I've talked to several people over the last year or so that have clearly demonstrated that's not the case. But at the same time it's like the philosophies of Microsoft and Google are different. The philosophies between Microsoft and Angular are probably different. So, what is it about a Microsoft conference or a group of Microsoft developers that has an appeal for Angular, especially going forward, beyond… I mean, I can see Angular being built on the frontend of a web app built on the backend with ASP.NET or something.

**ROB:&nbsp;** Sure.

**CHUCK:&nbsp;** Is there more to it than that? Or…

**ROB:&nbsp;** I think probably we're here for a couple of reasons. And I think the first is that we work really closely with TypeScript, the Microsoft project.

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** And for us it's… so let me say, if you'd asked me a year ago “Are you going to be at a Microsoft conference representing Google?” I would have been like “You're a crazy person.”

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** There's no way I would be here. And so, I think that shows probably A, that I've had a lot of change in the past year of my life but also that both Microsoft and probably Angular, I can't speak for Google as a whole but for Angular I guess I can. And I think that everything is in this really big upheaval in JavaScript where we've got modules and ES 6.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** And there's a lot of change I think. And I think that probably us being here is indicative of that change, right?

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** And us using TypeScript is indicative of that change. And Microsoft, being big on open source is indicative of that change. I think that probably the theme here is change and new and beginnings of things. So, I guess we're here because it's really cool for us to see probably a group that we don't talk to very much.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** We know that there are a lot of Angular developers and we know that there are a lot of enterprise companies building [with] Angular developers. But we don't tend to show up at enterprise Microsoft conferences.

**CHUCK:&nbsp;** Mmhmm.

**ROB:&nbsp;** So, it's good for us because as we're getting closer to our release it's good for us to see how people are planning on using it and the questions that people get.

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** We've been asked a lot of really interesting questions today, things that we hadn't maybe considered. And so, it's good to get a different perspective for sure.

**CHUCK:&nbsp;** Yeah. You mentioned getting close to the release. When is Angular 2 coming out?

**ROB:&nbsp;** I wondered how long that was going to take. So, very soon is the most I can say without getting fired, even on a podcast. I would say that the best thing we can tell you is that we are burning down our final list of issues. So, we have what we need to have for a release candidate. And that's public on GitHub and you can track that and watch that go down. But very soon, I would say. And totally lots of people today asked us if it was a good time to start using it. And I think that that's a yes. It's a very good time to start using it now. The APIs are mostly stable. And we're trying to not break anything over this beta period. So yeah, it would be a good time to play with it. And I think by the time you're comfortable and ready and up and running we'll be good to go.

**CHUCK:&nbsp;** I was hoping to trip you up there. [Inaudible]

**ROB:&nbsp;** Sorry. [Laughs]

**CHUCK:&nbsp;** Yeah, I've done that to Igor. I've done that to Miško. I've done it to Brad about six times.

**ROB:&nbsp;** Yeah. It's, I've been asked that question. I've been [inaudible] that question today. So [laughs].

**CHUCK:&nbsp;** I'm sure, I'm sure. So, we've had Angular folks on the show before but we haven't for quite a while. Do you want to just give a brief overview of what Angular is, what it's about?

**ROB:&nbsp;** Sure. So, Angular conceptually is a framework for building JavaScript applications. So, we started with Angular 1 and I guess that's been around for six years or so now. And a year and a half, two years ago, we started rewriting from scratch Angular 2. And we are now just arriving at the end of that process. And yeah, it's a set of tools for building rich web client applications. And Angular 1 was web applications and I think Angular 2 we'd like to say that it's a platform for building applications generally.

**CHUCK:&nbsp;** Right. I may or may not have submitted a conference talk saying I want to build an Apple TV app with Angular and TypeScript.

**ROB:&nbsp;** I've seen that. That is a thing. That's the stuff that we're super excited about.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** Web apps are awesome but what else would people do with this?

**CHUCK:&nbsp;** Yeah, and I've seen the mobile apps with Ionic and with NativeScript and that's exciting.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** But where it goes beyond that, to the TV and people are talking about doing other things with IoT with Angular.

**ROB:&nbsp;** Angular on Things? Yeah, that would be cool.

**CHUCK:&nbsp;** I haven't seen it yet.

**ROB:&nbsp;** The Angular of Things.

**CHUCK:&nbsp;** But I've heard people talking about some concepts behind it. And yeah, it's a really fascinating way of thinking about some of those problems.

**ROB:** Yeah, I think for us that's a really big deal, is platform. And that we want to give you this core layer and make it really extensible to do all kinds of really, really incredible, interesting things on it. And we're definitely very excited to see where that goes for sure.

**CHUCK:&nbsp;** Nice. So, Angular 2 is coming out.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** A lot of people have been using Angular 1.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** Have been thinking “Okay, do I make the transition?” Other folks maybe have moved onto React or something like that.

**ROB:&nbsp;** Sure.

**CHUCK:&nbsp;** And now that Angular 2 is looking like it's going to come out soon…

**ROB:&nbsp;** Soon. Not next week, but soon.

**CHUCK:&nbsp;** Right. They're thinking “Okay, well do I go back?” So, how do people make a determination that Angular is the right tool for them?

**ROB:&nbsp;** That's a good question. I think that the first thing that I should say to everybody is that you should just try it.

**CHUCK:&nbsp;** That's fair.

**ROB:&nbsp;** So, if you're an Angular 1 developer, I think that Max Lynch who runs Ionic, he wrote a really good blog post a couple of weeks ago. And he said something to the extent of if you've used Angular 1 before, Angular 2 is the same. And so, everything has changed but nothing has changed. So, if you use Angular 1 today and you understand how to write applications with Angular 1 then you will be immediately comfortable in Angular 2. If you use something like React I think that a lot of the stuff that you really like from React, things like one-way data flow and Redux and all of these things that have been born of the React side of the table, all that stuff applies in Angular 2. All that kind of stuff is very much first-class citizens in Angular 2. And so, I think that there's probably, there's stuff for both Angular 1 developers and React developers.

And I think part of the reason we're here at Build is that there's stuff for people who may not have ever considered doing single-page applications before. People who've done ASP.NET backend websites forever and are used to having types and IntelliSense and all this stuff. So, there's the existing JavaScript community which obviously is incredibly important to us. And if you've gone to React then we'd love to have you back. But I don't think I'm here to sell you that. I think that if you like React and there are reasons you like React, a lot of those apply in Angular and I'd love for you to try it out. But also, if you've never done single-page application development, if you've never built a web app, we want to make that equally as easy as well, I think. So yeah, for us there are a lot of different audiences like there'd be a lot of different platforms. And I think it's important for us to enable all that different stuff.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** Is that an evasion of your question, do you think?

**CHUCK:&nbsp;** No, no. I think it's fair. And I think it really does come down to try it and see if it fits.

**ROB:&nbsp;** Yeah. It's something that… you talk about React and I think that for a lot of people it's a very simple discussion of do you like templates or do you like JSX? And I think that that's not something that you're right or wrong. I think that we like templates and that's why we use them. And I think that for a lot of people that are new to JavaScript providing web apps, I think templating and HTML are something they're very comfortable with. That's how we feel. It may not be right for everybody. And I don't think that… if templating is not something you like, then we may not be the right thing for you. And I think that's okay.

**CHUCK:&nbsp;** Yeah. I think really what it comes down to is that Ember, Angular, React, Knockout…

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** You name any of these that are even moderately complex, Aurelia, they all have certain ways they think about things. They think about data differently. They think about interactions in the DOM differently. They think about the way that you write your code differently. They think about the way you organize, the thoughts that you put into the code differently. And so, since all of them have a different paradigm to them and then each developer or team of developers thinks about their problems differently, and finally different applications have different shapes of data, a different shape of problem. And so, you're looking for something that has the best synergy between those. And…

**ROB:&nbsp;** Sure. I think that's a good way to say it.

**CHUCK:&nbsp;** So, it's funny because yeah, I like pushing the JavaScript framework. I troll on that a bit.

**ROB:&nbsp;** The framework wars?

**CHUCK:&nbsp;** Yeah. And you know, it's the same thing with the editor wars. I push that button a lot.

**ROB:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** Occasionally I'll tell people there are two types of people in the world: those that use Emacs and sad people.

**AJ:&nbsp;** I push the vim button.

**CHUCK:&nbsp;** But you know, the reality is if you get real work done with something else, then great.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** And I think that's really what it comes down to. And it's actually been rather refreshing to see that Ember and Angular and React generally, the core teams, the people involved, even people who in the political arena would be surrogates throwing the stones, instead of doing that all of these people are saying, “Well yeah there are great things that they offer too. And here are some of the trade-offs that we see.”

**ROB:&nbsp;** Sure. And I think the thing is that we're all trying to fix the same set of problems.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** We all work in this environment which is very much the Wild West. The browsers are a scary environment code to write code in sometimes. So, I think we're all kind of in the same world. And so, we're all solving the same problems and just, we all kind of come to slightly different solutions about it.

**CHUCK:&nbsp;** Yeah. And I think the other thing is that we're all working generally for the same kind of web that we want to work in.

**ROB:&nbsp;** Yeah, I think so.

**CHUCK:&nbsp;** So, it's not just the “What are the current problems that need to be solved?” But it's also, looking forward, how can we best set ourselves up for the best thing that you can have later on?

**ROB:&nbsp;** Absolutely.

**CHUCK:&nbsp;** And sure, there are some things that Ember developers probably care about more than Angular developers and the same with React. But for the most part we want to see the web advance in very similar ways where we have better tools, we have better language constructs that we're hopefully getting from the new specs on JavaScript. And by pushing these things forward with the frameworks and tools that we use, we sort of get to vote on the things that matter to us. And that informs TC39 and some of these other groups to make their decisions.

**ROB:&nbsp;** For sure, yeah. I think that, so service workers were a really good example of that. I think that service workers are probably the most important thing that's happened to the web in a while. And I think that, so the Angular team, we're really big on that. One of the things that my team is focusing on is this idea of progressive web apps and doing offline and things like that. I think for us as you said, we want to give you the tools to do that kind of stuff. And then effectively, we want people to vote with their apps. It's not in Safari yet but we would love it if Angular developers could have the tools to build offline apps and encourage Safari and the WebKit team to do that sort of stuff. And so yeah, I think that React is probably the same and I think Ember is probably the same. We are all in this same environment of where we need these new tools, these new APIs. And the more that we can make that available to people, I think the faster that stuff will come, for sure.

**CHUCK:&nbsp;** Yeah. Now, we were getting ready to sit down and have this discussion and somebody I know said something about “Are you going to go back to real JavaScript?” because you moved to TypeScript.

**ROB:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** AJ, do you have some concerns about the direction there with Angular?

**AJ:&nbsp;** So, I was actually looking on the website for Angular 2 so I wouldn't sound stupid. And it looks like there are three tutorials. There's Angular for TypeScript, Angular for Dart, and Angular for JavaScript.

**ROB:&nbsp;** True.

**AJ:&nbsp;** So, flat out my concern is just I think that ES6 is going to flop. I think it's going to be just like ES4. It's too complicated. There's too much crap they're trying to incorporate Ruby and Java and C# and every language into JavaScript and that's retarded. And it's not going to work out. No browser's actually going to implement every language feature from every language in JavaScript.

**CHUCK:&nbsp;** So, you're saying ES6 stands for every script?

**AJ:&nbsp;** [Laughs] Yeah. Right?

**CHUCK:&nbsp;** [Chuckles]

**ROB:&nbsp;** Everything [inaudible] six.

**AJ:&nbsp;** And I don't like build tools. I am always in the mind of a high schooler. And that will never change. [Laughs] Right?

**ROB:&nbsp;** Okay, so here's the thing. We actually… this discussion, we talk about this every single day in the office.

**AJ:&nbsp;** Good.

**ROB:&nbsp;** And so, ES6. ES6.

**CHUCK:&nbsp;** Now I want to come hang out at your office and hear it.

**ROB:** So, talk we about build tools all the time. So ES6, right? ES6 I think, in my opinion, is the best thing that could have possibly happened to JavaScript. And I'll defend that assertion for you. So, the first is that modules. We've had this idea of modules for a long time.

**CHUCK:&nbsp;** We have lots of ideas of modules.

**ROB:&nbsp;** There have been lots of ideas. You know, we've got CommonJS. We've got RequireJS and Angular had their own module. We have a whole bunch of modules.

**AJ:&nbsp;** And so, it's good that we just make yet another one that's not backwards compatible and that can't be implemented with any sort of shim.

**ROB:&nbsp;** But…

**CHUCK:&nbsp;** Yeah, but it's the standard.

**ROB:&nbsp;** But it's the standard. It is. That's the thing, is that you can call the other things kind of standards. Okay, CommonJS is like the standard in Node. But none of them have ever been the standard now.

**AJ:&nbsp;** But you know what? But I can use those and I can refresh my browser and it will work. I can't do that with ES6.

**ROB:&nbsp;** Yes. And that's the difference, is I think that a lot of people… and this is something that comes up for us. We're writing a framework that is for the next 10 years of JavaScript. And I think that…

**AJ:&nbsp;** Which we don't know what it's going to be like because the next [inaudible] have it anyway.

**ROB:&nbsp;** But we do know that we have a modules specification, right? And so for us, rather than inventing our own modules again, we should use that.

**AJ:&nbsp;** But we also had observables and then they realized, “Oh wait, that's really dumb,” and they got rid of it.

**ROB:&nbsp;** No, not true. Not true. I have to clear this, I have to call you on this one. I'm sorry.

**AJ:&nbsp;** Call me on it.

**CHUCK:&nbsp;** [Laughs]

**ROB:&nbsp;** So, what disappeared was Object.observe. And if you like, that's like Angular… when we started looking at Angular 2, Object.observe was a thing that we looked at. And Object.observe was you mutate an object and it will tell you it got mutated, right? That is dead and gone. Angular 2, we use observables which are totally different. And that's, I'm going to plug Microsoft again. It's a Microsoft idea, reactive extensions, reactive programming. It's Microsoft. But the thing is we wouldn't have known that Object.observe was a bad idea unless somebody tried it and used it. And Angular was like, we almost mocked Object.observe, if you like. We polyfilled it to a point. That was this idea of mutability is an Angular thing. It's always been that way in Angular. And we've learned that it's probably not the best way to do things. And so, unless these things are implemented and tried and used, we don't know. And so…

**AJ:&nbsp;** Well, and my argument is that we should do that process before we standardize it and say…

**ROB:&nbsp;** But I think we did. I think that ES6 modules… I'm picking on modules, right? They incorporate the best learnings from what we know. They incorporate a lot of the stuff from CommonJS modules but they're asynchronous like RequireJS modules. And this idea, like build tools, right? Build tools… this is the thing. Angular 2, people are like “It's really complicated.” And I think that what's actually complicated is everything but Angular 2. And that I agree with you with. It's we're in a different world where you have to embed a build tool. And if you want to do a thing, you got to set up a build tool and install npm and there are like, 12 steps. And…

**CHUCK:&nbsp;** There's a 12-step program for…

**ROB:&nbsp;** There's a 12-step program to use JavaScript today.

[Laughter]

**AJ:&nbsp;** How to become an addict.

**CHUCK:&nbsp;** [Laughs]

**ROB:&nbsp;** But that stuff, a lot of that, and module bundling is a big one, we talk about this at work all the time that we would love if you never had to bundle your code. And you shouldn't have to. And so, stuff like the module loader specification which this is the problem was you have modules and that spec before we have a specification with which to load those modules.

**AJ:&nbsp;** Well, and now we have HTTP 2 or…

**ROB:&nbsp;** And HTTP 2.

**AJ:** We had that before. But the whole idea that in theory you won't have to bundle modules because browsers will implement HTTP 2 before they'll implement ES6 and so you don't need to bundle modules because HTTP 2 will say “Oh, here's the resource that you need” and they'll get it with all the push and the efficiency…

**ROB:&nbsp;** All that [inaudible], yeah.

**AJ:&nbsp;** Without having to have the build step on the developer end.

**CHUCK:&nbsp;** Yeah, but we know that people don't upgrade their browsers or other tools until they have to anyway.

**ROB:&nbsp;** Well, browsers though, that's the thing though, right? This idea of evergreen browsers I think is finally what lets us think like this.

**AJ:&nbsp;** Yeah. Like, there is no Internet Explorer anymore. Now there's Microsoft Edge which is evergreen.

**ROB:&nbsp;** Evergreen.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** So, the only browsers that exist aside from on the Wii and maybe like on PlayStation 3

**ROB:&nbsp;** [Laughs] Angular 2 for Wii?

**AJ:&nbsp;** [Laughs] Oh.

**CHUCK:&nbsp;** Hey, my wife bought me a Wii U last month but that's beside the point.

**AJ:&nbsp;** Well, that's…

**ROB:&nbsp;** We'll let you [render] for that. That's fine.

**AJ:&nbsp;** That's another one of my concerns too actually is I would like things to run on the Wii U. It has a browser. It may not be the best browser. I haven't tested on it. But it'd be cool if I wrote something and it happened to work on that.

**CHUCK:&nbsp;** I'm adding that to my test suite.

**ROB:&nbsp;** I can tell you that Angular 2 runs in the Tesla browser. I tested that with Miško's Tesla yesterday. That works.

**AJ:&nbsp;** That's good.

**ROB:&nbsp;** So, that's covered. We've got that covered.

**CHUCK:&nbsp;** Oh, good.

**AJ:&nbsp;** Well, if you're going to spend that much money on a car, it better have a good browser.

**ROB:&nbsp;** [Laughs]

**CHUCK:&nbsp;** I was going to say, if you're going to spend that much money on a computer… [Chuckles]

**ROB:&nbsp;** Yeah. [Laughs]

**CHUCK:&nbsp;** With wheels. But anyway, so I think we've gotten a little bit off track.

**ROB:&nbsp;** That happens.

**AJ:&nbsp;** Yeah. What I want to know is…

**ROB:&nbsp;** Yeah, what was the question again? [Laughs]

**AJ:&nbsp;** Yeah, because…

**CHUCK:&nbsp;** We were talking about whether or not TypeScript was a good idea for Angular 2.

**ROB:&nbsp;** Oh yeah.

**AJ:&nbsp;** Well, not just TypeScript. But it says Angular for JavaScript on the website. Is that JavaScript that runs in browsers?

**ROB:&nbsp;** Yeah.

**AJ:** Or is that still like I have to compile, build stuff, blah, blah, blah.

**ROB:&nbsp;** No. So, this actually, this is a bit of controversy here, right?

**CHUCK:&nbsp;** Yeah, is ES2015 JavaScript?

**ROB:&nbsp;** Our docs, those three flavors you mentioned are TypeScript/ES6 if you like, so that's modules.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** I don't know what the difference between TypeScript and ES6 is but I think of it as like…

**ROB:&nbsp;** Types.

**CHUCK:&nbsp;** TypeScript is a [inaudible]

**AJ:&nbsp;** ES6 with annotation.

**ROB:&nbsp;** Yes. Absolutely right. Yeah.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** So, our docs are…

**CHUCK:** TypeScript is basically a superset of ES6.

**ROB:&nbsp;** Yeah. It's ES6 plus some annotations. That's a [inaudible].

**AJ:&nbsp;** You know, ES2018. Whatever.

**ROB:&nbsp;** Sure.

**AJ:&nbsp;** It came a little early.

**ROB:&nbsp;** ES11. So yeah, our docs are TypeScript/ES6 if you like, Dart, and ES5, runs in a browser, no build tool necessary is the other. So yeah, Angular 2 for JavaScript, you could absolutely just drop in a script tag and start writing code and it will work.

**AJ:&nbsp;** So, what is the es6-shim.js?

**ROB:&nbsp;** ES6-shim.js, required to use that is probably, probably something like Array.includes or map perhaps. One of the primitives.

**AJ:&nbsp;** Okay. So, like really normal stuff that…

**ROB:&nbsp;** Yeah. Not like…

**AJ:&nbsp;** Could be in ES5.

**ROB:&nbsp;** Not… so, stuff that can be polyfilled I guess is [inaudible].

**AJ:&nbsp;** Okay.

**ROB:&nbsp;** And I think that most people would agree that array.prototype.includes is better than like indexOf.

**AJ:&nbsp;** Yeah. I have no… I could say, we could just call that ES5.2.

**ROB:&nbsp;** [Laughs] I'm good with that. Let's do that.

**CHUCK:&nbsp;** ES5++.

**ROB:&nbsp;** Yeah.

**AJ:&nbsp;** Yeah, yeah. Just normal JavaScript with the things that we need.

**ROB:&nbsp;** And so yeah, we definitely want to make sure that you can do ES5 Angular with no drama.

**AJ:&nbsp;** Excellent.

**ROB:&nbsp;** And we spent a lot of time doing that. We definitely think that the TypeScript experience is better. And I will objectively say that it is nicer to look at as a TypeScript thing.

**CHUCK:&nbsp;** Much.

**ROB:&nbsp;** There's more boilerplate to say, to use in ES5. But that's just because TypeScript gives us some of this extra annotation stuff we can leverage. But there is nothing that would prevent you from using it in ES5.

**AJ:&nbsp;** Okay, well that makes me feel better. **CHUCK:&nbsp;** Yeah, I'm really, really excited about Angular 2. And I will admit that I'm less excited about TypeScript.

**ROB:&nbsp;** Sure.

**CHUCK:&nbsp;** But part of the reason that I'm using it is because I've seen and then had the chance to work with some that the way that Angular 2 takes advantage of the way that TypeScript allows you to do things and it cleans a ton of stuff up.

**ROB:&nbsp;** Oh yeah. Makes a big difference.

**CHUCK:&nbsp;** And that's where I'm like, “Oh, okay. I get this.”

**ROB:&nbsp;** And there's visually… and the other big thing for me, and I share this with people all the time, is discoverability. So, you have this new framework you don't know anything about and it's got APIs and stuff you don't understand at all. And just JavaScript, there's a huge library of stuff in JavaScript. And being able to just start writing code and it suggests to you this is what you want or hey, this is probably not right, is a big deal for me. Just the ability to say, “This code's not going to run if you run it right now,” the code knows that. And that's a big deal for me, especially in a team of people or when you're 'devving' by yourself even. Knowing when your code isn't going to run, knowing when your code is right before you execute it is a big deal. And I think that that's something that any programmer in [chuckles] any other language is totally used to. It's not going to compile. And I think that that's a big deal for JavaScript. I think that makes people a lot more efficient. But I agree that there's overhead and people don't have to be excited about it. And I wasn't excited about a year ago. I wouldn't have [inaudible] used it. But…

**AJ:&nbsp;** Well, honestly I love the idea of, if there was an annotation type thing that was standardized like what Google used to have. What was their?

**ROB:&nbsp;** AtScript? AtScript?

**AJ:&nbsp;** No, no, no, no. It wasn't that.

**ROB:&nbsp;** Oh, Closure.

**AJ:&nbsp;** Closure, yeah. Like the Closure compiler. If something like that had been standardized I'd be all for it because then you'd get all the benefit in your code editor and everything but your browser wouldn't be affected. You could just write code and it would work.

**ROB:&nbsp;** Do you want to hear something funny?

**AJ:&nbsp;** Yeah.

**ROB:&nbsp;** So, we have tools inside of Angular that are publicly available that will take your TypeScript code and make it Closure [inaudible] and vice versa. Because everybody in Google uses Closure. That's how JavaScript at Google gets done, is Closure. And TypeScript obviously is not that yet. And we would like that maybe one day. But at the moment, we have this ability now to make… write code in TypeScript as we do and then effectively make it understandable to Closure so that we can pass it through Closure down the pipe. But yeah, I totally get it. And this is a common point of contention. Closure is metadata, not code.

**AJ:&nbsp;** Right.

**ROB:&nbsp;** It falls away. It doesn't interfere with your code. That's a totally legit argument. I don't have any disagreement with that. I think that the thing that makes me feel okay about TypeScript as opposed to say CoffeeScript or Dart for that matter, if you take your TypeScript and you're like “I never want to use TypeScript again” and you say “Let's just transpile it to ES6 and strip away the types,” it's…

**AJ:&nbsp;** Could you transpile to ES5?

**ROB:&nbsp;** Yes.

**AJ:&nbsp;** Okay.

**ROB:&nbsp;** And it would probably be better ES5 than you would write by yourself. That's the really neat thing about seeing it, is the output from TypeScript's compiler, transpiler, compiler, is probably cleaner JavaScript than I've ever written in my life. So, it's like if you really, you use it and you're like “Ah, I never want to use this again,” you just run it through once and you commit that and off you go. It's not… If you've seen the output from CoffeeScript it's different. The output from Dart is very different. It's really very much like this thin layer on top that can fall away as you like. And I think that's the way we'll head one day. And I hope that [chuckles] ES2019, ES2040, we have types. That would be cool. And I would hope they'd look something like TypeScript. But there is a risk there. I agree that there is some, using stuff that's not exactly standard is one thing. But I think that in the world of build tools that you hate, compiling is normal. I think that that's the new normal, is compiling. And so, compiling, if you're going to use a compiler, you're going to use a tool, you might as well get the benefits of TypeScript is sort of how I feel about it.

**CHUCK:&nbsp;** That's interesting. So, one other thing that I keep getting asked and I've told people some things but I don't know if I have a terrific answer for this other than that I like it better but I've had several people ask me, “So, if Angular 1 was so good why did we need an Angular 2?”

**AJ:&nbsp;** Oh, we needed it.

**CHUCK:&nbsp;** And I mean, there's definitely some boilerplate that was there and there were some things that just needed to be rearranged a little bit so that it was cleaner.

**ROB:&nbsp;** Sure.

**CHUCK:&nbsp;** And made life better. But I don't know if that's a complete or a very good answer for why we needed an Angular 2.

**ROB:&nbsp;** I think there are two, maybe two reasons that I would say. The first is that Angular 1 was invented in a time and place where we didn't have modern JavaScript. So, going back to modules, the reason that Angular has modules, Angular 1 has angular.modules because there was no such thing as a JavaScript one.

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** There wasn't even CommonJS. It wasn't a thing when that started. And so, it's this idea of we want to make sure that the next five, 10 years, whatever you're doing is compatible with the future. And if you had to angular.module everything, it's not going to work.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** Well, and there was the whole namespace conflicts that…

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** Plagues the community of Angular 1 right now.

**ROB:&nbsp;** Yes, absolutely. And I think part two is that lessons learned on things like change detection and two-way bindings and stuff like this, that I think works to a point. And tons of applications are built this way and tons of applications can still be built this way. But I think that to a point, it is a limiting factor. There's a hard limit to how many watchers you could have in an Angular app. And I think that Angular 2 tries to embrace the same semantics if you like and go past those limitations. So, we have two-way data binding in Angular 2 that is not the same two-way data binding. It looks the same. It kind of works the same. But it gets around some of the performance problems.

And it's really like six years of learning. If you have a huge amount of people who have this legacy codebase, not legacy but existing codebase, we can't just change Angular 1.7 and drop modules. That doesn't work. So, you have to make this jump, this clean break if you like. And I think it's like, I don't think we could have made such an improvement if we had tried to do Angular 1.5, 1.6, 1.7, and slowly evolve this. I just don't think that that's possible. So, you make this big jump and try to leap forward five more years. And I think that that's kind of what Angular 2 is about. It's making this leap again. And I think that having to maintain Angular 1 semantics and do that would not have been possible.

**CHUCK:&nbsp;** Right. So, where do we go from here? Angular 2 comes out of beta, things start moving forward from there. Is there an Angular 3 that's going to happen?

**ROB:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** Or were there more things that the Angular team wants to add? Or does it become an evergreen framework like we're talking about?

**ROB:&nbsp;** So, there are a couple of… that's a really good thing to say. So, this idea of evergreen browsers, one of the reasons we really like TypeScript is because we have type information now. We would like that if we make a change in Angular 2.1 we would like to be able to give you a tool that automatically refactors your code. Because we can understand your code and where you're plugging into Angular and where you're using Angular. We can refactor that for you, send you a patch if you like. So, that's one thing we'd like to do.

The other is that what we talk about as Angular 2 today is really Angular 2 core. This base layer of the framework. And if you remember in Angular 1, they built the thing and then they broke it apart. And we're doing it the opposite way where we're building the thing. And then we're going to start building more stuff. So, I work on the mobile team and we're going to build a progressive web app framework. And we've got Angular Universal. And there's a huge amount of data stuff to be done. So, it's like we want to get this core really solid and that's why that's taken some time. And then it kind of releases our team and open source teams, people out in the community, to do the really incredible stuff that happens on top. So, I think our team well very much go into building awesome stuff on top of Angular 2 as we move forward past release.

And yeah, I think that evergreen, we would like to keep it as an evergreen framework. I think that's a really good way to describe it. I'll try to take that back to the office and write that down as a quote.

**AJ:&nbsp;** So generally, in the open source world, there's semantic versioning where if it's a major version number you can expect it to break. If it's a minor or a patch you can expect it not to break. And Angular has not to date really followed that. It's kind of gone with a philosophy that's also good but sometimes a little frustrating that the major version number is the philosophy behind the code.

**ROB:&nbsp;** [Chuckles]

**AJ:&nbsp;** The minor version number means anything can still happen. And the patch version means if you cross your fingers and sprinkle fairy dust, it's probably going to be fine.

**CHUCK:&nbsp;** Yeah, the patch version to me says “If anything, if you were relying on something that is classified as a bug, that's going to change.” But really, if you were using it the way that it should be used it should just be fixing bugs patch-level.

**AJ:&nbsp;** Yup, right. So, I think the way, the classification for that version scheme is called ferver, or fear-based versioning.

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** And this is a thing. So, is Angular 2 going to keep with the ferver system? Or is it going to move to the SemVer system?

**ROB:&nbsp;** That's a good question. I would like to see it go to SemVer. That's not my decision. But we've certainly discussed it. And I think that again, like this breakpoint that we're having, this clean break kind of if you like, I think that would be a really good place to do it. And I will certainly bring that back to the team. As I have said to them before, it'd be really cool to be on SemVer. I think that that would be a really good idea. The other thing is we've never really lived on npm before. Angular 1 didn't go into npm until later in its life. And npm is really big on SemVer. The npm community and all, it's very much an npm thing. And so, I think that as we now live on npm and our first distribution [inaudible] is now npm and it wasn't before, we were Bower before, I think that SemVer makes a lot more sense for us there. So yeah, I would like to say yes and I will advocate as such.

**AJ:&nbsp;** And you know, Chrome is at version 43 and it hasn't had any breaking changes in terms of its…

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** The way I use it, right?

**ROB:&nbsp;** That's true. That's [absolutely] true.

**AJ:** I'm still typing in the URL bar. That's all I needed [chuckles] for it to be backwards compatible.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** So you know, it's…

**CHUCK:&nbsp;** And if you really do run into something funky, you close it and you open it again and you get the updated version.

**ROB:&nbsp;** Yeah. I think we would very much like to move to… right now in Beta we're doing weekly releases. We're very rapidly [inaudible]. And I think we'd like to continue that. Maybe not quite one release per week, but the minor scheme I think we'd like to continue much, much more rapidly. And that minor version number, arrive on a much more normal schedule for people. That's something that I think that inside of Google we'll be talking about. How do we run Angular 2 inside of Google? And that will probably translate pretty well to the outside, because Google internal teams have the same concerns about stability and rev cycles and how often is it going to update as the rest of the world does.

**AJ:&nbsp;** That would be, going back to Chuck's idea of the evergreen framework, I'm wondering how you get automatic security updates and that kind of thing. [Chuckles] That'd be pretty interesting to try.

**CHUCK:&nbsp;** Yeah, that's true.

**ROB:&nbsp;** And I think with tiny little changes, right? I think that's possible. Tiny little patch versions. Yeah, I think that's doable.

**CHUCK:&nbsp;** Yeah. You do have to communicate though, the changes. And a version number's a good way to do it. Or at least it's a well-understood way to do it, if it's not a good way to do it.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** But it's an interesting idea. The thing is that for me the idea of an evergreen framework is that we're just going to continue to push Angular 2 along and we've done it in such a way that as the web advances we can advance the framework without actually having to rewrite it. And I don't know if that's possible.

**ROB:&nbsp;** I think we'd like it to be. I think that that's a…

**CHUCK:&nbsp;** But yeah, I think a lot of people would like it to be.

**ROB:&nbsp;** I think it's a good way to think about it. And this Angular being very much like an assembly of pieces brought together by DI I think makes that really a very possible thing.

**CHUCK:&nbsp;** It gives you a lot of room to move.

**ROB:&nbsp;** Yeah. The fact that we can run on the server or native or whatever, it's indicative to me that the shell can be assembled out of many different parts. We could mix/match parts quite nicely, right?

**CHUCK:&nbsp;** Yeah. But to AJ's point and I think that's an interesting idea is how do you get security updates and stuff? Where we're at right now, you still have to either download or change your reference to point to a new version of the library. So, it would be interesting though to see something where it actually did have some kind of automatic updating. And then…

**ROB:&nbsp;** It's the kind of thing we'd like our CLI to do. Be able to tell you, “Hey, there's a new version of Angular. Here's what's going to break. Here's what we can fix for you. And here's what you would need to fix manually.”

**AJ:&nbsp;** Imagine…

**CHUCK:&nbsp;** Yeah. And here's why it's dangerous. Here's what's out of date.

**AJ:&nbsp;** Imagine that you had this CDN type system like you're using now. And you did like Angular-2.0 and as long as there's a guarantee that nothing breaks, it will feed you 2.0 or 2.1 or 2.2 or 2.3. But then it hits 2.5 and you realize like, “Oh crap. We got to fix this thing and it actually breaks something but we've got to fix it,” you'd have to go and then manually do 2.5. And then it would give you 2.6, 2.7, 2.8 until…

**CHUCK:&nbsp;** Yeah. But the other issue you have is you have these long-lived apps that nobody's really working on anymore.

**AJ:&nbsp;** Well, that's why I'm saying if something would actually break then you'd have to go in and manually specify it.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** But if it doesn't break anything…

**CHUCK:&nbsp;** Yeah, but you…

**ROB:&nbsp;** And that's the kind of thing that we can, why we're super excited about TypeScript. And this is one of the practical benefits of why you would choose TypeScript, not ES5, is that we can understand your code much better. And so, our tooling, our command line thing that we're building has a… a lot of these ideas have come up like automatic updates and security stuff and being able to diff code and send you patches and all this. That is implicit in us understanding your code. We can say it's probably not going to break anything but if you use a private API or whatever we can only recommend that. But if we can look at your code and understand the types that you're using and the way you're using them and if you're using private APIs and our tooling can understand that, and that's what we get from TypeScript, then I think that's a real, feasible possibility. And if you like one reason to use TypeScript Angular over Angular for JavaScript, that would be it for me. Is not just that stuff but the understanding that tooling gets of your code I think opens up a lot of really powerful stuff, stuff that we've never had in JavaScript before.

**CHUCK:&nbsp;** Yeah. I think the point that I'm trying to make though is that in order to update to a new version of Angular or anything else you still either have to update your script tag on your page…

**ROB:&nbsp;** Yes.

**CHUCK:&nbsp;** Or you have to update the file that it's pointing to on the server.

**ROB:** But it'd be nice if that would be something you would do while you had your morning coffee, like on a Monday.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** As opposed to a three-day expedition to make sure it works. It would be nice…

**AJ:&nbsp;** Or if it happened automatically.

**CHUCK:&nbsp;** Yeah, it'd be nice. I just don't know what that looks like.

**ROB:&nbsp;** I think it's a really interesting idea. I think it's…

**AJ:&nbsp;** I'm just saying. You specify…

**CHUCK:&nbsp;** Yeah, it's a great idea.

**AJ:&nbsp;** You say as the developer I'm going to take the risk. I'm going to type in, what I put in the script tag is going to be Angular 2.0…

**ROB:&nbsp;** X.

**CHUCK:&nbsp;** Star.

**AJ:&nbsp;** Star, right? I'm going to take that risk. If it's a security update it's going to happen. And you know, where I do 2.0 and as long as it doesn't break, if you determine that it breaks then you say well you manually have to specify 2.5 to get 2.5 or above.

**ROB:&nbsp;** Yeah.

**AJ:&nbsp;** But I mean…

**ROB:&nbsp;** That's interesting. No, I think it's…

**AJ:&nbsp;** It'd be interesting to try out. And then statistically from Google's perspective, you've got error reporting that happens in Angular. If an error reports and you get the error callback from the report URI thing, then you could actually blacklist updates to certain sites that get errors.

**ROB:&nbsp;** Yeah, you could have people opt in to using a Canary build of Angular. If you're brave, we could give you the Canary build. And we could…

**CHUCK:&nbsp;** Angular Canary. I like it.

**ROB:&nbsp;** Yeah, we could… Ember does a canary thing, I believe.

**AJ:&nbsp;** Just remember folks, you heard it here first.

**ROB:&nbsp;** [Chuckles] I know, right?

**AJ:&nbsp;** Back in 2016.

[Laughter]

**ROB:&nbsp;** We will give you credit on the page for that. But I think it's a really interesting idea. And I think that that idea of can we give it to 10% or 2% of the population and see what happens.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** Like people who are brave, run metrics on that. Does it work? Cool. In the course of building Angular 2 we do a huge amount of analysis on our CI servers and code size and how long it takes to run a build and why things fail and what tasks failed and logs. We track all this stuff already. And so, when we get to production land it would be really cool to see, “Okay, if you want to use our CLI and you opt into doing Canary beta,” we do that at Google for browsers. So, why shouldn't we do it for JavaScript frameworks? Yeah.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** Does it break? Does it break for everybody? Let's maybe consider this a little bit more before we ship it. It's interesting.

**CHUCK:&nbsp;** So, this harks to another thing. You were talking about the different builds and stuff. I think last time I talked to Brad Green who's the project manager over Angular. He mentioned that two of the things that they'd been working on, or you've been working on I guess, are performance and code size.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** So, can you give us an update on where you are with that…

**ROB:&nbsp;** Yeah.

**CHUCK:** &nbsp; Versus where you'd like to be?

**ROB:&nbsp;** So, performance, and they're actually nicely tied together, those two things at the moment. So, one of the biggest changes in Angular 2 compared to Angular 1 is that what we'd like to get to is that when you ship your application into production, and again this is, I'll just say this to you first that this is not something that's required. And this is totally ES5, if you don't want to do it you don't have to do it. But what we actually do with a template in Angular, and this is what we did to Angular sort of, and now what we do in Angular 2 is we take that template and we effectively compile it into executable code. So, we take a template and turn it into something that looks like… and this is going to haunt me if I say this, but it looks almost like JSX, what the output from JSX is, which is like create an element, create a thing, set the text, whatever. We take this template and we understand it and we turn it into code.

**CHUCK:** So, instead of markup it's effectively a series of commands that say…

**ROB:&nbsp;** Yes, yes.

**CHUCK:&nbsp;** Modify the DOM in this way.

**ROB:&nbsp;** Yup. And so, right now we do that in the browser. In Angular 1 we do it in the browser and we [inaudible] in the browser in Angular 2 right now. We do that in the browser at runtime. Okay. And so, you take this hit, number one. You have to ship this large blog of code that is the compiler. It has to go out to the browser to every app. And then there's a hit for startup time on actually taking this code and importing templates and compiling them. So, there's this overhead while this happens.

And the other thing is that code to a point can only be so efficient. And so, one of the big things coming down the pipeline really soon, like in the next couple of weeks, is this idea of offline template compilation. And so, it means that we can take these templates at build-time, with a Gulp task or with our CLI or whatever, and turn them into this executable code as a module and ship that instead of the string template. And so, that allows us to number one not have to ship the template, the template compiler, to a production application which is, and this is ballparking, but this is something like 15 or 20% of the code size right now today, being a framework. It's this big chunk of code. So, that's disappears. You don't have to ship that. And then you get the boost of startup time. You don't have to pre-compile these things. They're already ready to go. Which boosts performance pretty significantly.

And the other thing that we look really closely at when we're generating this code, and that's effectively what we're doing is reading strings and generating code, is to make sure that it is highly optimized for JavaScript VMs. And so, that's going to be a big performance boost. I think that across the board we're significantly faster in almost every metric against Angular 1, comparative against and faster in a lot of cases than most of the other frameworks. I don't want to start, like have a war. Nothing about that. But we are very, very fast everywhere at the moment. And then this is before we even get into things like web workers where we can split the work up and have your app run in a web worker and have rendering happen in the main thread. And the boost we get form that again is pretty incredible.

The other thing with code size is then modules. How smart can we get with modules? Can we do it in such a way that we can take your application, shake out all the things that you don't use and really bring down your bundle size? It's okay for me to say this because this is what Igor said is that ideally at some point in the future, we would like that your Angular 2 hello world application is down to 10K, minified. And that's audacious. I think it's a pretty amazing goal…

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** From where we're at, at the moment. But I think it tells you about how serious we are about what we're doing. And again, a lot of this comes back to the fact that we can understand code. ES6 modules gives the ability to statically analyze code and shake out things that you don't use,

**CHUCK:&nbsp;** Yeah, that makes sense. And I keep seeing stuff about this in…

**ROB:&nbsp;** Rollup is a good example.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** There's all this tooling coming up around ES6 modules. I've build a couple of things with Rollup and Angular 2 already. It takes a little bit of hackery at the moment. And there's a pretty noticeable difference in both code size and startup time.

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** There's some really, really interesting stuff coming down the pipe with that. As of today, even with the overhead of template compilation we're very, very fast. Code size is certainly larger than we'd like it to be at the moment. And I think that's a really big focus. And template compilation will be the first major thing that makes a big impact on that.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** And then build tooling goes along with that as well.

**AJ:&nbsp;** So, I do want to say, I'm totally cool with having…

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** Build steps.

**ROB:&nbsp;** Yeah.

**AJ:&nbsp;** But I'm not cool with it either. The thing is…

**ROB:&nbsp;** Sure. No, I [totally get] that.

**AJ:&nbsp;** But the thing is as somebody who's starting with JavaScript, because we want to be able to point people… because right now I still feel like if somebody's like “Hey, how do I learn JavaScript?” I'd just give them the finger and say “Good luck.”

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** Right? [Chuckles] And I'd like to see a future where you say “Hey, you know what? There's this framework Angular, or X, Y, Z, whatever, and it's super easy to get started with and you don't have to have a degree in Computer Science and Linux and whatever else in order to get a web page u and run it from your house.”

**ROB:&nbsp;** Sure.

**AJ:&nbsp;** That's kind of where I'm coming from.

**ROB:&nbsp;** No yeah, I'm totally with you.

**AJ:&nbsp;** And then having the build tools on top of it so that when you go into production on your six billion dollar company and you want to save 16 bytes because over the course of a quarter that turns into seven million dollars saved or whatever…

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** Well, great, right?

**ROB:&nbsp;** You know, actually probably more than anything I'm excited for browsers to implement modules so that exactly what you're talking about can be a thing. I would love to have all the benefits of ES6 modules without all the chicanery that goes around with it. If I could just say to somebody “Write this file and [inaudible] code and import it but also import the other thing that you wrote,” that to me would be a huge step forward.

**CHUCK:&nbsp;** Oh, yeah.

**ROB:&nbsp;** And then that would be incredible.

**CHUCK:&nbsp;** Yeah. Then essentially what you're saying is, it's back to your hello world example, right? Where it's okay, we're writing an app and it uses module A, B, and F. And so, instead of having to have the JavaScript build step that pulls in C, D, and E as well, it just goes “Okay, well this code said it needed A. So, pull in A. This code says it needs B, pull in B. B relies on F. Pull in F.”

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** And then just have it work.

**ROB:&nbsp;** And as the Developer Advocate whose job it is to spend a lot of time on the internet, on Gitter and on GitHub, stuff like that, your thesis that modules and build tools or whatever, there's a lot of friction there, I am a hundred percent in agreement with you. People learning Angular 2, teaching them Angular 2 is easy. Even in ES6 it's easy compared to what it takes to teach them how to configure a module loader.

**CHUCK:** Yeah.

**ROB:** Or set up Webpack. Or if I didn't have to do that every day it would be amazing. Because I fully believe that Angular 2 is very straightforward to understand. It's all the other stuff that's going on around it. That is the friction today. And I think that probably Ember is the same and Ember has their CLI that solves a lot of these problems. I think React is the same. There's all this other stuff you have to know before you can do what you want to do. And…

**CHUCK:&nbsp;** Yeah. I do want to just point out though that a lot of other communities have gone through that particular phase of difficulty. I think JavaScript is getting a little bit of an amplification there because there are so many different ways to write JavaScript.

**ROB:&nbsp;** Sure.

**CHUCK:&nbsp;** For so many different applications. You've got Node. You've got the frontend stuff. You've got the native stuff that runs on JavaScriptCore or V8 or whatever the heck runs on Android. And then you've got people that are trying to do all kinds of different stuff. Where typically you run into these tools issues like in Ruby and most of it's centered around web development and that was it.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** And 90% of that was Rails. And when Java went through it, it was Spring and a couple of other frameworks. And again, it was very focused in that area because those tools weren't used everywhere. And JavaScript really does use npm and Webpack and a lot of these other tools in a lot of places. So, we see these problems and they will get solved.

**ROB:&nbsp;** Yeah, I think we're kind of in our ugly adolescent phase as JavaScript.

**CHUCK:&nbsp;** Yeah. And, yeah.

**ROB:** Like this awkward gangly kind of pimply stage.

**AJ:&nbsp;** We need to make JavaScript great again.

**ROB:&nbsp;** That's it. That's it.

**CHUCK:&nbsp;** Oh gosh.

[Laughter]

**CHUCK:&nbsp;** You should put that on a hat.

**AJ:** Oh. Well, no they've already got it with that, Telemetrics has got the t-shirt.

**CHUCK:&nbsp;** Oh, gotcha.

**AJ:&nbsp;** Make .NET great again is what theirs is.

[Laughter]

**CHUCK:&nbsp;** But anyway, so I think that's all very interesting, just where we're at with that and where we're going to wind up.

**ROB:&nbsp;** I'm excited.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** I think it's super exciting where we're going. It is like…

**CHUCK:&nbsp;** But it's a real pain.

**ROB:&nbsp;** There are days I'm just like “Oh my god. I want to put a script tag in and just do it.”

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** Well, to me we have a big problem in the world. PHP.

**ROB:&nbsp;** [Laughs]

**AJ:&nbsp;** But the reason it's a…

**CHUCK:&nbsp;** Never heard of it.

**AJ:&nbsp;** You are so lucky.

**CHUCK:&nbsp;** I'm just kidding. [Laughs]

**AJ:&nbsp;** But the reason that it's a problem is because it's also a great solution, right?

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** One, people google it and it's like “How do I program a web page?” and that's what comes up. And it's really simple. There's this file, I copy it to a folder, and then I get my web server hacked and get every rootkit on it. But it also displays the information that I intended it to display. [Laughs]

**CHUCK:&nbsp;** Yup. [It does] what I want it to do. It just does some things that I don't want it to do.

**ROB:&nbsp;** Yup.

**AJ:&nbsp;** Right. And so, if we could get JavaScript back to the point of being that simple again where it's like I copy a file into a folder, and if I didn't even have to change my HTML, that'd be amazing.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** Just copy one file into one folder. If somehow that could be the future that's the future that I'm hoping for.

**ROB:&nbsp;** I mean today, we showed up today, right? And I was supposed to have a demo for our little screen at our booth and I didn't. And they were like, “Oh, it's cool. Just set up an Angular app.” And I'm on a Windows computer and I [chuckles]. Nobody uses Windows at Google, right?

**AJ:&nbsp;** You use Bash now.

**ROB:** And I was like, “What?”

[Laughter]

**ROB:&nbsp;** I had lost my tool set.

**AJ:&nbsp;** Yeah.

**ROB:&nbsp;** Okay, I don't have Python installed so I can't start up my Python web server, right? I don't have npm installed so I can't… so, it was like “Where are all my tools?” And it was totally this “Oh crap.”

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** What do I do now? So, I'm totally with you. It was just like, can I just use the CDN? And like, no, you have to set up your build tool. So, I'm like, this morning installing npm at Build on the conference Wi-Fi. Not awesome. But, so yeah, it's a tricky thing for sure. And I think that we're totally cognizant of it on the Angular team. We joke that there are two people in the world who understand the system loader entirely. And it's difficult. And we'd like to solve it but at the same time we don't want to invent our own solutions, which is what we did the first time.

**CHUCK:&nbsp;** Yeah.

**ROB:&nbsp;** We don't want to do that again. We don't want to angularize it. So, we have some friction there. That's like we have this awkward stage where we don't want to invent our own solution so we're using the bleeding edge standard solution. And so…

**CHUCK:&nbsp;** Yeah, but to that extent it's nice because JavaScript, as much as we complain about where we're at and the pain that we have you don't have to anymore. And that's the cool thing.

**ROB:&nbsp;** And really, this is my job is to complain about JavaScript. It's awesome. I have the coolest job in the world.

**CHUCK:&nbsp;** Yeah. But the thing is since you don't have to invent those solutions anymore as an Angular team, sure some of them are really painful to use because they're new and the solution [both] are not super well-understood yet.

**ROB:&nbsp;** Sure.

**CHUCK:** We don't understand what all the implications are and if we solve this part of the problem what other problems does it create? But what's really exciting about that is that we progressed that far already. And so, in another couple of years we're going to have some really dang nice tools.

**ROB:&nbsp;** I'm pretty excited to see where we're going to be in two years.

**CHUCK:** And that's the cool thing.&nbsp;

**ROB:&nbsp;** For sure.

**CHUCK:&nbsp;** That's what's really exciting.

**ROB:&nbsp;** What's funny is that I'm sure, and I didn't use Angular in version 0.7 or 0.8, but I'm sure that this happened in Angular 1. And I'm sure it happened at the beginning of Ember.

**CHUCK:&nbsp;** Oh, I'm sure.

**ROB:&nbsp;** But this is kind of the first time a major framework like Angular has then been rewritten in public. Nobody used Angular 1 until Angular 1.1 when we've gone through all these growing pains already. And sort of doing them out in the open is a very [chuckles] different experience.

**AJ:&nbsp;** So, the question is, is Angular 2 the new Python 3000, named Python 3000 because it won't be adopted until the year 3000. [Laughs]

**ROB:** Hmm, I don't think so. I think that…

**AJ:&nbsp;** I don't think so either.

**ROB:&nbsp;** I think that everybody…

**CHUCK:&nbsp;** There's already momentum.

**ROB:&nbsp;** I think [everybody's] first reaction is that. Like “Ugh.” No argument. People are like “What?” And it was funny to watch people today at Build being like…

**AJ:&nbsp;** Well, back to the point of versioning. I almost feel like it's better to give something a different name than to rev to version 2 or to version 3. Because there's that stigma.

**ROB:&nbsp;** Sure.

**AJ:&nbsp;** Like if they didn't call it Python 3000, if they just called it Serpentine…

**ROB:&nbsp;** [Chuckles]

**AJ:&nbsp;** People would be all over it.

**CHUCK:&nbsp;** [Inaudible], take a page out of [Apple] and call it the New Angular.

**ROB:** We should have called it Circular, the New Angular?

**AJ:&nbsp;** [Laughs]

**ROB:&nbsp;** That's the New Coke though, and that didn't go well. New Coke not good.

**CHUCK:&nbsp;** So, we've been talking for what, an hour now, almost?

**ROB:&nbsp;** [Inaudible]

**AJ:&nbsp;** But we haven't gotten to the most important part yet.

**CHUCK:&nbsp;** Okay.

**AJ:&nbsp;** Angular in Node.

**ROB:&nbsp;** Do we have enough [about that]?

**CHUCK:&nbsp;** Is that a thing?

**AJ:&nbsp;** Server-side Angular.

**ROB:&nbsp;** There are two cool things I want to talk about [inaudible] for that. Yes, we can do that. It's awesome. It's super, super amazing. PatrickJS has done crazy good work on that. You can build an Angular app, run it in Node…

**CHUCK:&nbsp;** I love that guy.

**ROB:** Angular Universal serves it. Oh my god. Guy's like a wizard. It's cool. And then we've got this other really awesome thing. And so this, we've talked about progressive web apps and this idea of offline web apps and super-fast loading. So, not only does he run it in Node and serve it when it's requested and compile it, but last week he was helping me out. And he wrote a Gulp task in 15 minutes that given an Angular app, it pre-renders the whole thing and writes it to disk statically.

**AJ:&nbsp;** So, this is the next thing that I think is going to be big in the web world. When somebody creates WordPress but like that.

**CHUCK:&nbsp;** Yeah.

**AJ:&nbsp;** Where you get all the fancy features of having to be dynamic and having modules and having plugins. And then you hit the button and then boom, you have zero performance cost. It's all on disk.

**ROB:&nbsp;** That's, I was thinking about this in the car this morning and the analogy that I've kind of come up with for this. Because I keep explaining it to people and I'm explaining it in different ways. And I feel like what we've got in Angular 2 today, and I think that we're probably better positioned than any of the other frameworks for this, is that you can write today an Angular app. And I think when Brad talks about it being a platform this is what he means. So, you can write an Angular app and not have to think too much about where it's going to run. And if you just think about client versus server, you can think about it as, I think [inaudible] it's like I'm a sliding dial. And I can say “I want to render it 100% on the client side or 100% on the server side or anywhere in between.

**CHUCK:&nbsp;** Mmhmm.

**ROB:&nbsp;** That to me is a very powerful, flexible thing. Then you can go sideways and say “Actually, I want to run it 100% on the client side, render the 100% on the server side but also boot it into a web worker. This ability to write an application irrespective of where it's going to go or where… you no longer have to think I'm writing a server-side app or a client-side app. I'm just writing an app. And I can deploy it, do whatever I like. And yeah, so…

**CHUCK:&nbsp;** Yeah, and I can make intelligent decisions as far as render here, render there, get behavior here.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** Set up the behavior. You know, so client/server. It makes a lot less difference.

**ROB:&nbsp;** Yeah.

**CHUCK:&nbsp;** There are going to be limitations on either end. But yeah.

**AJ:&nbsp;** This is a scenario I've been waiting for which I'm hoping that there's not too much real world use case for this. But you render it on the server, deliver it to the browser, and then the framework picks up the state that was rendered on the server and resumes so that you could…

**ROB:&nbsp;** That's…

**CHUCK:&nbsp;** So basically what it says is…

**AJ:&nbsp;** Add another term into the search query and then it would continue to filter the results.

**ROB:&nbsp;** That's effectively what we can do today.

**CHUCK:&nbsp;** Right. What you're saying is it renders everything on the server including any state or data or anything else. And then yeah, when it loads it up and your browser loads up Angular or loads up whatever, it says “Okay. I've parsed the DOM. I've parsed all the data in the DOM. And I know what to do now.”

**ROB:&nbsp;** The guys at Ember talked about this. And they have a thing that's called FastBoot which does that. Both Ember and us, we have to [inaudible] to pre-render the data on the server-side. And effectively what we're doing, what we're both doing right now is booting it. And then effectively Angular takes over and replaces the entire UI. In Angular's case it's pretty seamless. I think in Ember's case it's also reasonably seamless. But we're both looking at this problem of “Okay, how do we communicate the states between the two?” How do we pre-hydrate that state and make it so that we don't have to re-render that thing? And the re-render is pretty much seamless but we know it's there. And you can see it. It's perceptible. And so…

**CHUCK:&nbsp;** Well, it's overhead, right?

**ROB:&nbsp;** It's overhead and the [inaudible] you have to get is to solve it properly you have to get opinionated. You have to have some way to transfer state from server to client in a reliable way that doesn't mean pulling it out of the DOM. So we're, this is something, Tom Dale talked about this on Hacker News yesterday and I loved seeing it because he was like “We're solving the same problem and it would be super cool to collaborate and be able to work on the same problem.” And I think we're all going to arrive at this problem. How do we do it?

**AJ:&nbsp;** Well, it seems like that's something kind of like what used to be push state which now I guess is service workers or transitioning over there. It seems like that kind of thing where there maybe ought to be a standard for it because really, what I want to do is I want to visit a web page once and I don't ever want to hit the server completely again. I want it to be a download the app and now I have an evergreen app that's living in my browser. And when the scripts update it's just going to be, it's going to go check and say, “Hey, is this cached version good?” and it's going to say “No.” And somehow the app is just magically going to run the new version.

**ROB:&nbsp;** Yeah. We're working on our progressive web app stuff, exactly that story you just told. I think that we're not there yet. I'm not going to say we've solved that problem. But…

**AJ:&nbsp;** Well, it needs experimentation.

**ROB:&nbsp;** We would love to see people go and try it. And again, we think we know what we want to do but we're not sure how yet to do it. And I think that that's the stuff that I'm really super excited about once we get past release. It's like, let's go solve those really hard problems now. Let's make that kind of stuff. Yeah, download it once. Use a service worker. Install the app. Update it, do the delta updates. All that cool stuff is stuff that we would love to do. So, yeah.

**CHUCK:&nbsp;** So, you're talking about Angular Universal here, right?

**ROB:&nbsp;** Well, so we [chuckles] naming is hard, right?

**CHUCK:&nbsp;** We talked about this a while ago.

**ROB:&nbsp;** We've talked about Angular Angular, so we've got Angular on the client side which is Angular core if you like. And then there's Angular Universal which is the server-side rendering. And then we have Angular Progressive is our new idea which is this sliding dial of I want to render the shell on the server and then cache that in a service worker and then load the app asynchronously and da-da-da-da-da. So, it's kind of like Progressive, Universal, and core, the three ideas at the moment.

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** We used to call it offline but offline is not interesting enough. Progressive is this idea of install an app, update it delta style and do all that. And it uses Universal, it uses the core. There's a bunch of intermingled pieces.

**AJ:&nbsp;** I detect you're on an iPhone with a fast processor. I just send you the app. I detect you have an Android with a slow processor, I render it for you.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** That's another thing that I wanted to talk about, harking back a little bit to the performance discussion and the payload size. On my laptop, on wireless, big deal.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** If I'm on a fast enough connection, fast being a perception, we can go into how you measure fast, but anyway I perceive it to be fast, even if it's a larger payload because it just downloads, it just slurps it down on my connection and does it. But on mobile it's a different animal.

**ROB:&nbsp;** Yup.

**CHUCK:&nbsp;** So, what is Angular doing to enable people to have good, high performant apps on mobile?

**ROB:&nbsp;** There are two metrics to this. And so, the first is like first load, first paint. That is the first time I ever visit your website, how long does it take to get something visible on screen and then how long does it take to get interactive after that?

**CHUCK:&nbsp;** Right.

**ROB:&nbsp;** And then second visit, [inaudible] the land of service workers as you said. I've hit your website once, I've got everything I need, and I never have to go back out to the server again. So, the first thing is that in any client-side framework, and Angular 1 has this problem, you're going to have a latency between when the app actually… when the HTML renders and then the JavaScript loads and parses and executes and then it actually updates the UI. And that's why I think Universal is such a powerful thing, because it skips that first bit of latency. We can take the initial state and render it and it's visible instantly, as instantly as it could possibly be.

**AJ:&nbsp;** So, is that, does that tie into… because we need HTTP 2 to be able to say “Here are the things that you're going to request so I'm just going to give them to you right away.” Is that tied in with that at all?

**ROB:&nbsp;** Well so, the first part is like the rendering on the server, this is not even JavaScript involved yet. This is literally… in an ideal world you would take as much as you can possibly do in that first packet of “Let's inline the critical path CSS” we call that. So, the CSS I need to render the first page. Get it into the header of the index page so that it's instantly as fast as it possibly can be, visible on screen. And then stuff like HTTP 2 starts kicking in for the actual application to boot up in the background, if you like. Perception-wise, that's the first thing, is you render on the server or statically or dynamically. And then get that out as fast as possible, first paint, perceived first paint is instant. And then boot the app. Then as you say, cache in the service worker. Keep all that so we don't have to do the latency of getting that stuff more than once.

And I think that there's probably an acceptable kind of trade-off here in terms of if we can make that first experience, the first time you visit the site, very fast with maybe a little bit of delay before interactivity. But then when you come back the second time both first paint and interactivity are instant. And that's what we'd really like to get to. See, it's a balance and that's what I mean by that sliding scale idea. Depending on your situation, depending on what your use case is, we'd like you to be able to dial up or dial down what happens where and when and how it gets used.

**CHUCK:** Yup.

**ROB:&nbsp;** And that's, the flexibility I think is the powerful thing there. Because line of business apps like you build are going to be different than news app sites, are going to be different than Amazon.

**CHUCK:&nbsp;** Yeah. So real quick, if people want to get started with Angular 2 where do they go? What do they do?

**ROB:&nbsp;** Hit our website at Angular.io. Our documentation team has spent an inordinate amount of time giving good tutorials and documentation on there. We also have a really helpful Gitter channel at Gitter.im/angular/angular. There's a really awesome community of people in there who are really helpful and eager to help and do way better than we could ever do as a single team of 20 people. So, those people are awesome and thanks. But yeah, the docs and Gitter are a really good place to start. Follow me on Twitter. My job is now to help developers out. So, if you have questions, whatever, then feel free to tweet me at robwormald. And I will get back to you.

**CHUCK:** Alright. Finally, we've been taking just a minute. You understand picks.

**ROB:&nbsp;** Yes.

**CHUCK:** So, we've been asking our guests at Build for picks.

**ROB:&nbsp;** Visual Studio Code and service workers for me. Service workers are super important and I think you should learn about them because they'll make your apps awesome. They will make your apps great again. [Chuckles]

**CHUCK:** Alright. We've got a couple of people to thank here real quick. First off thank you Rob for coming and talking to us.

**ROB:&nbsp;** You're totally welcome. Thanks for having me.

**CHUCK:** &nbsp; I also want to thank Richard Campbell and Carl Franklin from '.NETRocks!' for inviting us out here and helping get things set up. So, I really appreciate them. Go check out their show if you're into .NET. And we'll go ahead and wrap this up.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wish you could be part of the discussion on JavaScript Jabber? Do you have a burning question for one of our guests? Now you can join the action at our membership forum. You can sign up at JavaScriptJabber.com/Jabber and there you can join discussions with the regular panelists and our guests.]_**
