---
layout: layouts/post.njk
title: >
      095 AiA Building NG2 Libraries with Olivier Combe
date: 2016-06-02 07:00:21
episode_number: 095
duration: 51:07
audio_url: https://media.devchat.tv/adventures-in-angular/AiA095BuildingNG2Libs.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

### Check out [Newbie Remote Conf](https://allremoteconfs.com/newbie-2016)!
&nbsp;02:17 - Olivier Combe 
- [Twitter](https://twitter.com/OCombe)
- [GitHub](https://github.com/ocombe/)
- [Holimetrix](https://holimetrix.com/)
03:21 - Why People Want Libraries in Angular 204:13 - Types of Libraries People Might Write05:21 - [ng2-translate](https://github.com/ocombe/ng2-translate)08:02 - TypeScript Problems vs Package Manager Problems10:22 - Collaboration13:17 - Advice For Writing Libraries
- [ng-conf-library](https://github.com/ocombe/ng-conf-library)
19:47 - Design Considerations25:09 - [ng2-translate](https://github.com/ocombe/ng2-translate) (Cont’d)27:53 - Advice for People Doing Public vs Public Libraries28:45 - Simplicity30:11 - [ng-conf](https://www.ng-conf.org/)32:13 - Working with Systems (i.e. [webpack](https://webpack.github.io/))
- [CommonJS](http://requirejs.org/docs/commonjs.html)
- [Systemjs](https://github.com/systemjs/systemjs)
36:53 - Upkeep&nbsp;Picks
- [Khan Academy](https://www.khanacademy.org/) (Jules)
- [Redbreast Irish Whiskey](http://www.bevmo.com/redbreast-12-year-old-irish-whiskey--750-ml-.html) (Ward)
- [Ghost](https://ghost.org) (John)
- [CloudFlare](https://www.cloudflare.com) (John)
- [Concept 2 PM5 (Performance Monitor 5)](http://www.concept2.com/service/monitors/pm5) (Lukas)
- [ng-conf](https://www.ng-conf.org/) (Lukas)
- [Trello](https://trello.com/) (Chuck)
- [Gravity Forms](http://www.gravityforms.com/) (Chuck)
- [Zapier](https://zapier.com/) (Chuck)
- [angular2-library-seed](https://github.com/preboot/angular2-library-seed) (Olivier)


### Transcript

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers, providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with the company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they also give you a $1,000 bonus as a thank you for using them. But if you use the Adventures in Angular link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept a job. Go sign up at Hired.com/AdventuresInAngular.]_**

**_[Ready to master Angular? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours classes in St. Louis or San Francisco – AngularBootCamp.com.]_**

**_[This episode is sponsored by Telerik, the makers of Kendo UI. Kendo UI integrates seamlessly with both AngularJS 1.x and 2.0. It provides everything you need to integrate with AngularJS out-of-the-box bindings, component configuration, directives, template directives, form validation, event handlers and much more and yet Kendo UI tooling does not depend on AngularJS. So, if you want to use it with Angular or not that’s totally up to you. You can check it out at KendoUI.com]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 95 of the Adventures in Angular show. This week on our panel we have Ward Bell.

**WARD:&nbsp;** Hello, everyone.

**CHUCK:&nbsp;** Jules Kremer.

**JULES:&nbsp;** Hello, everyone.

**CHUCK:&nbsp;** John Papa.

**JOHN:&nbsp;** [Inaudible]

**CHUCK:&nbsp;** That was awesome.

**JULES:&nbsp;** [Laughs]

**WARD:&nbsp;** That was a robot cry. A [inaudible].

**JULES:&nbsp;** Hey Ward. It sounded like Star Wars, yeah?

**WARD:&nbsp;** It did. I just heard a Wookiee. John, come back to us.

**CHUCK:&nbsp;** Lukas Reubbelke.

**JOHN:&nbsp;** Hello.

**CHUCK:&nbsp;** Oh, there we go.

**LUKAS:&nbsp;** I'll let John speak for me.

**CHUCK:&nbsp;** [Laughs] I'm Charles Max Wood from DevChat.tv. I just want to make a quick shout-out. If you're new to programming I'm putting on a remote conference for new programmers called Newbie Remote Conf and it'll be in the middle of July. So, go check it out at NewbieRemoteConf.com. We also have a special guest this week and that is Olivier Combe. I hope I said that right.

**OLIVIER:&nbsp;** Hello, guys. Yup. It was fine.

**CHUCK:&nbsp;** Do you want to give us a brief introduction?

**OLIVIER:&nbsp;** Sure. As you said, my name is Olivier Combe. I'm a French developer at a startup named Holimetrix. And I've been playing with Angular for the last four years. And now that Angular 2 is almost ready, I have been playing with it since alpha. And one thing that I'm particularly fond of is writing libraries. So, for Angular 1 I was focused on ocLazyLoad. And for Angular2 I started with n2-translate which is an implementation of Angular translate from Pascal Precht. So, what I'd like to share with you is how to write libraries for Angular 2 which was a topic of my workshop at ng-conf. Yeah, I guess that's it.

**CHUCK:&nbsp;** Very cool. So to start off with, are there things that Angular 2 doesn't do that people want it to do, they might want libraries for?

**OLIVIER:&nbsp;** Yeah, so…

**CHUCK:&nbsp;** I thought it was perfect and complete just the way it was.

**OLIVIER:&nbsp;** [Chuckles] Angular 2 is a complete framework with a lot of functionalities. But there are a lot of things that developers don't want to spend time on or prefer to let the community have its way developing these libraries. So yeah, there are always a lot of things that we can write. And actually, I think it's the best moment to start writing libraries for Angular 2 because it's still early. So, a lot of things haven't been done. And if you have some ideas about stuff that you'd like to implement you might still have a good chance to be one of the favorite for other developers that are starting using Angular 2.

**CHUCK:&nbsp;** So, can you give us some examples of some of the types of libraries people might write? I can imagine that there are probably some components that people are going to want to use or maybe some services that people are going to want to use. If you're familiar with Angular 2 you can kind of see where those might hook in. Is that it? Writing custom services or components or directives? Or is there more to it than that?

**OLIVIER:&nbsp;** So, you still have all of the classics such as component libraries like Bootstrap or… Angular Materialize is taken by the Angular team. But that kind of libraries that do a lot of classic components that you can use in your web application such as modals or tabs and stuff like that. Then you have libraries that would be more specialized in Angular 2. We still haven't seen one focused on lazy loading to help you lazy load except for what's included in the router. I'm sure that a lot of needs will emerge as more developers start to write code in Angular 2. But yeah, you probably have a few ideas about stuff that you might need.

**CHUCK:&nbsp;** So, tell us a little bit about the library that you're writing for Angular 2. You said it was Angular Translate, ng2-translate.

**OLIVIER:&nbsp;** Yes. So, ng2-translate. I started writing this library because I needed a project to learn Angular 2. So, the best way for me to learn is to write something that is useful both to me and to other people. So, I really like Angular Translate for Angular 1. So, I asked Pascal if he wanted to maybe implement it in Angular 2 and he told me that he didn't have the time to do it. So, I could start working on it. And what's nice about this library is that it uses services pipes [inaudible] directives. So, that was a good way to learn. So, I tried to mimic the API from Angular Translate. And I added a few Angular 2 specifics such as the new RxJS Observables that we can use in Angular 2 which I implemented in my pipe and in my service. And I added a few tests to learn how to do tests and stuff like that.

But one thing I discovered quickly is that writing libraries for Angular 2, it's not really because of Angular 2 but more because of TypeScript. It's much more difficult than to write libraries for… that it was for Angular 1 and that it usually is if you write libraries for… if you write JavaScript libraries. Because when you write something in TypeScript you have to take care of the typings and make sure that it works with all the new bundlers such as Webpack, SystemJS and stuff like that. It was a lot of trial and error because what was working for one setup wasn't working for another. So, I had help from the community who open issues on the repo.

And I wanted to share what I learned while I was writing this library. So, I wrote a blog article that had a lot of re-tweets and likes on Medium. And then I thought I could do a workshop for ng-conf to help people do that as well. I didn't think it was a good talk. But as a workshop it was interesting. That's why I proposed to talk about that at ng-conf. The workshop went well. I don't know if you've seen the workshop room that we had for Fair Day. But they were really, really huge. I didn't expect to have so many people. So, it was more like a lecture than a workshop. Still it turned out okay.

**WARD:&nbsp;** When you say that TypeScript gave you fits, it sounded though when you expressed it that you were talking about how the package managers created trouble for you. So, how much of the problem was TypeScript and how much was the package managers?

**OLIVIER:&nbsp;** When I started playing with Angular 2 and libraries the TypeScript compiler was still in version 1.6 I think. They added some features along the way that helped for this kind of trouble. And someone also developed something called Typings that you can use. But I think the problem was both TypeScript and bundler. But mainly TypeScript because they didn't really do a good job on discovering typings yet. I think that some things they are really working on. But yeah, most of it was because of the typings. If I had just compiled the library to ES5 and then distributed it as it, it would have been really simple to do. But I wanted to help the developer by adding auto-completion and stuff like that using TypeScript and giving the source as source maps and adding the TypeScript definitions was one of the things that I wanted to do.

**WARD:&nbsp;** That makes sense. I see where that intersection is. And do you feel that now that you have figured it out is it going to be easier for other people to do or is it always going to be a nightmare?

**OLIVIER:&nbsp;** It's starting to get easier with the last version of TypeScript. And also I think that IDEs are starting to get smarter about those things. So, they can discover typings more easily. But I have a setup that works and I made a list of steps that you have to make sure to use if you want to distribute a library like that. So, if you follow those steps it's pretty easy to do. You just have to make sure that some of the traps that you can fall into are not in your setup and then you're okay. And once the setup is good for you then you can write your library and you don't have to worry about it anymore.

**JULES:&nbsp;** So, I have a quick question. So, I'm curious. One of the things that people approach me and ask me a lot is “I have this idea. I'd like to work on this library. But how have you found, or have you found any, have any tips for having other collaborators work with you on a library or an idea that you've had?” That seems to be a question I get a lot of. “Well, I want to work on this but I'd really like to find other people and bring them in, too.”

**OLIVIER:&nbsp;** Yeah. It's a problem with open source projects nowadays. You have [chuckles] you easily find people who post issues. But finding someone to work with you can be hard. If you look at a project like Webpack for example, the main developer is almost the only one working on it I think. Same goes with SystemJS. It's hard to find people and most of all it's hard to find people that you can trust with your library. Because it's kind of like a baby for you, once you have invested a lot of time in it. You don't want someone to come and mess up with your code. So, I guess it's easier to find someone to work with you if you start at the beginning of your library. Find someone that shares the same interest for what you're looking to do and work with them to do a project that is both yours and their project as well. And then probably use some… yeah, you should probably do that with someone that you trust in the beginning. Does that answer your question? Or [chuckles]

**JULES:&nbsp;** Yeah, that was great. [Chuckles]

**WARD:&nbsp;** Now, you said at the beginning that you discussed it with Pascal. Why with Pascal again? I may have missed that.

**OLIVIER:&nbsp;** Angular Translate was one of his projects.

**WARD:&nbsp;** Ah.

**OLIVIER:&nbsp;** And [inaudible] to start working on something for Angular 2 if he wanted to do it.

**WARD:&nbsp;** So Jules, maybe this is an opportunity for you and the Angular team to sort of become a clearing house of ideas. Ha-ha.

**JULES:&nbsp;** Thanks for throwing that out there, Ward.

**WARD:&nbsp;** I just knew you needed something to do.

**JULES:&nbsp;** [Chuckles] Yeah, I did. No, actually it would be great. But it is hard to get a handle and be the clearing house for things like that. Although we love to know about them and try to connect the dots where possible. I'm not sure we'd want everyone to look to us in terms of being a clearing house. But certainly look to us in terms of having a central place to find them and connecting people where we can who might be interested in the same things.

**WARD:&nbsp;** Yeah. I really thought of it as more like that, not making judgments. But being a place where people could say, “I'm interested in doing this,” or, “I want to find add,” and how you could team up. I don't know. It's a hard thing.

**OLIVIER:&nbsp;** GitHub might be a good place to find people who share the same interest. You can just start and say, “I'm interested in working on this. And is someone else also interested?” Maybe you can even try to find a project that already does that and try to join them by doing pull requests at first and then maybe become a collaborator. So, Lukas was interested in knowing what kind of [cheat] notes I could give to help you write libraries for Angular 2. So, as part of my workshop I wrote a repository on GitHub that you can find on GitHub.com/ocombe/ng-conf-library. And I wrote all the steps that you need to do. Some of them are common to all projects that you want to share on npm. But some of them are specific to Angular 2 or TypeScript. So, I can give you a short rundown of these steps if you're interested.

**LUKAS:&nbsp;** Yes, please. We'd love that.

**OLIVIER:&nbsp;** [Chuckles] Okay. So, the first step that you have to do is init a project. You create a repository on GitHub and then you clone it on your desktop. And you need to add the dependencies. To do that you can take a look at the package.json from the Angular 2 repository and copy the dependencies. So, you should have them as dev dependencies first because you want to use them for your development and you might not need to add all of them as dependencies for other people. And then you have to add what your library really depends on. You add it as peer dependencies or as dependencies but usually peer dependencies is a better ID because you don't force people to install multiple versions of libraries if they already have one of them.

And then you write your code in TypeScript exactly as you would do for your [inaudible] application. Then you have to add the TypeScript compiler and the typings necessary to run your project. Once that's done you can check if the compilation works okay with the TypeScript compiler, if that's okay. If not, you have to fix it obviously. But if that's okay, you can start writing the tests. Well, you can do a library without tests. But usually it's a better idea to write some tests and you can find some really good examples on protractor and Karma on the Angular.io website.

And then the tricky part starts because you have to make sure that you publish your library in a way that can be consumed by other people. So, a few important steps. First to create both a git-ignore and npm ignore file. You copy most of it, most of the git-ignore into the npm ignore and the only differences are that in git-ignore you don't want to publish the generated files because git-ignore is what is used when you push your code to GitHub. So, you should remove the GS and the D.TS files which are the TypeScript definitions that are generated by the TypeScript compiler. So, you ignore them in the git-ignore. But in the npm ignore you want to do the opposite. You want to ignore the source files, the TypeScript source files, but you don't want to ignore the TypeScript definitions and the compiled GS files.

And you might want to know why you want to ignore the source files in the npm ignore file. The main reason is that often tools like Webpack or SystemJS will search for the name of the file when you do an import. But you don't give the extension. And they might use the source file instead of the GS files. Sometimes it won't work with that setup, especially with SystemJS where if you don't have a TypeScript compiler since it loads, it might load files at runtime, you might have a problem. So, just make sure that you don't push the source files. They are not needed for libraries that you install through npm. If you want to publish the source files you might want to make sure that they are in a separated folder and not at the same path as your other libraries.

And then you have to create the root of your application, of your library. You want to create a main file so you can either name it index.ts or with the name of your library (I prefer this one). And in this file you will export everything from your source files. So, if you have a service for example you will export star from your service. And you do that for all of your source files. So that, people will just have to load the main file from the root of your library to have access to all of your imports. If you write a really large library you can maybe do multiple main files, one for each [box]. That's what Angular does with for example one for the router, one for the core, and stuff like that. But it's always a good idea to have one end file that exports everything. It doesn't matter if you export everything because people will just import the parts that they need.

And then once all of that is done you can hook everything up in a publish script in your package.json that will do the test and the compilation. Maybe the compilation first and then the test. And then this will be executed when you do npm publish. And if everything is okay, then you can publish on npm. There are a few other small steps but those are main parts that you need to know.

**LUKAS:&nbsp;** Hang on. I'm still actually writing this all down.

[Laughter]

**LUKAS:&nbsp;** So actually, could you go back to the second point?

[Laughter]

**LUKAS:&nbsp;** You lost me. We got to start over, guys.

**OLIVIER:&nbsp;** The second point was writing a service. So, all your code.

**LUKAS:&nbsp;** Yeah, oh, okay. I'm totally kidding. But that was…

**OLIVIER:&nbsp;** [Laughs]

**LUKAS:&nbsp;** Very good and also Olivier or Olive-yay put a link to this in the show notes with everything that he just said. So, I'm actually probably just going to print this out and put it in my pocket for…

[Chuckles]

**LUKAS:** My finals next week so I pass the test.

**WARD:&nbsp;** So, what about design considerations though for writing a library. What are you looking for when you construct the API? How do you expect somebody to load your library and you consume your library inside an Angular 2 app? How do you make that easy? Where… are they supposed to load it as a set of services? How do you make it easy to install and use your library?

**OLIVIER:&nbsp;** So, you have to take into account that people might not want to use Observable for example. So, it's good to offer multiple options for your services or for yeah, mainly for the services. One thing that [inaudible] that is nice to be able to configure your service at bootstrap or in the providers property of components. So, you might want to inject a few things in your service that people can replace if they need. It's a good thing to do a separation of concerns here and not do everything in one function. Just make sure that if people want to replace some parts, they can. So, it's good to follow the idea of each function is independent from each other.

**WARD:&nbsp;** So, to make that concrete with respect to your translator, I assume you're reaching out to some service to do the translation? You're not doing it in JavaScript. So, you must have some idea about how you're supposed to reach the service and how they could configure something. How did that play in your thinking about how people should be able to use your library?

**OLIVIER:&nbsp;** So, for ng2-translate the main idea is that you need to load your files with translations. So, I wrote a really simple loader that does that that uses HTTP from Angular 2 to load JSON files and then use those as translation. But if for some reason you don't want to load them as files and you want to inject them yourself, if you are for example an object with keys and translations you can do that as well and just replace the static loader with your own loader or just pass the translations directly to the service as a new language. And for example for Angular 2 Universal which happens on the server side, I replaced the static loader with a loader that uses FS from Node to load translation.

So, if you think that, well it depends on what you're writing, but if you write something that is pretty straightforward and that you don't think could have other ways to do stuff then you should probably use that. But if it is for Angular Translate, people might want to use it in different ways. Then make sure that they can replace those at bootstrap, use another function of their creation to do some of the parts of your library. For example, [people] opened an issue wanting to load files not as JSON but as a regular translation files. I don't remember the extension but those are just lines with keys and values. So, I let him know that he could write his own loader. And I added an example to the documentation so that he could do it. And this way, he was able to make his own loader for loading those files.

And then you might want to take into account also the different ways to use your library. For example for me it was of use that translation should use a pipe and that you should put those in your templates with the name of the key and then the pipe would search into the translation to get the value. But then someone was saying that maybe he wanted to use a directive instead of a pipe. You want to make sure that you don't close your options, that people can if they want to write some parts themselves or if they want to make a pull request to add some functionalities make sure that it's easy to do. Type everything, add tests that people can read to understand your code. Write good documentation. That's really important for a library. Because if you want it to be successful, the documentation should take a good part of your time. Writing the code is usually maybe half the time that you spend on writing a library I think.

**WARD:&nbsp;** Well, I'm going to agree with you there.

[Chuckles]

**WARD:&nbsp;** Did you do it in a readme? Did you do it in a wiki? What's your approach?

**OLIVIER:&nbsp;** If the library is small enough, a readme with good paths, with sections that you can reach easily or distinguish from one another is enough, I think. For ocLazyLoad for Angular 1 I used a website named Readme.io where you can, you have a dedicated website which is free for open source projects. And you can add a lot more features such as different pages, examples that you can run, and stuff like that. But…

**JOHN:&nbsp;** So…

**OLIVIER:** &nbsp; Yeah?

**JOHN:&nbsp;** Sorry. I'm listening to this and I'm really fascinated by all the kinds of things that you have to think about when you create these libraries. But also diverted a little, I'm thinking about Angular Translate and how popular that was in Angular 1. And that's a pretty big undertaking that you're diving into by saying you're going to create ng2-translate.

**OLIVIER:&nbsp;** [Chuckles]

**JOHN:&nbsp;** So, that's a lot of work, right?

**OLIVIER:&nbsp;** Yeah.

**JOHN:&nbsp;** Is this something that you're getting help with? Is Pascal still pitching in or has he handed the reigns off completely to you? Where is that heading?

**OLIVIER:&nbsp;** So, I chose this library because I knew that Angular was working on i18n and that in the end my library would probably be obsolete. So, it was a good project to learn Angular 2 but one that I wouldn't have to maintain for a long time.

**JOHN:&nbsp;** Is that true? I'm curious. Is that true, Jules? Are you there? Is that something that the Angular team is going to create or are they going to lean on the community for i18n?

**OLIVIER:&nbsp;** Actually, Kara Erickson already added some commits to the core of Angular.

**JULES:&nbsp;** Yeah. I was just going to say Kara's working on it. But as with everything we welcome the community to support us.

**JOHN:&nbsp;** Awesome. So maybe, these could merge together and move forward. But I think that's awesome.

**OLIVIER:&nbsp;** The idea that Angular is going to implement would be far more advanced than what I did with ng2-translate. They want to add tools to extract your keys from your application automatically. Tools to help you share the translation with maybe some people that are specialized in that and stuff like that. So, a few more things than what I'm doing right now. But as there is no documentation on i18n for the moment [chuckles] I find myself having to maintain ng2-translate.

**JOHN:&nbsp;** Ah. And you said you also did the workshop there in the Fair Day…

**OLIVIER:&nbsp;** Yeah.

**JOHN:&nbsp;** At ng-conf. I'm curious. When people take that, what kind of ideas were they coming up to you with for libraries they're creating? What kind of cool things are other people doing?

**OLIVIER:&nbsp;** I don't know [chuckles]. They didn't really tell me about that. Like I said, it was a really huge room for a workshop. I don't have the exact number but I think there were more than 200 people in the room. So, [chuckles] when you're alone doing your workshop with so many people it's hard to have time to talk with them. Some of them came at the end asking questions. I think a few of them were working on libraries that would be private, that they would use internally in the company. They can use npm privately for that.

**JOHN:&nbsp;** Do you find that you give different advice to people based upon whether they're doing a public reusable library versus something that's private?

**OLIVIER:&nbsp;** Well obviously, if you do something private you have a much better idea of how it should go. I hope that you have at least, that you don't have to implement features that you don't use but that could be useful to other people. Probably you will spend less time on documentation, maybe comments could be enough for your team, even if some documentation is always good. We probably all know that we don't have much time to work on that stuff. So yeah, writing libraries internally is different. But the steps that I explained during my workshop were the same even if it's private in the end. So, I hope that people found them useful.

**JOHN:&nbsp;** So, when people are asking you and you're doing a workshop though about creating libraries, what's the main thing you try to give them? Is there some main message you're trying to share with people about your experiences with writing a library? What did you get out of it?

**OLIVIER:&nbsp;** The main idea I think here was to show them that it was simple and that they should do it and not fear that maybe they would be overwhelmed. I think it's the same problem with Angular 2 and tooling around it right now. It might be a bit too much for people to set up a project with the builders and the tooling that they need to set up before they can even code. But in the end if you know all the steps that you have to take, this is not the important part in writing the library. All the tips that I give are really stuff that they shouldn't have to worry about in an ideal world. But they just have to make sure that all the steps are completed and then they can start focusing on the important part of the library, which is the code and documentation and stuff like that. So, I hope that people came out of this workshop with the idea that it was easy to do, which is [chuckles] [inaudible]. We had [inaudible] because the main point of the workshop was to give them steps that might be hard for them but…

**JOHN:&nbsp;** Sure, yeah. So, as you attended ng-conf and just changing topics quickly here, you were at ng-conf all last week. Was this the first ng-conf that you had been to?

**OLIVIER:&nbsp;** [Chuckles] Yeah. Last year I wanted to come but I was too late to buy the tickets.

**JOHN:&nbsp;** Ah.

**OLIVIER:&nbsp;** [Inaudible]

**JOHN:&nbsp;** So, what did you think? Being your first experience this yeah with it, what impressed you about the conference either good or bad?

**OLIVIER:&nbsp;** I've been to a lot of conferences in the last two years. I spoke at some of them as well. I think the main difference with ng-conf is the scale. It's really huge. A lot of people are working on the organization as well. It was three days or four if you did the workshop on the first day, when most other conferences are one or two days. So yeah, the scale was really huge. And I was impressed by how flawless the organization went during this event, how everything seemed to be, I don't know, happening without even seeing, I don't know, no problems or stuff like that. I haven't had the impression that anything went wrong during this conference. That's really brilliant when you think about it, because of how many things they had to deal with. And Fair Day which was a new thing that I had never seen anywhere else. I was impressed. And the quality of the talks as well was really nice.

**JULES:&nbsp;** So, thanks to Sunny and the organizers because they are who keeps it flawless from you guys knowing if there were any problems. So, I'm not going to own here if there were.

[Laughter]

**OLIVIER:&nbsp;** Yeah, probably better. If it's well done, you don't know.

**CHUCK:&nbsp;** Yeah.

**JULES:&nbsp;** Yeah, so huge shout-out to Sunny and her team. Because like I said on stage on the last one, they did an enormous amount of work and it's not as easy as it looks like to get a conference that size running so flawlessly. So, thank you for noticing.

**OLIVIER:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** So, I'm going to pull it back to Angular 2 libraries discussion for a minute because I do have another question and that is you have people using things like Webpack or JSPM or SystemJS. And you have the import statements that we see in Angular. So, what do you actually have to do other than have export classes to make it work with those systems like Webpack and others? I guess the example is that you see these systems essentially export an entire… they build it into one file and minify it and all that stuff. And so, if it's in a separate library do you just tell your people to copy it in and use it that way? Or is there another method for getting your libraries into my system that I'm building on the frontend of my website?

**OLIVIER:&nbsp;** So, one thing that Angular 2 did at the beginning and I think they are starting to remove this part was bundling parts of your library so that you could load them as script tags. But I think they are coming back on this idea and [inaudible] to have other files as separated modules so that you have to use a bundler. But then you can really only load the part that you need. That's one of the things that they focused on for their release candidate. So, one way would be to bundle as I said, but I don't think it's a good idea. The other way is to have separate files that you have to compile to ES 5. And you have to compile them in a way that module loaders can understand. There is a lot of different implementation of modules that have been developed in the last years. You have UMD, AMD, CommonJS, SystemJS, which are all different implementations of the module spec.

**JOHN:&nbsp;** Yeah, one thing we don't lack for in this JavaScript space is having many, many options.

[Laughter]

**CHUCK:&nbsp;** Yeah.

**OLIVIER:&nbsp;** And if you want to make sure that your library works with everything, my advice is to use CommonJS for now which is maybe not the most optimum type of module but it works with all of the current bundlers. The TypeScript compiler can compile to CommonJS so that's a good point, I think. So, you won't have to use one more step in your compilation.

**WARD:&nbsp;** Actually, we switched to CommonJS across the board among our samples and in the CLI. So, all of our applications now use CommonJS. I don't know if that's helpful or not, but that's what we do.

[Chuckles]

**JOHN:&nbsp;** And we should clarify Ward that we use CommonJS as the standard but we use SystemJS to load them.

**WARD:&nbsp;** That's correct. Right. So, let's properly distinguish that. I think what we're talking about is the format of the modules that we're asking TypeScript to construct when it transpiles. And you have a lot of choices. And that's one of the things in tsconfig. And one of those choices is CommonJS. And I think Olivier, that's what you're talking about, is picking that format for it to generate.

**OLIVIER:&nbsp;** Yes.

**WARD:&nbsp;** Completely apart from what loader is going to come along and try and load that module.

**OLIVIER:&nbsp;** Yes.

**WARD:&nbsp;** And then John's point is that it may be in CommonJS format but SystemJS and Webpack are both happy to load it.

**OLIVIER:&nbsp;** Yep. So, the common bundler tries to understand multiple modules, types of modules. If you take Rollup for example I think they only support two types which are ES 6 modules. And I don't know which one is the other one. But if you want to use Rollup you will have to have an intermediate state where you change most of the stuff to ES 6.

**WARD:&nbsp;** Yeah. Yeah, the template compiler has to I think generate TypeScript files that are in ES 6 format. So yeah, there's all this translation going on and that's the nasty stuff that just seems to have nothing at all to do with your grand purpose to help people translate.

**OLIVIER:&nbsp;** [Chuckles] Yes, exactly. Like I said, I found this [inaudible] ecosystem of modules and bundler and compilation, pre-compilation and stuff like that, really useful but it's a lot to take in when you start. I really hope that it will get easier. And that's what the CLI is for, right, to help people start without having to maybe think too much about all of that stuff that goes around. And that's not the main point that you want to do when you want to write Angular 2 code.

**CHUCK:&nbsp;** Anything else we should dig into before we go to picks?

**WARD:&nbsp;** Well, I just want to know. Now that you've done it, would you ever do it again?

**CHUCK:&nbsp;** [Laughs]

**OLIVIER:&nbsp;** What, the workshop or?

**WARD:&nbsp;** No, no, no. Writing one of these darn libraries. You haven't even mentioned the best part which is the daily sifting through issue after issue after issue.

**OLIVIER:&nbsp;** Yeah.

**WARD:&nbsp;** Which John knows oh so well and I can't figure out why John keeps subjecting himself…

**OLIVIER:&nbsp;** [Laughs]

**WARD:&nbsp;** To putting up these repos.

**JOHN:&nbsp;** Because I'm not that smart.

[Laughter]

**CHUCK:&nbsp;** Oh yeah. I need to come in and complain that it doesn't work with my specialized Grunt setup that only I understand.

**JOHN:&nbsp;** Well, that's what Olivier didn't say at all, is the big question is if you put something out there you inevitably will have people who use it and a few people, not a lot, but a few people will then comment and complain about why it doesn't work on a Tuesday and a full moon. So, you just have to smile and say, “I'm sorry.”

[Laughter]

**WARD:&nbsp;** You put that semicolon in the wrong place, John.

**OLIVIER:&nbsp;** Yeah. You can use them…

**JOHN:&nbsp;** Why doesn't lite-server run in IIS?

[Laughter]

**OLIVIER:&nbsp;** And why…?

**JOHN:&nbsp;** Why doesn't Angular run on React?

**OLIVIER:&nbsp;** Why after updating on the breaking change my code doesn't work anymore?

**CHUCK:&nbsp;** Oh, yeah. Yeah.

**JOHN:&nbsp;** Yes, what's wrong with you? Come on, man.

**CHUCK:&nbsp;** RC 2 came out five seconds ago and now it's broken.

**JOHN:&nbsp;** You ruined my life. [Chuckles]

**WARD:&nbsp;** No, it's wonderful being part of it. But it does come with this other side and that's what we all, all of us in open source projects like to get together in private and whisper to each other all of the things that we…

[Laughter]

**WARD:&nbsp;** [Inaudible]

**JOHN:&nbsp;** We feel about…

**WARD:&nbsp;** Really feel about our users. But we really love you out there. We wouldn't be here without you. We do it all for you. Grumble, grumble, grumble.

**JOHN:&nbsp;** We do. Because for every one grumble there are thousands of people who enjoy it. And quite frankly, writing open source, it's really a pleasure and it's a joy. So, it's a lot of fun to do.

**OLIVIER:&nbsp;** Yeah. And that's why I gave the advice to work on your documentation a lot because you will have a lot less issues that have nothing to do with bugs.

**JOHN:&nbsp;** That's a great point. If somebody asks me a question in open source more than once, I immediately put it in the readme.

**OLIVIER:&nbsp;** Yeah.

**JOHN:&nbsp;** Because if it's going to be something I get more than one question on, then obviously I didn't do a great job communicating it. So, I put it in the readme, get it out there. It's a learned lesson. Don't blame 30 people for having the same question. [Chuckles]

**CHUCK:&nbsp;** RTFM, baby.

**OLIVIER:&nbsp;** Yeah. And you spend a lot less time writing the documentation in the end than [inaudible] issues and stuff like that.

**JOHN:&nbsp;** I actually learned that tip from Scott Hanselman, a friend of mine who years ago told me. He said, “You know, you're wasting a lot of time answering the same email over and over and over again, John. Instead if somebody sends you the same question twice, blog it or put it up in open source.” That way they can find it through Google.

**OLIVIER:&nbsp;** Yeah. [Chuckles] So, the original question was why do I do that? Well, I was pretty sure that this library was short-lived because of the implementation of i18n. So, this was a choice that I made to make sure that I wouldn't have to support this one for a long time.

**WARD:&nbsp;** I wouldn't be too sure.

[Laughter]

**OLIVIER:&nbsp;** But then, yeah.

**WARD:&nbsp;** For one, I don't know what the Angular definition if i18n is going to be. It could have this kind of translation part or it could be focusing on other aspects of internationalization. So, or you could just do it better.

**OLIVIER:&nbsp;** Yeah. Well, [chuckles]

**WARD:&nbsp;** In which case you're on the hook.

**OLIVIER:&nbsp;** I was thinking that if they don't fill all the needs that we can have, then I'm going to switch and just do the library on the spot and use the original implementation for the technical probably [inaudible] stuff. So yeah, it might be a library that I will have to support for a while. But in this case, it's one that I use. So, it's a good way to make sure that all the features that I need are available. If you ever write a library, write something that you will use. Otherwise you might lose the motivation to maintain and to fix some of the edge cases and stuff like that.

**CHUCK:&nbsp;** Alright. Well, I'm going to push us into picks. Jules, do you have some picks for us?

**JULES:&nbsp;** Yeah. So, my pick this week, as you guys might know my son is 18 and going off to college. And he got into a Computer Science program in Cal State, Cal Poly, actually. And one of the things they do when you join an impacted computer science program is they try to level off the kids. So, he has a bunch of math tests that he has to take. And he came to me on Saturday and said, “Mom, you're going to have to teach me Calculus.” And I went, “Oh my gosh. I don't even remember calculus.”

**CHUCK:&nbsp;** [Laughs]

**JULES:&nbsp;** How am I going to do this? So, my pick today is actually Khan Academy. Because while I actually knew about them before, I've spent all week doing free classes on pre-calculus and calculus and computer things that I had just completely forgotten about that we don't use in our everyday life and it was all free. And I think it's an amazing resource for education.

**CHUCK:&nbsp;** You know derivatives and directives sound the same.

**JULES:&nbsp;** You know, it's so funny because I actually said that in my head yesterday when I was banging my head trying to remember things I hadn't thought about in 20 years. And I thought, “Oh, Angular 2 is so much easier than this.”

**CHUCK:** [Laughs] Nice.

**WARD:&nbsp;** And you get to interpolate in Calculus too.

**JULES:&nbsp;** [Laughs] You do. [Laughs] Look how much you guys remember.

**WARD:&nbsp;** That's it. You've just exhausted it. That's my being able to say I speak Spanish because I can say “Adiós.”

**JULES:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Yeah. The rest of it dribbled out my other ear. Ward, what are your picks?

**WARD:&nbsp;** Oh goodness. Can I pick [laughs] an Irish whiskey that I just got?

**CHUCK:&nbsp;** Sure, go for it.

**WARD:&nbsp;** Oh god, it takes me back to Ireland. Oh yes, now I'm going to wax on here about the west coast of Ireland and Catamaran. And a good friend of mine and fellow author came over from Ireland and he gave me the Redbreast Irish Whiskey. And it's so good. So, I recommend that you go out there and try and find it. It's definitely a cut above the [inaudible] that I'm used to drinking.

**OLIVIER:&nbsp;** If you want to drink your whiskey in Salt Lake make sure that you have your ID with you.

[Laughter]

**CHUCK:&nbsp;** I'm sure that happened.

**WARD:&nbsp;** Oh, I'm so [inaudible]

**CHUCK:&nbsp;** And I was sitting with Shai Reznik. He didn't have his passport but he had a driver's license. And they won't take a driver's license if it's foreign. You have to have your passport with you.

**WARD:&nbsp;** I can't wait to be carded.

**CHUCK:&nbsp;** [Laughs]

**JOHN:&nbsp;** Yeah. Say Ward, when was the last time that happened for you?

**WARD:&nbsp;** Oh [laughs] I think I had to go, I don't know.

**CHUCK:&nbsp;** When the first Star Wars came out.

**JOHN:&nbsp;** Oh, our first Star Wars reference.

**WARD:&nbsp;** Oh.

[Laughter]

**WARD:&nbsp;** Oh, that's terrible. I'm pretty sure that I wasn't drinking age even then.

[Laughter]

**WARD:&nbsp;** Or at least I was drinking even then. Okay, enough of that.

**JOHN:&nbsp;** To be fair, I don't think I'd been carded in a long time either. [Laughs]

**CHUCK:&nbsp;** They always give me the look and then I'm like, “I'm not drinking.”

**JOHN:&nbsp;** Yeah, I wouldn't mind being carded once in a while. [Laughs] So picks. Recently, actually just yesterday, I was working on migrating my blog off of some other platforms over to a faster Node platform. And I looked at Ghost. Did a lot of research and evaluation and moved over to actually a hosted model for Ghost. And I'm actually paying for it. And the reason I'm paying for it even though I had a free platform before is not because I can't manage my own blog but I looked at this as I'm paying 40 bucks a month and now if anything goes wrong or any server patch or any upgrade patch or anything else happens I don't have to touch it. Somebody else is handling it for me. I just want to write content and have it go off on a server and exist. So for me, the $40 a month was more than worth not having to worry about this. Because when my blog went down in the past 12 years, which didn't happen a lot but if it did, that was like a time sink. So, I know there are other platforms people can use. What I liked about Ghost is it's wicked fast and there are a lot of great themes out there.

And I actually for my second pick, not just my using Ghost Pro but I'm also using CloudFlare to frontend it with DNS. And that's been great because I'm looking at all the content that I get and it caches the requests. It helped me enforce SSL. It's just doing a lot of great stuff and it's actually helping deny some threats that are out there. And I want to give a quick shout-out to both Troy Hunt who did his blog with it and put up a nice little custom theme and to Shane Boyer, a former guest in our show who put his blog over to Ghost as well for giving me some tips and blazing that trail. So, CloudFlare and Ghost.io are my two picks.

**CHUCK:&nbsp;** Awesome. Lukas, what are your picks?

**LUKAS:&nbsp;** So, I have two picks. My first pick is I had over the last couple of years fallen in love with rowing. And it's a pretty incredible activity. It really works out pretty much all your major muscle groups. And I recently, I just bought a Concept 2 rower, a PM5. And it's been pretty awesome. My buddy, Shane Mielke who is a pretty phenomenal designer, him and I, he basically… you can drop a USB right into the back and it'll just put your workout on there. And so, he carries this USB around and does that. And so, we're geeking out on some possible visualizations on rowing data. And so, Concept 2 rower. Pretty awesome.

And my second pick is I think obviously with ng-conf behind us I want to just give a big shout-out to all the organizers for making it just such a welcoming and friendly place. I brought my wife and kids and they felt right at home with the kids care and the activities. And all the attendees were super nice. Actually, Ian my boy got a lightsaber from John. And he talked about it the entire time. So, thanks for the sword, John. He broke a light with that. But we forgive you. Hug.

**CHUCK:&nbsp;** [Laughs]

**LUKAS:&nbsp;** So, those are my picks.

**CHUCK:&nbsp;** Oh, very nice. I'm going to go ahead and throw out a pick real quick. I've been transferring a lot of the process that I have for the podcast over to Trello. And so, I'm going to pick Trello. Also, I have forms up on the website if you go to AdventuresInAngular.com. There's a link. There are actually two links there. One is for guest recommendations. The other is for topic recommendations. And those actually automatically go into Trello which is kind of nice. I'm using Gravity Forms and Zapier to do that. And so, I'm going to pick those as well just as a process to get there. And then the Trello board is basically going to track the episode all the way from when it gets scheduled all the way up until it gets released and we reach out to the guest and let them know that it's done and things like that. So, I'm working on that whole process and Trello's been excellent for that. So, that is my pick.

Olivier, what are your picks?

**OLIVIER:&nbsp;** So, my pick is angular2-library-seed which is a GitHub repo by Nathan Walker. It's actually everything that I've talked about but [inaudible] with a lot of cool stuff that you don't have to worry because it's a seed that you can use to write libraries. So, it uses Webpack and then you have end-to-end code as well with Protractor which I didn't talk about. You have documentation with TypeDoc, linting with TSLint. Everything is built with Webpack. So, a lot of stuff. And a really good seed if you want to write a library. I'm going to give you the link. So, if you want to do something simple, maybe you don't need this. But if you want to write a good library, a huge library, this is really useful.

**WARD:&nbsp;** Do I take it Olivier that you are a Webpack fan rather than a SystemJS fan?

**OLIVIER:&nbsp;** [Laughs] Yes.

**CHUCK:&nbsp;** Fight, fight, fight. Oh, sorry.

**WARD:&nbsp;** No, no, no. I just, I think we so often on our show we talk about SystemJS as if Webpack hardly existed. And it's very clear that it's a favorite of many people including our guest.

**OLIVIER:&nbsp;** Originally I didn't like Webpack. It was way too complicated for me. But if you have the time to start learning how it works, then it becomes really, really powerful and awesome. So, I'm torn between their poor documentation and their odd setup and the awesome functionalities that it offers. I wish they had a better website with good documentation. It will help a lot of people start using Webpack.

**WARD:&nbsp;** Yeah.

**CHUCK:&nbsp;** Oh, I know who did the documentation for Angular 2. So, maybe they can talk.

**OLIVIER:&nbsp;** Yeah [chuckles]. That would be nice. The guy who develops Webpack, he's all alone doing it. And we can't blame him for not having more time to work on the project. He's not paid to do it.

**WARD:&nbsp;** That doesn't stop us for blaming him.

[Laughter]

**WARD:&nbsp;** We blame all open source development.

**OLIVIER:&nbsp;** Well, you can blame him. But he doesn't have to care.

**CHUCK:&nbsp;** Alright. Well, if people want to find out what you're doing or follow up with you, follow you on Twitter, any of that, what do they do, Olivier?

**OLIVIER:&nbsp;** Well, if you type my name in Google you can find me. You can find me on Twitter. My handle is ocombe, O-C-O-M-B-E. You can find me on GitHub with the same handle.

**CHUCK:&nbsp;** Awesome. Well, we'll go ahead and wrap this show up and we'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you want to support the show? Now you can. Go to AdventuresInAngular.com/forum and sign up today!]_**


