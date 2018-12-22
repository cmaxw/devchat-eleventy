---
layout: layouts/post.njk
title: >
      VoV 037: Vuex, VuePress and Nuxt with Benjamin Hong
date: 2018-11-13 11:00:59
episode_number: 037
duration: 58:59
audio_url: https://media.devchat.tv/viewsonvue/VoV_037_Benjamin_Hong.mp3
podcast: views-on-vue
tags: 
  - views_on_vue
  - podcast
---

 **Panel:**

- Chris Fritz 
- Eric Hatchet
- Divya Sasidharan
- Charles Max Wood

**Special Guest:** Benjamin Hong

In this episode, the panel talks with Benjamin Hong who is a Senior Fullstack Engineer at GitLab, Inc. who currently resides in the Washington D.C. metro area. Ben and the panel talk about Politico and the current projects that Ben is working on. The panelists talk about topics, such as Vue, Vuex, VuePress, Nuxt, among others. Check out today’s episode!

**Show Topics:**

0:00 [– Advertisement – Kendo UI](https://www.telerik.com/kendo-ui)

0:32 – Panel: Hi! Welcome – our panel today is live at Park City, UT.

1:34 – _Benjamin introduces himself._

1:41 – Panel: Politico is a well trafficked website and it’s well known. What are your thoughts about working on a well trafficked website?

2:22 – Guest.

2:44 – Panel: Why did you settle on Vue?

2:50 – Guest: ...I came onto the team and was passionate about helping. We built out the component types. I thought Vue was better suited for the team.

3:36 – Panel: That’s a large team – that’s a lot of people

3:45 – Guest: Yeah, at one time I was writing everything. A lot of people on the team right now didn’t know a lot of JavaScript – but having Vue helps everyone to move the project forward.

4:29 – Panel: They can write just HTML, etc.

4:38 – Guest: Yep, exactly. It helps with communication.

4:55 – _Panel asks a question._

5:00 – Guest: I use an event bust.

5:20 – Chuck: Did you have to move from an event bust to [Vuex](https://vuex.vuejs.org) and what was that like?

5:30 – Guest: We had to move into module-esque anyways.

5:42 – Panel: You probably have [Vuex](https://vuex.vuejs.org) with modules and...?

5:54 – Guest: We are using your enterprise broiler plate!

6:05 – Panel: Yeah, every team uses their own patterns. What files would I see used within your team?

6:16 – _Guest answers the question._

6:55 – _Panel asks a question._

7:01 – Guest: We can keep with the recommended packages fairly well!

7:21 – Panel.

7:26 – Guest: Funny enough at London...we are starting to get a lot with our co-coverage. We have a hard time balancing with unit tests and...eventually we want to look at Cypress.

8:12 – Panel.

8:15 – Guest.

8:19 – Chuck.

8:38 – Panel: I always encourage people to test the unit tests.

9:00 – Chuck: As you adopted Vue what was it like to get buy-in from management. Usually they have a strong backend with Rails, and someone comes in and says let’s use X. How do you sell them on: we are going to use this new technology.

9:30 – Guest: We could really use the user-experience better, and also to offload things from the backend developers. Our desire was to control more things like animation and to specialize those things. That was my selling point.

10:32 – Chuck: I tend to do both on the apps that I’m working on. I told Chris that I was going to switch a lot of things to Vue – some of the things you said I am not interested in the backend b/c it’s too painful.

11:01 – Panel.

11:08 – Chuck: There are things that are really, really good on the backend, but...

11:18 – Panel.

11:24 – Panel: You get the benefits of rendering...

11:43 – Chuck: What are your challenges into Vue?

11:50 – Guest: It’s definitely the scale, because we were a team of 5 and now we are a team of 15. Also, the different time changes b/c we have some people who live in India. Getting that workflow and we are looking at STORYBOOK to help with that.

12:30 – Chuck: Every person you add doubles the complexity of the group.

12:40 – Panel: I think that is conservative!

12:49 – Chuck.

12:56 – Panel: I get to see Chuck in person so this is different!

13:09 – Panel: Challenge accepted!

13:18 – Panel: This is the roast!

13:25 – Panel: Are you working, Benjamin, on a component library? Are you working on that alongside your current project? How do you manage that/

13:38 – Guest: Unfortunately, we have a lot of deadlines and everything is running in parallel!

14:00 – Panel: How do you implement expectations throughout your team?

14:13 – Panel.

14:16 – Guest: It’s for everyone to understand their own expectations and the team’s expectations.

I have to be able to parse it out w/o giving them too much guidance.

15:20 – Panel.

15:25 – Guest: Yep!

15:30 – Panel: ...having to edit the same files and the same lines...

15:36 – Guest: We have been able to keep those in their own lanes!

15:44 – Panel: Yeah that’s no fun – I’ve been there!

15:53 – Chuck: You are working in the development branch – and then their thing breaks my thing, etc.

16:08 – Panel: You are doing dimensional travel! It’s almost like reorganizing a complete novel.

16:30 – Guest: You don’t want your work to drag on too long b/c you don’t want to poorly affect the other team members.

16:53 – Panel: Does that mean you use internal docs to help with the workflow?

17:03 – Guest: Yes, we use the common team board.

17:30 – _Panel asks a question._

17:39 – Guest: Yes, that’s a challenge. I have setup an internal product called Politico Academy.

18:29 – Chuck: How do you fit into what Politico is doing?

18:45 – Guest: They are giving out cutting edge information regarding policies and that sort of thing. We have tools like compass to track your notes within the team and also bills. Politico Pro is like for lobbyists and those fees are very expensive.

19:23 – Panel: Do you have to create graphs and D3 and stuff like that?

19:35 – Guest: I am itching to do that and we haven’t really done that, yet. I would love to do that, though!

19:42 – Panel: Chris will be talking about that which will air on YouTube!

20:02 – Panel: Ben, you make decisions based on architecture – do the members of the team get to contribute to that or no?

20:27 – Guest: Yeah, I have a democratic approach. I want people to show their opinion, so that way they know that their voice is getting heard. I don’t make all the decisions, but I do give some guidelines.

21:11 – Chris: I like to time box it. I do the same thing, too.

21:49 – Chuck: Yeah someone would propose something to a new feature (or whatnot) and we would want to see if we want to explore it now or later.

21:55 – _Panel goes back-and-forth._

23:26 – Panel: On that note- you want to make sure that each developer has submitted a pole request per day. What is universal in regards to coding practices, and code comments, and stuff like that and code style?

23:55 – Guest: We do PREMIER across the board right now.

24:55 – Panel asks a question.

25:08 – Guest: I like having more...if it can show WHY you did it a certain way.

25:33 – Panel: It’s good not to save the data.

25:40 – Chris: Sometimes a SQUASH can be helpful.

25:50 – Divya: I try to commit often and my work is a work in-progress.

26:08 – Chris.

26:13 – Chuck comments.

26:24 – _Panel goes back-and-forth!_

26:43 – Guest: They will write their code and then use Prettier and it will look terrifying b/c it’s like what did you just do. I want them to see the 2 lines they changed rather than the whole file.

27:13 – _Panelist talks about Linting._

27:34 – Chuck.

27:39 – Chris: If it’s not the default then...

27:55 – Divya: When you manually setup your project you can run a prettier pre-commit.

28:00 – Chris: My pre-commits are much more thorough.

28:37 – _Panel goes back-and-forth!_

29:26 [– Advertisement – Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

30:02 – Panel: Can you talk about [VuePress,](https://vuepress.vuejs.org) please?

30:06 – Guest: Yeah!

_The guest talks about_ [_VuePress_](https://vuepress.vuejs.org) _in-detail!_

31:21 – Chuck.

31:25 – Panel.

31:44 – Chuck: I am curious about this – what’s the difference between [VuePress](https://vuepress.vuejs.org) and [Nuxt](https://nuxtjs.org)?

31:58 – Guest answers the question.

32:19 – _Chris adds his comments into this topic (_[_VuePress_](https://vuepress.vuejs.org) _and_ [_Nuxt_](https://nuxtjs.org)_)._

32:47 – Guest.

33:02 – Divya.

34:24 – Chuck: If they are fluent in English and native in another language and it’s easy to figure where to put everything.

34:41 – Chris: Yeah they have a clear path for to clear up any documentation potential problems.

35:04 – Chris: ...the core docs and the impending libraries and the smaller ones, too.

35:17 – Divya: When you are creating the docs and you are thinking about NTN it’s important to think about the English docs. They say that it’s best to think of the language if that doc was to be translated into another language.

35:50 – Chris: Definition: “A function that returns another function” = higher function.

36:19 – Chuck: We are running out of time, and let’s talk about user-scripts. You have co-organized a group in Washington D.C. I tell people to go to a group to help like Meetups. What do you recommend?

37:00 – Guest: A lot of it is to be that community leader and show-up. To figure out let’s go ahead and meet. I know a lot of people worry about the “venue,” but go to a public library or ask an office for space, that’s an option, too.

38:15 – Panel: We have these different [Meetups](https://www.meetup.com) and right now in my area we don’t have one for Vue.

38:37 – Guest: Yeah, I recommend just getting it going.

39:04 – Chris: Yeah, just forming a community.

39:16 – Chuck: D.C. is a large area, so I can see where the larger market it would be easier. But even for the smaller communities there can be 10 or so people but that’s a great start!

39:48 – Guest: Yeah, once it gets started it flows.

40:02 – Chuck: What are the topics then at these meetings?

40:05 – Guest: I like to help people to code, so that’s my inspiration.

40:50 – Divya: I help with the Chicago [Meetup](https://www.meetup.com) and tons of people sign-up but not a lot of people to show – that’s our challenge right now! How do you get people to actually GO!

41:44 – Guest: I tell people that it’s a free event and really the show up rate is about 30%. I let the people to know that there is a beginning section, too, that there is a safe place for them. I find that that is helpful.

42:44 – Chris: Yeah, even the language/vocabulary that you use can really deter people or make people feel accepted.

43:48 – Chuck: Let’s talk about the idea of ‘new developers.’&nbsp; They would ask people for the topics that THEY wanted to talk about.

44:37 – Divya: From an organizer’s perspective...

46:10 – Chuck: If you want people to show-up to your Meetups just do this...a secret pattern!

I did a talk about a block chain and we probably had 3x to 4x a better turnout.

46:55 – Panel.

47:00 – Divya: The one event that was really successful was having Evan and Chris come to Chicago. That event was eventually $25.00 and then when Evan couldn’t come the price dropped to $5.00.

48:00 – _Panel goes back-and-forth._

48:22 – Chuck: Where can they find you?

48:30 – Guest: [BenCodeZen!](https://www.bencodezen.io)

48:40 –[Advertisement – Fresh Books! DEVCHAT code. 30-day trial.](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284659279616&source=GOOGLE&gclid=EAIaIQobChMI1uiA0Jas3gIVirrACh04fwTjEAAYASAAEgJxqvD_BwE&gclsrc=aw.ds)

**Links:**

- [Vue](https://vuejs.org)
- [React](https://reactjs.org)
- [Angular](https://angular.io)
- [JavaScript](https://www.javascript.com)
- [DevChat TV](https://devchat.tv)
- [Graph QL](https://graphql.org)
- [VuePress](https://vuepress.vuejs.org)
- [Nuxt](https://nuxtjs.org)
- [Meetup](https://www.meetup.com)
- [1 Chicago Meetup for Fullstack JavaScript](https://www.meetup.com/Fullstack-JavaScript-Chicago/)
- [Ben’s LinkedIn](https://www.linkedin.com/in/hongb1)
- [Ben’s Website](https://www.bencodezen.io)
- [Ben’s Twitter](https://twitter.com/bencodezen?lang=en)
- [DevChat TV Past Episode with Benjamin Hong (MJS 082)](https://devchat.tv/my-javascript-story/mjs-082-benjamin-hong/)

**Sponsors:**

- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284659279616&source=GOOGLE&gclid=EAIaIQobChMI6NHV7MSb3gIVh7bACh0hhAD5EAAYASAAEgI9K_D_BwE&gclsrc=aw.ds&dclid=COL6yu3Em94CFRi8TwodLnkP0A)
- [Cache Fly](https://www.cachefly.com)
- [Kendo UI](https://www.telerik.com/kendo-angular-ui/?utm_medium=cpm&utm_source=adventuresinng&utm_campaign=dt-kendo-ang2-nov16&utm_content=audio)
- [Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

**Picks:**

Divya

- Creator Summit - No Link

Chris

- [“Chuck”](https://devchat.tv/)
- Take a break when traveling to conferences and such
- [Vue.js in Action](https://www.amazon.com/Vue-js-Action-Eric-Hanchett/dp/1617294624)

Eric

- [Stackblitz](https://stackblitz.com/)

Charles

- [The One Thing](https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results-ebook/dp/B00C1BHQXK/ref=sr_1_1?ie=UTF8&qid=1541984885&sr=8-1&keywords=the+one+thing)
- [Self Publishing School](https://self-publishingschool.com/)

Ben

- [Ted Talk by Elizabeth Gilbert](https://www.ted.com/talks/elizabeth_gilbert_on_genius?language=en)
- [Vue.js Meetups](https://www.vuemeetups.org/)


### Transcript


