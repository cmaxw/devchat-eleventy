---
layout: layouts/post.njk
title: >
      RRU 036: Signal R with Brady Gaster LIVE at Microsoft Ignite
date: 2018-11-06 11:00:51
episode_number: 036
duration: 47:45
audio_url: https://media.devchat.tv/reactroundup/RRU_036_Signal_R_with_Brady_Gaster_LIVE_at_Microsoft_Ignite.mp3
podcast: react-round-up
tags: 
  - react_round_up
  - podcast
---

 **Panel:**

Charles Max Wood

**Special Guest:** Brady Gaster

In this episode, Chuck talks with [Brady Gaster](https://twitter.com/bradygaster) about [SignalR](https://www.asp.net/signalr) that is offered through Microsoft. Brady Gaster is a computer software engineer at Microsoft and past employers include Logical Advantage, and Market America, Inc. Check out today’s episode where the two dive deep into SignalR topics.

**Show Topics:**

0:00 – Advertisement: [AngularBootCamp.Com](https://angularbootcamp.com)

0:56 – Chuck: Hello! We are going to talk about [SignalR,](https://www.asp.net/signalr) which is an offering through Microsoft.

1:09 – Guest: It started in 2011 that’s when I got involved, but I wasn’t with Microsoft, yet, at that point. I was working on the technology, though.

Effectively you can do real time HTMP but what they did (Damon and David) let’s create a series of abstractions but not we have for Java. They basically cam up this idea let’s do web sockets and then go back to pole / pole / pole. It’s to see what the server and the client can support.

_Guest talks about_ [_Socket.io_](https://socket.io)_, too._

6:45 – Chuck: What we are talking about real time coordination between apps.

6:56 – Guest: Web sockets, 1 million...and 2.6 million messages a second!

7:05 – Chuck: I can set that up like I usually set up web sockets?

7:17 – Guest: There is a client library for each. Effectively you have a concept called a connection.

9:48 – Chuck: How do you handle authentication on the frontend?

9:56 – Guest: We have server side things that we can attribute things.

10:09 – Chuck.

10:12 – Guest: If you authenticate to the site then the site passes the token and it basically sits on top of the same plumbing.

10:38 – Chuck.

10:42 – Guest.

10:54 – Chuck.

10:58 – Guest: We recently just had the [DOT NET CONF](https://www.dotnetconf.net). We had an all night, 24-hour thing.

11:48 – Chuck: Here you are, here you go.

You hook it all up, JavaScript into your bundle.

12:05 – (_The guest talks about how to install._)

13:12 – Chuck: I could come up with my own scheme.

13:25 – Guest: The traditional example is SEND A MESSAGE and then pass you string. Well tomorrow I do that and I just change the code – it’s great b/c I send up a ping and everybody knows what to do what that ping. It’s just a proxy.

14:17 – Chuck: I am trying to envision what you would use this for? If you are worried about it being stale then you refresh. But if you want the collaborative stuff at what point do you ask: Do I need SignalR?

15:00 – Guest: When I do my presentations on SignalR and being transparent I want to send you 1,000 messages but 1 or 2 messages will be dropped. You don’t want to transmit your order data or credit card information. Do you have a hammer and you need a screw?&nbsp; If you need stock tickers and other applications SignalR would work.

Keeping your UI fresh it is a great thing.

19:02 – Chuck: You do that at the Hub? You set up the Hub and it passes everything back and forth. What can you do at the Hub for filtering and/or certain types of events?

19:26 – Guest: I am looking at a slide. What’s the cool thing about SignalR and the API is it’s deceptively simple on purpose. If you want to call out to clients, you can get a message to all of your clients if you select that/those feature(s).&nbsp;

Some other features you have are OTHERS, and Clients.Group.

20:57 – Chuck: Can you set up your own?

20:58 – Guest: I don’t know.

21:12 – Chuck: Clients who belong to more than one group.

21:23 – Guest: Dynamics still give some people heartburn.

_(The guest talks about_ [_C#,_](https://docs.microsoft.com/en-us/dotnet/csharp/) _Dev, Hub, and more!)_

23:46 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

24:23 – Chuck: How do people get started with this? Do they need Azure?

24:30 – Guest: You don’t need Azure you can go to [Microsoft](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr) and it’s apart of the .NET team, too.

26:39 – _Guest talks about how to install_[_SignalR_](https://twitter.com/SignalR?lang=en) _– see links below!_

27:03 – Chuck: You don’t have to KNOW .NET.

27:11 – Guest: It was created by that team (\*fair enough\*) but you don’t have to know .NET.

27:57 – Guest: You can I could do JavaScript all the way.

29:04 – Chuck: Yes, we keep moving forward. It will look different what people are using.

29:21 – Guest: That was an early thing and I was reading through the old bugs from 2011/2012 and that’s one thing that kept coming up. I didn’t want to use [jQuery](https://jquery.com) to use SignalR – now you don’t. It’s a happy thing.

30:45 – Guest: Someone suggested using [PARCEL.](https://developer.android.com/reference/android/os/Parcel) I have a question do you have any recommendations to have [NODE-SASS](https://www.npmjs.com/package/node-sass) workflow to have it less stressful?&nbsp;

31:30 – Chuck: It’s out of Ruby that’s my experience with Node-Sass.

31:40 – Guest: I haven’t used Ruby, yet.

31:46 – Guest: I haven’t heard of Phoenix what is that?

31:50 _– Chuck answers._

Chuck: It’s functional and very fast.

Once you’ve figured out those features they almost become power features for you. Elixir has a lot of great things going for it.

32:50 – Guest: I tried picking up GO recently.

33:08 – Chuck: Lots of things going on in the programming world.

33:18 – Guest: I have always had a mental block around Java. I was PMing the Java guys and I asked: will this stuff work on...

Once I got it then I thought that I needed to explore this stuff more!

I want to learn Ruby, though.

34:16 – Chuck: Anything else in respect to [SignalR?](http://signalr.net)

34:15 – Guest: I really think I have dumped everything I know about Signal R just now.

I would draw people to the DOCS pages.

A guide for anything that could happen on the JavaScript side – check them out!

We have tons of new ideas, too!

37:33 – Picks!

37:42 – [Advertisement – Fresh Books!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866051&source=GOOGLE&gclid=EAIaIQobChMI--6zho6H3gIVjsVkCh2wsQx6EAAYASAAEgL9B_D_BwE&gclsrc=aw.ds&dclid=CO7qmoiOh94CFUnHwAodiCQBUA)

47:54 – [Advertisement – Cache Fly!](https://www.cachefly.com)

**Links:**

- [Vue](https://vuejs.org)
- [jQuery](https://jquery.com)
- [Angular](https://angular.io)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Chuck’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [SignalR](https://www.asp.net/signalr)
- [SignalR’s Twitter](https://twitter.com/SignalR?lang=en)
- [GitHub SignalR](https://github.com/SignalR/SignalR)
- [Socket.io](https://socket.io)
- [Node-SASS](https://www.npmjs.com/package/node-sass)
- [ASP.NET SignalR Hubs API Guide – JavaScript Client](https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/hubs-api-guide-javascript-client)
- [SignalR.net](http://signalr.net)
- [Real Talk JavaScript](https://realtalkjavascript.simplecast.fm)
- [Parcel](https://developer.android.com/reference/android/os/Parcel)
- [Brady Gaster’s Twitter](https://twitter.com/bradygaster)
- [Brady Gaster’s GitHub](https://github.com/bradygaster)
- [Brady Gaster’s LinkedIn](https://www.linkedin.com/in/bradygaster)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Fresh Books](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Brady

- Team on General Session
- [Korg](https://www.korg.com/us/)
- [SeaHawks](https://www.seahawks.com/)
- Brady’s kids
- [Logictech spot light](https://www.logitech.com/en-us/product/spotlight-presentation-remote)
- [AirPods](https://www.apple.com/airpods/)

Charles

- [Express VPN](https://www.expressvpn.com/)
- Hyper Drive
- [J5 ports and SD card readers](https://en.j5create.com/collections)
- [Podwrench](https://podwrench.com)


### Transcript


