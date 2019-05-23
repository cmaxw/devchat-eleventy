---
layout: layouts/post.njk
title: >
  037 AiA Animations with Matias Niemelä
date: 2015-04-09 13:00:00
episode_number: 037
duration:
audio_url: https://media.devchat.tv/adventures-in-angular/AiA037Animations.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

Thank you [<u>RailsClips Kickstarter</u>](http://www.devchat.tv/kickstarter) Backers!

&nbsp;

02:05 - Matias Niemelä Introduction

- [<u>Twitter</u>](https://twitter.com/yearofmoo)
- [<u>GitHub</u>](http://www.github.com/yearofmoo)
- [<u>Blog</u>](http://www.yearofmoo.com/)
- [<u>[YouTube] Matias Niemelä: Whats new in ngAnimate</u>](https://www.youtube.com/watch?v=R0OrxxJNcjU)

03:13 - Animations with Angular

- [<u>ngAnimate</u>](http://www.nganimate.org/)

04:24 - CSS Animations

- [<u>Angular Developer Guide: Animations</u>](https://docs.angularjs.org/guide/animations)
- Resources:
  - <u><a style="text-decoration: none;" href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations">Mozilla: Using CSS animations</a></u>
  - [CSS Animation for Beginners](https://robots.thoughtbot.com/css-animation-for-beginners)
  - [<u>CSS3 Animations</u>](http://www.w3schools.com/css/css3_animations.asp)&nbsp;&nbsp;
- [<u>GreenSock</u>](https://greensock.com/)
- [<u>Animate.css</u>](http://daneden.github.io/animate.css/)

13:06 - Testing

- [<u>angular-mocks.js</u>](https://github.com/angular/angular.js/blob/master/src/ngMock/angular-mocks.js#L3)
  - ngAnimateMock
- [insert Matais’ link]

14:40 - Detecting When Animations End

16:06 - Animations in 1.4 vs 2.0

- Classes
  - [<u>ES6 New Feature List</u>](https://github.com/lukehoban/es6features)

20:35 - Side Libraries

- [<u>Animate.css</u>](http://daneden.github.io/animate.css/)
- [<u>Material Design</u>](http://www.google.com/design/spec/material-design/) Aspect
- [<u>GreenSock</u>](https://greensock.com/)
- [<u>ngFx</u>](https://github.com/Hendrixer/ngFx)

22:44 - Routing

- [<u>Gaia</u>](http://gaiaflashframework.tenderapp.com/home)
- Timeline Feature

26:11 - Default Animations

28:14 - Use Cases

- [<u>YouTube</u>](http://www.youtube.com/) Browsing Website
  - [<u>[YouTube] Lukas Rubbelke &amp; Matias Niemela: Awesome Interfaces with AngularJS Animations</u>](https://www.youtube.com/watch?v=hC0MpgUoui4)

30:19 - Where’s Angular 1.4?!?!?!

- Breaking Changes

Picks

[<u>McFarland, USA</u>](http://www.imdb.com/title/tt2097298/?ref_=nv_sr_1) (Joe) Matias! Matias at&nbsp;[<u>ng-vegas</u>](http://www.ng-vegas.org)! (Joe)[<u>[YouTube] Matias Niemelä: Whats new in ngAnimate</u>](https://www.youtube.com/watch?v=R0OrxxJNcjU) (Ward)[<u>Citizenfour</u>](http://www.imdb.com/title/tt4044364/) (Ward)[<u>Teach Like a Champion 2.0: 62 Techniques that Put Students on the Path to College by Doug Lemov</u>](http://www.amazon.com/gp/product/1118901851/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118901851&linkCode=as2&tag=chamaxwoo-20&linkId=W3VAFHLDYWXU3ZLX) (Ward)[<u>ngFx</u>](https://github.com/Hendrixer/ngFx) (Lukas)[<u>Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace) by Chade-Meng Tan</u>](http://www.amazon.com/gp/product/0062116932/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062116932&linkCode=as2&tag=chamaxwoo-20&linkId=CPSDS5GJCCPSG5MU) (Lukas) Thank you&nbsp;[<u>RailsClips Kickstarter</u>](http://www.devchat.tv/kickstarter) Backers! (Chuck)[<u>Ready Player One by Ernest Cline</u>](http://www.amazon.com/gp/product/0307887448/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307887448&linkCode=as2&tag=chamaxwoo-20&linkId=F2CVPWYE7IGPVPXH) (Chuck)[<u>Mastery by Robert Greene</u>](http://www.amazon.com/gp/product/014312417X/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=014312417X&linkCode=as2&tag=chamaxwoo-20&linkId=77VMQXOBDHAZPX72) (Chuck)[<u>Neovim</u>](http://neovim.org/) (Matias)

News

- [<u>ng-vegas</u>](http://www.ng-vegas.org): May 7th and 8th, 2015!
- [<u>AngularU</u>](https://angularu.com/ng/) in the Bay Area in June

### Transcript

**JOE:** What did you do on Friday night at ng-vegas? Or ng-conf, I mean.

**MATIAS:** I think me and Thomas just hang out.

**JOE:** Cool.

**LUKAS:** A little cozy evening.

[overlapping talks]

**JOE:** [Chuckles]

**MATIAS:** We had some wine, we had some…

**LUKAS:** Bromance?

**MATIAS:** Some JavaScript and you know…

**JOE:** Shared a few laughs. [Chuckles]

**LUKAS:** Had a moment.

**JOE:** Discuss the future.

**MATIAS:** [Chuckles] Vim played a big role on it too.

**JOE:** [Chuckles]

**LUKAS:** You guys watched the Vimitation Game? Oh, bam! Joke time is over.

**_[This episode is sponsored by the App Quality Bundle, the ultimate toolset for providing better software. It includes six leading tools for one incredibly low price! It’s a full-stack set of tools that covers continuous integration, testing and monitoring for your mobile apps, web_** _ **apps** **and APIs. It’s great for new projects and companies. And the offer is \$999 for one year of service for all six services. It is available for new paying subscribers only. Go check out the website at** **buildbetter** _**_.software for complete terms and conditions. The offer ends April 15th, so don’t wait!]_**

**_[Does your team need to master AngularJS? Oasis Digital offers Angular Boot Camp, a three-day, in-person workshop class for individuals or teams. Bring us to your site or send developers to ours -- &nbsp;AngularBootCamp.com.]_**

**_[This episode is sponsored by Wijmo 5, a brand new generation of JavaScript Controls. A pretty amazing line of HTML5 and JavaScript products for enterprise application development, Wijmo 5 leverages ECMAScript 5 and each control ships with AngularJS directives. Check out the faster, lighter and more mobile Wijmo 5.]_**

**CHUCK:** Hey, everybody! Welcome to Episode 37 of the Adventures in Angular Show. This week our panel, we have Lukas Reubbelke, Joe Eames.

**JOE:** Hey, everybody!

**CHUCK:** I'm Charles Max Wood from devchat.tv. I just wanna throw out a quick thank you to everybody who backed my Kickstarter campaign. I believe it really will help in kind of furthering the work with the podcasts. So, yeah, just thanks. We also have a special guess this week, and that’s Matias Niemelä.

**MATIAS:** Yes, hello.

**CHUCK:** Do you wanna introduce yourself really quickly?

**MATIAS:** Yeah. So my name is Matias. I work on the Angular team. I'm actually here working on it at Google and I've been doing so for about two years. And the stuff that I work mostly with Angular is ngAnimate. And that’s what we're going to talk about today, right, guys?

**CHUCK:** Yeah. We should try to get you to commit from the podcast or something.

**MATIAS:** Commit? So I have this 8,000 line pull request. I could just take the risk and merge it in during the podcast.

**CHUCK:** [Chuckles]

**MATIAS:** And then, you know, potentially get cut off the project right after.

[Laughter]

**LUKAS:** Cue the explosion soundtrack. 3, 2, 1, commit… boom!

**JOE:** Nothing amazing happens without risk.

**CHUCK:** Yeah. I can totally hear him telling Igor, “Chuck told me to.”

**LUKAS:** “Chuck said he would take care of it. So it's cool.”

**JOE:** There's an old saying: “Victory goes to the bold.”

**MATIAS:** I think it's a little too bold for me.

[Laughter]

**LUKAS:** Come on, Matias, you can always roll it back.

**MATIAS:** [Chuckles]

**LUKAS:** Do it for the team.

**JOE:** “Poverty goes to the stupid?”

**CHUCK:** [Chuckles] Yeah. So we brought you on today to talk about animations. Do you wanna give us a quick overview of where animations are used and what kinds of animations we can do with Angular?

**MATIAS:** So Angular kind of took a different approach in animations right from the start where it took them a while till we get them in. It wasn't sort of important at the beginning. And then when the time came for animations, we sort of put this module on top. Like, basically you have the core parts of Angular that do their thing and then you have the animations that sort of latch themselves on top of an application. So, unlike building websites a few years ago, where the animation code was in line with the actual application code, now with 1.2 and onwards, it's been a module that you add on top of it. And typically, with Angular, there's two ways to do it and that’s using CSS directly or using JavaScript animations.

**LUKAS:** Yay!

**MATIAS:** So that stuff has been around for almost two years now and now we're going into the territory of 1.4. And 1.4 has a slew of new things that are coming. 1.5 is going to sort of improve on these things and then 2.0 and 1.5 are going to have a shared codebase. I'll get to that later as we [?] for the podcast.

**CHUCK:** So I wanna just talk briefly about the CSS animations and things like that. I played with ngAnimate a little bit. And yeah, once I realized I had to write CSS animations, I also realized that wanting to do it in like two minutes was not going to happen. Did I miss something important or is that more or less the way that you expect it to be done where you create the CSS animations and then effectively add a class or add that style to the elements that you want to animate?

**MATIAS:** Yeah. You can go in the direction of JavaScript and you know, put a little bit more organization into your animations that have like sequencing and like add another animation library to it. Or you can just have, I’d say it's more of the 80/20 rule where the 80% is something as simple as fading in something, sliding in something, and that’s where CSS is really good. And I really like the way that Angular has it built out, where it's just the CSS class that you reference in the HTML. So if you think about the coupling between the HTML and the CSS side, it's very, very small -- just the class that is sort of used between both platforms.

**JOE:** So I've played around with the animations and one of the things that I've found is that: one, it's just complicated to figure out the CSS animations to begin with. [?] to Angular wasn't like the hardest thing in the world, but man, there's a lot to do with just CSS animations to begin with. And then kind of like putting the moving parts together, it was really complex. But my biggest shock was the part that there just wasn't any really great resources that really walk you through. The Angular site itself had some basic stuff, but I felt like there was definitely a big gap there, getting beyond where I can do the “hello world” example and CSS animations and doing something more… the next step. You know, there just wasn't much out there for the next step. I had ended up trolling a lot of different resources, going around, looking a lot of different things. We did find a really great resource that would just walk you through learning from very little to learning a lot.

**MATIAS:** Kind of the challenge with Angular in some ways is sort of what information is fresh, what information is detailed enough to get started. But you know, the animations is just other small example of that. Like when I first wrote… I made big articles about them and you know, things have changed a lot over time. And at one point… it's not like it's completely different, but there will be more information once 1.4 is out.

**JOE:** And there was a pretty major change before… sorry, Lukas, did you have a comment?

**LUKAS:** So just to kind of come back to your comment real quick, Joe, I have a heavy Flash background, and so programmatic animation is something that I've been doing for years and years and years. And one of the, well, I think the best JavaScript animation library, GreenSock started out as ActionScript and then got ported to JavaScript. And so I really like the way that Matias actually set up animations in Angular, in the sense that it's kind of the candy shell around the actual animations or the part of the code that’s actually doing the work.

And so for me, once I’ve kind of understood how the hook went, and how to actually hook it in, it was just hooking in the animation stuff that I already knew. And so, it was really nice that Angular actually doesn’t really do much other than it gives you a set of hooks to drop in your animations. And so I would say when it comes to Angular animations, the hardest part is actually learning how to do the animations themselves.

**JOE:** The CSS part?

**LUKAS:** Yes. So CSS, I'm very comfortable with using JavaScript animations. They make little bit more sense to me. But once you understand that part -- which is kind of a separate skillset -- the actual Angular hook for animations is pretty easy to figure out. So I really like how they kind of just separated that out and said, “Animations, do your thing. We'll just give you the hooks to hook into our application.”

**JOE:** Yeah. When I was first looking at, I think it was a little bit… a couple of versions ago, so it was a little bit different. But I kind of notice the same thing as you're saying, Lukas, that the really complex part was the CSS animations. Like, you go and you look at resources and how to do CSS animations and you learn some stuff there, then you come over and looked to doing it in Angular, one of the things that was really weird was I think at the time, there was three different styles: there was animations, transitions, and then JavaScript animations, right? And each one hooked up just a little bit differently in Angular. Is that a poor representation, Matias, or is that accurate?

**MATIAS:** That’s an accurate representation. And you know, it's like transitions and keyframe animations are different from one other. There's still the CSS world and you have the JavaScript ones. It's just the way that the web technologies are. We've done everything we can to… well, not everything but we kind of were trying to really make the sort of transition between the CSS world into the animations… [?] on the application as seamless as possible.

**CHUCK:** You’re at Google. You should just rewrite the Internet.

[Laughter]

**JOE:** Yeah, there's a major change in 1.2, right?

**MATIAS:** Yes.

**JOE:** And then there's going to be another pretty background change in 1.4, is that correct?

**MATIAS:** Not in terms of the end user. It's not like, “Oh no, they have to learn something new.” It's going to be the same API. However, the internals have been broken up in a way that allows us to extend it better with future versions. And it also allows the developer to do more things.

**JOHN:** So, Matias, something I've been wondering about the animations, one thing I really enjoyed about JavaScript animations is to be able to do just kind of &nbsp;a promise, where at the end of an animation, I can perform some action. Is there going to be any way we can do something like that by hooking into the whole Angular animations with the CSS?

**MATIAS:** Yes, there is. So the key difference with 1.4 – which I'm really happy to sort of point out -- was back before 1.2, 1.3, we had the CSS code which is very complex and it figures out exactly how long the animations are going to run and detects staggering and all that other stuff. That stuff was tucked away. You can’t use that stuff. However, now, there's a service called Animate CSS where you can just form any combination of CSS classes, style and durations using all that stuff. And it returns a callback promise that you can in your code. So if for example, you have a JavaScript animation but you still wanna use CSS within it, you can kind of mix them both -- much better.

**JOHN:** Well, I’d agree. Something I really wanted to do more of is I have another third party library which I use animations and I'm actually still stuck on JavaScript animations just because of that exact reason. Because while CSS animations are easy to use, if you actually wanna perform logic around that, it makes it difficult to do without having some kind of a callback or a promise. So that’s good to hear.

**MATIAS** : Yeah, that stuff right now is sitting in a pull request on GitHub that I believe Igor is following through and should have it fairly soon. Like the code is ready, it just needs to be sort of polished up.

**JOE:** You know, another thing that I have found that was really interesting when trying to dig through and learn to do animations was the fact that so many examples were actually done using GreenSock. GreenSock is almost like the jQuery of JavaScript animation world [chuckles] or the web animation world, you know? Like, there's more examples using GreenSock than there were using plain CSS animations. And that kind of added this extra level of “Well, do I wanna bother putting in GreenSock and learn that? Or should I just be learning the plain regular old CSS animations and transitions?”

**LUKAS:** Yes.

**JOE:** The answer is yes. [Chuckles]

**MATIAS:** So, I actually find that GreenSock is great. And I've been talking with Jack about how can we &nbsp;work better together to make GreenSock sort of play better with Angular and to sort of the insets that he has… he's been building such an amazing animation library, how can we put some of those insets into Angular? And he's been very helpful. And what I kind of came across when I talked with him is I'm a CSS guy. I know CSS very well and I've used CSS for over a decade. And like not many people you know wanna sort of bother playing with CSS and getting that into the mix, but a huge reason why there's so much CSS in Angular is sort of because I wanted to, you know, not have to have a third party framework. As amazing as third party frameworks are I wanted to sort of embrace what the browser can do by itself.

**JOE:** Right. So it's your fault.

**MATIAS** : It's my fault.

**JOE:** [Chuckles]

**MATIAS:** So that's why we have that animate CSS service because that’s just extension of it, so you can do even more of CSS in 1.4.

**JOE:** The animate.css, that’s been there a while, right?

**MATIAS:** It's been there a while, but it hasn’t been there in the form of you, as a developer, being able to interface with it. So if for example, I wanted to calculate a height based of some JavaScript code. And then inline, we've got height difference so I wanna add a CSS class and I wanna set the duration to be a certain amount. And then I wanna set easing and once it's all done, we wanna execute this other animation. That’s the kind of stuff you'll be able to do now. And you won’t have to rely on GreenSock, you won’t have to rely on jQuery, which is [?] directly through the CSS rendering system.

**WARD:** So I have two related questions, one of which I you think are answering, but I'll put it in a different way. The first question is that I wanna be able to take action when the animation completes. And that has been hard but I take that it’s easier now. And then in the related question, is so I wanna do some testing of some of my directives that have animations in them. And ideally, I’d like to just be able to turn the animations off during the test because they don't really care but in another case, I might wanna turn them on. So what's the testing story?

**MATIAS:** Okay, so let’s start with the testing first. So Angular definitely has a good testing [?] for animations. It isn’t really well documented. I will definitely put work into documenting it once 1.4 is out. So we have AngularMocks.js and inside of there, there's a module called ngAnimateMock. And what that will do is it will expose a spy on \$ element which will tell you what animations have been triggered. So you can effectively turn off animations, but you can still detect when animations are triggered within your own directives. I can provide a link, which you know, points to some of the internal animation code for some of the directives in Angular such as ngSwitch and ngInclude. And the testing code that we have to detect when an animation is triggered.

**WARD:** Yeah, that would be really helpful. I have looked into the source code and seen some methods to call that kill on automation or you know, turn off the animating, but I haven't really gotten the sense of how the whole thing goes together. So if you got something on that, I think it will surely benefit me and I hope others.

**MATIAS:** I can’t &nbsp;remember what your first question was. Could you repeat that?

**WARD:** The first question is I want my own code to take action when the animation is complete. And I don't really necessarily know what they all are, particularly if I'm in the view model, you know, I'm not sure that most of that might actually be in the UI. So what is the best way for a developer to know when the animation has completed? Maybe something is slid in, the list is finally populated, now you wanna make something else happen or be possible and so forth.

**MATIAS:** Okay. So one of the major enhancements in 1.4 is we sort of switched from the callbacks that were on the elements. So like element-based callbacks, because those existed in 1.3, we switched over that just to be directly inline of the animating service. So inside of your controller, if you were to inject $animate, you can set up an event “$animate on”, and say “when a view element has finished its animation, then run this function.” And that way, you're not messing with the DOM, you're sort of having an endless [?] inside of your controller. And in that way, you can sort of react when animation has happened.

**WARD:** That is exactly the kind of separation I was looking for.

**MATIAS:** This will get better over time. Like, right now, 1.4 it's there and we'll see how it works. And 1.5 will improve it over time. And then as we get closer to 2.0, things will have better control over sequencing and detecting when animations [?], controlling time outs and stuff like that.

**JOHN:** So Matias, as you're working through the Angular animations in 1.4 and then in 2.0, are they pretty closely aligned? I mean, are these two separate efforts, or is this something that you're seeing as kind of, you know, not taking [?] brain cycles to put together? And as far as moving and developers moving at direction, what do you see, as far as the struggles, to go from 1.4 to 2.0 with the Angular animations for us?

**MATIAS:** It's going to be one repo. I just like Bryan’s router code, which is going to be for 1.x and 2.0. It's going to be the same thing with ngAnimate. So as soon as 1.4 is merged in, I'm going to repurpose all of the unit test and all the testing I did. And I'm going to sort of make the API work for 2.0, as the way it is right now. And then all the enhancements, all the cool stuff that 2.0 brings, there's going to be a whole other layer of animation features. So for now, what's going to happen is 2.0 is going to be the same; the same sort of enter, enter active, leave, leave active CSS stuff. The JavaScript portion might change, but the whole point is not to have two separate repos to have to maintain, because that’s too hard, so we're just going to have one repo which is going to cross compile to 1.x and 2.x.

**JOE:** Wow.

**MATIAS:** Yeah, it's cool building that. It's a lot of fun. Have you guys delved much with ES6? And the higher level language features that JavaScript is going to have too?

**JOE:** Yeah, quite a bit. Loving it.

**JOHN:** I have been and I do love it, but I, in the same sense, it's not like there's something brand new that I had never been able to do before that I do with ES6; that I was just saying, “Wow, how’s my life ever been made better by this?”

**JOE:** [Chuckles]

**JOHN:** So, yes, I love new technology, but in the same sense, I'm getting along fine with ES5 doing many projects.

**MATIAS** : Well, you know, you're a .NET developer, right? John Papa, that’s your background? So you probably dealt with C# a lot, right?

**JOHN:** Yup.

**MATIAS:** So that’s a really feature-rich language. So, you’ve been kind of spoiled. So, [?] about us, web developers dealing with ES5 for the past 15 years and now it's like, “Oh, cool, we're going to have classes now.” It's a pretty mind blowing thing.

**JOHN:** It is pretty mind blowing. But in the same sense, it's funny when I went through the web world almost full time, about three, four years ago, I came from all having classes [?] and what's really interesting is that at first, it was like pulling away all the crutches that I had. And then now, I don't even think about it. I don't even think about, “Wow, I need a class to inherit from.” Or “I need generics.” Or “I need…” there’s ways people can around for years, as you know very well. Obviously, I'm not teaching you anything you don't know, but…

**WARD:** I'm going to say it, John: “I hate classes.” There, I said it right here on AiA.

**CHUCK:** Nooo!

**WARD:** I hate classes.

**LUKAS:** Hooray!

**JOHN:** It's so amazing, getting off of classes and going to JavaScript with functions and objects. It's so pure and simple, it's almost beautiful.

**MATIAS:** See, the thing I like is I like the balance between and classes and closures. I love functional programming. I love when you have a really cool combination of closures and you can do a lot of stuff with very little code. But sometimes, everybody starts off of, oh, so there's still this paradigm of object-oriented programming that you know, I’d adhere to. But I like being able to balance both of these together. So JavaScript, with the way that it's going, is going to have a lot of these cool features, that you can really bank some really cool, simple applications when you combine the best of both worlds. And that’s what web development is entirely. If you think about CSS, it's not like laying out items with CSS, you do it one way; no, there's like six or seven different ways that you can do it. But you use one trick over the other when you have to.

**JOHN:** Yeah, I think there's definitely a place for all these things. It's not like I'm not using classes or ES6 just because I wanna stay firm to what I'm doing. But on the same sense, I'm also using the new features judiciously. I'm not going to switch just for the sake of switching. There are places and times to use all these things. So I just wanted to throw out there that it's not all flowers and roses for me.

**WARD:** Yeah, and I'm only kind of joking about classes. I hate the abuse of inheritance -- which is a plague on static languages. And I'm fearful on what's going to happen when people bring that sensibility to JavaScript, and suddenly we have three and four level deep things -- which were never good in our static languages and are no better here.

**JOHN:** You know what I'm really worried about, Ward? I like the annotations that are coming, right? Like TypeScript and AtScript -- the old AtScript -- but I'm a little worried about AOP going crazy. It happened a lot in the .NET world and I'm afraid that we're going to have aspects and aspects and aspects.

**WARD:** Yeah, I think it's a real risk. But we are [chuckles] we took Matias’ word there, we're running with it. So I'm going to swing it back to animations. And you know what, I don't know about you guys but I love an animation when I see a good one, but I don't know how to pick them and I don't know how to write them. And I'm hoping that somebody is going to give me a set of them, that sort of meet general functional needs that I have in my apps that I can use them. Matias, is your group going to have a sort of side library of these? Is material design going to have a side library of these? Or are you recommending anything?

**MATIAS:** Kind of both, actually. So there's a really cool library call animate.css which works really well with Angular. You can just reference CSS classes and attach the annotations and then you can attach them to events in Angular. That’s one way.

The material design aspect, I haven't closely worked too much with material design. This whole animation refactor is sort of in catering into the needs that material design needs. So definitely, as this gets further along, the material design is going to have really cool, funky stuff. There isn’t a need for us to make like a whole animations library that’s going to be supported by Angular because we're just trying to make it so that other libraries can really hook in to Angular very easily. And I think that Lukas has worked with animations as well, so have you found any other libraries that's outside of animate.css that you like using and GreenSock?

**LUKAS:** So I really like GreenSock. One interesting library that I was going to mention on my picks is called ngFs done by Scott Moss, who was at ng Conf. Super rad guy. And he basically took animate.css and rewrote it as a set of directives on top of GreenSock. And so that’s a really cool kind of a library that he did. So it's kind of animate.css style animations, but built with GreenSock.

**MATIAS:** Yeah, exactly. So I think that especially with this new timeline stuff that’s coming, the better that we make this ecosystem of triggering animations and controlling animations, the more libraries hopefully will come about and the easier the libraries will be to maintain and to hook in to Angular. That’s the long term goal. I think that that’s like sort of the combined focus of Angular in general, is not to sort of compete with what's out there, but make it so that it can plug and play &nbsp;with other things very easily.

**LUKAS:** So Matias, I do have a question since we had this very public forum called podcast, is what (and I know we've kind of talked about this, but I've love to get a little bit more elaboration), coming from kind of a Flash background, there's a framework called Gaia, where you would actually… it had the idea of routes, but then you could actually kind of high jack the routes and then do kind of these transitions, these really cool transitions and then give control back to the routing mechanism. What kind of integration – if any – do you have planned for having animations kind of play well with kind of routing, to give us kind of those rich, animated, like page transitions from one page to another?

**MATIAS:** Right. This has been a big undertaking with Angular. I'm working on it. Me and Thomas Burleson have been working on this. And some of the Ionic guys are giving their insights to this. The idea here is that you have some form of a view change -- whether it's a route or whether it's some sort of, like a view within the application -- and you wanna control the sequence of animations and the sequence of effects that occur between the change. So a lot of people just assume that this is routing, but this could very well just be some very smaller example of routing.

So the idea is this timeline feature (which I demo’d in ng-europe or I showed a little bit more in ng-Conf), the idea here is that you'll be able to have all these animations get triggered, but then you can control which ones occur and in what order. And you'll have this mini-DSL and you can have the directive layer kind of determine what happens and for how long and pass the data around. It's really, really powerful. And that’s going to be the way to do it. Because if we were to go the route of having everything in CSS, it would get too complicated, and the JavaScript gets too complicated. So this timeline thing is there for the more advanced stuff.

**WARD:** Would I be able to hook that into the router? I mean, that seems to me (and maybe you can correct me), it seems like the logical place to do it; neither the view from which I'm coming nor the view in which I'm going would necessarily know much about what the animations should be. So I'm kind of like Archimedes. Where do I stand?

**MATIAS:** Yeah, so the routing aspect… so I'm trying to couple this routing and I'm trying to couple it with a particular configuration file. The idea is that any form of a view change… so if you think about a route, that’s ngView or UI view or new router view, changing the view element, so it's the view element that’s going to trigger the animation, then you just attach that timeline to the combination of view elements. Does that make sense?

**WARD:** I see. So if I had that place holder where the views were going to be swapped in and out of, that’s the place to insert my animation instruction?

**MATIAS:** Yes. So think about CSS, right? It's not like you explicitly say in your application this thing has a style. No, you have a style sheet that latches on to the application. The same thing is going to happen with this timeline stuff is that you have a timeline behavior that latches on to some components inside of your application.

**WARD:** That might just work.

**MATIAS:** [Chuckles]

**LUKAS:** It just might.

**MATIAS:** There's a lot of stuff that’s been developed for it. Like I've written it like four or five times. And the reason why I keep doing it is because I build it, it works. It's cool. But then we wanna do something and we just wanna support as much as we can and sort of figure this paradigm. Because if we do it properly and it works, it could really bring forth a bunch of really cool upsides down the road.

**JOHN:** So what about the idea of adding (and I'm a big proponent of this) of adding in default animations to all the kinds of transitions and hide and show and all that &nbsp;kind of stuff that are in Angular? Something I've found that in a lot of frameworks is that a lot of people don't use these things until they know what's there and how to use them. But what if there was something just out of the box that’s just a default simple animation -- kind of like what material design is doing? Have you guys thought about that?

**MATIAS:** Yeah. That should be possible. For example, animate.css, you have to do the work assign which animations. But if you, as a developer, were to make something that will just automatically plugs and plays with Angular, you should just be able to use CSS directly.

**JOHN:** That’s what I guess I'm saying is why not have just ngShow or ngHide or ngSwitch, all that kind of fun stuff, the UI router, the ng new, new new router, that thing. All that kind of things just automatically hook in to the animations by default and have a very subtle animation?

**MATIAS:** I would say that you'd probably like it for like the first week of doing things, but then you're like, “I don't wanna have an animation here,” and then you're doing extra work to disable things. So it's like, which side of the coin are you on? Are you on the side of adding more features? Or are you on the one that has a [?] disabling things?

**JOE:** Animations should be mandatory. You can’t disable them.

**CHUCK:** [Chuckles]

**JOHN:** I think they should take four second for every transition too.

**JOE:** [Chuckles]

**MATIAS:** Should we also use Comic Sans for the font on the website as well?

**JOE:** [Chuckles]

**JOHN:** And a marquee.

**JOE:** Yes. [Chuckles]

**MATIAS:** Did you guys ever see the original Angular docs website?

**LUKAS:** Oh, god!

**JOHN:** Yes.

**MATIAS:** It's like, yellow, purple and… [Chuckles]

**JOHN:** I just saw at a large corporation, that remain nameless, I just saw a new website that was created that had a marquee going across the top. So I had to get a laugh and get [?] a little bit.

**MATIAS:** I think that tag was deprecated in Chrome. I don't think you can use marquee in Chrome.

**JOHN:** Exactly. I think they had a fight to get it back. That's what I think is funny is because they took a lot of effort to actually make this happen.

**WARD:** That’s an enterprise feature, man. You can just break the whole enterprise app with that. Kind of keep that.

**CHUCK:** [Chuckles]

**WARD:** So Matias, as you're exploring along these things, do you have a canonical app that sort of reveals what you can do, what you're striving to do, that sort of helps us learn about that? Is that part of the distro for you?

**MATIAS:** Yeah. So I've been building websites for a long time, and I really like to build and I'm always building one thing or another even in my own spare time. And one thing that maybe Lukas put together last year is we’ve put this YouTube browsing website together. I always like working with that API. So that YouTube thing, I just have like this website that I have for myself, like a YouTube website and I keep testing all these animation stuff on there. A lot of prototypical things on there. And that’s sort of the website I'm driving [?] with. There could be other use cases that I'm not including in my applications, but the way that I see it, it's a website I could add pages, even if the pages don't make sense, I could add them in there just to test them in and see how it works.

**WARD:** Something like that would be great to ship as part of documentation or something.

**MATIAS:** Yeah.

**WARD:** For us to learn? Or maybe you can even give us a link for the show if you care to have anybody to look at it. Or is it closed?

**MATIAS:** Right now, it's just somewhere in my computer. But once 1.4 is out and once the timeline stuff is out later, I'll sort of be updating and showcasing this website with all the new animations. Because there's no other way you can really do it. You can’t just write tutorials that you don't have a demo app with. You have to have a demonstration app because that excites people and that’s something to work with and hack and fool around with. Like, how often do you guys learn new things by reading a book? No. you take an existing tool and you sort of fiddle around with it, right?

**WARD:** Uhh… if we can.

**CHUCK:** Yeah.

**WARD:** [Laughs] Sometimes, it's really rough out there, so I can take examples for granted. I don't know about you, guys.

**JOHN:** No, there's nothing like this diving into a code sample and kind of seeing how things go. And especially how, you know, experts like Lukas and Matias are doing these kind of things, so we can kind of learn the right and wrong way to do that stuff. Because one of the worst things about documentation is sometimes you get lost in the technical meaning of how things work. But a picture is worth a thousand words -- just actually seeing it in action is really helpful.

**MATIAS** : Exactly, yeah.

**WARD:** So Matias, I'm going to put you in the spot. You keep talking about “when 1.4 is out,” and at ng-conf, it seems like it's going to be any minute, so you got any news for us?

**MATIAS:** Yeah, I do. I'm the reason why. I'm the bottle neck with 1.4. And it's because what happened was with ng-conf, I was like… basically, before I had my presentation, like, the work is done. And they were like, “Cool. Where is it?” I'm like, “Oh, it's 8,000 lines of code.” “Okay, cool.” I'm like, “You guys can review that in one day.” And they were like, “Yeah, okay.” [Laughs] So it's been calling back and forth for the past week. But then I moved to California, so it's just in the final stages of being reviewed. And once that’s out the door, then we'll have more [?] out.

**CHUCK:** All right, now I'm back to trying to get you to commit to the show.

[Laughter]

**LUKAS:** Just do it.

**MATIAS:** Yeah, we are almost there with 1.4 and things will only get better. There's a lot of bugs that I'm fixing with ngAnimate, in the state that it's in. That’s the reason why this whole refactor is coming around because there are certain things that were unpatchable. But I'm very happy with the way it turned out, so I had a really cool stuff in there. And we will see how this stuff will evolve into 2.0.

**WARD:** Any migration issues that we should highlight or did you already do that?

**MATIAS:** There's a couple small breaking changes. Those will be highlighted in the release notes. It's the stuff with the callbacks. And there's one other breaking change where you can’t have a JavaScript and a CSS one running at the same time. But that’s the reason why we have the animate.css service so that if you do make a JavaScript animation, you can just use CSS inside of there. So it's not really a breaking change; it's just a different way of doing it. And you know, the main thing was not to break the API and do everything over again, because it's been changed a few times already. So I like the way that it's built. And you know, from the next versions that are coming and they are not going to be these drastic changes; it will just be upgrades to the animation system.

**CHUCK:** All right. We're pretty much at the end of our time. Is there anything that we didn’t ask about that we should have?

**MATIAS:** Well, there's still the stuff with the timeline, but the timeline stuff is coming later on this year. That stuff, I will definitely have more demos with that as stuff goes on. But with regards to animations, no, the stuff with 1.4 we've all talked about.

**CHUCK:** All right. Good deal. Well, let’s go ahead and do picks then. Joe, do you have a pick and a tip for us?

**JOE:** All right. So my pick is going to be the movie McFarland, USA with Kevin Costner. &nbsp;It was actually an awesome movie. It was rated PG. If you can believe it, that they do still make non-animated movies that are rated PG. It was awesome. Beautiful movie. Really enjoyed it. With a buddy of mine and saw the movie and had just a grand time. Definitely a movie you should see. So I highly recommend McFarland, USA.

And I'm also going to pick Matias because he's coming to Vegas. And he's going to be on a panel. And you could ask him not only the hard questions that we asked today, but even harder questions. And we're going to nail him down. He won’t be allowed to answer any questions without a firm commitment. [Chuckles] No, I'm excited to have Matias on the panel at ng-Vegas.

**MATIAS:** Yeah, it will be cool to hang out with you guys again.

**CHUCK:** Awesome. Ward, do you have a pick and a tip?

**WARD:** A few first. And I'm sure we should have done this but I thought Matias’ presentation at ng-conf 2015 was superb. And if we don't have the link on the show, we should put it there. He can’t say that, but I can tell you, it was really good. From the movie category, I loved Citizenfour, which is about Snowden. I thought that was chilling if one side and it was still chilling and worth watching.

And then last week, I mentioned a book that I was excited about but I couldn’t remember the title. And so I've got it now. It's called Teach Like a Champion. And it's about techniques that have been observed in effective teachers in the classroom. And I think of those techniques as being equality useful if I'm trying to make a presentation internally to a group of my own folks, or on stage in a workshop setting or perhaps even in a talk. So I wanted to recommend that.

**CHUCK:** Awesome. Lukas?

**LUKAS:** So I already got one pick that’s ngFx by Scott Moss. Pretty cool library. And my second pick is the book that Igor mentioned on his talk at ng-Conf, Search Inside Yourself by Chade-Meng Tan. And I started to read that. And it is a pretty humorous book, but it's just talking about mindfulness. And so Igor’s talk really resonate with me and so I've been trying to apply some of those techniques to my life. And it’s just an excellent book and pretty easy to read. And I think that the benefits are exponentially obvious once you get into it.

**CHUCK:** All right, I've got a pick or two. The first one is, again, I just wanna thank anybody who backed the Kickstarter campaign. I'm also going to pick a book that I read. It's Ready Player One. I know it's been picked on the show before.

**MATIAS:** Oh, I was going to say that just now for my pick. That’s a great book.

**CHUCK:** Yeah, I really enjoyed it. I listened to it on Audible in like two days because I just couldn’t put it down. So yeah, I really, really enjoyed that. There's another book I'm reading right now that I'm going to mention that’s called Mastery by Robert Greene. It's basically like 40 principles or techniques for gaining Mastery in some topic or something like that. Anyway, it's really, really good. And I'm really enjoying it. The first half hour or so of the book on Audible, I didn’t really like. But it started to make sense why he started that way once I got past that. It just didn’t… I didn’t feel like it introduced that really well. But the rest of it is great and it’s got terrific examples from all kinds of people who have mastered stuff. People you’ve heard of. Anyway, those are my picks. Matias, go ahead. Do you have some picks?

**MATIAS:** I was going to mention Ready Player One. I actually haven’t finished the book yet but I love reading it. It's really cool. &nbsp;One thing I'll pick out for anybody who’s a Vim developer, if you haven't upgraded to Neovim, I would advise that you do because it fixes a lot of things and it's really cool. I haven't seen any movies lately that I could suggest. Nothing that comes to mind. But that’s pretty much for my picks that I have.

**CHUCK:** Awesome. All right, I don't know if we have any announcements unless Joe or Ward have announcements about Angular U or ng-vegas.

**WARD:** Well, Joe, you already brought up ng-vegas which is going to be great. Did you tell people when that is?

**JOE:** May 7th and 8th.

**WARD:** Right.

**JOE:** The next month.

**WARD:** It's coming so fast. And Angular U is in June.

**JOE:** With a very awesome speaker. You may know him, his name is Joe Eames.

**WARD:** His name is Joe Eames and that’s the reason I'm going.

**JOE:** [Chuckles]

**CHUCK:** I've heard of that guy.

**WARD:** I've heard of that guy. I had to beg, scrape and borrow to be able to get to see that guy.

**JOE:** [Laughs]

**WARD:** And I'm hoping that maybe Matias will honor us with his presence as well.

**MATIAS:** Well, I'll be there. Hopefully, I can convince Brad about something, but from this point on, I haven't agreed to have a talk yet.

**WARD:** Well, that’s because Joe is taking your place.

**JOE:** [Chuckles] It was either Matias or Joe…

[overlapping talk]

**WARD:** …and we said, “that’s no contest.”

**JOE** : [Chuckles]

**CHUCK:** Yeah, Joe is the bigger guy and will break your knuckles.

**MATIAS:** Yeah, I was a bit afraid of him at ng-conf.

**JOE:** [Chuckles]

**CHUCK:** Awesome. All right, well let’s wrap up the show. We'll catch everyone next week.

**_[This episode is sponsored by Mad Glory. You’ve been building software for a long time and sometimes it gets a little overwhelming; work piles up, hiring sucks, and it's hard to get projects out the door. Check out Mad Glory. They are a small shop with experience shipping big products. They're smart, dedicated, will augment your team, and work as hard as you do. Find them online at madglory.com or on Twitter at @madglory.]_**

**_[Hosting and bandwidth provided by The Blue Box Group. Check them out at bluebox.net]_**

**_[Bandwidth for this segment is provided by Cache Fly, the world’s fastest CDN. Deliver your content fast with Cache Fly. Visit cachefly.com to learn more.]_**

**_[Do you wanna have conversations with the Adventures in Angular crew and their guests? Do you wanna support the show? Now you can. Go to adventuresinangular.com/forum and sign up today!]_**
