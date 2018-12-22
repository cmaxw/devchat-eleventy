---
layout: layouts/post.njk
title: >
      EMx 026: Higher Level Functions GenState Deployments with Bill Peregoy
date: 2018-11-06 11:00:19
episode_number: 026
duration: 54:06
audio_url: https://media.devchat.tv/elixir-mix/EMx_026_Higher_Level_Functions_GenState_Deployments_with_Bill_Peregoy.mp3
podcast: elixir-mix
tags: 
  - elixir_mix
  - podcast
---

 **Panel:**

- Mark Ericksen
- Josh Adams 
- Charles Max Wood 

**Special Guest:** Bill Peregoy

In this episode of Elixir Mix, the panel talks with Bill Peregoy who is a software engineer who uses Elixir and loves Graph QL. The panel talks with Bill about his Elixir background, in addition to past and current projects. Check out today’s episode to hear the panel talk about Elixir, Graph QL, code reviews, and much more!

**Show Topics:**

0:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)&nbsp;

1:07 – Chuck: Tell us who you are and why you are famous?

1:16 – Guest: Here it goes...I have a diverse background. I have a background in hardware and went into software and it got me into Ruby. From there I moved to the software world and in constant contact with a Ruby project. Then I found an Elixir book and thought it was really cool. About a year ago I started working with a consulting company that uses Elixir. They have a cool entrepreneur group. Then about 3 months ago I transferred to another project.

