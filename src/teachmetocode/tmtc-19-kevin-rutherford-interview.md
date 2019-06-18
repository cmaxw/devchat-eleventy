---
layout: layouts/post.njk
title: >
  TMTC 19 - Kevin Rutherford Interview
date: 2010-05-12 18:53:39
episode_number:
duration:
audio_url:
podcast: teachmetocode
tags:
  - teachmetocode
  - podcast
---

[![](https://teachmetocode.com/podcast/files/2010/08/BuildingSkills-itunes.jpg 'BuildingSkills-itunes')](https://teachmetocode.com/podcast/files/2010/08/BuildingSkills-itunes.jpg)This week's episode is an interview I did a few weeks ago with Kevin Rutherford. Kevin is the author of [Refactoring in Ruby](https://www.amazon.com/gp/product/B002TIOYVM?ie=UTF8&tag=chamaxwoo-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B002TIOYVM) ![](https://www.assoc-amazon.com/e/ir?t=chamaxwoo-20&l=as2&o=1&a=B002TIOYVM). He's an [agile coach](https://kevinrutherford.co.uk), and blogs at [https://silkandspinach.net](https://silkandspinach.net). Finally, he has written the [reek tool](https://silkandspinach.net/2008/09/23/reek-a-code-smells-detector-for-ruby/), which identifies code smells in your code. Kevin is a big proponent of project automation like build scripts, deployment scripts, etc. He recommends Ruby and several of the tools that are built in Ruby to provide this functionality. It turns out that Reek came out of the Refactoring in Ruby book, which stemmed from his recommendation that people use Bill Wake's Refactoring workbook, which is Java centric to people he was simultaneously recommending Ruby to. Kevin did explain that measuring cohesiveness across multiple classes or files is difficult and is something that he hopes can come into Reek. We also learned that each team needs to identify and figure out how to solve their own problems. He specifically mentions these practices:

- Test Driven Development
- Continuous Integration
- Mature use of version control
- Team Working
- Pair Programming
  Regarding TDD, there are lots of different ways of writing tests and a lot of different ways to write code to pass the tests. Kevin gives us a few examples. He also reminds us that there are four steps to TDD, not three.

1. Write the test
2. Write the code
3. Refactor the code
4. Integrate
   Code Metrics should be part of your integration and should be publicly visible. Teams also should publish their bug count. If you're embarrassed about your bug count, you should do something about it. You should be comfortable enough with your bug count that you wouldn't mind publishing it on the company website. Cycle time is also important. It's the metric that drives everything. How long does it take from request time to implementation time. When you get to under a week, you've truly achieved agile. Experienced programmers really understand the importance of customer satisfaction and needs over the perfectionism in your code. Your code should be solid, but your business needs to be agile too. Kevin recommends [The Goal: A Process of Ongoing Improvement](https://www.amazon.com/gp/product/0884271781?ie=UTF8&tag=chamaxwoo-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0884271781) ![](https://www.assoc-amazon.com/e/ir?t=chamaxwoo-20&l=as2&o=1&a=0884271781) as reading on this topic. When asked what difference it makes in using these practices, Kevin told me that the amount of test coverage goes up, the number of tests increases, development speed grows, and class sizes decrease. Monolithic classes indicate a lack of Object Oriented design. Little value objects like currency, dates, or times can be strings or ints, but the data representation of the concepts are scattered through the code and can introduce problems depending on how the string or int is later interpreted. Code coverage does not actually represent bug free code. It makes more sense to have a team culture to write tests for each surprise or bug that you encounter (as well as writing new tests for new features.)[Download this episode](https://media.libsyn.com/media/charlesmaxwood/TMTC_19_Kevin_Rutherford_Interview.mp3)
