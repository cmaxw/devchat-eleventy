---
layout: layouts/post.njk
title: >
  AiA 212: “Angular Console” with Dan Muller
date: 2018-10-23 10:00:07
episode_number: 212
duration: 1:00:44
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_212_Angular_Console_with_Dan_Muller.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

**Panel:**

- Charles Max Wood
- Aaron Frost
- John Papa
- Alyssa Nicholl

**Special Guests:** Dan Muller

In this episode, the [Adventures in Angular](https://devchat.tv/adv-in-angular/) panel talks with Dan Muller who is a member of the NRWL team and who has developed Angular Console. The panel asks Dan questions about the console and the pros and cons of it. Check out today’s episode!

**Show Topics:**

1:19 – Dan: I work now with NRWL and I used to work at Google and then I got bored writing Angular applications. I then texted a colleague and worked with him and he gave me what is now called

1:52 – Chuck: Nice. Give us the elevator pitch for Angular Console?

2:00 – Dan: It is mostly pretty.

2:19 – Alyssa comments.

2:30 – Dan: To each their own.

2:38 – Dan One of the parts working at Google I would copy and paste the patterns I did at Google. Now we stopped copying and pasting code. If you are newbie there is a learning code and that’s a drag. What it (Angular Console) does it makes it easier for novices for them to know what can you generate and what options are available to you. It makes you feel nice and comforted and holds your hand. It’s a tool for me because I often go fast and it makes sure I don’t do anything wrong. It’s focused, and it keeps me focused.

4:29 – Panelist: I just installed it for the first time. I am working on a project for a client and been doing a lot of NGG things. I am looking at this thing and I can see how it can be pretty helpful with its UI. Get in and try it out.

5:23 – Dan: That’s the generate screen.

5:30 – I have a terminal and it...

5:51 – Dan: As you building up the commands it constantly runs them. It would be insane for you to hit the Enter key and copy and paste, cause we only have 2 hands. As you are doing the commands it will tell you what’s missing. You will have the flags above it and tweak it a little and it comes together.

6:45 – Chuck.

6:53 – Dan: Under the hood it’s running it verbatim. Anything that has an architecture definition every 1/10 sec it...will live update and it sees what projects you have, what apps you have and anything you have with a CI it will present it to you.

7:51 – It has some custom scripts.

8:03 – Alyssa: What did you do to install it?

8:05 - AngularConsole.com Welcome download button and I downloaded it.

8:43 – It’s a tiny file.

8:47 – You are trying your best to make your bundle efficient.

8:57 – Electron app is about the same size. It took only 11 seconds to download for me.

9:11 – Nobody uses Lenox, so...

9:22 – It does some very simple things it can do and chime-in when you want, Dan!

I can see all my projects and if you were in a workspace you can see it all. If you have an Angular project you can do a generate component. There is a code generator, and there is a run screen. And in the end – I have a question about extensions? This is really where you can get a bunch of schematics, right?

10:34 – Panelist asks a question.

10:38 – Dan: Not wrong at all.

11:25 – Panelist and Dan go back-and-forth.

11:36 – We should do a show on schematics.

11:43 – You are percolating a few new ones – that’s cool. What would be cool is if you...

12:14 – Dan: Yeah it’s hard coded. We put this together in less than a month. It started in the middle of like October and we just put together and released in 3 weeks. Considering how slow Angular has developed it’s interesting to see...

13:01 – Yeah I am seeing the extensions that reminds me...

I like how you can search with these extensions there especially with the filter.

13:21 – Dan: We want to eventually I hope we can surface more things. Not everyone thinks how a designer thinks. We are trivial to discover them maybe they would. He’s very much open to that someday.

14:24 – I want to ask a question. Let’s do a poll request and it’s important to me. I don’t see the file where that lives.

14:41 – Dan: I think there is a pre-existing file. You can base it off of that one.

14:55 – A little context that I have and the one question that keeps coming up is what’s to say that this won’t drive us down a road to only do what NX wants us to do?

15:52 – Dan: It’s tricky. Actually, back when the CUI they were thinking of something very similar to the console and it never happened. Basically before we launched it to the public we wanted to make sure that Angular team was on board with us. Even though we own the repo we wanted Google to sign-off the code. Make sure that they did it the correct way and they have lawyers more so than a start-up does. Eventually they will own...and they will be in charge of the release schedule. But all in all it’s my baby and I won’t give it up. There are extensions...

_Dan continues this conversation._

18:20 – Yeah so far using the console I can see the NX and finding extensions is hard. Where would you go find it? So this stuff...

18:53 – As long as NX still stays an option than something you MUST choose then...

19:12 – Dan: We decided early on that we didn’t want to shove NX into their face. That console can be useful but useful in another way. What we are building is this way you can reach out to us. We are a consulting company. If you are in the middle of making your app and you see a bug then we are building out a NWRL connect where you can connect with us.

20:12 – Yeah I see that NWRL connect. Do I get you for free?

20:26 – John Papa discount.

20:31 – I usually have to pay him \$10,000 a minute!

20:53 – Yeah, he’s a cofounder (Victor).

21:03 – It gives his number and SSN!

21:17 – Alyssa: You said you have a lot of ideas of how console could go, do you have any things in the next steps?

21:32 – Dan: I wasn’t very ambitious when I started the project. It’s not a huge desktop client focus application.

I am adding background tasks. Things you can run all the time so you don’t have to click them all the time.

23:17 – Advertisement – Get a coder job!

23:58 – Why would you use this tool?

24:05 – Dan: I have this fun experience when I was making console at first. It didn’t have the command screen and I needed to make a dialogue for creating a new workspace. And I said: Oh Shoot I don’t remember how to generate a module with routing. So instead of Googling...server and opened up Angular Console workspace and generated a component with it and it...

25:11 – Comment.

25:19 – Dan: During auto complete...

26:10 – Panelist: If they want that UI...and when I teach Angular the first thing I teach is the UI. I think UI is a great starting point. I look at the console to see the extensions.

27:09 – The CUI is already abstracting multiple different things. Now you have added a UI to it, I think it will be attractive for different people. I can see people saying I got it, and other people (John Papa) teaching a course, or maybe...certain people will like/don’t like it.

28:12 – I don’t think it’s an either or.

28:20 – Chuck: I would try things on the command line, and then things on the console line and figure out how it works with my flow. If I have 2 tools then I will use 1 for X and the other for Y.

28:47 – Dan comments.

29:17 – Where should people go to voice their ideas?

29:29 – Dan: Some ideas are really, really good! Yeah shoot me a message.

30:19 – You haven’t seen my issues, yet, bro.

30:28 – Chuck: Was it inspired by the...

30:37 – Dan: Shamelessly I steal design all the time. As I develop the Angular Console more I am steering away from their design but...

31:26 – Chuck: Depending on WHO I am talking about there is rivalry between maybe Vue and Angular and whatever. I like the idea of sharing to show the mature elements to bring in what I am doing.

31:59 – The main difference is the implementation is electron and web app and tell us pros and cons and why?

32:14 – Dan: We could have done it either way. It looked more beautiful in my dock. Having it be an honest to goodness app and not having to open a terminal and fire it up, it didn’t feel professional or good. There is a little bit of professionalism there.

33:42 – Chuck: I agree with that.

33:48 – I like that it is web and that it’s a web application. It’s nice to have a web app open.

34:06 – Dan comments.

Dan: Discoverability is there. There are 2 servers and you could load it up and open it up in Chrome. We don’t use a lot of electronic UPIS because you are just running your terminal.

34:56 – Chuck comments.

35:02 – I just put the 7’s in there and there it is!

35:11 – Dan: Theoretically, it is useful. That’s good.

35:19 – What port?

35:40 – Chuck, panel and guest go back-and-forth.

36:06 – Seems like a good idea.

36:13 – Hacker News.

36:17 – Dan: That’s the dream – my life would be made as a developer.

36:38 – Chuck.

36:55 – I submitted a PR in there and looks like you are still getting help with this. I am a fan of this tool. People will love this.

37:15 – Dan: We have more things that we want to add it - it to make it more attractive.

We are making it official we are...

37:54 – There are people that kill NWRLs.

38:03 – Chuck.

38:08 – Dan: Fellow NWRLer, Jack...

38:50 – That stuff exists through web pack, right?

39:20 – Dan: We can’t use it because it’s garbage and I won’t touch it.

39:35 – Dan: I don’t know. We are going to do basically the same thing but prettier. The code will be prettier.

40:10 – Chuck: Aaron, it looks like you put in a request to put in the plug-in. And you did it pretty fast so it’s not hard to do?

40:31 – Probably not formatted properly.

40:40 – Panel and guest go back-and-forth.

40:54 – You have to fix it on the air. It’s a space problem. My line space is too long.

41:07 – Panelists and guest.

41:46 – Dan: Any compliment from Victor makes my life.

41:57 – Panelist: I changed it.

42:05 – Alyssa: Is it green light, green arrow?

42:15 – I am just failing.

42:21 – I used the web editor I really didn’t...

42:30 – Alyssa: It was a space issue.

42:39 – 3 more minutes to go...

42:54 – Chuck sing us a song while we wait.

43:03 – Is there a contributions page for people to contribute?

43:18 – Dan: It tells you exactly how to run it.

43:33 – Chuck: It using some of the web pack tools and the CUI and the command line, I am wondering if it’s possible to add - not extensions to the CUI stuff but - to the console itself? Setup the other things that aren’t Angular specific but are apart of my overall template? Or do you do that through schematics?

44:16 – Dan: There are different ways to approach it. Your personal workflow you probably should integrate it. Like anything else why wouldn’t you keep it the same?

45:42 – Panelist comments.

46:08 – Dan: Have you contributed to Angular before?

46:25 – Chuck: Anything else before Picks?

46:36 – NRWL Connects is our support product to help you with being a more productive Angular developer.

47:24 – Panelists and guest go back-and-forth.

47:41 – I didn’t know [NRWL Connects](https://nrwl.io/connect) was a thing. If I wasn’t personal friends with Victor and...

There have been problems that I have solved because I have smart friends.

NRWL Connect is to help those people who don’t have smart friends.

People can solve a lot of problems and this is HUGE!

49:03 – Dan: Fingers crossed we are helping integrate Angular Connect to help with Basil.

49:39 – Chuck: Picks!

50:00 – [Advertisement – Fresh Books!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866051&source=GOOGLE&gclid=EAIaIQobChMI--6zho6H3gIVjsVkCh2wsQx6EAAYASAAEgL9B_D_BwE&gclsrc=aw.ds&dclid=CO7qmoiOh94CFUnHwAodiCQBUA)

**Links:**

- [Vue](https://vuejs.org)
- [Angular](https://angular.io)
- [NRWL](https://nrwl.io)
- [NGRX – DATA LAB – GITHUB](https://github.com/johnpapa/ngrx-data-lab)
- [Angular Console](https://github.com/nrwl/angular-console/blob/master/server/src/api/read-extensions.ts)
- [Angular Prettier Schematic](https://www.npmjs.com/package/@schuchard/prettier)
- [Chuck’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [5 Things about developing on a Mac – Video](https://www.youtube.com/watch?v=c0TMasEW29A&feature=youtu.be)
- [Real Talk JavaScript](https://realtalkjavascript.simplecast.fm)
- [King and Queen of the Universe](https://www.kobo.com/us/en/ebook/king-and-queen-of-the-universe)
- [Grinders](https://grinders.co.uk/home/)
- [Dan Muller’s Bio through NRWL](https://blog.nrwl.io/nrwl-welcomes-dan-muller-80d9e1543c82)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Fresh Books](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Alyssa

- Kendal UI Library component update

John

- [Season 2 of 5 Things of JavaScript](https://channel9.msdn.com/Shows/5-Things/Five-Things-About-Developing-on-a-Mac)
- [Podcast&nbsp; - Realtalk JavaScript](https://itunes.apple.com/us/podcast/real-talk-javascript/id1437407176?mt=2)

Aaron

- [Role for Initiative](https://r4i.us/)

Charles

- [Extreme Ownership](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B0739PYQSS/ref=sr_1_1?ie=UTF8&qid=1540167966&sr=8-1&keywords=extreme+ownership)
- [Dungeon and Dragons](https://dnd.wizards.com/products/catalog)
- HeroDevs.com

Dan

- [Look at the Birdie](https://www.amazon.com/Look-at-Birdie-Short-Fiction/dp/0385343728)
- [The King and Queen of the Universe](https://www.amazon.com/King-Queen-Universe-Kurt-Vonnegut-ebook/dp/B002SME1W6/ref=sr_1_1?s=books&ie=UTF8&qid=1540168159&sr=1-1&keywords=The+King+and+Queen+of+the+Universe)
- [Grinders Boots](https://grinders.co.uk/home/)
- [Screaming Females](https://screamingfemales.com/)

### Transcript
