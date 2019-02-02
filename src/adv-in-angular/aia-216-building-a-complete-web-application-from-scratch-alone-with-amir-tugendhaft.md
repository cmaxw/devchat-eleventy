---
layout: layouts/post.njk
title: >
  AiA 216: Building a Complete Web Application from Scratch Alone with Amir Tugendhaft
date: 2018-11-20 11:00:37
episode_number: 216
duration: 42:56
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_216_Building_a_complete_web_application_from_scratch_alone_with_Amir_Tugendhaft.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

**Panel:**

- Aaron Frost
- Brian Love

**Special Guest:** Amir Tugendhaft

In this episode, Aaron and Brian talk with [Amir Tugendhaft](https://twitter.com/amirtugi) who is a web developer who is located in Israel. He finds much gratification developing and building things from scratch. Check out today’s episode where Aaron, Brian, and Amir talk about just that. Other topics include UI Design, Flexbox, UX design, PrimeNG, and ag-Grid.

**Show Topics:**

0:00 – Advertisement: [AngularBootCamp.Com](https://angularbootcamp.com)

0:52 – [Host:](https://medium.com/@frosty/preparing-to-become-a-gde-752b551c88df) Welcome! Today’s panel is myself, Brian, and our guest is [Amir Tugendhaft!](https://twitter.com/amirtugi)

1:13 – Guest: I am a developer and experience with Angular and React.

1:56 – Host: You spend your days/nights there?

2:03 – Panel: He is committed.

2:08 – Host: I am going to back up a second, and Brian could you please introduce yourself, please?

2:26 – [Brian:](https://twitter.com/brian_love?lang=en) I am the CETO at an Angular consulting firm (Denver, CO). We have the pleasure with working with Aaron from time-to-time. My Twitter handle is [@brian_love](https://twitter.com/brian_love?lang=en) – check it out!

2:52 – Host: What is CETO stand for?

2:59 – _Brian answers the question._

Brian: I oversee the crew among other things.

3:31 – Host: What do you want to talk about today, Amir? You are the guest of honor today!

3:40 – Guest.

4:00 – Host: That is a lot of information – that might be more than 1 episode. We have to stay focused!

4:14 – Host: I read one of your recent blogs about Cross Filled Violators. I met you through your blog before we did the

Host: Give us your own ideas about starting your own app.

4:50 – _Guest answers the question._

6:17 – Host: I am biased. But here is a fact. I used to work on a large team (60 people) and everyone committing to the same page app. We were using Angular.js 1.5, which I think they are still using that. I know that it worked but it wasn’t the easiest or fastest one to maintain, but it worked.

7:05 – Brian.

7:10 – Host: What are you trying to do? React doesn’t fulfill that need. I think you are being hyperballic and using extreme cases as the norm. Let’s be honest: we do cool stuff with jQuery plugins when we didn’t have a framework. When they say that the framework is stopping them then I say: I agree to disagree.

8:00 – Host: What do you think, Amir?

8:04 – Guest: I don’t have preferences. I try to build applications through the technologies and create components and simple applications.

8:30 – Brian.

8:33 – Guest: You create the component, and then...

9:21 – Brian: You don’t have to have a template file and another file – right?

9:35 – Guest.

9:48 – Host: I do in-line styles and in-line templates. One thing I learned from React is that I like my HTML, style and code. I like it being the same file as my component. I like that about that: I like single file components. This promotes getting frustrated if it gets too big. Yeah if it’s more than 500 lines than you have to simplify. That’s one of the things that l like.

10:47 – Brian: Modules versus...

10:55 – Guest.

11:07 – Host: I think in [React](https://reactjs.org) and [Vue](https://vuejs.org) you have the word module but in JavaScript you have a file that exports...

11:26 – Host: I have my opinion here and talking with Joe. He made a good point: at a certain level the frontend frameworks are the same. You could be doing different things but they basically do the same thing.

13:57 – Guest: Basically what that means is that the technology used it will do the same thing. Your patterns and practices are huge.

14:17 – Brian: If you are talking about the 3 popular frameworks out there – they are basically doing the same thing. I like Angular a little big more, though. Like you said, Aaron, people tend to pick the same one. I like the opinionated things about Angular. You get properties, components or called props or inputs you are getting a lot of the same features. It comes down to your personal preference.

15:31 – Host: What else Amir?

15:35 – Guest: Let’s talk about the UI.

16:05 – Brian.

16:08 – _Guest asks a question._

16:25 – Brian: How have you tackled this problem?

16:34 – Guest: I kind of ran with it. If there wasn’t something that I liked I started from scratch, because it really didn’t feel right.

16:51 – Brian: I am an enemy of starting over type of thing. You have a lot of engineers who START projects, and they can say that they start this piece, but the experts and choice team members have what it takes to ship a feature. I mean fully ship it, not just 80%, but also the final 20%. I think it takes a lot of pose decision making to say I want to rewrite it but not right now. I still need to ship this code. I have always been a bigger fan as not rewriting as much as possible; however, if you started with good patterns then that’s true, but if you are starting off with bad patterns then maybe yes. I like that opinion b/c you have to start right.

Brian: How do you do your CSS?

19:05 – [Guest.](https://www.linkedin.com/in/amir-tugi/?originalSubdomain=il)

19:52 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

20:30 – Brian: How do you make those decisions, Amir?

20:39 – Guest: I see something that I like and ask myself how do I apply this to my design and I start scaling things.

21:50 – Host: Are you using a tool like[Sketch](https://www.sketchapp.com) for your initial [UI design?](https://en.wikipedia.org/wiki/User_interface_design)

22:05 – Guest.

22:54 – Host: I worked on a project where the client had a [designer (UX).](https://youtu.be/Ovj4hFxko7c)

24:00 – _Host and Guest go back-and-forth._

24:51 – Host: I am sure it’s all about the quality from your designer, too. Hopefully it works well for you and it’s quality.

25:18 – Host: There is a lot to building an app from scratch. I am not a good designer. I am not a designer – I mean straight-up. I got nothing. I appreciate team members that can do that.

26:06 – Guest: Do you write...?

26:35 – Host: Only on the most recent project. The designer didn’t own the HTML CSS but he initially wrote it and then gave it to me and now I own it, and it’s in components. If he wants updates then I have to go and make changes b/c he doesn’t know Angular. If it’s a sketch or a PNG you have to make it look like that. That’s what most of my career has been.

Host: HTML and CSS got me 762x easier once [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) came around! I know there is a decimal there!

28:23 – _Host talks about_ [_Flexbox_](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) _some more._

28:42 – _Guest asks a question._

28:50 – Host: I suppose if I really had heavy needs for a table then I would try CSS grid could solve some problems. I might just use a styled table.

29:12 – Brian: [ag-Grid](https://www.ag-grid.com) or something else.

29:21 – Host: On this recent project...I’ve used in-house design and other things. If I ever needed a table it was there. I don’t rebuild components b/c that can get expensive for me.

30:50 – Brian: Accessibility.

31:00 – Host: Your upgrade just got 10x harder b/c you own the component loop. I really don’t build tables or drop-downs. Only way is if I really need to build it for a specific request.

31:30 – Brian.

31:58 – Host: Let me give you an example. You can think I am crazy, but a designer gave me a drop-down but he told me to use [PrimeNG.](https://codeburst.io/why-not-primeng-852a9dfca6bc) I had the chose of building my own drop-down or the designer has to accept whatever they gave him. I made the UI make what he wanted and I made the drop-down zero capacity and then...

Host: When you click on what you see you are clicking on the...

Host: Does that make sense?

33:35 – Guest.

33:50 – Host.

34:25 – Brian: That is interesting; remember when...

34:58 – Host: We will send this episode to Jeremy – come on Jeremy! Any last ideas? Let’s move onto picks!

35:20 – [Advertisement – Fresh Books! 30-day free trial!](https://www.freshbooks.com)

END – [Advertisement – Cache Fly!](https://www.cachefly.com)

**Links:**

- [Vue](https://vuejs.org)
- [jQuery](https://jquery.com)
- [Angular](https://angular.io)
- [React](https://reactjs.org)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [What is a UX Design?](https://youtu.be/Ovj4hFxko7c)
- [UI Design](https://en.wikipedia.org/wiki/User_interface_design)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Sketch](https://www.sketchapp.com)
- [ag-Grid](https://www.ag-grid.com)
- [PrimeNG](https://codeburst.io/why-not-primeng-852a9dfca6bc)
- [Brian Love’s Twitter](https://twitter.com/brian_love?lang=en)
- [Aaron Frost’s Medium](https://medium.com/@frosty/preparing-to-become-a-gde-752b551c88df)
- [Amir’s Medium](https://medium.com/@amir.tugi)
- [Amir’s Twitter](https://twitter.com/amirtugi)
- [Amir’s GitHub](https://github.com/AmirTugi)
- [Amir’s LinkedIn](https://www.linkedin.com/in/amir-tugi/?originalSubdomain=il)
- [Amir’s Facebook](https://www.facebook.com/AmirTugi)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Fresh Books](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Aaron

- Movie: “[A Star Is Born”](https://www.imdb.com/title/tt1517451/)
- [Concept - Model Driven Forms](https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol)

Amir

- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Arrow Function Converter](https://marketplace.visualstudio.com/items?itemName=Roee.arrow-function-converter)

Brian

- TV Series: “[The 100](<https://en.wikipedia.org/wiki/The_100_(TV_series)>)”
- [Angular Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)

### Transcript
