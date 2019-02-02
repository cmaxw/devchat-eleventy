---
layout: layouts/post.njk
title: >
  RRU 035: Optimizing React Virtual DOM Explained Article with Alexey Ivanov and Andy Barnov
date: 2018-10-30 10:00:33
episode_number: 035
duration: 51:22
audio_url: https://media.devchat.tv/reactroundup/RRU_035_Optimizing_React_Virtual_DOM_explained_article_with_Alexey_Ivanov_Andy_Barnov.mp3
podcast: react-round-up
tags:
  - react_round_up
  - podcast
---

**Panel:**

- [Lucas Reis](https://github.com/lucasmreis)
- [Justin Bennett](https://github.com/zephraph)

**Special Guests:** **Alexey Ivanov and Andy Barnov**

In this episode, the panelists talk with [Alexey Ivanov](https://twitter.com/savetherbtz?lang=en) and [Andy Barnov.](https://github.com/progapandist) They all discuss Alexey’s [article](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained) titled: “Optimizing React Virtual DOM.” Listen to today’s episode to hear all the details about this article, the guests’ backgrounds and much, much more!

**Show Topics:**

0:32 – Panel: Thanks for joining us and talking about this [article.](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained)

0:52 – Guest: Thanks for having us on your podcast!

The guest talks about his community of developers and the offices are in San Francisco, Russia and other places. He talks about how the company helps their customers and how they can scale. Some of their companies are [Groupon](https://www.groupon.com/?&utm_source=google&utm_medium=cpc&utm_campaign=us_dt_sea_ggl_txt_naq_sr_cbp_ch1_ybr_k*groupon_m*e_d*groupon-brand_g*groupon-exact_c*137872562158_ap*1t1&gclid=EAIaIQobChMI9Puun7Kq3gIVDo1pCh2oDgiyEAAYASAAEgJZ7_D_BwE) and [Ebay.](https://www.ebay.com)

2:39 – Alexey.

3:09 – Panel: The article is [here.](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained)

What is JSX how does it boil down to? It’s all supposed to help people and help them understand.

3:45 – Alexey: It’s about how to structure your state, etc.

4:15 – Panel: This keeps things small. He said when I have one idea I write a song and when I have 2 ideas I write 2 songs. If you try to put too many ideas into one post it maybe won’t go too far.

4:48 – Alexey.

5:50 – Panel.

5:56 – Panel: That’s a topic for another episode.

The article is interesting in that the large percentage don’t think about rendering performance, so it’s a needed piece of content. Let’s talk about – what is the [React Virtual DOM?](https://www.codecademy.com/articles/react-virtual-dom)

6:32 – Alexey goes into detail with his answer to the panelist’s question.

8:50 – Panel: What I like about this article is that you go through a good progression: here is the JSX that you would write and here is the trans piled function is. And you show the virtual DOM pre-presentation is. I think that is a helpful thing. Let’s talk about that. How does React change to those things when it’s rendering?

9:50 – Alexey.

12:58 – Panel: Okay to recap...when you are rendering an element you write some JSX and the first thing (component) that will map over to the type property is for the Virtual DOM object? And then all of that is compared – when does that happen, the comparison?

13:28 – Alexey: You have React and you create...

15:20 – Panel: So it’s both React and set state these are the only 2 things that triggered state or is there anything else out there?

15:31 – Alexey.

15:47 – Panel: Interesting. You talked about the imperative way we did it before – and it’s much simpler to say what you want, but a question is that is there any world case where it does not work well? What are the trade-offs? Have you ever encountered one?

16:34 – Alexey: If you have changes in the browse, implementations...it’s simplest and easiest way. You just need to have some little changes...

17:53 – Panel: If it’s basic then you don’t have to do manual updates.

18:03 – Alexey.

Alexey: To make it work you need competence in your bundle.

18:36 – Panel: I’ve heard – haven’t worked with – when we have these projects that are really web time based, hundreds of elements in real time on a screen, on a Virtual DOM it’s too slow. You have to be precise. They had performance issues, I’m sure 98.99% of the applications probably perform better with the Virtual DOM.&nbsp;

19:46 – Alexey.

21:38 – Panel: That is to reduce the amount of state changes so you are reducing the amount of time it renders – right?

21:50 – Alexey.

22:03 – [FRESH BOOKS!](https://www.freshbooks.com/?ref=10400&utm_source=sas&utm_medium=affiliate&utm_campaign=87321&sscid=a1k2_rph9e)

23:11 – Panel: We talked about how type is the first thing that is checked. It does equal comparison to compare these types.

What was really interesting is that class components are the same thing but not so. Is it always going to re-render for those components?

24:24 – Alexey: We have to talk about 2 things about this first. In my [article...](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained)

27:49 – Panel: That is a beneficial tool too to control your rendering. You talked about tools to show updates and we will include the link to the article in the links, also I would read it and check out that particular function. It’s cool to see HOW it’s actually rendering.

28:29 – Panel: Apparently sometimes things help us in principle cause we need performance. We need to open the tools and understand what is happening? Is it really a bottleneck like I think it is? One of those Twitter things I saw a few months ago...

30:52 – Alexey: Yes, do what makes sense to you at the time.

32:08 – Panel: We talked about render performance and the pure component and not creating functions...you have a big quote in your article...

I have a big question for me: You have a component, and there is a child / parent component. I am curious about that pattern – will it re-render every time? Tell us your thoughts, please.

33:16 – Alexey.

34:11 – Panel: My only issue with the render props is not a performance issue it’s more of an architectural issue. Sometimes we want things to be interjected. I want to have access to this or that. Sometimes we want to access those on a life cycle. The higher the component makes it easier to add a...

That’s my only complaint about render comps.

35:35 – Alexey.

36:00 – Panel: Like composing consumers?

36:06 – Alexey: What we are talking about is...

37:00 – Panel: I agree. There are some interesting cases with that pattern when you have a lot of those chained together – function, function, etc. – there are some components that will help you compose...

37:34 – Panel: It’s like callback hell all over again.

Everything is a tradeoff somewhere.

After the tree it looks clean with render props. I like it even with the drawbacks.

38:25 – Panel: You spent some time talking about lists of children and how you (if one of the children are removed) then it ends up re rendering all the children cause it’s comparing their positions. You mentioned key is one way to deal with that. Let’s talk about keys. When people use keys they are using an array of an index. It seems like it defeats the purpose of it – is that right?

39:20 – Alexey: Yes, you are right.&nbsp;

40:19 – Panel: I think that continually and it’s a smaller known thing but people want this key error to go away and they just shove something in there. To some extent it’s good to know if your tool requires something it’s good to know WHY it requires that.

40:52 – Panel: Last question. Is that the person to program and be a web developer and they are learning React. This is the tool and they are learning how to use React for an app then when we are throwing articles at them. If they are learning React and these articles are at them I think it’s a cognitive overload. What are your thoughts / advice?

42:07 – Guest: How beginner should you be before you learn React? Ideally you should be aware of JavaScript, right? Sometimes people do this to catch up to something shiny. This is just my 2 cents.&nbsp;

43:03 – Alexey.

44:49 – Panel: When you are going to hire someone to do something or choose a framework always try to do a little bit of work without it. Try to build an application w/o React, and then React is introduced to you, you will only see the benefits that they are brining. One thing that happens inside the React world is that people don’t write an application...

Start with the basic building blocks – that makes sense to me.

46:05 – Panel: Let’s go to picks!

46:13 – [Advertisement – Get A Coder Job!](https://www.digitalocean.com/)

**Links:**

- [Ruby on Rails](https://rubyonrails.org)
- [Angular](https://angular.io/guide/quickstart)
- [JavaScript](https://www.javascript.com)
- [Elm](https://elm-lang.org/community)
- [Phoenix](https://phoenixframework.org)
- [GitHub](https://github.com)
- [React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)
- [Elixir and Phoenix Bootcamp](https://www.udemy.com/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/)
- [Alexey Ivanov’s Twitter](https://twitter.com/SaveTheRbtz?lang=en)
- [Andy Barnov’s Twitter](https://twitter.com/progapandist)
- [Rob Pike’s YouTube Video](https://youtu.be/cN_DpYBzKso)
- [Understanding Comics](https://en.wikipedia.org/wiki/Understanding_Comics)
- [Understanding Comics – Book](https://www.amazon.com/Understanding-Comics-Invisible-Scott-McCloud/dp/006097625X)
- [Get A Coder Job](https://devchat.tv/get-a-coder-job/)
- [Charles Max Wood’s Twitter](https://twitter.com/cmaxw?ref_src=twsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor)

**Sponsors:**

- [Get a Coder Job](https://devchat.tv/get-a-coder-job/)
- [Cache Fly](https://www.cachefly.com)
- [Fresh Books](https://www.freshbooks.com/?ref=ppc-na-fb&camp=US%2528SEM%2529Branded%257CEXM&ag=%257Efreshbooks&kw=fresh%2520books&campaignid=717543354&adgroupid=53169078638&kwid=kwd-299596828929&dv=c&ntwk=g&crid=289653575014&source=GOOGLE&gclid=EAIaIQobChMIwr_9ofSJ3gIVyrfACh1DkQVNEAAYASAAEgJIUvD_BwE&gclsrc=aw.ds&dclid=CPaQ6KX0id4CFUTcwAodvfQEcA)
- [Kendo UI](https://www.telerik.com/kendo-ui?utm_medium=social-paid&utm_source=devchattv&utm_campaign=kendo-ui-awareness-jsjabber)

**Picks:**

Lucas

- Check your room for sound

Andy

- [Go Programming Language](https://golang.org/)

Alexey

- [Understanding comics](https://understandingcomics177.wordpress.com/understanding-scott-mccloud/https://www.amazon.com/Understanding-Comics-Invisible-Scott-McCloud/dp/006097625X)

Justin

- [The Complete Elixir and Phoenix Bootcamp](https://www.udemy.com/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/)

### Transcript
