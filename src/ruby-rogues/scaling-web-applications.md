---
layout: layouts/post.njk
title: >
  RR 297 Scaling Web Applications
date: 2017-02-14 06:00:23
episode_number: 297
duration: 49:08
audio_url: https://media.devchat.tv/ruby-rogues/RR_297_Scaling_Web_Applications.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## **Scaling Web Applications**

On today’s episode, Charles Max Wood, Jason Swett, Brian Hogan, and David Kimura discuss **Scaling&nbsp;Web&nbsp;Applications**.&nbsp;Tune in and learn more&nbsp;as each of them share their own experiences in scaling Ruby applications!

## **Ruby Applications Scaling Experience**

As far as playing around with scaling Ruby applications is concerned, Brian (or David) has tried using elastic load balancer or his own HomeBrew HAProxy. He has also used Engine X for routing a single connection that comes in, balancing it with&nbsp;multiple web servers. He&nbsp;pointed out that scaling is somewhat tricky&nbsp;and there are a lot parts in it.In Jason's experience, he has done HAProxy, Engine X, Unicorns, Puma, and many others. Lately, he tried scaling using Docker and Rancher for infrastructure and using Rancher's load balancing service. What makes it more interesting is that&nbsp;you'd get all the fundings that come along with launching containers.

## **Go-to Priority&nbsp;List&nbsp;**

Since scaling is a bit of tricky, Jason makes sure that he has a go-to list that serves as his guide in ranking his priorities. He begins with how to keep his infrastructure simple.&nbsp;He then starts looking at data base reviews, query optimizations, and from where he pulls his data from. He sees that if one does not go through the step-by-step process, especially in setting up a more complicated structure, much time and effort are&nbsp;wasted when&nbsp;the output is only at the bottleneck of the data base level. Jason often begins with fragment caching with RAILS because he knows he can save a lot of time and work.

## **Insights on&nbsp;Active Record&nbsp;**

Active record is great in managing A-record. If you have to get and modify A-record, it does all the heavy&nbsp;lifting job. However, it's rotten when it comes to building up complex single queries. As you develop your RAILS application, take a look at the queries and figure out if those are good. Don't simply rely on the queries that RAILS writes for you.&nbsp;Sometimes, they're not going to be optimized for speed but rather for how they programmed. If you examine these details, it will save you a lot of time. You will more likely encounter accidents in starting up if you will not pay attention to important procedures.To the learn more about \_Scaling Web Applications&nbsp;\_download and listen to the entire episode.&nbsp;If you’re short on time, here are the highlights of Scaling Web Applications:Experiences in scaling Ruby Applications? (00:28) Importance of a go-to list? (3:19) Reminder for everyone on using Active Record? (5:27) On the number of servers in scaling? (10:32) Importance of understanding the life cycle of an application? (17:36) Running a CDN vs public folder as a location for placing static assets?&nbsp;(21:45) General rule on premature optimization? (24:53) Right time for optimization? (35:20)

## **Picks:**

Brian: [hamstudy.org&nbsp;](https://hamstudy.org/)David: [Bobby Fischer Teaches Chess](https://www.amazon.com/Bobby-Fischer-Teaches-Chess/dp/0553263153)Jason: [Jacques Pepin](https://www.pbs.org/show/jacques-pepin-heart-soul/)Charles: [RE&nbsp;20 Broadcast Announcer Microphone](https://www.electrovoice.com/product.php?id=91),&nbsp;and [Xenyx 802 Mixer](https://www.amazon.com/Behringer-802-Premium-8-Input-Preamps/dp/B000J5XS3C)

### Transcript
