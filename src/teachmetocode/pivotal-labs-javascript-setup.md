---
layout: layouts/post.njk
title: >
  Pivotal Labs’ Javascript Setup
date: 2011-07-08 14:32:13
episode_number:
duration:
audio_url:
podcast: teachmetocode
tags:
  - teachmetocode
  - podcast
---

[powerpress] One of my clients had [Pivotal Labs](https://pivotallabs.com) build them a website. After Pivotal Labs finished the project, they helped them find a developer to maintain it for them. I took over from him. This last week, I had to dig deeply into the javascript code to make a piece of functionality I was modifying conform to what they had in other places on the site. What happened during the two days I worked on it was that I learned how they had things set up. Here are some of the things I found.

### Jelly

[Jelly](https://github.com/pivotal/jelly) provides you with an extension to the [JQuery](https://jquery.org) framework that allows you to trigger callbacks from your Rails controller. It’s exceptionally useful for things you need to occur when your server call is completed.

### Namespaced Functions

The Pivotal Labs developers put a lot of things under a namespace named after the project. They further namespaced functions under namespaces corresponding to controllers and widgets, with some functions matching up with action names where widgets and other functionality could be implemented and initialized. This is really handy in cases where you need specific functionality only is specific cases.

### Javascript Loading at the end of the page

Finally, a method in the ApplicationHelper was provided that added all of the requisite javascript files to an array and then called javascript_include_tag on the array to include all of the files. This was done at the bottom of the page to avoid holding up the rest of the page loading while waiting for assets. This also allowed for functions that required the DOM to be loaded to simply be called instead of using the JQuery \$(function(){...}) callback style.<object width="480" height="390" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true">

<param name="allowscriptaccess" value="always">
<param name="src" value="https://www.youtube.com/v/DbwNtN6UmY0?version=3&amp;hl=en_US&amp;rel=0">
<param name="allowfullscreen" value="true">
<embed width="480" height="390" type="application/x-shockwave-flash" src="https://www.youtube.com/v/DbwNtN6UmY0?version=3&amp;hl=en_US&amp;rel=0" allowfullscreen="true" allowscriptaccess="always"></embed></object>
