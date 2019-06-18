---
layout: layouts/post.njk
title: >
  151 iPS Practical Cross-Platform Swift with JP Simard
date: 2016-05-05 07:00:00
episode_number: 151
duration: 40:31
audio_url: https://media.devchat.tv/iphreaks/iPS151Cross-PlatformSwift.mp3?rss=true
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:06 - JP Simard Introduction

- [Twitter](https://twitter.com/simjp)
- [GitHub](https://github.com/jpsim)
- [Blog](https://www.jpsim.com/)
- [Realm](https://realm.io/)

01:47 - Getting Started with Cross-Platform Development in Swift

02:57 - Challenges

06:41 - Foundation

09:36 - Writing a Swift App on Linux

- [AppCode](https://www.jetbrains.com/objc/)

12:02 - [Docker](https://www.docker.com/)

14:26 - The Virtual Machine and [Xcode](https://developer.apple.com/xcode/)

- [LLDB](https://lldb.llvm.org/)

18:24 - The Swift Build System

- [swift-llbuild](https://github.com/apple/swift-llbuild)

21:10 - [Buck](https://buckbuild.com/)

22:06 - Android

27:30 - Foundation (Cont’d)

30:10 - Cross-Platform Swift and RealmPicks

[The Phantom Radio](https://ghostrelationsdept.disney.com) (Andrew)[For Whom the Bell Tolls by Ernest Hemingway](https://www.amazon.com/Whom-Bell-Tolls-Ernest-Hemingway/dp/0684803356) (Jaim)[Flixel: The Case for Pricing Parity for Desktop and Mobile Apps](https://blog.flixel.com/cinemagraph-pro-for-ios-the-case-for-pricing-parity) (Alondo)[The Largest Ever Analysis by Film Dialogue by Gender: 2,000 Scripts, 25,000 Actors, 4 Million Lines](https://polygraph.cool/films/) (JP)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**ALONDO:** Welcome to episode 151 of iPhreaks. This week we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**ALONDO:** Jaim Zuber

**JAIM:** Hello from Minneapolis.

**ALONDO:** I’m Alondo Brewington, currently in La Paz, Bolivia and today’s guest we have is JP Simard to talk to us about cross-platform Swift Development. Welcome JP.

**JP:** Oh hi, calling in from San Francisco.

**ALONDO:** Would you like to tell us a little bit about yourself before we get started?

**JP:** Sure! I am a Cocoa engineer Realm. So it’s a company that makes mobile database; been around for two years. So I work on the Objective-C and Swift side of things. Of course, the company is a lot bigger than that. We have people working on brand new database engine; people working on the Android side; recently, React Native. So obviously, cross-platform Database is a big part of what we do. So with my interest in Swift, I’ve tried to marry both worlds and really try to dig in to a lot of that lately with Swift open sourcing just about four months ago. So it’s exciting times.

**ALONDO:** Absolutely! So tell us a little bit about how you gotten started with that cross-platform Development with Swift and with these recent changes and the open sourcing of Swift.

**JP:** What’s funny, yeah, is that when people think cross-platform Swift, they hear Linux and then Apple platforms – that’s two separate and unique things and really we’ve been doing cross-platform Swift Development for— well ever since Swift was announced really across all platforms that Apple Software runs on. So its story started as with everyone else who’s been writing Swift in – or was it 2014 when it was announced? So since then it started off with – right away. I think it was— was it three platforms? We had OS 10, iOS and watchOS even at that point which I think, if memory serves, was announced around that time or the first STKs are coming at around that time. So really the whole community has been doing cross-platform Swift phone. Then, there are settle differences across the platforms. There’s platform specific architecture, optimizations and weird bugs because of those optimizations as well. So it’s something that as a community, Swift was born into right away.

**ALONDO:** So with the latest developments with Realm moving into Linux, it sounds like there are some other unique challenges that even outside of developing for Mac OS and watchOS and iOS that you’ve encountered.

**JP:** Well definitely. So continuing through the cross-platform, the big milestone there was really when Swift was open sourced. Apple had been promising that Swift would be ported to Linux but I don’t think it was ever clear exactly how far along that effort was. Judging by everything that was announced and what’s been shown from Swift in the last few months, it’s clear that it’s always been fairly far along. So now with Swift being available not just on Apple platforms but on other platforms, people have started efforts tot support to the Raspberry Pi, to DV Linux, to Ubuntu, to Android and a number of other variations of Linux. It’s really, really impressive to see that going in that direction.

We mentioned Realm and how there’s an opportunity here— there definitely is in terms of just porting what we have which is really from the first Database that was assigned with Swift in mind over to all the other platforms that Swift supports. So it’s exciting times.

**JAIM:** So we’re talking in April 2016, what is the state of the different platforms that Swift does support that you were talking about?

**JP:** Right. Well, the difference is where it really hurts. So I’d say that a very large portion of Swift works right at the box across Apple platforms and non-Apple platforms. Generally, I think, in this conversation, we’ll consider cross-platform Swift is Apple vs non-Apple platforms.

So when you’re in Apple platforms, you have a number of things that are going for you that you sometimes just take for granted. For example, even in a pure Swift code base which is essentially impossible to have on iOS because no matter what, you’re going to have to link against UI Kit and Foundation and stuff like that. But even that aside, considering the Objective-C runtimes there, it’s doing a lot of heavy lifting for a lot of under the hood language implementations. So even if you’re writing an iOS app, you just have .swift files in there, you’re still going to be leveraging some of the Objective-C runtime like Dynamic method dispatch or Reflection Capabilities. There’s a reason that Core Data works in Swift even though it’s incompatible with the language at a very core level. It doesn’t really matter. The interop gets you really, really far. So when you search support that code over to other non-Apple platforms, you really start to see how much Swift relies on Objective-C in Apple platforms and that’s where it really starts to hurt. So just when you try to do casting. So if you’re casting from a protocol to concrete foundation type, for example, well because [inaudible] bridgeable isn’t implemented on Linux or it recently was, I think, in the open source version. Well that’s just going to fail. So even in pure Swift, when you— you don’t even know that you’re using Objective-C or other Apple-ism under the hood, you won’t use – start to try to port that code, that’s when you really start to see the differences across platforms and where the current state of things are.

**ANDREW:** Between the time that Apple announced Swift would be open source and when they actually release to this open source, it seems most people assumed that that release would include Swift and the Swift Standard Library but Foundation would not be part of that. There were people who were writing open source across platform-ready Swift Libraries before Swift was crossed-platform and what they meant is, “We’re just using the Swift Standard Library.”

I think people were pleasantly surprised that Foundation is actually part of the Swift open source release. Of course, they’re re-writing Foundation in Swift instead of Objective-C which it’s been in for, well, really for 20+ years or something. But I wonder though— so what you’ve just said is about some of the Objective-C bridging features. But it seems like the story is actually pretty good in the sense that we do have real Foundation. Where is that at? I know it was in progress when they first open source everything.

**JP:** Yeah. Don’t get me wrong. The current state of cross-platform Swift is really an amazing achievement. I guess as an engineer, as software developers, we usually just focus on, “Okay what’s next? What’s still broken? What’s the next bug or feature that we have to work on?” So that’s why we tend to gravitate towards just highlighting those differences but really overall, Apple has set an amazing job at ensuring that Swift is cross-platform and has great performance on all platforms and all things like that. But going back to your question on where do we stand with Foundation— the Swift version of Foundation?

Yeah. So I was blown away when it was announced that Foundation would also essentially be part of the open source Swift release. What’s really interesting was the mechanics that Apple went by actually doing that were prior to Swift being open source, if you would have asked me, “Are they going to open source Foundation?” I would have said, “No,” for sure, mostly because of what you just said. It’s been around for 20+ years and Apple hasn’t open sourced it yet— the Objective-C version. It’s called the Darwin Version of Foundation. So I thought it was highly unlikely that they would do anything like that. They ended up taking an approach that I hadn’t consider at all which is writing what I would consider to be 40-50% of Foundation in Swift using CF Light, the Core Foundation. Actually not CF Light but Core Foundation rather. So that’s in C then having Swift wrapper. I’d say, probably won about 40-50% of the way there towards what Darwin Foundation actually has. Then they said, “We’ll crowd source the rest,” essentially, where there handful of people that Apple who shepherd the effort of continuing work on Swift Foundation, which is the open source version. Philip [inaudible] comes to mind. I think there’s a handful of other people.

But really there’s just so much interest from the community to contribute back to Swift Foundation that there are pull requests coming in non-stop on any given day or might be about half a dozen to a dozen pull request. Sometimes small, sometimes fairly comprehensive that just continues to narrow the gap between Swift Foundation and Darwin Foundation. So I really feel Apple looked at this and said, “Well, with relatively minor effort— so just for the handful of people on our side plus the community— we could probably rebuild most of Foundation over the course of several months which is our timeline for Swift 3 anyway.” So right now the goal for Swift Foundation is to be more or less at parity with Darwin Foundation by the time that Swift 3 is released which at this point is looking like fall of 2016.

**JAIM:** So if you and me had started writing a Swift app on Linux, how do you go about that?

**JP:** I think by far and away, the— when you’re developing indie source software, the language is – tends to be only part of the equation. The language is standard library and the other, non-standard standard libraries, I guess, which you would account Foundation in there, still account for just a fraction of the development experience.

Another big part of the development experience is the IDE and the tool chain and the developer tools that you use. So Xcode is still fully close source and Apple platform only— Mac only really. So really that provides the best experience when you’re developing Swift bar none. There are other tools out there that help you. For example AppCode from the folks at JetBrains which is an IDE that more or less replaces Xcode.

Now, the folks at JetBrains also made a plug-in for their CLion IDE which is a C language’s IDE that supports C and C++ but it shares a lot of the same code base as AppCode with a fairly big difference. CLion is cross-platform so it will work on Linux and I think Windows but essentially the JetBrains people did a Swift plug-in for the CLion IDE which means that now you can write Swift on Linux using their IDE which actually gets you a pretty nice experience.

In my opinion, not to diminish the work that the folks at JetBrains have done which is really impressive but Xcode is still far and away the best way to be developing Swift. So if you’re going to be writing a cross-platform piece of code in Swift, I’d really suggest starting with Xcode because it has LLDB integration, it has— well really, it’s been around the longest as a Swift IDE. So it really gets you a nice experience and from there, you can try to run that in a Linux environment. There is a handful of ways that you can do that. You can spin up a virtual machine using Docker or just a plain Vanilla Virtual Machine or run that maybe on an Amazon server or some other Cloud platform. Then slowly turn on piece by piece of this app that you initially wrote for Apple platforms and slowly turn on piece by piece for the Linux counterpart. So that’s just one of the approaches that you could take to port an app.

**JAIM:** So most of our audiences are app developers. They may not know what Docker is. Can you explain that real quick?

**JP:** So Docker is a very popular tool recently I guest. It’s writing on the trend of what’s called containerization which is essentially isolating a small Linux kernel away from the rest of the underlying host system in a way that you can essentially run a mini virtual machine. What that allows you to do is have a very light weight subset of a virtual machine that you can actually run say, a lot more instances on one given computer or laptop. It gives you full isolation from the underlying host. So if say, “I’m spinning up a Docker virtual machine on my OS X machine”, it means that it is running a Linux kernel in a container so that I can actually communicate with this extra machine is actually living on my laptop or on my computer without necessarily having to go over the network to a dedicated Linux box. So it’s just a fairly convenient way that without leaving the comfort of your OS X development machine, you can actually be trying out, say, your Linux Swift Script or your Linux Swift App in Linux environment in the comfort of your own OS.

**JAIM:** What are the benefits of using this? You could have configured system running on your development machine and you can work with that, you can share with other people, something that requires some configuration. You can have multiple copies and just use that as running a new box and stuff like that.

**JP:** Yeah, that’s right. So for example, if your Swift app needed to depend on some Linux package, say, you wanted to have open SSL in there, well, you could use something called the Docker file to actually put that as a configuration step or a configuration file with the rest of your project. Then anyone else who’s pulling in your project will just be able to spend up Docker VM and already have all the pre-requisites that the system needs for your app to run. So it’s quite convenient.

**JAIM:** Okay. So are all the major brand of Linuxes [inaudible] Docker into a template like for Ubuntu or whatever?

**JP:** Yes. There are definitely lots of flavors, lots of what’s called images that you can pull down from Docker hubs or essentially centralized image container for Docker. Now, not all the Linux flavors necessarily support Swift to the same extent at this point but it’s pretty far along.

**JAIM:** Okay so I’m running a virtual machine on my box and I’m opening Xcode with my own— my Mac file system. How do they work together? How‘s this happened?

**JP:** Well now, we’re getting into the specifics of— and fairly opinionated way that you could do cross-platforms Swift development. But it’s what I’ve been toying with and it’s working fairly well for me.

So you spend up a Docker VM and what you can do when spending up this container is to actually point to a shared path on the host machines on your Mac that will also be mounted as a file system mount point in the Linux container so that the same set of files are available to both the Linux environment and you’re Mac and what this allows you to do is say, “Spend up Xcode and continue pointing to your Swift project.” This you always have but also run those same sets of files or run the Swift compiler on those same set of files from the Linux environment. So you can open up Xcode and make a few edits. Use autocomplete, use LLDB to debug something and hit save. Then immediately that’s available to the Docker container. So at that point, all you’re ever doing, from the Docker container really, is running Swift C or the Swift compiler or the Swift, just the Swift command that will run a set of files that are just in time interpreted. So it really leads to a very nice development environment where really you’re basically just testing in Linux. You’re not really developing in Linux and that can really get you most of the way to building something with Swift on Linux.

**JAIM:** Okay. So you’re talking about a system where you doing your coding in Xcode and it’s pointed to local file system and container has a copy of it. So there’s the mount point so we’re staring at the same files. Once you save it, then it’s available in the VM. At that point you switch over to the VM and you do the compiler by a command line.

Now if you’re used to IDE which most of us are. Most of us have our heads on Xcode, you might think that a little bit weird. But it’s actually a pretty good work flow of [inaudible] Ruby development. There’s really no IDE that is compiling, that doesn’t really make sense so you write the code and you switch over to the command line and run a test. It’s pretty solid work flow so don’t be scared of it.

**JP:** Yeah, but it does get you most of the way there. There are times, though, when you might need to actually do some debugging in the Linux environment. Thankfully, when Apple open sourced Swift, they also open sourced their LVM and Clang and LLDB forks from the mainstream projects into their own Swift specific versions, which are pretty close to the upstream versions but have some slight differences.

So for example, if you wanted to attach LLDB to an application running in Linux, it might allow you to debug it in a way that would otherwise be really impractical if you’re otherwise just using Xcode because at that point LLDB is very platform-specific. It won’t really be able— the version that you’re running in Xcode or the version that Apple shifts with Xcode won’t really be able to attach to a separate process running in a separate container or if it can, it would really impress me.

So at that point you need to run the Linux version of the LLDB. It’s at that point that when you really start to do more in-depth Linux Swift development. You might actually be better off actually running in a more complete Linux environment. So something like Ubuntu with the Ubuntu GUI and all that, it’s to that point to that point that you can start using – I mentioned CLion earlier has an IDE. There’s also a handful of Sublime Text or Atom plugins that those text editors do work on Linux, on Ubuntu that— so there are handful of plugins for those text editors that will allow you to have interactive LLDB integrations as well. So you can bring your Linux Swift development to the next level if you fully immerse yourself into a Linux environment, too.

**ANDREW:** I want to talk a little about the Swift build system because you’ve already been touching on a lot of this but if you’re already doing Swift Development on Apple platforms, of course you use Xcode and you write your Swift and you hit the run button and that’s that. But there are other considerations that go into writing something that’s going to build and run on other non-Apple platforms where Xcode’s not available. The Swift compiler of course will compile stuff but I think the Swift Package Manager is a big deal. Can you talk a little bit about that?

**JP:** So the Swift Package Manager is more than just a dependency resolution tool. It is partly that and by dependency resolution tool— the tool that will allow you to pull packages from different sources – so say, that you’re using [inaudible] as a result type that you want to pull in just so you have the results type in your Swift code while you can specify that in something that’s called a package.swift file. It’s a package manifest that the Swift Package Manager will then use to go and resolve all those dependencies and build the packages that you want to build internally. So say that you want to build an— just an executable. You can use a Swift Package Manager which will combine the dependency resolution aspect pulling down packages as well.

So downloading say, this result package and doing all the work of linking it and building it against your code base and using this package manifest, you can specify where you’re unit test are, what frameworks to use for— I call them frameworks but really the Swift Package Manager calls some packages and libraries. You can specify which parts of your code base need what. You can even use a Swift Package Manager to not only build an executable but to build other packages so that other users of the Swift Package Manager can then pull in your code and use in their code base. So the Swift Package Manager taking a step back is part dependency resolution, part package management, part build tool which essentially uses a new tool that was also released as part of the open source Swift release called llbuild which is not strictly Swift specific. It’s a build tool like Buck or Ninja that is essentially just an interface to LLVM. So it’s a replacement for Ninja or Buck or Xcode builds, really, that can build not only Swift but also C type languages or anything else that LLVM supports.

I know I just explained— I just mentioned a handful of tools here so if you want me to clarify any of this or to go more in depth, I’m happy to do that.

**ANDREW:** Yeah.

**JAIM:** Go for it [crosstalk].

**ANDREW:** Yeah. I’d know Ninja is but probably a lot of our listeners don’t and I don’t think I’ve ever heard of Buck.

**JP:** Right. Buck is a build tool that’s built by Facebook. Fairly popular for building Android apps but you can also build applications for a lot of other platforms with this. You can use this as a C languages build tools or C, C++. There is integration for, of course, Java but even Objective C, Go, Deep, Python, LUA. It’s very similar to Ninja. I’d say Ninja is probably more of a generic solution to building build tools. It’s generally used in conjunction with other build tools, say, C make whereas Buck tends to be more complete and in that sense llbuild is probably a closer equivalent, if you will, to Buck. You can check out the— more information on Buck at the buckbuild.com website. Again, this is open source tool built by Facebook. I’ve heard great things about it.

**ANDREW:** Well with the explanation of Buck, you mentioned Android which is something I’ve been wanting to ask you since we started talking.

Just as we record today or yesterday, a pull request adding Android target support for Swift was – for the open source Swift was merged in which is cool news but I don’t really know what it means. I wonder— one of the first thoughts I had is that, “I don’t think you can use it to build an Android app right now,” but— like a full on Android app but you could use it to build an NDK app where you’re either doing your own UI like a game or something.

Another thing I thought it could be used for is a problem that you actually have at Realm where you have – the core Realm is written in C++ so it’s crossed-platform and C++ has been a good way to do cross-platform code but now that Swift’s on Android, does that mean anything for Realm? Does that introduce a new solution to that problem you’ve used C++ for in the past?

**JP:** I think you hit the nail in the head there which is what – I have heard a number of people at Apple who work on Swift like Chris Lattner and Joe Groff have mentioned that they really see Swift as a replacement for everything from systems level programming to application level programming. If you look at some of the WWDC sessions from 2015 – I forget the name – there’s one that’s about not high performance Swift and how you can rewrite parts of your apps that were previously slow due to Objective-C method dispatch or [inaudible]. There’s really not that much code that’s actually limited by the Objective-C runtime but there is some. So during that WWDC session, they were recommending— well, this code that I previously had in C++ that needed to do mail memory management. Well now, you can actually port this Swift and get similar performance improvements.

Swift is really still a working progress. I’m not sure if today it really is an anchored statement to say that Swift is as highly performant to C++ in most scenarios but I certainly think that it has the potential to get there and that it’s probably there for some circumstances today. So I really do see Swift probably not today but as it stabilizes across platforms. Swift will – probably by the time that Swift 3 comes out and Swift is more portable than it is today, then it might be a very good tool for people who are writing cross-platform code so Realm is a good example of that.

Right now, our database engine is all written in C++ and C++ is really a great systems programming language at this point. There’s nothing that really comes close but the way of Realm is really architected. We have the core database engine written in C++ that’s cross-platform. Then we have bindings in Objective-C, Swift, Java and JavaScript that’s— then Bridge. The lang— the high level language constructs like the Swift Standard library or the Objective-C runtime, the Foundation Types to the types that the core Library actually support and work with. So most of the functionality here is written in C++ and that allows us to share the same code base on multiple platforms.

I really do see Swift playing a major role like that moving forward. Again, probably after Swift 3, after the current Swift goal of portability where Swift can really be used as a cross-platform Core to your iOS and Android application where you can have some business logic in there. You might even have some model code, some database code that you can share across your app. Then you can still use the platform specific UI STKs or languages to then interact with that through say, in Java through the JNIs as an NTK or of course, for an iOS app as you would today. And you could probably even reuse that business logic on a cross-platform Swift Core of your app and have some of that on the server, too, so they have consistent business logic that you don’t have to rewrite multiple languages then have to settle bugs due to differences in behavior. So I really do see that as a huge win for Swift moving forward and the fact that the Android pull request was just merged is a huge step in that direction.

**JAIM:** Yeah, it’s impressive that it was merged that quickly. Usually it takes longer than that for me to get my two-liners through. So good job everyone.

[Chuckles]

**JP:** There’s been lots of people that were working hard on this— Bryan Gesiak at Facebook and a lot of people at Apple who were obviously really pushing this. And what’s really great to see from Apple— this new Apple is how open, honest and just well-intentioned everyone on the Swift team at Apple seems to be where they’ve really want this language to succeed to the point where they’re definitely going to encourage Swift running on different platforms and support it from the highest levels. Craig Federinghi has mentioned this, that Swift on multiple platforms is a big part of the strategy. It’s really nice to see because really, as a Swift user, there’s nothing that could beat that.

**JAIM:** Yeah, definitely. It’s a solid language for system’s things but I think also for web stuff. Maybe not as much as the interpreted language like a Ruby or Python but there’s a lot of good things in there where it can be into a lot of different apps. So I’m looking forward to see what comes down the pipe.

So we talked about the Swift Package Manager enough. If you want to like get hack on something, you can create a simple app, either runs on the [inaudible] desktop or a server app and you want to do something like network requests which I assumed after our sessions done by Foundation, is that— those simple things available?

**JP:** Yeah. Foundation definitely is available that you can pull that down using the Swift Package Manager. There was a time, I believed, when Swift Foundation was actually included in the Swift snapshot releases which are essentially something like bi-weekly builds of the entire swift build tools that you can then just easily pull in and install as a pre-package thing. Lately, I think they’ve removed Foundation from those builds, from those releases but you can still pull it in using the Swift Package Manager. Then use everything that’s available in Foundation to US if you are writing OS X app.

**JAIM:** Okay. Do you specify which parts you’re using? Or how does that work?

**JP:** Of Foundation? Well, you can specify what you’re using in your – what’s called the package manifest which I mentioned earlier, this package.swift file that’s at the root of your project. So at that point you would specify that you want to pull in Swift Foundation. Then, in your Swift code you would import it like you would in Xcode where you’d say, “Import Foundation.” Then if you wanted to only import a subset of Foundation, you could further specialize that imports. So say importfoundation.whatever sub-module that you want to pull in which I’m not sure exactly which one that would be for say, NSURL session.

**JAIM:** Okay. Well, that makes sense. So you can pull down all of Foundation at once which eventually would be pretty large. We’re not typically used to dealing with that if we’re dealing with Xcode because it’s all there but it is possible to figure out which sub package within Foundation that you can use and pull that one instead, keep things a little bit [inaudible].

**JP:** Would it really make much of a difference because ultimately the [inaudible] will do most of that work so if you’re not using parts of Foundation, even if you import just say, “Import Foundation”, it will just strip away the parts that you’re not using. So you don’t have to worry about that all that much as far as the Swift Package Manager’s concerned, you are downloading the whole thing, the whole Foundation package and that’s something that they don’t really have support for, only pulling in partial packages. If there is one Git repository for a package, it will pull the whole Git repository even if have documentation and test in there. So if you do want to make your package leaner, you’d probably have to split it up across multiple packages.

**JAIM:** Okay. That makes sense.

**ALONDO:** Okay. JP is there anything else you want to talk about with cross-platform stuff before we move on to picks?

**JP:** Well you mentioned cross-platform Swift in Realm before so I can go into a little bit of our plans there and what we expect to do if that’s [crosstalk] of interest.

**ANDREW:** I would love to hear that.

**ALONDO:** Yeah, that would be great.

**JP:** For Swift and Realm, obviously we’re huge fans of a language and we’ve staked a lot of our business and our product plans on Swift for so many reasons, most of it because we do see great potential on the language.

I think, our Swift binding is really close and dear to my heart because obviously that’s something that I work on a regular basis. So immediately when Swift was available as open source, we started looking into exactly what it would take for us to be able to build Realm Swift on Linux. There’s actually quite a lot of work ahead of us here— both on our side at Realm and on Apple side for Swift.

One of the stated goals of Swift for Swift 3 is portability and that includes some of the language features that currently rely on the Objective-C runtime. Now, Realm relies a lot on the Objective-C runtime. For convenience reasons, for API reasons, for performance reasons, we’ll use things like Objective-C runtime reflection to know exactly all of your Realm models, how they’re laid out, what properties they have and how to save those in a Realm file.

We use Objective-C runtime reflection for that which is obviously not available in Swift. So we essentially need some work from Apple to improve the reflection capabilities from Swift so that we can do this even in the absence of the Objective-C runtime.

Another thing that we make heavy use of is method replacement. So with Objective-C, you can actually replace methods at runtime. So we make heavy use of this to replace all of your properties— setters and getters— to replace them with optimized versions that won’t actually copy data in and out of the Realm file into memory. It will just point directly to the memory map location of that data. So without that, there would be a huge performance loss because you would essentially do what you need to do with SQLite which is to copy everything out of the database into a serialized form, into memory, then do the opposite every time that you want to write to the database.

So those are performance gains that we would not really want to lose. So at this point, Swift being a very statically typed language, no dynamic dispatch unless you explicitly opt in to it doesn’t really allow for this. And even if you do opt into this, it relies on the Objective-C runtime to do the heavy lifting which is why if you try to write some Swift code on Linux that uses the dynamic keyword, it won’t compile because it requires the Objective-C runtime. So, thankfully, there’s been a lot of really interesting work that was done mostly by Joe Groff in the last month or so on property behaviors. Now, property behaviors, you can take a look online. It was actually proposed as an official Swift devolution proposal. It went through the process and at this point, a lot of the implementation is actually starting to be added.

So property behaviors is very similar to Java— what is it? There’s another language. I forget the— I forget what’s language it is but some other language out there has something similar where it ascribes behaviors through specific properties. One example that was, given as part of the proposal was to re-implement the lazy keyword as a property behavior. So this allows library authors or even application developers to do— is to define custom code that will be run every time that a property is either set or read. And what this essentially would allow Realm to do is to replace this currently runtime swizzled method replacements with statically defined property behaviors that would probably be even more performant so that we could— instead of backing a property by an instance variable, we could just point the setters and getters to the underlying Realm data which would be just as efficient as the Objective-C side of things, maybe even faster because you’d actually skip the Dynamic method dispatch. And not only that but even feel better as a Swift interface because you wouldn’t have to use the dynamic keyword and it would actually be using part of the language as it’s designed. So we’re extremely excited with the direction that Swift is going and what we’ll be able to pull in to even improve the Realm Swift interface.

**ANDREW:** I think another one of the things that these property behaviors would enable that I’m excited about is basically replacement for KVO which you get free if you have an Objective-C class with properties or a Swift Objective-C bridge Swift Class but there’s not really, really great way to implement that in pure Swift so that’s another thing. Property behaviors, I think, should enable.

**JP:** You’re absolutely right. It should enable something like an observable property behavior where you can not only specify the property and its type but also custom closures to run whenever some things changed, for example. It’s a hugely exciting feature. I’m really looking forward to seeing that land.

**JAIM:** Yeah, that’d be cool to see in Swift.

**ALONDO:** Great! So we ready for picks?

**ANDREW:** Ready when you are.

**ALONDO:** Okay. Andrew, what do you have for picks this week?

**ANDREW:** Just going to pick one thing this week. If you follow me on Twitter – you’ve already seen me talk about this because I got pretty excited about it the other day. But a few weeks ago— well, I should say, I think that it’s more like couple of months ago, Cabel Sasser, one of the founders of “Panic” who I follow on Twitter and really like, he posted about this haunted mansions subscription box and if you know me in real life, I’m quite a Disneyland fan. I live in Utah but I have an annual pass for Disneyland. I’d go there multiple times per year and I love it and I’m really interested in the engineering work that goes into it. Anyway, they’ve done this thing where you sign up for a subscription, you get a box every month for 3 months that has stuff in it related with the haunted mansion. It’s all of a mystery and they’re telling a story and there’s an iPhone app that goes along with it.

I got my first one this week and I was just really impressed with it. They did some stuff in the app in particular that as an electrical engineer and a long time iOS developer, still seem like magic. It took me 5 or 10 minutes to figure out how they were doing it. So for those 5 or 10 minutes, I was just blown away and still really impressed that they were clever about it. I’m not going to spoil anything. The sad news is they— it was a limited thing and they sold out but I’m hopeful that this is a test run for a stuff they’re going to do in the future because it’s just something they are doing a really good job of. Well then, it’s been fun and cool so far. So that’s my pick.

**ALONDO:** Alright. Great! Jaim?

**JAIM:** Alright. I’m going to do— I got one pick. I’m going to do a book pick today. So I’ve recently finished, “For Whom the Bell Tolls” by Ernest Hemingway. Most of my life, if you would ask me what “For Whom the Bell Tolls” mean, you would have heard a Metallica song. But I read the book and a lot of Ernest Hemingway’s books are some American dude running around your [inaudible] and there’s no difference. This is some American guy in the Spanish civil war as a guerrilla in the mountains fighting the [inaudible]. Very interesting. Great book and actually the Metallica song from the “Bell Tolls” was written about one of the chapters in the book and it’s a really great read.

That [inaudible] chapter, I’m reading it and I’m like, “This is—“I literally dropped the book and said— “This is the most bad ass thing ever written.” So good [inaudible] of story; I like a lot of Hemingway’s novels. Not for everyone but I thought it was great so check out “For Whom the Bell Tolls.”

**ALONDO:** Awesome! So I have one pick this week and that is— it’s an article about The Case for Pricing Parity. I’m currently working on a desktop mobile app. And so this one was pretty timely. So it’s just some thoughts on how to make the pricing work when you’re developing for different platforms and trying to maximize the value that you’re able to gain. [Inaudible] called Flixel so that was my pick this week. JP, what do you have for us?

**JP:** There’s a really, really cool database realization and data analysis that a journalistic group called the Polygraph did fairly recently in which they analyzed actually over 2,000 movie screen plays and broke them down by age and gender of the dialogue. What’s absolutely fascinating to this, to anyone who have got— has considered the Bechdel test or anything like that or is interested in data visualization or even just the actual analysis that was done here, it’s actually amazing to see so much data that was analyzed in movies that we’ve all seen and heard. A lot of these are actually based off of Disney movies as well so it’s movies that we know. It’s incredible to see, how male-centric a lot of the movies are. Even female-centric plots that have a lot of predominantly male dialogue. It’s something that sometimes difficult to figure out without actually looking at raw data but you get a sense of the structure of certain films or certain film trends over the years and to see all broken down like this is really, really impressive and insightful. So I’d really encourage anyone who’s interested in this stuff to take a look at— the URL here is polygraph.cool/films. It will get you this really neat visualization.

**JAIM:** Awesome.

**ALONDO:** Very cool. Well, thanks everyone for joining us in this week’s episode of iPhreaks and with that we’ll say, “So long.”

**_[Hosting and bandwidth provided by the Blue Box Group. Check them out at BlueBox.net.]_**

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
