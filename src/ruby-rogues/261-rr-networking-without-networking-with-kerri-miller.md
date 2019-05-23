---
layout: layouts/post.njk
title: >
  261 RR Networking Without Networking with Kerri Miller
date: 2016-05-25 07:00:07
episode_number: 261
duration: 56:01
audio_url: https://media.devchat.tv/ruby-rogues/RR261NetworkingWithoutNetworking.mp3?rss=true
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

### Check out our speaker list and sign up for [Ruby Remote Conf](https://allremoteconfs.com/ruby-2016)!

&nbsp;01:53 - Kerri Miller Introduction

- [Twitter](https://twitter.com/kerrizor)
- [GitHub](https://github.com/kerrizor)
- [Blog](http://kerrizor.com/)
  02:12 - Networking Without Networking04:22 - [Social Currency](https://en.wikipedia.org/wiki/Social_currency)06:35 - Creating Opportunities to Connect
- Knowing Small Details About People
- Remembering Faces
- Randomizing
- Opening the Circle
- Offering Help and Guidance
- Playing Games
  22:38 - New Programmers as Speakers24:17 - Connecting After Talks25:29 - Merging the Speakers and Attendees30:13 - Users Groups
- Be an Organizer
- [Get A Coder Job](http://getacoderjob.com/)
- Travel and Find a Users Group
  35:01 - Livestreaming; Pairing Sharing
- [Livecoding.tv](https://www.livecoding.tv/)
- [Twitch](https://www.twitch.tv/)
- [Hangouts On Air](https://support.google.com/plus/answer/2553119?hl=en)
- [YouTube Live](https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig)
- [Crowdcast](https://www.crowdcast.io/)
  37:03 - Connecting with People at Specific Companies47:27 - [The Opportunity Scholarship Program](http://rubyconf.org/scholarship)&nbsp;Picks
- [Nadia Eghbal: I hate the term “open source”](https://medium.com/@nayafia/i-hate-the-term-open-source-a65fd481a95#.lcwx7lga1) (Coraline)
- [tabular](https://github.com/godlygeek/tabular) (Sam)
- [dotfiles/vimrc at master](https://github.com/geeksam/dotfiles/blob/master/vimconfig/vimrc#L408-L438) (Sam)
- [PlugBug World](https://www.twelvesouth.com/product/plugbug-world) (Chuck)
- [Safemore Smart 8-Outlet with 4-USB Output Surge Protection Power Strip](http://www.amazon.com/Safemore-Smart-8-Outlet-Output-Protection/dp/B00RTFHV10?ie=UTF8&psc=1&redirect=true&ref_=oh_aui_search_detailpage) (Chuck)
- [moonconf](http://moonconf.org/) (Kerri)
- [Open Source and Feelings](http://www.osfeels.com/) (Kerri)
- [Sage Yoyo Starter Pack](https://yoyotricks.com/yoyo-store/yoyo-brands/yotricks/the-sage-yoyo-starter-pack/) (Kerri)

### Transcript

**CHUCK:&nbsp;** Why you calling me?

**_[This episode is sponsored by Hired.com. Every week on hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It's totally free for users. And when you're hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the Ruby Rogues link, you'll get a $2,000 instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**_[I'm excited to tell you about a new sponsor to the show, Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to debug issues, or a million alerts flooding your inbox ruining your day. With Rollbar's full-stack error monitoring, you get the context and insights and control you need to find and fix bugs faster. It's easy to install. You could start tracking production errors and deployments in eight minutes or less, or automatically create new issues in GitHub, JIRA, Pivotal Tracker, et cetera. They have a special offer for Ruby Rogues listeners. Go to Rollbar.com/RubyRogues to sign up and get the bootstrap plan free for 90 days. That's 300,000 errors tracked free. Give Rollbar a try today. Go to Rollbar.com/RubyRogues.]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 261 of the Ruby Rogues Podcast. This week on our panel we have Coraline Ada Ehmke.

**CORALINE:&nbsp;** Hi, everybody

**CHUCK:&nbsp;** Sam Livingston-Gray.

**SAM:&nbsp;** It's just another manic Monday.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv. Quick reminder. Ruby Remote Conf coming up in a month. So, go check it out. We have a special guest this week and that's Kerri Miller.

**KERRI:&nbsp;** Hi everyone.

**CHUCK:&nbsp;** Do you want to give us a brief introduction since you haven't been on for a while?

**KERRI:&nbsp;** Sure. I am a Ruby developer and team lead based up in Seattle, Washington which is in the upper left-hand corner where all of our news is delayed by about three hours.

**CHUCK:&nbsp;** Nice. We got you on today to talk about networking without networking. And that was your term. Do you want to give us an idea of what that is, what you're talking about there?

**KERRI:&nbsp;** Sure. Well, as a lot of people who've met me know I kind of call myself a little bit of a dirty hippie in some ways, a little bit of Cara culture. And I never wanted to be stuck in an office with suits and ties. And one of the things that I always saw as the advice that people would give whenever you were talking about developing your career was it was really important to network. And I would see networking events. [Inaudible] networking event and it would just be a bunch of people looking very uncomfortable passing business cards back and forth. And it was such a transactional event that I kind of became allergic to those very, very quickly. If I didn't have something to offer to that other person then they were done. They were onto the next speaking and business card exchange. And so, networking without networking is that idea that it is really important to develop your professional network but that term doesn't mean just whose business cards you have, whose names you have in your Rolodex. But what are the relationships that you have with other people? Who have you met? Who have you done work with? Who have you had a legitimate, honest, authentic exchange with on some level?

**CORALINE:&nbsp;** Hi Kerri Miller. I'd like to connect with you on LinkedIn.

[Laughter]

**SAM:&nbsp;** Let's grow a professional network.

**KERRI:&nbsp;** Exactly, exactly. Like what do you endorse those people for?

**CHUCK:&nbsp;** I love having those conversations with people though where they come up to me and you can see it just as you talk to them that they had no interest in me whatsoever. The only interest they have in me is, “Well, he's on Ruby Rogues so he must be worth knowing.” And I'm just like, “Ugh. [Chuckles] I'm just going to go grab lunch with somebody interesting. Thanks.”

**KERRI:&nbsp;** Yeah. And I've been on both sides of that conversation. There are people that I've definitely walked up to and introduced myself and I don't have anything to say other than that. Like, “Oh, I met this person. Great.” And you stand there awkwardly next to them and eventually you just kind of drift away.

**CORALINE:&nbsp;** I had a conversation with Aaron Patterson recently where I was talking about how do you make it so that people feel more comfortable coming up and saying hi to you when you're at a conference for example. And Aaron said stickers. So, I took his advice and I made myself some code witch stickers. And now on Twitter and during my talk [inaudible] I'm like, “Hey, if you want a sticker, come up and say hi. And I will give you a code witch sticker.” It's like giving the shy people an excuse to come up and say hi and introduce themselves which I know a lot of people really have trouble with.

**CHUCK:&nbsp;** Yeah, we all turned our web cams on. I actually have an Aaron Patterson sticker. I got it at MountainWest Ruby Conference. Anyway, it's just sitting on top of my desk because I haven't sorted the piles of stuff on my desk yet. And yeah, it's his cat, gorbypuff. Yeah, that's an interesting way of doing it. I've done that as well with the podcast logos as stickers, and it does seem to work out. Some people will just come up and get the sticker and some people will come up and talk to you. And either one is fine. Everybody is in a different place. But yeah, it's definitely a good way of doing it.

**SAM:&nbsp;** Yeah, the term I heard for that was social currency. And I first heard it in the context of [inaudible] who will come up and give you a toy. And it's not really about the toy. It's about giving you something.

**CHUCK:&nbsp;** Oh, is that what was happening at church on Sunday? I have this little kid come up to me six times with different toys. And then my four-year-old would take them back to his mom.

**SAM:&nbsp;** Oh, yeah. Yeah. Just imagine that but at a conference and you're set, right?

**CHUCK:&nbsp;** Mmhmm.

**CORALINE:&nbsp;** Social currency is a great concept. Do you want to talk about some of the implications of conversation and networking and stickers in the context of social currency?

**SAM:&nbsp;** No, I think I actually just heard the term and it stuck around in my head and I didn't do any further research on it.

**CORALINE:&nbsp;** Oh, okay. [Chuckles]

**SAM:&nbsp;** But yeah, one other way that you can... a fairly popular way of doing that of course is you're at a conference and you get dragged along to dinner with some people. Sometimes I've found that leads to sitting awkwardly at the end of the table while everybody else talks to each other. And that sucks. But sometimes it's turned into some really cool conversations too with people that I would not have otherwise talked to.

**CORALINE:&nbsp;** I think it's really important in those circumstances to have something that you can talk about. I think small talk is really hard for introverts in particular. But you can always find something like, “Hey, what did you think of the keynote today?” or “What kind of cool stuff are you working on right now?” People have forgotten I think how to ask questions. And asking questions is a great way to get conversations started.

**SAM:** Absolutely.

**KERRI:&nbsp;** One of the things that I've done is in addition to giving Sticker Meal my 50 bucks for my own personal sticker...

**CHUCK:&nbsp;** [Chuckles]

**KERRI:&nbsp;** Is to... you know, I talk a lot about the weird jobs I've had that aren't programming, the different career paths I've gone down or the strange things that I've done. And part of that is because I think those are really interesting and I want people to be valued as [inaudible]. But also, I'm trying to put out as many possible hooks for other people to have a conversation with me. So, I've met a bunch of people because I mention, “Oh, I've done work with glass.” And so, I've had people who are former glass artists up and start a conversation. Or other people who are stage hands or any of the weird things I've done. Some of them will always come up and just want to have a conversation and make a connection around that topic. It gives them an in to, “Let's trade experiences that isn't about work,” really.

**CORALINE:&nbsp;** And how much do you think it's our obligation as the people on the other side of the networking equation to create those opportunities for people to connect with us?

**CHUCK:&nbsp;** Well, it's interesting. I'm going to jump in on this because it's one thing if you're trying to go out and actually grow your network. But I think those of us who are more experienced obviously don't have as much of that problem because we at least have coworkers as we've moved from job to job where newer people really don't. And in those cases I really do feel like it's incumbent upon us to reach out to people and make sure that people who are further down that ladder, however you measure it, have the opportunities to connect with the people who are going to help them ahead. It's not even out of some sense of “Well, they don't have the opportunities that I have.” If you want to boil it down to something that's tangible and actually benefits you, we are in a growing field. And we need to bring more people in and we need to level them up quickly. So, whether you're doing it because you care about these people or you're doing it because it helps the field as a whole and helps everybody move ahead there's a benefit to it. And you're in a position that will cost you almost nothing to introduce them to the person that can help them or to be the person that can help them.

**SAM:&nbsp;** And it can bring you so much.

**CHUCK:&nbsp;** Yeah, exactly. If I know that Sam has the experience that new person programmer whoever they are needs, and I introduced them to Sam, it costs me two minutes. It may cost Sam a little more time as he helps mentor them in some way. But even then, compared to the good that it does for them and the good that it does for the community, the cost is relatively low. And for me as the person who made the connection for them it really did cost me nearly nothing.

**SAM:&nbsp;** And then like...

**CORALINE:&nbsp;** I'd like to introduce Sam to people who like Cucumber.

[Laughter]

**SAM:&nbsp;** Yeah, I was saying in the chat that's my favorite conversation starter is to ask people if they've used Cucumber and if so, what do they think about it? Because it's almost always an instant rant starter, which is great. The problem there is getting somebody to shut up for two minutes so you can get a word in.

[Laughter]

**SAM:&nbsp;** But I will say [inaudible] in the example that you gave, Chuck. You introduce somebody to me and I wind up mentoring them a little bit. I get a ton out of that.

**CHUCK:&nbsp;** Yeah.

**SAM:** &nbsp; It's not even about cost. The only cost for me is that as an introvert I have to burn a little bit of energy talking to a new person. But I've gotten fairly experienced at that, too. So, that's not even that bad. My default position is if somebody says, “Oh, I'm interested in X,” and I know anybody who has even the remotest bit of knowledge in that and I see them walking by I'm maybe like, “Oh, oh, oh hey. Come over here.”

**CHUCK:&nbsp;** Mmhmm.

**KERRI:&nbsp;** I think it's also important for new folks, when you're a more senior developer or more established somewhere, to try to make those sorts of connections with them on a personal level. Because I want to believe that that will help foster some trust. When you have a relationship with somebody it's much easier to feel vulnerable and to ask the “dumb questions”, to be in a place where you're feeling okay to fail. And especially when you're newer whether it's new developer or just new at a company, there's a lot of risk. And there's a lot of pressure to succeed quickly.

**CHUCK:&nbsp;** I also want to just jump in here because I've been doing these 15-minute calls with podcast listeners. In fact, I was three minutes late to this call because I was doing one of those. They scheduled it right up against the show because we're doing it at an odd time. But when I talk to these folks, a lot of times it's not even just well, where are you on your code journey? I like to know where you're from, are you married, do you have kids, do you live with your parents, do you live with roommates? Whatever, find out who they are as people. Because it gives this whole different flavor to the conversation. And in a lot of cases it gives you some context on where they are and where they come from and what it's really about for them. Because we all come to our code journey from different places. And we all grow into these programmers from different places. And it makes a lot of difference for me at least to know, “Oh okay, well I grew up poor in the suburb of some big city” or “I grew up middle class and went to college” or “I was a semi-professional athlete but now I'm 30 and my body's worn out and I'm doing something different.” All of that means different things to different people and makes this code journey different for different people too because they have different things that they care about and different things that they want to get out of it.

**CORALINE:&nbsp;** And that kind of levels the playing field too because people who are new at being programmers are not new at being individuals. And they can say, “Oh, I know how to talk to you about this thing because I lived it.”

**CHUCK:&nbsp;** Yeah, absolutely.

**KERRI:&nbsp;** Right. We meet in a place of being equals then.

**CHUCK:&nbsp;** Mmhmm.

**SAM:&nbsp;** Yeah.

**CORALINE:&nbsp;** Exactly.

**SAM:&nbsp;** I find as somebody who has a hard time remembering names, that knowing those extra details about somebody gives me a couple of extra hooks when I run into them in the hallway track next year to be like, “Oh right. It's going to take me three minutes for your name to pop out of cold storage but I remember that you like cat a lot. Like you have five cats.” And then I'd say, “Hey, so how are your cats?”

**CORALINE:&nbsp;** There's a hack that someone told me about that when you share your name with someone they have nothing to attach it to. But if you talk about yourself, if you share your name again, now they have a memory and some data to attach it to so it makes it easier to remember them.

**SAM:&nbsp;** Nice.

**CHUCK:&nbsp;** Yeah, that makes sense.

**KERRI:&nbsp;** I'm going to start trying that. I have the worst time because I really am pretty outgoing, especially conferences. And I meet so many people and then I'll go back a year later and people come up to me, “Hey, Kerri,” and I'm like, “Hey, you.”

**CHUCK:&nbsp;** [Laughs]

**KERRI:&nbsp;** And I can't remember people because I just had one conversation a year ago. And I always feel really, really super bad. It's like [Inaudible]

**CORALINE:&nbsp;** I [inaudible] all the time, too. And what I do now is I'm like, “Hi there. Where did I see you last?” That can sometimes help draw my memory.

**KERRI:&nbsp;** Yeah, that's usually enough for me. I remember the face. I remember everyone's faces. It's the names I have trouble with.

**CHUCK:&nbsp;** I like that technique, Coraline, especially if you travel or make it out to many events. Because then it's not even, “Well, you don't remember me?” It's just yeah, it's “Oh well, I've been at many, many events and I don't remember which one we ran into each other at.”

**CORALINE:&nbsp;** Yeah, exactly. I also have a strong desire, a burning desire for everyone to use an accurate, up-to-date picture of themselves for their Twitter profile.

**CHUCK:&nbsp;** [Laughs]

**CORALINE:&nbsp;** Because it's really hard to identify someone by an anime character when I meet them in person. They're like, “I've been following you on Twitter for two years. You don't remember me?” I'm like, “You don't look like a bunny. I'm sorry.”

**CHUCK:&nbsp;** That's so true.

**SAM:&nbsp;** But I've had that little LiveJournal, that little caricature of myself since LiveJournal days. So, you know.

**CORALINE:&nbsp;** That looks exactly like you, Sam. So, that's different.

[Laughter]

**CHUCK:&nbsp;** It totally does. One other thing I want to put out there just for people who are new at this who are going to their first conference or first users group or whatever, most of the people who are going out to these events are willing to talk to other people. Even less experienced people. And in a lot of cases, especially less experienced people. So, if you go out and you go out of your way to talk to people they're going to want to know where you're at. There are going to be a few people out there who are kind of curmudgeonly and are not going to want to. But just move onto somebody else because I can pretty much guarantee you that the majority of those people are going to be willing to talk to you and find out who you are and where you're at and how they can help. And if you then have something to talk to them about so you get past the pleasantries, do a little bit of small talk, and then you can actually ask them things, a lot of times you can find mentorship out of that. Even if it's just mentorship for the one evening while you sit around after the users group and spend a little bit of time working on your pet project.

**CORALINE:&nbsp;** I was just at RailsConf a few weeks back and they have a great guides program. So, they'll pair someone up who is new to RailsConf or even more likely new to being a developer and pair them up with someone who's more experienced, who helps them pick which talks to go to and hangs out with them, makes sure they're not alone at lunch time and at dinner time and helps them make the most out of their experience. And I really wish more conferences would do that, because the first conference I went to which was probably six or seven years ago now, it was Ruby Midwest. And I did not know how to attend a conference. I was a smoker back then so I'd sit through a talk. I'd get up, I'd go outside, I'd have a cigarette. I'd find my coworker, ask him what he thought, go back in and go to the next talk. And I didn't meet a single person. I didn't interact with anyone. I didn't go to dinners. I didn't try and socialize. I didn't meet anybody. I just was there for talks. And I thought that's what you were supposed to do. I didn't know any better.

**SAM:&nbsp;** That's what I thought for my first three or four conferences.

**CHUCK:&nbsp;** I had the benefit of going to MountainWest Ruby Conference as my first conference. And I had two experiences. One was that I was there with a few people that I knew from the users group. And so, they pulled me along for a lot of those things which really helped. The other experience that I had was that I showed up early. Because I live near Salt Lake City and the conference was at that time in the Salt Lake City Library. So, I just went and sat down next to some guy. And I had a couple of Ruby questions and I was feeling not particularly shy that day. So, I leaned over and I looked at the guy and I said, “Look, I'm really trying to understand mocks and stubs. And what can you tell me about mocks and stubs?” Well, the guy looked at me and in his deep voiced laughed for a second and then Jim Weirich explained to me what mocks and stubs were. And again, he just helped me along, got to know who I was a little bit. Over the years we got to become much better friends because I saw him at many other conferences. But that was my first conference experience, was I happened to sit down next to somebody who made it a large part of his career and life teaching other programmers things. And I happened to go with a group of people who knew that they needed to pull a new person along to help them meet people. And it makes a huge difference being able to do that. And if you don't have that group of people, just go get to know a few people and then ask if you can hang out with them. And I know it's not always easy. But then at least you have that familiarity to help you overcome some of that introversion that I sometimes struggle with.

**SAM:&nbsp;** Or find somebody who looks like they're lost and say, “Hey, will you be my conference buddy for this conference?”

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** [Laughs] There's another really simple hack that, a social hack, that I forget which conference I was at that I first heard about it. But it seemed so obvious in retrospect once it had been explained, which is that oftentimes as somebody who knows a few people at a conference you wind up talking to them in the hallways. And the natural configuration that you wind up in is a little circle with everybody facing inward towards each other. And the really simple thing that you can do if you find yourself in one of those little knots of people is to move to the side and leave a gap.

**CHUCK:&nbsp;** Mmhmm.

**CORALINE:&nbsp;** I was absolutely going to bring that up, Sam. I think it was [inaudible] who taught me that at a maybe Madison+ Ruby. That is great and actually goes so far as if someone's walking by [inaudible] and say, “Hey, why don't you come over and join us?”

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** That's the intermediate maneuver. But yeah, that's also a wonderful [inaudible].

**CORALINE:&nbsp;** Yeah.

**CHUCK:&nbsp;** Yeah, the other thing that I've done is I have leaned over a couple of times if somebody looked lost and asked them if they understood where we were at talking. Because sometimes the conversations get really deep, especially when you're with more experienced people. And I've worked out just translating what people are talking about. “Well, we're talking about this aspect of testing and we're talking about this aspect of architecture. And when we do these kinds of things there are these kinds of trade-offs that we have to make.” And just get them enough up to speed to where they can cling to the conversation and follow along a little bit and feel like they can ask questions. And a lot of times that's helpful as well.

**KERRI:&nbsp;** In a way, we're all trying to strive to be somebody else's Jim.

**CHUCK:&nbsp;** Mmhmm.

**KERRI:&nbsp;** In a way. I had a similar experience with Jim and I also, my first conference I happened to sit next to somebody who I had mutual friends with outside of the Ruby community. This person was very exceptionally outgoing and was wearing an elf costume and made me sit in the front row with him. And that's at Ruby [inaudible]

[Laughter]

**CHUCK:&nbsp;** Awesome.

**KERRI:&nbsp;** So instantly, everyone's like, “Oh, well you know Franklin and clearly you must know everybody. And you're part of the group now.” And I just got fortunate and lucky in that case. But I want everyone to have that experience of making a friend or having an introduction to meet other people.

**CORALINE:&nbsp;** I used to be extremely shy which you'd never know now. But I used to have to trick myself into talking to people. And Kerri, this relates to you and me. I was at a conference one year. It was Ruby Midwest again. And to trick myself into engaging with people, I would play a little game. I would say, “I'm going to go find someone with red shoes and introduce myself to them.” This particular day my game was, “I'm going to find someone who's taller than I am and say hello.” And Kerri was the first tall person that I saw. I said hello to Kerri. We started talking and we've been fast friends ever since.

**CHUCK:&nbsp;** The thing that I think is interesting about that Coraline is that it sounds so silly. But if it works and it gets you to talk to somebody it is well worth it and it doesn't matter. It doesn't matter if it sounds a little bit strange. If that's the way it works for you then that... because the payoff is so worth it. And yeah, you make a friend. You come to understand something new. You learn something new about somebody that you never considered. Yeah, it's totally worth it. And just imagine Coraline if you just said, “Okay, I'm going to talk to somebody taller than me,” what would you have missed out on?

**CORALINE:&nbsp;** A lot. I would have missed out on a lot. And I was fine with the fact that I had to trick myself into being social. And I was fine with pretending to be an outgoing person until I became an outgoing person. And I think you have to give yourself permission to step outside of your comfort area for a little while. And you will find that it's rewarding. I absolutely hate the expression “Fake it 'til you make it” but I think in social settings it can be valuable.

**CHUCK:&nbsp;** Well, the other thing that I've had to give myself permission on related to this is that sometimes just being on all the time, being around other people and having to interact at that level, is really draining. And if it's a conference that's longer than two days a lot of times the second day, I'll go take a nap during one of the sessions for an hour just so that I can recharge, get some alone time in the dark without having to turn it on a little bit for everybody else. And then I'll go back to it. And that's okay, too. You take it all at your own speed.

**CORALINE:&nbsp;** Yeah, that's absolutely essential. I've watched many a keynote live-streaming at a conference I've been to from the hotel room just because yeah, it takes a lot out of your to be social. And especially if being really social is not your natural state. You have to take care of yourself, absolutely.

**SAM:&nbsp;** Yeah. There's a picture of me that Carina Zona tweeted at the last RubyConf that I didn't even know she had taken it. Because it was before the talk that I gave and I was freaking out and I decided that I was going to go and meditate for a little bit. And she walked by and I wear the dark sunglasses most of the time. So, she couldn't tell if my eyes were open. She waved at me and she's like, “Oh, he must be meditating or something.” So, she decided to snap a picture and tweet about it.

[Laughter]

**CORALINE:&nbsp;** Wow.

**SAM:&nbsp;** But yeah, that was totally important self-care. And as an introvert I really have to manage that a lot.

**CHUCK:&nbsp;** One thing that I want to ask about with all of you folks here is basically I know that a lot of conferences have been adding newer programmers to their speaking roster. We've seen this a couple of times where somebody has been programming for a year or less and winds up getting a speaking thing to talk about their experience or to talk about some concept that they've dug deep on in the course of their shorter career. And they don't really know how to be a speaker because nobody's really explained it to them. I didn't when I first spoke and then I grew into it as time went on. But how do you turn that into opportunities and at the same time be appropriate about the fact that you're both a speaker and somebody that is trying to get to know people?

**KERRI:&nbsp;** That's a really good question. And I don't think I've ever had that [inaudible] to me quite that way. But I think the idea that you're both speaker and a new person and an attendee all wrapped together is a very unique place to be. It gives you a lot of opportunity. It opens doors for different opportunities for connecting. Once I started doing more conferencing, now I'm going to speaker dinners. Or I'm standing off to the side of the stage where there are a couple of other speakers and we're all nervous. We don't know. We've all flown into say Kansas City, Ruby Midwest, and we don't know anybody else. But we've run into each other once or twice at other conferences. There's a bond there. Or we're bonding with the fact that we're all nervous or we're all madly working on our PowerPoint presentations in the back of the room [chuckles].

**SAM:&nbsp;** [Chuckles] Right.

**KERRI:&nbsp;** Right until going on stage. And that's a shared experience. And so, there's something that we can bond over and communicate and have a relationship that is created out of that.

**CHUCK:&nbsp;** Yeah. One other thing that I just want to put out there as well is that after every talk that I've given, even the ones that I really didn't think I did that well on, after giving the talk and going out of the room because I like to get out of the room so I'm out of the way of the next speaker and go out into the hallway. And every time, somebody wants to come up and talk to me about the talk. At least one person. And that one person immediately has identified with you. And that is a connection that you can make without any, without as much of the awkwardness because they've already gotten to see and hear some of who you are. And so, you can make that connection because they're interested in you.

A few other things that I'll just throw out there. One is that at the larger conferences there's usually a speakers room. And you'll see speakers go in there and furiously work on their talk. But that's also a good place. If you're new and you want to get to know some of the other “experts” at the conference, these are the people who are actually presenting, it's a good place to go. And a lot of times there is a conversation going on in there. But I would also caution you not to spend all of your time in there because if you're walking around with that badge that says speaker on it you are going to have people come up and talk to you. And it really is an opportunity that you have to get to know other people at the conference or at the event.

**CORALINE:&nbsp;** So, a lot of conferences that I've been to, they do have speaker dinners and they have the speaker rooms. And I think these are really great if you're a speaker. It's great to have a space that you can work on your talk like Kerri was talking about or get to know the other speakers. But there is an inherent separation of people into a speaker class and an attendee class that I worry about a little bit.

**SAM:&nbsp;** Yeah.

**CORALINE:&nbsp;** And I've never seen this addressed in such a good way as at RubyConf Australia in 2015. Instead of having a speaker dinner what they did was they had maybe 500 attendees and the dinner options every night were laid out in advanced. And you could buy tickets to go to dinner at the sushi place or go to dinner at the whatever place. But speakers weren't allowed to buy these tickets. Instead speakers were distributed between all of the venues where people were having dinner. So that ensured that speakers were not clustered together and not isolated from the attendees and that everyone had a chance to have dinner with one of the speakers at least once, which I thought was just a brilliant approach to really ensuring that people were mixing and interacting.

**SAM:&nbsp;** Oh, that's wonderful. Because my instinct when I go to a conference is to catch up with all my friends. But yeah, that makes me less available.

**KERRI:&nbsp;** I'm stealing that for Open Source and Feelings. That's a great idea.

**CORALINE:&nbsp;** Awesome.

**CHUCK:&nbsp;** At ng-conf they did something a little bit different too. They had a speakers dinner which was I believe the night before the conference. And then they had a room where people could go up, because Angular 2 is new, and so they had a room where people can go either hack or work on the Angular 2 tutorial that's been published by the Angular team. And the speakers were all required to take a turn working for a session or two in that room helping people.

They also were, I think each speaker had to go into the Ask Me Anything room and just answer questions for a session. And that was all part of the deal with speaking. And that way, people felt like they could come up, they could approach these speakers, the speakers were there, and try to spend some time. So, if I wanted to get to know Kerri as a speaker because I liked her talk then I could go in there and I could ask questions related to her talk or anything else that I know she's worked on and have that interaction with her on... it really wasn't that formal. You can just go in and talk. But because you were put in a position where you could essentially sit around a table with these folks and talk to them about whatever you were interested in, it really made a big difference because people could identify with them. They also had the Angular core team and other notable people in the community doing the same kind of thing. And I think that really opened things up for people and gave them a chance to know when and where their speaker that they wanted to talk to was going to be so they could connect with them.

**SAM:&nbsp;** Oh, and as an occasional conference speaker I would love that. It gives me a format where it's built in that people will come up and talk to me. I know Avdi has talked about speaking at conferences as a way of getting around his terminal shyness. And I have definitely borrowed that hack as well.

**CHUCK:&nbsp;** Yeah. And as attendees of conferences I just also want to point out most speakers want you to come up and talk to them. If you have a question or anything...

**SAM:&nbsp;** Yes, please.

**CHUCK:&nbsp;** Question, topic, something to talk about, you heard this about them, whatever, you heard they like football, the same football team you like, whatever. They want to connect. That's part of why they speak.

**KERRI:&nbsp;** Yeah. And take a speaker to lunch. Not just because they flew across the country [inaudible] but they might be in a strange town too and want to go out to lunch and don't know where to go in a new city. I was fortunate enough, I was at Ancient City Ruby in Jacksonville, St. Augustine, Florida a few weeks ago. And a bunch of guys from Tampa just came up and said, “Hey, we're going to this barbecue place. Do you want to go?” And I'm like, “Sure.” I've never had barbecue. I'm from Seattle. It was great. I had a great time.

**CHUCK:&nbsp;** Yeah. If you're local too, you have an advantage. It's like, there's a really great place around the corner.

**SAM:&nbsp;** One other thing that you can do as somebody, it doesn't matter how new you are to the community, if this is your first conference or if this is your first day writing Ruby, if you go to somebody's talk and you want to talk to them, pay attention during the talk and when you come up afterwards there's always five or ten people who come up to a speaker and say, “Hey, that was a great talk.” But if you ask them a specific question about something they were talking about, you will not be able to get them to shut up.

**CHUCK:&nbsp;** Yeah. The other tactic on that. If you can't come up with a specific question about a specific point they made you can also pose a hypothetical situation. My company does X, Y, and Z. Does this apply to us? Or when would it apply to us?

**KERRI:&nbsp;** That's [the] trick of asking the open-ended questions get other people to talk.

**CHUCK:&nbsp;** Yeah. I wanted to talk a little bit about users groups as well. They're similar. And really the point that kept coming into my head was speaking at users groups as well. If you're new, the users group here does a primmer, is what they call it, every meeting. And so, that's an opportunity for someone to get up and speak about a topic that's rather, for a lack of a better word, basic.

**KERRI:&nbsp;** Introductory perhaps?

**CHUCK:&nbsp;** Yeah. And the idea is to just get back to those basic concepts that we all use every day. And so, the Ruby Group, people have gotten up and talked about the string class or they've talked about math or they've talked about just some other topic. So, you don't have to have this genius level thing to talk to people or to give a presentation at a conference or a users group. And I really just wanted to bring that up because it's a terrific opportunity then for you to have people come up and give you feedback or for people to know who you are and then to start up the conversation later.

**KERRI:&nbsp;** Yeah. We've been talking a lot about conferences. And I think there is this whole world of other places and situations where we do networking, where we can make those sorts of connections. And users groups are a great one. Also we've been talking a lot about strategies for introverts to get out of their shell or the excuses we [use] to hack into those conversations. But there are a lot of other things you can do besides just going up and introducing yourself to people. Similarly to how becoming a teacher will help you learn the thing that you're teaching about much more deeply, volunteer to be an organizer at a conference or for a local meetup. Because all of a sudden you become the expert and you get to meet a lot of people. And you're working on a thing. You're sharing that experience of building something together. That's a really, really strong and powerful relationship to create.

**CHUCK:&nbsp;** Yeah. One other thing that I just want to jump in with, I have 10 strategies in my email course. You can get it at GetACoderJob.com. But networking doesn't even have to be in person. You can participate in the users groups mailing list. You can get on the Slack channel. You can post code snippets that answer a question. There are all kinds of ways that you can generally interact with people that doesn't have to be this kind of in-person thing. I think that's what Kerri was trying to get at a little bit too.

**SAM:&nbsp;** Yeah. Another little hack that I have used occasionally is anytime I know that I'm going to be traveling someplace I look to see if there's any chance that there's a Ruby user group nearby that happens to be meeting. I went to London in 2007 and there actually wasn't a meeting of London Ruby user group the week that I was there but I did manage to convince two people to come out to the pub and say hello and chat for a bit. And I've been on the London Ruby user group mailing list ever since. I've had some good conversations there. So yeah, it's sort of a combo move.

**CHUCK:&nbsp;** Yeah. That totally works. I've been to the Boulder Ruby users group. I've been to one or two in California I think. And whenever I go to a conference I try and organize a meetup. So, ng-conf even though I live here I did one. I'm going to be in Chicago on July 9<sup>th</sup> and I'm pulling one together there. And yeah, it makes a big difference because immediately if they show up you have something in common. Because you know each other or you know somebody in common. You have that programming whatever it is, Ruby or even just we're coders and we like code in common. And that's enough a lot of times to just get the ball rolling.

**KERRI:&nbsp;** One of the things that I have always done is anytime I'm doing any sort of new, especially if I'm speaking to an audience of people who are newer, I always say please reach out on Twitter to me if you have any follow-up questions or if you want to connect. If you want help with anything or if I see new speakers, if you want to practice. And a surprising number of those folks do and I love it. And I actually do get a fair number of just random emails in my box saying, “Hey, I see you're coming to such and such conference. It's my first conference. What should I know?” Or people will say, “I saw this talk you gave four years ago,” and ask me questions about it. And I love that. I think that's a great way to make a connection. I think because even after the fact speakers or [inaudible] who wrote an interesting blog post or Twitter tweets that you really enjoyed, you can interact with them and reach out. And usually those people want to make that connection as well.

**CORALINE:&nbsp;** [Inaudible] for shy people. This has happened to me several times now where someone maybe was too shy to approach me after I gave a talk but they wrote a blog post summarizing what I was talking about and what they got out of it and what their take-aways were, what their questions were. And if I see it, I will reach out to them and say, “Hey, thanks for writing that up and let me know if you want to talk about this anymore.” And so, sometimes moving that conversation from being offline to being online can be easier for people who have social anxiety issues, too.

**CHUCK:&nbsp;** Yeah, that makes a lot of sense. And that's worked for me as well, too.

**KERRI:&nbsp;** Have any of you done any sort of live-streaming of coding sessions that you've done?

**CHUCK:&nbsp;** I've done it twice.

**SAM:&nbsp;** I haven't live-streamed but James and I paired on something a couple of years ago and I recorded it and made it available on YouTube. That was fun.

**CORALINE:&nbsp;** I'm afraid that people would see just how bad I am at typing.

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** But that's good.

**CORALINE:&nbsp;** That's true.

**KERRI:&nbsp;** I kind of want... I've always, I love pairing. I think I've paired with both you and Sam, both Coraline and Sam I've done a lot of pairing with. And I always enjoy it. And I [inaudible] keep wanting to like, “Man, I wish that we had recorded that and could release it as an example of here's how to actually pair or here's how we solved this problem.” I've dabbled a little bit. I know there are some services out there like LiveCoding.tv. I've done a little tiny bit of it. I've seen people doing it on Twitch as well. And I wonder if there are some opportunities for networking there as well.

**CHUCK:&nbsp;** It's a little bit different because it's a lot more one-way except for with the person you're pairing with. But at the same time for example if you're using YouTube, what is it, YouTube Live or Google Hangouts.

**SAM:&nbsp;** Hangouts Live or something, yeah.

**CHUCK:&nbsp;** Yeah. People can comment on the feed, on the live stream. They can also comment on the YouTube channel or the YouTube video which I think effectively are the same thing. And then you can follow up via comments or other ways. But yeah, it's I don't know, the bandwidth on that I don't think is quite as high. I use a system for the conferences and for webinars when I do them called Crowdcast. And when people ask a question there's actually a questions section at the bottom and there's a button there if you're the moderator that you can click and it actually invites them on the screen. And so then, you can talk to them that way which is interesting. So, there are systems out there that allow you to do that. But yeah, the communication is much more one way under those other circumstances.

**CORALINE:&nbsp;** So, some intrepid developer in our audience should get on solving this problem.

**CHUCK:&nbsp;** Yeah.

**CORALINE:&nbsp;** Build me something that will let me pair with people and share the pairing live.

**CHUCK:&nbsp;** [Chuckles] So, one other thing that I'm going to pull this out of my email course. My email course is about finding a job. It's not about networking. Well it is, but it's not. And that is that everybody does a certain number of things. We've talked about taking a speaker to lunch. But if you can meet somebody who works at a company that has people that you want to interact with or you just want to meet people in general, find out the next time their coders are going to lunch and see if you can get this person to let you know where they're heading. And then let all of the other coders know to save you a spot at the table. There are all kinds of things like that. You can offer to take somebody from your local community to lunch if there's a particular connection you want to make there. It doesn't have to be at any kind of formal event or under certain formal or organized circumstances around the [users].

**CORALINE:&nbsp;** There's another great way you can get to know people at local companies too. And that is ask around if anyone is open to having you co-work there. We did a co-working program the last time I worked in an office which granted was a while ago. But we would basically put out a call on Twitter to say, “Hey, if anyone wants to come and co-work with us on Friday come down. We'll buy you lunch. We'll hang out with you. We'll pair a little bit.” And that's a great way to opening yourself up to meeting new people. It's great for recruiting on both sides of the equation. And getting to know people and sharing your space and sharing your time with them.

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** Another strategy like that that I've used in the past us I've worked at companies where we had lunch and learns occasionally where somebody would offer a brown bag presentation where other people could come in and learn about whatever they were interested in talking about. And if you can make a few slots in that available to people outside the company, that can be good for cross-pollination both ways as well.

**CHUCK:&nbsp;** Yeah. Coraline actually used to work for a company that's local here and they did JavaScript lunches every week or every other week.

**KERRI:&nbsp;** Ada Developers Academy has a lunch with a developer program. Once a week they have a developer...

**CHUCK:&nbsp;** Nice.

**KERRI:&nbsp;** from the community come in and just have lunch and let the students eat lunch. You go into the classroom space and have lunch with the students. And they just pepper you with questions because they're so eager to find out what they're getting into. And another thing that that program does that I love is just that idea of having actual working developers in the classroom as TAs or as mentors or tutors to help model, like this is the work, and reassure people that, “Nope, everybody struggles with this. It's okay. It's good.”

**CHUCK:&nbsp;** I think the overall thing that we're talking about here is basically if I could boil this down to two major points, one is that if you go out of your way to be involved, then you'll meet people. And if you keep in mind that they're just people whether they've been programming 20 years or 2 years, there's something that you have in common with them that you can actually communicate with them about, and that connection doesn't have to be over some deep obscure principle of programming. It could be over the fact that you like cats and they like cats or you have a kid that's the same age. Or that you have some other weird lifestyle quirk in common or anything else. And I think that's really the point, is if you go out and you remember that these are people, then you can make that kind of connection. And those are the kinds of connections that are going to pay off much more than going up to DHH and trying to be his best friend so that you can claim some awesome connection to Rails.

**KERRI:&nbsp;** You put a lot of material in, from your newsletter, specifically about finding work and finding positions. And that's certainly a great, great resource and a good goal for networking. But there are other reasons for doing that networking. And sometimes people approach it like “I want to have this relationship with somebody who's famous” just for the sake of that. And what's that value? But it's really about helping to create this web of community that you can be a part of and will have a place for you and that's going to support you through not just job searches but also “Wow, I really don't understand Cucumber. How the heck do I use that? I know. I'll go ask Sam.”

**CHUCK:&nbsp;** [Laughs]

**KERRI:&nbsp;** Or “How Git? How do?” Right now I'm trying to learn C and I'm tweeting about it all the time because I know all of you all know C. And all these people are coming out of the woodwork and helping me with concepts from C. So, there's a variety of different uses for it. It doesn't have to be just this transactional “I want to get a job so I have to go to the job fair and pass my card around.” It's not just about printing out the resume.

**CHUCK:&nbsp;** I would just add too that even if it's just “I just need a friend” that's a totally valid reason for going out and networking.

**SAM:&nbsp;** Absolutely.

**KERRI:&nbsp;** One hundred percent.

**SAM:&nbsp;** My partner shuts down pretty fast when I start to talk about code.

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** And so, it's really nice to be able to have people to geek out about it with. So, yeah.

**CHUCK:&nbsp;** Yup.

**CORALINE:&nbsp;** My cat's the same way.

**SAM:&nbsp;** [Laughs] Yeah. On the note about that transactional approach, I think you're actually going to miss out on a lot of stuff if you view networking as “Oh, I've got to go and exchange 10 business cards.” Although maybe that's the way that you introduce yourself to somebody who's taller than you are. I don't know. But I think the important thing to keep in mind about networking is that you get so much more out of it a couple of years down the road. I mentioned earlier that I like to look for user groups in places where I travel. A couple of years ago I went to Hawaii for the first time. And so, I was like “Well, I'll see if there's a user group on Oahu.” And there was and I went to it. And it was 12 people and we had some good conversations.

And so, I went back a couple of times for vacations and each time I would say, “Hey, is there going to be a meeting?” And then one of those times I emailed and said, “Hey, is there going to be a meeting this week that I'm there?” and somebody wrote back to say, “Well, we weren't going to have one. But if you'll speak we'll do it.” [Laughs] And so, I was like “Well, I don't really want to prepare anything new. But I've got these three things in the can. I can talk to you about any of those.” And so, I went and they wanted me to talk about remote pair programming which was really important for people in Hawaii because they're very isolated from the mainland. And that was a wonderful conversation. And I met some new people there. And I had a great time. And then sometime about a year and a half ago I was looking for a new job. And just on a whim I emailed one of the people from that meetup and I said “Hey, I know that you said that you were struggling with putting together a remote culture or at least a pair programming friendly culture. And I know that you're all local but let me know if on the off chance you ever want to hire a remote person,” because I was thinking wouldn't it be great to have an excuse to go to Hawaii? And you know, I expected absolutely nothing with this because it's a small company. They're doing their own thing and most places that are in one place are really resistant to opening it up to remote. But I got an email back three hours later saying, “Hey, your timing is really good.” And guess what? That's where I work now. And it's a great job.

**CHUCK:&nbsp;** That's awesome.

**SAM:&nbsp;** Totally random.

**KERRI:&nbsp;** That's a great story.

**CHUCK:&nbsp;** Yeah. I also just like the idea that you put forward too of just showing up and talking about having that remote pair programming culture. I think a lot of times folks think I'm too new to pull together a meetup where in reality all you have to do is say we're going to have lunch and talk about something. And you make those kinds of connections. And then yeah, who knows? You have that relationship for a few years and it pays off down the line.

**KERRI:&nbsp;** Yeah. You don't have to have any sort of special credentials to start your own meetup or start your own resource. I love the story of the, gosh I want to say it's the Chilliwak Ruby user group that Miles started up in British Columbia. Where he got sick of heading over to Vancouver two hours away to go to the Ruby group there. So, he started his own. And it was just him and two or three people in the public library. But now it's seven or eight people. And they just meet every Tuesday night or every third Tuesday or whatever it is. You don't have to be a rock star ninja guru to do these sorts of things.

**CHUCK:&nbsp;** Well, and with that group you don't even have to be a Ruby programmer. They've got Curtis McHale and a bunch of other folks that do all kinds of stuff. Curtis is a WordPress developer and there are several other people in that group that don't do Ruby on a regular basis. They just get together and talk about code or whatever the heck else they have going on.

**SAM:&nbsp;** And you could have as little or as much organization as you want. The Portland Ruby user group, it was described by one of its older denizens a while ago as an anarchist pirate ghost ship. Where people just show up and do stuff and if nobody shows up and does stuff then we don't have a meeting. But there's this sort of inertia now where even if nobody does anything at all, as long as there's a venue, 50 people will show up.

**KERRI:&nbsp;** I never heard it described like that. But I [laughs]... that's awesome.

**CORALINE:&nbsp;** That makes me want to go.

**SAM:&nbsp;** Yeah. It's actually a funny contrast from the first user group I was in, the Portland Access User Group which actually had a 501(c)(3).

**CHUCK:&nbsp;** Oh wow.

**SAM:&nbsp;** And that 501(c)(3) owned two laptops and a projector and there were membership dues and somebody who showed up with a little case full of name tags for their members. And I thought that's just what you had to do for a user group. So, when I showed up to the first time at the Portland Ruby user group it was eye-opening and really cool.

**KERRI:&nbsp;** We actually have two different Ruby meetups in Seattle. Well actually, we have, last count we have four official ones.

**CORALINE:&nbsp;** Do either of them use parentheses in method arguments?

[Laughter]

**KERRI:&nbsp;** Yes. That's the schism. It's the little end, big end Ruby [chuckles] user groups. No, I was surprised. There was the Seattle.rb and then the Rails meetup and then there's the Rails Racer meetup. And then another got started called [inaudible] rb and it's completely different groups of people. And they each have their own little different flavor, completely different concerns and populations. It's wonderful.

**CORALINE:&nbsp;** There's no excuse for you to say, “I don't know how to meet people. I don't know how to get out there and put myself out there.” There are so many options available to you. And sometimes you just have to be clever. And sometimes you have to trick yourself and a little bit of work and it's going to be a big payoff.

**KERRI:&nbsp;** Yeah. And again, it's not just about... you don't have to follow this path of “Well, now you're at a certain point in your career. So now you have to go do conferences.” There are lots of other options that will help you make those sorts of professional connections [that support you]. Again not just for the job hunt but also for new technical challenges, finding the help that you need, and just not being by yourself in a cubicle.

**SAM:&nbsp;** Coraline you mentioned earlier the Opportunity Scholarship Program that has started. I think it started at MountainWest and then Marty brought it to RailsConf and RubyConf as well. And it's a wonderful program. And it's a great place to get involved as somebody who even has just a little bit of experience in the community. You don't have to be a speaker. I've had somebody who I had as my scholar the first year I did the program as a mentor. And the next year he came back and he was a mentor. So, it's a really nice way of passing that community forward. And it's accessible to more people than necessarily are going to be interested in speaking. So, that's really nice about it.

**CHUCK:&nbsp;** Plus one. I was a mentor one year. I don't remember which year it was, in Miami. But yeah, it was a ton of fun. Great experience.

**SAM:&nbsp;** I've done it at very conference that I've been to that's offered it and it's always been totally worthwhile. At RailsConf 2014 it was actually really nice to have, like I said earlier, a conference buddy. I was overwhelmed at how many people were there. [Chuckles] And so, it was nice to have one person to look for and go check in and just sit down for a bit.

**CHUCK:&nbsp;** Alright. Well, we seem to be winding down. So, let's go ahead and do some picks. Coraline, do you want to start us with picks?

**CORALINE:&nbsp;** Sure. I have one pick today. It is an article on Medium by a woman named Nadia Eghbal. It is called 'I hate the term “open source”'. The article talks about how we've drifted away from the original concept of open source as owner-less software enforceable by license. And she points out that today open source means, is more about building and collaborating in public. So, there's really a shift in emphasis from the rights of the user which was [one of] the principles that open source was founded on, more to the rights of maintainers and contributors.

One of the interesting stats that she points out, and I can back this up, is only about 20% of public projects on GitHub even have an open source license. But if it's on GitHub and it's a public repo, we by default call it open source. So, she coins the term 'public software' which I think might be a little bit problematic. But I think it's a really interesting discussion and it's interesting to take a term that we bandy about so much these days and ask ourselves “What does this really mean anymore?” Because open source definitely has changed over the last 20 years. And what we mean by the term has definitely changed over the last 20 years. And I think it's interesting to take some time and reflect on that. So, that's my pick for today.

**CHUCK:&nbsp;** I so wanted to dig into the whole conversation about that but we're in picks. Sam, what are your picks?

**SAM:&nbsp;** I also just have one today. This is a vim plugin I've been using a year or so called tabularize. And this gives you some really nice tools for vertically aligning text. At its simplest this can take Cucumber style tables that are delimited by the pipe character and it will just line them all up so you don't have to sit there spacing them out. But this actually can get quite a bit fancier than that. I use it to align code along commas, semicolons, hash rockets colons, parentheses, brackets, and even sometimes the close paren dot T-O that you use a lot when you're doing RSpec with the expect syntax. It's really powerful.

There is one caveat about using it which is that when you change your code in such a way that you have to realign a section it's really easy to lose the interesting change in the midst of all of the white space. So, if you're going to do this I advise you to make, get in the habit of making separate whitespace commits or your coworkers may yell at you. I'm going to put up two links in the show notes for this. One is a link to the plugin itself and the other is to the section in my vimrc file where I define a bunch of custom [inaudible] commands for things that I commonly align on. And that's it for me.

**CHUCK:&nbsp;** Awesome. I'm going to throw a couple of picks out here real quick. The first one is I don't know if I've picked this on the show before but I've had it for a few months. I bought it when I traveled to Amsterdam for an Angular conference. It is called the PlugBug. I think it's PlugBug World. It has all of the connectors for all of the plugs across all of the different places you can travel to. And I really like it. There are two things that I like about it. One of them is that it's really to swap it out because you just swap the plug off and then it adjusts properly for whatever voltage comes out of the wall. But the other thing is that the connector that you slide on, because it slides onto the regular power supply for the MacBook Pro, and it has a USB connector on it. So, if I'm sitting at the airport I can plug this thing in and charge my phone and my laptop at the same time. Or if I'm at a conference and they have the power strip down the table from me and I can't use it, I'm always telling the person two or three seats down, go ahead and plug your phone in, too. And it's just kind of nice to be able to do that.

The other one that I'm going to pick is also a power related pick and it is a... I'm trying to think of the right way to do it. Because it's not a power strip. It has eight power outlets on it. And then it has four USB power plugs on it. It has buttons, two on the top and then one on the side by the USB plugs that will turn those on and off. And you plug that into the wall. And if I'm getting together for a meetup and getting together with a bunch of people, a lot of times they have the plug a ways away or they have it on the other booth or they have something else going on with it. And so, what happens is I can set that in the middle of the table and then it has plugs facing everybody. It has the USB plugs for everybody's phones. And I usually have a six-foot extension cord on it so that I can plug it in wherever. And then I can just invite people to come sit at my table with me and work. And it's a really great way of being social and making it easy for people to come and just co-work with you because you have power and they need power. So, I'm going to throw that out there, too. I'll put a link to it in the show notes. I got it on Amazon. It was 30 or 40 bucks. And it has been really nice for that kind of thing. Also nice at the users groups and such.

Kerri, what are your picks?

**KERRI:&nbsp;** I have two picks as well. The first is kind of a double pick. As part of this networking without actually networking I have done a lot of conference organizing. And I'm actually organizing two conferences. So, as a moment of a little bit of self-promotion, I'm an organizer for a conference called moonconf. It's at moonconf.org, which is happening May 26<sup>th</sup> to 28<sup>th</sup> in Boulder, Colorado. And that's a conference for functional programming. I'm also an organizer for a conference called Open Source and Feelings which is happening July 22<sup>nd</sup> and 23<sup>rd</sup> here in Seattle which primarily is focusing on these sorts of soft skill things kind of like what we talked about today. But also open source and the future of open source and how we relate to it.

The more technical pick for myself is YoyoTricks.com. And specifically their Sage Yoyo Starter Pack. If you are at all interested in skill toys or yoyos this is a great, what's called a responsive yoyo where the yoyo is actually attached to the string. And they... not only is it relatively inexpensive and a great way to get started into picking up a hobby, it's a little bit physical and a little bit outside of the norm. But they provide hundreds of two to four-minute videos on how to do different yoyo tricks and which yoyos to try them with. Because once you get into, just like every hobby, there are very specialized tools and terms involved. And it's an entire rabbit hole for a nerd like me.

**CHUCK:&nbsp;** Very cool. If people want to see what else you're up to Kerri, what should they do?

**KERRI:&nbsp;** You can follow me on Twitter. I am kerrizor on Twitter. I'm also at kerrizor.com and I am kerrizor pretty much everywhere.

**CHUCK:&nbsp;** Alright. Well, we'll go ahead and wrap this show up. Thanks for coming, Kerri. We'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world's fastest CDN. Deliver your content fast with CacheFly. Visit C-A-C-H-E-F-L-Y dot com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**
