---
layout: layouts/post.njk
title: >
  098 AiA Azure Functions Portal with Chris Anderson and Ahmed ElSayed
date: 2016-06-23 07:00:08
episode_number: 098
duration: 51:56
audio_url: http://media.devchat.tv/adventures-in-angular/AiA098AzureFunctionsPortal.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

01:58 - Ahmed ElSayed Introduction

- [Twitter](https://twitter.com/ahmelsayed)
- [GitHub](https://github.com/ahmelsayed)
- [Blog](http://ahmelsayed.com/)
  02:09 - Chris Anderson Introduction
- [Twitter](https://twitter.com/crandycodes)
- [GitHub](https://github.com/christopheranderson)
  02:19 - [Microsoft Azure Functions](http://functions.azure.com)
- [iPhreaks Show Episode #157: Azure App Services with Matthew Henderson](https://devchat.tv/iphreaks/ips-157-azure-app-services-with-matthew-henderson)
  02:28 - Building the [Azure Functions Portal](https://github.com/projectkudu/AzureFunctionsPortal) on Angular 209:37 - The Backend11:18 - Approaching Leadership for Approval to Build in Angular 2/Beta; Deciding Factors15:18 - App Organization and Architectural Pattern18:38 - Ease and Hardships of Starting the App22:33 - Use Cases24:13 - Browser Issues25:39 - Debugging
- [Augury](https://augury.angular.io/)
  26:52 - [Angular CLI](https://cli.angular.io/)
- [jspm.io](http://jspm.io/)
  28:59 - Workflow40:08 - Observables & Streaming41:36 - Upgrading42:15 - Would you recommend Angular 2?44:35 - Testing&nbsp;Picks
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) (John)
- [NativeScript](https://www.nativescript.org/) (John)
- [Ionic 2](http://ionic.io/2) (John)
- [Billy Collins](https://pen.org/billy-collins) (Ward)
- [Start with Why: How Great Leaders Inspire Everyone to Take Action by Simon Sinek](https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447) (Chuck)
- [Audible](http://www.audible.com/) (Chuck)
- [Sapiens: A Brief History of Humankind by Yuval Noah Harari](http://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095) (Ahmed)
- [Promise Theory](https://en.wikipedia.org/wiki/Promise_theory) (Chris)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not that’s totally up to you. You can check it out at KendoUI.com]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 98 of the Adventures in Angular Show. This week on our panel we have John Papa.

**JOHN:&nbsp;** Hello, everybody.

**CHUCK:&nbsp;** Ward Bell.

**WARD:&nbsp;** Hello, hello, hello.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv. We also have two special guests this week. We have Ahmed ElSayed.

**AHMED:&nbsp;** Hello.

**CHUCK:&nbsp;** And Chris Anderson.

**CHRIS:&nbsp;** Hey, hey.

**CHUCK:&nbsp;** Do you two gentlemen want to introduce yourselves real quick?

**CHRIS:&nbsp;** Sure. Okay, sure.

**AHMED:&nbsp;** Yeah. My name is Ahmed. I'm a software engineer at Microsoft. I work for the app service team. I was responsible for the UI for Azure functions. Now we ended up using Angular 2 core.

**CHRIS:&nbsp;** And I'm Chris Anderson, program manager for Azure Functions. [Inaudible] about Azure Functions, what our initial [inaudible] process was for that, yeah.

**CHUCK:&nbsp;** Awesome. If people want to know about Azure Functions I'm just going to shout out real quick about the episode we did from the Build conference where we talked about Azure Functions. I think the thing that's more interesting to our audience is the fact that you built the portal for that in Angular 2. And it's actually live in production.

**CHRIS:&nbsp;** Mmhmm, yep.

**CHUCK:&nbsp;** You say that like “Yeah, okay. No big deal.”

[Laughter]

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** Been doing it for a while now, haven't you? [Laughs]

**AHMED:&nbsp;** Yes, it's been a while.

**CHRIS:&nbsp;** A couple of months.

**CHUCK:&nbsp;** I think the thing that's interesting though is that I think we saw the release candidate maybe what, three weeks ago. And…

**AHMED:&nbsp;** Yes.

**CHUCK:&nbsp;** You built it on the beta. I'm assuming that you've updated it to the release candidate now. And so, it's just interesting because we don't see a lot of production apps, especially for companies like Microsoft running on Angular 2. So, I'm a little bit curious. What is your experience building on Angular 2? What are the things that worked well and didn't work well, building something that has to work?

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** And before we go there, let me just clarify. I think what Chuck meant is we don't see a lot of apps in production companies when it's a beta.

**CHUCK:&nbsp;** Right.

**CHRIS:&nbsp;** Right.

**JOHN:&nbsp;** It's not necessarily just Angular 2 this time. It's really, who invests in putting a beta out in production?

**CHUCK:&nbsp;** Yeah.

**AHMED:&nbsp;** Yes. Bleeding edge. What?

**CHRIS:&nbsp;** [Chuckles] Bleeding edge. [Chuckles]

**AHMED:&nbsp;** Well, it was more of my choice, really. Nobody else… I basically made the choice to go with Angular 2. And the reason I decided to go with it, I was familiar with Angular 1. I've used it for most of my projects before. And I like Angular 1 except for the fact that after a while it kind of gets really messy. And it becomes very hard to explain to someone what's going on. And there are a lot of hacks here and there. And I was trying to look for a new framework to use for the portal since it's new, a brand new project that I was starting with. And I had looked up multiple frameworks. And I ended up deciding on Angular 2 for multiple reasons. I knew that it was in beta. But, I don't know. It seemed that the development process for it was quick enough and it was… like there weren't any roadblocks necessarily. And I expected it to be out of beta soon as well. So, I just kind of decided to go with it.

I did choose Angular over other frameworks mainly because of TypeScript support. Really, when I was looking I just looked for a framework that would work very well with TypeScript because I didn't want to use JavaScript. Once you use TypeScript it's kind of very hard to go back. So, that was one item, definitely. Also the concepts and the tutorials that I found for Angular 2 were very nice. And they were complete even in beta. You find tutorials that would just work. While a lot of other frameworks, their tutorials didn't even work and I had to chase around and try to understand what's going on. So yeah, I picked Angular and my experience with it so far has been really positive. I really like the framework. I like the, how it organizes things. And it's very easy to explain the code and have abstractions and stuff like that. So…

**WARD:&nbsp;** So, where can people see this in action exactly? The part that's your part, the portal that you've written in Angular 2.

**AHMED:&nbsp;** It's actually functions…

**WARD:&nbsp;** [Inaudible]

**AHMED:&nbsp;** Yeah, so it's functions.azure.com. If you go to that site initially it will redirect you to a marketing page where it has a 'Get Started' green button. When you click on 'Get Started' it takes you back to functions.azure.com then it asks you to log in. And the app that you see there is actually the Angular 2 app. Once you log in it displays a selection of the Functions apps that you have, which is a concept that I guess maybe Chris can explain what a function app is. But basically, it displays that list and then it gives you the option to create something new. Once you select an actual Function app it redirects you into the Azure portal. But then it loads itself again inside there. So, it's kind of…

**CHRIS:&nbsp;** Yeah, it's kind of complex to explain with words.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** I guess I can give it some background on why we decided to go this route. So, if you are familiar with Azure, [it's a] general cloud portal. A lot [inaudible] are oriented towards… you can think of it as management operations and not necessarily developer experiences. And we kind of had this challenge with Azure Functions that we wanted to get the five minutes to value kind of thing where we wanted you to be able to write code, ship it in production, and have it available in under five minutes. And the way we thought about doing that was just shortcutting all the pieces necessary so that you can just get and write the code. And it's already in production. So, writing that code in the portal made a lot of sense. And I think you had written a demo of that concept running in our SEM backend which is like, we have another open source project called Kudu that does a lot of work control management for service in general. And we'd written a quick demo on that. And that [inaudible] really, really useful. We started showing it around the team and then from there you kind of went and started greenfield with the Angular 2 one.

**AHMED:&nbsp;** Yes.

**CHRIS:&nbsp;** But the whole notion there was that we were going to be able to take this developer experience and just plant it into what was normally an infrastructure management experience.

**AHMED:&nbsp;** Yes. Because normally if you look at the Azure portal right now it's mostly for managing resources. And then when you try to use the framework that they are using to design a developer experience it becomes really rigid and really hard to do. Because all the concepts that they have in their framework is basically our management. Like you have a list of stuff. You click on something, it opens. The settings for it, it wasn't really geared towards development. Like having…

**CHRIS:&nbsp;** Which makes sense. [Inaudible] resources can be treated uniformly.

**AHMED:&nbsp;** Yes, exactly.

**CHRIS:&nbsp;** And when you're doing development it's got to be really specialized for that developer experience.

**AHMED:&nbsp;** Exactly, yes. So, it made more sense to look for a different framework or to develop it outside that working framework. We ended up running inside of the Azure portal because we wanted to integrate with other features in the portal. Because like you create a function, you want to link it to another Azure resource. So, instead of writing the UI for every single Azure resource, we just, if you're running inside the portal then you can basically just call an existing UI element to create something for you, like a storage account or something like that.

**WARD:&nbsp;** Let me just sort of reprise this, because there are two really cool things in here. One, you're running the application in two completely separate places. One in a web page, all by its little self to kind of let me in the door. And then it surfaces again right within the context of this very much larger Azure portal. Have I got that right?

**AHMED:&nbsp;** Yes. That's exactly right.

**WARD:&nbsp;** And then the other cool thing is that when I get in there, the kinds of just general capabilities that are there for somebody are not only that I can flip switches and see how I relate to the resources I'm consuming but there's actually a text area where I can start typing in my code right there. Whatever this function stuff is that I'm doing, which the world… which we haven't told our audience what it is, but it's a box and I start typing in there and you're giving me feedback as I type about the function that I'm writing. Is that right?

**AHMED:&nbsp;** Mmhmm. That is correct.

**CHRIS:&nbsp;** Yes.

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** And you're also displaying output there and there are push buttons.

**AHMED:&nbsp;** [Inaudible] yeah.

**WARD:&nbsp;** And it goes and it actually talks to Azure right there. So, I don't have to leave the portal to be able to take it from soup to nuts. Is that right?

**AHMED:&nbsp;** That is correct. That was our goal, yes.

**WARD:&nbsp;** And that's what I think you see when you… the other thing is that people may want to know is that you're experience there is right there on GitHub. And you can clone it and bring it down just like I just did and wander around in your code and see how you did it.

**AHMED:&nbsp;** Yeah, exactly. So, the entire UX is basically open source. The [inaudible] that you see there is basically what's running. It's actually hooked up to continuous integration with Azure. So, whenever we push a change it just pulls the change from there and builds it and deploys it.

**CHRIS:&nbsp;** And that's running in a functions-next.azure.com.

**AHMED:&nbsp;** Yes.

**CHRIS:&nbsp;** So, if you actually… we have our production link. But if you want to get a short link to see our preview experiences, you can actually go to functions-next and see features as they're being written.

**WARD:&nbsp;** That's pretty cool.

**CHUCK:&nbsp;** So, does it… because it has a frontend and a backend. It's a web portal. So, is the backend written in Node or in .NET or something else?

**AHMED:&nbsp;** The backend is actually written in .NET. But we have very little API [inaudible] from the backend. Basically we have two APIs that list… if you go to the portal itself and you try to create a new function, it displays a list of templates for you. And basically the backend is just two API calls that return the list of templates that exist. And another one from some other metadata stuff. But everything else is basically client-side.

**JOHN:** That's really interesting. Because I hear a lot, “Hey John, I'm trying to build an Angular app with [inaudible] MVC in the backend. Do I really need to use the views of ASP.MVC or can I just take advantage of the Web APIs?” And I'm curious. How do you guys approach that?

**AHMED:&nbsp;** We're just taking advantage of the Web APIs. I ended up using views for one very small thing. Basically I wanted my index.html page basically to append the commit id to bust the cache. So, I ended up using views to get the commit id. But really, I'm only using the API on the backend. I'm not using any MVC views or anything like that.

**JOHN:&nbsp;** I think that's great, because I agree with you there. I've done the same thing. Some people I feel like are starting a rumor that that's a dirty thing to do. [Chuckle] If you're going to use ASP.MVC you have to use the whole thing. And I think a great story is just to take advantage of the Web APIs and then use Angular 2 for the frontend.

**AHMED:&nbsp;** Yeah. In fact, it looks much cleaner for me that way, just to have Web API on the backend which is clear REST API interface and then have your client app that runs completely separate in the client. That architecture seems a lot cleaner to me than managing the stuff with MVC. And yeah.

**CHRIS:&nbsp;** It's a classic service-oriented architecture.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** [Being able to take] lots of different things.

**AHMED:&nbsp;** Yep.

**CHRIS:** And just stitch them together. Focus on the client.

**AHMED:&nbsp;** Mmhmm.

**JOHN:&nbsp;** Yeah, and I'd like to step back for a second too, to answer the first question a little bit more thoroughly. You guys kind of just made the assumption of, “Yeah, we chose to make the Angular 2 investment right away in beta.” And you kind of gave your reasons in how you thought about it. But I'm curious. If people out there are listening and want to go and follow in your footsteps, could you tell them a little bit how you got approval for this or how they should approach their leadership and say… how do you suggest getting that approval?

**CHRIS:&nbsp;** It was kind of interesting for us. I don't know if you have noticed, Microsoft is a bit different in the way that we approach problems. We kind of start with default open source. And so for us, since we knew that we were going to open source the UX and that Angular 2 itself was open source, there wasn't really any problems for us management-wise. Since everything was designed to be open source, it was going to stay open source.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** It didn't end up having any major approval things. If we were trying to consume it and in a way where it was going to be closed source from the beginning and it was going to… we would have to provide customer support for it and actually have to ship it, we're [going to] run into more problems. But since we were managing the UX and we're shipping the UX ourselves, and the UX isn't really designed to be run by someone else in this case.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** And it ended up being basically a no-op. Just kind of, inside of Microsoft if you're using MIT it's pretty much a no-op.

**AHMED:&nbsp;** Yeah, if you're using MIT you don't really have to get approval. And then I just, I basically just picked the framework and I talked to my manager and he was fine with it.

**CHRIS:&nbsp;** Yeah.

**JOHN:&nbsp;** Even if that framework is… but I guess what I'm going at is even if that framework is a beta and it's not in full release yet? Were there any questions or things you had to answer to your leadership about, “Hey, is this thing going to be around? Or is it stable yet? Or is the API changing?”

**AHMED:&nbsp;** Azure Functions itself is in preview right now.

**CHRIS:&nbsp;** Yeah.

**AHMED:&nbsp;** So, that's part of it. The other part was not really. I didn't have to do anything. There were some raised eyebrows. “This is in beta. Are you really sure you want to use it?” And I basically just made the decision that yeah, I'm going to use it. [Inaudible]

**CHRIS:&nbsp;** I remember looking at you the first time you told me that [inaudible] on Angular 2. I'm like “Wait, Angular 2. That's not in production yet.” But yeah, just thinking about it the TypeScript team is working closely with Angular 2. It's [inaudible].

**AHMED:&nbsp;** Yeah. And I was actually looking at the Angular 2 repo and looking at the issues and the team seemed to be very responsive to issues. And yeah, so I didn't really have any concerns myself.

**JOHN:&nbsp;** That's good to know. Obviously we're all on board with Angular 2 here on this show. But I think it's good to think about that. Because people, and rightfully so, should question any product going to production that's not in release or go to production form. So…

**AHMED:** &nbsp; Yes.

**JOHN:** &nbsp; It's good to be able to understand how you thought about it.

**AHMED:&nbsp;** Yeah. And also the fact that the Azure Functions itself is in preview kind of helped there. Because basically, the feature set was in preview and the UX doesn't really have to be released yet. It could also be in preview until we actually release the feature set.

**CHRIS:&nbsp;** And in the end I'm glad, because by choosing it at the time that we chose it, it means that we'll be able to [inaudible] on a cutting edge technology. Which means that we're not going to have to redo the UX.

**AHMED:&nbsp;** Yes.

**CHRIS:&nbsp;** For quite a while because we're already using the latest thing.

**AHMED:&nbsp;** Yup. And especially…

**JOHN:&nbsp;** Timing is everything, isn't it?

**CHRIS:&nbsp;** Yeah.

[Chuckles]

**WARD:&nbsp;** So, you say you were… now, I'm not trying to turn this into one framework versus another. But you did review a number of them and the deciding point for you were the ones that you mentioned at the beginning. It's in TypeScript. That really helped. The fact that you had a tutorial that worked. You had some confidence in that, with a piece of it. Was there anything about the architecture of Angular 2 that spoke to you?

**AHMED:&nbsp;** Yes. The component architecture definitely spoke to me. In Angular 1, when I started learning Angular 1 and designing apps with Angular 1 you had all these concepts about controller and directive. And it was sometimes blurry. Should things be controllers? Should it be directives? And for me at least, the design [inaudible] ended up being very messy. While when I started thinking of components in the UI as just pure components which is Angular 2 components, things started making a lot more sense. So, I did like the architecture. I also like the decorator support. I actually ended up using and created my own in the app which are nice. So yeah, that in general basically. I did like the architecture a lot.

**WARD:&nbsp;** So, tell me a bit about how you organized it. Well, I'll tell you [laughs] because I think this is interesting. You organized your app in terms of the pieces. So, you have the components and you have the decorators and you have the directives and you have handlers. And you have folders for each of these things and that's where you put them. What do you think in that particular architectural pattern?

**AHMED:&nbsp;** Oh, you mean the layout of the files?

**WARD:&nbsp;** Yeah, yeah. And [inaudible]

**AHMED:&nbsp;** Well, I actually… that was actually something that I wasn't too sure about because I experienced… I experimented with two approaches. Like if you see right now, if you actually have an app folder and the app folder contains a component folder and then there is a styles folder and there's a services folder and so on, I wasn't sure if I wanted to group all the files [inaudible] for a component in one folder and then basically be that components folder. What if I wanted them just to be all in the same folder together? I'm still really not sure what is the right thing to do. But the way I have it right now is that every component is basically one TypeScript file, one CSS file, and one HTML file. And that seemed to work for me. So, I'm not really sure.

**WARD:&nbsp;** Well, it [inaudible]

**AHMED:&nbsp;** I'm not really sure what the recommended style is for things like that.

**WARD:&nbsp;** That is the way John recommends anyway. But…

[Laughter]

**CHRIS:&nbsp;** [Inaudible] code review podcast by the way.

**WARD:&nbsp;** That is [inaudible] portion of this session. But you know what? This is what I actually like about it, is it gives a reader a chance to take a look at an application that works that chose this particular approach, and it's not a huge app, get a sense of what it looks like when you choose this style versus a different style and come to whatever conclusions they come to. So, is that [a polite] way of saying it? I think it's [inaudible].

[Chuckles]

**WARD:&nbsp;** And I'll be interested to see if it continues to serve you well over time. But it's always great to see the different ways in which somebody can write in Angular and be successful. I think that's really a key thing is that you can be successful writing an Angular 2 app in many different ways. And this is one of the examples of a way to do it.

**AHMED:** I'd also like to be clear. I started writing this app not knowing anything about Angular 2. Basically I was learning as I'm writing the app. Every time I would want to do something I would go look at tutorials, look at the API references. Sometimes I would go look in the Git repo for Angular itself and try to figure out how things work.

**CHRIS:&nbsp;** You know, when we first started this we were still trying to figure out everything we wanted to do inside of the UX.

**AHMED:** &nbsp; Yeah.

**CHRIS:&nbsp;** We were still trying to figure out what to do inside of the runtime. So, everything was running a million miles an hour.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** We didn't necessarily just sit down and think through, “Okay, everything is going to be the right way.” It was more like, “Let's get going as fast as possible and see what we end up with.” And I think we [inaudible] ended up where we were.

**AHMED:&nbsp;** Yeah. And I'm in no way like an Angular 2 expert. Basically I'm just learning as I go.

[Chuckles]

**WARD:&nbsp;** Who is? Who is? You got to go find somebody with six years of experience on their resume and then hire them.

[Laughter]

**CHRIS:&nbsp;** Yes.

**WARD:&nbsp;** But it's incredible readable code. I'll just say that, for anybody who wants to go look. So, there's stuff to learn here. And you're dealing with many interesting challenges. You have to interact with another service. You're using dependency injection rather significantly so that different things are coming in and out. So, just forget about what it's actually doing. I think that it's a worthy thing for people to take a look at and learn from. So, thank you for this contribution to the community.

**AHMED:&nbsp;** Thank you.

**JOHN:&nbsp;** I'd like to hear a little bit about what was easy and what was really hard for you guys putting this app together.

**AHMED:&nbsp;** Well, what was easy was getting started. Just following the tutorial that you had on Angular.io and just getting started from there. What wasn't very clear, you were still in pre-release. But since I wanted to actually ship something that would work, I wasn't really sure how you bundle stuff together, how you minify stuff. I discovered that minifying doesn't work on the beta releases. So, bundling things together, it took me some time. But then I ended up using the SystemJS builder that bundles everything into one file. And that seems to work fine.

**JOHN:&nbsp;** Ah, you hit on a very, very sore topic for me lately, or deep topic for me. I've been trying to figure out, how do we bundle and build? I'm curious. When you import all your modules how are you avoiding importing the entire world?

**AHMED:&nbsp;** I am not, actually.

[Chuckles]

**AHMED:&nbsp;** Well, I think that was also one part that wasn't really clear to me. I initially understood that the way importing should work, it should be lazy. It should just import stuff as it uses it. But when I would try the framework it seemed to just download everything in startup. So, I wasn't really sure what's going on in the framework. I thought maybe the lazy loading wasn't implemented yet or something. I just ended up using the SystemJS builder which basically just builds the entire app into one JavaScript file. So yeah, that's what I used. And then all the other scripts are basically just the polyfill for IE and other ECMAScript 6 stuff.

**JOHN:&nbsp;** Well, you will be very happy to know that that stuff is going to get much better. But right now yeah, that is a difficult thing to do. The things that Brad Green showed on stage at ng-conf about getting a, what was it, 29K file of Angular inside your app in 'hello world'…

**WARD:&nbsp;** Yeah.

**JOHN:&nbsp;** That stuff is coming. And it is possible today. But to use the CLI and the tools that are available, right now it's not hard as a default state. Ward, correct me where I'm wrong. But I believe the default state is you build an app right now, you might be getting have a meg of files with it, if you don't do something about it.

**AHMED:&nbsp;** Yeah. I don't remember exactly the size of the file but it's pretty large, like a meg or something.

**JOHN:&nbsp;** Yeah, and it will get down. As I said, the stuff they're showing now, basically once you get tree-shaking in there and use Rollup.js, it gets rid of all the stuff you're not using inside your app. And then you use the offline template compiler so you compile stuff on the server.

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** That gets rid of more. And then you gzip it and you bundle it. And eventually you wind up with a lazy-loaded app that's 10, 20, 30K. But those things are not easy to get to today, so I was curious. In your production app you're not taking advantage of those then, right? You're just using [inaudible],

**AHMED:&nbsp;** No, we're not. Yeah, we're using our own bundle and we have a CDN that hopefully makes things slightly faster for that large file. But that was definitely one of the tough topics, yes, trying to figure out what is the best way to actually run in a performant way in production. Because mostly load time, initial load time was really bad when it had to download a million files. And even when you bundle them into one large file, it was also pretty bad. And I ended up doing this CDN and custom bundle that kind of works. So, [inaudible]

**JOHN:&nbsp;** Yeah, that's how I solve it right now on my own, too. I make it sound like it's awful. It's not awful right now. It's definitely doable.

**AHMED:&nbsp;** Yeah. Yes.

**JOHN:&nbsp;** But it will get much, much better.

**WARD:&nbsp;** Yeah. And you won't have to change your app to do it. And you'll just be messing around at the configuration level. When did you start writing this?

**CHRIS:&nbsp;** I think January.

**AHMED:&nbsp;** January, yeah.

**CHRIS:&nbsp;** We had the initial prototype written in December that was based on [inaudible]

**AHMED:&nbsp;** I think yeah, I think I wrote it the same week or maybe when beta 2 went out.

**CHRIS:&nbsp;** Mmhmm.

**WARD:&nbsp;** Yeah, that would be the first of January.

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** And you showed it a Build which was what, March? May? April? I can't remember.

**CHRIS:&nbsp;** Yeah, no. It was a three-month…

**AHMED:&nbsp;** [Chuckles]

**CHRIS:&nbsp;** Less. It was less than three months. We actually, I can't remember the number of weeks itself but it's less than three months as we went from just not even entirely sure on what the UX was going to look like to shipping something at Build that we were proud of.

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** To me, that's an impressive time scale.

**CHUCK:&nbsp;** How many [inaudible]

**CHRIS:&nbsp;** There were a lot of [inaudible], but yeah.

**AHMED:&nbsp;** [Chuckles]

**CHRIS:&nbsp;** That's good.

**CHUCK:&nbsp;** I want to know how many people are using it right now.

**CHRIS:&nbsp;** We have, I'm not sure what I'll be allowed to get away with, thousands of users, is it fair to say there? It's been heavily used. We've gotten a lot of feedback. The nice thing about being open source is I don't have to ask them to file a support ticket if they don't like the UX. They've just been opening up issues on our GitHub. So, I think that the most recent one was someone [inaudible] description. And I just pointed them at our GitHub and they created a mock-up of what that should look like even, which I love. If you want to give us the feedback, give us a mock-up of what you want that to look like, it makes our job [chuckles] really simple at that point.

**CHUCK:** And as far as performance goes, we have been talking about the file size there being about a meg. Do you find that that really impacts the usage much? Especially on mobile where a larger file is kind of a bigger deal.

**WARD:&nbsp;** Well, would you use this in a mobile environment?

**CHRIS:&nbsp;** You can. It looks a little [inaudible]. [Chuckles]

**AHMED:&nbsp;** You can. It looks funny because the Azure portal in general doesn't really…

**CHRIS:&nbsp;** Yeah.

**AHMED:&nbsp;** Work too well on mobile.

**CHRIS:&nbsp;** Yeah, mobile wasn't really designed [inaudible] the space.

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** No, we're not…

**CHUCK:&nbsp;** I want to thumb type my JavaScript functions. Come on, guys.

**WARD:&nbsp;** [Laughs] I was going to say, what are you doing there? I'm standing in the coffee line. “Oh, I think I'll write a function.” [Laughs]

**CHRIS:&nbsp;** I'll be honest, I have prepared for a demo by pulling up my iPad and pulling up the portal on my iPad, because the iPad screen is big enough to go ahead and do that. [Chuckles]

**CHUCK:&nbsp;** Right.

**AHMED:&nbsp;** Yeah. Yeah no, so startup time on the file size is not too bad once it's cached.

**CHUCK:&nbsp;** Right.

**AHMED:&nbsp;** And the CDN makes it pretty fast.

**CHUCK:&nbsp;** Yeah.

**AHMED:&nbsp;** So, it's not because… the first time you hit the site, yeah it can be slightly slow if you don't have a cache yet. But yeah, that was one of the things that I kind of, one of the corners that I cut hoping that in the future it's just going to get better once Angular actually supports all the stuff that you guys have planned for. But, yeah.

**CHUCK:&nbsp;** The other question I have, it seems like Angular 2 support is pretty universal with modern, evergreen browsers. But did you run into any browsers issues with any particular systems?

**AHMED:&nbsp;** Well, we did run into some IE issues. Luckily the Azure portal itself only supports modern browsers as well, like Chrome, Firefox, and only the latest version of IE. So luckily, I didn't have to test IE9 or IE7 or anything like that. I did run into a few issues with IE. The last one I think is an issue that I still don't quite understand where the change detector doesn't really work in IE. The app is running in an iframe which is our case, which was kind of weird. But yeah, every now and then I run into some bizarre issues in IE and I have to fix them.

**CHUCK:** Can I differentiate between IE and Edge so it works fine in edge but just in…

**AHMED:&nbsp;** Yeah.

**CHUCK:&nbsp;** The latest version of IE it doesn't work.

**AHMED:&nbsp;** Yes.

**CHUCK:&nbsp;** Okay.

**AHMED:&nbsp;** Yeah, so yeah.

**CHRIS:&nbsp;** The [inaudible] are totally [inaudible] engines.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** [Which is fortunate.]

**CHUCK:&nbsp;** Yeah, I just wanted to be clear.

**AHMED:&nbsp;** Yeah. So, it works. Everything I've tried pretty much works straightaway in Chrome, Firefox and Edge. It's only IE that I've had trouble with sometimes. But luckily most of the trouble that I had were easily fixed or worked around at least. So, yeah. Actually, I just need, I wanted some more time to look into the change detector issue to see if it's an actual bug in the framework or if I was doing something wrong in IE. But other than that, everything seems to work.

**CHUCK:&nbsp;** Is it tricky…

**JOHN:&nbsp;** Since you're bringing up… Go ahead.

**CHUCK:&nbsp;** Yeah. Well, he brought up bugs and I was just going to ask is it tricky…

**JOHN:&nbsp;** [Laughs] Exactly.

**CHUCK:&nbsp;** With the release candidate or with the beta to differentiate between bugs with the framework and bugs in your own app? And is the debugging approach different? We have Augury now but I don't know if you had it when you were building it.

**AHMED:&nbsp;** You had what now, sorry?

**CHUCK:&nbsp;** Augury. It's the new version of Batarang.

**AHMED:&nbsp;** Oh, okay.

**CHUCK:&nbsp;** It's a debugging tool.

**WARD:&nbsp;** It's a debugging tool that pops up in Chrome and gives you lots of insight into your app as you're developing it, how it's showing up in the DOM. But I don't know that would help you with IE because I don't know that it will run in IE.

**CHUCK:&nbsp;** Yeah, I don't know either.

**AHMED:&nbsp;** No, I definitely didn't use that. What I would do is, whenever I find some weird unexplained behavior that I don't really understand I would go to the Git repo and then search in the issues, try to find somebody who opened a similar issue. And I usually, could usually easily find these issues or anything that I had. So basically, that's what I did. If I couldn't explain something I would go to the Git repo and search. The few times that I've had that happen, I found an issue right away in the GitHub repo and it explained what's going on and a workaround.

**CHUCK:&nbsp;** That makes sense.

**JOHN:&nbsp;** I'm curious as you're talking about this, too. You developed all this from scratch and it sounds like you were basically, I can imagine you guys sitting there waiting for beta. Then you went beta and you dove into the code in January. Then [inaudible] a release candidate and you're releasing this. I imagine you guys are pretty leading edge developers as far as diving in right away. And now that you've built your own style of creating a project and kind of working through the process, do you guys know that there's a CLI that the Angular team's been talking about and [they've been] promoting. And we've talked about it on the show. I'm curious what you think about that CLI and what problems that you're interested in it helping you solve and how you solved them on your own. Do you find it'll be a useful tool for you?

**AHMED:&nbsp;** I think it'll be useful. The one pain point that still exists for me at least right now is trying to add a dependency to both Node and JSPM, because I'm using JSPM. So, normally I have to add a dependency twice. Maybe I'm doing something wrong. Maybe I don't really understand how JSPM works.

**JOHN:&nbsp;** Do you mean adding it to the JSPM file and to the package.json? Where are you adding it twice?

**AHMED:&nbsp;** Well, I add it twice in package.json. And then I definitely have not used any CLI other than Node, npm I mean, and JSPM. So, I'm not [inaudible]

**CHRIS:&nbsp;** Yeah, I just pulled up the CLI link on our screen that we're looking at here. And he's kind of taking a look at the features. I'm guessing he's drooling at some of the [problems].

**AHMED:&nbsp;** I know.

[Laughter]

**AHMED:&nbsp;** Yeah, it's… I don't know if I can give feedback on the CLI because I am not really, I'm completely not familiar with it.

**JOHN:&nbsp;** Well, I think that's fair, too. Because the CLI, tooling always comes out after the language and the framework [inaudible]…

**AHMED:&nbsp;** Yeah.

**JOHN:** At all companies, right?

**CHRIS:&nbsp;** Yeah. [Chuckles]

**JOHN:&nbsp;** But the CLI, one of the things we've been working on trying to figure out is what features are going to help people and what features really are not going to be as helpful to people. And you guys are creating all your files from scratch for example, I imagine.

**AHMED:&nbsp;** Yeah.

**JOHN:** I heard you mention you're creating the TypeScript file, the HTML file, the CSS file for components all on your own.

**AHMED:&nbsp;** Mmhmm.

**JOHN:&nbsp;** I assume you're just right-clicking inside of VS Code or Visual Studio to do that?

**AHMED:&nbsp;** Yeah, pretty much.

**WARD:&nbsp;** Basically they copy… you know, it's like everybody. You do a copy and a paste job and then you go and you fix.

[Laughter]

**JOHN:&nbsp;** I've been there.

**WARD:&nbsp;** That's the way I do it. Who can remember? I'm guessing. I don't know. What is your workflow? If you had to suddenly add a new component, what would you do? [Right there on stage.]

**AHMED:&nbsp;** Well, I just create a new file, basically call it whatever dot component dot TS. And after I write the initial class I just go and create another file for the template and another file for the CSS. I like the ability to inline templates. But because editors don't really support highlighting and stuff like that, so I ended up just creating a separate file for every HTML or CSS file.

**CHRIS:&nbsp;** It keeps the code clear. See, I always end up just pulling the two out even though it's convenient to have them in the same [inaudible].

**AHMED:&nbsp;** Yeah. I mean, I put them back using one of the Gulp tasks that…

**CHRIS:&nbsp;** Yeah.

**AHMED:** Basically just shoves everything back together. But yeah. The one thing I find [inaudible]…

**JOHN:&nbsp;** It just sounds like you're… go ahead.

**AHMED:&nbsp;** I'm sure it's just a bug somewhere. If you have a typo in your template, the whole app doesn't load and doesn't throw any errors. It was weird to me.

**JOHN:&nbsp;** Ah, like if you've got a directive or a component that you misspell somewhere?

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** And it just doesn't do anything?

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** Yeah, because it's looking at that HTML going, “I don't know what that thing is. I guess I'll just ignore you,” right?

**AHMED:&nbsp;** Yeah, I know. But it's just, it's so easy to make typos in the HTML because it's not typed. So [inaudible] typos.

**JOHN:&nbsp;** Yeah.

**AHMED:&nbsp;** Yeah, that could be annoying sometimes. But…

**JOHN:&nbsp;** You know what we need? We need Anders to come along and create TypeHTML like he did for TypeScript, right?

[Laughter]

**CHUCK:** [Chuckles] There we go.

[Laughter]

**CHRIS:&nbsp;** Yes.

**JOHN:&nbsp;** I'm kidding. I'm kidding.

**WARD:&nbsp;** Well actually, I do think though that work is being done on that, especially for the inline templates. But work is being done on that. And the new template compiler may be more supportive…

**JOHN:&nbsp;** Right, for [code check].

**WARD:** In terms of giving you information. I just want to say…

**JOHN:** Not for creating [inaudible] but for code checking.

**WARD:&nbsp;** Right. And well, for template checking it will say, “You know what?” because it's going to marry the two. It's going to try and wire them up together and it's going to say, “You're missing something here, because I can't find that thing” which is what you…

**AHMED:&nbsp;** [Inaudible]

**WARD:&nbsp;** That's what you want, right? That's the kind of thing…

**AHMED:&nbsp;** Yeah, exactly. That's [inaudible].

**CHUCK:&nbsp;** So…

**JOHN:&nbsp;** [Yeah, one of the things] that I can't stand still is I wonder if you ran into this a lot. I really don't like this. I love Angular 2 but one thing I don't like is when I create components and they have child components, the fact that I have to declare them inside of the components still kind of bugs me. And I always forget to do that. And then Angular kindly reminds me when I run it saying, “I don't know what the heck that thing is.”

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** Did you guys run into that a lot or is that something you just got over…

**AHMED:&nbsp;** I did run into it.

**JOHN:&nbsp;** and I'm dumb?

**AHMED:&nbsp;** I did run into it initially but I just got over it. As soon as I create a new component and I know it's going to have children components inside of it I just add them right away. The one thing that I did that I did run into that is still kind of annoying and I'm still not really sure what is the right way of doing is say you have a component that contains a whole bunch of child components. And one of those child components contains another child component and then you want to bubble up an event all the way from the sub-child component all the way to the parent. I didn't find an easy way to do it except creating an input and output on every single component on the way that doesn't really need it. Or creating one general service that has an event and then you throw a new broadcast event, basically then have somebody listen to it.

**WARD:&nbsp;** I saw that you did that. You wrote your own message bus.

**AHMED:&nbsp;** Yeah.

**WARD:** In-process message bus, which I think people will find interesting to look at, too. And…

**AHMED:&nbsp;** Yeah, [inaudible] I was doing that I thought it was very hacky. But I didn't want to have to keep adding inputs and outputs to every single component on the way. [Inaudible]

**JOHN:&nbsp;** Yeah. That's messy, yeah.

**WARD:&nbsp;** Actually, I don't think it's hacky. I think that's exactly right, what you were doing there.

**AHMED:&nbsp;** Okay.

**JOHN:** No, what he's doing. But making input/output that goes seven layers up through all the parents would be kind of hacky.

**WARD:&nbsp;** No, no, no. Not doing that.

**JOHN:&nbsp;** Yeah.

**WARD:&nbsp;** I mean creating a service for messaging. And then you can even create special purpose messages and sculpt them so that the conversation…

**JOHN:&nbsp;** Exactly.

**WARD:** On that bus is local to a workflow and the rest of the app doesn't have to know about it. I think that that actually is the best pattern for doing the kind of thing that you were talking about, rather than…

**JOHN:&nbsp;** Well, if he's… and step out of Angular 2 for a second, right, and think about this.

**WARD:&nbsp;** Yeah, what would you do?

**JOHN:&nbsp;** Messaging. What would you do without it? You'd create a messaging pattern. These things have been around for years and it's not like Angular 2 invented a new way of doing it. So, I agree.

**WARD:&nbsp;** Actually, so let's turn that around and say, so what did you think was going to be there or what did you wish was going to be there?

**AHMED:&nbsp;** Well, I don't know. Like Angular 1 had this scope.broadast thing.

**WARD:&nbsp;** Mmhmm.

**AHMED:&nbsp;** Which I used a few times. So, I kind of built the broadcast service based on that pattern.

**WARD:&nbsp;** Mmhmm

**AHMED:&nbsp;** Yeah, I wasn't really sure. I obviously did it because that's what made sense to me at the time but I wasn't sure if there is a way in Angular 2 to handle this global event. A way that's built-in at least, to handle these global events or the global state in general of some things.

**JOHN:&nbsp;** And help me. I haven't seen the exact code, but what did you use inside the message bus? Did you use EventEmitter? Did you use…

**AHMED:&nbsp;** Yeah, EventEmitter.

**JOHN:&nbsp;** RxJS or did you make something else?

**WARD:&nbsp;** He used EventEmitter.

**AHMED:** I used EventEmitter.

**JOHN:&nbsp;** Gotcha. Okay.

**WARD:&nbsp;** [Laughs] The code review, the code police will be right over.

[Laughter]

**WARD:&nbsp;** Because that…

**JOHN:&nbsp;** No see, I think…

**WARD:&nbsp;** That's a big no-no.

**JOHN:&nbsp;** That's actually where I started, too.

**WARD:&nbsp;** That's where all of us started.

**JOHN:&nbsp;** Right.

**WARD:&nbsp;** All of us did that until we learned from the powers that be. The great hand reached across the sky and touched us on the shoulder and said, “That's not what that's for.” So…

[Chuckles]

**WARD:&nbsp;** But the good news is…

**JOHN:&nbsp;** [Laughs]

**AHMED:&nbsp;** Yeah, I was actually confused. [Inaudible]

**WARD:&nbsp;** [Inaudible]

**AHMED:&nbsp;** You had EventEmitter. You have [subject] and you have Rx stuff. I wasn't really sure which one should I use. Sometimes I use subjects. Sometimes I use EventEmitter. And I just…

**JOHN:&nbsp;** Yeah.

**WARD:&nbsp;** No. We're going to send the police over and they're going to beat you with a whip.

[Chuckles]

**JOHN:&nbsp;** Who are these people, these code police? Because I used EventEmitter at first, too.

[Laughter]

**JOHN:&nbsp;** And I felt like I got kicked in the rear end when I did that. So [laughs]

**WARD:&nbsp;** Oh, absolutely. I was [inaudible] John. I've got the boot ready. No, it's funny. You know what, and I was reading. The pattern is right there. You're doing all, it's all… and that's why I really encourage people because by the way, you are by no means alone in having the need to do this kind of communication around the app. And there is nothing in Angular 2 itself and there isn't going to be because they want, they deliberately decided not to do it. And so, we are left to come up with a solution for this very real problem which you have taken. And I think you know, the police will be satisfied if you replace EventEmitter with something else. But the idea is right there.

**AHMED:** Okay.

**CHRIS:&nbsp;** So, what are you going to do now? Is it going to open an issue on it? And [laughs][inaudible]

**WARD:&nbsp;** Absolutely.

[Laughter]

**WARD:&nbsp;** And the issue is just going to say, “You bad man, you. How…”

[Laughter]

**CHUCK:&nbsp;** You're doing it wrong.

**JOHN:&nbsp;** So, what did you learn from this, what did you learn from this exercise? Don't let Ward near your code.

[Laughter]

**WARD:&nbsp;** And why would I send you a PR that actually fixed the problem? Oh no.

**JOHN:&nbsp;** [Laughs]

**WARD:&nbsp;** It is so much easier to berate you.

[Laughter]

**CHUCK:&nbsp;** What do you think this is, open source?

[Laughter]

**WARD:&nbsp;** And by the way, what did I pay for it? Nothing. So, that's fine.

**JOHN:&nbsp;** Yeah, exactly.

**WARD:&nbsp;** But the less I paid for it, the more I chastise you.

**JOHN:&nbsp;** But I think that's, I mean going back to your initial problem statement right, in Angular 1 you were familiar with Angular 1 enough to say, “I had broadcast and emit. How do I solve the same problem in Angular 2?” And you realized that these things were event emitters of some sort. So, I guess the name of that keyword probably drew you to it? Is that right?

**AHMED:** It's not just that. Like, I mean the tutorial was using EventEmitters in other places. And I figured they are just event emitters. So, I just use them.

**JOHN:&nbsp;** Yeah.

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** Yeah, and to be fair, early on this is why I did the same thing. Early on with Angular 2 experience, event emitters were more pervasive. They were throughout more examples in the code and more other places, too.

**AHMED:&nbsp;** Yeah.

**JOHN:&nbsp;** And I think there was a slow migration that I noticed is eventually I started seeing RxJS replacing these things inside of Angular JS examples, or Angular 2 examples. Which is when I started poking around going, “What is this thing? And how should I use it?” because I'm still relatively new to RxJS myself.

**WARD:&nbsp;** Yeah.

**AHMED:&nbsp;** Yeah. Oh, that was also one other thing. I was more used to promises.

**JOHN:&nbsp;** Yeah.

**AHMED:** Like chaining promises and doing all sorts of stuff with promises. I like observables because they enable a lot of really interesting and cool things that you can do that you can't really do with promises. I needed some time to actually learn all the weird operator names that are there.

**JOHN:&nbsp;** Yeah, but at some point right, you probably struggled just a little like I do. I know when I'm using new technologies it's like, “How many new concepts can I take on?”

**AHMED:&nbsp;** Yes.

**JOHN:&nbsp;** And at some point you got to say, “You know what? I can solve it with this. I know I got to learn RxJS later but for now I'm going to use this and I'll pick that up later when I can.” Did you do that with a few things?

**AHMED:&nbsp;** Yes. I had to do that with a lot of things, actually. Because we had a very… we were moving really fast. We had a date that we couldn't miss.

**CHRIS:** I had a very aggressive date for this. [Laughs]

**AHMED:&nbsp;** Yes. So basically, a lot of concepts I was like, “Yeah fine, whatever. I'll worry about it later. I'll just do it the way I know it now.” Like actually, if you look around the code there were a few places where we were actually grabbing the native element and using jQuery to do something because I didn't really know what's the right way of doing it.

**WARD:&nbsp;** Yeah, I saw jQuery in here also.

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** And that was also, I was also going to come down heavy on you there.

[Laughter]

**AHMED:&nbsp;** I know, I know.

**CHRIS:&nbsp;** [Inaudible] a label for Ward there…

**JOHN:&nbsp;** So Ward, why don't you tell people Ward…

**CHRIS:&nbsp;** In the GitHub repo.

**AHMED:&nbsp;** What?

**CHRIS:** I'll create a label for Ward in there which [I'm going] to label all his [inaudible].

[Laughter]

**JOHN:&nbsp;** There you go. There you go. So Ward, what would they use instead of jQuery? Can you help people understand?

**WARD:&nbsp;** Oh, well you know the great thing about sitting here, miles away, and just pontificating at it is that I can wag my finger without knowing what I'm talking about. And this jQuery example is exactly that. I haven't a clue why you used jQuery. I only know that it's always bad to use jQuery. And that's all I really need to know. I'll just shut my mind.

[Laughter]

**JOHN:&nbsp;** I love you, Ward. [Laughs]

**WARD:&nbsp;** Aah, goodness. You know, that's really, expedient programming. You can do it. You can write Angular 2 code and you can go do it and then you can decide whether that actually is technical debt or whether it is actually just the right thing to have done. And then you can sneer at the police as they drive by.

[Chuckles]

**JOHN:&nbsp;** And I've got to double down on Ward's comment of I think it's absolutely awesome that you guys are sharing this with the world, with the open source world as a great example of something that has gone to production with Angular 2 so quickly. It's definitely going to have a lot of value for a lot of people.

**CHRIS:&nbsp;** I think we're glad that we're [inaudible] to open it up. It's honestly…

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** More valuable for us that we can get feedback from the users of Azure Functions on “Well, this UX didn't actually look very well. Let me go ahead and tell you where I prefer it works.” The problem when you're close source is those iteration cycles are so short that we couldn't possibly ship as aggressive. You shipped how many times a week. [Chuckles]

**AHMED:** &nbsp; Yes, a lot of times.

**CHRIS:&nbsp;** We couldn't do that if we weren't completely open about how we were doing things. And we've got a great insiders team that helps us keep up with those things.

**WARD:&nbsp;** Yeah. Maybe you could even focus on the real thing which is delivering the ability to use Azure Functions instead of…

**CHRIS:** [Inaudible]

[Chuckles]

**WARD:&nbsp;** So, I know I'm making these little sarcastic comments. And they're really aimed at myself as much as anything because it's easy to get sucked up into “How do I make this code perfect?” when I'm really trying to deliver value. And that's what you're doing. I am curious though. Going back to the observables thing. Do you feel that there are things that are happening in your application that are event stream like where things keep coming at you or you wish that you could design around it and in that fashion?

**AHMED:&nbsp;** I'm not sure I understand the question.

**WARD:&nbsp;** Well, like for example your app is kind of keeping track of like I make a change and I push the save button and then there's a flow of events coming back from Azure itself telling you what its progress is and how you report that and stuff like that. That seems like a natural for having a streamed events rather than a promises thing. Are there other locations like that where you think, “Maybe things do look like an event stream instead of a request/response.”

**AHMED:&nbsp;** Oh, most places actually do look like event stream. Most lists in the UX, like you click something so we send a request because you clicked on that thing. And that's very clearly an event stream thing because you can have multiple clicks and then I normally would have to keep track of all the promises and only actually secure the callback on the last promise. But using observables I can just switchMap and…

**WARD:&nbsp;** You're there. Oh see, you already know the terms.

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** [Laughs]

**AHMED:&nbsp;** I mean, switchMap used to be called flatMapLatest. I don't know why they changed all the names. That was kind of confusing also at the beginning. But yeah, no I do like these operators a lot. A lot of them, for example I just added caching a couple of days ago to one of the services. And that was actually really easy to add because everything is on observables. So, I can very easily cache them.

**CHUCK:&nbsp;** I have a question that I would like to ask. As you worked through the betas and then into the release candidates did you find that the upgrades were pretty seamless? Or where there things that you had to do to make them work as you moved through it?

**AHMED:&nbsp;** No, they were very seamless for most part. RC1 did have a lot of breaking changes in terms of how you import stuff. But that was really easy. It's just find and replace. So no, I didn't really have any issues upgrading. I pretty much followed most of the betas and then we're now on RC1. I was actually really impressed by how stable everything was.

[Chuckles]

**AHMED:&nbsp;** Because we didn't have any breaking changes. We didn't have to make any big changes in the code. So, it was nice.

**CHRIS:&nbsp;** We should aspire to be as good with Functions.

[Laughter]

**AHMED:&nbsp;** Yes, [hopefully].

**JOHN:&nbsp;** So, after going through this whole process would you recommend Angular 2 to other people following your experience? Would you do this all over again?

**AHMED:&nbsp;** Yes, absolutely, yeah.

**CHRIS:&nbsp;** I would.

**AHMED:&nbsp;** Yes, I definitely do recommend it now to everyone that asks me for stuff. It's really nice.

**WARD:&nbsp;** Yeah. Has there been a conversation among… because I know there are other people and other parts of the portal are written with other frontend technologies. Have you all gotten together and shared your reflections?

**CHRIS:&nbsp;** I was actually talking with… so, the logic app team, they recently rebuilt their UX in a similar fashion where it's all done inside of an iframe now. And I found out that they actually built it with React. So, we've actually had a war going on now between the two teams. And we've got to be better so Angular can win versus…

**JOHN:&nbsp;** Interesting.

**CHRIS:&nbsp;** The React frame in that sense. There are other teams here investigating that. And I think we've learned a lot from this pattern that will just end up being shared in terms of…

**AHMED:&nbsp;** Yeah.

**CHRIS:&nbsp;** How to do this.

**AHMED:&nbsp;** The one thing I like more about Angular, I actually looked at React back then. But I like that Angular actually provides everything in the framework. Like HTTP service, lifetime management, stuff like that. While React was mostly just for views. And then you had to figure out how you're going to do HTTP, how you're going to do component management, stuff like that. So yeah, I don't know.

**JOHN:&nbsp;** You know, I'm so glad you said that, because every time I've mentioned “Yeah, you can use the HTTP module with Angular 2,” I hear from some people, experts saying, “Well, you don't have to use that module. You could just use the fetch API. That's great.” I'm like, “No, no, no. I like having a framework that actually gives me everything out of the box that I'm going to use for 90% of my development.”

**AHMED:&nbsp;** Yeah, I like that, too. Like yes, every now and then I might need to actually build an XHR myself for something that's very specific. But yeah, other than that no, I like having the framework actually provide me with everything as opposed to having me look. Every time I want to add something I have to look at a million different frameworks and pick on.

**CHRIS:&nbsp;** It makes getting started a lot easier, too.

**AHMED:&nbsp;** Yes.

**CHUCK:&nbsp;** Mmhmm.

**CHRIS:&nbsp;** Because you know exactly, [inaudible] working on is the same patterns.

**WARD:&nbsp;** The dependency injection system. Have you found that to be, to your liking? Or…

**AHMED:&nbsp;** Yes.

**WARD:&nbsp;** Thoughts about that?

**AHMED:&nbsp;** No, I did. I actually like that a lot. Up until very recently I actually had a whole bunch of different [mock] services that I was injecting for testing. I did remove that recently for other reasons, because I didn't want to maintain the mocks. But yes, I did like the dependency injector. It seems to work very well.

**WARD:&nbsp;** You brought up there were tests. Have you written some tests over this [framework] yet?

**AHMED:&nbsp;** I did. I did have some tests that I removed because they weren't very easy to maintain. But no, so no. We don't really have any big tests that are… that was actually one of the next items that I wanted to look at, how to add tests. But so far…

**WARD:&nbsp;** Do you hear them outside the window? You can hear the police coming.

[Laughter]

**AHMED:&nbsp;** I know, yes.

**WARD:&nbsp;** Actually [chuckles] I don't know if they're coming for you or for me because we really got to get that testing chapter out there so that…

**AHMED:&nbsp;** Yeah.

**WARD:&nbsp;** So that you're not having to discover it all yourself. But I can tell you that the facilities for testing which are being improved even as I speak are really quite nice. So, when you do get to it, you'll like it.

**AHMED:&nbsp;** I'm looking forward to it. [Chuckles]

**CHUCK:&nbsp;** Alright. Well, let's go ahead and get to picks. We've been talking about this for about an hour and it's been fun. But anyway, John what are your picks?

**JOHN:&nbsp;** So, I'm going to pick some things I've been researching lately. I've been doing a ton of research into the mobile web. And during this research I'm finding a couple of things that really peak my personal interest. And one of those is progressive web apps. That's something that Jeff Cross has been working on quite a bit for the Angular team, Angular mobile. And I just find them fascinating that we've got these responsive web apps that now can have some native-like features on the phone. Things like pinning to the home screen or running offline.

So, looking into that as well as NativeScript. It's been another thing that's been really piquing my interest. Because now I can take Angular 2 skills and write some apps. Although I'm using a XAML or XML-like form or view layer.

And then also Ionic 2. So, in that view I'm really looking at Ionic 2. I'm like wow. Cordova, is that really the way to go? You've got things like NativeScript but Ionic 2 is now branching out and starting to think more about, “How can we do, how can we let people use Ionic to create our awesomely-themed controls and applications with Angular 2?” And not even care if they are truly native mobile. Just maybe [inaudible] mobile-ready type application.

So, I'm looking at these tools in different ways actually, these days. My pick is all three of them. Progressive web apps, NativeScript, and Ionic 2.

**CHUCK:&nbsp;** Alright. Ward, what are your picks?

**WARD:&nbsp;** Well, I'm going to go off tech and recommend a book of poetry. [Laughs] By Billy Collins who I think is one of the funniest poets out there. And you know, you think, “Ah, the poetry thing. That's for somebody else.” But I think Billy Collins speaks to all of us. And just to whet your appetite I'll read the beginning of one called 'Hell'. This is a poem called 'Hell'.

I have a feeling that it is much worse

than shopping for a mattress at a mall,

of greater duration without question,

and there is no random pitchforking here,

no licking flames to fear,

only this cavernous store with its maze of bedding.

And then it goes on. Anyway, check out Billy Collins if you want poetry that amuses.

**CHUCK:&nbsp;** Alright. I have been listening to a book lately. I'm going to drive some people crazy because I've picked this on all the shows this week. But they kind of stagger. So, you'll get them over a few weeks. Anyway, the book is 'Start with Why' by Simon Sinek. And I have really enjoyed it. It's been superb as far as I was talking to somebody about a month ago who asked me or who kept talking about the why of his business. And I finally looked at him and I said, “How do you figure out that why?” And he's like, “Well, you already have it. You just don't know it.” And then he recommended this book. And it has been absolutely superb. I'm almost done with it. But anyway, I haven't quite gotten to the part where he walks you through figuring out what your why is though I have some ideas I think. But I'm curious to see what the end result is. So, I'm just going to pick the book 'Start with Why' by Simon Sinek.

I've been listening to it on Audible so I'll just kind of double pick that, because I really enjoy the audio books.

Ahmed, what are your picks?

**AHMED:&nbsp;** Well, I guess I can pick a book as well. I've been listening to a book called 'Sapiens'. Bill Gates recommended it recently and I just kind of bought it on Audible and started listening to it. It's really nice. It's very interesting. It's about the development of humankind. It's a cool book. If you have a chance, check it out.

**CHUCK:&nbsp;** Alright. Chris, what are your picks?

**CHRIS:&nbsp;** So, my pick today is Promise Theory. I was just at a conference, the Serverless conference in New York City. And there was a great presentation which hopefully should be online here soon by Patrick Debois about promise theory and about how you can use promise theory to kind of provide an information model for disparate systems which inside of a server-less pattern is really important because the things have less dependencies on each other. And I was reading through it and I was like, “This models so many things both in real like and in what I've been doing from a programming perspective.” It was from a guy named Mark Burgess. He's got some great books on it. He built the CFEngine, which is an automation engine, on top of that. So, it seems like a really rich space to start digging into.

**WARD:&nbsp;** What is a promise theory? I know what a promise is in reality. That's something you break.

[Laughter]

**CHRIS:&nbsp;** And it was interesting enough because I was hearing the presentation about promise theory and what promises are, what a promise is, how an agent basically presents a promise. And how essentially inside of promise theory, when you take a… you don't think of dependencies so much on another agent's promises. You assume that they're lying to you and it will be broken. So essentially, there are conditions where they'll say that, “I'll definitely break my promise.” And you still basically build assuming they'll fail. And it's really great when you're talking about distributed systems because the number one problem we have with distributed systems as that your chances that one of those leaves will fail go up as you add more dependencies.

So, it's a kind of interesting way of treating those promises and thinking about them as each agent presents a series of promises and how you build applications. I'm really getting into the server-less application space and how you build these service-oriented architectures using not a real backend but just these functions or some service someone's running for me. And this theory seems to help provide some ground for those things to sit on rather than just hoping that they all work in the end. [Chuckles]

**CHUCK:&nbsp;** Very cool. If people want to follow up with what the two of you are working on, follow you on Twitter, anything like that, where do they go?

**CHRIS:&nbsp;** Yeah, for me, Chris, you can follow me @crandycodes. If you want to follow more about what we're doing on the Functions team you can follow the @AzureFunctions Twitter handle. We've got team blogs where we talk somewhat about the product but we also try to talk about how we build the products. We really want to be open about how we've been building things. So, those are the two best places.

**CHUCK:&nbsp;** Alright. Well, thank you for coming. We'll go ahead and wrap up the show and we'll catch you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**
