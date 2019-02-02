---
layout: layouts/post.njk
title: >
  268 RR Mazes For Programmers with Jamis Buck
date: 2016-07-13 07:00:53
episode_number: 268
duration: 47:45
audio_url: http://media.devchat.tv/ruby-rogues/RR268MazesJamisBuck.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## Check out [Angular Remote Conf](https://allremoteconfs.com/angular-2016) and [React Remote Conf](https://allremoteconfs.com/react-2016)

&nbsp;01:55 - Jamis Buck Introduction

- [Twitter](https://twitter.com/jamis)
- [GitHub](http://weblog.jamisbuck.org/)
- [Blog](https://github.com/jamis)
- [Medium.com: Jamis Buck](https://medium.com/@jamis)
  02:57 - Mazes
- [Mazes for Programmers: Code Your Own Twisty Little Passages by Jamis Buck](https://pragprog.com/book/jbmaze/mazes-for-programmers)
- [3.5 Random Dungeon Generator for D&D](http://www.myth-weavers.com/generate_dungeon.php)
- [Mazoo!](http://mazoo.jamisbuck.org/)
  08:01 - Programing can be fun?! Play
- [Jamis Buck: Second Wind @ Mountain West Ruby 2016](https://www.youtube.com/watch?v=71suekjBV9Y) (Talk on burnout)
  11:49 - Historical and Traditional vs Technical Mazes13:51 - Jamis’ Backstory with Mazes; Algorithms
- [Hunt-and-Kill Algorithm](http://weblog.jamisbuck.org/2011/1/24/maze-generation-hunt-and-kill-algorithm)
- [Wilson's Algorithm](http://weblog.jamisbuck.org/2011/1/20/maze-generation-wilson-s-algorithm) &nbsp;
- [Eller's Algorithm](http://weblog.jamisbuck.org/2010/12/29/maze-generation-eller-s-algorithm)
  21:14 - Discovering Algorithms
- [Think Labyrinth](http://www.astrolog.org/labyrnth/maze.htm)
- [Neo4j](https://neo4j.com/)
  28:01 - Varying Algorithms
- [AST (Abstract Syntax Tree)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
  36:38 - Writing a Book
- [Gödel, Escher, Bach: An Eternal Golden Braid by Douglas R. Hofstadter](https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567)
  39:16 - Text App for Generating Mazes
- [ASCII](https://en.wikipedia.org/wiki/ASCII)
- [ChunkyPNG](http://chunkypng.com/)
  &nbsp;Picks
- [The Walking Dead](http://www.amc.com/shows/the-walking-dead) (Sam)
- [The Codeless Code](http://thecodelesscode.com/contents) (Coraline)
- [Jurgen, A Comedy of Justice](https://en.wikipedia.org/wiki/Jurgen,_A_Comedy_of_Justice) (Jessica)
- [Feeling sad about tragedy](https://youtu.be/toap7iPpTbs) (Jessica)
- Completely Disconnect (Chuck)
- Being Outdoors (Chuck)
- Shooting Firearms (Chuck)
- [Productive](http://productiveapp.io/) (Jamis)
- [Kerbal Space Program](http://kerbalspaceprogram.com) (Jamis)

### Transcript

**CHUCK:&nbsp;** Pull out your knitting project.

**_[This episode is sponsored by Hired.com. Every week on Hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the Ruby Rogues link, you’ll get a $2,000 instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**_[I’m excited to tell you about a new sponsor to the show, Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to debug issues, or a million alerts flooding your inbox ruining your day. With Rollbar’s full-stack error monitoring, you get the context and insights and control you need to find and fix bugs faster. It’s easy to install. You could start tracking production errors and deployments in eight minutes or less, or automatically create new issues in GitHub, JIRA, Pivotal Tracker, etcetera. They have a special offer for Ruby Rogues listeners. Go to Rollbar.com/RubyRogues to sign up and get the bootstrap plan free for 90 days. That’s 300,000 errors tracked free. Give Rollbar a try today. Go to Rollbar.com/RubyRogues.]_**

**CHUCK:&nbsp;** Hey, everybody and welcome to Episode 268 of the Ruby Rouges Podcast. This week on our panel, we have Sam Livingston-Gray.

**SAM:&nbsp;** Hello from Cape Cod.

**CHUCK:&nbsp;** Coraline Ada Ehmke.

**CORALINE:&nbsp;** Hi from Chicago.

**CHUCK:&nbsp;** Jessica Kerr.

**JESSICA:&nbsp;** Good morning!

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv. Quick reminder to go and check out. I've got Angular Remote Conf and React Remote Conf coming up. We also have a special guest this week, and that's Jamis Buck.

**JAMIS:&nbsp;** Hello!

**CHUCK:&nbsp;** Now, Jamis, you've been on the show before, I think. Do you want to introduce yourself again real quick, though?

**JAMIS:&nbsp;** Sure, I'd be happy to. I'm Jamis Buck. I write software. I'm like most of the people listening to this, I'm sure. I enjoy mazes and recreational programming, and I'm currently living in sunny Smithfield, Utah, while my wife goes back to school.

**CHUCK:&nbsp;** Smithfield, that's up by [inaudible] isn't it?

**JAMIS:&nbsp;** It is. It's north. It's closer to Logan.

**CHUCK:&nbsp;** Oh, okay. Ah, the Utah Connection. Awesome. The first time I heard of Jamis, I was actually working at BYU and somebody talked to me about Ruby and then somebody else, when I mentioned it to them, talk to me about Jamis. Then, things moved on. I joined the Utah Ruby Users Group, and it turns out that Jamis is one of the people that started that.

**JAMIS:&nbsp;** That's right. That was a long time ago, ancient history.

**CHUCK:&nbsp;** Yeah, and then, there have been other connections over the years and conferences and things but I'm super excited. I love talking to Jamis. Always doing interesting things, and this week we're going to talk to you about mazes.

**JAMIS:&nbsp;** Yeah, let's do it. Mazes are awesome. I have been in kind of love affair with mazes for 20 years. This starts in high school, and then, of course, I have the obligatory fascination with Dungeons and Dragons. I wrote several random generators for the 3.5 edition of Dungeons and Dragons, including a random dungeon generator, where I dusted off my maze skills for that.

I've been playing with them various and different times and places. It's just been a lot of fun, like there's so many different ways to vary them, and experiment with them. It's just like this bottomless rabbit hole. I was going to say pit, but that's not very pleasant.

**CORALINE:&nbsp;** I remember in my early days of DnD, I've been playing some time ago when I was a kid, and mapping was one of my favorite things. I loved drawing maps on graph paper. When I was a player, I love the task of being the mapper, and that's something that's missing from the fifth edition games now.

**JAMIS:&nbsp;** Really? I haven't check fifth edition.

**CORALINE:&nbsp;** It's much more like tactical maps and you go and play map your surroundings so I think that was a really cool part of the game that we're [inaudible].

**JAMIS:&nbsp;** I agree. I've always love the maps, and probably because of the maze connection, but, yeah, just what's around the next corner or what could be in the next corner. I always love that.

**CHUCK:&nbsp;** I'm kind of curious. You seems like mazes- I don't know. I guess, I don't know enough about them to think that they're all that complicated.

**[Laughter]**

**[Cross-talk]**

**CHUCK:&nbsp;** -- Just one way through, right?

**JAMIS:&nbsp;** Sure. That's the thing. There's perfect mazes which are the one solution through the maze, but then you can play the 'what-if' game. What if there were multiple solutions through a maze? How do you take a maze with one solution and complicate it so that there's more than one solution, and what does that do to the ways you approach solving the maze? What happens when you stack multiple mazes on top of each other, and you have like the office complex instead of the flat, two-dimensional rat maze?

**CORALINE:&nbsp;** Like that in the office.

**JAMIS:&nbsp;** I think we all have.

**CHUCK:&nbsp;** I think my brain just melted.

**CORALINE:&nbsp;** Follow the orange wall, they said.

**[Laughter]**

**JAMIS:&nbsp;** There's so many different ways. Even when you're talking about generating mazes, like randomly constructing them, there's a least twelve different algorithms you can use for that and each has its different strengths and weaknesses and benefits and different ways to tweak it and play the what-if game. I guess, that's what I love about it is that it really is this huge field that you can do almost anything. You can do so many different variations of these things, so fun to play with.

**JESSICA:&nbsp;** Do you accept that constraint that mazes be like physically possible, like you could print them? Or if you're working the maze in the computer, can it be like physically impossible?

**JAMIS:&nbsp;** Physically impossible to?

**JESSICA:&nbsp;** To exist where rooms would be superimposed on each other, if it were in real space.

**JAMIS:&nbsp;** I totally think that's fine, like four-dimensional mazes for instance, where you can go forward and then move [inaudible] in the fourth dimension and then --

**[Cross-talk]**

**JAMIS:&nbsp;** If you were to map that on the three dimensions, you might be standing in the same place but you're off by just that one fourth dimension. That's a lot of fun. You get that in games where they have like the portals and teleporter which can make very distant locations adjacent.

So, yeah, you add the fourth dimension. You could, you know, five, six, seven, however many dimensions, and it really does start become mind-bending and very difficult to display, but that's part of the challenge. It's trying to think how you can take this data structure and render it in a way that makes sense.

**SAM:&nbsp;** Yeah, I'm not even sure how I would go about trying to solve a five dimensional maze.

**JAMIS:&nbsp;** I create a little program, I called it Mazoo just because it had maze in it but since discovered, it's a popular phrase in Spanish Twitter, apparently. But you do solve the four-dimensional mazes. Just top down, looking at the maze from above kind of move around in it. That's been a lot of fun. Mazoo.JamisBuck.org is where it is supposed to right now. That was my experiment to see what does it take to navigate and display a four dimensional maze. That was my what-if game.

A lot of mazes are just playing, especially as I was working on this book that I wrote, I would be researching some topic and I'd think, "Well, that makes me wonder about this," which I don't necessarily want to put in the book, but I'm curious about and so then, I would spend a day tinkering and writing code, and come up with something that might be cool and might not be, but it was fun. That was huge for me.

**SAM:&nbsp;** Wait, are you saying that programming can be fun?

**[Laughter]**

**JAMIS:&nbsp;** Programming can be so fun. I came to programming because it was fun. I guess, I was, I don't know how far back you want to go, but anyway, in high school, my mom got our first computer. I had vague memories of playing with BASIC back in elementary school computer classes. I just started playing it. I just started experimenting and putting things together, and making interactive fiction, go fish games and whatever. I did it because, you know, go back to Dungeons and Dragons, it made me feel like a wizard like I had this magic power and I could make the computer do stuff. It was awesome.

**CHUCK:&nbsp;** I think it's interesting you bring that up because for me, I kind of have the same feeling about programming, or at least I did when I started. Sometimes, it's easy to forget that and think, "Oh, I have to build something that's useful that fits the parameters that I'm getting from my client or my boss," instead of realizing that, yeah, I can do something that's totally pointless, that just stretches my brain in a way that I find it enjoyable. That's all it has to be.

**JAMIS:&nbsp;** Totally. You know, I feel like corporate culture has a tendency to destroy the sense of wonder that prod a lot of us to software development because of those deadlines and we are constantly working towards some overarching purpose. But there's been a lot of research done about the importance of play for children, and how that affects their development. I think we forget that play is also incredibly important as adults that it keeps us fresh and it keeps us creative. Even in corporate culture, it helps us approach problem solving in new ways and helps us think of new ways to accomplish the task that we've been asked to do. If we aren't staying fresh, we get stale.

**CHUCK:&nbsp;** The other thing is you give a talk at Mountain West Ruby Conference on burnout, and I think the two are related. I still haven't had a chance to watch the talk. But one of the things that I really enjoyed when I got started with programming was the discovery process. I found that I'm finding that again when I play with things like Elixir or iOS development with NativeScript or Swift. It's really just, "Oh, I can make this happen on the phone, like it doesn't have to be anything major. It's like I made this button show up and when I tap that it does something," and, yeah, it's that sense of, "Oh, wow! There's this possibility. Oh, the world has opened up larger for me because of this."

You know, harkening back to the topic of burnout, I was so burned out for a while and just finding something new to go and explore and play with, and you know it could have been useful? Certainly! Can I build an app that people will want to use? Yes! But for me, it was more about the process of figuring out what the possibilities were in the world, as opposed to doing the same thing that I've always done just to get the work done.

**JAMIS:&nbsp;** Absolutely. I think, all of us, either have gone through burnout at some point or will go through burnout at some point, it seems to be part of the natural cycle of many professions. But I think software developers are prone to it in a lot of ways, and play is such an important factor of coming out of that.

Like you said, back in 2015, I was coming out of some burnout myself. One of the things I did to work through that was I wrote a short novella online. Just quirky, playful, not serious, exploring maze, not this generation algorithms, but pathfinding algorithms, like finding ways through mazes, and it was a lot of fun. It really got me thinking, you know, playing the what-if game, and thinking about programming in ways that I hadn't in a long time. It was really valuable.

**CORALINE:&nbsp;** So, Jamis, mazes have a long history in human civilization, going back at least 4000 years. Do you think you are taking advantage of some of the meditative aspects of working with mazes through your technological work with mazes?

**JAMIS:&nbsp;** It's an interesting point. I don't like to solve mazes with pen and paper. I don't have the patience for that. That's not the part I enjoy. So the traditional use of a maze as a meditative tool is to follow the maze, either on paper, or to actually walk the maze, like in a garden or something.

But for me, the fascination is more technical, I guess, like to think of what makes this maze different than another maze, or what are some of the characteristics of this particular maze? Like how many corridors or horizontal versus vertical, and what's the ratio of perpendicular intersections? I get into that kind of analysis. But in the same sense, it is a mindful tool, even approaching it that way, like the focus and the concentration. I think there is something to that. Not that I would say I go to it for that purpose, but I think I do get something out of it like that.

**CORALINE:&nbsp;** I think you did good to it for that purpose in 2015 when you burned out and decided to focus on mazes. I think, although historically, as you said, it's walking the maze, it's solving the maze, being the architect of a maze, I think can be that same meditative experience. It seems like that's what [inaudible].

**JAMIS:&nbsp;** I could be. I wouldn't argue. That definitely wasn't a conscious decision. I tried a lot of things in 2015. My wife and I tried some different business ideas. I tried to do hobbies but it's interesting to me that I did keep coming back to mazes, which has been the fascination of mine for a long time.

**CHUCK:&nbsp;** I am kind of curious. How did you wind up come into mazes in the first place?

**JAMIS:&nbsp;** It was back in high school. In my junior year, we had an Italian exchange student, his name was Stefano. He was as into computer programming as I was. We were in a small high school. There was no computer programming course. There was a computer science class but it was word processing and learning how to use WordPerfect at the time.

The teacher was pretty open-minded and he saw that Stefano and I were really interested in programming aspect of it so he handed us a Turbo Pascal manual and said, "Go for it," and so he and I kind of made our own curricula. One of those things was trying new things and experiment and show each other what we were doing. I remember coming to school one day, sitting down in class, and Stefano say, "Hey, come here."

Having come over and look over his shoulder and I watched as he showed me this program that generated a maze. I didn't even know you could do that, and it totally fascinated me and he showed me the code and how it worked. In retrospect, I can look at it and say, "Oh, it was a variation on hunt and kill algorithm," and that was kind of my go-to algorithm for a long time. But that's kind of the beginning of it all. That's where I first saw a maze is generated and really fell in love with it.

**CORALINE:&nbsp;** These maze generation algorithm, they mainly coming from academia?

**JAMIS:&nbsp;** Many of them are. That's the thing: mazes are very mathematical. Like graph theory. Like that is really what underpins all of mazes. Talking about graphs and connectedness and trees and things like that. There is a lot of research going back years and years on this, and so you've got algorithms like Aldous-Broder and Wilson's algorithm which comes straight out of academia because they focus on what are called minimum spanning trees, which is a special kind of - no, not minimum spanning trees. Sorry, minimum spanning trees, that's what a maze is. It's spanning tree specifically. But uniform spanning tree. That's what I'm looking for.

The idea being that if you have a grid, you can make a huge number of different possible mazes on it, just changing which nodes in that grid are connected or not. Any of those is going to be a spanning tree because it spans the entire grid. A uniform spanning tree is going to be one that is selected uniformally from the pool of all possible spanning trees. As you can see, it get very mathematical. There's been a lot of research under these uniform spanning trees and Wilson, Aldous and Broder were three researchers and they came up with algorithms for generating these uniforms spanning trees. That's an example that comes straight from academia.

Others though, come from like game development. There's an algorithm called Eller's which is dealt by a guy named Eller. I'm sure he has an academic background, but his purpose was not researching these graphs and everything. He was just trying to find a way to generate a maze with certain properties. So there are some that are very academic, some that are more practical, but all of them have a very strong mathematical background, and can be described mathematically and improved mathematically.

**CORALINE:&nbsp;** Do you find that helpful in transcending it into code? Or is that more of an impediment?

**JAMIS:&nbsp;** It is kind of orthogonal to that, like it's interesting to me. I am not a mathematician but I do enjoy some of the theory behind mazes. For me, though, it's more about play, really. Like you tell me an algorithm and part of me is like, "I wonder how that can be true," and I've gone and I've read like the paper that introduces all these Broders algorithm. It's tough to read. It's not something I enjoy reading. I enjoy sitting down at the computer and thinking through an algorithm and trying to implement it. The proof really has no application at that point for me, and maybe it would, for someone else. Maybe someone else would be able to optimize an algorithm because they knew how it worked mathematically but that's not me.

**CORALINE:&nbsp;** I once found an amazing book. It seemed amazing. It was a book of algorithms inspired by nature. Best of all, all of the code examples were in Ruby. I was super excited about this book, and then, I made the mistake reading it.

**[Laughter]**

**CORALINE:&nbsp;** The Ruby code was the worst that I've ever, ever, ever seen. It was not object-oriented. It is procedural. It had single character variable names, it used the wrong kind of loops, it was just like the least standard Ruby that I'd ever seen, and it made me so sad. That kind of turned me off to a lot of the academic approaches to algorithms because either they're unapproachable or the code is so bad that I just don't feel right using it.

**JAMIS:&nbsp;** That's actually a big reason why I did my book in Ruby because that's the language that I use most comfortably. I am familiar with idiom. I'm familiar with best practices, like I hate that phrase. I felt a lot of pressure to do it in another language like C# or C++ where more of the gaming developer community is going to be using that. But I feel I would slaughter it like you're describing happened with Ruby.

**JESSICA:&nbsp;** I thought, you wanted it to be fun.

**JAMIS:&nbsp;** Exactly, and Ruby is fun. It's totally fun. But I have gotten some pushback from other people who saw the book and they're like, "What the heck? Ruby? Why Ruby?" and they walk away from it, which makes me sad. But really, I don't know what the developer might have done in the case of the book you've mentioned, Coraline. But I think, just having a reviewer helps a lot.

**CORALINE:&nbsp;** I think the problem was that the person who wrote it was not a developer.

**JAMIS:&nbsp;** Oh, okay. Academia, maybe?

**CORALINE:&nbsp;** Yeah, exactly.

**JESSICA:&nbsp;** There's a problem with the sciences. The scientists, the grad students, and the researchers, they really need programming. But that's not part of their curriculum and so they just have to scrape up the knowledge on their own. It's really tough to get those industry-wide practices and idioms until you really dedicate yourself to programming. But when programming isn't your job, it's just a really efficient way to get your job done, that's harder.

**CORALINE:&nbsp;** Pay for collaboration.

**JESSICA:&nbsp;** Yeah, exactly. Like a reviewer who was a developer, kind of made all the difference for that book.

**JAMIS:&nbsp;** I mean, even me, where I've been coding in Ruby for 15 years, my reviewers were still invaluable to me to suggest better ways to do this, or maybe find a clearer way to do that. In the end, I think it came out really well. Probably, in a large part because- I mean, I say at the front of my book that I am not a mathematician, and I'm going to avoid math-speak and proofs and really, I wanted to focus on the fun and how mazes can be fun. I think that influenced a lot of how the code came together and built on itself, because you know, mazes are fun. That's what it comes down to.

**CHUCK:&nbsp;** Let somebody does pick an area that they want to go and play in like this. How did you go about discovering what some of these algorithms were? Did you just kind of train, make some up on your own? Or was it all, "I hear about this one and here's how it works, and I'll go build it"?

**JAMIS:&nbsp;** Well, for a long time, I only knew this hunt and kill algorithm, which the idea is you have a grid and you start somewhere. You just pick a starting point randomly and then you do a random walk, which means you just choose north, you go north and then west and then north and then east and east and southeast. You just pick a random path through it until you dead-end, until you can't go any other way.

At that point, you switch to hunt mode, and you go to the top and you hunt for a location - a cell - that is not visited but is adjacent to a cell that is visited and then you pick it up from there, and you just do that over and over until the whole thing is filled. So that's hunt and kill.

For a long time, that's the only one I knew. So I wanted to do an article about it, back in 2010 on the blog so I wrote a post about hunt and kill. As I was doing that, I did some research and I came across a site called 'Think Labyrinth!' It's a site by Walter Pullen, and he has written some software called Daedalus which is Windows only so I've never actually used it but it's pretty amazing from the description. It does everything maze-wise. He's also got a site, a few pages on there that describe maze algorithms, and he doesn't describe the implementation of them. Just how they work. So that was a good jumping off point for me to say, "Oh, okay, let's jump into this. Let's see if I can figure out this algorithm, Binary Tree, or Sidewinder, or Eller's algorithm, or any of those."

That series of blog posts that I wrote in 2010, 2011 really where the core of me discovering all these other algorithms, and playing what-if, like working out and going, "How does this one work? How do I implement that? What if I do it this way? What if I do it that way?" and it was a lot of fun.

**SAM:&nbsp;** I found it interesting looking through the framework that you came up with for the book of a grid that contain cells and wires those cells together because, I don't know, probably about ten years ago, I was working on a project in college, and I wound up with more or less the same structure that you had but I had come out with a different goal which was to explore the concept of modeling diffusion. It was just kind of funny how to noticed how the arrangement have gravitated to that same sort of shape because that's kind of what you get when you think about these things.

**JAMIS:&nbsp;** Yeah, great minds think alike, or great grids look alike, or something.

**[Laughter]**

**SAM:&nbsp;** It was interesting to see the fundamental shapes, sort of like poking through.

**JAMIS:&nbsp;** Well, it's interesting because when I was writing the blog posts back in 2010, 2011, I think, I was focused on accomplishing it a different way. If you read those articles, I do a lot of bit manipulation. Each cell is an integer and the connections are the bits between them and so it was pretty low-level, which lets you do it pretty efficiently in a lot of ways.

But I've really found that if you model the actual cells and the connections between them, the algorithms shine through really, really well. That made the book a lot easy, it made the code a lot easier to explain in the book. It's a lot more flexible in a lot of ways.

**CORALINE:&nbsp;** I can see a lot of implications for using a graph database for [inaudible] the information about the cells and their connections to each other. Have you experimented with something like Neo4j for that?

**JAMIS:&nbsp;** Not for that. That's interesting. I've played with Neo4j a couple of times on other things. But, yeah, you've got me wondering now, because all the maze is, like you said, it's a spanning tree so it's just connections between cells and you get a different maze depending on how you build or remove those connections.

**CORALINE:&nbsp;** Yeah, I built a rudimentary- I don't know if it qualifies as a maze. I have this IRC bot that I was trying out. It was like my playground for a long time. Her name is Alice. One of the things built into Alice was a sort of copy of the 'hunt the Grue' game from the old days. There was a series of rooms. In every room had a series of exits so rooms were connected to one another, and there was stuff in each of the rooms. Some of it was like for interacting with non-player characters that you could talk to. Some of it were items that you could just collect for the fun of it. Some of them are weapons, and some rooms were dark, and if the room is dark, there be a chance that a Grue would be in the room. If you didn't have a weapon, then the Grue would eat you and the maze would reset. You'd be assigned the cursed fruit cake.

**[Laughter]**

**CORALINE:&nbsp;** I found that just keeping track, it was generated on the fly so as you moved east, I would create a new room to the east and decide where the exits would be, and it was really, really complicated keeping track the neighbors in a given room. Have they've been seen before? What the connecting exits would have to be? That was non-trivial. I was actually surprised.

**JAMIS:&nbsp;** Yeah, I'd be curious to hear more about how you went about that because I described twelve algorithms in my book but I think, everyone can come out of a different way and come up with new ways of thinking about how these are built and generated. Every single one of them has different strengths and different challenges. I love hearing about how people come up with ways to generate mazes because it is fascinating to see how their thought process arrived at it.

**CORALINE:&nbsp;** I'm sure, I did in the most primitive, most naive, most expensive way possible. I was really proud of the fact that Alice were generated as [inaudible] of the map, as it was explored. So from IRC, you can enter a map command and Alice were given the URL and you [inaudible] the map. You see it laid out graphically, and you can mouse over the rooms and get the description of its contents. I really like that so you can kind of retrace your steps. It's a fun exercise.

**JAMIS:&nbsp;** Cool. The fun is the keyword for that. Like I hear that and I'm like, "It would be fun," and for me, the fun would be on developing of it, more than actual playing of it.

**CORALINE:&nbsp;** I think that's the case. It was a novelty for the first couple of weeks that she had that feature in the past year, couple of windows when she used the maze functionality, except me.

**CHUCK:&nbsp;** I wonder a little bit, Jamis, if you're worried that- because I've seen people that get into some problems space like this and they realize somebody else has already been there and done it. Do you worry that some people are going to get into this and then go, "Oh, but Jamis has already done mazes so I'm going to do something else."

**JAMIS:&nbsp;** I don't. Because it's like saying, "Chuck's already done programming so I'm going to go --" like there's no point.

**SAM:&nbsp;** Everybody else is breathing oxygen so --

**JAMIS:&nbsp;** Right. As I was working on this book, it struck me that there are an infinite number of ways to vary these algorithms. You could play with each one of them for days and days and days, and yes someone else might have played with it in similar ways. But you're going to come at it from a different perspective than someone else would. You might think of a novel way to display the maze, or a novel way to generate with some feature attribute by varying the algorithm in some way. It's a playground. It really is. It's like, "If someone's already on the monkey bars, we'll go play on the swings. You know, go run around in the bark chips for a while and just find an area that interests you and it doesn't matter if there's other people playing there or not."

**SAM:&nbsp;** I must feel like the premise of that attitude, too, is the idea that it's not worth doing if you're not going to be the first and you can't tack your name on it. Whereas, I feel like the point of playing with this kind of thing, or whatever catches your fancy is not so much what you bring to the field, but what the field does to your brain, and what thinking about this stuff gets you.

**JAMIS:&nbsp;** Absolutely. I think that's an awesome way to put it. Because it is play. It's just play and if you're doing it for recognition, it's rapidly going to stop being fun. There's room for that, like if you want to come up with some maze algorithm, and get it published in a journal somewhere, then go for it. But there's so much room for just playing in these for the fun of it.

**SAM:&nbsp;** I think we're just captured extrinsic versus intrinsic motivation.

**CHUCK:&nbsp;** Yep. I'm also wondering you've mentioned that there are infinite ways to vary these algorithms so you get to the point where you're like, "Yeah, I'm not enjoying mazes as much as I did because I've been doing it for a while," Or because, "I don't feel like there's enough new that I haven't explored yet," and then you move on to something else?

**JAMIS:&nbsp;** Yeah. You know, honestly, after I finished my book, I kind of put mazes aside for a little while because I had been so immersed in it for like eight months that I needed a break. That's normal, right? Maybe, it's not normal for other people, but it's normal for me. I dive really deep into something for a brief period of time, and then I come out and I want to do something else.

For instance, there was a time where I was fascinated by Celtic knots. I was reading about different algorithms for producing Celtic knots. I wrote a prototype of a program that would generate and render Celtic knots, and got it kind of working and then moved on to something else.

I've played with chainmail, and I've played with- you know, I've done knitting, and I've done woodcarving. It all kind of comes and goes for me but it all kind of adds to who I am, and these are part of that, too. I keep coming back to mazes and then I keep get away from them, but they're there now. They're part of my tool box. Part of my playground.

**CORALINE:&nbsp;** I'm curious if you've limit yourself to implementing known algorithms or if you've ever said, "I'm going ignore the mass on this. I'm going to ignore the algorithms on this, and I'm just going to try something and see where it leads me?"

**JAMIS:&nbsp;** I have. I've done kind of a hybrid, too. there's been a couple of algorithms that I've done where I've taken an existing algorithm and said, "What if we did it a little differently?" and I've come up with some novel ways of approaching maze generation.

There's other times where I'm less successful at this. I'll say, "This is the kind of maze I want to end up with. How do I generate that?" Like I said, not everybody successful at that but I guess maybe I'm not that kind of a programmer, as much as 'experiment-ly', what's the word? To take something that already exists and change it into something else. But both ways are fun and I take conversation with people --

**JESSICA:&nbsp;** You've mentioned two different ways of exploring there. One was start with something and find out what happens if you do it, and the other was start with the goal and try to get there. I think, it's kind of inherent in play to start from what happens if I do this, as supposed to, "I want to get there," where you typically have a goal that you need to try to get to. That's not nearly as much fun and it's also not as easy, and you don't get as many cool surprises.

**JAMIS:&nbsp;** You're right. I think, both of them have benefits. And it depends on your personality. You know, which one you're going to gravitate to. Some people are the inventors and some people are the tinkerers. I think, I'm a tinkerer, and I find a lot of joy in digging deep into the internals of something and seeing how it works. Then, saying, "What if?" I love playing 'what-if'. Like just in Ruby.

Recently, I've been digging into the syntax and looking at something and saying, "Oh, okay, well, what if we do it this way?" I wrote a post recently. It says, "IF statements in Ruby are actually expressions, and the condition for an IF statement is an expression, so what if you put an IF statement in the condition of an IF statement, what happens? What does that mean?" and I kind of followed that rabbit hole. I --

**SAM:&nbsp;** [Inaudible]

**JAMIS:&nbsp;** Yeah. But that's the kind of exploration I really enjoy right now.

**CORALINE:&nbsp;** For some reason, I just got the idea of generating a maze based on the AST of program.

**[Laughter]**

**[Cross-talk]**

**CHUCK:&nbsp;** -- On the AST of your maze program.

**[Laughter]**

**SAM:&nbsp;** That would be awesome.

**JAMIS:&nbsp;** That would actually be a really cool way to think about a computer program.

**CORALINE:&nbsp;** Yeah, you can actually code the entire thing as a maze.

**JAMIS:&nbsp;** As a maze, yeah. See, I'm not going to be able to sleep tonight because I'm going to try to think about how you would do that.

**CORALINE:&nbsp;** And for listeners who don't know. AST is an abstract syntax tree. It is a tree-based view of the logic of your program. It's an intermediate step between the interpreted language and compiling it down into something the machine will understand.

**SAM:&nbsp;** Yeah, and it's a data structure that you can use either to generate a compiled representation of your program, or to interpret it on the fly.

**JAMIS:&nbsp;** You know, it's interesting to think about an abstract syntax tree, and how you execute and an AST like interpreted by following the nodes down. It's got a lot of similarities to navigating a maze because a maze is a tree and that got me thinking.

**SAM:&nbsp;** [Inaudible] or you make your computer crash.

**[Laughter]**

**JAMIS:&nbsp;** For this code review.

**CORALINE:&nbsp;** I want to see a maze with a race condition.

**[Laughter]**

**CORALINE:&nbsp;** Well, if you end up doing that, tweet at me because I would love to see that.

**JAMIS:&nbsp;** Yeah, well, likewise. I'm puzzling through like what that would mean.

**CORALINE:&nbsp;** I've given you food for thought and --

**JAMIS:&nbsp;** You have. That's the thing with mazes though, because trees are such a ubiquitous data structure in computer programming. We use them everywhere, whether we think about it or not, mazes can turn up in surprising places. Fractals, you know, like three-based fractals, you can wind up with mazes that get progressively finer and finer resolution. You open a door and go into a room and boom! There's another maze. You have to traverse that and boom! You've find another room with another maze in it and just keeps going down and down. There's so many different ways to think about these.

**CHUCK:&nbsp;** You should written your book as "You choose your own adventure".

**[Laughter]**

**JAMIS:&nbsp;** Dang it! You're right!

**SAM:&nbsp;** Those have cycles, Chuck.

**[Laughter]**

**CHUCK:&nbsp;** But, hey, speaking of books, I was curious and I'm always curious when I talk to somebody who's written a book. Everything that I've ever heard suggest that writing a book is this grueling thing. I've noticed for example, that everybody who is married and writes a book make sure to call out how loving and supportive their spouse was. So, I'm wondering, like what to you is so important about this that you wanted to go through that? Or did you just not realize the implications before you start it?

**JAMIS:&nbsp;** Well, it's like having children. Going into it, you hear it's going to be hard, and you hear it's a lot of work. You hear it's great, too, so you kind of go and thinking you're prepared and you're ready. You're just never ready for the reality.

Going into it, like I said, I tried a lot of things that summer. I wrote the Basil & Fabian novella about pathfinding algorithms. I really found that I enjoyed that process, and kind of remembered the maze posts that I'd written, and some encouragement I'd had to turn them into a book. I wasn't employed at the time so I have taken a year off. So, I thought, yeah, I should have some time to write a book and so I did. It was a lot of work. I'm glad I didn't have a job. My head is off to anyone who writes a book while working and raising a family because it was hard enough just raising a family and writing a book. But it was what I needed therapeutically at that point, to rediscover what I loved about programming.

**CORALINE:&nbsp;** Please tell me you're inspired in part by Gödel, Escher and Bach by Douglas R. Hofstadter and how he fictionalized math and science.

**JAMIS:&nbsp;** You know, I wish I could say that. That is on my bucket list to read and I haven't read it yet.

**CORALINE:&nbsp;** I read it like every ten years, and I always get something new from that book, and it was really inspirational to me to get started in this field.

**JESSICA:&nbsp;** -- Take ten years to read it?

**[Laughter]**

**CORALINE:&nbsp;** No. Well, you probably could if you wanted to.

**JAMIS:&nbsp;** I need to read that book. I think, this is the motivation I need to actually purchase it and read it.

**CORALINE:&nbsp;** And I'm going to come back around to Gödel, Escher and Bach in my Picks today. I planted the seed. This is a Chekhov's gun, I guess.

**CHUCK:&nbsp;** All right, well, speaking of Picks. Should we go ahead and go to Picks?

**CORALINE:&nbsp;** Was there anything else you wanted us to cover before we go to Picks, Jamis?

**JAMIS:&nbsp;** I think we've covered it all pretty well. I don't think there's anything specific.

**CORALINE:&nbsp;** Oh, I did have one other question. What is your text stack for generating mazes? Are you generating it graphically, and if so, what tool are you using?

**JAMIS:&nbsp;** Oh, in the book?

**CORALINE:&nbsp;** Yeah.

**JAMIS:&nbsp;** Well, we start by generating of it just ASCII, which works well for rectangular grids well enough. But then, I use ChunkyPNG, the library to generating PNG images which is pretty fantastic. It doesn't do arcs which I missed when I did the circle mazes, but for everything else, it's fantastic.

**CORALINE:&nbsp;** Awesome. I'll check that out. I've only use [inaudible].

**JAMIS:&nbsp;** Yeah, ChunkyPNG is- I can't recommend it enough.

**CHUCK:&nbsp;** Cool. All right. Well, let's do some Picks. Sam, what are your Picks?

**SAM:&nbsp;** I think, just one today. For the past couple of months, I've been on a bit of a zombie TV show and movie kick. So I watch The Walking Dead, and Z Nation which is for a sci-fi show, it's surprisingly good. That'd be from Syfy Channel, I mean. I recently watched Zombieland, as well. So they're all a lot of fun. But I think, out of them all, I have to give the nod to The Walking Dead. It's just this wonderful story. It is as bleak as can be. It's about the end of civilization, and it's really depressing, and people do horrible things in it. But for all of that, there are really interesting characters. I actually, somehow, really enjoy it. That's my pick for today.

**CHUCK:&nbsp;** Awesome. Coraline, what are your Picks?

**CORALINE:&nbsp;** I also just have one Pick today and it's something that I come across years ago, and just like rediscover. I'm absolutely in love with it. It is a website called The Codeless Code. It is an illustrated collection of fables concerning the art and philosophy of software development. The fables are nod to Zen kōans, but not near as inscrutable as true Zen kōans. The site was started in 2010 by a developer who goes by Qi, Q-I. Actually, he was inspired by the kōans and Gödel, Escher and Bach.

On average, he produces one new fable per week, and it's beautifully done and beautifully written and presented. I want to share my favorite one - The Three Most Terrifying Words. I'm not going to read it, only with synopsis.

"A developer in a monastery --" everything takes place in a monastery, "A developer is working on a production issue, and the senior monk approaches and looks over her shoulder and says, 'Ah, three most terrifying words,' and the novice, later that night, asks what those words are, and is told 'possible race condition'. That night, the novice has terrible nightmares and she awakens in a featureless desert, and nearby there's a map of the world, including its dessert. Inside, one desert was a red dot, pointed to by a tiny red arrow. Next to which was a tiny red writing which read, 'possibly your location.'"

**CHUCK:&nbsp;** All right. Jessica, what are your picks?

**JESSICA:&nbsp;** I have two Picks today. One is a book that I'm currently reading. It's a classic. It's called Jurgen, A Comedy of Justice by James Branch Cabell. It was written in 1919. It was like the source of some big scandal because it talked about sex a bit. Then, the edition that I was looking at was published in the 60's and it's classified as adult fantasy which is totally not what we would call adults fantasy now. But apparently, it's like set in a fantasy world. Looks like its own pantheon. But it's not for kids and that was apparently enough to classify it as adult fantasy back in the day. It's just really fascinating, and it's written a long time ago. But it's super interesting in its allegories and psychological insights. So Jurgen, that's my first Pick.

My other Pick is a video on YouTube by Vi Hart about two recent tragedies in Orlando, and aspects of our culture that contribute to that, and make it even sadder. The two 13-minute video, it takes me hours to process but it's very meaningful. The end.

**CHUCK:&nbsp;** All right. I've got a couple of Picks that I'm going to put out there. The first one - last week I was in Oklahoma for a family reunion, and we were on a property that actually had minimal cell service. Meaning that I occasionally can get a text message through. If you tried to call me, it would just tell you 'no', and if I tried to call out, it would tell me that I didn't have a connection that would work, and there was no internet. So for three or four days, I was just out there with no connection and whatsoever, and I have to say that it was very, very nice. So if you're looking for an opportunity to break up some of this burnout, having a complete change of pace, to the point where you can't even do the things that you would do, that even resemble what you normally do for work or whatever, it was really nice. I got to spend a lot of time with my family, and things like that. I'm definitely just picking out where you completely disconnect.

Few other things we did out there that were just fun is we went out on jet skis and there was a small lake there, a private lake. We were out on the jet ski, put the kids on tubes, and drag them around the lake. That was a lot of fun. Just being outdoors is another Pick.

Then, lastly we shot shotguns and rifles. My son shot his BB gun. Anyway, it was just a ton of fun, just getting out there and just shooting rifles and shotgun, so I'm going to pick that as well. Jamis, what are your Picks?

**JAMIS:&nbsp;** All right, I've got a couple Picks. One is the Productive App for iOS. It has changed my life, I have to say. I've been using it for probably nine months now. It is exactly the way that I need to think about scheduling my day. Calendars and planners have never done anything for me. Trying to schedule, when something's going to happen every day is like torture. I hate doing that. But Productive just lets me say, "These are the things I need to accomplish today," or each day. Specifically, it's about things you're going to do every day. It's about building habits. Some of the habits I put in there, I have done every day without breaking the chain for like seven, eight months. It's been really amazing.

The other Pick, it's kind of the opposite end of the spectrum, how to waste time - Kerbal Space Program is my crack. I seriously cannot stop playing this game. But it's such a great example of play as a way to learn, as a conduit for learning and discovery. It's an amazing program that lets you build your rockets and understand the science behind them, and plot trajectories. Really, it's pretty incredible.

**CHUCK:&nbsp;** That sounds fun. All right, Jamis, if people want to see what you're up to these days, what do they do?

**JAMIS:&nbsp;** I got a blog at Weblog.JamisBuck.org and I've also been writing medium lately. I'm on Twitter as Jamis so come talk to me.

**CHUCK:&nbsp;** All right. We will go ahead and wrap the show up. Thank you for coming.

**JAMIS:&nbsp;** Thank you very much. It's been fun.

**CHUCK:&nbsp;** All right. We'll catch everyone next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**
