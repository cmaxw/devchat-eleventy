---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 401: Hasura with Tanmai Gopal'
date: 2019-10-17T10:00:32.926Z
episode_number: '401'
duration: '1:10:21'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_401_Tanmai_Gopal.mp3'
image: /images/uploads/javascript_jabber_thumb.jpg
tags:
  - js_jabber
  - podcast
  - graphQL
  - Hasura
  - API
  - cloud
  - cloud native
  - metadata
  - microservices
  - Tanmai Gopal
  - AJ O'Neal
  - Dan Shapir
  - Steve Edwards
  - Charles Max Wood
question1: What are some of the challenges of working in the cloud with GraphQL?
answer1: >-
  Since GraphQL is basically a shared type system that describes your API, that
  means all your types need to be in the same code base. This is at odds with
  the folks who want to do microservices and serverless functions, because since
  their API is split across multiple services they have different types, and
  forcing these types to work together defeats the purpose of using
  microservices. Also, storing state across requests doesn’t work well with
  serverless and cloud native stuff.
question2: How does Hasura work?
answer2: >-
  He explains that when you have a metadata based engine, this metadata has a
  language that allows you to bring to bring in types from multiple upstream
  microservices, and create a coherent graphQL API on top of that. Hasura is a
  middle man between the microservices and the consumer that converts multiple
  types into a single coherent graphQL API.
question3: How do you deal with data fetching and a high volume of requests?
answer3: >-
  when the product is an app, preventing an overabundance of queries becomes
  easier because during one of the staging processes that they have, they
  extract all of the queries that the app is actually making, and in the
  production version it only allows the queries that it has seen before.
question4: What are the two layers of Hasura?
answer4: >-
  One is an aliasing layer that lets you rename tables, columns, etc as exposed
  by PostgresQL. The other is a computer column, so that you can add computer
  columns so you can extend the type that you get from a data model, and then
  you can point that to something that you derive.
---
Tanmai is one of the founders at Hasura. Hasura gives you instant GraphQL APIs on top of a Postgres database. The eventual idea is to make data access secure and easy. Tanmai explains the challenges of doing this in the cloud. He talks about some of the difficulties with the tooling around using GraphQL and its bias towards working well with a monolith. Since GraphQL is basically a shared type system that describes your API, that means all your types need to be in the same code base. This is at odds with the folks who want to do microservices and serverless functions, because since their API is split across multiple services they have different types, and forcing these types to work together defeats the purpose of using microservices. Also, storing state across requests doesn’t work well with serverless and cloud native stuff. In short, learning to live without state is one of the general challenges with going serverless. 

This is where Hasura comes into play, and Tanmai explains how it works. Hasura is metadata driven, and each instance of the server can leverage multiple calls and exhibit a high amount of concurrency. It’s designed to be a little more CPU bound than memory bound, which means that configuring auto scaling on it is very easy and allows you to utilize the elasticity of cloud native applications. Tanmai clarifies his usage of the word ‘cloud native’, by which he means microservices. He explains that when you have a metadata based engine, this metadata has a language that allows you to bring to bring in types from multiple upstream microservices, and create a coherent graphQL API on top of that. Hasura is a middle man between the microservices and the consumer that converts multiple types into a single coherent graphQL API.

Next, Tanmai explains how Hasura handles data fetching and a high volume of requests. They also invented PostgresQL, RLS-like semantics within Hasura. He explains the process for merging your microservices into a single graphQL interface. Back on data fetching, Tanmai explains that when the product is an app, preventing an overabundance of queries becomes easier because during one of the staging processes that they have, they extract all of the queries that the app is actually making, and in the production version it only allows the queries that it has seen before. Hasura is focused on both the public interface and private use cases, though private is slightly better supported. 

Tanmai talks about the customizations available with Hasura. Hasura supports two layers. One is an aliasing layer that lets you rename tables, columns, etc as exposed by PostgresQL. The other is a computer column, so that you can add computer columns so you can extend the type that you get from a data model, and then you can point that to something that you derive. 

The panelist discusses the common conception of why it is a bad idea to expose the data models to the frontend folks directly. They discuss the trend of ‘dumbing down’ available tooling to appeal to junior developers, at the cost of making the backend more complicated. They talk about some of the issues that come from this, and the importance of tooling to solve this concern. 

Finally, Tanmai talks about the reasons to use Hasura over other products. There are 2 technologies that help with integrating arbitrary data sources. First is authorization grammar, their version of RLS that can extend to any system of types and relationships, The second is the data wrapper, part of the compiler that compiles from the graphQL metadata AST to the actual SQL AST. That is a generic interface, so anyone can come in and plug in a Haskell module that has that interface and implement a backend compiler for a native query language. This allows us to plug in other sources and stitch microservices together. The show concludes with Tanmai talking about their choice to use Haskell to make Hasura. 


### **Panelists**



*   AJ O’Neal
*   Dan Shapir
*   Steve Edwards
*   Charles Max Wood

With special guest: Tanmai Gopal

**Sponsors**



*   [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [The Dev Ed Podcast](https://devchat.tv/dev-ed/)

**Links**



*   [Hasura](https://hasura.io/)
*   [Haskell](https://www.haskell.org/)
*   [Node.js](https://nodejs.org/)
*   [Cloud Native](https://www.cncf.io/)
*   [Microservices ](https://microservices.io/)
*   [PostGraphile](https://www.graphile.org/postgraphile/) 
*   [Postgres ](https://www.postgresql.org/)
*   [PostgresQL RLS](https://www.postgresql.org/docs/9.5/ddl-rowsecurity.html)
*   [Swagger](https://swagger.io/)
*   [JAMstack](https://jamstack.org/)
*   [Soap](https://www.npmjs.com/package/soap)
*   [Rest](https://www.npmjs.com/package/rest-js)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**AJ O’Neal:**



*   [The Economic Singularity](https://www.amazon.com/Economic-Singularity-Artificial-intelligence-capitalism/dp/099321164X?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [Capital Cities](https://www.capitalcitiesmusic.com/)
*   [GameCube Homebrew](https://coolaj86.com/articles/gamecube-homebrew-guide-for-n00bs/)

**Dan Shapir:**



*   [Romania](http://romaniatourism.com/)
*   [JSCamp](https://jscamp.ro/)

**Steve Edwards:**



*   [Cold Blooded: The Clutter Family Murders](https://www.sundancenow.com/series/watch/cold-blooded-the-clutter-family-murders/3804768?season=1)

**Charles Max Wood:**



*   [Maxcoders.io](https://maxcoders.io)
*   [TripIt](https://www.tripit.com/web)
*   [St. George Marathon](https://www.stgeorgemarathon.com/)
*   [VO2 Max app](https://korr.com/products/cardiocoach-vo2-max-app/)

**Tanmai Gopal: **



*   Follow Tanmai on Twitter [@tanmaigo](https://twitter.com/tanmaigo?lang=en)
*   [Broken Earth Trilogy](https://www.amazon.com/gp/bookseries/B01947LZ8A?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [The Three-Body Problem](https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [graphQL Asia](https://graphql.asia/)

<!-- Docs to Markdown version 1.0β17 -->
