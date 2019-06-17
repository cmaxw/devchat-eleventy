---
layout: layouts/post.njk
title: >
      RR 390: Creating a Heroku-Like Deployment Solution with Docker with Pedro Cavalheiro
date: 2018-11-27 11:00:41
episode_number: 390
duration: 54:06
audio_url: https://media.devchat.tv/ruby-rogues/RR_390_Creating_a_Heroku-like_Deployment_Solution_with_Docker_with_Pedro_Cavalheiro.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

 **Panel:**

- Dave Kimura
- Eric Berry
- Charles Max Wood
- Nate Hopkins 

**Special Guest:** [Pedro Cavalheiro](http://pecavalheiro.com)

In this episode of Ruby Rogues, the panelists talk with [Pedro Cavalheiro](http://pecavalheiro.com) who is from Brazil, but currently resides in Hamburg, Germany where he works at Xing. He is a software engineer, an actor, and has been working with the web since 2010. He has worked mostly with Ruby and PHP languages, and since 2015 has worked full-time with Ruby on Rails. The panelists and Pedro talk about his background and his article. Check it out!

**Show Topics:**

0:00 – Advertisement: [Sentry.io](https://sentry.io/welcome/)

1:04 – Chuck: Hi! Panel is Eric, Dave, Nate, myself – and our special guest is [Pedro Cavalheiro!](https://github.com/pecavalheiro) Please introduce yourself! Is that Spanish or Portuguese?

Chuck: P.S. – The [DevRev](http://thedevrev.com) is my new show and check it!

1:57 – [Guest](https://github.com/pecavalheiro): My name means gentleman! Here at your service.

2:05 – Guest: I am a developer and worked with web technologies for 10 years. I do some DevOps stuff and working with Ruby. I just moved to Hamburg, Germany with the same company.

3:02 – Chuck: How do you make that decision?

3:07 – Guest: There is no magical answer. It depends on your needs and what time you have? At the time when I wrote that article I worked with a small startup company. For us, we used [Heroku](https://www.heroku.com) at the time.

4:09 – Guest: Current company is bigger and 500 developers. We have different ops teams and they have their own infrastructure and tools. They have more money, time, and people. For what they need it needs to be more scalable. It depends on the company and the requirements and your resources.

5:00 – Panel: I need to preface first: I love hosted solutions, but at the same time there is a hidden cost set that people don’t think about.

6:16 – Guest: If you compare your own infrastructure vs. cloud platform they will think that it is cheaper than having a hosted solution.

7:28 – Chuck: Yeah, that’s a discussion that I find that I have with myself and with my own company. It makes a ton of sense to have some system setup and it’s something that I am managing.

8:05 – _Panelists talks about AWS and AMI._

9:06 – Guest.

9:21 – Panel: Can you talk about the [article](https://speakerdeck.com/pecavalheiro/creating-a-heroku-like-deployment-solution-with-docker) you wrote? Why did you write it? Give us some context into the [article](https://speakerdeck.com/pecavalheiro/creating-a-heroku-like-deployment-solution-with-docker) and where are we now?

9:48 – _Guest talks in-detail about his_ [_article_](https://speakerdeck.com/pecavalheiro/creating-a-heroku-like-deployment-solution-with-docker) _and where he was in life when he wrote this_ [_article!_](https://speakerdeck.com/pecavalheiro/creating-a-heroku-like-deployment-solution-with-docker)

14:10 – Panel: How much time did you invest into that?

14:16 – Guest: Less than a week; maybe 3-4 days for the whole process. Writing the article took about 2 days.

14:50 – _Chuck talks about Docker, Azure, Dokku among other things._

Question: Where do you look at all of these different things, and how do evaluate?

16:02 – Guest: I am a huge [Heroku](https://www.heroku.com) fan, and I would suggest people to use it. It’s brilliant. The company I work today it could be expensive to use b/c it’s a heavy load application and it won’t work. As for me (personal projects) I will play around these different tools.

19:02 – Panel: It’s easy to get up and running of [Heroku.](https://www.heroku.com) I think it’s similar to [Kubernetes.](https://kubernetes.io)

20:00 – Guest: I agree with that.

_The guest shares a story that relates to this topic._

21:45 – Panel: If you are using self-hosted...put some security on your application. Even if it’s just a demo you are protecting your environment.

22:17 – Chuck: Where do you guys come down on making these types of decisions?

22:30 – Panel: I see it as an investment; especially if your development team is small.&nbsp;

Eventually, it will scale but in the early days of a project it is a legit choice to use [Heroku](https://www.heroku.com) or [Beanstalk.](https://beanstalkapp.com)

[CodeFund](https://codefund.io) is still on [Heroku.](https://www.heroku.com) Right now it’s solving those problems for us.

23:45 – Chuck: Look at everything that we are all running. What do you guys recommend?

24:19 – Panel: I use [S3](https://docs.aws.amazon.com/s3/index.html#lang/en_us), elastic search, among other things.

25:56 – Guest: I have a similar story. I had some friends who were spending more than $2,000 a month on Heroku. We tried to find how to reduce the amount of money. We removed the application from the Heroku and put it inside a local machine (probably $800 computer) that runs 24/7 and the only expenses were Internet ($50.00 / month) and 1 SSD ($100) and 1 micro-server through Amazon. Now it works and we were spending over 200x the amount that we needed to. In this example it wasn’t a critical system. In this case self-host was far better and cheaper, so it really depends on your case.

28:08 – Panel: Yeah, sometimes the old school and simple solutions are it.

28:26 – Chuck: I have a virtual machine/servers on Digital Ocean, and I cap deploy. I will login in every-now-and-then, but that’s it.

28:50 – _Panel adds in his comments to this topic._

29:17 – Guest: Sometimes these old school solutions tend to be slower, but it depends on what you need for that situation.

29:50 – Chuck: David Brady called that his “Time to Twitter.”

30:04 – [Fresh Books!](https://www.freshbooks.com/?ref=ppc-fb&campaignid=717543354&adgroupid=51893696397&targetid=kwd-298507762065&crid=285105591548&dv=c&ntwk=g&source=GOOGLE&gclid=EAIaIQobChMI58PY5t3w3gIVCSlpCh0PLQZpEAAYASAAEgJpEvD_BwE&gclsrc=aw.ds)

31:10 – Chuck: Can you talk about your discussion about this, please?

31:23 – Guest: I wrote this article, and it was translated into a few different languages. In the talk that I gave, I talked about my article. It’s funny b/c I wasn’t expecting all of this attention.

33:33 – Guest: I was nervous when I gave the talk so I don’t think it was that good. (Laughs.)

33:50 – Guest: We are human beings and we are always making mistakes, which is okay.

36:55 – Chuck: Yeah I run into that, too. Especially when running the podcast.

37:14 – Guest: That’s apart of the game right? We like to play with new technologies and if it weren’t for experimenting with new stuff our whole industry wouldn’t be as fun. We have the freedom to test, and we get to break tings and not get fired. That’s apart of our jobs.

37:51 – Panel: That’s a good point. A service like beanstalk or Heroku it’s easy to push your app out into the world. But when you dig in deeper, I think that knowledge really starts to seep in and you get to be a better developer.

38:27 – _Chuck comments on this topic._

39:12 – Panel: To Pedro’s point...

39:42 – Guest: Yes, we work as a frontend or backend developer or a system administrator, but we need to understand the infrastructure. I want to know and when I know more then my work as a backend developer will improve and communicate with the system. That people know how to use Ruby on Rails and they get used to it but forget about database behind that, and...where you can write your own inquires. They think it’s not their job, but it IS their job.

41:17 – Chuck: To take that step one step further.

_Chuck talks about performance issues, codes, and more._

41:48 – Chuck: I want to try out Dokku!

42:00 – Guest comments.

43:53 – Chuck: Let’s do Picks!

44:00 – [Advertisement: Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

End – [Cache Fly!](https://www.cachefly.com)

**Links:**

- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Docker](https://www.docker.com)
- [Kubernetes](https://kubernetes.io)
- [Heroku](https://www.heroku.com)
- [Beanstalk](https://beanstalkapp.com)
- [CodeFund](https://codefund.io)
- [Amazon S3](https://docs.aws.amazon.com/s3/index.html#lang/en_us)
- [GitHub: Kubernetes](https://github.com/kubernetes)
- [IMDB – Pedro C.](https://www.imdb.com/name/nm2713514/)
- [FB: RR – DevChat TV](https://www.facebook.com/RubyRogues/)
- [RR 382 Episode](https://devchat.tv/ruby-rogues/rr-382-when-to-build-when-to-buy-with-the-panelists/)
- [Pedro’s blog article: “Creating a Heroku-Like Deployment Solution with Docker”](https://speakerdeck.com/pecavalheiro/creating-a-heroku-like-deployment-solution-with-docker)
- [Comic of Code Compiling](https://imgs.xkcd.com/comics/compiling.png)
- [GitHub: Dokku/Dokku](https://github.com/dokku/dokku)
- [Digital Ocean: Dokku](https://www.digitalocean.com/community/tags/dokku?type=tutorials)
- [Digital Ocean: Cloud Hosting App Developers Love](https://try.digitalocean.com/developers/)
- [Pedro’s Website](http://pecavalheiro.com)
- [Pedro’s Twitter](https://twitter.com/pecavalheiro)
- [Pedro’s Crunchbase](https://www.crunchbase.com/person/pedro-cavalheiro)
- [Pedro’s GitHub](https://github.com/pecavalheiro)

**Sponsors:**

- [Sentry](https://sentry.io/welcome/)
- [CacheFly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com)

**Picks:**

Dave

- [Legos](https://www.google.com/search?client=safari&rls=en&q=Legos&ie=UTF-8&oe=UTF-8)
- [Rubix’s Cube](https://www.rubiks.com)

Eric

- [Digital Ocean](https://www.digitalocean.com/currents/october-2018/)
- [@samantha\_tse](https://twitter.com/samantha_tse?lang=en)
- [@jna\_sh&nbsp;](https://twitter.com/jna_sh)
- [@Zaltsman](https://twitter.com/Zaltsman?lang=en)

Nate

- [Alone - History Channel](https://www.history.com/shows/alone)

Charles

- [MF CEO - Podcast](https://andyfrisella.com/blogs/mfceo-project-podcast)
- [Extreme Ownership - Book](https://www.amazon.com/s/?ie=UTF8&keywords=extreme+ownership+book&tag=googhydr-20&index=aps&hvadid=241573922364&hvpos=1t1&hvnetw=g&hvrand=7904817774519321842&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1026411&hvtargid=kwd-130662906776&ref=pd_sl_byihbmct9_e)
- [Drip](https://www.drip.com)
- [TheDevRev.com](http://thedevrev.com/)

Pedro

- [Di.FM](https://www.di.fm/)
- [Shortcut Foo](https://www.shortcutfoo.com)


### Transcript


