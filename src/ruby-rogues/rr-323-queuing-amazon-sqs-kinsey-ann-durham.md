---
layout: layouts/post.njk
title: >
  RR 323: Queuing and Amazon SQS with Kinsey Ann Durham
date: 2017-08-15 04:00:52
episode_number: 323
duration: 53:29
audio_url: https://media.devchat.tv//ruby-rogues/RR_323_Queuing_and_SQS_with_Kinsey_Ann_Durham_mixdown.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## RR 323: Queuing and Amazon SQS with Kinsey Ann Durham

This episode of Ruby Rogues features panelists Charles Max Wood, Dave Kimura, and Eric Berry. Special guest Kinsey Ann Durham joins to talk about queuing and Amazon SQS. Tune in to learn more!**[00:01:19] Kinsey Ann Durham**Kinsey writes code for a company called Go Spot Check. She is always a lead mentor in a San Francisco based company called Bloc.**[00:02:50] Background on Amazon SQS**Go Spot Check is using Amazon SQS on a smaller scale. Kinsey thinks it is sasy to use. She recommends using something like Amazon SQS or even RabbitMQ. It has provided the company with the ability to explore different architecture patterns and tools.**[00:04:50] Can you talk a little about your company and what led to using Amazon SQS?**Go Spot Check is a start up in Denver. They focus on recording and data collection for big companies that need to know what is happening in retail, grocery stores, and bars. The focus is on alcohol and retail brands. The company analyzes the data collected that previously held no insight. Go Spot Check is currently moving into a computer vision aspect. Kinsey works off a separate service off of main aspect of Go Spot Check.**[00:06:46] What does your stack look like? Is it built off Ruby?**Yes, it is a Rails API only. The computer vision is done in Python.**[00:08:45] Are you feeding the images through the queue? How does the queuing fit in?**Started using Amazon SQS because they wanted to have a more decoupled way of developing. This allowed them to decide the contract between the two services and decide what they wanted it to look like up front. Kinsey describes that it is easy to create fake messages for testing with Amazon SQS. Image data is sent back and forth through the queue. The company does a lot of planograms. Information is taken from that data and posted onto a queue from the machine learning side of things. On the Rail side of things, the data can be picked up in API and sent back to the main app.**[00:10:50] Does it accept binary data in the queue?** It does not send actual images. All comparison data that has been processed is sent from the machine learning aspect side of things. An article has been published that shows that people do send images in the queue.**[00:11:35] Do you use SQS in parallel with SNS (Simple Notification Service)?**Kinsey says that they haven’t used SNS. This is because there hasn’t been a need. They are using it to post messages to communicate between different services.**[00:12:40] What point would you need to consider a SQS over a Sidekick?**Kinsey didn’t look into using Sidekick; she was excited to use SQS. She wanted to try it out and see if it was easy to use. Thought it would be more complex than it has been. She enjoys the free features of Amazon such as message visibility and timeout, which is handled by them. It can be customized and two different queues can be used.**[00:16:15] How do you write the workers for an SQS queue?**Kinsey has a plain Ruby object in the API that she can reuse with any queue. There are three queues in the company.**[00:19:45] Are there any other uses for queues and SQS?**Kinsey hasn’t come across any personally but she is sure there are some.**[00:23:40] What if you’re someone who is new? Where would you recommend they get started?**Suggest getting started with SQS Amazon, SQS documentation. Can get up to speed quickly. Amazon SQS is easy to get up and running. Kinsey is tailoring her Ruby Dev Summit talk to people who are new.**[00:30:35] How do you go about mentoring?**Kinsey loves mentoring. Developers have side projects or freelance work, but Kinsey likes to mentor because she feels like she makes a difference while continuing to learn. An important part of mentorship is giving support. This support level to students’ means not only offering students help with technical skills. Her goal is to build a well-rounded developer: someone who will be a great team member and people will want to work with in the future. This involves helping students build soft skills such as networking, interviewing skills, and helping them build confidence.**[00:33:52] How would people get involved with mentorship?**Kinsey is involved with an organization called Bloc - they are always hiring mentors. She shares that people can always get involved in their local community. Schools are looking for mentors. People at local meet ups and Rails Bridge are also both good ways to volunteer. Kinsey learned through mentors - she didn’t go to school to learn code. Mentors changed her life and are important to her, which is why she now mentors.**[00:36:30] Advice For Women** Kinsey’s advice for women who want to work in the technology world is to go for it. She urges women to get as many people and resources on their side as possible, including great developers who are willing to mentor. She emphasizes the importance of confidence and says to be ready for comments on gender. She believes that - while there are definitely still diversity issues with socioeconomic background, sexual orientation, race, gender, etc. it is getting better – women are more welcome in the technology field than they have previously been. There are technology organizations that are doing well and have no problems with welcoming women into the workplace. People in the field need to be open to having discussions about gender inequality. Open dialogue with team members is the key to solving problems. Some people have grown up not realizing the way they think is wrong. They don’t connect that what they say or think is offensive because it is all they know; it is unconscious to them. This is the type of person that is hard to change.

### **Picks**

**Eric:**

- [Open Collective&nbsp;](https://opencollective.com)
- [Open Collective – Women Who Work&nbsp;](https://opencollective.com/wwcode)
  **Dave** :
- Health insurance
  **Charles:**
- [_Profit First&nbsp;_](http://www.amazon.com/dp/0981808298/?tag=chamaxwoo-20)
- _[Secrets of the Millionaire Mind](http://www.amazon.com/dp/0060763280/?tag=chamaxwoo-20)_
  **Kinsey** :
- Guide program applications for mentors at RubyConf
- _[Release It](http://www.amazon.com/dp/0978739213?tag=chamaxwoo-20)&nbsp;_

### **Links for Kinsey**

&nbsp;

- [Twitter](https://twitter.com/kinseyanndurham?lang=en)
- [Instagram](https://www.instagram.com/kinseyanndurham/)
- [GitHub](https://github.com/durhamka)

### Transcript
