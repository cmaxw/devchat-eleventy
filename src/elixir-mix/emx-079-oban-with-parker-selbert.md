---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 079: Oban with Parker Selbert'
date: 2019-11-26T11:00:04.418Z
episode_number: 079
duration: '41:54'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_079_Parker_Selbert.mp3'
tags:
  - elixir_mix
  - podcast
question1: What is Oban?
answer1: 'A persistent background job library. '
question2: What are the Oban recipes?
answer2: A series of blog articles outlining what Oban can do.
question3: Can you get rid of old jobs using Oban?
answer3: 'Yes, You can change the pruning configuration by time, number or performance. '
question4: What you can do from the Oban UI?
answer4: 'Pause, resume, scale the que size. '
---
In this episode of Elixir Mix the panel interviews Parker Selbert. Parker lives in Chicago and runs a consultancy with his wife. He joins the panel to discuss a library that he wrote, Oban. Parker starts by explaining what Oban is and why he wrote it. Oban is a way to run reliable background jobs by persisting them in the database.

Oban is akin to Sidekick, Parker explains, he wanted something similar to Sidekick for Elixir. He made a few improvements including moving it to Postgres from Redis. He shares the common problems found using Redis and how easy Postgres was to use for this library. 

The panel asks Parker about his Oban Recipes. Parker explains why he wrote the recipes and what some of them contain. After releasing Oban he received many questions asking about how to use Oban. Parker took the most common questions and wrote 7 blog post outlining how to use Oban. 

Parker shares his favorite features found in Oban and walks the panel through its architecture. The panel asks him about the maturity and usage of the library. Parker tells them that the usage has been steadily climbing. The episode ends with the panel discussing the Oban UI and how it works.


**Panelists**

- Mark Ericksen
- Josh Adams
- Eric Oestrich

**Guest**

- Parker Selbert

**Sponsors**

- [Sentry](http://sentry.io/)– use the code “devchat” for two months free on Sentry’s small plan
- ElixirCasts |[Get 10% off with the promo code &quot;](https://elixircasts.io/)[_elixirmix&quot;_](https://elixircasts.io/)
- [CacheFly](https://www.cachefly.com/)


## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

> **"The MaxCoders Guide to Finding Your Dream Developer Job" by Charles Max Wood is now available on Amazon.**  [**Get Your Copy Today!**](https://www.amazon.com/gp/product/B081MBL5C9/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=devchattv-20&linkId=9d61363241636e2546ef46abba198746&language=en_US)

## **\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**


**Links**

- [https://github.com/sorentwo/oban](https://github.com/sorentwo/oban)
- [https://oban.dev/](https://oban.dev/)
- [Oban Recipes Part 1: Unique Jobs](https://sorentwo.com/2019/07/18/oban-recipes-part-1-unique-jobs.html)
- [Oban Recipes Part 2: Recursive Jobs](https://sorentwo.com/2019/07/22/oban-recipes-part-2-recursive-jobs.html)
- [Oban Recipes Part 3: Reliable Scheduling](https://sorentwo.com/2019/08/02/oban-recipes-part-3-reliable-scheduling.html)
- [Oban Recipes Part 4: Reporting Progress](https://sorentwo.com/2019/08/21/oban-recipes-part-4-reporting-progress.html)
- [Oban Recipes Part 5: Batch Jobs](https://sorentwo.com/2019/09/17/oban-recipes-part-5-batch-jobs.html)
- [Oban Recipes Part 6: Expected Failures](https://sorentwo.com/2019/10/17/oban-recipes-part-6-expected-failures.html)
- [Oban Recipes Part 7: Splitting Queues](https://sorentwo.com/2019/11/05/oban-recipes-part-7-splitting-queues.html)
- [Oban — Reliable and Observable Job Processing](https://elixirforum.com/t/oban-reliable-and-observable-job-processing/22449)
- [Oban UI: Private Beta](https://elixirforum.com/t/oban-ui-private-beta/26182)
- [Github Starts Won't Pay Your Rent](https://medium.com/@kitze/github-stars-wont-pay-your-rent-8b348e12baed)
- [https://twitter.com/sorentwo?lang=en](https://twitter.com/sorentwo?lang=en)
- [Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages](https://www.amazon.com/Seven-Languages-Weeks-Programming-Programmers/dp/193435659X)
- [https://github.com/sorentwo/kiq](https://github.com/sorentwo/kiq)
- [https://www.postgresql.org/docs/current/sql-notify.html](https://www.postgresql.org/docs/current/sql-notify.html)
- [https://www.postgresql.org/docs/current/sql-listen.html](https://www.postgresql.org/docs/current/sql-listen.html)
- [https://www.postgresql.org/docs/9.5/sql-select.html](https://www.postgresql.org/docs/9.5/sql-select.html)
- [https://www.postgresql.org/docs/9.4/explicit-locking.html](https://www.postgresql.org/docs/9.4/explicit-locking.html)
- [https://github.com/sorentwo/oban/blob/master/lib/oban/pruner.ex](https://github.com/sorentwo/oban/blob/master/lib/oban/pruner.ex)
- [https://github.com/elixirs/faker](https://github.com/elixirs/faker)
- [https://oban.dev/#sign-up](https://oban.dev/#sign-up)
- [https://www.facebook.com/Elixir-Mix](https://www.facebook.com/Elixir-Mix)
- [https://twitter.com/elixir\_mix](https://twitter.com/elixir_mix)

**Picks**

**Mark Ericksen:**

- [https://twitter.com/CodeWisdom/status/1189602991701184512](https://twitter.com/CodeWisdom/status/1189602991701184512)

**Josh Adams:**

- [How to write a commit message](https://writingfordevelopers.substack.com/p/how-to-write-a-commit-message#main)

**Eric Oestrich:**

- [Godzilla: The Showa-Era Films, 1954–1975](https://www.criterion.com/boxsets/2648-godzilla-the-showa-era-films-1954-1975)

**Parker Selbert:**

- [The Rust Programming Language](https://nostarch.com/Rust2018)
- [Copper Fox Distillery](https://www.copperfoxdistillery.com/)
