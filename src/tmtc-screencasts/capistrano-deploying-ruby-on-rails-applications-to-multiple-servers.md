---
layout: layouts/post.njk
title: >
  Capistrano: Deploying Ruby on Rails Applications to Multiple Servers
date: 2011-06-24 18:51:55
episode_number:
duration:
audio_url:
podcast: tmtc-screencasts
tags:
  - tmtc_screencasts
  - podcast
---

<object width="640" height="390"><param name="movie" value="https://www.youtube.com/v/8PJTcs2RMYY?version=3&amp;hl=en_US&amp;rel=0">

<param name="allowFullScreen" value="true">
<param name="allowscriptaccess" value="always">
<embed type="application/x-shockwave-flash" width="640" height="390" src="https://www.youtube.com/v/8PJTcs2RMYY?version=3&amp;hl=en_US&amp;rel=0" allowscriptaccess="always" allowfullscreen="true"></embed></object>For a basic deployment recipe, check out [Basic Deployment with Capistrano](https://teachmetocode.com/screencasts/basic-deployment-with-capistrano/)This episode demonstrates how to extend deployment to deploy to stage and production. Overall it’s rather simple. All it entails is creating a new task for each stage you want to deploy to with the settings you need changed. Here’s an example: task :stage do role :web, "stage.teachmetocodeacademy.com" # Your HTTP server, Apache/etc role :app, "stage.teachmetocodeacademy.com" # This may be the same as your `Web` server role :db, "stage.teachmetocodeacademy.com", :primary =\> true # This is where Rails migrations will run set :deploy\_to, '/var/www/stage-teachmetocodeacademy/' set :user, 'deploy' end That will allow you to run `cap stage deploy` to deploy to your staging environment. &nbsp;[Download](https://traffic.libsyn.com/tmtc/TMTCMultistageDeploy.m4v) 55.3 MB[Download (iPod & iPhone)](https://traffic.libsyn.com/tmtc/TMTCMultistageDeploy_-_iPhone.m4v) 35.1 MB
