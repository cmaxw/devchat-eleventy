---
layout: layouts/post.njk
title: >
  156 iPS WWDC Wishes and Predictions
date: 2016-06-09 07:00:42
episode_number: 156
duration: 39:36
audio_url: http://media.devchat.tv/iphreaks/iPS156WWDC.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:22 - Hopes and Wishes

- [AltConf](http://altconf.com/)
- Instant Apps
  - [Google I/O 2016 Keynote](https://events.google.com/io2016/)
- Bots
  - [Amazon Echo](http://www.amazon.com/Amazon-Echo-Bluetooth-Speaker-with-WiFi-Alexa/dp/B00X4WHP5E)
- SiriSDK
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12), [Playgrounds](https://developer.apple.com/library/ios/recipes/Playground_Help/Chapters/AboutPlaygrounds.html) for iOS
  - [Pythonista](http://omz-software.com/pythonista/)
- Swift First Framework
  16:18 - iOS 10, Swift 3.0 19:43 - Wearables 21:53 - [Apple TV](http://www.apple.com/tv/) / [tvOS](https://developer.apple.com/tvos/)24:56 - The App Store 26:41 - [CloudKit](https://developer.apple.com/icloud/)28:46 - [Firebase](https://www.firebase.com/)&nbsp; Picks
- [Curry Up Now](http://www.curryupnow.com/) (Jaim)
- [Box Kitchen](https://www.facebook.com/boxkitchen.sf) (Jaim)
- [Southside Spirit House](http://www.southsidesf.com/) (Jaim)
- [Local Edition Bar: San Francisco](http://www.localeditionsf.com/) (Jaim)
- [Cathode](http://www.secretgeometry.com/apps/cathode/) (Andrew)
- [Woo](https://woo.io) (Andrew)

### Transcript

**JAIM:** I know that and you know that but the listeners don’t know that.

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus as thanks after the job. Go sign up at Hired.com/iphreaks]_**

**ANDREW:** Hey everybody and welcome to iPhreaks episode 156. This week on our panel, we have Jaim Zuber.

**JAIM:** Hello from Minneapolis.

**ANDREW:** And me, Andrew Madsen, we’re the only ones today. Chuck couldn’t make it so we’re going to talk a little bit about WWDC which, as we record this a couple of weeks away but should be shortly after the episode comes out. We talked about our wish list and predictions and just what we’re thinking in the lead up. So Jaim, WWDC is always an exciting time; kind of like Christmas for Apple developers. And if you’re like me and I think most developers, you’ve already been thinking about what you hope Apple will release or announce. Will you tell us a little bit about that?

**JAIM:** Definitely. It’s an exciting time and this is my third year. Without getting a ticket, I still go to San Francisco so I’ll be at AltConf. I’ll be speaking at AltConf which was just announced within the past week or so of recording, so that’ll be fun. I’ll be talking iOS, unit testing and Swift so that should be fun.

But we go to WWDC to see the people. We also go to see what is going to be announced. And one cool thing that I heard from Google I/O last week – Google I/O happened and I made a point to catch the Keynote just to see what’s going on. I didn’t listen to any of the sessions or anything like that but they were down to [inaudible] amphitheater which is kind of cool. I think I saw some [inaudible] then videos there. I’m not sure, so it’s a little weird to see a tech conference at [inaudible] amphitheater but it was cool.

So [inaudible] the keynote and one thing that I really liked that they demoed was instant apps. They did a demo by the buzz feed video team, the Android team. People I know, they’re at Buzzfeed. Most of Buzzfeed mobile is done in Minneapolis so I know the mobile developer there, mobile developers on Android and iOS pretty well.

They did a demonstration with the Buzzfeed video app [inaudible] tasty with all these crazy, unhealthy recipes that they [inaudible] out everyone. They just had a link on a text and it went to a link and you can download part of the app.

It wasn’t a complete download, it was just a little piece of that functionality and it’s something I didn’t expect. They kept pretty tight wraps on it; even the people I knew on the Android team didn’t say anything. But I think that’s really a game changers for how apps can be developed because I talked with a lot of companies that – they have all these cool functionality they want people to do but how many apps do you have on your phone? I don’t know where any of my apps are anymore. I have to do the search, the spotlight or whatever it is on iOS defining the app. I don’t need any more apps; I have too many – this is a way to deliver part of functionality without requiring people to do a full download so I think that’s really cool.

Look into instant apps. That’s something I really hope Apple gets to jump on because it can really open the doorways to a lot of new functionality that right now, people that [inaudible] building apps for.

**ANDREW:** So I heard about this and I thought it was interesting. The appeal was that it was instant and you don’t actually have to download anything. I’m curious to know how they make it work and then of course, my mind goes to how Apple could make this work. Essentially, you have to have part of your app be stand-alone. It needs to be a little [inaudible] without all the rest of the app running and presumably you want it to be light on resources or whatever. You can’t download a hundred megabytes and expect that to be instant.

**JAIM:** Obviously, you have to download something but we have better ability to split our apps into libraries even though it’s a framework, even though it’s still pretty painful in a lot of cases, at least on iOS. I think it’s better in the back world but you would need some loosely coupled version of your app that it gets downloads. So I don’t know the internals of how they do it but it’s cool to think about. Do you have any ideas on how they can do it?

**ANDREW:** Well, Apple already have this idea of app extensions and you can add an extension on what you do – image editing or do image effects in another app and that kind of thing. So I think there’s some sort of infrastructure there, having part of an app with app extensions, having part of an app run basically independently from the rest.

Google has not actually made this feature live yet; they just announced that it was coming out and so it would be interesting to see what developers have to do to make it work. But it seems to me like something along the lines of app extensions that we already have should enable this.

**JAIM:** Yeah. We have things like – today extensions which still rely on the app being installed but you could do smaller versions of this that just runs on a lighter SDK. You wouldn’t have the full UI kit necessarily but you have a smaller subset that you can do.

It’ll be interesting to find out if the parts that you download are actually separate apps or the same things that are integrated in the full app. Can you take a component and use it both places or is re-written? It’ll be interesting to find out or see how Apple handles it.

**ANDREW:** There’s a question in my mind that sometimes announcements from Apple and other companies in the same space coincide because they were both working on them at the same time. Maybe Apple’s already working on this concept and they’ll announce it. But if they were not already working on this, they hadn’t thought of it themselves, then they’re obviously not going to be able to respond to Google or have something to announce by WWDC so it’ll be next year. If they do announce it this year, it’s interesting to me because it’s not an idea I had at all. It’s not something I had thought of; it’s the fact that both companies would be working on it must mean that it’s attractive to – probably attractive to a fa9r number of people.

Along the lines of stuff Google and other companies are working on, it seems like there’s been a lot of attention lately on bots. I’ve heard a lot lately about Amazon’s Echo and Alexa and how that has support for third party integrations. I don’t have one myself but I’ve heard a lot of people say it works really well and in some cases, works better than Siri and I do wonder if Apple’s working along those lines. If nothing else, to open up Siri to third party developers.

**JAIM:** Yeah, that leads to my second wish list to WWDC which is the SiriSDK. I would like to have some integration with Siri and be able to open up apps to voice input. To your point, I think – yeah, I don’t have an Echo. I haven’t used it but from what I’m seeing is you can be in the same room trying to get Siri to work correctly ad your Echo in the other room may pick up the answer, pick up your text better than what Siri did. The other players are a little bit ahead as far as the voice recognition but even having Siri do something and be able to integrate to apps, that’s a really cool feature that can really open up new possibilities for development.

**ANDREW:** Yeah. Of course the- in the last day or two, there has been a rumor that Apple is going to announce a SiriSDK and also they’re going to announce something like the Amazon Echo, like a stand-alone device for – where you put it in your house and you can just talk to it and use Siri without your phone or whatever. We’ll see.

For me, my watch already works – I actually use Siri on my Apple watch fairly often to set myself – to set reminders for myself and to set timers and that sort of thing which I think is a big part of what people use those devices for. I guess with Echo, I guess you could shop on Amazon but I don’t feel a huge need to do that. Maybe I’ll change my mind after I try one.

**JAIM:** No, I think that’s a good point. Having a device in home seems like something that would pop out of Apple’s alley. I think that’s something they would do and that would be within something they would deliver so I think that’s a likely thing and then be a cool technology to play with.

**ANDREW:** I like the idea of Apple doing this more than Amazon or Google for the same reason that I like a lot of things Apple does but that is that I think with both Amazon and Google, they’re trying to get data. They’re trying to get your data and that’s how they really make their money. Well, I mean Amazon sell stuff that they’re better able to sell you stuff with a lot about what you want and Apple famously does not really try to get your dat. They just want to sell devices to you.

I have a feeling, whatever they do for Siri, for third party integration and also if they have an always-on device that’s in your house. I can trust it as privacy goes more.

So as an Apple fan, I’m a little more inclined to use their version of that than I am – Amazon’s or Google’s.

**JAIM:** Yeah, and if you already have Apple TV and iPhones, you’re going to have tighter integration, better access to apps, that sort of thing.

**ANDREW:** Yeah.

**JAIM:** So if you’re in the ecosystem, makes sense. This is the type of thing that Apple has traditionally done very well, user facing products where the other players stumble out of the gate a little bit.

**ANDREW:** Right. As far as my wish list goes, something that has been on my mind recently – I got one of the new-ish 9.7 inch iPad Pros and I really like it. It’s great. I upgraded from an iPad 3 which was a little bit of an odd duck in the iPad lineup and is really slow at this point, like too slow for it to be really pleasant to use. The iPad Pro being so fast and new has been really great. I’ve started using it a lot more than I use my previous iPad because of that and the Apple pencil’s really nice. I use it to take notes or whatever.

But the glaring omission on the iPad or on iOS is Xcode because that’s what I spend most of my time doing when I’m on – or using when I’m on my Mac and makes it so that I simply can’t replace my Mac even for –. I couldn’t really even just take my iPad pro instead of my laptop places because usually, I want to be able to write code. So I hope they do some Xcode for iOS.

I don’t imagine it’ll be a full-blown – my guess is if they do that, the first shot [inaudible] won’t be a full-blown replacement for Xcode but even just something like Swift playground on iOS could be really cool.

**JAIM:** Yeah definitely. That would be a cool thing to see just to be able to get more functionality on the iPad. That’s definitely outside of the original vision of what iPad would be. It’s Steve Job’s language but the competition is creating tablets small devices where you can actually do development as a computer. So I think it would make sense for Apple to move in that direction so I’d like to hack on my iPad.

**ANDREW:** To some degree, I agree. I think you’re talking about Steve Job’s trucks versus cars analogy where he was saying that most people don’t need a truck; they just need a car but then some people do construction or whatever and they really need a truck to haul things around. Even though cars are by far the more popular vehicle, trucks are never going to go away. He was saying Macs are like trucks. At least in the future, Macs would be like trucks and iOS devices would be like cars. I think that’s all fine and good but at the same time, if Apple says that they iPad is their vision for the future of personal computing, they obviously can’t leave development out of personal computing.

Even if they only did something like Swift playgrounds on iOS, that’s a huge thing because that means people who have a car or have an iOS device in the analogy can at least start playing around and learning how to program. Sure, maybe they need to upgrade to a truck at least for now; by truck, I mean Mac but I would love to see it. My little sister has an iPad and I think it would be great if she could start playing around with Swift.

Of course, there are apps out there like there’s a really good Python – I guess you call it an IDE called Pythonista for iOS and there are other apps to let you write code on iOS. I would love to see Apply do something there.

**JAIM:** Yeah, I agree and it doesn’t have to be tablet versus the laptop. We’ve got iPad Air which is pretty light lap type device but Microsoft’s Bridge builds two worlds with the Surface which works [inaudible] well in both things. You can have the iPad type functionality, tapping functionality but it also drills down into real [inaudible] word processors, spreadsheets – things the people do for real world and Xcode and Visual Studio that would fit in well with that.

It’s possible that Apple could move in that direction because I think Surface has been a success. People like the device and they use it.

**ANDREW:** Yeah, and I think part of iOS, being a new vision for computing is not just about the things people do on it; it’s about the way the OS works, obviously touch being the primary input method is a big part of that but even just removing some of the old, confusing complicated stuff from users’ view like the file system or whatever is part of that. I actually think there is room for Apple to provide development tools to maintain that vision; maybe not to the same degree that the average user sees when using iOS device.

For example, you know very well you might want a debugger console or something like that. But it’s exciting to me; the idea of new development tools that fit in with some of these new ideas about the way personal computing should work is exciting to me.

**JAIM:** Yeah, definitely.

**ANDREW:** I do a lot of Mac development and there’s been a lot of talk in the last – I don’t know really; I guess a year or two about a modern version of App Kit. To be honest, I don’t really wish for the much because I feel quite comfortable with App Kit and I like it and I don’t find it troublesome in the same way that maybe somebody moving from iOS does. But I would like, as far as both platforms go, I think it would be really cool to see a Swift first framework.

It doesn’t have to be big; l don’t really think they’re going to replace App Kit or UIkit in one shot, at WWDC but even if they just release one new framework that’s Swift first, that would be pretty cool.

**JAIM:** If they could replace UIkit with Swift – Swift framework, they can just come out, announce that, drop the mic and leave.

**ANDREW:** Yeah, [crosstalk] I don’t think it’s going to happen.

**JAIM:** It would be a good week.

**ANDREW:** I mean they have big technical problems that make that unlikely, namely that Swift is not API stable yet so whatever framework this would be, I think they would have to – it would have to ship with – it would have to get bundled with apps like the standard libraries currently do. But it seems like they could make something that was small that got to bundle with the app.

**JAIM:** Yes, it could help. We might start seeing things like that start to develop but I agree with you. The Swift UIkit is probably a little bit down the road but coming, there [inaudible] people inside of Apple working on it.

**ANDREW:** I hope so.

**JAIM:** I totally forgot about it. We never thought about it.

**ANDREW:** Yeah.

**JAIM:** Doing UIkit in Swift. Oh, throw it together in two weeks.

**ANDREW:** What else? Anything else you want to see?

**JAIM:** I think there’s a lot of opportunity for things that we could see. I don’t have any direct wishes but I think in a lot of things that Microsoft, Google are coming out with and [inaudible] I thought it too that Apple hasn’t really gotten into.

We saw bots come out with Microsoft and Facebook. That’s something that Apple might be working on. I don’t know if we’ll see it; I don’t know if they’ll make an improvement but that seems like [inaudible] they may have something like that. That’s something that they haven’t shown a whole lot of – they’ve really tipped their hat or tipped their cards to see if they’re going to that direction but that’s a possibility. It would be interesting to see how they approach that.

**ANDREW:** That could really be part of a SiriSDK it seems like. Microsoft in particular, their bots are integrated – I think they’re integrated with Cortana which is essentially their version of Siri then Skype and – I don’t know. If you think about it, perhaps Apple could make bots that work with iMessage or something but Siri seems like the obvious choice.

**JAIM:** Yeah it is but I think it would have to work on both. Voice is not a suitable input in a lot of different cases especially if it’s louder or is quiet near people nice to you. If I’m going to accord a spot, Siri’s great for doing – set a timer for 15 minutes for my break. But if people are being quiet, I don’t want to do that – with people around me to be quiet so I think text input is still going to be there. Both are important and as I’ve mentioned before, Siri’s probably a little bit behind in the voice recognition compared to some of the other players. What it can pick up even though it does pretty well. I use Siri. I don’t really have any real complaints with it but definitely there’s room for improvement.

We’re going to see a lot of terrible voice apps before we can really see some really good ones but that’s the nature of progress.

**ANDREW:** Yeah, it’ll take a while. Do you have any things that – not on the developer side but anything you’d like to see in iOS 10 which I assume they won’t announce?

**JAIM:** Yeah. I haven’t thought about it. I watched the Keynotes like “Oh, that’s a cool feature” and all that and I’m really scared to update until it’s like on release. I just don’t do it.

**ANDREW:** Yeah. I rarely if ever run iOS betas. I sometimes would install them on [crosstalk].

**JAIM:** OSX – are we talking about iOS?

**ANDREW:** Yeah. [Crosstalk]

**JAIM:** I misheard you. Yeah, I was talking OSX.

**ANDREW:** Oh, okay.

**JAIM:** I’ve got enough random devices sitting around so I can download iOS 10 new features. I was really excited for the – what’s the dimming technology?

**ANDREW:** Night shift?

**JAIM:** Night shift, yeah, I was so excited for that and I never turned it on. [Chuckles]

**ANDREW:** I set it to turn on every night and I actually quite like it.

**JAIM:** Okay. It took a little while; after the download, I tried to get it going and didn’t quite happen with my device. I’m in an older 5C so the actual download where I can actually turn it on didn’t happen so I lost my assignment. I’ve gotten into a habit where I’d shut off my devices an hour or so before going to bed so it’s less pressing at this point.

**ANDREW:** Well, and one issue with that feature actually was that actually at least when it first came out, if you had low power mode on – you know, your battery was at 20%, you turned on low power mode, you couldn’t have nightshift active if low power mode was on and of course, your battery’s most likely to be low late at night when you have been using your phone the whole day. So that would happen to me a lot but they actually just fixed that in 9.3.2 so you can now keep Night Shift enabled even when low power mode is on. I do like the feature but it’s actually not surprising to me that they released it in a point update because it’s not – I’m not sure it’s a huge flagship feature that really changes the way you use iOS.

**JAIM:** No, maybe not. Do you have any wish list for iOS 10?

**ANDREW:** No, not off the top of my head as far as user-facing features but I actually think that’s kind of exciting because there have been WWDCs where there have been a lot of rumors and people have been talking about things that they wanted to see come out. That list has been sometimes pretty long and this year, I don’t feel like that’s true. I don’t feel like I have a long list of the things I’d like to see or things that are rumored to be coming but I have to figure Apple has plenty to announce so it’s exciting to just be surprised with hopefully cool, new stuff.

One thing that’s interesting about this year is it might have been Swift 3.0 would be the big announcement and Swift 3.0 is going to be a huge change to Swift. But because Swift is open source now and it’s already public, and we already know what’s with 3.0 is – what’s happening with Swift 3.0, they can’t really use Swift as one of their big announcements. They have to have other cool stuff to show us.

**JAIM:** That’s right. Raising the bar. I think they can still talk about this. Ow everyone is checking the mailing list and then get repositories but definitely, takes the air out of some at the least, the more hardcore factions of developers.

**ANDREW:** Yeah, they can’t make it – remember when Swift was announced, that was by far the most exciting thing in the Keynote for developers anyway. Sure, there will be sessions about Swift 3.0 and updating your code and whatever but – and taking advantage of new features but it just can’t be a big announcement to wow everybody with exciting new stuff because we all know about it. Undoubtedly, Apple has got stuff that they’ve been working on in secret that they’re excited to show everyone.

**JAIM:** Definitely. Yeah, some things that might happen, I think there – just by looking at gaps between Apple and the competition, the Google Wear and their watch technology has a lot better battery life than Apple’s. So if you have a wearable device, I was talking with the startup within the past couple weeks that they really can’t develop for the Apple Watch because people unplug or people charge their Apple Watch overnight. So if you do any tech monitoring for whatever – for health reasons or sleep monitoring, that can’t really happen on the watch. I guess basically, it’s not possible because the thing goes right where your wrist would be so that’s [inaudible] I’d like to see improve and I think there’s room for improvement. Have some way to get a reading from the Apple Watch at night either by improved battery life or a different way of charging.

**ANDREW:** Yeah, I’m curious, I was actually not surprised that they did not announce a new watch in the spring which would’ve been a year after the first one came out and I was glad about that because I thought a yearly upgrade cycle for such an expensive watch that’s also sort of a fashion accessory would be annoying. But I definitely hope that they’ve got new stuff that they’re working on. I would take it that any software changes – WatchOS 3 or whatever – would be announced here but I still wouldn’t be surprised if hardware’s held back until either in the Fall when they do the new iPhone event or another event months later, maybe even next Spring. I actually wouldn’t be upset with a two year upgrade cycle at least this time around as long as they’re doing stuff on the spot with software to make things better.

**JAIM:** Yeah, I guess we’ll see. I think they’re a bit behind a lot of things, a lot of functionality especially being able to use the watch without the phone. There’s some stand-alone functionality but you basically type into – using the phone or having the phone with you if you use your watch which Google I/O announced that’s not the case with them. You can have your X sized app and throw it on your wrist and go and leave your phone behind. That’s a bit behind so they might be a little sooner than you might expect which can be good or bad. If they push something out the door, it’s not going to be the right experience and [inaudible] so we’ll see what they’ll do.

**ANDREW:** Do you have any ideas for tvOS updates or Apple TV updates?

**JAIM:** Hm, yeah I don’t know. I use my Apple TV but I basically just load the apps – my HBO app or baseball, hockey – just the stuff I want to watch and I get to watch it. Most of my TV viewing is through my Apple TV.

I don’t know; I’m not really thinking about it. All of this would be really cool if we have this because it does what I want a TV to do so it’s interesting to see what they’d do. Do you have any ideas?

**ANDREW:** I have some complaints about certain things with the Apple TV like – maybe these are not all Apple’s fault but for example, the Netflix app, this thing falls asleep then I come back to it, the Netflix app is often – put up an error and won’t let me do anything unless I kill it and sign back in and re-open it. Probably that’s just Netflix’s app’s being stupid.

**JAIM:** I think that’s most of the apps.

**ANDREW:** Yeah.

**JAIM:** Most of the apps don’t do that well. I’m sticking with the number ones – number of apps.

**ANDREW:** But it’s dumb because that’s how people use the device; they watch something and then they come back to it the next day. I expect it to just keep working. I also think the remote is not great. Enough people have complained about that without me adding my voice to it, but that’s a hardware thing. We can’t really fix that with an iOS update so I don’t know.

To some degree, whether it’s something Apple can do or not and whether it’s part of broader changes or not, I would really like for there to be a more compelling market for tvOS apps. I don’t think it’s something that is very viable for most developers to make money on.

**JAIM:** Yeah, I think discovery is not a really big part of it. Maybe some games but definitely, I think that apps that are popular have content that people want to see and that’s – those are the successful TV apps at this point. And I agree with you about the remote. It’s hard to tell which end is up when you grab it in the dark. It’s just [inaudible] with the mouse-y thing or is it not? So there are tricks with it and I think coming back from a restful state, that can be improved. So better operating system support for resuming video which is pretty [inaudible] to what they do so I think that makes for something that can be improved.

Because most of the apps I use, if we come back to it, it can get in a weird state pretty easily. I had to reboot the device, actually power cycle the device at one point. I’d come back after a couple of weeks. I’m not using it and nothing worked. It was down so I power cycled it and everything came back.

**ANDREW:** Really not great. I’m having a problem too with where WiFi works fine but I previously had my Apple TV hardwired with Ethernet and that just stopped working. It would say it didn’t have a network connection. Even though the Ethernet connection’s good, I can test it on another device. So I ended up unplugging it. It’s working fine on WiFi but that’s a little bit annoying. Why did it break? I guess an update broke it. I don’t know. It just stopped working. Maybe it’s a hardware problem. My Apple TV is a free developer unit so I guess I can’t complain too much. Well, I paid a dollar for it.

**JAIM:** That’s still money

**ANDREW:** Yeah. A dollar and seven with tax, I think. I do think though – I would love it if this WWDC was the start of some real changes to the App Store to make things better for developers. My guess is they’ve started this new app review thing. It’s their first step along that set of improvements. That’s really welcome but there are a lot of other stuff they could do like fixing App Store search and I definitely don’t mind adding paid results to search which is something that has been rumored. But making it as a search just actually works. I search for the name of an app; that should be the first result [chuckles] for example.

**JAIM:** Weird, you know. Who would have thought?

**ANDREW:** Yeah. As a Mac developer, the Mac App Store is just a complete mess. Both the app – the App Store app itself and the fact that for example, there’s no Test Flight on the Mac App Store which is pretty annoying because if you’re using a technology like Cloud – an Apple service like CloudKit for example, it’s just like beta testing was pre-Test Flight on iOS. It’s quite a hassle. You have to provision and sign your own copy of the app and send it to people and manually add their device IDs to your provisioning profile.

I think right now, it’s actually not even possible to provision an app yourself that uses the production CloudKit servers so you end up with beta testers that are testing using the development Sandbox, CloudKit environment and then that doesn’t sync with their iOS version of your app that’s being beta tested and it’s really a mess there.

Of course, I still would love to see things like free trails and paid upgrades and I don’t know if that’s ever going to happen but I’m somewhat hopeful with the change in – the App Store’s now under Phil Schiller. Review times have gotten so much better gives me a little hope that Apple is taking this stuff seriously and is working on improvements.

**JAIM:** So you’ve mentioned something that I haven’t heard in probably two years when they first announced [inaudible] I had heard it but nothing positive about it. It’s CloudKit; that’s something that can be improved. Google made it a big deal. They bought Firebase which goes along the same type of things. Parse is gone away so that was our go-to backend for many things.

You spoke with Microsoft about what are their offerings and their Azure offerings so you think Apple’s going to make an improvement on CloudKit? So I think for most people, it’s not really their first choice.

**ANDREW:** Yeah, it actually would be among my first choice because it has a really nice API system; nice capabilities if you’re just developing stuff for iOS and/or Mac. I think the biggest thing that makes it not attractive is that it’s not really cross-platform. Although they did actually – I don’t know, was that last year? They did add the JavaScript, threw a rest API for it. So you actually can use CloudKit and apps on Android and Windows and whatever. It would be nice to see really native SDKs for those.

Beyond that, I’m not really sure. I’m not using CloudKit in a shipping app. I’ve played around with it on my own just to learn it but it’s been pretty good. I think they did a good job with it.

**JAIM:** That’s good to hear. Have you heard too many success stories with it? [Crosstalk]

**ANDREW:** Well yeah.

**JAIM:** It’s improving.

**ANDREW:** People got burned by how terrible iCloud and all the iterations before that. I think they didn’t want to trust CloudKit and rightfully so. But I actually think Apple did do a good job but I also have not heard people complaining that it just doesn’t work right the way that iCloud just didn’t work right before.

I did see where somebody did their own – basically, they wrapped the JavaScript API with the same API that you get when you’re using the native SDK. That way, you can include CloudKit in the Mac App Store. Mac apps – that’s apps that are just sold directly which at least, if nothing else, it’s a proof of concept for using CloudKit in apps that are not provisioned and sold through the App Store. I don’t know if anyone’s actually using it on Android but it is supposed to be possible and Apple doesn’t mind if you want to do that.

**JAIM:** Very cool.

**ANDREW:** One of the things that was announced at Google I/O is that Google bought Firebase a couple of years ago but they announced that they’re making it their platform for apps. I’ve used Firebase a little and I know a little bit about it. I think that’s pretty cool. It seems like they’ve added some nice new functionality to it as well. But the big downside is now, if you – with the new Firebase SDK that they released, if you want to include the Firebase SDK in your app, the Firebase’s core SDK or core framework, includes the analytics package so you’re basically stuck sticking Google Analytics in your app if you want to use Firebase at all.

I’m still – maybe I’m old-fashioned but I’m still pretty skeptical of Google getting ahold of all my data, even worse, all of my users’ data. I don’t really like moves like that from them even though I know it’s how they’re monetizing it, I just wish there was an alternative. So if Apple can better compete with that and do the privacy aspect better, I will be all for it.

**JAIM:** Yeah definitely. I’d be a good way to differentiate that and the cross-platform story we just talked about.

**ANDREW:** Yeah, so Firebase works on iOS and Android at least. They might have – they’ve got a – they started out as a web thing so they’ve got a rest API.

**JAIM:** See, I think there’s a lot of things that could happen that just judging by what’s happening to the rest of the industry, I don’t know if Apple’s making any play for virtual reality or [inaudible] reality. Google did a big announcement with that and Microsoft is in that area. This is something that Apple’s coming in to possibly. I don’t know, does it fit with what they do? I don’t know but it’s interesting to find out.

**ANDREW:** So there’s two big areas that seem like they’re a big deal to other companies and so far has not really done anything with them. Those are virtual reality which both Google and Microsoft – well, Google, Microsoft and Facebook are really involved in right now. And sort of the machine learning, artificial intelligence kind of stuff which – they do a little bit of that with Siri I guess, but there’s been a reason Marco had a blog post the last couple of days about how he worries if Apple is not working on that stuff and not becoming really good at it, that they’re going to get left behind if that becomes a really big, important thing in the industry.

I don’t know enough about those areas to really say one way or another but it sure would be exciting if Apple was moving into those areas. I’m particularly interested in virtual reality because it seems cooler to me just as a nerd than some of the machine learning stuff but I’m not [crosstalk] cross my fingers but I think it would be fun if they moved in to those areas.

**JAIM:** Yeah, I definitely think they definitely have to up the game with machine learning. Google made a big demonstration on the contextual interface with how to do their Google searches through their voice API. You could search for an artist “tell me about Prince” and the next search could be “what was his best album” and it would know based on what you’re talking about, you’re talking about an artist and that was Prince or whatever. That is essentially game-changing as far as how people interact with computers.

As developers, we’re [inaudible] used to having to make everything explicit and the various implicit human communication that we’re not just used to doing with computers I think will be very important. There’s always a way to go but I think there’s a lot of cool things that you can do with that and make interaction with computers a lot more human-like where they can pick-up things that are implied from previous conversations.

Apple’s definitely in that direction. Do they have something to announce or does it just happen behind the scenes with the announcement for Siri. Who knows?

**ANDREW:** It’s an exciting one. I’m excited to watch the Keynote here and what’s new. I won’t be there this year. I didn’t actually even entered a lottery. I just decided I couldn’t quite swing it this year but I’ll be watching from afar and excited and hoping that I can go next year.

**JAIM:** Yeah, definitely. I think there’s room for some big announcements. Whether those happen, I think it could be a big one or it might just be a social one but I think there’s potential for a lot of really cool things.

**ANDREW:** Well I have heard from a little birdie that there’s some stuff that I personally will be excited about coming out but I don’t have any details.

**JAIM:** Andrew, you’re going to love it!

**ANDREW:** No, I’m serious about that. You know how those little birdies are. They don’t tell you very much.

**JAIM:** Right.

**ANDREW:** But if that birdie said I was going to be excited, I believe it.

**JAIM:** So it’s the bird that knows you?

**ANDREW:** Yup. That is what I like.

**JAIM:** So I think that covers most of it. Anything else before we get to the picks?

**ANDREW:** I think it’ll be fun to listen to this a week after or the day after the Keynote and see if we were right about anything or more likely, we were just wrong about a bunch of stuff and things we didn’t even think about.

**JAIM:** It’s more like “wrong, wrong, wrong – eh, close – wrong.” We’ll see.

**ANDREW:** We shall see.

**JAIM:** We covered everything and didn’t commit to anything so I think we’re good.

**ANDREW:** Right. Should we get to the picks?

**JAIM:** Yeah, let’s do it.

**ANDREW:** Do you have some picks for us?

**JAIM:** Alright, since we’re talking about San Francisco and [inaudible] WW time, I’m going to do some picks that – since I’ve been there four times the past three years [inaudible] event – I’m almost I’m expert on the past two years in San Francisco. We were out there a couple of months ago so I know the [inaudible] pretty well at this point when three years ago, I didn’t know anything. But I’m going to make some restaurant picks that are a little bit out of the way but definitely worth checking out.

One is Curry Up Now and this is something that Pete [inaudible] made a pick for a long time ago and it’s really good. They’ve got curry burrito. It’s a food truck; you get to walk a little [inaudible] but it’s – you can do it within a lunch time, an hour lunch. It’s almost AT&T, parked underneath the freeway but it’s a food truck, you can get a curry burrito. It’s excellence.

Another pick is – nearby is the Box Kitchen. It’s on Natoma St., not too far. We stayed pretty close to it. You can see it from where we stayed last time, the [inaudible] Inn off the side street. Excellent food. We went there for lunch; I think Alondo really picked it out. He went for – he went there almost everyday for a late night snack. He likes the chicken and waffles and I had them. They’re excellent. If they have the poutine, that was amazing. That’s nearby.

There’s a couple of bars that aren’t the normal WWDC bars that everyone goes to which [inaudible] any once. One I liked was Southside Spirit House which is on Howard Street. Good whiskey selection and far enough away from the WW crowd where you won’t be too elbow to elbow.

There’s another place on Market St. that’s called Local Edition; more of a speak-easy style thing and you can go to a basement with all the live music. Some nights, some really cool bands, enough [inaudible] louder music, kind of a jazz blues type thing going. Good cocktails; that’s called Local Edition. It’s on 691 Market Street and I’ll be there so people can look me up and you can find me on Twitter, jaimzuber. I’ve learned there are many people in this world, listeners of this podcast that think my name is James Uber.

**ANDREW:** You’re named after the car, the ride-sharing app, right?

**JAIM:** Yup, just put the Z in it and we’re good. [Crosstalk] Those are my picks that you probably won’t hear the usual WW list.

**ANDREW:** Thanks for the picks. It kind of makes me wish I were going to be in San Francisco. It actually reminds me that I do have a hotel reserved for the week and I probably ought to cancel that reservation before it’s too late.

I’ve got a couple picks. My first one is an app called Cathode which I’m really surprised I’ve never picked before but I couldn’t find it in our list of previous picks so I’m going to pick it this week. This is a Mac app and also an iOS app. It’s a terminal like a command line terminal app but the cool thing about it is that graphically, it emulates vintage computer screens so it’s really customizable. It has a bunch or built-in presets but basically, it makes your terminal look like an old computer. You can make it look like a green screen or an Amber monochrome screen and you can change the curvature of the screen so it has a lot of those – well, most of those screens had a curved front because they were an actual CRT2.

It has sound effects, it even does something cool where it uses the front-facing camera to make it look like there’s a reflection, like you can see your own reflection on the screen. And it’s actually a pretty decent terminal, I mean later on on top of that, particularly the iOS app is a pretty good terminal app for iOS. It’s a paid app but developer has done a really good job. It’s just one guy that does this. I really like it so that’s my first pick, Cathode.

My second pick is a website that I just found out about today and it’s called Woo.io. They’re in beta right now. This is a jobs website and I’m not actually looking for a job but it just seems like a cool idea. Basically, you put in the regular infos and resume information but then the unique part is you can sort of define a list of requirement. So these are things that you require to be interested in a job and it’s like you can say you want a minimum salary or you want to be able to work remotely or needs to be located in a certain list of cities or you want to be able to work with certain technology or whatever. So you can define these requirements and then they won’t even show your – show you to employers that don’t meet those requirements so that way you don’t get people contacting you about jobs you’re just not even interested in. and hopefully, it will mean you do get contacted about jobs that are really actually a good fit for you so we’ll see how it goes. I put my profile in not because I’m looking for a job but just because I was kind of interested to see how the whole thing worked and it’s sort of a pre-pick because I don’t know yet but we’ll see how it goes. Those are my picks.

**JAIM:** Sounds good. I have one anti-pick which I don’t want to see two new messaging apps. One thing that Google introduced is Hello and something else. I don’t need another thing to check if I know my wife is messaging me something. I don’t need to [inaudible] check Facebook. I got to check my messenger, my texts. I check like five more things. There’s Hangouts, so please don’t do that Apple. Don’t do that to us.

**ANDREW:** I thought that was particularly weird because they already have Google Hangouts and Google Chat and they didn’t just improve those; they replaced them or added to them. Yeah, I definitely don’t want to see Apple come out with another version of iMessage or something. The one we’ve got is fine. If they want to add cool, new stuff to it, that sounds great but I don’t need something else to check either.

**JAIM:** Exactly.

**ANDREW:** Alright. Anything else we should say?

**JAIM:** I think we’re good! I’ll see some of you in San Francisco.

**ANDREW:** Sounds good. Everybody enjoy WWDC. See you next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
