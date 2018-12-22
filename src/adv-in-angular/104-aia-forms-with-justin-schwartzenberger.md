---
layout: layouts/post.njk
title: >
      104 AiA Forms with Justin Schwartzenberger
date: 2016-08-04 07:00:49
episode_number: 104
duration: 48:20
audio_url: https://media.devchat.tv/adventures-in-angular/AiA104Forms.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

## [Angular Remote Conf](https://allremoteconfs.com/angular-2016)
&nbsp;01:56 - Justin Schwartzenberger Introduction
- [Twitter](https://twitter.com/schwarty)
- [GitHub](https://github.com/jschwarty)
- [Blog](http://schwarty.com/)
- [SoCreate](https://www.socreate.it/)
03:01 - User Input/Forms
- [angular-form-builder](https://github.com/kelp404/angular-form-builder)
07:40 - Validation; Using Forms for Angular 2
- [Justin Schwartzenberger: Angular 2's Fresh Approach to Style @ ng-conf](https://www.youtube.com/watch?v=J5Bvy4KhIs0)
- Complexity
- Template-driven vs Model-driven
25:27 - Changes in Forms32:06 - Getting Started with Forms (Tips and Tricks)
- Metadata-driven Forms
&nbsp;Picks
- [Angular 2](https://angular.io/) (John & Joe)
- [Parks and Recreation](http://www.nbc.com/parks-and-recreation) (John)
- [The Goldbergs](http://abc.go.com/shows/the-goldbergs) (Joe)
- [Ego Is the Enemy by Ryan Holiday](http://www.audible.com/pd/Self-Development/Ego-Is-the-Enemy-Audiobook/B01GSIZ5AC) (Lukas)
- [Matt Podwysocki's Rx Twitter Status](https://twitter.com/mattpodwysocki/status/754150585327230976) (Lukas)
- [How to Stay Motivated: Developing the Qualities of Success by Zig Ziglar](http://www.audible.com/pd/Business/How-to-Stay-Motivated-Audiobook/B002V8MXYK?mkwid=DSATitle_dc&pcrid=81800400129&pmt=b&pkw=_intitle%3Aaudiobook&source_code=GO1GB907OSH060513&gclid=CJ_27NjQoM4CFY5Zhgod3goPWg) (Chuck)
- [The Harry Potter Series](https://en.wikipedia.org/wiki/Harry_Potter) (Chuck)
- [MacBook Pro](http://www.apple.com/macbook-pro/) (Justin)
- [Red Dead Redemption](http://www.rockstargames.com/reddeadredemption/restricted_content/restricted_content_agegated/ref?redirect=http%3A%2F%2Fwww.rockstargames.com%2Freddeadredemption%2F&hash=acfa2dee2d95e7e615ac4bb7535949b6) (Justin)
- [Lynda.com | Angular 2 Forms: Data Binding and Validation with Justin Schwartzenberger](https://www.lynda.com/AngularJS-tutorials/Angular-2-Forms-Data-Binding-Validation/461451-2.html) (Lukas)


### Transcript

 **WARD:&nbsp;** Justin looks like he's ready for a knife fight.

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not that’s totally up to you. You can check it out at KendoUI.com]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 104 of the Adventures in Angular Show. This week on our panel we have Ward Bell.

**WARD:&nbsp;** Howdy.

**CHUCK:** Joe Eames.

**JOE:&nbsp;** Hey everybody.

**CHUCK:&nbsp;** Lukas Reubbelke.

**LUKAS:&nbsp;** Holler at you boys.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv. Quick shout out about Angular Remote Conf. Go check it out, AngularRemoteConf.com. We have a special guest this week and that is Justin Schwartzenberger. I think I said that right or read it right.

**JUSTIN:&nbsp;** Yup. How's it going?

**CHUCK:&nbsp;** Do you want to introduce yourself real quick?

**JUSTIN:&nbsp;** Sure. I'm Justin Schwartzenberger. I'm Lead Engineer at a company called SoCreate. We're building a platform for screenwriting for film and TV, that sort of thing. And I enjoy Angular. [Chuckles] I'm all up in the Angular space. So, yep.

**WARD:&nbsp;** You guys have done a lot of Angular 1 and now you're all in on Angular 2. Is that right?

**JUSTIN:&nbsp;** Yes, that's correct. We started Angular 1 a long time ago. And early alpha stages decided to buy into Angular 2 and just start porting, converting, and rolling with the changes over time. And so, we've really been entrenched in building a couple of applications from Angular 2 alpha on and going along with all the changes and adapting as we went.

**WARD:&nbsp;** The land of bleeding cuts.

**JUSTIN:** It's kind of scary, kind of scary. But, you know…

**CHUCK:&nbsp;** [Laughs]

**JUSTIN:&nbsp;** Adventurous as well. [Chuckles]

**WARD:&nbsp;** It's a great club. We're all in. So, this app of yours, it takes a lot of user input, doesn't it?

**JUSTIN:&nbsp;** Correct, correct. We have a couple of different apps. And we have one that's currently in our pipeline right now that does a lot of customer management, really. You think full-blown kind of customer order management, that sort of thing, that we're doing for our client and it's really forms all over the place, data collection.

**WARD:&nbsp;** What kinds of devices will the users be using? Will they be using a browser in a tablet, in a desktop, on a phone? Are you considering a range of devices or are you focused on one?

**JUSTIN:&nbsp;** Yeah, so for this app we're targeting evergreen browsers. But we are doing a mobile-first type of design, so we want to support mobile, tablets, desktop, but in the browser.

**WARD:&nbsp;** Yeah. That makes sense to me particularly where there's a lot of keyboarding involved which it sounds like in a CRM type app like you're describing, it's kind of CRM-ish, isn't it?

**JUSTIN:&nbsp;** Right, right. Very much, exactly that. And you know, that's the challenge…

**JOHN:&nbsp;** Wait, wait, wait, wait. You don't want to do keyboard-intensive stuff on an iPhone? What's wrong with you?

**WARD:&nbsp;** [Laughs] Yeah.

**JUSTIN:&nbsp;** We want to just ask Siri to input the data for us.

**WARD:&nbsp;** I think that's really it. Siri, sell… she sells seashells or I will stand by the seashore.

[Chuckles]

**JUSTIN:&nbsp;** I just can't get her to spell Schwartzenberger, so whatever.

**WARD:&nbsp;** [Laughs]

**JOHN:&nbsp;** [Chuckles] That's okay. We can't either.

**JUSTIN:&nbsp;** [Laughs]

**WARD:&nbsp;** Okay. So you know, if it was John or me we'd say, “No problem. We're going to just write a component and we're going to throw inputs and selects and jazz on the screen and party on.” But what's wrong with that?

**JUSTIN:&nbsp;** Haha, well I don't think that there's anything wrong with that. I think that there are a couple of different approaches, right? And that's one of the challenges I think with forms in the Angular space right now, and probably I guess even going forward, is there's kind of… I don't know. Maybe it's not a problem but there's different ways you can go about it, right? Which is probably good, choice is good. But you run into, how do you direct people when you teach people about how to build forms or when you're working within a team, what should you tell your team? Here's the approach. And you run into, oh, you could do it right in the template, right? Use some two-way binding and controls. Or you could do the model-driven approach and build your code back in the component class and wire that up to your template. I think both will work.

It just kind of comes down to, I think there's a complexity level when you start getting complex with your form data and [inaudible] especially when you get into the validation space, custom validation and stuff like that and how you tie in multiple fields to interact with one another. When you say like, if I'm collecting this data I have to also collect X, Y, and Z over here. And then stuff like that. So, I think it's depending on different use cases sort of thing.

**WARD:&nbsp;** So, you guys then are generally using the form tag and then going on and adding Angular 2 form elements on the screen and form… sorry, on the template and form directives and stuff?

**JUSTIN:&nbsp;** Yeah, we decided to take the approach of doing the model-driven approach where we're really crafting our forms inside of our component. The representation of our form inside of our component class using TypeScript and building out using the form builder class and building out controls and control groups and those sort of things now, form controls and form groups. To have that representation in the class for a couple of reasons, right? There's the testability so that we can write unit tests against that stuff.

But I think one of the more valuable aspects of that that we kind of discovered, especially in a team environment when you have multiple people tacking these different tools and somebody comes in and has to work on this one form and another person has to work on that later. You get some things that surface I think with the form builder where you get error messages in the console if you try and bind up your form group to your form and you have named controls in there, right? Or named groups. And you don't… you use the wrong name for a field. Let's say you have first name and in your form builder you use that and you say, “Hey, I've got a form control named first name.” And then in the template you just call it name. You'll get a console error for that. So, it surfaces some of that stuff for you.

So, over the life cycle of an application it adds some of these refactoring forms or refactoring tools so you know that is always going to happen. You kind of get some guard against that that helps you out and says, “Oh, now I've got these things that's kind of breaking because somebody went into the template and changed something and it actually kind of broke the functionality.” And that surfaces earlier than later.

**JOHN:&nbsp;** So, let me throw a different angle on this. I know, Ward hinted at this, what I've done a lot with forms is I just use inputs and selects and whatnot like I normally do. I still do validation. I create my own validation stuff. And in some cases, in Angular 1 what I would use is ngMessages and whatnot to show those things. But I would also write, what do we call it, like had my validation be model-driven as opposed to form-driven. So, if the data violates some problem I want the data to tell me not just the one place showing on the screen because it might be in multiple places around.

And I've found in the past and maybe I'm tainted on this and probably am, not even just Angular but HTML forms sometimes feels like ceremony to me. It feels like all the different attributes that you have to add and all the different elements you have to add and then you have to do all the tying together, the labels to the elements, and when I'm done with it all and I finally get it working in concert I feel like I've doubled or tripled the size of my HTML page just to make it all work. And in the end I've got a good validation and form process. It works great. But it's still only validating the data on the screen as opposed to the data behind the scenes. So, I felt like it solved part of the problem, not the whole problem. And I still had a lot of ceremony. Tell me why I'm wrong here, Justin. Why [inaudible]? I trust you. I respect what you've done. I've watched you… we all love your presentation at ng-conf by the way. It was awesome.

**JUSTIN:&nbsp;** Thank you. I appreciate it.

**JOHN:&nbsp;** And I don't say that lightly. It was great. But tell me why I should reconsider using forms for Angular 2?

**JUSTIN:&nbsp;** Yeah, that's a good question. I guess, I don't know. I guess to me that representation of the model in your code, right, to me feels more like… some of the things I start worrying about or think about in terms of the template and what is that, is that just a display of my form? Of course, like you mentioned, it's kind of one-to-one. That's where your inputs are, right? So, that's where they're going to live. But what if that template is not… it needs to be something different or needs to render in a different way. Will the model being represented in the class behind there allow you that flexibility or allow you that possibility in an easier manner as you go forward? Maybe something like a mobile framework or something and you're trying to just put a new UI on top of that. Does that allow you to bring back your form logic and your data collection and stuff in the backend more and just expose that or just wire it up connect [inaudible] in the frontend differently?

I guess how do you do it in terms of when you have this representation of that data… I'm assuming you're referring to doing more of just getting in the template and doing ngControl and the two-way binding and stuff like that and having you, like a view model sort of thing for your data and then wiring it up that way and then collecting it and just knowing that your representation of it, let's say you have an order, it would be in this order model behind the scenes. And you just have…

**JOHN:&nbsp;** Mmhmm.

**JUSTIN:&nbsp;** This input that would wire up to that with a…

**JOHN:&nbsp;** Yeah, yeah.

**JUSTIN:** &nbsp; A two-way binding, right? And you're collecting that.

**JOHN:&nbsp;** Yeah, let's use a concrete example, right?

**JUSTIN:&nbsp;** Yeah.

**JOHN:&nbsp;** Let's use an order as an example. I mean, I'd have an order inside my component. I'd have almost a controller by the way inside my component.

[Chuckles]

**JOHN:&nbsp;** I'd have some kind of a model for an order and all the order data. And let's say I'm editing just to make it simple, that model would then be bound to the template and that template would use like ngModel and regular one-way binding for things that are read-only to show it. And then when I want to save it I just add buttons that would help save, cancel, reset, and maybe also in the model I would have a state. Like for simplicity's sake we could have the model and then the original model, right? So, current model and original model. So, we could do state and we could actually write very simple code to go back and forth, which by the way ngForm doesn't do a lot of for you anyway, so you still have to deal with how do you go there. But I don't [inaudible]…

**WARD:&nbsp;** And your validation rules should be in that model, too. So for example…

**JOHN:&nbsp;** Yes.

**WARD:&nbsp;** If something is required or if the order name or the quantity was required or had to be positive or something like that you would have those rules baked into the model. And then no matter…

**JOHN:&nbsp;** Yes.

**WARD:&nbsp;** And that's not part of the component. That's part of the model. So, if that model is, your model of the order is used in some other component, well along comes all of that validation logic because it belongs to the order. It doesn't belong to the component. And it certainly doesn't belong to the template. That's kind of the way we tend to roll. So, I too have that confusion when I confront forms because it seems like the business logic that determines what is a valid order creeps into the component or creeps into the template. And risks being…

**JOHN:&nbsp;** And let me give a concrete example of that

**WARD:&nbsp;** [Inaudible]

**JOHN:&nbsp;** Ward, let me give a concrete example of that. Let's say you get an order, let's say order quantity. Order quantity is kind of important, right? It's required. Or order item even. Any of those. If that's a required field in some way using that, or order date has to be greater than today, one of those rules is there, I don't want to leave it up to the UI developer to have to put in the required attribute inside the HTML element of the template. If the model already knows that that's required, even regardless of what that UI developer does and create that template there, now the UI will be notified, the way I write this stuff, the UI will be notified when the model has been violated. So, that model's violated and the field's not there and it's not set. No matter who's using it in any template, in any component, everybody knows that it's not there.

So, we no longer have the, “Oops,” of, “Oh, I forgot the required attribute,” or, “Oh, I forgot the regular expression attribute,” or any of those other things. And that's kind of why I've gone away from it. But I'll be very honest. I know Ward and I are against the grain on this. For example, a lot of people at my company all use forms religiously. I feel like they've gotten in my way more so than helped me to do this. Which is why I just, I haven't found something I couldn't do on my own with less work actually.

**JUSTIN:&nbsp;** So, a good question for you on that. So, what do you do in terms of if your model's got your validation, right? How are you surfacing that back out? Are you rolling that all on your own in terms of having your model having methods or whatnot that surfaces stuff and then getting that out to the UI?

**JOHN:&nbsp;** So, there's a couple of different ways. I know Breeze does some of this stuff for us, too. And we've used Breeze, too.

**JUSTIN:&nbsp;** Mmhmm.

**JOHN:&nbsp;** Which is a service-based model for data management which actually lets you set up validation and then when it's violated it'll alert you. But there's other very crude ways of doing it. For example, setters and getters are one way of doing it with your model. When certain things happen, they can fire off business rules. They can fill up errors objects and then notify your UI. That's probably a very crude example. But that's one way I've done this as well. And lo and behold, even if you didn't do that, if you still needed those attributes on the UI you'd still need to have some way to collect those messages, right?

**JUSTIN:&nbsp;** Mmhmm.

**JOHN:&nbsp;** Like you still need to tell something. Whether you use forms or not I guess my point is you still have to tell the code, “These are my rules. They're required or they're not. These are regular expressions. This order date has to be larger than this.” All that stuff has to exist. When I look at forms, what I had more of a problem with is not that and validation. It's the, “Why do I have to use a submit button? What's wrong with a click on a button to just call save for example? Why do I have to have required attributes and regex attributes and so on and so forth? What can't I just let the model drive this for me?” I'm being intentionally difficult because I want to understand it better. So, that's kind of where I'm coming from.

**JUSTIN:&nbsp;** Mm. And you're referring to like the HTML attributes at that point?

**JOHN:&nbsp;** Yup, yup.

**JUSTIN:&nbsp;** For require, like the HTML5 type of things for that?

**JOHN:&nbsp;** Yeah. And I'm not even talking about…

**JUSTIN:&nbsp;** Yeah.

**JOHN:&nbsp;** Angular forms. I'm talking about forms in general. You know.

**JUSTIN:&nbsp;** Just forms in general, yeah.

**JOHN:&nbsp;** Yeah. Because Angular forms is just an implementation on top of it.

**JUSTIN:&nbsp;** Right. Yeah, I think there's a pain there at that level, too. Like you said, the complexity just for forms in the world of web development, right, down to labels and things like that for binding those along with your input fields and laying that stuff out.

**JOHN:&nbsp;** Yeah.

**JUSTIN:&nbsp;** It's just, it is. So, it seems like a lot of boilerplate work that we just repeat over and over and over and over again, you know?

**JOHN:&nbsp;** Well, the promise too of Angular 2 forms the way I keep hearing it is looking at the light side of things is I believe what they're trying to do is make it easier to actually implement HTML forms with Angular 2. So you don't have as much of that ceremony so that it does some of these things for you. It's still not completely model-driven the way we're talking but I think they're trying to make it so you can reduce the number of things you have to do to actually get a functional form with Angular 2.

**JUSTIN:&nbsp;** Right.

**JOHN:&nbsp;** Is that how you're seeing it?

**JUSTIN:&nbsp;** Yeah. That's what it feels like, that they're trying to accomplish, right? And I think that that's part of the thing with the whole we got template-driven versus model-driven. And you kind of have different ways to take it that you can choose because they want to have a… it feels like they want to have a really easy, out of the box. Like “Look, I just want to wire a couple of things here. How easy can I do that?” versus, “Okay, well I've got this more complex scenario that I need to unfold. Do I have the tools within the platform to make that happen?”

**JOHN:&nbsp;** And what's been your experience with template-driven versus model-driven? Because they have different options now with Angular 2. How do you feel about these?

**JUSTIN:** I think…

**JOHN:&nbsp;** Like which way do you lean? [Chuckles]

**JUSTIN:** I think they both work. I think that's part of the tough part about it is it almost feels like there's no… maybe there just needs to more discussion like we're having in the community about, “This is why this one works. So this is the scenario when this one is good for you and this is the scenario when this one's good for you.” Right now I feel like when I talk to people about it or discuss this stuff it's kind of like, “well, I don't know really what to recommend you to go down, this way or that way. You can do it both ways.” And you can kind of pull off what you need to pull off both ways, right? So, what makes one different than the other in terms of… like, how do you make that decision in terms of architecting your forms? Do I roll with this one or do I roll with that one? So…

**JOHN:&nbsp;** Yeah, options are great. But I think options… I think we're all tired of options in some ways, too. We want to hear the benefits of what those two are and the negatives. And I'm looking at the guy who owns the documentation for Angular and saying, “This is a great thing to add, Ward.”

[Laughter]

**WARD:&nbsp;** Yeah.

**CHUCK:&nbsp;** Well, and I'll just chime in, too. I don't want to spend two or three days researching. Yeah, I want to see kind of the definitive, “Here's how you make this decision,” you know? Turn left, turn right, turn left. There you go.

**JUSTIN:&nbsp;** Right.

**CHUCK:&nbsp;** Or just tell me…

**WARD:&nbsp;** Or at least be clear…

**CHUCK:** This is the way that you do it in Angular, period.

**WARD:&nbsp;** yeah and if I can't do that I should be able to tell you what the pros and cons are for a choice and what scenarios a particular strategy fits best. So for example, if you have the rich data model, sorry, yeah this rich business model that John and I are talking about, then it's pretty obvious that you want to drive things out that way. But if you don't happen to have such a rich business object then you're kind of driven to putting validation into the UI. And so that, you know you can almost start to, if you have a decision tree you can start saying, “Well, what kind of object am I going to accept input on? Is it a rich object that has internal validation or is it not?” If it's not then you're kind of forced to say, “Well, I guess I got to put my validation logic in the component,” or, “Got to put it in the template.” And so, you know where forms is contributing.

**JUSTIN:&nbsp;** Mmhmm.

**WARD:&nbsp;** And then you say, “Aha! I know.” Going into this decision tree, I don't have a rich business object. Go to go with forms. I do have a rich business object, maybe forms don't help me so much. You know, but I think that's what people are looking for and they don't necessarily say, “Those shan't use forms.” they need to know when given your situation, you should know turn left or turn right.

**JUSTIN:&nbsp;** And I think there's some overlap there, too. One of the things, like what about validation messages? Where do those live? Where does the actual text live? When you're talking about localization and stuff like that, if you have this backend model, like you really… the UI maybe needs to be able to switch out that actual text message that goes for your validation, right? And you may have two different forms to modify that data through two different tools. And one displays a message a certain way but they both use the same validation logic, right? So then, how do you cover that? It almost feels like I guess when you step back as a whole, forms are complicated, right? I mean, there's a lot of stuff that can go. Collecting data, validating data, all the stuff that needs to go. Is there really going to be one fit to bolt onto the top of the entire thing? Or is it really, like there are multiple problems. And can we have composition to craft what we need to do to solve that problem?

**JOHN:&nbsp;** So, here's where I step into that, and I think you've just summed it up really well. Forms are complicated and the problem they solve is complicated. And when we try to solve complicated problems a lot of times in our industry, let's face it. Sometimes we solve it with an even more complicated solution. And I guess that's why I've felt sometimes that forms didn't make it easier. It made it harder. I'm not saying it's not a good choice for everything. What I'm saying is that before I step into forms or even people I advise, I try to figure out what they're actually trying to solve. Like if all they really want is to enter data, do a little bit of validation, and then press save or cancel, I don't necessarily think at that level you need all that with forms.

But if you have a lot of rich validation that you want to put in your UIs and you really need that form's submit process, like you need that formal form submit/cancel process that they're used to with standard HTML server-driven stuff over the years, and you want the messages to be bottled up and boxed for you in a convenient package because they did messaging for you, I think forms in Angular 2 can actually help you. That might be where I would lean towards looking to see where that goes. And localization side I think is a very good point. Where do those messages come from? How do you bind those up? I'd like to use data bindings more. But these are things you need to think about. I would invite anybody who wants to solve this problem to first list out the goals they're trying to accomplish before they actually start writing code with this. And I don't think enough of us do that.

**JUSTIN:&nbsp;** Yeah, I agree.

**JOHN:&nbsp;** Sorry, that was my soapbox.

**JUSTIN:&nbsp;** I agree. I agree.

**JOHN:&nbsp;** [Laughs]

**JUSTIN:&nbsp;** I agree.

**WARD:&nbsp;** How do you handle validation today in your app? Let's take the order example. And that a quantity is required and it must be greater than zero. You know, let's suppose you've got one of those rules. How does that arrive in your forms-based approach?

**JUSTIN:&nbsp;** Well right now, of course we got it on both sides. We got it in the form on the Angular side. We got it on the server-side and the API that receives the data. It's really, okay we got this. We're using the form builder. We're building out this form representation of the model, of the form model, in our component and we're adding validators right within that code, right? So, we're composing these validators, [assume the] scenarios. We're using out of the box ones. We're rolling our own custom validators for certain types of data. And it really ends up being kind of almost a mirror of the same validation that we write on the API side, on the server side, right?

**WARD:&nbsp;** And these validators are built up in your component class because you’re building up an image of the… sort of an object image of the class that has these validators and stuff in the component itself. Is that what you're saying? Is that where the logic [inaudible]?

**JUSTIN:&nbsp;** Correct. Yeah, because it's essentially a form group that's being built out. And then with nested groups or form controls within it that represents the data collection that's going to be part of the UI, right?

**WARD:&nbsp;** So, then you build up this sort of, this tree, this representation of the form that's all tricked out with all the validation logic. And then how does that surface in the template? How does the template learn about it?

**JUSTIN:&nbsp;** So then in the template, you're using the form group on your form element in order to tell it, “Here's my backing form group that I created.” So, if I have an order, if I call my form group order form in the component class as a property, order form, and I set that equal to a new form, a 'form builder dot group' call, that's the start of my structure. Then in the template on my form element I'm putting form group and binding that to my order form property from the component.

**WARD:&nbsp;** So, if my order form has 10 properties that are supposed to be visible and I've created 10 controls within my component, then I'm going to go onto the template and place those, put in an element tag or something that represents each of those elements and where they should appear on the screen?

**JUSTIN:&nbsp;** Yeah. So let's say, we're taking the order and we're going to have a first name and last name, right? And so, we got input elements type text and I'm going to use the form control name and set that equal to the name that I gave it in the backend. So, if I called it first name camel-case then I'd be calling form control name equals first name. Same way with last name, that sort of thing. It's mostly the same HTML elements with an additional directive to give it the strong name that it's going to use, right?

**WARD:&nbsp;** Okay. So, in template you're doing the visual representation in the component. You've got an object tree that represents the form and you're using some strong name to kind of connect the two and it can give you feedback if you messed up on the names.

**JUSTIN:&nbsp;** Correct.

**WARD:&nbsp;** The gist of it.

**JUSTIN:&nbsp;** Correct. And then you're using your order form, the form group property, right, throughout the template if you need to access controls, additional… any of the nested controls from the tree to show validation, that sort of thing.

**WARD:&nbsp;** Okay. So, I'm going to tell it in the template where to put validation errors. If the order, and we were talking about the quantity, if the quantity is in error then on the template I'm going to tell it where to display that error validation?

**JUSTIN:&nbsp;** Yeah. And you can do…

**WARD:&nbsp;** That's…

**JUSTIN:** I believe it's like you do an 'ngIf order form dot controls dot quantity dot valid'. So, if it's not that, it can display something and it can get to the errors and that sort of thing off of that, right?

**WARD:&nbsp;** Okay. So recently, forms changed.

**JOHN:&nbsp;** Surprise!

[Laughter]

**WARD:&nbsp;** What?

**JOHN:&nbsp;** You mean Angular 2 forms. [Inaudible] Yeah.

**WARD:&nbsp;** Angular 2 forms. Yeah, you know HTML hasn't changed. But…

**JOHN:&nbsp;** [Chuckles]

**WARD:&nbsp;** You know, you're a pioneer. And this has happened and it's actually happened incredibly recently as we speak, as we record. I don't even think we've actually officially announced it. But it will be by the time they hear it.

**JOE:&nbsp;** You just did.

**WARD:&nbsp;** [Laughs] Tell us what you think about that. Not the fact that it changed but what do you see in the new forms and what's it like trying to get there?

**JUSTIN:&nbsp;** So, what I just explained was the new forms type stuff, right? I've already moved forward [chuckles]. And I think these naming things was before you create control and control array and control group. And now they're form control, form array, form group. They make a little more sense in terms of the naming convention of what you're working with. It feels like there's a little bit less that you now need to do in terms of the template wire-up for the model-driven approach. You're not doing this ngControl thing anymore. You're just giving it the form control name or form group name, that sort of thing. There is also some stuff that they added in there for things like radio buttons. There wasn't a really good story for radio buttons in terms of having them, a group, right? So, if you have like…

**WARD:&nbsp;** Yeah.

**JUSTIN:&nbsp;** An order form and you have a sandwich size, small, medium and large, and you want to have a radio option for that, they have that built in where you're really just creating a single control for size now. And then it can have the native HTML element attributes and know that these are the same one, these are for the single field sort of thing. So, I think from a standpoint of the markup that you're writing, the stuff that model-driven approach with this latest iteration of the forms has actually gotten a little bit less than what it was before. And we had a couple of different attributes that we'd have to put on there to wire this thing up and now it seems like we just got one, specifying the names. So, I think that's a step in the right direction.

**WARD:&nbsp;** Yeah, I think it's a lot… I agree with you. It's a lot cleaner. You don't have to have both the form control and an ngModel. The names are rational. I kind of like that it's a separate module, too, a separate library now. So that it can evolve independently of core. You can decide to have it or not. And it has a chance to be its own thing that evolves… driven by its own agenda.

**JUSTIN:&nbsp;** Yeah, that's one thing… John, where he was talking about in terms of making it easy, right? So, I think that from the documentation it's looking like, or from the meeting notes they're looking like the template type stuff is going to be baked in out of the box. And then the model-driven stuff is going to be opt in where you bring it in from that barrel, right? Angular/forms. And so, maybe that's a good thing in the sense of, “Hey look, if you want to just roll with these built-in kind of things then you got that,” or you can opt in…

**JOHN:&nbsp;** That implicitly…

**JUSTIN:&nbsp;** [Inaudible]

**JOHN:** That implicitly solves that problem we were just talking about of…

**JUSTIN:&nbsp;** Right.

**JOHN:&nbsp;** What is the Angular team recommending? But they're baking something in that kind of leans you towards a certain direction anyway. And I think frankly, people who pick up Angular are going to use what's there by default first. That's just the tendency of most developers.

**JUSTIN:&nbsp;** Right, right. Especially when given that directive of where… “Here's where you go with it. Here's how you do it,” sort of thing.

**JOE:&nbsp;** Hey Justin, I wanted to ask you a question and that is with the changes, the recent changes, is there any changes that you don't agree with, you don't like, didn't like?

**JUSTIN:&nbsp;** You know, initially I was a little hesitant on the whole ngForm, the export. So, what I'm talking about here is the on controls. You could do the hash template variable type of deal equals ngForm. Like your input, you have an input for first name and you can do…

**JOE:&nbsp;** Right.

**JUSTIN:&nbsp;** Hash name equals ngForm and you'd get a handle to that control essentially at that point. Then you could do like…

**JOE:&nbsp;** Right.

**JUSTIN:**'Name dot valid' right off the bat. And so, that's gone away. And I'm like okay, well now how's validation going to play out? How are you going to display those messages and stuff like that? But now living with it for a little bit I think it's, it makes sense. You just have one point of you're working with your order form control, form group, right, at that point. And now you're just getting to the controls within that. You're essentially now in your model tree to get to that. I think it makes it more verbose in the template side but it actually makes it I guess less confusing. So…

**JOE:&nbsp;** Right.

**WARD:&nbsp;** Yeah, particularly when everything was, no matter what control it was, was called ngForm.

**JUSTIN:&nbsp;** Yeah.

**JOE:&nbsp;** Right.

**JOHN:&nbsp;** Yup, yup.

**WARD:&nbsp;** That confused people.

[Chuckles]

**JOE:&nbsp;** I really like some of the… some of the recent changes have just been renaming some of the things. And I think that's been good. Like there was control which was a terrible name. As far as bad names go, I think the Angular team has had more than its fair share of poorly named objects. [Laughs] And so, that one fit in there, just the generic control. So generic, right? And they renamed that. What is it now? It's form control?

**JUSTIN:&nbsp;** Form control, yeah.

**JOE:&nbsp;** Yeah. So, that was definitely a big improvement. But I kind of agree with you. This whole idea, the blank equal, hashtag whatever equals ngForm, I read through that, I understand exactly what it does. But I also, whenever I see that I find that to be a little bit backwards because usually when you say some attribute equals some value in Angular, the value that's inside of the quotes, you know, equals double quotes and then something&nbsp; double quotes, that thing already has a value and you're like giving it in, right? In this case, this is like a special key and so that you can pull something out onto the left side of the equal sign. So, that's kind of a weird thing for me, right?

**JUSTIN:** Yeah, I think that the whole exports thing is just kind of, I don't know, it's strange. [Chuckles]

**JOHN:&nbsp;** But is that just syntax though? Is that simply just like the square brackets and parentheses? In the beginning it was like, “Ah, that's weird. What does that mean?” And then after a day or two you're like, “Eh, I'm okay with that.” Is this just syntax or do you think it's deeper than that?

**JUSTIN:&nbsp;** I think it's kind of, you start thinking about, “When do I want to do that?” And especially when you start talking about, “Okay, well Angular the platform does some exports. Now when I write my components do I want to do some exports? What's the use case for that?” right? Like, “Hey, oh this thing's in the bag. It seems like they're doing it for some reason. Should I be thinking about that when I create my components?” And then at that point I think you start getting some [inaudible] and I'm like, “Oh, I want to encapsulate things in my components. I don't really want to give people a handle to my methods and stuff inside my components and let them go wild. I kind of want to keep them away from that. So, when do I export them? What's the use case for that?”

**JOHN:&nbsp;** So, if somebody wants to start diving into forms, you've kind of wet everybody's feet on this and where they're heading. If somebody wants to get there they can go look at the docs obviously and those will improve even, expand even with some of the newest things that have come out. But what tips and tricks do you think you've learned that you could bestow upon people to say, “Hey, this is what I've learned so far and this might make your life easier when you're starting to get into this”?

**JUSTIN:&nbsp;** Well for starters, if you're doing the model-driven approach, if you're using the form builder, it was easier to adapt to this change right? So, if you're using the 'form builder dot control, dot array, dot group' methods off of that, then you really didn't… you had less of an impact, right, in terms of the name changed from control to form control, from control array to form array, that sort of thing. So, that was helpful. I think there are still some things to unfold in terms of things I think about like validators and async validators, right? Like what's going to be the story on that when you've got something that you need to debounce? And that's one of the things we ran into with, as somebody's typing in a field and you need to send back. They're filling out a username and you want to hit our API and make sure that username is not in use, right? Do you do that every character?

**WARD:&nbsp;** Yeah, you got to debounce that otherwise you'll drive everybody mad.

**JUSTIN:&nbsp;** Right? And it's not like you call this field and hey, I want to do, in one simple call, right? There's no framework. There's no forms API that's given to you to make that possible. You really have to go and research and figure out, “How do I chain these things together? How do I pull that off?” sort of thing. So, I think that tip-wise, people are going to run into that. They're going to be like, “Okay, cool. I've got this documentation that gets me up and running with a pretty simple form.” But the minute I start really diving into this thing, where are the answers going to lie, right? And we're going to need more examples, more documentation, more samples out there that show, “Here's the scenario here. Here's the scenario there.” And it's tough because there are so many scenarios, right? But again, I guess the heart of web applications is kind of data interaction and collection, right? So, it is something that's apparent there.

**WARD:&nbsp;** There's another thing that I run into a bit. I wonder to what degree you run into it, which is I hear from time to time about metadata-driven forms. That is that people want the form to have some kind of flexibility in terms of how it's constructed based on information you know about the model. You doing anything like that? Or you just want to shoot yourself?

**JUSTIN:&nbsp;** [Chuckles] Yeah, to be honest that scares me a little bit. It's like, I don't know. When it comes to the UI you kind of want control. I mean, I don't know. [Chuckles] I feel like I kind of want more control.

**JOHN:** &nbsp; Oh come on, man. I want a magic box that just generates my app out of a database. What do I need any code for?

[Chuckles]

**WARD:&nbsp;** That's exactly where I'm going. I'm thinking…

[Laughter]

**JOE:&nbsp;** That's the future, right there.

**WARD:&nbsp;** It's been the future for the last 50 years.

**JUSTIN:&nbsp;** I know, right?

**JOHN:&nbsp;** People want… it's a good question because people want to do this [inaudible]

**WARD:&nbsp;** What was that Microsoft technology that did this model-driven architecture? What the heck was that thing called?

**JUSTIN:** That was exactly what I was thinking. Like, I want to take my Windows desktop app and I want to put it on the web. Can I just do that? Can I drag and drop that, right? I don't want to do that.

**JOE:&nbsp;** [Laughs]

**WARD:&nbsp;** Well, but it's… you know, you can see why it's tempting. And particularly there are often these administrative screens. It's like, “Oh, who gives a…”

**JUSTIN:&nbsp;** Right.

**WARD:&nbsp;** You know, we don't really care. Just, I need to get the information in there. Would you just throw it out there? So, I do see that. And then there's another force driving on that, that drives people crazy, is that the form information, it doesn't require a lot of UI but there's like a gazillion forms. And next week there's a new one. And the week after that there's a new one. They can't afford to have a developer sitting there and handcrafting something, some beautiful UI experience. That's not what's needed. What they need to do is keep up with the unbelievable of new form requests that gather data and throw it in a database. So, that's… I see that. So, I take it somewhat seriously and [inaudible].

**JUSTIN:&nbsp;** Right.

**WARD:&nbsp;** I just wondered whether… but probably in your application you're not dealing with that world changing like that. You're trying to actually shape a really great experience for screen [inaudible].

**JUSTIN:&nbsp;** Yeah. And we did a design-first approach to it, too. So, we really built out mock-ups of what all these forms are going to look like and the data they're going to take in. And now we're implementing those versus having kind of, “Okay, we need a new feature. Let's figure out that at that given time.” It's like, “Okay here, we got a blueprint. We got exactly the form fields we decided on, the structure of that. Now let's go implement that.” And so, maybe that's part of why that falls into place in that scenario as well. It's interesting because we did start this application as an Angular 1 application.

One of the things we did at that point with these controllers is we decided on riding with our scope, moving back and forth on, “Are we going to have a data property on our scope that was going to represent the model? Or are we going to just put our data fields right on the scope and then serialize that in some way?” And we ended up deciding to go, “Okay, well this is going to probably be more beneficial if we just say, look let's make it easy. You put first name right on the scope. Last name on the scope.” And then we had a way to take that scope and pull out the properties for our data and send those off and ignore functions and stuff like that. So, it kind of reminded me of that when we talk about a model representation of the data that's not a forms model on the backend, right? Getting that to the view.

**JOHN:&nbsp;** We're all nodding our heads.

[Laughter]

**JOHN:&nbsp;** You can't see us. But we're there.

**JUSTIN:&nbsp;** It's a challenge. There's… it's just, it's a big, big challenge right? Forms are. And that's a tough thing. [Everybody talks about], “Oh, we're taking in three fields. That's it. It should be pretty fast, right? Let's just whip that thing out.” It's like no, it's not. It's not that easy, right? Data collection is not that easy.

**JOHN:&nbsp;** No, solving data problems is not an easy thing. And I think people, they oversimplify in a lot of ways. But they also can over-architect it, too. So…

**JUSTIN:** That's true.

**JOHN:&nbsp;** I really do feel like we need to just sit down and think about, “What are you trying to accomplish? Do you need validation? Do you need messages? If so, where is that coming from? Is it localized? Is it data-bound? Does that information get collected in a similar way? How are you going to display that information? Which fields need it? Where does the validation information come from?” There's all these things you've got to figure out that before you pick the technology solution whether it's forms or not, you have to figure out how you're then going to use it. And then you should go try to find some samples. This is what I would recommend. Find some samples that do this with Angular forms first to see if you got a taste for it. Because you're right. I think the simple examples you find a lot of the docs. Or yeah, this is how I use it. But how do I actually write a real app with it? That's the next step.

**JUSTIN:&nbsp;** Right. And I guess that's the chicken before the egg question right now is because now you're trying to find that answer. Who's doing this? Who's out there that's going to have these examples of that that I can reference?

**JOHN:&nbsp;** Yeah.

**JUSTIN:&nbsp;** In the Angular 2 space, right? And we're getting there.

**JOHN:&nbsp;** Okay. Well, do we have any other questions or is it time to move along?

**CHUCK:&nbsp;** I'm going to take that as move along.

[Chuckles]

**CHUCK:&nbsp;** So, let's…

**JOHN:&nbsp;** Hey, I got to say, before we wrap up. Justin, this was fantastic. I think you took our criticisms of forms in stride and I like the way you portrayed it. And I do think it's a good opportunity for people to learn more about what forms can do in Angular 2.

**JUSTIN:&nbsp;** I appreciate it. I'm glad I had a chance to [talk shop] with you guys. I always love it. To be honest, Ward probably prepped me a little bit in our discussion at ng-conf all around this whole RxJS, not everything, right?

**WARD:&nbsp;** Right.

**JUSTIN:&nbsp;** Because he's very opinionated on that stuff. And so, I was like, “Okay, cool. If I can have that discussion with him then yeah, [inaudible] being a problem, right?” [Laughs]

**CHUCK:&nbsp;** Alright.

**JUSTIN:&nbsp;** But again, it's every… whatever works for people, let's figure out these solutions, right? It's really not “This is right,” or “That's right.” Let's figure out what the best solution is for the problem.

**CHUCK:&nbsp;** Yeah. Well, I don't know if anyone prepped you about picks. But that's the next segment of the show. I'm going to let John go first. John, what are your picks?

**JOHN:&nbsp;** I'm going to cop out a little and I'm actually going to pick Angular 2 as my tech pick. And the reason I'm going to pick that is I've really been taking a step back and looking at it and going, “What am I really liking about this? What am I not liking?” And I got to tell you, I really love where they're heading. There have been a lot of changes lately in the RCs which I don't love. But the reasons they're making them I really do agree with. And I'm very critical sometimes of change. But I like why they're making the changes they're making and I like where it's going. And I think we're going to have a fantastic product once the release this. Really happy with where it's going. So, I'm glad I'm on this ship and it's something that I feel very good about.

My non-tech pick, something I've been doing a lot of lately is watching TV with my oldest daughter, because they're starting to… you know, they're late teenage years and they're moving along with the less wanting mom and dad around thing. But they've been binge-watching 'Parks and Rec'. And I hadn't seen this show before. And I've been watching that with them and oh my gosh, that show is cracking me up. Absolutely love watching 'Parks and Rec'. We're four seasons in. I hadn't binge-watched this much in a while. But great show. Love it. Ron Swanson, let's go.

**CHUCK:&nbsp;** Alright. Joe, what are your picks?

**JOE:&nbsp;** Okay. So, I want to pick another TV show. So, if we're talking about TV shows, 'The Goldbergs'. I've been watching that. I think I might have picked that one previously. But I just, I keep watching it and it's still so dang funny. I enjoyed every… every new episode that I watch makes me laugh and laugh and laugh. So, I want to pick 'The Goldbergs'.

I also want to chime in along with what John Papa said. I'm really excited with where Angular 2 is headed and the product itself. And there's some funny late changes coming along. And by funny I don't mean like weird or wrong, just there are some late changes that are coming in that are making some differences in how things are going. But I like that they're bold enough to say, “Eh, we need to have this. This is important. Even though we're late in the game, we would prefer not to make a change like this this late, this needs to be done because it's what's right for the product.” So, I've been doing a ton of Angular 2 coding lately and just absolutely loving it. So, I want to chime in on, ride John's coattails on that one.

And that will be it for me.

**CHUCK:&nbsp;** Alright. Lukas, what are your picks?

**LUKAS:&nbsp;** Yeah, so my first pick this week is a book, 'Ego is the Enemy' by Ryan Holiday. I may have done 'The Obstacle is the Way', his previous book, many, many episodes ago. But this book was just really phenomenal, really [based in] a lot of stoic, classic philosophy. But I really appreciate his kind of perspective where, you know 'The Obstacle is the Way' talks about how we have external conflicts to forge who we are. This is the facing down our internal enemy which is ego. So, I highly recommend that book. Very, very good. There's actually, the audio book, there's a really awesome interview that him and Tim Ferris do where they kind of get into it. That was pretty interesting.

And then my second pick is actually just a tweet. I hope I say his name right. And it's unfortunate that Ward had to slip out because I think we're going to eventually have a showdown on Adventures in Angular about RxJS all the things, which is not something I buy into but actually Matt Podwysocki did a tweet three days ago. And he said, “People are always surprised when I don't use Rx in all places. In fact, I don't use it much except when I need it.” And I thought that was pretty rad that I think people tend to take a new thing and they just want to just paint the entire world in it. And I think that, I think as people kind of mature in their career, they realize the it's right tool for the right job. And as big as a fan as I am about observables and RxJS and this unidirectional reactive data flow, I think it's rad that kind of the godfather of RxJS is saying, “Look, I only use it when I need it.” So, that would be my second pick.

**CHUCK:&nbsp;** Alright. I'm going to jump in here with a few picks. Lately I've been reading some books and I just want to pick them. The first one is called 'How to Stay Motivated' by Zig Ziglar. Zig is a motivational speaker. He talks about…

**JUSTIN:&nbsp;** [Inaudible]

**CHUCK:&nbsp;** What was that?

**JUSTIN:&nbsp;** He's a legend. Let's just be honest.

**CHUCK:&nbsp;** Yes. He has books and audio programs where he speaks. He covers topics like sales, just life in general, good living, and marriage. I'm trying to think of what else. Books on all this stuff. This one, 'How to Stay Motivated' is awesome. And it talks a lot about just principles that you can apply in your life to get better. I wouldn't say that I had any major breakthroughs. But just the combination of thinking about several of these principles, I feel like I have a better grasp on things. And I'm just generally happier because I'm being more positive about the things that I'm dealing with. So, definitely am going to pick that.

The other pick that I have is the Harry Potter books by J.K. Rowling. [Chuckles] I just picked them up on Audible. I'd listened to them before and I'd read them before but for whatever reason, I just needed some time to unwind and it's been the thing that I put in my ears when I just need to not think about stuff. Because it's just lighthearted and fun.

So anyway, those are my picks. Justin, what are your picks?

**JUSTIN:&nbsp;** Alright. So, I got a tech pick. I just committed to a MacBook Pro recently purely for the fact that I love the three finger swipe on the track pad, the experience of working on a single monitor, being able to work on multiple apps, especially when you're talking about working with VS Code and the browser and swapping back between those and the terminal. It's like the experience is just awesome. So, I committed to that. I've been on a Windows machine for a while. And so, that's my pick for that. You got to… and if you haven't tried it yet, I think you got to try that track pad experience on the laptop. It's pretty amazing, for the MacBook.

And then I have a gaming pick. On the Xbox 'Red Dead Redemption' just became backwards compatible. So, you can play that on the Xbox One. I'm pretty stoked on that. I think that's an amazing game, one of my favorites. The story is just awesome. The world is awesome. So, I've been revisiting that lately on my Xbox One.

**CHUCK:&nbsp;** Alright. Well, if people want to follow up with you, check out anything you're blogging, you're tweeting, what are the best ways to go about that?

**JUSTIN:&nbsp;** So, my Twitter handle is @schwarty, S-C-H-W-A-R-T-Y. My blog is Schwarty.com. I also have some courses that I'm in the process of putting up and are done with, for people that are Lynda.com subscribers. I have an essential, 'Angular 2 Essential Training' course and an 'Angular 2 Forms' course as well. And I'm working on a few more for that going forward.

**LUKAS:&nbsp;** Let me jump in here real quick. I think actually the reason why we had this podcast is because I actually watched Justin's Lynda course on forms and it was really, really, really well done. So, if you've stuck along this far to the end of this episode, definitely check that out. Justin, I'm a huge fan of your work. Make me like, 12 more courses, bro.

**JUSTIN:&nbsp;** Thank you. I appreciate it. I will. [Laughs]

**CHUCK:&nbsp;** Alright. Well, let's go ahead and wrap this up. And we'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**


