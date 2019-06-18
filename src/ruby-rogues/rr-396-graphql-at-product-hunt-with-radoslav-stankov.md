---
layout: layouts/post.njk
title: >
      RR 396: GraphQL at Product Hunt with Radoslav Stankov
date: 2019-01-24 00:29:24
episode_number: 396
duration: 55:51
audio_url: https://media.devchat.tv/ruby-rogues/RR_396_GraphQL_at_Product_Hunt_with_Radoslav_Stankov.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

## Sponsors

- [Sentry](https://sentry.io)&nbsp;use the code "devchat" for $100 credit
- [TripleByte](https://triplebyte.com/rogues)

#### **Panel**

- Dave Kimura
- Nate Hopkins
- Charles Max Wood
**Special Guest - Radoslav Stankov** &nbsp; In this episode, the panelists of Ruby Rogues speak with Radoslav Stankov about GraphQL and its implementation in depth. Radoslav is based out of Sofia, Bulgaria and is the head of the engineering team at Product Hunt. He is a full stack developer since 2002, working on JavaScript, Ruby on Rails, Elixir and GraphQL. &nbsp;
#### **Show Notes** :
0:00 – Charles introduces the panel and the special guest. 0:30 – Advertisement:&nbsp;[Sentry](https://sentry.io/welcome/)&nbsp;- Use the code “devchat” to get two months free on Sentry’s small plan. 1:40&nbsp;&nbsp;&nbsp;- Radoslav introduces himself and gives a short description about what he is working on. 2:20 - Charles asks him about the stack at Product Hunt and details about the company. Radoslav gives a brief historical background while explaining that they moved to GraphQL two years ago. He states that his team consists of about six full stack developers. He explains that GraphQL is their main API currently for communicating with the Rail backend and a React client in the front. He also mentions that they released a new iOS app recently. 5:12 - Charles asks if increasing number of websites are moving toward the mentioned model where Rails provides the backend API and rendering happens in the front. Radoslav agrees while saying Rails is faster but if the complexity increases, it starts becoming increasingly complex. He gives an example of views to explain his point. He interprets GraphQL as an update on REST API which is much cleaner and easier to work with. 7:08 - Dave agrees that GraphQL is interesting and compares it to SOAP interface while explaining the comparison in detail. He asks Radoslav the reason why GraphQL is used internally without a client facing API. Radoslav answers that he prefers GraphQL to be private and explains with an example using it internally is very flexible, hassle free and can be used for anything that the user wants to do in a simple manner. 11:30 - Dave asks does GraphQL handles versioning as the application matures. Radoslav elaborates on it by saying that versioning is similar to REST API and with GraphQL, the scheme is statically typed and it’s easy to identify information such as which field was requested frequently by the customer and which needs to be deprecated. 14:08 - Dave asks if GraphQL has a documentation API like Swagger. Radoslav talks about a tool called “graphical” which is an IDE for graphical queries that generates automatic documentation. 15:31 - Nate asks about the origin of the metric tracking in GraphQL. Radoslav says that it comes from certain tools, that all the libraries such JavaScript, Ruby, Elixir have instrumentation hooks and information is obtained by plugging into them. 16:22 - Nate then says that this is basically like hoisting SQL database to frontend layer and then goes on to ask how the database queries are optimized. Radoslav explains in detail that the optimization is done similar as normal Rails and explains the process of batching. He mentions that he has written two blog posts on the same topic - optimization for N+1 queries. 19:27 - Dave shares that GraphQL has a good feature where you can restrict the query based on what the user wants. Radoslav talks about the method of caching for optimization. 21:30 - Charles asks if building resolvers has gotten better than before. Radoslav answers in affirmative and talks about the usage of classes, methods and mutations that makes the procedure simple. He explains that one of his libraries has a GraphQL plugin where you have to define search queries and it exports those to GraphQL types and arguments that can be plugged into GraphQL schema. 24:20 - Nate asks about the implementation of GraphQL components. Radoslav says that it is separated into a single namespace, exposed to a controller, the GraphQL types are matched to REST serializers. The frontend has React component and the backend contains the controller, utility classes and the GraphQL logic. He then goes on to explain the structure in depth. 26:47 - Nate asks if this strategy has been blogged about to which Radoslav answers that he hasn’t but has given talks on it. 27:15 - Nate asks about the downsides of GraphQL. Radoslav shares his worries about making the API public as it should be made more bullet-proof as it could have performance issues on such a large scale and would involve much better monitoring. He says that authorization for resources would also be a problem. 29:17 - Nate mentions that in the end it is a tradeoff as it is with any software and asks at what point does it start to make sense to use GraphQL. Radoslav answers that it depends on the roadmap, the kind of the product is and gives some examples to elaborate further. 31:35 - Nate says that early planning could be needed for growing the team in a particular way. He also talks about the disadvantage of growing trends that break down solutions into smaller parts that it takes away the ability of small teams to build entire solutions. Radoslav says that while it is true, the developers in his team are full stack and capable of working with all kinds of tasks be it frontend or backend that come their way. 35:45 - Nate asks about the team’s hiring practices. Radoslav describes that they started with senior developers and later on hired interns and juniors as well. He states that interns and juniors ask better questions and work well with component driven design. 39:18 - Nate asks why Ruby is considered to be a good choice&nbsp;for GraphQL. Radoslav answers that the Ruby implementation of GraphQL is one of the best, used by big companies like Shopify, GitHub, Airbnb. It solves code scaling issues and integrates well with Rails. 42:45 - Dave says that it will be interesting to see what Facebook will come up next in the frontend framework. Radoslav agrees and says Facebook infrastructure team makes good tradeoffs and gives the example that each time there is React update, the team updates the whole codebase to the newest React version. 45:56 – Dave and Radoslav talk about the React team’s versioning&nbsp;being unusual. 46:23 – Advertisement - [TripleByte](https://triplebyte.com/) - 1000$ signing bonus for listeners 47:20 – Picks! 54:50 – Radoslav mentions that he is available as rstankov on Twitter, GitHub and his website is [www.rstankov.com](https://rstankov.com/). 55:25 – END – Advertisement – [CacheFly!](https://www.cachefly.com/)&nbsp;
#### **Picks**
Dave
- [Swing Cars](https://www.amazon.com/Lil-Rider-Ride-Wiggle-Girls/dp/B00IOWBKQO) - for kids
- [Dewalt USB charger](https://www.amazon.com/DEWALT-DCB090-12V-Power-Source/dp/B00EYSUK7W)
Nate
- [Multipliers - How the Best Leaders Make Everyone Smarter](https://www.amazon.com/Multipliers-Best-Leaders-Everyone-Smarter/dp/0061964395)
- Jimmy Buffet songs - [A Pirate looks at Forty](https://www.youtube.com/watch?v=df1E4NJu7ng), [Come Monday](https://www.youtube.com/watch?v=XKGw_hrlaOY)
Charles
- For listeners - Tag devchat episodes on [tv](https://devchat.tv/) or&nbsp;[github.com/cmaxw/devchat-eleventy](https://github.com/cmaxw/devchat-eleventy).
For every 5 episodes tagged (particularly Ruby, JavaScript, testing, new programmers, etc), one hour of coaching will be given. You can open an issue on GitHub for each episode you’re tagging so it does not get mixed up with other listeners.
- “How to Get a Job” - Book in progress.
Radoslav
- [Marc-Andre GraphQL Schema Design at GraphQL summit](https://www.youtube.com/watch?v=pJamhW2xPYw)
- [The Phoenix Project&nbsp;](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592)


### Transcript


