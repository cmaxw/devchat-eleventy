---
layout: layouts/post.njk
title: >
  JSJ 340: JavaScript Docker with Julian Fahrer
date: 2018-11-20 11:00:35
episode_number: 340
duration: 58:15
audio_url: https://media.devchat.tv/js-jabber/JSJ_340_JavaScript_Docker_with_Julian_Fahrer.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

**Panel:**

- Aimee Knight
- AJ O’Neal
- Joe Eames
- Charles Max Wood
- Chris Ferdinandi

**Special Guest:** [Julian Fahrer](https://www.linkedin.com/in/julian-fahrer/)

In this episode, the panel talks with [Julian Fahrer](https://www.linkedin.com/in/julian-fahrer/) who is an online educator and software engineer in San Francisco, California (USA). The panel and the guest talk about containers, tooling, Docker, [Kubernetes](https://kubernetes.io), and more. Check out today’s episode!

**Show Topics:**

0:00 – [Advertisement: KENDO UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

1:00 – Chuck: We have today Julian. Julian, please tell us why you are famous?

1:10 – [Julian (Guest):](https://www.linkedin.com/in/julian-fahrer/) I am a software engineer in San Francisco.

1:35 – Chuck: [We had you on Elixir Mix before](https://devchat.tv/elixir-mix/emx-010-docker-with-julian-fahrer/) – so here you are! Give us a brief introduction – tell us about the

1:56 – Julian: About 11 hours. You can get it done in about 1 week. It’s a lot to learn. It’s a new paradigm, and I think that’s why people like it.

2:22 – Aimee: How did you dive into Docker? I feel that is like backend space?

2:35 – Julian: I am a full stack engineer and I have been in backend, too.

3:10 – Aimee: I know that someone has been in-charge of our Dev Ops process until the first job I’ve had. When there is a problem in the deployment, I want to unblock myself and not wait for someone else. I think it’s a valuable topic. Why Docker over the other options?

3:58 – Julian: Let’s talk about what Docker is first?

4:12 – Chuck.

4:23 – Julian: Containers are a technology for us to run applications in isolation from each other.

_Julian talks in-detail about what contains are, what they do, he gives examples, and more. Check it out here!_

5:27 – Chuck: Makes sense to me. I think it’s interesting that you are talking about the dependencies. Because of the way the Docker works it’s consistent across all of your applications.

5:59 – Julian. Yes, exactly.

_Julian talks about containers some more!_

6:56 – Chuck asks a question about the container, Docker, and others.

7:03 – Guest: You don’t have to worry about your company’s running operating system, and what you want to use – basically everything runs in the container...

7:30 – Chuck: This short-circuits a lot of it.

7:46 – Guest.

8:00 – Chuck: People will use Docker if your employer mandates it. Is there a learning curve and how do you adapt it within the person’s company?

8:25 – Guest.

8:52 – Aimee: We are using it, too.

8:57 – Guest: Awesome!

9:03 – Aimee: The only downfall is that if you have people who are NOT familiar with it – then it’s a black box for us. We can’t troubleshoot it ourselves. I want to be able to unblock from our end w/o having to go to someone else. That’s my only issue I’ve been having.

10:03 – Guest: I want to see that tooling to be honest.

10:12 – Aimee: Can you talk about how Civil and Docker work together?

10:19 – Guest: Yes!

_Julian answers the question._

10:56 – Chuck: How much work it is to get a Docker file to get up and running? How much work would it take?

11:18 – Guest: For the development side in about an hour or two – this is if you understand it already. Putting it into production that’s a different story b/c there is a million different ways to do it. It’s hard to put a time on that.

12:24 – Chuck: Let’s assume they have the basic knowledge (they get how server setup takes place) is this something you could figure out in a day or so?

12:47 – Guest: If you have touched Docker then you can do it in a day; if never then not really.

13:02 – Guest: There might be some stones you will fall over.

13:39 – Panel: The part of the learning curve would be...

13:52 – Guest: The idea behind the container is that the container should be disposable. You could throw it away and then start a new one and it’s fresh and clean.

_Guest continues with his answer._

15:20 – Chuck: I have seen people do this with their database engine. If you need to upgrade your database then they grab their container...

15:55 – Guest: You don’t have to worry about setting it up - its provided in the container and...

16:09 – _Chuck asks a question._

16:17 – Guest: For production, I would go with a hosted database like RJS, Azure, or other options.

_Guest continues._

17:13 – Chuck.

17:20 – Guest: If it dies then you need to...

17:30 – Chuck: We talked about an idea of these containers being something you can hand around in your development team.

_Chuck asks a question._

17:50 – _Guest answers the question. He talks about tooling, containers, web frontend, and more._

18:48 – Guest asks Aimee a question: Are you using Compost?

18:50 – Aimee: I don’t know b/c that is a black box for us. I don’t know much about our Docker setup.

19:00 – Guest to Aimee: Can I ask you some questions?

19:14 – _Guest is giving Aimee some hypothetical situations and asks what their process is like._

19:32 – _Aimee answers the question._

20:11 – Guest: You have customizing tooling to be able to do x, y, and z.

20:25 – Aimee: They have hit a wall, but it’s frustrating. Our frontend and our backend are different. We are getting 500’s and it’s a black box for us. It’s the way that ops have it setup. I hate having to go to them for them to unblock us.

21:07 – Chuck: I have been hearing about [Kubernetes](https://kubernetes.io). When will you start to see that it pays off to use it?

21:20 – _Guest answers the question._

22:17 – If I have a simple app on a few different machines and front end and job servers I may not need [Kubernetes.](https://kubernetes.io) But if I have a lot of things that it depends on then I will need it?

22:35 – Guest: Yes.

22:40 – Chuck: What are the steps to using it?

22:45 – Guest: Step #1 you install it.

_The guest goes through the different steps to use Docker._

25:23 – Aimee: It makes sense that your UI and your database don’t live in the same container, but what about your API and your database should that be separate?

25:40 – Guest: Yes they should be separate.

26:09 – Chuck: What has your experience been with Docker – AJ or Chris?

26:17 – Panel: I have used a little bit at work and so far it’s been a black box for me. I like the IDEA of it, but I probably need to take Julian’s course to learn more about it! (Aimee agrees!)

One thing I would love (from your perspective, Julian) – if I wanted to get started with this (and say I have not worked with containers before) where would I start?

28:22 – [Advertisement – Sentry.io](https://sentry.io/welcome/)

29:20 – Guest: Good question. You don’t have to be an expert (to use Docker), but you have to be comfortable with the command line, though.

30:17 – Panel: Is there a dummy practice within your course?

30:27 – Julian: We run our own web server and...

30:44 – Panel: I need to check out your course!

31:04 – Guest: It is some time investment, but it’s saved me so much time already so it makes it really worth it.

31:38 – Panel: You are a version behind on Ruby.

31:46 – Guest: ...I just want to make code and not worry about that.

32:04 – Chuck: Updating your server – you would update Ruby and reinstall your gems and hope that they were all up-to-date. Now you don’t have to do it that way anymore.

32:37 – Guest: You know it will behave the same way.

32:48 – Guest: I have some experience with Docker. I understand its value. I guess I will share my frustrations. Not in Docker itself, but the fact that there is a need for Docker...

35:06 – Chuck.

35:12 – Panel: We need someone to come up with...

35:40 – Panel: It’s not standard JavaScript.

35:51 – Chuck: One question: How do you setup multiple stages of Docker?

36:12 – Guest: The recommended way is to have the same Docker file used in the development sate and through to production. So that way it’s the same image.

37:00 – Panel: ...you must do your entire configuration via the environmental variables.

37:29 – Chuck asks a question.

37:36 – Panel: If you are using [Heroku](https://devcenter.heroku.com) or [Circle CI](https://circleci.com)...there is a page...

38:11 – Guest and Chuck go back-and-forth.

39:17 – Chuck: Gottcha.

39:18 – Guest.

39:52 – Chuck: I have seen systems that have hyberized things like using Chef Solo and...

You do your basic setup then use Chef Solo – that doesn’t’ make sense to me. Have you seen people use this setup before?

40:20 – Guest: I guess I wouldn’t do it.

40:30 – Chuck.

40:36 – Guest: Only reason I would do that is that it works across many different platforms. If it makes your setup easier then go for it.

41:14 – Chuck: Docker Hub – I want to mention that. How robust is that? Can you put private images up there?

41:38 – Guest: You can go TOTALLY nuts with it. You could have private and public images. Also, your own version. Under the hood it’s called container registry. Yeah, you can change images, too.

42:22 – Chuck: Should I use container registry or a CI system to build the Docker system and use it somewhere else?

42:35 – Guest.

43:24 – Chuck: Where can people find your Docker course?

43:30 – Guest: [LEARN DOCKER ONLINE!](https://learndocker.online) We are restructuring the prices. Make sure to check it out.

44:05 – Chuck: Picks! Where can people find you online?

44:14 – Guest: [Twitter!](https://twitter.com/jufahr) eBook – Rails and Docker! Code Tails IO!

**Links:**

- [JavaScript](https://www.javascript.com)
- [jQuery](https://jquery.com)
- [React](https://reactjs.org)
- [Elixir](https://elixir-lang.org)
- [Elm](https://elm-lang.org)
- [Vue](https://blog.closebrace.com)
- [ESLint](https://eslint.org)
- [Node.js](https://nodejs.org/en/)
- [Circle CI](https://circleci.com)
- [Twitter – Circle CI](https://twitter.com/circleci?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Heroku](https://devcenter.heroku.com)
- [Surge.sh](https://surge.sh)
- [Kubernetes.io](https://kubernetes.io)
- [Berg Design](https://bergdesign.com/brightness/)
- [Rian Rietveld](https://rianrietveld.com/2018/10/09/i-have-resigned-the-wordpress-accessibility-team/)
- [PickleJS](https://www.picklejs.com)
- [Soft Cover.io](https://www.softcover.io)
- [Ebook – boilerplate](https://github.com/cferdinandi/ebook-boilerplate)
- [EMx 010 Episode with Julian Fahrer](https://devchat.tv/elixir-mix/emx-010-docker-with-julian-fahrer/)
- [Learn Docker](https://learndocker.online)
- [Indie Hacker – Julian Fahrer](https://www.indiehackers.com/jfahrer)
- [LinkedIn – Julian Fahrer](https://www.linkedin.com/in/julian-fahrer/)
- [GitHub – Julian Fahrer](https://github.com/jfahrer)
- [Twitter – Julian Fahrer](https://twitter.com/jufahr)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)
- [Sentry](https://sentry.io/welcome/)
- [Cache Fly](https://www.cachefly.com)
-

**Picks:**

AJ

- [Zermatt Resort](https://zermattresort.com/)
- Heber Area

Aimee

- [Surge.sh](https://surge.sh/)

Chris

- [BergDesign](https://bergdesign.com/brightness/)
- [React, WP, and a11y](https://rianrietveld.com/2018/10/09/i-have-resigned-the-wordpress-accessibility-team/)
- [gomakethings.com](https://gomakethings.com/)

Joe

- [Docker Videos by Dan Wahlin](https://www.youtube.com/watch?v=cLT7eUWKZpg)
- Rock Climbing/Indoor Rock Climbing

Charles

- [Extreme Ownership - Book](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2)
- Playing DND

Julian

- [PickleJS](https://www.picklejs.com/)
- [Postive Intelligence](https://www.amazon.com/Positive-Intelligence-Individuals-Achieve-Potential/dp/1608322785)

### Transcript
