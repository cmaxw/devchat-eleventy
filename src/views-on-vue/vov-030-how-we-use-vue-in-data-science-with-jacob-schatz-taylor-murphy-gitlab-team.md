---
layout: layouts/post.njk
title: >
      VoV 030: "How we use Vue in Data Science" with Jacob Schatz & Taylor Murphy (Gitlab Team)
date: 2018-09-25 11:22:23
episode_number: 030
duration: 1:09:00
audio_url: https://media.devchat.tv/viewsonvue/VoV_030_How_we_use_Vue_in_Data_Science_with_Jacob_Schatz_Taylor_Murphy.mp3
podcast: views-on-vue
tags: 
  - views_on_vue
  - podcast
---

 **Panel:**

- Divya Sasidharan
- Charles Max Wood
- Joe Eames
- John Papa
- Chris Fritz
- Erik Hanchett

**Special Guest:** [Sarah Drasner](https://twitter.com/sarah_edo?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

In this episode, the panel talks with Jacob Schatz and Taylor Murphy who are apart of the [GitLab Team](https://about.gitlab.com/team/). Jake is a staff developer, and Taylor is a manager at GitLab who started off as a data engineer. To find out more about the GitLab Team check them out [here](https://about.gitlab.com/team/)! Also, they are looking to hire, so inquire about the position through GitLab, if interested! The panel talks about Vue, Flux, Node, Flask, Python, D3, and much...much more!

**Show Topics:**

1:51 – Chuck: Introduce yourselves, please.

1:55 – Backgrounds of the guests.

2:45 – Chuck.

2:51 – GitLab (GL): We first adapted Vue at the GitLab team for 2 years now.

3:34 – Chuck: What’s your workflow like through Vue?

3:50 – GL: We are using an application that...Using Python and Flask on the background.

Vue CLI throughout the development.

4:35 – Panel asks a question.

4:40 – GitLab answers the question.

5:38 – Panel: Tell us about your secret project?

5:49 – GL: The data team at GL we are trying to solve these questions. How to get from resume to hire? There is data there. So that’s what [Meltano](https://gitlab.com/meltano/meltano/) helps with.

Taylor has a Ph.D. in this area so he knows what’s he’s talking about.

7:30 – Taylor dives into this project via GitLab.

8:52 – GL: Super cool thing is that we are figuring out different ways to do things. It’s really cool stuff that we are doing.

9:23 – Panel: I’ve worked on projects when the frontend people and the data people are doing 2 different things. And they don’t know what each other group is doing. It’s interesting to bring the two things together. I see that teams have a hard time working together when it’s too separated.

10:31 – Panel: Can we get a definition of data scientist vs. a data engineer.

10:44 – Panel: Definitions of DATA SCIENCE and DATA ENGINEER are.

11:39 – GL: That is pretty close. Data science means different things to different people.

12:51 – Panel chimes in.

13:00 – Panel asks a question.

13:11 – GL: When I started working on Meltano...

14:26 – Panel: Looker is a visualization tool; I thought: I bet we can make that. I have been recreating something like [Looker](https://github.com/looker). We are trying to replace [Looker](https://github.com/looker). We are recreating a lot of the functionality of Looker.

15:10 – Panel will this be called...?

15:31 – Meltano analyze it’s apart of Meltano. Cool thing about [Looker](https://github.com/looker) it has these files that show the whole visualization – drag and drop. With these files we can do version control. It’s built in – and if you drag it’s apart of a database. We took these files and we...

17:37 – Panel: Define [Vue](https://vuejs.org) for that, please?

17:49 – GL dives into this topic.

18:40 – GL mentions [Node.](https://nodejs.org/en/)

18:52 – Chuck: What format does your data take? Do you have different reports that get sent? How does that work?

19:13 – GL: It tells a list of measures and dimensions. I setup our database to...

20:13 – Panel: Question. You chose [Vue](https://vuejs.org) and it’s working. The reality you could have chosen any other tools. Why really did you choose Vue?

20:30 – GL: I know Vue really well. In the early 2000s I had my...

If I have to repeat a process I always use Vue, because it’s the thing I am most comfortable with. This is how I program things very quickly.

21:10 – Panel: How has [Vue](https://vuejs.org) met or exceeded or not met those expectations?

21:20 – GL: It has exceeded my expectations. One of the things is that as I am trying to staff a team I am trying to write Vue so when people see it they don’t think, “why would he do that?”

22:53 – [Flux](https://justgetflux.com) inspired architecture.

23:07 – GitLab continues the talk.

23:21 – Everything is [Flux](https://justgetflux.com) inspired in the sense that it was an idea to start with and then everybody made alterations and built things on top of that.

23:48 – Panel chimes in.

24:35 – Panel: Can you speak on the process of the workflow and process you work in [Taylor](https://github.com/SmartTaylor) and the data science and the frontend of it?

24:54 – GL: It’s the same but different.

GitLab talks about Meltano some more, and also Taylor.

GL: Taylor is trying to solve all these problems through Meltano. Maybe we can build our own tools?

26:05 – Panel: What’s a Lever Extractor?!

26:14 – GL: Answers this question.

26:25 – Panel: So it’s not a technical term...okay.

26:30 – GitLab continues the talk and discusses different tools.

27:18 – Panel: You are grabbing that data and Taylor is doing his magic? Or is it more integrated?

27:32 – GL answers this question.

29:06 – GitLab: In the beginning we are building that extractors for the other team, but later...

The cool thing about Meltano is making it like Word Press. We have an extractor, different directories other things will be discovered by Meltano and discovered by the Gooey. If you write it correctly it can hook on to it.

30:00 – [Digital Ocean Advertisement](https://www.digitalocean.com/)

31:38 – Panel: Meltano is a mix between [Python](https://www.python.org) and JavaScript or Vue?

30:43 – GL: Yeah...

31:20 – Panel asks question. How are you orchestrating the data?

31:32 – GL: Eventually it will happen with GitLab CUI. We are thinking we can orchestrate other ways. Right now it’s manually.

32:33 – GL: I like finding some sort of language that doesn’t have an extension...and writing...

32:54 – GL: I’m excited to use a tool that does things the right way like loading and transforming data but the frontend can be a joy to use. A previous company that I worked with and thought: It would be a joy to work with and connect to things that make sense, and do things the “right way”. I hope that’s what we can do with Meltano. I’m not a frontend person, but I appreciate it.

34:03 – GL: This is what I’m going to do...we will have these conversations between Taylor, myself, and our teams.

34:53 – Panel: This is a tool that people need to DL, maybe will you guys host this somewhere as a service.

35:10 – GL: We are trying to get this running. Small steps. It’s not out of the question and it’s not out of the question for this to be a service.

35:33 – GL: What do you want to do with the data warehouse? Your data is yours.

36:06 – Panel: Yeah, you don’t want to be in-charge of that.

36:17 – Panel: Have we asked where the name Meltano came from?

36:30 – GL: It sounds like a weird name. Here is the background of the name of “Meltano” came from. First name was from a sperm whale, it’s a unique name: Cachalot.

38:02 – GL: Conversation continues.

38:38 – Panel chimes in.

38:58 – GL: What does this program offering and doing...This was to help me with the name.

39:27 – GL: Acronym for Meltano: Model / Extract / Load / Transform / Analyze / Notebook / Orchestrate

39:47 – GL continues. They talk about notebooks.

40:19 –Sounds like a [Daft Punk](https://en.wikipedia.org/wiki/Daft_Punk) album!

40:28 – GL: I am trying to get more on the data science side.

40:57 – Panel: Question. Is Meltano super responsive and quick?

41:17 – GL: It depends on the size of the data, of course, but it is very responsive.

42:11 – GL: That job took 7-8 hours to extract everything for that specific project.

42:39 – GL: There are a lot of moving parts, so that could depend on it slowing it down or speeding it up.

43:01 – When you were building Meltano for your team, for the visualization how do you make decisions on what exactly you are visualizing?

43:18 – GL: That is the tricky part...you are one team. We are trying to find at a point where the data team is happy. One thing for example I put out a bar chart. Team member said that bar charts should always be vertical. So I am learning how they work and their wealth of information on visualization.

44:33 – Panel: Chris always does visualization.

44:48 – GL: Emily is on the team, and knows a lot about that. The correct way to visualize data so it doesn’t just look “cool.” You want it to be useful. [Chart JS](https://www.chartjs.org) is what I use.

45:32 – Panel: I have used [Chart JS](https://www.chartjs.org) before, too.

46:00 – Chris: I really like...

46:37 – Panel continues this conversation.

47:01 – Panel: Keynote will be given by...at this conference.

47:11 – GL continues to talk about this conversation.

From nothing to something in a short amount of time. When I showed people:

47:55 – Panel: are you using Vue transitions?

48:09 – GL: Nope not even slightly. My plan was to use Vue transitions but it’s icing on the cake. Just get it working.

48:29 – Panel: A link of how I use...

49:14 – GL: This is a very small amount of code to where you are. It’s not like you had to re-implement triangles or anything like that.

49:36 – Panel: It does take some time but once you get it – you get it.

49:59 – Panel: When working with axis it can get hairy.

50:52 – GL: [D3](https://d3js.org) really does a lot of the math for you and fits right it once you know how it works. You can draw anything with HTML. Check Links.

52:19 – Panel: There are a million different ways to do visualizations. There is math behind...

53:08 – Panel: D3 also helps with de-clustering.

53:25 – Panel: Any recommendations with someone who wants to dive into D3?

53:37 – GL: Tutorials have gotten better over time.

53:57 – Panel continues the conversation.

54:19 – GL: D3 Version 4 and 5 was one big library.

You have C3 – what’s your opinion on C3?

55:00 – GL: have no strong opinions.

55:03 – Chuck chimes in.

55:18 – Panel continues this conversation. She talks about how she had a hard time learning D3, and how everything clicked once she learned it.

55:55 – GL: Main reason why I didn’t use D3 because...

56:07 – GL: If you were a “real” developer you’d...

56:35 – Panel: Let’s go to Picks!

56:40 – [Advertisement – Code Badges](http://codebadge.org/)

**Links:**

- [JavaScript](https://www.javascript.com)
- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://www.upwork.com/ppc/landing/?ct=Programmers&gclid=EAIaIQobChMIuK2B156s3QIVRtbACh0u7wcBEAAYAiAAEgK66_D_BwE&hl=Top%2520Rated%2520AngularJS%2520Programmers&query=AngularJS&vt_med=provenD2)
- [Digital Ocean](https://www.digitalocean.com/)
- [Code Badge](http://codebadge.org/)
- [Notion](https://www.notion.so/0ccd3ccbb2c44de6b3c0e3dac93e0de1)
- [Vue](https://opencollective.com/vuejs)
- [Meltano](https://gitlab.com/meltano/meltano/)
- [Looker](https://github.com/looker)
- [Node](https://nodejs.org/en/)
- [Flux](https://justgetflux.com)
- [Taylor](https://github.com/SmartTaylor)
- [Python](https://www.python.org)
- [Chart JS](https://www.chartjs.org)
- [React](https://reactjs.org)
- [Chris Fritz](https://jsfiddle.net/chrisvfritz/dmroqzLq/) – JS Fiddle 
- [D3](https://d3js.org)
- [Chris Lema](https://chrislema.com/building-an-online-course-woocommerce/) – Building an Online Course...
- [Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)
- [The First Vue.js Spring](https://medium.com/the-vue-point/the-first-vue-js-sprint-summary-10c260bf642a)
- [Vue CLI 3.0](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb)
- [Online Tutorials To Help You Get Ahead](https://school.programwitherik.com)
- [Hacker Noon – Finding Creativity in Software Engineer](https://hackernoon.com/finding-creativity-in-software-engineering-5f20193ae54c)
- [Indiegogo](https://www.indiegogo.com/projects/toms-and-so-ill-shoes-to-get-kids-climbing#/)
- [Create Awesome Vue.js Apps With...](https://school.programwitherik.com/p/create-awesome-vue-js-apps-with-nuxt-js)
- [Data Sketches](http://www.datasketch.es)
- [Vue.js in Action](https://www.amazon.com/Vue-js-Action-Eric-Hanchett/dp/1617294624)
- [Benjamin Hardy’s Website](https://www.benjaminhardy.com)
- [Data Intensive: Don’t Just Hack It Together](https://dataintensive.net)
- [Article: How to Pick a Career...By Tim Urban](https://waitbutwhy.com/2018/04/picking-career.html)
- [Taylor A. Murphy’s Twitter](https://twitter.com/tayloramurphy1)
- Email: [tmurphy@gitlab.com](mailto:tmurphy@gitlab.com)
- [GitLab – Meet our Team](https://about.gitlab.com/team/)
- [Jacob Schatz’s Twitter](https://twitter.com/jakecodes?lang=en)

**Sponsors:**

- [Kendo UI](https://www.telerik.com/kendo-angular-ui/?utm_medium=cpm&utm_source=adventuresinng&utm_campaign=dt-kendo-ang2-nov16&utm_content=audio)
- [Digital Ocean](https://www.digitalocean.com/)
- [Code Badge](http://codebadge.org/)
- [Cache Fly](https://www.cachefly.com)

**Picks:**

Joe

- [Ben Hardy on Medium](https://www.benjaminhardy.com/home-page)
- Set Goals

Chris

- [Vue CLI 3](https://vuetifyjs.com/en/getting-started/quick-start)
- [Vue CLI 3 on Medium](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb)
- Vue Dev Tools
- Get a new computer

John

- [Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)

Divya

- [Data Sketch](http://www.datasketch.es/)
- [One climb](https://www.indiegogo.com/projects/toms-and-so-ill-shoes-to-get-kids-climbing%23/)
- [Finding Creativity in Software Engineering](https://hackernoon.com/finding-creativity-in-software-engineering-5f20193ae54c)

Erik

- [Create Awesome Vue.js](https://school.programwitherik.com/p/create-awesome-vue-js-apps-with-nuxt-js)
- [Vue.js in action](https://www.amazon.com/Vue-js-Action-Eric-Hanchett/dp/1617294624)

Charles

- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)
- [Building an online course](https://chrislema.com/building-an-online-course-woocommerce/)

Jacob

- Alma CCS 
- Read source code 
- [Allen Kay](https://en.wikipedia.org/wiki/Alan_Kay)

Taylor

- [Designing Data-Intensive Applications](https://dataintensive.net/)
- [Wait But Why](https://waitbutwhy.com/2018/04/picking-career.html)


### Transcript


