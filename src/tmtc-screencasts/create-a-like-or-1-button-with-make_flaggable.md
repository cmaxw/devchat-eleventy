---
layout: layouts/post.njk
title: >
  Create a 'Like' or '+1' button with make_flaggable
date: 2011-07-15 01:32:26
episode_number:
duration:
audio_url:
podcast: tmtc-screencasts
tags:
  - tmtc_screencasts
  - podcast
---

<iframe src="https://www.youtube.com/embed/GG-kCSx0taU" frameborder="0" width="560" height="349"></iframe>With the recent release of the Google Plus beta (ask me for an invite if you want one), I felt it appropriate to show a simple way to create a Like or +1 button for your Rails application. The app and concept is pretty simple, so I won't worry about posting the code below. **Install**** :**

    gem 'make\_flaggable', :git =\> 'git://github.com/cavneb/make\_flaggable.git' bundle install rails generate make\_flaggable rake db:migrate

**Models:**

    class Article \< ActiveRecord::Base make\_flaggable :like end class User \< ActiveRecord::Base make\_flagger end

**Links:** [https://github.com/medihack/make_flaggable](https://github.com/medihack/make_flaggable)[https://github.com/cavneb/make_flaggable](https://github.com/cavneb/make_flaggable)[Download](https://traffic.libsyn.com/tmtc/make_flaggable.mov) 93.4 MB[Download (iPod & iPhone)](https://traffic.libsyn.com/tmtc/make_flaggable_-_iPhone.m4v) 43.9 MB
