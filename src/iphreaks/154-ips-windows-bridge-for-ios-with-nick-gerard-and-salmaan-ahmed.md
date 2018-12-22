---
layout: layouts/post.njk
title: >
      154 iPS Windows Bridge for iOS with Nick Gerard and Salmaan Ahmed
date: 2016-05-26 07:00:52
episode_number: 154
duration: 39:32
audio_url: https://media.devchat.tv/iphreaks/iPS154BUILDWindowsBridgeforiOS.mp3?rss=true 
podcast: iphreaks
tags: 
  - iphreaks
  - podcast
---

This episode was recorded live from The [Microsoft Build Conference](https://build.microsoft.com/) 2016. In this episode we chatted with [Nick Gerard](https://www.linkedin.com/in/nickgerard) and [Salmaan Ahmed](https://www.linkedin.com/in/ahmedsalmaan) of the [Windows Bridge Project](https://developer.microsoft.com/en-us/windows/bridges/ios) aka [Project Islandwood](https://blogs.windows.com/buildingapps/tag/project-islandwood/). &nbsp;Picks
- [Tesla Model 3](https://www.teslamotors.com/model3) (Nick and Salmaan)


### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**ANDREW:** Hey everybody and welcome to iPhreaks. We’re recording this from the Microsoft Build Conference in San Francisco. We have Jaim Zuber.

**JAIM:** Hello.

**ANDREW:** I’m Andrew Madsen. We’re going to be talking to two people from the Windows Bridge for iOS project. One of you, introduce yourselves.

**NICK:** Hey guys. My name is Nick Gerard. I’m a program manager on the iOS Bridge project at Microsoft.

**SALMAAN:** I’m also one on that. I’m also a program manager on the Windows Bridge for iOS project.

**ANDREW:** Cool. So the Windows Bridge for iOS project is also called Project Islandwood?

**NICK:** Project Islandwood.

**ANDREW:** Nick, Why don’t you tell our listeners a little bit about what Project Islandwood is?

**NICK:** Sure. So the idea is, if you’re an iOS developer and you’ve got iOS apps that you’ve written in Objective-C and you spent years learning the ins and outs of Apple’s frameworks like UIKit, Core Foundation, and Core Graphics, the idea is that you can re-use large parts of that code base and also, all of your Objective-C developing skills on Windows. So what we’ve done is we built Native support for Object-C directly into Visual Studio. We have an Objective-C compiler runtime on Windows that builds Native UWP apps out of Objective-C code. We’ve implemented large parts of the iOS API Service Area on Windows so that you can tap into those same frameworks. At the same time, you can also tap into Windows APIs and do things like use live tiles and Cortana all from Objective-C using programming language you already know.&nbsp;

**ANDREW:** Cool. So I’ve— where an iOS development podcast— I’ve been doing Objective-C since 2005, something like that, on the Mac first and then iOS.

A lot of our listeners are in the same boat. They’ve been doing Objective-C for years. It’s, for me, it’s certainly the language I feel most comfortable writing. If you told me 5 years ago that Microsoft was going to support Objective-C development for Windows, I would have thought you were absolutely crazy.

So this is a really cool thing to me. It’s something that just the nerd— just the Objective-C nerd in me is happy about it. But also, I think it’s really cool that I— that there’s actually a viable way for me to go target Windows without having to learn C# or whatever.

**NICK:** Yeah. It’s very in line with this idea of meeting developers where they are. Let’s not force them to learn a new language, learn— force them to learn new tools. Let’s say, “Okay. What do you have? Let’s make it work. Let’s put that to work for you building new WP apps.”&nbsp;

**ANDREW:** SALMAAN, I don’t want to cut you out. I don’t know what is better for either of you to talk about so if there’s something that you feel more like talking about, just jump in.&nbsp;

**SALMAAN:** No, absolutely. Just to add a little bit to the point Nick was making, the&nbsp; great thing about some of the underline Windows architectures is it is basically language-agnostic. It really doesn’t care. So we can do all fancy things like use strings and when in the Objective-C world, you can treat them as normal Objective-C in that strings but underneath, the underline representations where you call Windows RT APIs, they just magically become H strings. So you’re really not compromising. It’s not a tradeoff. I’m choosing either to do Objective-C iOS stuff or I’m doing Windows stuff. They really are the same thing.

**JAIM:** Cool. So I’m curious about the history of the project. How did this get started? Who’s the first person in meeting for Microsoft say, “You know what we want to do? We want to do Objective-C in Windows.” How did that get started?

**SALMAAN:** It’s a little simpler than that in a sense. So I don’t want to spend to too much time here but actually we were part of a startup in Canada who was building Objective-C support for different platforms. In fact, Windows was one of them and we were lucky enough to join Microsoft back in August 2014.

**ANDREW:** Okay, and I think Microsoft made the announcement. So I think, I had heard that story but I didn’t know anything about the project until Microsoft had already acquired it and announced it. That was— was it last year at Build that they—?

**SALMAAN:** So last year at Build, we announced the project. We announced the fact that the project had used to— have been used to bring Candy Crush Saga to Windows. But as I’ve said, we originally came on board August.

**ANDREW:** Okay [crosstalk].

**SALMAAN:** Of 2014. In that time, we spent a bunch of time actually doing the work to bring Candy Crush to Windows which came December of that year and also just building out our Windows support.

**ANDREW:** One thing that’s cool about Project Islandwood is that it’s all open source; so maybe now with announcements yesterday and just with Microsoft for the past two years, maybe that’s not such a surprising thing anymore but still it’s a cool thing so talk about that.

**NICK:** Yes. So we open sourced in August of last year. We have been actually really excited with the update that we’ve gotten from the developer community. We have a lot of really engaged developers around the project.

I talked about this in the session yesterday; Microsoft is making out a real emphasis on open source right now. It’s obviously brought the important to the company. But it really is absolutely critical for us. It’s really— because we have to make those iOS APIs available to you on Windows and because there are so many of them, there are always going to be missing features when you bring your code base over. There are going to be missing classes or there are going to be missing methods or properties.

The idea is to get the bulk of it up and running. Then, sort out the details and have you extend it to the Windows platform from there. So because there are always going to be those missing things, it’s really critical for us to be open source so that if we haven’t done something, you can build it yourself and contribute it back to the community then, the whole project grows because of that.

**ANDREW:** So a little— getting into a little bit of my history here, in 2010, I was working on an iOS and a Mac app that used mostly shared code at work and I was— a project that I got for myself because I wanted to do it but then my boss came to me and say, “Hey can you do a Windows version of that app?” I was, “Well, I’ve [inaudible] Objective-C,” and I found the Cocotron which is an open source project for Objective-C on Windows, in fact. It was the same experience. I actually got the app ported to Windows but there were parts of the Cocotron that were just not implemented. You had to go in and implement on yourself. It was a fun experience but it was also like well, the Cocotron’s like one guy and I’m like the second guy that’s ever even [inaudible] — not really but there was nobody using it. I think you actually have used some Cocotrons source in [inaudible] Objective-C.

**SALMAAN:** [Inaudible]. Yes. Yes. Great [crosstalk].

**ANDREW:** But it’s nice now that we’ve got a company with the resources of Microsoft and a bigger community around this idea.

**NICK:** We also have other partners. Intel has been contributing. They contributed the accelerate framework. They contributed Core Motion— really, really great stuff; so new stuff coming in from all kinds of different avenues.

**ANDREW:** It’s really cool. I’m excited about this.

Talk a little bit about— so say, I’m an iOS developer. I want to bring my app to Windows. How do I get started? What’s required to use this?

**NICK:** So there are few different ways you can go about it. One of the things that we’ve actually done is, you’re an iOS developer; you’ve got a Mac; you might not even have a Windows machine so what we’ve done is on our website— you can either check us out on GitHub or on developer.microsoft.com— we have built evaluation virtual machines that you can download in any flavor of virtualization environment for parallels, for VM where they’re pre-built with Windows 10, Visual Studio and the Bridge. So you can actually download them, open it up and run Visual Studio and Xcode side by side on one machine and have a shared code base between them and compile it on one side for Windows and compile it on the other side for iOS. So you can actually do Cross-Platform development on one machine using Objective-C.

**ANDREW:** I didn’t know that at all. That’s a little lower friction. I am, like you just said, I don’t know Windows machine— I haven’t done one for a long time. I’m probably not going to go buy one just to play around because it’s something I’m not sure about. But I do have parallel.

**NICK:** Right [crosstalk]. Yes. So obviously if you’re doing curve testing, if you’re doing fancy stuff with audio and [inaudible] and video, you’re going to want an actual Windows box but to just quickly get up and running, see what the feasibility is of bringing your app over; see how it works with the Bridge, how far it gets you, it’s a really easy way to get started.

We also have a whole bunch of samples and tutorials and documentation up on our GitHub. You know simple— we did a blog post a month or two ago, bringing a simple, to do list app over. We shared all the code and walked you through the process.

We have a tool that takes an Xcode projects and generates a Visual Studio solution for you. It brings over all your classes and all of your folder structure. But it also actually brings over your storyboards andn your zips. So we have a tool called zip to nip that takes that XML and it generates Windows compatible nips with it so that all of that would be preserved when you bring it to Visual Studios.

**ANDREW:** So you’re even able to use your interface builder stuff on Windows?

**NICK:** Yeah. That’s right. Yes [crosstalk].

**ANDREW:** It’s pretty cool.

**JAIM:** So what are the challenges with that? Going from interface builder to the nip of what’s the Windows? I don’t remember it anymore. I used to [inaudible] but what’s the challenge?

**SALMAAN:** Well, it’s very related to the base challenge of supporting essentially iOS on Windows. UIKit is huge. There are huge numbers of controls. There are huge numbers of ways you can lay things out.

Windows is just fundamentally different in some ways. You have keyboard and mouse input which is less frequent on— you have a bit of keyboard with the new iPads but mouse is not really a thing. That workflow right now isn’t super great because if you do want to make tweak to your zips, to your storyboards, you are doing a bit of a round trip so we are working on ways to make that process better.

**ANDREW:** Okay.

**SALMAAN:** But it’s not completely seamless right now, but absolutely if you know what you’re doing and you see the value in the Windows platform, it works today.

**ANDREW:** Okay. So say, I do have a Windows box and I [inaudible] maybe download a Windows development or whatever but if you just go download Visual Studio, you develop the Windows Bridge for iOS stuff that’s just built into Visual Studios?

**SALMAAN:** Yeah. So what you have to download is Visual Studio 2015 Update 2 which we released like three days ago. Then, you actually go to our GitHub repo, download the project from there then you essentially install the Windows Bridge for iOS on top of Visual Studio. So it’s not actually big into VS.

**ANDREW:** Okay.

**NICK:** Okay.

**JAIM:** Can you do this with the free edition of [inaudible]?

**SALMAAN:** Absolutely, yes [crosstalk]. Visual studio community edition? Works great.

**ANDREW:** I don’t know if my conception here is wrong if I’ve got this conceptually wrong, but I think of what you’re doing as actually two parts. You’ve got what I would cal UIKit for Windows. I know that you have other frameworks besides UIKit but it’s sort of Cocoa for Windows. But you’ve also got Objective-C is now a language for Windows development.

**NICK:** Exactly. So the really cool thing about this is it’s a [inaudible] SDK so you can use as much or as little of either side as you want to. You have access to iOS frameworks like UIKit and all the other Cocoa frameworks but you also have access to Windows runtime APIs, UWP APIs. So you can do things like use Xamarin controls from Objective-C. You can use Xamarin controls inside UIKit controls, inside Xamarin controls. They’re all in the same view hierarchy. They’re all rendered by the same compositor. They’re all treated the same way by the system.

**JAIM:** Can you just step back a little bit [crosstalk] and explain what Xamarin is because [crosstalk]. Let’s do [inaudible]. We know UIKit; we got that down.

**NICK:** So Xamarin is your UIKit. It is your Windows UIKit. So instead of a UI button, we’ve got a zip.

**JAIM:** Okay.

**NICK:** And you can put those right side by side and they all look and feel at home on Windows.

**ANDREW:** So you’re bringing your iOS app over— it’s an iOS app, it’s not a Windows app. It’s probably not perfectly suited for iOS just out of the box and you want to make changes to take advantage of Windows features to use Windows UI, you can do that?

**NICK:** You can do that. Yeah.

**ANDREW:** Cool.

**NICK:** And to be clear, it’s not just UI. It’s the full complemented UWP API. So you can pop those notifications from Objective-C. You can write alongside all of your other iOS code. You can tap into Native Windows features.

**ANDREW:** I saw your session on a couple of days ago, talking about this. You mentioned that you can use Cortana.

**NICK:** Right.

**ANDREW:** You could use Cortana in your Objective-C app so it’s some cool stuff. I wonder not being a C# developer, not being a Windows developer, I probably don’t quite know how to ask the right question but how do you deal with the— we just finished talking to Miguel about Xamarin and where they’re reflecting Objective-C APIs in the C#. You’re going the other way, right? You’re reflecting these Windows APIs into Objective-C. How does that look? How do you deal with the mapping between APIs that are not full as C?

**NICK:** As far as how we work with Xamarin or as oppose to how we do the projections?

**ANDREW:** No. So I’m writing my Windows app in Objective-C, how do you— do you pull APIs in so they feel like Objective-C APIs?

**NICK:** So Objective-C is a strict super set of C. So you could [inaudible] and we had a joke side in our session yesterday. You could in theory tap in all of those UWP APIs just using C. You can go pop those notifications and it’s like 25 lines of code.

So what we’ve done is projected all that into Native Objective-C method calls. So that 25 lines of C code becomes three or four lines of Objective-C. That’s totally— the syntax is familiar to the way that you’re used to working. You can just look through the Microsoft documentation for all of the UWP APIs. They’re all the same in Objective-C.

**ANDREW:** Oh cool. So in other words, the answer to my question is, yes. You are making the APIs like Objective-C APIs. That sound crazy thing [crosstalk].

**SALMAAN:** Yeah. This goes back to what we’re talking about a little bit before. How Windows underline— platform is really language-agnostic. You can project Windows into virtually any language you want. You can make those Windows APIs feel natural and feel correct for those languages. So if you’re consuming it using visual C++, it feels like the C++ API. It’s the same thing with our Objective-C projections.

**JAIM:** Cool. So what are the challenges going from Objective-C, which is very dynamic&nbsp; runtime with [inaudible] – all sorts of these things and going to .NETs which doesn’t have that as much or it’s not as [inaudible] challenges with that. How does that work?

**SALMAAN:** We are using a rather modern, rather up to date 2.0 – Objective-C 2.0 compatible runtime. So all the Objective-C features are thinking up so categories or things that are actually are supported in the Objective-C world. So if you do have an Objective-C projection of a class, yes, you could add a category. You can tap methods onto that thing and the Objective-C runtime kind of figures all of that out.&nbsp;

**JAIM:** Okay.

**NICK:** The runtime we use by the way is [inaudible] which is an open source project that’s been around for a long— it’s got a really long history on GitHub. It’s a very robust Objective-C.ts.

**NICK:** It’s not something you wrote. I imagine you’re contributing back if needed or you— as Microsoft doing this open source stuff, you’re contributing stuff back [crosstalk].

**SALMAAN:** Yeah, we are. One of our engineers who actually brought it up has worked closely with the lead author of that. They have a great relationship. They go back and forth all the time so absolutely.

**ANDREW:** You talked about in your session a little bit about how you’ve done the work to make it so that— for— I think the slide you showed and I probably remember the details slightly wrong but you’ve got the UIKit event loop that’s processing events with an NSRunLoop. Then Windows has a similar construct with its own [inaudible] and you’ve made— they’ve done something to make those work.

**NICK:** So UIKit wants to be in control. XAML also wants to be in control. What we’ve done is basically link them together. We’ve put XAML at the head of it; XAML gets events first but since they’re both event based, whenever one of them drains their event queue, it yields to the other one. Whenever that one drains its event queue, it yields back to XAML. So whether your touch events or whatever else; whether they’re coming in from the UIKit side or the XAML side, they are all rounded to the correct place.

**SALMAAN:** And the reason that’s actually super important is especially when we’re talking about UI, you want both UI worlds living in the same thread so that everything is in sync— all your animations, all your transitions. You wouldn’t want all your XAML effects happening first. Then, 200 milliseconds later, all your core animations stuff happens. All of that has to be in lock step and sync. This was just a really great solution that some of our guys came with.

**ANDREW:** You also showed a UI where you can have UIKit stuff in a view hierarchy with XAML so it’s inside of XAML objects and that XAML Object’s inside of the UIKit Object so you can just mix and match them.

**SALMAAN:** Yes.

**ANDREW:** It’s not like a Window that shows you UIKit stuff and then they’re not.

**NICK:** Yes [crosstalk]. So this is very much – we’re not taking an iOS app and skimming it and there’s no emulation going on here. There’s no middle layer that’s doing anything. It’s really a Native experience. Because of that, you have one compositor that’s rending— rendering all of the UI whether that’s coming from XAML or UIKit. You have your one run loop and events get to the right place no matter where they came in from.

**ANDREW:** From an implementation point of view, you making UIKit work on Windows and you’ve mentioned that there are pieces of functionality that aren’t there and it’s parts of UIKit. That seems a huge task and I’m sure you’re not able to call back on me and be like, “Hey can you send me the source code for UITableView?” So how are you dealing with that?

**SALMAAN:** Well, fortunately, this is true of essentially any API sets. It’s essentially in providing documentation to tell people how to credibly and productively use an API. You’ve basically provided enough information and context for someone to actually implement that. That’s essentially the approach we take. We look at publicly available sources and— yeah— once you’ve used table view enough, you get a feel for the ins and outs of it. So you just— you write it up in terms of XAML, in terms of, “Can Windows see things?” But you can preserve the behavior, you can preserve the layout. You can even preserve some of the subtle things of it.

**NICK:** That’s also the pros of being open source because we get issues files in the Androids like, “Hey you guys support UITableView.” But I’ve gone and I found this edge case where you’re functionality that’s different from our source of truth on the iOS side. So we go back and we make that change. We get it to reflect what it should be on the iOS side.

**SALMAAN:** And if those guys are really awesome, they’ll say [crosstalk] there’s a bug, here’s a pull request and you’ll love that and it’s great.

**ANDREW:** So you— that’s— I guess, that’s another thing that makes your job easier— is that you could take a piece of code that works exactly how you want on iOS with UITableView. Then you run it in— you run it as a Project Island project, “Oh it doesn’t do exactly what it’s supposed to do well.” Okay. Now, you can dig in and actually fix it.

**NICK:** We are in some ways an open source implementation of iOS.

**ANDREW:** Sure.

**NICK:** On Windows.

**ANDREW:** Yeah and I’ve hinted this earlier but I think when you very first launched on GitHub, I immediately went in and started devouring your source code just because I was interested in it. It seems you were pulling stuff from— not everything that you’re doing is stuff that you guys wrote. It’s stuff that’s been out there as open source. So you really are embracing open source as an idea.

**NICK:** Yeah. Again, iOS is really big so the idea’s to open up as may avenues as possible to bring in different parts of it. So we have OpenGL that we’ve brought in and put on Windows so that if you have particle effects, if you have OpenGL based animations that will continue to work on Windows.

So we have that stuff coming in from developers; we have that stuff coming in from other open source projects. As I said, corporate partners like Intel are contributing frameworks. The idea is just to be as open as possible.

**ANDREW:** I know you’re expecting this question because we’ve been talking all about Objective-C. Of course the big elephant in the room is Swift. Is there anything you can say about that?

**NICK:** Yeah. So we actually announced that in our session, we will support Swift. Clearly, it’s the future of iOS; there’s no doubt about that. So, it’s obviously mission critical for us. The thing about it is it’s still a pretty new language. Most of the apps that you use— top 100 apps in the store— most of the code that’s out there is still Objective-C. Most iOS developers are still Objective-C developers who are starting to dabble in Swift and figure out what’s going on. The language itself, is really still developing, too. Apple hasn’t guaranteed any kinds of backward compatibility yet. They’ve said that with Swift 3.0 coming later this year, that’s going to be the base line going forward. No guarantee API resiliency and language stability after that. So that’s really what we’re looking at. Once we get to that point, then it becomes a much more feasible thing for us to bring over to Windows.

**ANDREW:** Well, I imagined also the fact that Swift is now an open source project. Makes life much easier for you.

**NICK:** So Apple just open sourced it in December so we’re coming through that and turning the gears and working to get that over but we will support it on Windows. Right now, we are Objective-C only.

**SALMAAN:** So last one worth making is a lot of the work we’re doing, if you ignore the Core Foundation work, is 100% applicable regardless of what our underline language is. UIKit is UIkit, Cordata is Cordata, Core Animation is Core Animation and so on. So a lot of the work we’re doing will still be relevant when we add support for Swift.

**NICK:** There’s no wasted work here.

**SALMAAN:** Exactly.&nbsp;

**NICK:** And obviously, when we do support Swift, we will want to continue to support Objective-C. It’s going to be— it’s not going to be either or. It’s going to be both.

**ANDREW:** That’s really good news. When you announced last year, Swift was already out and my first question was, well, I’m a hardcore Objective-C lover. I would love Objective-C even if it’s dead and buried because it’s so much a part of my programming experience. But I’ve been doing Swift for the last 6 months and I wanted to do keep doing it so that’s really [crosstalk].

**SALMAAN:** It’s absolutely a cool language. It is very much growing on me. I’m like you; I’m a big Objective-C guy but the more I use it I’m like [crosstalk]. Yeah, it’s a cool language. Absolutely.

**JAIM:** What apps are using this? You mentioned you helped support Candy Crush to Windows?

**SALMAAN:** We did, yes.

**ANDREW:** What other apps are out there?

**SALMAAN:** A few others. I’m actually not sure what we are and aren’t allowed to say on that front but certainly Algorithm. You saw the DJ application during the session yesterday?

**ANDREW:** [Inaudible] I had to leave the session early.

**NICK:** You got to see their video. It’s really, really cool [crosstalk].

**ANDREW:** People who listened to the podcast know that I work— I write DJ software also. Not for Algorithim but for a competitor. But just the fact that somebody’s doing DJ softwares makes me happy.

**SALMAAN:** So our session or Nick’s session is online. So if folks, just Google Channel 9 Microsoft then look for Windows Bridge, you’ll be able to see it. Yeah, the last 12-15 minutes or so, we had our Algorithm friends and partners on stage. We asked them beforehand, “Just be completely honest. Speak about what worked, what didn’t work, what you hacked, what you had to hack around, etc.” There were great. They talked through the process and they did announce that their application would be coming to Windows in June of this year.

**NICK:** Right. So they are launching on the Windows store later this year. It’s really— I highly recommend you go watch it because it’s really a good primer on what’s possible with the Bridge today. They totally open up about what their process was. They talked about how they first got up and running. They got stuff compiling. How they found missing stuff. How they had if depth around certain things and [crosstalk].

**SALMAAN:** How they work with us over GitHub.

**NICK:** How they work with us over GitHub and contributed code back. They really went into detail on their process. Also, what their practices were for sharing code because they are an OS X, iOS and Windows app now all using shared Objective-C code base.

So they talk about how they use different code design patterns to separate certain stuff out for different platforms. Also the cool thing about their app is it really kicks the tires. It really makes use of everything that iOS has to offer, really heavy use of Core Audio and Core Graphics and OpenGL [crosstalk]. It just— it’s a very performant app; it obviously needs to be. You’ve got DJs on stage. There can’t be a delay when you [inaudible] that sample. So it’s really— it speaks to the power of what’s possible here because we’re putting that natively on Windows.

**ANDREW:** I’m happy to hear that. I work on— like I said I work on DJ software. Same thing is what you’ve just describe and I’ve often thought, when I see a solution that’s— any kind of tool around iOS, I always worry that it’s designed for an iOS app that is a table view and a navigation controller which is admittedly 90% of non-game apps or something like that. But it’s not what I do. The stuff I work on has Core Audio and Core Animation and hardcore graphics stuff going on. It’s not— it’s really exercising the system so that’s really cool. I wish I hadn’t had to leave early but now, I have a reason to go watch the video and finish it.

**JAIM:** So if you have an app— you’ve got an iPhone app, you want to bring it to Windows. This is the like a Desktop app or is it run on the surface? Are these different types of apps? What do you had to learn in the Microsoft world to get your app out there if someone is not coming from – background is Microsoft development?

**SALMAAN:** Yes at the super low-level, the Bridge does support both on 32 and x86. So you can target— at that level, you can target your phones, you can target your surfaces, your tablets, your desktops, laptops, etc. at the higher levels.

**NICK:** Right. So this— I just want to speak to that for that for a second because this is— that’s really cool. If you would have written an iPhone app with one form factor in mind, all of a sudden all of these different form factors are open to you because that— that’s the promise of UWP. You write an app, it will run on phones, it will run on desktops, it will run on Surface Books and tablets, etc. and that— all of that applies to you because these are UWP apps. So all of the sudden you have 270 million Windows 10 users added to your potential user base but you also have new classes of devices that you can build for and that you can target.

**ANDREW:** How do you deal with the average iOS app especially if it’s an iPhone app, not an iPod app or a universal app? It’s meant to run on a screen of it’s this big and now you’re using it on a desktop. How would a developer go about making that experience good?

**NICK:** We have great auto layout support.

[Chuckles]

**ANDREW:** Okay.

**SALMAAN:** For and other— you can go back and you can add custom storyboards. You can create custom zips for your Windows experience. So if you wanted to run it on a 55-inch Surface Hub, you could absolutely go back and in principle, lay things out appropriately such as it looks good for that experience.

**NICK:** It’s not going to be a zoomed in iPhone app. That’s [crosstalk].

**SALMAAN:** We do support that [crosstalk].

**NICK:** Yes we could [crosstalk].

**SALMAAN:** If you want we can just blow it up and make it look huge but the goal is to really not be a turnkey, one-click solution because that actually doesn’t create a good Windows application. You just end up with an iPhone app running on a 55 inch Surface Hub. That’s not great. So to help you reduce that time to market or that time to store, help you reuse as much of your code and your skills as possible.

**JAIM:** What type of concepts should an iPhone developer know about Windows like different kind of controls that you might want to drop in?

**SALMAAN:** Yeah. Start with thinking about what form factors and devices you want to go to. It all essentially stems from there. So we have internal samples but we’ve taken iOS apps and actually got them running on, say, Xboxes. Again, you have a very different set of input constraints because we have a game controller and a screen that’s much further away than with iPhone.

So really start about— start thinking about where you want to get your application. Then, for the point we made at the session yesterday, get it building, get it working and then— developers are smart people. You know what the interaction is from there. You know your code so just work with it, modify it and build the experience that you’re really happy with for the form factor.

**JAIM:** Okay.

**NICK:** It would be great if there were a magic button that could take an iPhone app and turn it into something that could run on an Xbox and do all the translation between those different interaction models for you. But that’s what you do as a developer. You think about how are people actually using this? How they actually use this particular device. So the idea is really to get you quickly up and running with the code you have. Then allow you to use the skills you have to target that platform.

**ANDREW:** I remember what I was going to say which is that I think— the funny thing is I do a lot of Mac development as a Mac developer – Mac developers specially in the last few weeks are for a long time have been saying, “Bring UIKit to the Mac. We like UIKit better than AppKit.”

Turns out now, if you have a UIKit app and you want to make it into a desktop app, you probably— it’s probably easier now to make it at Windows.

[Crosstalk]

**NICK:** Somewhat ironic.

**SALMAAN:** I know. AppKit is weird. I’m not a huge fan of AppKit.

**ANDREW:** Yeah. Well, it is what it is. I’m an AppKit. I was an AppKit developer before UIKit was public so I like AppKit. It’s a funny world we live in. I have a lot of questions but I don’t know if they’re any good. Go Jaim.

So we joked about, Jaim asked the relevant questions. [Chuckles] I just ask the nerdy questions. I don’t do anything.

**SALMAAN:** Yeah.

**NICK:** Yeah. We are open source so there’s very little we can hide. It’s all out there.

**JAIM:** So for example – so you’re [inaudible] your iPhone game to the Xbox, one difference would be the keyboard input taken up a string of some sort.

**SALMAAN:** Sure.

**JAIM:** In Xbox you got different controls so that wouldn’t transfer directly.

**SALMAAN:** Absolutely. That’s correct, yes.

**JAIM:** Okay. So you— what patterns do you use to keep your code same versus a bunch of if-def everywhere if you get different work flows from what you’re trying to get.

**SALMAAN:** Yeah. There’s basically two or three big ones. One is you can have a platform specific source files. So you can have certain .m, .mm files that are only included in your Visual Studio project and not built along with your iOS, iPhone, iPad application.

But honestly, good old if-def is the right thing in a lot of situations especially where you just want to swap out individual controls based on context. So instead of having a UI date picker, you want like a Windows UI XAML date picker in place. Honestly, the easiest way to do that if you built your UI programmatically, good old if-def and just block it out. So again, it really depends— we see a lot of source code; we rely a lot of different Mac applications developers and it runs the gamut. You have the super clean, super well-architected, proper encapsulation of things to just this hodge-podges of people just keep hacking at things until they work. So it’s – strict guidance is really, really hard to give other than— yeah, you can have platform specific source files; you can have if-defs; you can do runtime checks so that you can check for selectors or you can check the existence of classes and determine things that way.&nbsp; But ultimately, it’s really your code, it’s your project. You know it best. The promise we make is, we’ll make that whole process easier so I can return key, so I can be magic. We’re going to make it easier. [Crosstalk]

**NICK:** Then Algorithm also talked about some of their best practices for having do that in a session. So again, if you want to check out the session, they ran through their process once for doing precisely that.

**JAIM:** What are some of the road blocks people are going to encountered that they may not be expecting?

**SALMAAN:** I think a lot of the road blocks are going to come from this idea that it is going to be a turnkey solution and that every conceivable UI controller, every conceivable API is going to work. Unfortunately, the project is still pretty early stage and as Nick talked about in the session yesterday, iOS is huge. It’s absolutely massive.

**ANDREW:** Huge and growing.

**SALMAAN:** Huge and growing, absolutely.

**ANDREW:** Huge and growing all the time, yeah.

**SALMAAN:** But if you approach the project with this mindset that, “I’m going to reuse a bunch of my code then do incremental work to make the experience better and more Native for Windows,” then, it’s absolutely a useful proposition. If you want the magic button, unfortunately, I don’t think we will ever you get there.&nbsp;

**ANDREW:** Yeah. Well, I’ve never seen a magic button solution that really actually worked well.

**SALMAAN:** Exactly!

**NICK:** So see? That’s exactly the thing. You could do the magic button solution and you could take an iPhone app and run it through some middleware layer and bring it on Windows and say that it’s a Windows app.

That really sucks. That sucks for users. They’re using something that was designed for a different platform. It sucks for you as a developer because you wouldn’t get to take advantage of Windows stuff.

The idea is, let’s leverage what you have but you have to see the value in the Windows proposition in the first place. Let’s get you to build for windows devices like Surface Books.

**ANDREW:** Well, veering some of my nerdy questions now, so do you guys support Objective-C++?

**SALMAAN:** We do.

**ANDREW:** Does that work?

**SALMAAN:** We do.

**ANDREW:** Or also just pure C++ sources in—?

**SALMAAN:** Yes!

**ANDREW:** I don’t know why I wanted to know that other than the stuff I work on has [crosstalk].

**SALMAAN:** No! Our compiler front end is still Clang. Clang is perfectly happy to consume C, C++, Objective-C, Objective-C++; happy, yes.

**ANDREW:** So talk about that a little, too. How is it that you’re able to compile Objective-C and have it run on a Windows box?

**NICK:** So on the iOS side, you’ve got Clang as your compiler front and LLVM as your compiler backend. Visual studio uses C1— in Microsoft, we call C1 as our compiler front and C2 is the compiler backend.

So what we’ve done is take Clang. Clang is an open source project. We dove right into it, taking Clang and we’ve essentially bolted it on to C2 by taking that LLVM intermediary representation. Basically building a little bridge that converts that into something C2 can understand. Then what you get out of that is a truly Native UWP binary that’s indistinguishable from an app that you wrote in C# or anything else.

**ANDREW:** So it’s— there’s no— it’s not some sort of weird emulation layer around?

**NICK:** Exactly.

**ANDREW:** Cool. We talked this a little bit before but you’re implementing this UIKit APIs— behind the scenes, you’ve somehow got to get things on the screen. So are you implementing, say, you’ve got an implementation of UI-view— I could go read the source to figure out how you’re doing this but what does it take to actually have a&nbsp; drawRect in a UIView subclass get drawn to a Windows screen instead of a— you know.

**NICK:** So we used the XAML compositor and it doesn’t really care where any of that stuff is coming from. Whether it’s coming from Core Graphics, we’re using drawRect or whether it’s coming from XAML canals. So UI-views are backed by CALayers and CALayers do all the heavy lifting of rendering to screen and knowing how things actually get printed out. The same concept applies on Windows. If you have a XAML view, it’s backed by a XAML panel which is the direct analogue to a CALayer. So what we’ve done is taking ui-views and back them essentially by XAML panels. So it all gets treated the same by the compositor.

**ANDREW:** Interesting. It’s just blowing my mind to think about switching out this stuff that I’ve been familiar with for a long time and now it’s suddenly doing its magic on Windows.

**NICK:** Yeah, and you said you’re a Mac developer too. So one of the cool things about Algorithm is they had a Mac [inaudible] base. They were founded in 2006 before iOS was athing. Then iOS came along and they extended that code base and started building for iOS as well. They had already done— they already had if-defs to check for Mac OS or to check for iOS. They had already had a code structure set up where they were sharing code between two platforms. So it was— I don’t want to say easy, but it was easy for them to add in another platform and say, “Now let’s just check when we’re on Windows, too.” Most of the time, they’re agnostic about whether they’re checking for iOS or Windows. It’s the same because they’re using the same frameworks. But every once in a while, they have to separate something out and say, “If on the Windows side, do this and if on the iOS side do that.”

**ANDREW:** I’m trying to think if there’s anything else that we should really cover. Is there anything else you guys think we should talk about that we haven’t? I think we’re getting kind of close to.

**SALMAAN:** We’ve talked about the open source aspect. We’ve talked about— we plug the talk, which I think— I really do think you should watch.

**ANDREW:** So to bring that up again, I was thinking about that when we first started recording. The talk is not— you don’t have to have been at Build attendee so anybody can go find that.

**SALMAAN:** That’s absolutely correct.

**ANDREW:** Okay.

**SALMAAN:** It’s on the public internet.

**ANDREW:** We’ll put a link to that in our show notes.

**NICK:** We also had channel 9 Q&A with Twitter yesterday that you could go— we were taking questions in and answering them. That’s also up there so you can go check that out as well.

**ANDREW:** Okay. We’ll get links to those for the show notes so everybody can watch it because I want to watch. I definitely want to finish the session out.

Alright, well should we get to picks?

**JAIM:** Let’s do it.

**ANDREW:** Okay. For this Build shows, we’re not doing our own picks because we have to come up with a million of them for all these shows we’re doing. So we’re just going to ask you guys.

**NICK:** Top of mind?

**ANDREW:** Yeah.

**NICK:** First pick that comes to mind? Tesla Model 3.

**SALMAAN:** Oh, that’s going to be mine. [Laughs] I’ve context with everything else out of my brain and that’s it.

**ANDREW:** I have to tell you guys, you’re not the first. We had somebody on [crosstalk].

**NICK:** We’re not the first to pick it? Oh.

**ANDREW:** We had somebody on last night who picked it. So did you [crosstalk].

**NICK:** I know. We’re walking clichés.

**ANDREW:** Did you put your reservations in?

**JAIM:** You should call it plus one picks. [Laughs]

**NICK:** No, neither of us were online. We were at Build. [Laughs]

**SALMAAN:** Unfortunately, yes. I do have friends and in fact, family who are very close to getting there. They’re model [inaudible] so I’m super excited about actually driving in one of those but no, I’m not yet [inaudible] deposit yet.

**NICK:** [Inaudible] Much better friends with them.

**SALMAAN:** Exactly.

**ANDREW:** I have a friend who’s second in line at the dealership to get his reservation and yesterday morning.

**SALMAAN:** Oh, for the three [crosstalk]?

**NICK:** How many days in advance was he there?

**ANDREW:** He got there – I think he said he got there at 2 am the morning before but the guy who got there first had been there at since 8 am the previous day so 24 hours.

**SALMAAN:** Yes.

**ANDREW:** But it reminds me when I lined up for the original iPhone. That’s crazy.

**SALMAAN:** Yeah, someone took a video of the [crosstalk]

**NICK:** It’s the longest line I’ve ever seen.

**SALMAAN:** Yeah.

**NICK:** They’ve never even seen the thig.

**SALMAAN:** The queue’s even outside the – at the Bellevue Tesla Store. We’re just— it’s madness like hundreds of meters long. It’s insane!

**ANDREW:** I saw, well, I actually didn’t see it last night but this morning I saw the— now that they’ve actually shown it. It looks like a cool car.

**SALMAAN:** It does, sort of like shades like Aston Martin at certain lights. It’s a beautifully designed car.

**ANDREW:** And it’s $35,000 instead of— I don’t even know how much the model is.

**SALMAAN:** More.

**NICK:** You don’t want to know. [Laughs]

**ANDREW:** It’s more than I can afford. Alright guys, well I really appreciate you coming on. I’ve been so excited to talk to you ever since I found out I got to talk to you so I really appreciate it.

**NICK:** Yeah. It’s great to be here. Thank you so much for having us.

**SALMAAN:** Yeah. Thanks for having us.

**_[Hosting and bandwidth provided by the Blue Box Group. Check them out at BlueBox.net.]_**

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**


