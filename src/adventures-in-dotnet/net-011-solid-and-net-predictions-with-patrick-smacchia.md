---
layout: layouts/post.njk
podcast: adventures-in-dotnet
title: '.NET 011: SOLID and .NET Predictions with Patrick Smacchia'
date: 2019-10-22T10:00:41.714Z
episode_number: '011'
duration: '59:37'
audio_url: 'https://media.devchat.tv/adventures-in-dotnet/NET_011_Patrick_Smacchia.mp3'
tags:
  - adventures_in_dotnet
  - podcast
question1: What is SOLID?
answer1: An acronym outlining principles to followed when object-oriented programming.
question2: What are the five principles found in SOLID?
answer2: >-
  The five principles are Single Responsibility, Open-Closed, Liskov
  Substitution, Interface Segregation, and Dependency Inversion.
question3: What is the most important principle in SOLID?
answer3: Single Responsibility
question4: What will happen to Visual Studios in .NET 5?
answer4: >-
  Patrick believes that Visual Studios will eventually make the switch to .NET
  5, though it may take some time.
---
In this episode of Adventures in .NET the panel interviews Patrick Smacchia who is known for his static analyzer, NDepend. The panel discusses NDepend, Patrick explains a bit about what is and how it works along with his history in .NET. Patrick is here to explains SOLID, an acronym introduced by Robert C. Martin outlining principles for object-oriented programming. 

These principles teach programmers to use object-oriented programming correctly. The panel considers what can go wrong when object-oriented programming is misused. They also explain that the most important thing when it comes to SOLID is to try your best, it is impossible to be perfect in anything. Patrick explains that when your code is SOLID is will be easily testable and maintainable. 

The five principles are Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. Of all the principles, Single Responsibility is unique. Patrick explains that this principle is all about organization and advises developers to be very careful when using this principle in your domain. The domain is where it is most important to have SOLID code and it needs to be 100% covered by testing. The panel shares that this is the principle that they try the hardest to follow.  

The definition given by Patrick for Single Responsibility is that a class should have a single responsibility or a class should have only one reason to change. Patrick warns the listeners that this is a very complex concept that is difficult to explain. The panel explains that Single Responsibility is a way to accomplish a separation of concern. The panel outlines the benefits of following this principle while Patrick shares some examples and walk the listeners implementing this principle. 

The next principle is Open-Closed. Patrick’s definition of this principle is modules should be open for extension but closed for modification. He and the panel dive deeper into what this means. He advises developers when designing a class to be very careful when choosing the point of variation and make sure you don’t change the code in your base class. Caleb shares the problems they experienced in one of his recent projects when this principle was not followed. Patrick explains why the solution is more often the interface rather than the base class. 

Moving on to the next principle, the Liskov substitution. Patrick explains how this principle using the example of the ibird. The Liskov substitution principle is that objects in a program should be replaceable so that you can’t tell the difference. In the ibird example, you can not replace the ibird with any bird because if the ibird can fly but the replacement bird is an ostrich it cannot perform the necessary functions. Patrick explains how ilists are in opposition to the Liskov principle.  

Next is the Interface Segregation Principle. Patrick explains how this relates to the Single Responsibility Principle. He also discusses how the Liskov Substitution and the Interface Segregation are two sides of the same coin when it comes to designing interfaces. The Interface Segregation explains that many smaller client-specific interfaces are better that one large interface with everything on it.  

The final principle is Dependency Inversion. Patrick explains that this principle does not help you design your interface, it helps you organize dependencies into your code structure. This principle advises developers to depend on abstractions. He explains how this principle relates to dependency injection. The panel considers the damage dependencies can cause in a codebase if improperly used. Patrick explains when a developer will want to use abstractions and when to use classes. He explains that these 5 principles will become natural and feel like common sense as developers gain experience.

Switching gears, the panel moves on to discuss a blogpost Patrick wrote explaining 4 predictions he had for the future of .NET. He wrote the article because of the announcement that .NET core will become .NET 5. The future of .NET has a great impact on NDepend and Patrick wanted to give some perspective to the changes and how they might affect his company.  

His first prediction is that .NET standards won’t evolve much. Patrick explains that the purpose of .NET Standards was to support all the .NET flavors and with only .NET to support that job will become much simpler. He also speculates on the reasons for Microsoft wanting only one .NET. Some of the reasons he lists are that Microsoft does not have an endless workforce and .NET core is open source and multiplatform. 

Patrick’s second prediction greatly impacts NDepend. His prediction is that Visual Studios will run on .NET 5, explaining why he is so sure that they will switch Visual Studios over to .NET 5. Patrick believes that it may take a while for the switch to happen. The panel considers the future of Windows.  

The third prediction Patrick makes is that .NET will propose a cross-platform UI framework. Microsoft did a poll asking developers about the need for a cross-platform UI framework. The panel speculates how this framework will happen. Patrick wonders at the possibility of WPF. The panel brings up the final prediction, that Blazor has a bright future, and wonder if Blazor could become that cross-platform UI framework.  


**Panelists**

- Shawn Clabough
- Caleb Wells

**Guest**

- Patrick Smacchia

**Sponsors**

- [My Ruby Story](https://devchat.tv/my-ruby-story/)
- [React Native Radio](https://devchat.tv/react-native-radio/)
- [Adventures in Angular](https://devchat.tv/adv-in-angular/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [ndepend.com](http://www.ndepend.com)
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [4 Predictions for the Future of .NET](https://blog.ndepend.com/4-predictions-for-the-future-of-net/)
- [ Satya Nadella reveals why Windows may not be the future of Microsoft's business](https://www.financialexpress.com/industry/technology/satya-nadella-reveals-why-windows-may-not-be-the-future-of-microsofts-business/1726777/)
- [.NET 003: Blazor with Daniel Roth](https://devchat.tv/adventures-in-dotnet/net-003-blazor-with-daniel-roth/)
- [https://www.facebook.com/Adventures-in-NET-373059030062837/       ](https://www.facebook.com/Adventures-in-NET-373059030062837/)
- [https://twitter.com/adventures\_net](https://twitter.com/adventures_net)

**Picks**

**Caleb Wells:**

- [https://www.packtpub.com/free-learning](https://www.packtpub.com/free-learning)

**Shawn Clabough:**

- [https://conemu.github.io/](https://conemu.github.io/)
