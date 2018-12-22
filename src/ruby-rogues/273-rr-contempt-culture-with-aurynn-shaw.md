---
layout: layouts/post.njk
title: >
      273 RR Contempt Culture with Aurynn Shaw
date: 2016-08-17 07:00:11
episode_number: 273
duration: 56:34
audio_url: http://media.devchat.tv/ruby-rogues/RR273ContemptCulture.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

01:11 - Aurynn Shaw Introduction
- [Twitter](https://twitter.com/aurynn)
- [GitHub](https://github.com/aurynn)
- [Blog](http://blog.aurynn.com/)
- [Eiara](http://eiara.nz/)
01:56 - Contempt Culture
- [Aurynn Shaw: Contempt Culture](http://blog.aurynn.com/contempt-culture)
- [Impostor Syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome)
07:32 - “But PHP is objectively bad….”; True Objectivity
- [PHP: a fractal of bad design](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
10:35 - The History of The Contempt Culture in Tech Spaces12:40 - Reinventing Tools15:00 - “Intent is not magic.”
- [Shakesville: Harmful Communication, Part 1: Intent Is Magic](http://www.shakesville.com/2011/12/harmful-communication-part-one-intent.html)
20:09 - Contempt Culture in the Ruby Community Towards PHP21:56 - Why Contempt Culture Forms
- [WDCNZ](http://www.wdcnz.com/)
- [Luser](https://en.wikipedia.org/wiki/Luser)
- Power and Goodness
- [Noblesse Oblige](https://en.wikipedia.org/wiki/Noblesse_oblige)
- “Design is how it works.”
29:08 - DevOps and the Disruption of Culture32:34 - [Open Source](https://en.wikipedia.org/wiki/Open-source_software) vs [Free Software](https://en.wikipedia.org/wiki/Free_software)36:33 - Cultural Implications/Ramifications Around Open Source
- OpenSSL
- [Ruby Rogues Episode #144: Passion](https://devchat.tv/ruby-rogues/144-rr-passion)
41:32 - Service Culture
- [Actor-Observer Bias in Social Psychology](https://www.verywell.com/what-is-the-actor-observer-bias-2794813)
&nbsp;Picks
- [RODE PSA1 Swivel Mount Studio Microphone Boom Arm](https://www.amazon.com/gp/product/B001D7UYBO/) (Sam)
- [Design Thinking](https://en.wikipedia.org/wiki/Design_thinking) (Aurynn)


### Transcript

 **AURYNN:&nbsp;** I tried to start a podcast and it turns out it's really hard to start a podcast.

**SAM:&nbsp;** Yeah, that's why you hire Mandy.

**_[This episode is sponsored by Hired.com. Every week on Hired, they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It’s totally free for users. And when you’re hired, they give you a $1,000 bonus as a thank you for using them. But if you use the Ruby Rogues link, you’ll get a $2,000 instead. Finally, if you’re not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**SAM:&nbsp;** Hello and welcome to Episode 273 of the Ruby Rogues Podcast. I'm your host today, Sam Livingston-Gray. Today, the panel is just me. And we have a special guest, Aurynn Shaw.

**AURYNN:&nbsp;** Hello.

**SAM:** &nbsp; You haven’t been on the show before. So, do you want to give an introduction and tell us a little bit about yourself?

**AURYNN:** &nbsp; Sure. I'm Aurynn Shaw, as previously mentioned. I founded my own company doing this DevOps thing that you may have heard of about a year ago. And now, I do the DevOps thing which I've discovered is mostly talking to people instead of writing code or anything.

I've been a software developer for the last 12 years and I am an accomplished landscape photographer [inaudible] the last stages of publishing for the next book.

**SAM:** &nbsp; Very cool. It's funny, I always thought that DevOps was pronounced dev oops, but I guess today, I had been corrected.

**AURYNN:** &nbsp; It's pronounced hug ops because your ops people desperately need more hugs.

**SAM:** &nbsp; [Laughs] Wonderful. I like it even more now.

So yeah, I really wanted to get you on the show because of this blog post that you wrote awhile back called Contempt Culture. By way of introducing it, I'd actually like to tell a little story about something that happened to me about 10 years ago.

I was taking a class in Extreme Programming from Jim Shore who's an Agile person, who's here in Portland, Oregon. And he made this comment that wasn’t really part of the XP curriculum or anything, but it really stuck with me. He said that the first response of any developer when they sit down to work with code that they didn’t write is to throw up their hands and go, "This is crap! I can't work with this." And when he said that, it really struck me because I saw myself in that comment and I realized first off, that if this was a universal thing that it sort of validated my own experience. But then in validating it, it also made me feel really bad about it because I realized that I was not coming to other people's code from a place of empathy and understanding. And that really has informed ever since then, it's informed the way that I approach my code.

Reading your post was another one of those moments where I realized that I've been doing something that I wasn’t really thinking about. But that is one time called out on it, I realized is actively harmful. And so, that really meant a lot to me. I like having those moments. So yeah, I wanted to bring you on and see what you had to say. Do you want to try and summarize your blog post, to start?

**AURYNN:** &nbsp; Sure. My blog is called Contempt Culture and your example is really great with the developers coming into a new code base and saying, "This is garbage. I can't work with this." I have done that. I have done exactly that every time I've come into a project. I could think of, within the last four years, the number of times I have done that. And it makes me feel bad, just like it sounds like it made you feel bad.

Contempt Culture is kind of this idea that our communities are founded on the idea of presenting contemptuousness to things that are outside of our community. I first learned programming on Perl and at that time, there was a very strong bias against PHP on my literature that I was referring to while learning this language. The result to that was I'd internalized that we should hate on PHP because it is "objectively bad".

**SAM:** &nbsp; [Chuckles] Right.

**AURYNN:** &nbsp; And that’s really harmful to people who write PHP. And the people who write PHP are generally people from backgrounds that are not like mine. Where mine is, I grew up in a household with computers. My dad was a programmer, so I had access to all of this knowledge and to all of these things that most people don’t have access to.&nbsp; Whereas PHP is generally more associated with design backgrounds doing WordPress, doing simple websites.

So Contempt Culture is talking about how we do that in our communities. And that is how we [inaudible] both status and community respect.

**SAM:** &nbsp; Another thing that I took away from that was that it's how we pay for our ongoing participation in the cultures that we are in.

**AURYNN:** &nbsp; Right. We're demonstrating our in-group participation like we are part of the group. And if we stop doing it, we are signaling that we are no longer wanting to be a part of the group. We no longer believe that we belong. And other people will react appropriately, like, "You're not promoting this idea that the people outside of our group are bad, therefore maybe we don’t like you anymore. Maybe you're not welcome anymore." So it's kind of a [inaudible] cultural aspect of the things that we do.

**SAM:** &nbsp; Yeah. The way that you phrase that, it almost makes it sound like if you stop participating in this bashing down of other cultures, it's like you're going to be found out or ostracized for not being tough enough or something. Is that a fair way of putting it?

**AURYNN:** &nbsp; It really is, and you can see that kind of behavior really probably in something like Linux Kernel Mailing List which is a highly contemptuous space, as you possibly know.

**SAM:** &nbsp; [Chuckles] Oh yes.

**AURYNN:** &nbsp; And this feeds into Impostor Syndrome where if I'm not expressing that I'm good and by being good, I am expressing that through 'Oh, I know the right language. I know what languages are bad. Therefore, I have knowledge'. This creates Impostor Syndrome because you have to internalize these things and then feel bad that maybe you don’t understand why "PHP is bad".

**SAM:** &nbsp; But by creating that culture, it makes it okay to bash PHP. You don’t really have to think about it as long as you just participate, right?

**AURYNN:** &nbsp; Exactly. And as soon as somebody says, "Hey, that’s not cool," the response is very defensive because in a lot of these cases, as you mentioned, you haven’t thought about it. It's just part of the community. It's just normal. And that normalization of it is really kind of the entire point of calling it Contempt Culture.

A culture is what you do, right?

**SAM:** &nbsp; Yes, exactly.

**AURYNN:** &nbsp; So you can say, "Oh, our culture is inclusive and supportive." But you can say whatever you like, culture is what you do. So we do this thing, we don’t think about doing this thing. And the moment you're called on it, you have to think about, "What have I chosen to do?" And that moment of 'what have I chosen to do' means that all of a sudden, you're re-projecting yourself as 'am I a good person'. And you sound like you’ve been through that moment a couple of times. I definitely went through that moment about four years ago when I got called on the PHP thing the first time and suddenly had to re-frame my entire world. And that was hard.

**SAM:** &nbsp; Yeah, that cognitive dissonance can be an incredible load to even contemplate, let alone shoulder and work through.

**AURYNN:** &nbsp; It really is. I think that’s why I'm quite lucky that I didn’t see a lot of pushback on the Contempt Culture post. I got mostly positive responses. And then some negative responses I did see were oriented around "But PHP is objectively bad…" which I have an entire thing about why that is [bullshit].

[Laughter]

**AURYNN:** &nbsp; That I want to actually go through it at some stage and I can go through it here, if you like.

**SAM:** &nbsp; Sure. So, there was a blog post out there a while ago titled 'PHP as a fractal of bad design' which I personally really enjoy because it's a fun little sort of tear down and deconstructing different aspects of language design, but even baked into the title 'fractal of bad design', there's a judgment. And this whole phrasing of PHP being "objectively bad" is I find really quite laughable because first off, there is no true objectivity. There is no place you can stand and criticize a thing that does not carry its own bias and its own values and doesn’t encode, doesn’t [inaudible] argument. But yeah, even tearing that aside, there's a fantastic lack of empathy in making arguments like that, that really like you say, devalues the work of so many people.

**AURYNN:** &nbsp; It really is. As part [inaudible] my DevOps company recently, again I had to reframe myself that I should be supporting everything and PHP and Node and Python and Ruby, they're all roughly similar in terms of how you set them up [inaudible] web server and database and [inaudible]. This is all identical.

So, I attended a local Drupal meet-up and wow! Those people are great. They are accepting and open and empathetic and they're just like, "Hey, how can we help you? Look at this [inaudible] I did." It was wonderful. But what really stuck with me was that as a DevOps person, I'm aware of tools like Chef and Puppet and Salt and all of these things. All of the people there didn’t really know how to use them, that’s fine. But even the people concerned with deploying things didn’t know how to use them. Again, that’s fine. They're difficult to use tools. But they're reinventing the same tooling. And I was like, "Why are you doing that?" And I dug into that, and I've come to a set of realizations that I mentioned about: where does this idea that 'PHP is objectively bad' (a) comes from, and (b) how it's self-reinforcing.

What I noticed is that – going back to when I learned programming, so this would be late 90's/early 2000's, and the Perl community dumped on PHP and there's so much internet articles about how PHP is bad. At the same time, the C community was very similar dumping on Perl like, "Oh, that’s not real programming."

**SAM:** &nbsp; [Chuckles] Right. Now, real programming starts with getting sand from the beach and making your own [inaudible].

**AURYNN:** &nbsp; Yup. And inscribing your – how does it go? Real programmers use a magnetized needle and a steady hand.

**SAM:** &nbsp; [Laughs] There you go.

**AURYNN:** &nbsp; So, if you look at it though, a contempt culture goes back a very long way. And I have some other thoughts that I'd like to share as well. But in summary, the Contempt Culture goes back very far. And when the web came out, initially it was for tech people. And then the web was discovered by "normal" people. And people back then who didn’t have a programming or tech background were able to get into doing this cool new tech thing. It suddenly became 'html is not real programming'. And then Perl started to become the thing that you use to make CGI scripts and then Perl became 'but that’s not real programming, that’s scripting'. And then PHP comes out and PHP is much simpler than Perl in a lot of ways [inaudible]. And PHP gets that same 'but PHP is not real programming like we Perl developers do'. Okay, fine. We're all kind of assembling ourselves into a hierarchy.

But the secondary effect of that is when you enter a community that has an underlying contempt culture, and you say, "I'm working with this thing and I'm having this problem," you're not going to get useful responses. You're going to get 'why are you using that' which means you feel bad and then you leave.

**SAM:** &nbsp; Right. You are bad and you should feel bad because you chose a thing that is bad.

**AURYNN:** &nbsp; Exactly. But you're still trying to solve your problem and if everyone who's working with a given tool is getting that kind of feedback from the underlying contempt culture in the text base, what you end up with is they still need to share and talk and have help, so they find each other. They share things like code with each other. What you ended up with is things like PHP, the community formed around PHP and didn’t have access to "good programming" knowledge from the tech community which means that tech community people could immediately point it out and say, "Look, they're all terrible programmers. PHP must be bad." And it became a self [inaudible] prophecy. They said PHP was bad and they threw people out which made PHP bad.

**SAM:** &nbsp; You said something earlier about people reinventing their own tools for doing DevOps that remind me of something else that I've seen happen. I first noticed it when I came to Ruby which is that there's this tendency to take a tool that’s great in some other language and rewrite it in the language that you prefer because it's easier for you to think in those terms and to work with those tools because you’ve already got them installed.

And I think Rake for me is really the canonical example of this. Of course, it's been around for decades and Rake was envisioned, at first, as a way of doing things that were like Make but with a better syntax and with access to the full power of Ruby. Like that only seemed to me to be sufficient to explain some of the desire to reinvent tools but I like what you're saying about how contempt culture is sort of driving that from the other side and excluding people from access to the information that maybe they need to do their jobs more effectively.

**AURYNN:** &nbsp; That’s exactly it. And people keep rewriting the tools, which is fine. It's a great way to learn a language.

**SAM:** &nbsp; Or to learn what that tool does.

**AURYNN:** &nbsp; Exactly, because Make made a bunch of decisions and it's been around for two decades. So those decisions had been kind of polished well. If you're like, "Oh, but I don’t like Make because…" all of these reasons. And then you try to re-implement it, all of a sudden you learn why those decisions were made.

**SAM:** &nbsp; [Chuckles] Yes, exactly.

**AURYNN:** &nbsp; And this is why writing toy languages is great. "Oh, I hate this thing that they do in that language." Then you write your own, you're like, "Oh, that’s why." And then [inaudible].

**SAM:** &nbsp; Pretty much. And if you're lucky, you didn’t get enough Computer Science education to have the idea that you can't do that, and then you actually get to discover all of these [inaudible] yourself.

**AURYNN:** &nbsp; Actually, I never went to university. I don’t have a classical Computer Science education but I did end up writing my own toy language from parsing strings and lexing by hand. I didn’t use any of the existing tools like Yak. I just did it all by hand, and that was possibly the best thing I ever did in learning to program.

**SAM:** &nbsp; It teaches you some wonderful things.

**AURYNN:** &nbsp; It does like lookup tables and scoping and how do loops work and how should I build a [inaudible]. Now, I can apply [inaudible] to basically everything.

**SAM:** &nbsp; Totally. That’s all really cool and interesting. But as somebody who is maybe first confronting or grappling with this idea that we're participating this in this culture that, as we've talked about, is excluding people and is actively causing harm. We talked about the cognitive dissonance that that brings like it brings you into conflict with the society that you're a good person or a good programmer. And I think one of the things that people go to from that right away is, "But I didn’t mean to do that. I didn’t mean to cause that harm." And you talk about this in your blog post a little bit as well. You want to go into that?

**AURYNN:** &nbsp; In the blog post, I referenced another blog article called 'Intent is magic', and the core argument that that makes is that intent isn’t magic, that you didn’t intend to do that thing doesn’t actually matter. Someone else was harmed and their feelings are valid on that and that you didn’t intend to cause that harm, well great. I don’t intend when I insult people unintentionally but I still did it. And that actually is really hard to accept that, okay, I did the thing but I can't say, "Oh, I didn’t intend to do that thing." Therefore, I can't get out of it like I have to own that I did the thing and that becomes super hard because that is the challenge to 'am I a good person, am I a good programmer, how have I harmed these people' and now I have to own that.

**SAM:** &nbsp; The thing that I like to bring up to help people through that is this idea that if I step on your foot, it doesn’t matter whether I meant to or whether I was looking the other way or trying to catch a ball or something. The fact remains that I stepped on your foot, and your foot now hurts. We can talk a little bit about 'did I mean to' but that’s kind of, I want to call it 'kindergarten morality'. Really, what you have to do is address the actual injury and figure out how to keep from doing it again. But that starts by having the fortitude to acknowledge the harm that you actually caused.

**AURYNN:** &nbsp; Right, I think that’s important. I don’t think by having caused the harm that you are a bad person. I think the refusing to own that you’ve caused the harm pushes you into this base of maybe you're a bad person and you should look at what you're doing. But if you can admit that 'yes I stepped on your foot and yes I hurt you, I may not have intended to do that but I did that thing. I'm going to apologize and try not to do that in the future', that’s great actually and that’s the goal.&nbsp; &nbsp;

**SAM:** &nbsp; Absolutely. It's not the mistakes that you make; it's how you handle them and try to at least make different mistakes in the future.

**AURYNN:** &nbsp; Right. We're all human; we will all continue to make mistakes. We all make assumptions all the time. And when we discover that those assumptions are flawed, then it's hard and acknowledging them and apologizing for them is the only thing we can reasonably do. At the same time, the moment you're called on, you get super defensive. So, if you get called on stuff, disengage, calm down, approach it a little more rationally once you're out of your emotions.

**SAM:** &nbsp; I struggle with that a lot.

**AURYNN:** &nbsp; It's a hard one. You feel threatened. Your ability to look at yourself as though you're not the bad guy is threatened and that’s really, really emotional. And a lot of people like to think they're not emotional. They're not emotional in that way, and these are very emotional responses. They're very valid responses but you still need to process those and the best way to do that is to disengage and actually process those.

**SAM:** &nbsp; Right.

**AURYNN:** &nbsp; Doing it live and doubling down and that does not end well, trust me I know. I've seen it happen, I've done it. It does not end well.

**SAM:** &nbsp; Yeah, it's like live coding. It can be done but the odds are against you.

**AURYNN:** &nbsp; Very much so. Very, very much so. So yeah, I think contempt culture really drives that idea that I didn’t intend it because you’ve done all of these things that would be normalized by the underpinning culture. You never thought about them. So, being confronted with 'oh, I've done the thing, my culture said it was okay', we all do this. But if it's wrong, 'but I didn’t intend to, it's just this part of this bigger thing'. And even if you were part of a bigger thing that is normalizing that thing, you're still not unaccountable. You still have to own that. And that’s the hard part.

**SAM:** &nbsp; Yeah. And depending on your culture and your community, this whole train of thought may wind up with you leaving the community that you were a part of and you got a lot out of depending on how that culture reacts to your change of heart.

**AURYNN:** &nbsp; Yeah, exactly. And we saw that very prominently with Sarah Sharp and Matthew Garrett leaving the Linux Kernel community because it is so toxic and so lack openness.

This kind of segues into some thinking I've been doing a lot on this lately and the talk I just gave at WDCNZ last Thursday about why contempt culture forms.

**SAM:** &nbsp; Wooh! Interesting.

**AURYNN:** &nbsp; Yeah, I've been thinking about this a lot.

**SAM:** &nbsp; Before we do that, can I call out one thing that I see in Ruby culture?

**AURYNN:** &nbsp; Yeah, that would be great.

**SAM:** &nbsp; Okay. Before we turn to that, there is one thing that I wanted to call out in Ruby culture specifically which is that we sometimes talk smack about PHP as well. Not as much, I think, as perhaps some other communities do, but it is still there. One of the things that I've noticed is that there is a variant that seems more benevolent than it perhaps actually is, which is this idea that, "Oh, there's people over there who are using PHP. They're so unfortunate. We have to go help them and save them from that and bring them into Ruby so that they can experience the higher plane that is writing Ruby code." I think that’s sort of noble and I do recognize the desire to help people but it does come from that same fundamental perspective that my tool is better than your tool.

**AURYNN:** &nbsp; It really does. It is founded on the exact same contempt of other tools. If you're saying, "Oh, we have to help these people because they are so downtrodden with these poor tools," because that’s what you're saying, then you're just being just as contemptuous as someone who says, "Ewww, why are you using PHP," because you are literally saying, "Ewww, why are you using PHP?"

**SAM:** &nbsp; Right. "Oh, you poor dear."

**AURYNN:** &nbsp; "You poor dear, let us help you. Let us bring you into this glorious light that is Ruby and away from your dark and all-peasant tools." That’s super arrogant. That is super harmful. These people are doing amazing things with the tools they have.

**SAM:** &nbsp; Yeah.

**AURYNN:** &nbsp; And every time someone starts – actually in PHP around me, I (a) ask [inaudible] and (b) say, "Facebook is written in PHP."

**SAM:** &nbsp; Right.

**AURYNN:** &nbsp; The biggest website in the planet, written in PHP. You can shut up now.

**SAM:** &nbsp; Yeah. Well, thank you for indulging me on that. You were about to say that you’ve had some more thoughts on this and you gave a talk recently.

**AURYNN:** &nbsp; I gave a talk at WDCNZ called Human Driven Development. And the recording should go online some time – it's not online yet because it was just last Thursday. The thoughts I've been having are about why contempt culture forms, like what it grows out of. And a lot of the ideas I'm having are just kind of really segues into what DevOps is doing in terms of cultural disruption is the idea of contempt culture grows out of the idea that developers are dominion-oriented. We're all about demonstrating mastery and demonstrating power. We see this in our language with things like wizard from the early days and magic and modern stuff like ninja and rock star and [inaudible] engineer.

These are words to say that we are better than you. It's to create a class hierarchy. And the reason we do this is because computers give us power. And for myself anyway, when I was young, getting into computers was a way to claim power over my life in a way that the rest of the world didn’t let me have.

A lot of people kind of about my age have this similar story. But predominantly, I can usually talk about people around my age.

**SAM:** &nbsp; I think that’s part of the classic nerd origin story, right?

**AURYNN:** &nbsp; Exactly. We get into this because we need to feel power because our lives kind of suck in the outside, and we do and we stay. And the early days was a very academic sort of culture which kind of has an [inaudible] aspect to it. We were taught to look up to these amazing people who built Unix or the C-language or whatever. They call themselves wizards and the word 'wizard' has this connotation of a weakness of mastery of this ineffable magic that normal people don’t get to have.

So we internalize that idea and we say, "Okay, we were part of that amazing magical specialness. We have power." And from power brings dominions, brings this idea that I have mastery over my world. And these other people do not have mastery over their world.

That, I think, is the foundation of contempt culture because once you’ve established that you have power and that you are better, it is very easy to go, "You do not have power. Therefore, you are worse. Therefore, I can treat you however I want." And then our culture jumps into contempt. We then prove that we are knowledgeable and are masterful through displaying our contempt for people outside of our culture. And you can see this in language like lusers which dates back to 1979, I think, at MIT where people would break into the library computers and change the login prompt from user name to luser name.

**SAM:** &nbsp; That’s l-u-s-e-r?

**AURYNN:** &nbsp; Yeah, l-u-s-e-r. Basically to demonstrate contempt of people who are not in Computer Science. And that’s how far back this dates. That’s older than I am.

**SAM:** &nbsp; As you were describing that pattern, I found myself thinking that it fairly well captures a lot of the practices and culture that got encoded into nobility and our old class structure is going back a couple of hundred years quite handily.

**AURYNN:** &nbsp; It really does. We're replicating an entire system of operation and it's not super great that we're doing this. But a lot of us didn’t have power and being able to have power is really addictive.

**SAM:** &nbsp; It is. Just as I'm sitting here thinking about it now, it occurs to me that perhaps the fundamental disconnect there is the step between I have power and therefore I am good. Does that resonate with you?

**AURYNN:** &nbsp; That’s a really good point, idea of goodness that springs from having power. On the one hand, the kind of like noblesse oblige, I think it is.

**SAM:** &nbsp; Sounds right.

**AURYNN:** &nbsp; The obligations of the nobility. And some people have internalized that and kind of comes across in that whole 'oh, we need to save the poor PHP [inaudible]'. And it comes across in the other way of being an actual nobility and seeing those peasants as so much less than you because they can't do computing like you can. But it's really easy to go 'but I'm good because I can'. I like that idea. I'm going to have to explore that.

**SAM:** &nbsp; Okay. Going even further than that, I feel like this whole self-concept of people being good or bad is itself not very useful. I think in most cases, I feel like they're just people and people who do things and those things have some effects that are positive and some that are negative. Hopefully, they're more of the former than the latter. But I don’t really buy into this idea of like I am a good person.

**AURYNN:** &nbsp; Right. I agree with that completely. People aren’t good or bad, but they are people and they do actions and they have underlying beliefs and assumptions that drive those actions. We aren’t bad people; we aren’t good people. We all kind of internalize a narrative which paints us as a good person which is normal. We do that. People aren’t black or white. We're just shades of gray and as time goes on, you change how gray you are.

I think that the kind of contempt culture underpinnings, 'do you paint a black and white world' is 'who has knowledge of power' and then 'who don’t'. I think it reinforces that in a very profound way and it prevents us from looking at other people in terms of what they can do, what they can contribute, what their knowledge and skills are. And we see that through things like developer contempt of design backgrounds in the phrase that you may have heard and I have heard quite a few times of, "We'll get a designer at the end to make it pretty."

**SAM:** &nbsp; "Whack it with a pretty stick," is one that I've heard.

**AURYNN:** &nbsp; Yeah, with a pretty stick. I think it was DHH, in 2003 or so, where he was talking about 'design is how it works' and like this is the foundation of Rails is design is how it works. Apple talks about this where design is fundamental to an entire process. It isn’t of good a thing unless you really talk about how it works.

And so, this level of contempt that developers have for design in the design process is strange and very much founded in that idea of contempt. We also see it towards support or ops personnel. They don’t write code, therefore they're not elite like I am.

**SAM:** &nbsp; Or as the way I see it is, they know how to make those machines do things that I have no idea what that is, but I'm really glad they have to deal with it and not me. And so, that’s great. [Laughs]

**AURYNN:** &nbsp; Exactly. I kind of even see it in the handover process where, "I'm going to give you the code and you have to support it but you weren’t involved in the process of making it. Therefore, if it breaks, you have to come ask me. You have to come supplicate yourself to me and hope I deem to give you the right knowledge. But it's still your butt on the line at 3 in the morning," which segues brilliantly into this whole DevOps thing and the disruption of culture that that entails.

**SAM:** &nbsp; Yeah. Please run with that.

**AURYNN:** &nbsp; Cool. DevOps, as I see it, is a reframing of an underpinning culture from this dominion world to a more of a service-based world where all of a sudden as a developer, you can't develop in isolation. You can't treat your thing as this pristine box that you give to ops and let them put on a server and run. You have to involve them from the beginning and you have to talk with them about how they're going to support it. You have to build tooling to help them support it as part of the first order aspect of development. And if you're doing that from a position of 'I knew more than you because I can code and you can't', you're not going to have a good or positive interaction with your ops people. You're still going to have that level of siloing and that level of opening of contempt where the organization disfunctions. And that organizational dysfunction leads into an environment that a lot of people have encountered where either devs win and ship things whatever and ops hates them, or ops wins and you can't ever change the system because they won't let you because they know everything.

**SAM:** &nbsp; Right.

**AURYNN:** &nbsp; So I think DevOps is [inaudible] reframing about culture towards and you have to be empathetic, you have to include them in your process because otherwise nothing's going to work. And you have to treat the whole thing as a holistic design. So as a DevOps person, I spend most of my time talking, I spend most of my time building bridges and fostering empathy and saying, "Okay, at 3 in the morning, how are they going to fix the thing? Can they just spin up a new one? I don’t know. Do you know?"

**SAM:** &nbsp; "But Aurynn, I just want to write code. Don’t bother me with all this people stuff."

**AURYNN:** &nbsp; "You can't just write code. Code isn’t for you. It's for other people. Without users, you have nothing. You don’t have a job. You don’t have a livelihood. Without approaching computing and programming from the position of 'I have to give this to other people', you are not a programmer. You are sitting in a home alone, writing code for yourself. That’s all you'll ever be."

**SAM:** &nbsp; Yeah. I got into programming, I think, partly because I did enjoy that idea of sitting there and solving puzzles. But really, the main emotional motivation that I got was realizing that I could use those skills which I had previously used for a summer's worth of entertainment to actually help people and make their jobs better.

**AURYNN:** &nbsp; Right. The very first things I was doing for programming were contracting work. It was doing things to solve other people's problems. And if I'd approach that from the idea of 'I'm better than you', then they wouldn’t have given me money. They wouldn’t have come back to say, "Could you do more things for us?" They would have said, "That was fun. Now we have to get somebody who actually will listen to us to do the thing."

I kind of see this reflected in Silicon Valley culture of scratch your own itch or make a thing without really exploring who would use it. I see this very strongly in free software culture where people scratch their own itch which is great. They're running software for themselves. But then they release it, and the idea that someone else might want it or use it is almost foreign, almost considered [inaudible] to the process which I really just don’t understand, which is coming awfully close to me kind of like saying nasty things about Linux. So I'm going to stop there.

**SAM:** &nbsp; Do you want to go into the distinction that you just made between open source and free software just a little bit?

**AURYNN:** &nbsp; Yeah. Free software is kind of like the original version which is the entirety of like the GPL and descending from Richard Stallman's initial work about ensuring those initial consumer rights around you should have the source code and you should be free to modify it and you should be free to redistribute it, and people you distribute it to should also acquire those rights. This is like the foundation of GNU and Linux Kernel and things like that.

**SAM:** &nbsp; Which to horribly over paraphrase, my understanding is that it was basically Richard Stallman was upset that he couldn’t do something with a printer, and then created this whole toolset around making it so that you could do absolutely anything you wanted with the hardware that you have. Is that a fair summation?

**AURYNN:** &nbsp; Yeah. That’s exactly it. The printer they received didn’t come with documentation for them to write a driver and didn’t have a source code for them to use a driver so they can actually do the things they needed with it. So they were like, "[Inaudible]," and then that became [inaudible].

**SAM:** &nbsp; Okay, so that sounds like even though the effect is somewhat altruistic, it sounds like that was motivated entirely by a need to do a thing that RMS wanted to do.

**AURYNN:** &nbsp; Yeah, exactly.

**SAM:** &nbsp; Okay.

**AURYNN:** &nbsp; Open source culture kind of grew on top of that. I believe the term derives from Eric Raymond in one of his early blog posts about this. But open source is notably different (a) in that it's applied to more things than just source code, and (b) that it doesn’t carry the same sort of idea of self-perpetuating software availability or source code availability, sort of. The source code is there, you still have access to looking at it, but you may not have access to modify it in terms of licensing. You may not have access to change it, you may not have access to distribute it, and those are fundamental things. How do I change this for me? How do I change this to make it more usable by my users? These are questions that open source doesn’t always let you answer.

And I really kind of dislike the way open source is being absorbed by other things specifically to talk about source code and whether or not it's open. But now, open source is being used to describe events or cultural artifacts or other things along those lines. Well, it’s really not the appropriate term but I'm kind of rambling at that point, so I don’t have the structured thoughts there.

**SAM:** &nbsp; [Chuckles] Okay. Well, thank you for at least explaining the distinction that you made.

**AURYNN:** &nbsp; It is an important distinction. As you say, initially free software was about [inaudible] issues. And a lot of the more modern developer culture is very open source based, not free software based, and we see this quite strongly in licensing that is predominantly based on the MIT or BSD license which is very free in terms of you can take this thing and you can bake it into a commercial product and you don’t have to release the source code with it. You could just give it out. You can compile it and not give people your changes which free software is intended to prevent.

**SAM:** &nbsp; Right. I know back when I was first becoming aware of the free software movement, there was a lot of noise made about the sort of sticky aspect of the GPL which is that anything that you release under the GPL, other people are free to modify because modifications are also GPL'd.

**AURYNN:** &nbsp; Yup. As soon as you release it, other people get to have it.

**SAM:** &nbsp; Yeah.

**AURYNN:** &nbsp; As well. So you see people like Matthew Garrett going around issuing, I believe he DMCAs companies out of China who use Linux because he's got copyright on the Linux Kernel because he's made contributions. He's a copyright contributor. So he goes around and marks them for GPL violations, which I think is great because it forces them to release their changes.

**SAM:** &nbsp; Interesting. I can see how that open source movement was certainly fueled by the desire for companies to be able to make profits. But what are the cultural implications or ramifications of that?

**AURYNN:** &nbsp; There's a bunch of cultural ramifications around open source. One is that it strongly levels the availability of knowledge, like I can look up anything on Stack Overflow which is covered in source code. I don’t know the licensing of it so I can't copy it but I can use it for reference on how to do a thing.

So, it levels the availability of things to huge extent and have access to build a website on top of Rails, for instance, or Django or Sinatra. Ten years ago, I didn’t have – 10 years ago, we had Rails. But 15 years ago, I had to build my own of all of these things. I had to learn to parse hdb, I had to learn how to deal with CGI headers. I had to figure out how to do image uploading on my own. Now, people can just say, "Here's a library. I'm done. That was easy."

So we have that much greater amount of leveling. We have cultures now especially around Ruby and Node which is, if I've written a gem or a module and publish it because then it can help other people. So we have Ruby gems being huge. We have the npm being huge, full of useful tooling that helps me solve problems.

Fifteen years ago, I had that in Perl with what was called CPAN but that was very limited to Perl. Now it's much more available in terms of the culture. The culture supports in doing that thing. But it has a really hostile edge which is that there's now this expectation as an engineer that you should be publishing code, you should be contributing to open source, you should be doing things in the public. And by that, I mean outside of your normal day job which is a huge amount of time load to put on people.

**SAM:** &nbsp; Definitely.

**AURYNN:** &nbsp; And companies will say, "Oh, give us your GitHub so we can see how you code." If I have mtime-core because I'm bootstrapping myself to use a horrifying term and ask me about it later if it's a terrible idea. But if I'm trying to pull myself out of a menial job which is exhausting, I don’t have much energy to write a lot of code. So I'm not going to have a lot of code on my GitHub page. I might have a lot of knowledge but I don’t have a lot of code.

So, if you're judging me about my GitHub page, I don’t look like a great coder, or especially for women having to take care of their family. You get home from work and now you’ve got to make dinner or now you’ve got to take care of your kids, or now you have to take care of an elderly person. These are things that predominantly fall on women. So, while [inaudible] leveled things, it’s leveled things in favor of men because they're the people who generally have the time to access and participate in the culture.

And secondary thing of why this culture is hostile and toxic is that it promotes that we should all give our labor away for free in a way that the OpenSSL thing is a great example of this. There was up until Heartbleed one maintainer of SSL which is a fundamental piece of [inaudible], one person kind of doing it in his spare time, on the verge of bankruptcy most of the time. But Facebook is using this thing, Google is using this thing, Twitter is using this thing. Literally, everything on the internet uses this thing and no one was paying for it which is fine. That’s what free software and open source is supposed to do. But the culture of convincing devs that they need to participate and convincing devs that they should give their work away for free means that companies are entitled to take that work for free and not contribute back which means that we are perpetuating a culture where OpenSSL having a single developer is fine even though it's fundamental to the internet, even though now they have enough people to run it for another a year and a half before they run out of money. So there was a small contribution. But it's not being continued, it’s just enough to get good PR until it all goes over.

And then what? And then this fundamental piece of infrastructure drops back into 'oh well, it should be a labor of love, it should be passionate'. But no, that’s not acceptable.

**SAM:** &nbsp; Yeah, and I think there is an entire episode some time ago on the Ruby Rogues where Avdi essentially ranted for an hour or so on this whole concept of passion. I'll find the link to that one and put it in the show notes for anybody who’s curious. It was well worth it.

**AURYNN:** &nbsp; Yeah, [inaudible]. And then the whole passion [inaudible].

**SAM:** &nbsp; Exactly. So for our listeners, that was Episode 144 and I'll put a link in the show notes.

Clearly, we're both passionate about deconstructing the idea of passion and that would be a lot of fun. But maybe we should bring it back around to Contempt Culture and possibly what some of our alternatives might be. &nbsp; &nbsp;

**AURYNN:** &nbsp; Right. One of the things I talked about in my talk last week, and I touched on a little bit earlier is what I think DevOps is doing in terms of disrupting our culture. And that is moving us away from this kind of dominion orientation where we think we're better towards a service culture where it's not 'what do I know', it's 'how can I help you'. And it's a fundamental reframing of how we're approaching programming. It's user-centric – what am I doing to benefit you?

**SAM:** &nbsp; Oh, yeah.

**AURYNN:** &nbsp; Not on the term of 'oh, I know more than you, therefore I should do the thing for you', but in terms of 'I don’t know what you do. I don’t know anything about what you do. I should sit with you, I should watch what you do and try to help you make that better'. And this is predominantly because we can't ask people what they want because they don’t know. I don’t know what I want but if you watch what I do for a day or a week, you get a clearer picture of the things I do and the places where I'm clearly bumping into issues and could use help.

And if we move away from 'I know everything' as our cultural background to 'I don’t know anything but I still want to help you, how do I do that', I think that’s what service culture looks like.

**SAM:** &nbsp; Wow, that’s a really powerful and, I want to say, dangerous idea because this framing everything in terms of 'how can I help you', it's such a transformative question. And I think it maybe even goes beyond dev or ops and DevOps to almost sort of fundamentally getting at one of the things that draws a lot of people, certainly myself into programming which is the idea that you can make tools that help people.

But if you start from the perspective of 'how can I help you', you might get to a point in a particular conversation where you realize that the answer is not software. It's telling them to go and talk to somebody else down the hall.

**AURYNN:** &nbsp; Exactly. There's so many problems that we think of as technical problems are actually social problems or communication problems. And throwing technology at that problem won't help. It might make us feel better because we're exercising our knowledge and proving our mastery. But it's not actually solving the problem.

**SAM:** &nbsp; And let's not forget earning our paychecks.

**AURYNN:** &nbsp; And earning our paychecks. But if we're not helping users, why do we deserve a paycheck? And a lot of this thinking has been coming out of – I've doing more research on UX. I'm talking to UX and that’s user experience experts. A lot of the stuff is based on the ideas of design thinking and literally going over what they need through watching what they do.

The entire idea of user experience is user focus. It's the idea that I'm doing this for you. Not from a position of say, we need to help those poor PHP [inaudible] by bringing them to Ruby, but from a position of I have the knowledge and skills to make your life better through the knowledge that I have. But I'm not doing this in a masterful noblesse oblige way, I'm doing this from a position of I genuinely care about you and genuinely care about what your problems are. And you can't approach that from the position of 'I know more than you'.

**SAM:** &nbsp; I think at best you can qualify it by saying, "I know some tricks that you don’t and let's see if they can help."

**AURYNN:** &nbsp; Exactly. For instance, I work in a co-working space and somebody I know here is a videographer and she has a bunch of video files that she needed to rename. I think over a hundred of them. And she was going to sit there and do them all by hand and she would go, "This sucks!" But she came over and asked me if there's a better way and I did an 8-line Python program reading the filenames and just move the files. And it just takes half a second to do it. It takes me 5 minutes to write that program.

The program is not repeatable, I would have to modify it for her for that but now she knows that (a) this can be done, and (b) I'm approachable, because (c) I care about her problem and not making myself feel better or make myself feel bigger like I know more than her because I don’t. She knows so much stuff that I don’t know about this other entirely different field.

So that’s what I see as service culture. How am I helping? How am I making her world better, not through this idea that 'I'm showing off my knowledge' but through 'I have this knowledge, how can I make that knowledge work for you'.

**SAM:** &nbsp; I don’t see anything wrong with that.

**AURYNN:** &nbsp; So, I think DevOps is really fundamentally pushing that as an ideology and kind of doing it in kind of a hidden way because we have to ask of our ops people, what would make your life better? What do you do? They deploy things, they monitor things, they worry about uptime. We watch what they do and then we build tools to do that better. And we can [inaudible] participation, we're not saying, "Oh, I watched you; therefore, I am a programmer and I know everything because I can solve problems." We just watch them and we build those tools and we work with them and iterate them. And that’s user experience. That’s service culture.

Given the amount of uptake of Amazon and Heroku and these tools that make it really easy to do that ops-y stuff, it pushes our devs into the idea that quick and easy deployments are normal, and that’s the world we should be working towards.

**SAM:** &nbsp; Which, in turn, lets you go and do some other more amazing things that we could not have dealt with 10 years ago.

**AURYNN:** &nbsp; Exactly. Ten years ago, I was pushing code to a server and hoping that it worked because one of the things I keep saying is that my developer environment is tainted and it's broken by default because I installed things in it.

**SAM:** &nbsp; All the time, you have to keep a record of what it is.

**AURYNN:** &nbsp; Exactly. And once I found out about Vagrant, I think 5 years ago or 4 years ago, I was mind blown because this let me rebuild my dev environment dynamically. I didn’t have to worry about, "What did I forget to include in the requirements text?" I'm just like, "Nope, it was the thing." All the scripts, you need to rebuild it.

**SAM:** &nbsp; [Chuckles] Yeah.

**AURYNN:** &nbsp; Yeah, 10 years ago, I did not have that. And I wish I did because it would have made so many things about my life so much easier. It was just test of things and then deploy them.

**SAM:** &nbsp; Or I was going to say 10 years ago, on probably my first two or maybe even three Rails apps, I started out literally SSH-ing into the server and doing a git pull and manually restarting my four or five server processes. Capistrano came out late around that time, but it came out after I had started on these projects. And I was like, "Ah, I don’t have the time to try and figure that out." And just looking back from there, I just can't even imagine working that way anymore.

**AURYNN:** &nbsp; No. I mean, people do still work that way. I was getting a boot camp session for the local Summer of Tech initiative which is about getting industry professionals in front of [inaudible] to kind of bring up the speed on what we're doing. And they're talking about doing that, logging into servers by hand, doing things by hand which is totally a valid and necessary part of the learning experience.

**SAM:** &nbsp; You don’t really appreciate what the tools are doing for you until you’ve done it the hard way.

**AURYNN:** &nbsp; Exactly. And you need to break you things before you understand how to fix them which is also great. But at the same time, I'm blowing their minds by saying, "Yeah, we don’t do that anymore. We write tools to do that for us because it's so much easier,"

**SAM:** &nbsp; Yeah.

**AURYNN:** &nbsp; So yeah, I really see DevOps is pushing this world where we have to integrate ourselves. And as a DevOps person, I see my entire job is user experience. I provided better experience for devs in terms of they need to deploy code and they need to ship, they need to [inaudible]. And having to deal with the deploy that goes wrong and having to deal with 'oh God, we did a bad deploy. Now our site's on fire and it's on fire for the next two days'. They don’t want to deal with that. Ops don’t want to deal with that.

I provided better experience to ops people by saying, "Okay, this is how we build the CI seeding pipelines. This is how we get our staging environment up so that when devs do things, it will light that on fire and then we can find out why." We can go back to them and say, "Don’t do that." Or say, "Hmmm, how can we solve this problem in a very useful way?" And that turns into the decisions you’ve made aren’t bad, becoming well background to, "Oh, this code base is terrible. How can I redo it to deal with that?"

**SAM:** &nbsp; Right.

**AURYNN:** &nbsp; One of the best things I've learned is to say and to accept and internalize that no code is bad because no choices were wrong. They were appropriate at the time they were made in the constraints that they were made under. Once they started to accept that, I could start saying to people, "Yeah, I understand and I sympathize that you don’t like to code. Where do you want to be? How do we get there?" And that’s service.

I'm commiserating with them because everyone is like, "Ahhh, why?" But at the same time, they don’t know how to get out of it. And I can provide that service.

**SAM:** &nbsp; For me, I feel like it all comes back down to that idea that if you can approach your work from a place of respecting other people and where they came from and the constraints that they were under, then you could actually get so much more done.

That goes back to something that I was thinking about earlier in the show which is a cognitive bias called Actor-Observer Bias which is this idea that when people judge their own behavior – and I'm reading from Wikipedia now - and they are the actor, they're more likely to attribute their actions to the particular situation than to a generalization about their personality.

I think this ties in a little bit also to the fundamental attribution error. I think they're kind of two sides of the same coin. But knowing about that difference, that we interpret stories about ourselves differently than we interpret stories about other people, if you know that difference and you can make yourself stay aware of that, then you can more easily access that place of empathy and try to figure out how to understand the context and the situation that somebody else found themselves in that led to the code that you're seeing in front of you.

**AURYNN:** &nbsp; Exactly. And this also comes in with the idea of blameless postmortems as part of the DevOps process, part of the better development processes of the person didn’t fail if things fail and caught fire. The process around them failed and even if you say, "This person blocked the site down," the next question is, "Okay, what led that to happen?"

**SAM:** &nbsp; "How were they able to do that?"

**AURYNN:** &nbsp; Yeah, "How were they able to do that?" What choices were they making and why were they making them? Because the context is what matters, not that the person did it.

So there was this conference over the weekend where we had a session about this. And the person running the session was a VP of Engineering at a local payments processor where they tried to get to – oh, I have a great quote for that, hold on. I'm not going to find it in reasonable time, so I will paraphrase it. The quote is, "Of course that happened to them. It would have happened to anyone in that situation." And trying to reach that point where they know that it wasn’t that person's fault because anyone slotted into that slot would have done the same thing and failed in the same way. So he tried to solve that problem, how do we fix that system? And I think that is a similar place of empathy, that is a similar place of service. Instead of boarding your mastery of 'oh, I wouldn’t have done that', you go, "Okay yeah, we all would have done that. How do we fix that problem? How do we serve the people on the frontlines so that they can act without worrying that they're going to wreck things in this bad way?

**SAM:** &nbsp; Thank you. This has been a really wonderful and interesting and engaging conversation. I feel like we could both talk about this stuff for hours longer, but in the interest of respecting our listeners' time and my own bladder capacity, I think perhaps we should wrap it up and move to the picks. Since there's only two of us, traditionally, the host goes before the guest.

So, I will just pick one thing which is that I recently this week picked up a RODE PSA1 Mic Boom Arm. This is about $99 on Amazon and it’s this thing that you can either clamp to your desk or you can drill a hole into your desk and set this in. I don’t know if it's considered studio quality but it's quite nice. It's smooth and quiet and it's this boom arm that lets me position my mic pretty much anywhere I want it, and I can't believe that I suffered through using the mic's floor stand for so very long. This thing is wonderful and it's already making my life better. That’s it for my picks. How about you, Aurynn?

**AURYNN:** &nbsp; I think the most major pick I would have over the last two weeks of my life is learning about Design Thinking. And I highly recommend that you go and read the Wikipedia article on Design Thinking and start digging into the [inaudible] user experience because it is fascinating.

**SAM:** &nbsp; All right, awesome. If people want to follow you on Twitter or check out other work that you're doing, where can they find you?

**AURYNN:** &nbsp; I'm on Twitter as @aurynn. You can also follow my blog at blog.aurynn.com where I mostly talk about video games, but also I'm posting more of my thoughts on things like dominion culture and contempt culture. And if you're interested in that whole DevOps business thing I do, you should beep me on Twitter and I will tell you about it.

**SAM:** &nbsp; Thank you very much. This has been a great episode.

**AURYNN:** &nbsp; Great, thank you for having me.

**SAM:** &nbsp; We'll see you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world’s fastest CDN. Deliver your content fast with CacheFly. Visit CacheFly.com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**


