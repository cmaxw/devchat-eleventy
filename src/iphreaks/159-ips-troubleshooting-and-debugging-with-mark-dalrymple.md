---
layout: layouts/post.njk
title: >
  159 iPS Troubleshooting and Debugging with Mark Dalrymple
date: 2016-06-30 07:00:25
episode_number: 159
duration: 57:25
audio_url: http://media.devchat.tv/iphreaks/iPS159DebuggingAndTroubleshooting.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

## Check out [Newbie Remote Conf](https://allremoteconfs.com/newbie-2016)!!

&nbsp;01:06 - Mark Dalrymple Introduction

- [Twitter](https://twitter.com/borkware)
- [GitHub](https://github.com/markd2)
- [Blog](http://borkware.com/)
- [Bio](https://www.bignerdranch.com/about-us/nerds/mark-dalrymple/)
- [Big Nerd Ranch](https://www.bignerdranch.com/)
- [Big Nerd Ranch Blog](https://www.bignerdranch.com/blog/)
  01:58 - Debugging, Troubleshooting, and Performance Tuning02:40 - [The Universal Troubleshooting Process](https://www.bignerdranch.com/blog/the-universal-troubleshooting-process/)
- [Troubleshooters.com](http://troubleshooters.com/)
- [Thoughts on Debugging, Part 1](https://www.bignerdranch.com/blog/thoughts-on-debugging-part-1/)
- [Thoughts on Debugging, Part 2](https://www.bignerdranch.com/blog/thoughts-on-debugging-2/)
  10:32 - Mark’s Favorite Bug15:48 - Debugging with Others18:02 - Bug Reproduction20:40 - Chuck’s Favorite Bug25:31 - Specific Tools
- [Xcode](https://developer.apple.com/xcode/)
- LLDB Command Line Interface
- Caveman Debugging (Print Statements)
- [Programmers at Work: Interviews With 19 Programmers Who Shaped the Computer Industry](https://www.amazon.com/Programmers-Work-Interviews-Computer-Industry/dp/1556152116)
  30:55 - Testing36:28 - Tracking39:10 - Code Review42:07 - Resources for Getting Better at Debugging&nbsp;Picks
- [Ludiphilia Podcast](http://ludiphilia.net) (Andrew)
- [The Manhole](http://cyan.com/iOS_ManholeME/The_Manhole_iOS/Welcome.html) (Andrew)
- [Start with Why by Simon Sinek](https://www.startwithwhy.com/) (Chuck)
- [VoodooPad 5](https://plausible.coop/voodoopad/) (Mark)
- [Mark Dalrymple: Adventures in Debugging - Keeping a Log](https://www.bignerdranch.com/blog/adventures-in-debugging-keeping-a-log/) (Mark)
- [Acorn 5](http://flyingmeat.com/acorn/) (Mark)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 159 of the iPhreaks show. This week on our panel, we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**CHUCK:** I’m Charles Max Wood from Devchat.tv. I just want to give a quick shout out for Newbie Remote Conf which is going on in July for new people or if you want to speak to new people. We also have a special guest this week and that is Mark Dalrymple.

**MARK:** Yes, I’m Mark Dalrymple, long time programmer. These days, I wrote code and words for The Big Nerd Ranch.

**CHUCK:** Awesome. Now Big Nerd Ranch is based in Atlanta?

**MARK:** That’s correct but I’m actually based in the Pittsburgh, Pennsylvania area.

**CHUCK:** Oh okay. So how does that work?

**MARK:** The Ranch is a very remote-friendly operation so a lot of the day to day interaction and water cooler talk happens via Slack. We use online tools like Basecamp, GitHub, all that kind of fun stuff. So I’m very much in with everybody else that’s going on with day to day work and I go down once a quarter or so to the mothership mainly for food, but also to hang around with folks and catchup office gossip and all that kind of stuff.

**CHUCK:** Cool! Well, we brought you on today to talk about debugging, I think, [chuckles] or troubleshooting.

**MARK:** Yeah. Troubleshooting, debugging, performance tuning also falls into the same camp. It’s one of my favorite topics mainly because through the course of my entirely too long career, so far, I’ve been good at it. As part of my day to day Ranch duties, I need to explain to people – whether blog sites or in person in a training class – the techniques of that, I go through the kind of mindsets that are necessary so that you can get your bug fixed and move on to something more useful with your time.

**CHUCK:** Interesting. So it seems like you have universal process for troubleshooting?

**MARK:** Yes, I discovered this probably the late 90’s, it was this totally bizarre site I stumbled across – troubleshooters.com. It’s actually still there. Back then, the author, Steve Litt, had this quarterly magazine of articles about troubleshooting all written by himself. So it was three or four years of back issues of this magazine with a dozen articles all by the same guy talking about the same stuff. But the thing that he’s talking about is what he calls the universal troubleshooting process.

I was reading through these things and it was like, “Oh, this is kind of cool”. It’s a generalized process of breaking down a problem into easier to digest chunks so that you can approach it rather than being completely overwhelmed by whatever problem you’re trying to solve. Steve applied these same sequences of operations to auto repair – stereo system repair, fixing software as well as learning new technical systems.

I gave a talk to some of our ranchers, a thing we call Nerdshare time, about the universal troubleshooting process. One of my friends who was a submariner, he was in the navy a couple of years and said that yeah, we had a very similar process for when we’re diagnosing things like the nuclear reactor or when things are going wrong with hardware under the water, it’s like, :Okay, yeah. Cool. It is a fairly universal process.

**ANDREW:** I really like this idea. My background is in hardware so I’ve done a lot of hardware troubleshooting then of course, software debugging and they really are very similar things even in completely different domains. So having a universal process, it’s really a process in a way of thinking.

**CHUCK:** It’s funny because when I saw it, I was like, “Oh, so what everybody does. They put in a print statement and then they guess.”

**MARK:** [Chuckles] Well maybe, it’s not that universal. So fundamentally, universal troubleshooting process is life support around a binary search. So you need to get all your ducks in a row. So there are a couple of parts to process – I won’t go through the entire thing with you; you can read it online, but there are a couple – I call them the meat-oriented parts of the process that talk to more your humanity than the actual ‘here’s the bits and bytes you talked to’.

The first one is originally called “get the attitude”. [Inaudible] renamed it to prepare but you have to psyche yourself up for solving a problem. It’s like I have this big software problem. If it’s not killing people, if we’re not losing billions of dollars per minute, if our servers our down, maybe now is not the right time to start debugging this thing because I just came off of an all-night Jägermeister bender or something. So get the attitude of “yes, I can fix this problem”, you psyche yourself up. This problem is solvable even though it seems like it completely bizarre race condition or [inaudible] suck away a month of my life so I’m sure that that could happen, but hey, hurrah, let’s go fix this bug.

**CHUCK:** So you start beating your test, shaking your head.

**MARK:** Yeah, a little primal screening and then usually, I clean off my desk because most of the time, it’s a disaster area, but I tend to work fairly well when my cage is screen. So clean off the desk, do my primal screen and then start figuring out what’s going on.

**CHUCK:** If I clean off my desk, it’ll be three days before I get started.

**MARK:** Sometimes, getting the attitude can be an effective procrastination mechanism.

**CHUCK:** [Chuckles] But it makes sense, right? You get yourself into that mindset and yeah, cleaning the desk is a good way to do it.

**MARK:** Right. And then if you’re dealing with hardware, you want to make a plan so you don’t destroy your hardware, like shorting a nice circuit to the mains or your car battery’s going to explode in your face, you want to get as complete as a symptom description as possible. Once you can reproduce the system – and then once you can reproduce the symptom, then you can start doing things like, “Okay, does my project still build? Does it run? Are there any warnings? Maybe I should fix my warnings? Maybe I should make sure that my database is sane, if their hardware connections – are any of the pins bent?” that kind of stuff.

Then after that, you binary search through your code and I’ve got all sorts of stuff I can talk to you about. The details of that kind of thing replace or repaired defective component like put it in an amplifier tube, put in the battery, fix your software. Test it, land it and then the ninth step is – when I first discovered it, I really just stopped and stared at the headline for a while but it was take pride in your solution. It’s like, does this really help me built my coder view. When somebody is making sure that I didn’t introduce new bugs.

But the fundamental thing is that we are all pieces of meat, ampulatory talking pieces of meat and we are creatures that – we crave good feedback. So being able to say, “Hey, yeah, I fixed this problem. It was hard. Here’s how I did it.” Sometimes I blog about it; sometimes we go to the Slack channel and say, “Hey, I finally fixed that table view text sizing bug that’s been plaguing us.”

I’ve got a contractor friend, Jeff [inaudible]; he worked in a cubicle with the rest of us and he had Christmas lights decorating his entire office area. Whenever he fixed a hard bug or implemented a really gnarly piece of functionality, he would plug in the lights. So everybody knew that if the lights were blinking, Jeff did something awesome and he’s got a great story to tell. So we’ll all migrate over to his cubicle, he’d tell us his fix or show us his new implementation. We all got participate in this like, “Wow, this is really cool and awesome.”

And Jeff was kind of sneaky. He actually used this as a communication mechanism for people who being [inaudible] to say, “Yeah, I fixed this problem and I noticed there’s this working problem in our software that we really should address.” And he was able to disseminate that information amongst people a lot easier than say a blanket email that engineering would have.

**CHUCK:** Yeah. For me, I have a couple of victory songs like the Rocky theme from the movie.

**MARK:** You got to fly now.

**CHUCK:** And I just crank it up. [Chuckles]

**ANDREW:** It certainly is a really great feeling when you’ve finally fixed a problem and you’ve been troubleshooting. The satisfaction is proportional to how it took you to figure it out because I know bugs that I work on for a day or two or even longer, feel a lot better when I finally understand and fix them than the ones that take me five minutes.

**CHUCK:** The other thing is it’s really easy to get caught up in, “Okay, I fixed this one. What’s the next thing?” And if we take a minute to celebrate – that is the feedback we need. We definitely need to be positive about this stuff. I had a success and that is one of the things that I think keeps a lot of people going is that they feel successful, they feel like they’ve made the contribution so why not celebrate it for a few minutes?

**MARK:** And they lead to great stories. I love stories. I still think that programming is fundamentally in the stone knives and bearskins and we’re teaching each other language across from campfires stage of things. So being able to hear what other people have gone through, it’s become one of my favorite interview questions, so after you melt their brain for a little bit with interview question that is like “what’s your favorite bug?” or “what was your most interesting bug?” and you can see the eyes light up and it’s like, “Oh yeah. Here’s this really cool thing and you won’t believe what happened here.”

It’s also a good ice breaker, like conferences. If you’re sitting around the breakfast table or lunch table and everybody’s [inaudible] the buffet food on their plate intently, just bring up the favorite bug question and people start talking about their worst stories and it’s a lot of fun.

**CHUCK:** Oh yeah, absolutely. And sometimes it is something really dumb. So you get the stories that is like yeah, this is really rough and we did all these things and we figured out what the bug was or whatever. And sometimes, it’s a good laugh when somebody shares a story of, “Yeah, I went through the motions like eight times and then I figured out I forgot a semicolon.” [Chuckles]

**ANDREW:** So you have to tell us your favorite bug then, Mark.

**MARK:** Oh, my favorite bug is – it was on a large graphical product for a large company I’ve heard of. It was right before an announcement of the simultaneous release of the first Linux version, the latest Mac version and the Windows version. It was like four or five days before this huge announcement and two of us were basically paged in from other projects to help out on it. It ended up being a two byte source code fix and a two bit change in the executable. So this particular product, you could drag in graphics files from the desktop and drop them into the main window and it would plaster the image all over the content that the user was looking for. It’s a pretty fundamental feature and it bit in the product forever.

This was back in the time when Apple was transitioning from the power PC architecture to the brand new ICBMs, the Intel-based Mac computers. So a power PC, you can drag in an image and it would work perfectly. On one of the new Intel Macs, it just did absolutely nothing so it was very easy to reproduce, thank goodness. So my friend Dan on the west coast and me on the east coast, we both got a call from the project manager saying, “Hey, can you take a look at this bug? Today is Wednesday. We’re hoping to announce this thing – or actually, we are announcing this ting to the world on Monday and we need this fixed. Our regular Mac developers are working on more important bugs but this one’s still a show stopper.”

So we went through – basically reproduce the problem, yes. Set breakpoints like was our Apple event handler being called? Okay. Was it finding the right image file? No, the finder’s not lying to us. It’s actually the right image file. We finally tracked it down to one set of code loading the file, seeing the [inaudible], it’s kind of graphic format. No it’s not. Throw an exception; throw this as an unknown graphic file format exception. And then an exception handler in another shared library would catch that exception and then pry PNG files and GIF files and the simple files and it was the simple files that were having a problem.

So we’re very confused; on the power PC, we could see that the exception handler was catching this [inaudible] graphic file format fall back to the easy format and on the Intels, it was not. Okay, this is kind of bizarre.

Now, it’s a big C++ code base and throwing exceptions across shared library boundaries is not necessarily a good idea to start out with but that’s what it was. We’re scratching our heads. We were wondering what is going on here. And it took us a full day to get to this point. So we went into our internal IRC channel and asked our smarter friends, “Hey, we’re seeing this weird exception difference on power PC versus Intel,” and one of the smartest guys I’ve ever worked with piped up and said, “Oh yeah, GCC4, they changed their runtime metadata format.”

In GCC3 power PC, it was a string in GCC4 Intel, it’s a structure and that’s what the problem was. On the power PC, the underlying mechanism was happily comparing two strings for equality. Sure enough, same exception name in both places. Groovy.

On the Intel, they were structures private to each shared library so a simple pointer comparison was not saying these two exceptions are the same. So we changes our runtime loading command DL open instead of having private symbols using public symbols and that fixed the problem. So it was two character change and a symbol which ended up being a two bit change and a constant. There’s a whole lot of mop up work and after that just to make sure we didn’t break anything but it was a very good C++ code base so we ended up not having any name collisions or that kind of stuff. So the fix made it and we shipped in time for the Monday conference.

**CHUCK:** Nice,

**ANDREW:** Yeah, that was quite a story. [Chuckles]

**MARK:** So it’s two engineer days for two characters for two bits.

**ANDREW:** But don’t you feel lucky that your colleague in IRC just happen to know that – know about that change?

**MARK:** That was – if you believe in miracles, that was a miracle. Knowning Marson, he knows everything about everything so he’s just – eventually, the question would’ve gotten to him and he would’ve answered it. But if we haven’t had that pointer, we would’ve dug into things; we would’ve broken up to the disassembler seeing where things are being done under the hood and then discovered “hey [inaudible] comp here, hey pointer comparison here” and then figure out that this shared library runtime symbol mechanism had changed in the major compiler version.

**ANDREW:** I’m afraid I would not have found that bug. [Chuckles]

**MARK:** That is what you need. Get the attitude. It’s like, “Hey, yeah we can do this.” Yeah, there was two of us working late into the night and into the next day so having another person to bounce things off of, we actually managed to get it to the exception throwing and catching probably fairly quickly in the process, maybe about three or four hours into it and then the rest of it [inaudible] being confused until we finally asked for help. I guess that goes to show that it’s never wrong to ask for help because you never know what will just show up.

**ANDREW:** I want to ask about part of the troubleshooting process that you mentioned before the show. And it’s something I thought a lot about and learned from my dad who’s a really good engineer. But you talked about when you debug with others, a big problem is they sort of pre-form an idea and they start to assume things. Can you talk a little bit about that?

**CHUCK:** I’ve never experienced this?

**MARK:** Yeah, it never [crosstalk].

**CHUCK:** Yeah.

**MARK:** Never ever happens. So if you think of what it takes to go to somebody else for help, that puts you in a vulnerable position of “I have admitted to myself that I am not a super being, that I cannot solve all problems with a wave of my mighty, meaty paw. And I need to go to another human being and beseech them for a chunk of their time to help me out. I am taking their life force for my benefit.” Sounds kind of a big downer that way but let’s go through your background mental process because that’s kind of what’s happening.

So everybody wants to be prepared. It’s like I’m taking up Mark D.’s time. So if somebody says, “Hey Mark D., I have this problem. They won’t approve that they have done their two [inaudible] that they have looked at this code path, that code path, this scenario, that scenario; these compiler settings, these library settings and all these stuff.” And I can understand that because hey, I’ve put hours and hours of work in at this. I went to have something to show for even if it’s just – I can demonstrate something has happened or they erased my white board and now I want to fill it up with boxes of wines.

But from the point of view of somebody who wants to fix these problem, it’s like this is the first I’ve heard of it. You’re showing me code I can’t even visualize what’s going wrong with the program so I usually nod and smile for about five minutes. It’s like, “Okay, that’s pretty cool. Just show me the problem,” and then if they can reproduce the problem, then we can start through the publishing process. I can start asking questions; I can start getting into the – everything I know is wrong; let’s start finding things that are correct. Move those into the bucket of ‘here’s where the programmer’s working well; here’s where the programmer’s not working well’ and then continue that way to find the solution.

So usually, I let them talk for a little while and then, “That’s very nice,” not and smile. “Let’s start from the beginning.’

**CHUCK:** I’m kind of curious here; you brought up reproducing a bug a couple of times and sometimes, that’s really easy, right? Like your example with Intel Macs happened on every one of them so it’s pretty easy to reproduce. You just had to have the right machine. What if you can’t reproduce it reliably? What if there are outside circumstances or other things in the code that affect that?

**MARK:** Oh yeah, race conditions. Those are especially fun or if you have networking problems. Nobody ever has networking related issues. That kind of thing is you just have to chew on it. So some bugs, particularly easy to reproduce bugs, they’re of all intents and purposes dead because if you can reproduce it, you can binary search through your code, find out what the problem is. It may be something that can’t be fixed but at least you found the problem.

For the intermittence, you just have to keep on collecting information. So if you’ve got a log book or text file or doodle pad or something, everytime you get a new little scrap of information, you throw it in the pile, re-evaluate it and then – can I wait for a while so that I get more information? Can I add some instrumentation? Maybe I can add some caveman debugging which then the user can tap on an icon and then mail it to me?

I’ve successfully used that in some of my products where I just log a little bit too much, put it into a text file and when somebody comes across one of these one in a million problems in the field, I can say, “Okay, go to our secret debug screen and tap the ‘send diagnostics button’ and it’ll send me a text log of stuff. Maybe there’s something interesting in there. Maybe if I can isolate it to a subsystem, I can start putting asserts or sanity checks around code where hey, this maybe where’s something’s going on. If it’s an intermittent crasher and I can log in to the machine – maybe I can log into the machine like on a Mac or say, on a web server, and attach a debugger to the program.

I’ve done that before; log in to somebody’s machine; they start up a GUI application. I attach with a debugger and just let it sit there until the problem happens. Then maybe I can find out, “Oh, smoking gun, I can fix this,” or at least they’ll give me a good position in time where we can see what’s going on.

Maybe we can gather information outside of a program; you’ve got a GUI application and one user where it crashes all the time, have them start a stream recording. Use the program. When it crashes, they can send in the screen recording and you can see, “Wow, they are spastic,” or “Wow, they’re really slow. They may be falling into a race condition between the button click and the animation.” So there’s all sorts of things that you can drive for intermittent problems.

**CHUCK:** I think this is the time where I share my favorite bug.

**MARK:** Do it!

**CHUCK:** [Chuckles] So this was actually in the automated test that we had for our system. I was working at crime reports at the time – crimereports.com – and I had written most of the code and most of the tests around geocoding data. So police departments would send us basically GPS information but it was all encoded for their area so I had to convert it to latitude, longitude. So I would put it in and I had all these automated tests around it and the test would pass when I was at work but one of my co-workers was working late for those two weeks. And I’ve come in in the morning the next day with a nasty email in my email box and a nasty note the next time I checked out and ran the test saying “clean this up” but doesn’t pass on passing tests and I couldn’t figure it out.

It’s working, now, I don’t know what you want me to do so I delete his message out of the test and then I come back the next day and the same thing and finally figured out that I was running the tests on UTC and it was checking dates among other things for the crimes that had occurred.

**MARK:** Oh, time zones.

**CHUCK:** And it was checking the dates against UTC versus Mountain Time which at the time was UTC-6. So what would happen was the test was – start failing at 6PM. Since I was going home at 5PM, I never saw them fail, but since he was running his tests – running the automated test when he was checking in, he would see these at 7:00PM then he sent me a nastygram. Yeah, it took about two weeks for me to figure out, “Oh, it’s encoding these dates as UTC and then it’s comparing them to Mountain Time,” so I was able to clear that up just by making all the dates and all the times UTC and that seem to work good. Then it would do the translations in another part of the code for whatever people were viewing from.

**MARK:** [Chuckles] Oh yeah, that sounds like fun.

**CHUCK:** But reproducing it was – I’d show up for work the next day and it worked fine.

**MARK:** [Chuckles] That kind of reminds me of – it’s this classic bug of – a system administrator got an email from a scientist saying that they couldn’t send email more than 350 miles. [Inaudible] milliseconds and I was like 350 miles, [inaudible] sent an email to this person here, it didn’t make it. I can send it to this other person that’s closer and through hours of analysis, we figured out it’s about 350 miles away from my computer. And it’s like, that is bizarre. And it finally turned out to be related to DNS lookups and the speed of light in terms of things were timing out but not coming back.

**CHUCK:** Oh wow.

**MARK:** It turns out DNS request and so it’s one of those thins worth looking up on the internet to see. It’s like how, even the most bizarre problem description may actually have a kernel of truth in it.

**ANDREW:** I like something you said right at the beginning of that discussion which was about putting a – basically putting a button in your software that can save out a log with extra login information.

I’ve had a menu option like that in a Mac app that I have for many years now and it has saved me and helped me find bugs so many times, I can’t even count, and maybe even more importantly, it’s often helped me just with regular customer support where this app connects to a variety of external hardware, not all of which I have on hand to test with.

I’d have a warehouse full of hardware if that were true so I’ll get a report from a user and they can get something to work and I have them send me a log and sometimes it’s a bug or something with the hardware that I didn’t know about because I couldn’t test with. But a lot of time, it’s a user error and I’m just so much more quickly able to find it when I can see what the program’s actually doing and what’s actually going wrong instead of, “Oh, it doesn’t work,” which is often about all you get from a user. So I can’t really stress enough how valuable that’s been to me and I don’t see it in a lot of software.

**MARK:** Yeah. All the iOS software that I owned – basically, I’ve done most of the work on and they’re not for a client, I have a secret gesture which opens up a debug panel – two finger, triple tap on the company logo at the top and the thing is it’s been around. It’s just this ugly screen full of buttons which have the reports and diagnostics as well as maybe some pre-release features or things you can toggle at testing mode, [inaudible] synthetic data kind of thing. So that’s useful for beta testers like, “Hey, I want you to test in this particular scenario. Do the triple tap and change these settings,” and our support crew also sometimes uses that for running diagnostics as well as we had some iCloud problems – imagine that – for doing things like clearing iCloud caches, for instance, or unwedging some of the things that iCloud can get into.

**ANDREW:** I’m curious, our audience of course is mostly – well, presumably almost all iOS developers – either iOS developers or aspiring iOS developers, so I wonder if we could talk a little bit about the specific tools that we have at our disposal as iOS developers. I think of course, the first one that comes to mind is Xcode and the Xcode debugger. Do you think people use Xcode and the debugger to their fullest capabilities?

**MARK:** Oh, nobody does because there are so many features just for fun. Just to help inside of LLDB and just start reading and you’re probably going to be there for a week because there’s just so much functionality packed into the console and only some of that has surfaced inside of Xcode but the bunch is. And things like Quick Look; being able to quick look images or RTF data or strings is just absolutely wonderful when you’re inside the GUI.

Yeah, and Xcode breakpoints? There’s a huge amount of power there. You can use it as a kind of a form of caveman debugging just for doing logging. You can have it speak stuff; you can put in conditionals like only break here if this is the twelfth time through the loop, because the first 11 times are time but things got to break down 12, 13, 14<sup>th</sup> time. So instead of having to hit ‘continue’ 13 times, you’re going to say, “Xcode, countdown this value and when it hits this, fire the breakpoint.”

**ANDREW:** And all of the stuff you’ve just mentioned now is in Xcode with regular UI in Xcode. But even so, I think people don’t realize it or don’t use it. But there’s also a lot hidden behind the LLDB command line interface.

**MARK:** Uh-hm. Yeah, I make no bones that I’m a huge fan of command line interfaces. And I also like caveman debugging which is putting in print statements, finding your problem and then taking them out.

The nice thing about both the LLDB command line and the caveman debugging is that you have a record of what happened after the run is over. So you print out some values; you put some stack traces with bt, the back trace command; put some stack traces there, print out values and then five, six, seven runs from now, it’s like, “Hey, wait a minute; didn’t I see something similar to this back then?” You can go back to the text logs and take a look at it. That’s information you don’t get when you purely do the hover over a variable and see a value. Those things are ephemeral; they will go away. There’s not any kind of permanent log that you can go back to later if you’ve got a particularly nasty problem.

**ANDREW:** Yeah. One little feature I like is that you can actually set a breakpoint that will continue automatically so it doesn’t actually stop, but it runs an action every time it’s hit and the action is just an LLDB command so it’s really easy actually to make a breakpoint that will continue but will log something. And I think one reason that’s really useful is that you – it takes you a while to get to where you’re reproducing the bug. And if you have to stop the app, add some additional code and relaunch it, it may be harder. It would take a long time to get back to where you were. This way, you can put new print states in your code without having to restart the whole thing.

**MARK:** Right, and also many folks don’t realize that you can set breakpoints on arbitrary functions. So maybe you’re getting a strange log, looks like it’s coming deep from within core graphics. Like, “Hey, you’re double disposing your graphics’ [inaudible] text here.” And if you don’t think of putting a breakpoint on NSLog for instance or printf, then you’re going to be spending a lot of time trying to reproduce that problem. But if you can put a breakpoint right when it’s printing it, then you can get a stack trace both with – deep within Apple’s toolkit and hopefully, you’re stuff on the stack, too, and find out exactly what you’re doing that is triggering the problem.

**CHUCK:** I knew we’d get to print statements.

**MARK:** [Chuckles] Oh I love print statements. I’m trying to popularize the phrase ‘caveman debugging’. I didn’t invent it but I don’t remember where I first heard it from, but it’s my favorite kind of, “Yeah, caveman debugging. Ugh, ugh,” [inaudible] breakpoint setting, blah.

I was recently reading a book – I think it’s Programmers at Work with interviews with some of the really big names in programming. I think Rob Pike was in there, that kind of calibre of developer. And about 2/3 of them said that they don’t regularly use debuggers but use plain old print statements. That may be a side effect of coming from eras where the tools weren’t that great but sometimes if you’re trying to get a feel for the flow of control as well as values that are changing overtime, sticking a couple of print statements can give you that information with a minimal amount of having to click, click, click to set up these breakpoints then having to tear them down afterwards.

**CHUCK:** Yeah. One thing that I usually use them for is I just put them in a couple of spots just to get an idea of where things are occurring. It’s a fast way to validate my thinking as far as where my things are at. Then if I do need a picture of the world, then I’ll go and I’ll pull up a graphical debugger.

**MARK:** And if you’re learning a new API, it’s great. Overwrite every delegate method; put in a print statement and print out the arguments just to see what the flow of control is into an out of, say, MP music player controller and your own code and what’s inside notification [inaudible].

**CHUCK:** Yup. One other stuff that I see in this troubleshooting process that I want to push on a little bit because, I have arguments with people about this. It’s kind of funny, but you have tests. Did something go away? Did you cause any problems? An automated test suite is the next thing we have at this stage. And this is something that I find to be indispensable when I’m writing code that who knows who’s going to use it, what they’re going to do with it. Having an automated test suite for me, then when I go into debug something or figure something out, it’s like, “Okay, well, it says all of these things are working,” and it gives me an idea of where to go but also when I start making changes, it tells me, “Oh, there is an assumption that this would work this way and you changed it.”

But a lot of people are just like “Testing is that much more work” or “I don’t get that much value out of it” or to have all kinds of arguments where they say that they don’t want to test. I’m just curious, because I see there’s a benefit where I don’t have to think about all of these different assumptions being made and yet other people are like, “Well that’s just too much more work.”

**MARK:** Well, are [inaudible] questions that are slightly controversial and maybe like VI versus Emacs or something. [Chuckles]

**ANDREW:** Braces on the same like or a new line.

**MARK:** [Chuckles] Yeah, so I’ve been on both sides of that discussion. I believe in tests; tests are great when it’s possible and [inaudible]. That’s the hard part. I worked on a product when I was at Google. It was kind of an infrastructure, a little level kind of stuff and our goal is to have 90% code coverage which, if you’ve ever tried to get high level code coverage, yes, I have a lot of work. But our team agreed to it, our managers agreed to it so now we made sure we’re not to [inaudible] our engineering directors. It’s like our velocity could be slower because we’re aiming for a ridiculously high coverage and this is why. And if you got below 90, we consider that a code red and nothing would change until we got it back to 90 and usually, we run 90-93.

It was a lot of fun when the whole Mac group then started getting into the testing continuous integration kind of thing. We were already four or five runs up on the testing capability ladder compared to groups who were coming in from the absolute ground level. So that kind of stuff is absolutely wonderful.

If you’re primarily gluing together things like AVFoundation with UITableView with MP music player control or getting stuff from AFNetwoking, writing unit tests against gigantic Apple and third party API is difficult. So best for things like the new-ish UI testing stuff comes in handy where you can at least run the app, have it do stuff and the comparable form after. But if primarily, you’re gluing other people’s code together, tests are hard, but if you have a lot of control over the data structure [inaudible] the interfaces, how things work, the touch points, the places outside of your control; if you’ve got good control over that kind of stuff, then good testing and high level of code coverage can save you a whole lot of pain.

**CHUCK:** Yup, I completely agree with everything you just said. [Chuckles] I have felt those pains, too, testing. Sometimes, you’re just – you’re running against something and it’s not reliably or it’s not easy to really get your fist around it so that you can plug your test suite into it or on top of it or around it, so you do the best you can to characterize what’s happening around it without actually having to touch it. But yeah, then in any other case where you – yeah, you have control over the interface and control over how things are going to come together, having tests around that, testing those interfaces, testing the way that they – the different systems talk to each other so you have those integration tests. Then the high level tests where you’re actually, like you said, running the app and making sure that things happen, top to bottom, front to back. Those are all highly valuable because then you know that the assumptions we’re making about how things work actually hold up.

Then when you can’t test it, a lot of times, I put some kind of documentation around it that says, “This is really hard to test. Here are a couple of ways where you couldn’t verify how it works but we’re not putting this into the automated test suite because it’s not reliable.”

**MARK:** Right, and I think that’s the best way. It’s pragmatic and yeah, there’s information for people who need it.

One of my favorite features in Xcode 7 is they included code coverage. Click it, turn it on in your scheme, run your program, go to help browser and you can now see your code coverage percentages. So even if you don’t have – aiming for a huge amount of code coverage, you can at least tell what things are covered heavily. So if all your model classes have heavy coverage and if you have skinny view controllers, there’s not a whole lot of coverage there then that’s fine. If it’s the other way around, then okay, we need to do more concentration on the code that we control.

I couldn’t find it interesting just in a software spelunking point of view. It’s like, what parts of the code are actually being run when I perform a particular feature? So we’re [inaudible] new on a project, I might use code coverage to see where the hotspots are to see, is the place where somebody said, “Yeah, we’ve got 13 toolbar implementations here but the one you need to implement your button on is this guy here that actually happens to be in a contracting project.” It’s like, “Alright. [Inaudible] but verify,” so I said, “Breakpoints and all the toolbar stuff.” And he’s like, “Okay, the toolbar, I’m supposed to add stuff, is this one but it’s actually triggering this guy in yet another file. So you sure you want me to work over there?” And they’re like, “Uh, no. Actually, go back to that previous place.”

So we can use testing tools, even profiling tools as code exploration mechanisms to get a different view of how your code is behaving.

**CHUCK:** So one other question I have related to debugging and troubleshooting is a lot of times, troubleshooting and debugging is easier on smaller applications that aren’t as complicated. They don’t have as much going on so you can hold the whole system in your head. Then you’ve got these huge systems where you may even have effective teams running around coding against different parts of it that’s sort of all plugged together or are somewhat isolated if you can help it. But with those larger systems then, because they’re so much more to know, how do you keep track of everything you have to know in order to properly debug something?

**MARK:** Yeah. For those kind of things, I generally try to purge my mind, just assume that everything in there goes wrong and just start from a very open mind. I see [inaudible] try to reproduce, we’ll [inaudible] the bug at least a demonstration of it so I know where I’m going, get the victory condition so that I know when to stop looking. And then, I try to go through what I call my hierarchy of blame – what is the new code around this? So look at source code control, see what’s been changed recently. [Inaudible] get blame.

You may have a feeling of like, “Okay, something’s happening in this file. Maybe the world is being set up strangely. Anything new around here? Okay, is there any old code around here?” Then once I can dissolve my code from consideration which isn’t very often, then you can start thinking about third party library code system, library code compiler and what-not. For the most part, everything is new code or old code. Then from there, if I’m totally unfamiliar with the program, I’ll set a breakpoint or where I think it may be, just going by names and methods or classes, reproduce the problem or get close to it and then see if something triggers there.

Okay, I now have a place in the code where things may or may not be working correctly. I’ll start looking for opportunities to binary search the problem space. We’re using this additional framework; well, if I stub out that framework, it is not being used at this point in time or if I just have its functions return hard coded values, then I can use that to construct scenarios. So maybe this – [inaudible] we’re using is giving us a bad value. So I’ll hard code it to always return a good value. If the problem persists, okay, the library’s absolved, no problem there. If the problem disappears, then I know, okay, there’s something going on between my code and this library. So suddenly, my problem space has gotten a whole lot smaller. So my main goal, if the problem space is absolutely huge is figuring out what I can carve off so that I don’t have to think about it at all.

**ANDREW:** There’s something I’ve seen; people that are – especially that are new but I think everybody’s a little bit – can be a little bit inclined to this but that is where you have a bug and – let’s even assume that you can produce it pretty well but you really don’t know what’s causing it. And you spend some time troubleshooting, probably not falling in this rigorous troubleshooting process but you spent some time troubleshooting and you really can’t figure out what’s going on so you just start changing things. And at some point, you change something but you don’t really know what you’re changing, right? You’re [inaudible] out code; let’s try something different and you do that, and at some point, the bug goes away. I think an inclination – there can be an inclination to say “Oh great, I fixed it.” So I think you know what I’m talking about, that this happens.

And I personally, as hard as it is sometimes is, I try to really understand what’s going on because I feel like I can’t be confident in a fix if I don’t really know how that fix actually fixed the bug. I don’t know; anyway, that’s just something I bring up. I wonder if it’s something you see or experience yourself?

**MARK:** Oh yeah, I can understand it. One thing I really like about today is embracing of code review like GitHub and pervasive pull requests. So having to justify this fix to somebody else helps prevent the kind of, “Okay, we’re going to destroy the world” and “oops, things suddenly worked; I’m just going to check in all my changes” because somebody’s going to look at the dif and it’s like, “What is all this stuff?”

So there’s two parts of the universal troubleshooting process. Narrow it down to the root causes; that is the hack and flash, change plus pluses to minus minuses. Take out entire huge chunks of code. Remove startups of frameworks. Return hard coded values until you figure out what’s going on. Then once you figure out what’s going on, you’ve got source code control or else you better be [inaudible] source code control if you know what’s good for you is revert all that stuff and then actually make the fix in a rigorous ‘yes, I understand what’s going on. Here are the fixes and here are why.’

The longest time, those two worlds conflicted in my mind when I first started my professional career, but it was the other way.

I’ve been reading all these software engineering books of yes, when you fix bugs, you really should understand what’s going on, otherwise, you’re not a professional; you are a lesser human being. And I took that to be as. “Okay, as I’m trying to figure out the bug, I’m not understanding it, therefore, I am a failure.” And that really stunted my professional growth for a couple of months until somebody said, “Dude, you’re looking for bugs. You don’t know what’s going on.” The understanding, that’s when you make your fix, send out the pull request and landed. So understand it end to end before you put it into your main code, but as you’re trying to figure it out, if you know what the problem is, you would’ve fixed it already. So use any and all tools no matter how blunt or sharp at your disposal to get to the point of understanding.

**ANDREW:** A lot of our listeners – I don’t know how true this is. I guess I don’t really know but I think a lot of our listeners are relatively new. That’s sort of true of iOS developers as a whole. It’s a growing industry and so a fairly large percentage of people are new at this. I also teach brand new iOS developers so [crosstalk] I’m sort of conscious of it but I wonder, what are your thoughts about resources for getting better at debugging? I mean you can buy a book to learn how to write Swift, right, or to use some framework or whatever, but I don’t see a lot of books about how to do debugging.

**MARK:** Yeah, that is weird because it’s something that’s really teachable. So with new programmers of our mentoring, high school or any college grad or something, universal troubleshooting process is something I point them to and then just a lot of, “Hey, i have this problem. Let’s sit down, let’s work through it step by step.” And actually of all places, an electronic music production forum Slack channel, I met an individual from Brazil. He’s a kid learning Rails programming through an online service.

We were talking about debugging and his frustration with things. And I gave him my brief talk of the three buckets – of the three buckets that the bugs go into. What I call the five minute fix, you look at it and it’s like, “Oh, I’ve got a wrong parameter to NSLog. You just fix it and you go on.”

There’s the one hour to one day fix like, I couldn’t have an idea of what’s going on here. It may take me a little bit of leg work to figure it out. Then there’s the OMGWTF which is ‘this is completely shaking the foundations of my world; how could this be happening? How could this be happening to me of all people? Where am I going to start?’ And the thing is, when you’re starting up programming, everything is in that OMGWTF bucket. The bad parameter to NSLog – if you don’t know anything about [inaudible] functions, then you can’t look at this NSLog and realize you’re passing a floating point to a [inaudible] a string pointer. It takes a little while to get to that information.

So as you get more experience, the bugs move down the buckets so what was an OMGWTF last month is just a one hour or one day this month. And then the next month, it’s a five minute fix. The thing I like about that taxonomy is that it works even for those of us who have been in this game for a long time. So somebody who knows Objective-C inside and out and is learning Swift and is really struggling with it, [inaudible] brand new language, new paradigms. The compiler [inaudible] sometimes, sometimes it’s not so you don’t have the experience. Everything is an OMGWTF so it will just take you extra stress and time to work through it, but you get more experience and things click down into the easier buckets as you go on.

**ANDREW:** Yeah. And I might add that for Swift in particular, there’s been the additional complication of the tools being brand new and so it’s getting better every release, but compiler would crash a lot and you think, well, my fault? I don’t really know. [Chuckles] Often, it was not. Much more often than in Objective-C.

**MARK:** [Crosstalk] functionality is reduced.

**ANDREW:** Yeah, right. Well, and even worse than that, I still in the last couple of weeks of, maybe once or twice, get into a bug where some code just crashed the compiler outright; not even source kit but just crashed the actual compiler and I rearranged things and got it to work.

**MARK:** Yeah, if you’re brand new, hitting that kind of stuff is – no, you’ve got a massive amount of scar tissue compared to a brand new student. Rearranging code to appease the compiler crashing is not something that they would think of.

**ANDREW:** Right, it’s very hard to differentiate between things that are your fault and things that are the compiler’s fault. And of course, I think usually, the tendency among beginners is to be too quick to say that it is the compiler’s fault or [inaudible] fault or whatever, but even so, it does happen.

**MARK:** NSDictionary is broken. Probably not.

**ANDREW:** Yeah, probably not.

**MARK:** Yeah. I’ve got a friend, Eric Knapp, who teaches up in Madison, Wisconsin and he internalizes a lot of these [inaudible] principles of how to teach new adult programmers [inaudible] just coming from any college program, takes folks who have gone through other careers and they’re wanting a life change and going into programming and he teaches these folks. And the problem he sees over and over again with them with debugging is not focusing on a single bug. They [inaudible] around from two or three or four different problems in their code and never make any headway because they’re trying to solve four problems in parallel and human beings are not very good at anything parralelizable. So just being able to say one bug, stick with it until the conclusion; now pick the next one, have a list and a document. Have a piece of paper to keep track of what bugs there are.

So if you find yourself getting distracted of ‘okay, my loop counter’s wrong but maybe my numbered asterisks are printing out; I’m doing it wrong here’ so it’s like, okay, don’t do that. Just put a note, check asterisk printing function and then go back to your original problem.

**ANDREW:** Right. I’ve interacted with Eric a little bit on Twitter because I do some – I work on music apps for my job and do some MIDI stuff and that’s something he’s interested into but anyway, we should get him on the show.

**MARK:** Oh definitely. He’s a lot of fun to talk to. And if you ask him nicely, he might play his chapman stick for you.

**ANDREW:** I would love to hear that. I see him tweet about it but he’s the only person I know that plays one.

**MARK:** Yeah. I got to perform with him with James Dempsey and the Breakpoints at a couple of Cocoa Confs.

**ANDREW:** James Dempsey does a great job and I’ve been him but not with Eric there. Did he play his chapman stick?

**MARK:** Yeah, he had his chapman stick, his effects board and his laptop and it was amazing.

**ANDREW:** Oh wow. If there’s something I could emphasize – and I’ve tried to emphasize this to the people I teach but that is that debugging is not some skill apart from being a programmer; it’s a really vital skill. It’s part of being a programmer and so I think it could be a low hanging fruit to really improve your skill as a developer overall.

**MARK:** It’s fundamentally problem solving and problem solving comes in a lot of more useful places than debugging. Doing design, doing performance tuning, even day to day code. You’re doing problem solving absolutely all the time so as you get to be a better problem solver, you’re going to be a better debugger and you get to be a better developer overall.

**ANDREW:** Yeah, and I actually find that I use the debugger as part of my normal programing work flow a whole lot. Not just chasing bugs but I’m working out the details of an algorithm or something, often in the debugger doing stuff.

**MARK:** Yeah, I know some folks – I’ve tried it. I don’t have the attention span for it but before they [inaudible] new code or after they’ve written code is they single step absolutely every line of it and checking the variables and hovering over and saying – looking at the data display to make sure that everything is correct.

**ANDREW:** Yup. You’d be surprised how some of these slightly more advanced features in the debugger can be helpful even during regular development like that. Is there anything else you think we should touch on, Mark?

**MARK:** Nah, I think we’ve had a good run through the contents of my head.

**CHUCK:** Yeah, I don’t have anything to ask about or add either.

**ANDREW:** Nice. We didn’t talk a lot about iOS specific stuff so maybe we should do a follow up show because I think there’s a lot we could talk about, about instruments and some of the advanced LLDB stuff that we did touch on.

**MARK:** Oh and stochastic [inaudible] is one of my favorite names of using the debugger as a profiling tool.

**ANDREW:** So I saw you – you came to Salt Lake and spoke at Cocoa Heads. It’s been four or five years ago.

**MARK:** Yeah, four or five years, yeah. That was a great crowd there. Were you out there?

**ANDREW:** Yeah, I was.

**MARK:** Oh excellent.

**ANDREW:** And I remember you talking about that.

**CHUCK:** [Inaudible] don’t go anymore. [Chuckles]

**ANDREW:** Chuck’s here too and I actually met Chuck at Salt Lake Cocoa Heads so that’s why I’m on this show. Anyway, we could talk more about that but I think we’ve covered a lot of really food stuff.

**CHUCK:** Yup. Alright, well let’s hit some picks then. Andrew, do you have some picks for us?

**ANDREW:** I do. I had two picks and then I completely spaced one of them out so I guess it will get saved for another week when I remember it so I only have one. My pick is a – well, no, I do haven two. I just realized then, I’m going to make this two.

My first pick is a new podcast that I just found out about called Ludiphilia. Apparently, Ludiphilia mean solver of games or puzzles or something along those lines. But this is a new podcast by a guy named Richard Moss. It is a podcast about people – play, people and things and my introduction to it was actually an episode that came out just a couple of days ago where he talked all about manhole which is going to be my second pick.

Manhole was a game for the Mac that came out in the late eighties that was actually a hypecard stack, it was a HyperCard application and it was by Rand and Robyn Miller who were brothers that went on later to start Cyan and develop [inaudible] which for a while was the bestselling game of all time.

Anyway, he did a really great episode about manhole and what it meant to the history of computer games and how it lead to [inaudible] and these two brothers and how they developed it and how hypecard was a really important part of that. I found it absolutely fascinating and I played manhole when I was a kid. When I was three years old, my dad bought our first Mac. I don’t know how old I was but shortly thereafter, manhole came out and I played it a lot when I was a kid and it kind of viewed through the lens of my own nostalgia and my childhood as things do. It seems almost like a magical place even though now I know it was sort of the, by today’s standards, simple, black and white, HyperCard stack so it’s just something I love.

And I think that there’s a version for iOS out there now that’s updated with color and everything. So those are my picks – Ludiphilia and Manhole.

**CHUCK:** Awesome.

**MARK:** HyperCards – that’s a name I haven’t heard in a long, long time.

**CHUCK:** [Chuckles] Yeah.

**ANDREW:** Yeah.

**MARK:** Oh that was a magnificent piece offer.

**ANDREW:** It really was. That’s my introduction to programming. I didn’t know it was programming but I was playing around with it when I was literally five years old and can do stuff with I so it was a really cool thing.

**CHUCK:** Alright, I’ve got a couple of picks here. The first one is a book. It is Start With Why by Simon Sinek. I had it recommended tome a few months ago by somebody who was – we were just chatting about business. In fact, if you want to hear the char, we actually recorded it, put it on the freelancer show. I’m going to put a link to that in the show notes but yeah, we were talking. We kept talking about the why of the business and for me the business is the podcast and the online conferences. And I finally asked them; I was like I don’t know what my why is and he’s like, “Well, you have one and you act on it. You just don’t know what it is,” and then he recommended the book.

I’m almost done with it and so I will probably be able to narrow down a lot of the why and then get a little bit more focused on what we’re doing here with the show and things like that. So far, it’s been really an excellent book, an excellent read so I’m going to pick that. I had another pick but I can’t remember what it was so I’m just going to pass and we’ll let Mark do some picks.

**MARK:** Alright, well, I picked three of them. The first is from Plausible Labs – VoodooPad which is a wiki on the desktop. I actually used it a lot in – when I’m debugging something hard is that I can keep track of the conversation between the two voices in my head. One is asking questions and one is answering questions and kind of the Socratic question and answer, back and forth, I can track down bugs pretty effectively. Pretty much if I take notes on anything, it goes into a VoodooPad.

The next one is completely unrelated to anything we talked about but it’s my favorite image editor called Acorn. I’ve stopped using Photoshop. It’s very easily used, very powerful image editor plus it’s scriptable.

In a client project I was on, we were trying to get some third party designers to give us images that were masked that we could pour colors through and we couldn’t get to understand what we were talking about. It’s like, “Okay, give me your PDF of the blue bucket and green bucket and yellow bucket,” and I’ll use the script in VoodooPad to take the layers from this Photoshop document and splat them out into about thirty or forty individual PNG files [inaudible] for color masking in Core Graphics.

Then my last one is a suggestion to learn and learn deeply in old school text editor VI Emacs. I admit I’m a big Emacs [inaudible] or if your Mac style’s purely something like BBEdit, an old editor with a huge amount of functionality, the depths of which you may not be able to fathom why features are there, much less what you could use them for. But as you live inside of a very powerful editor, you can do things that you cannot do in – this is my IDE, all you can do is edit Objective-C and Swift code, there have been times when I have been editing Swift, Objective-C, our Big Nerd Ranch documents are done with doc books, XML markup, have shells running. I’ve got some shell scripting so make sure you [inaudible] some Python all running within a single editor instance.

What’s really nice is these editors are bullet proof. I can have an Emacs systems running and use it heavily daily and have it running for months. Imagine Xcode running for more than two or three days. So these old school editors pack a lot of power once you learn the macro systems or the regular expression systems. You can do things with a couple of keystrokes which would take a lot of pointing and clicking inside of something like Xcode.

**ANDREW:** I like those picks. My favorite thing about Acorn besides that it’s a really great image editor is that it’s a serious competitor to Photoshop and it’s developed by one guy.

**MARK:** One guy, [inaudible].

**ANDREW:** Yeah.

**MARK:** He’s awesome. Actually, Gus did the original version of VoodooPad also before he sold it to Plausible Labs.

**ANDREW:** Yeah, I think Acorn got successful enough, he couldn’t really do both. It’s what it seemed like to me anyway.

**MARK:** Yeah.

**ANDREW:** Now it’s with some really smart people at Plausible Labs including Mike Ash.

**MARK:** Yeah, Mike Ash. Actually, Mike Ash was the one who introduced me to VoodooPad because Mike uses it for everything.

**ANDREW:** Mike was on the show for a while as a panellist and has been a guest before, too.

**MARK:** Oh excellent.

**ANDREW:** So we know Mike.

**CHUCK:** Yup.

**MARK:** Mike is awesome.

**CHUCK:** Alright, well let’s go ahead and wrap up the show. If people want to look at what you’re working on these days, Mark, what are the best places to go?

**MARK:** Probably the best would be on The Big Nerd Ranch blog. I regularly do blogging there. And pretty much most of my social media is usually just complaining about Xcode. Luckily, that’s fairly easy to do but if there’s really anything interesting, I’ll put it on my twitter feed @borkware.

**CHUCK:** Awesome. Well, we’ll go ahead and wrap this show up. Thanks again for coming.

**MARK:** Oh my pleasure.

**ANDREW:** Thanks Mark.

**CHUCK:** Yeah, thanks Mark.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
