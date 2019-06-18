---
layout: layouts/post.njk
title: >
  AiA 210: “Zone.js” with Jia Li
date: 2018-10-09 10:00:42
episode_number: 210
duration: 50:31
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_210_Zone.js_with_Jia_Li.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

**Panel:**

- [Joe Eames](https://twitter.com/josepheames?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Aaron Frost](https://github.com/aaronfrost)
- [John Papa](https://twitter.com/John_Papa?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Special Guests: Jia Li**

In this episode, the [Adventures in Angular](https://devchat.tv/adv-in-angular/) panel talks with Jia Li about [Zones.js](https://github.com/angular/zone.js/). Check-out today’s episode to hear this topic plus more!

**Show Topics:**

1:20 – What are zones?

1:25 – Jia: It is a library developed 4 years ago.

1:45 – Panelist: Execution context? What is this?

1:50 – Jia answers this question.

2:42 – I know it’s big in Angular because it kind of takes care of itself. What are the new things you have done in zones and let’s talk about that?

3:01 – Jia: I started contributing 2 years ago. About 1 year ago I was using Angular. I would like to talk about different

3:35 – Where are zones used in Angular – lots of people don’t know where it is.

3:48 – Jia: For four parts.

6:23 – What is this framework that you are talking about? Check-out the links for this framework.

6:42 – Panelists chime-in with their comments.

7:29 – Jia: It is a standalone package in Zone.

8:27 – Going back to John’s question. I only ran into it a few times – one time in one of my classes I made a new behavior subject. That subject got created before the zone. Anything I did outside of Angular zone, didn’t know what was going on. Once I stuck the behavior subject in one of the classes everything got taken care of. You kind of monkey patch...

what else gets monkey patched by zones?

9:28 – Jia answers the question.

10:54 – Monkey-patch is a term that we use in this industry. What is it?

11:05 – Jia answers this question.

Jia: Monkey patch basically is overriding the procedure for the API.

14:05 – What are some of the new things you are doing? I know you’ve done some new things and what’s new with Zones?

14:28 – Lia: It’s all about the performance.

16:55 – Panelist: I didn’t know all about these hooks – so that’s cool! I knew about handling errors, but I didn’t know there are different ways to work with the tasks. I am curious what kind of interesting things have you done with Zones as an Angular developer?

17:38 – Lia answers the questions.

19:15 – Debugging and tests are good for Zones. But it sounds like you are saying that Zones is not good for...

19:50 – Lia answers the question.

20:35 – Panelist: Sounds like Zones is doing what you need out of the box for...

20:51 – Panelist: You improved some of the performance? Zones doesn’t have that much of a footprint and is pretty lightweight. How much did you better the performance? 20-30%?

2:25 – Jia – I think the library is faster. There is a lot of garbage collection.

It’s not that much.

22:47 – [Advertisement – Code Badges!](https://www.kickstarter.com/projects/521063736/codebadgeorg/faqs)

23:38 – Panelist: So it will help with garbage collection. That is good to know. Cool to know that you can optimize such a small library with...

23:48 – Jia comments.

26:09 – Panelist: Gottcha.

26:16 – Jia continues this topic.

Jia: A lot of new things are happening with the testing in the Zone. There are a lot of new features in the syntax.

27:35 – That is a nice feature to add back in.

27:43 – Jia continues the talk.

28:55 – Panelist: There are a lot of tests in this Repo. Do Zones generally work out of the box or do you have to add support for different things? What are the criteria to add support to? Blue Birds added to the list somehow.

29:32 – Jia answers this question.

30:03 – Panelist: Can the GIST team add support or only can the Zone team add it?

30:37 – Jia: Other teams can add support to their libraries. It’s public.

31:10 – Panelist: This is over my head, but is there a plan to get the documents going?

31:32 – Jia adds a comment.

31:41 – Panelist: Google this: What the heck is zones?

An opposite side of the question: What would happen to Angular if you remove Zones.js?

32:10 – Jia answers this question.

332:37 – Zones is effectively how it works sweetly in Angular. It’s not totally true but if you remove Zones.js – which I see some people doing – why would someone do this? Is it heavy is it...?

33:20 – Jia answers the question.

Jia: It’s not good for the Angular element.

34:29 – Panelist: It is an island of Angular.

34:54 – Jia continues this conversation.

35:10 – Panelist: That’s interesting – good to know.

35:18 – Jia: Back to the new features.

38:22 – Jia mentions another feature.

39:43 – JavaScript something haunts you – then you are now a real developer!

40:03 – Jia: Yes, exactly.

40:10 – Panelist: I am going to put some things in the links that the listeners can access. ([NG Zone](https://angular.io/api/core/NgZone))

40:28 – Picks!

40:31 – Advertisement – [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Links:**

- [GitHub](https://github.com)
- [What is New in Zone.js](https://slides.com/jiali/zonejs-2/#/)
- [Thriller Troopers](https://shirt.woot.com/offers/thriller-troopers-1?ref=w_cnt_top20_6_img)
- [Web Tracing Framework](https://google.github.io/tracing-framework/)
- [NG Zone](https://angular.io/api/core/NgZone)
- [Audible – Educated](https://www.audible.com/pd/Educated-Audiobook/B075F8MBMQ?qid=1537995567&sr=sr_1_1&ref=a_search_c3_lProduct_1_1&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=2SHHZ6EJT716D17V863D&)
- [Real Talk – JavaScript](https://realtalkjavascript.simplecast.fm)
- [The dark side of conferences](https://uxdesign.cc/the-dark-side-of-conferences-4b103143179f)
- [Real Talk Java Script’s Twitter](https://twitter.com/realtalkjs)
- [Jia Li’s LinkedIn](https://www.linkedin.com/in/jia-li-9146a222/)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Jia

- [You Don’t Know JS](https://www.amazon.com/You-Dont-Know-Js-Book/dp/B01AY9P0P6)
- [Switching to Angular 2](https://www.amazon.com/Switching-Angular-2-Minko-Gechev-ebook/dp/B0171UHKYA)

Aaron

- [Educated](https://www.audible.com/pd/Educated-Audiobook/B075F8MBMQ?qid=1537995567&sr=sr_1_1&ref=a_search_c3_lProduct_1_1&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=2SHHZ6EJT716D17V863D&)

John

- [Real Talk JavaScript](https://realtalkjavascript.simplecast.fm/)
- https://twitter.com/realtalkjs
- [The Dark Side of Conferences](https://uxdesign.cc/the-dark-side-of-conferences-4b103143179f)

Joe

- [The Developer Experience Bait and Switch](https://infrequently.org/2018/09/the-developer-experience-bait-and-switch/)

### Transcript
