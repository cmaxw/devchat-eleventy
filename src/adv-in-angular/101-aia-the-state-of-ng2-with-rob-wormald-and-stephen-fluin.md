---
layout: layouts/post.njk
title: >
  101 AiA The State of NG2 with Rob Wormald and Stephen Fluin
date: 2016-07-14 07:00:27
episode_number: 101
duration: 49:25
audio_url: https://media.devchat.tv/adventures-in-angular/AiA101TheStateofNG2.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

02:59 - Rob Wormald Introduction

- [Twitter](https://twitter.com/robwormald)
- [GitHub](https://github.com/robwormald)
  03:46 - Stephen Fluin Introduction
- [Twitter](https://twitter.com/stephenfluin)
- [GitHub](https://github.com/PeEllAvaj)
- [Blog](https://mortalpowers.com/)
  04:28 - [Improvements Coming for Routing in Angular](https://angularjs.blogspot.com/2016/06/improvements-coming-for-routing-in.html)08:22 - Syntax 11:10 - Preloading Data 13:59 - [Brian Ford](https://twitter.com/briantford)’s Router =\> The New Router
- [Lifecycle Hooks](https://angular.github.io/router/lifecycle)
  - [canActivate](https://angular.github.io/router/lifecycle#can-activate)
  - [canDeactivate](https://angular.github.io/router/lifecycle#can-deactivate)
    17:23 - Does the new router do these things?
- Can I click on a link and tell it to go to a route?
- Can I pass parameters; multiple parameters?
- Can I add multiple routes to multiple different regions on the page?
- If I’m a child component, can I reach up and learn anything about my parent, and if so, what can I do?
- Will, with this router, do I have the option of [Lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) the routes or loading them all up front?
- Can I route to two different states on the same page?
  23:28 - Auxiliary Route 24:51 - Offline Compilation
- [CSS (Cascading Style Sheets)](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  29:38 - Bundling; Development Experience 32:46 - Relative Pass 41:25 - Treeshaking 43:21 - What’s left before Angular goes live? &nbsp; Picks
- [rollup.js](https://rollupjs.org/) (Rob)
- [Google Play’s Family Plan](https://support.google.com/googleplay/answer/6317786?hl=en) (Jules)
- [Plunker](https://plnkr.co/) (Stephen)
- [Ford](https://www.ford.com/) and [Chevrolet](https://www.chevrolet.com/) (John)
- [Adobe Lightroom](https://www.adobe.com/products/photoshop-lightroom.html) (John)
- [X-Men Apocalypse](https://www.imdb.com/title/tt3385516/) (Joe)
- [P.I.](https://boardgamegeek.com/boardgame/129050/pi) (Joe)

### Transcript

**JOHN:&nbsp;** Just you and I.

**JOE:&nbsp;** Yeah, you got it.

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not that’s totally up to you. You can check it out at KendoUI.com]_**

**JOE:&nbsp;** Hello everybody and welcome to episode 101 of the Adventures in Angular Podcast. I love episodes that are also binary. What would that be? That would be like episode five, right? If [we have this] binary.

[Chuckles]

**JOE:** Today on our panel we've got John Papa.

**JOHN:&nbsp;** [Static noise]

**JOE:&nbsp;** Oh my.

[Laughter]

**JOE:&nbsp;** All we got was static. That's John. That static you hear? That's John.

[Static noise]

**JOE:&nbsp;** He's static. He is static. John has become electronic interference.

**JULES:&nbsp;** [Laughs]

**JOE:&nbsp;** Well hopefully we can figure out John's technical issues through this episode. We've also got on our panel again the awesome Jules Kremer.

**JULES:&nbsp;** Hey.

**JOE:&nbsp;** And then we have some awesome special guests. Jules is going to kind of act as a special guest today because the two guests that we've got are on her team. And that is Rob Wormald.

**ROB:&nbsp;** Hey.

**JOE:&nbsp;** And Stephen Fluin.

**STEPHEN:&nbsp;** Hello.

**JOE:&nbsp;** And these two are dev rels. What are you guys? Is there like an official name for your titles?

**ROB:&nbsp;** We're developer advocates.

**JOE:&nbsp;** Developer advocates on the Angular team. Awesome title. So, we are going to be talking today about the status of Angular 2 and where it's at and there's just a lot of cool stuff that's going on right now. [Inaudible] and stuff. So, it's going to be a really great episode. I'm really super excited to talk about it. So before we do though, I think it would be a good idea to have Rob and Stephen take a quick minute and talk about themselves, their history with Angular, and maybe give us a little bit of an idea of their jobs. And then we can move into our topic.

**ROB:&nbsp;** Sure. So, I've been on your podcast a couple of times before, I think. But actually, the last time I was on your podcast I think I was just like a contractor on the core team. And since then I've actually joined Google as a full-time employee. Previous to that or sort of [inaudible] for that, I was an Angular developer on the outside world doing Angular apps for enterprise and my own purposes. And yeah, so I've been doing that. And I joined as a developer advocate about three months ago it's been. And yeah, that's pretty much where I've been. Where have you been?

**STEPHEN:&nbsp;** I have, I joined Google about a month and a little bit more than that ago as a developer advocate. Before that I used Angular a ton [out in the field]. I was a developer advocate in another company and then I did consulting for enterprises and startups out in the real world, so to say. How I really think about developer advocacy is we're really here to represent the Angular team out in the world. But then also to try and represent the real world within the team to make sure that we've got both [inaudible] means of communication as open as we can get them.

**JOE:&nbsp;** I love it. Definitely an important, super important role. So, I definitely want to talk some more about being a developer advocate for the Angular team. But before we do, I think the important stuff is really going to be the state of Angular and what's going out. I was surprised to find out that five days ago as of the time of this recording, which was June 14<sup>th</sup> that there was a blog post posted about the coming improvements for routing in Angular. And I'd been, I don't know, not necessarily terribly vocal but definitely vocal about the fact that we've got a deprecated router. It's actually named the deprecated router and that's what we've been using. And that's what's, if you go to the as of right today, you go to the documentation site and that's what you would, that's what the documentation site is written in. So, we definitely needed a new router.

Maybe we could talk a little bit about the new router. And maybe Stephen since you wrote the blog post, you kind of go over the highlights of what's in the blog post and what's coming up for it. And Rob and Jules, you guys can pitch in whenever necessary.

**STEPHEN:&nbsp;** Sure, sure. So, the high-level story with the router as it is today. So, as of recording we're at alpha three. But we're actually really proud of this router. We've been working on it for a little while now. What we're really trying to do is to acknowledge and respond to all the things that we learn from the community over the last few months. We've gotten tons of feedback in terms of how to do [inaudible] work, how do we want the routing declarations to look, as well as we've kind of been validating the build and the construction of the router with a lot of the more advanced techniques such as template compilation, that we're trying to make easier for the community. And so, all of those things culminated in a design of a new router which is the current router with the real intent of a few things. So, we want it to be obviously easy to use. We wanted it to be much more reactive.

So, if you look at some of the work the @ngrx team was doing, we actually ended u combining our efforts with theirs. And we had a lot of feedback from them to try and make capabilities of the router much more reactive. So, to exemplify that if you have a component you can actually get an observable with the parameters being passed from the route to that component. And then you can actually change those parameters via route navigation without having to reload the component. Just by the observable you can kind of bind to new values, which is kind of a very exciting property. So overall, I've been using the new, this router for I feel like more than a week now. It's solid. It's easy to get started with. You basically, instead of adding a bunch of route declarations on each of your components you can do it centrally now and really design your entire application. And then the appropriate components and child components get loaded at the appropriate times. So, I'm a big fan of this router and I think it's going to be easier for all the developers out there to use as well as to take advantage of some of the more advanced techniques.

**ROB:&nbsp;** And we should say that I think that built the first one, [inaudible] now we're [inaudible] deprecated. And I think a few weeks before ng-conf we sort of decided that maybe this wasn't the right path and that we needed to kind of start again. And so, this is the limbo that everybody's been in, kind of since ng-conf. And I think at ng-conf Mike and Brandon from the @ngrx team sat down with us and said, “Look, we have this thing that people came to like.” And I think it was, we've been kind of quiet about it over the past few weeks a we've been working out, is it exactly what we want to do. And I think yeah, where we're at now is we're very, very happy with the state of this router. I think it's… and I think everybody who's played with it so far has gone, “Yeah, this makes a lot more sense in terms of how it works.” And I think it's probably closer to the Angular 1 router in terms of how you configure it. It's easier to see what your application looks like at a glance. And I think it's a good foundation for some more [extra stuff that will come] later down the line.

**STEPHEN:&nbsp;** Yeah. And we called it an alpha version because we're still working on adding more features and capabilities to it. But we're very soon going to expect that to come to an end and we'll move into beta release candidate state. But if you just compare it head-to-head against the earlier incarnations of the router, it is already better than [inaudible]. So, that's why I definitely recommend people use it as of the release.

**JOE:&nbsp;** So, that's really awesome. I'd like to talk a little bit more about it in depth. For example, you mentioned that it was different, similar to the Angular 1 router. Let's talk about syntax, right? How much different is the syntax from the current router that we've been using in Angular 2?

**ROB:&nbsp;** So, completely. And I think the most important difference to realize is that in the previous versions of the Angular 2 router you were defining your configuration for routing on each component. So, you would add a decorator, [inaudible] routes. And you would configure your routing [inaudible] on that. So, everything was very tightly coupled to components. I think maybe we initially thought that was the best way forward. Everything is a component. What the new router does, the final router does, is you effectively provide just a big object.

So, very much in the same way as Angular 1 you would say what URL and template URL. In this new one you basically say, “Here's the path that I want you to listen on. And here's the component that I want you to put in the routing tree.” And so, it's like you have a bunch of components and then you have this configuration object that you give to the router that sets up the tree if you like. And that's the most striking difference you'll see between one and two. And I think probably for most people coming from Angular 1 it's, you can think about it a lot closer to how say UI router's nested configuration works. It's not exactly the same as UI router. But that same kind of, you can describe the hierarchy of your application with this big object.

And then the other big part of that, I guess the other major change, was that one of the problems we ran into, one of the fundamental issues with the first iterations of the router was that if you wanted to have for example and auth service that would allow you to check and see, “Am I logged in before I could go to this component?” that was quite difficult to accomplish with the old router. And now that's again, it's a very simple declaration on the route configuration. You just say, “Use this function or this class, this service, to check if I'm authorized to activate or leave or whatever.” So, I think its centralized configuration makes the whole thing a lot easier to reason about.

**JOE:&nbsp;** Very interesting. So, I can see that. There's like, you can specify activate or can activate, can deactivate, that sort of thing, on the routes?

**ROB:&nbsp;** Yup.

**JOE:&nbsp;** Okay. Now…

**ROB:&nbsp;** [Inaudible] on the routes and not on the component. So, you have access to the components, especially [in the] can deactivate case.

**JOE:&nbsp;** Mmhmm.

**ROB:&nbsp;** But I think the primary thing to mention is that they are decoupled, right? So, you could use a component in multiple places with different children. It makes the whole system a lot more flexible. And really, one of the big things [inaudible] case, it means you don't have to fire up and instantiate a component to know if you're allowed to go to that component. So, you get some nice efficiency [inaudible] that as well.

**JOE:&nbsp;** Right, right. So, that was definitely one of my big complaints with the last router was that inability to do that. I know that Brandon, is it Roberts?

**ROB:&nbsp;** Yup.

**JOE:** I think had done a lot of awesome work around that. One of the other things that I specifically like to do with Angular 1, and I know that there's varying opinions on the viability or best practice nature of this, but there's plenty of times, and then also it was a lot worse with Angular 1. If you wanted to preload data. Angular 1 was basically just a function. Controllers are functions. So, if you wanted to load data you had to do a bunch of callbacks. It's not quite as bad in Angular 2. But what about that? What about saying I want to preload this data and I don't want a route. I don't want the page to show up until I preload the data. Is that still more of a, “Oh, you need to go there and show some kind of a spinner while you're loading up the data within the component or preload data with the component,” or can you actually say, “Don't even begin to route and change the route until this data has come back”?

**ROB:&nbsp;** So, you're talking about the sort of resolve functionality?

**JOE:&nbsp;** Yeah, yeah.

**ROB:** We don't have [inaudible] that's kind of defined as resolved. And I think probably because we slightly differ on that. We don't want you to necessarily wait until [inaudible]. But the hook, so the can activate hook you can actually do exactly what you want to do in there. So, you could effectively hold a rendering of a component until you do some fetching. It's not going to pass it into the component. But if you wanted to use can activate to say, “Go ahead and preload this data, stick it in a service before I arrive,” then yeah, absolutely do that.

**JOE:&nbsp;** Gotcha. So, it's not quite the same as transmitting the data over the way that Angular 1's resolve worked.

**ROB:&nbsp;** Right. And I think the [inaudible] for that is this idea of reactivity means that we want you to get to the component as rapidly as possible and then allow you to from that component react to things. Like I don't know, the ID changing [inaudible]. If you're looking at a list of users and you go from the list to detail, you don't have to continually re-instantiate that component. So, resolve doesn't necessarily make sense in that context, right?

**JOE:&nbsp;** Right, right.

**ROB:&nbsp;** So, we just want to make sure that you stay on this component, don't continually [inaudible] the component but just change the data as the route [paths] change. So, you can accomplish the same things. But I think that the model is probably slightly closer to an Angular 2 way of doing things.

**JOE:&nbsp;** So performance-wise, say that I am going to check that I'm logged in, the user is logged in before I allow them to visit a specific route. So, I do that check. Well, that check's going to involve heading over to the server, asking some data, and coming back. Then I get there and now I need the data. So, I've got to make another trip where I wish that oh, I would have liked to have made that call at the same time I was checking on the auth call, right? So, that's going to be a case where you're going to want to do that same preloading mechanism where, go ahead and fire it off and preload it into a service. Then when you get there, ask the service if it's there. If not, just listen or subscribe to it until the data's available.

**ROB:&nbsp;** Yeah. I think the flexibility of the can activate keeps the ability to do whatever you want in whatever you want. So, you can absolutely do parallel, do an auth check and do a data pull and make sure that both those things complete before I actually activate that component. So, that [inaudible].

**JOE:&nbsp;** Right. Gotcha. Very cool. So, you mentioned that this router's relatively new. I don't know. A lot of people will probably realize or probably know the history that the original router was written by Brian Ford and the new router or I don't know if the original router… the original Angular 2 router was written by Brian Ford and he's left the team. So, this new router, how much of this is kind of taking his work and just bringing in and repackaging it up and putting a different surface on it? And how much of it is completely new, scrapping what was in the first router?

**ROB:&nbsp;** I think probably, the way that Victor would describe it I think, is he would say that it's probably 50% of each. So, I think that there are some really good conceptual stuff in Brian's first iterations of the router. And then I think that one of the interesting things about the other half of this, so the @ngrx team, I should say that like I started the @ngrx group, right?

**JULES:&nbsp;** Yeah.

**ROB:** But Brandon and Mike who wrote the @ngrx router, I think they really looked at what's… if you were doing an ideally super modern application using all the kind of fancy [inaudible] like RxJS and all the stuff that we like in Angular 2, what would routing look like in that [inaudible], right? And I think that the third Angular router is kind of the best of both of those things. Like it doesn't pull in everything that the @ngrx [inaudible]. But it also does bring in some of the learnings from the first couple of iterations of the router. I think it's like a really nice middle ground.

**JOHN:&nbsp;** Hey, Rob.

**ROB:&nbsp;** Yeah.

**JOHN:&nbsp;** Can you explain what the life cycle hooks are for the new router?

**ROB:&nbsp;** Yeah. So, the two that I know of at the moment and there may have been one added since I've last looked at it. And I think that we have the flexibility to add them if it becomes [inaudible] to add. But the two are really can activate and can deactivate, basically. Can activate gets past, I think they're like a, it's basically just you can pass in a service, like any sort of Angular service, and then you return a promise or an observable that says, “Yes, you are able to activate.”

And then can activate is really more useful for like if you wanted to make sure somebody [inaudible] had unsaved data for example. Can activate will allow you to sort of pop up a message that says, “Hey, are you sure that you want to leave this because you haven't actually saved this bit data?” So, those are the two main hooks. [Inaudible]

**JOE:&nbsp;** That second, you were talking can deactivate, right?

**ROB:&nbsp;** Can deactivate, yes.

**JOE:&nbsp;** Okay.

**ROB:&nbsp;** And so, a similar one existed in the first iteration of the router. Now it's where they're defined that has changed.

**JOHN:&nbsp;** Yeah, and I think it's worth pointing out. I know you just talked about this, but it's worth clarifying that I think in the old one, the deprecated router, your can activate was actually part of the component, if I remember correctly. So, that's not where it is now, right?

**ROB:&nbsp;** Right.

**JOHN:&nbsp;** And that makes more sense.

**ROB:&nbsp;** I think it makes tons more sense. And if you wanted to accomplish the same thing where you had a can deactivate check on the component, the can deactivate hook actually gets passed the instance of the component. So, you can then do a check for something, call that same method on the component to check to see if [inaudible]. So, it gives you a lot more flexibility. But I think you could accomplish the same things that you could in the first one as well.

**JOE:&nbsp;** Right. So, the component that's associated with the route, it can actually have the logic about, “Yes, they can navigate away or they can't,” or it could be some general logic. And in either case you can either call the component, ask it say, “Hey, run your can deactivate check,” or it could be something more generic like, “Hey, is there some service here that has some flag set that means that data's dirty and I don't want them to route away.

**ROB:** That's right.

**JOE:** Awesome.

**JOHN:&nbsp;** So, it's time to play a game show. I'm going to be your game show host, Rob.

**JOE:&nbsp;** [Laughs]

**JOHN:** Alright. You can only answer yes or no or I have no idea what you're talking about. [Laughs] I'm going to throw out a couple of ideas of what the router should or shouldn't do and just tell me, does the new router do these things. For example, can I click on a link and tell it to go to a route?

**ROB:&nbsp;** Yes.

**JOHN:&nbsp;** Can I pass parameters, multiple parameters?

**JULES:&nbsp;** Yes.

**ROB:&nbsp;** Yes.

**JOHN:&nbsp;** Can I have nested routes?

**ROB:&nbsp;** Yes.

**JOHN:&nbsp;** Can I have multiple routes to multiple different regions on the page?

**ROB:&nbsp;** Yes.

**STEPHEN:&nbsp;** Yes.

**JOHN:&nbsp;** [Chuckles] Longer pause, but cool. [Laughs]

**STEPHEN:&nbsp;** We called [inaudible].

[Laughter]

**JOHN:&nbsp;** Those are crazy routes.

**JOE:&nbsp;** John, will you explain what you just talked about? Multiple routes to multiple places on the page.

**JOHN:** So, there are, there are multiple ways describe this, too. Aha.

**ROB:&nbsp;** [Chuckles]

**JOHN:&nbsp;** Let's say you wanted to have a dashboard. That's the canonical example I see. Maybe in your dashboard you have different routes that load up different sections of the page, maybe to named regions. That's one way to do it. Can you do named regions with the new router?

STEPHEN:&nbsp; Yes.

**JOHN:&nbsp;** So, that would be one use case which you could do that on the page. And that's something that I got really comfortable with when I used to use Durandal which was the predecessor to Aurelia. It was really nice to be able to use routing to basically create and light up certain areas of the screen.

**ROB:&nbsp;** And we should say as well that you can not only do that but you can divide the parameters available to those various named views as well. So, it means that part A could have access to different sets of parameters than part B. Quite a lot of flexibility in there.

**JOHN:&nbsp;** So, here's the bonus round of the game show. If I'm a child component, can I reach up and learn anything about my parent? And if so, what can I do?

**ROB:&nbsp;** Yes. You can always… so, each sort of higher level of the router if you like has access to its own state, params, et cetera. But you can always reach up to the top, to the router instance itself and get a hold of it and really get the entire state of the application from there. In contrast to the first router, there is only one instance of the router [inaudible] the new version. Whereas in the early versions, we had multiple instances of the router. Now we keep a single instance of the router and it keeps the entire state. And then you get access to what are called route segments I believe in the new router.

**STEPHEN:&nbsp;** Yeah. You can see all of those URL segments from within anywhere.

**ROB:&nbsp;** Yeah.

**JOE:** Alright.

**JOHN:&nbsp;** [Alright] and you guys made it through the bonus round. Now, here's the final question for the…

[Laughter]

**JOHN:** &nbsp; \$50,000 wheel of fortune. [Laughs] With this router, do I have the option of lazy loading the routes or loading them all upfront?

**ROB:&nbsp;** So, I'm of it as this. In the first iteration of the router, you will be able to lazy load the components that fall into those routes, right? But we are currently, I think in the first iteration decided that just for the sake of getting the core things about routing right, we're punting on lazy loading of the configurations initially. I think that's something we'd like to add in at a later rev. But I think we were more concerned that we get the rest of routing properly done. So, you can lazy load components absolutely. Lazy loading route config is not supported yet but should be in a later release.

**STEPHEN:&nbsp;** It's still technically possible, I believe. Because there's a router.reset config…

**ROB:&nbsp;** Oh, yeah.

**STEPHEN:&nbsp;** Method where at any point you want you can load entirely new router config in dynamically.

**JOE:&nbsp;** Huh.

**STEPHEN:&nbsp;** So, you can do it yourself. It's just not automatic.

**JOE:&nbsp;** Right.

**JOHN:** Can you explain to people why they'd want to do that? Why would I want to lazy load route config?

**ROB:&nbsp;** If you want to load the bare minimum of your application before somebody logs in, or if you're in a big enterprise app you might have 50 different versions of the application that are all [inaudible] driven. You may want to do that and make the person login before you go and fetch the rest of the config.

**JOE:&nbsp;** Kind of a white label type app?

**ROB:&nbsp;** Yeah. Good, good case for it.

**JOHN:&nbsp;** Sweet. Sweet, sweet.

**ROB:&nbsp;** But you could totally do that. It's just something we're going to provide out of the box. But again at any point you want, just inject the router and then operate on it as you wish [inaudible].

**JOHN:&nbsp;** Well, that's it. You guys won the game show. Thanks.

**JOE:&nbsp;** [Chuckles]

**JULES:&nbsp;** What did we win?

**JOHN:&nbsp;** World peace and a big hug.

**JULES:&nbsp;** [Laughs]

**JOE:&nbsp;** I'd also like to ask another question about the router and its capabilities. Can I route to two different states on the same page? Same component.

**STEPHEN:&nbsp;** So, you can give parameters to each of the components and you can route to multiple components, so via those outlets. So, you can have an auxiliary outlet. So, you can pass different parameters to those outlets. So, maybe you can clarify the question.

**JOE:&nbsp;** Well, alright. Let me do a simple example. I've got some page that shows a list of things. And if I click the create new button, the list of things disappears and a little create new box appears in the center. But I want to be able to link to that create new so that sometimes when they get to that page they get in and they're already in the create new and sometimes they get in and they're just in the view. And if I click create new I'd like the route to update automatically for me for myself. But the rest of the page is just, it's just all the same page.

**ROB:&nbsp;** I believe so. You have to…

**STEPHEN:&nbsp;** So, we'd need to kind of dig into the specifics there. It sounds like you're almost routing to, I mean you could use the parameters and the reactive way of building applications to just route to a new set of parameters for a new state. And then have that component understand what to do with those parameters.

**ROB:&nbsp;** I would say probably, to answer your question.

**STEPHEN:&nbsp;** [Chuckles]

**JOE:&nbsp;** Gotcha. So, it'd be like if I had the /new then the component itself needs to just go in and ask, “Hey route, is new part of my route or not? And if so, do this. And if not, do that”?

**ROB:&nbsp;** Yeah, you could totally, actually what you want to do, yes. You could totally do that. If you wanted to have a list and either navigate to a new or to a detailed on, yeah. It will [inaudible].

**JOE:&nbsp;** No, not of one. Like I'm showing the list and maybe the new box pops open at the top of the list. And it looks like an item in the list but the list, I'm still just on the list page. And the new box for each item in the list just shows up in that case. And…

**STEPHEN:&nbsp;** So yeah, I think I would use auxiliary routes for that and then just load the extra component.

**ROB:** You have a name, you have a named…

**JOHN:&nbsp;** Can you explain what an auxiliary route is so we understand?

**JOE:&nbsp;** Yeah, let's talk about that.

**ROB:&nbsp;** I think we're actually debating the name. This is one of the things. It's why we're still calling it alpha, because… so, the first router [inaudible] auxiliary routes. You have a route you go to [inaudible] have a primary state it would render in. And then some other container which you could render it in. And I, I have actually been arguing with Victor and I kind of fall on the side of I prefer UI router's model of everything is a named route. So, there's no primary versus secondary. You just have n numbers of named containers.

**STEPHEN:&nbsp;** Sure, yeah. It's definitely not a binary thing. So, what you can do is on a route configuration for a specific route, you can just define which outlet you want it to render in. And so, you can have /chat which loads into a route called right panel for example. So, you could have a /new that routed just one component into a subset of your page via a named router outlet.

**ROB:&nbsp;** So, if you think about a screen you had three containers on you could basically say, “When this URL arrives put this component into this pane, this component into this pane, and this component into this pane.” It allows you to be very flexible of what ends up where. And the best [inaudible] is like UI router, basically. [Chuckles] The way the UI router does the named views thing is very, very similar to how Angular 2 router does it.

**JOE:&nbsp;** Alright. So, let's move on. We talked about the router a ton. But let's talk about some other stuff. Like maybe offline compilation and after that maybe we could talk about RC 2.

**ROB:&nbsp;** So, I think that offline compilation is probably the most exciting thing coming down the pipe right now. The big idea of this basically is that in Angular 1 when you wrote an Angular 1 application you would write templates. And then when you ran your Angular application, Angular would bring in these templates and it would turn them into basically the logic that Angular needs to run. And that's [inaudible] for a long time. Angular 2 we do this differently. If you've been using an Angular 1 app or if you're building and Angular 2 app today, you've been using it more or less the way that it works in Angular 1 where we load this template up and we turn it into some code and then that just runs.

The thing we're just kind of polishing off the last bits and pieces of is this idea of offline compilation where we can basically at build time, so during your Gulp or your Grunt or whatever task, allow you to do that step of turning templates into code ahead of time. And that means that number one, we don't have to ship all that template code to the browser which saves you hundreds and hundreds and hundreds of KB. And it also gives you a big savings on actual performance in the application. So, it means you don't have to do the work of compiling when you boot the application. It means that everything is basically snappy and ready to go as soon as the application launches.

**JOHN:&nbsp;** Hey Rob, can I interrupt you for a second? Because I want to clarify something.

**ROB:&nbsp;** Yes.

**JOHN:&nbsp;** And in Angular 1 we used to be able to take our templates themselves, the HTML plus, and send it up to the client early if we wanted to, like caching it.

**ROB:&nbsp;** Inlining it, absolutely.

**JOHN:&nbsp;** Right. That's not what you're talking about though, correct?

**ROB:&nbsp;** Yeah. No, and so that's… that was a boost in an Angular 1 application but what we're talking about is a step that happens when Angular sucks in that template and what it does with it. And so, Angular 1 would parse it in a browser and this is how Angular 2 does it if you've been using it today. And we're talking about doing the same thing long before it ever gets to the browser. And so, we're actually going to turn your templates into code and then you just bundle that code in. And it means that the work of turning them into code does not have to happen in the browser.

**JOHN:&nbsp;** So, does this mean then that not only are you turning that code into it on the server and I don't have to send all that extra stuff up there but I also don't have to send additional Angular bits up? The work's already happened on the server for that processing.

**ROB:&nbsp;** Yup. It does a lot of the kind of dynamic configuration stuff, all happened ahead of time and turned it into code. But obviously it seems that, the other thing about this code is it's very, very fast code. It's not dynamically generated so VM handled it very, very well [inaudible].

**STEPHEN:&nbsp;** And a minor clarification. That doesn't have to be done on a server. You can actually, and we expect people to do it in their development environment.

**ROB:&nbsp;** [Inaudible] on the server, CI environment, dev environment, whatever. It's just, it's literally a very simple command line tool that runs. We want to make sure that it runs in Webpack and System and all these other tools. But at the moment it's just a thing you run and you get templates in, code out.

**JOE:&nbsp;** So, how does this relate to bundling up your code?

**ROB:&nbsp;** So, what's cool about it is that it basically then, it works like any other code that you're bundling. So, once you've turned it into executable code then your regular bundle process will just pick it up. And that's basically how it works.

**JOE:&nbsp;** Now the module, the code that it turns it into, then it has to fit with whatever module system you're using, right?

**ROB:&nbsp;** Right. So, the cool thing about the compiler is that we actually output TypeScript from it. You can level down to other languages from the compiler level. But we just say output TypeScript and then it goes to the rest of your TypeScript build pipeline into whatever it is you're doing. So, if you want to use System or Webpack or whatever, it starts at a much higher level than that. And whatever you end up turning it into is up to you.

**JOE:** Very interesting.

**ROB:&nbsp;** And it [makes]…

**JOHN:&nbsp;** Does this also mean that you can only use this with TypeScript? Meaning people who are writing in ES5 today wouldn't be able to take advantage of it?

**ROB:&nbsp;** For the moment it does. And I think that we talked about if we could support ES5 and ES6. But at the moment it's a…

**JOHN:&nbsp;** No!

**ROB:&nbsp;** Serious amount of work. But we're pretty sure that TypeScript is what we're going to stick with for the foreseeable future.

**JOHN:&nbsp;** Yeah. Yeah just, I'm just joking around.

**JOE:&nbsp;** [Chuckles]

**JOHN:&nbsp;** But I think it's… I'd rather just see people move over to TypeScript or ES6 if that's their choice to go. But I think the reason I paused you on this, and I think it's important, is I've heard offline template compiler get talked about. I think sometimes people get the impression that it's the same thing as, what was it called, ng-template?

**ROB:&nbsp;** Yeah.

**JOHN:** That we used to do before?

**ROB:&nbsp;** [Inaudible] ng-templates or whatever?

**JOHN:&nbsp;** Yeah, and it's so much more than that. It's not just getting the template to the client. It's actually processing the templates so Angular can understand how to handle it.

**ROB:&nbsp;** Yup.

**JOE:&nbsp;** So then, what about CSS? Does this also work for CSS?

**ROB:&nbsp;** Yup. Same thing happens with CSS.

**JOE:&nbsp;** Same thing happens in CSS. So, this is handling both HTML and CSS. Not images, I assume?

**ROB:&nbsp;** No.

**JOE:&nbsp;** Okay. So, then what about the actual bundling itself, right? Like delivering a bundle in Angular 2 is not necessarily a straightforward process just because there's a lot of moving pieces, right? People are having, running either some sort of a Gulp task or using SystemJS's bundler. And I've done this and you actually have to… man, you got to kind of work with it a little bit and make the configuration settings right. So, I turn all this into TypeScript then I got some bundler that runs through and… or TypeScript then would compile it out to ES5, right?

**ROB:&nbsp;** Right.

**JOE:&nbsp;** Then I got my bundler that's going to go through and grab all of that stuff and stick it altogether. And then I finally get this one file that I can then use, right?

**ROB:&nbsp;** One or many files.

**JOE:&nbsp;** One or many, yeah, depending on how I decide to bundle it up. Is the development experience like this going to be… is there a standard development experience for this? For, “Hey, I've been working with separate files and just asking my browser to keep requesting because I'm working entirely locally. But now I want to test the bundling process and bundle it and work with it on my dev.” Is there a…

**ROB:&nbsp;** Are you asking for a standard process in [JavaScript]?

**JOE:&nbsp;** Yeah, like a pattern. Well, more like a pattern that you guys, that the Angular team is saying, “Hey, this is the best way. This is the way that we've liked.”

**ROB:&nbsp;** So, I think what's interesting is that like we obviously, inside of Google we do things very, very differently. So, Google has its own set of internal requirements. And I think that one of the things we're finding is that in a lot of cases the outside world is a lot better at this than us. We expose stuff that's consumable. So, if you're using Webpack the experience is really, really nice. System takes some massaging but you get lots of good capability from that. And so, we're being pretty careful at the moment to not give a blessed solution. I think that for us, the CLI will be that. And the CLI will do whatever it needs to do and you should sort of be ignorant of what that is. I think that part of our job on the DA team or the dev rel team is to make sure that anything we do here should work across any of the tooling that you'd like. And so of course, six months from now I'm sure there'll be a new Webpack. There'll be a new whatever. And so for us, it's hard to say, “This is the right thing.”

So, one of the things I've been doing over the past month is I have played with effectively every bundling tool that exists in the ecosystem today. So, Webpack and Browserify and Rollup and System and things you've never even heard of and things that we patched together. And the answer is in a lot of cases it depends, right? What do you care about? Do you care about fast execution? Do you care about lazy loading? Do you care about maximum flexibility? Do you care about the best developer experience during you day to day dev cycle? And for us it's hard to give you an exact answer. But…

**STEPHEN:&nbsp;** I think what we're really trying to do is we're trying to blaze some of those trails for you. And we're trying to package up that developer story. But I think that's something we're still working on, on our road to final.

**ROB:** And I think you'll see that like you mentioned, the template inlining thing right? That was not something invented by the Angular team. That was built by the community.

**JOE:&nbsp;** Mmhmm.

**ROB:** And I think that's one of the reasons we're super stoked that we're getting close to actually releasing this thing. Because then it lets the community and their millions of awesome brains go out and start building tooling that we hadn't even thought about.

**JOE:&nbsp;** So, how does it affect relative paths? And then before you answer that question, could you maybe give a brief overview of relative paths in Angular 2?

**ROB:&nbsp;** So, you're talking about the template URL [inaudible]?

**JOE:&nbsp;** Yeah. Template URL and CSS URL or styles URL to style URLs.

**ROB:&nbsp;** The cool thing about the [raspberry] sorry, the offline compilation step is that's running server-side. So that more or less eliminates the bundling problem, or the relative URL problem. And the relative URL problem for your listeners is, if you write a file in a folder, so if you write my component and it's in app/user/whatever, it's in some deep path, the problem is when you build a bundle this idea of relative path disappears. So, this final output bundle has no idea where in the file system or where on disk to go find the template that it used to be next to.

And so, we have this kind of solution right now and I use solution, I'm air-quoting. You can't see me doing this. But we have this solution that allows you to basically use module ID or module name which kind of works. It's something that we're very much limited by the browser environment. We have this kind of sort of workable solution for dynamic mode. But template pre-compilation solves that problem out of the box. It just turns it into code and then it would work like code and then everything's nice and easy.

**JOE:&nbsp;** Alright. So, I want to kind of revisit this just a little bit, just this problem and talk about it like some of the development experience. Then you can tell me how this is affecting it. So, one of the great things about relative paths is like you said I'm way deep in my tree and I've got this component. And I also want to have a template for it and maybe a style sheet for it. So, I've got URLs that point from my… a template URL and a style URL that points from my component to those other two files. And normally the URL that I have to give it has to start from the root of the application. It should be maybe /app/user/blah/blah/blah, right? And that kind of stinks because the minute that I in development just say, “Eh, this three files or this component, I don't want it here anymore. I want it in this different subdirectory,” and I go and I move it. Now all those paths are wrong. And I've got to remember to update all those paths.

So, that's one nice thing about relative URLs is instead of pointing at the whole path I just say, “Hey, this is the file and it's in my current subdirectory,” wherever that is. But of course like you said, you have to use this silly hack where you say, “Alright. Here's this thing, module ID, that tells the loader where I'm at so that when I say go get my HTML file which is in the same directory it knows what that directory is like.” So, for development experience it's one thing. It's, “Oh, now I can just move these around.” But then when you bundle it all up it's that other problem, right? I bundle my component up and now it's no longer in a subfolder anymore. It's just part of this bundle. So, the HTML is still out in the subfolder and knowing where it was isn't really viable anymore in a production environment. So, I want to bundle that in.

So, it makes sense to me that when you bundle all this stuff up or when you pre-compile these templates and then they just get bundled in, then maybe that's easier. But still, you got to actually find the right bundle, or sorry, you got to find the right template within that bundle. So, I'm in the bundle. I'm one component and I'm no longer in a subdirectory anymore. I'm just a component and I need a template. And I don't know where, there's a gazillion templates in there and there's a gazillion components. Components are easy because they have these identifiers. But how do I find my template? And then in the development experience, do I lose relative paths? Do I not use them anymore? Because that way I lose the ability to say, “Oh, I don't like this component where it's at. I'm going to move it. Oh crap, I forgot to update the paths to the HTML and CSS and now it's broken.”

**ROB:&nbsp;** So, the thing that it enables you to do is use relative paths without worrying about it. That's the big deal about it, one of the [big deals] about it. And the reason for that is that you can basically think that when the code generation step runs it basically writes a file that replaces the ./my-template address with an import statement like the rest of your import statements.

**JOE:&nbsp;** Mm.

**ROB:&nbsp;** And so, effectively once your bundle step runs it's not really a relative question anymore. It's a standard static import like the rest of your import whatever from whatever call.

**JOE:&nbsp;** Right. That totally makes sense.

**ROB:&nbsp;** And so, it's hard for me. I've done [inaudible] the past month. It's hard sometimes to even conceptualize what's going on here. And I think that will be one of the things [to be] talked about over the next coming weeks or so, like how this works together and the best way to set it up. But the short answer is it solves a lot of these really super annoying problems in a very, very clever way I think.

**JOE:&nbsp;** So, in the development, when you're in dev mode and you're just sitting there writing, would you potentially then have a watcher going on that's watching those HTML files and CSS files and then every time they changed, recompiling them? And then even in dev, you're still, you're actually using the compiled, the pre-compiled HTML and CSS?

**ROB:&nbsp;** Yes. We'd like to get to a point where that experience is equally as fast and better than using the “dynamic” mode. We are also being very careful that it should not be [difficult] to switch between the two modes. If you want to go between dynamic and compiled mode, that's fine.

**JOE:&nbsp;** Mmhmm.

**ROB:&nbsp;** But we would like that compiled mode becomes the norm, for sure.

**JOE:&nbsp;** Right.

**ROB:&nbsp;** And that you should be able to run that fairly seamlessly and make that your go-to default environment.

**JOE:&nbsp;** Well, and it makes it kind of difficult right? Because you've got one watcher that's watching TypeScript, TypeScript files. And it's recompiling them whenever they change. Then you have another watcher that's watching your JavaScript files and reloading your browser whenever it changes, maybe. Depending on your development environment. Me I'm not really a huge… I don't really care that much about the live reload. I don't mind going in and hitting reload. But then you got another watcher that's now watching these HTML templates and compiling them into TypeScript. So, that needs to run first, compiling the TypeScript. Then the TypeScript compiler needs to run, compile it to JavaScript. And then if you are using a live reload then your live reload needs to then run.

And the problem that can happen in just the TypeScript and the live reload is that you make a change and it detects… TypeScript detects one of your file changes and reloads your JavaScript. And so then, the browser starts reloading and then it detects a different change. And now it's queued up yet another change and another reload. So, you get the browser that's reloaded and doesn't have all your code changes in it. And so, you think it's working but it's not, right? And you've got to wait for it to reload yet again. Or you start doing something and then it starts reloading on you. It's kind of a [difficult]…

**ROB:&nbsp;** So, the neat thing…

**JOE:&nbsp;** Tooling problem.

**ROB:&nbsp;** One of the neat things about the compiler is that it is in a lot of cases, a lot of it's just a wrapper around TypeScript. So, you can actually use it to supersede both of your… like your TypeScript watcher as well.

**JOE:&nbsp;** Mmhmm.

**ROB:&nbsp;** So, you can try to watch [inaudible] both your templates and your [inaudible] TypeScript. But again, this is one of the things that like, we've built the mechanics I think that exist today to do the command line version of this, right? And I think what we'll be working with and we're working with [inaudible] already, I'm like how do we best integrate this stuff into the rest of [inaudible] systems. Webpack for example, right?

**STEPHEN:&nbsp;** And Rob, maybe you can correct me if I'm getting this wrong, but it's… the template compiler is not blindly walking your HTML and your CSS files. It's actually using your components to find and compile those.

**ROB:&nbsp;** Yes, yes.

**STEPHEN:&nbsp;** So, there shouldn't be an extra step. It's not like you’re watching them independently. It's watching it through your TypeScript.

**ROB:&nbsp;** Yeah. And ideally, like theoretically you would have the first step, how you run your component scan and go tell it which components and which TypeScript or which HTML/CSS files to watch and then go from there [inaudible].

**JOE:&nbsp;** Gotcha. Those are really, this is super cool. I'll be excited when this feature becomes even more stable. So, is it out and usable yet or is this just like coming? Is it on the dock?

**ROB:&nbsp;** A bit like if you are super adventurous, you'll probably be able to use it in RC2. [Inaudible] there. We're not going to document it yet because we're still moving bits and pieces around and working at the best patterns and things. I am able to fairly reliably reproduce it as of RC2. But I want to make sure that it's like, the dev experience is really good before we ship it out to the world to make sure that it's consistent, easy to use.

**JOE:&nbsp;** Right.

**ROB:&nbsp;** But yeah, it's more or less we're pretty happy with [where] it exists today.

**JOE:&nbsp;** So, speaking of…

**JOHN:&nbsp;** Well, I think for…

**JOE:&nbsp;** Go, John.

**ROB:&nbsp;** [Inaudible] the apps that I've built with it are very, very small and very, very fast, to the point that it's very, very impressive I think.

**JOHN:&nbsp;** I think for me, the performance things that I'd love to see kind of get finalized are the tree-shaking stuff, maybe you can talk a little bit about that, the offline template compiler and then the lazy loading. Those three things to me are really what's holding me back from having some kind of an [inaudible] build process in getting something out into production with Angular 2. Are those high on the list of the Angular team or are those things I should be looking forward to this year? Or [inaudible]

**ROB:&nbsp;** Yeah. So, the first one, tree-shaking is interesting because that's like, I don't want to say it's not our problem but it's not our wheelhouse in terms of like that's generally done by your tooling. But I have been using a lot of Webpack and Webpack 2 and Rollup which are both very good at it. And they both do a pretty good job at it right now. So, those two tools will certainly supportive of what you want to do.

**STEPHEN:&nbsp;** And the parts [inaudible]

**JOHN:&nbsp;** [Inaudible] And Rob, I made big mistake. I actually mentioned tree-shaking and didn't say what it was. Do you want to explain to people what [Rollup] or tree-shaking is?

**ROB:&nbsp;** Yeah, its general idea being that Angular and your code may have a lot of stuff that's written into modules you may or may not actually end up using when you build an application. So, Angular has I don't know, 400 modules. And you may only use 200 of them and you may only use a subset of the code that's in those modules. So, tree-shaking basically when you build your bundle it kind of scans your code and says, “Oh. Okay, you're not using this thing so I'm just not going to include it in the file output.” So, it gives you big savings on code, actual bundle size of the out.

**JOHN:&nbsp;** Is that… that really helps people who say, “Angular is so big even though it's gotten smaller. I'm not really using all of it therefore I don't like it because it's such a big framework.” Where this kind of counteracts that whole argument of, “Well, that's great. It's big.” Yes, at development time using it all but when you tree-shake you're actually getting rid of everything you're not taking advantage of.

**ROB:&nbsp;** Yup. That's always been a problem. And I think one of the cool things people will start seeing is that when we ship big, fat bundles of code you always got what you got. And the trade-off you get when you set up a build system which has overhead of course, you bring in only the code that you need. And I think that the ecosystem as a whole is very much leaning towards that. JavaScript as a community in general is doing this. I think that Angular is really well-placed to take advantage of that for sure.

So, I did a build today that was 47K gzipped for a basic application. So, significantly smaller than anything you've ever built in dynamic mode in Angular 1.

**JOHN:&nbsp;** What does this mean for mobile?

**ROB:&nbsp;** It means for a start, everything loads much faster. And less code is again going to be significantly faster during runtime on the device. So, it's both faster to start, faster to load, and faster while it's running.

**JOHN:&nbsp;** And I imagine the offline template compiler really makes a big difference for mobile too, since we're handling that in advance.

**ROB:&nbsp;** Yes. Startup times are much better. And even the code that's running during your application, so if you're updating a long list, the way that that generated code is written is designed to be very, very fast on VMs. So yes, better across the board.

**JOHN:&nbsp;** So guys, what's left before Angular goes live? I'm not looking for a date here. I'll be the nice guy and not ask. [Chuckles] And everyone's I'm sure asked, wondering that. But what are the main features that are left? I remember Brad had that big list of, “Here are the big things we have to fix.” What are the highlights?

**STEPHEN:&nbsp;** I think, we've kind of touched on this a few times during this call, is just that all of the pieces are there now in Angular. And you can use them today. But we're really working on polish so that everything is kind of much more seamless, much more easy to understand end-to-end. We want to get to…

**JOHN:&nbsp;** And how do you judge that, Stephen? How do you judge when it's polished? How do you know when it's ready?

**STEPHEN:&nbsp;** Well, I want to get from a world where Rob can use offline compiling to a world where I can use offline compiling.

**JOHN:&nbsp;** [Laughs] I like that. Or Dan Wahlin, our good friend…

**JOE:&nbsp;** Nice.

**JOHN:&nbsp;** Calls it the mom test. When my mom can do it, it's done.

**ROB:&nbsp;** And we had Miško building apps. Which is good. That's a good indicator as well. So yeah, I think that offline compilation is the big one. And then we've got bits and pieces to polish. We've got a nice little list we're burning through. But we're coming down to it now I think. Forms, we've made some really big improvement on forms thanks to Kara over the past couple of weeks. So, that was a big irritation point that is nicely taken care of now. And a lot of it's burning through a lot of the kind of open [inaudible] issues on GitHub right now. Things that people find annoying [inaudible] or that are slightly broken.

**STEPHEN:&nbsp;** Yeah, we've actually landed a bunch of things in RC2. Security is now feature-complete from the perspective of [standardization] of not only HTML but also CSS and script tags and things like that. The animation framework that we've been demoing, that landed in RC2. So, you can start using that now. So, we're definitely getting closer.

**JULES:&nbsp;** Which is a great note to end on because we are going to get kicked out of the room that we're in.

**JOE:&nbsp;** Awesome. Well, let's wrap up then. Do we have a minute here to do our picks? Before you guys get kicked…

**JULES:&nbsp;** [Inaudible] You got about a minute.

**JOE:&nbsp;** Okay. Well, let's… actually, let's start with you guys then, since you guys are going to lose your room. If you guys want to go through and list out your picks.

**ROB:&nbsp;** Picks for me. So, picks for me. Rollup I think is awesome. I think everybody should get a feel. Try Rollup out. It's kind of the new kid on the block in terms of building. But it's fun. I'm using it for most of my builds right now and I really like it. And it's a new, cool tool.

**JULES:&nbsp;** My picks are going to be family-oriented because my son graduated from high school on Friday. And I am more emotionally driven about this than I thought I would be. So, as the good mom that I am if you have children please go spend time with them because it goes by in a blink of an eye.

But my actual pick is for Google Play's Family Plan. Because I have two children both of which are not with me all the time. And it was awesome this weekend. And my daughter can buy all of her own music and all of her own movies and I didn't have to get involved. Of course, you might want to turn on the approval thing. But it's a really cool feature of Google Play.

**STEPHEN:&nbsp;** And I guess my pick, a lot of people have probably already heard of but Plunker. So, just the ability to write your code, share with others online, on the web, in a way that [inaudible] run live. It keeps taking up a bigger part of my mind share and a bigger part of my life as I continue to share more and more code.

**ROB:&nbsp;** And there's a new one today. [Inaudible] yesterday. Embed.plnker.co. It's this new thing and it's amazing. [Inaudible]

**STEPHEN:&nbsp;** And it's beautiful.

**JOE:&nbsp;** Alright. John, how about you?

**JOHN:&nbsp;** Well, I've had a strange week as well. My daughter is actually going into high school. So, it's been interesting for me trying to let go a little and we're actually looking into buying a car for her. And it's been so painful. Don't want to do that. Oh. So, I'm going to pick this week that it's great that…

**JULES:&nbsp;** [Inaudible]

**JOHN:&nbsp;** What's that?

**JULES:&nbsp;** She's a freshman and you're already thinking about… I guess I was too, huh. I just bought my freshman a car, yeah. You're right. Sorry, go on.

**JOHN:&nbsp;** So one, so I mixed up. One is going into high school and the other one's coming out of high school.

**JULES:&nbsp;** Oh.

**JOHN:&nbsp;** So, it's been one of those. I can't believe they're growing up. But…

**JULES:&nbsp;** Yeah. [Inaudible]

**JOHN:&nbsp;** I'm going to pick Ford and Chevy because I have not liked them in the past couple of years but the more I've looked at these cars, they are safe. They have a lot of good features and they are so much less money than buying Toyota and Honda these days. So, that's my non-tech pick.

**JULES:&nbsp;** [Inaudible]

**JOHN:&nbsp;** And then for technology I've been using Adobe Lightroom lately for a lot of photo editing. And I've been pretty impressed with how simple it can be for I don't really feel like hitting 17,000 knobs. I just wanted to adjust this. So, it's pretty cool technology for adjusting photos.

**JOE:&nbsp;** Awesome. For my picks, I'm going to pick the movie that I watched last night which is 'X-Men Apocalypse'. I picked this on the other podcast but it was just such a great movie. Really enjoyed it and the scene with Quicksilver was super, super awesome.

And then I also want to pick a board game. I played a board game called P.I. the other night. Really fun. Very awesome. It's a deduction game. Sort of imagine a little bit of Clue but not even close to how Clue plays. But kind of that same thing where you got to figure out the person, crime, and location. Super, super fun to play with multiple people. And just very enjoyable. Great game for parties. So, I'm going to highly recommend the board game P.I. Check that one out.

And those are my picks. So, that was it. I think we'll say goodbye and thanks everybody for tuning in. And we'll catch you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**
