---
layout: layouts/post.njk
podcast: ruby-rogues
title: 'RR 433: ShipLane with John Epperson'
date: 2019-10-08T10:00:10.915Z
episode_number: '433'
duration: '1:04:41'
audio_url: 'https://media.devchat.tv/ruby-rogues/RR_433_John_Epperson.mp3'
image: /images/uploads/ruby-rogues-thumb-1-300x300.jpg
tags:
  - ruby_rogues
  - podcast
  - ShipLane
  - Docker
  - John Epperson
  - Charles Max Wood
  - Andrew Mason
  - David Kimura
question1: Why did you build ShipLane?
answer1: >-
  John noticed that if you have a Docker thing in development and want to
  transfer it to production, there was no clear path to get a Docker item from
  development to production. The process wasn’t truly automated, so he created
  ShipLane in an attempt to automate it.
question2: What does ShipLane do to solve this problem?
answer2: >-
  ShipLane solves this problem by assuming that you have a box out there,
  whether it’s a VM or an actual physical box, and you have SSH access to it. It
  logs in, it makes sure you have Docker installed, and gives you the ability to
  actually take your development docker compose, and convert it to a
  productionized version. It also hooks in to Capistrano and replaces that with
  ShipLane commands. Right now ShipLane is using Docker Raw and creates a
  network for your stuff to work within, deploys your containers, and then your
  service is up and running.
question3: How di I get started with ShipLane?
answer3: >-
  First, you need to gem install ShipLane and Capestrano, put it in your bundle
  file, and require it in Capestrano (there’s a generator). It has Capestrano
  listed as a dependency requirement
question4: Does ShipLane work for frameworks besides Rails?
answer4: >-
  ShipLane is designed as a generalized path to go from development to
  production, so it shouldn’t matter what your production target is in the end.
  If you’re picking a SASS provider, there’s always a possibility that it isn’t
  compatible with the generalized version, but if you're targeting Kubernetes it
  should generally work
---
John Epperson has been doing ruby for 12 years and is a friend of Andrew Mason. He got into Docker a couple years ago and felt like something was missing, so he wrote ShipLane. He liked Docker because it was a promise that he could delegate a lot of the manual devops work to something else, and that something else was able to automate all of it. What he noticed was if you have a Docker thing in development and want to transfer it into production, there was no clear path to get a Docker item from development to production. The process wasn’t truly automated, so he created ShipLane in an attempt to automate it.

ShipLane solves this problem by assuming that you have a box out there, whether it’s a VM or an actual physical box, and you have SSH access to it. It logs in, it makes sure you have Docker installed, and gives you the ability to actually take your development docker compose, and convert it to a productionized version. It also hooks in to Capistrano and replaces that with ShipLane commands. Right now ShipLane is using Docker Raw and creates a network for your stuff to work within, deploys your containers, and then your service is up and running. There are different tools you can use to run Docker in production, but John didn’t want to run containers by using Docker Run with a bunch of stuff after it, didn’t want to maintain a custom script, so he automated it. John is currently working on a version that will translate your Docker Compose files into Kubernetes YAML files.

There’s a lot of choices to be made in Rails, none of which are wrong, but one choice begets many more, and there’s so many to make and so many consequences it’s difficult to know your path, and ShipLane provides clearer a path. John talks about how to get started with ShipLane. First, you need to gem install ShipLane and Capestrano, put it in your bundle file, and require it in Capestrano (there’s a generator). It has Capestrano listed as a dependency requirement. Andrew has used ShipLane and found it very quick and effective, only took them about 30 minutes. John asks for feedback from users on ShipLane, since many people are using it but no one has given any. 

John talks about the versatility of ShipLane as a general solution. He addresses some concerns that people have about putting stuff into containers, and assures them that ShipLane is intended to work right out of the box. It is important that when containerizing services available on the platform of our choice to step back and question if you creating this infrastructure correctly. They discuss some methods for deciding what goes into containers.

