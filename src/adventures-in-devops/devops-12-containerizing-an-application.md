---
layout: layouts/post.njk
podcast: adventures-in-devops
title: 'DevOps 012: Containerizing an Application'
date: 2019-10-08T10:00:21.655Z
episode_number: '12'
duration: '46:42'
audio_url: 'https://media.devchat.tv/adventures-in-devops/ADO_012_Panel.mp3'
image: /images/uploads/adventures-in-devops.jpg
tags:
  - adventures_in_devops
  - podcast
  - devops
  - kubernetes
  - docker
  - containers
  - Charles Max Wood
  - Scott Nixon
question1: >-
  Is it easy to manage dependencies and infrastructure between local and cloud
  instances? 
answer1: 'Yes, in fact that is one of the strengths of a containerized solution.'
question2: 'What is a good way to handle spikes in the usage of my application? '
answer2: Use the management software provided by the services you are using.
question3: >-
  Recommendations for best practices when assigning development test
  environments.
answer3: >-
  Each developer should get their own test environment that they can manipulate
  and change to fit their needs.
question4: 'Can test environments run out of a container? '
answer4: >-
  Yes, and furthermore Scott thinks that every CI/CD platform should use
  containers.
---
**Episode Summary**

On this episode of Adventures in DevOps the panelists talk about how to containerize an app in a container using services such as Docker or Kubernetes. Charles mentions that he is wanting to host a Ruby on Rails application and Scott has experience with web deployments in Python and Django. They share that regardless of the languages and technologies used, the principles behind deploying a containerized application are the same.

The next topic covered by the DevOps panelists is how to create containerized instances using Docker. The discussion centers on creating the container instances on a network and best practices that can be used for managing and maintaining them. The DevOps panelists cover the difference between an internal network deployment and what is needed to push a containerized application to a cloud instance using Kubernetes, Docker, DigitalOcean, or another service. Scott asks Charles if he is using a good CI/CD (continuous integration/ continuous delivery) mechanism, to which Charles shares that he is using Cloud 66 for its ease of use. When it comes to storage, they discuss whether to use the cloud services storage option or using a container to run a Postgres engine. They also go over the best way to run the shell commands for configuring their environment.

The topic then moves to security and asset management when using Docker. Charles mentions that he tries to avoid putting API keys or other secrets into the Docker file and Scott shares how he uses a secrets management platform such as AWS Parameter Store, AWS Secrets Management, and others. They discuss the benefits that are provided by secrets management platforms. The DevOps panelists also talked about how a CI/CD platform can help with the portability of a containerized application

Charles asks Scott how to begin with helping someone who wants to take their existing application and containerize it using the Docker approach. Scott responds with describing how he would look at where there application is and help them configure their containerized instance and set it up on a container service such as Docker or Kubernetes. Scott mentions that the strength of moving an application to a container service helps the application to scale up and down as needed. The container model helps a team to locally replicate their CI/CD model and be able to test it locally before the application is pushed to the cloud instance.

The panelists talk about reverse proxies for pushing a Ruby on Rails app. Chuck prefers nginx and Scott emphasizes that it is important when pushing to production to spend some time verifying that the reverse proxy configuration is correct and won’t expose the application in a way that it shouldn’t be. Chuck shares that the use of a cloud platform such as GCP (Google Cloud Platform) of Microsoft Azure reduces the overhead with configuring containers and building images so that when he hands it off to the platform, it will take care of a large part of the setup including creation of the reverse proxy. 

**Panelists**



*   Charles Max Wood
*   Scott Nixon

**Sponsors**



*   [Sustain Our Software](https://devchat.tv/sustain-our-software/)
*   [Views on Vue](https://devchat.tv/views-on-vue/)
*   [Dev Ed](https://devchat.tv/dev-ed/)

**Links**



*   [Docker](https://www.docker.com/)
*   [Kubernetes](https://kubernetes.io/)
*   [Ruby on Rails](https://rubyonrails.org/)
*   [Python](https://www.python.org/)
*   [Django](https://www.djangoproject.com/)
*   [Cloud 66](http://www.cloud66.com/)
*   [PostgreSQL](http://www.postgresql.org/)
*   [DigitalOcean](https://www.digitalocean.com/)
*   [Bitbucket](https://bitbucket.org/product)
*   [Google Cloud Platform](https://cloud.google.com/)
*   [Microsoft Azure](https://azure.microsoft.com/en-us/)
*   [AWS Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
*   [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
*   [Nginx](http://nginx.org/en/)

**Picks**

**Charles Max Wood**



*   [Height Adjustable VESA Adapter](https://amzn.to/2mOTykl)
*   [Velcro Strips](https://amzn.to/2mOrNIE)

**Scott Nixon**



*   [The Gymkhana Files](https://www.amazon.com/The-Gymkhana-Files-Season-1/dp/B07J5H8PZV?tag=donorsclicks-20)
*   [The Grand Tour](https://www.amazon.com/Official-Trailer/dp/B07KR8383J/ref=sr_1_2?crid=383P2VXMU8KV9&keywords=the+grand+tour&qid=1569452003&sprefix=the+gran%2Caps%2C232&sr=8-2&tag=donorsclicks-20)
