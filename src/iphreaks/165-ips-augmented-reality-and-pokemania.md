---
layout: layouts/post.njk
title: >
  165 iPS Augmented Reality and Pokemania
date: 2016-08-11 07:00:26
episode_number: 165
duration: 30:38
audio_url: https://media.devchat.tv/iphreaks/iPS165Pokemania.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:47 - [Pokémon GO](https://www.pokemon.com/us/pokemon-video-games/pokemon-go/) & [Niantic](https://www.nianticlabs.com/)02:19 - [Augmented Reality](https://en.wikipedia.org/wiki/Augmented_reality) vs [Virtual Reality](https://en.wikipedia.org/wiki/Virtual_reality)03:42 - Game Objective: How it Works07:58 - Location Data

- [Ingress](https://www.ingress.com/)
  10:11 - Cloud and Backend Service Issues11:49 - Do bugs matter?15:14 - Content vs Technical Execution
- [This man's Pokémon Go chat app is so successful that it's driving him bankrupt](https://www.theverge.com/2016/7/11/12153370/gochat-pokemon-go-chat-app-jonathan-zarra-interview)
- [The Dark Souls Video Games](https://en.wikipedia.org/wiki/Dark_Souls)
  19:59 - The Success of Pokémon GO and The Game Ecosystem23:09 - Augmented Reality Awareness
- [QONQR](https://www.qonqr.com/)
- [Microsoft HoloLens](https://www.microsoft.com/microsoft-hololens/)
- [The Untold Story of Magic Leap, the World’s Most Secretive Startup](https://www.wired.com/2016/04/magic-leap-vr/)
  &nbsp;Picks
- [The Pokémon GO Subreddit](https://www.reddit.com/r/pokemongo) (Caleb)
- [Intocircuit 15000mAh 4.8A Dual USB Portable Power Bank with SmartID Technology](https://amzn.to/29w1sb5) (Caleb)
- [Nintendo Pokemon Go Plus](https://amzn.to/29OD7wg) (Caleb)
- [PlayStation VR](https://www.playstation.com/en-us/explore/playstation-vr/) (Layne)
- [Poweradd Pilot 2GS 10000mAh Portable Power Bank with Smart Charge](https://www.amazon.com/Poweradd-Pilot-2GS-10000mAh-Portable/dp/B00ITILPZ4) (Jaim)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**_[This episode is sponsored by Buddybuild. I remember having a conversation with one of our co-hosts about the Jenkins setup that they have for their build server. And all of the issues they had – getting it set up, getting it running and then it stops working – why not just go with something that just works? Buddybuild is a solution that provides continuous integration and delivery for your iOS apps. If you’re looking for a way to get your test running, your continuous integration running and have your app delivered, then check out Buddybuild. For a free trial, go to devchat.tv/buddy.]_**

**JAIM:** Hey everybody and welcome to episode 165 of the iPhreaks Show. Today on our panel, we have Caleb Hicks.

**CALEB:** Hi everyone. I’m in Park City, Utah today catching some Pokémon.

**JAIM:** Layne Moseley.

**LAYNE:** Hi! I’m in Utah but I’m not catching Pokémon.

**JAIM:** I’m here at Richfield, Minnesota. I’m at a basement. I don’t see any Pokémon, but my phone’s not on so I’m not sure if I’m doing that right. [Chuckles] Anyway, I’m not sure what’s going on with this Pokémon thing but we’re going to get to the bottom of this. Caleb, can you help us out? What’s happening here?

**CALEB:** We’re going to talk about Pokémon GO today, the new app from Nintendo and Niantic – I believe, is how they say it – the augmented reality app. There’s some great discussion we can have here and a cultural phenomenon that’s happening with it but also some of the technical implementations with the app.

So just a quick summary of what the app is it’s an augmented reality app. You download the app, you login and you are placed on a map and you can walk around and catch Pokémon.

**JAIM:** How does this augmented reality differ than, say, virtual reality. Are those the same thing?

**CALEB:** Virtual reality, to me, the biggest difference would be that’s putting on goggles or walking around a situation or a – what’s the word I’m thinking of here.

**JAIM:** [Inaudible] I’ve seen, you’re in a chair. You’ve got some [inaudible] on. You can’t see anything around you. You’re completely immersed like whatever you’re doing, it’s just on the screen. Whatever is happening in the room, you really have no concept of.

**CALEB:** Yeah, exactly. So the difference here with augmented reality is you are walking around the real world and your phone is displaying the buildings and the roads and the paths but also your little character that’s running around and also the Pokémon that pop up along the way or the different stops that you can stop up at and pick up items or the gyms where you can go and battle other trainers. So what’s really cool about Pokémon GO and one of the reasons it’s really taking off is the real-life aspect of it that it’s getting people out moving and out, meeting other people and interacting with the world instead of sitting in a chair like you would be with virtual reality.

**LAYNE:** Yeah. I think in short, you could say that virtual reality replaces what you see and augmented reality enhances what you see.

**JAIM:** That sounds about right. So how do you play this game? I’m vaguely familiar with what Pokémon are. It was a card game at one point after my time – I played those games. What exactly is happening here? Why are people walking around, staring at their phones?

**CALEB:** [Chuckles] That’s a great question. The idea is there’s 150 at least in the initial versions. In the original versions of Pokémon and currently right now in Pokémon GO, there’s 150 or 151 different creatures that you are trying to learn about and track and catch. So in the app, you are walking around and trying to find all 151 of these different Pokémon. As you walk around, they will random – there’s a guide of nearby Pokémon that you can tap on and it’s got a rudimentary tracking system that helps you track down the different Pokémon that you may have seen before or maybe haven’t and it uses one, two or three footsteps to determine the distance from you. Then you’re moving around, trying to find these Pokémon. When you get close to them, they pop out and you tap on them on the screen and you can – it comes up with this augmented reality view. It’s using your camera to show the background and it’s got little [inaudible] of a 3D Pokémon that you throw pokeballs at and try to catch it. There’s different items you can use to make it easier to catch them or do different things but the idea being you’re trying to catch it while you see it there.

So you get actually some of the – you go online and you see screenshots people have taken of Pokémon sitting in their car seat or Pikachu sitting at the dinner table or something like that. People are having a lot of fun with it from that angle as well, using that augmented reality view to see Pokémon with the real world.

**JAIM:** So is it random how the Pokémon exist in the world? Do they just spread around or they [inaudible]?

**CALEB:** So some of it’s random but some of it is also based on – there are patterns to where certain Pokémon show up. So for example, in my neighborhood at home, there’s maybe 10 to 15 super common Pokémon, two or three that show up all the time. So if my wife and I go out on a walk with the kids – our kids love this – we’ll go out walking around the neighborhood and we’ll find Rattatas and Pidgies that are just super common. Every once in a while, more rare one will spawn in a specific location.

I don’t know exactly how they’re doing this on the backend but it seems like there are some spawn points where more rare Pokémon will show up randomly for a short amount of time, but then based on location, more common Pokémon will show up in certain places. For example, in Lehi, Utah where I live, there’s a certain set of really common Pokémon. I’m here in Park City today and it’s a pretty different set. I was out in California earlier this week and it was a completely different set of more common Pokémon as well. It’s definitely regionally based but also some randomness thrown in there as well.

**JAIM:** Okay, now each person, if you’re on a walk with your family and you’re all playing, you all can see the same Pokémon or is it different for each app?

**CALEB:** Yeah, so you all see the same Pokémon most of the time. There are certain items you can use that would make it so that only a certain person sees a specific Pokémon but I think from the backend standpoint, it’s generating the same Pokémon in the same places and the same people that are in those places at specific times can catch the same things. So I could go with my kid and play – if we went everywhere together, we could essentially build up more or less the same collection of Pokémon.

**LAYNE:** So Caleb, do you know much about how they select these places and locations?

**CALEB:** Yeah. This is actually really interesting. So the company behind this, you obviously have Nintendo but there’s another – the company that built the app is Niantic. They had another really popular augmented reality game called Ingress that was pretty popular maybe a year, 18 months ago. I did not play Ingress but I know there are some different aspects of it that are similar to Pokémon GO in that you go to specific locations and there are specific teams and you would do different things at these locations.

In Ingress, you would go to these memorial points. In downtown Salt Lake City, there’s a lot of different plaques or famous buildings or different iconic areas and so people would submit pictures of these places and some details about them to deal with that game. All of the data that Niantic built up from their earlier game, Ingress, is now used to drive where Pokémon show up in Pokémon GO and where the different poke-stops are and where the gyms are.

A lot of people have actually gone back and reference – a lot of players of the game have gone back and referenced iconic locations in the Ingress game to help drive where they’re going to go in the Pokémon GO games. It’s fascinating from a developer’s standpoint to use that data from one app in driving how the next one works.

**LAYNE:** It’s also interesting to know that Niantic, this company is – it was an internal startup that [inaudible] and was spun out in 2015. This really is like a Google product.

**CALEB:** Yeah, I knew there have been some relation with Google Maps team but I was not aware that that was – that it started as an internal from Google team. That’s interesting.

**LAYNE:** Yeah. So Ingress was really like a Google product. It was this game they built on top of Google Maps and all that and it’s amazing to see the evolution of what they’ve done with that.

**CALEB:** So everyone gives Google a lot of credit for being really good at cloud services. This is a team out of Google and so far in the early days of the app, there are major issues with the cloud services and backend services and the app. What have you guys heard about that?

**LAYNE:** The main thing I’ve heard is – well, there’s two things I’ve heard. The first is when you signed it with your Google account, they would request full access to your account. Now it seems like this was just an oversight and they didn’t mean for this to happen but it’s kind of a funny thing in a high profile product for an app to ask for the entire access of your Gmail account. So they actually fixed that with an update recently. I think it was either yesterday or today but then the new thing is you can’t even log in with – they have their own account on their Pokémon site. I don’t know what’s that [inaudible] but you can’t log in without it anymore. It’s completely broken.

**JAIM:** Ouch.

**LAYNE:** It’s just interesting. As a software developer, we try to test software as much as we can and sometimes, little things slip by. In this case, a very big thing actually slipped through.

**JAIM:** That raises a couple of points. One, does it matter? Because I’m seeing a lot of people outside, walking around, staring at their phones that – I don’t want to stereotype these people but I don’t think a lot of these people have seen the outdoors in a while just by the complexion.

A lot of people are out there regardless – even if there are all these bugs. I’ve heard some pretty bad ones, like some pretty serious privacy issues and weird crashes. Do [crosstalk] bugs matter?

**CALEB:** Yeah, it’s interesting to see what people are willing to give up for privacy, for a game or for simple services. I’ve been wary of Google services in the past and for some reason, Pokémon GO, whether it’s nostalgia or what, that wasn’t a big deal for me but there certainly are major bugs in the app.

You mentioned – you’ve seen a lot of people outside. I was actually at a park out in California earlier this week and Sunday evening, there were over a hundred people in the park. There’s just some different aspects in the game that brought a lot of people into one location. It’s really interesting to see how many people are still playing the app with all of the bugs that it has. It probably – if I were to play an hour straight through, I would probably have to force quit the app and re-login to the app using my Google account between eight and 15 times in an hour.

**LAYNE:** That’s crazy! So you have to login again when you force quit?

**CALEB:** The most recent update, the one that came out yesterday did fix that but previously, you had to re-login seemingly at random. My guess – I actually posted this on Twitter was everytime the servers went down, their solution to it was just to disconnect everybody and log everybody out from their – the backend.

**LAYNE:** Wow.

**CALEB:** I don’t know if that’s accurate but seemingly, everyone was logged out all the time and had to re-login which is a bummer for us people that have two factor authentication and long passwords and stuff like that. It was kind of a pain but people would still do it because it’s – I was still playing because of the content that’s there. So Jaim, you brought up an interesting question like do the bugs matter and the answer is, so far, they haven’t. That’s the biggest game in my memory as far as going from zero to what it is today, a cultural phenomenon. It’s crazy that the bugs have not slowed that down at all.

**LAYNE:** Well a couple of interesting statistics that I’ve read are they’re approaching the daily users of Twitter after seven days, ten days. That’s like crazy numbers and then the other one that I’ve read is that people are spending an average of 40 minutes per day in the app which is double that of Snapchat which is like – Snapchat’s like the golden standard. Those usage numbers are unheard of.

**JAIM:** It’s pretty amazing for a new product. Even if you’re in the cloud – the selling point is that, “Oh, you just roll up new servers.” That scale, I don’t even know how that works. I don’t know how you would be able to scale a software system that quickly. It’s pretty astounding how they can keep anything working at that scale, that fast. Twitter had years and they had their issues early on but all these [inaudible] that we’re talking about have been around for years and they’ve had people working on it and this one came out and just blew up. I doubt they anticipated this type of traction.

**LAYNE:** There’s no way. When they’re up to 30 million daily users, that’s crazy. [Chuckles] So many people.

**JAIM:** That’s like a VC’s pitch deck, you know, the founder. “We have 30 million users in the first week!” [Chuckles]

**CALEB:** There was a story on The Verge earlier this week, Monday or Tuesday, about a guy who had built a – he was on the beta for this Pokémon GO app and he decided he was going to build a chat app – it’s like a companion app for people that chat about – it was location-based and people who chat “we’re playing this game” and going after some more objectives that he was just getting crushed by – even his companion app was getting crushed by people downloading it and running it. The title of the article was ‘Developer builds Pokémon Chat App that is bankrupting him’ or something like that. [Crosstalk]

Yeah, so it makes you wonder what matters more in an app – the content or the actual execution – the technical execution of the experience. What do you guys think about that?

**LAYNE:** So I have another product that I’m very interested in and that follows the same thing. So I’m a big fan of The Dark Souls video games and they technically are absolutely horrible. They are buggy, they have bad frame rates. The multiplayer is the same way like disconnects all the time and there’s like a 15 millisecond lag when you’re playing multiplayer but nobody cares whatsoever because the content is just so good. It’s fantastic.

In fact, I’m reminded of – there was a bug in one of the games where the durability of your weapons was tied to the frame rate of – the frame rate, right? So they released the app on – they released the game on PC. And because PCs can have whatever frame rate they want, everybody’s weapons would break after two minutes. They didn’t even fix the bug for a year and nobody cares [crosstalk].

**CALEB:** Why? Why was that? What’s the relationship between framework and –?

**LAYNE:** For whatever reason, when they wrote the code for the durability of the weapons, they somehow tied it directly or like a one to one relationship with the frame rate. So every frame, your weapon would degrade.

I don’t know exactly how that works. I don’t work on games but [crosstalk].

**JAIM:** [Inaudible] Weird developer hack to just get something out the door.

**LAYNE:** Seriously, yeah. [Chuckles] Anyway, it’s the same thing as Pokémon though. Technically horrible but nobody seems to care because they have a deep connection to the game in different ways.

**CALEB:** I would say people certainly care. If you go and read on forums or Reddit, people are complaining but it’s definitely not stopping them from playing and it’s not stopping them from going and buying in-app purchases [crosstalk] and heading out. People definitely care but it’s fascinating that it’s not stopping people from [crosstalk] playing.

**LAYNE:** Right. It’s not enough to deter from what they’re doing.

**JAIM:** Even leaving bad reviews, one start views, it’s a form of caring. If you don’t care, you just turn off the app and you walk away and never deal with it again.

**CALEB:** [Crosstalk] I’m pulling up the ratings to see where it’s at in the App Store right now.

**LAYNE:** I think last I looked, it was like three and a half stars. But anyway, I guess the point is if your content is good enough, people that are interested in it will overlook that and continue to use it.

**JAIM:** I agree. I think also that bar for how good the content has to be is extremely high. If it’s not extremely high or you have something you really care about – because people grew up playing Pokémon and they’re kind of re-living a bit of their childhood or young adulthood, that is overcoming the bugs and obvious frustrations that if you’re trying to start with something new, even if it might be good, people aren’t going to give it a second chance.

**CALEB:** Yeah, I don’t see any way that any regular, independent developer would be able to put something like this together. Even if they didn’t have the Pokémon license, just all of the location data and everything that Niantic is using from Ingress, people talk about how this is an overnight success and a huge phenomenon but the data behind this and the experience behind this is probably closer to a decade in the making on top of the license to do this with Pokémon characters.

**LAYNE:** That’s true, because it has roots in the original Google Earth. As far as I understand, the guy that started this internal startup at Google, he was hired on a decade ago to work on Google Maps and Google Earth so you’re right. Probably a decade worth of data and work to make it do what it’s doing.

**JAIM:** But this is pretty typical of most overnight successes. Years of work in obscurity finally pays off. So how does the success of Pokémon GO affect the game ecosystem? Now we have a stunning success of augmented reality apps; does this make existing apps more attractive to buyers or to developers? What do you think the effects is going to be?

**LAYNE:** It’s really interesting the timing of a successful augmented reality app because there’s been so much excitement and press and everything around virtual reality and then all of a sudden, you’ve got this app that does something similar but in a very different way and just takes off. I believe that it’s because – everyone has a smartphone that can already do this; the big problem of virtual reality is you have to buy hardware and it’s extremely expensive. But augmented reality has been something that we all want to do on smartphones for a long time.

I remember five years ago, there’s augmented reality apps that could take your camera and then look at a sign like in Germany and it would translate the German into English right there. It’s super cool and so I don’t know, I just am wondering if this is going to be a great segue into a whole new way of augmented reality software because obviously, we’ve seen it. It’s super exciting if you’ve got the right content.

**CALEB:** Austin Allred tweeted on the 11<sup>th</sup>. He said, “I would like to imagine that somewhere out there, there’s an augmented reality game that has been fundraising for six months with zero interest whatsoever until Friday,” when Pokémon came out.

**LAYNE:** That’s awesome.

**CALEB:** Given the way that the industry works, it’s hard to argue with that. That’s probably reality where we’re now all of a sudden going to start to see a lot of these types of games, get funding or get picked up and get released over the next year. It will be interesting to see what other content comes out with this type of gameplay.

**JAIM:** Yeah definitely. I think the next – the pitch [inaudible] for all the entrepreneurs building, location based or AR games are just like, “The next Pokémon GO, we’re going to make this world [crosstalk] a better place.”

**LAYNE:** Yup, seriously.

**JAIM:** It’s like the front page of the [inaudible] deck.

**CALEB:** It’ll also be interesting to see what Nintendo learns from this. For so long, they’ve been stuck in this mindset like “our content goes on our portable devices and nothing else”, but to see how big this got so quickly, it’ll be interesting to see if they’ll bring more of their intellectual property to mobile

**LAYNE:** Yeah, I mean these guys have seen their stock, it’s up 30%. They’ve added, in the past week, about 10 billion dollars in their market cap. So obviously, everyone’s taking note, “Hey look at what Nintendo can do with an awesome smartphone app.” I would think it’d be so silly for them not to keep going really hard into smartphones.

**CALEB:** Mario Kart GO.

**JAIM:** That would be awesome. You can drive down the highway, [inaudible] the people.

**CALEB:** Aisle 15 is going to be a nightmare.

**JAIM:** That would be great. You could get – drop the bombs on people. That would be amazing.

**LAYNE:** [Chuckles] Yeah, that would be pretty cool.

**CALEB:** You integrate it with a self-driving car just so [crosstalk].

**JAIM:** Discuss this with your lawyers first before implementing this.

**LAYNE:** The other thing I think this is going to do just for the public is two weeks ago, if you would’ve asked somebody, “Hey, what is augmented reality?” nobody really would’ve known. I don’t know if they’re going to know it through those terms now but as this continues to grow, people are going to understand what this type of technology can add. Public perception is a super important thing for your app and for software products in general. So as the public understands more what this can add, it’s just going to get more and more popular.

**JAIM:** Definitely, yeah. I think it’s leading to a lot of new opportunities and possibly existing apps. There’s an app people have been playing for four or five years called Conquer where along the similar concepts, you’ve got three factions fighting against each other which is similar to how I understand the gyms work in Pokémon. It’s location based so you’re fighting over your hometown so apps like that can get more traction or people can explain it easier. I think the problem, a lot of these apps had – trying to get out there, trying to convince people what they actually did even if you’re trying to convince people what you’re doing, why you’re trying to build the app yourself and get users. That’s a hurdle and I think this clears the way from a lot of – people don’t understand what the opportunities are with this type of technology.

**CALEB:** There are quite a few memes coming out on Friday when Pokémon GO is released that were people who – it had screenshots of the game and it was like, how do I move this character? And someone responding like, “You have to actually get up and move,” and I think you’re exactly right, Jaim, that the experience of having played this game is going to open the door for quite a few more games like that that require actually going in and being a part of the world.

**JAIM:** Yeah, pretty exciting stuff. I look forward to seeing what else comes down the pipe.

**LAYNE:** I think that Microsoft is building their augmented reality thing. This is going to be a benefit to them because they’ve got more proof that this is something that people are definitely interested in.

**JAIM:** Definitely, yeah. We’ve talked a little bit about the HoloLens and how it works and it’s still – pretty early on, I got a chance to try it out but it definitely opens up the possibilities for gaming, wearing that and not having to walk around with a phone in your hand, draining your battery. You can actually wear it on your head and have a more natural interaction with the world.

**LAYNE:** Yeah, because that’s more of a virtual reality type thing where it takes over your whole field of vision but doesn’t completely replace it which is pretty interesting. And then there’s – I would mention, there’s another company out there called Magic Leap and they’re doing augmented and virtual reality and super interesting. They’re really, really secretive though so there’s not a lot known about them but I’m sure that they’re thrilled with this because it’s a boom for their platform as well.

**JAIM:** Yeah, very cool. So let’s get to the picks. We’ve had a good discussion. A lot of cool things have happened with this; I think it opens up a lot of new opportunities so it’d be fun to see what’s coming up. Caleb, what do you have for us?

**CALEB:** I’ve got two picks and they are both on topic. The first pick is the Pokémon GO sub-reddit. If you’re interested in this game and you want to learn more about it, that’s the central place for discussion and memes and fun anecdotes about people playing the game so check that out.

The second one, this is an unreleased product right now but because Pokémon GO is using augmented reality and location and it’s using Unity for its 3D layout, it’s very battery-hungry. So two picks that will help with that is any external battery pack. I have – it’s called The Powerbank. There’ll be a link in the show notes to that that I really love; that will charge mobile phones and also iPads but really, any of those external chargers. The other one is – Nintendo has made millions, if not, billions of dollars on hardware accessories for their software games. They’ve got one for Pokémon GO coming out; it’s called the Nintendo Pokémon GO plus. It’s a Bluetooth LE wrist band that has a little pokeball on it that you can push the button to interact with things in the game without having to turn on your phone and blow through some battery and all that. Those are my two picks. All of those links will be in the show notes.

**JAIM:** Very cool. Layne, what do you have for us?

**LAYNE:** Slightly on topic. I previously – one of my picks was the HTC Vibe virtual reality headset. Since then, I’ve been able to try the three leading virtual reality headsets and it’s the Oculus Rift, the HTC Vibe and the PlayStation VR. Tried all three of them and I would say I think my favorite one out of all those is the PlayStation VR which is surprising to me because it is by far the cheapest way to get into virtual reality. Mainly it’s because of two things – one is comfort. It’s by far the most comfortable headset and two, the display is gorgeous. It’s better than the other ones. It’s nice. They call it an OLED display that they put in there and it just looks so good. It’s very important because it’s so close to your eyes that you can really see the pixels and it made a pretty big difference. So my pick is the PlayStation VR and that comes out in October.

**CALEB:** I am very excited about the PlayStation VR.

**LAYNE:** It was way better than I expected so it’s pretty cool.

**JAIM:** Okay, I may have one pick. I didn’t really have any picked out but since everyone’s having trouble with their batteries playing Pokémon GO, I knew a battery pack charger that I’m pretty happy with – the Poweradd. I received it as a gift a little while ago and it’s on sale now for 16 bucks. It was pretty good.

It’s got two USB outputs and it charges pretty quick so you could – you and a friend can play Pokémon all day, I think. I think you’re set for quite a few charges; it does pretty well. My Poweradd, I’ll put a link to it in the show notes. That’s my pick.

**CALEB:** Awesome.

**JAIM:** So yeah, I had a great time talking with this. I learned a little bit about it. I think everyone’s noticed the phenomenon, people walking around that – it used to be staring into their phones. There’s always a few people staring at their phones but there’s so many more now.

**LAYNE:** It’s the gatherings that just blow my mind. Like I saw a picture from my brother in law in a campus and there was like hundreds of people in this park. It’s crazy.

**JAIM:** That’s pretty exciting.

**CALEB:** Now it’s time for both of you to be the very best and go catch them all. [Chuckles]

**JAIM:** Right, I’m – Layne, by next week, I’m going to catch more than you. [Crosstalk] At least equal. If you don’t catch any, I will win.

**LAYNE:** Okay, we have a challenge. I accept.

**JAIM:** Alright. Tune in next week to find out who’s the poke-master. [Chuckles] Alright, have a great week everyone.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
