---
layout: layouts/post.njk
title: >
  HotDraw Revisited: Object-Oriented JavaScript and Canvas - Ken Auer - JS Remote Conf 2015
date: 2015-08-04 15:00:00
episode_number:
duration:
audio_url:
podcast: remote-conf-talks
tags:
  - remote_conf_talks
  - podcast
---

In the late 80s, Kent Beck and Ward Cunningham came up with HotDraw (http://c2.com/cgi/wiki?HotDraw), a two-dimensional graphics framework for structured drawing editors, originally written in Smalltalk-80. Since then, many implementations have been created, and the principles applied in a lot of places. While a lot has been learned, the original HotDraw still outshines many of its successors.

In the last few years, RoleModel Software was asked to build several systems with a complex underlying model where the user input was primarily direct graphical manipulation. This included:

\* a system to support educational innovators at the Friday Institute, using direct manipulation tasks to test and teach various mathematical concepts to elementary age children.

\* a deck designer for decks.com, to design and produce a 3D rendering, materials lists, and permit-ready plans to help do-it-yourselfers get professional designs in seconds.

The solution in both cases included a HotDraw-like JavaScript approach to drawing and direct manipulation on an HTML5 Canvas, almost completely test driven using Jasmine.

We'll go over the highlights of the cool technical feats and show how JavaScript is not just for manipulating the DOM.
