---
layout: layouts/post.njk
title: >
      JSJ 337: Microstates.js – Composable State Primitives for JavaScript with Charles Lowell & Taras Mankovski
date: 2018-10-30 10:00:01
episode_number: 337
duration: 1:18:15
audio_url: https://media.devchat.tv/js-jabber/JSJ_337_Microstates.js_Composable_State_Primitives_for_JavaScript_with_Taras_Mankovski.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

 **Panel:**

- Aimee Knight
- Charles Max Wood
- Joe Eames 
- AJ O’Neil 
- Chris Ferdinandi&nbsp;

**Special Guests:** [Charles Lowell](https://twitter.com/cowboyd?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) (New Mexico) & [Taras Mankovski](https://twitter.com/tarasm?lang=en) (Toronto)

In this episode, the panel talks with two special guests [Charles](https://twitter.com/cowboyd?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) and [Taras.](https://twitter.com/tarasm?lang=en) Charles Lowell is a principle engineer at [Frontside](https://frontside.io), and he loves to code. Taras works with Charles and joined [Frontside](https://frontside.io), because of Charles’ love for coding. There are great personalities at [Frontside](https://frontside.io), which are quite diverse. Check out this episode to hear about[microstates,](https://github.com/microstates/microstates.js) [microstates with react](https://github.com/microstates/react), [Redux](https://redux.js.org), and much more!

**Show Topics:**

1:20 – Chuck: Let’s talk about microstates – what is that?

1:32 – Guest: My mind is focused on the **how** and not the **what**. I will zoom my mind out and let’s talk about the purposes of microstates. It means a few things. 1.) It’s going to work no matter what framework you are using. 2.) You shouldn’t have to be constantly reinventing the wheel. React Roundup – I talked about it there at this conference.&nbsp;

Finally, it really needs to feel JavaScript. We didn’t want you to feel like you weren’t using JavaScript. It uses computer properties off of those models. It doesn’t feel like there is anything special that you are doing. There are just a few simple rules. You can’t mutate the state in place. If you work with JavaScript you can use it very easily. Is that a high-level view?

7:13 – Panel: There are a lot of pieces. If I spoke on a few specific things I would say that it enables programming with state machines.

7:42 – Panel: We wanted it to fell like JavaScript – that’s what I heard.

7:49 – Aimee: I heard that, too.

7:59 – Guest.

