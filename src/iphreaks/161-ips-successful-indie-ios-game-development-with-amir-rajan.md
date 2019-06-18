---
layout: layouts/post.njk
title: >
  161 iPS Successful Indie iOS Game Development with Amir Rajan
date: 2016-07-14 07:00:27
episode_number: 161
duration: 46:56
audio_url: https://media.devchat.tv/iphreaks/iPS161SuccessfulIndieiOSGame Development.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

00:58 - Amir Rajan Introduction

- [Twitter](https://twitter.com/amirrajan)
- [GitHub](https://github.com/amirrajan)
- [Blog](https://amirrajan.net/)
- [A Dark Room (App)](https://itunes.apple.com/us/app/a-dark-room/id736683061?mt=8)
- [Surviving The App Store: How to Make It as an Indie Game Developer by Amir Rajan](https://leanpub.com/survivingtheappstore)
- [A Noble Circle](https://itunes.apple.com/us/app/a-noble-circle/id977865620?mt=8)
  03:08 - Building A Dark Room07:14 - Marketing the Game
- [A Dark Room (Web Version)](https://adarkroom.doublespeakgames.com/)
- [Twitter](https://twitter.com/)
- [Facebook Ads](https://www.facebook.com/business/products/ads)
- [Reddit](https://www.reddit.com/)
  - Accessibility - [Raising Awareness, the Blind use iOS Devices](https://amirrajan.net/software-development/2013/12/29/if-you-are-reading-this-you-are-not-blind/) - [AppleVis](https://applevis.com/)
    23:40 - Earning a Sustainable Income29:03 - Amir’s Developer Experience
- [John Sonmez (Simple Programmer)](https://simpleprogrammer.com/)
  33:22 - Reviews37:05 - The Iterative Aspect of Building an Application
- [Flatland](https://en.wikipedia.org/wiki/Flatland)
- [appstorepromotion@apple.com](mailto:appstorepromotion@apple.com)
- [Surviving The App Store: How to Make It as an Indie Game Developer by Amir Rajan](https://leanpub.com/survivingtheappstore)
  &nbsp;Picks
- [Hoplite](https://itunes.apple.com/us/app/hoplite/id782438457?mt=8) (Amir)
- [Alto’s Adventure](https://itunes.apple.com/us/app/altos-adventure/id950812012?mt=8) (Amir)
- [Transistor](https://itunes.apple.com/us/app/transistor/id948857526?mt=8) (Amir)
- [Blackbox](https://blackboxpuzzles.com) (Andrew)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**ANDREW:** Hey everybody and welcome to iPhreaks episode number 161. I’m Andrew Madsen and this week, we’re going to be talking with Amir Rajan. Amir. Do you want to introduce yourself a little?

**AMIR:** Yeah. Man, it’s crazy. I can actually just say I’m a game developer. I know there’s probably a lot of people out there that are like aspiring or do hobby and stuff but I can actually say that now.

I was at a recent check-up at a physician and – you sign those – you fill out the little forms for a new patient, enrollment, and it was like, “I’ll be patient,” and I said, “Game developer.” That was pretty cool to be able to do that.

So I’m a game developer. I build iOS applications and iOS games. My claim to fame would be Dark Room. It’s a minimally text-based RPG. It hit the number one spot in the app store, both on the paid market and the free market. So globally, it’s got 2.5M downloads, 25,000 five-star reviews. It was the number one app overall in 17 countries and it’s the number one game in 50 countries and then the number ten in the top 10 game list in about 120.

So it’s got quite a bit of a success and then on top of – after that, I created a prequel, pre-sequel and another game, and all three of the games that I built so far had made it to the top 150 premium apps in the app store. So I’ve got quite a bit of a success there with regards to game development and by extension marketing applications.

**ANDREW:** Cool. Well, there are not many people that can say they, especially in this day and age, they developed a game for iOS and hit the number one spot. That’s not easy to do.

**AMIR:** Let alone a text-based game. [Chuckles]

**ANDREW:** Yeah.

**AMIR:** With no graphics in this thing. [Chuckles]

**ANDREW:** I was just going to say, if I were thinking of video game types that would do really well in mobile, a minimal, text-based RPG would not be [chuckles] what came to mind. Yeah.

**AMIR:** Yeah, and the crazy thing was that even at the end of 2014, I was put on Apple’s top 10 apps of 2014 on top of that. They even liked it and that’s – that goes against everything we think about when we think about apps. The apps that actually show up, the ones that are in a really pretty and really slick and use all the features of iOS devices and things like that. So yeah, it was good to get accolades from Apple on top of that.

**ANDREW:** So let’s break this down a little. So you had an idea for a game, I take it you decided you wanted to develop a game. Somehow the idea came to you; I think most of us as iOS developers or programmers in general know that in general, coming up with ideas is not really the difficult part. I mean I have [crosstalk].

**AMIR:** Right. It’s the execution. [Chuckles]

**ANDREW:** Right. So tell us a little bit about what makes A Dark Room really special.

**AMIR:** So I actually – March 2013, I quit my job and kind of went on a sabbatical. So I spent three months binge coding on whatever I wanted to. That’s when I started thinking about, “Hey, I wanted to get into iOS development and I want to learn iOS development,” and thought about building a game.

So A Dark Room actually started off as a web-based game. It went viral on Hacker News and it was just an HTML5, web-based game. No server-side code; it was all done through local storage as far as game state was concerned. I was like, “Hey, this is – this looks like a simple game to dip my toes into iOS development with.” So I emailed the original developer, Michael Thompson, and I said, “Hey, I want to try my hand on iOS development. Can I take this game, re-envision it for a mobile medium and if we make something, I’ll charge a buck – a buck, \$101.99, and we’ll split the profits. What do you say?” He’s like, “Yeah, go for it.” So then that’s how it started.

If you compared the web version of the game and the iOS version of the game, they’ve diverged. It’s really interesting because the web version was actually open source. It was under MIT license. So whoever is in the game is MIT licensed and other people started contributing to the web version of the game. It’s deviated from my vision that I had for the iOS version of the game and the changes that I made to the iOS version. So you – across time, it’s been two or three years now, you can play both versions and see how they’ve changed/evolved overtime.

It’s really weird. It’s interesting how that organically happened. So then I spent four months building the game. The [inaudible] of the app store, I got – first, day, I tweeted out and I got about 35 downloads. It kind of stayed that way for about four to five months. I did my own marketing and well – I guess we’re going into detail into pretty much all I did there. And then about five to six months in around April, it shot up in the UK, became the number one app in the United Kingdom. Two weeks after that, it became the number one app in the United States. It stayed there for about 18 days. That’s all [inaudible], I guess. After that, it fell off and about eight to nine months after that, I made it free and it hit the number three spot in the free app store. The only two games that were ahead of me was the Facebook messaging app which I think everyone was forced to download during that time period.

**ANDREW:** Yeah, that doesn’t count.

**AMIR:** Yeah, that doesn’t count, right? And the second one was Crazy Taxi, a game built by SEGA. It was the editor’s choice for that time so I had the top banner app and it was a free game. So those are the only two apps that did better than I did during that time period. Then I went back to paid, created the pre-sequel and I’m on my third game, building that out. And I continue to be a game developer. [Chuckles]

**ANDREW:** When you started with the Dark Room, were you doing things intentionally to try to make the game really successful? It sounds to me like it was – you didn’t know what to expect [inaudible].

**AMIR:** Yeah, frankly I didn’t know what to expect. That’s an unfortunate aspect of being successful in general; not even in the app store but overall is that there is a component of luck there. I think there was a component of luck to go viral in the UK. I think there was a component of luck to the number one spot from the US app store. That being said, to stay there for 18 days, there was quality built into the app to actually do that. So yeah, when I started, it was like, “Okay, I just want to build a game. This is a text-based game. It’s going to be easy to do. I’m not going to have crazy 2D graphics – 3D graphics or 60 frames per second that I have to deal with; it’s just a text- based game. It used to be a way to get my – dip my feet into some iOS development.

So what happened was after I finished the game, I kind of got obsessed with marketing the game. [Inaudible] on the detail of how I did that if we’re good on that specific segue.

**ANDREW:** Yeah, I would actually love to hear what you did.

**AMIR:** Yeah, sure. So my whole marketing thing actually started off with Twitter. So the web version went viral and Hit Hacker news. And a lot of people started tweeting about the web version of the game. So I [inaudible] people say, “Oh, the only reason that you’ve been successful is because the web version went viral on Hacker News.” Keep in mind that it’s been 67 months since that time period. I went back and I searched Twitter for the URL that people posted from way back that and I took the persona of the game.

So I created a Twitter handle called The Dark Room iOS and I spoke to those people, tweeted about the web version of the game in the persona of the game itself. So instead of trying to be very sales-y thing, “Hey, I’m Amir and I [inaudible] the game,” I would just say some ridiculous things with regards to the game itself.

So there’s a specific area in the game – events in the game where you can actually get attacked by snarling beasts and this text comes up saying, “Hey, your village has been attacked by snarling beasts and it’s killed people,” and I would tweet that. I would say, “Snarling beasts have attacked your village,” or “I consume a part of your soul every time you stoke the fire,” or some variation of that. And people started interacting with that. They really enjoyed that kind of exchange with a Twitter persona as opposed to just being, “Hey, buy my version of the game.”

One of the really interesting interactions – a couple of things that I was able to get from the interaction and I guess this goes into more of the technical aspect of how do you convert this stuff into sales and what-not. What I saw was every time someone with about a thousand followers retweeted the game, I saw one noticeable spike of downloads. So it turns out that you get about 10 downloads for every thousand followers you have. I think it’s important to have that delineation [inaudible] just so you get one download for every hundred followers. It’s almost like a step function. So anything below a hundred – a thousand followers, you’re probably not going to get any downloads. It’s only when you get into the thousand followers and then multiples of that when you start really seeing some kind of residual effect or some noticeable spike when you look at the downloads for the next day.

So I interact with people; they would retweet what I said to them and then I’d say, “Okay, this person had about 6,000 followers or 5,000 followers,” that was a big tweet for me. Was that [inaudible] well, and it did. It was surprising to see that correlation though. So that’s how it started things and during that time period, I actually built a relationship. I had one interaction with a person named Leigh Alexander and she, at that time, was a prominent editor for – I think it was Paste Magazine – no, a Giant Bomb and Paste Magazine. She was a really prominent editor and from that period, I actually started building a relationship with her with regards to The Dark Room and reaching out to her via email saying that, “Hey, this is what I’m trying to do,” or “I’m an indie developer,” telling her my story of how I got involved with the ADR and what I did to get into mobile development and then become and indie game developer.

That relationship took about – almost 127 based build [inaudible] before I actually asked her, “Hey, would you publish an article about me?” That was another aspect with Twitter was that you have the sales funnel effectively, for me, it was the URL for Dark Room. I used that and then instead of being sales-y about it, I was genuinely [inaudible] interaction. Then when I found a person that I wanted to build a relationship with, it took time. It wasn’t just an overnight success. I think that’s a key thing with the marking approaches that I took with ADR and specifically, Twitter.

**ANDREW:** You mentioned that on Twitter, you spoke basically in the voice of the game as if you were the game. Do you think that’s a valuable technique for developers in general?

**AMIR:** Oh yeah, I think – there’s a couple of things that I think are really important with regards to the social media aspects specifically Twitter. I’ll speak to Reddit also; I’m pretty well-versed in Reddit. But in Twitter, people – there are mistakes I made. One mistake I made was that I didn’t create that Twitter following as I was building the game. The game went viral and then I got the email from Michael. Immediately then is when I should’ve created a Twitter handle and started letting people know that, “Hey, this game is being built for iOS. Follow me for updates.” So that was one mistake I made.

A mistake that many people make is that they wait to actually tell people about what they’re doing until the day of release. Then you have an audience of one when you do that and that’s not very helpful.

So yes, talking in the persona of the game is really important and then actually having a narrative outside of just the game itself. So a narrative about who you are, how you’re developing your game or company or what your philosophy is behind the product you’re building. Then on top of that, having curated content that is not related to a game.

So there’s only so much people care ADR. I can talk about The Dark Room and the updates and plug jokes about in-game mechanics, but eventually, you want to pull in other things that your followers would be interested in. Other text-based game, other premium games that don’t have in-app purchases, A Dark Room is a premium game without in-app purchases or ads or anything like that. So then, that’s how you start building that followership. But yeah, it’s very important. You can’t just show your own product. That’s a mistake that people make.

**ANDREW:** Yeah. So I know just as a regular user and as a Twitter user that I’m not likely to follow an account that’s just going to tweet “buy my stuff” a couple of times [crosstalk] a day because that’s just boring.

**AMIR:** A good ratio – I think the ratio that I found is about 10% of my tweets are about self-promotion of my own products, but then the other 90% is tweeting and supporting other indie game developers. If people have done artwork about A Dark Room, I’ll retweet them, or if they’ve had general inspiration and different pieces of art, I’ll retweet about that. But yeah, you need to mix it in with other stuff and good curated content.

**ANDREW:** So we’ve talked about Twitter and you’ve mentioned Reddit a little, too, but are there other avenues for getting traction, getting the word out about [crosstalk]?

**AMIR:** Yeah. So for me, I’ve tried Facebook. I’ve tried Facebook ads. I made the same mistake there.

I’m not very active on Facebook. You need to have an audience built before you can pitch a product so I didn’t have the audience built there. I tried Facebook ads; that didn’t work for me and my budget was about \$150 a day. I did that for about two weeks to three weeks. That was really painful and expensive but it didn’t work out for me. But one thing that did really well for me was Reddit. The way I came – the way I came – the way I stumbled across Reddit was really interesting – through Twitter.

So I was on Twitter and then I received a reply from someone, saying that they were trying to play the game and they were having issues playing this game. And I was talking to them and I was like, “What? What’s wrong? What bugs are you seeing?” And he’s like, “Well, I’m having trouble with this ASCII map. It’s part of the game that reveals an ASCII map.” And he was having difficulties with that aspect of the game mechanic and I play tested this thing for way too long. He comes back and says, “No, I’m blind. I’m actually using the voice over [inaudible] of iOS to play your game.” And the real interesting thing was that because of the text-based adventure, he was explicitly searching for the word “text-based” or “text venture” in the App Store and that’s where he’s able to find it.

So then I was like, “Okay, whoa. The map is definitely not accessible to the blind.” One backend made it accessible. I wrote about that on my blog and then there’s a community out there called AppleVis – applevis.com and they are a blind community that uses iOS and supports. It’s a forum for having apps that are accessible to the blind or reaching out to App Developers and then talking about apps that are accessible to the blind.

So their editorial team contacted me and said, “Hey, we wanted to do a giveaway on our site about the blog post you wrote. We saw the blog post; we really appreciate it. We want to give a giveaway on our site about the blog post you wrote.” So what we’re saying is that we’ll post this contest on our page. You give us ten promo codes and they have to read your blog entry, write about or comment in our forums saying that they’ve read it and prove that they’ve read it by speaking into the blog entry in some way and then we’ll give them a promo code.

So it worked really well. I got a lot of nice interactions from there and then that’s where I started taking that idea and then transitioning it into Reddit and then where I started actually writing about the development of the game.

So there’s a sub-Reddit on Reddit called r/app hookup. Basically, you go there to see who’s done discounted apps or if there’s any developers giving away promo codes or what-not. What I did was I did a promo code giveaway on r/app hookup and I basically did the same thing. I said, “Hey, read this article about supporting blind gamers and comment on Reddit. Let me know that you’ve read it and I’ll give you a promo code.” That’s exactly what I did. I got a ton of comments and the post got up voted specifically because Reddit is about comments and the interactions that happen around an article. I got a lot of good love there and I continually did that. So every time I went – I retract or run back, went through the development process and started writing about my marketing tactics and what I did and how I was approaching different aspects of big game development or my own personal development diary.

Every time there was a publication out there for A Dark Room, if it was a small publication or a large publication, I’ll post on r/app hookup, say, “Read about the Dark Room, prove to me that you’ve read it and I’ll give you a promo code.” That works so much better than just putting promo codes out there and saying, “Hey, here’s a promo code. Download my game.”

They started knowing me as a developer and then they started knowing me by name like, “Hey, this is Amir. This is a game that he built.” So then when ire leased the pre-sequel, my third game, just putting it out there saying that I’m making it free for three days, it’d be the top post and then people would comment saying, “I really enjoyed your games. I can’t wait to play this and I can’t wait to gift it to my friends and recommend it to my friends.”

There’s a lot of good person to person interaction that happened because of that whole Seven Degrees of Kevin Bacon thing. We start with Twitter, a blind person plays the game, I write a blog post. AppleVis context need to do a giveaway and then I find myself on Reddit doing the same thing.

**ANDREW:** Yeah, I think there are two really interesting things in what you’re just talking about there. The first is that you made the game accessible to blind users because this blind player contacted you, but by doing that, it sounds like – I don’t know. My first thought when I’m trying to market a game would probably not be, “Well, I really need to work hard to get one player,” because I actually [crosstalk] feel strongly that you should – thing should be accessible and that you should serve people with disabilities and whatever. You might not think that’s going to give you a big marketing biz, right? You do it because it’s just the right thing; you do it because it feels good and whatever but it seems like this was actually a really important thing to you.

**AMIR:** Frankly, after a release, I saw a small bump the day after. I think those people that were on AppleVis finally download the game. But I was doing it for that specific reason of just doing the right thing. Surprisingly, making apps successful, especially if you’re making business applications, 80% of it is kind of done by Apple. Just by using UI kit, you get a lot of things for free. It’s just a matter of polishing that aspect of it. I guess that’s something unique about my game is that it’s built completely with UIkit. I didn’t actually use any kind of game frame. I guess that’s what you get for building a text-based game.

**ANDREW:** Well, and of course text lends itself well to being accessible as well.

**AMIR:** Yeah. That stars lined up correctly and I looked out from that period. But what I really learned – the other thing probably is that just the interaction, to build conversations and tell that narrative and tell that story. It’s not just the product but it’s everything else that revolves around that product. That’s incredibly important to marketing.

**ANDREW:** Yeah. On that topic, I have a Mac app that I sell that’s actually an app that ham radio operators use. It turns out, there are quite a number of blind ham radio operators. It’s a hobby that’s good for blind people because a lot of it is done by hearing and you’re talking to people. It’s a way that they can get out and communicate with people all over the world. In a way that’s more difficult for a blind person than it is for seeing people.

I have always been – I have always worked really hard to make my app accessible and of course it’s pretty easy like you said because it’s built – it’s a Mac app but it’s built with AppKit and you get a lot of that for free but what it’s [inaudible] is I have quite a loyal following of blind users. And I’ve noticed, they’re probably more likely than the average user to recommend the app to people because they literally appreciate and love the fact that you go the extra mile and make it work for them. They know that’s not something everybody does.

**AMIR:** Yeah. And it’s just meaningful like when it hit the number one spot, I got an email from some random person that said, “Hey, just want to email you and let you know that I really appreciate that you made your app accessible. My sister’s blind and when it went viral and all of her kids – all the kids at school were playing it, that was the first app she was able to actually participate in and talk about. I really appreciate it.” You get those kind of things and it’s just – it makes it all worth it.

**ANDREW:** Yeah, that’s cool.

**AMIR:** Yeah.

**ANDREW:** Well, then you also talked about when you started using Reddit. It seems like the big thing there is not even really that you’re giving away promo codes; I mean obviously, that seems to generate interest and it’s kind of part of the app hookup sub-Reddit but really, it was that you made it so people knew you and they felt a little bit of a personal connection. Almost I think, they probably felt somewhat invested in your success.

**AMIR:** Yeah.

**ANDREW:** They like your first game and they want your second game to do well so you keep making games.

**AMIR:** Yeah, and they support you that way, too. It’s really good to see that kind of stuff. Then, another interesting thing that I’ve done with marketing, specifically around Reddit – I’m assuming it’s more of a cultural aspect of Reddit because Reddit does things like – with regards to secret [inaudible] and giving away or giving Reddit gold. But I tried to build a culture around, “Hey, if you like my game, yeah, you’re getting it free here. I made it free for two days. Go ahead and download it. I want you to enjoy it. There’s no strings attached. It’s free. The game has no in-app purchases, no ads. Just enjoy the game. If you like, gift it to someone else. Pay it forward and I appreciate it.”

Another thing that I ended up doing was that anytime someone recommended a Dark Room to someone else, maybe through a sub-Reddit, I’ll just [inaudible] search on Reddit. I’ll actually give them Reddit gold. I would give them Reddit gold and say, “Hey, I appreciate you telling people about my game. Here’s a thank you, here’s a Reddit gold,” and I would just say, “Amir, creator of The Dark Room.” Those are the kind of connections that – they’re deep. Those are the connections where one person might end up telling a ton of his friends and they would download it. It’s not just some banner head flying across the screen; it’s a personal recommendation from someone.

**ANDREW:** Right. You’ve mentioned a couple times that your games – I think all of them at least – A Dark Room, it’s not a free with in-app purchase premium kind of game. It’s just – you straight up buy it although you’ve made it free now and then.

**AMIR:** Yeah.

**ANDREW:** So I think the common wisdom is that these days – I mean it’s true that these days, a big portion of the money made in the App Store is being made by these premium games with in-app purchase and I think there’s even the idea that among those games, the ones that are successful – they’re not even really making money on most of the people playing games; they’re making money on the whales, the people who [crosstalk] are rich and spend hundreds of dollars on in-app purchases.

**AMIR:** Yup.

**ANDREW:** I think to me and to a lot of other iOS developers and just a lot of people in the community that care about the App Store and whatever – we’ve seen that as a negative thing. It’s like – it’s gross now that games have to be – it seems like to be successful, you got to do this kind of scam-y thing where you’re really playing on people’s [crosstalk] and whatever.

**AMIR:** Yeah, and I find it frustrating, too. It’s difficult. It’s difficult to be in this position where – how do I make sustainable income so I can continue and do this full-time without being a sleaze ball, right?

**ANDREW:** Right.

**AMIR:** Yup. So I can speak a little bit to those techniques. Was there something else that you wanted to [crosstalk]?

**ANDREW:** Yes, I was just going to say it’s refreshing for me to hear that you’re not doing that and you’re still seeing some good success. So I wonder – I get the feeling maybe I’m wrong but you’re probably not making \$250,000 a month.

**AMIR:** No, I’m not. [Chuckles]

**ANDREW:** You [inaudible].

**AMIR:** And I’d be more than happy to share revenue. There’s no problem with me doing that.

**ANDREW:** Well, I guess what I’m getting at is I’d like to know how – what success means for you and then also what you think selling your apps with these just plain old paid model has meant as far as marketing goes and as far as your success goes.

**AMIR:** Yeah. So a couple of things, so let’s touch on as far as the income and things like that. I make anywhere from – on the low end, when ADR was – so ADR hit the number one spot and it was – it did its 18-day thing and at that spot, I was getting about anywhere from 12 to $20,000 a day so that is some serious money coming in during that time period and it tapered off. By the time November came around, I was back down to $100 a day.

So as off today, all – I have three games. My three games together, I get anywhere from three to \$800 a day for my three games. It’s not a lot of money. If you think about it, Apple takes 30%. Being self-employed, 15% goes to taxes on top of the income, my income tax. So I have to pay a self-employment tax and then the income tax on top of that. So I make maybe any – and I have partnerships involved, too. So I net anywhere from 20 to 0 cents on my games. All my games are 99 cents so basically, I net anywhere from 20 to 40%, in this case, 40% on my games.

It’s not a lot of money but the other [inaudible] aspect of it is that being a premium game and being a one-man shop, I don’t need a big piece of pie. So the triple A – all the triple A companies are competing in this flooded market while getting to a top ranking RPG category or in the music category doesn’t take a lot of downloads. You get that visibility immediately without much effort actually. So it’s a really interesting angle specifically for your small time developer take; you find your niche, you find – you take more of grassroots and a bottom up approach, get people that really care about what you’re building, have them recommend it and then slowly, your app, even a hundred downloads could make it into the top 100 of the category. Getting about 500 downloads at a four-day moving average, that’s about what I’ve been able to see. It’ll get you in the top 100.

It’s surprising, it’s really surprising to do that but you get into the top 100 and then suddenly, it creates a snowball effect. More people find it and you start climbing and climbing and climbing. So it worked really well, being a premium app for me. It’s a book; I don’t ask a lot. My reviews are really good for my applications. You take that leap of faith for one of my games and then I rely on interstitials within my applications, basically just recommendations that hey, if you bought my game, buy my other games. I’m kind of competition free from that perspective because I’m not competing with those triple A companies there.

**ANDREW:** Sounds like for you – I actually think it would be this way for me. You’re not aspiring to compete with EA or something; you’re aspiring to do what you do and it sounds like you’re making – you’re not rich by any means but you’re making certainly enough to live on and keep doing what you’re doing.

**AMIR:** Yeah, and the interesting thing is that – and I try to tell this to other game developers, too, or developers in general – if you can make an app that generates ten bucks a month – I mean, ten bucks a day – that’s 300 bucks a month, that’s a card payment, right? There is some weight to that. So if you start and it’s a mobile app, so generally they’ll be smaller, too. Suddenly, you do this for two years and now you have five to six apps. And you do this for another two years and now you have twenty apps. Now you have interstitials between your apps, recommending them to buy your other apps and suddenly, everything gets lifted up.

You get a lot of the small money coming together and really giving you something to actually live off of.

**ANDREW:** It’s sort of a different model than I think we hear a lot. And I know – and I tell people and iOS developers, just like families and friends and whatever, a lot of times they’ll say, “Oh, I have an idea for a million dollar app,” and I think, “Well, I’m not really trying to make a million dollar app; I just want to make [crosstalk] stuff up.”

**AMIR:** All we make is [inaudible] – I want to make a \$4,000 app.

**ANDREW:** Right. [Chuckles]

**AMIR:** That’s something that I’ve tried to tell people, too, is that if your app can consistently make four to \$5,000 annually, that’s success. Take that, solidify it. You don’t have to really put that much effort into building that out anymore; build your next app and then cross-pollinate and build your next app, and keep it brand consistent across your apps. That’s a really good way to make some sustainable income.

**ANDREW:** I want to change gears just a little bit. You mentioned before the show that you do a lot of other kinds of [inaudible] in particular, web development, Node and that sort of stuff. So did you have any iOS development experience before you started on Dark Room?

**AMIR:** I didn’t have any iOS development experience. I was – I did .NET and Ruby on Rails and Node.js development before I decided I’d take some time off.

So I was in the development industry for about six to seven years, and then that’s when I decided to take a sabbatical. I was kind of burned out from corporate development and just kind of wanted to do my own thing.

Do I decided, “Okay, I’ve got a year’s worth of money that I want to burn through.” I put my chips on the table; this is just one “fun money”. If I lose it, no big deal. If anything happens afterwards, great. That’s how I took that approach but I know specific iOS development. Plenty development experience, just not with iOS.

**ANDREW:** The reason I think this is interesting is that most of the people listening to us now are iOS developers, but no matter who you are, there are lots and lots of skills that you don’t already have and [inaudible] areas that have been [inaudible] you’ve never done anything before.

I just wonder if there was value for you in taking that time off and diving into something new. I imagine – I mean, you’re already a developer so it’s easier than if you’re starting from scratch, but there’s still a lot to learn.

**AMIR:** Yeah.

**ANDREW:** I just wonder what that experience meant for the game and for the success of the game and for work. What’s going on now?

**AMIR:** That’s actually pretty important, I’ve had people tell me about, “Oh, I want to build this app or I want to build that app,” and they tried to do the “I want to learn from it and make money”. And I think that’s where things get a little tricky because if I was going to build the game to make money, I wouldn’t have done it in native iOS. I would’ve done it using a web wrapper or something and some JavaScript in them. Maybe polish up what Michael, the web developer, did on his front end and try to make money on the application. But I took a step back and said, “No, I want to try to learn from the experience.”

So I think that’s an important aspect of – if you’re building your own apps, don’t try to walk that line. Decide. Decide if it’s something that you want to make money out of. Have the end goal in mind. Have your excess [inaudible] in mind. Do what you need to do to build that app out. If it means hire a subcontractor just to do it or off-shore – whatever. Do it. And if you want to learn from it then learn from it, but once you try to do both things, it gets – the water gets muddy.

But my experience was strictly going in and saying, “I want this to be a learning experience and I want to code to be “perfect”. And I just want to enjoy development and building this application.” And I think the interesting thing is that the quality that was built into the application showed through when it did go viral.

**ANDREW:** What about people who can’t take three months off?

**AMIR:** Do a part-time. Got plenty to do with part-time. I would not recommend anyone to take a year off to try to make a number one app in the App Store. Please don’t take that advice. But I think having a side hustle for lack of a better term, wake up in the morning – John Sonmez’s guide that really advocate – it’s wake up in the morning, code on some stuff and your first goal is to build an app, have something that you can deploy in the app store in about 46 weeks. This is actually something that I did with my third game and I’ll go into a little bit detail with that but try to think of something that you can build in about four to six weeks part-time. It doesn’t have to be big. It doesn’t have to be perfect because you can always submit an update.

Get it on the App Store. Get some downloads, get some reviews, get some feedback and see if you can generate even a dollar a day. If it’s through ads, if it’s through IAP, if it’s through paid purchases, whatever you see from that perspective then iterate on that. And if you hit the \$10 a day mark, that’s really good. Then you can start on your next app or you can decide if you want to do some spin off. I think that’s palpable to say doing part-time, try to build these assets slowly. It’s not going to happen overnight; you got to go slowly and release when we can. Don’t sweat the pressure of having a complete, perfect app the first day of release.

The first day of release, probably no one’s going to download it. I don’t think that’s a surprise to anyone. Very few people are going to download it; even fewer people are going to give you reviews on it. Do just go ahead and put it out there and then iterate on it in public.

**ANDREW:** Do you think there’s anything you did in the design or in the game itself that helped you spread the word or get more people?

**AMIR:** Yes.

**ANDREW:** Beyond that – I mean, you made the game early a good game. It’s high quality.

**AMIR:** Yeah. A couple of things that I did – so when I hit the number one spot in the App Store, don’t release – if you hit the number one spot I the App Store, do not release an update to your application. You just want to – you don’t want to rock the boat or anything; you want to keep your reviews. Anytime you release a new version of your application, the reviews reset. Does that happen in the Mac App Store also?

**ANDREW:** Yeah, it’s really annoying, too.

**AMIR:** It’s really frustrating. So obviously, don’t release any updates. Then the really interesting thing was that – and this was added after the app dropped was that Michael and I actually created a developer commentary at the end of the application or at the end of the game. So once you [inaudible] the game, a secret button would unlock and you would actually get a developer commentary about how we built the game, how it came, who we are and how the game was developed and what we left out and what we put in and all those different variations.

So it was kind of an interesting experience. You play the game, you beat it, your mind is blown; you get this button that shows a [inaudible] secrets. You listen to developer commentary. You enjoy 20 minutes of us rambling about random things, about the development of the game and then after that is when you get a request to review the game. So that trajectory puts you in a position to – put us in a position to have very high quality reviews when people didn’t review our game and then have a more personal connection.

So it’s really interesting when people talk about interacting with editors or trying to get editors to review their game or what-not. Maybe you think about just connecting with the people that actually download it. You know where to add that red tape of having to go to some big website to say, “Oh please, review my game and give me some visibility.” You’ve got ten people that downloaded it; well, try to figure out how to connect with those ten people because they’re the ones that you want other people – they’re the ones that you want recommending to other people. That worked out really well for us.

Then you got to have a review button. I think if your app doesn’t have a review button, pick a perfect time to ask for a review. Don’t do it with the night screen; the night screen is kind of a cop out. Pick a perfect time to ask for a review and ask for the review then and I promise you that your reviews will go up.

**ANDREW:** The thing that’s been difficult for me to figure out and for developers in general, but there are some who say you should never ask for reviews. It’s scam-y or sort of gross or whatever which I don’t agree with. On the other end of the spectrum is if you’re putting up a thing in front of people’s faces every other time they try to use the app and it’s keeping them from using the app, you’re probably going to frustrate them more than they want to say nice things about you.

**AMIR:** Yup.

**ANDREW:** So there’s a line to walk there.

**AMIR:** Yeah. And for me, the perfect time was as soon as you beat the game, that’s when you’d ask you to review it. And it’s simple; it’s like, “Hey, I’m an indie game developer. Thanks for taking the time to play it. Just leave a review to say thank you,” and that’s what people do.

So it’s not – there’s a little bit of other scam-y things that somehow developers do. They’ll say, “Give us a five star review and we’ll give you this free item.” We know that we have no idea on who reviews the app and on what rating they give us, right?

**ANDREW:** Right.

**AMIR:** So from our perspective, it’s like they clicked the button, we give them a free item but people don’t know that I’m going to give a five star review. That’s super scam-y but – and Apple will take you down if they find you doing that.

**ANDREW:** Yeah. I was just going to say I know Apple won’t allow that if they catch you.

**AMIR:** Yeah, they catch it. I think you asking for reviews – so let’s – and having interstitials to your other applications, I think that’s perfectly [inaudible] and we should give a reward for doing good work from that.

**ANDREW:** We’re getting kind of low on time and I wonder if there’s anything that we’ve missed that you really think we should talk about before we wrap it.

**AMIR:** So I want to touch on the internet aspect of building applications. My latest game in Noble Circle, it’s not actually done. I’m still building it but it’s in the App Store right now. Basically – and it’s for paid, like I’m charging people for it.

So one interesting aspect that’s happening with that game is that it’s a story – have you ever read of Flatline?

**ANDREW:** No, I haven’t.

**AMIR:** You haven’t? You’ve heard of it though?

**ANDREW:** I’ve heard of it, yup.

**AMIR:** Yeah, it’s a story about these two-dimensional shapes and they live in those two-dimensional world and they talk about their mannerisms. So it’s a Gutenberg Project book and I was like, “Okay, I’m going to build a game that’s inspired by Flatline.”

The game play’s kind of like a bug [inaudible], like a tap game. It’s a 2D platformer and you can explode if you hit these pointy triangles [inaudible] the circle that’s trying to traverse this world. But the interesting thing is that I am building a story [inaudible]. So you get – deploy the first version of the game for free. So okay, it’s a free game. Enjoy it and then there are some developer commentary at the end. It was like two minutes of Gameplay. It was absolutely – pretty much nothing. But a developer commentary at the end, it was just a little monologue that said, “Hey, I’m deploying this game as I’m building it.” So I promise that every few weeks, you’re going to get an update to this game. Just support me.”

So I’ve been doing this for a year now with this game on the weekends and here and there, whenever I have a good idea. That’s how this game is developed. People looked forward to it. It’s almost like an episode of some show you watch like, “Oh, I can’t wait for their next episode or the next thing that happens within this game.”

So this idea of this pressure that developers feel with regards to releasing a complete product, we’re in this arena where you can release something that’s not completely finished. Get some feedback and then iterate on that. I think we shouldn’t be afraid of doing that. It gives you that early opportunity to connect with your marketing avenues and tell your story and tell your narrative, show you brand off and all that other good stuff.

**ANDREW:** Yeah.

**AMIR:** So I think that’s one of the most important things.

**ANDREW:** Well, I also thinks there’s this interesting thing that can happen where people who love what you’re doing will – it keeps them coming back. Whereas if you release the whole thing and you’re done, you never work on it again. I’m sure they might love it and play through it one day but by continuing to work on it, you give them a reason to stay with it, stay with you.

**AMIR:** And these things that opens you up to Apple’s futures, too, because Apple likes promoting games that are supported. So every time you do an update, that’s an opportunity for you to pitch to Apple and say, “Hey, I updated my game. Here’s what I’ve added. Here are the non-trivial changes that I’ve made to it. Put me in the feature list.” They may actually do that for you.

There’s actually an email that you can contact. I think it’s like at appstorepromotion@apple.com. You can actually submit apps there. I’ve got some blog entries on how to do that and stuff like that, so I’ll give you links to my blog and my book and all that stuff so that people can see how you approach Apple by getting your app featured and what they’re looking for and how do you craft the email and all those good things. But doing updates to your apps is actually something that Apple wants you to do, so it’s in mind that they want it, too.

**ANDREW:** We’ll put those links in the show notes and that actually reminds me, why don’t you tell our listeners about where they can find you, about your games, where they can find you games and also the book that you’re writing.

**AMIR:** Sure. So my Twiter handle’s @amirrajan and amirrajan.net is my blog. My book is leanpub.com/survivingtheappstore. This book has about 200 pages now, 45,000 words or something. I’ve got some exclusive interviews with other premium app developers. Have you heard of like Alto’s Adventure?

**ANDREW:** Yeah, I love that game.

**AMIR:** Yeah, he did an interview for the book. Hoplite is another developer so a lot of good developers. All indie, all free from [inaudible] stuff, have done exclusive interviews with me about how they marketed their apps and different recommendations. So that’s available and my games The Dark Room. If you search – if you just search for The Dark Room in the App Store, you’ll see it there. Then the Ensign is the pre-sequel to The Dark Room and then A Noble Circle is the game that is based off of Flatline. Those are my apps and my [inaudible] all the awesome things that I do. [Chuckles]

**ANDREW:** Cool. Well, I’m sure am going to check out your games. I actually don’t play video games very often. Just because I’ve usually got other things going on that I want to do when I have free time, mostly writing my own stuff [chuckles]. But when I have, in the last few years, when I have gotten really into a game, it’s almost always been a really well-done indie iOS game that I love, you know. So I’m going to check them out.

Should we get to the picks?

**AMIR:** Let’s get to the picks. I can get three, right?

**ANDREW:** Well, you can get as many as you want but yeah, three sounds good.

**AMIR:** Okay, so my picks are going to be iOS games, of course.

**ANDREW:** Oh, you better not steal mine because I’ve got an iOS game pick, too. Okay, go ahead.

**AMIR:** Okay, well – do you want to go first [crosstalk]?

**ANDREW:** No. You go first.

**AMIR:** My favorite – so my all-time favorite iOS game is Hoplite. It’s basically – did you ever play NetHack back in the day? It’s a text-based rogue [inaudible] and it’s really difficult. So Hoplite is inspired by that and it’s almost like a [inaudible] strategy game, but it’s one of those things that you just pick up and just put down. It’s like the crossword puzzle for people that love turn-based strategy games. I love it. So Hoplite is my first game that I would recommend. It is a premium game, no IAP, plenty of replay ability.

The second game I would recommend would be Alto’s Adventure. It’s beautiful. It’s an absolutely beautiful game and it’s one of those games that really expose the concept of flow, this idea of just being able to zone in and zone out and [inaudible] enjoy the game. Then [inaudible] where you are in an experience so it’s a beautifully – it’s beautifully rendered and it’s just a fun scheme. It’s a snowboarding game but believe me, it’s great.

And then my final game – they’re not an indie shop; I guess they’re more established. They’re the ones that did [inaudible]. It’s a game called Transistor. You play as a – the protagonist is this woman that can’t speak, but she can sing and she has these programs. She lives in this almost like net-runner world where she has programs that she can used to attack people or attack the villain. Being a developer, it’s – it comes so close to your heart when you see how they portray programs and how they portray some of the strategy involved. Beautiful graphics, beautifully rendered. Another premium game, no in-app purchases but totally worth it. So I would say those are my three picks.

**ANDREW:** Those all sound great. I like Alto’s Adventure. I played it on the iPhone when it first came out then they were on the Apple TV pretty soon after the new Apple TV came out. I’ve played it on there and it’s great on the big screen, too.

**AMIR:** Did you ever play Knights on Dreamcast?

**ANDREW:** I didn’t have it. [Crosstalk] Yeah, I didn’t have a Saturn or a Dreamcast for that matter but I’ve played it in a friend’s house.

**AMIR:** Yeah, it reminds me of Knights. It’s so nice.

**ANDREW:** It’s a really pretty, well-done game. Just art-wise and it’s also fun. And I need to check out Transistor.

**AMIR:** Yeah, Transistor’s great.

**ANDREW:** As for my pick, I’m just going to pick one game and I’m picking it for two reasons, but my game is a game called Blackbox. I’m kind of surprised I haven’t picked it before. It’s also an indie iOS game developed by one person. It’s just a really clever game. I’m not going to give too much away but the thing about Blackbox is that it’s maddeningly difficult and also that most of the puzzles – almost all of the puzzles are solved without touching the screen on your iPhone.

**AMIR:** That’s interesting.

**ANDREW:** So it’s just clever and inventive. The second reason I’m picking it up besides the fact that I love playing it is that I think the developers’ doing a really great job doing a lot of the stuff that we’ve talked about in this show for marketing where he’s got a Twitter account that’s actually pretty fun to follow. The game itself has a lot of – even though it’s graphically pretty simple, it’s got a lot of personality. He does some interesting stuff in the game to encourage people to share it with their friends and you could tweet about it and everybody who gets it, you get a little something. It’s nothing big but in the game, there’s a little bit of a reward for that and he does it without it feeling scam-y or gross.

**AMIR:** Yup.

**ANDREW:** Anyway, it’s just really well done, along the lines of what we’ve been talking about and something I’ve had a lot of fun with over the past few months.

**AMIR:** Yeah, I think frankly, I think it goes without saying that if you want to learn how to market games or if you want to learn how to make good games, you got to download games and play them. You have to download apps that have been featured or that are effectively your competitors or people in your same category see what you’re doing right. This is a great way to do it, right? [Chuckles]

**ANDREW:** Yup. Learn from other people; we’ll figure it out.

**AMIR:** Yup.

**ANDREW:** Alright, well I really appreciate you coming on the show Amir. It was great to talk to you and to learn a little bit more about making a good and successful iOS game.

**AMIR:** I appreciate it man. Thanks for having me.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
