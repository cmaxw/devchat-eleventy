---
layout: layouts/post.njk
title: >
      266 RR WordPress with Kronda Adair
date: 2016-06-29 07:00:56
episode_number: 266
duration: 50:44
audio_url: http://media.devchat.tv/ruby-rogues/RR266KrondaAdair.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

## Check out [Newbie Remote Conf](https://allremoteconfs.com/newbie-2016)!
&nbsp;03:09 - Kronda Adair Introduction
- [Twitter](https://twitter.com/kronda)
- [Blog](http://kronda.com/)
- [Karvel Digital](https://karveldigital.com/)
  - [@karveldigital](https://twitter.com/karveldigital)
  - [Facebook](https://www.facebook.com/karveldigital/?fref=ts)
03:11 - [WordPress](https://wordpress.com/)
- [DevChat.tv](https://devchat.tv/)
- [Derick Bailey](https://twitter.com/derickbailey): [WatchMeCode](https://sub.watchmecode.net/)
- [Sunk Cost Fallacy](https://en.wikipedia.org/wiki/Sunk_costs)
07:59 - Why do developers hate WordPress?
- [Venomous Porridge: A conversation I have every month or so](http://venomousporridge.com/post/389785000/a-conversation-i-have-every-month-or-so)
14:53 - Using Tools That Fit Technology Preferences
- [PHP](http://php.net/)
- [Wix](http://www.wix.com/)
- [Aaron Hockley: WordPress is a DSLR; Squarespace is a Point and Shoot](https://photowebo.com/wordpress-vs-squarespace-photographers/)
- Technology Bias
- [Refresh Portland](http://rfrshpdx.org/)
21:52 - Empathy and Discovery Processes for Clients
- Tests
- Asking Questions
- [The Freelancers’ Show](https://devchat.tv/freelancers)
  - [The Freelancers' Show Episode 201: Roadmapping with Brennan Dunn](https://devchat.tv/freelancers/201-fs-roadmapping-with-brennan-dunn)
31:38 - Conversations with Customers vs Owners/Managers
- [WordCamp Orange County](https://2016.oc.wordcamp.org/)
34:43 - [Websites That Work | Indiegogo](https://www.indiegogo.com/projects/websites-that-work#/)36:48 - Kronda’s Origin Story
- [Portland Community College](http://www.pcc.edu/)
&nbsp;Picks
- [Hover](http://hover.com) (Kronda)
- [Flywheel](http://getflywheel.com) (Kronda)
- [WordPress](https://wordpress.com/) (Kronda)
- [Thrive Themes](http://thrivethemes.com) (Kronda)
- [Genesis](http://my.studiopress.com/themes/genesis/) (Kronda)
- [ActiveCampaign](http://activecampaign.com) (Kronda)
- [Lingo](https://www.lingoapp.com/) (Kronda)
- [Tybee Island, Georgia](http://tybeeisland.com/) (Jessica)
- [Robert Epstein: The empty brain: Your brain does not process information, retrieve knowledge or store memories. In short: your brain is not a computer](https://aeon.co/essays/your-brain-does-not-process-information-and-it-is-not-a-computer) (Coraline)
- [Blindsight by Peter Watts](https://en.wikipedia.org/wiki/Blindsight_(Watts_novel)) (Sam)
- [Aurynn Shaw: Contempt Culture](http://blog.aurynn.com/86/contempt-culture) (Sam)
- [StudioPress](http://www.studiopress.com/) (Chuck)
- [DigitalOcean](https://www.digitalocean.com/) (Chuck)
- [Drip](https://www.getdrip.com/) (Chuck)


### Transcript

 **JESSICA:** I saw dolphins yesterday from the beach.

**SAM:&nbsp;** Nice.

**KRONDA:&nbsp;** Wow.

**CHUCK:&nbsp;** Fun.

**KRONDA:&nbsp;** That's [pretty] good.

**CORALINE:&nbsp;** Has anyone in your party been attacked by sharks yet?

**JESSICA:&nbsp;** We figure that since, if there's lots of dolphins that probably means there aren't sharks, because they're not friends with sharks.

**CORALINE:&nbsp;** Well, what about when the dolphins take you and push you out to sea?

**JESSICA:&nbsp;** Then maybe there's a reason you should be out to sea.

**CORALINE:&nbsp;** Maybe the dolphins know best.

**KRONDA:&nbsp;** [Laughs] If a dolphin says it's necessary, you should [inaudible].

**JESSICA:&nbsp;** [Laughs]

**CORALINE:&nbsp;** Listen to the dolphins.

**SAM:&nbsp;** You have offended the dolphin gods.

**JESSICA:&nbsp;** [Laughs]

**_[This episode is sponsored by Hired.com. Every week on hired they run an auction where over a thousand tech companies in San Francisco, New York, and L.A. bid on Ruby developers providing them with salary and equity upfront. The average Ruby developer gets an average of 5 to 15 introductory offers and an average salary offer of $130,000 a year. Users can either accept an offer and go right into interviewing with a company or deny them without any continuing obligations. It's totally free for users. And when you're hired, they give you a $1,000 signing bonus as a thank you for using them. But if you use the Ruby Rogues link, you'll get a $2,000 instead. Finally, if you're not looking for a job but know someone who is, you can refer them to Hired and get a $1,337 bonus if they accept the job. Go sign up at Hired.com/RubyRogues.]_**

**_[I'm excited to tell you about a new sponsor to the show, Rollbar. One of the frustrating things about being a developer is dealing with errors. Ugh. Relying on users to report errors, digging through log files to debug issues, or a million alerts flooding your inbox ruining your day. With Rollbar's full-stack error monitoring, you get the context and insights and control you need to find and fix bugs faster. It's easy to install. You could start tracking production errors and deployments in eight minutes or less, or automatically create new issues in GitHub, JIRA, Pivotal Tracker, et cetera. They have a special offer for Ruby Rogues listeners. Go to Rollbar.com/RubyRogues to sign up and get the bootstrap plan free for 90 days. That's 300,000 errors tracked free. Give Rollbar a try today. Go to Rollbar.com/RubyRogues.]_**

**_[This episode is sponsored by Shippo. Shippo is a shipping API that connects you with over 15 different shipping carriers such as FedEx, UPS, USPS, Canada Post, and UberRUSH in one integration. You can use Shippo's APIs to compare shipping rates across carriers, print discounted labels, validate shipping addresses, track packages, and power your shipping in many different ways. You can connect directly to the API or use the provided Shippo Ruby gem to print your first label in a few minutes. The Shippo API is free to use. You only pay for the actual shipping label and a five-cent label fee. Sign up by going to GoShippo, that's G-O-S-H-I-P-P-O dot com slash Ruby Rogue to get six months with zero label fees.]_**

**CHUCK:&nbsp;** Hey everybody and welcome to episode 266 of the Ruby Rogues Podcast. This week on our panel we have Jessica Kerr.

**JESSICA:&nbsp;** Good morning.

**CHUCK:** &nbsp; Coraline Ada Ehmke.

**CORALINE:** Hi there.

**CHUCK:** Sam Livingston-Gray.

**SAM:&nbsp;** In this house we obey the laws of thermodynamics.

**CHUCK:&nbsp;** I'm Charles Max Wood from DevChat.tv. Quick shout-out about Newbie Remote Conf coming up soon. We also have a special guest and that is Kronda Adair.

**KRONDA:&nbsp;** Hi. Thanks for having me.

**CHUCK:** Do you want to introduce yourself?

**KRONDA:&nbsp;** Sure. I'm Kronda Adair. I'm a WordPress developer from Portland, Oregon. And my main mission in live right now is helping small business owners navigate the web to market their businesses.

**CHUCK:&nbsp;** Wait, WordPress? We hate WordPress.

**KRONDA:** [Chuckles] That's what I've heard.

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** Which is why we're switching our site to it.

**CHUCK:&nbsp;** That's right. DevChat.tv as of a month ago is on WordPress again.

**KRONDA:** Again. So, you went from WordPress to…

**CHUCK:&nbsp;** WordPress to custom built Rails back to WordPress.

**KRONDA:&nbsp;** [Chuckles] Oh, what happened? What sparked that decision?

**CHUCK:&nbsp;** To switch off of WordPress or back onto WordPress?

**KRONDA:&nbsp;** Both.

**CHUCK:&nbsp;** Well, when I switched off it was mostly that there were a lot of things that I wanted WordPress to do that I couldn't figure out how to make it do. And I wasn't that interested in doing any development for WordPress to make it do that stuff. What wound up happening was that as I continued to progress in building out a custom website for DevChat.tv there were just more and more things that were coming up. Different bugs, different issues. It was getting more and more complicated to keep track of things. And so, about two and a half months ago I went to MicroConf and I hung out with a bunch of guys there that I talk to every week for a mastermind group. And one of them had moved off of custom Node.js to WordPress for his website. So, that's Derick Bailey, WatchMeCode.net if you're interested in JavaScript videos. But anyway, so he showed me what he had done and then we just fiddled around for an hour or so with what would it take to move DevChat.tv back. And he showed me a few tricks. And it became readily apparent that it would be a whole lot less work even though I had put a couple of years into DevChat.tv on Rails. It would be a whole lot less work to get what I needed out of the website and to get things going in WordPress than it would be for me to continue to build things in Rails.

**KRONDA:&nbsp;** So, the thing that struck me most about that whole story is that you ran into things that you didn't know how to make WordPress do, not necessarily that WordPress wouldn't do it.

**CHUCK:&nbsp;** Right.

**KRONDA:** But you didn't know. And you're a developer I assume, right?

**CHUCK:** Yeah.

**KRONDA:&nbsp;** And you're a developer in Rails. You're like, “I'm going to do this in the thing that I know how to do because then I can make it do anything.” But the thing that you want to spend your time doing is podcasting. Am I correct?

**CHUCK:&nbsp;** That's right. [Chuckles] That is exactly right.

**KRONDA:&nbsp;** [Laughs] So [laughs] if you had said yourself, “Well, I don't know how to make WordPress do this but somebody probably does,” and maybe paid that person some money to make it do that, how many years ago was this that you switched off of WordPress?

**CHUCK:&nbsp;** Two and a half years ago.

**KRONDA:&nbsp;** Two and a half years. So, a little bit of investment in a WordPress developer who can make WordPress do whatever you wanted it to do would have saved you probably two years in messing around.

**CHUCK:&nbsp;** And probably thousands and thousands of dollars.

**KRONDA:&nbsp;** Right.

**CORALINE:** I think part of the problem is that at its core, WordPress is super simple. The concept of a content management system is super simple. And so, as developers when we think about a content management system it's like, “Oh yeah, I can totally build that.” And I actually think it's a rite of passage for every web developer. Every web developer at some point in her career…

[Laughter]

**CORALINE:&nbsp;** Has to create a CMS, a WordPress killer, just to learn…

**KRONDA:&nbsp;** [Laughs]

**CORALINE:&nbsp;** How bad of an idea that really is.

[Laughter]

**KRONDA:&nbsp;** Luckily I did that while I was still in school because it was, I was assigned to do it and I was like, “Ooh, this shit is hard. I don't want to do this.” [Chuckles]

**CHUCK:&nbsp;** Yeah.

**CORALINE:&nbsp;** I once tried to productize a Rails CMS and it was such a nightmare. And what we ended up doing was like going to WordPress and saying, “Oh, I wonder how this works,” and then replicating it in Ruby and Rails. And it was ridiculous.

[Laughter]

**SAM:&nbsp;** That sounds like an excellent use of time. I want to jump in and point out too that there was something else interesting in what you said, Chuck, which is that you had sunk a couple of years of your own private time into developing this thing, which a lot of people if they had gone through that the sunk cost fallacy would take over. And they'd be like, “I have so much of my soul invested in this thing. There's no way I'm going to switch away.”

**CHUCK:&nbsp;** Yeah.

**SAM:&nbsp;** Which is just a thing I want to call out for our listeners.

**CORALINE:&nbsp;** That's my favorite fallacy.

**CHUCK:&nbsp;** [Laughs]

**SAM:&nbsp;** Isn't it?

**CHUCK:&nbsp;** Yeah, the problem is though is that I committed to spending a week on it. And after a week I had about 90% of the functionality that I needed off of the Rails DevChat.tv in the WordPress DevChat.tv. And so it was, okay well it was two year to get here or a week and it'll take me another week to get the rest of it.

[Laughter]

**JESSICA:&nbsp;** Did it really? Did it really only take another you week though? Because usually, the first 90% is not the only 90%.

**CHUCK:&nbsp;** Yes.

[Laughter]

**SAM:&nbsp;** Right. There's at least 90% left.

**CHUCK:&nbsp;** Yeah, like I said. It took me another week to get the other 90%.

**KRONDA:&nbsp;** So, why do developers hate WordPress?

**CORALINE:&nbsp;** I think some of it is that WordPress is so wildly popular and WordPress is used by non-technical people. How can it possibly be any good?

[Laughter]

**JESSICA:** The way Barnes & Noble hates Amazon.

[Laughter]

**KRONDA:&nbsp;** Right.

**SAM:&nbsp;** Software hipsters, man.

**KRONDA:&nbsp;** No, think that sounds pretty in line with the blogs that I read and the… I love one post and I don't know if I can find it again. But one guy kind of answered this post with, “I'm not in this for the code. I'm in this for the money,” which is something I think a lot of people don't talk about. [Laughs] And I feel very similar in that code doesn't interest me for code's sake. Code interests me as a way to solve problems for people. And WordPress has solved a lot of the very, very common problems for people, especially if those people are small business owners who are trying to get their business online.

**CHUCK:&nbsp;** I think you're touching on the other end of things that I hear when I hear people complain about WordPress. And that is that, “Well, it doesn't do exactly what I want.” And then from there they go do, “Well, and I'm a developer. So, I can build exactly what I want,” which is where I went.

**KRONDA:&nbsp;** Right.

**SAM:&nbsp;** Yeah, I noticed. There was a blog post I ran across, I don't know, sometime in the last year that talked about how developers have this tendency to look at Stack Overflow or something like it and go, “Well hell, that's just two tables and a database. I can do that over the weekend.”

[Laughter]

**SAM:&nbsp;** And then discover, no you can't.

**CORALINE:&nbsp;** Yeah.

**CHUCK:&nbsp;** A little of string. Some duct tape.

**CORALINE:&nbsp;** We have these simplistic models of how things work. As developers we have no natural instincts regarding edge cases. That's why we need QA people.

**CHUCK:&nbsp;** Yeah. Well, and look at how many say HTTP libraries we have in Ruby, right? And it's all because somebody wanted something that was just a little different.

**KRONDA:&nbsp;** Yeah. I think if people and especially developers and especially business owners were willing to accept 90 or 95% of what they want… like when you look at do you really need that specific custom thing? You know, if you went back and you said, “What is the reason that I want this thing that is super hard to do or that I don't know how to make WordPress do?” and looked at it objectively, you probably either don't need it or if you really do need it then you could hire someone to build it. But most of the time I will opt for simplicity because it's more scalable. And it keeps you from getting into the weeds. I mean…

**JESSICA:&nbsp;** So, sometimes…

**KRONDA:&nbsp;** Restaurant websites are a great example of this. They're awful. And they're…

**JESSICA:&nbsp;** [Laughs] Awful.

**KRONDA:&nbsp;** And…

**CORALINE:&nbsp;** What do you have against Flash and PDFs? Come on.

[Laughter]

**SAM:&nbsp;** Yeah. I'm looking at [inaudible] right now.

**KRONDA:&nbsp;** Exactly. So, I was talking to somebody and I'm like why are restaurant websites so universally terrible? And someone told me that restaurant owners are trying to create an experience. In their restaurant they want you to walk in, they want you to have a certain feel, certain experience. And then they try to replicate that on their website because that's what they think is going to draw people in.

**JESSICA:&nbsp;** And we don't want to eat your website.

**KRONDA:&nbsp;** Exactly. We're not eating the website. We're trying to figure out, are you open? What's your phone number? What are you going to feed me? And we're trying to do it probably on our phones. And so, they don't understand. Like I said just the other day, I would rather have just a blank white page with black text if it told me what I needed to know [chuckles] about the restaurant. And a lot of business owners don't understand that difference of when you move to web people want to get in, they want to get the information they need, and they want to get out.

**CHUCK:&nbsp;** And my mental image went from somebody licking their screen to somebody licking their phone. I don't know.

**KRONDA:&nbsp;** It's a lot easier to lick your phone, I think.

**CHUCK:&nbsp;** Yeah, a little.

**SAM:&nbsp;** Thank you for that, Chuck.

**KRONDA:&nbsp;** [Inaudible]

**CHUCK:&nbsp;** [Laughs]

**CORALINE:** I have a doctor friend who I think can help you.

**JESSICA:&nbsp;** Okay. So, as soon as we can transmit taste over HTTP then the restaurant websites can parallel the restaurant experience.

**CHUCK:&nbsp;** There we go.

**KRONDA:** Let's hope that day never comes.

**SAM:&nbsp;** Right. [Laughs]

**CHUCK:&nbsp;** Yeah, but they also have a…

**SAM:&nbsp;** Wow. I could get a [inaudible] delivered instantly over the air.

[Laughter]

**CHUCK:&nbsp;** Yeah, but they also have a certain ambiance that they've tried to create in the restaurant as well. And so, it's that experience as well. You walk in, you sit down. Olive Garden they try and make it look like Italy. It doesn't look like Italy. So, people come in for that sort of experience as well and they try and theme their website to that as well.

**KRONDA:&nbsp;** Right. I have nothing against big, beautiful pictures of food. But put the phone number at the top.

**CHUCK:&nbsp;** Yeah.

**KRONDA:** And put your hours at the top. [Laughs] I just, so it was National Donut Day last week. And so…

**CHUCK:&nbsp;** I missed that.

**KRONDA:&nbsp;** I managed to against all odds get my hands on some lavender donuts from Coco Donuts which is my special…

**SAM:&nbsp;** Oh, that's quite a feat.

**KRONDA:&nbsp;** Don't I know? I was up early and I was like, “Ooh, if I call now I can have them save me some.” So, I went to their website to get the phone number is which 100% of the time when I go to the website I'm looking for the phone number. And they got a new website which is great. But they list everything but the phone number. They even have in the footer each location but it's just the name of each location as a big link in big text. [Chuckles] Like, you got to put the phone numbers…

**SAM:&nbsp;** [Laughs]

**KRONDA:&nbsp;** Right there under the… [Laughs] So then, I had to go to their contact form and be like, “Hey, great new website except [chuckles] maybe you can make these things easier. Maybe you can make the phone number clickable.” Like it's so hard for people to just put themselves in the shoes of the user and say, “What is it they're actually trying to do? And how do I make that easy?” And I keep threatening to video my wife just surfing websites because she's constantly just like, “This is terrible. Can you fix this?” I'm like, “No, I can't fix all the websites.” [Chuckles]

**SAM:** If only they would pay you to.

**CHUCK:&nbsp;** [Laughs]

**KRONDA:** If only, right? Yeah.

**JESSICA:&nbsp;** [Chuckles] So, it turns out to be it's not about those little tweaky things that you wanted to do exactly what you want. Because whatever little tweaky feature that was, it's not what the users need.

**KRONDA:&nbsp;** Most likely not. And you know, I think if people would invest the majority of the money they spend on websites in user research and content, they would probably have much more successful websites. And half the job, half of my struggle as when I'm managing projects is reminding the owners that the website isn't actually for them. It's actually for their customers. And it doesn't really matter what colors they like or what fonts they like. It matters that their customers can figure out what they need to do and be convinced to contact them or to hit the buy button or whatever it is they're trying to get them to do.

**CHUCK:&nbsp;** I think that's really interesting. I want to just go back to this idea though of using tools that fit our technology preferences a little bit. Because I see a lot of people, they object to WordPress simply because it's written in PHP as well.

**CORALINE:&nbsp;** Oh, [I get that].

**KRONDA:&nbsp;** Ah yes, PHP snobs.

**SAM:&nbsp;** Mmhmm, yeah.

**CHUCK:&nbsp;** Yeah. And I'm wondering. How important is that? What kind of impact does that have on our community?

**KRONDA:&nbsp;** When you say our community do you mean developers as a whole?

**CHUCK:&nbsp;** Yeah, developers in general.

**KRONDA:&nbsp;** I must admit I don't spend a ton of time thinking about developers in general. [Laughs] My take on that is if someone is not going to use WordPress because they hate PHP then I wish them a good life and they should go use whatever they want. If it's not someone that I'm involved with doing a project with, I'm like use whatever you want. If that guy from that conference wants to use Wix, more power to him. But I have lots of horror stories from people who start out doing something because it seems easy and then it comes back to bite them later because it's not something that is scalable that's going to serve them. Because I don't serve developers, I'm serving end consumers, I don't deal with or have a lot of time for PHP snobs. I'm just like, “Okay, whatever. Go do your thing.” [Chuckles]

**CHUCK:&nbsp;** Yeah, that makes sense.

**JESSICA:&nbsp;** That's an interesting point you have between what's easy now versus what's going to remain easy. Because Chuck found it easier to implement something or other in Rails instead of in WordPress but maintaining his own Rails site did not stay easy. And Wix is another example of something that doesn't stay easy whereas WordPress is really well-designed for scaling and…

**KRONDA:** So, let me just go on the record and say that I'm not saying WordPress is easy. [Chuckles] It can be easy. There are ways to make it easier. But my friend Aaron Hockley wrote a great article that I can't stop talking about called 'WordPress is a DSLR: Squarespace is a Point and Shoot'. And it highlights the fact that WordPress while on the surface seems easy actually has a lot of complexity and really depends on how you set it up. I've seen beautiful, gorgeous-looking WordPress sites for huge technology companies and then got into the backend and it was just a hot mess under the hood. And they couldn't edit what they needed to edit. They couldn't change things based on their marketing objectives.

So, WordPress can be easy. But you have to know how to make it easy. Probably the safest, easiest way to get into WordPress for someone who's not technical is WordPress.com, because you're not worrying about hosting, updating. You're literally just like, make an account, choose a theme, and worry about your content. Which is what most business owners should be focusing 90% of their energy on.

**JESSICA:** What if you are technical?

**KRONDA:&nbsp;** If you are technical then your challenge is probably not getting into the weeds and [laughs] deciding you can custom build it better. I have, I've tried all the things. So, I have sort of a stack of tech that if someone came to me and said, “I have nothing and I need to get my business online,” which is in fact the case. I just talked to somebody last week who's, he had a partnership business and now he's transitioning. And he has to re-brand and rebuild everything from scratch. And that's like, “Okay, this is the domain register that I like. This is the host that I like. These are the theme companies that I trust where you can have a solid foundation and if you want to customize later or build new things or change your entire design you can do that with these themes.” Because really, when you buy a theme you're buying a theme company. You're buying the developers for that company and the support that they're going to give you. So, I’ve tried all the things and I've come up with sort of a road map that I like. And I'm in the process of creating that in webinar form or tutorial form for people to just go through.

**CHUCK:&nbsp;** So, how do you get over the technology bias or the 'I've heard bad things about WordPress' bias and actually evaluate and determine, “Okay, this tool though not ideally these ways is the right decision for me to make as far as my business goes,” so that I can set this up and get the outcome that I want?

**KRONDA:&nbsp;** So, I'm not one of those people that are like, “WordPress for everything.” If you have an enterprise-level business then you definitely should spend some time evaluating which tools. And there are people who I've said, “Maybe you should use Drupal,” like if you need something super custom, super modular. If you're a small business with less than 20 employees and you don't need super custom e-commerce, 99% of the time WordPress is probably going to get the job done. I guess you would have to evaluate, what is it that I need to do? How does my online marketing strategy fit into the rest of my business? And then figure out, can you get those things from WordPress? And spending a little bit of money for consulting from a professional could save you a ton of money. And actually, Refresh Portland is a local meetup that does regular talks. And they just had one that was like, something about dream killing I think. They were basically…

[Laughter]

**KRONDA:&nbsp;** [Inaudible] It's like I've had clients come to me with their ideas and I'm like, “That's a terrible idea.” And I go and prove to them why it's a terrible idea. And they thank me for it. Because they just saved, whatever, 20, 50 thousand dollars that they would have sunk into this terrible idea. So, doing that discovery upfront just is so, so valuable. And I met a woman at a networking lunch recently. And she has an email list of 1800 people and she has sunk 12,000 into her website for this app idea, sort of a Pinterest link app idea and has not yet made a dime. And I was like, “What if you took those 1800 people and asked them what they want and build that?” [Chuckles]

**SAM:&nbsp;** [Gasps]

**CHUCK:&nbsp;** [Chuckles] Heresy, right?

**KRONDA:&nbsp;** [Laughs] Apparently that's [inaudible] [laughs]

**SAM:&nbsp;** You mean, talk to users? [Chuckles]

**CHUCK:&nbsp;** Users don't know what they want.

**KRONDA:&nbsp;** You have 1800 people at your beck and call and you have not made money? Okay.

**CORALINE:&nbsp;** I'm…

**CHUCK:&nbsp;** That's what Steve Jobs said, right? Users don't know what they want.

**KRONDA:&nbsp;** Mm.

**CORALINE:&nbsp;** But taking a theme here. As developers who are trying to help a business owner we need to listen to what the business owner wants and not go by our own technology preferences. As the business owner we need to listen to what the customers want. Is there a lesson to be learned here, I wonder?

**KRONDA:&nbsp;** Odd. There does seem to be a theme.

**CORALINE:&nbsp;** Yeah.

**CHUCK:&nbsp;** I have a button to push on this though because I've done some custom work for people where they basically want say something that looks like Facebook or something. Let's just throw that out there. And so, I build them something that looks like Facebook and it turns out that's not actually what they wanted in the first place. So…

**KRONDA:&nbsp;** Right.

**CHUCK:&nbsp;** So, how do you get to that place where you really are… I think the word empathy has come up in the chat a couple of times and I think that's a good word. How do you empathize with them to the point where you're actually giving them what they need and not actually what they're saying they need?

**KRONDA:&nbsp;** So, the first thing that I ask when someone comes to me and says, “I need X,” is why? I think yes, you should give business owners what they want. But also, part of our job as developers is to do that discovery process every time and figure out, “Is that really what you want?” So, a good example, one of my mentors teaches the go wide, go deep technique. So, this is a way of doing discovery in a short time with potential clients where you ask them, “Okay, why do you need a website?” And they talk to you all about why you need a website. It's like, “Okay. Why else do you need a website?” And you just keep asking, keep asking. Because people are never going to tell you everything on the first time. So, you keep going, keep going. When you get as much as you can out of them then you go deep on one thing. So okay, of all the things that you've told me what is the most important thing? And then you go deep on that. Why is getting found in search results the most important thing to you? And going deep on that.

And so, he did this with a client. I think it was a dentist. He had his own dental practice. Until at the end the guy said, “Well, I'm selling the practice. So, I want to get found in the search results so that when potential buyers google me I come up in search results.” It's like that is such a hugely different focus from, “I need a website.”

[Laughter]

**SAM:&nbsp;** Yeah.

**KRONDA:** Or “I need a redesign.” If you don't get down to the real reason then you can't help people get to where they need to go. So, getting someone results, search engine results, so they can sell their business is so much different from getting them results so they can get more leads and get more customers. So, the discovery is just a huge part of that. So, not just a [inaudible] and this is the same way that medicine works, right? You don't go to the doctor and say, “Hey doc, I've got this symptom and I need this surgery.” [Chuckles] You may be right about your symptom or your diagnosis. In fact, I've actually been diagnosed by my wife correctly a hundred percent of the time, but she's a nurse. But you go and you say, “These are my symptoms,” and then you expect that the doctor is going to say, “Okay. Based on that, let's run these tests,” and then you're going to get the test results and then you're going to look at those and say, “Okay, these are your options to move forward to fix this issue.” And I think that web development should work the same way.

**SAM:&nbsp;** Well, running with that metaphor for a moment, are there specific tests that we can do? I mean I think a lot of us aspire to engineering or science as a model. And I don't think programming is anywhere near that yet. But are there simple litmus tests that we could do to say, “If you have this need then you need this technology, or this technology is contraindicated”?

**KRONDA:&nbsp;** I don't spend a whole lot of time thinking about the technology piece of it. If somebody comes to me with something that's wildly out of scope for what I think WordPress is capable of or that I think it'll be more work than they want to take on, then I'm happy to point them elsewhere. But when people come to me, they kind of know I'm a WordPress developer so we're probably going to use WordPress. [Chuckles] And I'm not going to spend a lot of time trying to talk them out of that unless they tell me something wild that makes me pause for thought. Most of the people who are coming to me are small business owners and non-profits who need to get online, want to be able to manage their content and post blogs. It's not rocket science.

**JESSICA:&nbsp;** Kronda, you made a point a minute ago about how important it is to drill in with questions. What do you want? What else do you want? What else do you want? Why do you want that? No, no, why do you want that? And why do you want that? That is so essential and also as a developer it's really fulfilling to meet their actual needs. I'm wondering, and this is a question for everybody, is it harder to do that as an internal developer than as a consultant? Because as an internal developer I've had a hard time getting people to answer the questions without getting mad at me for asking them. Is that me or do other people have that experience?

**SAM:&nbsp;** I've had that experience, definitely. I've not spent any time working as a consultant but I know a couple of people who have consulting careers. And one thing that they have in common is that they say that they liked being able to come in from outside the org chart and have people pay attention to them because they're costing all this extra money, because they have this perceived expertise. Whereas if you're inside the org chart I feel like in my first three to six months I have some latitude to ask some really annoying questions under the pretext that I don't know any better. But you get to a point where you sort of get pigeonholed.

**CHUCK:&nbsp;** One other thing that I'll throw in here. This is something we talk about a lot on The Freelancers' Show. And asking these questions and doing this kind of discovery is kind of part of your job. And I think Sam alluded to that pretty well. If you can't get down to what they need and what they want and you can't deliver them the solution to their problem and get them the results that they want, then you haven't done a good job of doing your job. But as a regular employee, at least at the jobs that I worked, if we went off on the wrong direction or built the wrong thing or did the wrong kind of thing because we weren't asking those questions, that was somebody else's job. And so, it was somebody else that got nailed for it. In other words as a consultant, my success is predicated on my client's success. So, I start asking these questions.

But as a full-time employee a lot of times there's a product manager or project manager or a developer manager or a team lead or somebody who has kind of been assigned this job. And so, in a lot of cases the rest of the developers don't have to ask these questions because it falls on somebody else.

**CORALINE:&nbsp;** I kind of take exception to that, Chuck. Because I still think it's our job to do that, whether or not…

**CHUCK:&nbsp;** I agree.

**CORALINE:&nbsp;** Yeah.

**CHUCK:&nbsp;** But I think a lot of times you can skate by without doing it because somebody else is going to take the heat if it's not done properly.

**CORALINE:&nbsp;** Yeah.

**JESSICA:&nbsp;** Yeah, and it…

**CORALINE:&nbsp;** So, [inaudible] blame and responsibility right? It's like, it's everyone's responsibility but one person's going to take the blame if it doesn't happen.

**CHUCK:&nbsp;** Yeah.

**CORALINE:&nbsp;** But you're not successful as an organization unless you're successful as an organization. So, I don't really care whose fault it was. If there's something I could have done to prevent this bad thing from happening it's my responsibility.

**CHUCK:&nbsp;** I agree.

**KRONDA:&nbsp;** Yeah, if I think way, way back to when I had a job I feel like I was always pretty well-listened to in terms of asking questions about features and why they were happening and what exactly needed to happen. And I feel like I was… and I think maybe that's rare. I actually am on a mission to organize my entire, at least my business digital life. So, I'm going through a lot of old files and I found a recommendation from my first mentor from my internship while I was still in school. And that was one of the things he talked about, was that I took the initiative to, when I got conflicting messages from the project manager or the lead developer, that I would go and schedule meetings with them and going, “He's telling me this but he's telling me this. So, what's true and why is there no documentation?” [Laughs] And they were like, “Oh. Yeah, this is really broken,” and really respected and valued that. But that's probably rare.

**CHUCK:&nbsp;** Yeah. And I can also say that in a lot of cases, especially as a full-time employee, also as a consultant, some of these questions come up while I'm actually building stuff, right? So, I start getting into, “Okay, I think I pretty well understand the direction that we want to go and why,” and then I start building a specific feature and it's like, “Okay, now how exactly do you want this to work?” And I start going through this process again. “Well, why do you want it to work this way instead of that way?” and “Why don't we do this instead of that?” and start to figure that out again. And so, it's a process that you don't just go through at the beginning and then you know all the answers. It does clarify some things but sometimes you're going to wind up having to clarify little bits of it as you go as well.

**JESSICA:&nbsp;** Kronda, do you have any tips on how to get people to value these questions instead of being annoyed by them?

**KRONDA:&nbsp;** Charge them for it?

[Laughter]

**CHUCK:&nbsp;** I knew I liked you.

**KRONDA:&nbsp;** [Laughs] I do. I started doing paid discovery about a year and a half ago. And so yeah, if it goes beyond, depending on the size of the job, I'll do minimum probably two to four meetings of discovery. And I charge for that. And I have to learn this lesson over and over again. People just don't value what they don't pay for. And I learned that lesson with my course and with my clients. And one of my friends who runs BlackFreelance.com tweeted a few weeks ago that the only thing she trusts is investment and action, and that's it. And I love that because people will talk all day long about what they're going to do. But as soon as there's money on the line then they're just paying more attention. They just are. Because they want to get the return on that investment.

**CHUCK:&nbsp;** If you want an hour's discussion on this I'm going to put a link in the show notes to an episode of The Freelancers' Show we did with Brennan Dunn where we talked about [inaudible].

**KRONDA:&nbsp;** Brennan. Brennan's one of the first people I started following about this. I love him. I actually have a post on my blog that's like, “This is how I learned to run a successful web business,” and it's basically all the people that I… so, the trail of people that I started following to learn about all this stuff. And it was like, Brennan, Troy Dean, Nathan Barry, James Clear, a few other people.

**CHUCK:&nbsp;** Yeah, there's a lot of great stuff out there. We've been talking a lot about asking these why questions for clients or customers within the business we work in. but in a lot of cases we really are focused on the user. And we kind of talked a bit about this at the beginning of the show. How does the conversation with a customer, say you're building a restaurant website, how does the conversation with patrons of the restaurant and finding out what they want differ from the conversation you're going to have with the restaurant manager or owner?

**KRONDA:&nbsp;** Good question. I really haven't had… well one, I haven't built a restaurant website since I was in school. And actually it was a food cart. So…

[Laughter]

**KRONDA:&nbsp;** And I was a student and it was free. So, there was no user research. There was, “This is what I would want if I was hungry and looking for [laughs] a place to eat.”

**CHUCK:&nbsp;** Right.

**KRONDA:&nbsp;** So, and a lot of times if you can put yourself in that mindset, if you don't have the money to do user research but also there's a lot of cheap ways to do user research. There's a site where you can, I think you can do it for free. They'll give you five minutes of just somebody using your website and they'll video that person talking through, “This is my experience of using this website. This is what I think it's supposed to do. This is where I think I'm supposed to go.” And that's free for five minutes of that. And that could be super eye-opening. [Inaudible] you've had this experience of user testing where you think, “Oh, this user flow is so intuitive. It's so great,” and then people get in there and they have no idea. And you're like, “Wait, but the big button is right there,” and I think just, even if it's getting your friends or getting other eyes on it, somebody in your target market to go through and look at it.

And the course that I have now, I've built out the structure and I've just started inviting colleagues and people that I meet who are in my target market to go in and tell me what they think about it. And so, doing betas and getting people exposed and getting feedback is huge. Did that answer your question?

**CHUCK:&nbsp;** Yeah, it did. I'm just trying to think of what else to say or ask because it, yeah.

**KRONDA:&nbsp;** I'm going to WordCamp Orange County next month and I proposed a talk about getting from zero to WordPress for business owners. And they like the idea but they were like, “We want to make it a discussion and we want to make it 90 minutes instead of 45 to lead people through,” which I am really looking forward to. Because that's really one thing that I'm lacking, is I know that a lot of people find WordPress challenging, but where are they getting stuck? Because I have so much, I have expert peers and I have so much experience with it. And even WordPress.com, I helped my cousin create a site for her artwork but then she'll still email me and go, “Oh, I can't get this thing to work,” or, “I don't know how to do this thing,” or, “I'm trying to do e-commerce.” I'm like, “Wait, whoa, what? You're trying to do e-commerce and you've never touched WordPress before? Let's back that up a little bit.” But really getting access to people to know what they have problems with and where they get stuck, I'm really looking forward to having that conversation.

**CORALINE:&nbsp;** So Kronda, I know you had a GoFundMe or a Kickstarter recently to fund one of your projects. Could you talk about that a little bit?

**KRONDA:&nbsp;** Sure. My course is called 'Websites That Work' although that's probably going to change at some point. But I ran an Indiegogo to help…

**CORALINE:&nbsp;** Oh, that's what it was, yeah.

**KRONDA:** Yeah. I ran an Indiegogo to help fund that. So, I got a lot of good response but it was hard, hard work. And it was definitely the lar-… I've run like really small fund raising efforts before to fund conference travel and things like that. But this was the first larger fund raiser that I've done. And it was really challenging. And I got a lot of great support but I didn't meet my goal. And I had the thought afterwards, I got to 72% of my goal which is about what women make on the dollar. [Chuckles]

**CORALINE:&nbsp;** Interesting.

**KRONDA:&nbsp;** Which I found really interesting.

**CORALINE:&nbsp;** Yeah.

**SAM:&nbsp;** Mmhmm.

**KRONDA:&nbsp;** You know, the idea that by being an entrepreneur you can sort of escape the forces of larger societal forces. But not really. My friend Mia who runs Black Girl Danger is in the middle of a 500-hour fund raiser to fund the next year of their work really featuring the voices of queer, trans, POC writers, some of whom are writing and publishing for the first time. And I see how hard she's working to get people to engage and to actually take action and donate. And then I see an article about some guy in LA who's a people-walker and gets paid to walk people around. [Laughs] I'm like, “Okay.”

**SAM:&nbsp;** Or the potato salad.

**KRONDA:&nbsp;** Or potato. I was going to try not to go to the potato salad, but yes. The potato salad guys. Also…

**SAM:&nbsp;** Oh, I went there for you.

[Laughter]

**KRONDA:&nbsp;** Also a thorn in my side. But that said, I feel like it was a really good experience and a learning experience. And it's great to get those people who you know, like okay, these are the people who are really invested, literally invested in your success. And so, I'm looking forward to, this is the week I'm actually going to get back to some of the people who claimed rewards and start getting that going. So, that's going to be fun.

**CHUCK:&nbsp;** So, Sam mentioned in the email that was sent around that you have a pretty interesting origin story. I like the term origin story too, because it makes everybody sound like a superhero.

**KRONDA:&nbsp;** [Laughs]

**CHUCK:&nbsp;** Do you want to tell us how you became a su-…

**CORALINE:&nbsp;** Everyone is a superhero.

**CHUCK:** Do you want to tell us how you became a superhero?

**SAM:&nbsp;** Kronda double [inaudible].

[Laughter]

**KRONDA:** Sure. So, it was a very cliché sort of lightbulb-ish moment. So, the bulk of my, I won't even call it a career. I was definitely a person who was just going from job to job. I did UPS and I did a lot of retail stuff and Starbucks. And I'm still kind of sad that I was a barista before the whole latte art thing became a thing, because I think I could have been a contender. But, so I was project managing first at Kinko's which kids ask your parents but that's now FedEx Office. And then I went to work for a very, very small startup, marketing company that was doing [chuckles] essentially junk mail. I'm like, “Oh, this is who makes junk mail.” So, most of their stuff was print marketing but they had some web clients.

So, we had a contract developer who was doing some work for us. And I remember asking one of our developers, “What is CSS? What does that even mean? What does it do? I don't understand.” He tried to explain it and at the end of his explanation I still had no idea what he was talking about. But I had a meeting with our contract developer and when he left, I had a couple of thoughts. One was that he was probably making three times as much money as I was. And two, was that he didn't have to deal with my boss. He waltzed in, we had our meeting, he waltzed out, with his jaunty cap and his laptop to work wherever he wanted. And immediately I went back to my office and went to the PCC, which is Portland Community College, website and called them and said, “What do I have to do to become a developer?”

And so, I really didn't look back after that. And I started at PCC just intending to get an Associate's Degree and then I got a scholarship from the Ford Family Foundation. And that pays for any school that you want to go to in Oregon. So, at that point I transferred to the Art Institute of Portland and I got my official degree in web design and interactive media. And if I was starting over today, I'd probably, I'm not sure I would choose that route. But it made sense at the time and it was great for connections and getting my foot into the community here. And I got my internship while I was still in school and then got hired full-time after that. So, it worked out really well. And I started out actually in Drupal. I worked for an agency that does Drupal websites. So, I was really happy to go from Drupal to WordPress and not the other way around. [Laughs]

**SAM:&nbsp;** I just have to give a quick shout-out to PCC. I did my first two years of my Bachelor's Degree at Portland Community College. And it was an amazing environment. It was great. I love community college. It's a wonderful option for a lot of people who couldn't afford a four-year degree, which at the time included me. [Chuckles] So, yeah.

**KRONDA:&nbsp;** Yeah. I had a great time there. And somebody encouraged me to take a class that was literally all about just getting scholarships. And that's how I ended up getting the scholarship opportunity to go to a four-year school.

**CHUCK:&nbsp;** Very cool.

**KRONDA:&nbsp;** But it's very interesting to go from… I mean, when I started that path I always had in mind, “I want to work for myself.” But I also knew that I wanted to get a job to get experience in the real work world. And so, what's also been interesting was going from going out on my own in the beginning and having a very much like, “Okay, I'm just going to make websites and it's just going to be me and I'm going to code into the sunset.” I didn't want the complexity of trying to hire people or do design or all of these conceptions that I had that have slowly changed as I've been following all the awesome business people that, some of whom were mentioned earlier. When I realized the website isn't actually what they're coming to you for. That's what they think they need but what they really need is an entire online marketing system. And that is a much more complex and high-value proposition. So, I really switched my focus from building the website to what happens after that. How do you actually get traffic to the website? Because the whole if you build it they will come days are long over.

**SAM:&nbsp;** You can pick as many as you like, as long as it takes less than 15 minutes.

[Laughter]

**SAM:&nbsp;** How long is the longest Dave's gone?

**CHUCK:&nbsp;** I don't know. Probably about that long. 20 minutes? I don't know.

**SAM:&nbsp;** [Laughs] Yeah.

**KRONDA:&nbsp;** And remind me what the theme of the… is there a theme to the pick?

**CHUCK:&nbsp;** Whatever you want. Anything that… I tell people that it's anything that's made your life better. So, if it's a coding tool or a TV show or a book or something else, whatever.

**KRONDA:&nbsp;** I'll give you my picks for my perfect tech stack for small business owners.

**CHUCK:&nbsp;** Ooh.

**KRONDA:&nbsp;** Who are starting from nothing. So, those would be Hover for domain registration, Flywheel for hosting, WordPress obviously. But more specifically theme companies that I really, really like for WordPress are Thrive Themes which is a completely conversion-focused theme company which I don't think I've ever seen anyone do that. They base their features on what works to get better conversions so I love them.

**SAM:&nbsp;** Wow.

**KRONDA:&nbsp;** Genesis of course. Genesis is sort of the powerhouse theme company known to the WordPress community. So, that's always a great foundation to build your site on. Email marketing is something I think that many people overlook. The fact that if you just have your website up and there's no way to really nurture those leads and capture them and keep in touch with them, you're really leaving a lot of money on the table. So, for email marketing and customer relationship management I really love ActiveCampaign. I think it does most of what the heavy-hitters like Infusionsoft or ONTRAPORT do at about a tenth of the price. So, that's my tech stack for business owners.

And then my pick for just a cool thing I discovered recently is Lingo app. And that is a tool for organizing and sharing all your visual assets. And I found that through the Noun Project website.

**CHUCK:&nbsp;** I'm going to have to check that out. That's a problem that I've had for a while.

**KRONDA:&nbsp;** Yeah. I was working on a slide deck and I was like, “Oh, I need visuals.” So, I went to the Noun Project which is where, it was just my go-to for that stuff. And then they had a big banner saying, “Ooh, Lingo app.” And I was like, “Oh, what's that?” And I really, I really am bad about having shiny objects syndrome and grabbing all these tools. But they do have a free tier and so I downloaded it. I was like, “Oh.” It just lays out all your stuff in a nice little grid and then you can tag it and organize it. And I couldn't resist it. So [laughs].

**CHUCK:&nbsp;** Alright. And if people want to look you up or hire you, where do they go?

**KRONDA:&nbsp;** They would go to KarvelDigital.com spelled like Marvel but with a K in front. I'm also KarvelDigital on Twitter and Karvel Digital on Facebook. And then I have a personal blog and Twitter at Kronda.com and @Kronda.

**CHUCK:&nbsp;** Alright. Well, let's go ahead and hear what everybody else's picks are. Jessica, do you have some picks for us?

**JESSICA:&nbsp;** Sure. Right now I am in Tybee Island, Georgia on vacation with my kids. And I'm going to pick Tybee Island because it's this cute little vacation spot that has really nice natural beaches with warm water and dolphins and crab. And it's just lovely and it's not terribly expensive. Tybee Island is close to Savanna. And I will tell you that if you come here, bring your own coffee because this place is so not hipster. You can't get good coffee on this island. But you can have a lot of fun on a beautiful beach. Oh, and there are sea turtle conservation areas that you walk over to get to the beach. It's really lovely and not too built up. The end.

**CHUCK:&nbsp;** Alright. Coraline, what are your picks?

**CORALINE:&nbsp;** I have an article for a pick today. It's called 'The empty brain'. It was written by Robert Epstein and published on Aeon.co. The article takes issue with the notion that brains are like computers. It cites a book called 'In Our Own Image' which was written by an AI expert named George Zarkadakis. And Zarkadakis points out that the metaphors that people have employed to explain human intelligence always reflects the most advanced thinking of the era that spawned it. So, at the beginning there was a very spiritual aspect to the notion of intelligence. There was a period where we considered intelligence to be, that you can model intelligence as a fluid, dynamic system. There was a hydraulic model of the brain. In Newtonian physics, a sort of mechanistic picture of how intelligence worked. And in our modern day the metaphor that we used is that, “Oh, brains are just like computers.” But that's not really true. We are not information processors. We don't store information in specific locations. All the things that computers do are not the things that our brains do.

And Robert Epstein argues that by adopting this metaphor we're limiting the information that we can gather about the brain and it's coloring the research we're doing about our brain. So, he's calling for a metaphor-free theory of human intelligence that will let us more fully explain what it means to be intelligent without limiting ourselves to the technological metaphor. And the article is great. It ends with a statement that says, “We are organisms, not computers. Get over it.” And I just, I thought it was a wonderful read. So, that's my pick.

**CHUCK:&nbsp;** That's interesting. Especially since I find that in a lot of cases it's easier to explain things with metaphors. But yes, I can also see where it would limit our ability to accurately describe what's going on somewhere.

Sam, what are your picks?

**SAM:&nbsp;** Well, I was going to say I had one but after Coraline's pick I actually want to mentioned a novel called 'Blindsight' by Peter Watts. I think this has been mentioned on the show before. But it's a really interesting article. It's super bleak and really depressing. So, if you're sensitive to that sort of thing you might actually want to pass on this one. But…

**CORALINE:** I'm in.

[Laughter]

**SAM:&nbsp;** Right. But if you like being emo and you like thinking about the brain this has some really interesting ways of describing different failure modes of the brain which I found really interesting.

Yeah, so the other thing actually calls back to a comment that I think Kronda made earlier. She talked about PHP snobs. And this is a blog post by Aurynn Shaw that really…

**CORALINE:&nbsp;** Yes.

**SAM:&nbsp;** Yes, this changed the way that I look at the tech world. And she talks in this blog post about our tendency as members of a tech community to badmouth other techs. It's sort of tech tribalism. And this in itself is an interesting thing to talk about but she takes it further and she makes the important point that when we criticize a technology we're also implicitly or sometimes explicitly criticizing the people who use it. And then she goes on to talk about how this becomes a gate-keeping mechanism where people can feel like they're not really members of a tech community unless they also participate in making fun of those other technologies and communities. It's really, really interesting. And I hope we can get her on the show to talk about this a bit more. But for now, I'll just put a link in the show notes and you should definitely read it. That's it for me.

**CHUCK:&nbsp;** Awesome. I'm going to throw a few picks out there partially inspired by Kronda and her pick for her tech stack. Because I use pretty much that entire tech stack. The only differences are that I have a custom theme that was built for me that maintains the DevChat.tv look and feel when I switched back. But I use Thrive Themes and I use, I don't even remember them all. But I use a lot of the things that she mentioned there.

StudioPress is something that I use because I have done a bit of custom development, and Hover.com. My hosting is Digital Ocean though and my email, and this is something that I've picked on the show before, but I just love their product. It's Drip. You can get it at GetDrip.com. And it allows you to set up all kinds of different workflows and campaigns and things like that. I think a lot of these other ones offer some of those same things. But anyway, really, really love those. And yeah, so I've been enjoying that.

And that's kind if all I've got this week. But yeah, to wrap up the show, thanks for coming, Kronda.

**KRONDA:&nbsp;** Thanks for having me.

**CORALINE:&nbsp;** It was really wonderful to talk to you, Kronda. Thank you so much.

**SAM:&nbsp;** Thank you.

**KRONDA:&nbsp;** Always, it's lovely to chat with you, Coraline. One of the smartest people I know.

**CORALINE:&nbsp;** Aw, thank you.

**KRONDA:&nbsp;** We're in the standing ovation club.

**CORALINE:&nbsp;** We are in the Standing Ovation Club. That's pretty cool. [Chuckles]

**KRONDA:&nbsp;** I didn't know you could get a Standing Ovation at a tech conference until I met Coraline.

**CORALINE:&nbsp;** I've gotten two so far. I'm really lucky. Woo!

**SAM:&nbsp;** Yay.

**KRONDA:&nbsp;** [Chuckles]

**CHUCK:&nbsp;** Alright, well we'll go ahead and wrap this thing up and we'll catch you all next week.

**_[Bandwidth for this segment is provided by CacheFly, the world's fastest CDN. Deliver your content fast with CacheFly. Visit C-A-C-H-E-F-L-Y dot com to learn more.]_**

**_[Would you like to join a conversation with the Rogues and their guests? Want to support the show? We have a forum that allows you to join the conversation and support the show at the same time. You can sign up at RubyRogues.com/Parley.]_**


