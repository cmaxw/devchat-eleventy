---
layout: layouts/post.njk
title: >
  RRU 038: Azure Pipelines with Ed Thomson LIVE at Microsoft Ignite
date: 2018-11-20 11:00:01
episode_number: 038
duration: 48:52
audio_url: https://media.devchat.tv/reactroundup/RRU_038_Azure_Pipelines_with_Ed_Thomson_LIVE_at_Microsoft_Ignite.mp3
podcast: react-round-up
tags:
  - react_round_up
  - podcast
---

**Panel:**

[Charles Max Wood](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Special Guests:** [Ed Thomson](https://twitter.com/ethomson?lang=en)

In this episode, the React Round Up Charles speaks with [Ed Thomson](https://uk.linkedin.com/in/ethomson) who is a Program Manager at Azure through Microsoft, Developer, and Open Source Maintainer. Ed and Chuck discuss in full detail about Azure DevOps! Check out today’s episode to hear its new features and other exciting news!

**Show Topics:**

0:59 – Live at Microsoft Ignite

1:03 – Ed: Hi! I am a Program Manager at [Azure.](https://azure.microsoft.com/en-us/services/devops/pipelines/)

1:28 – Rewind 2 episodes to hear more about Azure DevOps!

1:51 – Ed: One of the moves from Pipelines to DevOps – they could still adopt Pipelines. Now that they are separate services – it’s great.

2:38 – Chuck talks about features he does and doesn’t use.

2:54 – Ed.

3:00 – Chuck: Repos and Pipelines. I am going to dive right in. Let’s talk about Repos. Microsoft just acquired GitHub.

3:18 – Ed: Technically we have not officially acquired GitHub.

3:34 – Chuck: It’s not done. It’s the end of September now.

3:55 – Ed: They will remain the same thing for a while. GitHub is the home for open source. Repos – we use it in Microsoft. Repositories are huge. There are 4,000 engineers working in these repositories. Everyone works in his or her own little area, and you have to work together. You have to do all this engineering to get there. We bit a tool and it basically if you run clone...

Ed continues to talk about this topic. He is talking about One Drive and these repositories.

6:28 – Ed: We aren’t going to be mixing and matching. I used to work through GitHub. It’s exciting to see those people work close to me.

6:54 – Chuck.

6:59 – Ed: It has come a long way.

7:07 – Chuck: Beyond the FSF are we talking about other features or?

7:21 – Ed: We have unique features. We have branch policies. You can require that people do pole request. You have to use pole request and your CI has to pass and things like that. I think there is a lot of richness in our auditing. We have enterprise focus. At its core it still is Git. We can all interoperate.

8:17 – Chuck.

8:37 – Ed: You just can’t set it up with Apache. You have to figure it out.

8:51 – Chuck: The method of pushing and pulling.

9:06 – Chuck: You can try DevOps for free up to 5 users and unlimited private repos. People are interested in this because GitHub makes you pay for that.

9:38 – Ed and Chuck continue to talk.

9:50 – Ed: Pipelines is the most interesting thing we are working on. We have revamped the entire experience. Build and release. It’s easy to get started. We have a visual designer. Super helpful – super straightforward. Releases once your code is built – get it out to production say for example Azure. It’s the important thing to get your code out there.

10:55 – Chuck: How can someone start with this?

11:00 – Ed: Depends on where your repository is. It will look at your code. “Oh, I know what that is, I know how to build that!” Maybe everyone isn’t doing everything with JavaScript. If you are using DotNet then it will know.

12:05 – Chuck: What if I am using both a backend and a frontend?

12:11 – Ed: One repository? That’s when you will have to do a little hand packing on the...

There are different opportunities there. If you have a bash script that does it for you. If not, then you can orchestrate it. Reduce the time it takes. If it’s an open source project; there’s 2 – what are you going to do with the other 8? You’d be surprised – people try to sneak that in there.

13:30 – Chuck: It seems like continuous integration isn’t a whole lot complicated.

13:39 – Ed: I am a simple guy that’s how I do it. You can do advanced stuff, though. The Cake Build system – they are doing some crazy things. We have got Windows, Lennox, and others. Are you building for Raspberries Pies, then okay, do this...

It’s not just running a script.

15:00 – Chuck: People do get pretty complicated if they want. It can get complicated. Who knows?

15:26 – Chuck:&nbsp; How much work do you have to do to set-up a Pipeline like that?

15:37 – Ed answers the question in detail.

16:03 – Chuck asks a question.

16:12 – Ed: Now this is where it gets contentious. If one fails...

Our default task out of the box...

16:56 – Chuck: If you want 2 steps you can (like me who is crazy).

17:05 – Ed: Yes, I want to see if it failed.

17:17 – Chuck: Dude, writing code is hard. Once you have it built and tested – continuous deployment.

17:33 – Ed: It’s very easy. It’s super straightforward, it doesn’t have to be [Azure](https://azure.microsoft.com/en-us/free/search/?&OCID=AID719825_SEM_fNqQIgDa&lnkd=Google_Azure_Brand&gclid=EAIaIQobChMI4pTVroeH3gIVkrrACh3N8A_jEAAYASAAEgKhmPD_BwE&dclid=CPuwl7CHh94CFUyvTwod64QINA) (although I hope it is!).

Ed continues this conversation.

18:43 – Chuck: And it just pulls it?

18:49 – Ed: Don’t poke holes into your firewall. We do give you a lot of flexibility

19:04 – Chuck: VPN credentials?

19:10 – Ed: Just run the...

19:25 – Chuck comments.

19:36 – Ed: ...Take that Zip...

20:02 – Ed: Once the planets are finely aligned then...it will just pull from it.

20:25 – Chuck: I host my stuff on Digital Ocean.

20:46 – Ed: It’s been awhile since I played with...

20:55 – Chuck.

20:59 – Ed and Chuck go back and forth with different situations and hypothetical situations.

21:10 – Ed: What is Phoenix?

21:20 – Chuck explains it.

21:25 – Ed: Here is what we probably don’t have is a lot of [ERLANG](https://www.erlang.org/community) support.

22:41 – Advertisement.

23:31 – Chuck: Let’s just say it’s a possibility. We took the strip down node and...

23:49 – Ed: I think it’s going to happen.

23:55 – Ed: Exactly.

24:02 – Chuck: Testing against Azure services. So, it’s one thing to run on my machine but it’s another thing when other things connect nicely with an Azure set-up. Does it connect natively once it’s in the Azure cloud?

24:35 – Ed: It should, but there are so many services, so I don’t want to say that everything is identical. We will say yes with an asterisk.

25:07 – Chuck: With continuous deployment...

25:41 – Ed: As an example: I have a CD Pipeline for my website. Every time I merge into master...

Ed continues this hypothetical situation with full details. Check it out!

27:03 – Chuck: You probably can do just about anything – deploy by Tweet!

27:15 – Ed: You can stop the deployment if people on Twitter start complaining.

27:40 – Chuck: That is awesome! IF it is something you care about – and if it’s worth the time – then why not? If you don’t have to think about it then great. I have mentioned this before: Am I solving interesting problems? What projects do I want to work on? What kinds of contributions do I really want to contribute to open source?

That’s the thing – if you have all these tools that are set-up then your process, how do you work on what, and remove the pain points then you can just write code so people can use! That’s the power of this – because it catches the bug before I have to catch it – then that saves me time.

30:08 – Ed: That’s the dream of computers is that the computers are supposed to make OUR lives easier. IF we can do that and catch those bugs before you catch it then you are saving time. Finding bugs as quickly as possible it avoids downtime and messy deployments.

31:03 – Chuck: Then you can use time for coding style and other things.

I can take mental shortcuts.

31:37 – Ed: The other thing you can do is avoiding security problems. If a static code analysis tool catches an integer overflow then...

32:30 – Chuck adds his comments.

Chuck: You can set your policy to block it or ignore it. Then you are running these tools to run security. There are third-party tools that do security analysis on your code. Do you integrate with those?

33:00 – Ed: Yep. My favorite is [WhiteSource.](https://www.whitesourcesoftware.com/how-does-it-work/) It knows all of the open source and third-party tools. It can scan your code and...

34:05 – Chuck: It works with a lot of languages.

34:14 – Ed.

34:25 – Chuck: A lot of JavaScript developers are getting into mobile development, like Ionic, and others. You have all these systems out there for different stages for writing for mobile. Android, windows Phone, Blackberry...

35:04 – Ed: Let’s throw out Blackberry builds. We will ignore it.

Mac OS dies a fine job. That’s why we have all of those.

35:29 – Chuck: But I want to run my tests, too!

35:36 – Ed: I really like to use App Center. It is ultimately incredible to see all the tests you can run.

36:29 – Chuck: The deployment is different, though, right?

36:40 – Ed: I have a friend who clicks a button in...

Azure DevOps.

37:00 – Chuck: I like to remind people that this isn’t a new product.

37:15 – Ed: Yes, [Azure DevOps.](https://azure.microsoft.com/en-us/blog/introducing-azure-devops/)

37:24 – Chuck: Any new features that are coming out?

37:27 – Ed: We took a little break, but...

37:47 – Ed: We will pick back up once Ignite is over. We have a timeline on our website when we expect to launch some new features, and some are secret, so keep checking out the website.

39:07 – Chuck: What is the interplay between [Azure DevOps](https://azure.microsoft.com/en-us/blog/introducing-azure-devops/) and Visual Studio Code? Because they have plugins for freaking everything. I am sure there is something there that...

39:30 – Ed: I am a VI guy and I’m like 90% sure there is something there.

You are an eMac’s guy?

The way I think about it is through Git right out of the box.

Yes, I think there are better things out there for integration. I know we have a lot of great things in Visual Code, because I worked with it.

40:45 – Chuck: Yes, people can look for extensions and see what the capabilities are.

Chuck talks about code editor and tools.&nbsp;

41:28 – Ed: ... we have been pulling that out as quickly as possible.

We do have IE extensions, I am sure there is something for VS Code – but it’s not where I want to spend my time.

42:02 – Chuck: Yes, sure.

42:07 – Ed: But everyone is different – they won’t work the way that I work. So there’s that.

42:30 – Ed: That Chuck.

42:36 – Chuck: Where do people get news?

42:42 – Ed: [Go to here!](https://azure.microsoft.com/en-us/services/devops/?nav=min)

42:54 – Chuck: Where do people find you?

43:00 – Ed: [Twitter!](https://twitter.com/ethomson?lang=en)

43:07 – Chuck: Let’s do Picks!

43:20 – [Advertisement – Fresh Books!](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=r%252F+%257Efreshbooks&kw=freshbooks&campaignid=717543354&adgroupid=51893696557&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284685866051&source=GOOGLE&gclid=EAIaIQobChMI--6zho6H3gIVjsVkCh2wsQx6EAAYASAAEgL9B_D_BwE&gclsrc=aw.ds&dclid=CO7qmoiOh94CFUnHwAodiCQBUA)

**Links:**

- [GitHub](https://github.com)
- [Microsoft’s Azure](https://azure.microsoft.com/en-us/free/search/?&OCID=AID719825_SEM_fNqQIgDa&lnkd=Google_Azure_Brand&gclid=EAIaIQobChMI4pTVroeH3gIVkrrACh3N8A_jEAAYASAAEgKhmPD_BwE&dclid=CPuwl7CHh94CFUyvTwod64QINA)
- [Microsoft’s Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/)
- [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/?nav=min)
- [Erlang](https://www.erlang.org/community)
- [WhiteSource](https://www.whitesourcesoftware.com/how-does-it-work/)
- [Chuck’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Ed Thomson’s Twitter](https://twitter.com/ethomson?lang=en)
- [Ed Thomson’s GitHub](https://github.com/ethomson)
- [Ed Thomson’s Website](https://www.edwardthomson.com)
- [Ed Thomson’s LinkedIn](https://uk.linkedin.com/in/ethomson)

**Sponsors:**

- [Angular Boot Camp](https://angularbootcamp.com/)
- [Fresh Books](https://www.digitalocean.com/)
- [Get a Coder Job Course](https://devchat.tv/get-a-coder-job/)

**Picks:**

Ed

- [Podcast - All Things Git](https://www.allthingsgit.com/)

### Transcript
