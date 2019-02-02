---
layout: layouts/post.njk
title: >
  RC 11 - Testing Your Application
date: 2010-03-04 14:18:44
episode_number:
duration:
audio_url:
podcast: teachmetocode
tags:
  - teachmetocode
  - podcast
---

[![](http://localhost/~charleswood/wordpress/wp-content/uploads/2010/01/BuildingSkills-itunes.jpg)](http://localhost/~charleswood/wordpress/wp-content/uploads/2010/01/BuildingSkills-itunes.jpg)[Download this Episode](http://media.libsyn.com/media/charlesmaxwood/RailsCoach11TestingYourApplication.mp3)In this episode, we discuss why your application needs tests. Here's a summary of the thoughts given in this episode:

## Why you should test:

1. You know your code works the way you expect. 2. You guarantee that later changes to your code don't break existing functionality. 3. It documents your code.<!--more-->

## Testing should be done by developers as well as Q. A.

A lot of Q.A. personnel are not developers. They don't read code, they don't write code, and they can't test the code. Q.A. folks usually test the application's behavior. Developers usually test the code functionality. Both levels of tests are required to provide the highest quality of code.

## What do you test?

Tests are written to test two things. Behavior and data. The behavior you're usually testing is whether or not your code deleted, updated, changed, or saved information. Did it display what it was supposed to? Given certain inputs or settings, does it do something different. Data is more centered around whether or not it returned specific expected values. This is tied to behavior, but has more to do with information correctness, than with how it is presented or where the application moved on to. Here's the link to my [blog post about TDD](http://charlesmaxwood.com/5-reasons-to-do-test-driven-or-behavior-driven-development/). Please remember to [take the survey](http://railscoach.com/survey) and [write a review in iTunes](http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=346089573)