The panel discusses some of the advantages of Docker, particularly deployment time. Everything is already bundled, the assets are precompiled, so it cuts your deployments down a lot. They talk about different frameworks for Ruby that they like for their scaling abilities, such as Docker, Kubernetes, and Elastic Beanstalk. While Elastic Beanstalk is not one of the primary targets of ShipLane, it is designed as a generalized path to go from development to production, so it shouldn’t matter what your production target is in the end. If you’re gonna pick a provider that isn’t one of the big 3, then ShipLane is a great option

If you’re picking a SASS provider, there’s always a possibility that it isn’t compatible with the generalized version, but if we’re targeting Kubernetes it should generally work.

The panel discusses the general advice not to use Docker in development and whether or not it has merit. John finds that flips back and forth between projects, and those projects all have different dependencies, so Docker makes it easier to switch between projects because he doesn’t have to think about the dependencies. They talk about how John manages his Docker /compose version with these various projects. They all agree that Kubernetes should not be run locally. 

Finally they discuss whether tools like ShipLane are the next step with Docker. They believe that containerization is here to stay, but the only thing that might remotely threaten Docker is going back to bare metal development or going serverless. They discuss whether going serverless kills Docker. Ultimately, the most important thing is that the problem gets solved. 


### **Panelists**



*   Charles Max Wood
*   Andrew Mason
*   David Kimura

With special guest: John Epperson


## **Sponsors**



*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Cloud 66 - Pain Free Rails Deployments](https://cloud66.com/rails?utm_source=-&utm_medium=-&utm_campaign=ruby-rogues) Try Cloud 66 Rails for FREE & get $66 free credits with promo code RubyRogues
*   [React Round Up](https://devchat.tv/react-round-up/)

**Links**



*   [ShipLane](https://github.com/kirillian/shiplane)
*   [Mountain West Ruby 2016 - Surviving the Framework Hype Cycle by Brandon Hays](https://www.youtube.com/watch?v=9zc4DSTRGeM)
*   [Docker](https://www.docker.com/)
*   [Capistrano](https://capistranorb.com/)
*   [Docker Swarm](https://docs.docker.com/engine/swarm/)
*   [Kubernetes](https://kubernetes.io/)
*   [Docker Compose](https://docs.docker.com/compose/)
*   [Chef](https://www.chef.io/)
*   [Puppet](https://puppet.com/)
*   [Digital Ocean](https://www.digitalocean.com/)
*   [Postgress](https://www.postgresql.org/)
*   [Sinatra](http://sinatrarb.com/)
*   [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Charles Max Wood:**



*   [VESA adjustment](https://www.amazon.com/VIVO-Adjustable-Accessory-Individual-Stand-VAD3/dp/B0741CFJVW) for your monitors
*   [Velcro strips](https://www.amazon.com/slp/velcro-strips-with-adhesive/yx6fxpaxpp338v7?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   [For Love of Mother Not](https://www.amazon.com/Love-Mother-Not-Pip-Flinx-Adventure/dp/B001PLNCX0/ref=sr_1_1?keywords=for+love+of+mother+not&qid=1569433965&sr=8-1?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)

**David Kimura:**



*   [Grapes.js](https://grapesjs.com/)
*   [Mario Kart Tour](https://apps.apple.com/us/app/mario-kart-tour/id1293634699)

**Andrew Mason:**



*   [Hacktoberfest](https://hacktoberfest.digitalocean.com/)
*   Chuck

**John Epperson:**



*   [Glenscotia 15 year scotch](https://www.glenscotia.com/our-malts/15-year-old/)
*   [Immortals book](https://www.amazon.com/Immortals-Fantasy-Adventure-Essencers-Aelathia-ebook/dp/B07WDRK76L?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)
*   Follow John on [Github](https://github.com/kirillian), on [rockagile.io,](mailto:john.epperson@rockagile.io) and [Twitter](https://www.twipu.com/kirillian)

<!-- Docs to Markdown version 1.0β17 -->
