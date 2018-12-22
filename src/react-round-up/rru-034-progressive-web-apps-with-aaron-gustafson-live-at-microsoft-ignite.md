---
layout: layouts/post.njk
title: >
      RRU 034: “Progressive Web Apps” with Aaron Gustafson / Live at Microsoft Ignite
date: 2018-10-23 10:00:23
episode_number: 034
duration: 55:27
audio_url: https://media.devchat.tv/reactroundup/RRU_034_Progressive_Web_Apps_with_Aaron_Gustafson_LIVE_at_Microsoft_Ignite.mp3
podcast: react-round-up
tags: 
  - react_round_up
  - podcast
---

 **Panel:**

- [Charles Max Wood (DevChat T.V.)](https://twitter.com/cmaxw?lang=en)

**Special Guests:** [Aaron Gustafson](https://github.com/adtm)

In this episode, the Chuck talks with [Aaron Gustafson](https://www.aaron-gustafson.com) who is a web standards and accessibility advocate working at Microsoft. Aaron and Chuck talk about PWAs and the ins and outs of these progressive web apps. Check out today’s episode to hear more!

**Show Topics:**

0:36 – Chuck: Our guest is Aaron, say HI!

0:41 – Aaron: Hi! I have been working on the web for 20 plus years. I am working on the Edge team for accessibility among other things. I have done every job that you can do on the web.

1:08 – Chuck: That is one of OUR publications?

1:14 – Aaron: No the communities. I joined the staff as editor in chief for 1.5 year now. It’s a nice side project to do.

1:36 – Chuck: I thought it was a commercial thing.

1:40 – Aaron: No it’s volunteer.

1:52 – Chuck: Talk about your web background?

2:02 – Aaron: I remember the first book I got (title mentioned). My first job on the web (cash) I was the content manager in Florida and this was in 1999. Gel Macs just came out. I relocated from FL to CT and worked for other companies. I got into CSS among other things. It’s been a wild ride and done it all.

3:52 – Chuck: Let’s talk about web standards?

4:05 – Aaron: It depends on the organization and what the spec is and where it originates. It’s interesting to see how HTML developed back in the day.

When standardization started working then everything started to converge.

Everything is a little different now. Some specs come out from companies that...

_(Apple,_ [_Responsive Images_](https://responsiveimages.org)_, and Grid are mentioned among other things.)_

7:37 – Chuck: We set up to talk about PWAs. Where did PWAs come from?

7:57 – Aaron: Modern web design, best web applications. Being secure. One of the underpinnings came out from Google and they have been supporters of that.

Firefox is working on installation as well.

The Chrome implementation is weird right now, but it becomes an orphaned app. It’s like the old chrome apps where in Windows you can install from the Microsoft store. But the case of Chrome you don’t have to go through the store.

10:14 – Chuck asks a question.

10:24 – Aaron answers.

11:53 – Chuck: What makes it a progressive web app rather than a regular website?

12:05 – Aaron: The definition is running on HTPS and...

_Aaron defines the terms that Chuck asks at 11:53._

12:43 – Aaron: Of course you can push forward if it makes sense from the baseline.

12:56 – Chuck: We have an Angular podcast, and we talked about PWAs and nobody had a good definition for it.

13:18 – Aaron.

13:22 – Chuck: What are the pros of having a PWA? Let’s start with the basics first.

13:33 – Aaron: The ability to control how you react to the network. We development is challenging maybe in other areas because of the lack of control and how your code gets to your users. Any special needs that YOU might have.

_Aaron goes into detail on this topic._

17:14 – Chuck: Is the service worker the star for PWAs?

17:20 – Aaron: In a way, kind of.

_Aaron goes into detail on this topic._

_Share 2 is mentioned, too._

19:42 – Chuck: If the service worker intermediates between the browser and the page / Internet would it make sense to have your worker have it load and then load everything else? Cause you have those Web Pack now.

20:14 – Aaron: Some people would consider it but I wouldn’t necessarily. I am not a fan for that. If anything goes wrong then nothing loads. I remember back when...

22:23 – Aaron: That is a lot of overhead.

22:34 – Chuck: I am wondering what is the best practice? How do you decide to pull in a service worker and then move into more complicated issues?

22:53 – [Aaron](https://www.youtube.com/channel/UCDWpGhFB8j6Kia4B_MKUG3w): Progressive Web App where they talk about their evolution about this.

25:17 – [Advertisement – Fresh Books!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=289640536553&source=GOOGLE&gclid=EAIaIQobChMIzpSso-SY3gIVDoxpCh0-HwkaEAAYASAAEgI6JfD_BwE&gclsrc=aw.ds&dclid=CNGHh6XkmN4CFQO5TwodEqEA2w) Code: DEVCHAT.

26:25 – Chuck: In order to be a PWA you don’t need to have a push notification.

26:38 – Aaron: I don’t think anyone would want a push notification from me.

27:12 – Chuck: What features do PWAs have?

27:18 – Aaron: Features? None of them really, other than push notifications, it’s just standard it’s going to make an App feel more App “y”. If that’s something you want to do. It’s up to you to determine that.

There is going to be like push notifications – sending person new updates about the order. If you were a new site you want to make sure you are not doing a push notifications on everything cause that would be too much. Exercising care with the capabilities with what the users are doing on your computer. This is a person that you are dealing with. We need to seem less needy. Give users control of how they want to use it. For example, Twitter will give you that control per user.

30:56 – Chuck: Could you also do it for different parts of the page?

31:01 – Aaron: It’s different scopes. Your servicer worker has different scopes and it needs to be in the root folder or the JavaScript folder. You can have different workers but they will come from different scopes.

31:32 – Chuck gives a hypothetical example.

31:50 – You can do a bunch of different service workers.

32:11 – Chuck: This is why we create different hierarchies in our code.

32:26 – Chuck: Is there a good point where people can be more informed with PWAs?

32:40 – Aaron: [PWA stats website](https://www.pwastats.com) and [Twitter account](https://twitter.com/pwastats) with Cloud 4.

33:22 – Chuck asks a question.

33:26 – Aaron: Yes. If you are a photographer you don’t want to cash all of your photos on someone’s hard drive. We have to be good stewards of what is operating on people’s hard drives.

Even something as simple as a blog can benefit from being a PWA.

35:01 – Chuck: Are there new things that are being added to a PWA?

35:12 – Aaron: A new feature is the background sync.

Aaron: What is native and what is web?

36:33 – Chuck: Yeah it can detect a feature in your machine. Dark mode is...

36:48 – Aaron: It would be nice to see things standardized across the board.

37:00 – Chuck: How does this play into [Electron](https://electronjs.org) or Android or...? Do those need to be PWAs?

37:16 – Aaron: It depends on what you are building. So I talked with people through Slack and they want total control. If you r desire is to shift the same experience then [Electron](https://electronjs.org) can make a lot of sense. They will have to pay a premium, though, your users. If you are aware of that then go the [Electron](https://electronjs.org) route. But for most cases then [Electron](https://electronjs.org) might be overkill for you. You don’t need that extra overhead.

39:55 – _Aaron continues._

Aaron: I think the major benefit of PWA is...

41:15 – Chuck: The other angle to that is that in an Electron app does it make sense to use a PWA things?

41:23 – Aaron: Yes that makes sense.

41:34 – Unless for some reason you need to unlock into an older version, which I hope is not the case b/c of security reasons.

41:55 – _Aaron continues._

42:34 – Chuck: Where can we find you?

42:35 – Aaron mentions Twitter and other sites. See Links!

43:02 – [Advertisement – Get A Coder Job!](https://www.digitalocean.com/)

**Links:**

- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [PWA States Website](https://www.pwastats.com)
- [PWA Twitter](https://twitter.com/pwastats)
- [Electron](https://electronjs.org)
- [Aaron’s Website](https://www.aaron-gustafson.com)
- [Aaron’s LinkedIn](https://www.linkedin.com/in/aarongustafson)
- [Aaron’s Twitter](https://twitter.com/AaronGustafson)
- [Aaron’s GitHub](https://github.com/aarongustafson)
- [Aaron’s YouTube Channel](https://www.youtube.com/channel/UCDWpGhFB8j6Kia4B_MKUG3w)
- [Aaron’s Medium](https://medium.com/@AaronGustafson)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [Charles Max Wood’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Sponsors:**

- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%257Efreshbooks&kw=fresh%2520books&campaignid=717543354&adgroupid=53169078638&kwid=kwd-299596828929&dv=c&ntwk=g&crid=289653575014&source=GOOGLE&gclid=EAIaIQobChMIwr_9ofSJ3gIVyrfACh1DkQVNEAAYASAAEgJIUvD_BwE&gclsrc=aw.ds&dclid=CPaQ6KX0id4CFUTcwAodvfQEcA)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

**Picks:**

Aaron

- [Home Going by Yaa Gyasi](https://www.amazon.com/Homegoing-Yaa-Gyasi/dp/1101971061)
- [Zeitoun](https://www.amazon.com/Zeitoun-Dave-Eggers/dp/0307387941)
- [What is the What](https://www.amazon.com/What-Dave-Eggers/dp/0307385906)
- [Affect Conf.](https://affectconf.com)

Charles

- [Armada](https://www.amazon.com/Armada-novel-author-Ready-Player-ebook/dp/B00TNDID0O/ref=sr_1_3?s=books&ie=UTF8&qid=1540156933&sr=1-3&keywords=ready+player+one)


### Transcript