8:15 – Aimee: [Redux](https://redux.js.org) feels like JavaScript to me.

8:25 – Guest: It’s actually – a tool – that it feels natural so it’s not contrived. It’s all JavaScript.

8:49 – Panel.

9:28 – Guest: Idiomatic Ember for example. Idiomatic in the sense that it gives you object for you to work with, which are simple objects.

10:12 – Guest: You have your reducers and your...we could do those things but ultimately it’s powerful – and not action names – we use method names; the name of the method.

11:20 – Panel: I was digging through docs, and it feels like NORMAL JavaScript. It doesn’t seem like it’s tied to a certain framework or library platform?

11:45 – Guest: Yes, we felt a lot of time designing the interfaces the API and the implementation. We wanted it to feel natural but a tool that people reach for.

_(Guest continues to talk about WHY they created microstates.)_

Guest: We wanted to scale very well what you need when your needs to change.

13:39 – Chuck: I have a lot of friends who get into React and then they put in Redux then they realize they have to do a lot of work – and that makes sense to do less is more.

14:17 – Guest: To define these microstates and build them up incrementally...building smaller microstates out of larger ones.

Guest continued: Will we be able to people can distribute React components a sweet array of components ready for me to use – would I be able to do the same for a small piece of state? We call them state machines, but ultimately we have some state that is driving it. Would we be able to distribute and share?

16:15 – Panel: I understand that this is tiny – but why wouldn’t I just use the native features in specific the immutability component to it?

16:42 – Guest: I’m glad you asked that question. We wanted to answer the question...

Guest: With microstates you can have strict control and it gives you the benefit of doing sophisticated things very easily.

18:33 – Guest: You mentioned immutability that’s good that you did. It’s important to capture – and capturing the naturalness of JavaScript. It’s easy to build complex structures – and there is an appeal to that. We are building these graphs and these building up these trees. You brought up immutability – why through it away b/c it’s the essence of being a developer. If you have 3-4-5 levels of nesting you have to de-structure – get to the piece of data – change it – and in your state transition 80% of your code is navigating to the change and only 20% to actually make the change. You don’t have to make that tradeoff.

21:25 – Aimee: The one thing I like about the immutability b/c of the way you test it.

21:45 – Guest: There a few things you can test.&nbsp;

23:01 – Aimee: You did a good job of explaining it.

23:15 – Guest: It makes the things usually hard  easy! With immutability you can loose control, and if that happens you can get so confused. You don’t have a way to have a way to navigate to clarity. That’s what this does is make it less confusing. It gives you order and structure. It gives you a very clear path to do things you need to do. If there is a property on your object, and if there is a way to change it...

25:29 – Guest: The only constant is change no matter what framework you are working on.

24:46 – Chuck: We are talking about the benefits and philosophy. What if I have an app – and I realize I need state management – how do I put microstates into my app? It’s using Angular or React – how do I get my data into microstates?

26:35 – Guest: I can tell you what the integration looks like for any framework. You take a type and you passed that type and some value to the create function so what you get is a microstate.

_(The Guest continues diving into his answer.)_

28:18 – Guest: That story is very similar to Redux, basically an event emitter. The state changes on the store.

Maybe this is a good time to talk about the stability benefits and the lazy benefits because microstates is both of those things.

Stability – if I invoke a transition and the result is unchanged – same microstate – it doesn’t emit an event. It recognizes it internally. It will recognize that it’s the same item. Using that in Ember or Redux you’d have to be doing thousands of actions and doing all that computation, but stability at that level.

Also, stability in the sense of a tree. If I change one object then that changes it won’t change an element that it doesn’t need to change.

31:33 – Advertisement: Sentry.io

32:29 – Guest: I want to go back to your question, Chuck. Did we answer it?

32:40 – Chuck: Kind of.

32:50 – Guest.

32:59 – Guest: In Angular for example you can essentially turn a microstate...

33:51 – Guest: You could implement a connect, too. Because the primitive is small – there is no limit.

34:18 – Chuck summarizes their answers into his own words.

34:42 – Guest: If you were using a vanilla React component – this dot – I will bind this. You bind all of these features and then you pass them into your template. You can take it as a property...those are those handlers. They will perform the transition, update and what needs to be updated will happen.

35:55 – Chuck: Data and transitions are 2 separate things but you melded them together to feel like 1 thing. This way it keeps clean and fast.

36:16 – Guest: Every framework helps you in each way.

Microstates let’s you do a few things: the quality of your data all in one place and you can share.

38:12 – Guest: He made and integrated Microstates with Redux tools.

38:28 – Guest talks about paths, microstates to trees.

39:22 – Chuck.

39:25 – Panel: When I think about state machines I have been half listening / half going through the docs. When I think of state machines I think about discreet operations like a literal machine. Like a robot of many steps it can step through. We have been talking about frontend frameworks like React - is this applicable to the more traditional systems like mechanical control or is it geared towards Vue layered applications?

40:23 – Guest: Absolutely. We have [BIG TEST](https://www.bigtestjs.io) and it has a Vue component.

41:15 – Guest: when you create a microstate from a type you are creating an object that you can work with.

42:11 – Guest: Joe, I know you have experience with Angular I would love to get your insight.

42:33 – Joe: I feel like I have less experience with RX.js. A lot of what we are talking about and I am a traditionalist, and I would like you to introduce you guys to this topic. From my perspective, where would someone start if they haven’t been doing Flux pattern and I hear this podcast. I think this is a great solution – where do I get started? The official documents? Or is it the right solution to that person?

43:50 – Guest: Draw out the state machine that you want to represent in your Vue. These are the states that this can be in and this is the data that is required to get from one thing to the other. It’s a rope process. The arrow corresponds to the method, and...

44:49 – Panel: It reminds me back in the day of rational rows.

44:56 – Guest: My first job we were using rational rows.

45:22 – Panelist: Think through the state transitions – interesting that you are saying that. What about that I am in the middle – do you stop and think through it or no?

46:06 – Guest: I think it’s a Trojan horse in some ways. I think what’s interesting you start to realize how you implement your state transitions.

48:00 – (_Guest continues.)_

48:45 – Panel: That’s interesting. Do you have that in the docs to that process of stopping and thinking through your state transitions and putting into the microstate?

49:05 – Guest: I talked about this back in 2016. I outlined that process. When this project was in the Ember community.

49:16 – Guest: The next step for us is to make this information accessible. We’ve been shedding a few topics and saying this is how to use microstates in your project. We need to write up those guides to help them benefit in their applications.

50:00 – Chuck: What’s the future look like?

50:03 – Guest: We are working on performance profiling.

Essentially you can hook up microstates to a fire hose.

The next thing is settling on a pattern for modeling side effects inside microstates. Microstates are STATE and it’s immutable.

52:12 – Guest: Getting documentation. We have good README but we need traditional docs, too.

52:20 – Chuck: Anything else?

52:28 – Guest: If you need help email us and gives us a shot-out.

53:03 – Chuck: Let’s do some picks!

53:05 – [Advertisement for Charles Max Wood’s course!](https://devchat.tv/get-a-coder-job/)

**Links:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Frontside](https://frontside.io)
- [Redux](https://redux.js.org)
- [Microstates](https://github.com/microstates/microstates.js)
- [Microstates with React](https://github.com/microstates/react)
- [Taras Mankovski’s Twitter](https://twitter.com/tarasm?lang=en)
- [Taras Mankovski’s GitHub](https://github.com/taras)
- [Taras Mankovski’s LinkedIn](https://www.linkedin.com/in/tarasm/?originalSubdomain=ca)
- [Taras Mankovski’s Frontside Bio](https://frontside.io/about/taras-mankovski)
- [Charles Lowell’s Twitter](https://twitter.com/cowboyd?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Charles Lowell’s GitHub](https://github.com/cowboyd)
- [Charles Lowell’s Frontside Bio](https://frontside.io/about/charles-lowell)
- [Schedule Once](https://meetme.so/js-jabber)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [YouTube Talks](https://www.youtube.com/playlist?list=PLuVqdWOQ-PNn_lDYUVgcA4e91qxJzipva)
- Email: [cowboyd@frontside.io](mailto:cowboyd@frontside.io)
- [Working with State Machines](https://shoptalkshow.com/episodes/327-working-state-machines/)
- [Twitch TV](https://www.twitch.tv/c0wb0yd/)
- [BigTest](https://www.bigtestjs.io)
- [Close Brace](https://closebrace.com)
- [REEF](https://github.com/cferdinandi/reef)
- [The Developer Experience](https://infrequently.org/2018/09/the-developer-experience-bait-and-switch/?mc_cid=796f819484&mc_eid=925d8efdf6)
- [YouTube Video](https://youtu.be/E1Q2MWGCADo)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry.io – 2 months free – DEVCHAT/code](https://sentry.io/welcome/)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)

**Picks:**

Aimee

- [ShopTalk Episode 327](https://shoptalkshow.com/episodes/327-working-state-machines/)
- [Professional JavaScript for Web Developers](https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691)
- Technical Debt
- [Stripe](https://stripe.com/files/reports/the-developer-coefficient.pdf)

Taras

- [Twitch Channel](https://www.twitch.tv/c0wb0yd/)
- [Big Test](https://bigtestjs.io)
- [Frontside](https://www.linkedin.com/company/the-frontside)

Charles Lowell

- Chalkboards
- [Sargent Art Chalk](http://sargentart.com/dustless-chalk/http://sargentart.com/dustless-chalk/)

Chris

- [Close Brace](https://closebrace.com/)
- [LaCroix Water](https://www.lacroixwater.com/)
- [Chris’s Git Hub](https://github.com/cferdinandi/reef)

Joe

- [The Developer Experience Bait and Switch](https://infrequently.org/2018/09/the-developer-experience-bait-and-switch/?mc_cid=796f819484&mc_eid=925d8efdf6)
- [Good Bye Redux](https://hackernoon.com/goodbye-redux-26e6a27b3a0b)
- Recording Dungeon and Dragons 

AJ

- [UtahJS Conf](https://conf.utahjs.com/)
- [Start with Why](https://startwithwhy.com/)
- [The Rust Book](https://doc.rust-lang.org/book/)
- [VanillaJS w/ Chris](https://shoptalkshow.com/episodes/274-vanilla-js-chris-ferdinandi/)
- [Zero to One](https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296)

Charles

- Podwrench.com -&nbsp; beta
- getacoderjob.com


### Transcript


