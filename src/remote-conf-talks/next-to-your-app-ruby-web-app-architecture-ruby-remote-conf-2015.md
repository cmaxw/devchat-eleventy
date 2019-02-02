---
layout: layouts/post.njk
title: >
  Next To Your App: Ruby Web App Architecture - Ruby Remote Conf 2015
date: 2015-12-29 23:38:00
episode_number:
duration:
audio_url:
podcast: remote-conf-talks
tags:
  - remote_conf_talks
  - podcast
---

Right next to your app is a world of software you probably don't think about: app servers, Rack interfaces, reverse proxies and load balancers. Starting right next to your app, we'll look at how Ruby web apps are built. Which pieces do you control as the developer? Which pieces are traditionally owned by ops? What do they do?

&nbsp;

We'll (quickly) talk about the standard software for these pieces -- Passenger, Puma, Unicorn, Thin, Rack, NGinX, Apache, HAProxy and Varnish, where they fit together, and why you might choose one or another.

&nbsp;

At the end of the talk you'll know what you can put in your Gemfile to choose these, how production is different from development, and the beginning of how you'd set this all up on your own if you needed to. You'll also know why you'd have to choose one piece of software over another, versus when it's basically your call.
