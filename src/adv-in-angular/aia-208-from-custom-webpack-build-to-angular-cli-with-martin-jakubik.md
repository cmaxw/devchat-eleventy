---
layout: layouts/post.njk
title: >
      AiA 208: From Custom Webpack Build to Angular CLI with Martin Jakubik
date: 2018-09-25 11:00:11
episode_number: 208
duration: 54:57
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_208_From_Custom_Webpack_build_to_Angular_CLI_with_Martin_Jakubik.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

 **Panel:**

- Alyssa Nicholl
- Joe Eames
- John Papa
- Ward Bell 

**Special Guests:** [Martin Jakubik](https://medium.com/bratislava-angular)

In this episode, the Adventures in Angular panel talk with [Martin Jakubik](https://medium.com/bratislava-angular) and he has been working with Angular for the last three years. He has one large and one small Angular application, which the panel talks about.

**Show Topics:**

2:31 – Alyssa likes to be called...

2:40 – Alyssa: You have a large and small application – what makes it small? Is it the user-base?

2:56 – Martin: It is one module out of ten or twenty components.

2: 59 – Panelist: Only 1 Angular module?

3:47 – Panelist: Joe went off on how much he hates modules. I am sorry JP we had to throw that in that?

4:04 – Joe: I am an anti-modulist.

4:11 – Martin: Just one module.

4:21 – Panelist: When you are building an application with one module – start us from the beginning, what does it look like?

4:38 – Martin: It is actually quite special. It has to run in an iFrame, and all it does it allows the user to add into the experiment.

5:05 – Alyssa: Is it like a CMS?

5:10 – Martin: It is like Google Optimize. The application is quite simple and every component is in that one module.

5:36 – Panelist: How many do you have?

5:44 – Martin: There are less than 10 services and 20 components at most.

5:57 – Panelist: I feel personally, I feel like that I a decent size?

6:11 – Panelist: That makes perfect sense. If there is no routing or nothing...

6:40 – Panelist: Asks a question, and clarifies the question to Martin.

7:48 – Panelist: It is nice and clean.

7:55 – Panelist: I do, too.

8:08 – Alyssa: How new is it?

8:15 – Panelist: June/July?

8:32 – Martin: I am using the new style.

9:01 – Panelist: I am leery of using it.

9:13 - Panelist: I would like to clarify. When you mention you have 20 components...

9:40 - Panelist: Do it.

10:34 – Panelist: Webpack. Can you explain what that is and how you solved it?

10:57 – Martin: I don’t think I did anything special. I wanted to know how it works. I used webpack and used their configurations. Several months into the project then I...

11:40 – Panelist: Why did you decide not to use the CLI? This is like an Iron Man thing.

11:55 – Panelist: I think it’s a pain thing.

12:05 – Martin: I wanted to know how it works.

12:32 – Martin: I started from scratch, I can’t remember.

12:44 – Panelist: Whenever I use webpack it makes my head spin.

12:56 – Martin: The application was very simple. I was doing more blogging.

13:45 – Panelist: It is doing more configurations on the fly for you. It’s wonderful if it works and if it doesn’t work then I don’t know what you’d do.

14:17 – Martin: That’s why I did it, so I can appreciate all the magic.

14:30 – Panelist: How big is big?

14:36 – Martin: Enterprise level. 100 different components.

15:06 – Panelist chimes in.

15:13 – Panelist: That is complex.

15:28 – Panelist: let’s add more modules to add to the complexity...

15:55 – Alyssa: When you took your app to the CLI was that hard?

16:06 – Martin: That took me one whole day. The module is so simple that’s why.

16:32 – Panelist talks about this topic.

17:39 – Panelist asks a question.

17:53 – Panelist: Fixing any problem ... ever work on tooling help people if they have their stuff in the right file name?

18:18 – Martin: I used [Cypress.](https://www.cypress.io)

18:58 – Panelist: Under what situation would you recommend it to anyone? Do it your own webpack configuration?

19:23 – Martin: Only if...

19:51 – Alyssa: What if you wanted to add a watermark to each file, do you have to stop adding the CLI?

20:13 – Panelist: So am I...what are the boundaries, I don’t know what they are? I’m curious.

20:41 – Panelist: Are you asking, Alyssa, how you would customize it?

21:09 – Panelist: You won’t loose all the features that you get. You now elected out of that place where they had it; webpack configurations.

22:12 – Panelist: What happened to it ejecting? How do you get it out of there?

22:26 – Good question! I have – I like to play with scissors.

22:43 – [Advertisement](https://www.digitalocean.com/)

23:32 – Panelist reads a message from the company.

How do you get that voice?

24:10 – First you have to have a really deep sinus cold.

25:00 – Panelist: Do you live without eject? I really don’t care. What I care about...Scratch that! I want to know what kinds of things you can’t do with a CLI that would drive you to do your own application? What other things could you not do in webpack.

25:50 – Martin: I wanted to see how it works.

25:56 – Panelist: Now I use CLI and all it’s features except testing. I use Cypress completely separate than CLI.

26:46 – Panelist: I feel like it’s talking to the one person without a cellphone.

27:01 – Panelist: Wow! I had no concept that life could be like that! I thought you had to have a cellphone.

27:29&nbsp; – Martin: What does anyone use the CLI for anyways?

27:44 – Martin: I use it for unit tests.

27:52 – Panelist: Another question.

28:30 – Alyssa: You write things out by hand because it’s easier?!

28:44 – Panelist: You copy, and paste and it’s less work.

29:06 – Panelist: It feels easier.

29:22 – Joe: No, I am serious.

29:48 – Joe: Yes, I am amazing.

30:30 – Martin talks about another topic.

30:48 – Alyssa: When you generate a component do you put it into a different file?

31:29 – Panel: We are all friends here and we aren’t shaming anyone here. We are joking here.

32:00 – Alyssa: It’s that he can write it from memory.

33:08 – Panelist: I have been using [Vue](https://vuejs.org) lately.

He also talks about Angular and mentions [Sarah Drasner](https://twitter.com/sarah_edo?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor), too.

34:26 – Panelist: Not everyone has a memory like him, though.

35:32 – Panelist: The fourth version of [Renderer](https://angular.io/api/core/Renderer).

36:28 – Panelist: We are not talking about Nirvana the band, here.

36:46 – Alyssa: It will be the new Renderer. It’s out for you to try. Check out Angular Air. He was trying out IB yourself right now. People are flipping out about it. I am excited to see how my Angular app runs differently now. Here is the code that was generated, here is the code that...

I am not sure that there is a promise date. Any secrets heads-up on when it will come out?

38:22 – Panelist: The big question what does this mean for my existing code? Do I have to change my existing code?

38:48 – Alyssa: The Angular team is working so that there are minimal changes. I don’t have a good answer. NGGC. For third-party libraries you run it through and it...

I don’t know what that means for the community.

39:49 – Panelist: My hope is that they...

40:03 – Alyssa: For your third-party...

40:18 – Panelist: Question: between your small and large pack? What architectural differences are there?

40:44 – Martin: I have a template edit.

41:03 – Panelist: Come to my...

41:32 – Panel talks about talks that Jon can do.

42:13 – Panelist: True story...

_The panel is having fun going back and forth with jokes._

43:03 – Panelist: This kind of stuff creeps into production code. That’s the great thing about copy and paste.

43:21 – Panelist: We had a rule, though, if it happens more than once let’s put into our build.

44:20 – It’s 3 hours if you have a CI process, if you don’t...

44:33 – Console.log

44:49 – Martin chimes in.

45:14 – Panelist: Let’s talk about an iFrame in your app?

45:27 – Martin: The point is to be able to do it with any...

Make sure that it doesn’t collide.

The CSS wasn’t separated.

I had to put my application inside an iFrame.

46:27 – Panelist: Thanks for coming on for us, Martin.

46:37 – Picks!

46:44 - [Advertisement](https://devchat.tv/get-a-coder-job/)

**Links:**

- [Martin Jakubik’s Medium](https://medium.com/bratislava-angular)
- [How to Copy, Cut, Paste for Beginners by Melanie Pinola](https://lifehacker.com/5801525/help-new-pc-users-learn-how-to-copy-cut-and-paste)
- [Art Joker Blog](https://artjoker.net/blog/when-will-angular-7-be-released-top-changes-coming-in-angular-7/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_269)
- [@AngularMine](http://cl.nicoll.co/1e21419a0e56)
- [Cypress](https://www.cypress.io)
- [Vue](https://vuejs.org)
- [Renderer](https://angular.io/api/core/Renderer)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Get a Coder Job course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Alyssa

- Question as my pick – About [Angular 7](https://artjoker.net/blog/when-will-angular-7-be-released-top-changes-coming-in-angular-7/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_269)...(47:52) True or False?

Martin

- Thank you for having me today. 
- Present your work more. 
- I challenge you all to cook. 
- [Blog: Bratislava Angular](https://medium.com/bratislava-angular)

Ward

- [How to Copy, Cut, and Paste](https://lifehacker.com/5801525/help-new-pc-users-learn-how-to-copy-cut-and-paste)

Joe

- Brian Holt – [Eleven Tips to Scale Node.js](https://medium.com/microsoftazure/eleven-tips-to-scale-node-js-65cbf6deef6e)
- NPM scripts – I relearned something “new” lately.


### Transcript


