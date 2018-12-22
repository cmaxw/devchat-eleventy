---
layout: layouts/post.njk
title: >
      RC 16 - The DRY Principle (Don't Repeat Yourself)
date: 2010-04-13 13:49:27
episode_number: 
duration: 
audio_url: 
podcast: teachmetocode
tags: 
  - teachmetocode
  - podcast
---

[![](http://localhost/~charleswood/wordpress/wp-content/uploads/2010/01/BuildingSkills-itunes.jpg)](http://localhost/~charleswood/wordpress/wp-content/uploads/2010/01/BuildingSkills-itunes.jpg)The DRY principle is a guiding principle behind frameworks like [Ruby on Rails](http://rubyonrails.org). It's basic tenet as provided by the Pragmatic Programmers is:

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

This basically means that between your database schema, code, architecture, etc. you should only have one representation of each piece of knowledge that applies to your system.<!--more-->This goes far beyond your basic avoidance of Copy/Paste Programming. Your code does not have to be identical to be duplicate. For example, you may have code that tells you how to build an address. This may use as business name, address fields, city, state, and zip. You may also have code that builds an address for a user, using the user's name, address fields, city, state, and zip. This is a simple example that shows code duplication. But what about mathematical algorithms. Or, an example that I just worked through at work, we're using flash and HTML authentication. Both systems need to be able to authenticate. So, how do we consolidate our code so that authentication knowledge is only managed in one place? I've also seen instances where duplicate code is hard to generalize to match all cases. In those circumstances, I ask myself the following questions.
- Do all of these processes need to be maintained for consistency? Or in other words, if I change class A's behavior, do I need to change class B's behavior?
- Is this the same process in both cases regardless of dependencies?
- Is there a case where one process will need to be modified to significantly deviate from the other?
- Am I creating more work by combining these processes than I would by simply maintaining them as they are?
I'm fully aware of that after making my decision, I may not get back to modifying this code, so I have to make the best decision I can. The main concern I have is maintainability. If I can maintain things in one place, for example building code generation off of a configuration file that fans out to multiple parts of the system, keeping the implementation details in the config file. (Think about a SOAP WSDL file.) Or if I can build a configuration off of some code implementation. Or I can generate some documentation from the code. I can avoid circumstances where I can break my code in one place by changing it in another. That's the true power of the DRY principle.[Download this Episode](http://media.libsyn.com/media/charlesmaxwood/rc_16_the_dry_principle.mp3)