2:41 – Panel: The [MBTA?](https://www.mbta.com)

2:49 – Guest: You thought I was using old crust technology, but they are using new technologies.

3:06 – Panel: You have this hardware background have you looked at NERVES?

3:17 – Guest: I have an interest in it.

3:34 – Let’s talk about deploying Elixir apps. Getting into Elixir might be interesting to talk about? Let’s talk about how you got into Elixir, please.

3:55 – Guest: I had an easy slide into it.

_The guest talks about how to structure code and how he learned about Elixir._

4:34 – Chuck: Where would have gotten into trouble if you didn’t have that?

4:39 – Guest: ...how do you organize code? It’s a bunch of modules with functions in them.

5:19 – Panel: You mentioned code reviews – and to me that’s how you learn something fast.

5:30 – Guest: I was lucky to have worked with a person who is really picky about code reviews. They were detailed and I learned a lot from him.

5:53 – Panel: I give code reviews, too. What makes a good code review from the receiving end?

6:12 – _Guest answers the question._

Guest: Don’t write the code for me, but...here is a general direction.

6:37 – Panel: I give the person a wrong review so they have to learn it.

7:00 – Chuck: Would have it been easier if it was a smaller project?

7:10 – Guest: I think it helped that it was a larger project.

7:29 – Chuck: We have talked about deployment and other tools that you’ve used. What I am curious about – you were using AWS and ECS can you talk about that, please?

8:00 – Guest: It was a wild ride for me. We knew we’d have to get there eventually and went for it. We never had deployed an Elixir app before. I had little knowledge with AWS, so there were thousands of new things I was learning in one week. I learned a lot from this guy and he said let’s get the app running, then let’s take it to an RDS, then let’s make sure this and that work.

There is a lot going on there, but breaking it down you could figure it out when they came up.

It was a lifesaver having his work b/c it would have taken me weeks instead of a few days.

9:28 – Chuck: My wife and I watched [The Martian](https://www.imdb.com/title/tt3659388/) a few days ago. The character said: you solve one problem at a time.

9:47 – Guest: Yes.

10:00 – Guest: The article, [“Guide to Deploy a...”](https://joaquimadraz.com/guide-to-deploy-an-elixir-phoenix-app-to-aws-ecs)

10:20 – Guest: I understood the pieces very well.

10:30 – Panel: Setting up an umbrella project. Is that how you have yours set-up?

10:48 – Guest: Single Phoenix application for me.

11:15 – Panel: Sounds like you were learning a lot of different technologies – any big “AH HA” moments?

11:30 – _Guest answers the question._

12:15 – Panel: I like how the Distillery 2.0 Guide and the docker file...

12:30 – Chuck: Walk us through your structure of your talk?

12:39 – Guest: Yes, higher order functions - that’s what I was talking about. Where in the Elixir world you want to pass around functions. I had this idea that I had one task that was very similar but you had to do it multiple times. To do that I defined one piece of code that...

It was a way to reuse a lot of code and...

13:51 – Panel: That is a pattern I enjoy using. Instead of using a mocking library I like a function that can direct it. The thing I enjoyed about it was that I could have a test data and a test interface in a production environment. I could create a customer...

15:06 – Guest.

15:44 – Guest: Gen state is pretty awesome. It’s not in Elixir Proper, yet.

16:55 – Chuck: I can see how that is helpful. You have to manage the pipeline on your own.

17:18 – Guest: You can upload a certain number of permits. That can be handled behind the scenes.

17:45 – Panel: Yeah the first state was manage the Q and then...

18:48 – Guest: That is what I am doing right now – one at a time right now. If I need more processing on this one node, I can...

19:20 – Panel: That’s when Elixir feels very powerful.

19:26 – Guest: That’s a talk I have a lot. Ruby is great, but when you dive into OPT in Elixir then it’s amazing.

19:54 – Chuck: We are starting to get there with Elixir. I don’t miss as much stuff with Ruby as I did before.&nbsp;

20:10 – Guest: What libraries I don’t need and I haven’t come across that just yet.

20:44 – _Panel asks a question._

20:50 – Guest: I wasn’t directly involved. They are working with predictions for bust lines. And they grab data form many different sources. They are trying to combine all that data and it has been a good solution for them.

21:25 – Panel: Since you have a Ruby background and hardware – what is the Elixir system like for you?

21:41 – Guest: I haven’t come across too many problems. Elixir’s language tends to be smaller – which I like. I think people from JavaScript like having NEW things all of the time. Elixir is done and we are just adding small things here and there.

22:13 – Panel: Yeah, I agree. Elixir is a mature platform right now.

22:45 – Guest: Elixir is very mature – I agree.

23:10 – Panel: I think it being built with care is nice.

23:34 – Guest: I love diving into Elixir and source code. I know exactly what I need. In some Ruby libraries they are so heavily dependent on...

24:05 – [Loot Crate!](https://www.lootcrate.com)

25:13 – Chuck.

25:40 – Guest.

25:50 – Panel: Being explicit and concise at the same time I don’t feel so bad.

26:00- Chuck: ...I want to know that those are there. If it was – you have to go through all of this ceremony – that’s boilerplate that I feel doesn’t’ add a lot.

26:36 – Panel: Getting out a functional language...being able to see a module and it has every sort of path that I can run is nice.

27:00 – Guest.

27:37 – Panel: I did that a bit for my Rail code. People didn’t like that it wasn’t “normal.”

27:52 – Guest.

28:09 – Panel: Coming into this project where one of the developers likes using MACROS. It’s been a challenge b/c MACROS still let’s you create magic. We talked with Sasha and he queued me to this document and it’s the library guidelines. In the anti-patterns it says: avoid macros.

29:32 – Guest: ...but you should think twice before you dive into macros.

29:50 – Panel: I used macros once to enforce...

30:01 – Panel: What are your feelings on dialyzer – what do you think?

30:15 – Guest: I think it’s the way of the future - I love it.

30:58 – Panel: I am trying VS code and it does incremental dialyzer compilation.&nbsp;

31:27 – Guest: Of course the problem with dialyzer are the error messages. It can be frustrating.

31:40 – Panel.

31:43 – Guest: ...eventually I would figure it out. I went dialyzer front to back on my current project. A month into the project I wasn’t writing new specs, and then I realized I hadn’t done it in awhile, and of course I have a 500 error on the server. Turns out I was...

33:00 – Panel: Yes. I encourage people to...

33:07 – Guest: The way it captures things is that...

33:29 – Panel.

33:42 – Panel: We talked about that on the previous episode. It’s an RC right now, but it’s been helpful. There is a explained option. It will give me an example, I didn’t know how to fix it but...

34:14 – Guest: It can help you write simpler code.

34:47 – Panel.

34:52 – Guest: With an [Elm](https://elm-lang.org) background I think it helped me.

35:13 – Panel.

35:45 – Guest: My dream world would be...

35:55 – Panel: Josh, how does it do it?

36:03 – Panel: What is [Elixir LS](https://github.com/JakeBecker/elixir-ls)?

36:09 – Panel answers the question.

36:50 – Panel: I have used [ATOM](https://atom.io) as an editor...how do you like [visual studio code?](https://code.visualstudio.com)

37:01 – _Panel answers the question._

37:38 – Panel: I have used [FLUTTER.](https://flutter.io)

37:44 – Chuck: I like it.

38:20 – Chuck talks about Flutter and the advantages of it.

38:34 – Guest: What editors do you like, Bill?

38:36 – Guest answers the question.

38:54 – Panel.

39:00 – _Guest says that it is something worth trying._

39:07 – Chuck: Try it you will like it – there is an ATOM plugin, too.

39:36 – Panel: I hate the name visual studio code.

39:43 – Panel.

40:02 – Panel: I know you have some feelings of Graph QL?

40:12 – Guest: It is love in every sense. One day in vacation...

41:14 – Panel: I like it, too.

42:01 – Guest: I haven’t much experience there. I played years ago with Graph QL and it looked encouraging and thought it was hard to build one of those things. To help debug as you are writing them is out of this world!

42:30 – Panel: I can look at the schema in Graph QL, here are the mutations I have available.

42:50 – Panel: The docs are right they can’t be wrong.

43:03 – Guest.

43:38 – Chuck: What are you working on now and what are you struggling with?

43:48 – Guest: None of them are super, super hard but today I am trying to learn how to send...

44:14 – Guest: There are a lot of new things for me like AWS, new technologies and a tight schedule. Trying to get new things done.

44:33 – Chuck: What do I learn next – that is a question that I hear a lot.

44:43 – Guest: Yeah, learning when I need them but the exception is Graph QL for me. Learn things as we go – nothing is too scary b/c there are proof of concepts out there.

45:32 – Chuck: People will ask this when they are trying to work on a project.

45:44 – Guest: I try to learn things on these&nbsp;side projects. I usually bail out before the really hard stuff.

46:00 – Chuck: Picks!

46:14 – [Fresh Books!](https://www.freshbooks.com)

**Links:**

- [Ruby](https://www.ruby-lang.org/en/)
- [Elixir](https://elixir-lang.org)
- [Elm](https://elm-lang.org)
- [Atom.io](https://atom.io)
- [Flutter.io](https://flutter.io)
- [JavaScript](https://www.javascript.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [React](https://reactjs.org)
- [Erlang](https://www.erlang.org)
- [Guide to Deploy a...](https://joaquimadraz.com/guide-to-deploy-an-elixir-phoenix-app-to-aws-ecs)
- [YouTube Video – Bill Peregoy](https://www.youtube.com/watch?v=G8_SCecwUJ8)
- [GenStage](https://github.com/elixir-lang/gen_stage)
- [DockYard Article](https://dockyard.com/blog/2018/08/23/announcing-distillery-2-0)
- [Library Guidelines](https://hexdocs.pm/elixir/library-guidelines.html#anti-patterns)
- [Avoid Macros](https://hexdocs.pm/elixir/library-guidelines.html#avoid-macros)
- [VS CODE](https://github.com/JakeBecker/vscode-elixir-ls)
- [Elixir LS](https://github.com/JakeBecker/elixir-ls)
- [VS CODIUM](https://github.com/VSCodium/vscodium)
- [Graph QL](https://graphql.org)
- [Absinthe](https://absinthe-graphql.org)
- [DIRENV](https://direnv.net)
- [HEX DOCS](https://hexdocs.pm/distillery/home.html)
- [Bill’s GitHub](https://github.com/billperegoy)

**Sponsors:**

- [Loot Crate](https://www.lootcrate.com)
- [Get a Coder Job!](https://devchat.tv/get-a-coder-job/)
- [Fresh Books](https://www.freshbooks.com)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Mark

- [Direnv](https://direnv.net/)

Josh

- [Flutter](https://flutter.io/)

Bill

- [Distillery Doc](https://dockyard.com/blog/2018/08/23/announcing-distillery-2-0)

Charles

- [Extreme Ownership](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2)


### Transcript


