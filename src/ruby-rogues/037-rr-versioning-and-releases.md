---
layout: layouts/post.njk
title: >
  037 RR Versioning and Releases
date: 2012-01-12 19:54:00
episode_number:
duration:
audio_url:
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

01:41 - Versioning & Release Process

- Versioning: #’s you put on your package
- Release: moment at which you’re changing the #’s on your version
  03:16 - Latest Example of this Dynamic
- [HTML5](https://dev.w3.org/html5/spec/Overview.html)
  07:15 - Ways to Version your Product
- Keep VERSION.YAML in the root of your project!
- Example: Bundler does this with&nbsp;[VERSION.RB](https://github.com/rails/rails/blob/master/version.rb)
  10:30&nbsp; Josh's Definition of Versioning
- [semver.org - Semantic Versioning](https://semver.org/)
- First #, _Major_ Version
- Second #, _Minor_
  - Changing API/Adding Features
- Third #, _Patch_ / Mirco / Teeny
  - Fixing Bugs
    13:57 - Release Process
- [SEMVER.GEM](https://rubygems.org/gems/semver)
- Dashes vs Plusses vs Dots
  - Dots are for versions that are compared numerically
  - Dash/Plus for Strings
    17:35 - Plus/Minus vs Dots/Dash 20:30 - Comparing Version Numbers
- Numbers not Exceeding ‘9’
  - Can’t Sort ASCIIbetically
    24:20 - Alpha Numeric Version Identifiers
- ‘P’ on Patch Release
  26:25 - Alphas, Betas and Release Candidates 33:02 -&nbsp;[Rake](https://rake.rubyforge.org/)&nbsp;& Version 1.0.0
- What Makes 1.0
  41:44 - Versioning an API
- NEVER do it in a URL
- Put in Accept Header
  47:30 -&nbsp;[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)54:00 - Managing Versioning Applications / Separate Components Developed in Concert 58:17 - GIT Tags, Version Numbers, Path Tag 01:02:17 - 3.0 is the new 1.0

### Transcript
