---
layout: layouts/post.njk
podcast: adventures-in-dotnet
title: '.NET 010: What''s new in C# 8.0 with Jason Bock'
date: 2019-10-15T10:00:46.196Z
episode_number: '010'
duration: '1:13:00'
audio_url: 'https://media.devchat.tv/adventures-in-dotnet/NET_010_Jason_Bock.mp3'
tags:
  - adventures_in_dotnet
  - podcast
---
In this week’s episode of Adventures in .NET the panel is joined by Wai Liu, the new panelist, and Jason Bock, the special guest. Wai shares a bit about himself, currently, he works as a PM from Australia. His focus lately has been on Azure and .NET Core. Jason Bock introduces himself next, he is a practice lead for application development in .NET. He is a writer and a speaker, often about the new features of C#.

The panel interviews Jason about the new features found in C# 8.0.
The first thing developers should know about C# 8.0 is that it is no longer tied to .NET Framework. Jason explains that everything is slowly shifting to .NET Core and developers can only enjoy all the C# 8.0 features with .NET Core 3. He lists that some of the features can be used with .NET Framework. 

The panel discusses migration to .NET Core from .NET Framework. Jason explains that it is not a question of if we should migrate but when should we migrate. Not only does .NET Core have better capabilities and speed but Microsoft is focussing all their future efforts in .NET core. Jason invites everyone to think about switching over and start making a plan. 

The panel considers how hard it will be to move over large applications into .NET Core. Jason explains that since Microsoft has many applications in .NET framework they are in the same boat as other large enterprises. So, support for .NET Framework 4.8 will continue to be supported. The panel considers their current projects and how migrating could affect them. 

Moving on to the new features of C# 8.0, the panel considers the two most exciting new features, default interface members and nullable reference types. They start by discussing nullable reference types. Nullable reference types allow developers to annotate ty[es in parameters and properties and say that they are nullable. 

The panel discusses the opt-in function of this feature and why that is necessary at this stage of its release. Jason explains how this all works and the two main purposes for nullable reference types. First, it is trying to reduce the number of null references developers get. Second, it allows developers to try expressing intent. 

The panel shares their excitement to give nullable reference types a try. They also warn developers that they may want to run away when they first turn it on. Jason advises developers to turn it on in new projects, but for large projects, he advises developers to turn it on a profile basis. He explains that Microsoft is just getting started with nullable reference types and will continue to make changes all the way to .NET 5.0.

Moving on to discuss default interface members, Jason predicts that default interface members will see a lot of abuse. The panel expresses their discomfort with the feature as it is a new way of using an interface. Jason explains the intent of this feature is to provide a way for developers to define an interface where some of the members have implementations. It is commonly referred to as default interface methods as most examples are with methods. The goal of default interface members is to improve versioning with interfaces. Jason explains that there are many possibilities for this feature and goes over some of them with the panel. 

Jason explains that the difference between an interface and an abstract class is, an abstract class can have constructors and state whereas an interface cannot. The panel considers how default interface members could be considered normal practice in the future. Jason explains that there is still a lot of uncertainty around when to use them and when not to, it will take some time for default interface members to find their place. 

The other features discussed are the enhancements made to pattern matching, asynchronous streaming, enhancements of the using, ranges and indices. They explain briefly what each of these features does and how they will improve the .NET experience. 


**Panelists**

- Shawn Clabough
- Caleb Wells
- Wai Liu

**Guest**

- Jason Bock

**Sponsors**

- [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
- [Views on Vue](https://devchat.tv/views-on-vue/)
- [My Ruby Story](https://devchat.tv/my-ruby-story/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [Eliminating Nulls in C#](https://magenic.com/thinking/eliminating-nulls-in-c)
- [What's new in C# 8.0](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8)
- [https://github.com/JasonBock/Rocks](https://github.com/JasonBock/Rocks)
- [What's new in C# 8 - Part 1](https://www.youtube.com/watch?v=TJiLhRPgyq4)
- [What's new in C# 8 - Part 2](https://www.youtube.com/watch?v=fhf8N4004u0)
- [http://reactivex.io/](http://reactivex.io/)
- [http://jasonbock.net](http://jasonbock.net)
- [http://github.com/jasonbock](http://github.com/jasonbock)
- [https://www.facebook.com/Adventures-in-NET-373059030062837/       ](https://www.facebook.com/Adventures-in-NET-373059030062837/)
- [https://twitter.com/adventures\_net](https://twitter.com/adventures_net)

**Picks**

**Caleb Wells:**

- [Prodigal Son](https://www.fox.com/prodigal-son/?cmpid=org=fox-broadcasting::ag=mh::mc=CPC::src=googleadwords::cmp=fbc_mlm_prodigal_son_fy20::add=254838146,%ecid&amp;gclid=CjwKCAjw29vsBRAuEiwA9s-0Bw_8DVXfCYgDdSirHX0yJcbmJ1-qrCx6EssHmhZOx-Ci0NLnPqRubxoCyDEQAvD_BwE&amp;gclsrc=aw.ds)

**Shawn Clabough:**

- [Blazor Asteroids](https://aesalazar.github.io/AsteroidsWasm/)

**Jason Bock:**

- [The Making of Alien](https://www.amazon.com/Making-Alien-J-W-Rinzler/dp/1789090555/ref=asc_df_1789090555/?ie=UTF8&amp;qid=1548462018&amp;sr=8-1&amp;linkCode=ll1&amp;tag=devchattv-20&amp;linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&amp;language=en_US)

**Wai Liu:**

- [Eleanor Oliphant Is Completely Fine: A Novel](https://www.amazon.com/Eleanor-Oliphant-Completely-Fine-Novel/dp/0525506349/ref=asc_df_0525506349/?ie=UTF8&amp;qid=1548462018&amp;sr=8-1&amp;linkCode=ll1&amp;tag=devchattv-20&amp;linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&amp;language=en_US)
