---
layout: layouts/post.njk
title: >
      164 iPS Cross-platform Swift with Boris Bügling
date: 2016-08-04 07:00:54
episode_number: 164
duration: 37:42
audio_url: https://media.devchat.tv/iphreaks/iPS164CrossPlatformSwift.mp3
podcast: iphreaks
tags: 
  - iphreaks
  - podcast
---

01:33 - Boris Bügling
- [Twitter](https://twitter.com/BorisConf)
- [GitHub](https://github.com/neonichu)
- [Blog](http://buegling.com/)
- [Contentful](https://www.contentful.com/)
- [Cross-platform Swift by Boris Bügling](https://speakerdeck.com/neonichu/cross-platform-swift-2)
02:20 - The State of Cross-platform Swift04:45 - Tooling
- [Swift Package Manager](https://swift.org/package-manager/)
- [SourceKit](https://github.com/apple/swift/tree/master/tools/SourceKit) &nbsp;
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [WWDC 2016: Going Server-side with Swift Open Source](https://developer.apple.com/videos/play/wwdc2016/415/)
06:46 - Frameworks
- [Perfect](https://github.com/PerfectlySoft/Perfect)
  - [The iPhreaks Show: Episode #140: The Perfect Framework with Sean Stephens and Kyle](https://devchat.tv/iphreaks/140-ips-the-perfect-framework-with-sean-stephens-and-kyle-jessup)
- [Frank](https://github.com/nestproject/Frank)
- [IBM](http://www.ibm.com/)
10:24 - Use Cases in Production?12:10 - Other Uses for Cross-platform Swift
- [SwiftFoundation](https://github.com/PureSwift/SwiftFoundation)
- [PocketCHIP](https://getchip.com/pages/pocketchip)
19:04 - [CocoaPods](https://cocoapods.org/); Installation23:59 - Distributing Command Line Tools with Swift
- [Homebrew](http://brew.sh/)
26:48 - Using the [Swift Package Manager](https://swift.org/package-manager/)28:44 - [ThisCouldBeUsButYouPlaying](https://github.com/neonichu/ThisCouldBeUsButYouPlaying#installation)29:45 - Generating Playgrounds for [Swift Playgrounds](http://www.apple.com/swift/playgrounds/) on iPad&nbsp;Picks
- [3DRenderingTechniques](https://github.com/drewying/3DRenderingTechniques) (Andrew)
- [PocketCHIP](https://getchip.com/pages/pocketchip) (Andrew)
- [iWoz: Computer Geek to Cult Icon by Steve Wozniak](https://www.amazon.com/dp/B000VUCIZO/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) (Layne)
- [Spikeball](http://spikeball.com) (Layne)
- [We are Twisted F\*cking Sister](http://twistedsisterthemovie.com/) (Jaim)
- [Swift Weekly Brief](https://swiftweekly.github.io) (Boris)


### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**_[This episode is sponsored by Buddybuild. Buddybuild is a mobile-optimized continuous integration delivering platform that takes a minute to set up. Thousands of mobile development teams love Buddybuild because it’s the fastest way to distribute their apps to users and gather bug reports, feedback and crash reports. Then you could build in integrations for their bug tracker and tools like Slack to seamlessly integrate that information back into the development process. For a free trial, go to devchat.tv/buddy.]_**

**JAIM:** Hey everybody and welcome to episode 154 of the iPhreaks Show. Today in our panel, we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**JAIM:** Layne Moseley.

**LAYNE:** Hello from Lehi, Utah.

**JAIM:** I’m Jaim Zuber and today, we have a guest on our show. Please welcome Boris Bügling.

**BORIS:** Hey from Berlin.

**JAIM:** Welcome! So you talked [crosstalk] about a lot of things and a lot of our listeners know who you are but today, we’re going to talk about cross-platform Swift. Can you tell us a little bit about yourself and how you get into this?

**BORIS:** Yeah sure. I’m doing the iOS development at a company called Contentful and we build a CMS and I do the developing in the SDK. The end of last year when Swift came first out for Linux, I started looking a bit into if it makes sense and how we could support Swift on Linux with Contentful and that’s how I got started looking into it. Didn’t end up doing a new thing for Contentful specifically with cross-platform Swift so I looked into it, gave some talks about it.

**JAIM:** That’s very cool. What are – what is the state of cross-platform Swift? Is it ready for toy projects? Is it just messing around with Linux? What can we do with it so far?

**BORIS:** The state is very different depending on the platform so originally it just came out for Linux. Since then, a bunch of people have submitted pull requests, used subordinate on other platforms like [inaudible] and Windows and Android. At the moment, the Linux Cord is the only one that is somewhat useable and there, you can basically do most of the things you could do with Swift on the Apple platforms. So the main difference is that the foundation libraries which we have on OS 10, the other Apple platforms are written in Objective-C, and for the Swift open source project, Apple decided to actually rewrite them in Swift and that’s part of the open source project because they just started it at the end of last year. That’s not quite complete yet so there’s still some API missing from Foundation on Linux. So that’s the main drawback from the things Apple gives us on Linux.

There’s also some differences because the Linux Swift does use the Objective-C runtime so there’s some differences in casting and some smaller features are not available. But apart from that, it’s pretty much on par and Apple plans to bring it on the [inaudible] Swift 3.0 ships.

**ANDREW:** That was going to be my question. I looked at – particularly, I looked at Foundation right after the open source release first happened and there was a ton missing. You open up the source file and it was all just stubs with basically nothing there yet. I wonder how fast things are progressing and if there’s a timetable for having it really be at the same level as Foundation, OS 10 or iOS.

**BORIS:** Yeah, we’re progressing pretty fast but I don’t think this – the original timetable was to have it ready with Swift 3.0. I’m not sure if it actually will be 100% done when that’s released because it’s actually not so far away anymore and a bunch of things are still not there so not a 100% sure there, but definitely there’s a lot more there now than there was back at the end of 2015.

**ANDREW:** I’m curious to know about tooling. So if you’re going to write Swift on OS 10 or for iOS or for any of the iPhone platforms, the obvious thing is you could just fire up Xcode and you already got a really good IDE for Swift. What are people using for tools for writing Swift on Linux or other platforms?

**BORIS:** First, they’re using Swift package manager which was also part of the open source release to manage dependencies. It’s not useful really yet for iOS and stuff like this but on Linux, it’s the only way to go to manage your dependencies. Then, there’s a bunch of plugins for different editors to help with Swift development. For example, for vi or Rim and also for Sublime Text and they’re all easy to build on top of Source Kit which is also the same [inaudible] used by Xcode for the editor features like source code highlighting and code completion and things like that. Source kit was also part of the open source release so people could start building plugins for different editors built on top of that but they’re all obviously not really as mature as Xcode. I personally also just use Xcode and develop the things on OS 10 and then just transfer them over to the Linux machine and then there, just use vi to basically fix the small differences that are still there.

**ANDREW:** So I guess that’s an option if you can still develop on a Mac and use Xcode. As long as you’ve written things, you’re not using platform-specific stuff or using [inaudible] APIs.

**BORIS:** Yeah, exactly. There was also a session at WWDC about using Swift on the server and it was the IBM presenting their things and they also did basically the same things so they have now a Mac app for interacting with the IBM services. And they also showed they were developing the server side code, basically an Xcode on OS 10 and then deploying to Linux Silver.

**LAYNE:** So I first heard about Swift on Linux and being cross-platform, I thought, “Oh, awesome. We can write a backend with Swift.” Is there any clear leader yet on a web framework or a web server framework going on right now?

**BORIS:** I wouldn’t say so. There’s actually a bunch of things that are on a similar level. There’s a framework called Perfect which I think even started – selected before Swift on Linux first announced and they started making it as an OS 10 thing and then ported it. There is a framework called Zero which is active and does a bunch of stuff. And there’s also a framework called Viper and then there’s a bunch of things from IBM. They have the [inaudible] or whatever the pronunciation is framework and the [inaudible] and things like this for developing server-side stuff with code from IBM and they also have integrations with IBM’s APIs. Then there’s also a bunch of smaller things – package. I really like what it’s called – Frank, which is similar to Ruby’s Sinatra so it’s a very lightweight thing but it’s nice for writing smaller things as basically a DSL more or less inside Swift for just specifying what happens when certain routes are used.

**JAIM:** Let’s step back. Frank is from Sinatra; Sinatra is a slimmed down version for Ruby. With Rails, you have a lot of things that are done for you; Sinatra does not do that much stuff for you. You set up the routes and you do all the database work all by yourself so that would be a similar, stripped down thing.

**BORIS:** Yeah.

**JAIM:** So how does the IBM framework fit in? When I was at AltConf, they did a talk there and there were a lot who were excited about what they said. I missed the talk. I’m not sure why; we might’ve been recording an episode but how does IBM fit in to it? How do they differ than Frank?

**BORIS:** They are offering us a lot bigger – as I said earlier, they were basically doing the session at WWDC about server-side Swift and they have bindings to all kinds of IBM services. They have their own hosting and they made a Mac app so that you can really easily deploy your app – your web app from OS 10 to their Cloud services and they have a bunch of examples so I think in terms of maturity, it’s probably the farthest along, but I still wouldn’t say that it’s clear that they would be the one framework that everybody uses.

**ANDREW:** They also seem to have the backing of Apple and they’ve got a whole session at WWDC which is at least in my time, it’s pretty unusual to have non-Apple employees doing a session about their own thing.

**BORIS:** Yeah, I think it’s like maybe the second or third time or something that this happened ever.

**LAYNE:** I think you’re right though I think – even though IBM has a lot of resources, there will always be little indie guys like Perfect doing awesome stuff.

**ANDREW:** Yeah. Although Perfect is probably the least indie of the rest. They’ve got funding [crosstalk].

**LAYNE:** Oh really? I didn’t know that.

**ANDREW:** I think they’re second in the running for – or maybe basically tied with IBM. They seem to be doing a lot of marketing, too.

**JAIM:** Yeah, we had the Perfect team on a few months back. I have met them last year so we got a good tour of that and they are an existing [inaudible]. They had a full system built out on a different language. I can’t remember which language it was and they transferred a lot of that to Swift. So they already had the biggest [inaudible] down for a backend Swift platform. A definitely interesting play.

**ANDREW:** Do you get the sense that anybody is actually using any of the stuff for anything real yet? It seems like it’s fun to play with and it’s interesting or whatever, but is anyone actually running any of the Swift in Linux or the backend frameworks in production yet that you know of?

**BORIS:** I definitely met someone at WWDC who said they were running – rolling out the first micro-service with [inaudible] in production so this one company does it.

**ANDREW:** Somebody has to be first, right?

**BORIS:** Yeah.

**ANDREW:** I just wondered because when I’m thinking about – right now, using something like this in production, it all seems like it’s so much influx and so much stuff’s unfinished and Swift 3 is coming down the line and it seems like it’s a little bit of a hard sell to use it in production so far but I imagine that will change relatively fast especially after Swift 3 is done.

**LAYNE:** If anything in JavaScript is in production, that’s always influx. It will always be so maybe it’ll be okay.

**ANDREW:** I guess you’re right.

**JAIM:** Swift is relatively stable; I guess that’s what you’re saying.

**ANDREW:** At least we have a real language to write in, right?

**LAYNE:** There you go.

**JAIM:** Word.

**BORIS:** I would definitely say that it would probably make sense to wait for the stable Swift 3 to start in production because it’s not too far away but I think with that, it’s a pretty good base. Make sure other ecosystems have a lot more existing code that can be used – going on but the thing that will also quickly change.

**ANDREW:** Yeah, I think it will, too. It seems like there’s a lot of excitement around Swift and around creating packages for it and new libraries and all that. A lot of it’s already happening and if adoption picks up for cross-platform or for Swift on the backend, it would seem like that would accelerate.

I’m curious about other uses for cross-platform Swift, the one we used to talk about where it’s used on the backend for servers, for web services and that kind of thing is an obvious one but I wonder if there are other interesting things that Swift could potentially be used for? For example, writing cross-platform apps or Swift on embedded systems or something I haven’t thought of.

**BORIS:** Not really. There’s the Android portal Swift but it’s very basic at this point in time because it’s only – obviously, we only have Foundation. I’m actually not sure if Foundation even works yet for android; it might only have this standard library and with that, you kind of really – you can write an app but it’s a lot of work so that is pretty far away from being in any way useable but it’s probably the one thing that also makes sense.

I’ve seen people playing around with [inaudible] Linux desktop apps using Swift but it also – that’s something called the experimental thing [inaudible] production in any kind of way.

**ANDREW:** So that would be interesting for me being able to write Linux or even Windows desktop apps in Swift. I know Microsoft at BUILD this year announced that they are planning to support Swift for project [inaudible] the Windows bridge for iOS so that seems to be coming down the pipe sometime but they didn’t give a timetable or anything like that. Certainly not available now.

I’ve played around with putting Swift. I’ve got a Raspberry Pi just last week. I’ve got a chip by next thing which is like Raspberry Pi mobile nine dollar computer based on a system on a chip. I got the Swift compiler running on both of those. I haven’t done anything at all really interesting beyond getting the compiler to run but I keep thinking I should come up with a project and make a robot or something that’s using Swift on Linux. There are other people playing around with the same sort of stuff but I still haven’t seen anything really super interesting in that area so one of us needs to get in gear and do it.

**LAYNE:** I mean if you said the term “Swifty Robot”, I think everyone would take you seriously. [Chuckles]

**ANDREW:** I really do plan to but it’s just, you know, it’s one of those things where you’ve got a million projects and not very much time. I will say though that being able to write – I’ve got this thing called a PocketCHIP. I did a – I tweeted about it weekly or something but it’s basically like a retro computer but it’s a fully integrated computer with a tiny keyboard and a five-inch touch screen and whatever and it’s using the chip as the brains of the whole thing. I’ve got the Swift compiler running on that and it’s pretty fun to be able to write a Swift program on this little thing that costs $50 and has its own keyboard and everything. It makes me wish I could write Swift on my iPhone although I guess now with Swift Playgrounds, we can do it on the iPad at least.

**JAIM:** Yeah. It’s exciting to see what comes up on people’s imaginations, what they’re going to start doing. There are definitely a lot of options, from embedded to server type stuff and desktop app so I look forward to it. I think Swift has great legs as far as the language; it’s getting wide options so I think it’s – and it’s well done [inaudible] itself. I think that people enjoy working with it so I think there’s a lot of – it’s a good feature for it. There’s a lot of language out there at this point. It’s hard to say that one will become important in different areas but I think Swift is really doing well for such a young language.

**ANDREW:** I hope so. I wonder if I don’t have a great perspective because I think for those of us who are already doing iOS or Mac development on Apple platforms, we’re using Swift because it’s obviously the language – the new language to use for that stuff. So we want to apply our knowledge in that language to other problems in other platforms but I am interested to see if Swift catches on among a broader segment of people – people who are not already developers in the Apple ecosystem and essentially come to Swift because of its merits as a language instead of just the ecosystem around it. I wonder what you guys think about that. To be honest, I don’t talk to very many developers who are not Apple platform developers at least very often.

**JAIM:** Yeah, I think Swift has a good pedigree; they put a lot of thought into language so it’s fun to write. They’re doing things the right way. Their philosophy – if you would call that – it’s solid. It fits well within something [inaudible] Go versus something that has good performance. It’s compiled so it’s going to be fast so if you need scalability with your application, Swift will be a good option. But if you [inaudible] Go, it’s not garbage collected so if you’re doing something real time, you can tell [inaudible] releases, it’s going to use arc so you can tell when something’s gone or something’s cleaned up. With something like Go embedded, it is hard at least with real time because you don’t know when the gun is going to fire off and that can be [inaudible] your system and break it just because something – the timing’s off so I think for embedded work, it’s good playing for – server work, it’s a good play for just the performance. People like writing it.

**BORIS:** Yeah, I think so, too. Back in the – when Swift was introduced, they had a slide where they had languages grouped in terms of developer productivity and performance. They basically had their whole group of things which are performance; things like Java and Objective-C and a bunch of things which were – developers were already productive like Python and Groovy. Then there was basically this quadrant where nothing is at the moment, things that are at performant end like ‘nice to use’ and there was then the logo for Swift so that’s at least how Apple sees it. I think it’s kind of true. And also compared to other compiled languages for server use and stuff like this like Go, I think Go has a lot less momentum I would say.

[Inaudible] people know to write Go. These two have all the people from Apple platforms who already know how to write Swift so they can then also use it somewhere else whereas with Go, there’s only the [inaudible] basically.

**LAYNE:** Yeah, I’m really curious how the impact will be if you can write your app back to front if there’s really great backend stuff that keeps coming out and you have developers that can write the app, even the map app, and the backend all on Swift. I think that’s a big push to make it even more popular personally.

**JAIM:** Yes, anything but JavaScript.

**LAYNE:** Right.

**JAIM:** At this point, you have – you don’t have very many options. You have JavaScript, C# but you have to build your backend with Swift. That would be cool.

**LAYNE:** I did a little bit of Go a couple of years ago and it was great. The language is cool but it’s fit the use case really well and then I said, “Well now what?” and I haven’t touched it since.

**ANDREW:** This is a little off topic but Boris, I know you worked on CocoaPods and CocoaPods is – at least mostly written in Ruby if I’m not mistaken. I know you do a fair amount of Ruby programming. I wonder if – I don’t exactly know why Ruby was chosen for writing CocoaPods in the first place but I wonder if maybe Swift will start to be used in places where something like Ruby was used to create those kinds of tools. CocoaPods is not really a cross-platform tool. It’s a command line tool; it’s really sort of a whole suite of tools. You think Swift will lend itself well to being used for things like that in the future?

**BORIS:** Yeah, I think eventually it could be – at the moment, I think the main problem is that there’s no good story for distributing those kinds of things. So the one problem is that you need all these Swift libraries which on no platform yet, [inaudible] with the system so you also need to bring them along somehow. Whereas if you use something like Go which actually became pretty popular for doing command line tools, you can build one static, executable and then distribute that. For Swift, that’s not really existing. You can distribute it as open source but then you have the issue that [inaudible] the Swift package manager doesn’t really have a way to install something, so at the moment, it’s just a big problem to distribute a command line tool properly which is written in Swift.

**ANDREW:** Okay. I suppose Homebrew – something like Homebrew could be used for that but again it doesn’t come with the system – an extra step for anyone who wants to use it.

**BORIS:** Yeah, so you have the issue of – so if you want to distribute the binary, where do you actually put the Swift libraries or any dependencies you use? Because you also don’t want to mess with other programs using a different Swift version. So basically, that part you have to make up for your own; Homebrew doesn’t help you there. And when you do it from source, you run into the problem that it’s really specific to what version of Swift the user needs. So I personally have made some command line tools in Swift and then I had, for example, one that was used [inaudible] with 2.2 and was using Swift PM to build inside the Homebrew formula and I thought, “Okay, this would work.” During the Swift 2.2 development, at some point, this [inaudible] actually moved from it. So the Homebrew formula broke and at the moment, there was actually no good way to [inaudible] 2.2 command line or any kind of package as source because the Swift Package Manager is not part of the stable version so that means these two have Swift 3.0 being stable to be in any way feasible.

**ANDREW:** Do you know if making it – Swift Package Manager also can install tools instead of just libraries as something that’s on the road map for it? I supposed it’s open sourced so in theory, community could do that.

**BORIS:** I don’t think any kind of installations at the moment part of it [inaudible] command type tools with it but it always is built in a local directory. There’s no installation part of the whole tool which is actually similar to CocoaPods which accepts – which also never had a way to install things globally in any way but most other package managers have that. If you look at Ruby gems or something, it just installs binaries inside of the system and most other tools also have this.

Even when we look at JavaScript or use npm, you have the option to install something globally. For Swift, this is at the moment simply not covered in any way.

**ANDREW:** Maybe someday because I think it would be nice to be able to write those tools in Swift.

**BORIS:** Oh yeah, definitely. As I said, I wrote some small tools and I formed the development perspective. It’s actually really nice. With Swift Package Manager, it’s also nice to develop which inside Xcode, it never was so nice, especially if you consider third party dependencies. These two have those [inaudible] somewhat integrated with Swift Package Manager because it can at least link those statically into the binary but there’s still a problem with what you do with the Swift libraries and how to manage these kind of things.

I guess there will be eventually, so one problem is how [inaudible] be with Swift 3.0 because most of the source stability is no longer an issue or should no longer be an issue with this. Most of the really big changes are there so if there’s Swift 4.0, there’s maybe not so much difference in terms of source code until [inaudible] becomes feasible, it’s actually what I think when we have either Swift shipping with the system or Swift being – having API stability [inaudible]. It doesn’t matter which software version something’s built with, it will still run if you have any kind of Swift libraries.

**JAIM:** That’s the dream. So if you had your way of doing it, how would you solve this problem, distributing command line tools with Swift? If you had time to work on this, what would you do?

**BORIS:** I’m actually not sure. I was thinking about it a couple of times, making something to do it but one way would be to add some support for this into Homebrew so that Homebrew would know about Swift version somehow and could separate the Swift libraries for different versions from one another.

On the other hand, Homebrew can [inaudible] distribute them so you still have the problem where do you get them. It is also not so easy to even automate some kind of downloading for them. They’re still built on swift.org for Swift versions but they don’t really correspond to a version you might have on Xcode so it’s actually kind of hard to deal with Swift versioning even in general because there is no [inaudible] upon version for something. You have the versions of Swift that ship with Xcode, then you have the builds that you can download on swift.org and even those have the issue that you download something and it has a date attached to it whereas the actual built is identifying itself with a commit hash. So even if you wrote a record which Swift version was used to build something, somewhere inside the package so that the user could download the right version. Even that kind of mapping doesn’t exist at the moment.

I don’t think they’re – with the current state, there’s really a good way to solve it so I think it’s just a case of – it makes you wait a bit until this can be solved. Maybe with Swift 3.0, at least we have a stable version of Swift with access with package manager so it could be an option to say okay, we distribute these things as source and we expected the user has the Swift compiler for 3.0 installed. Because it’s stable, we know which version that is and then those kinds of versioning problems don’t exist.

**JAIM:** That’s the way we had to do things in the earlier Linux days; we get the source, we compile it and it never worked and you just hear [inaudible]. [Chuckles]

**BORIS:** Yeah.

**JAIM:** So just like that. It would be great. Sounds like that’s what we’re stuck with. But I didn’t know [inaudible] source is that bad for most people that are going to be doing these are – would be tech savvy developers. They may not have Xcode installed so it might be important to actually get the correct version of [inaudible] because most of us here – have our Swift version we got from Xcode. That’s how I got my Swift version but you may not have that luxury. You may not want to have Xcode to do it. Yeah, I can see where it’s a problem.

**LAYNE:** You mean you don’t want to download a five gig file to compile your command line tool?

**JAIM:** Well I’m cool with that but [crosstalk].

**LAYNE:** Exactly. I don’t think everyone would like that. So I haven’t used the package manager at all. What is it like to use it? Does it work good? Is it awesome? Not awesome?

**BORIS:** It works really well. It’s being rapidly developed. So new features – happen all the time. One issue at the moment is that there’s no good discovery for packages yet. There’s this IBM package cloud thing or something – IBM Swift package kind of [inaudible], I think it’s called, which kind of works but at the moment, it’s basically like researching through GitHub to find packages. So I think there’s something we have solved pretty well in CocoaPods. We have a pretty good search and pages for all the packages and we have download statistics and statistics for – where we consider important for the quality. All these kinds of infrastructure things are still missing.

If you give [inaudible] the only thing, I think that’s fine but if you’re looking for a third party packages, this is not a really solved problem yet. Also like documentation for example; in CocoaPods, we have Cocoa Docs where we have the documentation for everything online, easily available and this is also not a thing that Swift Package Manager solves at the moment.

I think there’s still a way to go to make it actually useable well and enable things like package discovery and stuff like this.

**LAYNE:** Yeah, I think discovery is very important to a package manager. I think one of the things CocoaPods does so well just like you said is discovery. Until we get a really good discovery platform there, it would be hard to really get into it.

**ANDREW:** Seems like CocoaPods has one. I wouldn’t be offended if they added support for packages that are in the Swift Package Manager.

**LAYNE:** That’s an interesting idea.

**ANDREW:** I want to ask you about something that’s also somewhat unrelated to cross-platform Swift but I love your – it’s the weirdest name tool I used but ThisCouldBeUsButYouPlaying tool for generating playgrounds from CocoaPods or Carthage packages. And I was going to ask you about adding support for Swift Package Manager packages to that but it looks like you already have an issue for that.

**BORIS:** That’s right. I have an issue for that. Have we done anything that [inaudible]? I think my main issue was – I actually don’t remember. Oh yeah, my main issue was actually the versioning because with Swift Package Manager, you always need a version. And at the moment, the tool you just specify a package and we’ll just use the latest version. This is actually not something you can do with the Swift Package Manager; you at least need to know the major version of the package to be able to fetch it. At this point, I stop for now because then the command line experience would be a little bit too complicated in my opinion.

Something else I was looking into though was generating playgrounds for Swift Playgrounds on iPad from CocoaPod but that also turned out not to be feasible at the moment because the Swift Playgrounds on iPad actually also have versioning problem versus other versions of Swift 3.0 because there’s a little bit older version of Swift 3.0 in Swift Playgrounds for iPad with Xcode 8 and that version is not downloadable anyway anywhere. You can actually not really write a playground and be sure that it works on the iPad on OS 10 so this is also a problem I encountered – a project I had to stop for now.

**ANDREW:** Hopefully, that’s something that gets fixed as the iPad [crosstalk].

**BORIS:** Yeah, I guess. It’s the beta’s progress. Eventually it will stabilize because there will be just one Swift 3.0. I just saw it; it was kind of a bummer but it’s not like this from the start but it’s a beta.

**ANDREW:** Yeah, that would be really nice. I don’t think I even realize that it would be possible to use pods in a Swift playground on iPad.

**BORIS:** Yeah, the idea was to basically use the auxiliary sources, the Playgrounds support where you [inaudible] sources, directory and put the pod in there and be able to use it on the actual playground.

**ANDREW:** Okay, so there’s no support for module [crosstalk] framework?

**BORIS:** No, not really. That was the idea.

**JAIM:** Oh cool. Let’s go to the picks. Andrew, what do you have for us?

**ANDREW:** I’ve got two picks today. My first pick is actually – I went to CocoaHeads last night and there were two presentations, one really terrible and one really good. The terrible one was the one I did and the good one was one my friend, Drew [inaudible] did and he talked about 3D Rendering Techniques. It was actually not iOS specific but he went through – he did a presentation about how 3D rendering using rasterization, ray tracing and ray casting works and it was – even though there’s a really math-heavy topics, he managed to make his presentation have almost no math at it at all and explain things in a way that you could really understand how these algorithms work. So it’s the first time I’ve really felt like I understood how 3D rendering works at a fairly low level. Of course, he skipped over some details but nothing too crazy. Even better, he wrote an app in Swift that runs on iOS that implements all three of these rendering techniques in fairly simple Swift code without using a library like openGL or Metal.

It’s all done in the CPU, in code that you can read and I was very impressed with what he did so my pick is his project which is open sourced called 3DREnderingTechniques. And if you want to read through code to do rasterization and ray casting – ray casting is like the technique that was used in old games in the 90’s like Doom and [inaudible] 3D, or ray tracing which is what’s used for Pixar movies. It’s really quite an accessible way to figure out how those algorithms work. That’s my first pick.

My second pick is one I mentioned earlier on the show. It’s the PocketCHIP; I got one [inaudible] these on Kickstarter probably a year and a half ago, something like that, and I got mine last week and I’ve just been having a blast with it. They’ve done a really good job with it. I got Swift compiler running on it but it’s also got – it’s running Linux. It’s got a terminal but it’s also got some apps that it comes with including a little simple music synthesizer and a Pico-8 which is a fantasy, 8-bit console that you can write games for. It comes with a bunch of games, so I’ve just been having a lot of fun with it. Those are my picks.

**JAIM:** Layne, do you have any picks for us?

**LAYNE:** I do. I have two. The first one is I started listing to a book. It’s Steve Wozniak’s book called iWoz and it is a very fascinating look into Steve Wozniak’s life growing up, how he met Steve Jobs, where he went to college, how brilliant the guy was – everything. And being an Apple fan and writing software for Apple platforms, I think anybody interested in that kind of stuff will find the book completely fascinating.

The other pick I have is not technology related at all. I played a game over the holiday with my sister and her husband called Spikeball. It is a really great outdoor game, a lot similar to volleyball that you can play with up to four people. It requires just a little thing that you buy; you put on the ground, has this net and you spike the ball at each other, play it like volleyball. Super fun. Great outdoor game.

**JAIM:** Very cool. So I’ve got one pick. I was a little under the weather the last couple of weeks so I spent a lot of downtime watching a lot of Netflix and I ran across one documentary I probably wouldn’t have watched normally. It’s We Are Twisted Sister. It’s on Netflix right now.

I’ll watch an old, heavy metal documentary anytime but I’m not really a fan of Twisted Sister. I can’t even tell you a time I’ve intentionally listened to their music; maybe when I was like fifth grade or something but this is a really interesting documentary. It shows their early stages of their career. Most documentaries, you spend about five minutes talking about how they get their first record deal and then they go on from there. This, the whole time is basically what they did and they were a club band for ten years before they’ve had any record deal or attraction. So it’s really interesting to see what they went through and it reads less like a music documentary. It’s almost like watching an underdog story like Rudy or something so it’s really – I think it was really entertaining to see what they went through.

It’s a good view of the music business even now. I love the same things; they were a pretty popular club band in the suburbs or New York and the labels wouldn’t touch them. They couldn’t get signed in anything but eventually they went to England and made a big hit there but – a really good documentary. A lot of parallels between the music scene and the startup scene now. Now, everyone, they want to get funded and some companies do it without getting funded in what they’ll do so just watch them try and figure it out and work without the power that [inaudible] the Gatekeepers released back in the [inaudible]. Really entertaining so not safe for work, mostly for language but other general rock and roll type stuff but Twisted Sister the movie. Worth watching if you got two hours.

Boris, do you have a pick for us?

**BORIS:** Yes I do. My pick is actually a newsletter which is Swift Weekly Brief. I’m not sure if you have picked it before but Jesse Squires does a really good job putting together everything that has happened and open sourced with every week in that newsletter and trying to – also linking to issues or bugs that are easy for people to get started, contributing to the open source Swift project so that’s just a really good way to keep up to date with what’s happening there when the mailing list and things like this are a little bit too high volume and also to find starting points to contribute.

**JAIM:** Very cool. Yeah, I know a number of people that are fans of that list.

So that’s it for the picks. We had a lot of good stuff, a lot of good picks. Boris, thanks a lot for coming on. It was a great show and it’s great to see how Swift is developing. We talked about Swift – cross-platform Swift every few months or so but there’s always new things coming out so it’s definitely cool. Thanks for filling us in.

**BORIS:** Thanks for having me! It was a good time.

**ANDREW:** Thanks Boris!

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**


