---
layout: layouts/post.njk
title: >
  153 iPS Using Mobile Devices to Manage Diabetes with Scott Hanselman
date: 2016-05-19 07:00:27
episode_number: 153
duration: 54:11
audio_url: https://media.devchat.tv/iphreaks/iPS153DiabetesAndMobile.mp3?rss=true
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:06 - Scott Hanselman Introduction

- [Twitter](https://twitter.com/shanselman)
- [GitHub](https://github.com/shanselman)
- [Blog](http://www.hanselman.com/)
- [Hanselminutes](http://hanselminutes.com/)
- [This Developer's Life](http://thisdeveloperslife.com/)
  02:23 - Managing Diabetes
- [American Diabetes Association](http://www.diabetes.org/)
  13:14 - [“Closed-Loop” System](http://www.diabetes.org/research-and-practice/patient-access-to-research/closed-loop-system-can.html)
- [Dexcom Continuous Glucose Monitoring (CGM)](http://www.dexcom.com/)
  20:16 - [OpenAPS](https://openaps.org/)23:00 - Monitoring26:37 - The Current State of Systems28:44 - What can people do now?
- [openaps](https://github.com/openaps)
  34:56 - The Future
- [Bigfoot Biomedical](http://www.bigfootbiomedical.com/)
  37:37 - Wearing Devices
- [Scott Hanselman: Hacking Diabetes](http://www.hanselman.com/blog/HackingDiabetes.aspx)
  Picks
- Reading Papers (Andrew)
- [Diabetes Light](http://diabeteslight.com/) (Jaim)
- [Diabetes Light: My holistic journey to health (Facebook)](https://www.facebook.com/Diabetes-Light-My-holistic-journey-to-health-188813974545664/) (Jaim)
- [The Essential Prince Reading List](https://www.buzzfeed.com/doree/the-most-powerful-writing-about-prince#.xjXagrOnL) (Jaim)
- [Jimmy Jam and Terry Lewis have become synonymous with recording excellence](http://waxpoetics.com/features/articles/jimmy-jam-interview/) (Jaim)
- [The Primal Blueprint](https://www.primalblueprint.com/) (Chuck)
- [Mark’s Daily Apple](http://www.marksdailyapple.com/) (Chuck)
- [Chatting with Prince on AOL in 1999](https://medium.com/@shanselman/chatting-with-prince-on-aol-in-1999-23bb540fc47#.hftmtjsyh) (Scott)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 153 of the iPhreaks Show. This week on our panel we have Andrew Madsen.

**ANDREW:** Hello from Salt Lake City.

**CHUCK:** Jaim Zuber.

**JAIM:** Day 6, the doves are still crying in Minneapolis.

**CHUCK:** I’m Charles Max Wood from Devchat.tv and this week we have a special guest, Scott Hanselman.

**SCOTT:** Hey, hey, hey.

**CHUCK:** You want to quickly introduce yourself?

**SCOTT:** I’m Scott Hanselman.

**CHUCK:** That was quick.

**ANDREW:** No introduction [laughs].

**SCOTT:** No. I’m a developer. I’ve been blogging for 15 years. I got a couple of podcast as well. People can go out and google for Scott and they will find the toilet paper people— Scott toilet paper. They can scroll down and I’m below the toilet paper people.

[Chuckles]

**SCOTT:** I’m in an epic battle right now.

**CHUCK:** That’s pretty good [crosstalk].

**SCOTT:** Where it’s not toilet tissues so anything you can do to help me with that would be appreciated.

**CHUCK:** Nice.

**JAIM:** Put links on the show notes. That will put you over the top.

**SCOTT:** Yeah, just make sure that anytime my— anytime the name, Scott appears you need to link it to my blog and that will help me defeat Scott tissue.

[Chuckles]

**CHUCK:** I just googled Scott and Scott toilet paper is not the first hit for me.

**SCOTT:** No it’s Scott sports or Scott fly rods. I go around and around with them. They’re fighting with me and the Scott toilet paper people have been putting ads now at the top. Pretty obnoxious.

**CHUCK:** Yeah. I’ve listened to a few episodes of Hanselminutes and I’ve heard you on other podcasts. It’s [inaudible] you do—.

**SCOTT:** It’s a developer’s life and Hanselminutes has been going on now for 500 and something episodes [crosstalk].

**CHUCK:** Yeah, a lot of great stuff there. I’ve really enjoyed what I listen to. I do pick and choose, though. I’ll admit that.

**SCOTT:** Yeah, 524 episodes over the last 10+ years.

**CHUCK:** Wow! So the topic for today is using mobile technology to help manage Diabetes. I’m really curious. So I’m Type II diabetic. I think before the call, we went around the horn. We all either know people or live with people that have Type I or Type II Diabetes. I’m curious, though, for me as a Type II diabetic, mostly what I’m doing is I check my blood sugar then I just make sure I eat right and exercise periodically. But I understand that for Type I people, they monitor things much more closely and have things like insulin pumps and stuff like that, that they have to deal with. It’s something I’m not as familiar with so I’m wondering, what aspects of this have you been tackling with your— I don’t know if it’s a hobby project or something that somebody is paying you to work on or what. &nbsp; &nbsp;

**SCOTT:** No. No, so tackling those things one at a time.

Yeah, Type I and Type II are very, very different. They are similar only and that they’re sugar and food and diet related. There were those that argue that they should be named something else because they’re so fundamentally different.

Type I diabetics produce no insulin. I have to get all my insulin externally. I have a pump that delivers it into me. I could also take shots if I felt like it.

Type IIs are either resistant to their own insulin or perhaps not producing enough for a variety of reasons. Some genetics, some lifestyle but arguably many Type IIs can eat right and work out and maybe take a pill. For the most part it can be managed. If you die with Type II, you’re going to die over a long period of time. You’re not going to just drop. Type I, you can have a low blood sugar and go unconscious or you can have a high blood sugar for many, many months and lose your kidneys and your feet and your eyes all that kind of gross stuff. It’s definitely a yucky way to die.

So Type I’s tend to manage it a little more tightly and by management, they are paying attention to their altimeter and there’s stirring and their fuel and all of the things one would have to manage when you’re like flying at an airplane. We’re managing that stuff multiple times a day. Even in the last ten minutes as we’ve been sitting here, I’ve been dealing with a little bit of a high blood sugar. I’m at 150 right now and it’s floating up a little bit. I don’t like it so I’m been trying to deal with that but at the same time I don’t want to have a low blood sugar as I’m sitting here with you all so I don’t want to take too much— so I’m doing a little bit of a dance and you can hear that beep just then. That was my insulin pump as I gave myself a unit and a half of insulin that could have tap that down. So I made a small altitude adjustment just as we’re speaking here. That is something that we do 30-40 times a day.

**CHUCK:** That’s interesting.

**ANDREW:** I’d like to step back a little because, of course, this is something people have been dealing with for a long time.

**SCOTT:** Yeah.

**ANDREW:** You’re talking about a pump and you can hear beeps and clicks. I’m sure that wasn’t happening 30 or 40 or 50 years ago. So how are things—?

**SCOTT:** So 20 years ago [crosstalk] — yeah, 20 years ago, I was using needles. I was pricking my finger and I was checking my blood sugar. That be the whole blood with a glucose meter that was portable. I would prick my finger and I would put it on a piece of paper and that paper would turn a color of blue and a deeper blue meant that I have more sugar in my blood. Then there was a little sensor that would look at that color of blue and the darker the blue, the more sugar was in my system. They would give me a very, very rough idea.

20 years before that, people would go into bathroom and pee on a stick. They would look on the stick and they’d say, “Wow. That’s a really bright orange. That must mean I have a lot of sugar in my system.” It was extremely inaccurate and rather than using disposable needles, they used one or two real needles that they would then boil to sterilize but today, we use reconstituted recombinant DNA human insulin. Before, they would use insulin that was pulled out of beef or pigs. So yeah, things have come a long way.

I have a little pager— it looks like a little pager with a tube and that prevents me from having to take multiple shots a day. Then, also, when I check my blood sugar with my finger, it takes 5 seconds instead of a minute. I also have a thing called a Continuous Glucose Meter or continuous CGM which is plugged in to my arm right now. It could be plugged in to anything. It’s a battery and it has Bluetooth. It talks to my phone. It tells me and whoever else I want, my blood sugar.

So for example, right here, as we are sitting here, it just said, “High glucose alert.” I’m 150 and then in [inaudible] says “sensor session ends at 5 o’clock”. So it’s telling me that after my three or four days that I’ve had this sensor in, it’s going to end at 5 o’clock today then I have to go and unplug it and plug a new one in. I’ve got a chart here that shows my blood sugar over time. It’s just a little bit higher than I want it to be. It’s not bad but it’s just not making me happy so I’m making some small adjustments.

Typically, though, if you’re in the old days, you would make much more gross adjustments and you do it over a longer period of time. You would spend hours not knowing what your blood sugar was, just flying in the clouds without really being clear. You could be 200, you could be a hundred. You don’t really know.

**CHUCK:** Yeah. That’s how I fly with my blood sugar as I monitor it. I just have a glucose meter; I don’t have a continuous check on it. So I’ll prick my finger, put it into the glucose meter and it tells me what my blood sugar is. Then, sometime later on in the day, if I’m feeling low energy or I feel like blood sugar’s high because depending on how that works, I can generally feel where I’m at. I couldn’t put a number on it but [crosstalk] it’s higher than normal or not.

**SCOTT:** So people— I’m going to— so I’m going to talk about that for a second— so people say that, “I’ve been diabetic for 25 years.” People say that they can feel when they’re high. I know that I can feel that something’s wrong.

**CHUCK:** That’s probably a better way.

**SCOTT:** But I can’t tell you if I’m 200 right now or 150 because your numbers that— in the US, we have one model— milligrams per deciliter of blood – mg/dl. Overseas, they use mm/ol – over meters. But additionally, it bothers me as a diabetic when I hear other diabetics, Type II or otherwise say that, “I really know what my blood sugar is right now.” That just bugs me. In my opinion, it might be a control freak thing, it might be because I’m old, it might be because I’ve been doing this for a very long time but now, I desperately want to know what you’re blood sugar is Charles, because now, we’re going to take action, right? So what happens is, an hour goes by, that’s fine. 2 or 3 hours but if you haven’t checked your blood sugar in 4 hours, you could be marinating.

**CHUCK:** That’s true [crosstalk].

**SCOTT:** In your own sugar which then, causes all sorts of untold damage. So it makes me worry about stuffs. So I would encourage everyone who can afford it because it’s about a dollar every time you check your blood sugar with a prick.

**CHUCK:** Yes.

**SCOTT:** To check your blood sugar at least every 4 hours regardless if Type I or Type II if you can afford it. I would also encourage diabetics who know other diabetics and I bet that Jaim would agree with me, is that we have test strips in the closets that we haven’t used yet. So while insurance companies have issues and we can have a whole discussion about the health care system. You probably have diabetic friends have extra test strips that would give them to you. I have extra test strips that if there’s a neighbor who needs them, I would give them a couple hundred if I find that they’re not checking their blood sugar. So we, as a community can get together in not cosmetical ways by not giving some of these things away.

Now, I’m not a doctor and that’s not legal but if you’re using the same meters I’m using, I’ll give you some of my strips, for real.

**CHUCK:** Yeah, you’re right. I should be checking it more often. There’s not really a good reason why I don’t, to be perfectly honest.

**SCOTT:** It’s complacency.

**CHUCK:** Yeah [crosstalk].

**SCOTT:** Because and this is the thing that’s so nasty about diabetes is that let’s say, I don’t know whether your diabetes is well controlled or not. Here’s the deal, even if they give you a blood test, you don’t know if your diabetes is well controlled or not. Let’s say, they give you a blood test that says, “Yeah. You’re doing great Charles. Good job.” Then you have a stroke tomorrow. Wow, guess it wasn’t as well controlled as we thought.

**CHUCK:** Yeah.

**SCOTT:** Or talk to me in 20 years. Let’s see if Scott and Charles will have their feet.

**CHUCK:** Yup.

**SCOTT:** Then, go back to 2016 and go, “Man remember that day that we had that podcast, I guess his blood sugar was bad.” It’s one of those things where it’s such an insidious thing. I don’t even know if I’m doing a good job, yet.

**CHUCK:** Yeah.

**SCOTT:** I’m still vertical. But I don’t know.

**CHUCK:** Well into your point that I can feel that something is wrong, most of the time I feel fine whether or not something is wrong but on occasion I feel, “Okay. I feel my blood sugar rising.” Or I feel that something is getting worse and when it’s super low, I can definitely tell that that’s the case.

**SCOTT:** Yeah. So low is easy. Low is like driving a car with an empty fuel tank. You can almost feel the crud under the bottom of the gas tank starting to get kicked up and you feel the bubbles or the air in the tubing and you’re just, “I’m not getting enough power to my brain.”

**CHUCK:** Yup.

**SCOTT:** Right now I don’t know what’s going on. I feel something wrong in my mouth. I feel there’s just a little bit too much sugar behind my eyes. Just a sense of—it’s something ain’t get right. So and again, I’m only at 150 but I like to run it a hundred so I know it’s wrong. As we’re sitting here, it’s just creeping up. Now I just went to 161. The goal is to be under 120. Some people would be more draconian and would say, “Just stay under a hundred.” Because the idea is, that I’m trying to simulate being a normal, non-diabetic.

**JAIM:** So what would be a normal range for someone without diabetes?

**SCOTT:** Someone without diabetes, fasting would probably be 80 milligrams of glucose per deciliter of blood. You might have a pizza and if you ever got up past 150 and stayed there, that would be unusual. I’ve seen non-diabetics go to 150 for 10-15 minutes. Then, their bodies go, “Hey, that’s was a big ol’ pizza.” Then you get insulin. The trick is and the big insidious aspect of things is that you produce insulin from the inside of your body. You release that inside your body and it happens instantly so then your blood sugar doesn’t stay up.

I don’t have a way to get it into me correctly. I can’t really inject it into my veins. So I have to inject it into the fat which causes it then to absorb slowly. So If I’m taking [inaudible] when I took that insulin right there, I get to wait for an hour before it does anything. So you’re constantly chasing your tail and chasing time. It’s like you move a joystick and then the Mars lander moves 15 minutes later then you wait to see if it worked. It’s this constant time dilation frustration which is why when you hear— you explain this stuff to non-diabetics and they go, “Why don’t they just do this?” [Laughs] “Why don’t they just do that or this time dilation?”

When I look at my blood sugar on my finger, that’s the past 30 minutes ago or 15 minutes ago. If I take insulin, that’s an hour— happens for an hour from now. What if I have to go for a jog or if there’s an emergency? What if I have to take off running right now? I’m probably going to have a low blood sugar. What about lunch? How long do I have to do this podcast? Can I go have lunch with my wife in half an hour? Should I be taking insulin in anticipation of lunch? What if the place I go for lunch is close? Then I’m going to die in the parking lot like, “Oh, sandwiches.” There are so many variables. It’s really hard to close the loop.

**ANDREW:** I know this is something, though, that’s been worked on. So you just describe some of the problems to make it so even with the best we have right now, somebody with especially Type I diabetes can’t really regulate things the way somebody that’s not diabetic can.

But there’s work on— I’ve heard the term Closed-Loop Systems so where you got— as I understand it, you’ve got a Continuous Glucose Monitor, monitoring your blood sugar and it directly controls a pump that’s supplying insulin.

**SCOTT:** So that’s the Holy Grail. That’s the goal— the Closed-Loop Systems. [Inaudible] They-don’t- do-anything-and-you’ll-be-fine-system.

The open loop is what I have right now and I am the one that closes it. So I look at my sensor or I checked my blood sugar – it just went from 157 to 161 so it’s climbing ever so gently but I’m concerned about it. Now I look at my pump; these two things don’t talk to each other. One is read-only and one is write-only. I look at my pump and it says, “I have five units active.” That means that I’ve given myself 5 units over the last few hours and it has yet to be absorbed because there’s what they call a decay curve. If I give myself 10 units of insulin, the first hour, I’ll get 5 of that. Then with an hour after that, I’ll a unit or two. In an hour after that, I’ll get a unit or two and the curve goes off.

So if I take 10 units of insulin right now, 2 or 3 hours from now, there’s still a little bit in on board waiting to be absorbed by the system. Not to mention, is it good insulin? Has it been out of the fridge too long? Then I get a good place to inject it to myself, is it bleeding? Or is there a kink in the table? In the tubing? All those different things that is similar to mechanical things that can go wrong. But the loop is, me going “Well, I got— let me see here— I got five units pending; I got 161.” It says that it’s mostly flat. Will I spike up or will I crash? But I also know that we’re going to be done in a half an hour and I’m going to go have lunch. So I’m giving myself more insulin than I need in anticipation of eating in the next 30 minutes because I don’t want to enter lunch high because then, I’ll just continue going higher. Does that make sense?

That’s a lot of decision points all happening within a few seconds. The Closed-Loop Systems would look at that 161 – I just became 166 so I am floating up. I feel like a balloon as we’re sitting here. It would look at that 166 and say, “I’m going to need to crank him up a little bit.” So it’s going to turn the background volume up. It’s not going to deliver insulin to me as in its going to keep the background amount then raise it up a bit like turning up white noise. So I’m going to give myself a little bit more. This again is what I’m doing here— people maybe be listening, “Wow! He’s given himself insulin 3 times.” I know what I’m doing. Trust me.

Everyone’s different. I make little tiny changes all day— a unit here, a unit there. Other people might take a shot a day or two shots a day. Everyone’s different. But I believe as when you’re driving a car, you’re try staying on the lines. You’re not going to make dramatic turn left, turn right, turn left, turn right to go straight. You make constant little tiny movements on the steering wheel. Stay within the lines. Does that make sense? So I’m doing that myself. And for the most part, my blood is at non-diabetic level so if you look at my – it’s called my Hemoglobin A1C which is the measurement of your blood sugar level over 3 months. It’s how you’re doing over the last quarter of the year. Mine is 5.5. A normal— non-diabetics are between four and six and diabetics are asked to stay below seven. That’s to prevent long term problems. So I’m fine; what I’m doing is a little bit weird with all the checking and stuff. It works for me. If whatever you do, works for you, whoever is listening then keep it up.

**CHUCK:** Yeah. I’ll tell you, I do the two shots per day but I’m really curious about being a little bit more fine-tuned with a lot of it.

**SCOTT:** Did you check your blood sugar?

**CHUCK:** No, I didn’t. My monitor’s in the other room. I am curious, though— first of all, the thing you have on your arm? What is that? I’m really curious.

**SCOTT:** So it’s called a CGM and it’s for— the one I’m using is from a company called Dexcom. There are many different CGMs but the main ones are either Dexcom or Medtronic. This particular one is a battery that has a metal cannula that is about an inch into my arm. It’s looking at the interstitial fluid that’s running in my system in between the tissues and it’s putting a little bit of electricity in there and looking at the resistance of that and getting a sense of a number. Then it guesses what your blood sugar is because I will check my actual blood sugar and I will draw a correlation between the interstitial fluid and the blood glucose. So it doesn’t actually know my blood sugar but it knows that there is a direct correlation between the sugar that’s floating around in the interstitial fluid and whole blood sugar.

**CHUCK:** What are the obstacles to having a closed loop systems that actually works?

**SCOTT:** The companies that make the pumps and the sensors for the CGMs are pretty paranoid about the safety particularly on young people. A number of years ago, someone was able to tell a pump to deliver insulin remotely which was funny because pumps could do that before. They literally have remote controls. You can buy a remote control for your pump but if one could learn the serial number of a pump, one could cause that pump to deliver too much insulin remotely then potentially assassinate somebody who is a diabetic if you could get within a certain number of feet of them.

**JAIM:** Somewhat similar to a self-driving car. You could create a self-driving car that got self around it track but you wouldn’t put on a road because there are so many things that could go wrong.

**SCOTT:** But then, of course, they are doing that, right? So Tesla did it and interestingly did it without asking permission. But I think the difference between diabetes and self-driving cars is that people want self-driving cars and diabetics are too small of a constituency to insist that we do this. It’s a multi-billion dollar business and for them to push the limits – like if there was an accident with the self-driving car tomorrow; there’d be someone in congress the next day trying to explain this. It would probably set self-driving cars back. It would set— Tesla would be forced to shut off all of their self-driving cars and remotely tell them to stop and would be – would have a big meeting about how self-driving cars kill people. If a company came up with Closed-Loop System, and someone died, God forbid, to someone small, then it’s going to ruin it for everybody.

So the Closed-Loop System right now is very, very conservative. They are in clinical trials and there is an open source Closed-Loop System called the open APS that is extremely technical and non-trivial to set up. Also, extremely conservative but also makes the very clear point that it’s not for kids and if it is, you’re on your own. If it’s for adults, you’re on your own. If you hurt yourself, you’re on your own. It’s not a download file and run it thing. It’s an expression of a loop print for a theoretical one then you would have to and hunt down the pieces you want and build it. Does that make sense?

**JAIM:** Yeah, definitely.

**SCOTT:** They’re trying to protect people from themselves as well as make sure that they’re in compliance with the FDA.

**CHUCK:** Before the show started you showed us a little bit of what you’re working on. Can you tell us about that?

**SCOTT:** So there’s a woman named Dana Louise and her husband’s Scott Le Grand along with some innovators in the space like Benjamin West who have a thing called open APS or the open artificial pancreas system. It is not an artificial pancreas but basically you think about the problem – I’ve got a CGM. It’s this little iPad looking thing with my blood sugar on it that knows my blood sugar right now plus or minus some amount. Then I’ve got a pump that I keep having to pull out of my pocket and tell it stuff. If I had all of this historical data from my blood sugar and I can go back on this device 24 hours but I can also go back months and months. I’ve got a MongoDB database with a tool called Nightscout with all this stuff. Could we write something that sits between the two, pulls the data from the CGM from one company then tells the pump to make a subtle adjustment? So they have a system, they’ve got one built on an Intel Edison and they have a model built on a Raspberry Pi. Right now I’m using a Raspberry Pi and in this case, we’re using it as a tiny computer.

So my blood sugar goes from the sensor on my arm over to my phone via Bluetooth then up into the Cloud and goes into a Mongo database. The Raspberry Pi pulls it from the Cloud, brings it down locally, looks at the curve, thinks about what it knows about me like how sensitive I am to insulin, how sensitive I am to food, how I’ve been lately, how I’m— the direction that I’m going, logarithmic trend lines, math, math, math. Then uses a USB adapter to speak RF – radio frequency – to the pump and make an adjustment. However, there are varying versions of pumps.

There is the pump before the hacker poked around made it – ruined it for everybody. Then there’s the pump afterwards. So these kinds of hacks only work on the old pumps that are hard to find. It’s still a useful thing even if you don’t have one of these pumps because it gives you charts and graphs and insight that you just can’t get anywhere else. So you don’t have to make a Closed-Loop; you can make a darn near closed loop where you just need to acknowledge something. Or if you just want sensor; you want the ability to share your blood sugar, you can buy a Dexcom and without having to do any open source software or any tinkering, I can share this— my blood sugar with my wife and she can see my blood sugar remotely.

So I was in Peru the day after yesterday and she was watching my blood sugar from down there so she could text me and say, “Hey, is everything okay?” I was, “Yeah, Peruvian food.” It gives you a closeness and sense of safety net even though your thousands of miles away.

**ANDREW:** That’s really interesting. I have quite a few family members that have Type I Diabetes. I don’t have it myself but— so it’s something that I’ve been close to knowing my whole life. On several occasions, people that I know and love have had reactions when they were alone either in the middle of the night or just out on their own. Nothing horrible has happened but some things that could have been pretty scary.

**SCOTT:** Yeah [crosstalk]. Those things don’t happen anymore with Continuous Glucose Meters. It’s very, very unlikely that you would be— if you got blood sugar every 5 minutes, you wouldn’t— you hopefully would not see it sneak up on you. In the old days, I’ve been in a random hotel in Germany feeling pretty horrible because a low blood sugar snuck right up on. There could be one sneaking up on Charles right now, right?

**CHUCK:** Yes and I probably wouldn’t feel it, most of the time I don’t. Sometimes—.

**SCOTT:** You don’t feel it until you’re driving your car and then you hit the ditch. “Oh crap. Wow. I went right off the road. I wish it had those little bumps that go “dug, dug, dug” to tell you when your car’s gone off the road.”

**CHUCK:** Yeah, like I said before, sometimes I’ll eat something and I’ll be, “Oh wow, I can feel my blood sugar changing.” Or at least I think I can. But other times it’s, “Oh, why do I feel so awful?” Then I check my blood sugar and its’ 200 and I’m, “Oh! That’s why.” Or sometimes even higher but most of the time [crosstalk].

**SCOTT:** That’s what happens [crosstalk].

**CHUCK:** Yeah. So I like the idea of the Continuous Glucose Monitoring. I like the ideas behind maybe having a Closed-Loop System. With my diabetes being Type II and insulin resistance, I have been told that I can mitigate a lot of just by diet and exercise so that’s in my focus lately is getting it under control by doing more of those things. But it would be nice to have that feedback so it’s, “Hey when you eat a lunch like this, it does these things to you.” “When you eat a lunch like this then you’re not going to react to it the same way.”

**SCOTT:** Exactly.

**CHUCK:** I’m curious, we’ve been talking about this open loop and Closed-Loop systems and obviously my sample right really sucks but I’m really curious if you could build a system that did everything for you. So you have the Closed-Loop system maybe but let’s say you could add things to it or make it more responsive or something like that. What would the ideal system look like?

**SCOTT:** Oh, the ideal system I think would be implanted in your gut. It’d be refillable with a port like a car at a gas station and I wouldn’t ever think about it ever. I’d fill it up and I drive it around. That would be ideal. The reality is, I have to change the sensor every couple of days, every 3-6 days, 7 or 8. It depends but right it just warn me. Also, I need to check my actual blood sugar.

So for example, my blood sugar is going up for some reason. It just went up another 9. That doesn’t make any sense. So I’m now I’m starting to suspect that maybe the tube is clogged because I have currently an inordinate amount of insulin in me for what was not a complicated breakfast. So something is wrong with my delivery system and [inaudible] blood sugar is only 170 or so I feel a little sweaty. So I’m not feeling super positive right now. I like to keep it real tight so having it be high right of making me uncomfortable.

In a perfect world, I would never have to think about any of this stuff. But the problem is life happens. Food happens. Running happens. Sickness happens. A fever can make your blood sugar go high. Until we can make the delivery faster where I can take a shot and have it immediately take action. Right now, I’ve taken insulin 3 times while I’ve been sitting here. I still am not going to get this blood sugar down for another hour. But if I had the ability to have it happen internally in my body then I could have my blood sugar down in 5 minutes.

**JAIM:** So I wanted to talk a little bit about the systems you’re using to help close the loop. We’ve talked about that. You have to manage everything. One of the things we brought you on here to talk about was using the systems. Right now you’ve got two devices that you used that are developed by some medical company who had to go through massive rounds of— with the FDA to give something to you. We’re getting in a point where you can get information on your iPhone from somebody’s devices. I’d like to hear a little bit about the state of where we’re at. What’s working with these systems? What can be improved? Because our card developers, we have our head in code. We don’t really— we don’t have direct experience with what people go through when they’re use systems like this because diabetes is not the only thing that we can solve with the mobile app talking to medical devices.

**SCOTT:** It’s the combination of the companies moving slowly be conservative and the FDA making it complicated to be conservative. The whole idea is you don’t want actually kill anybody with the software bug so I appreciate it that they’re being conservative. But it’s hard to get my data – my blood sugar – off of this device. It is hard because I need to use their Bluetooth magic or I need to use a USB cable. They don’t publish their specifications; I have to decode the data. If there was simply an API, an open API that I could call to get my blood sugar, then cool. Problem solved. If there was a simple API, a secure API for me to talk to my insulin pump, awesome. But about half of the time that is spent on this software is fighting with devices that do not want you to talk to them.

I could understand the perspective of the healthcare companies; they don’t want you to hack onto your devices because they don’t want you to hurt yourself. They guarantee a level of service and they don’t want you to tell any issues at all and I respect that. But I feel there should be a difference between an automatic car and a manual drive. There should be a way to switch the car into manual and say click a button. I respect that I’m off the beaten path right now and I want to do it this way.

So open APIs. That is the number one issue, I think right now for hardware.

**ANDREW:** Do you think there are opportunities right now, though, for developers. Most of our audiences, of course, are iOS developers where I think there’s a lot of potential but maybe—what could people do now?

**SCOTT:** Well, there is work happening and dozens of GitHub repositories if you go and just search around for open APS. There are different work streams where people are talking about different things. So for example, the logic that is happening in this Raspberry Pi, think about what that Raspberry Pi does. It talks to the end point that gets me the blood sugar. Then, it talks RF to this little device that talks to the pump. Well, arguably, this is just the fore loop. We’re using an entire Raspberry Pi for fore loop? It’s not really a fore loop. It’s a Python app with some significant brains in it but why couldn’t that brains be in an iOS app running in the background? Then that could go and talk to the device remotely and then push to another thing that would then update the pump.

Well, so that’s a real problem with iOS. These background processes in iOS get pushed out with memory pressure very often. So for example, this blood sugar application that I use gets pushed out of memory all the time. This is flagship. This is the 6+. I don’t have the 6S+ or 6+S. So I get a giga RAM. All I have to do is open one game like Angry Birds and then my mission critical background application that manages my blood sugar just gets closed. I should be able to indicate that this is a mission critical background application that cannot be closed.

So there’s couple of things that could happen. iOS developers could jump in and help the open source projects; we’ve got chat rooms on Gitter and stuff. But also, iOS needs to think about the difference between being a pocket super computer with more than one use. It’s not just for Facebook and pictures of cats. It could potentially be a bridge for medical devices but you have to have a way to say, “This is a privileged process that cannot be closed.” Or if it does get closed, it gets restarted. I have to open this app a half dozen times a day to make sure it doesn’t get ejected from memory.&nbsp;

**ANDREW:** That’s really interesting. It’s not something I had thought about. I hope – Apple seems pretty focused on health and medical applications for iOS. They’ve got ResearchKit and CareKit which are open source projects that they’ve done.

**SCOTT:** Yeah. I disagree. They came out and they talked about HealthKit but other than turning on all of the switches and sending stuff off to HealthKit, what would have you done with it since then? Is there a website I can log in to, to see all my health data?

**ANDREW:** So at least publicly, they claim to care about it but sounds like there still quite a bit of room to grow. [Crosstalk]

**SCOTT:** I’m asking you. Where do I log in to HealthKit and see all of my personal data?

**CHUCK:** [Crosstalk] but that’s it. Yeah. I’ve dealt with the same thing. It’s like, okay, well, I entered this information into some app and it sent the information back to HealthKit but if I’m not on my iPhone or iPad, I don’t really have a good way of evaluating how well I’m doing.

**SCOTT:** Right. I don’t see a really clear API for me to go and look at this stuff. Even now if I open up the help application, I see steps. I see some— from weird looking orange charts but I only get bar charts.

Let’s get to health data vitals. I’m looking for glucose. Here we go. Blood glucose show on dashboard. So I went to ‘blood glucose show on dashboard’ and I went over to the dashboard. I remember correctly, this is not meant for real time so it’s 6 hours late. So I see my— or 3 hours late— I see my blood sugar from 8, this morning. I see a fairly simplistic chart showing my blood sugar in a range and an option to show it on the dashboard. If I click show all data, I literally just get a list box. So it’s a secure storage for my blood sugar but that’s about it. What else can I do about this?

**CHUCK:** So the thing that I’m wondering then is, is there a way forward from here? You’re hacking together something with the Raspberry Pi. You and I— we could probably [inaudible] our way through that. I think, I could pick up enough Python to write a script similar to yours.

**SCOTT:** It’s not mine, to be clear. The open APS project is a whole bunch of people. It’s not just a script. It’s a non-trivial kind of work.

**CHUCK:** Okay.

**SCOTT:** But it’s just data, right? It’s just a list of data, computations, JSON. I’m not trying to simplify it. But at the same time, it’s not rocket surgery.

**CHUCK:** Right. All I’m saying is that even if I wanted to do it myself, I could have it pull in data, munch data and send data backup. If there’s [crosstalk] more to it than that, then terrific!

**SCOTT:** Every diabetic when they become diabetic, if they are also an engineer, the first thing they want to do is figure how they want to get their data out. That’s— the standard thing. In about 25 years ago, first thing I did, was hook up a serial port, so a bunch of hacking, wrote some code, made CSV file and stuck it into Excel. That’s like the classic— “I just got diagnosed diabetic. What’s going to happen? I’m going to die. Let me see if I can solve this with Excel.”

**CHUCK:** Uh-hm [crosstalk].

**SCOTT:** Everyone does that. [Chuckles]

**SCOTT:** This is just—.

**CHUCK:** Yeah [crosstalk]. Then I gave up and said, “There’s got to be a better way.”

**SCOTT:** Yeah. What they’re doing now with folks like John Costik and Benjamin West and Dana and Scott and JC [inaudible] are all doing which is plugging all these different Lego pieces together and trying to figure out and there’s like six different ways to do this.

I’m using this thing called a care link stick to talk to the pump but there’s a TI USB stick and someone’s trying that. I’m going to put together a Raspberry Pi system; it’s probably going to be about the size of – probably a good fat hand. It’s not small. But there are also people who’ve got them shoved in to a Tic Tac box because they know more about electronics. They’re like, “Well, I don’t really need this. I don’t really need that. I don’t need this.” I can get away without the Wi-Fi. I can get away without the keyboard. I have a better way to do the— I have to figure how to power this thing by a battery. I haven’t figured that part out yet.

So there’s all sorts of interesting work where people are scouring sites like SparkFun and Adafruit. There’s a lot of really lot of promising work happening right now with the Intel Edison which is a very low power device. So my battery can run the Raspberry Pi for six hours or the Intel Edison for 30 so things like that. There’s lots of work to be done but it all comes down to how hard it is to get the data out of these different devices. Every pump is different; every CGM is different.

**CHUCK:** So do you see this getting to the point where there are going to be options that you don’ have to engineer yourself within the next five, ten, 20 years?

**SCOTT:** Yeah, I do. The one that I think is the most promising right now is a company called Bigfoot Biomedical. They have a working, fully functional automated Closed-Loop System. Then they’re working right now to bring that to market. That’s Lane Desborough – is a hacker who worked on Nightscout and is now gone off and done this. He used to be the chief engineer at Medtronic which is the pump manufacturer. Most of this people are driven by either diabetes themselves or their kids are diabetic. Then, for kid becomes diabetic, people really jump in; that’s when you dedicate your life to it.

**CHUCK:** Yeah. Well, and there are two reasons for that one is obviously you care about your kids. The other thing is, is managing the diabetes. You’re training your kids to do it but ultimately at least for a while, most of the parents that I know that have Type I diabetic kids, under the around the age of 10, they weren’t managing a lot of it until they take responsibility for it.

**SCOTT:** Yeah. There’s a morbid— not a morbid joke, but a joke like, there’s three kinds of diabetics— Type I, Type II and then the parents.

**CHUCK:** Well, the other thing is, is that the consequences you’ve pointed out but my dad is about 25 years further down the road than I am with this. He’s lost three or four toes. He’s had his kidney give out on him. He’s on dialysis right now actually.

**SCOTT:** I’m sorry to hear that.

**CHUCK:** He’s got arthritis that a lot of that stems from the Diabetes. As far as I knew he was managing it but apparently not well enough.

**SCOTT:** So yeah. That is really unfortunate to hear. When we hear stories like that, it’s difficult to decide what to do. But honestly, you need to check your blood sugar.

**CHUCK:** Yeah. The only thing that I can do at this point, I drive him to dialysis periodically when my mom can’t but [crosstalk] take care of me [crosstalk].

**SCOTT:** This is going back in time – 20 years ago, you figured he was managing it. Then it turns out, tragically he was not but you didn’t find out until 22 years too late.

**CHUCK:** Yeah. But it’s not 22 years— it’s not 20 years too late for me.

**SCOTT:** Exactly. So your A1C needs to be under six.

**CHUCK:** Yup. That’s what I’m working on now. It’s become— the major focus this year is my health. But I never got into the habit of checking my blood sugar so I haven’t worried about it since then. But now that you mentioned it – then it’s funny how you don’t think any of these things on your own but when somebody brings it up and it’s like, “That’s so obvious.” So for me, it’s, “Oh, well if I’m going manage this, I need to measure it.”

**SCOTT:** Yup.

**JAIM:** So you talked about some frustrations with access to data. I’d like to talk a little bit about the data experience of wearing these devices. Are they beeping at you all the time? Do you track notifications? What is the right way to notify and how do you know if you’re doing too much because a developer will just set up a notification— a push notification for everything. Anything happens [inaudible] out.

**SCOTT:** So there’s all sorts of configurable notifications. So for example, every notification is snooze-able. So if I get a high – a high blood sugar – I can say— I can click okay and say, “Alright. Cool. I got it. Don’t bother me for 15 minutes.” That’s an implied snooze by hitting okay. But if it’s a low which is more urgent, which is more you’re going to die, then you might only have 5 minutes of snoozing. It’s going to become more insistent. Then there’s lows, then there’s urgent lows where it’s not going to shut up no matter what you do so it’s all contextual.

**JAIM:** Do this work this way out of the box? Did you have to figure this out yourself?

**SCOTT:** No, it all works out that way of the box. You can tweak it anyway that you want. It is more prescriptive than an iPhone. For example, I was sitting next to [inaudible] on a bus recently and he showed them that an iPhone had quiet hours. They had no idea. They were freaking out. They were like, “Game changer! Like I can tell the iPhone to be quiet from 11 pm until 8 pm? That’s amazing! I just turned it off.” I said, “Yeah. Also if someone who’s in your favorites calls you, it will ignore quiet hours. If someone who isn’t in your favorites calls you twice within two minutes, it will ignore your quiet hours.” “That’s so thoughtful.” But you had to turn it on.

With blood sugar stuff, there is some important stuff. Your blood sugar’s 50? You need to know about it so that is on by default.

**JAIM:** So if you switch this to iPhone, would you keep that level [crosstalk].

**SCOTT:** All of those things apply to the iPhone version of this stuff or [crosstalk].

**JAIM:** Okay. This isn’t the actual device itself; this is the how a communication with the device.

**SCOTT:** The device— there’s three different devices. There’s the transmitter – that’s the one that’s in my arm. There are one or more receivers where a receiver might be a physical device like this one I’m holding in my hand. It looks like an iPod Nano or it might be an iPhone which is also acting as a receiver. They all have very stringent— the Dexcom has a very stringent, a learning system that’s very flexible that can bother you when you needed to be bothered and leave you alone when you don’t want to be bothered.

**JAIM:** That’s good that they’ve been able to get this working out of the box in a way that’s not terribly invasive. So that’s good for them. Many, many [crosstalk].

**SCOTT:** Yeah [crosstalk]. The Dexcom by itself is 90% what people need. I just think, it’s the ability for— and then also even the ability to have your love ones sees your blood sugar remotely, the Dexcom supports that. So there’s an iPhone app for following a diabetic. There’s the app the diabetic runs that pushes it into the Cloud then there’s the follower app. You can basically subscribe to that person’s blood sugar and have 5 people subscribing to your blood sugar, remotely.

**JAIM:** Okay and that works now?

**SCOTT:** That all works today— works just fine. Things that don’t work perfectly are like the Apple Watch has an Apple Watch complication. Complications have limits on how often a complication can be pushed to the Apple Watch. You can’t push a complication every five minutes for 24 hours a day because of battery life issues. There’s a limit but for a diabetic, I need all those numbers. So what do you do? Do you show me a range? Do you push it every 15 minutes? Well, if you push it every 15 minutes, did I miss one? It gets complicated quickly.

**JAIM:** So what have been complications – improving battery life on watches and being able to update— real time?

**SCOTT:** It needs to run the background. I think larger than iOS, phones need a hypervisor and a medical device background process running on your personal area network. There’s no software for that, right now, is there? You might need a hypervisor; seriously like a ring zero process that is mission critical.

I don’t think that the industry is ready to do something like that, to have the iPhone be the crucks – of the hub of all things medical as if for a diabetic but it happens to be the only pocket super computer that I have with a big old screen and a big old battery. It’s my freaking back pocket.

How stupid is it that I am here cobbling together a 3D printed Raspberry Pi with a big old battery and a wireless adapter and I’m going to shove it into my back pocket and pretend that it is an iPhone when I have a perfectly good iPhone right here? It is only the limitation of the hardware and the software in the iPhone that is preventing me from just— really, there’s mostly software limitation that’s preventing me from doing that.

It’s not an open connector. The lightning connector is not open. I can’t pair any old thing to it. I need [inaudible] profiles. I can’t plug in USB stuff arbitrarily to it so I don’t know. I think we’ll end up with a Tic Tac sized Raspberry Pi zero version of this, hacked together with the TI USB stick and a Bluetooth. At some point, come up with a roughly playing card – size of a deck of cards system but I still think it’s stupid that I’m having to do this because the iPhone is not willing to give up some of its processor power.

**JAIM:** Yeah, definitely. They do it because of battery life and Apple has very protective of battery life but we’re talking about health information— what are you going to [crosstalk].

**SCOTT:** Yeah, but somehow they feel the need to have kinetic wallpapers on the home screen that move as you [inaudible] the thing in front of your face; juicy, cool animations and stuff as you open— if they really cared about battery life— I don’t know. This is not just at – I’m not just yelling Apple here. It’s all phones. Really, I’m not an Android fan by any means but Android is the only portable, open-ish pocket super computer that you can do really do anything you want to with.

**CHUCK:** Yeah. The other thing to get or as far as battery life goes is I keep hearing that they’re trying to make – weigh battery life against how thick the phone is or how it’s shaped. But how many people to have this mission critical problem would be willing to deal with a little bit thicker phone to get a little bit more battery life then just have this run all the time.

**SCOTT:** I would propose have it run all the time and I’ll just plug in to a big old battery. My car has a backup battery for this phone. I’m totally fine with [crosstalk].

**CHUCK:** [Laughs] That’s true.

**SCOTT:** With eight hour battery life. But I just don’t want to keep carrying other devices around with me.

**CHUCK:** Yeah.

**SCOTT:** We call these rigs. There’s a Nightscout rig or an open APS rig. There’s all sorts of 3D printed ways of— I got another one, hang on— different boxes with all different vents and screw pads and just different ways to put together these things but they all come out big. That’s bigger than my palm – quite a bit bigger than my palm. You can’t put that in an 8 year old kid’s bag pack and say, “Here you go.” Not to mention, there’s not a lot of ubiquitous cellular. That’s the other inconvenience.

There are a couple of devices, I think, the Photon Particle or someone had a cellular device or an [inaudible] of things that have cellular plugged in to it. Where is it? It is a— yes, Particle.io, the electron 3G kit. Basically you can do tiny little 3G deals. It has a built in 3G card but it only has a 128k of RAM. It costs 2.99 a month for 1 megabyte. So 2 dollars 99 cents a month but the issue is that over the course of an entire month, sending all of your blood sugar up and down [inaudible] about 250 Megs, alright? So it’s 99 cents for each additional megabyte so that’s not really a solution; that’s 250— 3 dollars a month.

Now for the kinds of stuff that this is meant for, it’s a tiny development kit. If I’m going to send a text messages or the occasional hourly temperature reading, that’s one thing but blood sugar over time, every five minutes, adds up. There’s no good tiny convenient way to send that to the cloud other than the phone that I’m already using that has 15 gigs like one YouTube video is all my blood sugar data for months.

**CHUCK:** Wow!

**SCOTT:** [Inaudible] Coming off is too bitter. I’m just trying to point out that there’s a— if you go and google for the sad state of diabetes technology, I wrote a blog post in 2012 where I lamented this. There’s amazing stuff going on but this could all be solved if the manufacturers would just try harder.

**JAIM:** If they talked to each other.

**SCOTT:** Well, but see, they’re all struggling to stay in business. It’s profitable as we are, though. They also want to keep it safe and I need to give them respect for that but I’ll tell you this, as a diabetic for 25 years, being told that it’s going to be cured every five years?&nbsp; Five more years – they’ve been telling me that for 25 years and they’ve been telling diabetics I know for 50 years. We’re not five years away. I don’t know what’s going to happen in five years. Hopefully a tiny pager-like device I throw in my pocket from someone like Bigfoot Biomedical that lets me just close the loop and not think about it anymore. That would be lovely.

**JAIM:** Definitely. That’s the goal we’d all like to see.

**CHUCK:** I think you’re right and I think it’s really interesting. I’m a little bit pressed for time so I’m going to go ahead and push this into picks

Is there anything you want to end with, though? Scott, before we go there?

**SCOTT:** Even though I’m [inaudible] and complaining right now, it does suck less than it did in the early 90s. [Laughs] At the same time, I also want to point out that it is a heroic group of people who have the patience of Job to go and put these things together. There is a whole community of people— I’ve only named a dozen that are working tirelessly to do it. I think the interesting part of open APS, as an example, isn’t the APS part but the open part. They could have gone off and made a company and could’ve make gazillions of dollars but they’re giving it all up to the people. It’s a very gorilla project. It’s definitely not something that you could get set up in an hour but it definitely will teach you more about your own blood sugar in your own body. It’s worth, at least, poking around. If you don’t close the loop, you can at least have a glee type monitoring of your blood sugar.

**CHUCK:** Alright. Well, let’s go into the picks. Andrew, what are your picks?

**ANDREW:** Sure. I’ve just got one pick today. My pick is reading papers. So that may sound a little weird. I got an iPad Pro last week and really like it. Of course, the first thing anybody I think who gets an iPad Pro or even tries one, it does— it gets the Apple pencil and starts drawing and sketching things. That was fun and then I wondered what it would take to do— I don’t know— sketch pad and recognition like you see in— Adobe has a new app for doing really quick wire frames. You draw a circle and it turns it into a real vector circle in the app.

So I wondered what it would take to do that and couldn’t really search [inaudible] on GitHub – which is my normal first instinct – couldn’t really find anything good and ended up finding some academic papers on the subject. Turns out, there are whole laboratories at various universities that work on this problem. It’s an area of back [inaudible] search. You can go read a lot of papers and despite not knowing anything about these beforehand, papers are actually quite digestible. You can figure out what they’re talking about without too much trouble. A lot of them actually have code examples or at least pseudo code examples for algorithms and stuff. So I went from not knowing anything to actually playing around writing some code based on these papers pretty quickly. It was a cool thing. So don’t be afraid to dive in to academic work on something you’re interested in. That’s my pick.

**CHUCK:** Alright. Jaim, what are your picks?

**JAIM:** Alright. I got a couple of picks. I should mention my wife who’s also a Type I diabetic along with [inaudible] Type I Diabetes. She’s had it for 29 years and she’s been writing over the past four years about her living with diabetes and other auto-immune diseases. Her blog is called, Diabetes Light: My holistic journey to health. She talks about living with this but also using different ways to treat it. A large thing is that it would do is diet and one thing we do as a family is we eat pretty healthy. We buy our own on vegetables. We eat a pretty clean diet and that helps us keep the blood sugars in control and hopefully [inaudible] the complications that could happen especially if you’re living with it for a decade. I’ll put a couple links on the show notes. She has a blog page and she’s got a Facebook group which she is more active on but it’s good stuff.

Second pick, if you know I’m from Minneapolis and we lost one of our great artist this week. Scott, I know you’re a fan but Prince passed away six days ago. That’s been my entire Facebook feed for the past week. Even today, six days later, still 80% of friends – of people sharing things. There’s been lot of stuff written. I just want to point out a couple articles. One article I read, maybe a year or two ago is with Jimmy Jam who was one of the people who came out at Apple scene after Prince. He was part of the Time and got fired from the Time and produced a ton of records in the 80s and just gave an overview of his early experiences with Prince and how Prince helps the Time gets the record deals and stuff like that so it’s a good article.

BuzzFeed had created a bunch of articles from the past 30 years –35 years about Prince. So those are good reading if you’re interested in Prince— Prince and stuff so those are my picks.

**CHUCK:** Alright. I’ve got just one pick this week and that well – and I guess, I’m going to shout out really quickly. I’m going to be in Chicago on June 9<sup>th</sup> or July 9<sup>th</sup>, sorry. So if you want to come hang out, we we’re working out where we’re going to do that right now. It will be somewhere near the Hyatt Regency hotel since I’m going to Podcast Movement so check that out. I’ll be putting up more information when I have it which is probably the next episode of this show.

The other pick I have is for Type II diabetics, I do give myself shots of insulin twice a day. I’m taking some other medications and working on getting stuff under control but one thing that’s really been helping me is just managing my diet. The way that they teach Type II diabetics to manage their blood sugar is through counting carbs which is really hard for me to do. It’s like, “Oh, okay. So how many carbs are in this meal? Heck, I don’t know.” You ask the restaurant how much rice you ate and they don’t know. Anyway, what I found, in general, is instead working off of an eating lifestyle that tells you “eat this or don’t eat that” then, just follow that. Then when you do decide, “Okay. Well, it’s a holiday so I’m going to eat as much stuffing as I want at Thanksgiving,” then it doesn’t kill you off for that one day.

So the program that I’ve been following is the Primal Blueprint. You find a whole bunch of information about that. There’s the book by Mark Sisson. They have some cook books and other stuff you can check out. I guess, in general, my pick is that Mark’s Daily Apple is where Mark puts up all the information about Primal Blueprint. Eating and there’s also a certain way to exercise and things like that, that they recommend.

Obviously, you can tailor that if you’re doing more like marathons and endurance training to work more carbs in. But then it’s strategic to make sure you have the energy to do the exercise and not just because it takes good or because you want whatever. I found that it’s hard to get started but then there are a lot of options once you figured out what you can and can’t do. So I’m going to recommend that for folks like me who are dealing with maybe some insulin resistance and things like that where you just eat a diet that’s a little lower in carbs and a little higher in high quality food.

Scott, what are your picks?

**SCOTT:** To the point of Prince, if you go to medium.com/hanselman or you go to my blog, a good friend of mine interviewed Prince and spent time with him in 1999 for a profile in Style magazine and both she and Prince are gone. I found an email from her many, many years ago where she sent me that unedited AOL chatroom that she had had one on one with Prince in a private chat and see the interesting insight into the man and also a reminder that internet chats from a rock star looked like internet chat from anybody.

**JAIM:** I think Prince actually invented internet chat lingo.

[Chuckles]

**JAIM:** Two in the [crosstalk].

**SCOTT:** Definitely ahead of his time.&nbsp;

**JAIM:** Prince speak is what I call it.

**CHUCK:** Awesome! Are there any other things that you’re working on right now, Scott that you want to shout out about or your Twitter handler or anything like that— so we could follow you?

**SCOTT:** Yeah [crosstalk]. Follow me on Twitter. Google for Scott or Scott Hanselman and you’ll find me. Hanselman.com leads to my podcast, my blog, my twitter, and Facebook, and all things.

**CHUCK:** Alright, sounds great. Well, thank you for coming Scott. We’re going to go ahead and wrap this up. We’ll catch everyone in a week.&nbsp;

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
