---
layout: layouts/post.njk
title: >
  iPS 167 CocoaDocs with Orta Therox
date: 2016-08-25 07:00:03
episode_number: 167
duration: 39:31
audio_url: https://media.devchat.tv/iphreaks/iPS167CocoaDocs1.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:36 - Orta Therox Introduction

- [Twitter](https://twitter.com/orta)
- [GitHub](https://github.com/orta)
- [Blog](https://orta.io/)
- [Artsy](https://www.artsy.net/)
  01:56 -&nbsp;[CocoaDocs](https://cocoadocs.org/)03:06 - CocoaDocs vs&nbsp;[CocoaPods](https://cocoapods.org/)04:22 - Documentation Generation
- [jazzy](https://github.com/realm/jazzy)
- [appledoc](https://github.com/tomaz/appledoc)
- [Macminicolo](https://macminicolo.net/)
  08:49 - Setting Up CocoaDocs in a Private Repository 10:17 - Metrics
- Publishing Criteria
  13:45 - Package Management Support 15:34 - CocoaDocs History 17:17 - Scaling Challenges
- [RxSwift](https://github.com/ReactiveX/RxSwift)
  19:32 -&nbsp;[Artsy](https://www.artsy.net/)
- [danger](https://github.com/danger/danger)
  21:18 - Working with&nbsp;[React Native](https://facebook.github.io/react-native/)
- [eigen](https://github.com/artsy/eigen)
  24:39 - Is CocoaDocs similar to projects that are available on other platforms? Effect on Swift Going Cross-platform 27:08 - Paying For Hosting
- [Button](https://www.usebutton.com/)
  30:12 -&nbsp;[danger](https://github.com/danger/danger)
- [Felix Krause](https://krausefx.com/)
  Picks
- [iPad Pro Smart Keyboard](https://www.apple.com/smart-keyboard/)&nbsp;(Andrew)
- [Bose SoundTrue Around-Ear Headphones II](https://www.amazon.com/Bose-SoundTrue-around-ear-headphones-II/dp/B0117RFX38)&nbsp;(Layne)
- [curlbuilder.com](https://curlbuilder.com/)&nbsp;(Jaim)
- [injectionforxcode](https://github.com/johnno1962/injectionforxcode)&nbsp;(Orta)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**_[This episode is sponsored by Buddybuild. Have you ever run into the issue where you have an application deployed in the wild, it crashes and you have no idea what happened? If your app ever crashes, Buddybuild will actually record the frequency, affected users and traces back to the exact lines of source code that caused the crash in the first place. It gives you even better visibility into crashes with instant replay, a video recording that shows exactly what your users were doing when the app crash, giving you the exact steps you needed to reproduce the issue. Go check them out at buddybuild.com. For a free trial, go to devchat.tv/buddy.]_**

**JAIM:** Hey everybody! Welcome to episode 167 of the iPhreaks Show. Today on our panel, we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**JAIM:** Layne Moseley.

**LAYNE:** Hello from Lehi Utah.

**JAIM:** I’m Jaim Zuber. We have a guest today, Orta Therox.

**ORTA:** Hey everyone! I love [inaudible] so if you hear sirens and honks, that’s just the city.

**JAIM:** Very cool.

**LAYNE:** What a wonderful New York ambience. [Chuckles]

**ANDREW:** Yeah.

**ORTA:** It really does add hints of colors to the podcast recording session.

**JAIM:** Oh not for good. I’m not full of energy. So we brought you on the show to talk about CocoaDocs. Tell us a little bit about that.

**ORTA:** Yeah. CocoaDocs was my first major contribution to the open source community. Probably three years ago now, there was a pretty glaring problem in the amount of open source libraries that we have at the time, mainly CocoaPods. That was – people were not actually documenting really anything; they were just shooting code out to anyone. Well, when you got it, you have to dig around the source code to try and figure out what was going, like how it all came together.

So what I did was I built a system that would automatically document all of your library code and then put it up on the internet for you, thereby forcing everybody to have to accept that because there are writings – it’s going to be documented publicly.

The system actually got integrated into the CocoaPods website but it’s a lot of the foundational systems that give us a lot of tools to be able to do things like rates, whatever makes it a good library or not and all those came from this one core concept of finding out what it is so that you could generate documentation for people source code.

**ANDREW:** Do you consider CocoaDocs sort of – I know it’s integrated with CocoaPods’ website stuff but do you consider it as a separate thing from CocoaPods?

**ORTA:** I think originally, I definitely did. Originally, I called it System Project CocoaPods, but now it’s so [inaudible] with the way most people browse and explore pods that realistically, [inaudible] it as a separate project isn’t a very good idea. So a lot of the core development is on CocoaPods, also contributing to CocoaDocs now and other major [inaudible] are running that it’s pretty fail-safe.

Talk about – of all the infrastructure that we’ve built around CocoaPods, CocoaDocs is the most difficult to maintain because it’s a [inaudible] Mac service that has to always have the latest versions of Xcode. In fact, it has every version of Xcode. All these things like security holes and hosting a Macmini on the internet is not a particularly good idea in general anyway because it’s pretty unstable.

So yeah, we have to consider it on CocoaPods, specifically so that it’s not just me doing it after three years trying to make something used by hundreds of thousands of people.

**JAIM:** Yeah, that would be a little bit [inaudible]. You need multiple versions of Xcode. So Xcode actually generate the documentation and you’re throwing it up on the website?

**ORTA:** A lot of these things can be [inaudible] well, it depends. But frankly, if it is an Objective-C source code – if it’s a majority Objective-C source code – then it’s actually – all the documentation is generated by regular expressions on Objective-C [inaudible] and files, but because of the complexity of Swift and because of the tooling, things like source kit, it was not possible to actually have not Xcode, but LLVM to generate all the documentation tokens if you will.

So there’s a project called jazzy which pulls out all these documentation tokens that converts them into a documentation format in HTML. It’s very similar to how Apple stretches that documentation. So at this point, CocoaPods has to have as many versions of Xcode as possible, like a simple Swift 1 library, multiple [inaudible] libraries. I’ll [inaudible] things because they’re all [inaudible] with Xcode, not singularly as a pocket tool chain.

Right now, if you shipped a CocoaPods that was Swift-free – I still haven’t put Xcode [inaudible] yet so it won’t actually be able to document it yet because there’s no source code [inaudible] for it that jazzy could network with. I have to make every single version of Xcode ideally, at least every single version. Every major version that ships [inaudible] breaking version of Swift if you get what I mean.

**ANDREW:** I was just about to ask you about jazzy because I know you were using appledoc which you got before jazzy existed. Do you switch over now to just using jazzy?

**ORTA:** I feel like we’re close. I keep pretty close eyes on jazzy. I have not contributed too much myself – with CocoaDocs, we need blah, blah, blah and now we get everything running, but I think very soon, we’ll be able to just switch all documentation to jazzy.

Some of it is kind of good, kind of bad because jazzy has to compile documentation. It takes significantly longer than appledoc does.

Last time I tried to run all documentation for every single version of every single pod which I think is roughly 100,000 individual versions so that’s documenting 100,000 pods [inaudible]. It took for us a month just running on a machine in my office. So moving them all to jazzy may take two or three months roughly I guess, [inaudible] estimate. When I do make that decision, I have to get some infrastructure ready to continue a job for that one.

**JAIM:** You stay in your office and never ever stop to restart it? [Crosstalk]

**ORTA:** Come back and do it. Yeah. That’s how you [inaudible] jobs like that. Otherwise, that’s just like [inaudible] use host by Mac – oh no, Macminicolo. That should be used [inaudible] now. That’s really good. The [inaudible] like our main CocoaDoc server but then yeah, I just got one on my desk that I just used; run a few [inaudible] jobs every time. A new Swift comes out, I know which parts are needed. They [inaudible] that I’ll just jam it through on that rather than trying to do it on the big one [inaudible]. Yeah, Macmini [inaudible].

**LAYNE:** Yeah, another shout-out to Macminicolo. We used them for our CI server.

**ORTA:** Yeah. They do a really good job. I’ve had zero problems since I migrated to that. I’m pretty sure there’ll be times [inaudible] because of my code.

**LAYNE:** So you said that CocoaPods and CocoaDocs are pretty much married together now but is there any other way to get your code or library documented with CocoaDocs?

**ORTA:** No.

**LAYNE:** There used to be a way but you don’t support it anymore? [Chuckles]

**ORTA:** It’s just that slowly and slowly, the amount of tools necessary to run CocoaDocs has become non-trivial. So you need all these different pieces like any type – the most recent version of [inaudible] makes sure that CocoaDocs has [inaudible] checking abilities working. There’s a bunch of other things that you need to install by homebrew. So for other people to use CocoaDocs locally, it doesn’t make too much sense when you can just say, “Here’s this one [inaudible] and you can run it in jazzy.” Then you can build something similar but not [inaudible] the extra network that you have from CocoaDocs but you can host it yourself on your GitHub pages for example.

**JAIM:** So how does that work? You’ve got a private CocoaPods repository – how would you set up CocoaDocs or can you?

**ORTA:** You can. This one is complicated because it must be [inaudible] so you need an internal Macmini that would be up on Mac that will need to receive webhooks from your [inaudible] repo. So you probably expect [inaudible] to be [inaudible] and the webhook to a CocoaDocs server that would trigger builds that internally we send all to XFree. So it would trigger a build of [inaudible] from jazzy or [inaudible] on appledoc depending on what you’ve got [inaudible] installs of webhooks-assisted library or not, then they would go to XFree.

So I guess if you’ve set your access rights correctly honestly, then it would just go and be private to [inaudible] with those access rights to the [inaudible] that you send these things to.

So it’s relatively obvious that I’ve only have one other person really trying to edit the [inaudible] version of CocoaDocs running. I still feel like that’s something that somebody somewhere is going to care enough to build but they may be able to build a simpler version of CocoaDocs than actually just run their own things.

I don’t know how the people are going to be interested in quality metrics and things like that. CocoaDocs gives you an internal on their internal stuff. If I could set up from one of these [inaudible] things, I bet that would be really easy. I would like a [inaudible] to learn how to do that. CocoaDocs might be complacent to do it than I think.

**JAIM:** So you talked about the quality metrics. What metrics do you have?

**ORTA:** I don’t know all of them by heart but some of them are relatively simple just like – does this [inaudible] have a Read Me that is relatively complex, that has images? At least they say that this is probably a good library. Is there’s a change log? What are the average lines of code per class of the file? Does it have tests? Do this [inaudible]? Does it support Swift package manager?

[Inaudible] documentation, we check to see the overall structure of documentation and tracking the [inaudible] of how well it was documented the public API is. And all these individual scores that go towards a thing that we call a quality index which tries to estimate whether this is a good library or not by looking at the code we’ve got in front of us.

**ANDREW:** One thing I think you do is you actually publish the criteria for this and I think that turns out to be pretty valuable, pretty good thing to do. Because I know, as a library author, I put a library up, I see the quality index. I have done this and I’ve seen it. Now that’s a little low and thought I can get that up so I go with your metrics and then – so you do the work that’s needed to get a better score and I think it actually encourages people to do the – and not just arbitrary fake things, right – they’re having good documentation and having unit tests. So that, I think, is a cool thing you’re doing.

**ORTA:** Thanks. Partner that with the – I spent quite a lot of time on [inaudible], trying to make it so it’s not negative. All of these QI’s, apart for one, are effective ways of saying your project is good, but if you do this then it will be added to the community. The only one that does it probably is the GPL but, say, if you’ve got the GPL, that’s [inaudible] and we actually subtract some points because there’s very complicated rules around App Stores and GPL code. We’re trying to discourage that.

**JAIM:** Do you have pitchforks – people with pitchforks, stakes outside your office for this? [Chuckles]

**ORTA:** Shocking! I know. Before, it’s a little bit questionable but I’ve come to the [inaudible] now again, it’s like Objective-C++ that takes up points off those libraries [inaudible] tons of that in there.

Oh, we give you points if you’re using Swift; [inaudible] but those are just – most of those Objective-C are Swift founders and suddenly they introduced another third language that is known to be more complex and takes a lot to compile. Maybe you should only be using that if you’re very sure about it.

**JAIM:** I felt [inaudible] choose to use Objective-C++. It’s more of a “we have to” [inaudible] we’re wrapping. Or maybe there are – I don’t know.

**ANDREW:** There are definitely people who have used Objective-C++ because they like some of the C++ 11– specifically C++ 11 features.

**ORTA:** Yeah, I agree. There’s definitely good reasons for it, too, but as a community in general, we don’t do it. We had the ability to for years. My University project seven years ago was built in Objective-C++ and it worked but I wouldn’t want to shove it to people anymore. [Chuckles]

**ANDREW:** I think you’ve made the right call. Regarding what Jaim said, people like [inaudible] – that kind of thing.

**JAIM:** Yeah.

**ANDREW:** It’s basically like [inaudible] for Objective-C and other things.

I’m not a C++ programmer. I’m happy I’m not a C++ programmer.

**ORTA:** Me neither. I’ve been spending all day in JavaScript. [Inaudible] crazy.

**ANDREW:** You know I don’t actually really use CocoaPods [inaudible]. Yeah well, that’s not meant as value judgement; I just don’t. But I use CocoaDocs a lot. I love CocoaDocs and in fact, the thing I use it for the most is to read documentation for my own libraries. One of the ways I do that is through Dash. Dash has built-in support for documentations on CocoaDocs.

**ORTA:** Yeah.

**ANDREW:** I guess where I’m going with this discussion is I think you guys on the CocoaPods team said that you would essentially be happy if the Swift package manager eventually got to the point where CocoaPods was not really such a necessary thing anymore.

**ORTA:** Yeah.

**ANDREW:** After all, you were filling a gap that some might say Apple should have already filled. So what I’m saying is I hope CocoaDocs lives on even if CocoaPods eventually, years from now, is not such an important thing anymore. Because I really do think CocoaDocs fills up a separate and really valuable [inaudible].

**ORTA:** That’s a really good point. So far to me recently, it’s not too much work from where I am. Currently, it actually starts up on any Swift package. So I did come up with a system that would allow people to do that so it would use the same webhooks system. It would be – you can’t have an automatic centralized system for doing it anymore but we would be able to handle webhooks from tags, new tags on libraries that then could automatically pull it in from CocoaDocs [inaudible] could generate.

It’s definitely feasible. I could pull it off in maybe a day or two if I’ve got the Swift package manager passing [inaudible] going right for jazzy.

**ANDREW:** I hope you do that. Of course, the Swift package manager’s still not ready for use.

**ORTA:** Useable.

**ANDREW:** Yeah.

**ORTA:** But hopefully this time next year, it will be and Xcode and I will be like, “Finally, package management spawn!” And by that point, we’ll probably be all in a pretty good position to be prepared for that, too.

**LAYNE:** So when did you start CocoaDocs? Was it a long time ago? I don’t really know the origins of when it started.

**ORTA:** I think it was 2011. Yeah, it feels like about that kind of time period. I just started making the – CocoaPods needed some design work so I wanted a bigger [inaudible] for the team in order to figure out where I could do some damage so I felt the documentation would be a good place to start. I could experiment with the design and see what people thought through that.

I remember just hacking embeds night after night, having my laptop run the documentation of the [inaudible] to see what AFNetworking looked like in the next morning. It was fun.

**LAYNE:** Yeah, that’s super cool. And can you think of a time or a moment where you lashed on to it and thought this isn’t going to be a huge thing?

**ORTA:** Yeah. It was when AFNetworking changed all their documentation URLs to switch to CocoaDocs. And I just sat there and I thought, okay, this means I have to take it seriously. So I have to write some tests for this; I had to start turning it into get into a software project rather than a [inaudible] – a quick hack in – hacked together an idea.

I was also – I’m still paying for CocoaDocs myself personally. CocoaDocs, they [inaudible] free stuff so all the hosted documentation and [inaudible] we generated. They cost me a lot of money – \$25,000 a month which I think it’s really cheap for such an essential infrastructure.

**LAYNE:** Yeah, that’s pretty awesome actually.

**ORTA:** Yeah. So that’s actually how we’ve been monitoring [inaudible] CocoaDocs in general. How much did it cost me a month for my extra [inaudible]? It’s never gone critically bad if you don’t [inaudible].

**LAYNE:** Did you ever have any scaling challenges as it grew? I know it’s statically generated content but were there any times when there are some scaling issues?

**ORTA:** Yeah, definitely. It was the introduction of jazzy. Everytime a major Swift version comes out, then we get a ton of requests in the form of – lots of the new pods for the new Swift versions that once the people have just done it the same time, shipped all at the same time. Suddenly, we have tons and tons of Xcode concurrent [inaudible] going on. That’s usually when it gets hard for us.

Sometimes, I think it’s Amazon. They always ship somewhere between 15 to 20 pods at the exact same time. So you could just see the [inaudible] turned on effectively on the machine as it slows down because iOS got another notification that something’s off.

The problem’s not necessarily with the amount of pods. The smaller [inaudible] on the [inaudible] that have generation, documentation. Because Swift libraries can take quite a long time to generate through jazzy, especially if you’re talking multiple levels. So say Moya, the networking library, [inaudible] RxSwift. They’re target watch, they’re target OS X, iOS, tvOS and each one of those targets has to be generated separately with – get the documentation [inaudible], consolidate [inaudible].

You could be compiling the same library four times before you can even start to do any documentation. It could take a long time.

**LAYNE:** That’s pretty great. I know most of our guys, they look at graphs or Git alerts, but you, you listen to the fan and you know – you know when it’s working hard. [Chuckles]

**JAIM:** It’s getting warm in here.

**LAYNE:** You’re just so close to those servers that you just know.

**ORTA:** Yeah. WiFi’s pretty reliable in my office. It’s kind of useful to have this stuff going.

**JAIM:** Is this a home office or did you –? [Crosstalk]

**ORTA:** No.

**JAIM:** Employer?

**ORTA:** Employer office. We have a [crosstalk] – yeah. They just let me do whatever I want generally. We stay [inaudible] by the office for some of these projects. [Inaudible] is a lot of development [inaudible].

**ANDREW:** That was actually my question. I know you work for Artsy as your regular job and it seems like you do and contribute to a lot of open source development. And I was just wondering how that works with them, if they sponsor it or you work on it during work time, or if it’s – this is all you do as a programmer?

**ORTA:** It’s a little bit of – I’ve been with Artsy for five years and we’re become – we’ve come from being tiny to being big. During that, I have a [inaudible] a lot of political power to get the freedom to work on.

I’ve been working on a project called danger for the last few days to try it, polish up this [inaudible] – maybe it’s lasted me nine months in my spare time.

The company generally knows the stuff I’m working on. It helps the company because it’s usually very pragmatic. CocoaPods obviously helps us get to the consumers. Danger helps us because we use that to [inaudible] up. It’s a quick command line tool that makes it easy to run the CI rules like you should have a change log entry or you could include the labels on [inaudible].

So generally, the tools to [inaudible] it is you should do what you need to do because you’re in the position to know the most amount of what you can do to make the most impact. For me, a lot of the times that is contributing to open source to build my tools better which I’ve been enjoying because I’m getting [inaudible] back to these actual editors and things like that and others to build that system.

**ANDREW:** Good. That’s a good spot to find yourself. I think as an engineer, if you want to be able to work on open source stuff and stuff that’s outside of the direct things that your company’s doing – I’d love to get you back on the show to talk about danger.

**ORTA:** Yeah, definitely. It is a fascinating [inaudible] so yeah, it’s a good call.

**JAIM:** So you said you’re working with React Native in developing apps?

**ORTA:** Yeah. I think [inaudible] – so we’ve got a really big iOS app called eigen which is one of the big things that we show off as being this big open source app. Slowly and slowly, it has taken more and more developer time to build features.

So we had a project to try react Native. It’s a little bit complex because [inaudible] understand why we wanted to use React Native. You actually have to [inaudible] two other types of technology which I’ll just skip over for this moment, but effectively it’s – we can make these app networking request that we want, [inaudible] servers as well as have – no need to use models which makes a really interesting type of technology. But as a developer, it’s a really [inaudible] to build.

I was an Objective-C developer for about ten, fourteen years. And a Swift kind of technical – a lot of the structure around the data types, coming back to JavaScript, it’s crazy because you’ll just do anything for anything because nothing is anything. Everything is nothing. It’s typeless sometimes but sometimes it is.

**LAYNE:** I think you need to make a t-shirt that says “JavaScript – nothing is everything”. [Chuckles]

**ORTA:** Yeah. I think it’s a fascinating program [inaudible]. I find it crazy how [inaudible] is in the sense that it’s brilliant but so many people have gotten behind this one thing that does – you can get better systems and run JavaScript. And for teaching people, it means that you can teach them one thing and they can use it everywhere.

**LAYNE:** So I haven’t used React Native for a while – this is totally off-topic, but I tried it out two years ago or whatever when it came out and I was like, “Ugh, this has a long way to go. I’m going to just shelve it for now.” But your thoughts at this moment, much better?

**ORTA:** Yeah, probably. I’m going to – I’ll [inaudible] probably that one. I’m currently doing quite a bit of – I spent – I gave myself a two day hackathon right now for hoarding all of our React Natives. That’s roughly three engineers for three months and more than six months to Android. I’ve got an almost high [inaudible] and must stand two days.

**LAYNE:** Amazing.

**ORTA:** Yeah, exactly. The Android stuff is a good [inaudible] but that’s just not something you could do anywhere else. I feel like I understand the code base; I feel like I have – I understand the stuff that’s going on even though I don’t understand Android too much yet. So that’s a big, big plus for my perspective but it’s definitely edge cases and maybe [inaudible] cases. Definitely problems, but if you want to work on [inaudible] abstractions, sometimes you just have to go down a few levels and try and fix some of these things.

**LAYNE:** Yeah, that’s super cool because if you were to rewrite three months of three engineers’ work on Android like it would take six engineers six months or something, that’s pretty amazing. In a couple of days, you can see great results. That’s awesome.

**ORTA:** Yeah. I was [inaudible] a request. This is probably going to make me the Android lead at this point fortunately.

**LAYNE:** Two days of training and you’re ready. [Chuckles] Is there any way we can now bridge React Native and CocoaDocs together? [Crosstalk] Do they have anything in common?

**ANDREW:** Well yeah, this [inaudible] is not a bridge but yeah, CocoaDocs is of course focused or is only for iOS – for Apple platforms – libraries. I guess my question is two parts – is CocoaDocs similar to projects that are available on other platforms in the same way that CocoaPods, the package manager’s [inaudible] for almost every big development platform. Are there analogues to CocoaDocs in other platforms? Also, with Swift going cross-platform, I wonder if CocoaDocs maybe has an opportunity or you have a plan for that to expand the Swift documentation platform instead of Apple platforms – library?

**ORTA:** I think that was a really interesting question. The first one is yes. In general, most languages – I mean, I spend a lot of time with Ruby and so I was influenced by something called Ruby-Doc which has the exact same premise but also [inaudible] you could set a GitHub address instead of just a gem or just a pod if you will.

Realistically, I sometimes think that iOS love to leave the gap for someone else to fill like the Swift package – I’m sorry, the Swift version of CocoaDocs. Now it’s a problem I’ve been working on for three years and maybe [inaudible] a fresh perspective, you could build it better, faster and do it like – here’s a definitive example of what a Swift server looks like. Especially pretty soon, jazzy is going to be working on Linux and so the thing that [inaudible] me to use, a Macmini on the server, is gone away. Suddenly, you could actually put a Heroku [inaudible] of – that just does all the documentation.

Someone else could probably do it faster, simpler and it could be an example of how you can build great things in Swift.

**ANDREW:** That’s a cool idea and I think that’s actually a really good attitude on your part. You also mentioned – of course, there are opportunities on a huge scale for this but you mentioned that CocoaDocs is your first big open source project that you did and it certainly gave you [inaudible]. I know you because I know how much you contribute to the open source.

It would be cool if somebody came along and made Swift Doc their contribution.

**ORTA:** Yeah, I think so. And if they do, they should get in contact because I will do everything I can to help.

**ANDREW:** You mentioned that you still pay for the hosting for CocoaDocs? It surprises me; it makes me feel a little bad [chuckles] like I should send you some money because I use it and I’m sure that’s true of a lot of other people.

Is there some plan? Why are you still paying for it? Why not come up with a way for it to be sustained by the community?

**ORTA:** I think money in open source is a very, very complicated topic. But for me in general – I headed [inaudible] at a venture capital funded company that let’s people [inaudible] do interesting things and also happens to pay you very well.

The idea of losing $25,000 to $30,000 a month is something that I genuinely believe in. I have subscriptions to [inaudible]; I must cost about that much that I use significantly less than I use CocoaDocs.

I think it’s totally worth it for me still to just pay for it all. I don’t have to try and persuade a company to sponsor it for an X amount of years or whatever; I do work with a company called Button here in New York and they will pretty often pay for the Macmini hosting which keeps the service ticking. But it’s like a lot of the CocoaPods and CocoaDocs has free infrastructure. I just pay it myself because it’s not that expensive enough and it’s a lot simpler if it’s just me.

It does have that direct [inaudible]. If I get hit by a bus, then someone has to try and find a way to make up. I have a [inaudible] for that, too.

**ANDREW:** Well don’t get hit by a bus; that’s [chuckles], right?

**ORTA:** My fiancé tells me “do not die” all the time so I’m not allowed to die.

**ANDREW:** My wife tells me the same thing. [Chuckles]

**ORTA:** See, we have that problem with CocoaPods a lot, too. These very big companies that use CocoaPods that are very interested in making sure that it continues to exist. We don’t potentially need any more money [inaudible] infrastructure costs way under. It probably costs us about two or three hundred dollars for the entire thing. Maybe per month, maybe less – it depends.

I don’t see how much [inaudible] would cost us because they have a credit card that automatically just gets it paid because they sponsor it. And when you contrast that with dependency managers which cost it tens of thousands range to npm which will cost in the hundreds to maybe millions per month. CocoaPods does it all very, very cheaply so we can do it with very small amounts of our own personal money.

Just to [inaudible], I think that keeps us highly focused on doing small things; not exactly small things but only applying the infrastructure when it’s very necessary. I’m trying to use our resources as best as we can.

**ANDREW:** I’m not sure if I have any more questions. I really want to talk to you about danger. [Chuckles] I saw that you released it.

**ORTA:** Yeah.

**ANDREW:** I don’t know – yesterday or the day before or something like that. But it’s – we don’t have enough time [inaudible] so I definitely want to get you back.

**ORTA:** Sure.

**LAYNE:** Hold on, I haven’t heard of this. Can you give a quick summary – danger?

**JAIM:** Coming soon. [Chuckles]

**ORTA:** Okay, so the way I describe it is if it stops saying “you forgot to get me a pull request” – so for those that aren’t [inaudible] specifically to give you some hard examples.

In an iOS app, we always want to make sure that when a pull request comes in and there’s app changes that you have an [inaudible] entry for it. We want to make sure that the documentation has good spelling. We want to make sure that you’re not introducing code that is hard to [inaudible] using in Swift.

So we wanted to apply our new [inaudible] to our team, but the problem was that we didn’t have a way to [inaudible] that because we can’t happen to remember. I sent them [inaudible] in every single code view session that they needed to do this.

So we built a system called danger that allows you to generate your own rules around making sure that there’s a message in the pull request, and it feeds you a bunch of data like pull request title, the Git [inaudible]. How many lines of codes have changed? What files have been modified? How did [inaudible] it? What’s the GitHub offer? You can use all these different basic information to generate your own rules about [inaudible] or if something passes, fails or needs a message back.

For example, in our blog, when you make a new blog post on the Artsy blog, it’ll do a full spell check and it’ll also look for command [inaudible] errors and it’ll just tell you; [inaudible] in the pull request. Those things – fire in plugins to danger.

**JAIM:** Awesome. That’s very cool because most teams of a certain size realize the importance of these things. You’re having good quality code and documenting, but no one wants to be that person who’s constantly reminding people on the pull requests which is not a fun thing to do. So it’s cool to have something that’s automated.

**ORTA:** Yeah. One of my colleagues specifically said that one of the best things about danger is that it’s automated. In [inaudible], you’re putting those things in because you don’t have to be the person that’s always “ugh, change log entry” and then you have to put new [inaudible] fixing it. You get feedback much faster that way, too.

**ANDREW:** Very cool. To be continued. [Chuckles]

**ORTA:** Nice. It’s a good collaboration with Felix Krause, too, the guy who makes Fastlane. Been working with him on it for quite a while.

**ANDREW:** Oh I didn’t realize that. Well I sort of realized that because I think I saw his tweet about it.

I don’t know how he does everything he does.

**ORTA:** Yeah, dude is fast. So I was suggesting things that once you start building the tools for yourself, it becomes significantly easier to build the next tool because you just take it out of the shell for the last month.

A lot of Felix’s fame just came out of “I started with something then I added it later and then” – oh wait. So there’s a problem with this domain that I can reuse some of my stuff. So suddenly, he asks me to fix something that has been a problem for a very long time because he just happens to already have the core infrastructure to get ready to do it with the next one.

I think that’s really nice. I think he’s done a really good job with Fastlane. Now that Twitter is running it, he now has a full team to work on it.

**ANDREW:** Yeah, it’s pretty impressive. It gets me – well, not that I don’t have plenty of them but a person to look at and think, “Well, he’s way better than I am so I have something to shoot for.” [Chuckles]

**ORTA:** You could be the next Felix Krause!

**ANDREW:** Nah, I don’t know. I don’t have that much energy. [Crosstalk]

**ORTA:** Yeah, it’s the energy. It’s persistence, too. He responds very quickly and makes changes very quickly and that’s what got Fastlane to become – now it’s like the thing for doing it, like code signing for deployment. There’s a hub on [inaudible].

**LAYNE:** Yeah, the ease of use, he figured out. There’s not a lot of UI obviously but just the experience of it is amazing.

**ORTA:** Yeah. I think it’s fun, too, it’s full of emoji, full of colors. There’s obvious care and attention that’s been put into everything, from the Read Me’s to the user interface that it really does shine well. Because it’s very easy to make a command line interface that is very smart, but to make something that has information hierarchies and things like that, it’s just not that common.

**LAYNE:** Yup. Agreed.

**JAIM:** Very cool. Okay, well let’s go to the picks. Andrew, what do you have for us?

**ANDREW:** I’ve just got one pick today and my pick is the Smart Keyboard which – I know it’s not news having been out now for nine months or something. But I bought an iPad Pro a little few months ago and I did not get a Smart Keyboard with [inaudible]. That’s not what I us [inaudible]. And then I decided to kind of [inaudible] to get one three or four weeks ago and it has completely changed my experience with the iPad. So I am using my iPad for all kinds of stuff.

I did not use it before and that means I’m actually just using it a lot more than use to use it. It has, in fact, replaced my laptop for a lot of stuff.

I started a new job a month ago and often, a lot of what I’m doing in the new job is taking notes and on Slack and on Twitter and enter emails and typing heavy stuff – it’s also stuff that the iPad does really well.

So Smart Keyboard is a worthy addition to your iPad Pro setup so that’s my pick.

**JAIM:** Awesome. Layne?

**LAYNE:** My pick today is, I got some new headphones on prime day – I remember that one – it was two weeks ago. And I’ve tried tons of over-the-ear headphones and they’ve never really worked for me and I don’t like noise-cancelling because it gives me a headache. However, they have these – they’re called Bose SoundTrue Around-Ear Headphones II – that’s the full technical name and they are amazing. They’re totally life-changing for me because I can use them for hours and hours. It doesn’t matter me and it’s like this zen workspace of excellent music, distraction-free. Totally would recommend.

**ORTA:** Cool.

**JAIM:** Very nice. So I’ve got one pick. I’m going to pick curlbuilder.com. So if you’re working with client stuff or you’re [inaudible] working on iOS, a lot of times we’re testing an API, making sure that this stuff is going correctly so we want to [inaudible] our posts, our Gits, reports and stuff like that. And if you’re using Postman, things can get a little flaky sometimes based on some caching, just how it’s done.

The golden standard for doing a [inaudible] request is curl and I can never remember any of the curl flags. I can’t – I [inaudible] somewhere and I copy and paste them. But with CurlBuilder, the website – curlbuilder.com – you can go to it and you can set the HTTP method, URL, JSON content so it will generate a curl command line for you. It’ll help you out so you can do your tests for your APIs and for your API team to fix their stuff and have proof. That’s my pick.

**LAYNE:** I am bookmarking that immediately. Thank you.

**JAIM:** Orta, what do you have for us?

**ORTA:** I think my pick is some old technology. It’s a thing called injectionforxcode. It’s a tool that – it’s a plugin that was created for Xcode five years ago and is still relevant now that allows you to inject Swift and Objective-C at runtime into a running application.

Last time, I was working in Objective-C and Swift projects, I was starting to work on building that into my tests. I think this is a really useful infrastructure for anyone building iOS apps. If you’re not willing to move to React Native to get all of that for free then injectionforxcode maybe a way to speed up your development process.

**JAIM:** Very cool. So that’s all we have for today. Orta, thanks for coming on the show. We learned a ton.

**ORTA:** Thanks!

**JAIM:** We will look forward to future episodes talking about danger.

**ORTA:** Awesome. It’s a pleasure.

**LAYNE:** Thank you!

**ANDREW:** Thanks Orta!

**JAIM:** Bye everyone.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
