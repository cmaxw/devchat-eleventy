---
layout: layouts/post.njk
title: >
  iPS 166 Protocol-Oriented Programming with Natasha Murashev
date: 2016-08-18 07:00:06
episode_number: 166
duration: 41:42
audio_url: https://media.devchat.tv/iphreaks/iPS166ProtocolOrientedProgramming.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:58 - Natasha Murashev Introduction

- [@NatashaTheRobot](http://www.twitter.com/NatashaTheRobot)
- [@natashathenomad](https://twitter.com/natashathenomad) &nbsp;
- [GitHub](https://github.com/NatashaTheRobot)
- [Blog](http://natashatherobot.com/)
- [This Week in Swift Newsletter](https://swiftnews.curated.co/)
- [The iPhreaks Show Episode #092: Unit Testing with NatashaTheRobot](https://devchat.tv/iphreaks/092-ips-unit-testing-with-natashatherobot)
- [try! Swift](http://www.tryswiftconf.com/)
  - [try! Swift NYC](http://www.tryswiftnyc.com/) Use discount code **IPHREAKS100** for \$100 off a ticket!
    02:31 - Protocol-Oriented Programming
- [Natasha Murashev: Practical Protocol-Oriented-Programming](https://realm.io/news/appbuilders-natasha-muraschev-practical-protocol-oriented-programming/)
- [WWDC 2015: Protocol-Oriented Programming in Swift](https://developer.apple.com/videos/play/wwdc2015/408/)
  03:49 - How Protocols Were Used Prior to Swift; Benefits08:12 - Benefits in Regards to Testing09:03 - Protocols in Swift vs Objective-C10:18 - Downsides/Pitfalls When Using Protocols13:04 - [Associated Types](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Generics.html) and [Type Erasure](https://en.wikipedia.org/wiki/Type_erasure)
- [Hector Matos @ AltConf 2016 - Type Erasure Magic](https://speakerdeck.com/hectormatos2011/type-erasure-magic)
- [Gwendolyn Weston: Keep Calm and Type Erase On](https://realm.io/news/tryswift-gwendolyn-weston-type-erasure/)
  17:02 - Keeping Code Clean
- [The Ghost of Swift Bugs Future](https://nomothetis.svbtle.com/the-ghost-of-swift-bugs-future)
  21:22 - Does protocol-oriented programming change the architecture of your apps substantially?22:06 - Structs \> Classes25:13 - Protocol-oriented Programming Code Examples
- [Natasha's Talk](https://realm.io/news/appbuilders-natasha-muraschev-practical-protocol-oriented-programming/)
- [Protocol-Oriented Programming in Swift](https://developer.apple.com/videos/play/wwdc2015/408/)
  27:05 - Changes With Swift 3?28:03 - [try! Swift](http://www.tryswiftconf.com/)&nbsp;Picks
- [NorthFace Surge Transit Backpack](https://www.thenorthface.com/shop/surge-transit-backpack-nf0a2zcp) (Alondo)
- [Andy Matuschak: Let’s Play: Refactor the Mega-Controller @ NSSpain](https://vimeo.com/140037432) (Alondo)
- [The Well of Ascension (Mistborn, Book 2) by Brandon Sanderson](https://www.amazon.com/Well-Ascension-Mistborn-Book/dp/0765356139) (Layne)
- [Prague](http://www.prague.eu/) (Layne)
- [Microsoft Sculpt Ergonomic Keyboard](http://amzn.to/29Vfj5S) (Caleb)
- [ErgoDox Ergonomic Mechanical Keyboard Kit](https://www.massdrop.com/buy/ergodox) (Caleb)
- [Ben North & Oliver Nash: Magnetic core memory reborn](http://www.corememoryshield.com/report.html) (Andrew)
- [Rocket](http://matthewpalmer.net/rocket/) (Andrew)
- [Alexandros Salazar: The Ghost of Swift Bugs Future](https://nomothetis.svbtle.com/the-ghost-of-swift-bugs-future) (Jaim)
- [Hector Matos @ AltConf 2016 - Type Erasure Magic](https://speakerdeck.com/hectormatos2011/type-erasure-magic) (Jaim)
- [How to Stay Motivated: Developing the Qualities of Success by Zig Ziglar](http://www.audible.com/pd/Business/How-to-Stay-Motivated-Audiobook/B002V8MXYK?mkwid=DSATitle_dc&pcrid=81800027649&pmt=b&pkw=_intitle%3Aaudiobook&source_code=GO1GB907OSH060513&gclid=CNHN7c6Rps4CFQRehgodPDwOnQ) (Chuck)
- [Understanding Swift Performance](https://developer.apple.com/videos/play/wwdc2016/416/) (Natasha)
- [Win the Crowd: Unlock the Secrets of Influence, Charisma, and Showmanship by Steve Cohen](https://www.amazon.com/Win-Crowd-Steve-Cohen-ebook/dp/B000N2HD3W/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=) (Natasha)
- [Rainbow Bagels](http://www.thebagelstoreonline.com/) (Natasha)

### Transcript

**CHUCK:** Cloudcasting from the local ramen restaurant.

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you’re hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**_[This episode is sponsored by Buddybuild. I remember having a conversation with one of our co-hosts about the Jenkins setup they have for their build server. And all of the issues that they had – getting it set up, getting it running, and then it stopped working – why not just go with something that just works? Buddybuild is a solution that provides continuous integration and delivery for your iOS apps. If you're looking for a way to get your test running, your continuous integration running, and have your app delivered, then check out Buddybuild. For a free trial, go to devchat.tv/buddy.]_**

**CHUCK:** Hey everybody and welcome to episode 166 of The iPhreaks Show. This week on our panel we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**CHUCK:** Jaim Zuber.

**JAIM:** Hello from Minneapolis.

**CHUCK:** Alondo Brewington.

**ALONDO:** Hello from Prague.

**CHUCK:** Caleb Hicks.

**CALEB:** Hi everyone. I’m at Lehi today at Utah.

**CHUCK:** Me too. Layne Moseley.

**LAYNE:** I’m also in Lehi.

**CHUCK:** Wow. Lehi party. I’m Charles Max Wood from DevChat.tv. And this week we have a special guest, and that’s Natasha Murashev. I’m sure I said that –.

**NATASHA:** That’s good. Hello from New York.

**CHUCK:** You want to give us a brief introduction? You haven’t been on for a while.

**NATASHA:** Sure. My name is Natasha. I’m known on the internet as Natasha the Robot. I do a popular Swift Newsletter called the This Week in Swift. I also run a Swift conference called try! Swift, and the next one is in New York in September.

**CHUCK:** Awesome.

**NATASHA:** I’m also a digital nomad, so I travel and work from anywhere, currently in New York as you heard.

**CHUCK:** That sounds exciting.

**ALONDO:** [Inaudible] endorse that lifestyle.

[Chuckles]

**CHUCK:** So we brought you on today to talk about protocol-oriented programming. And I looked through your slides and things – I couldn’t actually get the talk to load, like the video, so I’m not sure I completely follow what it is. Do you want to give us a brief introduction?

**NATASHA:** Sure. So protocols have been around for a while in Objective-C or just iOS development. For example, like table views or collection views, you implement them as protocols [inaudible] API, but Swift protocols have taken a whole other level that’s banned before. In fact in WWDC session in 2015 about protocol-oriented programming, one of the Swift team members mentioned that Swift has a protocol-oriented language. So instead of thinking object-oriented language like we did with Objective-C, we’re supposed to be thinking protocol-oriented language.

So with Swift, protocols are taken to the next level with protocol extensions where you can have default implementations of methods and you can have associated types which is a type of generics in the protocol. So they're a lot more powerful and we have to do [inaudible] protocols instead of subclassing, for example.

**ALONDO:** [Inaudible] What about the way that protocols are used prior to the new vision of their use in Swift and how we would have used it in Objective-C so to set us up with this journey that we’re going to take?

**NATASHA:** Sure. So if you think about implementing a UITableView, your view controller has to – or data source have to conform to UITableView data source, for example, which tells Apple framework how many columns you have, how many sections you have. So we've had the basic construct; the difference now is that we have protocol extensions, and with protocol extensions we can set defaults. Let’s say by default, the number of sections is one. So now we can use the protocols instead of subclassing because we can have default implementations for them and we can have more mix and functionality like there is in Ruby, for example.

**ALONDO:** So this was giving us a way in order to save on the amount of redundant code that we might have to have for different classes that we’re using [inaudible] for. Is that correct?

**NATASHA:** Yeah. In a lot of cases, you're going to need subclassing. You can just use protocols but default implementations for things. And now instead of subclassing – because you can’t subclass a value type, for example, you can just have it conform to a protocol and it’ll inherit or it’ll be similar to inheriting the behavior. But now you can use more of composition versus inheritance because you can have the same class conform to multiple protocols. So you don’t have to have 10 levels of subclassing, for example, in game development where you can have a monster then you can have a shooting monster and maybe now – I don’t actually play games, but [chuckles].

**LAYNE:** A shooting monster with a machine gun.

**NATASHA:** Yeah, machine gun. Then you have an arrow or something and you might have some kind of strong hierarchy, but then maybe a castle can just have a gun on it also, so now it can shoot. Then you end up having spaghetti code because now you have random subclasses, and then maybe some method is you have in one subclass doesn’t quite fit into another subclass. So with protocols, you can take the shooting behavior out to a protocol and now like a castle or a monster can shoot or they can have an arrow or they can have like an invisible cloak so it makes your code a lot more composable.

**JAIM:** So the benefit of composability is avoiding the nest of objects, trees and structures that anyone who’s dealt with a large enough project [inaudible] language has done [inaudible] all the things you’ve mentioned – trying to subclass everything and [inaudible] because there's tons of complexity and it’s really hard to map that all with the a strict inheritance thing. But with protocols, you don’t have to report to every bit of it; you just need one thing. So you can have a ‘shoots arrows, shoots flame’ – [crosstalk]

**NATASHA:** Yeah, exactly. And when you start out subclassing, you have a clear model in mind. So in theory, it always sounds good because you're like obviously just “I was shooting monsters” so then you start subclassing, but then it usually ends up in real world just becoming really messy. But yeah, protocols kind of have a flat structure, but you can take it out, remove them or add them to anything as you would.

**CHUCK:** I’m curious before we get too much further into – some of this is that does protocol-oriented programming give you other benefits besides just a clean way of sharing behavior? Are there other used cases for it, or is this specifically and only what it’s used for?

**NATASHA:** I think it’s just a tool [chuckles] so it could be used for anything. If you use protocols, in some cases it could be used – one of the examples in my talk that it could be used as a way to clean up the UIKit for example. So for segue identifiers, there's a lot of string base requirements in UIkit, like for segue identifier to be a string. So you can use protocols to also obstruct the way some of the ugliness of UIKit, for example.

**ALONDO:** Are there any benefits with regards to testing when using a protocol-oriented approach?

**NATASHA:** It could be. Again, it’s just – obviously you can use anything for that [chuckles][inaudible] but one thing with protocols is again, like in Swift, where you're supposed to be using value types instead of reference types of classes. So with structs, you can’t subclass them, but you can have them in a test conform to – you can have a fake version of a struct, then you can have it – instead of subclassing it, you can have it conform to the same protocol as the original struct, so you can use it to add fake objects without subclassing.

But yeah, if you write cleaner code, then you’ll have better tests; or the vice versa – if you can write testing first if you write cleaner code.

**CHUCK:** One thing that I saw in the slides was that it seemed like the Swift had a bigger focus on protocols than Objective-C. So you mentioned we already had this in Objective-C and we've talked about some of that, but how is Swift different and how does that promote the use of protocol-oriented programming?

**NATASHA:** The biggest thing is in Swift, value types are encouraged. We have enums and struct which are a lot more powerful in Swift than in Objective-C. So when you're using value types, those can have a subclass. So protocols are basically – I wouldn’t say a replacement, but they are a way around the problem that you can’t subclass a struct.

So if you're using value types, protocols will be a lot more natural in Swift. But I had the opposite happened when I started Swift, I didn’t probably think about it much so it was just running Objective-C code in Swift and I was running all classes, and then I was like “uh, I’m supposed to – someone told me I’m supposed to do value types more”, so I would do value types, and then I’m like “I can’t subclass this”. So protocols are the solution to that. With protocol extensions, associated types, that gives us the power to use value types a lot more, which makes for safer code in general.

**ANDREW:** Are there any downside or pitfalls when using protocols – situations you’ve run into a protocol-oriented programming just doesn’t really work well?

**NATASHA:** The main one is just a limitation of the current version of Swift, but I don’t know if you worked with protocols with associated types. It’s a way to do generics with protocols and they don’t work as you expect. So you can’t just have a variable and say it just conforms to this protocol; you have to – the compiler will give you errors. You can’t have an array of all objects that conform to a certain protocol unless you use type erasure which is a lot more complicated. So I know the Swift team and there's an evolution proposal already in review to make it a lot better, but it’s a very complicated problem.

So when you're using it for the first time and you don’t know about this, then it just won’t going to behave the way you want it to. If you use it naturally, just place subclassing, then you're like “I can have an array of all objects that perform to a protocol”, but then the compiler will give you an error and that’s very unintuitive or it doesn’t work.

**ANDREW:** Another problem I've ran into with Swift with protocols that has frustrated me is something that actually works in Objective-C, which is it doesn’t seem like there's an easy way to say that you want, for example, a [inaudible] to be a certain class or type that also conforms to a protocol. So you can’t have a property that is a UIView Pencil that conforms to such and such protocol, and say you want an object that conforms to that protocol or a UIViewController, but not both. You [inaudible] do that in Objective-C.

Have you run into that? Is there a workaround that you found that works well, or is it a problem that I shouldn’t be hitting into because I’m really just doing something wrong?

**NATASHA:** Yeah, I haven’t run into that. One thing with protocol extensions, you could constrain them to a certain type. So you can say this extension or these methods in this extension only apply to anything that’s UIView, and that’s a little bit [inaudible]. But you can have [crosstalk] extensions that only are constrained to a certain type.

**ANDREW:** Right. Well, that’s something I – and that’s the other way around, but it [inaudible] hit me a few times and I feel like I must be missing something because nobody else talks about it. But that’s actually a pattern I use in Objective-C fairly often. You have UIViewController and then constrained through a protocol and then it can be any kind of UIViewController but it has to be a UIViewController.

**NATASHA:** Can you try if it works with a where clause so you can just [inaudible] something conforms to a protocol?

**ANDREW:** I actually haven’t thought about that. That’s something I have to try.

**NATASHA:** Ah, you should be able to do it. It might be complicated [inaudible].

**JAIM:** So you talked a little bit about associated types and type erasure [inaudible] generics when you come from a C# or a Java background and you expect Swift generics to work like they do in those languages. You're going to run across these terms very quickly because it doesn’t work like you're expecting. What are these – what are associated types or type erasure? How do we do that?

**NATASHA:** Sure. So associated types is when you have a protocol, so you can have either like a Pokémon – you guys are mentioning Pokémon Go, and that can have an attack function,&nbsp; and when it attacks it returns whatever the power – so different Pokémons, it could be lightning, it could be rain, or just water or whatever the other attack options are. But because it’s a protocol, you don’t know what that returns is, but you do want all Pokémon to have the power to attack. So instead of saying what the power is that the attack returns, you can have an associated type or this is a type of generic that says that it can [inaudible] protocol, but will specify what type of object it returns.

So like a Pikachu would return lightning, but it’s up to one Pikachu conforms to the Pokémon protocol. It implements the attack method and it’s going to return the lightning. But the protocol itself does have commit to a type. The problem is if you want to have an array of Pokémons which are all protocols, you can’t, and you will in the future with Swift, but currently it will give you an error that says it doesn’t know what type it is.

So a type erasure is like a complicated thing, but – I don’t even know if I can explain it, but you basically wrap the Pokémon into any object type where you pass in the Pokémon and you have that object – that new kind of fake object or like a generic object conform to that protocol, but you pass in the actual Pikachu in and now you can save its attack function or anything else that conforms to the protocol, and now you can have an array of any objects that conform to the Pokémon protocol. So that’s a way to get around that constraint of not being able to have an array of Pokémons; you just wrap them in an object and now you can have it.

**LAYNE:** So what [crosstalk] fix that in Swift 3 that power won’t be necessary, right?

**NATASHA:** Yes, Swift hopefully [chuckles].

**LAYNE:** Because it seems kind of [inaudible].

**NATASHA:** Yes. [Crosstalk] It’s not – there's a talk that my friend gave at AltConf and everyone was like “ok, I kind of get it, but how do you explain that to a junior developer or just any developer?” and that’s very boiler plate code. So it's definitely not something you want to learn for such an intuitive thing, but yes, it should be just you can have an array of Pokémon if you want and you can go through them and have a multi-attack.

**JAIM:** Yeah. I saw that talk at AltConf and I was excited because I didn’t really know what type erasure was. And after I saw it, I understood the talk and “oh, that’s the only hack I had to do to get generics work like in Swift.

So is type erasure coming in Swift 3? I've heard mixed reviews or mixed – [inaudible] it was like pushed off. Do you know?

**NATASHA:** I’m not sure if in Swift – I know there's a proposal and it was accepted so I’m guessing it’s Swift 3, but it is a complicated implementation that’s why they haven’t done until now, so I can’t verify it.

**JAIM:** Ok, so it’s coming. We’re just not sure, but it’ll be nice to be able to use generics in a reasonable fashion.

**CALEB:** So is there a particular strategy you recommend for keeping your code clean when you want – you added the default implementation to your protocol, but in one of the classes that’s adapting that protocol you want to add something to the default implementation. So you want to keep that default implementation, but add to it.

**NATASHA:** One thing about the default implementation, you can choose not to expose it as part of the protocol and then nothing can overwrite it. So they explained that in the WWDC session, but if it is available in the protocol declaration, then anything can overwrite it.

**CALEB:** So you haven’t come across a strategy for using the default implementation, but also adding to it in that [inaudible] almost like –.

**NATASHA:** I personally [crosstalk].

**CALEB:** Super [inaudible] or something like that.

**NATASHA:** Yeah. I personally just use the default implementation without actually exposing it to the whole protocol. So usually, because I think it’ll be too dirty if you have a random default implementation, so for me default implementation are just something that everyone can use and it’s boiler plate code.

So for example, if you want the view to shake, you can have a shakable protocol and you'll have a function for constraining to all the views that have a shake function, and shaking is the same across it. If you want to control how much it shakes, like by how many pixels, then you would pass that in as a parameter and it’ll apply. But I’m not a fan of creating; I just use default implementation just for the sake of it. I try to make sure that they're actually [inaudible] use and not maybe overwritten by everything; then you should just have it as a protocol function, not a default implementation, because in that case it’ll be confusing because you're going to be like “oh, am I supposed to overwrite this”. I think in Java there's inheritance or – sorry, interface, and then some functions you have to say “make fatal error. Make sure to implement this” and that’s not I don’t think where we want to be, so I recommend making the default really the default, and if it can’t be a default, then just make it a protocol function that everything has to implement.

**JAIM:** I agree 100%. Caleb, if you do a default protocol implementation and try to overwrite it in a class that implement the protocol, you're going to run into a bug so hair-raising and scary. You will [inaudible] and walk away for 3 days.

One of my picks is the Swift Bugs of – I think it was the Swift Bugs Future which talks about a really nasty bug if you try to mix regular inheritance with a protocol extension. So don’t do it. Stick with what Natasha’s saying. Keep your default implementations. It’s something that simple that everyone’s going to use. If you need to mix and match things like that, take a different approach.

[Crosstalk]

**ANDREW:** [Inaudible] same problem and it was horrible.

**CALEB:** I've only briefly done some protocol-oriented programming, but in the project that I was designing for some students and ran across a case where I wanted everything in the default implementation, but also wanted to add some stuff to it. But I agree with what both Natasha and Jaim and Andrew – what all of you have said; so that’s great. Thank you.

**LAYNE:** Is there some way you could mark it as final or something so that no one can mess with it?

**NATASHA:** Yeah. That’s just by not putting it into a protocol declaration. If you have a shake function in the extension but not in the actual protocol, then nothing can implement it.

**LAYNE:** Oh, I see. Ok yeah, that makes perfect sense. That’s great.

**JAIM:** The trouble is how it’s just matched with the protocol extension and it’s static; with classes it’s a little bit more dynamic and they mix and match in ways that are not obvious at all.

**LAYNE:** Interesting.

**JAIM:** I don’t want to go into the weeds. [Inaudible] that’s one of my picks that explains [inaudible]. It took me 3 times reading it before I posted what was happening, but whenever I cross the problem I knew what was going on so it will save you some time.

**ALONDO:** I have a question about – a little more general. So once you start taking this protocol-oriented approach, does it change all the architecture of your apps substantially?

**NATASHA:** One thing I mentioned is using value types, and again if you're just using it and you're writing classes, then it’s just a tool. So you can write everything almost like you did in Objective-C and just use protocols and it probably wouldn’t change, but it just – putting the whole package together. So are you using structs instead of classes, then you're going to be using protocols a lot more naturally, such as kind of one tool in everything and there might be ways to use more functional code also in Swift, so it’s just how you use it.

**JAIM:** So Apple’s given clear direction to use a lot more structs than classes. Have you gone that direction? Are you on board with it? Are there areas where classes make sense?

**NATASHA:** So the only place for me that classes make sense are within Apple’s own frameworks. So almost all of the frameworks you probably need to subclass, so anything in UIKit you have to subclass from UIViewController. Anything even – there's a lot of places where you have to subclass from [inaudible] object to be able to conform to a protocol. So anywhere where the framework makes you subclass – so I don’t believe in fighting the framework, so just go with it, but there is a way to extract as much logic as possible and put it into structs and to minimize the damage of having shared state.

In some cases, you do want shared state so you would the classes, but most of the time if I have clear isolating logic or object that I can move away from Apple’s frameworks restrictions, then I do that. I just create a new object or a new protocol or a new view model. So for example, UIViewController you have to subclass. But the logic that’s behind what is displayed can be extracted into view model, which is a struct that might conform to protocols. So as much as possible, use structs but that’s not possible within Apple’s frameworks, and in that case you just go with the framework.

**JAIM:** Ok. So you're saying if Apple makes you do it, create a class; otherwise, structs.

**NATASHA:** Yes.

**LAYNE:** And is the main benefit of that just the shared state and mutability or are there other things?

**NATASHA:** Well, the shared state is to a reference types. So when you pass around a class, if something else changes, a variable in that class, then everything that’s holding onto that class will be changed. But with structs, you're just passing copies around. So it’s a lot more logically sound in terms of – that it’s a clean copy, you can change it, but it’s not going to modify every single thing that it touches. So it just a way to write more clean code, but of course they have applications and we do need state.

So the key is we do need states, you might have some kind of [inaudible] because you need to, but try to minimize the state and isolate it as much as possible so you have the most control and understanding of what is actually holding the state and what is actually could be isolated into its own object that’s inert [inaudible] once you create them, you can’t change them unless they are referring to a reference type and that’s a more complicated situation.

**LAYNE:** So it seems that using structs and enums is really for your own protection as a programmer.

**NATASHA:** Yes, yes.

**LAYNE:** Because we can’t – we don’t want to trust where things are coming from. If copies are being shuffled around, you don’t really care where it came from, and that makes it a lot easier to do your job.

**NATASHA:** Yes.

**JAIM:** So what are some examples of code that we can look at to see examples of protocol-oriented programming?

**NATASHA:** You can probably watch my talk because I tried to give live or really practical examples; but also from WWDC in 2015, the talk on protocol-oriented programming. The other good talk is about I think also from 2015 on Swift design and they talk about fixing segue identifiers using protocols and making them more Swift-y. So that’s a really good talk as well. I’m sure there are just really good libraries as well if you just look in GitHub and look for Swift libraries.

But one thing I do look for on GitHub when there's new libraries, I look for is the implementation that I can conform to a protocol or they have to subclass something. If I have to subclass something, then I’m going to question the library because it’s not done as Swift-y. And one good example of those could be you might want to subclass UI text field and there might be a great library that maybe shows you maybe base your field shake [inaudible] when the wrong answers is then or validates your logic or something. Well if I subclass it, I can’t use another great library that highlights my field or something or makes it a different color or style. So that’s – when you look at those libraries, that’s something to look for, and if they are made in a way where you conform to a protocol, that’s a good library to look at for the good.

**JAIM:** Ok, [inaudible] developers, the use of subclassing. Natasha’s [inaudible] this week in Swift.

[Chuckles]

**NATASHA:** That’s [inaudible].

**CHUCK:** So you're going to make your own list of libraries called no-no [inaudible].

**ANDREW:** I wonder if any of this stuff we've talked about is going to change majorly in Swift 3. Are there new features or changes that are coming that are going to – because in Swift 2 which added protocol extensions, that was a huge thing that made protocols much cooler. Is there anything similar to main Swift 3?

**NATASHA:** The big thing in Swift 3, it shows the grand renaming. So I don’t think there's anything that’s specifically around protocols. There is around more privacy controls for files. So I think there's now like a final and open – so if you're writing a framework, you can be more strict about what's accessible to the outside, but I think a lot of it is just cleaning up and renaming things and making it more consistent.

**ANDREW:** Well, yeah, this grand renaming, I’m glad we’re getting it out of the way, so I’m excited for Swift to stop changing so terribly much.

**JAIM:** So since the last time you were on, you started a new endeavor. You’ve been organizing conferences. So you had one in Tokyo and you’ve got another one coming up. Can you tell us a little bit more about the conference?

**NATASHA:** Sure. It’s really fun. So I went to visit Tokyo, I think, probably a year and a half ago, and I liked it and I liked Swift. And I've talked to a lot of other conference speakers because I speak at a lot of conferences and they are like “welcome to Tokyo”. A few organize the conference or there is a conference, so at some point I just decided to make one happen, and it worked out pretty well. I had a lot of fun. There were 500 people from all over the world. I think a hundred or like 30 students flew in from the Philippines. There are people from Australia, Ukraine, Russia, the US. One pretty big – and I had a lot of fun. I've never thought of myself as like someone who would want to organize a conference, but it was really, really fun.

And I like to travel, so that combines my passion for travel and bringing people together from all over the world and building communities in Swift, so it’s worked out really well. And I finished the Tokyo conference. I got [inaudible] to do one in New York [inaudible] again. One of the big things about Tokyo was everyone wanted to come there and part of it was being part of the city and being [inaudible] of the city. So I thought New York has a similar pull to it, and there aren’t really any iOS conferences here. There's a big community, there's a lot of meetups, but not as many iOS conferences. So why not? We’re going to have I think 23 speakers from all over the world again, and they are really good developers that talk about Swift and iOS development and there's some wild card, more fun talks like design and we’re going to have Airplane Mode from Dave Wiskus. They're going to do a party and there are going to be glowsticks, so it’s just like a really big Swift event. It’s in September 1st and 2nd.

**ALONDO:** Awesome. I was wondering if I would be in the United States at the time, and I think I will be.

**NATASHA:** Oh, nice.

**ANDREW:** Are you going to do another one in Tokyo? I hope you do. I didn’t get to go this time, but I commit to going if you do it again.

**NATASHA:** Ok. That’s good to know. Yeah, I’d like to plan one conference at a time. So I’m doing the New York one [crosstalk], then I would think about the next one.

Yeah, Tokyo will be a lot of fun. I know everyone wants us to do it. And the funny thing is last year at the conference, I mentioned to the speaker – and they speak culturally; they have to use examples that would be pretty neutral, and basically everyone gets Pokémon.

[Chuckles]

**LAYNE:** Not surprised.

**NATASHA:** Because just like regular things might not translate to all culturally to Japanese members, so it’s just really funny because people were just – it was a joke and all the Japanese attendees were like “what? Why is everyone obsessed with Pokémon?” But I think now with Pokémon Go, we can make the conference even more popular. So I actually design a logo for a conference with the Pokémon ball and the Swift logo in there.

**CHUCK:** You gotta catch them all, right?

**NATASHA:** Yup. Yes, it’s coming to Tokyo next – I think next week.

**CHUCK:** Very cool. Well, before we get to picks, do you want to let people know anything else you're working on or how to follow you on Twitter – anything like that?

**NATASHA:** Sure. Online I’m Natasha The Robot for anything Swift. And it’s natashatherobot.com or @natashatherobot on Twitter. I do have another Twitter for my travel or digital nomad personality and it’s called @natashathenomad. Also, if you do want to come to the conference, I do have a discount code. If you use the discount code IPHREAKS100, you'll get a \$100 off and it is only – we don’t have that many tickets, so get the tickets fast. I think that’s it.

**CHUCK:** Alright. Well, let’s go ahead and do some picks. Alondo, do you want to start us off with picks?

**ALONDO:** Sure. My first pick is not technical, and like Natasha, I am also a digital nomad. I've been travelling since February 1st of this year, and I have already gone through a couple of backpacks. And I realized that [inaudible] the rule that you get what you pay for, and what I did learn both from [inaudible] is to settle on a bag that could take the pounding of multiple hikes and side trips in addition to the daily use of going in and out of workspaces.

One of the bags that’s constantly being recommended is the NorthFace Surge Transit Backpack, which is what I’m currently using. I picked it up recently after the [inaudible] in London, and it is really really a tough backpack. It’s hold up really well, and I've seen it hold up for other people as well over the course of this year. So that’s my first pick.

My second pick actually is a talk that Andy Matuschak gave on refactoring the Mega-Controller, and I found it after watching Natasha’s protocol-oriented MVVM talk. I started referencing some of the other talks that she was referencing and I came across this talk and it really helped me to rethink, not only in terms of just using Swift which I’m really adopting at this point, but also just thinking about making my controllers really just do one thing and as well as thinking about some of the other components that are a part of an application, where they should go and how they should be architected. So it’s [inaudible] a bit. So those are my two picks.

**CHUCK:** Alright. Layne, what are your picks?

**LAYNE:** My first which is non-technical, but I've been totally into this book called The Well of Ascension which Book 2 of Mistborn by Brandon Sanderson. If you like that, it’s fantastic.

And then my second pick, also not technical, is where Alondo is – Prague. Prague is a wonderful place. I would go back anytime. I lived there for a couple of months and I totally dig it. So, super jealous that you're over there right now.

**ALONDO:** I second that pick. It is awesome.

**CHUCK:** Caleb, what are your picks?

**CALEB:** So I've got two. They're both actually keyboards. So I started getting some RSI issues a few months back – actually about a year ago, and I first started using the Microsoft Sculpt Ergonomic Keyboard. So I strongly recommend that, and it helped quite a bit with forcing me to type with – that I should be typing.

But if you are a little bit of a keyboard nerd and you want the major clicky-ness which you may have heard earlier in this podcast because of my poor recording setup, I also recommend the ErgoDox which is actually a keyboard that you – when you order it, you get sent a box of parts and you get to solder it together and put all the pieces together and [inaudible] that you want it to look like. And I've been using that recently and had to relearn how to type, but it’s a fun split ergonomic mechanical clicky keyboard. So links for both of those will be in the notes.

**CHUCK:** Cool. Andrew, what are your picks?

**ANDREW:** Got two picks as well. My first one is an article that I twitted about [inaudible], but I just loved it. It’s a report by a couple of guys who built a core memory shield for Arduino. Core memory was what was used for RAM before transistors were a thing and integrated circuits – we used to have memories on integrated circuit. I don’t know – I just think it’s old and of course obsolete, but it’s this really elegant cool and actually fundamentally simple thing that they’ve built themselves and got working. It’s only 32 bits of RAM, but they did a great paper all about how magnetic core memory works and how they got it to work on Arduino. Anyway, it’s really cool and I loved it.

My second pick is an app that I've been wanting to make for a little while and probably never would get to, and I just found out somebody else already made it so I’m really happy, and it’s called Rocket. It’s a Mac app that basically gives you the Slack emoji shortcuts in any app on your Mac. So when you're typing – instead of having bring up the emoji pic or finding the one you want, you just type – whatever – :rocket, it will give you the rocket emoji. So I just downloaded it, but I’m already enjoying it a lot. Those are my picks.

**CHUCK:** Cool. Jaim, what are your picks?

**JAIM:** I've got two picks. What I talked about earlier, we talked about protocol extensions – The Ghost of Swift Bugs Future. If you're thinking about mixing and matching protocol extensions with classes, read this first; it will stray you away from that line of thinking.

Second, I just want to piggyback on – Natasha recommended the type erasure talk by Hector Matos. And by the time we launch this, it maybe online. It was at AltConf2016 and the [inaudible] is Type Erasure Magic. So if you want to know more about associated types and type erasure [inaudible], good talk that shows the technique of making it happen. Those are my picks.

**CHUCK:** Alright. I’m going to jump in here with a couple of picks. The first one is a book that I read last week. I actually listen to it on Audible. It is called How to Stay Motivated by Zig Ziglar. And Zig Ziglar is one of these legendary motivational speakers and he talks a lot about a lot of things including how to do well in business, how to sell. He also talks about just how to live better. He talks about marriage – all kinds of stuff. And this one is how to stay motivated and he talks not just about how to pump yourself up so you can get stuff done, but it really is about what kind of life do you want to lead and how do you get motivated around that and how do you think about yourself, how do you think about the world, how do you think about other people, how do you think about the other projects that you have in your life, and how those fit in with the life you want, and that how do you use that to drive yourself to be motivated to make the changes necessary to get those up done, and it is excellent. So I highly recommend it.

I actually have a goal to listen to listen to all of these stuff by Zig Ziglar on Audible by the end of the year, and so I’m working through that right now. Currently, actually reading his book See You at the Top – no, over the top – I’m reading Over the Top and I’m listening to a few other audio programs they have on Audible. They have most of his basically tapes on Audible now, and you can listen to those and they are tremendous.

And it’s funny because there are a lot of things, a lot of practices that you can get into from it, but overall generally just the outlook on life and the way that he explains certain things and the way that I've changed my thinking about some of the things that I’m doing have made a positive difference in my life, even though I probably can’t point to a single one that has accounted for the majority of that positive change. But anyway, I’m going on and on about Zig and I just love it. So yeah, so those are my picks.

Natasha, what are your picks?

**NATASHA:** I pick [inaudible] WWDC 2016 session is the Understanding Swift Performance. So should you watch one talk, I highly recommend that one and it really helps to understand what makes your code more performed, but also understanding how Swift works and how value types and reference types work and how they work in combination.

And for the book, I’m currently reading a book called Win the Crowd and it’s by a magician who like – I think like a million-dollar magician. He only has million-dollar clients or billion-dollar clients. So it’s a little over the top, but it’s actually really good for public speaking and had to become a better speaker. And I think, he mentions that everywhere you go is a stage, so you just have to present yourself better in all situations.

And finally, I’m going to talk about my big thing. When I travel and I go to a city, I also work, so I can’t do every single thing. So I usually have one big goal for my trip, and the one big goal from my New York trip was eating Rainbow Bagels from Brooklyn, and I finally got to go last weekend and it was just really phenomenal. Those guys at Rainbow is a bagel artist, so you could create this beautiful bagels that are all different colors. And there's like cotton candy on it, and there's [inaudible] cream cheese, and there's fairy dust which are like little stars. It’s like eating a cake and really exciting. So if you do visit New York, I highly recommend going out to Brooklyn and getting Rainbow Bagels. That’s it.

**CHUCK:** Awesome. Well, thank you for coming. Hopefully people will go check out the try! Swift Conference and get involved in some of the other stuff that you got going on.

**NATASHA:** Ok, thank you.

**CHUCK:** We’ll wrap it up, and we’ll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN.&nbsp; Deliver your content fast with CacheFly. Visit cachefly.com to learn more.]_**
