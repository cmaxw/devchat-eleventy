---
layout: layouts/post.njk
title: >
      AiA 214: NgRx Tips & Tricks with Adrian Fâciu
date: 2018-11-06 11:00:47
episode_number: 214
duration: 1:02:17
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_214_NgRx_Tips_%26_Tricks_with_Adrian_Faciu.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

 **Panel:**

- Charles Max Wood
- John Papa

**Special Guest:** [Adrian Faciu](https://medium.com/@adrianfaciu)

In this episode, Chuck talks with [Adrian Faciu](https://medium.com/@adrianfaciu) who is a developer for Visma and is a blogger. The panel talks to Adrian about his blog titled, “NgRx Tips & Tricks.” They ask Adrian in-depth questions about NgRx, among many other topics. Listen to today’s episode for more details!

**Show Topics:**

0:00 – Advertisement: [AngularBootCamp.Com](https://angularbootcamp.com)

0:55 – Chuck: Hi! Our guest is [Adrian Faciu.](https://medium.com/@adrianfaciu)

1:10 – Guest: Hello! I am [Adrian](https://medium.com/@adrianfaciu) and I am a developer who works for a Norwegian company, but I live in Romania!

1:35 – Chuck.

1:36 – Guest.

1:47 – Chuck: The market is so global. I have talked with many different guests from different parts of the world – it’s really neat! It’s this global phenomenon.

2:12 – Guest: It’s a great thing!

2:23 – Chuck: They have an office where you live?

2:31 – Yes.

2:37 – Chuck: How are you guys using Angular over there?

2:47 – Guest: We have several different products. We customize using them with internalized tools.

3:04 – Chuck: [Real quick let’s talk about your blog post.](https://blog.angularindepth.com/@adrianfaciu) I will admit I am not that familiar with NgRx, so I will ask newbie questions. Now do you want to explain what this is?

3:41 – Guest: Sure! The short story of the article is I saw people doing things the hard way. And after I figured out some things, people encouraged me to write about my experience.

4:37 – Chuck: John Papa just signed-in!

4:53 – Guest: Yes NgRx is...

5:02 – Chuck: You used classes for all actions what do you mean by that?

5:05 – _Guest answers the question into detail._

6:31 – Chuck: Let’s say we have a class that uses a log error...

6:42 – Guest: For example you have actions that...

7:02 – Chuck: When you use the reducer...

7:10 – Guest: There are other tricks we can use like keeping all of them in the same file...

8:00 – Guest talks about the union type.

8:24 – Chuck: You learned this by doing things wrong – what happens when you do these things wrong?

8:30 – [Guest:](https://github.com/adrianfaciu) If you don’t put all of your classes in the right file then you end up with a lot of files. If you don’t create hero types then you’d have to...

10:02 – Chuck: If you import user actions then does it import all of the other types?

10:08 – Guest: Import everything from that file.

10:17 – Chuck: If you have any questions, John, feel free to chime-in!

10:29 – John: Yeah I am scanning through this.

The negative I hear a lot of through actions, it’s cause we create constants – the action class creators, it seems to cause an undue amount of stress. How much actual code do you actually have to write – how do you feel about that?

11:12 – Guest: I didn’t want to write all of this code! That’s what I wanted to avoid.

11:44 – John: I wrote them, didn’t like them, I went back to them...

It wasn’t just that I created a new action I had to create the constant and other things – also the place you do the union type, I’d forget to do the union type at the end! If you don’t have all of those things then it won’t work. Even on a simple project I’d have 120 lines of code for a simple task.

12:49 – Guest: Yes. Sometimes I would forget this or that. I’d have to figure out what I did wrong. I went back and created classes for a lot of things. I like the benefits.

13:19 – John: I like your ideas and your tips in your [blog.](https://blog.angularindepth.com/@adrianfaciu)

How do you feel about the NAMES of those actions?

13:55 – Guest.

14:51 – John: Important part is the naming of the string inside of it – that’s the value...

So you can see the actions that are being displayed.

15:25 – Guest: If you didn’t do it right that’s where the problem would be.

15:38 – John: To me it’s a love/hate relationship b/c there is so much code to it. I usually copy and paste which means that I usually forget to change something. I agree, but I don’t’ like creating it.

16:05 – Guest: I’ve been trying to figure out a solution for it eventually I gave up.

16:23 – John: Moving onto effects – inside that happens inside of the Redux cycle – if you want to do something outside of it that’s when you do effects right?

16:40 – Guest.

16:49 – John: Using the effects is good or do it a different way?

17: 20 – Guest: It makes my components cleaner. I have seen projects that DON’T use it and it’s not the best.

17:36 – John: Like getting a list of customers...

_(I am using my hands and nobody can see me!)_

It’s weird to me to NOT use the effects!

18:52 – Guest: If you implement some type of caching then it’s everything to put everything in the state.

19:07 – Chuck: I haven’t used it as much as I would like, but I haven’t do much with it.

19:23 – John: I am curious from somebody hasn’t dove into it – does effects make sense to you, Chuck?

19:39 – Chuck: It seems like effects is a side effect? Like calling out an external API...

20:10 – John: Yeah even multiple effects.

_John asks a question._

20:23 – _Guest answers the question._

20:29 – Chuck: I like that you can make constrained assumptions and all of the complicated...

21:10 – Guest: I am using my effects like functions.

21:26 – _John’s question._

21:31 – Chuck: Doing everything!

You said implement the 2-payload method – that doesn’t make sense?

21:43 – Guest: Not 100% convinced you need it. What people are doing on these actions...

22:43 – Chuck: How much magic you want?

22:50 – Guest.

22:59 – John: I am confused about ERROR HANDLING. What do you advise for people to do?

23:21 – Guest: Basically, when you deal with that effect you deal with the actions, and the actions...

If you get an error on it it’s done. I was trying to explain there that...do it on another stream. Try it on another stream and handle it. What happened to me – I did it on the action state and I got an error and then everything will stop.

24:27 – John: That’s not good!

24:32 – Chuck.

24:35 – John: Good tip!

24:40 – Chuck: Angular has gotten better at that. I still find, though...

25:06 – John.

25:16 – John: Hey I appreciate these blog posts that don’t always show the happy path. To show the unhappy path is a good idea.

25:32 – Chuck.

26:00 – Going down your list, Adrian, let’s talk about effects are services. I agree, but not that we have...

26:24 – Guest: I have seen cases where people forget that. They say I want to call a service, how do I do that? They forget...

26:50 – [John:](https://twitter.com/John_Papa?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) You have to provide your services somewhere. The old way was you could go into the...

What do you do?

27:28 – Guest: Most of the applications...

28:17 – John.

28:25 – [Chuck:](https://twitter.com/cmaxw?lang=en) I love deleting code!

28:32 – John: You end up in a spaghetti pool, though, if you needed that deleted code. Nooooo!!!

29:00 – Chuck.

29:01 – Guest.

29:10 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

29:49 – John: Let’s talk about reducers – the smallest part of your tip sections. You say, “keep them simple” – how do you keep them simple?

30:07 – Guest: I have received this observation from several people. This is the biggest problem I had.

How to keep them simple...

31:08 – John: When someone makes that type of code – where would you want them to put it?

31:23 – Guest: It depends on different types of actions. Maybe I have some sort of matter that I added to the data – an action from my application we can catch it into an effect and...

Not all of the actions have to go to the reducer.

32:04 – John: I say, “Hmm...” when I see reducers like this...they are running a synchronized code inside of a reducer. And I see that a lot.

32:24 – Chuck.

32:28 – John: You go call a reaction, and...sometimes they are doing HTP there, but it’s hard to explain.

33:11 – John: What are some of the things that they can do to step-into, when they are using these?

33:16 – Guest: That’s why I only have these things about the reducers.

33:48 – Chuck: I am wondering what is the life cycle look like? What do you call a reducer from an effect from an action or vice versa?

34:09 – _Guest answers the question._

34:37 – John: It can be confusing with all of these different terms. Where does it end? Your component you have to say: call this action. Perform this action and then the action says get customers – the NgRx library listens for that and helps connect to the reducer for you. Look into the action and then return that to a stream to whatever...

35:29 – Guest: Yes, it sends it to reducers.

_Guest goes into more detail._

36:09 – John: You never talk to the reducer directly?

36:17 – Chuck: ...is that something I should have done before – or does it call [effects](https://blog.angularindepth.com/ngrx-tips-tricks-69feb20a42a7) and the effects load the information into the state and the reducer pulls it out for the action?

36:46 – Guest.

36:58 – Chuck.

37:03 – Guest.

37:53 – John: It really depends on what you want to do, Chuck.

_John will give a hypothetical scenario._

38:58 – Chuck: In your scenario, let’s say...

39:14 – John: Everything is right up until the end there.

It’s a little magical, honestly. I just know here is my selector and here is my data!

40:17 – Chuck: Selector is essentially I am interested in THIS state or THIS state change.

40:40 – Guest.

40:50 – Chuck: So when that changes...

40:56 – Guest.

40:59 – John.

41:05 – Chuck: A little piece of the overall store.

41:18 – Guest: My tip there was a bout the selectors...

42:30 – Chuck: So I can hand off my selector to multiple places?

42:36 – Guest: Yep. You don’t need to know anything else.

42:44 – Guest: Combine it as needed. Another benefit here is memorization. It says that each time you select pure functions it wont call the function again.

43:42 – I am seeing a trend in your tips, too. I am seeing easier way to code. You are always saying selector technique. There are a lot of terms in NgRx module. Dispatchers and states and stores...it’s nice to have a way to create the code easier.

44:21 – Guest: It does take a lot of time for someone to grasp.

44:30 – Chuck.

44:35 – John: Don’t use the store all over the place – that’s what Adrian says!

44:54 – Guest: I think it’s more like dumb components. I have a container of all of these dumb components. The container is the one that KNOWS.

46:22 – Chuck: It’s just a button.

46:28 – Guest: You click the button and it triggers. Whenever you want to use that component then you...

46:48 – Chuck: Any types of data that you wouldn’t want to use in your NgRx store?

47:07 – Guest: It depends – I am not holding any logging information there, though.

47:51 – John: I like to ask WHY. Property initialization. You are saying...

48:11 – Guest: It’s less code and it’s reasonable. If I can have less code then I’d love to have it. I think it’s cleaner b/c it’s not that much code. Most people might think blah, blah, blah, but I think it looks okay.

48:46 – John: I can see why it would be less code.

48:57 – Guest.

49:07 – John: I haven’t seen this: looking at your property initializer...

Looking at your code here, Adrian...

The store object itself is a reference to the NgRx store. That means you have to...

To me I don’t want my app to know that NgRx is involved. I started to do this...I was creating an Angular service, which...

Have you done this before?

50:33 – Guest:&nbsp; I have seen this function but I haven’t played with it. It makes sense. This takes it a step further. Like you say it’s perfect b/c nobody knows anything about that store, but it’s a new level. I think you have some benefits with that way of doing it, too.

51:23 – John: The one thing that sticks out is company name is your observable, then your...

52:10 – Guest: Yeah that’s good b/c it might be better! They might not even know what NgRx is, and you have a service so just use them. Yeah it’s just an observable.

52:33 – Chuck: You don’t want to see my garage.

52:44 – Guest: Some services are underrated. Like you suggested we could use them for much more.

53:01 – Guest: It was nice writing these tips.

53:19 – Chuck: What are working on now?

53:23 – Guest: Writing a new blog.

53:41 – Chuck: We will keep an eye out for it. Where do you post?

53:55 – Guest: Usually Medium, and Twitter.

Search for my name and you will find me, b/c I have the same handler on all the places.

54:15 – Chuck & John: Let’s go to picks!

54:30 – _Chuck is talking about future episodes and potential topics._

You can vote stuff up on Trello on NgRx so we can go deeper on this topic.

55:40 – [Advertisement – Fresh Books!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866051&source=GOOGLE&gclid=EAIaIQobChMI--6zho6H3gIVjsVkCh2wsQx6EAAYASAAEgL9B_D_BwE&gclsrc=aw.ds&dclid=CO7qmoiOh94CFUnHwAodiCQBUA)

1:02:00 – [Advertisement – Cache Fly!](https://www.cachefly.com)

**Links:**

- [Vue](https://vuejs.org)
- [jQuery](https://jquery.com)
- [Angular](https://angular.io)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Chuck’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [John Papa’s Twitter](https://twitter.com/John_Papa?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Adrian’s Medium](https://medium.com/@adrianfaciu)
- [Adrian’s Twitter](https://twitter.com/adrianfaciu)
- [Adrian’s GitHub](https://github.com/adrianfaciu)
- [Adrian’s Blog Post](https://blog.angularindepth.com/@adrianfaciu)
- [Adrian’s Article: Testing NgRx Effects](https://medium.com/@adrianfaciu/testing-ngrx-effects-3682cb5d760e)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Fresh Books](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

John

- [NgRx Data](https://github.com/johnpapa/angular-ngrx-data)
- Conferences&nbsp; - Don’t feel mofo 

Charles

- [Discord App](https://discordapp.com/)

Adrain

- [Angular In-depth Doc](https://blog.angularindepth.com/ngrx-tips-tricks-69feb20a42a7)
- [Wallaby](https://wallabyjs.com/)


### Transcript


