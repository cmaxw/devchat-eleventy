---
layout: layouts/post.njk
title: >
      Special: iPhreaks Talk WWDC 2016
date: 2016-06-15 01:08:05
episode_number: 
duration: 39:05
audio_url: http://media.devchat.tv/iphreaks/iPhreaksTalkWWDC2016.mp3
podcast: iphreaks
tags: 
  - iphreaks
  - podcast
---

A special discussion about what’s already transpired out at [WWDC](https://developer.apple.com/wwdc/) 2016!&nbsp;Picks
- [Westfield San Francisco Centre Food Emporium](http://www.yelp.com/biz/westfield-san-francisco-centre-food-emporium-san-francisco) (Jaim)
- [iOS 10 Preview](http://www.apple.com/ios/ios10-preview/) (Caleb)
- [Funko Pop! Tees](http://funko.com/collections/pop-tees) (Caleb)
- [Smart Keyboard for 12.9-inch iPad Pro](http://www.apple.com/shop/product/MJYR2LL/A/smart-keyboard-for-12-9-inch-ipad-pro?fnode=3e) (Layne)
- [The unofficial WWDC app for macOS](https://github.com/insidegui/WWDC) (Andrew)
- [Andrew Madsen: Objective-C Class Properties](http://blog.andrewmadsen.com/post/145919242155/objective-c-class-properties) (Andrew)
&nbsp;

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**ANDREW:** Hey everybody and welcome to a special episode of iPhreaks for WWDC. This week on our panel, we have Jaim Zuber.

**JAIM:** Hello. I’m coming from AltConf today.

**ANDREW:** Caleb Hicks.

**CALEB:** Hey, from sunny San Francisco.

**ANDREW:** Layne Moseley.

**LAYNE:** Hello there. I stayed in Utah to watch everything from my couch.

**ANDREW:** And I’m Andrew Madsen also at home in Salt Lake City, taking the week off so I can just sit around and watch sessions all day.

We thought we’d do a special episode here for WWDC. As we record, it’s the day after the keynote so we’ve had a little time to digest and read through and try to learn about all the new things, have watched a few sessions and just thought it would be fun to talk about what we think and what we’re excited about.

We can’t cover everything but this is the stuff that stood out to us.

**JAIM:** We’re just going to read the transcript from the standard platform. We just go for that.

**ANDREW:** Yeah and we’ll do all the accents, too.

**JAIM:** Perfect. That should go well.

**ANDREW:** So Jaim, why don’t you start us off? What stuck out to you about the Keynote and about the state of the yesterday?

**JAIM:** So I think everyone had really high hopes for what was coming out from the keynote and the state of the union. I don’t think they delivered a whole lot. They brought in a bunch of stuff but just small things and I think delivering the big App Store news a week before, everyone thought that something huge was coming. I don’t think we really got anything like that but there was a lot of cool things.

One of the things that I thought was pretty powerful and pretty indicative of how we’re going to write apps in the future is the different extensions they introduced. I’m talking about map extensions, lock screen. We’ve got the Siri SDK messages extensions. Those are pretty subtle things but those are ways to interact with code with what we’re writing without explicitly going to an app. That is where a lot of development is going and it’s cool to see Apple’s approach to that.

And when we were in BUILD and they did a lot of stuff with their bots and with their artificial intelligence, with Cortana-type stuff. So it’s cool to see [inaudible] play for interacting with code without going into an actual app because there are a lot of functionality we can do with development that doesn’t need to be an app because I have way too many apps as it is. I literally use Spotlight to find my phone app on my iPhone last week and I face palmed but it just got to that point where I don’t know where anything is anymore and I don’t want any more apps but there’s still cool stuff I’d like to do with my phone. So I think this gives us some opportunity to experiment with it, find some cool things.

**ANDREW:** Yeah. I think if I had to pick a theme for the Keynote this year, it was that Apple is really serious about something they started in iOS 8 two years ago where their first baby steps into this were the ability for developers to make custom keyboards – probably will get my history a little wrong here but they added some support for image editing extensions and just started to open up a little bit to do what developers do, this non-app extensions that weren’t really possible at all before. It seems like they’re just going full speed ahead with that and opening up further and further every year now. It’s pretty exciting because I think it makes – developers will be able to offer a whole new experience make – hopefully make it so that using your phone is just a better experience all together.

I’m a little concerned by the Siri API because I think everybody was really excited for that and everybody’s anticipating that, have been rumored. It is exciting but it turns out it seems fairly limited to some of the certain classes of features that you’re allowed to use with Siri like write [inaudible] and – I don’t even remember workouts. I don’t have a list in front of me but it’s not just any old thing a developer could think of.

**LAYNE:** Yeah, I was kind of bummed out about it, honestly, because we had some pretty good ideas for implementing Siri kit in our app but we don’t follow into those domains. But at the same time, given Apple’s focus on privacy and everything, I think it makes sense to them to do baby steps again and that’s what they like to do. So picking a couple of domains is a start; it’s probably a good approach for them.

**CALEB:** I think this is exactly the type of scenario where Apple wants to start small and add things as they figure out the right way to do it. If you just open up the API wide open to everybody all at once, it’s going to be really hard to monitor and control over that especially with the intent system and the way that’s set up right now. It would’ve been really hard to do all at once without there being some bad players taking advantage of it.

**ANDREW:** There were a lot of rumors before the keynote about Apple possibly releasing their own Siri version of the Amazon Echo, like a stand-alone hardware device that you put in your house and it’s Siri. They didn’t announce anything like that which to me doesn’t mean they’re not going to. They didn’t announce any hardware whatsoever which is actually, people were saying “that’s normal”; that’s actually not normal. They’ve very often released hardware at WWDC, the Retina MacBook Pro, I know it was and there’s been other stuff since then. But it could be in fall they announce that thing and they’ve got, hey, more new stuff because you can write Siri integrations for the Apple – whatever the thing – whatever they call it, the Apple Echo.7

**LAYNE:** The Mothership.

**ANDREW:** Yeah right. Oh, that would be cool, right? [Laughter] You’ve got a miniature version of The Mothership [inaudible].

**CALEB:** I like a lot of the things that they announced along these same lines with extensions and basically having portions of your app throughout the operating system. The more focus that they’re putting on NSUser activity and just – other different ways to include your app in different places so it’s not just in the suggested apps for the spotlight list or data from your app can be used in text fields that are looking for information about people or information about locations and so there’s a lot of cool stuff where your app can really be a good platform citizen and provide data but also become more useful in different areas of the operation system.

**JAIM:** Yeah, that makes sense. I think the days of your app being an island are limited. Like even within one company, you might be switching between different apps in opening URLs and right now that is a little bit bulky for a lot of things and it’s difficult to do seamlessly. Even opening URL for a Yelp or LinkedIn and it doesn’t go to the right place. Even with that code, it’s difficult to do correctly because you really have to think out your UI layouts but it’s cool to see our code – our apps are going to be like one little piece in the system that integrates with things.

**LAYNE:** Google’s new Gboard keyboard came to mind yesterday because of the whole new messages extensions kind of does away with the need for the keyboard. I don’t know; I just found that interesting because that’s a good example of an app that doesn’t actually need to be an app anymore.

**ANDREW:** Yeah, well I’m going to feel sorry for Google. Although that keyboard, I’ve tried it but I’ve heard some cool stuff about it.

**LAYNE:** Oh, I love that thing. It’s amazing.

**ANDREW:** I thought on of these integration points that they announced that I thought was pretty cool is they’re actually opening up their – releasing something they [inaudible] kit and they’re opening up – essentially, they’re opening up the phone app to be extended by developers so if you make a voice over IP app like Skype or messaging app like WhatsApp or something, you can actually integrate that so that it works basically like the phone, currently, only. The phone app has been [inaudible] in a sense that you can get [inaudible] on the lock screen and answer them.

If you’re looking at your list of contacts in the phone app, you’ll have the option to contact them using third party voice over IP or messaging apps. It looks like they’ve made it so you can set – I don’t know if it’s implicit or explicit but you can set a preferred way to contact a particular contact. So maybe calling them with your actual cellphone is not the normal way that you contact some person and they respect that so now you might choose to call somebody on Skype every time you call them.

**CALEB:** Today, they made it sound like that was going to be learned overtime if you’re consistently calling someone using this specific platform. That’s what would show up when you try and call them. That’s at least the way that I heard it.

**ANDREW:** Oh okay, cool. Yeah, I was barely watching that session. I was watching it but I was doing other stuff.

**CALEB:** I haven’t looked at this; I’m wondering if Google’s new duo app is going to be able to do what they wanted to do with the creepy call screen where [crosstalk] it’s displaying the person on the other side before you answer it. I haven’t looked at the API for that but [crosstalk].

**ANDREW:** I haven’t either.

**CALEB:** I’m guessing though but it could be interesting.

**ANDREW:** Yeah, I hope that it was not very customizable UI on the lock screen that it basically used the system’s UI for phone calls or whatever. You’d hook into it in your app in the same way that you might hook into the audio player controls or something where you’re not customizing and you’re just going to make them control your app. We’ll see. I certainly hope – well, I’m not going to install that app if it does that so I guess I don’t really care.

**JAIM:** So with all those extensions on the lock screen, at what point do we need a second mock screen that actually lock and it doesn’t have a full app on there? Is that coming at the next WWDC 2020?

**ANDREW:** That actually brings up something interesting. I installed iOS 10, the beta, on a test phone. They’ve actually changed the way the lock screen works fairly significantly. For one thing, you don’t – at least on a device with touch ID which mine has – slide to unlock is not a thing anymore and that’s been around since the original iPhone shipped. Now, you press the home button to unlock and you can rest your finger on the home button to activate touch ID and then after it recognizes your finger, it will say “press home to unlock” or it will prompt you for your passcode if touch ID isn’t set up or whatever.

Then you can swipe – instead of sliding to unlock, the lock screen is swipe-able and on the left of the lock screen is the new notifications part of the lock screen where it shows – well, it’s actually more like widgets, I guess, not really notifications but notifications show up on the regular lock screen. Then you can swipe to the right to get to the cam.

They really have changed the way the lock screen works all together.

**JAIM:** Great, now I need a manual to learn how to use the lock screen again.

**ANDREW:** [Chuckles] Yeah. It’s not as bad as it sounds. If you were playing with it, it would be more intuitive than my bad description just now.

This is of course a big theme extension, all these new points for extensions and I think this is going to be something that unfolds as developers get to use this stuff and I will evaluate in six months where I’m actually using any of these as a user. I’m not just excited about it as a developer but there’s a bunch of other stuff announced, too. I wonder what stood out to you, Layne.

**LAYNE:** Oh man, there were so many cool things. One of the things though that I loved most and I hope that works as well as intended was the memory debugging that they showed in Xcode. That looked just fantastic.

I’ve used the allocations debugger instruments for years and years and found all sorts of useful stuff, but the things they showed were – they just looked like the next generation of that where they’re actually showing the relationships of who is managing who in the object graft. That was really neat. Really excited and hopeful that that works as well as they showed.

**ANDREW:** Yeah, it certainly looked impressive. Just the ability to visualize graphically your object graft. And the relationship between objects is a huge thing because we’ve all had that picture in our minds, right, as we try to debug these kinds of issues but we didn’t really have a tool that would actually show us that instruments, you could work it out but it’s not exactly intuitive.

**JAIM:** Yeah. When they were announcing this, everyone’s really excited. They clapped and hollered and I was tempted to do that but I realized that for any – out of any real size that you’ve been hacking on for six months a year, we can’t even debug printing in a lot of cases. So I’m a little skeptical if this is going to be useable for anything other than trivial apps, at least initially but that’d be awesome if it comes.

**LAYNE:** Yeah, I hope that’s not true but I do know the pain of debugging in Swift. It’s so bad so we’ll see. I’m hopeful.

There’s another thing that got me really excited that I actually just watched in one of the videos that they were streaming. Collection views and table views have a new data prefetching protocol that they’re introducing where it will ask for data beforehand before they actually display it on the screen and that sounds like an amazing performance boost. Sounds awesome. [Crosstalk]

**ANDREW:** They said that’s free for apps. For most people, it will just be a thing you get by [inaudible] them.

**LAYNE:** Yup. Exactly. So they’re going to pre-fetch grabbing the cells and then they’re also going to do pre-fetching of the data. So if you have any network request, say like a little image you need to load in a table view cell, they’ll send you a message saying, “Hey, we’re going to be loading this cell. Is there any data that you need to load?” And so that can speed up that kind of stuff, too. It’s really cool. Some really good improvements there.

**CALEB:** It’ll be a fun trick to try the betas and see if you can mess it up.

**LAYNE:** Yeah.

**CALEB:** Really fast, stop, go slow. [Inaudible] to see if we can get to crash, that’ll be awesome.

**LAYNE:** Seems like a nightmare to implement that kind of stuff. Really tough but if it works well, I’m excited about it.

**ANDREW:** I’m, as we speak, writing a little test app to see how it works but it just crashed. [Chuckles]

**LAYNE:** Good start? [Chuckles]

**ANDREW:** Yeah, we’re off to an excellent stuff.

**CALEB:** Andrew, for the win. [Chuckles]

**JAIM:** Andrew won Apple’s [inaudible].

**ANDREW:** Right. I’ll give them the benefit of the doubt. It actually leads me into the stuff I want to talk about. My perspective as always as a Mac developer which is becoming a rare breed among WWDC watchers, but I was watching for new stuff on the Mac, in the App Kit. Of course, besides the name change which I’m sure I’ll get used to but I am not so happy about the lower case ‘m’, I thought there were some nice stuff. It’s definitely not a huge release for developers but it’s kind of an incremental one. At this point, OS 10 is so much – sorry, I should say macOS is so mature that that’s mostly what we expect.

There was a lot of good new stuff that actually applies to both iOS and macOS like for example, all of these tools update that we’re talking about. The two things that I thought were really cool in App Kit were they added support for tabs, which they showed in the keynote as a UI feature. And it is a UI feature but the really cool thing is that it’s actually super easy for developers to implement. In fact, for whole classes of apps, developers need to – they literally need to do nothing. I installed the macOS [inaudible] beta and ran my own Mac app. I did not even recompile it; I just literally downloaded it from my website and ran it and tabs already just worked so that’s pretty impressive. That’s Cocoa at its best where I don’t have to do anything at all and I get this big, new I feature.

Of course, there is some API there if you need to customize things or doing something a little out of the ordinary. But for NSDocument based apps in particular, it’s just completely free.

There’s one class that didn’t really get picked up. It was mentioned in the What’s New in Cocoa session today which I actually missed, but I did some experimenting with it and that’s NSGridView. This is basically like an NSStackView except that it’s 2D so once you lay out things in rows and columns instead of just one direction, it seems like it’s pretty well done and pretty advanced. You can change alignments and centering. You can merge cells kind of like in an Excel sheet where you might have a row where you just want one column in a single row but then all the other rows have more columns or whatever.

It looks like it’s quite powerful and flexible. The bad news is that at least in the beta, there is zero support for it in interface builder. Even importing the header for it gives you an error because they don’t seem to make it a part of the module map for App Kit yet. And I couldn’t even get it to work but it just hung an internal code when I try to do anything with it so I think it is not completely ready yet but that’s cool. My hope is like auto-layout as a whole, it’s kind of a Mac – on the Mac right now and maybe next year, they’ll bring it to iOS because I think it would be useful there, too.

**LAYNE:** Did you see it being a lot different than collection view?

**ANDREW:** Yeah, so GridView is not dynamic. From what I can tell, it’s not really dynamic, long list of stuff. I would say NSGridView is to NSStackView as NSCollectionView as NSTableView. So it’s more like GridView is like a StackView. It’s for doing your apps’ UI layout.

**LAYNE:** Oh, I see.

**CALEB:** Similar to the StackView we don’t have on iOS but – not similar in functionality but similar in purpose.

**ANDREW:** Yeah, exactly. And there’s StackView on OS 10 as well but they’re two dimensional, right? They can either be vertical or horizontal but they’re one stack of things. And if you want to do something more than that, you can embed StackViews and other StackViews and whatever – of course, you’d do that. But GridView is like a 2D StackView so you can lay stuff out in rows and columns.

**LAYNE:** Very cool.

**ANDREW:** I will be more excited when it actually works. There’s also no documentation for it other than just reading through the headers. The API looks well-designed but it’s not like [inaudible] methods. It’s [inaudible] actually a handful of classes and plenty of methods and properties on each one.

**LAYNE:** Awesome. I have one thing to say about this, about the macOS rebranding.

**ANDREW:** Yeah.

**LAYNE:** I think it’s great but I’m a little sad that you’ll no longer be able to not take someone seriously when they say OSX.

**ANDREW:** Yeah, but people are going to call it MACOS [chuckles] then you’ll be able to dismiss them.

**LAYNE:** Yeah, you’re totally right. That’s going to happen.

**CALEB:** We also just get to take them even less seriously if they still say OSX. [Chuckles]

**ANDREW:** Yeah. That, too.

**LAYNE:** That’s totally right. Alright, you got me.

**ANDREW:** I’m fine with it. It’s a little sad because it’s kind of like the end of an era and I have been an OS 10 developer for a long time and it has been a big part of my life and now I’ve got this lame lower case ‘m’ on my operating system but I’m sure I’ll get used to it. And who knows? It probably won’t stick around forever. It will be merged with iOS and change something else.

**LAYNE:** I’m just sad they didn’t bring out a coffin and put it in there.

**ANDREW:** Yeah. They don’t do that stuff so much anymore.

**LAYNE:** No. That was as cool as Steve Jobs.

**ANDREW:** No, they’re not. The most theatrical they can get is Eddy Cue doing a bad dance. [Chuckles]

**LAYNE:** I’m so sad we missed that this year, the Eddy Cue dance.

**ANDREW:** Well, I must say that as much as I did not like the Apple Music section of the keynote, the presenter did a great job. I just think Apple Music is not for me. I already gave up on it. They’re going to be hard-pressed to win me back and it’s just boring for me to watch that during the developer keynote.

**CALEB:** The worst thing was how short they kept it though. Last year, it was so long with multiple speakers and this one was – felt a lot cleaner and more concise.

**ANDREW:** Yeah. They didn’t invite Drake back so at least there was that.

**LAYNE:** Oh man. I think we can do a whole hour long to talk about last year’s Apple Music keynote.

**ANDREW:** Oh, it was horrible.

**LAYNE:** It was the worst.

**ANDREW:** My most retweeted and favorited tweet of all time is some mean comment I made during that [chuckles].

Caleb, what about you? What stuck out to you?

**CALEB:** If you know me at all, you know that what stuck out to me the most was Swift Playgrounds and that whole section of the keynote on learning to code. And Apple’s new initiative that they’re putting out there saying, “Everyone can code.” I’m not sure I 100% by into the fact that everybody can code. There’s some debate there. But I feel like everyone should try to. I feel like this is a great way for Apple to put Swift out in a very accessible way to classrooms to people who only have iPads and not Macs, and people who just want to experiment with this stuff in a way that isn’t intimidate –.

It’s not as intimidating as a big technical book but it’s also more powerful and more interesting than maybe some of the little block-based languages where you tie things together in succession and make the app work.

The playground started off that way with some of the sample stuff they have in there with the move forward collect gem type stuff. But I was playing with this this morning and you can do everything. You can do networking; you can do AVFoundation stuff; you can do all types of stuff in these Swift Playgrounds on the iPad so it’s a lot of fun and that was definitely the biggest thing that stood out to me from the whole event so far.

**JAIM:** Yeah, that was pretty cool. Andrew, you were looking forward to Swift Playgrounds. I was a little surprised initially that they spend so much time talking about learning to code aspect than showing the other thing where you move forward, grab the – whatever that thing it was – because that’s been done a number of times. There are a bunch of things like that, like a light pods, Hour of Code, Code.org where you’re doing similar things like that. I thought about it a little bit longer and I realized, it’s more of a long play for Swift. Get the kids in there, people learning to code, learning Swift so I think it’s why they gave it a lot of time during the keynote when it not really revolutionary. It gives off a longer play so I thought that was pretty cool.

**ANDREW:** Yeah, so I do want to just say I called it – I talked about this on our last episode of iPhreaks last week when we were doing predictions. I had not actually seen a rumor about it. Maybe it was rumored, I don’t know, but it was just sort of – I really wanted it to happen and I think it is really cool. I think software edits best and certainly development environments at their best are really good at being discoverable and easy to jump into and I think that – just from the presentation, I haven’t played with it yet but Apple’s done a good job with that. They want it to be something a kid can start with and immediately see results and have fun. But when they’re doing something really wonderful, they don’t let it stop there and they make it so you can dig in as deeply as you want. It’s not some toy; it’s actually a real thing. I’m interested to see what I can do with it as a developer that already know Swift, that already knows iOS programming.

I also just wanted to mention that Jonathan Penn was one of the people on the team working on that which is exciting. He’s a friend of the show, a former guest on the show before he was at Apple. Seems like he’s doing some cool stuff.

**LAYNE:** Yeah, I started really taking that playgrounds app seriously when I saw this session and he imported UIkit into the playground and was like making views at everything right on his iPad. It was amazing.

**ANDREW:** You know at my alley, they mentioned – I think they showed a slide with a sphero and mentioned being able to talk to hardware which is pretty cool.

**LAYNE:** Yes, I want to see some of that in action because that would be – for a kid or anyone, that would be just super cool to be able to input code and watch a physical device move around. So awesome.

**ANDREW:** Caleb, you said you had installed this – installed iOS 10 on your iPad and I think that comes with Swift Playgrounds. So have you had the chance to play around with it at all?

**CALEB:** Yeah. This morning, I was trying out iOS working with NSURLSession. I was trying to access a couple of difference APIs and thinking about different ways that [inaudible] a couple of things to students at [inaudible] and I did get caught up in Swift 3 syntax a little bit. Instead of NSURLSession shared session, it’s URLSession-shared so some of the syntax thing caught up with me a little bit but overall, it’s just an awesome tool with – we’ve got access to.

Every framework that I’ve tried this morning is available and you can just set up your code to run in live view and that’s what displays there on the right hand side. You can’t compile a whole app using Swift Playgrounds but you can certainly build some really interesting stuff with it so I’m very excited about it.

**ANDREW:** I just barely dug into this but they seem to have opened up the format that they’re using for Playgrounds – Swift Playgrounds on iPad. It looked to me like you could deliver – at least at some point, you’ll be able to deliver your own playground lessons or whatever you want to call it.

**CALEB:** Yeah. They are wanting people to more or less submit content. I don’t know if that means Apple is crowdsourcing content to put into Playgrounds but it’s definitely been a topic of discussion with different teachers and other educators here about how to distribute his stuff and how to collect it back.

I know that’s an on-going discussion. I haven’t heard any firm answers on any of it but I know it’s something that’s being talked about.

**ANDREW:** I also thought it was interesting. I didn’t see it; maybe it was talked about. I should actually have watched – should be watching the sessions more than I am but that is my week off, right?

I thought it was interesting that it wasn’t mentioned in the keynote or at least not emphasized, but the same team have also released some non-software curriculum material, like a teacher’s guide.

**CALEB:** Yes, that seems to be a big portion of this Everyone Can Code initiative which is getting resources into the hands of people that want to learn the code but also the people that can teach people to code. So right on Apple’s site, if you go to the Apple landing page for Everyone Can Code, so apple.com/education/everyone-can-code, right there on the homepage, there’s a Swift Playgrounds teacher guide that is meant for teachers putting programs together with Swift Playgrounds.

I know there are quite a few non-iOS developer but Apple-oriented teachers here that I’ve met at the conference, so the vibe that I get is Apple has brought in a number of teachers to work with this stuff and hopefully get it in place in schools.

**ANDREW:** Oh, that’s cool. That’s pretty exciting stuff. It’s fun to see Apple – this is a direction I don’t think they’ve ever gone in before. Apple’s always been very involved in education – the education market has always been really important for them but in terms of teaching people how to code, I don’t think that’s something they’ve really done before.

**JAIM:** So one thing – now since I was really excited about was Swift 3 is coming and everyone’s worried about your apps breaking or your dependencies breaking. I thought it was really cool that Xcode 8 is going to include both the 2, 3 and the 3.0 libraries – Swift libraries so you can update at your will. I think that’s a really strong selling point for migrating when you’re really to, not because [inaudible] Xcode comes out.

**ANDREW:** Yeah, that makes a little easier migration for those of us who already has a significant amount of code in Swift 2.2.

**JAIM:** I’m not running out of migration scripts; does not do it. [Chuckles]

**ANDREW:** Certainly not doing it right no; maybe when the thing actually ships – Xcode 8 actually ships, I’ll try it but I’ll have things very well committed and pushed through my repository.

**LAYNE:** You don’t want to run that migration in an open branch? I mean, come on.

**ANDREW:** I don’t know. I don’t really put my stuff in Git.

**LAYNE:** Oh. [Chuckles] Use Dropbox.

**CALEB:** Just Dropbox.

**ANDREW:** I just have named folders.

**LAYNE:** You know, we’re around migrations last year and they actually worked really well. We had quite a bit of Swift code.

**ANDREW:** I’m kind of teasing although every time I run the migrations, it fix some stuff but you still have to go through by hand and Swift 3 can fix other stuff and Swift 3 is by far the biggest change they’ve ever done.

**LAYNE:** Yeah, it’s huge and I – we have probably five times as much Swift code this year as with last year and I’m really nervous actually about the migration because it could be bad – bad news [inaudible].

**CALEB:** This is an area that Apple’s definitely thinking about their messaging. They spend a good while today talking about how much Swift code they have as an organization now and how they’re rewriting portions of the doc and other really important features in macOS. They mentioned that the new Swift playgrounds app is completely written in Swift. So Apple’s trying to ease our concerns about having a lot of Swift code in our applications by talking about how much Swift code they’re writing and how important that is for them. So hopefully, things like the migration script are rock solid because Apple is meeting to dog food those and use them themselves as well.

**LAYNE:** Yeah, it seems like they’re trying to give confidence to everybody saying, “Hey [inaudible], you’re not the only ones using this. We’re using it, too.

**ANDREW:** That’s something that’s been a gradual change for them. I guess their using it increasingly but they still are also writing a lot of Objective-C. But I was just saying I think it’s interesting that Apple is using Swift increasingly. It’s something they can’t really – they can’t switch away from Objective-C at least until Swift has API stability and of course, they can’t really [inaudible] long after that for writing frameworks that already exist. I do think it’s interesting that they did not announce any Swift-only or Swift first APIs. All the new stuff in App Kit and UIkit and whatever is all written in Objective-C.

**LAYNE:** It seems like they’re planning for Objective-C to live a long, long life though because they keep increasing the compatibility between the two languages. I get really excited about a lot of that stuff that they announced. I won’t go into the details but there’s a lot there that they’re doing to keep the two languages working really well together.

**ANDREW:** Well, is there anything else that we should really cover? We certainly have not covered everything that’s announced but I don’t want to have a three hour show either. So anything else we should cover before we get to the picks?

**CALEB:** One last thing that I thought was really cool was the CloudKit sharing with some built-in UI for adding people to shared records in CloudKit. That could be something really interesting looking forward as Apple invests more in CloudKit.

**ANDREW:** That went really nice and also that they’re doing the UI part of that for you so you don’t have to write your own invitation UI. Going along with CloudKit, they also announced that you can now ship apps from macOS that use CloudKit and other previously locked up APIs without shipping on the Mac App Store. So you can distribute apps outside the App Store that use CloudKit and iCloud drive and push notifications and stuff that was previously App Store only.

**CALEB:** I really like a lot of the tools in CloudKit. If you’re listening to this and you haven’t given it a shot, it’s definitely worth looking at. It’s pretty powerful.

**LAYNE:** I was really hoping for some server side code. Maybe next year.

**ANDREW:** There is a session later this week that’s a server side Swift session but I have no idea what they’re going to show. It’s not going to be their own framework, I guess but it’s also weird to imagine them talking about how to use some open source frameworks. I guess we’ll see.

**LAYNE:** Yeah, that is interesting.

**CALEB:** I think the description made it sound like they were presenting some different on-going projects so I think some of the different open source stuff will be shared, maybe IBM’s thing.

**ANDREW:** I guess I could see IBM’s things since that’s really part of a big partnership and was obviously going on before they open sourced Swift.

Alright, Jaim, do you want to start us off with picks?

**JAIM:** Sure! So how many times have you guys got excited when someone says, “Hey, let’s go to the food court in the mall and get something to eat?”

**ANDREW:** Uh, not too [crosstalk].

**JAIM:** Zero right? It doesn’t happen. So for the past few days, three people have been like, “Yeah, there’s really good food at the Westfield Mall across the street.

At AltConf, they’re not feeding us so I went over there with a group of people because I want to get something quick and get back to the next session and I had a very good meal. The [inaudible] place there was really good and everyone is [inaudible]. Sounds really lame but the food here is good so I didn’t think to go over the food court in the mall if I needed I quick bite but definitely an option and quite good food. So that’s my pick, Westfield Mall Food Court.

**ANDREW:** There’s actually a surprisingly decent ramen place in that food court and there’s a Beard Papa and cream puffs place so I agree with that pick.

Let’s see. Caleb, do you have some picks for us?

**CALEB:** Yeah. So my obvious pick is if you have an extra device, an extra iPad that you can install that a developer preview with iOS 10 on, play around with Playgrounds. A lot of fun and really cool stuff there.

My second pick would be the Funko Pop! T-shirts. Funko get some cool licenses to things that we’re all fans of – different superhero movies and Star Wars and stuff like that and they’ve got some really awesome Star Wars t-shirts, one of which I am wearing right now.

**ANDREW:** I didn’t know they had t-shirts. I know they’ve got just about every licensed thing under the sun – for their figures, I mean.

**CALEB:** Yeah. A lot of people are familiar with the figures but the t-shirts are a lot of fun, too. So this is my Disneyland t-shirt that’s a little bit different than all of the other t-shirts at Disneyland but still got some Disney heritage now with Star Wars being owned by Disney.

**ANDREW:** Cool. Layne, do you have some picks for us?

**LAYNE:** I do have one. So I got the smart keyboard for the iPad Pro and I was so skeptical that I would like it and it is now, after just a little bit of time, one of my favorite keyboards. It is really well made, super portable and I can type really well and I think it’s great.

**ANDREW:** Do you have the 9.7 inch or the 12 inch?

**LAYNE:** I have the 12 – 12.9.

**ANDREW:** I’ve got a 9.7 inch iPad Pro and I’ve been very tempted to buy the keyboard for it.

**LAYNE:** Yeah. I know it’s a little smaller but the basics of it are all the same. It’s a very good keyboard. I like it a lot.

**ANDREW:** Well, I tried it out in the App Store yesterday and it actually did seem really nice so I just have to decide I want to spend $150 on it.

**LAYNE:** Yeah, the price is ridiculous. It feels like I spent way too much money but I do type on it and so that is good.

**ANDREW:** Nice. Well, I’ve got a couple of picks. My first picks is going to be a WWDC app for macOS. It’s actually an open source app. It’s on GitHub but it’s just a Mac app that lets you see all the – see the schedule, watch – see the description of the sessions and watch the live videos and even integrates with the [inaudible] WWDC so you can search through transcripts of past sessions.

It’s pretty nicely done and yeah, it’s open source and accepting pull requests, too, so if you want to work on it, it’s an option.

My other pick is somewhat self-serving but it’s a blog post that I put up earlier today about a new feature in Objective-C that was, as far as I’ve heard, not talked about WWDC at all but it is there in Xcode 8 and that is class properties in Objective-C. So now, you can have properties on a class instead of on instance of a class and Objective-C. Of course, this is something they added to make bridging in Swift nicer but it’s also nice even in just pure Objective-C code. Those are my picks.

Thanks everybody for coming on!

**JAIM:** Yeah, cool stuff. Looking forward to seeing what happens throughout the week.

**ANDREW:** I’m jealous of you two in San Francisco.

**CALEB:** Maybe next year, Andrew.

**ANDREW:** Maybe next year. Alright, well that’s it. This was a special episode but we’ll be back to our regularly scheduled programming I think on Thursday. Bye everybody!

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**


