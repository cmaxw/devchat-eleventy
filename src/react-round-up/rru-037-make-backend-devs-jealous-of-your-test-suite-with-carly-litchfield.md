---
layout: layouts/post.njk
title: >
      RRU 037: Make Backend Devs Jealous of Your Test Suite with Carly Litchfield
date: 2018-11-13 11:00:02
episode_number: 037
duration: 55:38
audio_url: https://media.devchat.tv/reactroundup/RRU_037_Make_Backend_Devs_Jealous_Of_Your_Test_Suite_with_Carly_Litchfield.mp3
podcast: react-round-up
tags: 
  - react_round_up
  - podcast
---

 **Panel:**

- Nader Dabit
- Lucas Reis
- Justin Bennett

**Special Guests:**  **Carly Litchfield**

In this episode, the panelists talk with [Carly Litchfield](https://twitter.com/carly_joh?lang=en) who is a Full-stack engineer of React and React Native. The panel and Carly talk about frontend and backend developing and the issues that teams could face day-in and day-out. Listen to today’s episode to hear about that and much more!

**Show Topics:**

0:00 – [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

0:30 – Nader: Welcome! Our panel is Justin, Lucas, myself, and our guest is [Carly](https://twitter.com/carly_joh?lang=en). Welcome to the show! Thanks for joining us. Introduce yourself please.

0:56 – Carly: I am a fullstack engineer at a company called Zocdoc. I have been there for 4 years, and we use C# framework.

1:17 – Nader: C# interesting!

1:26 – Nader: You can do game development and other stuff.

1:33- Carly: I haven’t gotten into game development at all, just using C# for web development.

1:50 – Nader.

1:55 – Carly.

2:08 – Nader: The topic for today is: being a frontend developer and a team that is mostly focused on backend. Also, other topics with testing if we have time. How did you get into web development?

2:32 – _Carly goes into detail about how she got into web development._

5:02 – Carly: I have worked with React Native, too.

5:22 – Nader: That is my favorite thing to work with (React Native).

5:27 – Panel: Everyone was learning about this new domain and this frontend domain. How was the knowledge spread? How was it spread throughout the company?

5:50 – Carly: One of the people someone that was on this 3 – person team (Thomas) and he went around to anyone who knew React. He made a lot of tooling. He made a lot of configuration libraries. You’d have your NPM integration like everyone else. It was cool to hook it into our servers. It was crucial to help with adoption. Those libraries aren’t being well maintained and it’s causing some pain.

7:32 – Panel: I remember this one case when I was working with an engineer and he was working on backend stuff. He was like I don’t understand here is JSS and JavaScript. Did you have those cultural differences?

8:27 – Carly: Yeah, definitely. You will see a thousand two-thousand lines that are written by us and it’s impossible to know how it hooks-up, etc. It’s painful to work with and some of the internal tooling nobody is updating. That served a forcing mechanism b/c we built tons of the frontend that it’s so complicated and we are paralyzed. That served us b/c frontend is hard and we just can’t go plopping around wherever we want. That’s how they tried to use Backbone. We never hired a specific frontend engineer. We just kept hiring backend to learn frontend. It’s harder to hire someone to avoid those mistakes. They will have to learn the hard way, where a Senior Developer can help. Even our Backbone apps were heavy and hard to work with. At that time we thought we were going to go to React. We thought we could hire someone with true frontend experience. We started an interview process and hard to get off the ground. We have gotten a lot better b/c we have Senior and Principle engineers to help.

12:12 – Panel: This isn’t easy and this is hard. Building UIs are extremely difficult.&nbsp;

13:06 – Carly: I have an old manager that posted a quote...that just shows how much things are changing. These are advanced strategies. On the backend you have all of these services and go to AWS. However, on the frontend the problems aren’t solved, yet. WE don’t have a perfect answer. A lot of the dynamics are interesting and the right answers are yet to be found.

14:32 – Panel: I think that in some ways, an application we are finding better ways with static websites and blogs through the WordPress model. We are finding practices to enable people to build intricate things.

15:07 – Panel: I used C++ in the beginning of my career. I use a framework called QT. QT is good to building native UIs, but it’s extremely complicated and difficult. And thinking about that from the idea of building not only a UI, but also...we are essentially using tools that aren’t supposed to be used in the way they were designed.

16:46 – Carly: I agree. When I was using style components at the beginning – after you do it for a while it’s not weird anymore. It’s great not to have to reuse things. I hear a lot of people concerned with these separations, but maybe they were 3 separate concerns. Maybe one component is one concern, if you will.

17:59 – Panel: I agree. If you look at the page model vs. the web model...you want a button to look like THAT button. You want them to look the same, it’s a component or an app. Maybe if you have a Wikipedia page where you have headers and sections, the CSS model makes sense on that particular domain, but with application it’s so complicated. I am a fan of cell components, and...

Things are getting better. Another topic – we are in this frontend world and one big problem with the old days was reliability. You talked a lot about testing in the frontend. Let’s talk about testing in your professional life.

19:48 – Carly: I moved slowly into backend, and it’s comfortable that you knew you weren’t going to break anything. This testing stuff is great and I actually love it. We need to figure it out on the frontend, too. I built a bunch of tools that doctors use.

We started thinking about what can we do to make the frontend more testable.

21:40 – Panel: I call that: Layer Oriented Design.

21:51 – Carly: When we were on Backbone we used this screen-shot testing framework. We obviously should be focusing on how we made this app rather than how do we test frontend code. But we did it. You could have a Backbone view...

22:43 – [Advertisement – FRESH BOOKS!](https://www.freshbooks.com/?ref=ppc-fb&campaignid=717543354&adgroupid=51893696397&targetid=kwd-298507762065&crid=284659279616&dv=c&ntwk=g&source=GOOGLE&gclid=EAIaIQobChMIqIi-lMLD3gIVTLXACh1Nggt8EAAYASAAEgIxa_D_BwE&gclsrc=aw.ds)

23:47 – Nader: How would you change the pictures – were you running it through what?

24:02 – Carly: An array of pixel colors.

24:10 – Carly: It was cool! We called it Lena. We used it for a year or so and it caught some bugs and it did other things. We built Percy and Storybook. We are ahead of the game with that. In general that is what we have moved to instead.

25:30 – Panel: [What is Percy?](https://github.com/percy/)

25:37 – Carly: It will render your components, then it will grab...and every time you push code it will compare the old/new screenshot. You can do mobile stuff, too, which is awesome.

26:25 – Panel: When I saw the [Percy](https://github.com/percy/) tests – I thought: this makes a difference!

26:48 – Carly: How do you know if this random stuff matters?

27:15 – Panel: It makes a huge impact. Percy can give it to you and easier to review code that has visual changes. If you added a border and you can see all the red sea of change, so let’s use a border box, etc. It’s really mind-blowing! They have a GitHub hook. If there are changes people have to improve.

28:22 – Panel: You mentioned it supporting a bunch of different browsers? What sort of context does Percy run in? Does it have a specific execution...?

28:44 – Carly: Options in Firefox and Chrome so far. People at [Percy](https://github.com/percy/) talk about cross-browsers and it will have a pipeline. It’s really hard to do. Who knows if it will come but we will see.

29:13 – Panel: How do we ensure that things are continuing to work across the browsers?

Did we render anything that is completely broke? How do you do testing across browsers?

29:44 – Carly: Yeah, we use Browser Stack. We run Selenium IO.

31:12 – Nader: It sounds like you have great tools on the frontend.

_Nader asks a question._

31:28 – Carly: We have a fairly broken-up frontend. If someone changes something...

Running all of those tests can get crazy.

32:11 – Panel: [Cypress...](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Is-Simple)

Why did you decide on Cypress – what has been your experience with that?

32:35 – Carly: I have not yet figured out a good debugging experience, and I don’t know how you guys are doing it? It’s impossible to debug and it’s not a pleasant experience. I saw Cypress’ advertisement and you can see the difference. They highlight the target, etc. I had to try it! In just a little app that I have – I tested it there. I thought it was awesome b/c it will show you where it failed, etc.

I had to get everyone on board and tried to persuade my team to use it. I used these slides and presented it, and it worked fine. It didn’t flake at all. People had to work with the tests and work with Cypress to get the feel for it. Everyone decided to use it, too.

35:16 – Panel: The spread of knowledge and it goes back to the beginning. What is this secret group: Frontend Guild?

35:33 – _Carly answers the question._

37:04 – Panel: How does knowledge spread happen in other companies? Such different companies and different scales – how does that happen?

37:23 – Panel: As your company grows, communication is definitely a hard thing to accomplish. At ARTSY we try to do different things. One of our principles is...we try to document everything that goes on. Document from a process-level, and other levels, too. We have working practice groups (like the Guild) we talk about frontend issues, and other topics. Lots of meetings and lunch and learns (show and tell). We bring in outsiders in to the company to share their information.

38:57 – Nader: At AWS we have [Meetups](https://www.meetup.com) that are internal and external. We have talks, too. Every week you can find a few dozen talks around AWS and/or Amazon. You can take an hour or two out of your day to check those out. We also have demo-days that can show people what they are working on.

40:06 – Panel: Demo-days sounds very exciting.

40:49 – Panel: Find out what motivates people and go from there.

40:57 – Panel: Security as a healthcare company there is a lot of regulations, paper, and you have to keep up with standards. Can you talk about that?

41:20 – Carly: Yes, GitHub has a great feature...

43:20 – Carly: A Web Package I saw recently, and it’s called [NPM / audit resolve.](https://www.npmjs.com/package/npm-audit-resolver)

44:40 – Panel: That audit resolve was purchased by NPM. Yeah, we primarily use...

45:04 – Carly: This stuff was existing out there before, and now we know.

45:12 – Panel: There is s this cognitive load that is just sitting out there. Being aware of what licenses out use and the features that you aren’t actively investing in.

Building something is more than just putting JavaScript on the page – there are more concerns.

46:19 – Panel.

46:25 – Panel: Building the product is just the tip of the iceberg. It’s all of the other things you have to do to make the delivery good.

46:49 – Carly: I agree – especially on the performance-side.

48:00 – Panel: I would like to talk about these topics now: Monitoring and CI. How do you set that up?

48:19 – Carly: We have these things called [Bundlesize.](https://github.com/siddharthkp/bundlesize)

49:06 – Panel: What’s the name of the library called?

49:10 – Carly: [Bundlesize](https://github.com/siddharthkp/bundlesize), I think.

50:41 – Nader: That’s all the time I have for today and thanks for coming on the show, Carly!

51:12 – Panel: Wait! Picks!

51:23 – [Advertisement – Get A Coder Job!](https://www.digitalocean.com/)

End – [Cache Fly](https://www.cachefly.com)

**Links:**

- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [JavaScript](https://www.javascript.com)
- [Elm](https://elm-lang.org/community)
- [Phoenix](https://phoenixframework.org)
- [GitHub](https://github.com)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [Charles Max Wood’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)
- [Lenna](https://en.wikipedia.org/wiki/Lenna)
- [Percy.io](https://percy.io)
- [Percy – GitHub](https://github.com/percy/)
- [GitHub – Bundlesize](https://github.com/siddharthkp/bundlesize)
- [NPM – Audit Resolver](https://www.npmjs.com/package/npm-audit-resolver)
- [Meet Libby](https://meet.libbyapp.com)
- [Backbone](https://www.toptal.com/backbone-js?adnetwork=search&keyword=%252Bbackbone%2520%252Bdevelopers&creative=274798458847&campaignid=641791600&adgroupid=31204963122&matchtype=b&network=g&device=c&devicemodel=&adposition=1t1&noun=&content=&gclid=EAIaIQobChMInOG4trjD3gIVTbjACh1TigxkEAAYASAAEgIG5vD_BwE)
- [React – Blog](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
- [The Selfish Gene](https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606/ref=dp_ob_title_bk)
- [Cypress.io](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Is-Simple)
- [Carly Litchfield LinkedIn](https://www.linkedin.com/in/carly-litchfield)
- [Carly Litchfield Twitter](https://twitter.com/carly_joh?lang=en)

**Sponsors:**

- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%257Efreshbooks&kw=fresh%2520books&campaignid=717543354&adgroupid=53169078638&kwid=kwd-299596828929&dv=c&ntwk=g&crid=289653575014&source=GOOGLE&gclid=EAIaIQobChMIwr_9ofSJ3gIVyrfACh1DkQVNEAAYASAAEgJIUvD_BwE&gclsrc=aw.ds&dclid=CPaQ6KX0id4CFUTcwAodvfQEcA)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

**Picks:**

Lucas

- [App – Libby](https://meet.libbyapp.com)

Carly

- [Book: The Selfish Gene](https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606/ref=dp_ob_title_bk)

Justin

- [TestCafé](https://testcafe.devexpress.com)
- [Create React 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)


### Transcript


