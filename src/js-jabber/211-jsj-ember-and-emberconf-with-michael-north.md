---
layout: layouts/post.njk
title: >
      211 JSJ Ember and EmberConf with Michael North
date: 2016-05-11 07:00:26
episode_number: 211
duration: 51:34
audio_url: https://media.devchat.tv/js-jabber/JSJ211EmberConf.mp3?rss=true
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

02:22 - Michael North Introduction

- [Twitter](https://twitter.com/michaellnorth) 
- [GitHub](https://github.com/mike-north)
- [Levanto Financial](http://www.levantofinancial.com/)

04:10 - [Ember](http://emberjs.com/) vs [React](https://facebook.github.io/react/) or [Angular](https://angularjs.org/)

- [JavaScript Jabber Episode #203: Aurelia with Rob Eisenberg](https://devchat.tv/js-jabber/203-jsj-aurelia-with-rob-eisenberg)

07:13 - Convention Over Configuration

09:39 - Changes in Ember

- [SproutCore &nbsp;](http://sproutcore.com/)
- [iCloud](https://www.icloud.com/) 
- [Ember CLI](http://ember-cli.com/)
- Performance
- [glimmer](https://github.com/tildeio/glimmer) 

16:04 - [Ember FastBoot](http://ember-fastboot.com/)

- [Building a performant real-time web app with Ember Fastboot and Phoenix](https://medium.com/@mikenorth/building-a-performant-web-app-with-ember-fastboot-and-phoenix-part-1-fa1241654308#.45aquo9yd)

18:53 - [EmberConf](http://emberconf.com/)

- [Opening Keynote by Yehuda Katz & Tom Dale](https://www.youtube.com/watch?v=OInJBwS8VDQ&list=PL4eq2DPpyBblc8aQAd516-jGMdAhEeUiW&index=1) 

22:47 - Mobile/Native Experience & Optimization

- [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- Hybrid Apps

29:52 - [Electron](http://electron.atom.io/)

30:46 - Open Source Empowerment; The Ember Learning Team

33:54 - [Michael North's Frontend Masters Ember 2 Series](https://frontendmasters.com/courses/ember-2/)

37:11 - The Ember CommunityPicks

[React Rally](http://www.reactrally.com/) (Jamison)[Embedded](http://www.npr.org/podcasts/510311/embedded) (Jamison)[Remy Sharp: A debugging thought process](https://remysharp.com/2016/04/04/a-debugging-thought-process) (Jamison)[NashDev Podcast](http://nashdevcast.com/) (Aimee)[JS developers who don’t know what closure is are fine.](https://uselessdevblog.wordpress.com/2016/04/11/js-developers-who-dont-know-what-closure-is-are-fine/) (Aimee)[Sublime Text](https://www.sublimetext.com/) (Chuck)[DesktopServer](https://serverpress.com/get-desktopserver/) (Chuck)[MemberPress](https://www.memberpress.com/) (Chuck)[Frontend Masters](https://frontendmasters.com/) (Mike)[Wicked Good Ember Conf](https://wickedgoodember.com/) (Mike) Debugging Node.js with [Visual Studio Code](https://code.visualstudio.com/) (Mike)



### Transcript

 **CHUCK:&nbsp;** Alright. Let's do this.

**_[This episode is sponsored by Frontend Masters. They have a terrific lineup of live courses you can attend either online or in person. They also have a terrific backlog of courses you can watch including JavaScript the Good Parts, Build Web Applications with Node.js, AngularJS In-Depth, and Advanced JavaScript. You can go check them out at FrontEndMasters.com.]_**

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the JavaScript Jabber link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job and know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/JavaScriptJabber.]_**

**_[Let's face it. Bookkeeping is hard and it's not really what you're good at anyway. Bench.co is the online bookkeeping service that pairs you with a team of dedicated bookkeepers who use simple, elegant software to do your bookkeeping for you. Check it out and get your free trial today at Bench.co/JavaScriptJabber for 20% off today. They focus on what matters most and that's why they're there. Once again that's Bench.co/JavaScriptJabber.]_**

**_[This episode is sponsored by Rangle.io is putting on a free webinar that introduces Angular 2 components. It will be April 25th from 12 to 1pm Eastern Time. To sign up, go to JavaScriptJabber.com/Rangle. That’s ‘JavaScriptJabber.com slash R-A-N-G-L-E’.]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 211 of the JavaScript Jabber Show. This week on our panel we have Aimee Knight.

**AIMEE:&nbsp;** Hello.

**CHUCK:&nbsp;** Jamison Dance.

**JAMISON:&nbsp;** Hello, friends.

**CHUCK:&nbsp;** Dave Smith.

**DAVE:&nbsp;** Hello.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv and this week we have a special guest, Mike North.

**MIKE:&nbsp;** How's it going, guys?

**CHUCK:&nbsp;** Now Mike, you were introduced to me by Marc Grabanski, Frontend Masters. And he said lots of nice things about you and then said that you were an awesome Ember dude. And so, we thought we would get you on the show since we haven't really talked about Ember for a while.

**DAVE:&nbsp;** Yeah, it's been a good while. It's good to get back to it.

**MIKE:&nbsp;** Yeah, your last one was with Erik Bryn about two years ago. And a lot's changed since then.

**DAVE:&nbsp;** Whoa.

**CHUCK:&nbsp;** Oh, just rub it in, why don't you?

[Laughter]

**DAVE:&nbsp;** Sorry, Ember.

**MIKE:&nbsp;** [Laughs]

**DAVE:&nbsp;** It's not you.

**CHUCK:&nbsp;** It was non-deliberate neglect. Anyway, we are repenting of our fiendish, devilish, React-ish, Angular-ish ways.

**JAMISON:&nbsp;** [Laughs] Yeah, [inaudible] framework…

**DAVE:&nbsp;** Actually, we were all distracted by Backbone.

**JAMISON:&nbsp;** that's coming out any second now.

**CHUCK:&nbsp;** Yeah. But anyway, you want to introduce yourself real quick and then we'll start talking about some of the exciting stuff that went on at EmberConf?

**MIKE:&nbsp;** Sure. So, I'm the CTO at Levanto Financial. It's a startup based out of San Francisco. And more importantly I am a pretty involved contributor to Ember, Ember Data, Ember CLI, a bunch of add-ons in the ecosystem, and I do a lot of training, workshops, speaking about Ember and about opinionated frameworks and how you can ship soon and not worry about reinventing the wheel as much as you can.

**JAMISON:&nbsp;** That means you know Stanley Stuart probably right? If you're on the Ember Data team?

**MIKE:&nbsp;** I'm not on the Ember Data team, just to be clear. I'm not on the core team or anything but I do… I'm sort of a trainer dude that goes around and conducts a bunch of workshops at the conferences. Stef Penner and I just did a big training at EmberConf on state management and I'm good with the educational side of things but don't have time to get involved at the core team level.

**JAMISON:&nbsp;** Well, Stanley is awesome. If you do [inaudible] him.

**MIKE:&nbsp;** He's great.

**JAMISON:&nbsp;** Oh, you do [inaudible].

**MIKE:&nbsp;** No, [I do know him]. He's [fantastic].

**JAMISON:&nbsp;** Yeah.

**MIKE:&nbsp;** But he's even more hands-on than I am, for sure. [Chuckles]

**CHUCK:&nbsp;** I get people asking this all the time. Most of the noise out there is about React and Angular that I'm hearing these days. And I'm like, “Yeah, but Ember does some cool stuff. And some of the other frameworks out there, Cycle.js looks really cool.” And I'm like, “You definitely should look at them.” So, what's the big direction that we're seeing with Ember as compared to React or Angular?

**MIKE:&nbsp;** Right. So, the way I like to think about it is there's a certain portion of the apps that we build that is common. The idea of syncing data with DOM, pretty much everyone agrees that there's no value in us each as developers of products tackling that problem individually. It's not a unique problem we have. It's a common problem. And React believes that we can all build around React and we can just deal with manipulating our data and it will take care of updating the DOM for us. Angular to a greater extent says “Alright, especially with Angular 2, we've got routing. We've got controllers. We've got all of the stuff that is the framework that they're common pieces of boilerplate that we can build on top of and define our product from there up.” Ember is probably the most opinionated framework at least for building browser-based apps out there. And if we wanted to put numbers on this it might be, React feels like we're 50%… 50% of our apps are the same. Angular might be like 80% of our apps are the same. And Angular might be 80% of the apps are the same and Ember might be 95%. Just saying…

**DAVE:&nbsp;** And when you say the same, do you mean 95% of an Ember app is going to look like all other Ember apps or do you mean 95% of Ember apps look really similar to each other?

**MIKE:&nbsp;** I'm saying there are bigger assumptions, greater assumptions about what is boilerplate versus what you have to implement by yourself as a developer. So, I was just listening to one of your older podcasts about Aurelia where the idea is to…

**DAVE:&nbsp;** Mmhmm.

**MIKE:&nbsp;** Rob was talking about decoupling the framework from your app code and being insulated from framework updates. The idea here is the framework is your ally and it should do as much as possible within reason. And that's the whole convention over configuration thing where things should just work out of the box and you should have to write very little code and have the framework do almost all of the work. And Ember does this when it comes to routing or the component layer or even talking to your API when we're thinking about Ember Data. The idea is things should just work if you align with conventions and there are hooks to deviate from those conventions if you need to.

**DAVE:&nbsp;** That makes sense.

**MIKE:&nbsp;** Sorry, I just heard a phone ringing. I'm not sure if that was…

**CHUCK:&nbsp;** Yeah, that was me trying to get Aimee back in.

**MIKE:&nbsp;** Oh, I see.

**AIMEE:&nbsp;** I… yeah, I have no idea what's going on. Can you guys hear me now?

**CHUCK:&nbsp;** Yeah.

**DAVE:&nbsp;** Yes.

**MIKE:&nbsp;** [Laughs]

**AIMEE:&nbsp;** Okay. I don't know. It got disconnected and it kept telling me to join and I don't… even though I could hear you guys. Anyway.

**DAVE:&nbsp;** It's Microsoft's fault.

**CHUCK:&nbsp;** [Laughs]

**MIKE:&nbsp;** [Laughs]

**AIMEE:&nbsp;** Carry on. I'll be quiet.

**DAVE:&nbsp;** So, can you give an example of that you mean Mike by convention over configuration?

**MIKE:&nbsp;** Right. So, in a lot of apps you have a route or a page that will show a list of records versus a route that will show a detailed view for one record. So, you have a master detail view. That kind of thing just works out of the box with Ember even to the extent of when you obey a particular naming convention, it will retrieve the record that matches that naming convention. And that is your starting point. Your ground floor is much higher up in terms of even fetching the data and connecting a template with a controller and all of that is done for you whereas in the React world, which is probably the best thing to contrast with it, it's a lot more DIY.

**DAVE:&nbsp;** Mmhmm

**MIKE:&nbsp;** And we see that while it's a very powerful piece of technology there is some fragmentation that the React community is having to deal with a little bit. The Ember world, all of our apps are 99% aligned to the point where you can take a developer from one team or one company, move them to another Ember app, and they're productive within an hour or two, because they know exactly how things are structured.

**DAVE:&nbsp;** And that attribute that you're describing where you could, the structure is consistent across teams building Ember apps, that seems to be orthogonal to the concept of convention over configuration and more like Ember has got a broader reach when it comes to the opinions that it has. React, what you talked about is like, “Well, we only have opinions about your view. We don't have opinions about your control logic or your data or anything.” But Ember has opinions about all of it. It's like a general…

**MIKE:&nbsp;** Of everything, yes. Yep. Ember has opinions about build tools to the extent that we all use Babel. We're all using Esperanto for particular things until Babel was our module transpiler. So, we're all using the same stuff. And that gives us a very high degree of interoperability where, especially with the add-on ecosystem you can install something like Cordova or Electron with one line.

**DAVE:&nbsp;** Mmhmm.

**MIKE:&nbsp;** And because we know all of the apps use the same tooling, even talk to APIs in similar ways, we can get people started a lot more quickly than we could if we had to worry about a lot of fragmentation and differentiation between apps.

**DAVE:&nbsp;** So, does this explain why every Ember developer I've ever met has the same color socks?

**CHUCK:&nbsp;** [Laughs]

**JAMISON:&nbsp;** [Laughs]

**MIKE:&nbsp;** No, that's a separate thing but I'm not allowed to talk about it.

**CHUCK:&nbsp;** That's configuration, not convention.

**DAVE:&nbsp;** [Chuckles]

**MIKE:** Yeah, the first rule of sock club is I'm not supposed to talk about sock club.

**DAVE:&nbsp;** [Laughs]

**JAMISON:&nbsp;** That really destroys their socks subscription service business model.

**MIKE:&nbsp;** Yeah, yeah.

[Laughter]

**JAMISON:&nbsp;** I'm not sure how they get more customers if that's their market strategy. So, you already mentioned it a little bit. Do you want to talk about some of the changes that have been happening in Ember recently? Because Ember is pretty old, right? It's like five years old or something, which is…

**MIKE:&nbsp;** Sure, yeah.

**JAMISON:&nbsp;** A dinosaur in JavaScript frontend framework years.

**MIKE:&nbsp;** Yeah. It's been able to stay relevant for a remarkably long time especially in an area of engineering that seems to totally reinvent itself every two years.

**JAMISON:&nbsp;** Yeah, I said dinosaur. I didn't mean dinosaur as in like, “Oh, it's old.” It's more like it's…

**MIKE:&nbsp;** Oh, no, no. It's been around for a while.

**JAMISON:&nbsp;** It's [inaudible].

**MIKE:&nbsp;** Yeah, it does. So, the pedigree starts with iCloud and MobileMe which Apple built on a framework called SproutCore. And a lot of the developers that were involved beyond… like into the days where it was called Ember and after it was called SproutCore. So, the first commit into Ember was SproutCore 2's source code being brought over into the open source world. So, a lot of developers went along with it and made that transition. So, it started at Apple and it's what they used for building this very rich office suite plus web mail plus calendar. It was almost like Apple's flavor of Google Docs. And it actually still exists today, iCloud.com, if you wanted to check that out.

But it's very rich in [Apple aiming] to make this such a… almost an experience that transcends what people expect of the web. A lot of animations, no browser default stylings. It's very iOS-looking. And because it was so complex and it involved all of this functionality they needed to basically build a framework underneath it. And at some point it was spun off into a separate main organization that was working on SproutCore. And as they started building SproutCore 2 they decided they were going to brand it a little bit and take a fork and turn it into Ember. And that's what we're working with today. So, the roots go all the way back there.

Now, what's been happening over time is we've first aimed for productivity and that's the number one priority in the Ember world, that people are able to get up and running. They're able to share code. That the same abstractions you use for building a small application, they survive all the way up to a very complex application. And when I was working at Yahoo, which that was the last job that I had where we had over a dozen Ember apps and I had a few hundred Ember developers working in the ads and data division, at least people that were using part-time or full-time but we were able to start small and teach those same best practices as the apps got to be over a hundred thousand lines of JavaScript code, which is pretty impressive. Whenever I've worked with a JavaScript framework or even with server-side frameworks there's a point where you're in small app mode and then have to transition into big app mode and there are different rules for dealing with things and for handling that level of complexity.

So, recently the big thing has been, alright, we have the productivity. We have these amazing build tools. Ember CLI has been a huge win over the past year and it's great to see even the Angular CLI which is going to be the build tool for the Angular 2 world, that shares a lot of the same stuff that Ember CLI uses. I think they actually still bring Ember CLI in as a dependency. That's a great thing for all of us to rally around. But now we can start focusing on things that people complain about when they were using the old Ember. And one of them is performance. We had a big performance problem and we started to lose people to the React side when there was a need to have huge numbers of components on the screen updating continuously. We were not strong in that area. And with the release of Glimmer in the last year and the upcoming Glimmer 2, we're hitting back in a big way there. We've got a demo…

**DAVE:&nbsp;** [Inaudible] I haven't heard of, Glimmer. Can you tell us what that is?

**MIKE:&nbsp;** Sure. So, the idea with Ember is you're writing Handlebars templates. Those are compiled at build time. They're turned into imperative instructions for building some DOM. And then your user downloads them and the HTML is rendered on the screen. Glimmer is the layer that not only compiles those templates but handles updates whenever data changes. It's the React piece of the framework, if you want to think of it that way. And the cool thing is we can swap this out. We can make improvements in this black box that are, this is opaque to the developer. We can make massive improvements here and it should be a drop-in replacement as people upgrade their version of the framework. They'll just bring in the new version of Ember and now we'll see a massive performance boost just by improving this thing under the hood, Glimmer.

**DAVE:&nbsp;** And there is a Glimmer 2 now being worked on, right?

**MIKE:&nbsp;** Yes. Glimmer 2 is supposed to be released with Ember 2.7. And it's basically a total rewrite. The cool thing here is that we're shrinking template size by 80% and the speed at which we're able to render stuff on the screen and re-render it for huge numbers of components, it looks like it's… it not only competes with what can be done with React but surpasses it. And this is not to say that it's [one-ups-manship] here. But we were able to learn from the lessons of React and take other things into consideration as this was built out. So, it's some really exciting stuff. We're starting to see things get rendered so fast that we're hitting an artificial limit within browsers where it just will not render faster than 60 frames per second because it's pointless to do that.

**DAVE:&nbsp;** Mmhmm. Yeah, I saw that in Tom and Yehuda's keynote at EmberConf and they were like, “Oh, it just goes to 60 and that's it.”

**MIKE:&nbsp;** Yep, yep. It's like buying a BMW and it can only go 150 miles an hour because what's the point going above that?

[Chuckles]

**CHUCK:&nbsp;** Well, if you had Jedi reflexes.

**MIKE:&nbsp;** Yeah, yeah.

**DAVE:&nbsp;** [Exactly].

**MIKE:** &nbsp; Then you take off the limiter. [Laughs]

**AIMEE:&nbsp;** A friend of mine recommended we talk to you about, is it Ember FastBoot? Because if I understand correctly, before you could not do server-side rendering with Ember. But is this enabling that now?

**MIKE:&nbsp;** So, it's a separate project. I'm happy to talk about FastBoot. There are a couple of parallel efforts here. One is Glimmer 2 and another is FastBoot. And that is LinkedIn and Bustle have been putting a lot of sponsorship resources towards this through paying for core team members to work on it full-time. This is another example of being not the first to the party with a feature like server-side rendered HTML from a single-page app framework. But I think it's been done in a really thorough and really well-executed way.

And the idea here is you just install an add-on and there's a Node.js layer with an abstraction of the DOM that is not like JSDOM which is a full implementation but a very lightweight version of the DOM that allows us to quickly render and cache things. And then serve it up from a little Express server. And this is addressing one of the big concerns with using a single-page app at all and that's the first page render. What is your initial user experience as someone starts to use your product? How quickly does that first page load? Server-side rendering really helps with that. Now, the state of things now is that the server-side will spit out rendered HTML and then the client side will [clobber] that and start the show over on its own. And this is all transparent to the user. From their point of view, everything appears to load very, very quickly. Where we're hoping things will go is that we'll be able to do something called a re-hydration which is where the client side will just connect to what the server-side has rendered and pick up from there instead of boiling the ocean and re-rendering everything again.

**DAVE:&nbsp;** Sounds super cool.

**MIKE:&nbsp;** Yeah. And by the way, quick plug here. I've been writing a series of articles on setting up a single-page app and API system with Elixir, Phoenix, and Ember FastBoot. I've been releasing about an article every week and by the time this podcast is released it should be a good resource for people to start from scratch and get a FastBoot app with material design and server and client-side validation and all of that good stuff. Step by step, start from scratch.

**DAVE:&nbsp;** That is like an ultra-modern stack that you just described.

**MIKE:&nbsp;** Yes. Very real-time-y in that everything is synced up with ultra-ultra-low latency. And the idea is to take two opinionated frameworks and align their conventions so that you can be super, super productive across the whole stack.

**JAMISON:&nbsp;** So, I know EmberConf you already mentioned a little bit is about a month ago I think. Do you want to talk a little bit about some of the things that came out of that? You already mentioned one or two of the things that came out of the keynote. But I think there are some other things that might be interesting to talk about.

**MIKE:&nbsp;** Yes. Yeah. So, one interesting thing is we got to see, and again I love React. I'm not trying to pick on React and I'm sorry if it comes off as seeming that way.

**JAMISON:&nbsp;** Not at all.

**MIKE:&nbsp;** But React Conf preceded EmberConf by a short couple of weeks I think. And even the people who advocate most strongly for React were, some of them at least, were kind of surprised at the focus on React Native. And so, during the keynote we saw a side-by-side comparison of two experiences during Tom and Yehuda's talk. And…

**CHUCK:&nbsp;** Ember Native?

**MIKE:&nbsp;** [Chuckles] No.

**DAVE:&nbsp;** No.

**MIKE:&nbsp;** The point is there is no Ember Native.

**DAVE:&nbsp;** [Laughs]

**MIKE:&nbsp;** The point is that all of these interstitial interruptions, that's what interstitial means, where you ask your user to download a native app, those are just really, really bad in almost every way. And now even Google as they're crawling through content they're penalizing people that are putting these prompts to download the native app in place instead of having a decent mobile web experience. So, Ember's positioning itself as the SDK for the web. They, I believe, used the exact term “There will be no Ember Native.”

**DAVE:&nbsp;** [Laughs]

**MIKE:&nbsp;** We're just going for the web. We're targeting the browser. We're focusing on that. Ember is the SDK for the web. That's the new tag-line. And the idea here is especially for clicking that first link, if you send a Yelp link to your friend and they don't have the app installed, it's honestly a really terrible experience when you click on it. And you can either choose between the mobile web experience that they had one guy invest three or four months on and then stop. It's very, very basic. Or you have to download 108 megabytes of Swift code over your LTE connection. You sort of really have two bad choices there. And what we're learning is both of those are bad. What you see is a huge drop-off in engagement and you don't really see a major bump in terms of app installs.

So, what we're focusing on is just making really performant in-browser applications that approach the level of richness people expect when they use a native app. And that's going to be through lowering the size of your deployed app through using server-side rendering to get that first page on the screen quickly through using things like app cache which I know is apparently a douchebag.

[Chuckles]

**MIKE:&nbsp;** But it's still broadly supported so app cache is still for some things a reasonable thing to use. Service workers are huge and very promising in terms of letting us build things more richly and with more offline support. So, all of these things pave the way for the web moving from being like a document viewer or the browser being a document viewer to being an application platform. This is just a shim until we get there.

**DAVE:&nbsp;** So, I thought it was pretty funny how Tom and Yehuda said, “You know, it's funny how we get crap when we ship a 300 kilobyte web app to a mobile device…”

**MIKE:&nbsp;** Yes.

**DAVE:&nbsp;** “But then we turn around and say, instead install this 30 megabyte native app.” That was hilarious.

**MIKE:&nbsp;** Yes. No problem.

**DAVE:&nbsp;** [Laughs]

**MIKE:&nbsp;** Download, like use half of your data limit to update this app. Honestly there are companies that are on the one hand saying this, “Let's slim down the JavaScript payload as much as possible,” which is great and then the mobile team is saying exactly that basically through saying download this mobile app, they don't care about data. And the point is not to rip on native apps but to really say the mobile web has its place and especially with Google penalizing content that just tries to shove people into a native experience. We got to start paying attention to it and it's not going away. [Laughs]

**JAMISON:&nbsp;** So, it sounds like in some ways by emphasizing the web experience do you think there's an implicit assumption that by avoiding splitting their focus into the native and the web versions of the framework that they'll be able to make more progress? Is that a message behind it that you're [getting with] it?

**MIKE:&nbsp;** I think maybe it's not about the split in focus in terms of being able to keep efforts channeled in one direction. But we can keep our priorities in line. So for example, if React and React Native have to keep some sort of alignment, that may limit them in some way. And it's nice to know that Ember is dedicated for the web and if you're building for the web it is pointing in this singular direction. And that's the path forward. And particularly when we look at the commitment to make upgrading easy and keeping pace with the framework easy, I think the message that we're getting is have confidence and bank on making this choice and it will be a continued ally for you as the web evolves.

**CHUCK:&nbsp;** One other thing that I just want to point out is that in a lot of cases when I'm looking for something on the web, I open up Chrome or Safari on my iPhone and I do a search. And I'm going to wind up on a web page. And if you degrade my experience simply by having this big thing flash up that says you're not going to be able to use this because it's not mobile-friendly so go get the app, you do lose people. And that's not to say…

**MIKE:&nbsp;** You do.

**CHUCK:&nbsp;** That's not to say that you can't split your focus in a company. But also I really like the idea behind Ember being focused on, “Look, we're just going to do web. We're going to nail web. We're going to make it the best experience for web so that when people build web applications, then they can… those applications are going to have good user experience and overall the people who are then using the framework are going to have that benefit.” And I don't know that you necessarily need a native experience for Ember or not. And if people really want it, then Ember is open source and they'll go build it.

**MIKE:&nbsp;** Yep.

**CHUCK:&nbsp;** But I really like the focus on the Ember core team for this. The flip side is that I really am kind of excited about the idea of using something like NativeScript in Angular or React Native to go build my native apps. But that being said, I could go learn Swift and I don't see that that's really that much worse than having to figure out how to use my framework in a different environment.

**MIKE:&nbsp;** Yeah, I totally agree there. And if Google is seeing a 70% drop-off in engagement, that's 70% of people encountering that prompt to download the native app and just shutting their browser off. If they're seeing that, what hope does a new startup with no big brand trust behind them have? It's a huge, huge problem that people don't tend to understand how severe this drop-off is, I guess is what I'm trying to say. And the point is not that we should avoid writing native apps but that the idea of hybrid apps is coming back. The idea of having a performant experience in the browser is very real and very alive. And most people don't need the native functionality that people would typically reach for something like Swift or Android or Cordova for. If you're building Facebook for example and it's just sending messages and viewing content and uploading a video and uploading a picture most of that functionality can be done pretty well on the mobile web.

**DAVE:&nbsp;** And to be fair, I've stopped using the native Facebook app months ago. I've just been using their native web. And it's great.

**MIKE:&nbsp;** There you go.

**CHUCK:&nbsp;** So, I do want to push this button a little bit more though with mobile apps or with mobile experience, I should say. What is Ember doing to make that easier? You did mention that they're working on payloads and they're making Glimmer faster. Is that all there is to it? Because it seems like making something mobile-friendly is a little bit more involved than just that.

**DAVE:&nbsp;** Mmhmm. And that actually dovetails…

**MIKE:&nbsp;** It's quite a bit more involved.

**DAVE:&nbsp;** Into the question that I wanted to ask also which is, you mentioned server-side rendering and you talked about FastBoot. But then you also mentioned service worker. Can you explain how service worker plays into that?

**MIKE:&nbsp;** So, let me answer the first question first here. So, regarding mobile there is a lot more to it than just reducing the payload. And one thing to remember is that even in just the last four years if we just look at something like a geek bench, CPU benchmark, mobile devices are 10 times faster. The ones you would buy today are 10 times faster than the ones you would buy four years ago. Things like service worker allow us to do things in the background. They let us… and this is not an official direction that Ember is going in right now because mobile Safari does not support service worker yet. We hope it will one day. We can't build on things that absolutely require service worker if we're attempting to target that browser. But the idea is browsers are better. The JavaScript runtime is better than it was several years ago when people… when we had the [inaudible] touch and the jQuery Mobile experiences that just, let's just say exclusively disappointed their users.

**JAMISON:&nbsp;** [Laughs]

**MIKE:&nbsp;** And I'm talking about like tap the drop-down, wait three seconds, and finally see which toppings you could add to your pizza, like that kind of experience. We're not in those ages anymore. And we also understand much better how JavaScript performance works under the hood. So, I know that people like Stefan Penner on the Ember core team has been working closely with the V8 team in terms of making sure that we can lead developers down the path where more of their code will remain optimized and where it will be performant and where we can ensure that we set them up to go down the path of success with whatever degree we can using conventions and opinions in the Ember ecosystem.

**CHUCK:&nbsp;** So, we're talking about mobile optimization. Does this affect hybrid apps?

**MIKE:&nbsp;** So, in terms of hybrid apps versus running in the mobile browser it's basically the same for us. But we do have to teach people and to set them up for being successful when dealing with things like intermittent connectivity and avoiding CSS re-flows. We saw a great at EmberConf by Alex Blom who has been working on the Cordova support within Ember, teaching us what's expensive on a mobile device. What can you do to steer clear of this lag that people expect form a hybrid app?

And a great example he pointed out which I didn't know was when the keyboard slides up, that actually change the dimensions of your viewport. It's like shrinking the size of your window rather than sliding up on top. And that causes a re-flow and that can end up right at that moment where the user's about to interact, causing a little bit of a skip. And being aware of these things and providing little performant pieces that people can just plug into their app and use, that's one great thing we can use to our advantage in the Ember world, because we can just build the right keyboard plugin that steers clear of this problem and then everyone rallies around that.

**CHUCK:&nbsp;** I have the same question but for Electron.

**MIKE:&nbsp;** Awesome. So, Electron is much less of a hot point here because we've been building for desktop class browsers for ages here. There's a much…

**CHUCK:&nbsp;** Oh, right. It's Chromium instead of…

**MIKE:&nbsp;** It's Chromium.

**CHUCK:** Safari of whatever.

**MIKE:&nbsp;** Electron works beautifully and I don't know how to pronounce his last name, but I think it's Felix Rieseberg. I hope I didn't butcher that. An open source dude from Microsoft, great talk on Electron. He's an Electron contributor and he demonstrated how you can tap into native functionality. But again, we've been using things like Spotify and Slack and Atom, all of which are hybrid apps under the hood. And a lot of people for example use Spotify and have no idea about this. So, that's a little bit less difficult of a problem because desktop browsers are pretty performant and we know how they work and we can work in them pretty easily.

**CHUCK:&nbsp;** I think we talked our way around okay, what is Ember and what are the innovations here and what's interesting that's going on in the Ember world. But what I'm really curious about is EmberConf isn't for people like me where I kind of dabble, I kind of get into Angular 2 for a while and then I kind of get into native development with Swift for a while and then I get into Elixir for a while and then I get into something else for a while. It's for those people who are out there day in and day out writing Ember code. So, what did the Ember people who showed up to the conference really get excited about? Some of this stuff, I'm sure, but what were the one or two things where they heard about it and they were like, “Oh, wow. They really do hear us and know what our problems are”?

**MIKE:&nbsp;** So, I think it was great to see the open source mentality applied to the community. Empowering other people to contribute. That's a huge deal in the Ember community. And we saw a new, like a mini-core team built around Ember CLI, Ember Data, which is our data persistence library, and Ember Learning. And they're changed with dealing with the documentation and tutorials and making sure that…

**JAMISON:&nbsp;** Yeah, can you talk a little bit more about the Ember Learning team? That was really interesting to me as an outside observer.

**MIKE:&nbsp;** Yeah. So, in our… in the Ember ecosystem, they consider even a lack of documentation or confusing documentation to be on par in terms of severity with a framework bug, and that is because productivity requires that you be able to understand what you're working with. And a great effort was taken by people like Trek who was a core team member, he's now like an alumni I guess, in rehashing the documentation and making it really easy for people to go through this learning curve and understand how to build with a UI framework oriented for single-page apps. And this is a big deal for people. Especially if you're coming from the world of Backbone and jQuery widgets which at least a couple of years ago that was the baseline UI developer knowledge.

We got away with a lot of sloppy stuff for many, many years where we got to click a link and boil the ocean and never worried about unregistering a listener that we registered because everything was a hard reset every minute or so. In the single-page app world of course things are different. And I think that Ember has a little bit of a reputation of being difficult to learn. My experience having taught dozens and dozens of people is that it's more about unlearning those bad habits and about coming up to par with what people who develop in the backend or for native apps, they've had to deal with the whole time. Manage your memory, be aware of performance, that kind of thing. So, Learning and documentation is charged with helping to make sure everything is easy, everything is consistent, and people can find good information and be successful as easily as possible.

**JAMISON:&nbsp;** That's really cool.

**CHUCK:&nbsp;** Now, I believe that Mark said that you recorded a course for Frontend Masters?

**MIKE:&nbsp;** I did. Oh, I'll totally plug that for Mark. So, I think that he was getting a lot of calls, a lot of demand, for an Ember course. And I had just developed a big chunk of material and I'd been teaching people at Yahoo for months and months. We adopted Ember as our standard tech stack there about two years ago for many, many, many apps. So, Mark reached out to me and we spent two days going through god, just about everything falling short of customizing Ember CLI and that kind of thing which I hope I'll get the chance to do with him later this year. But you can go on FrontendMasters.com, sign up, check it out. It's about a nine hours long course with nice little delineated chapters so you can digest it at your own pace. But it at least when I gave it last December was totally up-to-date so everything you learn should be absolutely applicable to using the latest version of the framework today.

**CHUCK:&nbsp;** I guess my question is, what would you add to it based on what you saw at EmberConf?

**MIKE:&nbsp;** Right. So, there are a couple of things that I wouldn't have been able to do because they were still works in progress. One of them is FastBoot, the server-side rendering stuff. There are a couple of things you have to be aware of when dealing with server-side rendering and one being you can't use things like local storage. And so, the typical approach to authentication we would have people put a JWT in local storage. You can't do that anymore because the server has no knowledge of that. So, I would steer people more towards a server-side rendering friendly path. But other than that the goal is you should be able to do what you've been doing and use the plugins you've been using with no interruption. And FastBoot should just be something you turn on. And the framework and the plugins should just handle the rest and insulate all of that complexity for you.

**DAVE:&nbsp;** Of course, that all assumes you have JavaScript on the backend, right?

**MIKE:&nbsp;** So, the idea is you have an API. You already have an API. In the case of this little learning trail I've been building, I'm using Elixir and Phoenix. And then you'll have basically an asset serving layer that will be Express on top of Node of course. And that will serve up your index.html and potentially you can have it serve up your assets as well, like your CSS and your JavaScript. People typically want to pull those in from a CDN but this is really like a mini-server just for server-side rendering that your users are hitting. It's not your real backend.

**DAVE:&nbsp;** Makes sense.

**CHUCK:&nbsp;** Yeah. Yeah, we've had similar conversations with the Angular Universal team and this sounds like the approach is very similar as well. So, cool stuff.

**MIKE:&nbsp;** Yeah. It's really promising. We're seeing new stuff come out every day from Ember FastBoot. And there's sort of a core, not an official core team but a team of developers that's meeting with Tom Dale who's the point person there. And they're iterating remarkably quickly. I expect that in the next two months or so, we will see a 1.0 release. And at that point it should just be pluggable with all of the add-ons you've been using. You'll just be able to set up server-side rendering and it should work with the majority of apps out there.

**CHUCK:&nbsp;** One other question that I have, and this is something that comes out of the conferences, is that… so I'm going to ng-conf next week. I've been at several other conferences this year. And one of the biggest things for me at the conferences besides leveling up I guess on my technical knowledge or any other practices is the community. Can you give us a thumbnail sketch of what the Ember community is all about? What's it like being at EmberConf with other developers who are doing the same thing you are? I find that there are different nuances to different programming communities, like Ruby or JavaScript the communities are different. Angular's community is different. I went to Build Conference this year and there were a lot of exciting things there, but the Microsoft developers look at the world differently. So, what is it? What's that lens for Ember developers? Who are you going to see there? How does the community react to new people? To veterans? Are there heroes? How does that all fall out?

**MIKE:&nbsp;** Good question. I think the Ember community is one of the great strengths behind Ember. And you see people being very welcoming to newcomers. I know that we have a couple of the heroes in the community I guess, the people who have been around for years and have add-ons with hundreds and hundreds of stars. They to pair programming with new people to try to make sure everybody can get up and running easily. I think we all take great pride in making it as easy as possible to get started and we recognize that the bigger the community we have, the more will be able to take advantage of each other's work. This high degree of interoperability means that if I can help teach five or six dozen Ember developers, some of them are going to write some really great code that I can take advantage of in my app. And so, we have a vested interest not just as friendly people but a vested interest from a business and from a productivity standpoint to grow the community and to help people become successful and to make sure that everything is within reach.

One of the big differences between Ember and Angular and React is that there is no big company in charge of Ember. It came from Apple originally as SproutCore but now no one company has control over the direction things will go. And I think that it's great to see the open source mentality and this mentality of empowering people to help each other not only take place in terms of giving people the ability to contribute code but contribute teaching or contribute translations to the documentation. A lot of people are getting involved and it's great to see even people who had been using Ember six months start to open issues in the framework and to open even basic pull requests into fixing little nuanced bugs in Ember. It's great to see that we're encouraging that kind of level of openness.

**AIMEE:&nbsp;** I just thought it was absolutely incredible. I had two friends, one closer friend, who spoke at EmberConf, Bridget Warner, and then another girl from where I am in Baltimore. And I was just amazed when I went to look up them at the speaker list, how many newer developers there were and how many, I guess because once you do start including newer developers you fall into more female developers. And it kind of made me jealous of the community. I just thought that was absolutely amazing.

**MIKE:&nbsp;** There's a huge amount of support for female developers in particular. And although there are many people to thank, Leah Silber who is Yehuda Katz's wife is a huge advocate for making sure that we have great female speakers and that we have mentorship and we have at the conference an environment where everyone can feel comfortable. She's been a huge champion for making sure that we can cultivate these great female engineers. One of my favorites, Lauren Tan who walks at Dockyard gave a great talk. Another Dockyard female engineer Estelle who built some of the foundational stuff for building desktop apps with Ember gave another talk. And it's great to see these people emerge as leaders. I think we do have more than our share of very visible female engineers in the Ember community.

**AIMEE:&nbsp;** I just think that's absolutely awesome. And it probably does go back to a little bit what we talked about at the beginning, the convention over configuration definitely helps to funnel people into that community too. But it is just awesome.

**MIKE:&nbsp;** I think it may have started there, but it certainly doesn't hurt to have people start emerging as visible leaders and having these people who've already gotten there and made it.

**AIMEE:&nbsp;** Yes.

**MIKE:&nbsp;** And helping lift other people up.

**AIMEE:&nbsp;** Definitely.

**MIKE:&nbsp;** It's just fantastic to see that.

**CHUCK:&nbsp;** Alright. Well, I know people have a time crunch so I'm going to push us into picks. Before I do that though, I just want to quickly mention what a great time it was seeing everybody at ng-conf, since this will come out after ng-conf.

**DAVE:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** I also want to mention that I'm going to be in Chicago on July 9<sup>th</sup>. I'm going to be there for Podcast Movement which is the 6<sup>th</sup> through the 8<sup>th</sup>. So, if you want to hang out, join the mailing list is really the best way to do that. I'm going to be putting up a page for that. I just haven't gotten around to it yet. This should come out shortly before or sometime in May or June. I'm not sure when. But yeah, check that out. So anyway, let's go and do picks. Dave, what are your picks?

**DAVE:&nbsp;** Oh, I knew you'd come to me first. I actually, I don't have any picks. [Laughs] Sorry. Hey how about that ng-conf? That was great last week, huh?

[Laughter]

**CHUCK:&nbsp;** Alright Jamison, what are your picks?

**JAMISON:&nbsp;** I have several. My first pick is React Rally tickets. I'm the co-organizer of it. It's a React conference in Salt Lake City in August and they're on sale right now so go to ReactRally.com to check those out. We would love to see you there. That's the end of my self-serving tooting my own horn picks.

**CHUCK:&nbsp;** Woohoo!

**DAVE:&nbsp;** Toot-toot.

**JAMISON:&nbsp;** Yeah, that's the sound.

**MIKE:&nbsp;** Well tooted.

**JAMISON:&nbsp;** My other pick is a podcast called Embedded. It's an NPR podcast where they take a news story where you probably heard a little blurb about if you follow the news but maybe didn't get that much detail on and they just stick a reporter on it for a while. And you get this in-depth look into something that you maybe only heard about in passing. They had a couple of really good episodes, one of them was about there is that biker shoot-out that happened in Texas several months ago. And they look at how could that even be a thing that happens and what were their motivations and what actually happened? And it's fascinating.

And then I think my last pick is a blog post called 'A debugging thought process'. A few weeks, maybe a month ago, this woman named Una who runs a tech podcast, I think it's called Toolsday about developer tools, she had some really weird performance issue in Chrome that was a little bit baffling. She just tweeted like, “Hey, does anyone want to look at this?” and this guy named Remy who's an experienced engineer who has a lot of experience with performance issues, he looked at it and he wrote up his process for debugging it. And I think that's more interesting than the specific problem of what actually was wrong. Just a really detailed how to approach performance problems write-up. So, those are my picks.

**CHUCK:&nbsp;** Alright. Aimee, what are your picks?

**AIMEE:&nbsp;** Okay. I have two. The first one is also a new podcast. It's called the NashDev cast. So, I love Nashville and the Nodevember conference and that's where I went to my bootcamp and family is close by. So, I just love the community there, the JavaScript community especially is amazing. So, I would recommend listening to that. I listened to part of the first episode this morning and it actually was like really, really good. So, not just that they're friends but I actually really, really liked what they were talking about.

The next pick I'm going to say the title of this, and just hear me out before you start jumping to conclusions because I have an explanation for the title, but it is a blog that somebody emailed me who wrote it. And we just talked back and forth a bunch about it and if you read the post I feel like there are good points in there. So, you might just need to get over the title quickly. But it's called 'JS developers who don't know what closure is are fine'. And so, I will say that I don't necessarily think that that's fine [chuckles] for more than a short amount of time.

**DAVE:&nbsp;** [Laughs]

**AIMEE:&nbsp;** But if you read…

**DAVE:&nbsp;** Fine for five minutes.

[Laughter]

**AIMEE:&nbsp;** If you read the article…

**DAVE:&nbsp;** And then we'd start judging you.

**AIMEE:&nbsp;** [Chuckles] If you read the article I think the main point is just that, especially because I just really have a heart for people getting started in the industry and I was one of those a very short while ago, you have to start somewhere. And the sooner I feel that companies can leverage these people that are really, really hungry and eager to learn the better. And so, this article also talks about something that I've spoken on a little bit. Just that it's partially, the company that does hire the juniors there are some big bonuses there. But you are going to also have to put in a little bit of time mentoring. And that is part of your responsibility as well. So, this article goes back and forth on those things. So, I think it was worth the read. So, I wanted to pick that. And that's it for me.

**CHUCK:&nbsp;** Alright. I've got a few picks here. So lately, nobody shoot me, I've been doing some WordPress development. I know, everybody just gag, right? Now, the reason is that I went to MicroConf and I got convinced that I should move all of the podcasts back to WordPress. And anyway, it's been an interesting ride. And I'm not going to go into all the details there but there have been a few things here that I'm finding that are really helpful. So, I'm just going to shout those out. I know there are some WordPress people who do WordPress development. And it's really a great platform and it does a lot of what I need.

Anyway, what it basically boiled down to was I fiddled around with it for four to six hours during free time around the conference. And I was able to get done in WordPress what took me about a year, a year and a half to do in Rails, just because it already has a lot of the stuff that I need. So, I decided well, if the maintenance on it is that much more efficient, now this is just my particular use case, then I should go ahead and make it happen. So anyway, so I've been basically, tailored a theme, I built my own plugin that pulls in data types for shows and forums and stuff, and plugged in a few plugins. And it has been awesome.

So, the tool that I'm using to do the development, I've been using Sublime Text actually to write the PHP. And that's actually been pretty nice. I didn't want to try and figure out how to make Emacs play nicely with it and it just didn't out of the box with my setup. And I'm sure it's just some custom thing that I have in there. But anyway, so that was nice.

DesktopServer is what I'm using to host it on my Mac and it sets up a custom domain name. So for me, it's DevChat.dev and then it does a bunch of other stuff. And then I've been using MemberPress to set up some of the other stuff. I plan on moving the conferences over too, and using MemberPress for that. So, overall it's been really great. I'm super excited about it. I should have it launched next week as we speak. Which means that by the time this goes out it will already be a few months or a few weeks before you actually see it. So anyway, it's just kind of been interesting.

Mike, what are your picks?

**MIKE:&nbsp;** Right. So, first because Mark recommended me, I got to plug FrontendMasters.com. It's a great place to find video tutorials for React and Angular and how to write RxJS. You can learn this from Jafar who's a champion for it at Netflix. It's an awesome place to find the authoritative course on various frontend topics.

Also plugging Wicked Good Ember which is a conference in Boston that focuses on Ember but also on UI, JavaScript best practices in general. What's exciting about this is Dockyard has recently hired Chris McCord who wrote Phoenix which is like the Rails for Elixir. So, it seems like we might see something like a Meteor-like thing coming with Ember meets Phoenix and things just plug into each other. So, that should be pretty exciting for a really performant full-stack solution there.

And then finally just something that I've been using as a developer recently is debugging Node.js with Visual Studio Code. If you have not tried this, you've got to try it. Npm debug via the command line is something that I've just gritted my teeth with for way too long. And man, for some reason I missed the boat on Visual Studio Code having awesome tooling around this. I'm addicted to it. I'm never going back. It's fantastic. So, definitely check that out.

**CHUCK:&nbsp;** Alright. Well, thank you Mike. If people want to follow up, follow what you're doing, what are the best places to do that?

**MIKE:&nbsp;** Yeah. On Twitter I'm @michaellnorth and on GitHub I'm @mike-north. And that's basically it. [Chuckles]

**CHUCK:&nbsp;** Alright. Well, we'll go ahead and wrap this one up. Thank you again for coming, Mike.

**MIKE:&nbsp;** Alright. Thanks for having me.

**CHUCK:&nbsp;** We'll go ahead and…

**MIKE:&nbsp;** Yeah, it was great to talk to you.

**CHUCK:&nbsp;** Yeah. We'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wish you could be part of the discussion on JavaScript Jabber? Do you have a burning question for one of our guests? Now you can join the action at our membership forum. You can sign up at JavaScriptJabber.com/Jabber and there you can join discussions with the regular panelists and our guests.]_**

**_[End of podcast]_**


