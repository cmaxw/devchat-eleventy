---
layout: layouts/post.njk
podcast: adventures-in-dotnet
title: '.NET 006: Async and C# 8 with Filip Ekberg'
date: 2019-09-17T10:00:22.352Z
episode_number: '006'
duration: '48:28'
audio_url: 'https://media.devchat.tv/adventures-in-dotnet/NET_006_Filip_Ekberg.mp3'
tags:
  - adventures_in_dotnet
  - podcast
  - Shawn Clabough Caleb Wells
  - 'C# 8'
  - Async
  - Shawn Clabough
  - Charles Max Wood
---
**Episode Summary**

In this week’s episode of Adventures in .NET the panel interviews Filip Ekberg, Microsoft MVP, about using async, await, and the new features in C# 8. They begin by discussing the evolution of running tasks and multithreading in async. Filip describes the evolution beginning with background workers, through task parallel libraries finally to async and await. The panel considers how managing tasks has been made almost too easy.  

Filip explains that there has been a drive to make everything asynchronous but explains that this approach doesn’t always make sense. The panel asks Filip when a developer should use async and await. If an application has a UI, Filip encourages the use of async and await and he outlines the benefits. He also explains that if someone wants to be a full-stack developer they need to understand async and await on both the serverside and clientside. 

The panel wonders what the most common async and await mistakes are in .NET. Filip shares a couple of the most common mistakes he sees. The first is deadlocking an application because of the inappropriate methods such as .result and .wait on tasks. The second is marking methods as async without running the await keyword. He explains what these mistakes do to your application and gives advice on avoiding these mistakes. 

The panel expresses past frustrations in making all methods especially tops methods when in ASP.NET. Filip gives the panel advice on making it asynchronous top to bottom and ways to handle those aggravating top methods. He also explains how to use the await keyword and state machines effectively.

Debugging in async is the next topic the panel considers. Filip explains why debugging is so tricky in asynchronous applications. He gives a few tips, his biggest piece of advice is to update Visual Studio and you should get more help in debugging than from older versions. 

The panel moves on to discuss C# 8. Filip explains that C# is his language, he loves it! He shares three new changes to the language features in C# 8. They made changes to how tuples work, pattern matching and null reference types. 

Tuples are the first change the panel considers. Filip explains what tuples are and what they do. Tuples allow you to represent a type without actually using that type. The panel considers how tuples have changed in C# 8, they are still position based but are more flexible in calling them. 

Next, the panel discusses null reference types. The control null reference types allow over nulls is considered. Filip shares some recommendations for using null reference types. The panel considers what might happen if someone were to use null reference types in an existing application. The wonder if it would have any benefit or if it would break the whole application. 

The final feature they discuss is pattern matching. Filip explains the benefit of using the new pattern matching with the new tuples feature in C# 8. The new pattern matching can be used to find tupple patterns, position patterns, and property patterns. 


**Panelists**

- Shawn Clabough
- Charles Max Wood
- Caleb Wells

**Guest**

- Filip Ekberg

**Sponsors**

- [Adventures in Blockchain](https://devchat.tv/adventures-in-blockchain/)
- [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
- [The Freelancers Show](https://devchat.tv/freelancers/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [C# 8 and Beyond - Filip Ekberg](https://youtu.be/qqrzEC1Eov4)
- [Back to Basics: Efficient Async and Await - Filip Ekberg](https://youtu.be/Al8LrBKpZEU)
- [https://twitter.com/fekberg?lang=en](https://twitter.com/fekberg?lang=en)
- [https://www.filipekberg.se/](https://www.filipekberg.se/)
- [https://www.facebook.com/Adventures-in-NET-373059030062837/       ](https://www.facebook.com/Adventures-in-NET-373059030062837/)
- [https://twitter.com/adventures\_net](https://twitter.com/adventures_net)

**Picks**

**Charles Max Wood:**

- [RR 429: Mechanical Confidence with Adam Cuppy](https://devchat.tv/ruby-rogues/rr-429-mechanical-confidence-with-adam-cuppy/)
- [JSJ 392: The Murky Past and Misty Future of JavaScript with Douglas Crockford](https://devchat.tv/admin/#/collections/js-jabber/entries/jsj-392-the-murky-past-and-misty-future-of-javascript-with-douglas-crockford)
- [Mario World](https://apps.apple.com/us/app/dr-mario-world/id1440129313)

**Caleb Wells:**

- [Upgrade to the new Nintendo Switch](https://www.gamespot.com/articles/deal-ends-soon-get-new-nintendo-switch-for-75-with/1100-6469055/)

**Filip Ekberg:**

- [Final Fantasy VIII Remastered](https://ffviiiremastered.square-enix-games.com/en-us?utm_source=GoogleSearch&amp;utm_medium=dCPC&amp;utm_term=FFVIIICore&amp;utm_content=NA-SEMLCopy03-0-0&amp;utm_campaign=FFVIIIR-SEABrand-Launch-Liquid)
- [Final Fantasy VII Remake](https://en.wikipedia.org/wiki/Final_Fantasy_VII_Remake)

**Shawn Clabough:**

- [https://oz-code.com/](https://oz-code.com/)
