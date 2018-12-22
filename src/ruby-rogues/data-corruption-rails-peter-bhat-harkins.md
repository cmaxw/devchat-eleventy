---
layout: layouts/post.njk
title: >
      RR 311 Data Corruption in Rails with Peter Bhat Harkins
date: 2017-05-23 05:00:09
episode_number: 311
duration: 57:38
audio_url: https://media.devchat.tv/ruby-rogues/RR_311_Data_Corruption_in_Rails_.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

## Data Corruption in Rails with Peter Bhat Harkins
Today's Ruby Rogues podcast features **Data Corruption in Rails with Peter Bhat Harkins**. Peter started in rails since the time version 1.0 was released. He spent 5 years consulting full time, and now runs a consultancy for SAAS companies at Revenue.systems. Few months ago, he spoke at the Rails Remote Conf about&nbsp;Data Corruption in Rails. The issue comes up when a .valid call returns false. It happened twice on his end. Tune in to learn about it, and understand how you can provide an effective solution!
## Building&nbsp;with Partial Writes
One instance where the issue arises involves partial writes. Take for example, creating a blog post which has different fields. When you change the headline field and call post.save, it won't rewrite the other fields back to the database. According to Peter, there is a hidden race&nbsp;condition when 2 fields are interdependent. If 2 users are editing at the same time—both doing a partial write, each user has valid blog post. But when those 2 partial writes happen, they end up with a blog post in an invalid database.
## An Ongoing Issue
Peter experienced this with coupon codes that can be used on a website or on a phone. But if those are used on the phone on the last day, they become marked not only as used but also as expired. Consider having 1,000 coupons: 800 were used but 202 of them expired. That is just not possible. In Peter's case, he already fixed it once but saw the issue again later on.
## How to Fix Data Corruption
You can fix the issue in a couple of ways. For one, you can simply turn off partial writes. People generally don't want to do it, but Rails has both pessimistic and optimistic locking that you can use. Pessimistic locking in particular uses a database locking feature. You can pull out a record and save it back. With that done, none should be updating it. Download and listen to _Data Corruption in Rails with Peter Bhat Harkins_. Don't forget to leave a&nbsp;rating and review if you enjoyed the show.&nbsp;We would love to hear from you!
## Picks:
David: Rode Podcaster Studio One Jason: [Database Design for Mere Mortals](https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0201752840), [The Indie Hackers podcast](https://www.indiehackers.com/podcast)Jamis: [Bad Choices by Ali Almossawi](https://bookofbadchoices.com/), [Twitter account of @SUEtheTrex](https://twitter.com/SUEtheTrex?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)Brian: [Teachable.com](https://teachable.com/)Charles: [Devchat audience survey](https://docs.google.com/forms/d/e/1FAIpQLScIoSX_x686jaJKxkjXD3KyPlT-gdBU13h6qw6l4UH90tqfww/viewform?c=0&w=1), My Ruby Story Peter: [Sushi Go Party! board game](https://boardgamegeek.com/boardgame/192291/sushi-go-party), [WellSortedVersion.com](https://www.wellsortedversion.com/)
## Episode Links:
[Revenue.systems](https://revenue.systems/)Email&nbsp;Peter: peter@revenue.systems

### Transcript


