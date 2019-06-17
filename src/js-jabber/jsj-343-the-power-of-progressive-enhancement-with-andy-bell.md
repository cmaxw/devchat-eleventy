---
layout: layouts/post.njk
title: >
      JSJ 343: The Power of Progressive Enhancement with Andy Bell
date: 2018-12-11 11:00:21
episode_number: 343
duration: 1:05:17
audio_url: https://media.devchat.tv/js-jabber/JSJ_343_The_Power_of_Progressive_Enhancement_with_Andy_Bell.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

 **Panel:**

- Charles Max Wood
- Aimee Knight
- Chris Ferdinandi
- AJ O’Neal

**Special Guest:** Andy Bell

In this episode, the panel talks with Andy Bell who is an independent designer and developer who uses React, Vue, and Node. Today, the panelists and the guest talk about the power of progressive enhancements. Check it out!

**Show Topics:**

0:00 – [Advertisement: KENDO UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

0:34 – Chuck: Hi! Our panel is AJ, Aimee, Chris, myself and my new show is coming out in a few weeks, which is called the [DevRev!](http://thedevrev.com) It helps you with developer’s freedom! I am super excited. Our guest is Andy Bell. Introduce yourself, please.

2:00 – Guest: I am an independent designer and developer out in the U.K.

2:17 – Chuck: You wrote things about Vanilla.js. I am foreshadowing a few things and let’s talk about the power and progressive enhancement.

2:43 – _The guest gives us definitions of power and progressive enhancements. He describes how it works._

3:10 – Chuck: I’ve heard that people would turn off JavaScript b/c it was security concern and then your progressive enhancement would make it work w/o JavaScript. I am sure there’s more than that?

3:28 – _The guest talks about JavaScript, dependencies, among other things._

4:40 – Chuck: Your post did make that very clear I think. I am thinking I don’t even know where to start with this. Are people using the 6<sup>th</sup> version? How far back or what are we talking about here?

5:09 – Guest: You can go really far back and make it work w/o CSS.

5:49 – Chris: I am a big advocate of progressive enhancement – the pushback I get these days is that there is a divide; between the broadband era and AOL dialup. Are there compelling reasons why progressive enhancements even matter?

6:48 – Guest.

8:05 – Panel: My family lives out in the boonies. I am aware of 50% of American don’t have fast Internet. People don’t have access to fast browsers but I don’t think they are key metric users.

8:47 – Guest: It totally depends on what you need it for. It doesn’t matter if these people are paying or not.

9:31 – Chris: Assuming I have a commute on the trail and it goes through a spotty section. In a scenario that it’s dependent on the JS...are we talking about 2 different things here?

10:14 – _Panelist chimes-in._

10:36 – Chris: I can take advantage of it even if I cannot afford a new machine.

10:55 – Panel: Where would this really matter to you?

11:05 – Chris: I do have a nice new laptop.

11:12 – Chuck: I had to hike up to the hill (near the house) to make a call and the connection was really poor (in OK). It’s not the norm but it can happen.

11:37 – Chris: Or how about the All Trails app when I am on the trail.

11:52 – Guest.

12:40 – Chris: I can remember at the time that the desktop sites it was popular to have...

Chris: Most of those sites were inaccessible to me.

13:17 – Guest.

13:51 – Chuck: First-world countries will have a good connection and it’s not a big deal. If you are thinking though about your customers and where they live? Is that fair? I am thinking that my customers need to be able to access the podcast – what would you suggest? What are the things that you’d make sure is accessible to them.

14:31 – Guest: I like to pick on the minimum viable experience? I think to read the transcript is important than the audio (MP3).

15:47 – Chuck.

15:52 – Guest: It’s a lot easier with Vue b/c you don’t’ have to set aside rendering.

17:13 – AJ: I am thinking: that there is a way to start developing progressively and probably cheaper and easier to the person who is developing. If it saves us a buck and helps then we take action.

17:49 – Guest: It’s much easier if you start that way and if you enhance the feature itself.

18:38 – AJ: Let me ask: what are the situations where I wouldn’t / shouldn’t worry about progressive enhancements?

18:57 _– Guest answers the question._

19:42 – AJ: I want people to feel motivated in a place WHERE to start. Something like a blog needs Java for comments.

[_Hamburger menu_](https://vtldesign.com/web-strategy/website-design-development/hamburger-icon-flyout-menu-website-navigation/) _is mentioned, too._

20:20 – Guest.

21:05 – Chris: Can we talk about code?

21:16 – Aimee: This is the direction I wanted to go. What do you mean by that – building your applications progressively?

[_Aimee refers to his blog._](https://andy-bell.design/writing/)

21:44 – Guest.

22:13 – Chuck: I use stock overflow!

22:20 – Guest.

22:24 – Chuck: I mean that’s what Chris uses!

22:33 – Guest (continues).

23:42 – Aimee.

23:54 – Chris.

24:09 – Chris

24:16 – Chris: Andy what do you think about that?

24:22 – Guest: Yes, that’s good.

24:35 – Chris: Where it falls apart is the resistance to progressive enhancements that it means that your approach has to be boring?

25:03 – _Guest answers the question._

_The guest mentions modern CSS and modern JavaScript are mentioned along with tooling._

25:50 – Chuck: My issue is that when we talk about this (progressive enhancement) lowest common denominator and some user at some level (slow network) and then they can access it. Then the next level (better access) can access it. I start at the bottom and then go up. Then when they say progressive enhancement I get lost. Should I scrap it and then start over or what?

26:57 – Guest: If it’s feasible do it and then set a timeline up.

27:42 – Chuck: You are saying yes do it a layer at a time – but my question is HOW? What parts can I pair back? Are there guidelines to say: do this first and then how to test?

28:18 – [Advertisement – Sentry.io](https://sentry.io/welcome/)

29:20 – Guest: Think about the user flow. What does the user want to do at THIS point? Do you need to work out the actual dependencies?

30:31 – Chuck: Is there a list of those capabilities somewhere? So these users can use it this way and these users can use it that way?

30:50 – _Guest answers the question._

31:03 – Guest: You can pick out the big things.

31:30 – Chuck: I am using this feature in the browser...

31:41 – Guest.

31:46 – Chris: I think this differently than you Andy – I’ve stopped caring if a browser supports something new. I am fine using CSS grid and if your browser doesn’t support it then I don’t have a problem with that. I get hung up on, though if this fails can they still get the content? If they have no access to these – what should they be able to do?

_Note: “Cutting the Mustard Test” is mentioned._

33:37 – Guest.

33:44 – Chuck: Knowing your users and if it becomes a problem then I will figure it out.

34:00 – Chris: I couldn’t spare the time to make it happen right now b/c I am a one-man shop.

34:20 – _Chuck and Chris go back-and-forth._

34:36 –Chris: Check out links below for my product.

34:54 – AJ: A lot of these things are in the name: _progressive._

36:20 – [Guest.](https://andy-bell.design)

38:51 – Chris: Say that they haven’t looked at it all before. Do you mind talking about these things and what the heck is a web component?

39:14 – _The guest gives us his definition of what a web component is._

40:02 – Chuck: Most recent episode in Angular about web components, but that was a few years ago. See links below for that episode.

40:25 – Aimee.

40:31 – Guest: Yes, it’s a lot like working in Vue and web components. The concepts are very similar.

41:22 – Chris: Can someone please give us an example? A literal slideshow example?

41:45 – _Guest answers the question._

45:07 – Chris.

45:12 – Guest: It’s a framework that just happens to use web components and stuff to help.

45:54 – Chuck: Yeah they make it easier (Palmer). Yeah there is a crossover with Palmer team and other teams. I can say that b/c I have talked with people from both teams. Anything else?

46:39 – Chuck: Where do they go to learn more?

46:49 – Guest: [Check out the Club!](https://webcomponents.club) And my Twitter! (See links below.)

47:33 – Chuck: I want to shout-out about [DevLifts](https://devlifts.io) that has $19 a month to help you with physical goals. Or you can get the premium slot! It’s terrific stuff. Sign-up with DEVCHAT code but there is a limited number of slots and there is a deadline, too. Just try it! They have a podcast, too!

49:16 – Aimee: [Yeah, I’m on their podcast soon!](http://podcast.devlifts.io)

49:30 – Chuck: Picks!

END – [Advertisement: CacheFly!](https://www.cachefly.com)

**Links:**

- [JavaScript](https://www.javascript.com)
- [React](https://reactjs.org)
- [Elixir](https://elixir-lang.org)
- Ember.js
- [Vue](https://vuejs.org)
- [GO](https://golang.org/project/)
- [jQuery](http://jquery.com)
- [Node.js](https://nodejs.org/en/)
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Cypress](https://www.cypress.io)
- [Past episode: AiA 115](https://devchat.tv/adv-in-angular/115-aia-polymer-and-web-components-with-angular-2-with-rob-dodson/)
- [Past episode: JSJ 120](https://devchat.tv/js-jabber/120-jsj-google-polymer-with-rob-dodson-and-eric-bidelman/)
- [Vue.js – Slots](https://vuejs.org/v2/guide/components-slots.html)
- [Using templates and slots – Article](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [Web Components Club](https://webcomponents.club)
- [GitHub: Pwa – Starter – Kit](https://github.com/Polymer/pwa-starter-kit)
- [Progressively Enhanced Toggle Panel](https://codepen.io/hankchizljaw/project/editor/ZvGEar)
- [Time Ago in under 50 lines of JavaScript](https://coolaj86.com/articles/time-ago-in-under-50-lines-of-javascript/)
- [GitHub: ebook-boilerplate](https://github.com/cferdinandi/ebook-boilerplate)
- [Chris Ferdinandi’s Go Make Things Site](https://gomakethings.com)
- [Game Chops](https://music.gamechops.com/album/arcade-attack)
- [CNBC – Trump Article](https://www.cnbc.com/2018/05/30/trump-signs-right-to-try-legislation-on-experimental-medicines.html?fbclid=IwAR3EJlxT7PP510g7BtEu3bYg-PPDeGoEjguUkz9iOqh1S8LwcsVCA2oIkvU)
- [New in Node v10.12](https://coolaj86.com/articles/new-in-node-native-rsa-ec-and-dsa-support/)
- [Quotes Archive](http://quotes.cat-v.org/programming/)
- [My Amazon Interview Horror Story](https://www.igorkromin.net/index.php/2018/11/04/my-amazon-interview-horror-story/)
- [DevPal.io](https://devpal.io)
- [Honest Work](https://honest.work)
- [Relative Paths](https://relativepaths.uk)
- [DevLifts](https://devlifts.io)
- [Andy Bell’s Twitter](https://twitter.com/hankchizljaw)
- [Andy’s Website](https://andy-bell.design)

**Sponsors:**

- [DevLifts](https://devlifts.io)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry](https://sentry.io/welcome/)
- [CacheFly](https://www.cachefly.com)

**Picks:**

Aimee

- [Hacker News&nbsp; -&nbsp; Programming Quotes](http://quotes.cat-v.org/programming/)
- [My Amazon Interview Horror Story](https://www.igorkromin.net/index.php/2018/11/04/my-amazon-interview-horror-story/)

Chris

- [Time Ago in Under 50 Lines of JavaScript](https://coolaj86.com/articles/time-ago-in-under-50-lines-of-javascript/)
- [E-Book Boiler Plate](https://github.com/cferdinandi/ebook-boilerplate)
- JSJABBER at&nbsp;[gomakethings.com](http://gomakethings.com/)

AJ

- [Experimental Drugs Bill](https://www.cnbc.com/2018/05/30/trump-signs-right-to-try-legislation-on-experimental-medicines.html?fbclid=IwAR3EJlxT7PP510g7BtEu3bYg-PPDeGoEjguUkz9iOqh1S8LwcsVCA2oIkvU)
- [My Browers FYI](https://mybrowser.fyi)
- [New In Node,10.12](https://coolaj86.com/articles/new-in-node-native-rsa-ec-and-dsa-support/)
- [Arcade Attack](https://music.gamechops.com/album/arcade-attack)

Charles

- Getacoderjob.com 
- [Self-Publishing School](https://self-publishingschool.com/)
- [MF CEO podcast](https://andyfrisella.com/blogs/mfceo-project-podcast)

Andy

- [Devpay.io](http://devpal.io)
- [Honest.work](https://honest.work)
- [Relativepath.uk](https://relativepaths.uk)


### Transcript


