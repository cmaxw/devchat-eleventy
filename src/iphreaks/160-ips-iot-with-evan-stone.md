---
layout: layouts/post.njk
title: >
      160 iPS IoT with Evan Stone
date: 2016-07-07 07:00:22
episode_number: 160
duration: 58:15
audio_url: https://media.devchat.tv/iphreaks/IPS160IoT.mp3
podcast: iphreaks
tags: 
  - iphreaks
  - podcast
---

01:45 - Evan Stone Introduction
- [Twitter](https://twitter.com/Interactivlogic)
- [GitHub](https://github.com/InteractiveLogic)
- [Blog](http://interactivelogic.net/wp/)
- [Cloud City](http://www.cloudcity.io/)
02:38 - [IoT (Internet of Things)](https://en.wikipedia.org/wiki/Internet_of_things); iOS & IoT
- [iBeacon](https://en.wikipedia.org/wiki/IBeacon)
06:48 - Panelist IoT Device Experiences
- Andrew & Caleb: [Wired In](https://www.kickstarter.com/projects/wiredin/wired-in-wireless-productivity-sign-with-arduino-a)
- Layne: [Nest Thermostat](https://nest.com/thermostat/meet-nest-thermostat/)
  - [Amazon Echo](https://www.amazon.com/Amazon-Echo-Bluetooth-Speaker-with-WiFi-Alexa/dp/B00X4WHP5E)
  - [Rachio Smart WiFi Sprinkler Controller](http://rachio.com)
- Caleb: [RFduino](http://www.rfduino.com/)
- Chuck: [Ring Wi-Fi Enabled Video Doorbell](https://www.amazon.com/Ring-Wi-Fi-Enabled-Video-Doorbell/dp/B00N2ZDXW2)
14:00 - [Near Field Communication](http://www.nearfieldcommunication.org/)
- [Core Bluetooth](https://developer.apple.com/library/ios/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html)
- [Core Location](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CoreLocation_Framework/)
- [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy)
17:06 - Getting Started: Devices
- [The Bean](https://punchthrough.com/bean)
- [LightBlue Bean+](http://store.punchthrough.com/collections/all/products/lightblue-bean)
- [Arduino](https://www.arduino.cc/)
  - [BLE Shield](http://redbearlab.com/bleshield/)
- [The Particle Photon](https://store.particle.io/) &nbsp;&nbsp;
- iBeacons
  - [Estimote Beacons](http://estimote.com/)
  - [Gimbal](http://www.gimbal.com/)
    - [Pop Up Labs](http://www.popup-labs.com/)
21:35 - Starting Projects
- [Tile](https://www.thetileapp.com/)
- [iPhreaks Episode #127: iBeacons with Azam Sharp](https://devchat.tv/iphreaks/127-ips-ibeacons-with-azam-sharp)
- [Samsonite Track&Go™ Suitcase](http://destination.samsonite.com/en-eu/news/samsonite-introduces-trackgo-reliable-solution-usi)
- 24:19 - Devices Connected to the Internet
- [iPhreaks Show Episode #158: Internet of Things (IoT) with Olivier Bloch (from Microsoft Build Conference 2016)](https://devchat.tv/iphreaks/158-ips-internet-of-things-iot-with-olivier-bloch)
28:19 - Threshold of Devices
- [A.I. (Artificial Intelligence)](http://www.imdb.com/title/tt0212720/)
- [Apple HomeKit](http://www.apple.com/ios/homekit/)
33:05 - Security
- [Security in the Internet of Things](http://pages.path.windriver.com/-WP-IoT-security-in-the-internet-of-things)
- [TechCrunch - Why IoT Security Is So Critical](https://techcrunch.com/2015/10/24/why-iot-security-is-so-critical/)
38:57 - Core Bluetooth Work Processes
- [Texas Instruments Sensor Tags](http://www.ti.com/sensortag)
&nbsp;Picks
- [PMKVObserver](https://github.com/postmates/PMKVObserver) (Andrew)
- [Electric Imp](https://electricimp.com/platform/hardware/) (Andrew)
- [iPhreaks Episode #030: Building Hardware for iPhones with Joel](https://devchat.tv/iphreaks/030-iphreaks-show-building-hardware-for-iphones-with-joel-stewart)&nbsp;(Andrew)
- [iPhreaks Episode #043: Core Location & iBeacons with Josh Johnson](https://devchat.tv/iphreaks/043-iphreaks-show-core-location-ibeacons-with-josh-johnson) (Andrew)
- [iPhreaks Episode #059: Device-Connected Apps with Carl Brown](https://devchat.tv/iphreaks/059-iphreaks-show-device-connected-apps-with-carl-brown) (Andrew)
- [iPhreaks Episode #127: iBeacons with Azam Sharp](https://devchat.tv/iphreaks/127-ips-ibeacons-with-azam-sharp) (Andrew)
- [iPhreaks Episode #107: Andrew Talks Arduino](https://devchat.tv/iphreaks/107-ips-andrew-talks-arduino) (Andrew)
- [Yoav Schwartz: Practical CoreBluetooth for Peripherals](https://realm.io/news/yoav-schwartz-corebluetooth-peripherals/) (Andrew)
- [BTLE Central Peripheral Transfer](https://developer.apple.com/library/ios/samplecode/BTLE_Transfer/Introduction/Intro.html) (Jaim)
- [We put a chip in it!](http://weputachipinit.tumblr.com/) (Jaim)
- [@internetofshit](https://twitter.com/internetofshit) (Jaim)
- [PaintCode](http://www.paintcodeapp.com) (Caleb)
- [Handy BLE](https://itunes.apple.com/us/app/handy-ble-simple-bluetooth/id985786496?mt=8) (Caleb)
- [Rachio Smart WiFi Sprinkler Controller](http://rachio.com) (Layne)
- [Motion Stills](https://itunes.apple.com/us/app/motion-stills-create-live/id1086172168?ls=1&mt=8) (Layne)
- [Procrastinate on Purpose by Rory Vaden](http://www.procrastinateonpurpose.com/) (Chuck)
- [Mophie Battery Cases](http://www.mophie.com/shop/battery-cases) (Chuck)
- [Adafruit Learning System](https://learn.adafruit.com/) (Evan)
- [BeaconsInSpace](https://www.beaconsinspace.com/) (Evan)
- [Adam Savage's Maker Faire 2016 Talk](http://www.tested.com/art/makers/572490-adam-savages-maker-faire-2016-talk/) (Evan)


### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 160 of the iPhreaks show. This week on our panel, we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**CHUCK:** Jaim Zuber.

**JAIM:** Hello from nowhere near Utah. [Laughter]

**CHUCK:** We have two new voices for you. The first one is Caleb Hicks.

**CALEB:** Hi from Lehi, Utah.

**CHUCK:** And the other is Layne – I can’t see his last name anywhere,

**LAYNE:** Moseley.

**CHUCK:** Moseley.

**LAYNE:** You got it. Yup, this is Layne Moseley. I’m from Utah as well.

**CHUCK:** Alright. That was [crosstalk] on purpose.

**JAIM:** I should say people from the coast probably thing we’re neighbors but no, we’re not.

**ANDREW:** It’s close enough, Jaim.

**CHUCK:** Yeah.

**JAIM:** Minnesota, Utah. You know.

**CHUCK:** I’ll tell you what, [inaudible] the distances between major cities is a whole lot lower because it’s a smaller country. And so I showed them a map of the United States and point to Utah, and they’d be like, “Oh, so you live right next to California? Do you know my husband in LA?” So yeah, same kind of thing.

We also have a special guest this week and that’s Evan Stone.

**EVAN:** Hello! I’m from the San Francisco North Bay area so I’m not really in San Francisco, just north of it. Beautiful Sonoma County.

**CHUCK:** Cool. Do you want to give us a brief introduction – who you are, what you do?

**EVAN:** Sure, yes. I am a lead iOS developer for Cloud City development in San Francisco. And Cloud City is an integrated design and development shop and we do a lot of web app development and design; we have a great design team. We also do mobile apps as well and so that’s where I fit in on the iOS side. We’ve also been branching out into working with startups and companies that are developing on hardware solutions, hardware devices and creating apps for them as well.

**CHUCK:** Awesome. Well we brought you in today to talk about IoT and iOS.

You did a talk at iOS Remote Conf which is a conference that I put on. We have several of these gentlemen speak at back in March, I think it was.

Do you want to give us just a quick rundown of how iOS developers think about IoT because I believe it’s different from people who are actually hooking up their Arduino to the computer and loading code right on to it?

**ANDREW:** Tell us what IoT means.

**EVAN:** Sure. That’s a great place to start actually is what is this IoT thing? So IoT stands for Internet of Things. As it sounds like, it’s basically connecting hardware devices to other hardware devices. It can but doesn’t always have to use the internet. So IoT is sort of a loaded term in that perspective but basically, we need to talk about it. It’s basically devices talking to other devices. That’s the one way I think of it.

Then – Chuck, you asked about how iOS developers think about it. I’m not sure how other iOS developers think about it but when I consider IoT, we definitely think about it in terms of how our apps can interact with them, how they can communicate. Working out the technical side of things on communications between devices. If you’re basically working on an Arduino project, you’re pretty much focused just on that usually, maybe whatever hardware project you’re working on. You’ve got your Arduino IDE that you’re working with and getting the Arduino to do cool things. But then to take it to the next level is sort of where I see it which is not only do you have this hardware device that can do cool things but then you may want to be able to interact with it on you mobile device – your iPhone, your iPad or whatever.

So that’s I think where the value comes in really, for iOS developers to start thinking about is how we can be developing applications that function well, that add value to these devices.

**CHUCK:** I really think that’s interesting because yeah, if it comes down to it, if I have something that I’m automating you’re connecting to and I can do that on my iPad or my iPhone, I’d much rather do that than have to plug my computer and then bring it up and carry it around. So yeah, I really like the way you put that together because it is; it’s about communication with these devices and making them work, make our lives easier.

**EVAN:** Yeah, especially when you think about that some of these devices really aren’t all that smart unto themselves. Especially if you think about like an iBeacon where really, its sole purpose in life is to spit out some numbers. That’s all it does. And there are more complicated or more sophisticated functionalities that certain beacon do have. But when it boils down to it, that’s pretty much what they’re doing. So then you have to start thinking, “Okay well, what can I do with those the numbers?” And people are really doing some interesting things with those kind of devices and I think we’re really just in the infancy right now.

It’s really exploded the last year. It’s funny because when I look at the news on as far as the internet of things and mobile devices and wearables and [inaudible], all of those kind of topics, it’s changed so much from just over the last year and especially – I started really getting involved in this probably two years ago. I think it was 2014 when I had a project I was working on that was using iBeacons. That was my first exposure to it and it was very confusing and scary. And as I’ve been doing a little bit more of it, it’s gotten a little bit better and you can really see how these things can be used in interesting ways.

So the nice thing is, too – I don’t know if we wanted to get into this right now, but the barrier has become lower quite a bit also. The barrier for entry on just individual hobbyist, going ahead and getting – being able to purchase little devices and to be able to do interesting things with them, the cost barrier is really low now. And I think that’s all very exciting.

**CHUCK:** I think that leads to a question that I wanted to ask everybody on the call and that is how much have you done with IoT devices? We’re talking Raspberry Pi is all the way up to the nest thermometer and things like that that are much more built and polished and heavy APIs that you can hit.

Andrew, I know you’ve done some with these stuff. What’s your experience?

**ANDREW:** My real professional background is in hardware engineering and I’ve – last pick project, I did it at my last job as a hardware engineer was actually a camera that had a companion iOS app and stream the video over WiFi and everything where I was working on the hardware and the iOS app.

Then more recently, actually along with Caleb, I’m working on a Kickstarter project we did called Wired In that includes a Bluetooth connected sign in and an iOS app and a Mac app and other stuff around that. So I do have some experience but I don’t really know about all the different options out there and it seems like it’s changing every three or four months.

**CHUCK:** How about you, Jaim?

**JAIM:** I haven’t done a lot recently but I have been researching IoT over the past year or two. One of the first things you’ll find out when you start searching IoT, it’s a huge market and there’s a lot of different protocols that are involved. We’re talking [inaudible] IoT in iOS. Probably, [inaudible] devices connected to different devices kind of get your phone to some Arduino things or some device around your house.

I know people have been working on projects [inaudible], just doing Bluetooth lower energy – BLE connections. But there’s also analytics; that’s a big part of it. Probably not getting into a lot of that but it’s a huge field.

And so when you start searching for IoT, you just get a huge deluge of information but it could be some gas tank out in the middle of a corn field in Wyoming just [inaudible] a cellular signal, uploading data, how full it is. And just getting all these data, what do you do with it, that’s where analytics comes in and if you hit the communication. So a lot of it isn’t directly from a phone to a device, it’s directly to an API which is [inaudible] to a device.

There’s a lot of ways to approach it, but I’m looking forward to hearing more about – actually, talking to actual devices to our phone and near field stuff. That would be cool.

**CHUCK:** Awesome. How about you, Layne?

**LAYNE:** Yeah, my main experience with it is from the consumer side. So I’ve got two Nest Thermostats. I’ve got Amazon Echo and then my new favorite is a Rachio which is a sprinkler controller. That’s actually been my favorite.

To me, it almost seem like these Internet of Things devices, using a smartphone to connect to them is mainly because our AI isn’t very good yet. It seems kind of like this – everyone’s got smartphones and so it’s the easiest, most convenient way to talk to these devices because they all talk back to us.

I’ve got an Echo and it’s pretty great, but still, the AI’s so limited that I’ve [inaudible] that to be kind of frustrating to use. So I think the Rachio’s the best that I’ve had so far because the app’s just super good and I really like it.

**CHUCK:** Awesome. And how about you, Caleb?

**CALEB:** So Nest actually came out the week we closed on our house. I felt I spent tens of thousands of dollars on my house and I was going to go and get a couple of Nest thermostats – one for upstairs and one for downstairs. And so that was kind of my first experience with this stuff and I waited for the APIs to open up and played around with connecting it with ‘if this then that’ which was a lot of fun.

I get a text message when it’s going to be cooler outside than I normally want my house so it will – I’ve got ‘if this then that’, telling you to open my windows and also having it turn off my Nest.

I’ve played around with smart things; it’s in my closet now. I think it was a Kickstarter project but it eventually was purchased by Samsung and so I kind of stopped playing around with that.

From the development stand point, I actually briefly played around with the Arduino about two years ago and had a little iOS app that would turn an LED on or off and change colors. So the Arduino was a really fun device to play around with. That was in the very early days of that Kickstarter project that Andrew and I have been working on. But I guess the only other experience I have with it is I teach at a school called DevMountain and a few of the students there work with [inaudible] and a couple of other devices to make some projects opening or unlocking doors and turning on and off lights and driving around little cars and stuff like that. So they showed me some cool stuff along as well so I’m interested to know more.

**CHUCK:** Cool. My experience, I’ve done a few things with IoT devices. I’ve built a pine with Derby Track. If you’re familiar with Cub Scouts, that’s actually – it’s all hardware. I would love to hook it up to my phone or something so that it actually would post the times there so that I could just keep track of it on a device that I can hold in my hand or sit on my lap. So that’s kind of – eventually, I think the next step on that.

I also have – I don’t have a Nest thermometer but I have the Ring Doorbell. I have the Nest app on my phone because we have a camera that is pointed at the baby’s crib and that’s kind of our baby monitor. So I have a few devices like that that I’d be interested in seeing what we could make them do.

I’m curious Evan, does all of this line up with what you see as the experience that developers have with IoT?

**EVAN:** Yeah, I think so. It really seems to be that way. We’re all having these experiences with these devices; you guys have more experience on the consumer side than I think I do. I don’t have a Nest or a Ring Doorbell but I’ve seen them and I really would like to implement those personally. But definitely, we’re all having these experiences and I would guess that this has probably happened over the last year, year and a half that we’ve kind of been seeing these things. And so this is why I was saying earlier, we’re really just at the beginning because it’s just going to keep going on and on and on and we’ll see more of these things.

Especially when we get to the subject of the vertical markets, I think Jaim was mentioning that especially in the fields of health, fitness. The medical field is really taking off; I think that’s all very consistent with what we’re seeing. I think what’s going to happen as iOS developers, we’ll probably start having more of these kinds of experiences. Being able to actually build our own apps, whether it’s at the hobby level or actually being part of organizations that are developing these iOS solutions either for clients of ours or for our companies that we’re working for.

Like [inaudible] if you’re working for Nest or working for Ring, companies like that that are developing these, I think that’s really going to be very common.

**JAIM:** So what are some of the ways that we communicate with IoT devices near field? BLE seems like the standard iBeacon. Can you talk about the different ways we can talk to devices that are, say, in the same room?

**CHUCK:** I was going to say what do you mean by near field; so in the same room, within, say, ten feet.

**EVAN:** So yeah, as iOS developers, I think the two main things that we use to communicate with these devices, there’s basically two and one – and it’s basically the ones that you mentioned there.

First of all, there’s CoreBluetooth framework and then there’s core location. Now what’s funny is that when I first started doing work with iBeacons, I totally thought, “Well, it’s a Bluetooth device so it should be in CoreBluetooth, right?” So I was nosing around; I was actually trying to do some CoreBluetooth-y kind of things and then I realized, “Wait, no, no. this – it’s someplace else.” And sure enough, it turns out, when you’re working with iBeacons, it’s actually handled by core location which at first glance, sounds a little funny, but then when you realize that really the iBeacons are meant to be proximity devices; they’re meant to indicate location, proximity to the device, proximity to each other, then you begin to see that core location makes a lot more sense.

I think it’s really fun to work with, but let me address the other side of the question which is that the other means that we usually use to communicate with these devices is through Bluetooth low energy which is part of the Bluetooth 4.0 specification and it is a way – kind of like as it sounds. It’s meant to be a low power, low bandwidth means of communicating between your iOS device and – I’m sorry, the Bluetooth low energy itself is meant communicating between several devices. But in the context of CoreBluetooth, it only handles the BLE side of things. So if you start looking at CoreBluetooth, thinking you’re going to start doing the standard Bluetooth work, that’s not what it’s for. It’s really just for Bluetooth low energy.

And it is; it’s meant to be a low power consumption protocol and it really helps these BLE devices to last a really long time and just running off like a coin cell battery. That’s really the purpose of it, too. And that’s why iBeacons worked the way that they do as well, too. They have very low power consumption. They are part of the BLE specification. They are a Bluetooth low energy device but they just have a slightly different purpose which is just to send out a little signal periodically. That’s the beauty of it, too, which is it’s very, very – it’s a very simple model and you can do some really interesting things with it.

So the two main frameworks are the core location and CoreBluetooth for iBeacons and Bluetooth low energy respectively.

**CHUCK:** Do you have any devices that you recommend to get started with?

**EVAN:** Yeah, that’s a great question and it’s actually – it’s a really good one especially because even that landscape is changing so quickly over the last year or so. Some of the devices that I like to recommend people to start off with, I think someone already mentioned The Bean which is the LightBlue Bean by Punch Through Design. That’s a very nice device to get started with because it has not only Bluetooth low energy built into it but also it’s basically an Arduino also, so it’s a nice thing to get started with if you want – if you already know some Arduino and you want to start prototyping, that’s a nice device. They also have a new one called the LightBlue Bean+ which has some extra bells and whistles. We can post a link in the notes for that.

Some other things, if you want to just – maybe you already have an Arduino – this is an interesting idea, too, which is if you already have an Arduino, you can purchase what’s called a BLE Shield. It’s a Bluetooth low energy board that just basically fits right on top of your Arduino and plugs right into it. Then, it enables Bluetooth low energy communication functionality right from your Arduino so that’s a nice option, too.

The other thing that I’d like to mention is The Particle Photon which is – and they also have one called the Electron; well just talk about the Photon.

The Photon is a – primarily a BLE device but it can also communicate with servers via WiFi so it’s kind of a really interesting thing, too, where you can actually communicate with an API that tells The Particle Photon what to do. That’s a really neat thing, too, but I think a really good starting place is probably the LightBlue Bean, that’s if you want to do BLE.

Now if you want – if you really want to start off at the ground level and maybe you want to try out iBeacons, there are a couple of really nice alternatives or things to get started with for iBeacons. The ones that I’ve worked with the most are the Estimote Beacons and also the ones from Gimbal who is – and that company is – I believe they’re a subsidiary or they’re on [inaudible].

Gimbal’s also nice because they are inexpensive. I think they run you about five bucks a piece I think. And the other nice thing about them is that you can swap out the battery when the battery goes low. That’s not the case with the Estimote. I mean, you can change out the battery on an Estimote but you have to take a razor blade to it and cut it open to get the actual device out and then swap the battery and then close it back up. It’s kind of like you almost have to destroy it to actually replace the battery so that’s not a really practical solution. But the nice thing is that the battery does last a long time on the Estimote.

But yeah, as far as Gimbal is concerned, that’s what I’ve used a lot. In fact, there’s a project that we’ve been working with – that I’ve been working with with MIT. There’s a group called – it’s Pop Up Labs and what they do is they are going around, creating maker spaces for hospitals. One of the things that they’ve provided is a kit to teach medical professionals, specifically nurses but medical professionals teach them and inspire them about making things for health care because they found that this is a – it’s a way to get people started – to build their own solutions in the medical field so it’s kind of an interesting solution. That’s actually another topic entirely and that’s a subject of the AltConf talk that I’ll be doing next week. But at any rate, getting back to devices, we’ve been using Gimbal’s for that particular project and it was very nice, very easy to work with.

I think if you wanted to get started in this whole sphere of working with devices and iOS, I think iBeacons are probably a good place to start for that because it’s not – you don’t have that many issues to deal with. And once you get your head wrapped around how iBeacons work, then it’s pretty straightforward and then you can really start thinking of some interesting and fun applications for it.

**CHUCK:** So if iBeacons are the place to start, what are some good starting projects that people should be doing before they really get into this stuff?

**EVAN:** That is a good question. In the case of both CoreBluetooth and core location, you can actually – if you have an extra device lying around that’s either an iPhone 4S or higher, and I think it’s the iPad 3 or higher – I’d have to check up on that – but any of the devices that support Bluetooth 4.0 and greater, you can actually turn those into Beacons or BLE devices so that’s another alternative, too. If you have one of those devices lying around, you could actually turn those into it.

And then you can do things like – an interesting application – so there’s already a product out in the wild called – and I think it’s called Tile. It’s a ‘I lost my keys, now I’m trying to find them’ kind of thing. So that’s one of the first things that I did with iBeacons was when I got that, I would use a locator – I built a little locator app that would allow you to send roughly where the beacon was. And so I’d tell my daughter to go hide it [chuckles] and then she’d go hide it and then I try to find it and vice versa so we played it as a little game. So that’s kind of a fun little thing you can do getting started with Beacons.

There are some challenges with that, too, because the positioning and proximity sensing, it’s very – it’s pretty vague with iBeacons. Mostly, it’s just a measure of how close you are to it.

I liken it to you’re getting warmer, getting warmer – no, getting colder, colder, warmer, warmer – ah, there you go. So that’s how it works from my perspective. Those are some fun projects that you could try.

**JAIM:** So we had a tip from a previous podcast where we talked about iBeacons when this was a new technology. I can’t remember the name of the guests but he did an app where he put his iBeacon in his suitcase and when he travelled somewhere, he knew when it was coming off the baggage claim so that’s a simple app.

**EVAN:** Yes, and in fact, Samsonite has now made that a product. So they now built a suitcase that actually has a beacon built into it and that’s exactly what it does. But you could circumvent that by just doing it yourself. Put an Estimote into your luggage and you’d be able to detect those as well.

That’s a great application right there; that’s a great idea.

**CHUCK:** It was [inaudible] sharp and he also said that he’s put iBeacons in his kids’ backpacks so when the bus shows up, it notifies him on his phone.

**JAIM:** Hey, that’s great!

**CHUCK:** That is so cool.

**LAYNE:** Yeah, and [inaudible], he did the BLE – sorry, the iBeacon talk at iOS Remote [crosstalk].

**CHUCK:** Yup, he did.

**EVAN:** Yes, I enjoyed his talk very much.

**ANDREW:** We’re talking a lot about iBeacons and Bluetooth which iBeacons are an application of Bluetooth 4.0 but I think another part of the internet of things or maybe the more internet-y part of the internet of things is things that are actually connected to the internet like the Nest thermostat or the Ring Doorbell. Those devices typically – other than maybe sometimes for configuration but they don’t connect to your phone directly, rather they’re connected through the internet and you run an app and you can access them from anywhere.

I know it’s nice to be able to turn on my Nest – well, it’s actually set up to auto-detect when I’m coming and going but if I know I’m going to be home in an hour, I want to heat the house up, I can turn it on from an hour away. What if you want to work on that kind of thing where you’ve got a device that’s actually connected to the internet?

**EVAN:** Yeah, that’s a great question. And I already mentioned about the Particle Photon and I think that is exactly the kind of device that would be good for that kind of application to prototype with and play with because the Particle Photon actually – it connects through WiFi and so it’s really talking through a server out there and then you write an app that can communicate to the server and tell the Photon what to do. So that actually is a better, more close application of what you’re discussing there.

And yeah, the Photon’s a great device. In fact, I was just at – I visited a hardware accelerator just the other week and – I can’t really talk about what they’re working on but it was really interesting to see what these guys were doing with the Photon. But it’s a perfect example of what you were just talking about like with the Nest functionality where you don’t even have to be right beside your device; you can actually control it remotely that way.

It gets even more exciting when you think about the Electron which I also mentioned which is it adds cell connection into the mix. So then not only can the device be in your house connected to your WiFi but it can also be sitting out in the field somewhere. As long as there’s a cell connection, it can be controlled remotely.

Let’s say – I was thinking maybe forming an application might be good for this where you want to turn on or measure irrigation – something that’s remote out in the field somewhere and it can be giving you readings or perhaps you can actually tell it to control those types of functions completely remotely and it’s over a cell connection so that’s another interesting thing.

**CHUCK:** Those are really big sprinklers.

**ANDREW:** Well, when we were at BUILD, whenever that was, a couple of months ago now, we actually – we’re talking to somebody about some of the things that Microsoft has around the Internet of Things. And he gave the example of the Internet of Things is a lot about these big, almost industrial applications like farmers have devices in their silos that allow them to check the status of their grain without actually driving their truck out to check it, so I think it goes far beyond consumer applications.

**LAYNE:** Yeah, I’ve got a brother-in-law who’s into farming and he showed me his tractor and that thing is state of the art technology. They don’t even drive those things anymore. They set them up; their connected to satellites and they drive themselves. It’s kind of amazing.

**CHUCK:** Dang, that’s cool.

**CALEB:** That is awesome.

**EVAN:** Wow, but that’s cool. That gets at where we’re driving at here that – and I still think we really are just at the beginning of seeing these things up here so we will see more devices like the Electron.

I’m not sure if the Intel Edison is the same way. It might not be but anyway, if you wanted to get started on something, the particle Photon is, I think, $29. I could be wrong on that but it’s somewhere in the 30-ish range, I believe, and that’s also an excellent way to get started on this especially if you’re looking for that kind of functionality where you really don’t want to be or need to be right next to your devices.

**LAYNE:** So I’d like to get some opinions on some theoretical stuff. So I think the threshold of the Internet of Things and AI stuff is like jargons from Iron Man; that AI where you can talk to it, get opinions; it can control your whole home, all that kind of stuff. And I think we’re a long way off from that but I have an Amazon Echo and my four year old son, that’s his go-to for information. He’s figured out the, “Hey, I can go to the kitchen and just say ‘hey Alexa’ and ask it any question.” It’s really kind of amazing to see him and that’s how he’s being introduced to this technology.

So I’m just curious what you think about – as we go along in the future, as all these devices are going to start connecting closer together, are we going to have a central computer type thing that controls everything or is it going to be individual devices like we have now.

I have a college professor that his future was an omnipresent computer that was just there everywhere, all the time. Anyway, any thoughts about that?

**EVAN:** It certainly is an interesting thought and your comments about the Amazon Echo are really interesting and I’ve seen the same thing with my daughter using Siri. It’s funny because the other day, I discovered that she was using the Siri dictation on the Apple TTV to not only find shows, but she was also telling it what it was doing wrong.

**LAYNE:** That’s super interesting because she is communicating two-ways with it. Even though it probably won’t work that well, she’s – that’s really great.

**EVAN:** Yeah, I thought that was really funny because she’d say things like, “Siri, I want dog movies but not these particular dog movies.” [Chuckles] It was really cute to see but it all begins to show that these are becoming interfaces for a much bigger thing, kind of what you were mentioning, where we will have – I don’t know is if it’ll be one particular server, one big thing – I don’t know, but certainly, lots of islands of this kind of AI would be really interesting. We’ll probably see these devices. Right now, they tend to be very distributed and very isolated. Maybe in the future, we’ll see them talking with each other. It’s hard to see where this is going to go.

**CHUCK:** One thing that I want to point out though is that – so I have an Amazon Echo but I also use my phone for a lot of things and both of them have apps for the Nest. They both have the – I guess on the Echo, it’s called the “skill”, but it has a Nest skill. It has smart things – I thing that’s the company or the brand but it has a lot of home automation systems that you can connect it to and teach the Echo the skill and you can have the app on your phone. It occurs to me that, yeah, a lot of times they are siloed but they are becoming more and more – they’re recognizing the interfaces that people want to use for them are these things.

So even though you may have six apps on your phone or you may enable six skills on your Echo, it’s really interesting that I think eventually, what will happen is all of these systems will open up to these interfaces and then it won’t matter who made them. And then we’ll get to the point where – my wife can issue a voice command to turn the temperature or the music up or down. And then from up in my office, I can adjust things from up here as well off of my phone even though I don’t have an Echo sitting in here.

**LAYNE:** Yeah, and it’s interesting because it seems like – [inaudible] watching it right now, Apple, they’ve got HomeKit. Amazon, they’ve got their Echo and they’re trying to become that single source of input. Whether that pans out or not, I can see the big companies trying to become that thing.

**CHUCK:** Yeah, but the thing that’s nice is that it doesn’t have to be one or the other. So if I prefer to use my phone and my wife prefers to issue voice commands, both will work.

**LAYNE:** That’s true, yeah.

**CALEB:** Google is also getting into this game – well, I should say, Nest, with their thread protocol that they announced.

There’s others that have been around for a long time. We’ve got [inaudible] then [inaudible] and there’s different protocols that if companies decide to unite around one of them, we can get some of that interconnectivity out – Google, Amazon, Apple and Facebook [inaudible] become friends again.

**CHUCK:** Yup. I want to dig into another aspect of this though. I mean, we’re talking about the systems maybe opening up or maybe becoming more interconnected possibly over the internet. You can do that already with Nest and Ring and a lot of these others.

I listened to the TWiT.tv shows, in particular TWiT and MacBreak Weekly. On TWiT in particular, whenever Leo Laporte is talking about his IoT devices in his house – he also has a Ring Doorbell and some of these other things – he says that he puts all of those on a guest network because they can be hacked. It gives them an island to jump off to the rest of your network from – if it’s on the network with the rest of your devices. So how much of a concern is security? Are people doing a good job with security on IoT devices? Should we be taking these precautions? And how do we, as developers, think about these issues?

**EVAN:** Yeah, that is probably the biggest hot button right now for IoT right now is the security issue. First of all, let me say – I actually live in Petaluma so I’m in the same city that those shows are recorded and I go down there every once in a while to the studio and listen in. It’s fun.

**CHUCK:** Dang. I’m going to come visit you and we’ll go on a field trip.

**EVAN:** That’d be great! Yeah, absolutely. That would be fun. Anyway, getting back to the question, yes, security is definitely something that people need to be thinking about. I’m not a security expert. I don’t claim to be an IoT security expert but it’s one of these things – we need to just be aware that this is a thing. It kind of gets to what Leo was describing which is isolating these devices onto a separate network so it’s not the same one that everything else is [inaudible] anything sensitive is because there’s already been documented hacks of people hacking into baby monitors and having them do strange things or being able to pull off video and recordings and that’s a really scary scenario. So it’s definitely something that we need to be thinking about as app developers but it’s also – the hardware developers need to be thinking about this as a thing, too.

It gets back to knowing and using and employing – maybe you need to research these things which is good security practices. There are white papers available that talk about these; I think it’s – Wind River has a nice white paper on this, I believe. But if you’re not familiar with the problems, there’s – I think Tech Crunch did an article on why IoT security is so critical. So if you just want to get general ideas as to why this might be a thing, that’s a good place to start.

And what is nice, too, is that Apple has their documentation for security concerns and it’s basically sort of an overall guide for developing in a secure fashion, secure ways using best practices. So those are the things we need to be taking into consideration.

Also, it’s probably incumbent upon us if we are doing the iOS side of the development, to bring this up. Like if we are working with hardware engineers who are our clients or perhaps we’re in the same company, they’ve probably already given this some consideration but at least it would be the good IoT citizen thing to do is to talk to them about it and bring it up and discuss and find out what the best solution is to plug any holes that are there.

The reading that I’ve done there is just some very basic kind of things that you can do like not transferring things over ClearText. [Chuckles] It’s not terribly difficult kinds of things like do encryption basics, keep things hidden where they need to be hidden and it’s just basic good security practices to prevent nefarious acts. I guess that’s the best way of thinking that.

**LAYNE:** I’ve got a friend that – he was or is – he’s working on smart door locks. You can think security and door locks, they kind of go hand in hand. And he was showing me some things that they were doing but – I’m not a security expert either but they – there are a lot of smart locks out there that are really easily brute force because they just accept the code that goes over Bluetooth and if the code is right, then they will unlock.

**CALEB:** Yeah, there you go.

**LAYNE:** Right.

**EVAN:** Yeah. And one of the best practices that I saw – I was reading about this recently and making sure your devices do a secure handshaking first so that it knows who its talking to and who it’s supposed to be talking to even before you start entering a passcode or a door lock code or any of those kind of things, just to establish that kind of thing.

I’m sure there’s various sophisticated ways of making those kinds of credentials authenticating. Especially maybe with devices like the Photon, there might be more sophisticated ways of doing it, I’m not sure. But it’s definitely something that we need to be concerned about because it’s – especially when we’re talking about devices that are doing things like capturing video, capturing audio and basically hitting us in our most secure, private areas of our lives. That’s where it really gets to be important to think about security. So yeah, that’s a great question.

**LAYNE:** I’m hoping we can apply a lot of the things we’ve learned from client-server relationships. There are things in what we’re talking about [inaudible] kind of peer to peer communication but I do think the same security standards apply.

**CHUCK:** Yeah, definitely.

**JAIM:** We’re digging into code in the BLE, getting it into the CoreBluetooth stuff, what type of things are we doing for an app? Let’s say we have a device that [inaudible] thermostat and it’s getting a reading from your thermostat and allows you to control it – raise it, lower it. What’s the process for getting that info out of CoreBluetooth? Are we doing low level stuff twiddling? Is it high level or – what’s the process like working with CoreBluetooth with these devices?

**EVAN:** That’s a very good question. Thankfully, CoreBluetooth is an abstraction overall of that – the Bluetooth stuff that is going on under the hood. So in that respect, it’s very nice for us to work with us app developers. And it kind of boils down to just a few kinds of basic processes. Of course, you can get more complex if you want to but basically, it boils down to discovering your device, connecting to the device and then you either read properties from it, each – let me back up a smidge here. [Chuckles]

So each device, it’s not only just the device itself; what it does is it exposes some services. And the services then have these things called characteristics. So you have a couple of levels of things here. First is discovering the device itself. What’s interesting about CoreBluetooth is since you could have literally an ocean of devices surrounding you, one thing you can do about CoreBluetooth is, say, show me all the devices that support this, for instance, a thermometer service. Or it can even be a proprietary – there are certain set of standard services that you can search for that the Bluetooth, especially [inaudible] has actually created and those standard ones like heart rate monitor’s one of those, but then you can also create your own.

So from your app’s perspective, you can tell CoreBluetooth, “Find me all of the devices in the area that support this thermometer function,” and it will go and it’ll look and it’ll return you an array of these things. Then you either take the first one off the stack or you can say, “Hey–“ or maybe you do some – a little bit more inspection. Maybe there’s one with a name in particular that you’re looking for that’s typically what I look for. And then you say, “Okay, that’s the one” and then you can connect to it and say, “Tell me what all your services are that you support.” Then it gives you the full [inaudible] because when it’s in the broadcast mode, it will just say – it’ll give you a limited number of them. And this gets back to the low energy side of things. When it’s just sitting there broadcasting, it’s not going to tell you everything necessarily.

It could if it has a limited number of services. So when you get into doing is – then you do some introspection with the device. You say, “What services do you support?” Oh, this is the particular service that I want. Maybe it’s the thermometer. And then you go and you can do – you can either read characteristics or you can write to those things. So in the case of thermostat, maybe it has a current temperature reading. So then you can say, “Okay, give me the value from that.”

I’m simplifying things a bit but that’s how it works and there’s a lot of looping [chuckles]. So if you’re aversed to looping and iterating to collections and arrays of things, then – it gets a little crazy but you iterate through these things and you find the service, find the characters that you’re looking for.

Another really helpful thing that you can do is not only can you just read to a characteristic but you can say, “I want to subscribe to this characteristic.” When that happens, then like in the case of a thermostat – because we know temperature can change overtime so then you can connect to it and you can say maybe it’s fluctuating. Maybe it’s not a thermostat on your wall; maybe it’s a Bluetooth thermometer that you’re using to gauge someone’s temperature with. Then you can watch the temperature go up and up and up; hopefully not too high but you can see that happening and it’s that – the subscribing to that characteristic, it’ll notify you. It’ll say “Oh, I’ve changed” and then your app can capture those things with a delegate method that knows, then you could do something interesting with it like display the temperature reading.

That’s pretty much all there is to it. There’s probably more complex scenarios but in the basics, that’s what it is. You can also write to those characteristics, too. And in some cases, this his helpful.

I’ve been – in my talks, I’ve been using a device called the TI Sensor Tags, some Texas Instruments. This is another – I should’ve mentioned this is the devices list of things. I didn’t earlier but another really cool device to work with that’s super fun to get started with CoreBluetooth. And it can also be turned into an iBeacon also so you could flip it back and forth if you want. It’s the Texas Instruments Sensor Tag.

What’s cool about this is it has a bunch of different sensors built into it already so you don’t have to necessarily plug those things in. You can actually just read them.

In one of my talks about CoreBluetooth, I used this to do things like measure a cup of coffee and see what the reading is off that because it has a built in infrared sensor. It has ambient temperature, too, so it can measure the temperature and also the humidity of the room that you’re in.

It has an accelerometer and a bunch of different kind of sensors built into it, I think 10 different sensors. So that – that’s a really good thing to get started with if anyone’s interested in doing that. But, getting back to what I was trying to say – starting to say earlier which is that to turn on some of those functions, like to tell it, “Okay, start reading temperatures”, you actually have to write to a characteristic that then turns it on. It’s kind of like as if you had – maybe you had a class – I’m not saying that this is a good pattern, but let’s say you had a Swift or Objective-C class that had a property that when you switch that property to ‘yes’, then that kicks off a process that it starts spitting out data or start measuring data. It’s that kind of thing. So you write to the characteristic in the Bluetooth low energy device.

In this case, the sensor tag, you tell it, “Okay, temperature sensor, go,” and then it – you write that characteristic and then it starts reading off the values and then you just start reading them and you could see the temperature change overtime. It’s really cool.

**CALEB:** Very cool.

**CHUCK:** Yeah, I’ve checked that out and it looks really, really interesting, that TI sensor pack.

**EVAN:** Yeah and again, this is what blows my mind which is that again in this scenario with the sensor tag, it’s only $29.00 plus shipping. [Chuckles] So the barrier has been really lowered for us to at least to just start experimenting with it. And when I give talks like the iBeacon one that I’m giving or the CoreBluetooth one, I’m not so much trying to “oh, I’ll teach a little bit about how Bluetooth works – CoreBluetooth and all those things”, but for me the real value is trying to inspire other developers to start thinking of “hey, there are new ways that we can start doing these things. Maybe we can try some of these little prototyping boards or the sensor tag or whatever it is and start playing around with it, come up with really interesting solutions to problem”.

And most of these sites like – I know Particle has a site – sort of a sub-site to it that – so if you go look up the Particle Photon, they have a project section. And in there – it’s like instructibles. It’s a big list of projects that you can do using the Particle Photon and the Electron showing what other people have done and then you can get some inspiration from that as well. So that’s what I like to do is just nudge people into that direction and say, “Try it out; sometimes it’s frustrating but it’s a lot of fun and it’s something interesting.” I think it really takes iOS development to the next level if you haven’t tried it before, because you no longer just dealing with an app inside the phone or your iPad and maybe dealing – talking with an API and a backend, now you’re starting to go out, reach outside the device and it really expands that in a very interesting way so that you’re talking with these devices.

One of the things that I thought about earlier when – I think we were talking about – I don’t know if it was the Echo but we see these with the proliferation of these devices so much now. The way that I knew that things were changing was when my wife came home with a FitBit and to me – because before that point, I kind of just twist her arm about upgrading an iPhone. So she came home with a FitBit and to me, that was a little local signal to me like, yeah, times are changing. So even as developers, we have to start thinking in terms of there are these devices that are out there now and there’s a flood of them coming.

There’s so many companies out there that are startups, hardware startups, wearable startups and so there’s going to be lots of opportunities for folks who know how to do this already so that you can either be employed by them or you could do work for them as a contractor and create solutions for them. So yeah, it’s great for all of us to know about and it’s super easy and super fun to play with. And like I said, the barrier is super low for entry.

**CHUCK:** Alright, well we’re running low on time so I’d like to get us to our picks. So Andrew, what are your picks?

**ANDREW:** I’ve got actually – well if I counted them up, they’re like 10 picks today but it’s really four picks.

My first pick is just a library on GitHub called PMKVO – actually, PMKVObserver. I think I’ve talked before on the show about how I love p-value observing but particularly in Swift, it’s not as nice. It’s not a super great API even in an Objective-C but it’s kind of no super Swift-friendly.

This is a nice little wrapper around KVO that has both Objective-C and Swift APIs. It’s quite new. It’s only six months old and does some cool stuff like taking care of removing observers when the thing being observed is the allocated and vice versa and it’s type safe for Swift. Anyway, it’s by postmates. It’s actually written by Kevin Ballard who’s been doing Objective-C development for a very long time, longer than I have so I just think it’s a cool thing.

My next pick is on topic for the episode today and it’s something called Electric Imp. I think I might have picked this before, too, but this is like a Particle Photon although it was the first thing like this that I saw but it’s basically a little board you get. You can program it and it connects to the internet. The cool thing about it is you program it all with a web IDE and it automatically knows how to talk to the internet and connects to the Electric Imp servers and you can actually talk to it which is a REST API so it’s super easy to build a device that uses this thing. Just hook it up to the internet and you can write an iOS app or a web app or anything that can talk to a REST API to control it from anywhere so that’s Electric Imp.

Then, I thought I would pick a bunch of episodes of the show that we’ve done before that are sort of on the same topic because we’ve actually done a few and I think they’d be good to go back and listen to if you’re particularly interested in this sort of internet of things and hardware and iOS and how it all fits together. I’ll just read the show numbers; we can put links in the show notes. They are episodes 30, 43, 59, 107 and 127. Those are – we’ve talked about CoreBluetooth and beacons and Arduino and devices that connect to iOS in general so those are some good episodes.

And last but not the least is just a really good talk by – I can’t – I’m not exactly sure how to say his first name. I don’t know if it’s Yoav or something like that but anyway, Yoav Schwartz about CoreBluetooth. I think he gave this at CocoaHeads but he does a really good job of going through how CoreBluetooth works and some of those gotchas and tips and just the way the API works, it’s actually a weird thing to get your head around if you’ve never done it before and he went through it in a really straightforward way. Those are my picks.

**CHUCK:** Alright, Jaim what are your picks?

**JAIM:** Okay, I’ve got three picks.

One pick that’s Apple source code – so if you want to start hacking on CoreBluetooth, Apple has a sample app that you can download the code for and run it to actually turn two phones into the peripheral and the central Bluetooth devices so you can talk between two different phones. And if you want to hack on stuff, that’s a good way to get started. I was participating in an IoT hackathon. I was an iOS mentor helping people out, that helped get [inaudible] with what’s happening with CoreBluetooth. Turns out that people at the hackathon did the more [inaudible] talking with APIs and stuff like that but it got me into the BLE stuff. So if you want to check it out, check out the BTLE Central Peripheral Transfer and that’s just an Apple – I’ll put the link in the show notes.

My second pick are – I have two picks left; one is a Tumblr account. So We put a chip in it! just list a bunch of bizarre things that people have put a chip on – water bottles, sure, why not? Wine bottles? Yeah, okay. Sure. So if you want to joke around, laugh a little bit about some of the odd things that people are putting chips on which is just becoming very common. Most of these apps, these prices are going to be terrible but that’s just the way things go.

If that’s not enough for you, a Tumblr account, there’s an internet account with a slightly more brash person behind it with a title of – pardon my French – @internetofshit which is a Twitter account that does similar things and these people really have about the easiest jobs in the world for the next ten years. [Inaudible] awful things the people are putting on the internet and connecting chips to. Those are my picks.

**CHUCK:** Alright. Caleb, do you have some picks for us?

**CALEB:** Yeah, I’ve got a couple. This week, there’s a cool tool that I used. It’s called PaintCode. Many of you have probably heard of it before. It’s normally a hundred bucks but it’s 20% off for the week of WWDC. So basically, you can use it to design or import vector graphics and export that into native code and include that in your app so you’re not dealing with hundreds of @2x and @3x files.

Another app that I recommend – this one’s free – it’s called Handy BLE. This is – the tagline’s “the simple Bluetooth Arduino controller”. One of my past students actually built this app and it integrates with a light blue beam. And you can send it messages to change the color on it and just play around and experiment with that beam. So if you pick one of those up from listening to the show, that may be a fun app to play around with.

My third one is whatever the Amazon Echo competitor is that Apple announces on Monday. [Laughter]

**JAIM:** I hope your [inaudible] like it.

**CHUCK:** For our listeners, this was recorded the week before WWDC so it may feel like old news by the time it comes up. Alright Layne, what are your picks?

**LAYNE:** So I mentioned this earlier but my first would be the Rachio which is a sprinkler controller. Amazing setup. It took me about 30 minutes to replace my old sprinkler controller and about five minutes to set everything up after that on my phone. Super slick. It reminded me a lot about the nest as far as the user experience. It’s really cool.

My second would be Google’s new app called Motion Stills which converts Live Photos into GIFs and videos. Amazing app. It does image stabilization as well. So the problem with Live Photos is it’s really jerky a lot of the time and may smooth it out completely. It’s totally amazing.

Then my last one would be – this one’s totally just for fun, but I bought a GeForce GTX 1080 this week which is the best and coolest graphics card ever created.

**ANDREW:** Until next month.

**LAYNE:** Until next month. But at least for one month, I can feel like I’m the top of the gaming world. That’s it, just those three.

**CHUCK:** Alright. I’m going to throw a few picks out there. The first one that I have is I’ve been reading a book called procrastinate on purpose by Rory Vaden. It is pretty awesome. It talks about setting priorities and how you get stuff done, how you can get more done, how you can get the right things done and all that stuff so really, really liking it so definitely going to pick that.

And then, I’m also going to pick really quickly, I have a handful of the phone chargers, you know, the battery packs that you get to take around everywhere. Like you put them in my backpack with my laptop. I got one a while ago and it – I don’t know why but I feel like it just last a little longer and is a little smaller than the rest. It’s a Mophie battery pack so I’m going to go and pick that as well.

Evan, do you have some picks for us?

**EVAN:** Yeah, I have a couple here. First of all, I think on this whole topic of making, building stuff, BLE, I’d like to just throw out Adafruit.com. That’s A-D-A-F-R-U-I-T dot com and they have lots of good tutorials and some interesting devices like the feather bluefruit LE which is another device that you can get started with.

It’s a very good place to start with if you really want to start building your own [inaudible]. Good resource for that.

The other thing was that there’s this interesting service that has – that I just found out about maybe a week or two ago called BeaconInSpace. I don’t know if this is really for – necessarily for the one off – the guy in a room developer but it’s interesting for companies who want to be able to rent beacons in various areas, various cities. They actually have these scattered out and it’s kind of an interesting thing where you [inaudible] there. They’re basically leasing out their beacons and I – as a service because it’s kind of an interesting thing and I think this – we’ll see more of this in the future because deploying beacons in a large area is just not a real breezy place or easy thing to do.

The last thing that I wanted to mention is – the last pick is this great talk by Adam Savage from MythBusters. So he did this keynote talk at the Maker Faire this year just a few weeks ago in San Mateo down here. So his talk is recorded; it’s on YouTube but it’s also on tested.com. It’s a super great talk. It’s very inspirational especially if you’re a parent with kids that you think they might be interested in the whole – in making and if they have a creative side, it’s really great. It’s kind of inspirational kind of talk.

**CHUCK:** Awesome. If people want to follow up with you, see what you’re working on, follow you on Twitter, anything like that, Evan, where do they go?

**EVAN:** Yeah. On Twitter, my Twitter account name is @interactivlogic but there’s no ‘e’ after ‘interactive’ [chuckles]. It’s because of Twitter’s limitation at least when I created my account to limiting it to 15 characters. So that’s I-N-T-E-R-A-C-T-I-V-L-O-G-I-C. So that’s on Twitter. Then I’m available at cloudcity.io. That’s our website. I can probably be contacted through those means as well.

Also, I have a blog. I haven’t done too much with it but that’s at www.interactivelogic.net and that ‘interactive’ does have an ‘e’.

**CHUCK:** Alright. Well, thank you for coming. Thanks for our new panelists as well. We’ll go ahead and wrap this up and we’ll catch you on next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**


