---
layout: layouts/post.njk
title: >
  163 iPS iMessage
date: 2016-07-28 07:00:52
episode_number: 163
duration: 33:28
audio_url: https://media.devchat.tv/iphreaks/iPS163iMessage.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

## [All Remote Conferences](https://allremoteconfs.com/)

&nbsp;01:59 - [iMessage](https://en.wikipedia.org/wiki/IMessage) vs [SMS (Short Message Service)](https://en.wikipedia.org/wiki/Short_Message_Service)04:31 - Programmers and iMessage

- [App Extensions](https://developer.apple.com/app-extensions/)
- [Square Cash](https://cash.me/)
  06:14 - Standalone Apps; Games?
- Compact and Expanded Mode
  08:39 - Group Messaging10:27 - Stickers
- [WWDC: iMessage Apps and Stickers, Part 1](https://developer.apple.com/videos/play/wwdc2016/204/)
- [WWDC: iMessage Apps and Stickers, Part 2](https://developer.apple.com/videos/play/wwdc2016/224/)
  14:10 - Maps
- [Apple overhauls iOS Maps with a new design](http://www.theverge.com/2016/6/13/11922842/apple-maps-new-design-ios-10)
  16:43 - Extensions
- Viral Potential
- Reactions/Effects
- [WeChat](https://itunes.apple.com/us/app/wechat/id414478124?mt=8)
  26:31 - [VoIP (Voice over IP)](https://en.wikipedia.org/wiki/Voice_over_IP)27:04 - Security/Privacy&nbsp;Picks
- [ClippyJS](https://www.smore.com/clippy-js) (Jaim)
- [Auric Solar](http://auricsolar.com) (Layne)
- [Procrastinate on Purpose by Rory Vaden](http://www.procrastinateonpurpose.com/) (Chuck)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 163 of the iPhreaks Show. This week on our panel, we have Jaim Zuber.

**JAIM:** Hello from Minneapolis.

**CHUCK:** Layne Moseley.

**LAYNE:** Hello from Lehi, Utah.

**CHUCK:** I’m Charles Max Wood from Devchat.tv. Quick shout-out about some of the remote conferences that are coming up. I’ve got robots coming up and then I’ve got some web development ones. So if you’re into any of that, go check them out.

This week, we’re going to be talking about iMessages. This is something that Layne says he’s been playing with so I’m going to let you tell us where we should start.

**LAYNE:** Oh man, there’s so many new cool things happening with iMessage. Quick recap – so with iOS 10, Apple is opening up iMessage to developers, adding a slew of new features and obviously for me as a developer, the iMessage apps are super exciting. To me, it kind of feels like App Store 1.0 all over again. It feels like a new world to me and what we’re going to do with these new apps and things like that. I don’t know – lots to talk about with these new apps.

**JAIM:** We should probably start and talk about what iMessages are because for a lot of people, it’s just a way to know that their friends are using Android phone. [Chuckles]

**CHUCK:** Yeah, exactly.

**LAYNE:** That’s a good point.

**CHUCK:** It turns green when they’re not on an iPhone and blue when they are.

**LAYNE:** It’s kind of like a status symbol.

**JAIM:** Yeah, so what does iMessage, in its current state, provide that a text message doesn’t?

**LAYNE:** Yeah. So iMessage is something that Apple introduced I believe in iOS 5 if I remember right – maybe 6. Anyway, and what it is is a message platform that goes away from the traditional SMS and it’s straight from Apple device to Apple device and later they added Mac support.

So similar to Facebook Messenger, it’s an Apple branded message platform that we all – if you have an iPhone or a Mac or an iPad, you use it and it’s very typical Apple that they take something you use already such as SMS and make it much better without you really even knowing about it. How’s that for a description?

**JAIM:** That sounds good. It also adds a bunch of things on top of SMS stuff. It detects maps, it detects names, it detects a lot of different things so a lot of things that you really didn’t have within a text message before, now it’s commonplace. You can share with your Mac but you get a lot of more detection than – a lot more risk functionality with iMessage than you would get from a text message.

**LAYNE:** I remember when I first started using iMessage, there are two things that really popped out for me where it showed when somebody else was typing which is really great, and red receipts so you could actually see when somebody has red – what you sent them. Those are two really cool features that I still really like.

**CHUCK:** Yeah. My wife hasn’t or at least she hasn’t gotten after me about red receipts yet. I know you’ve read it!

**LAYNE:** [Chuckles] Well I know a lot of people that turn that off to stay a little passive aggressive so they don’t – people don’t know when you’ve actually read what you’ve sent them.

**JAIM:** I like putting on just one character and the response of leaving it and not [inaudible] it so they can [inaudible] me for 20 minutes.

**CHUCK:** Oh, there you go.

**JAIM:** That’s my little passive-aggressive trick.

**LAYNE:** And that’s so disappointing when you think someone’s typing for 20 minutes then they reply with “Yeah, sure.”

**JAIM:** Yup.

**CHUCK:** “Okay”.

**JAIM:** Smiley.

**CHUCK:** “Here’s my favorite emoji.” So for me, I’ve only really used iMessage in that app, in the messages app on my phone or on my Mac. So what is there to it? What can programmers do with it that the lay person wouldn’t really think about?

**LAYNE:** Well, as of now, nothing. It’s really locked down and Apple has kept a good grip on it. But with iOS 10, they’re opening it up to app extensions. What this means is that a developer can write a little app that actually lives just inside the iMessage app or it can be an extension for your own app that you already have.

So they’re going to change the UI a little bit and I was playing with this last night where you put in your text that you want to send to somebody. Then to the left, there’s a little arrow; if you tap that arrow, you get three options – you get photos, you get – I think they call it ‘digital touch’ which is similar to what’s on the apple watch, and then there’s a little app icon. And if you tap the app icon, it shows you can actually get a little home screen type interface or you could choose different apps that will live just inside iMessage.

A couple of good examples that they showed were Square Cash. It’s an app where you can send money between people with just your phone, but you can actually send that money straight in iMessage. So whoever you’re talking to, you can just select the Square Cash iMessage app, type in how much money you want to send them and then them that money straight with an iMessage.

**JAIM:** So you mentioned, these apps can be standalone. Hey don’t have to be standard apps that you launch from your home screen. They can be standalone apps that just exist in the iMessage app.

**LAYNE:** Yeah, that’s what I understand. They said that there’s actually going to be an App Store for just iMessage apps as well.

**CHUCK:** So could you make games out of this? I’m thinking, “Here’s my location. I’m trying to catch up with you,” then you post some comment and then it gives your location so then I start heading towards you – I don’t know.

**LAYNE:** I’m sure you can. I’ve actually – I was playing with it last night, writing a little app for iMessage and I was very impressed with the tools that we’re able to use. You can load up an entire interface just like you would in your app. You get a story board, you get a view controller and you can put UI on it. There’s two modes that your app is in; one is compact and then expanded mode. The compact mode means that it’s just under the keyboard. Then when you go to expanded mode, it will take up the entire screen and you can send messages, you can have custom UI in the message and all sorts of cool things. I’m impressed; I’m really excited about it.

**CHUCK:** One other thing that comes to mind is that I really want to build an iOS app for Devchat.tv in particular so that people can interact more with the podcast beyond whatever they use to subscribe to the RSS feed and maybe going to the website and commenting. It occurs to me that with this, it’d be nice for somebody to say – they send it to a co-worker or friend saying, “Hey, have you seen this episode?” and then have it actually pull up an interface inside of iMessage that is a player so they can just hit ‘play’ from – within the iMessage and just streams it.

**LAYNE:** Yeah. And that seems like a complete possibility. One of the things that you supply is you can create new messages. You give it a template and the template includes a message, a subtitle and a couple of other different text elements and you give it a base content thing which is a URL or a video or an audio file or an image.

**CHUCK:** So one thing that I’m wondering about with this though is that if – let’s say that I create a message type that is podcast episode or Devchat.tv episode, do they have to have the same extension installed on their end in order to get that Devchat.tv episode and have it display or work the way I want it to?

**LAYNE:** So I believe that no. If you just supply a video or an audio file, it will just play. However, you can do custom UI in your – so there’s two parts to it; there’s the message that you can create that goes in the list of messages, right? Then there’s the UI that interact with the message. If they don’t have the extension or the app installed, if they select that message, then it’ll just take them straight into the App Store and have them installed if they want to.

**CHUCK:** Cool.

**LAYNE:** Another good example that they showed at WWDC was I think it was open table. They showed a group message where people were deciding where to go to eat within a single message in iMessage. So you know how you get into a group message and it’s like a thousand messages long and no one can decide? What’s cool about the open table thing they showed is it was a single message and it sticks to the bottom; as everyone in the group interacts with it, it weighs down to the bottom as people make choices. Pretty cool.

**CHUCK:** That is cool. What have you been doing with it? I’m curious, Layne.

**LAYNE:** Well, I’ve got an app that I’m keeping undercover right now just because it’s not super hard to do and I want to make the best version of it [chuckles] and I don’t want copy cats. So that one, I’ll stay under wraps but the other thing that I’m going to be doing is there’s the sticker packs. So there’s two parts to the apps; there’s apps themselves and there’s stickers. My brother is a designer and I think he’s going to make a couple sticker packs for me and we’re going to release those.

**JAIM:** That’s an awfully new concept that they introduced. What are stickers?

**LAYNE:** So stickers are really cool. You know, we have emoji right now where you can inline little emojis. Stickers take it to another level where you can actually place the sticker anywhere in the conversation. You can like cover up messages, you can react to different messages with these stickers. What comes to mind right now is we have a lot of custom keyboards in the App Store that try to emulate this thing where it inlines a little graphic or a little image and this little – in my mind, kind of replace that where you’ll be able to take these stickers of whatever they are. I know there’s a lot of celebrity type keyboards that will let you put in these custom graphics but the sticker concept is to replace that where you have just the set of stickers that’s like a better emoji and you can just place them within – in your message stream.

**JAIM:** I know one thing in my message stream that’s missing is pictures of Kim Kardashian so let’s have that.

**LAYNE:** You will have much more of that.

**JAIM:** Alright. That’s great. [Chuckles]

**LAYNE:** I actually thought of building out a service where you could – because the sticker packs are really easy like no code required; you just drop a set of images in there. You build out a service where anyone can just make a sticker pack and pay you some monthly fee to maintain it and then you’d release it on the app store or something like that. It could work for these celebrities that just want their face all over everyone’s messages.

**CHUCK:** But I can also see that again for podcasters with your album art and things like that.

**LAYNE:** Absolutely.

**JAIM:** Yeah, Charles Max Wood in all my messages now. That would be great.

**CHUCK:** Yikes. You don’t want my ugly face on all your stuff. So I’m just trying to think, we’ve talked about creating these custom message types and adding interface to iMessage. Are you going to be able to send messages from other apps though?

**LAYNE:** Wait, what do you mean exactly?

**CHUCK:** So let’s say that I have some other app that does something interesting – I don’t know. Maybe I create my own calendar app, right, and then I want to send a message from my calendar app through iMessage to my friend that says, “Hey, meet me at this time,” or invite them to an appointment on my calendar.

I know this is something that’s already more or less implemented in any way but I’m just putting it out there as an example. Is this something that I could actually do and pull up from the calendar app that says, “Here’s the message you’re going to send to these other people over iMessage. Approve, send.”

**LAYNE:** Yeah. I don’t know actually. It seems like you should be able to because in an app, you can pull up the message composer, but I don’t think that you can, right now at least, populate it with the message. I don’t think so but I’m not sure. I’m not confident in that answer.

**CHUCK:** Nice. I have to admit that I missed most of the WWDC stuff just because I have other things going on that week.

**LAYNE:** Yeah, in my mind, this is one of the coolest things because Apple is continually letting us into a lot of their things. Another example is in the Maps app, we can run extensions in there as well so you’ll be able to book an Uber ride straight from Maps instead of needing to go to the Uber app. So it’s just kind of a [inaudible] forward for Apple, letting developers get more and more into the operating system.

**JAIM:** Yeah. That was a big priority for Apple to get ways to step back from requiring our users to open apps on their own because we’re all suffering from app fatigue. We’ve got a million apps and devices and most people aren’t going to apps everyday. At least, we’ve got a handful apps that we visit and stuff that we use our phone for, we’re [inaudible] download the apps so we don’t know – remember where they are. We don’t need to go there. And Apple’s running away to – first to interact with our users without explicitly going to your home screen and loading up this app. iMessage, that’s part of it; the Siri kit is another way. In [inaudible], they’re talking about Map extensions and it really opens up a new paradigm for interacting with our – users of our apps.

If you want someone to respond quickly, what do you do? You send them a text message, right? You send an email, they just ignore it. If you would check their app for something, some status, it’s not going to happen. It’s a way to provide lightweight interactions without people going, “Oh, I need to check this app that I forgot to check for three days. I missed all the messages.” I think that opens a lot of things up in the future.

**LAYNE:** It does and I think that – my main thoughts when I was watching them announce all these things was this is like app 2.0 or the death of the app as we know it. Because you’ve got the new notifications that are extremely interactive which – Android’s had that for a while but Apple embracing that, to me, they’re just getting all of your relevant content right upfront, right from the beginning and is adding more AI and machine learning and all this stuff. It’s like they’re going to know what we want to do without ever having to go to an app anymore.

**JAIM:** [Inaudible] That opens up a lot of opportunity for app developers even if it’s not what we usually do in the app. You know, requiring our users to open it, maybe we can start [inaudible] the locations and getting information and just hopping in and being less obtrusive. That opens up a lot more use cases that we’re just starting to discover.

**CHUCK:** Yeah. One other thing that I’m curious about is with these iMessages, you mentioned audio, video, text, some of these other formats, images; what if I sent over a reference to an RSS feed and with a message that said, “Subscribe to iPhreaks.” Is there a way to have that so that it opens up my podcast app and does the subscription from there? It just seems like that’s another way of taking these extensions to the next level where messages really isn’t set up to subscribe you to podcasts but downcasts or podcasts or overcasts or whatever else is.

**JAIM:** Well you currently can send a URL to messages and if your app is [inaudible] to the [inaudible] in the URL, you can open and do things that way. So assuming you have the app installed in your device, you can create a URL and register it and when someone clicks on that URL, it goes to your app. That seems definitely doable.

**CHUCK:** Do these extensions apply the other way? So we’re talking about sending these particular types of things; it would be interesting to have extensions that look at your message and said, “I recognize that’s a link to an RSS feed.” So I’m going to open it in one of these apps instead of saying, “Where do you want to open this?”

**JAIM:** With the current implementation, you’d probably create your own URL scheme. It wouldn’t be just a generic RSS feed and [inaudible] your app’s interpretation of what the RSS feed is and from there, you can open the URL and interpret it however you want.

It’s pretty bulky; most apps don’t do this well. It’s difficult to do well to open from a different URL and behave in all the weird different edge cases but it is possible.

**LAYNE:** Yeah, I don’t think Apple ever really allow an app to scan somebody’s messages but they’ve got the URL scheme functionality that’s pretty good. Like Jaim said, it’s hard to pull off right but it seems that these messages – all the state and all the information – is supposed to be just in the URL. When you’re saving stuff like – you don’t have an object of – like a data [inaudible] to send around; it’s literally the URL to that message and that’s how you keep track of what’s going on.

**CHUCK:** Okay.

**LAYNE:** Another thing I find very interesting is the potential for apps going viral was this – I think it was tenfold because all of a sudden – let’s say I have an app and I’m sending this same message, whatever it is. This maybe sending money through Square Cash or something like that. And all of a sudden, the ease of installing that app is literally tapping on it and it’ll take you straight to the app store and then you’d tap install. So you’re like two taps away from installing any new app.

**JAIM:** Yeah, that does open a lot of opportunity for getting your app out there soon. For something like sending money, that’s a good way to introduce people to install an app. “Hey, install this app, get money.” Sounds good to me.

**LAYNE:** I think anyone would install that app.

**CHUCK:** Oh, I’m sure there’s somebody out there that doesn’t like money.

**JAIM:** So along with the [inaudible] framework and iMessages, they introduced a number of new components to iMessage. Even on the user standpoint, you do the 3D touch and you can have – I can’t even remember what they called it but you can be excited about something; you could be not excited about something.

**LAYNE:** Is it like the reactions [crosstalk] that you’re talking about?

**JAIM:** Yeah, the reactions. Instead of saying “that’s cool”, you can make it “get big” and “blow up”. You’ll look like you’re really excited.

So do we have [inaudible] that in the iMessage apps and the message framework?

**LAYNE:** As far as I understand, no. Basically, as far as an extension goes, you can populate a message into the input but the user themselves must actually send that. As far as the new things, I didn’t see anything in there that would let you trigger the fireworks effect or any of those new effects that they have.

I’ll tell you though, a lot of the guys I work with are very unexcited about some of the new things such as the fireworks and being able to make the message grow really big because they think it just will end up being super annoying.

**JAIM:** Possibly, but as a society, we’ve completely gotten away from voice communication. We don’t talk on the phone anymore. The problem with the text communication that we’ve known for decades is you can’t do sarcasm, you can’t do so many flashy things with text.

At this point, we’re re-adding them back in. So for a long time, you couldn’t do a sarcasm with email unless you had a smiley face but we’re starting to re-add all of those [inaudible] views to get from voice communication into just text communication so I think it’s very important.

I think a lot of geeks aren’t going to like it but I think it’s re-adding what’s been removed for the past five years from our communication styles so I think it’s fairly important.

**CHUCK:** So if I want to build one of these extensions – Layne, you mentioned that you do a lot of the same things you do to build just a regular iOS app, but can you walk us through the process? Is it a different kind of project in Xcode or do you just create an app and build it from there? You just don’t build a [inaudible] app? How do you do it?

**LAYNE:** So if you want to just create a standalone extension, they have a project template for it and so you can just create a new Xcode project and one of the new options is you can choose either a message – I think they call it extension or sticker pack. And from there, it’s very familiar; it didn’t take me long at all to see what was going on. There was a storyboard file and you could put your UI inside there, and there was a view controller that they made for you. It’s very simple. This is definitely version one stuff; you can’t do a lot but you have a view controller that you can use all the same things. There is nothing out of the ordinary to do it.

Another thing that you can do is that if you want to add a messages extension to your own app, to do that, you just need to – if you’ve done something like a share extension or a today extension, similar to that or you go to your app and then create an extension in your app that will then apply to messages.

**JAIM:** Okay. So it sounds like standalone message apps would be very limited without doing any core data or stuff like that. But if you want to have an extension of your own app, you have access to that type of thing but there’s likely some communication layer similar to the watch or you have – I don’t remember what it is but you can pass data back from the watch to your app. Internally, you can save it however you want and then reformat the watch with [inaudible]. Is that true with the message framework?

**LAYNE:** I didn’t do that specifically. I was mainly working on a standalone app, but I’m confident in saying yeah, it’s very similar to how these other extensions work. They’ve made a really good framework around extensions and I would say it probably works exactly the same.

**JAIM:** Sounds good.

**CHUCK:** Right, because you can pull in existing extensions into your own app, right?

**LAYNE:** Yes, you can.

**CHUCK:** So where do we see this going in the future with some of these services that are provided by Apple? Are they going to continue to provide these kinds of extensions for everything or are they going to stand by where they’ve been with some of the security stuff and say, well, this particular area’s a security risk so we’re not going to put extensions on it.

**LAYNE:** It’s hard to know what they’ll do. I do think though that messaging is a very good place for them to go because if you look at messaging apps around the world, you’ve got What’s App and then you’ve got WeChat, Facebook – they’re all kind of trying to do the same thing which is be the central place where you do everything. It almost feels like the new operating system to me. Because in China with WeChat, they – WeChat was like the one-stop shop for everything; you book your ride, you pay people, like all the things that we see that their adding to iMessage, it exists already.

So I think for this one, it makes a lot of sense for Apple because they want to control that messaging experience for everybody. Down the road though, I don’t know, it’s hard to know what they – I think they will though. I think they’ll continue to open it up and an extension will probably be the new app.

**JAIM:** I think so. I think our overall applications tool exist as a bunch of extensions. Apple’s shown that they could be very picky about what they release. They’re very concerned about usability; they, along with the messages framework, [inaudible] they released map extensions but they released a very small subset of functionality, ride sharing and booking a restaurant. When it wouldn’t be that difficult to do, open it up to more generic things but they’re very focused on assuring that we don’t create this terrible user experiences and they just blame the platform.

There’s a lot more coming but it’s going to be more of a trickle, things that will get out there and they know won’t be too terrible. We can improve from there but I think it’s definitely going into that direction.

**LAYNE:** One thing we didn’t mention before was the voice over IP – the VoIP extension.

**CHUCK:** Oh yeah.

**LAYNE:** I think that’s huge news as well because now you can take phone calls with What’s App and that’s it. You won’t even realize that you’re not using just your normal cell service. It’s awesome.

**JAIM:** That is cool.

**LAYNE:** I’ve wanted that with Skype ever since smartphones were a thing, just to be able to take a phone call with Skype.

**CHUCK:** I agree. I do wonder a little bit though with some of the security implications of some of these. For example, if you’re using an extension on your map and your map knows your location and somebody has the reason to be conscious of that, I guess they go through the same review process as everything else. But it’d be interesting to see, okay, how does this have implications into how people live in the future, both in good ways and in the ‘oh crap, I don’t want my ex to be able to find me’ ways.

**LAYNE:** [Chuckles] Well, it makes sense why Apple’s roll out of this is slow because extensions has been around for a long time and I know that privacy with this stuff is like the number one focus. So far, they’ve done a great job with it and they’ve kept it; everything’s private and I think they’ll continue but I do think it takes more time.

**CHUCK:** Yeah, totally. Yeah, but I mean you are balancing that against the convenience of things, right? You pull up the map and it’s really convenient to be able to say, “Yeah, I’m here and I need to go there and I need a ride.”

Are there any other aspects to this that we need to dig into before we go to picks?

**LAYNE:** I don’t think so. I think we’ve got it pretty covered.

**CHUCK:** Alright, well, it’ll be a little bit shorter episode but I don’t mind that as long as we’ve covered it, so let’s go ahead and go to picks. Jaim, do you have some picks for us?

**JAIM:** Alright. I’ve got one pick. For a lot of us former Microsoft users, you know what we really missed? You’ve got OS 10 now or MacOS, screen of death, I miss all that. The crashes and Microsoft Word but [crosstalk].

**CHUCK:** Forcing you to upgrade to Windows 10.

**JAIM:** Oh yeah, that’s – luckily, I’ve backed away from that. I’ve heard many bad things. Anyway, I really missed Clippy. It looks like you’re trying to do a “open a document, can I help?” What can we do with Clippy? We don’t have Clippy anymore. So someone came up with the idea to create a JavaScript plugin where you could add Clippy to any webpage.

**CHUCK:** Nice!

**JAIM:** I’m just throwing that out there. If anyone wants to drop Clippy into some random webpage, go ahead. So smore.com, Clippy.js. “So it looks like you’re trying to record a podcast; can I help?”

**CHUCK:** [Chuckles] Nice.

**LAYNE:** Does it work pretty well?

**JAIM:** I haven’t tried it. Looks cool. Looks like Clippy so I haven’t tried it on any website. I’m not sure if they have any – you can download it, get the source, I don’t see anywhere where it’s being used. You could be the first! [Inaudible] Clippy anything.

**LAYNE:** I just sometimes wonder if Microsoft was 15, 20 years ahead of their time because I could see in time where you open your smartphone, you’re on the corner of the street and you’re phone’s like, “Hey, do you need to book a ride?”

**CHUCK:** Yeah.

**JAIM:** Definitely. “Are you lost?” “Yes.” “You just turned around three times.”

**CHUCK:** “I turned on you camera and you look tired. Do you need caffeine?” [Chuckles]

**LAYNE:** Seriously though, our phones know so much about us. If you think about HealthKit integration, there’s so many things that they could do so maybe Apple will create a new Clippy. That’d be great.

**CHUCK:** Yeah, but that’s what this conversation’s been all about with the extensions is the phone knows enough about you and knows what common behaviors are under certain circumstances so why not just make it available? When you open the Maps, you are probably trying to figure out where you are so here’s some helpful ways to approach things.

Alright Layne, what are your picks?

**LAYNE:** So I’ve got just one and I got solar panels installed on my house yesterday. The company that did it was Auric Solar and they did a great job, super professional and I can’t wait to convert the sun beating down on my house straight into air conditioning. Can’t wait.

**JAIM:** Nice. Life hack right there.

**LAYNE:** Take that, sun. You want to be hot today? Straight to AC.

**CHUCK:** Oh, I’ve been resisting that move. I should talk to you and see if it actually makes sense to me to do it now.

**LAYNE:** Yeah, I thought long and hard for months and months and months and pulled the trigger. Pretty happy about it.

**CHUCK:** Awesome. Alright, I’ve got a book that I’m going to pick. I was wondering if I picked it last week but I can guarantee you I didn’t because I didn’t make it last week and that is Procrastinate on Purpose by Rory Vaden. It’s a productivity book but in particular, it is about creating margin in your life and getting the right things done at the right time. And he talks about – I won’t give it all away but he talks about the different stages that you need to go through in order to figure out how to handle a particular task.

For example, if it’s something that you shouldn’t do or shouldn’t worry about at all, you can eliminate it. In other words, you can just take it off your list and it goes away and you’re done. Another thing you can do is you can delegate it so you can have somebody else do it. Or you can – he has five different things that you can do with it. The last one before you actually just do it is “can I put it off?” So you procrastinate it on purpose and that’s where the book’s title comes from. But it’s been really interesting to look at the things that I do and the things that I have Mandy do and the things that I have other folks do within the context of Devchat.tv or anything else and think to myself, “Oh, okay. So where does this fall and how can I get more time and be doing the things that are really important?”

Anyway, I’m just going to put it out there. It’s just an awesome book because I have really gotten a lot out of it. Like I said, it’s Procrastinate on Purpose by Rory Vaden. Yeah, those are my picks.

So yeah, we’ll go ahead and wrap up the show. Thanks everyone for listening and we’ll see you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
