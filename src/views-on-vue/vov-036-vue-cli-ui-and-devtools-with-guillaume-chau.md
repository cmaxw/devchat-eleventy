---
layout: layouts/post.njk
title: >
  VoV 036: Vue CLI UI and Devtools with Guillaume Chau
date: 2018-11-06 11:00:00
episode_number: 036
duration: 53:19
audio_url: https://media.devchat.tv/viewsonvue/VoV_036_Vue_CLI_UI_and_Devtools_with_Guillaume_Chau.mp3
podcast: views-on-vue
tags:
  - views_on_vue
  - podcast
---

**Panel:**

- Joe Eames
- Chris Fritz
- Divya Sasidharan

**Special Guest:** [Guillaume Chau](https://www.linkedin.com/in/guillaumechau)

In this episode, the panel talks with [Guillaume Chau](https://www.linkedin.com/in/guillaumechau) who is apart of the VueJS core team, a frontend engineer at Livestorm, and an open source contributor. The guest and the panelists talk about plugins, Webpack, Vue CLI, and much more! Check out today’s episode to hear all of the details.&nbsp;

**Show Topics:**

0:00 [– Advertisement – Kendo UI](https://www.telerik.com/kendo-ui)

1:00 – _Chris lists who is on the panel along with today’s guest._

Chris: Who are you and what are you working on?

1:50 – Guest: I am working on a startup in Paris. I am calling in from Lyon, France.

2:12 – Panel: Late there?

2:15 – Panel: Almost time for dinner?

2:21 – Guest: Yes, it’s cooking now!

2:26 – _Panel asks a question._

2:43 – _Guest answers the question._

3:14 – Panel: Anyone who didn’t want to be an expert, they don’t’ have to worry about how things tie together – you could help them with their configurations?

3:36 – Guest: A lot of the work is done for you with the configurations so you can start writing your apps.

3:53 – Panel: How is 3 different from 2?

4:06 – Guest: It’s like a new tool entirely. It’s working very different, too, with a different system. It has a different template base.&nbsp;

5:53 – Panel: To combine templates you have to understand it well, like different Webpacks.

6:12 – Guest: Regarding Webpacks and their configurations...

6:52 – Panel: With the template situation there was an issue where they would make their project and as new versions of Webpack came out...and new versions of Babble, and they will have to manage the dependencies of all of these. There might be some plugins that only work with x, y, and z. IT can be frustrating – can version 3 take care of this for you?

7:44 – _Guest answers the question._

9:24 – Panel: How do you update plugins?

9:29 – Guest.

10:26 – Panel: Upgrade your plugins then as long as all of your plugins are the same version it’s okay?

10:34 – [Guest:](https://twitter.com/Akryum?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor) Yes. You can upgrade your...

11:38 – Chris: Divya, you just gave a talk (London) on...plugins, right?

11:50 – Divya: Yes. We talked about Webpack configurations. For example, if there are some testing libraries you can essentially setup a UCLI plugin to create a test – create a test folder – plugins let you generate files or folders (structure your project in a certain way). [In London I talked about server less functions with...](https://vuejs.london/talks/)

13:30 – Panel: Any kind of pattern you want to use in different applications you can wrap that up in a plugin?

13:42 – Divya: Yes. Exactly. Instead of repeating yourself you can wrap it up. It’s really handy.

14:00 – _Panel asks a question._

14:02 – Divya: You could do that...

14:10 – Panel: ...or a [graph QL](https://graphql.org) – Yes!

14:20 – Guest.

14:33 – Chris: Any thing that third-party plugins don’t have access to?

14:43 – Guest.

14:54 – Chris.

15:08 – Guest.

15:25 – Divya: ...if you want a UCLI service...and so you can grab those commands and add-on those commands and using those default commands. You have access to those commands, so you don’t always...

17:02 – Chris: Like deploy?

17:11 – Divya: Yes.

17:17 – Guest.

17:19 – Divya.

Divya: Do you have strategies on how you go about testing your plugins?

17:35 – Guest: Yes, I do.

19:23 – Panel: So this is like end-to-end test for a CLI tool?

19:33 – Guest.

19:50 – Panel: Is there documentation for all of this?

19:59 – Guest.

20:14 – Divya: I think the way I’ve done tests is to edit an example a test project as a local dependency and then seeing that it works. I want to make sure that it works.

Divya: And the other way I’ve done it is VUE CLI it is undocumented at the moment. You can test your CLI plugin from within the plugin itself.

21:55 – Guest: I’ve used some of those before.

22:08 – Chris: Speaking of the UI that is something I’d love to talk about. It seems unique to me – a CLI tool that has a UI that is built along with it. That seems strange to some people – how does that work and WHY would you need it?

22:42 – Guest: I’ll start with the WHY. It is way more powerful and as a greeter the API interface is more fixable so you can choose different options. For example when you create a project you can set different things. You basically have to name the project and you have simple options to choose form. Now it’s basically a really fixable system with plugins and stuff like that. I thought it would be nice to free it from the terminal. The best way to do that was creating a graphical interface. The main advantage of this was that you could add more information and explanations to what is going on. You can also create better interface.

Guest: Also, it currently improves discoverability.

25:30 – Chris: You could do a search in the UI and type in the name of something you are working with and then your plugin would show up in the list – and then it would just be added to their project. That’s nice so they don’t have to go to the NPM or doing the README.

26:07 – Guest.

26:14 – Divya: I think it’s nice b/c I have used it extensively for my plugin. I want to see what hasn’t been taken already. I have a way of organizing my modules and I’ve used to it see what names have already been taken?

26:47 – Guest: I think sometimes...

27:15 – Divya: The feature that you are able to run tasks from the UI is nice.

27:55 – Chris: It sounds like it offers a nicer way to view a lot of things. One of the other advantages (that I found) is that I have a configuration to the listing rules to Vue – you can pick the exact rule set that you want to use. Normally when you look at a configuration file, you don’t know what rule sets are available, you don’t know what options are available. All of this you have to look at documentation. You can see descriptions of what each rule does. You can do so much in the UI.

29:19 – Guest.

29:40 [– Advertisement – Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

30:25 – Chris: Do they still need a terminal?

30:35 – Guest.

32:41 – Chris: That would be cool!

32:46 – Guest.

33:09 – Chris: They still need a little terminal knowledge right?

33:15 – Guest: Yes.

33:33 – Chris: They need a little terminal knowledge, they need to install the package, then they need to run VUE UI, then they can do anything from the terminal inside of the UI?

33:55 – Guest: You can create and import existing projects.

34:28 – Panel.

34:33 – Chris.

34:36 – Panel: It’s already active?

34:43 – Guest: I would like to talk about what I did in London. That conference I talked about...

37:00 – Panel.

37:07 – Guest.

37:20 – Panel: Nice!

37:25 – Guest.

Guest: All of these widgets that I talked about you can use the product API and do anything that you want.

38:47 – Chris: If someone wants to see the dashboard that you are doing – where can they see that stuff?

39:00 – Guest: GitHub. Follow the manuscript instructions.

39:16 – Chris: Your London talk was recorded?

39:22 – Guest: Yes.

39:27 – Guest.

39:38 – Divya: Are you planning on giving this talk in other events?

39:47 – Guest: Maybe not anytime soon.

39:56 – Chris.

40:00 – Divya.

40:09 – Guest: It might be release already we don’t know.

40:15 – Divya: A date you would like to release by?

40:25 – Chris: Where can people support you and your work?

40:35 – Guest: Yes, they definitely can. You can check out the GitHub file. Also, check-out my open source work, too.

41:17 – Chris: Twitter?

41:19 – Guest: Yes.

41:24 – Chris: You have cute cat pictures, too. Let’s go to Picks!!

41:40 –[Advertisement – Fresh Books! DEVCHAT code. 30-day trial.](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284659279616&source=GOOGLE&gclid=EAIaIQobChMI1uiA0Jas3gIVirrACh04fwTjEAAYASAAEgJxqvD_BwE&gclsrc=aw.ds)

**Links:**

- [Vue](https://vuejs.org)
- [VUE CLI 3](https://cli.vuejs.org)
- [Vue CLI – NPM](https://www.npmjs.com/package/vue-cli)
- [React](https://reactjs.org)
- [Angular](https://angular.io)
- [JavaScript](https://www.javascript.com)
- [DevChat TV](https://devchat.tv)
- [Article: Infrequently Noted](https://infrequently.org/2018/09/the-developer-experience-bait-and-switch/?mc_cid=796f819484&mc_eid=925d8efdf6)
- [Vue.js Fundamentals](https://www.pluralsight.com/courses/vuejs-fundamentals)
- [GetKap](https://getkap.co)
- [Snipcart](https://snipcart.com/blog/vue-js-plugin)
- [Netlify](https://www.netlify.com/blog/2018/09/26/how-we-built-a-vue-cli-plugin-for-netlify-lambda/)
- [Webpack.js](https://webpack.js.org)
- [Guillaume Chau’s Vue.JS LONDON](https://vuejs.london/talks)
- [Guillaume Chau’s Twitter](https://twitter.com/Akryum?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Guillaume Chau’s LinkedIn](https://www.linkedin.com/in/guillaumechau)
- [Guillaume Chau’s GitHub](https://github.com/Akryum)
- [Guillaume Chau’s GitHub Repositories](https://github.com/Akryum?tab=repositories)
- [Guillaume Chau’s ABOUT in Patreon.com](https://www.patreon.com/akryum)
- [Guillaume Chau’s Medium](https://medium.com/@Akryum)
- [Guillaume Chau’s Info](https://guillaume-chau.info)
- [Divya’s London Talk](https://vuejs.london/talks/)
- [Webpack – Configurations](https://webpack.js.org/configuration/)
- [Graph QL](https://graphql.org)

**Sponsors:**

- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%255Bfreshbooks%255D&kw=freshbooks&campaignid=717543354&adgroupid=51893696397&kwid=kwd-298507762065&dv=c&ntwk=g&crid=284659279616&source=GOOGLE&gclid=EAIaIQobChMI6NHV7MSb3gIVh7bACh0hhAD5EAAYASAAEgI9K_D_BwE&gclsrc=aw.ds&dclid=COL6yu3Em94CFRi8TwodLnkP0A)
- [Cache Fly](https://www.cachefly.com)
- [Kendo UI](https://www.telerik.com/kendo-angular-ui/?utm_medium=cpm&utm_source=adventuresinng&utm_campaign=dt-kendo-ang2-nov16&utm_content=audio)
- [Get A Coder Job!](https://devchat.tv/get-a-coder-job/)

**Picks:**

Joe

- [VueJS Fundamentals](https://www.pluralsight.com/courses/vuejs-fundamentals)
- [Developer Experience Bait and Switch](https://infrequently.org/2018/09/the-developer-experience-bait-and-switch/)

Divya

- [Get Kap](https://getkap.co/)
- [Snipcart](https://snipcart.com/blog/vue-js-plugin)
- [How we built a Due CLI Plugin for Netlify Lambda](https://www.netlify.com/blog/2018/09/26/how-we-built-a-vue-cli-plugin-for-netlify-lambda/)

Chris

- Meditation
- Gratefulness

Guillaume

- Exercise
- [The Expanse](https://www.whats-on-netflix.com/news/amazons-the-expanse-is-leaving-netflix/)

### Transcript
