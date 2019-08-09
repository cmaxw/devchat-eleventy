---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 421: Scaling and Shopify with Kir Shatrov'
date: 2019-07-16T10:00:24.331Z
episode_number: '421'
duration: '55:11'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_421_Kirill_Shatrov.mp3'
tags:
  - ruby_rogues
  - podcast
  - Charles Max Wood
  - Nate Hopkins
  - Andrew Mason
  - Kirill Shatrov
  - Shopify
  - scaling
---
## **Sponsors**



*   [Sentry](https://sentry.io/) use code “devchat” for $100 credit
*   [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues): Try Cloud 66 Rails for FREE & get $66 free credits with promo code **RubyRogues**
*   [RedisGreen](https://redisgreen.net/?utm_source=rubyrogues&utm_medium=podcast&utm_campaign=rubyrogues)


### **Panel**



*   Charles Max Wood
*   Nate Hopkins
*   Andrew Mason

With Special Guest: Kir Shatrov


### **Episode Summary**

Today’s guest Kir Shatrov is a production engineer on Shopify based in London, UK. Today, he and the panel are discussing capacity planning. Kir believes that capacity planning becomes a priority when your company starts losing money and your customers are suffering. When someone does get to the point of scaling their app, it’s important to look at the limitations of the hosting service. It is also important to remember that scaling is not a job that ever completes.

Kir talks about his experience and time with Shopify and what types of changes have happened in the four years he’s been with the company. Kir explains that when Shopify was founded about 12 years ago, they were some of the first contributors to Rails, and Rails was just a zip file they shared over an email. This is important to know because the monolith code for Shopify has never been rewritten, so they put a lot of care into keeping it working. He talks about some of the techniques Shopify uses to avoid splitting into microservices when scaling their organization and how the multiple instances of the database is structured and managed from an opps point of view. He talks about what aspects of Shopify are open source and the approach to the architecture of the background jobs system.

The panel discusses what should be done if you want to scale your project and move away from background jobs. Kir talks about what criteria his company uses to determine what moves to a background job and when it is too much to background something. The show finishes with Kir sharing some of his favorite tips, tricks, and approaches he’s used at Shopify.

**Links**



*   [Heroku](https://www.heroku.com/)
*   [Digital Ocean](https://www.digitalocean.com/)
*   [Sidekiq](https://github.com/mperham/sidekiq)
*   [Shopify job iteration](https://github.com/Shopify/job-iteration)
*   [Redis](https://redis.io/)
*   [PostgreSQL](https://www.postgresql.org/)
*   [Resque](https://github.com/resque/resque)
*   [Strace ](https://strace.io/)
*   [RB Spy](https://github.com/rbspy/rbspy)
*   [RB Trace](https://github.com/tmm1/rbtrace)
*   [New Relic](https://newrelic.com)
*   [Data Dog](https://www.datadoghq.com/)
*   [Fat Free CRM](https://github.com/fatfreecrm/fat_free_crm)

Follow DevChat on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Nate Hopkins:**



*   Open source
*   Cats ([Maine Coon](https://en.wikipedia.org/wiki/Maine_Coon) and [Russian Blue](https://en.wikipedia.org/wiki/Russian_Blue))

**Charles Max Wood:**



*   [75 Hard challenge](https://75hard.biz/)

**Kir Shatrov: **



*   [Ruby Hack Challenge](https://github.com/ko1/rubyhackchallenge)
*   Follow [Kirill Shatrov](https://kirshatrov.com/) @kirshatrov on Twitter and @kirs on Github

<!-- Docs to Markdown version 1.0β17 -->
