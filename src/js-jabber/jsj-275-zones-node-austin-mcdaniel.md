---
layout: layouts/post.njk
title: >
      JSJ 275: Zones in Node with Austin McDaniel
date: 2017-08-22 04:00:51
episode_number: 
duration: 
audio_url: 
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

## **JSJ 275: Zones in Node with Austin McDaniel**
The panel for this week on JavaScript Jabber is Cory House, Aimee Knight, and Charles Max Wood. They speak with special guest Austin McDaniel about Zones in Node. Tune in to learn more about this topic!**[00:01:11] Introduction to Austin** Austin has worked in JavaScript for the past ten years. He currently works in Angular development and is a panelist on Angular Air. He has spent most of his career doing work in front-end development but has recently begun working with back-end development. With his move to back-end work he has incorporated front-end ideas with Angular into a back-end concept.**[00:02:00] The Way it Works**NodeJS is an event loop. There is no way to scope the context of a call stack. So for example, Austin makes a Node request to a server and wants to track the life cycle of that Node request. Once deep in the scope, or deep in the code, it is not easy to get the unique id. Maybe he wants to get the user from Passport JS. Other languages – Python, Java – have a concept called thread local storage. They can associate context with the thread and throughout the life cycle of that request, he can retrieve that context. There is a TC39 proposal for zones **.** A zone allows you to do what was just described. They can create new zones and associate data with them. Zones can also associate unique ids for requests and can associate the user so they can see who requested later in the stack. Zones also allow to scope and create a context. And then it allows scoping requests and capturing contacts all the way down.**[00:05:40]** Zone Uses One way Zone is being used is to capture stack traces, and associating unique ids with the requests. If there is an error, then Zone can capture a stack request and associate that back to the request that happened. Otherwise, the error would be vague. Zones are a TC39 proposal. Because it is still a proposal people are unsure how they can use it. Zones are not a new concept. Austin first saw Zones being used back when Angular 2 was first conceived. If an event happened and they wanted to isolate a component and create a scope for it, they used Zones to do so. Not a huge fan of how it worked out (quirky). He used the same library that Angular uses in his backend. It is a specific implementation for Node. Monkey patches all of the functions and creates a scope and passes it down to your functions, which does a good job capturing the information.**[00:08:40] Is installing the library all you need to get this started?**Yes, go to npminstallzone.js and install the library. There is a middler function for kla. To fork the zone, typing zone.current. This takes the Zone you are in and creates a new isolated Zone for that fork. A name can then be created for the Zone so it can be associated back with a call stack and assigned properties. Later, any properties can be retrieved no matter what level you are at.**[00:09:50] So did you create the Zone library or did Google?**The Google team created the Zone library. It was introduced in 2014 with Angular 2. It is currently used in front-end development.**[00:10:12] Is the TC39 proposal based on the Zone library?**While Austin has a feeling that the TC39 proposal came out of the Zone library, he cannot say for sure.**[00:10:39] What stage is the proposal in right now?**Zone is in Stage Zero right now. Zone JS is the most popular version because of its forced adoption to Angular. He recommends people use the Angular version because it is the most tested as it has a high number of people using it for front-end development.**[00:11:50] Is there an easy way to copy the information from one thread to another?**Yes. The best way would probably be to manually copy the information. Forking it may also work.**[00:14:18] Is Stage Zero where someone is still looking to put it in or is it imminent?** Austin believes that since it is actually in a stage, it means it is going to happen eventually but could be wrong. He assumes that it is going to be similar to the version that is out now. Aimee read that Stage Zero is the implementation stage where developers are gathering input about the product. Austin says that this basically means, “Implementation may vary. Enter at your own risk.”**[00:16:21] If I’m using New Relic, is it using Zone JS under the hood?** Austin is unsure but there something like that has to be done if profiling is being used. There has to be a way that you insert yourself in between calls. Zone is doing that while providing context, but probably not using Zone JS. There is a similar implementation to tracing and inserting logging in between all calls and timeouts.**[00:17:22] What are the nuances? Why isn’t everybody doing this?**Zone is still new in the JavaScript world, meaning everyone has a ton of ideas about what should be done. It can be frustrating to work with Zone in front-end development because it has to be manually learned. But in terms of implementation, only trying to create a context. Austin recommends Zone if people want to create direct contacts. The exception would be 100 lines of Zone traces because they can get difficult. Another issue Austin has is Node’s native basic weight. Weight hooks are still up in the air. The team is currently waiting on the Node JS community to provide additional information so that they can finish. Context can get lost sometimes if the wrong language is used. He is using Typescript and doesn’t have that problem because it is straightforward.**[00:21:44:] Does this affect your ability to test your software at all?**No, there have not been any issues with testing. One thing to accommodate for is if you are expecting certain contexts to be present you have to mock for those in the tests. After that happens, the tests should have no problems.
### **Picks**
 **Cory:**
- [Apple AirPods](https://www.apple.com/airpods/)
**Aimee:**
- [Blackmill](https://play.spotify.com/artist/4kjWnaLfIRcLJ1Dy4Wr6tY?play=true&utm_source=open.spotify.com&utm_medium=open&autoplay=true)
- [Understanding Zones](https://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html)
**Charles** :
- [Classical Reading Playlist on Amazon&nbsp;](https://www.amazon.com/Classical-for-Reading/dp/B074FDHL2Z)
- Building stairs
- [Angular Dev Summit](https://angulardevsummit.com/)
**Austin** :
- [NGRX Library Redux&nbsp;](https://github.com/ngrx)

### **Links**

- [Twitter](https://twitter.com/amcdnl?lang=en)
- [GitHub](https://github.com/amcdnl)
&nbsp;

### Transcript


