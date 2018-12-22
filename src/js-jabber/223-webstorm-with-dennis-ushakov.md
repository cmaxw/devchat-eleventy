---
layout: layouts/post.njk
title: >
      223 JSJ WebStorm with Dennis Ushakov
date: 2016-08-03 07:00:40
episode_number: 223
duration: 42:08
audio_url: https://media.devchat.tv/js-jabber/JSJ223WebStorm.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

## [React Remote Conf](https://allremoteconfs.com/react-2016) and [Angular Remote Conf](https://allremoteconfs.com/angular-2016)
&nbsp;03:18 - Dennis Ushakov Introduction
- [Twitter](https://twitter.com/en_Dal)
- [GitHub](https://github.com/denofevil)
- [JetBrains](https://www.jetbrains.com/)
  - [JetBrains Issue Tracker](https://youtrack.jetbrains.com/oauth?state=%2Fissues%2FWEB)
- [WebStorm](https://www.jetbrains.com/webstorm/)
  - [@WebStormIDE](https://twitter.com/WebStormIDE) &nbsp;
03:54 - Writing an IDE in Java
- [YouTrack](https://www.jetbrains.com/youtrack/)
- [TeamCity](https://www.jetbrains.com/teamcity/) &nbsp;
04:50 - Specs05:43 - [WebStorm](https://www.jetbrains.com/webstorm/) Defined
- [Integrated Development Environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment)
06:19 - IDEs vs Text Editors08:31 - Building an IDE
- Language Support
- External Tool Support
- [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
13:00 - Code Reuse15:07 - Prioritizing Features17:11 - Why is IDE tooling important?
- “Code is read a lot more than it’s written.”
19:57 - Refactorings
- The Dynamic Nature of JavaScript
- [TypeScript](https://www.typescriptlang.org/)-specific Refactorings
23:35 - Next Versions of Webstorm
- [Early Access Program](https://www.jetbrains.com/support/eap/)
25:07 - Framework Support; Usage Data28:12 - Other Technology and Framework Support31:12 - Working for [JetBrains](https://www.jetbrains.com/)32:17 - Release Cycles and Procedures
- [Early Access Program](https://www.jetbrains.com/support/eap/)
34:39 - Java Source Code Contribution
- [Kotlin](https://kotlinlang.org/)
&nbsp;Picks
- [Jesse Kriss: Human scale technology](https://medium.com/@jkriss/human-scale-technology-75da763eb03#.uj93v2vgo) (Jamison)
- [React Rally](http://reactrally.com) (Jamison)
- Vote (Chuck)
- [Transmit](https://panic.com/transmit/) (Chuck)
- [Steam Squad](http://store.steampowered.com/app/290870/) (Dennis)
- [Ergobaby Four Position 360 Baby Carrier](http://www.ergobaby.eu/baby-carriers-original-360-fall-2014-final-name-tbd.html) (Dennis)


### Transcript

**_[This episode is sponsored by Frontend Masters. They have a terrific lineup of live courses you can attend either online or in person. They also have a terrific backlog of courses you can watch including JavaScript the Good Parts, Build Web Applications with Node.js, AngularJS In-Depth, and Advanced JavaScript. You can go check them out at FrontEndMasters.com.]_**

**_[This episode is sponsored by Hired.com. Every week on Hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the JavaScript Jabber link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/JavaScriptJabber.]_**

**_[Let's face it. Bookkeeping is hard and it's not really what you're good at anyway. Bench.co is the online bookkeeping service that pairs you with a team of dedicated bookkeepers who use simple, elegant software to do your bookkeeping for you. Check it out and get your free trial today at Bench.co/JavaScriptJabber for 20% off today. They focus on what matters most and that's why they're there. Once again that's Bench.co/JavaScriptJabber.]_**

**_[This episode is sponsored by Rangle.io. Rangle have been working with Angular 2 for a long time, and they are now putting together an 8-hour, 2-day course designed to help Angular developers, learn how to write apps in Angular 2. If you're looking to level-up your JavaScript and Angular 2 skills, go to Rangle.io/Training and click on the link for Angular 2 Training. If you're looking for other training in React or JavaScript, they also have that available in Rangle.io/Training.]_**

**_[This episode is sponsored by Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to try debugging issues, or a million alerts flooding your inbox ruining your day. With Rollbar’s full-stack error monitoring, you get the context and insights and the control you need to find and fix bugs faster. It’s easy to install and you could start tracking production errors and deployments in eight minutes or less. We have a special offer for JavaScript Jabber listeners, go to Rollbar.com/JSJabber and sign up to get the bootstrap plan free for 90 days. That’s 300,000 errors tracked for free. Loved by developers at awesome companies like Heroku, Twilio, Kayak, Instacart, Zendesk, Twitch and more. Give Rollbar a try today. Go to Rollbar.com/JSJabber.]_**

**CHUCK:&nbsp;** Hey, everybody and welcome to Episode 223 of the JavaScript Jabber Show. This week on our panel, we have, Jamison Dance.

**JAMISON:&nbsp;** Hello, friends.

**CHUCK:&nbsp;** Charles Max Wood from DevChat.tv. Quickly shouting out about ReactRemoteConf.com and AngularRemoteConf.com. We also have a special guest this week and that is Dennis Ushakov. I hope I said that somewhat close to accurately.

**DENNIS:&nbsp;** Yes, that's close. Hi, everyone!

**CHUCK:&nbsp;** Do you want to introduce yourself really quick?

**DENNIS:&nbsp;** Yes. I'm working at JetBrains as a team lead for our WebStorm and RubyMine Teams. I've been working at JetBrains for almost eight years. I usually say that my work at JetBrains is to make the release process converge.

**CHUCK:&nbsp;** Awesome. Yeah, we met at NG Conf and had a little chat there. I was really interested to just find out like what goes into WebStorm and how all that gets released and things like that. One thing that I think is interesting, just to kind of get us started is that WebStorm, among other things is written in Java. If I remember it right.

**DENNIS:&nbsp;** Yes that's true.

**CHUCK:&nbsp;** So what's it like writing an IDE for JavaScript in Java?

**DENNIS:&nbsp;** Actually we've been writing IDE in Java for quite a lot of times, so IntelliJ makes writing Java code less painful than other IDE's or even text editors. But we are not very proficient in JavaScript. What we do is read specs a lot and we have different dock-footing projects and also we have a content team for doing our web-based tool sessions: YouTrack, TeamCity, who give us really, really good feedback.

**CHUCK:&nbsp;** Oh, okay. That makes sense. So when you say you look at the specs, are you looking at the ECMA Script 5 and ECMA Script 6 or ES2015? You're looking at those? Are you implementing the upcoming versions of JavaScript or is it just kind of a current implemented spec?

**DENNIS:&nbsp;** We are following the upcoming spec so there are things that are not on the official spec that are already working and we are trying to keep up with the new stuff because when you do things, I don't know... if it's right to say, reactive way when spec is getting released and then you're pushing the features. It's usually too late in the JavaScript world because Babel supports all the things and with some extensions and lots of people are already using new stuff.

**JAMISON:&nbsp;** I have a couple kind of background questions. One is, can you just kind of define what WebStorm is for people that might not have used it?

**DENNIS:&nbsp;** Yes, sure. WebStorm is a JavaScript IDE and IDE stands for Integrated Development Environment. Basically, it's a text editor with advance code inside such as the completion, navigation, refactorings, vast integration with the different tools sessions, debuggers, or linters or built tools and stuff like that.

**CHUCK:&nbsp;** And then, you kind of mentioned it a little bit but I often hear about this dichotomy between an IDE and a text editor and WebStorm in my mind is definitely on the far end of the IDE spectrum, it's kind of a choice that you've made pretty deliberately. Can you talk about that difference? Like what makes up an IDE versus what makes up a text editor?

**DENNIS:&nbsp;** Basically, we are okay lingering with a text editor and what are the benefits of using text editor, is that it's usually faster and simpler but --

**CHUCK:&nbsp;** So this is stuff like Vim or --

**DENNIS:&nbsp;** Yeah, yeah, for example.

**CHUCK:&nbsp;** Sublime or I don't know, things like that.

**DENNIS:&nbsp;** Yes. But it doesn't have lots of functionality. For example, you cannot refactor or with some plugins you can refactor but you need to configure them manually and it's usually a little bit harder than in IDE where you have everything baked-in. Another thing is that you have some tools integrated so for example, if you're doing something in the text editor, usually you need to switch to a terminal to a new... I don't know, to launch and build tool or stuff like that, or you need to switch to the browser to do the debugging and in IDE, you just get the debugger right where you code it. You get all the tools built in.

**CHUCK:&nbsp;** Yeah, I would have to say, I use Emacs a lot and then occasionally, I'll pull out RubyMine or WebStorm and my experience is that if I don't want to do any of the setup, IDEs are really nice. But for something like Emacs, in particular, I actually have to go out of my way to make sure that the environment is set up so that it does all the stuff that the IDE's sort of do naturally.

**DENNIS:&nbsp;** That's true. There's also another way that I believe quite a lot of people are using. When they need to do some quick fixes like edit a line or two, they are opening the text editor because it's usually faster but when they need to do some refactoring, they are pulling out an IDE to get all the difficulties stuff down.

**CHUCK:&nbsp;** I can kind of see that. One thing that I'm curious about is that a lot of the tools that I find I wind up using for JavaScript for building and things like that are all written in JavaScript. So when you're building an IDE for JavaScript, do you wind up just hooking into those tools when you provide those services so there's a JavaScript runtime that you're talking to from the Java built IDE? Or do you actually build that in Java and make it a part of the IDE?

**DENNIS:&nbsp;** There are different approaches. We are using the kind of both of them. With some tools, it's enough to just launch that and grab the output and that's fine. Some tools, you need to talk using some [inaudible]. For example, that's what we are doing right now in the Alexis versions. We are building in the TypeScript language service and we're talking using the Microsoft protocol to get all the highlighting for the TypeScript. Sometimes we just do things ourselves. For example, for JavaScript we have our own code inside engine that parses the JavaScript and enforce the types and tries to provide the completion, navigation and stuff like that.

**JAMISON:&nbsp;** Can you talk a little bit more about the technical kind of architecture and things that go into building an IDE? To me, seems kind of magical and mysterious. I don't know anything about how they work under the hood. Like there's the whole text editing part but then there's all these other stuff that you mentioned like talking to external frameworks or libraries and doing JavaScript parsing. What all is involved in the technical aspects of the IDE?

**DENNIS:&nbsp;** It's funny because usually that's what I'm saying at the interviews. When I'm interviewing new people and saying what kind of work they're going to do here. There are two kinds of integrations. The first one is a language support and the second one is external tool support. So we kind of cover a little bit the external tools and just launch or grab the output you are trying to, provide some useful actions for a simplified launching or getting some navigation from the output or some information from the output. Like for example, if you're launching the test framework, you provide the formatter, you grep the output and then you can provide a nice looking tree with the test place and showing which are failing and which are okay and navigation from that tree.

As for a language supports, everything starts with the lexer. To provide some basic highlighting, you need to write your own lexer. We are using the J-Flex for that and lexer is just the thing that splits the input stream of file into the tokens that are getting highlighted after that. If you want just the highlighting, you can stop at the lexer. After that, if you want to do some refactoring, send stuff like that, first thing that you need to do is to get the docker stream converted into the actual tree structure. That's what usually called the AST - Abstract Syntax Tree.

The parser goes through the stream of lexers and it tries to combine them into the nodes which represents some objects. For example, if you have a function declaration, you'll get the couple of tokens, for example. While for a function keyword, this second for a brace and one more and then proper release. Actually, that would be one big node that's called function and inside would be arguments laced and that would be the body and there would be statements and stuff like that.

Usually, the AST is like the node and it has the type. What we do is we have a thing that's called PSI - Program Structure Interface. It's basically an object-oriented AST. So usually you are going for nodes and you asked a node, which type it has, and doing something on top of that, and decide something based on the type of node. With PSI, every node is just an object then you can ask something like 'function give me an A'.

**JAMISON:&nbsp;** It sounds like from the work you're describing, it sounds a lot like what the actual compiler or VM or engine would do it yourself.

**DENNIS:&nbsp;** Yes, that's true.

**JAMISON:&nbsp;** Are you able to reuse, I know you do this for a bunch of different languages but especially for JavaScript there's a ton of tooling around, parsing JavaScript in JavaScript or in other languages. Are you able to reuse any of that or even of any of the code from any of the VMs, or is it really just implementing everything from scratch yourselves?

**DENNIS:&nbsp;** Actually, we started doing the JavaScript parsing very, very long ago when there were almost no such tools. It was kind of hard to do actual parsing so for JavaScript, we are doing everything from scratch. From that most languages, that's what we do. We usually look at specs at the beginning and we look at the actual compiles of VMs code because for example, for a Ruby, there is no actual spec and that's what we do. We are looking at the Ruby source code and we are trying to understand how to really process the [inaudible].

**JAMISON:&nbsp;** So it sounds like you feel like you need to kind of do it all yourself because often, you're building it ahead of usable tooling almost from other people? Like you want the highlighting for the new features before having to wait for some open source library to parse the new feature correctly or something?

**DENNIS:&nbsp;** Yes, that's true. The other problem that we actually need to do that fast and we need to do that in some incremental way and not all the libraries and not all the compilers can do that in that way.

**JAMISON:&nbsp;** Okay, that kind of makes sense.

**DENNIS:&nbsp;** So we used to write parsers manually using the recursive parsing. But recently, we did our own thing. That's called Grammar Kid that allows you to provide the BNF then generate parser.

**CHUCK:&nbsp;** One thing that I am curious about, you know, you talk about having to implement some of these features on your own - in JavaScript because nobody's done it. It's kind of in limbo because the spec hasn't been adopted yet. How would you decide which one you're going to build first?

**DENNIS:&nbsp;** That's a really good question. First of all, we will have our backtracker and our backtracker is open so everyone can contribute, everyone can comment on issues and vote for issues. We're trying to see what people are actually using and what people are asking us to do and we're paying attention to the world.

We are also trying to look at the trends in the community and articles and GitHub Repositories and if we are speaking about frameworks, we can see the popularity of the frameworks. We also have our own resource team. We can ask them questions to do some research. They actually build pretty good tool recently that gathers the stuff from the stack overflow questions and from GitHub, Google Trends and basically you can see which frameworks are getting popular and which are not.

**JAMISON:&nbsp;** That's a really cool idea. So someone is calling and parsing all that to try to make decision about what to implement. That's really cool.

**DENNIS:&nbsp;** The only thing that's missing but I think they will add it sometime is the npm stats. So we are checking the npm stat menu right now but I guess we can have them there.

**JAMISON:&nbsp;** Is that data set or tool open? Is that something that other people could use or is that an internal thing?

**DENNIS:&nbsp;** It's kind of internal thing. I don't know if it's really production ready and ready for everyone.

**JAMISON:&nbsp;** Sure. It just sounds like it could really be very fascinating. So I have, kind of a broader question. I hear sometimes from people, it seems that it applies to any kind of text editor ID set up that you spent a lot of time customizing and tweaking which is why is that tooling important? Like the bottleneck for most programming seems like it's in your brain and the actual work of typing stuff in or finding things in the code it's not the hard part. Can you answer that question maybe, like what's the big deal with tooling. Why can't we all just use gedit or something like that?

**DENNIS:&nbsp;** I would kind of agree about typing. But not so much with the finding the code because usually when you're trying to implement some feature or trying to fix some bug, you're spending most of the time understanding of what the actual problem is. You are trying to understand how to feed the solution for that problem into the existing code base. Then, when you are ready, you're just diving some stuff and that's it.

Most of the time we are spending analyzing the code and preparing to do the actual change. That's why tools are important because they help you to understand the existing code base. You can navigate, you can understand who's calling what and see what usages do you have and what things you can break and --

**JAMISON:&nbsp;** So it's kind of related to that adage about how code is read a lot more than it's written and what you're saying is it's not about like you type a character and it fills in the rest of the five characters as much as helping you understanding the context of the code.

**DENNIS:&nbsp;** Yeah. Yes that's true.

**JAMISON:&nbsp;** My impression is JavaScript projects have trended larger recently. There's just people doing more complex stuff in JavaScript, both on the server and the client. Do you think that that also makes a difference in maybe the popularity of some of the more IDE like environments? I guess, I'm kind of asking you, do you feel you can make a better case for using a WebStorm because projects are bigger now and there's more complexity to understand?

**DENNIS:&nbsp;** Yes, because for example if you come into a new project and there's a large code base, it's kind of hard to read the code without any support, any suggestions, any hints. But that's also makes our work harder because with bigger projects, you have more code that you need to parse, you need to analyze, you need to index and give the relevant variance, for example, for code completion.

**JAMISON:&nbsp;** Interesting.

**CHUCK:&nbsp;** Similar to the code completion, I'm also curious about the refactorings. I mean, there are standard refactorings for things like Java.net, but how do you come up with refactorings for JavaScript?

**DENNIS:&nbsp;** Basically, the framework is the same. What you have is some elements in your code. They do have some references. For example, if you're at the function call, the actual call is a reference to that function. Usually, what you need to do is to make sure that the navigation from that call is going to the right function. Because we are working on the IntelliJ platform, that's it. If the navigation works, usually the refactoring works, too. There are some quirks because it's not always that triggered. Not all the elements have the actual representation in the program code and I need to somehow bypass that.

**CHUCK:&nbsp;** I'm just curious where you get the list from because I've seen books of refactoring for Java and stuff and I just don't see it as often for Ruby or JavaScript.

**DENNIS:&nbsp;** We are trying to make all the languages equal so if there is a refactoring for a Java and it's relevant for another language, usually that's good candidate for new refactoring if it's not implemented.

**JAMISON:&nbsp;** So one of the kind of a double edge sword things about JavaScript is it's a lot easier to do weird super dynamic stuff you can change prototypes or runtime, you can go all kinds of dynamic property lookups stuff. You can pass functions around as arguments. It seems like the lack of a compiler's static type system could make it a lot harder to do those kinds of refactorings. But also, I mean, maybe it makes it easier to do other kinds of refactoring. So you said you're kind of trying to do all the same support, the same refactoring across languages, how does that handle the dynamic nature of JavaScript?

**DENNIS:&nbsp;** That's definitely making things harder on the bright side there's a lot of things that we try to understand. For example, we are trying to understand the prototypes reassignment, we are trying to understand lots of frameworks with some dynamic calls when the string argument is not actually just a string but for example, new function method, or when you are passing some object that then became some other object. Most of the things are hard coded. We are trying to understand what the framework actually does and how can we understand that.

**JAMISON:&nbsp;** You also mentioned TypeScript a little bit and I know one of the specific design goals of TypeScript, I believe, is to make it easier to write this kind of tooling and automated refactoring and that's also the case of flow from Facebook do you have any TypeScript specific refactoring or flow specific refactorings to take advantage of the type system of those ad?

**DENNIS:&nbsp;** Actually, we are taking advantage of the type system for TypeScript. It actually makes all the stuff easier because it's like aesthetically typed and we are not supporting flow fully yet, but that's the thing that we are looking to do in in the future.

**JAMISON:&nbsp;** Cool.

**CHUCK:&nbsp;** So what's coming now next versions of WebStorm?

**DENNIS:&nbsp;** Right now we have the lexers program that adds support for a sound TypeScript 2 features. Also, there is an experimental mode for TypeScript language service so you can use the TypeScript language service for syntax highlight, not the syntax forming. Highlighting of the files to see the actual problems with the types. Also, we have the [inaudible] built-in before the project generation. Right now, we are finishing the AngularUI rolatube diagram so you can see all the routings in the diagram. Right now, it's for the AngularUI rolatube but probably we would be doing that for a new route in Angular 2.

**CHUCK:&nbsp;** That's actually really nice. It's interesting that you are building in the language features and I think, those kind of have common appeal to anybody who's doing JavaScript but it's also really nice to get some of those features that give you insights into your Angular apps or you know, as you add others maybe you and stuff for React or for Ember or whatever.

**DENNIS:&nbsp;** Actually, we do have some improvements for React. For example, in this version, we understand the React.PropTypes. If you have the PropTypes on your components, you get the auto-completion in the [inaudible] code and navigation.

**JAMISON:&nbsp;** It's really interesting that you talk about the framework levels support because that almost feels like the kind of stuff you get with the iOS tooling because there just is like the one framework and it's all really tightly integrated with the editor. But doing it, whether all these different open source option seems like it’s a lot trickier because they move a lot faster and there are just more things to cover.

I guess, you already talked about kind of the usage data that you get on frameworks and I'm sure that place into deciding what to cover. But is there anything else that goes in to that? Like do you look at maybe how fast things change and trying to wait for things to settle down a little bit in frameworks before you add framework specific features or things like that?

**DENNIS:&nbsp;** Yes. We are not rushing to do every framework right from the start because quite a lot of frameworks come and go. The landscape is changing very frequently so we are trying to wait a little bit to see what's getting adopted. If you are rushing usually you need to throw out some of your codes, for example, with the Angular 2, we are started with the ads group support. It was thrown out like in 2 months.

**JAMISON:&nbsp;** That's interesting because that's the same kind of trade-off that, I think, just regular developers make - the ones that aren't building tooling but are building apps. Like this new frameworks are changing all the time, they are still iterating on their feature set. Do I really want to build a product in Angular 2 using Apps Script or do I wait a couple of months to settle down? So, it's interesting to see those same trade-offs occur at a different level, I guess, in the editors space.

**CHUCK:&nbsp;** Yeah, I mean they did they move away from Apps Script in favor of TypeScript. What are all the implications of that for developers in the space of what tools do I use as well as, how do I build the app that my client or boss wants?

**JAMISON:&nbsp;** In that specific case, I think they are pretty clear that this is super early days, this is what we are planning on doing. But I feel like they are more than clear that if you want to like go to prod with this, good luck, and we might change anything at some point but the same trade-offs exists for everybody.

**DENNIS:&nbsp;** Yeah, it's kind of funny that we are speaking about Angular because usually they are doing some changes right before some milestones for us. For example, with the Angular 2 RC, they've changed the packages layout, they change the --

**[Cross-talk]**

**CHUCK:&nbsp;** -- CLI. They've --

**DENNIS:&nbsp;** Yeah, the CLI wasn't the problem but they changed the actual Angular npm package layouts so they no longer bring in the source code for Angular with the package. They do scope packages, they also change the component declaration a little bit. That was right before the NG Conf. That was super popular equation at the NG Conf. I've installed the RC and right now, nothing is working for me.

**CHUCK:&nbsp;** That's true. I'm also curious, there are others technologies that people generally use in conjunction with JavaScript for example HTML or CSS, and there are frameworks for different templating languages and CSS frameworks and things like that. How do you support all of that stuff because it seems like those are completely different from JavaScript and you would have to approach them in a different ways?

**DENNIS:&nbsp;** Basically, it's the same thing, you will write the lexer, you will write the parser and you are doing the refactorings. We have, right now, parsers for HTML and have parcers for CSS and sass, CSS and couple of templating languages. If you are speaking about WebStorm, that's Jade AGS and Handlebars, Spacebars for Meteor.

**CHUCK:&nbsp;** Have you found that there are certain ways that people are writing JavaScript or approaching JavaScript that are less optimal for WebStorm?

**DENNIS:&nbsp;** We are fighting them all the time. Usually, we make some assumptions. We have some examples. We are looking at the source code and we see like people are using this pattern of doing things. We are right in support to that kind of thing and at some point, somebody can come and say, "Oh, I'm not using that pattern. I'm using a whole different pattern, and nothing is working here and please help me." Then, okay, we should understand this thing. People are very, very creative in --

**JAMISON:&nbsp;** That was such a nice way to put it.

**[Laughter]**

**DENNIS:&nbsp;** Yeah, in the ways they're writing their code.

**JAMISON:&nbsp;** I can like hear you trying try to say that, respectfully.

**CHUCK:&nbsp;** They do it wrong in so many interesting ways.

**JAMISON:&nbsp;** Yeah, I'm sure it's tempting to just say like, "Don't write your code like that," to the users a lot of times then, it must be tricky to balance. I mean, that's what your product is to help them write code but I'm sure people can do a good job.

**DENNIS:&nbsp;** Yeah, so sometimes they're saying, "Here's the way we are understanding. Here the work around for you, how to make WebStorm smart with your code and we are ready for some support for your cases a little bit later."

**CHUCK:&nbsp;** Do you build in support for other parts of the infrastructure like databases or front-end storage or anything like that?

**DENNIS:&nbsp;** Not our team but there is a team for doing the database support and for example, in [inaudible], the data voice support is built-in and automatically configured based on the database yaml so you can see your database just after you open your Rails project.

**CHUCK:&nbsp;** One other question I have is, you've been working you said for JetBrains for eight years which is like eight million years in a developer years?

**DENNIS:&nbsp;** Yeah, that's true.

**CHUCK:&nbsp;** So, I'm curious, what is it about this particular set of problems or this particular company that really gets you excited and gets you up in the morning?

**DENNIS:&nbsp;** It's actually the people, our users, because I like to do things that are useful for quite a lot of people. That start from the startup thing, to create your own itch but as a developers, we are feeling the problems that developers have and that's why we can make their life easier. That's kind of thing that makes interesting for me.

**CHUCK:&nbsp;** Cool. I don't know if I have any other question. Do you Jamison?

**JAMISON:&nbsp;** I don't think so. Is there anything that we should have talked about with WebStorm that we haven't? Any things that you want to explain about or any questions we should have asked that we haven't?

**DENNIS:&nbsp;** If you are interested, I can speak about our new release cycle and new changes in the release procedures. I don't know if that's useful?

**CHUCK:** &nbsp; Yeah, that would be awesome.

**DENNIS:&nbsp;** Okay, so this year, we switch from doing releases, now and then, to doing more centralized thing, and to do the simultaneous releases for all projects and products. We are doing them for three times a year instead of two like we did the year before. So that helps us to deliver the release quality product more often because quite a lot of people are not really ready to use the EAP versions, and kind of helps us and users to understand which features are available in which versions.

We've got a lot of confusion when we are fixing some box writing some new feature and we are closing it in WebStorm projects for example, and here comes some PhpStorm users and asks, "When will I get this feature?" and we are, "Oh, you are going to get that sometime later or you're already have that." Lots of different stories. It brought a lot of confusion for us and for users and right now, we are having the same version numbers so if you are on the same version, you are given all the features from the other subsystems.

I have mentioned the EAP and I believe, not everyone is familiar. It stands for Early Access Program. Usually, a couple of months before the release of the version, we are starting the Early Access Program and it's fully functional builds with the new features and new back fixes that are available for free. We are releasing them once in a week so if you want to be on the bleeding edge and try a new framework support or a new language features, you can download the EAP.

Another thing that I can talk about is that recently, we started contributing to the Java source code because as you know, the Apple stopped releasing the Java for OS X. In order to migrate to the newer versions and to keep people safe so they won't need to install that Legacy Java version, we wanted to switch to the Java 8 from Oracle. But we've got quite a lot of problems with that because of the font rendering was really terrible and people were very annoyed about that.

So we decided that it's a call to our product to have this functionality running so right now we are over working very actively on the Java source code and there's about five or six people who are working on that. We are contributing back to the Java's source.

**CHUCK:&nbsp;** That's cool, and I love seeing companies that are out there doing things and making money. As well as contributing to the community at large. Find ways to make the tools better for everybody including themselves. I'm not a Java user but I feel like as the programming ecosystem gets better because of the contributions like this we all benefit. Just props I guess for being involved in that.

**DENNIS:&nbsp;** Thank you. Actually, Java is not the only thing that we are working on. For example, there is a Karma contributor on our front-end team and there is Karma contributor on the WebStorm team. I'm maintaining the Ruby debug ID and all debug channels for other IDs. There's a very funny story because my PyCharm Team is sponsoring the guy who's doing the debugger for [inaudible]. Also we have our open source language, it's called Kotlin that we believe should be better than Java. Also, the platform code is open source so for example, the Android Studio is built on top of IntelliJ platform on top of the open source bar.

**CHUCK:&nbsp;** Cool. Very cool. All right. I don't think, I have anything else that we should go into so let's go ahead into the Picks!

**CHUCK:&nbsp;** Jamison so you have some Picks for us?

**JAMISON:&nbsp;** I have Picks for you. The first one is a write up of a talk called Human Scale Technology. It's about, I feel, like I've seen a lot of stuff on this team lately about the ability for technology to have wider implications than just building a product that solve some problem. This talk specifically is about how technology can be humane or can be inhumane. It can be inhumane in ways that are actively harmful like you build a thing that is like a weapon or something. It can be accidentally inhumane which means it's just a confusing and kind of a greedy product that makes people's life worst when they use it. Or it can be kind of passive but able to be used in an inhumane way and stuff like, I don't know... maybe some of that cookie tracking things or ad network things that can be used for surveilling.

**DENNIS:&nbsp;** That's a bit tracing or --

**JAMISON:&nbsp;** Yeah. It's just a tool but people can may be abuse it. It talks about how- because [inaudible] are becoming more and more common, the responsibilities that people who create it have to think about the ways that could be misused or make people's lives worst, kind of grows. It just made me think a lot so that's one of my Picks.

My other Pick is a little bit, I don't know... more selfish I guess. It's just the React Rally Conference. This is a conference that my friend and I put on in Salt Lake City. We bring a lot of kind of a [inaudible] community members and lots of other voices that you don't hear from as much as the React Conferences to Salt Lake. Its August 25th and 26th and it should be a really good time. Tickets on sales. You could go to ReactRally.com and pick up a ticket and I would love to see you there those are my Picks.

**CHUCK:&nbsp;** Awesome. I've got some couple of Picks. The first one is today is the primary election here in Utah, and I'm assuming that there are similar things happening in other parts of the country in the world. So if you have the chance to go and be involved in choosing the people who represent you and help maintain the government wherever you are at, then I highly recommend that people do that. I think, it's very important.

The other thing that I'm going to Pick is the tool that I used to access the FTP server where I push stuff up to the CDN for the podcast among other things. But I used for some other things like accessing Amazon history. It's a tool called Transmit and it's just a really, really nice client for that sort of thing. So I'm definitely going to shout out about that because I think it's awesome and I just like having a nice tools for doing things that I have to do everyday, and those are my Picks.

Dennis you have some Picks for us?

**DENNIS:&nbsp;** Yes. My first Pick would be Steam Squad. That's a board game, the computer board game in alternative universe. It's World War One in a steampunk settings. My friends are doing this game and they are somewhere close to their release. I've been playing this thing from the very beginning and I find it very interesting.

**JAMISON:&nbsp;** I've never heard of this. I played a lot of video games so I feel I've heard basically everything but this is new to me. Cool.

**DENNIS:&nbsp;** They have really, really small team and they are not very popular, I think, yet, I hope. My second Pick would be the Ergobaby baby carrier. I've got a son born in January. I'm really enjoying this thing and really love carrying my son so that's it.

**CHUCK:&nbsp;** Very cool. If people want to know more about WebStorm or about what you're working on, what should they do? Where do they go?

**DENNIS:&nbsp;** They can go to the WebStorm Twitter or to my personal Twitter and I will would be happy to answer questions in our PM and Katya would also be very happy to answer the question. If they have some feature request, they are very welcome in our issue tracker and they could also meet us at the upcoming conferences. We will be going to the AngularConnect, for example.

**CHUCK:&nbsp;** Cool. Well, thank you for coming, Dennis.

**JAMISON:&nbsp;** Yeah, thank you so much.

**DENNIS:&nbsp;** Thank you for the invitation.

**CHUCK:&nbsp;** All right. We will catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**


