---
layout: layouts/post.njk
title: >
      VoV 034: Mike Hartington & Michael Tintiuc : "Ionic and Vue"
date: 2018-10-23 10:00:20
episode_number: 034
duration: 1:14:38
audio_url: https://media.devchat.tv/viewsonvue/VoV_034_Mike_Hartington_%26_Michael_Tintiuc_Ionic_and_Vue.mp3
podcast: views-on-vue
tags: 
  - views_on_vue
  - podcast
---

 **Panel:**

- [Charles Max Wood](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Chris Fritz](https://twitter.com/chrisvfritz?lang=en)
- [Divya Sasidharan](https://www.linkedin.com/in/shortdiv)
- [Joe Eames](https://twitter.com/josepheames?lang=en) 
- [John Papa](https://twitter.com/John_Papa?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Special Guest:** Mike Hartington and Michael Tintiuc

In this episode, the panel talks with [Mike](https://twitter.com/mhartington) and [Michael](https://www.linkedin.com/in/michaeltintiuc/) who are developers of Ionic. The panel and the guests talk about the ins-and-outs of the framework and talk about the pros and cons, too. Listen to today’s episode to hear how they discuss how Ionic is compatible with Vue and Angular. Finally, they talk about various topics, such as Cordova and Capacitor.

**Show Topics:**

1:19 – Mike H. gives his background. He uses JavaScript every day.

1:30 – Michael T. gives his background.

1:53 – Chuck: Yes, today we are talking about Ionic. Why are we talking about that on a Vue Podcast?

2:08 – Let’s talk about what Ionic is first?

2:16 – _Guest gives us the definition / background of what IONIC is._

2:32 – Guest: We have been tied to Angular (back in the day), which were Ember and jQuery bindings. We have come a far way.

_(He talks about web components.)_

Guest: We spent a year diving into web components and interweaving that with Angular. Now we are exploring other framework options. Now we are looking at Ionic with Vue.

3:34 – Chuck: I have played with Ionic, and it’s fairly to use. It’s exciting to see it come this way. I’m curious what does that look like b/c Angular and Vue aren’t the same.

4:10 – _Guest explains and answers Chuck’s question._

4:50 – Chuck: Is it like using...under the hood?

4:58 – Guest: No.

_(He goes into detail.)_

5:08 – I didn’t know that[Stencil](https://stenciljs.com) was built by that team.

5:19 – Guest: We built a 2<sup>nd</sup> project.

5:28 – Guest: There are 24 hours in a day.

5:39 – Panel: How is Ionic different than other options?

5:59 – Guest: It’s comparable to Frameworks 7. The components that you generate are all web0based. The component that you put in is the same for the web or Android. You can have 100% code reuse.

6:35 – Panel: It’s actual CSS?

6:41 – Guest: It’s full-blown CSS. If you wanted to do CSS animations then whatever the browser can support.

6:56 – Panel: Advantages or disadvantages?

7:04 – Guest: It’s easier to maintain.

If you are making the next Photo Shop...(super heavy graphics) maybe web and web APIs aren’t the right way to go.

8:23 – You have access to less intense stuff?

8:34 – Guest: Yes.

8:39 – Question.

8:46 – Guest: 2 different approaches to this. 1 approach is[CORDOVA](https://github.com/apache/cordova-ios) and the other is [CAPACITOR.](https://github.com/ionic-team/capacitor)

9:42 – Anything that has been built with Ionic?

9:47 – Guest: App called Untapped? Or the fitness app, [SWORKIT!](https://sworkit.com) [MarketWatch](https://play.google.com/store/apps/details?id=com.marketwatch&hl=en_US) is another one. We have a whole showcase page that you can check out.

10:57 – Few apps out there that use Ionic for everything.

11:06 – Panel: I have done work with Ionic in the past. I found a sweet spot for business apps. There are things behind enterprise walls that customers can use but necessarily others. We have decided to go native and found that Ionic wasn’t a good fit. How do you feel?

11:51 – Guest: We do hear that a lot. People want to make a quick app and then...

12:20 – Panel: We chose Ionic in this project b/c we had to get it out in less than 6 weeks and the team knew JavaScript. Nobody knew Ionic besides me. After that, nothing broke and that’s a huge praise.

12:55 – Guest: I will take that good praise.

13:01 – Panel: How is it used with Vue?

13:07 – Guest: The Vue work that we’ve been doing...here are the core components. Recently we have been working with Michael and integration. They have been working on opensource.

13:45 – Michael: It was one of the first apps in Beta and Vue. It all started out as a passionate project for the opensource initiative. We wanted to build something new and use the emerging Vue.js. At the time I had no idea. It sounded cool, though, and at the time I wrote a small CUI program. I decided to make an app out of that. I wanted to meet the clients’ needs and the new tech. I went online and I saw some tutorials and I thought they had figured it out. I thought we were screwed but I guess not. Most of the things are out of the box. But the problem is that the routing was sketchy and it wouldn’t update the URL and it had to be delegated to the framework. The app is called BEEP. I cannot disclose what it means. Joking. I added to the state that everything...

I tore through the screen to figure out how it works. Then it clicked. You have to extend the Vue’s official router...and then you’re done. You do a MPM install and then you call a couple of APIs and then you are done. Not even a single line of code. You have Ionic’s out of the box animations, and in our app we have a dancing...

You spend a week and you’re done so I won’t use anything else.

17:35 – Panel: That’s an impressive turnaround!

17:42 – Panel: It just goes to show you that the code in Vue is so approachable to anyone. If you know a little bit of JavaScript then you know what is kind of going on. It’s pretty clean. Especially the Vue Router.

18:11 – Panel: Vue Core – some parts that can be hairy.

18:43 – We are component authors. We just need to know here is a component and here are some methods that it needs to know.

19:04 – Oh yeah, totally – I was talking more about...

19:14 – That’s what I thought for those 2 weeks cause I was looking at...

19:24 – Chuck: How do you get the Vue stuff in that and not the Angular?

19:41 – _Guest answers the question._

20:20 – Panel: What was the hardest part to integrate?

20:28 – Michael: I wrote my own router. It was too much for me to write. I thought it was going to take me ages. So it took the longest to come to the idea to extending Vue’s router. I thought writing less code is the best. It took me 2 weeks to come to that conclusion. It was related to how...

22:21 – Question.

22:28 – Michael: You can use Vue router like if you used a different package.

22:40 – Panel: It is using the other router history or if you are using Hash API; since it’s all web technology?

23:03 – Guest: People don’t see the URL.

23:10 – We can teach them to pass...

23:25 – Panel: I have been interested in Ionic...when you sprinkle in some native stuff. Local databases. Getting that wasn’t too bad to work. The trick was testing that.

24:04 – Guest: A lot of manual work, unfortunately. It’s a lot of set-up work. You can do test functions but actually have that end-to-end test...can I make sure that is working correctly? A lot of manual testing. There are some cloud base platforms but I haven’t checked them out for an easier way.

25:06 – It was an Ionic issue it was...

I think some of the Cloud services to better nowadays.

25:25 – Guest: It was painful to get it setup. Why do I need Clouds?

25:42 – Advertisement – Get A Coder Job!

26:19 – Let’s talk about native features. How does one do that in Vue?

26:29 – _Guest talks about Vue, Capacitor, and Cordova._

27:27 – Guest: Let’s talk back to the Beep app. Lots of this stuff is really easy, as Mike was saying. That’s what I like to do – being a both a developer and a library writer.

28:00 – Panel: Imagine Slash from Guns and Roses.

28:14 – Chuck: They get this idea that it’s Java so I can share.

Chuck asks a question.

28:30 – Guest: All of it. You might want to change some of the UIs. If it looks good on mobile then you can adapt that as the main app and swap that out for the traditional designs and something else.

29:03 – Panel: I can’t just drop in the same dibs for my styles on my desktop and magically look like a mobile app.

29:23 – Guest: That’s where you are wrong. Ionic does this really well. We have painstakingly made this be a thing.

_The guest talks about screen width, layouts, and other topics._

30:10 – Guest: It’s the same code.

30:18 – _Panelist gives a hypothetical situation for the guests._

30:36 – _Guest answers the question._

Guest: You will have to refactor from desktop to mobile.

31:54 – Chuck.

32:10 – Michael: It’s about continuity.

32:39 – Panel: Building a Vue app we can use the Ionic Vue project to reuse that work that you did to get that back button working.

32:59 – Michael: That’s the whole point. So you guys don’t even have to think about it. So you don’t have to fiddle around with bugs.

33:17 – Panelist.

33:22 – Michael.

33:33 – Mike: Eventually we want to do a full fledge Vue project they just install Ionic Vue and it will integrate the package.

33:55 – Michael: You use the UPI and that’s it.

34:03 – Panel: Beyond the hardcore 3D sky room games are there any other reasons why I wouldn’t want to use Ionic?

34:30 – Mike: I can’t think of anything. More important question is what is your team’s experience? I wouldn’t go to a bunch of C+ devs and say: Here ya go! I wouldn’t do that. You have to figure out the team that knows Java and they don’t know native, so they will be able to reuse those skills.

35:25 – Panel: I am wondering if there is anything technically impossible because of the way Ionic works?

36:00 – Guest: If there are, I haven’t seen it, yet. There are 20,000,000 downloads so far, so I don’t think so.

36:28 – Panel: When people report an issue what do they complain about?

36:39 – Guest: Being a couple pixels off (CSS), API signatures, etc. We are seeing fewer issues on the...

People are looking at functionality issues. Whenever there are issues we take care of it right away.

37:26 – _Panelist asks a question._

37:32 – It’s really done well.

37:46 – Panel: Are people able to drop that into an Ionic app?

38:09 – Guest: I haven’t tried that, yet.

38:20 – Panel: I have another question: How big are Ionic apps compared to other native apps. When you are using C+ or writing in Java or Swift.

39:09 – Guest: Twitter native was a couple 100 MB app. But the apps built with Ionic are 50 MB category. They can be small or full native apps with plugins.

40:00 – Panel: Does that mean that in some cases users will have to be connected to the Internet to use the app?

40:29 – _Guest answers._

41:02 – Guest: I have some good news for you all.

_(Guest goes into detail.)_

41:39 – Chuck.

41:44 – Guest: Another comparison is my app I use for my Home Goods store is 80 MB and it’s not doing a whole lot.

42:21 – Chuck: Let’s talk data for a minute. You can get large that way if you are DL files through the app – how do you manage memory?

42:42 – Guest: That is run by the browser run-time. Sometimes too good of a job. When you are doing production cases your...

43:27 – Panel: Do you have access to Sequel Light or do you have to use in-browser storage?

43:27 – Guest: Either one.

44:16 – Sequel Light.

44:20 – Guest.

44:24 – Within Ionic you can use Sequel Light there is a plugin.

44:55 – _Panelist comments._

45:23 – Michael: I want to add some clarification. You can write your own propriety files...

45:23 – I like that it sounds like it’s different than other frameworks. Instead of there being a framework way to do it there is a lot of different pieces you can plugin to different parts that is agnostic to Ionic.

46:10 – _Guest talks about batteries included._

46:42 – Panel: I really like that b/c it’s the Vue approach, too.

47:21 – _The guest talks about transitions._

48:07 – Chuck: If I get stuck what is the community around it?

48:25 – Guest: It’s still early right now. If you went to the code base you wouldn’t see much. We are working on the code getting into the package. The good thing is that the way it’s structure, once their APIs are set then it’s the same through Angular and Vue. Once you have that API set it’s the same thing between those 3 things.

49:13 – Guest: Let me blow your minds guys...

There are 7 controllers and 99% you would go to the Ionic site. The rest is identical and that’s the cool part. If you are coming from Angular you can reuse a lot of that knowledge.

50:00 – Panel: If they wanted to build an app right now what would you recommend as their first step?

50:16 – Guest: Ionic and Vue – check out the docs and the components overviews to see what the vanilla components are like.

50:52 – Panel: Is there an example repo?

50:59 – Guest: That would be the BEEP app.

51:08 – Panel: Vue specific docs?

51:18 – Guest: Files that you can drop into your browser.

51:27 – Panel: How soon is soon?

51:31 – Guest: Most likely within the next few months. Final touches that we want to complete.

52:11 – Chuck: What about testing?

52:17 – Guest: Same way you would test a Vue app there is nothing specific for Ionic (at least for the unit tests). If you are doing integration tests that would work the same way in typical Vue setup the only quirks are...

52:56 – Question: Does Ionic offer a collection of mocks for APIs?

53:11 – Guest: Yes, but just for Angular. It’s the only framework to support. This is a good call for community members to contribute.

53:35 – Panel: Would that be a new repo for Vue?

53:44 – Guest: Contribute to the Ionic Teams’ Main Repository and open an issue – and Ping me.

54:02 – _Twitter names are given._

54:13 – Panel: How do they reach you?

54:19 – Michael: My whole name slurred together.

54:39 – Panel: Anything else they should know?

54:46 – Guest: Ping us and we will get you working with Ionic.

54:54 – Guest: The cookbook examples are a good starting part. We work very hard with Ionic.

56:01 – Panel: If they have questions where should they post them – chat, or form?

56:20 – Guest: Yes, ask away – any questions.

56:41 – Panel: How do you make money?

57:00 – Guest: If you want to build the Android portion, but you don’t want to take the time, we have a hosted platform that will handle that for you. Help you create your build so you don’t have to create all of the native stuff.

57:29 – _Picks!_

57:35 – Chuck: I have more stuff to play with – dang it! I am happy to outsource to you, Chris!

58:00 – _Sarcasm._

58:26 – Chuck: Thank you for sharing your stories, Michael and Mike!

58:38 – Advertisement – Fresh Books! DEVCHAT code. 30-day trial.

**Links:**

- [Vue](https://vuejs.org)
- [React](https://reactjs.org)
- [Angular](https://angular.io)
- [JavaScript](https://www.javascript.com)
- [DevChat TV](https://devchat.tv)
- [Ionic – Vue](https://github.com/ModusCreateOrg/ionic-vue)
- [Ionic](https://github.com/ionic-team/ionic)
- [Star Track](https://startrack-ng.firebaseapp.com)
- [Onsen UI](https://onsen.io)
- [Beep](https://github.com/ModusCreateOrg/beep)
- [Have I been Pawned?](https://haveibeenpwned.com)
- [Michael T.’s LinkedIn](https://www.linkedin.com/in/michaeltintiuc/)
- [Mike H.’s Twitter](https://twitter.com/mhartington)
- [Michael T.’s Twitter](https://twitter.com/michaeltintiuc)

**Sponsors:**

- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284659279616&source=GOOGLE&gclid=EAIaIQobChMI6NHV7MSb3gIVh7bACh0hhAD5EAAYASAAEgI9K_D_BwE&gclsrc=aw.ds&dclid=COL6yu3Em94CFRi8TwodLnkP0A)
- [Cache Fly](https://www.cachefly.com)
- [Kendo UI](https://www.telerik.com/kendo-angular-ui/?utm_medium=cpm&utm_source=adventuresinng&utm_campaign=dt-kendo-ang2-nov16&utm_content=audio)

**Picks:**

John

- [NMP Library – DoteNV](https://www.npmjs.com/package/dotenv)
- [The 12 Factor App](https://12factor.net/config)

Divya

- [Post by Sara S.](https://www.sarasoueidan.com/blog/nested-links/)
- [Headspace – daily meditation](https://www.headspace.com/headspace-meditation-app)

Chris

- [Library called CUID](https://www.npmjs.com/package/cuid)
- [Library – MapBox](https://www.npmjs.com/package/mapbox-gl)
- [Netflix – The Originals](https://www.netflix.com/title/70283261)

Chuck

- [Friends of Scouting](https://filestore.scouting.org/filestore/financeimpact/pdf/FOS_Resource_Guide_2011.pdf) – good cause to give money

[Michael](https://twitter.com/michaeltintiuc)

- [AIRBNB Lottie](https://airbnb.design/lottie/)
- [Steam Support](https://support.steampowered.com/kb_article.php?ref=9439-QHKN-1308)

[Mike](https://twitter.com/mhartington)

- [Blog Post – GitHub Integration](https://code.visualstudio.com/blogs/2018/09/10/introducing-github-pullrequests)
- [Infinity War](https://www.imdb.com/title/tt4154756/)

Joe

- [Movie Peppermint](https://www.imdb.com/title/tt6850820/?ref_=nv_sr_1)
- [Burn After Reading](https://www.imdb.com/title/tt0887883/?ref_=nv_sr_1)
- [Goodbye Redux](https://hackernoon.com/goodbye-redux-26e6a27b3a0b)


### Transcript


