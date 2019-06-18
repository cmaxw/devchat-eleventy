---
layout: layouts/post.njk
title: >
  JSJ BONUS: Web Apps on Linux with Jeremy Likness and Michael Crump
date: 2017-09-12 05:00:46
episode_number:
duration: 59:19
audio_url: https://media.devchat.tv/js-jabber/JSJ_BONUS_Web_Apps_for_Linux_with_Jeremy_Likness_and_Michael_Crump_mixdown.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

# JSJ BONUS: Web Apps on Linux with Jeremy Likness and Michael Crump

In this episode Aimee Knight and Charles Max Wood discuss Microsoft's [Web Apps on Linux](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro)offering with Jeremy Likness and Michael Crump.

#### [00:37] Michael Crump Introduction

Michael is on the developer experience team for Azure.

#### [00:52] Jeremy Likness Introduction

Jeremy is on the cloud developer advocacy team. Their mission is to remove friction and support developers and work with teams to build a positive experience. The NodeJS team is headed up by John Papa. They have teams around the world and involved in many open source communities. They're focused on building documentation and creating great experiences

#### [02:54] What is it about Azure that people should be getting excited about?

Azure is a huge platform. It can be overwhelming. They're trying to help you start with your problem and then see the solution as it exists on Azure. Azure is growing to embrace the needs of developers as they solve these problems. The experience is intended to be open and easy to use for any developer in any language on any platform. It allows you to work in whatever environment you want. Standing up applications in production is tough. Azure provides services and facilities (and interfaces) that make it easy to manage infrastructure. You don't have to be an operations expert. Chuck mentions this messaging as he heard it at [Microsoft Connect()](https://connectevent.microsoft.com/) last year. It's not about bringing you to .NET. It's about making it easy where you're at. Aimee adds that as a new-ish person in the community and Azure excites her because the portal and tutorials are easy to follow for many new programmers. A lot of these features are available across command lines, tools, and much more. The documentation is great. [See our interview with Dan Fernandez on the Microsoft Docs.](https://devchat.tv/js-jabber/241-jsj-microsoft-docs-with-dan-fernandez)

#### [12:04] Web Apps on Linux

Web application as a service offering from Microsoft. I don't need to worry about the platform, just what's different about my application. Web Apps has traditionally been on Windows. Web Apps on Linux is in preview. You can choose the size of your infrastructure. You only get billed for what you use and can scale up. Setting up multiple servers, managing synchronization and load balancing is a pain. Web Apps gives you a clean interface that makes this management easy. You can also scale across multiple datacenters around the world.

#### [15:06] Why Linux? What's hard about Windows?

Node was originally created on Linux and many tools run nicely on Linux. It was later ported to Windows. The toolchains and IDE's and build processes is in an ecosystem that is targeted more toward Linux than Windows. This allows people to work in an environment that operates how they expect instead of trying to map to an underlying Windows kernel. Aimee gives the example of trying to set up ImageMagick on Windows. Web Apps on Linux also allows you to build integrations with your tools that let you build, test, and deploy your application automatically.

#### [19:12] Supported Runtimes

Web Apps on Linux supports Node, PHP, Ruby, and .NET Core. You can run a docker container with Node up to 6.x. If you want Node 7.x and 8.x you can create your own Docker container. Web Apps on Linux is build on Docker. The containers also have SSH, so developers can log into the docker container and troubleshoot problems on the container. If you can build a container, you can also run it on this service. At certain levels, there's automatic scaling.

#### [22:06] Consistency between containers? Shared ownership of state or assets

It depends on how you build your app. The Docker containers have a shared storage where all the containers have access to the same data and state. There's a system called kudu that makes this really simple. You can also pull logs across all systems. You can also use SSH in the browser

#### [25:23] What's painful about Linux and containers?

How is the application built and how does it manage state so that you can isolate issues. If you have 20 containers, can you connect to the right one. It's up to you to manage correlation between containers so you can find the information you need. Knowing your traffic and understanding what to do to prepare for it with scaling and automation is sometimes more art than science.

#### [28:28] How should you manage state?

A lot of these systems lend themselves to running stateless, but you don't want to run mongodb on each container versus running one mongodb instance that everything attaches. You want a common place to store data for the entire app for shared state.

#### [30:34][cosmosdb](https://azure.microsoft.com/en-us/services/cosmos-db/?&WT.srch=1&WT.mc_id=AID559462_SEM_slA5M4Ka&utm_source=Google&utm_medium=CPC&utm_term=cosmosdb&utm_campaign=Data_Management&gclid=EAIaIQobChMIktnotYKh1gIVlIN-Ch1A5QVREAAYASAAEgLBRvD_BwE) (was DocumentDB)

It's an API equivalent to MongoDB. It's a database as a service and you can connect your containers to the CosmosDB in Azure using your portal to make it super easy. You may need to open up some firewall rules, but it should be pretty straightforward.

#### [34:14] Third Party Logging Management Apps

Azure has a service that provides metrics ([Application Insights](https://azure.microsoft.com/en-us/services/functions/?&WT.srch=1&WT.mc_id=AID623261_SEM_HP0c1OKs&gclid=EAIaIQobChMI58uFyYKh1gIVj4J-Ch2V9gAQEAAYASAAEgLal_D_BwE)) and a logging service. Many other companies use elasticsearch based solutions that solve some of these problems as well.

#### [36:06] How do people use Web Apps on Linux?

Companies building new applications many times want to run without managing any infrastructure. So, they use Azure Functions, and other services on Azure. Lift and shift: Take a virtual machine and change it into a web app container that they can run in the cloud. They also move from SQL Server on a server to SQL Server on the cloud. Moving from hosted MongoDB to CosmosDB. You can also use any images on DockerHub.

#### [40:06] Continuous Integration and Continuous Deployment

Whether you're using a private registry or cloud registry. When you publish a new image, it'll use a webhook to pull the custom image and deploy it. Or to run it through Continuous Integration and then deploy it without any human interaction. Chuck mentions the case when you haven't logged into a server for a while, there's a huge backlog of system updates. Updating your container definitions makes upkeep automatic.

#### [42:02] Process files and workers with PM2 format

You can set up instances to run across cores with the PM2 definitions. You can also make it run various types of workers on different containers. Why did you use PM2? What other uses are there for this kind of setup? You can tell it which processes to start up on boot. You can also have it restart processes when a file is changed, for example, with a config file you can have it restart the processes that run off that config file.

#### [45:38] How to get started

[Getting started with Node](https://docs.microsoft.com/en-us/azure/app-service-web/app-service-web-get-started-nodejs)[docs.microsoft.com](https://docs.microsoft.com)Trial account with a few hundred dollars in Azure credit.

#### Michael's Links

- [michaelcrump.net](https://michaelcrump.net)
- [@mbcrump](https://twitter.com/mbcrump)
- [github.com/mbcrump](https://github.com/mbcrump)

#### Jeremy's Links

- [bit.ly/coderblog](https://bit.ly/coderblog)
- [@jeremylikness](https://twitter.com/jeremylikness)
- [github/jeremylikness](https://github.com/jeremylikness)

### Picks

Aimee

- Having a little bit of mindfulness while waiting on code and tests to run.
  Joe
- [Ozark on Netflix](https://www.netflix.com/title/80117552)
- [Star Wars: Rogue One](https://amzn.to/2y3NLZw)
  Chuck
- [Travelers on Netflix](https://www.netflix.com/title/80105699)
  Jeremy
- Ozark filming in Woodstock, GA
- [Autonomous Smart Desk](https://amzn.to/2eUeyiA)
- [LED light strips](https://amzn.to/2jnliL5)
  Michael
- [Conference Call Bingo](https://twitter.com/BilalJaffery/status/885468228360839169)
- [Life (Movie)](https://amzn.to/2wZI4NM)
- [Get Out (Movie)](https://amzn.to/2f4XRod)

### Transcript
