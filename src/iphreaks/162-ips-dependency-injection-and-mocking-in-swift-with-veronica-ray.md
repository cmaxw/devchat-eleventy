---
layout: layouts/post.njk
title: >
  162 iPS Dependency Injection and Mocking in Swift with Veronica Ray
date: 2016-07-21 07:00:45
episode_number: 162
duration: 27:33
audio_url: https://media.devchat.tv/iphreaks/iPS162DependencyInjectionandMockinginSwift.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:13 - Veronica Ray Introduction

- [Twitter](https://twitter.com/nerdonica)
- [Medium.com: Veronica](https://medium.com/@nerdonica)
- [LinkedIn](https://www.linkedin.com/)
  01:47 - [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)02:41 - Decoupling Code03:39 - Local Reasoning; Testing04:45 - Mocking in SwiftDependency Injection (Cont’d)
- [OCMock](http://ocmock.org/)
  15:36 - Well-done Mocks
- Value Types
  - [What's New in Foundation for Swift](https://developer.apple.com/videos/play/wwdc2016/207/)
  - [Protocol and Value Oriented Programming in UIKit Apps](https://developer.apple.com/videos/play/wwdc2016/419/)
    18:03 - Resources
- [Veronica Ray: Real World Mocking in Swift](https://realm.io/news/tryswift-veronica-ray-real-world-mocking-swift/)
- [Mocks in Swift via Protocols](http://blog.eliperkins.me/mocks-in-swift-via-protocols)
- [Swift: The Only Modern Language without Mocking Frameworks](http://blog.pragmaticengineer.com/swift-the-only-modern-language-with-no-mocking-framework/)
- [Cleanse](https://github.com/square/Cleanse)
  &nbsp;Picks
- [slither.io](http://slither.io) (Caleb)
- [Sharp Five Software Category: TDD](https://sharpfivesoftware.com/category/tdd/) (Jaim)
- [HTC Vive](https://www.htcvive.com/us/) (Layne)
- [The Eye of Minds by James Dashner](https://www.amazon.com/dp/B00ALBR2MC/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) (Layne)
- [Sense](https://hello.is/) (Veronica)
- [Script Debugger 6](http://latenightsw.com) (Andrew)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**ANDREW:** Hey everybody and welcome to the iPhreaks Show, episode number 162. This week on our panel, we have Caleb Hicks.

**CALEB:** Hey, I’m here in Salt Lake City today.

**ANDREW:** Layne Moseley.

**LAYNE:** Hello there. I’m out in Utah.

**ANDREW:** And we have just been joined by Jaim Zuber.

**JAIM:** Hello! I’m [inaudible] most times so sorry.

**ANDREW:** It’s okay. We’re glad to have you. And I’m Andrew Madsen, also in Salt Lake City and we have a guest today. Her name is Veronica Ray. Veronica, would you like to introduce youself?

**VERONICA:** Yeah, sure thing. So I work on iOS at the video team at LinkedIn and I live in New York City.

**ANDREW:** Nice. The LinkedIn app is actually – is a pretty good app. Do you work on the LinkedIn app itself or are you doing other stuff on the video team?

C: So I’m doing a bit of both. I’m working on a new app that I can’t really talk about that’ll be launched soon and I’ve also been working on features in the main LinkedIn app that will be – we laid it to the new app.

**ANDREW:** Oh, cool. Well, we brought you on today to talk about dependency injection and mocking in Swift. This is something that I think you know more than any of us about. So maybe you could give us just a brief introduction of what dependency injection is and why mocks are an important part of that.

**VERONICA:** Yeah, sure thing. So the infamous definition of dependency injection I found was giving an object its instance variable. The idea is you don’t want an object creating everything it need to function, creating services, creating all these things; you just give the object what it needs when you initialize it and then it can make your objects more independent, easy to compose because you can – you’re just giving it what it needs so it can be used in more places and it decouples your code a lot.

**ANDREW:** So why is decoupling code important? I think we’ve all heard it’s important but why is it important?

**VERONICA:** For a couple of different reasons but I think the main one that comes to my head is just that it makes it easier to reason about your code. And there’s a WWDC video this year where they talked about local reasoning. So if – maybe you’re new to code base, maybe you’ve been looking at it for a while but at a particular class or whatever you’re working on in your code, it makes it easier to debug it or [inaudible] about it. You don’t have these bugs that happen and you’re like totally baffled by why this bug is happening because maybe some totally unrelated part of your code is affecting it. It’s definitely better for thinking about your code and it’s better for avoiding these really nasty bugs that could take so much time to debug.

**ANDREW:** Alright. So I like everything you just talked about, Veronica, particularly this local reasoning idea’s interesting to me because it means that when you’re reading a piece of code, you have – as I understand, it means you’re reading a piece of code, maybe it’s unfamiliar to you, maybe it’s new. You didn’t – you last worked on it a long time ago. [Crosstalk] But you’re not having to maintain so much mental state even just to figure out what this code is doing because you’re thinking about the code you’re looking at instead of all this other code that’s in a million other places. Does that sound about right?

**VERONICA:** Yeah, that’s definitely right.

**ANDREW:** It seems like this has some implications for testing as well.

**VERONICA:** Yeah, definitely. Testing isn’t the only great reason to do this but it ends up being one of the key reasons for doing this and what I’ve been really thinking about and focusing on. And in terms of a lot of the material for that, Real World Mocking talk at try! Swift in Tokyo was based on the work I did, going from basically no testing in this new app we’re working on to having a decent amount of testing that made us feel comfortable continuing the ship code.

**ANDREW:** So creating mocks in Objective-C was one thing but now creating it in – creating mocks in Swift is definitely a little more – it’s a different challenge. So how do you approach that and what are some best practices with mocking in Swift.

**VERONICA:** Yeah, so I started thinking about mocking in Swift just because when you write tests, it just comes up. I have a Java background so we have Mockito and I’ve used some of these mocking frameworks before so when I started writing tests, one of the main classes that came up was – I started thinking about mocking was [inaudible] or defaults. So you start writing tests where your setting up issues and defaults – maybe you’re making sure certain defaults are set and then you have to do a [inaudible] on.

And you see this code bloat where you have this code that you keep writing everywhere and you start thinking about how can I reduce this duplicated code? What are the implications if we change the real user defaults in this test? Does that matter? And you start thinking about how do I do tests? Some of the key things that I realized about writing good mocks is choosing well what gets mocked so writing a mock for something has upfront investment, it has maintenance cost. And you don’t have to write mocks for everything; you have to think about is not using the [inaudible] class going to really benefit your test? Maybe you worry about having slow test so you have a mock or NSURL session. Or maybe you’re worried about messing with the user’s data or you worry about sending [inaudible] notifications. I’ve thought through a lot of these different issues and for our own app, I came to the conclusion about what classes we should mock in and what classes we really shouldn’t write mocks for. That’s one of the bigger things.

When you go specifically for iOS, you start thinking about – you’re interacting with all these Apple framework classes – should you write mocks for them? So that’s a whole can of worms that I also thought about. [Chuckles]

**LAYNE:** So I have a good experience – well, I don’t want to say a good experience but I have an experience with this. Yesterday actually, I was testing a bit of code that you wrote a file to disk so that was pretty simple. But then I decided to upload that file to CloudKit. The moment I did that and I uploaded this code to the build server, all of a sudden, it crashed and it went crazy because there is no entitlements for CloudKit and honestly, I wouldn’t want that code when I’m testing to hit CloudKit. So I did not use dependency injection for this at all, instead, I added this nasty code to check and say, “Hey, am I testing? Then don’t do this.” I felt bad about that; I didn’t like it. [Chuckles] so I’m wondering, in that case, how would you describe changing this in using dependency injection to solve this problem.

**VERONICA:** Yeah, the way I think I had when I worked with NSNotificationCenter, it was kind of a long process of actually doing it and even though I didn’t end up using the NSNotificationCenter mock, I’m really glad I went through the process of – I’ve seen, how would you do this the right way or how would you avoid doing some nasty code. So what I would do is think about where CloudKit is used in your app. If you need a dependency injection, how many classes would need to have CloudKit passed in as a dependency? What I would do is try writing – if you’re writing a mock, I never really written mocks for CloudKit but for any kind of class you’re using, I would try writing a simple mock and making it as simple as possible because I’m sure whatever you could write for CloudKit would be – could be very complicated if you wanted it to match Apple’s APIs closely. But that’s not really the goal; the goal is to have your mock do for you what you need. So maybe all you want to do is check that this certain function call was made or that this instance variable change.

So what I would do is I would just think about what you don’t want to do; you don’t want to really upload this file for real and just make the simplest mock to help you avoid your problem. In you code base, use the mock instead of the real class and I think if you don’t already have any dependency injection in your app already, that might take some work but yeah, that’s my process and I’ve done this for NSNotificationCenter manager and its user defaults, the two main ones that I’ve done this process for.

**LAYNE:** Yeah, that makes a lot of sense. In fact, I think I recall reading something in one of your blog posts where you had a mock that just set a flag saying, yes, this function was actually called and I think – in my case at least, that would make quite a bit of sense.

**VERONICA:** Yeah, one of the pitfalls that I encountered when I made that my NSNofiticationCenter mock was that I tried to match it so closely with the real object that I was trying to basically – to have all these functions that were suddenly different and I was creating this mapping of observers and [inaudible] and values and getting all the types so I – it was not a positive experience. And someone on my team was like, “So what are you trying to do here? Are you trying to just exactly recreate NSNotificationCenter? Or are we just trying to see that we actually said – we called this function. We actually – we [inaudible] is or do we just want to avoid not sending real notifications? In that case, you can just have a seriously empty function.”

And I found when I talked to someone, he actually successfully did a mock NSNotificationCenter in their app. What they did was just they wanted to make sure the function was [inaudible] and for them, it wasn’t this painful experience where they were like, “I’ll never mocking NSNotificationCenter again.” They were like, “Oh yeah, this was useful; this was good.”

**JAIM:** That’s a good point. It speaks to separating the responsibilities and that’s one of the reasons we use the notification center is to break up the responsibilities in your code. So if you’re just checking for [inaudible] methods called, that’s all that that method should be doing. And we test the other side in a different test, in a different class so that’s a good approach is – I wouldn’t want to re-implement anything like NSUserDefaults or notifications. That sounds like a terrible headache.

**ANDREW:** Not only do you not want to reimplement; it seems to me like if you – you’re not actually – you’re not trying to test the thing you’re mocking either; you’re trying to test [inaudible] uses it. That depends on it so it doesn’t really make sense to implement all of the functionality that was there in the real thing anyway.

**VERONICA:** Yeah, that’s completely right. That’s one of the pitfalls of when people are having negative experiences with mocking, that’s just a bad thing to do. And another thing is it gets kind of dangerous and scary when you’re trying to make your mock exactly like the real thing if it is a type you don’t own. Because if you – if you’re mocking a class you wrote yourself, at least you know when you change that class. You’re doing the extra work to update the mock but there’s no surprises. Like when Apple changes their API suddenly and suddenly there’s a lot of surprises when your test don’t work anymore, the best approach is to really make your mock as simple as you need them to be. And don’t – yeah, you’re not testing the real thing.

**ANDREW:** You mentioned this in your talk at try! Swift but there’s a framework at Objective-C called OCMock. It’s pretty widely used for mocking in ObjectiveC and makes creating mocks somewhat easier from there. You just have to write everything yourself. You talked about how with – OCMock is basically not worth using in Swift even though you technically could. Why don’t you tell us a little bit about what it really takes to write your own mock in Swift and maybe some of the Swift-specific ways that you can really nicely write mocks?

**VERONICA:** Oh yeah. So the god news is that writing your own mocks isn’t a huge amount of work. One of the great things that we have at our disposal is protocols. So what I would consider a really good practice that people are really catching on to is creating a mock with protocols.

I had a user defaults protocol that had the key functions that I wanted to be part of my mock and then I would have my mock conformed to that protocol. So that has a lot of nice benefits because when you’re just conforming to a protocol, you don’t need to take in all the instance variable of the superclass; it can just make your mock – it just makes your mock a lot simpler.

**JAIM:** It’s a good approach for the framework types like if you want to do them, you can extract the protocol. You can actually create an extension on the class itself with Swift so you’re actually accessing the methods that you just find in your [inaudible] but you don’t need the entire thing so your class is dependent on a full version of UI application or whatever framework type things you’re going to need so it’s a solid approach.

One of the things that really changed with Swift testing and mocking – everyone did OCMock with Objective-C and doing the standard, old-way of doing things like in Java, the earliest way of creating mocks is just sub-classing a class and overwriting it which was pretty tedious with Objective-C so everyone will see is – they’ll see a mock because it was easy; a couple lines of code, you’re up and running versus creating a header file, creating implementation file, make sure everything lines up correctly, the header files line up.

With Swift, it became very easy to create a new class. Either you’re overwriting it or just creating a protocol so those type of things became very easy. Early on when they announced Swift, I was like, “How are we going to test this stuff? It’s a static language,” and I think Matt Thompson was one of the few who said, “Hey, it’s easy to create a – to overwrite a class. You can do it inside the class. It doesn’t include the names base.” Can you do it inside the method? I don’t remember but it’s trivial to create a class at this point so that’s the standard technique that I’ve seen that I’ve been using.

**ANDREW:** Maybe you could talk just a little bit about what really makes for – and we’ve covered some of this but what makes for well-done mocks? Part of the thing I’m looking at is for Swift stuff and you’ve – you talked in your try! Swift talk about value types versus reference types when you’re making mocks? That’s an interesting thing, too.

**VERONICA:** Yeah, and I think that’s super interesting with some of the changes and announcements made at WWDC because I feel like when I gave the talk, I definitely feel like a lot of people knew about value types versus reference types and people are saying if you use value types, you don’t have to write a mock for them because it’s just data in, data out. And I think – it can seem like a very daunting task to look in your code base and be like, “Okay, so how do I make these reference types value types?” And I think this has just been an on-going process for me whenever I see a reference type thinking like, could it be a value type? And lately thinking through that and talking to people about it.

But yeah, the great thing about value types is that yeah, you don’t have to write mocks for them. Though something that I have done if there’s – if you have a value type but you have some kind of complex setup code, you can maybe put that in a separate class to instantiate it and do the setup code so that you could use it easier.

One thing I was excited about was the new value types in Foundation. None of them really – or ones I would’ve written mocks for but I think that’s just such a great direction to go in and I’m just so excited that we have What’s New in Foundation for Swift was a session that was super great. Also, there was a session about protocols and value types. I forgot the name of it but I just think value types are like really – becoming a lot more popular and encouraged from Apple and I think that’s – and I love how Apple’s using testing examples in their sessions this year. If you’re really wanting to learn more about this, there’s definitely great resources.

**ANDREW:** We unfortunately have a short show today so we can’t talk to you as long as we would like to. But before we wrap up and – I know there’s a lot we didn’t cover but before we wrap up, is there anything you think that we really need to talk about that we have not talked about yet? And I – let me add, there’s something I think we should talk about which is what if somebody wants to learn a bunch more about this and start writing good tests for their Swift code and learn about how to write good mocks and do all that?

**VERONICA:** Yeah, definitely. Maybe they don’t want to go back and read – a lot of the resources are from Java, like a lot of the really – the classic resources that people point to or use Java examples which is fine but I would say, well, not to plug my own talk too much but my talk is probably one of the few resources out there that are Swift-specific. And I think that there’s also some really good articles out there if you want to. I’m going to have two blog posts that are really helpful. One is the mocks in Swift via protocols blog post by Eli Perkins. I think another key thing to understand is why don’t we have a mocking framework for Swift and why is it not likely given – Swift’s design that we’ll be have one in the future.

There’s a really great article called Swift: The Only Modern Language without Mocking Frameworks. So it’s really good to have some context and to understand as Swift developers and iOS developers, what is the pond that we’re in and how can we learn from other communities like Java but also operate within the constraints? And some of the great advantages we have like – for example, there’s a new dependency injection framework that square released last week called Cleanse and it makes use of Swift’s really great type system. So I think one thing, if I’m going to leave us with one thought, is it might seem like it’s this bad news that we don’t have an OCMock for Swift but there’s so much amazing innovation happening using the strength that Swift has. So I want us to continue to write tests, continue to think about how to do great test and take advantage of what Swift offers us.

**ANDREW:** Yeah, it’s fun – I think it’s actually fun and it’s an exciting and good time for us to re-evaluate some of the things that we’ve done in the past and come up with truly better and best ways to do things in Swift using nice things about Swift instead of trying to shoe horn everything into what we already did in Objective-C.

Well, I think this has actually been really interesting. It makes me want to learn more at something that I don’t already know a lot about and it would be nice to learn about it and hopefully improve my code with.

Should we get to picks?

**VERONICA:** Yeah!

**LAYNE:** I have a quick thought if you don’t mind.

**ANDREW:** Sure Layne!

**LAYNE:** You know, I haven’t done a lot of dependency injection with Apple platforms but I wrote a bunch of Node code a couple of years ago and it was strictly dependency injection. I have to say from experience there, it’s awesome and it makes testing a complete breeze and totally great. So any advancement so we can get in Swift and get people doing it overall will help everybody out.

**ANDREW:** There’s a lot to look forward to in other words. Okay, well let’s get to picks. Let’s see; Caleb, do you want to start us with your picks?

**CALEB:** Sure. My pick this week is the game that’s called slither.io. You can play it online; I’s also an iOS app and I’m sure on other platforms as well.

Some blog post came out earlier this week, mentioning that the developer of this app is making something like \$100,000 a day right now so it’s a very popular game, but basically you – for me it’s perfect for when I’m at home and just tired after a long day of work or whatever and I just want something to relax with. Kind of a mindless game and you play as a snake and you’re trying to get longer but there are other snakes that you are trying to avoid running into. So it’s kind of a massive multiplayer online snake game which is a lot of fun.

**ANDREW:** The fact that somebody is making \$100,000 a day from a game that kids play on their TI-83 calculators in high school twenty years ago kind of annoys me but I’m also proud of him. [Chuckles]

**CALEB:** It’s a lot of fun so check it out, slither.io or just slither on the App Store.

**ANDREW:** Thanks Caleb. Let’s see – Jaim, do you have some picks for us?

**JAIM:** Alright, I’m just going to go straight to the self-promotion for my picks. I did a couple of blog posts about property injection and [inaudible] and testing with Singletons that [inaudible] of creating stubs and mocks for classes. So this shows a technique for the Singletons which are hard to test if you use them the standard way but actually can be fairly easy if you do your own dependency injection magic. They both cover Swift so I’m just going to do a link to that.

**ANDREW:** Great. Layne, do you have some picks for us?

**LAYNE:** I do. I have two and they’re slightly related to each other. The first one is I got to try out the HTC Vive this week which is I think probably the best consumer virtual reality headset. And I have to say that I am extremely impressed and also very excited for what the future has to bring in virtual reality because it was totally awesome. Loved it.

The other thing is I’m reading a book right now called The Eye of Minds by James Dashner. It’s also in the virtual reality space. It depicts a future where we can – humans can get into a casket thing that hooks up little wires to you nervous system and then you go into a virtual world and it completely simulates reality because it’s literally giving you all the normal sensations that we have. Pairing that with seeing cool virtual reality, it’s just kind of a cool thing to see where we might be able to go with that kind of technology.

**ANDREW:** I haven’t got to try one of those yet but I know somebody that has one and I need to check it out, the Vive I mean.

**LAYNE:** If you can try one, you deserve to because it’s pretty cool. [Chuckles]

**ANDREW:** Veronica, do you have any picks for us?

**VERONICA:** Yeah! Sure do. So one of my favorite gadgets that I’ve been using for a while, it’s called Sense. It’s by a company named Hello. It’s on your nightstand and it’s able to sense the environment around you so the light, the sound, the humidity. And it also is paired with a sleep tracker that you just clip on to your pillow. I use it for the alarm feature; I’d say it’s one of the most joyful gadgets I have because the alarm, when it sounds, it makes this amazing musical noise and it lights up in all these bright colors, and to turn the alarm off to give it a nice little tap on the head. So I’ve been using it for a while and it’s given me good information about by sleep [inaudible] and help me make changes in my environment so that I can sleep better.

**ANDREW:** Cool. I’ve just got one pick today. My pick is a Mac app called Script Debugger. This is basically an IDE for AppleScript which seems like a strange pick but the developer of this just released version 6 today. He’s cut the price in half which is nice but if you do anything with AppleScript, whether it’s scripting apps which I actually do occasionally, or if you’re a developer – Mac developer that maintains an app that has an AppleScript dictionary which I do, this is just a really valuable tool. It has a built-in debugger and obviously that’s where the name comes from but really, it’s like a whole IDE for AppleScript. It supports AppleScript, Objective-C which means you could actually write complete Mac apps in AppleScript if you really want to using the Objective-C bridge. And partly, the reason why I’m picking it is because it just is fun for me to see a developer that’s putting so much love and attention to what is a really niche tool and just doing a great job with it so that’s my pick.

I think that’s everything. Thanks for coming on, Veronica. If people want to know more about you or find you, how can they do that?

**VERONICA:** I’m very active on Twitter. My Twitter is @nerdonica.

**ANDREW:** Okay.

**CALEB:** One of my favorite Twitter names I’ve ever seen.

**ANDREW:** So everybody go follow @nerdonica. Thanks for coming on everybody and see you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
