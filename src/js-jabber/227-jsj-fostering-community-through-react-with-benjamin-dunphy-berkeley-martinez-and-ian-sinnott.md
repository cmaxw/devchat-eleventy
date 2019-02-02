---
layout: layouts/post.njk
title: >
  227 JSJ Fostering Community Through React with Benjamin Dunphy, Berkeley Martinez, and Ian Sinnott
date: 2016-08-31 07:00:31
episode_number: 227
duration: 51:06
audio_url: https://media.devchat.tv/js-jabber/JSJ227FosteringCommunityThroughReact.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

03:08 - Benjamin Dunphy Introduction

- [Twitter](https://twitter.com/benghamine)
- [GitHub](https://github.com/dunphyben)
  04:07 - Berkeley Martinez Introduction
- [Twitter](https://twitter.com/BerkeleyTrue)
- [GitHub](https://github.com/BerkeleyTrue)
- [Free Code Camp](https://www.freecodecamp.com/)
  04:19 - Ian Sinnott Introduction
- [Twitter](https://twitter.com/ian_sinn)
- [GitHub](https://github.com/iansinnott)
- [Blog](https://www.iansinnott.com/)
- [TruSTAR Technology](https://www.trustar.co/)
  05:19 - The [React](https://facebook.github.io/react/) Codebase 12:38 - Other Important Parts of the React Ecosystem14:22 - The [Angular](https://angular.io/) vs the React Ecosystem and Community
- The Learning Curve
- [create-react-app](https://github.com/facebookincubator/create-react-app)
  22:07 - CommunityDeveloper Experience
- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
  26:56 - Getting Connected to the React Community
- [Meetup: Real World React](http://www.meetup.com/real-world-react/)
  - [@rwreact](https://twitter.com/rwreact)
- [ReactJS San Francisco Bay Area Meetup](http://www.meetup.com/ReactJS-San-Francisco/)
- [Meetup](http://www.meetup.com/)
- [Eventbrite](https://www.eventbrite.com/)
- [Calagator](http://calagator.org/)
- [Twitter](https://twitter.com/)
- [Dan Abramov: My React List](https://medium.com/@dan_abramov/my-react-list-862227952a8c#.5pgjtb9pt)
  29:34 - Conferences
- [React.js Conf](http://conf.reactjs.com/)
- [React Rally](http://www.reactrally.com/)
- [ReactNext](http://react-next.com/)
- [ReactiveConf](https://reactiveconf.com/)
- [ReactEurope](https://www.react-europe.org/)
  33:28 - Technology From the Community
- [redux](https://github.com/reactjs/redux)
- [ThunderCats.js](http://thundercats.js.org/)38:23 - Choices Are Expanding; Not Shrinking
- Linting
  40:19 - The Future of React42:39 - Starting More Communities&nbsp;Picks
- [This Developing Story](http://developingstory.netlify.com/) (Aimee)
- [Nashville](http://www.visitmusiccity.com/) (Aimee)
- [Nodevember](http://nodevember.org/) (Aimee)
- [egghead.io: React in 7 Minutes](https://egghead.io/lessons/react-react-in-7-minutes) (Ben)
- [Lee Byron: Immutable User Interfaces @ Render 2016](https://vimeo.com/166790294) (Ben)
- [Nick Schrock: React.js Conf 2016 Keynote](https://www.youtube.com/watch?v=MGuKhcnrqGA) (Ben)
- [create-react-app](https://github.com/facebookincubator/create-react-app) (Ian)
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon) (Ian)
- [The Serverless Framework](http://serverless.com/) (Ian)
- [Ben's Blog](http://blog.benoitvallon.com/) (Berkeley)
- [Isaac Asimov’s Robot Series](<https://en.wikipedia.org/wiki/Robot_series_(Asimov)>) (Berkeley)
- [Vsauce: The Zipf Mystery](https://www.youtube.com/watch?v=fCn8zs912OE) (Berkeley)
- [Kinesis Advantage for PC & Mac](http://www.kinesis-ergo.com/shop/advantage-for-pc-mac/) (Dave)

### Transcript

**DAVE:&nbsp;** I am the kind of person that believes it's important to say people's names right. And I apologize if that's not important to you.

**_[This episode is sponsored by Hired.com. Every week on Hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on JavaScript developers providing them with salary and equity upfront. The average JavaScript developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the JavaScript Jabber link, you’ll get a $2,000 bonus instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/JavaScriptJabber.]_**

**_[Let's face it. Bookkeeping is hard and it's not really what you're good at anyway. Bench.co is the online bookkeeping service that pairs you with a team of dedicated bookkeepers who use simple, elegant software to do your bookkeeping for you. Check it out and get your free trial today at Bench.co/JavaScriptJabber for 20% off today. They focus on what matters most and that's why they're there. Once again that's Bench.co/JavaScriptJabber.]_**

**_[This episode is sponsored by Rangle.io. Rangle have been working with Angular 2 for a long time, and they are now putting together an 8-hour, 2-day course designed to help Angular developers, learn how to write apps in Angular 2. If you're looking to level-up your JavaScript and Angular 2 skills, go to Rangle.io/Training and click on the link for Angular 2 Training. If you're looking for other training in React or JavaScript, they also have that available in Rangle.io/Training.]_**

**_[This episode is sponsored by Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to try debugging issues, or a million alerts flooding your inbox ruining your day. With Rollbar’s full-stack error monitoring, you get the context and insights and the control you need to find and fix bugs faster. It’s easy to install and you could start tracking production errors and deployments in eight minutes or less. We have a special offer for JavaScript Jabber listeners, go to Rollbar.com/JSJabber and sign up to get the bootstrap plan free for 90 days. That’s 300,000 errors tracked for free. Loved by developers at awesome companies like Heroku, Twilio, Kayak, Instacart, Zendesk, Twitch and more. Give Rollbar a try today. Go to Rollbar.com/JSJabber.]_**

**DAVE:&nbsp;** Hello, everybody and welcome to Episode 227 of the JavaScript Jabber show. I'm your host today, Dave Smith, and with us today, also is Aimee Knight.

**AIMEE:&nbsp;** Hello.

**DAVE:&nbsp;** We have three very special guests today. Ben Dunphy.

**BEN:&nbsp;** Hey, how's it going?

**DAVE:&nbsp;** Berkeley Martinez.

**BERKELEY:&nbsp;** What up!

**DAVE:&nbsp;** Ian Sinnott.

**IAN:&nbsp;** Hello.

**DAVE:&nbsp;** And we're going to be talking about React in community today. Would you guys like to take a minute and introduce yourselves?

**BEN:&nbsp;** Hey, everyone! My name is Benjamin Dunphy. I am a partner and organizer at a little meet up group called Real World React and we are a meet up group based in San Francisco and we put on Meetups which features the talks, presentations from people in the React community that just want to share their experiences, either with apps they're building or companies that want to talk to React community and engage them to talk about how they use React. As a partner, we also train companies on how to use React. So, that's what Berk and I do, on the site.

**AIMEE:&nbsp;** Exciting topic. I'm going to talk about this. I felt like, so many other communities like Angular, and Ember and even the Rails community should really, really, really evolve. As someone newer to the community, I do feel like it's lacking a little bit. I know some people are going to hate me for saying that but...

**BEN:&nbsp;** How dare you?

[Laughter]

**DAVE:&nbsp;** Berkeley, do you want introduce yourself?

**BERKELEY:&nbsp;** Sure. So I'm Berkeley Martinez. I am CTO at Free Code Camp and I'm also a partner at Real World React. Partner and teacher.

**DAVE:&nbsp;** And Ian.

**IAN:&nbsp;** I'm Ian Sinnott. I am, of course, the co-organizer of our Real World React meetup group here in San Francisco. I'm also the Lead Frontend Developer at a startup here in San Francisco called TruSTAR Technology.

**DAVE:&nbsp;** Cool. So, how about that React community?

**BEN:&nbsp;** That's worst question ever.

**IAN:&nbsp;** It's nice to leave it open-ended. But there's obviously a lot we want to talk about and this is a huge topic. But it's something that if you're relatively new to React or you're outside of the React community, you may not know about. Also, it's just extremely important as Aimee was mentioning that the Angular community is really big and powerful. I feel that exact same way about the React community, and it's just a huge deciding factor when you choose a new technology. It leads for a really nice experience both at computer and in person when we're talking to other people.

**AIMEE:&nbsp;** Definitely.

**DAVE:&nbsp;** Now you, none of you are actually core team members.

**BEN:&nbsp;** That's correct. React was open source. So, there's definitely a React core team from Facebook. But there's lots of people that contribute from the open source community.

**IAN:&nbsp;** I don't know, Berkeley has made contributions to React. I, myself has read the source but no code in there.

**BERKELEY:&nbsp;** Ah, no. I haven't contributed any code. It's very complicated piece of software. I don't know how many of you on this call have actually read through the code base.

**AIMEE:&nbsp;** I would actually love to kind of talk about that a little bit because that's one thing that I had started to do. I actually experienced the same thing you said. I feel like other code bases that I've tried to read, although, you know, even though, I haven't been a developer for all that long, it's always intimidating. But others were a little bit easier to dive into but the React code base itself definitely not so much. So, I'm curious, kind of, your thoughts on that and how you've gone about doing that?

**BERKELEY:&nbsp;** That was definitely my experience as well, Aimee. I think, the base reasons, Facebook does a lot of things that are really great for Facebook but bad for other people who want to contribute. For instance, I think, these are special feature in Webpack that allows them to just specify their modules by name instead of by directory. At any level, you can just say, "Import this module," and it looks like it's importing like a top little npm module. But then what Webpack does is it translates that to you in actual directory path.

So, if you're new to the project and you're looking at this one specific file, and you're looking at the imports and you're saying, "Oh, it's importing this module." This is what I did at first and we're on npm to find this module and turns out it's not there and it's because Webpack is doing a lot of smart things for them.

**IAN:&nbsp;** I could speak to that a little bit too because React is a huge and complex code base. But I think, some good advice I received in the past when looking at such a large and complex code base is if you go on the tags on GitHub or just Git in general, you can go and check out React point three or some really early version of React and you end up with a much smaller code base that's also seeing far fewer performance improvements.

I think, when diving to React, something that you see which is really tough a lot is there's a ton of performance optimizations that are done in React code base which is amazing as a developer because you get all this performance out of the box.

But when you're reading through the code, there's a lot of stuff there that you might not instantly understand because it's done strictly for performance reasons and that doesn't always translate well into really obvious code, if you're trying to figure out what it's doing.

**AIMEE:&nbsp;** So, how have you gone about doing this then?

**BERKELEY:&nbsp;** Doing through code base? React?

**AIMEE:&nbsp;** Yes.

**BERKELEY:&nbsp;** What I would actually do is look at my npm modules and use the above statements there and run the code that way because they were looking at the post build stage of the React library. You actually step through and see where it's going and then I use that to reference the actual files on GitHub.

**IAN:&nbsp;** I think another thing that helps is, if you look at React or any library, actually, from a more abstract level and say one of the core pieces of what this library does, in React, you could say it does Virtual DOM diffing. It does DOM creation, and it has an inventing system. If you look at those three separate things and then go try to find them in the code base, you can greatly weed down the amount of code you have to look at, to understand each piece. Or if you're trying to understand the Virtual DOM engine, you can likewise totally ignore the inventing system. Totally ignore what translates the Virtual DOM chain to actual DOM and strictly look at the reconciler.

**AIMEE:&nbsp;** So, I guess I'm kind of curious. Do you feel like this is something that Facebook itself should try to work on or do you think it's up to developers to do this? Because, I guess, like most of these things are really built to solve an internal problem and they're not necessary built for a community so potentially like other communities go back after the fact and try to improve these things. But do you really think like, Facebook's responsibility to do this or not necessarily?

**IAN:&nbsp;** I think, they've done a really good job. That is obstructing a way a lot of complexity in the right areas, like making this library extremely performance. The Virtual DOM diffing, they do these tree comparisons on your virtual data structures that you probably don't want to write by hand and it's totally abstracted. You didn't even have to know how it's working to use the library which is really cool.

So, there is a big disconnect between using React which the React team and the community at large has tried to make very simple, and dive into the source code, but that's understandable. It is meant to be an implementation detail and it's really quite nice if you're just using a library versus trying to contribute to it.

**BERKELEY:&nbsp;** I would really like to see Facebook try a little harder to make it really easy for someone new to the code base to come in and know what's going on. But I don't really see that as kind of the point of React. They have very different goals they're trying to reach and not necessary bringing on new people from outside the company, and that makes sense because they're using React all over the place at Facebook. So they have people supporting it on the team.

**IAN:&nbsp;** I would like to stress the difference between understanding the code base and using it and it's always really nice to understand the code base that you're using but in React, as Berkeley said, it's big complex code base. I think, we do really see the React team trying to simplify things and make it more usable.

Just recently, it's actually one of my Picks for later but they released a library for creating React that without having to do any configuration on your own which usually that involves I need to learn Webpack and I need to learn Babel and ES6. But if you use this library, they created for a community, you can start building React out of the box really quickly and it's actually meant to have production grade tool inside of it. So it saves a lot of time and effort for anyone new to React. This just came out last week or something, really recently. But in my opinion, shows a very significant effort on the part of the React core team to make it more usable to the broader community.

**DAVE:&nbsp;** So, if someone who is using React to build products, how important you think it is for people to dive into the code base and really understand it?

**IAN:&nbsp;** Honestly, I don't think it is that important. The usage can be largely decoupled from the implementation, and I believe that's very much on purpose because they do so many performance optimizations and things that you don't want to be coding every day. Just like JavaScript has a garbage collector because you don't want to do memory allocation on your own.

I think of React in the same way. It does all these performance optimizations for us without us having understand them and I think it's just up to the individual developer, whether or not they want to spend the time because time is a significant investment so if you want to spend the time, you absolutely should go through and understand what React is doing. But if you would rather just build something now, it's also really good for that. In my opinion, you do not need to understand the inner workings of React to build really significant applications with it.

**AIMEE:&nbsp;** Let's talk about that part for a while and understanding the code base itself. What other part of the React ecosystem and community do you think are important?

**IAN:&nbsp;** So I think a strong community with any library results in a number of things such as an ecosystem. You get a ton of React components out on the wild that are really useful. So you want to combo box in your React app, it's just an npm install away. I have this component, you can drop in any part of the UI. Really quick, really nice and you also get a ton of tooling and when you change your JSX, you change your React components, and you see it live updated in the browser without affecting your app state. That also came out of this really significant community.

Dan Abramov, who I think was on the show before, really pioneered that, and he was not part of Facebook's core team at the time. He was a community member and was subsequently hired by Facebook but he was absolute just part of the overall community when he did all that interesting work that a lot of us now use every day in development. At least for me, I feel, it be really hard to go back to not having hot reloading in my apps. So, the ecosystem is really significant.

Then there's also the ability to learn the technology at hand which it really benefits from a large ecosystem. People who are writing blog posts or creating video tutorials, and you get a lot of free online tutorials for React because there's so many people who do it and want to share their experience.

You also get a ton of great blog posts and a ton of information that gets out-of-date really quickly because this is the JavaScript world, but then you have a ton more that supersedes it and is updated because there's just so many people in the community that love this technology.

**AIMEE:&nbsp;** That actually leads me to a question. I feel like, I used to do another podcast - Angular Air, and if I recall correctly, we had a show, were we are talking about React and Angular, and people always like to talk about pulling numbers from Google searches. Someone brought up that if you did a Google search for React docs versus the Angular docs that the Angular docs are more popular. So that led people to believe that the Angular community was larger.

But then someone else chimed in that there's so much specific to Angular, whereas with React, it's a lot more like the API is much smaller. So they thought, well, potentially that's why there are more Google searches for Angular because there's a lot more to their API to learn. So, in your opinion, you're a lot more plugged in, do you think that the ecosystems are fairly similar in size or do you think one is larger than the other?

**IAN:&nbsp;** Good question. Really hard to say without being Google, I suppose, and having all of their data or you could look at the searches. But I think both points on the size of Google searches with regard to Angular is probably correct. It is a larger library with a larger API surface area which actually means going to have more documentation and a more significant learning curve.

Probably, if you want to actually know, say, every piece of the API and React is much smaller, but I myself, do not have much experience with Angular. Maybe Berkeley could touch on that a bit since he's done both in a very significant way.

**BERKELEY:&nbsp;** Yeah, definitely Angular is much larger library and Angular 2, I think it's going to be even bigger since they're adding RxJS and now, TypeScripts has gone a lot more complicated. I think, definitely they probably went the wrong direction. But yeah, it is much larger.

**AIMEE:&nbsp;** So, if you came from the Angular community, are there things that you feel like you miss from that or there are things that you prefer about React community?

**BERKELEY:&nbsp;** Yeah there's definitely nothing I'd missed. I think as soon as I started, I think I did one like, little tutorial on React, and I was hooked and I just completely abandoned Angular at that point. I haven't really thought about it since. I think, once I had to do some maintenance work on an old Angular app, and the memories that come back were being frustrated. It not working.

**DAVE:&nbsp;** Like 7000 Angular developers just collectively sighed.

[Laughter]

**DAVE:&nbsp;** He doesn't missed us.

**AIMEE:&nbsp;** Let's be nice and not talk about other communities negatively. So, I actually be curious, each of you, how long have you been programming for because I feel like the Angular community- a lot of people like to say, I've heard an analogy that the learning curve is like a hockey stick or it's like pretty flat and shoot straight up.

But still as someone newer to this, I feel like it is much easier to get started in Angular. So, as you talk about that, I'm really curious how much experience you had have yourself as a developer. If you work with junior developers and learning React and what your experience is there?

**IAN:&nbsp;** Let me jump in there because I think, from a little anecdote, Mr Berkeley is on-call, he was the one who introduced me to React, I would say about a year and a half ago. Since that time, I've brought it into the stack at the company that I worked at, and it is now our entire front-end stack.

We've render React to almost the very root of the DOM and the entire UIs built with it. It's been a great experience. In my opinion, it was actually pretty easy to learn it and get up to speed with it. Of course, it's always something that you continue to do. I could learn React better than I will know React better a month from now than I do now because I use it every day but that's okay.

I don't think the effort to get up to a productive point with React is that significant but you know, everyone's mileage may vary and if you're used to something such as all the APIs you have in Angular, then maybe React will strike you as too low level and not doing enough for you.

**AIMEE:&nbsp;** So how much experience you actually have as a developer? How long have you been writing JavaScript before you started using React?

**IAN:&nbsp;** For me about two years.

**AIMEE:&nbsp;** Two years as a developer or just two years writing JavaScript?

**IAN:&nbsp;** Ah that's the same for both, actually. Prior to doing anything with React.

**AIMEE:&nbsp;** Okay. So, it seems like you're pretty similar with me. I'm trying to make the analogy in my mind. If I started off learning Angular, but if I had started off learning React, I feel like it potentially would have been a little bit more difficult. Not just because of React but the ecosystem. You know, learning everything in ES6 and just the React ecosystem could be pretty complicated, and I feel like I get a lot of emails, or have a lot of conversations with newer developers, and they are just pretty overwhelmed. So, do you have any advice there?

**IAN:&nbsp;** Totally fair. I think that's been a problem since React's inception and since it gain and a lot of popularity before. So React core team just released this tool to help you build React apps without having to dive into the configuration and all and make it very easy to get started. But, then, that was last week or something. It's very recent.

Before that, I absolutely agree. It was tough. It was an uphill battle. You had to learn all this tooling just to get started and I think some people actually liked that maybe in a very strange way. I, myself, I really enjoyed learning all the tooling and completely over optimizing all of my applications. But that is a significant hurdle. I absolutely understand that. It took me a lot of time. I just thought it was kind of fun so I kept on going.

**BEN:&nbsp;** Hey, man, I think I saw your point. I think because React is so hot right now and people just hear that React as this cool thing that they want to be building with. Even before, they master JavaScript, they'll jump right into React and try to learn that. Then, they see, "Oh, everyone that's developing with React is using ES6, let me get into that."

So, I think a lot of people are just jumping the gun before they master JavaScript, before they know how to do maps and just very simple things like that. They're going to jump into React and they are going to be overwhelmed, especially, when you throw in the dev environment.

What Ian was talking about with the create React app, that the React core team just came out with, that's going to help people to get started with React in the whole dev environments, without having to worry about all that configurations. But, you do need to know JavaScript before you get into that.

**BERKELEY:&nbsp;** And it's definitely true that it is a lot easier with Angular. I think, within three months of me starting to actually code, I went up what was Elance, which is just now Upwork. I went on Upwork and got a freelance job and it was my first developer job on Elance, and I was only three months of programming, and Angular made it super easy. In that way, it's a little more productive, but I definitely felt now, especially looking back, that my JavaScript wasn't really up to par. It's just Angular doing a lot of work for me.

**AIMEE:&nbsp;** I can definitely relate to that that, and I can also relate to then. When I was in my boot camp, we did three months of JavaScript and Node, then three months of Ruby on Rails. One of the big reasons why I just gravitated towards the JavaScript side was I feel like very similar to what we're talking about here, where I just felt, at that time, especially this was like two years ago, Express and Node was really growing in popularity. So it was really like the Wild West out there and that challenge of having to figure out how I wanted to set up my Express app because there weren't a lot of best practices out there, yet and so many different modules to choose from. Like that challenge just was kind of irresistible to me. So that's why I ended up going to JavaScript route. So I could see that with React, too.

**DAVE:&nbsp;** So can we talk about community for a little bit? I'm actually a little bit more plugged in with the Angular community, than I am with the React community. Even when I think about Ember, as well, I can pretty much have a feel for what these communities are like. For example, Angular - super inclusive, super friendly. They're all about collaboration. They really eschew, they really dislike competitive stances where if you try to say, "Hey, Angular Team, what's better? Angular or React?"

There was like, "Look, I don't even want to get in that discussion. I guess, that's not how I want to talk," and to the point that they've taken tools from Ember. You know, the Ember CLI's now like integrated into Angular CLI and the Ember community seems to be like all about like we are going to be basically an STK for the web. We're going to kind of create a very obvious common way of how to do things. How would you guys sum up the React community in that regard?

**IAN:&nbsp;** Just before jumping into that, I just wanted to say that I don't know how the React community feels at large, from outside of it, since I'm very much inside of it. But in my experience, we certainly don't take the mindset that this is any sort of competition or that we're comparing communities. What's really amazing is like you said with Ember and Angular, you see different communities and different technology is learning from each other and getting better. That is exactly what happens in our community, too.

I think a perfect example is React-router, which the creators of React-router actively saying it was completely inspired by the Ember-router because it's just so good, they loved it, they had to bring it to React.

That's something beautiful in the JavaScript community at large, is how all the sub-communities learn from each other and get better and make their technologies better. I think, at least, at Real World React, we see it very much as a collaborative environment under the banner of JavaScript as a whole, and certainly, not combative or trying to say one community is better than the other.

**BERKELEY:&nbsp;** And I definitely think the React community is much younger. A lot of people I meet at these meet ups and gatherings are new to React and really interested in learning it and they're all running into the same hurdles. It is a lot younger than the Angular community.

**BEN:&nbsp;** I think, what I've noticed is that our members at our meet ups and at other React meet ups as well are just very, very communicative; very, very excited. It's really easy to see it, and not just see it, but to feel it. You’ve got to feel it in the air. As the organizer of Real World React, I introduce all the speakers up there and give a very quick introduction speech.

At our last meet up at [inaudible], we're featuring Lee Byron's speaking, but before I got to introduce him and [inaudible], I really had to quite everyone down, which at other meet ups, you can go to and people will quiet down pretty quickly. But it took me a while to get everyone settled down before we actually started the meet up.

**DAVE:&nbsp;** So in a word, super-chatty is what you're saying.

**IAN:&nbsp;** So chatty. The chattiest group of people. I would say, to speak to what the React community is, something I notice a lot is an emphasis on developer experience, which I found super-exciting because we're all developers here. As I mentioned, we also Dan Abramov come out with React Hot Loader, which led to us all being able to hot reload our apps almost instantly, which was a huge win for developer experience.

I think, in part because of that, you see other things like of course, that led to Redux or he created Redux. Then, you have the Redux dev tools now which is this whole Chrome plugin that is an entire dashboard to give you insight into the state of your app and how it's changing over time, which is really cool and actually really helpful as a developer.

Not to say anything about other communities, I don't know, but the React community seems to put a lot of emphasis on the happiness of its developers and our ability to debug our apps with things like being able to view state over time and predictably understand how state changes.

**DAVE:&nbsp;** Would you say that the React community has a stronger emphasis on functional programming than other communities have?

**IAN:&nbsp;** I'm not sure how Berkeley would feel about this, but I would say certainly, the React community was actually my introduction to functional programming, and JavaScript. As you had Underscore and Lo-Dash, they've been around for a long time but I certainly never thought of those as these concepts that a lot of concepts that are derived from functional programming. I never thought about no map or reduce as these functional programming concepts, but just as functions that happen to exist on the Rails.

But after using React, you notice that also in React code base, you get a very few for each loops, or even for loops and just a whole bunch of maps and reduces and it's really cool because, of course, these are all non-mutative operations. But I would absolutely agree or I think that the React community definitely does emphasize functional programming.

**DAVE:&nbsp;** How does the React community tend to get connected? Like if I am a developer coming into this community, and I want to get connected, where do I go?

**BEN:&nbsp;** For us, our meet up is featured on MeetUp.com. If you're in the SF Bay Area, just go to Meetup.com, search 'ReactJS' or 'React' and you'll find a bunch of different groups or events, depending on which one you're searching for. There's us, the SF ReactJS, Bay Area Meetup by Devon, and there's a few others that are popping up. In your respective city, I'm not sure how popular Meetup is outside of the Bay Area, but you look Meetup, look on Eventbrite, just Googling events. I know Portland uses Calagator. Whichever platform you're using to cover events.

Speaking of, actually, we're having a Meetup there, as well as a workshop. We're in talks right now with EpicoDis and ImpactFlow to host both of those. We're branching out of the Bay Area.

**IAN:&nbsp;** And to answer your question, certainly not limited to the Bay Area. I would highly recommend Twitter. Hands down, I get the most up to date and recent React news from Twitter. Just by following the people that are very visible in the community. Again, I'm just going to look at Dan Abramov because he's becomes a visible. But he had this medium article a long time ago about who to follow, and it's all these people on Twitter - essentially a list of people that were at the forefront of the community.

I think, he was absolutely right and it's still very much the case, that if you know who to follow, and you follow them on Twitter, and let's say, you just make a Twitter list, and if you look at that list, you're going to have all of the most up to date, most bleeding edge React information that you could ever want because these people are very active on social media, at least Twitter. Always talking about libraries. They're interested in the things they're working on, or meet ups they're hosting so I would recommend Twitter.

**BERKELEY:&nbsp;** That's true for me, as well. I have a list of people I follow that tweet a lot about JavaScript and React specifically, and that's how I heard about Create React app. I think, it was as soon as it came out, I saw it on Twitter, everyone was talking about it.

**DAVE:&nbsp;** Yeah, I was actually the same way, and people often ask me like, "Who should I follow on Twitter?" because you have the signal to noise problem. Sometimes, you know if you follow the wrong people, and you end up with just a bunch of pictures of cute cats or something, it's like, "Well, I like cats. But I was actually interested in React news." So hopefully you guys can share that link and we can put in the show notes so our listeners can check it out.

**BEN:&nbsp;** Absolutely, and I want to mention one more thing about engaging the React community is its conferences. Now, if you know React, then you probably know React Conf which takes place, typically, in San Francisco or Facebook's offices and cue on around February. But this lots of community conferences that have pops up, you have React Rally, that's happening in Salt Lake City this year, August 25th to 26th. You have ReactNext in Tel Aviv. You have React of 2016 in Bratislava, Slovakia. So it's happening all around the world.

Even for JS who is having their conference this week. A tons workshops this year. A lot of them are around React and the entire ecosystem around that. Speaking of that, we're actually kind of planning a conference / workshop. That's going to be complimentary to next year's React Conf and we're calling it 'React-a-ton'.

The reason why we did this is because last year, I, as many others, wanted to get in to React Conf but it was like getting tickets to Super Bowl. It was really popular and really difficult. So we kind of wanted to create this community outlet for people who either didn't get in or just wanted to get into it and learn React because React Conf is kind of more geared to people who know React very well. With all of the networking we've been doing with our React Meetup, we've talked to a lot of companies that want to get involved in this, hosting to speed up talks, workshops, just kind of creating this sort of like week-long event leading up to React Conf. So it's building up anticipation, building up community, and getting more people involved that would otherwise not be involved.

**IAN:&nbsp;** And Ben brings up another good point about how to dive in the community is just the videos from past React conferences, and not just React Conf but also React Europe, of course. That's still huge. So if Dan Abramov announced all his stuff at the first React Conf or that was React Europe, I guess --

**DAVE:&nbsp;** Yeah, it was.

**IAN:&nbsp;** -- Anyway, if I'm wondering how to do animation in React, there's only a plenty of resources out there but you could just watch Cheng Lou's talk on React Motion, which I think may have also been at React Europe. That's a great intro to how you might want to do animation in React in a declarative way, which is kind of a mind bender, if you've been using jQuery for all of your animations before.

The talks that are all recorded and put online for free, and for everyone are excellent source of kind of an overview into what's going on in React community, and some deep dives, if that's what you want as well.

**DAVE:&nbsp;** I'll second that about conferences. I think, sometimes, people go to conferences thinking that the talks are the number one thing you're there to see. But I've actually gotten most of the value that I've gotten out of conferences by just interacting with other people who are attending, and talking about their stuff, like, "Hey, what are you guys doing? What technologies are you using? How are using React? How are you using Angular?" You know, whatever the technology is, I had a great time just comparing notes. Like, "Oh, yeah, we ran into this problem. Oh, yeah, that same problem. How do you solve it? Wow, that never occurred to me." Like it's really cool. I think, the best conference organizers know that those interactions are important and they'll structure their conference schedule to maximize them.

**IAN:&nbsp;** Yeah, very true. For those anyone listening who has not been to a developer conference, something you often get is happy hours of social events after the formal event is over during the day, which is in addition to the conference. Just walking around the venue, it's another great opportunity to mingle with people who are really passionate about whatever technology it is or whatever subject area it may be. I think, the conference point applies to anything for which there are conferences and you want to know more about, not just React in particular.

**DAVE:&nbsp;** All right. Well, can we talk a little bit about technology that came out of the community? We've already talked a little bit about Dan Abramov and what he did with Redux. But one of the interesting things about the React community is that there's actually a lot of competing flux architecture implementations. Redux is just one of ten different ways. In fact, I think this may be something that actually is a problem for the React community, which is when I start out with React, I have to choose now between all these different solutions for various problems. What am I going to use for Ajax? What am I going to use for Flux? Am I going to use Flux at all? Should I use Flux? What do you guys found to be the case with the React community when it comes to addressing these kinds of problems?

**BERKELEY:&nbsp;** That definitely was the case. I don't think it's the case anymore, at least, when it comes to Flux because Redux kind of swallow up all the other ones. I certainly recommend everyone start with Redux for anyone who's looking to implement Flux.

**IAN:&nbsp;** And for anyone who doesn't know, this coming from Mr Berkeley who wrote his own flux implementation. That's a pretty strong recommendation.

**DAVE:&nbsp;** Which one did you write, Berkeley?

**BERKELEY:&nbsp;** I wrote one called ThunderCatsJS. It was based on RxJS. It was built with RxJS.

**DAVE:&nbsp;** And why did you decide to say that it's misguided?

**BERKELEY:&nbsp;** I think, at that time, Redux had come out and I really loved RxJS and I didn't really see a really great Flux implementation using RxJS, and I thought I could do way better. Then, running into a bunch of issues with my version of Flux and looking at the progress that was happening around the Redux community, which itself is a very large community that might be larger than React community itself.

I saw how fast Redux was growing, and I just decided it was a better option for me and for Free Code Camp to use something that already has such a strong community, instead of trying to implement my own.

**DAVE:&nbsp;** It's kind of a shame now because you definitely had the better name.

**BERKELEY:&nbsp;** Yes. There are other libraries that you should really be using if you're going to create a Redux app or React Redux app. I think, while the Flux question, I think has been pretty much settled. There are other questions, as well, like Ajax, how do you do Ajax and Redux and I think, Ajax is the question that was kind of left out of Redux because there was a great way to do it that was native to JavaScript, that would be functional, that would fit in with Redux.

**IAN:&nbsp;** Yeah, Berkeley said exactly what I was going to say, and not to discount your question by saying, Redux is now the Flux. There are still many other aspects of development, especially with React apps. For which, there are myriad solutions and as a beginner, or even a veteran who just isn't used to the ecosystem, what do you choose is really significant question and Async is a prime example. You've got your promises, and your thunx and your Redux-sagas and then, you've got our RxJS, like Berkeley was talking about. Tons of choices, and very little agreement, at least, as far as I've seen onto what's the best one to use, or even if there is agreement this person might be using. They have this whole code base they wrote with one approach, and it would take a lot of effort to refactor it so there's going to keep on going with that approach, which is something you see in development in general.

But it is definitely a hurdle that you overcome. I think, testing is also a big one: how do you test your React components? Or how do you test your apps in general? And Redux giving us these pure functions - this reducer functions to manage a state, helps a lot towards that end. Then, there was the question, "How to test React components?" and Facebook [inaudible] and then, every [inaudible].

There, again, a lot of options for you to choose from. That hasn't exactly been solved yet, this problem in many different areas or functionality that you want to solve for. But I think, the underlying reason would be that it is fairly young. It's like the React-router guys said, that in Ember community, they are also a competing routers for Ember and then one will eventually emerge victorious, and we saw that in the Flux, also.

You know, Redux emerged victorious but there were just myriad implementations of Flux out there on the wild. So, I think over time, we'll see that in a lot of other areas within JavaScript development in general. Well, as a community, recognize what is probably the best way to do things and that's subjective, too. But I think the community will settle on if you want this, then you do this, or if you want that, then you do that. But there will be fewer than there are now choices.

**DAVE:&nbsp;** I actually want to push back on your answer there a little bit because, while, I know that there's been a few cases where the community settles on something like Redux, clearly the community settled on it. That seems to be very rare, you know? Like the community seems to love, not just React community, but the entire web ecosystem, seems to love the idea of choices. It seems to me, like if I follow these people on Twitter and see what's happening, the choices are actually growing in number and not consolidating. In other words, a trend is very rare, where you go, "Okay, for this pattern, we're going to consolidate on Redux and everyone settles on it."

You know, the React-router, as an example of where people are pretty much consolidated, I think. But like in every other area, it seems to me like choices are expanding, not shrinking. What do you guys think about that?

**BERKELEY:&nbsp;** I think, there are two really good example that counter that but I think, you're absolutely right. When it's something that's not as important or as big, you get a lot of choices. But I think, as time goes on, we'll see them consolidate. For the two examples, I want to give, the first one is linting. Obviously, linting, there's seem to be tons of options. They are really good. No one really came on top. Then, ESLint came out, and they made a huge wave. Now, what we see is a consolidation of ESLint, and JSCS, which is another linting project that was also trying to replace JSHint, I believe.

Then, the second example would be the Node/ioJS but this is a very important split that happened, and then we saw reconciliation.

**IAN:&nbsp;** Yeah, totally fair point about that being more and more libraries, at the same time and some really important libraries are really important areas of functionality are being consolidated. So I think, both points are totally valid. We're likely to see much more expansion of libraries in the future. At the same time, as we see some really important functionality is consolidated into fewer libraries.

**DAVE:&nbsp;** So as long as we're predicting the future, what do you guys think is the future for React? Like, let's say, two to five years from now, what is the React community and ecosystem going to look like? Let's go ahead and pull out your crystal balls.

**BEN:&nbsp;** React takes over the world. Development teams drop their iOS teams for React Native.

**BERKELEY:&nbsp;** React for president.

[Laughter]

**AIMEE:&nbsp;** That was probably a great option right now.

**DAVE:&nbsp;** I would vote for that.

[Laughter]

**BERKELEY:&nbsp;** I know what I would like to see. It would be really cool to see. I don't know, if this is something that will actually ever come up about. But seeing first class support for things like virtual DOM, would be great.

**DAVE:&nbsp;** You mean, like native in the browser?

**BERKELEY:&nbsp;** Yes, and we've seen every other major framework adopt this pattern. I believe Angular has a virtual DOM. Ember has Glimmer, I believe, which is virtual DOM, if I'm not mistaken.

**DAVE:&nbsp;** I don't know what that one said. I'm not sure of the implementation of Glimmer at the Angular 2 rendering engine. I don't think they would call themselves virtual DOM but they might say they were inspired by it. I'm not really sure.

**IAN:&nbsp;** Yeah, predicting the future, in general is obviously a very difficult practice. But in the world of JavaScript, it's a whole another beast because the community is changing so fast and the ecosystem is changing. You know, ten years ago, you might have thought or anyone might have thought is jQuery is the future. It's going to be around forever or we're going to be using it in all of our apps.

Today, we might say the same about React or Angular, Angular 2 or what have you. But at a certain point, it seems, historically as though many technologies have gotten superseded that we thought were going to take over the world. So I would not say that React is the end of the all, that will take over the world. But it's certainly pushing towards some significant milestones especially, with React Native. With now, GitHub pushing Electrons, you can develop desktop apps, as well in JavaScript, and you see a lot of developers using React and Redux to develop desktop apps. So you've got desktop, you've got mobile, you've got web obviously and you can do all your service-side rendering with React, too. So it has a lot of going for it. But it'd difficult to say that it'll be around for any certain amount of time.

**BERKELEY:&nbsp;** True. Next week, it could disappear.

**DAVE:&nbsp;** So what should we would have asked you that we haven't asked you so far?

**IAN:&nbsp;** One of the things that we had in our own notes or added in my notes is I want to touch on- again, we've been talking a bit about the community and about the technology, too, but community being so important, whether it's React, Angular or any community in any locale, it's really nice to get people together who have a common interest. It would be nice to see and it's already happening.

But it would be great to see more communities pop up around any technology, around the world, because we're fairly spoiled here in San Francisco, being what it is. If you open Meetup.com, you have twelve React Meetups in a given week. Something out of control. It’s nice because you can meet all these developers but it would be great to see the community expand locally. Because online, it's everywhere.

Everyone's talking about React on Twitter, and you've got your Slack channels and you've GitHub. But I think, it would be really cool to see more groups focused on React or Angular or what have you. Just bringing people together is an amazing way to spread ideas. We can speak to, especially Ben, since he's done a lot of the work on our end. It's not actually very difficult to bring together a community, since the community already exists.

**DAVE:&nbsp;** Cool. So if people want to get in touch with you, what's the best way to do that?

**BERKELEY:&nbsp;** Twitter is the best way.

**IAN:&nbsp;** Yeah, agreed.

**BEN:&nbsp;** On Twitter we are @rwreact. Short for Real World React. Then, the rest of our handles, we can put them in the show notes.

**DAVE:&nbsp;** Sweet. Well, let's move on the Picks, shall we? Aimee, can we start with you?

**AIMEE:&nbsp;** Sure, I have another podcast Pick. This one is more geared towards new developers but... well, actually, I think that back. It's for everybody. But it's called 'This Developing Story'. He just kind of talked about different developers that you've probably heard about in the community and how they got into programming. I was on there a couple weeks ago. Kent Dodds was on there or Kent C Dodds, excuse me --

**DAVE:&nbsp;** How dare you?

**AIMEE:&nbsp;** He was on there, I think a week before me but I really enjoyed this podcast, listening to it, and just being a guest on it. So that's my first Pick. Then, my second pick I have, I guess, hopeful news, I am relocating to Nashville in September so my Pick is just going to be Nashville because I love the people there. I love the developer community there so if you are ever looking for a place to come visit, come check out Nashville and Nodevember is there, too, in the fall. So that's it for me.

**DAVE:&nbsp;** All right, Ben, what are your Picks?

**BEN:&nbsp;** All right, so my picks are rather beginner friendly. If you're new to React and want to learn in just seven minutes, just Google 'egghead.io: React in seven minutes' and John Lindquist gives a great introduction, complete with basically building a simple app in React in just seven minutes and it's free. They might ask you for your email. I think, Eggheads been doing that a lot lately. If you have to put up with that just go for it.

The second one is Lee Byron. His talk at Render Conf 2016. He gives a great talk on application architecture, and the entire ecosystem that React is kind of fomenting and cultivating. He gave an expanded talk on this at our Meetup a few weeks prior. But our recording for it fell through the last minute so I can actually recommend his talk at our Meetup as a pick but this is just as good, and he's a great speaker, and it's very interesting.

The third is on Nick Schrock, the React Conf 2016 keynote. This gives you a great overview and Nick is a great speaker. it gives you a great introduction to React as a horizontal platform, which means that it's something that can be used to build for the web and mobile, and natively, across all platforms. So very interesting.

**DAVE:&nbsp;** All right. Thanks, Ian, what are your Picks?

**IAN:&nbsp;** My first Pick, in case no one couldn't guess, be this new npm package which is just you create React apps with zero configuration, and it is called create-react-app. If you do an npm install, create-react-app, hyphenated, you get this project. I think, it's really cool because as we touched on this conversation, there has been a lot of discontentment with the state of tooling in React because it takes so much to get set up.

Then, for my second Pick, it would be this GitHub repo called Functional Programming Jargon which React aside, it's really cool to see. If you've ever wondered what a functor is or what a monad is and you want to see examples of what those are in JavaScript, this repository is really good for that.

My final pick, because I just played around with it this last week, would be 'The Serverless Framework', which used to be called JAWS. I'm a huge proponent of building statics sites, with no server behind them, just static files. But once in a while, you do need some service side functionality, and the idea that you can just an AWS Lambda to add a tiny bit of functionality, where you need it is really cool. Of course, AWS is a complex beast on it itself so this framework makes it easier to get set up with that, and I had a good time with it.

**DAVE:&nbsp;** Great! Berkeley, what are your Picks?

**BERKELEY:&nbsp;** Sure, my first pick is a blog. I think it's just titled 'Ben's Blog', not this Ben but another Ben - Benoît Vallon. It's a really great blog that has specific posts on data structures with all the examples written in plain JavaScript. He use five JavaScript. I shared this with a couple of people, and I think, they really enjoyed it. I know, I really enjoyed it. Especially, when I needed to implement something like this.

My second Pick would be Isaac Asimov's Robot Series so this is The Caves of Steel from 1953; The Naked Sun, 1955; and Robots of Dawn, 1983. I think, this is like a really great series and not a lot of people know about. This is where the Three Laws of Robotics originally came from.

My third pick is a video from Vsauce. It's a video on Zipf's Law. I think, it's really interesting to see all of these patterns that have come out and some of the explanations about these patterns, and what they might mean and imply with about human language and the way humans think in general.

**DAVE:&nbsp;** That is a really cool video.

**BEN:&nbsp;** I second that pick.

**BERKELEY:&nbsp;** Yes.

**DAVE:&nbsp;** Okay, so for my picks today, I'm just going to pick one thing which is a little bit off the beaten path for me but still, at least computer related. I've been programming for about 15 years straight now, and my hand started hurting for the first time in my life as a programmer. This actually made me really nervous so I decided to buy an ergonomic keyboard and I got this thing called a Kinesis Advantage. It basically took my hundred word per minute typing rate down to like ten words per minute. But after about three or four weeks, I'm back up to about 80 and my hands feel great. So I wanted to pick that. It's kind of a pricey little keyboard but it is really, really nice on my hands.

**BERKELEY:&nbsp;** I actually been trying to snag one of those on eBay for about three weeks. It go really fast. Just to interrupt. One of the thing that I did when I started feeling wrist pain is just hanging from a bar. You know, open hand hanging and just stay there as long as you can. Stretches out your spine and your arms. It's really great for that.

**DAVE:&nbsp;** Oh, cool idea. Right on. Well, thanks guys. It was awesome having you on the show, Ben, Ian and Berkeley.

**BEN:&nbsp;** Yes, thanks for having us.

**DAVE:&nbsp;** All right. That's a wrap.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Do you wish you could be part of the discussion on JavaScript Jabber? Do you have a burning question for one of our guests? Now you can join the action at our membership forum. You can sign up at JavaScriptJabber.com/Jabber and there you can join discussions with the regular panelists and our guests.]_**
