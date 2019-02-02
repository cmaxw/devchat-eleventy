---
layout: layouts/post.njk
title: >
  RR 340: Strings and Encodings in Ruby with Aaron Lasseigne
date: 2017-12-12 04:00:21
episode_number: 340
duration: 54:26
audio_url: https://media.devchat.tv/ruby-rogues/RR_340_Strings_and_Encodings_in_Ruby_with_Aaron_Lasseigne.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

**Panel:** Charles Max Wood Dave Kimura Eric Berry David Richards In this episode, the Ruby Rogues panel discuss Strings and Encodings in Ruby with Aaron Lasseigne. Aaron has been a Ruby developer for over a decade and is the author of [Mastering Ruby: Strings and Encodings](https://aaronlasseigne.com/books/mastering-ruby/strings-and-encodings/). Also, Aaron talks about his recent work on a service object Gem called [Active Interaction](https://github.com/AaronLasseigne/active_interaction). This is a great episode on learning about Strings and Encodings. **In particular, we dive pretty deep on:&nbsp;\*\*** Discussion Points (contributed by guests and hosts):**•Why is it so important to understand strings? ◦“The internet is powered by multimillion-dollar string manipulation machines. We put strings in a box, and get new strings out. While there’s plenty of mathy things that can happen in the middle, there is no denying the importance of strings in today’s world.” - Schneems ◦They’re the only data structure that lies to you. You can see the exact contents of an array or hash but strings mask what’s happening. That’s why you can get situations when a single character has a length of 2. •What are character sets? ◦A character set defines a group of characters, their order, and it assigns each an identifier (a code point). ▪Unicode is a character set. ◦What are code points? ▪Unique identifiers within the character set. ◦UTF-8, UTF-16, and UTF-32 are implementations of the Unicode character set ▪Each has its own benefits •Normalization forms ◦Different representations of the same character. We can represent “é” as a single character or as an “e” and a combining mark (2 characters). Normalization forms allow us to change between forms. ◦There are 4 forms, NFC, NFD, NFKC, and NFKD and they all do slightly different things. ▪They can be switched between with `String#unicode_normalize`. •Sorting ◦Easy for English only but can be quite difficult with other languages. Sorting “e” and “é” can be tricky. •Security ◦Identical characters, similar characters, and invisible characters can all be used to spoof user names. ▪[https://www.huffingtonpost.com/entry/how-to-avoid-downloading-a-fake-app_us_5a147d40e4b0f401dfa7eafb](https://www.huffingtonpost.com/entry/how-to-avoid-downloading-a-fake-app_us_5a147d40e4b0f401dfa7eafb)▪[https://www.reddit.com/r/Android/comments/7ahujw/psa_two_different_developers_under_the_same_name/](https://www.reddit.com/r/Android/comments/7ahujw/psa_two_different_developers_under_the_same_name/)•The current state of Unicode support in Ruby. It was improved in 2.4 when methods like `upcase` started working with Unicode characters. •The addition of grapheme support in Ruby 2.5. •Freezing strings with `String#freeze` and with the special comment at the top of a file. ◦Immutable strings may still make it into Ruby 3 as the default. •Character set expressions (a term I made up) for use with methods like `String#count` and `String#delete`. ◦They’re like the inside of a regular expression character set (e.g. `[a-z]`) •Tofu and mojibake ◦Tofu are those white boxes you see when a character doesn’t exist on your computer. ◦Mojibake is when the characters show up but they don’t make sense because you’re using the wrong encoding or they were misencoded somewhere along the way. •Fixing bad characters ◦Strings can be checked with `valid_encoding?`. ◦`String#scrub` lets you replace invalid bytes with a single character which is the replacement character by default (that black diamond with a question mark in it). ◦`String#encode` also does replacement work and will let you swap out characters if you go from something like UTF-8 to ASCII. ▪You can even change out newline types with it. ◦`Encoding::Converter` is an even more powerful way to convert but it’s a tool for when things go seriously wrong.**Links:&nbsp;\*\*

- https://aaronlasseigne.com
- https://github.com/AaronLasseigne
- **@** AaronLasseigne
- [Mastering Ruby: Strings and Encodings](https://aaronlasseigne.com/books/mastering-ruby/strings-and-encodings/)
- [Active Interaction](https://github.com/AaronLasseigne/active_interaction)
  **Picks:** Eric
- [The Secret of Luck&nbsp;](https://www.youtube.com/watch?v=O4mN33w5Ftw)
- [Do Things That Don’t Scale&nbsp;](http://paulgraham.com/ds.html)
- [Girls](http://www.imdb.com/title/tt1723816/)
  Dave
- [FireFox Quantum&nbsp;](https://www.mozilla.org/en-US/firefox/)
  David
- [chris.com](http://chris.com)
- https://juliasilge.com/blog/tidy-word-vectors/
  Charles
- [slack.com](http://slack.com)
- Visual Studio Code Sharing
- Podcast for React And View
  Aaron
- [devdoc.io](http://devdoc.io)
- [Rose Mountain](http://www.metacritic.com/music/rose-mountain/screaming-females)
- [The Dollop](http://thedollop.net)

### Transcript

&nbsp;
