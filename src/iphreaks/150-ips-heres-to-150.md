---
layout: layouts/post.njk
title: >
  150 iPS Here's to 150!
date: 2016-04-28 07:00:20
episode_number: 150
duration: 50:28
audio_url: https://media.devchat.tv/iphreaks/iPS150.mp3?rss=true
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

Episode 150 Celebration! Here’s to 150 more!

&nbsp;

01:38 - Confession Time

08:36 - Show Highlights

- [Episode #150: The Perfect Framework with Sean Stephens and Kyle Jessup](https://devchat.tv/iphreaks/140-ips-the-perfect-framework-with-sean-stephens-and-kyle-jessup)
- [Episode #132: Fastlane with Felix Krause](https://devchat.tv/iphreaks/132-ips-fastlane-with-felix-krause)
- [Episode #149: Xamarin and The Evolution of Interactive C# with Miguel de Icaza](https://devchat.tv/iphreaks/149-ips-xamarin-and-the-evolution-of-interactive-c-with-miguel-de-icaza)
- [Episode #133: The GROWS Method with Andy Hunt and Jared Richardson](https://devchat.tv/iphreaks/133-ips-the-grows-method-with-andy-hunt-and-jared-richardson)
- [Episode #110: Design and The Business of Apps with Dustin and Dylan Bruzenak of Iconfactory](https://devchat.tv/iphreaks/110-ips-design-and-the-business-of-apps-with-dustin-and-dylan-bruzenak-of-iconfactory)

11:58 - [The Microsoft Build Conference](https://build.microsoft.com/)

- [HoloLens](https://www.microsoft.com/microsoft-hololens/en-us)
- [Project Islandwood](https://blogs.windows.com/buildingapps/tag/project-islandwood/)
- [.NET Rocks!](https://www.dotnetrocks.com/)
- [WWDC](https://developer.apple.com/wwdc/)
  [Check out Chuck’s Remote Conference Lineup!](https://allremoteconfs.com/)Picks

[Introducing GPUImage 2, redesigned in Swift](https://sunsetlakesoftware.com/2016/04/16/introducing-gpuimage-2-redesigned-swift) (Jaim)[Ramen YAMADAYA](https://www.ramen-yamadaya.com/) (Jaim)[Candy Japan](https://www.candyjapan.com) (Andrew)[MicroConf](https://www.microconf.com/) (Chuck)[GenerateWP](https://generatewp.com/) (Chuck)[WordPress Membership Plugin](https://www.memberpress.com/) (Chuck)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 150 of the iPhreaks Show. This week on our panel we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**CHUCK:** And Jaim Zuber.

**JAIM:** Yo, yo, yo, coming at you live from the land of sky blue waters [laughs].

**ANDREW:** Wow.

**JAIM:** So if you put me in San Francisco with AJ for JavaScript Jabber, you’re going to get some influences. That’s just how it works.

**CHUCK:** Oh— man!

**ANDREW:** Yeah [crosstalk] I guess that he rubbed off on you.

**CHUCK:** Yeah that is his [inaudible] every time he’s on JavaScript Jabber. So I’m Charles Max Wood from Devchat.tv. This week we’re just going to— usually the 50<sup>th</sup> or whatever multiple of 50 episodes, we do – turns into talking about the show and BS-ing around a little bit. It’s a whole lot less formal than our regular shows. So maybe we should start it off by having a little confessional. I tend to do this mostly on the Freelancers’ Show. It’s, “Yeah, I know I shouldn’t do this but I do it anyway” or “I know I should do this and I haven’t.” But yeah— so about 3 years ago, I started looking into starting this show because I wanted to learn how to build iOS apps. Guess what I have failed to do over the last 3 years? Really learn how to build iOS apps.

**ANDREW:** Well, while we’re confessing things, you want to hear a confession from me?

**CHUCK:** Yeah.

**ANDREW:** I started doing iOS development in March or April 2008 when the iOS STK was in beta and at that time, it was not just open to the public. You had to submit an application to Apple and they would decide whether they want to let you into the beta or not. Not everybody got in. But I was a Mac developer and had a Mac app that I was— had already been selling for a long time. So I got in; I downloaded the beta. I started working with it and I’ve done iOS development ever since. But I‘ve never released my own iOS app on the store. So I’ve worked on lots of iOS apps that have shipped but they’ve always been for other people. One of these days I would like to release my own iOS app on the store.

**JAIM:** I think we’re three for three on that.

**CHUCK:** [Chuckles] Well, what’s even funnier is that at this point, it’s equally likely that if I do release an app on the App store, it will be written in JavaScript. It’s equally likely that it’ll be run in JavaScript to Swift.

**ANDREW:** Boo!

**CHUCK:** [Chuckles] I know right.

**ANDREW:** Don’t tell any of our guests— recent or soon to be guests— that I said that.

**CHUCK:** Well, I think it’s interesting because the whole landscape of iOS development has changed. Cordova brought some of that in where you were building in a WebView. I never really liked that as a solution just because it wasn’t fully Native. You can make the case that JavaScript Core is or isn’t but at least it has the bridge to the Swift or Objective-C runtime but— yeah— it’s just— and— usually those apps actually do pull in Native views or view elements. So, anyway, I really— I have decided though over the last few weeks that the podcast need to be my top priority because I’ve been playing around and doing a lot of different things. In, so choosing I have decided that I do need to learn how to build iOS apps in Swift just because that’s what we talked about on the show every week.

The other one that I also have a confessional on is that I really haven’t dug deep on Angular and a show on Angular as well. I realized that a lot of the value I bring is making sure that the episode’s go out every week. But I do want to be able to be more conversant with the— some of the topics we’ve talked about.

**ANDREW:** Cool. Well, you know some people that how to write Swift apps.

**CHUCK:** Yeah. I figured I can ping any number of people and just see where that’s gone or see where that goes. But yeah, so [chuckles] there— I ‘fessed up. It only took me 3 years.

**ANDREW:** I know you’re talking a while a back about wanting to do a tvOS app, an Apple TV app for Devchat.tv.

**CHUCK:** Yeah [crosstalk].

**ANDREW:** Are you still thinking about that?

**CHUCK:** I am still thinking about that. Honestly, the Apple TV and Roku and some of those, excite me more than the phone does. So I’m really tempted to go that direction, though, I don’t know that there’re good tutorials out there for that that are really written for people who already do iOS development.

**ANDREW:** Yeah. I don’t know. tvOS is actually very much just iOS with some things that are missing. And some other things that are added and a little different to deal with the fact that it’s on a TV screen instead of a phone or the touch interface, but 95%, it’s the same.

**CHUCK:** Yeah. The other bit of this that’s not iOS directly related is that I spent so much time doing the online conferences. We did iOS RemoteConf last week and the podcast that I really don’t have time to really dig in. So I’m actually working on off-loading a whole bunch more stuff related to the podcast, conferences and stuff so that I do have the time to go and dig in to these. So it’s two pronged effort and I think over the next month or two, it’s going to be mostly focused on clearing more time on my plate so that I can dig in to this stuff more. Because sometimes we get in to topics where I don’t even have enough basic knowledge to begin to understand some of the nuances with it because I just don’t understand some of the constraints that go in to building an iOS app on that deeper level. I can speak in general programming, I get a lot of the concepts that are there in Swift the language, but some of the frameworks really— I just don’t have enough context to really get them and that’s where I like to be. I don’t have to be the expert but I want to be a little bit more conversant, if that makes sense.

**JAIM:** Yeah. It’s good to have a range of experience on the show because Andrew and I can get in the weeds pretty good. We forget that a lot of the— a lot of our listeners maybe haven’t been developing as long as we have or developing iOS. So we can get the in the weeds pretty quickly and not realize that we’re just going over people’s [inaudible].

**CHUCK:** Yeah. That’s actually one change that I want to make to this show. I’ve also been pushing for the same kind of change in the Angular Show and the Freelancing Show and that is, that I want to bring on more new people. We’ve had that on Ruby Rogues and JavaScript Jabber and have been really helpful. When we go off on the Deep End, there’s somebody there that basically will come in and say, “I don’t quite understand what you’re talking about. I think you’re talking over here in this area and we can back up and explain it for some of the newer folks.” I think that’s really, really helpful. It makes the show as much more approachable for everybody.

The other thing is, is that let’s say everybody on the panel does have deep experience in an area, that doesn’t necessarily mean that everybody who would even be considered an iOS expert has deep experience in that area. So by having somebody new, we can force the conversation back for people who are intermediate or advanced in other areas but not that one.

**ANDREW:** Yeah. I was just going to say I like the fact that we talk about advanced topics and also try to be beginner friendly even if for sometimes we had a hard time with that. I think it could be improved by having beginners but doesn’t really matter if you consider yourself an expert or if you’re brand new to programming. Even experts are not experts on every single topic that we might talk about so we definitely— I think it’s definitely really important for us to keep a beginner perspective in mind as well as an expert perspective in mind when we’re talking about these things.

**CHUCK:** Yeah, those really true.

**JAIM:** Yeah. I’ve done my best to ask beginner questions if I see them coming up. I know I have a lot of blind spots.

**CHUCK:** Yeah, I think we all do. It’s just that we’ve been doing this for a while. We get into some of the web-related stuff and I definitely have blind spots there too, where I just assumed everybody knows what ‘rest’ is or something.

**JAIM:** Yeah with the way [inaudible] I think, last time I did web work, Backbone was cool. [Chuckles]

**CHUCK:** Backbone’s still cool. There are just much cooler things out there.

**JAIM:** Okay. Relative coolness, I suppose.

**CHUCK:** Yeah. It’s definitely not the hot technology these days. So that being said, I’m curious over the last year, what are some of the highlights for the show?

**ANDREW:** I haven’t prepared for this. I don’t remember. I can’t remember what shows we did. Sometimes, I’ll think back to a show we did and then, I find out that was two years ago and it seems like yesterday.

**CHUCK:** Yeah, that’s true. Are there any episodes that just stand out to you as favorites?

**ANDREW:** I really like the show we did with the guys from the Perfect Framework, the server-side Swift.

**CHUCK:** Yeah. That was really interesting; just seeing where open sourcing Swift’s taking us, it’s been interesting.

**ANDREW:** I like the episode we did with Felix Krause about Fastlane and I’ve gotten some good feedback from people that have listen to that offline. It’s something that continues to be— Fastlane is something that, I think, continues to be pretty big. I don’t know. I guess a big story in iOS over the past years or so.

**JAIM:** Yeah. It’s definitely taken over and any company that has to deal with Continuous Integration or provisioning with a lot of [inaudible] devices that’s just going— they’re going to Fastlane in droves. That’s definitely worth it.

Yeah. I really like talking with Miguel de Icaza from the Xamarin project. That was really cool because I get my starts in iOS development using his product. Before Xamarin, it was MonoTouch but that’s how I got my feet wed in iOS development and jumped into pure native Objective-C and eventually Swift from there. So that was cool to get the background on that story.

**CHUCK:** Yeah. I think that one was released last week as we’re speaking anyway.

**ANDREW:** I’ve had a few people say they listen to that and really enjoyed it and I really enjoyed talking to Miguel. I think he was just really fun to talk to and approachable. He’s one of the most accomplished guests we’ve ever had being founder of GNOME and Mono and Xamarin and obviously an incredibly talented programmer and business person. It was really fun to talk to him and earn some of the history and low-level details and high-level details. I really had a great time.

**CHUCK:** Yeah. One of my favorites was talking to Andy Hunt and Jared Richardson about the GROWS Method. That kind of management problems and the people problems are for me just as interesting as the technical problems. And so in being able to talk about that or talking to Neil Ford about some of the stuff he’s talked to us about have also been really, really fun for me. Just digging into, “Okay. Why do we think about things the way that we think about them? What are we doing to make it better?” Then, just having somebody’s approaches to some of that stuff really, really hit me where I live.

**ANDREW:** We did an episode I think about a year ago with— or not quite a year ago— with Dustin and Dylan Bruzenak? I don’t know if you remember that episode. But those guys were— they were hilarious. That was a really fun show. We should try to get them back. We were talking about the business of apps, I think.

**CHUCK:** Yep. Iconfactory? Is that where they’re from?

**ANDREW:** Yeah, Iconfactory’s— I can’t remember what it was called but the space behind Iconfactory is development contract development arm.

**JAIM:** Yeah there are Iconfactory [inaudible] now. Yeah. I run into them [inaudible] quite a bit [inaudible]. They’re always a lot of fun and how do they get awarded? They’re good talkers.

[Laughs]

**ANDREW:** Yep. You can just put a mic in front of them. I don’t think we even need to be there.

**JAIM:** Yeah. It was a great episode. I wasn’t actually on that episode. I listened to it when I was not driving and yup, a lot of good [inaudible], great stuff.

**CHUCK:** Yeah. I think one other highlight for this year and we’ve been talking about it, is the Build Conference that we went to a couple of weeks ago. I’m really curious, what was your take on that and how it went?

**JAIM:** Well first off, no one believes me when I say; we went to a Microsoft conference. They’re like, “What? Why are you going to a Microsoft conference?” [Inaudible]

**CHUCK:** [Laughs] Microsoft Conference.

**JAIM:** Yeah. It’s, “Well, I went because they paid— they put me out there and put me up in a nice hotel.” They just don’t think I’m being serious at all. So, “What do Apple developers do at Build?”

**ANDREW:** I’ve got some pretty skeptical reactions, too. Basically everybody that knows me both in real, regular life and people that know me in the industry know that I’ve been a pretty hardcore Apple person for a long time, might have even then one of those people who didn’t like Microsoft at one point but— so they’ve been shocked that I went to Build and I’m not going to WWDC, as far as I know. But I did have a great time.

**CHUCK:** Well it’s funny even in the JavaScript world. There’s still a lot of open source JavaScript people that – they were like, “You went to Microsoft’s Conference?” Then I told them that I was there for the iOS podcast, too, and you watch their eyebrows climb like, “Really?”

**ANDREW:** I’m curious to know, maybe not so much you, Chuck, because you’ve got your hands in other things but at least Jaim and I have been pretty focused on Apple for the last several years. I wonder though, what your take on the Conference, overall? Not so much what we did there. I thought Chuck about too, but what did you think of the Conference?

**CHUCK:** The Conference itself? Well, I didn’t go to any of the sessions. I went to the Keynotes when I was there for the first two days. I thought it was really interesting. I’m not— I don’t know— it feels like— so comparing it to the Apple Keynotes? The Apple Keynotes feel whole lot more polished. There were some other things that just generally were like, “Okay. Whatever.” But some of the announcements were really exciting and really interesting. It really felt like they were trying to put as much good information out there as they could about what they were working on.

So overall, I really had a positive impression of the Conference, even though not everything really catered to my interests. I thought it was well thought out. It was very well put together and just— we had our hands held a little bit as far as getting people lined up for us to interview and things like that which was also really nice. I really like hanging out with the .NET Rocks guys anyway. So overall, I had a very positive experience and I thought the Conference itself was very well organized and put together.

**JAIM:** Yeah, definitely. The .NET Rocks guys were definitely fun to hang out with and they were excellent hosts. They’re the ones who set this whole thing up, they’re the ones who brought us out here because Microsoft wanted people from the iOS community to be out there and talking about their stuff and see what they’re doing because Microsoft tried to do a phone. They tried pretty hard and [chuckles] they failed pretty hard. They built a great product. I think anyone who’s tried a Microsoft— the Windows Phone said this is a solid product but no one bought it which means developers never [inaudible] anything for it which means even more people didn’t buy it. So I think they’ve [inaudible] on that, okay. They’re playing well with iOS, they’re playing well with Android now. They’re trying to get the word out.

**CHUCK:** Yeah. Did they even— I think I heard one mention during any of the Keynotes at all about Windows Phone.

**ANDREW:** I don’t know if I even heard one. I thought one thing that was striking is that they did demos on stage with a Keynote that were done on iPhones and Android phones.They did not do them on Windows Phone. I also— as much as I could, when I saw Microsoft employees walking around, I was curious to know what kind of phones they had and they mostly had iPhones and some Android phones. I did see a few Windows Phones but they were definitely not the majority.

**CHUCK:** Yeah they did do some demos though, on Surface tablets though.

**ANDREW:** Well, yeah. So I think Surface is actually doing quite well but—.

**CHUCK:** Yeah [crosstalk].

**ANDREW:** That’s a completely different thing than their phones.

**CHUCK:** Yeah. I agree.

**JAIM:** Yeah. People are definitely liking the Surface. They’ve got the Microsoft for [inaudible] capability. It’s small so a lot of people are really liking that. I think people are pretty impressed with it.

**CHUCK:** Well, and to an extent that the iPod doesn’t, I feel like it really actually does replace a laptop. You could— it runs Windows. It doesn’t run Windows Phone OS like the iPod does iOS. So you have a lot more of the capabilities you would expect from Windows because it is Windows, on the Surface tablet. I think that place a lot to the power of the Surface tablets as oppose to iOS. So depending on what flavor you like and what you need, it makes a lot of sense that people are going for the Surface tablet.

**ANDREW:** I thought to circle back around a little bit. As far as the Conference goes, I thought it was really interesting to be there. I thought it was weird to be there, to be honest, because I just have not really paid any attention to Microsoft until now. I have to admit that 80% of the stuff, they talked about was somewhere in between uninteresting and downright boring to me which doesn’t mean it was bad because their audience is different. But there was a lot of stuff that I just don’t care about like this business intelligence or this and that that some enterprise solution that I’m never going to care about. So I don’t do and don’t want to do enterprise development.

On the other hand, it was fun to go somewhere where they had something like the HoloLens which— I don’t know— I guess, never say never but I don’t really see Apple, at least nothing Apple has announced so far is in that area. That was just cool coming soon future technology we— Jaim and I, and I think you did too right, Chuck? We all got to try the HoloLens on.

**CHUCK:** Yes [crosstalk].

**ANDREW:** And see how it works.

**CHUCK:** So you’ve got to go through the Mars encounter?

**ANDREW:** Yeah. I went through the Mars encounter. Then, Jaim got the VIP treatment somehow.

**CHUCK:** Nice.

**JAIM:** Yeah, I was in the same line and I get a different ticket and, “What is this?” I won the Mars attacks or whatever it was— the Mars encounter.

**CHUCK:** [Chuckles] Mars attack, I love it [laughs].

**JAIM:** We’ve got to talk about what the HoloLens is. That’s a— it’s a wearable device and you put it over like a pair of glasses and you can see it’s augmented reality which is different than virtual reality. I didn’t really understand the difference before. Virtual reality is where you’re completely immersed in what’s happening. Augmented is, you see what’s happening in the actual room you’re in but you have different objects that you can also see that interact with the real world.

**CHUCK:** My understanding is, so the current state of the art with virtual reality is that you’re wearing a headset that completely blanks out the current world. So there’s no overlay on the current world. It’s actually fully immersive.

The HoloLens to a certain degree did that when you were standing on Mars but a lot of the other demo, for example, when you’re standing there and you’re looking at basically Mars floating in the middle of the room you’re standing in. That’s clearly augmented reality because you can see the room; you just see Mars floating in the middle of it. So it adds that to the reality and augments the reality you’re standing in as opposed to completely immersing you in the reality and you don’t have context in the current natural world.

**ANDREW:** Even when you’re actually on Mars, you could very much see the room. In fact, that was—I thought my impression of HoloLens when I put it on was I was very impressed by it. I have an Oculus, the first generation Oculus which, as everybody knows, has pretty bad light in C.

**CHUCK:** Yeah [crosstalk].

**ANDREW:** You get motion sick and if you move your head back and forth, it obviously can’t track quick movements very well. The HoloLens was really good in that regard. It had very low latency. I thought the audio was amazing. Nobody talks about it but the audio is [inaudible] also sounds they are actually coming from different directions. And as you turn your head, it’s adjusted to seem like it’s coming from a fixed location in the room and yet you’re not wearing headphones so they’re doing some— I don’t know— phone conduction or ambient or whatever.

My one complaint is that, the field of view is quite limited. If you think about it, you’re looking at a fairly small screen in front of you. So it’s only stuff right in the middle of your vision that it can’t have HoloLens stuff up here, there. I hope— I assumed that’s something that in future generations, years down the line they will improved and fixed but overall it was just such a cool, promising thing.

**JAIM:** Yeah. It’s a definitely very, very early. I think, if— I think someone in like the upper midwest has a HoloLens and everyone in the .NET community got excited like “Who has that?” Some person in Wisconsin somewhere, but it’s definitely an early technology, so you got to go [inaudible] the main thing that most of all went in where you actually you’re—the scene what’s happening on Mars. But I got into the same line as you, expecting to go to Mars, then I get a different ticket. I thought I made a mistake like I went to the wrong line or something but that was actually a VIP treatment where you can go one on one and they had a room set up just like a regular living room with a bunch of different things, you could interact with.

We sat down and you had to— they made you watch a video before you do it, to teach you the gestures because [inaudible] very early technology. So it’s very easy to get lost. They had someone in the room with you, walking you through exactly what’s happening.

One of the things they had was they had a big dinosaur you could put in on the molder and make it huge. So you could walk up to this dinosaur like you’re actually in the room with it and I had done something, trying to move it and like, “Where the dinosaur go?” They’re like, “Did you look under the floor?” “Oh yeah, I moved it under the floor.”

So there are a lot of different things like that but really cool to see their demos. You have [inaudible] room, they had like a little cat that was sitting on a couch like a real life couch with a virtual cat. I could look at a blank wall, I could play a video on like a Youtube video. So I just sit back in a chair and any blank wall, I could have it set up like I’m watching a video. Surprisingly—

**ANDREW:** Oh wow [crosstalk].

**JAIM:** Yeah, surprisingly decent resolutions. So in the future, maybe we’re not buying TVs. We just have a wall. We’ve got these lenses, we’ve put them on and you can just watch things.

The funniest thing I saw, they had a real life turn table, like a record and they had a Zombie that when you started the record player and started to play it, the zombie would just run across the record as it was spinning. You could interact with stuff like that. There are a lot of cool demos so I think – a lot of new technology. It’s also— it’s very early, very bleeding edge. Not even close to usable for anything production ready. But it’s cool to see Microsoft’s out there pushing the envelope and see what’s next because they dropped it on the phones but they’re trying to be on the next wave for whatever that is.

**CHUCK:** Yeah, I was very impressed with it. You could— some of the rendering on the HoloLens, you could definitely tell that it was not— the resolution wasn’t the best but at the same time, in a lot of ways, you could walk up and you could get a real close look at Buzz Aldrin or real close look at the surface of Mars or things like that. You could kneel down and really get a good at look the earth underneath you and stuff like that. So, yeah, and I’m really excited to see where it goes.

To your point about instead of buying a TV, you’ll just have a headset where you watch stuff on the wall. I just keep thinking that my kids will then not be fighting over what show they want to watch. “I want to watch Frozen.” “I want to watch something else.” So you just look at a different wall. We’ll look at the same wall [chuckles]. I don’t know.

Yeah. That’s really interesting. I wished that I could have experienced that but Jaim, right place, right time, right?

**JAIM:** I was right behind Andrew in line and they just— it was just a lot everything. So they— every 10 tickets or so was for this thing. I thought I got a raw deal but turns out, I won.

**CHUCK:** Yehey! Jaim is the winner. Yeah. I’m going to switch back to the Conference for a minute. I was really actually very happy, too about just how many other technologies they had brought in to demo on the show floor and to speak at the conference. As many people know, I’m pretty involved to the Angular community. It was funny because I was walking over and I saw Anders Hejlsberg who is one of architects of C# language and the TypeScript language. He was talking to—.

**JAIM:** He did Turbo Pascal [inaudible], right?

**CHUCK:** Yeah I think so.

**JAIM:** He’s [crosstalk] done tons of cool stuff.

**CHUCK:** Yup. We actually did an interview with him for JavaScript Jabber which should be coming out here within the next few weeks but I saw him hashing over some TypeScript with someone else and when I got over there and started talking to the other people around them because I know the Angular Core Team so I was chatting up with them. Turned out that it was Miško from the Angular Core Team. And it seemed there were a lot of different collaborations like that just around between Microsoft and Google, for example, with those technologies, TypeScript and Angular, or just some of the other big players that are out there in the room. They were there and they were there with their technologies. Microsoft basically had embraced them and invited them to come and play and be a part of the conference.

So it’s a different Microsoft from the one that were complaining about 5 years ago where they were all closed off and they didn’t want to be involved in the community. They weren’t sharing their code. They weren’t opening things up so people could do interesting stuff with it. That all has completely changed.

They’ve opened up all of this stuff and made it very, very accessible. They bought Xamarin a month or so ago and they’ve already open sourced Xamarin. They open sourced the Objective or not Objective-C – the C # runtime, last year, I think. So all of these things, they have all of these technologies that they want people to use, they want people to understand and want people to be able to take advantage of. I felt that was really a flavor of the conference that was very, very nice. And we talked about that a little bit with the iPhone and inviting an iOS Podcast to show up but it really wasn’t parent not just in the way the conference was set up but just the people who were there and participating. They weren’t talking like, “Well, we’re just trying to help Microsoft make another Buck by reaching another audience.” It really was Microsoft wants to make contributions to the world and to the growth of open source and the growth of technology, in general.

**JAIM:** Yeah, definitely. I’ve talked to people in the .NET community, people that were Microsoft employees 5 years and they’re just like, “We never would have believed this would happen. This would never, never would happened 5 years ago.” It’s definitely a different ball game.

**CHUCK:** Yup.

**JAIM:** So as the conference itself, if you‘ve been to WW, the Apple Conference, you’re going to be spoiled because Apple does an amazing job of organizing everything. Everything is planned down to the tee. All the sessions are completely rehearsed and well done, even the Keynotes and Microsoft is not really up to that.

The Keynote was as— went on pretty long and there are two Keynotes that were both pretty long and people were bailing out a little bit. So if— when I go to Build, if I wasn’t— even if I&nbsp; wasn’t [inaudible] developer, not this much, I think the content is not as relevant to the day-to-day developer as far as pushing the envelope of code but there are lot of cool things happening. I didn’t realize that a lot of the sessions weren’t as technical as I had hoped.

They talked about some technology; I always [inaudible] trying to get the code. The ones I [inaudible] to Florida, the podcast were more higher level things. I didn’t realize that until I’ve been into two or three like, “Oh, the code ones are in the [inaudible] different building.” They did it across the street at the Marriott. That’s where the more code heavy ones and the huge rooms but that was the difference.

**ANDREW:** I thought the same thing, Jaim. I actually went to— I just went to one session at the Marriott which was the Project Islandwood or Windows Bridge for iOS session and that was – they did get in to code there. It was nice to see a technical talk. I have to say it was a little— the whole conference was a little overwhelming to me. It felt harder to keep on top of everything that was going on than it is at WWDC.

**JAIM:** Yeah. It’s short, too. It’s Wednesday to half day Friday. So if you’re expecting 5 days to get anything in, you’re pretty much disappointed. [Inaudible] is just taking up the Keynotes, Wednesday and Thursday.

**CHUCK:** Yeah. I do regret a little bit that we didn’t get more interviews scheduled for this show on Wednesday and Thursday when I was there because Friday I had to take off because I had other arrangements that I had already made when this got set-up but I couldn’t change my plans, so yeah. So most of the interviews, you’re actually going to hear Jaim and Andrew and not me but yeah.

**JAIM:** I’d say, half of the third episode of the day, things got a little bit weird. [Laughs] It’s a little surreal talking that much podcasting.

**ANDREW:** Yeah. It would have been better to have them more spread out but I still had such a great time recording the ones we recorded. Of course, my favorite was the Project Islandwood episode which is not out yet. I don’t know where it is in the queue/

**JAIM:** Coming in the future.

**CHUCK:** Yeah. The next –.

**JAIM:** But we could use a preview. What is Islandwood?

**ANDREW:** Project Islandwood is Microsoft’s project that allows you to use Objective-C as a development language for Windows. You can write Windows apps in Objective-C and it also includes re-implementation or their own implementation of major parts of iOS frameworks like UIkit, etc. It’s all an open source project.

**CHUCK:** I find that really interesting considering that Microsoft has been trying to get more apps written for Windows phones and the Surface Books and by opening that up people who are already writing apps like these for the iOS platform and making it as easy as they can. I think they may get more crossover from that arrangement. I think it’s really interesting that they took that approach since clearly having people write, Windows Phone apps just didn’t catch on.

**JAIM:** Yeah definitely, when I first heard about Project Islandwood, I’m like, “This [inaudible guy—this is just experimental technology. It’s not anymore close to anything.” But I’ve been talking with the VM; there has actually been some significant apps that have been imported from iOS to Windows. You’ll have to listen to find out which ones but something you’ve heard of. That was my impression of the people that we interviewed. They were— you get the PM roles on the podcast and you think the product person can’t really get into the code. So it’s going to be a high level episode.

The people we talked to were definitely technical people – they were people like us who founded a company, did well, build up some technology and they sold it to Microsoft. Their roles became program managers and evangelist, working on products and that type of the things. So people we talked to were very smart. The guy from [inaudible] — two people from Project Islandwood, Miguel de Icaza, the guy from hockey app. I was very impressed with the guest. I wasn’t expecting to really get to really dig in to the technical stuff but we were able to so I was pretty happy with the episodes.

**CHUCK:** Yeah. There were also other people that I made contacts with that I wanted to try and get on the show. So for example, for JavaScript Jabber we talked to the folks who pulled together the Azure App Services which is something that iOS developers can definitely take advantage of for backend or third party services. They also have things set up so that you can easily set up the new open source version of Parse that was released after Facebook announced that they were shutting it down. So they made that really easy to go set up and get running on Azure App Services. So I’d like to get that interview set up over here and a few others over there where, they do have the services that make things easier. Oh we did talk to some of those folks but there were others that just stood out us, “Oh this has some great crossover here between the two.”

**JAIM:** Yeah. One departure from the conference— the only really major company conference, sponsored conference I’ve been to was WW around the area. And for WWDC, people go just to be around it even if they don’t have a ticket. There wasn’t much happening outside of the conference.

There was a -preparty at the Thirsty Bear, the night before the conference started. And there was the major conference party like the last night, [inaudible] night. So once a night, not much happening, we did our own thing with the .NET— .NET Rocks guy and with the different podcast and we’ll meet up there. But as far as the community showing up and sponsoring different parties, having much of things to go to, much less of that then; maybe you’re expecting with WW.

**ANDREW:** Why do you think that is, Jaim? I agree with you. I definitely think that was true. Why do you think the difference?

**JAIM:** I don’t know. I think – I can’t say. Maybe because it’s a shorter conference?

**CHUCK:** I think it also just comes down to the fact that Microsoft has created that culture around WWDC where—.

**ANDREW:** You mean Apple has [crosstalk].

**CHUCK:** Or Apple. Yeah, Apple has created that culture and that following around WWDC where I don’t know that Microsoft has really cultivated the mass interest in what's going on at their developer conference as much as they— they just generally try and market. They market differently to the developers than they do their fan or purchasing base.

**ANDREW:** I think you’re right but I also think, historically, Apple was the underdog. It’s well known that Apple has lots and lots of passionate fans.

**CHUCK:** Yeah [crosstalk].

**ANDREW:** Especially did and they still do even though they’re now a huge, very successful company and in some ways, more successful than Microsoft, at least financially. But they still have that aura around them, that historical legacy of people who love Apple. I think that extends to developers, too. So WWDC does seem much more like a party and something you go to equally for fun and because it’s valuable professionally whereas I got the impression that most people that go to Build are at Build because they’re— they develop using Microsoft technologies. Their work base for them to be there; it’s valuable professionally. They’re not there because they love Microsoft and it’s a hobby for them, too.

**CHUCK:** So what you’re saying is that Build is more of a professional event; WWDC is more of a cultural event?

**ANDREW:** Well yeah, a little of both. Certainly, the conference itself at WWDC.

**CHUCK:** Oh, of course [crosstalk].

**ANDREW:** Has a bunch of technical sessions. It’s about the new APIs that are coming out and all that. But outside of the conference, there are parties and meet ups and this and that and that’s all of the old Apple.

**CHUCK:** Yeah [crosstalk].

**ANDREW:** Apple fan club, basically.

**CHUCK:** Well, the other thing is, is for example, I listen to a handful of shows on the TWiT Network – This Week in Tech – and I’ll tell you that This Week in Tech, there were a few things that were mentioned that were announced at the Build Conference. For example, Bash coming to Windows. But for the most part, most of those announcements, they didn’t really talk over. But when WWDC happens, even TWiT – This Week in Tech – they spend a good hour or so dissecting the Apple Keynote even though in reality, it’s the same thing between the both. The reason is because Apple just puts this polish and at the same time, they make these big announcements knowing that a lot of the product lines that they’re talking about or things that the consumers want to know about as well. So they have the big show where they bring out all of the things that they’re going to show off in the Keynote, then they go and make show all the developers, all the technical aspects of what they announced in the Keynote. With Build, it still felt they were talking to developers about what developers cared about even in the Keynotes.

**ANDREW:** I think that’s fair. So as we record this, the WWDC lottery is open. Have either of you guys registered and are hoping to go?

**CHUCK:** I have not. I don’t know what week it is.

**ANDREW:** June 13<sup>th</sup> through the 17<sup>th</sup>.

**CHUCK:** So as I value my life, no I’m not going to go this year. My wife’s family is doing a family reunion that week. So it would be my hide [laughs] if I try to go.

**JAIM:** So I put my bid in for the tickets. I’ve already booked a flight. I’ve got a place to stay. So I’ll be there. I might be across the street in [inaudible] Conf but I’ll be in San Francisco.

**ANDREW:** I’ve decided I can’t afford it this year, unfortunately. I actually have a hotel reserved there because I reserved it just in case but at this point, I’m not going to go so I’ll cancel it, unfortunately. I’m sad about it because I want to go but I guess I’ll have to plan further in advanced for next year.

**JAIM:** So one thing I want to talk about is the different technologies that Microsoft introduced. Do you have any—that stuff in the Keynote, they introduced them pretty new, cool technologies. Do you have any ideas for that?

**ANDREW:** Well, I think, my overall take way from the Microsoft Keynote, and we should— I want to say for people listening that have never been to build – so I woke up on the first morning, on Wednesday morning to go to the Keynote and looked at the schedule. It was— the Keynote was scheduled to be two and a half hours long and I thought, “Oh my gosh. That’s incredible.” Because the Apple Keynotes are two hours and even those sometimes get boring for me and I care about Apple. I thought, “Two and a half hours is going to be excruciating,” and it was.

There were parts that were really good and there were parts where I thought, “Just get off the stage. This is boring.” Then I woke up the next morning and it turned out the second day, there’s another Keynote and that one was two hours and 45 minutes. So if there’s one thing that if I just could tear into Microsoft, they need somebody whose job is to edit their Keynotes down to two hours and that’s that. A total of five hours and 15 minutes of Keynote is really actually insane. So you have to filter out about 80% of the stuff they talked about because it really was not worthy of being in the big main Keynotes.

With that stuff filtered, there was some really cool stuff. I think maybe the biggest— the thing that I didn’t know anything about was – not expecting that I thought was really cool was they announced API— I don’t know what’s it’s called but anyway, it’s basically that all of their machine learning stuff is available as a rest API that you can use in your mobile apps or your web apps or any kind of app where they have image recognition and whatever else that’s relying on big data and machine learning stuff that only organization the size of Microsoft can really do that well. But you— any developer can use it now. That was pretty cool.

**JAIM:** Yeah. It’s cool stuff though. One thing I was impressed with was their Cortana API. Cortana is their version of Siri, the voice input but they released an API so developers making apps can actually integrate voice into their applications. That’s something we haven’t seen from Apple yet but I’m guessing if Microsoft’s on it, Apple’s probably get something in the hopper too. So that it might be coming of this WW.

Another thing, along with the Cortana API for – just to have some web stuff, they introduced the [inaudible] of a chat bot which I hadn’t known that much about it, where instead of creating an app, you’ve got a little a voice thing. They mentioned something like ordering a pizza, a Domino’s pizza. It has more intelligence than – if you remember maybe which you order or what your favorite is but you’re interacting with the chat bot just by voice or by typing stuff in. So instead of creating [inaudible] user interface, you’re [inaudible] in a text-based interface or either with voice. So I thought that was a new interesting departure because as we get more into [inaudible] things, maybe we don’t have screens as much. Maybe we get voice coming back if we’re talking to our oven or ref where we don’t necessarily want a screen or somewhere else not looking at it. We could do it through voice or different interactions.

So I thought there were – an interesting way that Microsoft is pushing things forward. So I think that represents a new paradigm that will be pretty important. Even though it’s going to be completely useless for a number of years but think that’s where things are going.

**ANDREW:** I thought that was cool, too. I thought something that was interesting is that Microsoft announced that. Then Facebook’s developer conference which I think is called DA was last, last week. They actually announced something very similar for Facebook messenger— the ability to create chat bots. Anyway, I think then— and of course Slack is already doing that. There’s already bots in slack that can— you can interact with. So I wonder, I— that’s something that’s comes out the left field for me but it seems it’s becoming an important and big trend.

**CHUCK:** Yeah. I thought.

**JAIM:** Yeah, definitely [crosstalk].

**CHUCK:** I thought it was really interesting just the capabilities there. Also, just way that everything tied together so that you could use Cortona in Skype or Skype Bos or you could use them in office or you could them in some of the other Microsoft properties if you have them installed on your system.

**ANDREW:** Yeah it makes me wonder when or if we’ll ever get a Siri API. One thing that makes that a little difficult is that more so than some of the other companies, Apple seems very concerned about privacy. It’s a lot harder to open Siri up to developers while keeping it private and secure.

I don’t know what Microsoft’s doing with Cortona but in general, Apple seems to have that tension making it more difficult for them to provide an API but maybe someday they’ll figure out how to do that. Maybe it will be announced at WWDC. We never know, right?

**JAIM:** That’s my call. That’s happening. Siri API.

**ANDREW:** Well I would really love that and a lot of other people would, too. I think closest you can get right now is HomeKit if you create a HomeKit device that can hook in to Siri. In fact, I think, that’s really the only thing HomeKit gets you right now but otherwise you can’t create your own extensions to Siri. And be able to do that with Cortona’s pretty cool, and I wish to point out that I think that Cortona is available for iOS. It’s not just a Microsoft platform’s thing.

**JAIM:** [Inaudible] Do they have a library for that framework?

**ANDREW:** Well I don’t know about a library but there’s a Cortona app and somehow I—.

**JAIM:** Okay [crosstalk].

**ANDREW:** I understand that it’s— I think Cortona extensions maybe can live server-side or something. I don’t really know how it all works— it should not.

**CHUCK:** Yeah [crosstalk]. I got the impression from the Keynote that yes, they run on the server somewhere. I don’t know to the— to what extent you have to install them in your Cortona app to say I want the Domino’s capability which you mentioned and they showed off. Or what— I don’t know— but yeah. My impression was that— yeah— then it would just do the work and talk to some other server somewhere to get the right thing done with the right API.

Anything else that we should go into about Build or just the show in general, before we start heading toward picks?

**JAIM:** I think we’ve surpassed our audience’s ability to handle Microsoft content. [Chuckles]

**ANDREW:** Don’t worry you’re almost done. Oh, wait no. We have more episodes coming up. But I think that the episode’s we have coming out are really good stuff for iOS developers.

**JAIM:** Definitely!

**ANDREW:** We’ll be back to the non-Microsoft format in a few weeks, right?

**CHUCK:** Yup. Yeah, and I think we’re actually lining up— what’s his name? Ryan—.

**ANDREW:** Ryan Salva?

**CHUCK:** Yeah, because that interview got cut short so we’ll—.

**ANDREW:** Yeah. Well he’s a Microsoft employee but the stuff we’re going to talk about is really not Microsoft-specific stuff. We’re going to talk about Cordova and React Native and things that Microsoft is supporting and embracing but they’re not really Microsoft things.

If Apple wants to invite us to come to WWDC and record podcast, I’m sure we would at least consider it.

**CHUCK:** Yeah.

**JAIM:** I’ll think about it [crosstalk].

**CHUCK:** I would definitely have to take that into consideration.

**JAIM:** Your move, Apple.

**CHUCK:** Alright! Well let’s go and do some picks. Jaim, do you have some picks for us?

**JAIM:** So I’ve got one pick. It’s a blogpost by someone who’s been mentioned on the show but we’ve never really had them on. Brad Larson who’s been— who Janie Clayton does some work with. He’s got— he’s part of the— he did the GPU image library which he’s recently redone for Swift and he did a very lengthy— not a very lengthy but excellent blog post on design process it went with going with Swift and why – some of the justification and how I made the changes. So that is great reading for people who are navigating the differences and the two worlds and wondering why to use one approach vs other or what to change? So I’m going to go with the blog post today. Interesting GPU image 2 redesign in Swift by Sunset Lake Software; that is my pick.

**ANDREW:** I think that’s pretty cool that GPU image has been completely redone in Swift and one thing I wanted to add is that I saw from Brad tweeting but he also, I think, talks about it in a blog post. It’s a Cross-Platform that will run on Raspberry Pi and that sort of things. So GPU image is not just a Mac and iOS thing anymore.

**JAIM:** Yeah. That’s definitely cool.

**CHUCK:** Cool! Andrew, what are your picks?

**ANDREW:** I just have one pick today. It’s a subscription box. I know I picked one of those last week but this is one is different. It’s called Candy Japan. My wife got this for me for some occasion that I can’t remember; I think Valentine’s day. But it’s just— it’s a subscription where two times a month you get a box of candy from Japan and I lived in Japan for a while and they have a lot of candy that we don’t have here that’s interesting and fun like lots of different flavors of KitKat bars and just cool stuff. So anyway, you just get a box with some Japanese candy twice a month. I’ve gotten a few of them now and its good stuff. It’s been a lot of fun to have them show up. So that’s my pick.

**CHUCK:** Yes. Speaking of Japanese food, the ramen in Japantown was oh my gosh.

**ANDREW:** Oh, yes! So we as iPhreaks, we went and got ramen in Japan.

**CHUCK:** I was highly skeptical [chuckles] I will say.

**ANDREW:** Chuck said, “Why is this better than what I can make myself?” He meant instant ramen like 10 cent top ramen. Needless to say, his mind has changed.

**CHUCK:** Yeah. That was so good. We actually went and got ramen in Las Vegas the week after when I was at Micro Conf and it wasn’t as good. Yeah, but I was very impressed.

**JAIM:** So for the pick we went to Ramen YAMADAYA and Andrew was the host because he spent some time in Japan. So he has able to help us out and tell us the good stuff to have but it’s excellent. It’s actually the chain So there’s number of restaurants like in LA and in California but it was excellent. So I didn’t know Japantown was a thing so I was happy to find it. The other ramen was excellent. I’d never really had ramen other than the 10 cent package that I heat up in college. So that was excellent.

**CHUCK:** Yeah. Now, I have to figure out how to make it here.

**ANDREW:** Oh, I don’t know about that, Chuck. I was going to take a class that they had at University of Utah. Continuing education class about making ramen and I hope I’ll do it again because I want to take it. But the kind that we had, takes— it’s quite an involved and long, long process.

**CHUCK:** Alright. Well, Andrew and I are going to partner [chuckles] and open a ramen restaurant.

**ANDREW:** Yeah. That used to be my dream before you could— there are actually good ramen places around Salt Lake, Chuck. I‘ll have to tell you about them.

**CHUCK:** Yeah. Well, you pick and I’ll buy.

**ANDREW:** Okay.

**CHUCK:** Alright. So I’ve got a couple of picks, just some things that I’ve been looking in to.

So one of them is— in fact, I’ll just pick around this thing then I’ll pick around some other stuff next time. But I went to Micro Conf— I’m going to pick that. If you’re doing your own thing as far as your own business, you’re building SAS or selling apps or anything like that, I highly recommend that you check out MicroConf which was the other commitment that I had. I actually went with my mastermind group. So we did a retreat for the first few days we were there and then, went to the conference. Anyway, it’s really focused around small businesses, really small businesses where you have a handful of people, maybe in the company or SAS products are the major things but the real value there is actually the people you meet. They have networking events every evening for all three nights of the conference. The lunch breaks are also terrific ways to get to know people. I just— I can’t say enough good things about it.

While I was there, one of my friends convinced me to give WordPress a try again for the podcast and introduced me to a few things that I am going to pick right now that I’ve made that a lot easier.

One of them is, I think, its generatewp.com. I’ll have to look that up. But basically it allows you to create custom post types which I did for each of the shows in my experimental WordPress set up which is— it’s going to be the set up that I’m going to be using for the show going forward here in a few – a week or two as soon as I get everything moved over but it’s really handy—yeah— generatewp.com.

The other one is advanced custom fields which allow you to add custom fields to your posts. Then, I’m also getting into MemberPress. I actually met Blair Williams who’s the developer behind it. He’s also the developer behind Pretty Link’s plugin. Both of those are things that I am using as well. So, I really am – I’m happy with a lot of these setups. So—yeah—so those are my picks.

One of the things, I want to point out real quick before we wrap up is I do have some Remote Conferences coming up. We have a couple of React Native talks coming up in React Remote Conf and that’s going to be here in a few weeks. Then we’ve also got Git Remote Conf, Ruby Remote Conf, Newbie’s Remote Conf and— I’m trying to think— Robot’s Remote Conf. So if you’re interested in any of those, go check those out as well. There all at allremoteconfs.com. Eventually I’m going to move the conferences over to the same WordPress set up but right now, there all going to remain where they are. So yeah, definitely enjoying that. I’ve really enjoyed the talks. These two gentlemen gave some excellent talks at iOS Remote Conf. Hopefully, hoping to see these grow open to help more people grow in their careers and what they’re doing. So yeah, so I’m going to shout out to that as well. With that, we’ll wrap up and we’ll catch you all next week.

**_[Hosting and bandwidth provided by the Blue Box Group. Check them out at BlueBox.NET.]_**

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
