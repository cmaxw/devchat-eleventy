---
layout: layouts/post.njk
podcast: adventures-in-devops
title: 'DevOps 008: Disaster Recovery'
date: 2019-09-03T10:00:00.000Z
episode_number: 008
duration: '47:13'
audio_url: 'https://media.devchat.tv/adventures-in-devops/ADO_008_Disaster_Recovery.mp3'
image: /images/uploads/adventures-in-devops.jpg
tags:
  - adventures_in_devops
  - podcast
  - Nell Shamrell-Harrington
  - Scott Nixon
  - devops
  - disaster
  - recovery
  - restore
  - backup
---
# Sponsors

* [iPhreaks - Devchat.tv](https://devchat.tv/iphreaks/)
* [The Dev Rev - Devchat.tv](https://devchat.tv/dev-rev/)
* [React Round Up - Devchat.tv](https://devchat.tv/react-round-up/)
* [CacheFly](https://www.cachefly.com/)

## Panel

* Nell Shamrell-Harrington
* Scott Nixon

## Episode Summary

Coming to you live for the first time from the studio is a brand new episode of the Adventures in DevOps podcast! Regular panelists Nell Shamrell-Harrington, Principal Engineer at Chef Software, and Scott Nixon, Principal Consultant at Cloud Mechanics discuss one of the most significant aspects of any given software environment - disaster recovery, what is it and what to do when the unimaginable happens. 

They start the show by explaining that disaster recovery can be considered as a subset of business continuity planning. They state that two main things need to be defined while planning for disaster recovery in any organization. First one is the recovery time objective (RTO), which is the maximum acceptable length of time that an application can be offline, and this information is generally included in a Service Level Agreement. The second one is Recovery Point Objective (RPO) which is the maximum acceptable length of time during which data might be lost from the application due to a major incident. Nell gives examples of each and Scott mentions that we need to understand the time taken for restore as well, and it is very important to restore data regularly.

Once the RTO and RPO have been established, the software needs to be prepared for disaster recovery, including verifying that the software can be installed correctly, as replication can be very hard especially when it has been installed long ago. They transition to the topic of security concerns, for example how to deal with cases when there are multiple security groups, ACLs, etc, and the cloud service in an entire region goes down.

They advise listeners to make sure that the disaster recovery environment should match the compliance requirements, make cloud storage a part of daily backup routines and to use configuration management tools most suitable to the work environment to make the process seamless. They talk about cloud agnostic tools that help in cross cloud replication and syncing data across, and raise certain points to consider for successful recovery including estimating the time and bandwidth required to transfer large amounts of data, balancing image configuration and deployment speed along with the time needed to handle dependencies, image consistency across hybrid environments, implementing tiered storage, while giving relevant examples. 

Another pattern they discuss is the idea of maintaining the same IP address for an application to make disaster recovery, which can be easy if it's in the same region using elastic IP or load balancing but can be challenging with multiple cloud providers across different regions. However the solution would not be easy or inexpensive, so there is always a tradeoff involved. 

They then move on to some common mistakes that people make in disaster recovery. Nell says that while creating a good plan, it is really crucial to bring in people from across the business, while Scott talks about regularly documenting everything including bits and pieces like manual configurations and such. They discuss that security consistency is often overlooked, and describe some recovery services offered by cloud providers such Amazon, Azure and some multi cloud services like Zerto and Arcserve. They end the episode with picks.

## Links

* [Boto 3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
* [MSP360](https://en.wikipedia.org/wiki/MSP360)
* [CloudEndure Disaster Recovery](https://aws.amazon.com/marketplace/pp/B073V2KBXM)
* [Azure Site Recovery](https://azure.microsoft.com/en-in/services/site-recovery/)
* [Zerto](https://www.zerto.com/)
* [Arcserve](https://www.arcserve.com/)

## Picks

Nell Shamrell-Harrington:

* Wild mushrooms

Scott Nixon:

* [Nine Lies About Work : A Freethinking Leader’s Guide to the Real World](https://www.amazon.com/Nine-Lies-about-Work-Freethinking-ebook/dp/B07C3ZT28C)
