---
layout: layouts/post.njk
title: >
  157 iPS Azure App Services with Matthew Henderson
date: 2016-06-16 07:00:05
episode_number: 157
duration: 40:37
audio_url: https://media.devchat.tv/iphreaks/iPS157AzureAppServices.mp3
podcast: iphreaks
tags:
  - iphreaks
  - podcast
---

01:05 - Matthew Henderson Introduction

- [Twitter](https://twitter.com/mattchenderson)
- [GitHub](https://github.com/mattchenderson)
- [Blog](https://www.acupofcode.com/)
  03:04 - [Azure App Services](https://azure.microsoft.com/en-us/services/app-service/)
- [Parse](https://parse.com/)
  04:27 - Cross-platform Options05:05 - Getting Started07:13 - APIs09:34 - [Azure Mobile App Engagement](https://azure.microsoft.com/en-us/services/mobile-engagement/)11:51 - [HockeyApp](https://www.hockeyapp.net/features) and [Xamarin](https://www.xamarin.com/)
- [Episode #152: HockeyApp with Thomas Dohmke](https://devchat.tv/iphreaks/152-ips-hockeyapp-with-thomas-dohmke)
  12:52 - Data16:49 - Writing Your Own Backend Using Azure19:22 - Security29:37 - Use Cases33:01 - Testing
- [tryappservice.azure.com](https://tryappservice.azure.com/)
  &nbsp;Picks
- [ThisCouldBeUsButYouPlaying](https://github.com/neonichu/ThisCouldBeUsButYouPlaying) (Andrew)
- [Tosh's Ramen](https://www.toshsramen.com) (Chuck)
- [Fully Alive: Lighten Up and Live - A Journey that Will Change Your Life by Ken Davis](https://www.amazon.com/Fully-Alive-Lighten-Journey-Change/dp/0849948428?ie=UTF8&keywords=fully%20alive&qid=1465496207&ref_=sr_1_3&sr=8-3) (Chuck)
- [Fitbit One](https://www.fitbit.com/one) (Chuck)
- [Hamilton Soundtrack](https://www.amazon.com/Hamilton-Original-Broadway-Recording-Explicit/dp/B0135P6PZA) (Matt)

### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York and L.A. bid on iOS developers, providing them with salary and equity upfront. The average iOS developer gets an average of 5-15 introductory offers and an average salary offer of $130,000/year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users, and when you're hired they also give you a $1,000 signing bonus as a thank you for using them. But if you use the iPhreaks link, you’ll get a $2,000 bonus instead. Finally, if you're not looking for a job but know someone who is, you can refer them on Hired and get a $1,337 bonus as thanks after the job. Go sign up at Hired.com/iphreaks]_**

**CHUCK:** Hey everybody and welcome to episode 157 of the iPhreaks Show. This week on our panel, we have Andrew Madsen.

**ANDREW:** Hello, from Salt Lake City.

**CHUCK:** I’m Charles Max Wood from Devchat.tv and this week we have a special guest, Matt Henderson.

**MATTHEW:** Hi everyone.

**CHUCK:** Do you want to introduce yourself really quick, Matt?

**MATTHEW:** Yeah, sure. So I’m a program manager on the Azure App Service team. So I’m working on Microsoft on Cloud and making these [inaudible] to build apps.

**CHUCK:** Right. And the reason that we’re talking to you is because Azure App Services has offerings for mobile apps.

**MATTHEW:** Correct, yup. App services sort of a synthesis of some products that we built over the years. Originally, we had a thing called Mobile Services that was quite successful for many years but it’s our offering that’s targeted, making it easy for mobile developers to actually focus on the client applications but very easily talk to things in the Cloud so work with data, log users in and send push notifications a step back to the devices.

**CHUCK:** Gotcha. I’m kind of curious what is different about this from some of the other offerings out there. I know Parse just shut down but it seems like there are other backend as a service offerings that do some of these things.

**MATTHEW:** Yeah, and it runs a whole spectrum. So in mobile space, you have everything from – we’re going to set you up with VMs and have some service framework help you out. It’s what we do which is more of a platform as a server so you’re not really worried about the underlying infrastructure and just focus on writing your code.

Then you have some things like – Parse would be considered more of a mobile backend as a service that’s a little bit less controlled in terms of the code. But certainly, if you give up all of that control, they do a couple of things for you that are really nice.

So [inaudible] the whole spectrum. One of the nice things about the way we built ourselves out is that with the App Service side, it’s a core platform that has a service underneath, but then on top of that, we’re setting up these service so that you don’t have to necessarily write a bunch of backend code if you don’t want to, but as soon as you want to dive in and take more control, that’s totally available.

**CHUCK:** So essentially, what you’re saying is you have offerings for mobile apps where the developer doesn’t necessarily have to know C# or NodeJS; they can just plug in to something that’s more or less pre-configured and then you have some options that you can configure from there, and then if you really want to have the fine grain control, then you can write the rest of your backend logic with C# or NodeJS

**MATTHEW:** Exactly. Yup.

**ANDREW:** I kind of want to get right into it. I’ve never used Azure App Services although I heard that it’s been out there for a while but I have used Parse and I think a lot of iOS developers are in the same boat. For one reason or another, Parse was the big name that a lot of people have been using and of course, now it’s been shut down or is going to be shut down, but Parse was pretty cool, right? It gave you – you configure some stuff in your Parse account. You didn’t have to write any server side code and then it gave you this really nice SDK that you could use in your iOS app that did all the heavy lifting and putting your data in the Cloud and syncing it between devices became really easy. So does Azure App Services offer something similar? Is there sort of a drop-in SDK that you could put in your app?

**MATTHEW:** Yeah, it’s the same model and it’s probably worth pointing out with the Parse shut down and everything like that. We do actually have an option for running Parse server on App Service so we’ve got everything plugged in with our [inaudible] structure and everything like that so there’s actually just a gallery of package. So you can go and just provision a full Parse server up and running with everything reconfigured. You just have to use the Parse data migration tool and then pull in the data from MongoDB and then you’re off to the [inaudible]. That’s certainly an option of [inaudible] looking to move off of Parse. App Services’ a great host for it.

In addition, when we talk about our own service that we have outside of Parse, the server side, we have SDKs as Chuck mentioned and Node or C3, but on the client, we have all your favorite mobile platforms covered. So we do have an iOS SDK as well as Android, Windows cross-platformed with Xamarin and Cordova and [inaudible] that as well.

**CHUCK:** So you mentioned all of them except for – I don’t think I heard some of the JavaScript Core, JavaScript cross-platform once. You mentioned Xamarin cross-platform but not React Native or NativeScript or any of those.

**MATTHEW:** Yeah, so that’s something that we’re still looking at right now. We do have kind of just a raw JavaScript SDK; that’s what powers all our Cordova stuff. We have seen people use that for, say, a web scenarios as well but we’re still looking at some of the other cross-platform options that are out there. There’s a lot of them now.

**CHUCK:** Right. So if people want to get started, I know that the sync – the data sync is one of the more popular backend service offerings as far as what people use because for example I have an iPad mini and iPhone. My wife also has an iPhone and an iPad mini, so if we want to keep everything in sync across all of those, it’s nice to have some service to be able to do that. But it looks like there’s more to this offering. Just looking at the page for mobile apps, you can do push notifications, you can do single sign on with active directory. It also has social integration offerings. Is that the full gamut of things? Are there more things that people can do with mobile apps?

**MATTHEW:** Certainly there are more. So when we talk about offline data sync and things like that, a lot of times you’re looking at things like structured data you’d have in some sort of a heavy backend like a SQL database or say Mongo, but also sometimes just regular key values, pairs and things like that. But you can plug that into a whole variety of data providers and one of the things we try and make a little bit easy is when you’re actually writing these APIs or these data sources, it shouldn’t be actually a whole lot of [inaudible] to actually integrate that with whatever you’re trying to communicate with so we wanted it to be a very light layer. But in addition to those kind of more traditional data source, we do have things like doing file upload and things like that. So actually being able to do that in an offline fashion as well – when we talk about offline, there’s sort of three ways to interpret that. One is enterprise developers certainly have to deal with employees being literally anywhere sometimes by not necessarily having availability. That’s one area we still [inaudible] take there.

But we also see just general performance characteristics. It’s a lot faster to retrieved data that you’ve cached locally than to make another round trip to the Cloud and just general experience like you mentioned, making sure that things are synced across devices and so that it’s very easy to jump between them. All those are covered in the offline capabilities that we provide but like I said, that is mostly for [inaudible] structured data and now for file upload although the caveat there is that the offline file upload is covered only in our .NET client SDK. We’re working on expanding that.

**CHUCK:** So I’m wondering, you said that you have libraries for mobile apps and we’re talking specifically about iOS here. So what do the APIs look like as far as Swift or Objective-C?

**MATTHEW:** Right. So we have – our library is actually fully open sourced but that’s currently written mostly in Objective-C but just a bridging header away from being in your Swift app in terms of the actual APIs. Basically, we have a client object that represents your connection to the Cloud so you’ll often see that as the mobile service client or MS client and then we’ll – off of that, we expose the various capabilities it provides. So we have this notion of tables – that’s what we mean by all these different data structure that we’re going to expose. So you would grab reference to your table and you’ll be able to do your basic – create, read, update and delete off of that.

We also then [inaudible] our methods for logging in, making sure that the users are fully signed in. You mentioned earlier, we have the full spectrum of Azure [inaudible] directory as more of a new [inaudible] but then all our social providers so Facebook, Twitter, Google, Microsoft account – those are all there.

There are a couple of ways you can do things like log in. traditionally, we didn’t necessarily have all the provider SDKs that we do today so there’s mechanism within our SDK for providing a UI prompt, showing basically our view controller and then having the entire whole of [inaudible] covered within that and then we’ll sign you in.

Nowadays, it’s a little bit more strongly in favor of the provider SDKs, so Facebook has their Facebook Connect SDK. In fact, they require that for when you’re on iOS and Android. We also see Twitter Fabric has developed quite a lot with the Twitter accounts already baked into the iOS platform. You can leverage those right away. So those are the preferred methods nowadays so we would actually use those libraries to get some sort of a token for your user and then you would provide that into our SDK. Then we’ll use – we do an exchange with the backend and make sure that we have credentials that we can use for every request that goes through.

So then when you’re talking to the various endpoints, you can protect certain tables or APIs that you developed in the backend so they’re requiring a login or requiring specific users entirely. You also get things like user information into the apps so start associating data with that user so that they can sync it across devices or register push notifications that can be targeted at particular user.

**ANDREW:** So we were at Build and have had a few Microsoft people on lately and I actually have been using Azure Mobile App Engagement. It’s interesting to me that some of these things are split up so Mobile App Engagement also does push notifications, although they’re sort of focused on this idea of using push notifications to get users to engage with your app. But I wonder about the duplication here and if that’s something that, if overtime, these things are going to merge or if there’s a reason for this separation?

**MATTHEW:** Sure, there’s quite a bit here with the history of the products. We actually had an in-house product called Notification Hubs. That’s actually what App Services typically uses today for push notifications. So even if you don’t want to use the App Service platform, the notification helps product is available separately. But that’s really good for doing large broadcasts that you can definitely do with targeted individual user push notifications but being able to address with a single API call broadcast to millions of users and devices and do that across platforms.

So we abstract away the differences between APNS and GCM so that it’s a little bit easier to work with but also, you’re able to register for different segments of notifications so user can specify certain interests within your app or you can use information that you got from users’ identity and calls to the graph. APIs that the various identity providers give you, you can then actually say “Okay, I actually want to send just this section of the population” and things like that. So that’s notification helps and then you brought up mobile engagement. That was actually something that we got through an acquisition a few years back and there’s definitely been a lot to actually integrate the different products.

We’ll continue hopefully to see some of that but the focus is slightly different whereas notification helps is a little bit more development side, making sure that it pushes something that I’m going to interact with the server back and then click that, and then I’m actually going to have maybe events in my app trigger those notifications. The mobile engagement product is a little bit more about making sure that different campaigns that you’re running or offers that might be available within your app are sent out. You get some analytics back so you actually know how those are performing whether or not people are actually clicking on them and what flows do users are taking through your app and how that’s actually being impacted by your notifications.

There are slightly different focus there. We’re trying to figure out how we can converge those better.

**CHUCK:** So we did an episode with Thomas from Hockey App.

**ANDREW:** Thomas [inaudible].

**CHUCK:** And is there some interplay or some synergy between the two? I know that Hockey App was another acquisition but it seems like for example, the way that Microsoft has done things after acquiring Xamarin and then making it open source and tying it nicely with everything else, I’m just wondering if there’s other movement there to make all of these things play nicely together.

**MATTHEW:** Yes, that’s definitely a big push you’re saying. You mentioned, Hockey App and Xamarin both have – Xamarin came with its Insights – Xamarin Insights product. We also have Hockey App providing some analytics. We have the traditional App Insights that we had for a while now in a Mobile Engagement [inaudible] some analytics. There’s a lot of different ways to getting – it’s a [inaudible] problem I guess within Microsoft to set their multiple options for getting certain things done. That’s something we’ve always been trying to address and continue to do so. So I respect that you’ll probably see some more work there but it is something that we’re definitely aware of.

**ANDREW:** This is an abrupt change of topic. I’m jumping back to something we were just talking about but regarding the iOS SDK that you’ve got – and I’m again comparing the Parse because that’s just what I know, but I’m curious to know how you deal with – how you do the data model in your app? So in Parse, you have these pf objects and you can subclass them and make those your model objects. What kind of data do you get back? So say you do a query with app services and you get data that’s in the Cloud back, how does that look?

**MATTHEW:** Right. So you’re going to basically have a – some object that you’ve defined. We add some things on top basically to help make the offline [inaudible] work and it means we’re going into a bit more there. So the offline data sync capability depends in part on the client SDK and in part on the server so we do have a contract there. And on the client, we’re doing things like we’re actually going to be storing that by default in core data but you could change that to some other store feature. But we’ll actually be writing those objects in there and then basically queueing up all the actions that you do on the client and then replaying those back to the server.

So in order to make sure that the everything stays in sync, we can actually let you know when there’s a conflict or something like that, we had a couple of properties namely when was the object created, when was it updated; a couple other details like that. But otherwise, let’s say just standard object, we don’t necessarily force you to derive from any [inaudible] or base class or anything like that. So when we do your serialization off the wire, we’ll write to whatever format you’re expecting.

**ANDREW:** Okay, so I imagine in iOS, it’s probably just – you just get dictionaries back then?

**MATTHEW:** Certainly, you could use a dictionary, yeah.

**ANDREW:** But it sounds like you’re adding other stuff. So that’s actually something that’s interesting to me is part of the appeal of a backend as a service like this is that if the SDK’s good, you don’t have to write all the code to deal with the annoying low level stuff required. Make sure that updates get pushed when a network connection is available so that the app works well offline and deal with poor connectivity and all that. Sounds like you do handle that stuff in the SDK.

**MATTHEW:** Yeah, we want to make sure with our offline store in particular, it is one of those things that in the history of computing, has been tried many times with very opinionated frameworks that have all disappeared overtime. It’s something that you keep saying to pop up. We want to do it as lightweight as possible so that while you’re not actually having to do a lot of heavy lifting, you could still decide. You just set when the network goes down, that’s when I’m going to do my sync or I’m going to have it prompted by user action. That’s all within your control as a developer.

So we’re trying to make it very flexible but at the same time, there’s no reason you should ever have to be writing those headers yourself.

**CHUCK:** One thing that you brought up that is making me wonder a little bit, within the SDK, if there is a collision say on data? So I’m offline but I’m using the grocery app that my wife uses so I change the shopping list named to family list and she changes it to family. Does the developer determine how that conflict is resolved or is that something that is built-it that you can override or how does that work?

**MATTHEW:** Right, so you can actually register your handler for that, I believe. So what happens is basically the server will turn back an error. Your server side code, if you have it up there, could stop it and say you know what, I’m going to resolve things on the server, so that is developer control. Then your handler in the iOS code will actually be able to decide what I want to do. This is again full developer control. You could choose to prompt the user to actually figure out how to do it themselves or you could say things like the server always wins or the last write wins.

There’s a lot of different strategies and it depends on the structure of the app in terms of what will actually be best, but we do want to make sure that’s full control, but by default, we’ll just pop that handler. I think that’s – I believe the server wins in the absolute default case but I don’t remember that often.

**ANDREW:** Tell us a little bit about offerings around writing your own backend. So you’re not going to use the App Services; backend is a service stuff with your SDK. You just want to write your own custom code and run it on Azure. How does that work? How do you get started?

**MATTHEW:** Right. So in general, we talked about – with mobile, we have SDKs for .NET and NodeJS and those are kind of the more popular options for that just because that’s where the greatest amount of support is, but App Service in general allows you to write apps a whole lot more like languages – PHP, Python, Java, a couple of others. So you can take it as little as you want. If you want to actually build your app in PHP, go for it, but with the SDKs we provide, basically pulls down to those tables that I mentioned before so there’s that API contract dimension. We have – basically if you’re running in .NET, then we have basically an API controller overload that will actually [inaudible] that contract for you and basically you’re just setting that up and writing what happens when an incident occurs or what happens when we delete a piece of data.

Same thing in Node which is actually built on the Express.js framework so it should feel pretty similar to most of the other Node applications in terms of your – basically specifying this route, services and table and here are the different actions in the same way.

**ANDREW:** Okay. So I’m not a web developer at all. Chuck is and I may ask you stupid questions but it sounds to me like say you’re writing a Node app, basically, this gives you control over your web API but you still can use that, for lack of a better word, the tables that Azure provides so you can still – there must be an API so you can still use all the data store stuff that Mobile Apps is giving you. Is that right?

**MATTHEW:** Right, yeah. And so when I’m talking about the writing these SDKs, whatever extent you actually want. So if you want to run it as a full – just a standard Node site that you might build, set up your web API and you just want to push the capabilities that we provide, you can actually use the SDK just to set up the [inaudible], you specify the route and say, “Look, this is where you’re going to register for push notifications and we’ll take care of making sure that integrates with the notification helps infrastructure make sure that all the right – I mentioned the segmentation earlier, those tags that specify what the user can receive notifications for, all that gets put in the right place. But otherwise, it’s your application, just however you want to run it.

So we’re trying to be not so opinionated; it’s more of a here are the capabilities and you could take them as you like. We do have templates that give you pull [inaudible] but it’s very much just like writing a typical note application.

**ANDREW:** Cool.

**CHUCK:** So one other thing that I’m always worried about when I’m looking at some of these services like Parse or Firebase or whatever you’re looking at as a backend, as a service or – especially with push notifications and things where you’re actually not just trying to deal with people’s data but actually getting their attention on their phone is security. So what does the security look like on here? It looks like the single sign on with active directory’s kind of an optional thing you don’t have to use. So how do you protect users’ data and how do you protect users’ data from other users?

**MATTHEW:** Right. So when we’re dealing with App Services, it’s a service where you can run in more shared environments so basically, we’d be putting your applications next to each other with other users and that is the level you can go with. So we have the typical isolation boundaries that basically make the Cloud work but you’re dealing with your own data base so we’ll always be having that setup. You’ll be dealing with your own segment of the [inaudible]. Then we do have, in the other tiers, you basically get dedicated resources so that you’re not sitting on the same VM as anybody else.

So we do have a range there but in terms of the data, that’s protecting it from other users on the Cloud side, but from other users of your application, certainly with authentication, you can actually associate data to a given user. Basically, that’s – we see people basically take a user ID, put that in as an [inaudible] part of the data record. I’m not sure actually if I’m getting in the direction that you’re looking for here.

**CHUCK:** I think so. So I’ve seen some folks, they segment data just by some database association. It has the user ID in it or something and then they manage it all on the app but I was wondering if for example, that works fine if it’s shopping lists or something like that where it’s all pretty much homogenous data. It’s a collection of strings and they all mean something a little bit different but in the end, it’s not that big a deal. But then when you’re servicing larger companies or more sensitive data like financial data and things like that, a lot of times, you don’t want it all just sitting in the same database and then, well, let’s make sure we always send the correct user ID back. That’s just a place where one misstep and you’re giving somebody somebody else’s information. [Crosstalk]

So I was thinking I’ve seen different versions of database segmentation or setting up different databases for different clients or things like that.

**MATTHEW:** Right. I think that one – setting up different database is actually one that I’ve seen quite a bit of in terms of these – you’re talking about multi-tended applications where basically an entire organization or collection of folks is using you app. So we’re [inaudible] up separate databases and basically the access to those database’s condition on a valid user being present from that tenant and you should basically – you’re checking not only user ID but also the tenant ID. And yes, the authentication there needs to be rock solid.

So if you’re doing things like writing your own custom username-password solution, that’s very scary. It gets a lot better with some of the federated identity providers. A lot of these more – you mentioned finance and some of these more large [inaudible] yes, that is a key part of the application. It’s just building at your security model. But for a lot of other solutions, the Azure active directory is our in-house thing for enterprises. So your entire enterprise could be its own tenant. Then when somebody’s writing a [inaudible] in an application, they would say, “Okay, this company will get this section of data. We’re working out this database and things like that.” So that’s actually taking a lot of the burden away but you do kind of have to really be – really careful on these scenarios.

**CHUCK:** Now, I was in an active directory/Windows admin about 10 or 11 years ago. So do you manage some of that through – I think they were group policies or is that part of active directory, not the way that you would manage that kind of security?

**MATTHEW:** So yeah, it depends. S security groups are certainly one way to go. So you can’t say that this particular security group is allowed to access this data or you could even go further to a specific level – sorry, you can even go down to the user level. Say only these users explicitly but typically, instead of doing that access control, the more common ways to create a new group with an active directory and then rely on that.

**CHUCK:** Yeah, that makes sense.

**MATTHEW:** But you know, there’s also this notion of rules that you can assign so it’s basically saying when this user logs in, they’re going to be given this role in my application. Then they have these particular claims associated with them/ they’re able to access these APIs. So you can basically – instead of thinking about it on the – it’s this group that can access it, it’s folks who currently are into this role can access. There’s a slight difference but it does allow for some nice dynamism in terms of who gets what roles and when, so that is another modeling you can take.

**CHUCK:** One other thing that I’m also thinking about is the security just in a sense that I have been able to in the past, set up a prophecy or actually sniff the network and get information that’s being sent over the wire or over the Wi-Fi. Does Azure App Services require you to use an encryption connection?

**MATTHEW:** Yes, so everything’s HTTPS. We have an SSL service that comes with the App Service. You can also bring your own if you choose to, everything, be done using your own, that’s perfectly fine as well.

**ANDREW:** I don’t think I’ve got other questions. I think maybe we could step back just a little because I think we have been talking about this if everyone listening already knows exactly what kind of thing we’re talking about with the backend as a service and all that. So maybe it’d be useful to explain why, if you’re a new iOS developer or somebody who’s never had to do your own backend, why this is something you should care about or why it’s helpful.

**MATTHEW:** Definitely, yes. So I mentioned us being a platform as a server. What that means is if you’re focused on writing the code that makes up your application, not in terms of dealing with underlying machinery or anything like that, we’ll take care of making sure that the operating system gets patched on the machine. And since you’re running on all those types of things, then we maintain the actual web server infrastructure and things like that.

So from the actual app building perspective, you’re just writing a Node app and you’re saying where I could run [inaudible] my command line, I would just take that exact same code and then throw it up to App Services and everything will be great. We’ll actually be able to – we can scale based on your demand. So if you’re app isn’t getting a lot of traffic, say you’re still on the development cycles or perhaps, your users are only active during certain times a day and things like that, you can bring it back down so that you’re not having to have this huge commitment of underlying infrastructure. As soon as we see that hey, there’s a lot of traffic coming through or we’ll start revving things up so that you’re always available.

So it’s not just a simplicity of development model but it’s a simplicity of management. You don’t have to actually be worried that you’re app’s going to go down because it just got front page at Reddit or something like that or featured on the App Store or something similar.

**CHUCK:** The other thing is that if you’re using a system that does things the same way and you have a lot of people using them, and a lot of times it’s easier to find the answers. Also, the other thing, going back to the security discussion again, would you rather have some guy off of Upwork that you hired because you don’t understand security trying to do your security for you or would you rather have a Microsoft doing that and solving these problems across thousands of apps where they understand the web and the infrastructure so much better than you probably can or will?

I see both of those as positives. I generally write back in code in Ruby on Rails and I have to constantly stay up to date on what the latest security practices are for is, whereas if I’m using a backend as a service like Azure App Services, I don’t have to worry about that because I can assume, at least to a certain degree, that Microsoft is doing their job to keep that up and patching all of the software that they’re using and making sure that they’ve got the latest version of NodeJS so that – that’s not an issue for me and I can just focus on writing the app. I don’t have to be an expert on those other areas.

**MATTHEW:** Yeah, exactly. We’re constantly making sure that, like you mentioned, we have [inaudible] versions installed, getting all those frameworks underneath patched in.

**ANDREW:** I want to step back and remind ourselves that most of our listeners are not even Node developers. I’ve done some Node tutorials but I’ve known very little about it. To me, the attraction is I can write my app in Swift or in Objective-C, my native app that I know how to write. And when I need a backend or a platform that’s in the Cloud, I can do that without having to know web development. That was a big attraction to Parse and so that’s also a big attraction here.

Another big thing is push notifications; if you have to add push notifications to your app and then you don’t user something like this, you’ve got quite the job ahead of you. It requires knowledge completely outside of the world of Swift and Xcode and writing an iPhone app.

**CHUCK:** Yup. If you want a custom setup, you can pay me to do that. I’m happy to make all that money but you’re probably better off going with something that’s already built that’s going to cost you a whole lot less than my time will. Because yes, I’ve done that and it’s all – it’s not even standard web development stuff, all of it. And so yeah, just by having that available, I think it’s a huge timesaver for a lot of folks.

**MATTHEW:** Yeah, and in particular, one of my – one of the things I work on specifically in App Services is the authentication story. It’s certainly gotten a lot better over the years how we do authentication these days, but even within [inaudible] to really modern framework like that, open ID connect, there’s a lot of variability that we’re trying to learn how to write code, use Facebook to login to your app. That’s very different than using Twitter or Google or any of these others. So that’s one thing that has been particularly helpful to a lot of developers. It’s just not having to worry about things like – authentication is tied to security. That’s a big scary thing.

**CHUCK:** Yeah, makes total sense. I’m also curious, I love the whole ‘tell’, what it does and talk about some of the features that it has and talk about the advantages, but I also like the ‘show’ part of show-and-tell where you’re actually saying “there are companies out there that are using Azure App Services to do really cool stuff”. Do you have any stories for us?

**MATTHEW:** Yeah. We have a lot of different apps that we’ll talk about but there’s only so many use case studies we have and those are all available on azure.com. But some of the reasonable ones, jet.com, big commerce platform. They’ve been building up their website and things like that for actually going in, purchasing goods. 3M has used us for a couple of internal applications so having their employees actually be able to get a few things done. Same thing with Transport for London running the entire London underground. They’re using App Services to have one of their mobile applications actually going around and making sure that things are working as they’re supposed to. They have to be able to be literally underground and dealing with offline but actually recording what’s going on, where we need to do maintenance and things like that and then sending that back up when they’re connected again. So that’s a pretty cool one to [inaudible] as well.

**CHUCK:** That’s truly interesting. So are they using it for data syncing and for authentication and for all these other things? Or are they just using bits and pieces here and there?

**MATTHEW:** So with Transport for London, I believe their using the data sync and the authentication pieces. I think that’s the main bulk of it for them. I need to look up their focus just to be sure but I’ve definitely worked with them with a few of these things.

**CHUCK:** Yup, my other question is – so let’s say that I’m building an application and let’s just throw it out there. Let’s say I’m building an application for the podcast. I want to keep track of what podcast people listen to and what they’ve liked and all that stuff, give them the opportunity to share it on social media, how do I get started plugging in the pieces of Azure that are going to help me there?

**MATTHEW:** Right. So there’s a couple of things there. Most folks tend to start with getting their data together and what they’ll do is they will spend up a site, you’ll be ready to start, really powering on it. But while you’re in development, you don’t want folks to just be pinged so you might setup authentication for the whole site so you can get into it. That’s one approach people take sometimes.

Basically, you start with establishing what your data looks like. So you mentioned, what people would like and what they have listened to. Some of you record flows and things like that. At that point, you’d be picking what data source you want to use. Commonly, people are going to use SQL for that; a storage of key value store is also very popular. One you actually start getting that together, you can say – okay, instead of protecting an old site with authentication, I’m going to say certain APIs I want to protect. And when I want to start [inaudible] data with the user, I have to make sure that whatever method I’m calling, that needs to guarantee me that that user’s the one making the call, right? So that’s where you have to start integrating that step.

I would start – you’d go around [inaudible] any providers, get everything registered and then plug it into App Services then you’d be good to go there. That tends to be – the flow is sort of data then authentication, push notifications. I see that pop up all over the place if people start putting that into their app so they might, even in some cases, start with it or Azure going through the data things.

If some action that a user might take on data would prompt a notification, that’s where you really start doing it right there at the get-go.

**CHUCK:** Cool. Do you have some kind of sandbox or test account if I’m thinking “okay, before I deploy, I want to run it through a battery of tests but I don’t want it to hit production?”

**MATTHEW:** Yeah. So actually, that’s one of those details for – I mean, App Services in general, in addition to being a good host for you code, there’s a lot of capabilities built into it that make it much easier to work with.

One of the stories that seems to really resonate with a lot of developers is look, you’re going to develop your code on your own box and that’s great and you’re probably going to check in to source control. So then, we can actually deploy from that source control so if you want to use GitHub or Visual Studio online and things like that, we’ll moderate those repos and we see changes come in, we can deploy that. We can actually deploy that to a staging slot of your choosing. So if you want to have a development environment that’s sitting outside of production, the thing that’s serving actual traffic, you can do that then you can have tests against that to full load tests or just have your client – the latest version of your native client talk to it.

Make sure that everything’s working and then when you’re happy with it, you can actually swap that dev in production environment immediately, so there’s no downtime or any wait there; it’s just one of them starts serving traffic and the other one spends [inaudible] down because that’s really nice workflow. Try out a change by pushing it up to my own personal branch. It goes into the [inaudible] environment when we test it and then we ship it to production.

A lot of the features like that are really quite powerful for getting started. There’s quite a lot built in to the platform and folks want to try that out. We actually do have an option for if you’re not an Azure customer or anything like that, you can go to tryappservice.azure.com. You don’t need a credit card or anything, just login with Facebook, Microsoft account or a Google account will give you a quick [inaudible] experience. We’ll spend up the resources for you and lets you play around and kind of see what we have to offer. That’s a good way of just – if you wanted to see how things work, certainly check out the documentation to see all those features that we have built in. The staging slots is just one of many really cool options.

**CHUCK:** Alright, I was actually going to ask you if there was a way for people to try it out so you nailed that, too.

**MATTHEW:** Yeah, there we go. And even after you’ve chosen to become an Azure customer, like if you want to do longer development, there is a free tier in App Services so that’s really good for Azure building the first version of your app. Starting there, you don’t have to worry about the cost of standing resources. As soon as you’re ready to go to production, you can move it up to one of the paying tiers.

**CHUCK:** Alright. Well is there anything else we should’ve brought up about Azure App Services and mobile apps that we didn’t?

**MATTHEW:** Nah, I think that’s a pretty good coverage.

**CHUCK:** Alright. Well let’s go ahead and get to picks then. Andrew, do you have some picks for us?

**ANDREW:** Yeah, I’ve got a pick and then an anti-pick. I’ll start with [crosstalk].

**CHUCK:** I love the anti-picks.

**ANDREW:** Yeah. I’ll start with my pick. So my pick is just a project on GitHub called ThisCouldBeUsButYouPlaying which is a weird name. This is by Boris Bügling, also known as neonacho, also known as neonichu. He’s got lots of names. Anyway, what this is it’s actually a Ruby gem and it integrates with CocoaPods and makes it so that you can easily create a playground for any pod on CocoaPods. It also works with Carthage if you use that. But this is actually really cool because it means if there’s a library that you want to try out in a playground which is previously not that easy to do – it’s possible but it requires some manual setup and some stuff that’s not super easy – now you just run this one command.

You just say “pod playgrounds” and then the name of the pod you want and it will create and open up a playground in Xcode and you can just start writing Swift code just like a regular playground that uses the library, the CocoaPod. So this is something that I hope somebody would do for a long time. I ran across this this week and started playing with it. It’s really cool and it works really well. That’s my pick.

My anti-pick is pretty predictable; nobody’s going to be surprised but I’ve been fighting for the last five days with it and that’s code signing in Xcode. I’ve been an iOS developer since day one of the SDK and this, if anything, has gotten worse. I don’t know why Apple can’t figure out how to make code signing not such an utterly horrible experience but they don’t seem to be able to and meanwhile, developers waste hours and hours on it. So someday, maybe before I die, they can figure it out. [Chuckles]

**CHUCK:** I’ve been walked through it twice by experience folks and I still don’t get it.

**ANDREW:** It doesn’t matter how long you’re doing it, and it just magically broke on Friday. Just suddenly build started failing on our built server. Nothing had changed at all and I’m now five days in and still haven’t quite figured out how to make it work again.

**MATTHEW:** Yikes.

**CHUCK:** I think I remember you talking about that when we went and got Ramen.

**ANDREW:** Yeah, I think I did.

**CHUCK:** “My built server keeps on giving me errors!”

**ANDREW:** I thought I had it fixed over the weekend and then last night, it acted up again.

**CHUCK:** Yeah, don’t get to comfortable, Andrew.

**ANDREW:** I know.

**CHUCK:** [Chuckles] So I’ve got a couple of picks. My first pick is if you’re in the Salt Lake area. We went and had some terrific Ramen on Friday. Andrew and I did. There’s a place called Tosh’s Ramen. I’ll put a link to it in the show notes so that you can find it. It’s toward downtown and – downtown Salt Lake that is. It was so super good so I’m definitely picking that.

I’m also going to pick a couple of other things that I’ve kind of gotten to lately. One of them is a book; it’s called Fully Alive by Ken Davis. It’s a terrific book. I listened to it on Audible which means I don’t know how many pages long it is but it’s a five and a half hour recording which, as far as books go, isn’t that long so I’m assuming that it’s not an overly thick book. But he talks about being fully alive and living your life to the fullest essentially and talks about all kinds of different aspects of life. I found it very inspiring.

Some of the stuff was practical and some of the stuff was more inspirational. I think he had a good mix. It’s not going to solve your life problems but I think it gives you a good framework for figuring out how to solve your life problems and to identify some of the areas in your life where maybe you could live a little bit more fully alive. So I really enjoyed the book and it’s definitely going in my top five books that I recommend to people.

The other thing I’m picking is the Fitbit One. I have a Pebble Time Steel watch which actually does fitness tracking; the problem is is that I want to set up a treadmill desk in my office and give that a try. I know that if I’m trying to type and walk with a Pebble Time Steel watch on my wrist, it won’t pick up the steps. So I picked up a Fitbit One. I forgot how much I liked the Fitbit dashboard on the web so definitely going to pick that as well.

Matt, what are your picks?

**MATTHEW:** So I’m picking an album that I cannot get stuck out of my head which is the original Broadway cast recording of Hamilton. So they’ve recently got a very large number of Tony nominations and it’s a very good show. I keep listening to it on repeat and even just can’t get it out of my head.

**CHUCK:** Yeah, I keep hearing about Hamilton. Have you seen it?

**MATTHEW:** No, those tickets are sold out for a very long time but I know they’re coming to Seattle in 2017 so I’m looking forward to that.

**CHUCK:** There you go. Alright, well we’ll go ahead and wrap the show up. Thanks for coming Matt.

**MATTHEW:** Thank you all for having me.

**CHUCK:** And we’ll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit cachefly.com to learn more]_**
