---
podcast: ruby-rogues
tags:
- podcast
- ruby_rogues
- Ruby on Rails
- app development
- MongoDB
- Elastic Search
- Dave Kimura
- John Epperson
- Charles Max Wood
- Jon Druse
layout: layouts/post.njk
title: 'RR 448: How To Avoid Catastrophes with Jon Druse'
date: 2020-02-04T11:00:00+0000
episode_number: '448'
audio_url: https://media.devchat.tv/ruby-rogues/RR_448_Jon_Druse.mp3
duration: '41:46'
question1: Has Jon Druse spoken at RailsConf?
answer1: Yes, he spoke at RailsConf 2019 and his talk was titled "How To Lose 50 Million
  Records in 5 Minutes".
question2: What did the company do about losing all those records?
answer2: Jon's company chose to refactor and rewrite the entire app in MongoDB.
question3: What was some of the mistakes the company made?
answer3: 'They were storing their data in Elastic Search rather than in a database
  and using timestamps as domain names. '
question4: What are landmines in code?
answer4: Landmines are things in your app you don't want to touch and that you don't
  deal with until later.

---
Jon Druse is a developer from Tennessee and has been using Rails for 15 years. He starts the show by sharing some of the background behind his RailsConf talk “How To Lose 50 Million Records in 5 Minutes” and the various mistakes that were made that lead to such a dramatic loss. The loss of these records lead the company to refactor and rewrite the entire app in MongoDB. Jon talks about the decision to use Mongo. One of the main points of his talk was that their mistake was discovered because they were trying to figure out wy Elastic Search was getting slow. He counsels listeners to avoid working your way into a poor status quo and accepting it rather than doing something to fix it. If this happens, it can lead to the sudden failure of your app. In the talk, he mentions ‘landmines’, which are things in your app you don’t want to touch and you don’t deal with it until later. In his company, they left these landmines alone and then did something they thought was unrelated, and everything blew up. He stresses the importance of looking for landmines in the parts of your app that you’re uncomfortable with. He talks about the importance of doing code reviews, and to not keep doing things the same way they’ve always been done if there is a better way to do things. He also believes that there should not be a stigma about talking about mistakes and the importance of learning from each other. He talks about specific things that his company has done to change and improve. The panel discusses the idea of process theater and when refactoring and remaking your entire app is the appropriate solution.

## Panelists

* Dave Kimura
* John Epperson
* Charles Max Wood

## Guests

* Jon Druse

## Sponsors

* [RedisGreen](https://redisgreen.net/?utm_source=rubyrogues&utm_medium=podcast&utm_campaign=rubyrogues)

## **____________________________**

## > **"The MaxCoders Guide to Finding Your Dream Developer Job" by Charles Max Wood is now available on Amazon.**[ **Get Your Copy Today!**](https://www.amazon.com/gp/product/B081MBL5C9/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=devchattv-20&linkId=9d61363241636e2546ef46abba198746&language=en_US)

## **____________________________________________________________**

## Links

* [How To Lose 50 Million Records in 5 Minutes](https://www.youtube.com/watch?v=Qbxmf_TxA-s)
* [Elastic Search](https://www.elastic.co/)
* [MongoDB](https://www.mongodb.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [wrstudios.com/jobs](https://www.wrstudios.com/careers)

## Picks

**Charles Max Wood:**

* [Garage Ceiling Storage](https://amzn.to/2TLT9xB)

**John Epperson:**

* [Discard](https://github.com/jhawthorn/discard)
* [Glengoyne Cask Strength Scotch](https://www.thewhiskyexchange.com/p/49166/glengoyne-cask-strength-batch-7)

**Dave Kimura:**

* [Adhesive Cable Clips](https://www.amazon.com/gp/product/B07PG8CR1V/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
* [Dewalt Pull Saw](https://www.homedepot.com/p/DEWALT-10-43-Pull-Saw-with-Composite-Handle-DWHT20216/205436902)

**Jon Druse:**

* [Keychron mechanical keyboard](https://www.keychron.com/collections/keyboard/products/keychron-mechanical-keyboard)
* Bullet journaling
* Follow Jon on [Github](https://github.com/jondruse)