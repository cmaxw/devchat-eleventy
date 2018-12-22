---
layout: layouts/post.njk
title: >
      AiA 154: Angular Animations with Gil Fink
date: 2017-08-29 04:00:08
episode_number: 154
duration: 46:04
audio_url: https://devchat.cachefly.net/angular/AiA_154.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

## **AiA 154: Angular Animations with Gil Fink**
This episode of Adventures in Angular features panelists Ward Bell, Joe Eames, and Charles Max Wood. Special Guest Gil Fink is on the podcast this week to discuss Angular Animations. Tune in to find out more about this topic!**[00:01:05] Introduction to Gil**Gil is the CEO of Sparxys, which is a small consulting company that he owns in Israel. He has been working for Microsoft for nine years in web development. He wrote the book _Pro Single Page Application Development_. Currently, he is also speaking in conferences and consulting for companies in Israel.**[00:02:06] Introduction to Angular Animation**Angular Animation is a model that has been used since Angular 2.0. In the full version it received it’s own model and expanded from Angular core. It is based on Web Animation API and gives a specific language to write Animations declaratively using Typescript in the components. It is also easy to write. Animations are not used to make web pages a “swirling vortex of text.” It instead is something that is used to capture the attention of the user to let them know what is new or where they should pay attention. It gives the user a better overall experience. For example, how to show a user they have a validation error: use a red blinking border. It does not have to be sophisticated or complicated, but can be if that is what is wanted.**[00:05:48] Web Animation API**Animation mobile in Angular has been available for roughly two years. There is a function called animate which gives the ability for an application to be animated. Web Animation API runs animation for you but is not simple.**[00:07:35] What kinds of things do you see people doing with Animations?**A common thing for developers is to make Animations make transitions between pages in SPA. Animations also can be used for appearing, or fading in or out elements. More transitions can be made for panel, where they slide from one side to the other, which grabs the attention of the user. SVG and Canvas also are used for Animations by developers.**[00:10:33] Starting with Animations**Most developers are in a hurry to write their first animations. First, they have to understand animations because understanding concepts are helpful. Reading examples of what CSS 3 and Web Development API are can be a helpful tool. Gil suggests MDM and Mozilla to gain a better understanding. After grasping these concepts, read about how to use the Angular Animation model and how it was created. The Angular Animation model is actually not needed to create Animation in websites – you can use CSS 3 animation and Web Development API.**[00:14:15] How do I add Angular Animations to my Angular app?** 
- Grab a browser Animation model, which is part of Animation.
- Create a trigger. This is something that triggers the effect or Animation.
- Create a state, move from one state to another state using the API.
- Once you have a trigger, write inside the web component in the templates.
- Take the trigger, which is a function, and pass the function in component declaration to the Animations property.
**[00:18:09] When and where should you be using Animations?**There needs to be a balance when using Animations. Gil’s rule is not to use experts to understand where to put them. Not everything should be filled with Animations. He prefers to start without them and then add according to specs or expert guidelines. Animations can be distracting and should be there to help the user.**[00:21:43] Ideas on How to Use Animations in Applications** For example, you can use Animations for models. If a model appears at once, it might shock the user. Instead, make sure that they appear smoothly. It should indicate something is either happening or has happened. If everything happens at once, it may not be as effective for the user.**[00:25:25] At what point in the process do you decide this component needs Animation?** Gil works with experts in the companies that he works for that have guidelines for the components he creates. Because of this, he creates what they want him to create.**[00:28:44] Is there a way of testing these animations are happening?**Yes, you can use tools like Protractor, Selenium, and Test IO. Test IO gives the option to record a screen. These tools won’t help understand animations because they can’t test animations. They can check for existents of a class name. You can use a manual tester for quality assurance or have a person check for you. To really see if an effect is working you have to just see it working.
### **Picks &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;**
Joe:
- Go see an eclipse
Charles:
- [_Secrets of the Millionaire Mind by T.Harv Eker&nbsp;_](https://www.amazon.com/dp/0060763280/?tag=chamaxwoo-20)
- [_You are the Placebo by Dr. Joe Dispenzo_](https://www.amazon.com/dp/1401944582/?tag=chamaxwoo-20)
Gil:
- [Web Animations Deep Dive with Angular](https://blog.thoughtram.io/angular/2017/07/26/a-web-animations-deep-dive-with-angular.html)
- [JavaScript Israel](https://www.meetup.com/JavaScript-Israel/)
- [Rick and Morty](https://www.hulu.com/rick-and-morty)

### **Links**

- [www.gilfink.net](http://www.gilfink.net)
- [www.sparxys.com](http://www.sparxys.com)


### Transcript


