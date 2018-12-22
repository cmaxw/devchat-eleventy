---
layout: layouts/post.njk
title: >
      Acceptance Testing with Evan Light and Jorge Dias
date: 2011-08-25 17:08:25
episode_number: 
duration: 
audio_url: 
podcast: teachmetocode
tags: 
  - teachmetocode
  - podcast
---

[powerpress][Coulda](https://github.com/elight/coulda)[Filet](https://github.com/xing/filet)[Test::Unit](http://ruby-doc.org/stdlib/libdoc/test/unit/rdoc/classes/Test/Unit.html)Thoughts on what make good acceptance tests:

- Don’t write brittle tests
- Communication between the coder and customer
- Not being low level
- Keep them at the same level of abstraction
Thoughts on Cucumber:
- Jorge likes Cucumber’s Given-When-Then
- Cucumber’s plain english definitions are extra overhead when your customer isn’t going to read your
- english definitions.
- Evan likes Cucumber for:

  - Popping the why stack
  - Given When Then And
- Evan doesn’t like:

  - It’s an external DSL
  - Boundary between the test language and the code
  - Has loose coupling between step definitions
We need our acceptance tests to run fast too. How do you test your javascript?
- Selenium tests on the critical parts
- Ignore the javascript and test the ajax requests.
- capybara-webkit
[parallel\_tests gem](https://github.com/grosser/parallel_tests)[Hydra](https://github.com/ngauthier/hydra)[jasmine-fixtures](https://github.com/mavenlink/jasmine-fixtures)
