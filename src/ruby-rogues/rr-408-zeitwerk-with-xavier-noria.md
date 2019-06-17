---
layout: layouts/post.njk
title: >
      RR 408: Zeitwerk with Xavier Noria
date: 2019-04-16 10:00:45
episode_number: 408
duration: 54:03
audio_url: https://media.devchat.tv/ruby-rogues/RR_408_Zeitwerk_with_Xavier_Noria.mp3
podcast: ruby-rogues
tags: 
  - ruby_rogues
  - podcast
---

## **Sponsors**

- [Triplebyte](https://triplebyte.com/rogues) $1000 signing bonus
- [Sentry](https://sentry.io/welcome/) use the code “devchat” for $100 credit
- [RedisGreen](https://redisgreen.net/?utm_source=rubyrogues&utm_medium=podcast&utm_campaign=rubyrogues)

### **Panel**

- David Kumira
- Eric Berry
- Andrew Mason
Joined by special guest: Xavier Noria
### **Episode Summary**
This episode of Ruby Rogues features Xavier Noria, who has a background in mathematics, but started software in 2000. He has been freelancing for the past 10 years, working especially in open source. He received the Ruby Hero award in 2010. His latest work is with his own creation, Zeitwerk, a more efficient code loader for Ruby. Zeitwerk will be included in Rails 6, but is an independent gym for now. Xavier talks about his inspiration for Zeitwerk and his desire to improve constant outloading in Rails. The panelists delve into the features of Zeitwerk. Any conventional library can use Zeitwerk, so you don’t have to write requires. Zeitwerk is designed to make your development work easier because you don’t have to worry about including in or requiring files in your code snippets, it will intelligently auto load those in. Zeitwerk functions slightly different from classic mode Ruby, because in Zeitwerk, you don’t go constant name to file, instead you are given a file name first, &nbsp;and then add it to a constant. Xavier delves into the limitations of classic mode and the const-missing callback, and how Zeitwerk improves upon this problem by using only absolute paths and module outloading instead of const-missing. The result is that, in general, things load faster. They discuss indexing of absolute paths within Zeitwerk, how one of the principles of Zeitwerk is to be as lazy as possible, the memory footprint, and the configuration needed to opt into Zeitwerk. &nbsp;Overall, Zeitwerk is going to work like Ruby. There are no special rules, it has the same semantics as Ruby, fewer gotcha’s if any at all, control over inflection, ways to introspect, and a way to log the activity of Zeitwerk. **Links**
- [Zeitwerk](https://github.com/fxn/zeitwerk)
- [Kubernetes](https://github.com/topics/kubernetes)
- [API](https://github.com/topics/api)
- [HTML](https://github.com/topics/html)
- [Const-missing callback](https://apidock.com/ruby/Module/const_missing])
- [Nesting](https://apidock.com/ruby/Module/nesting/class)
- [Ancestors](https://apidock.com/ruby/Module/ancestors)
- [Module outloading](https://ruby-doc.org/core-2.2.0/Module.html)
- [Bootsnap](https://rubygems.org/gems/bootsnap/versions/1.3.2)
- B[ootstrap](https://github.com/topics/bootstrap)
- [Absolute path](https://ruby-doc.org/core-2.1.5/File.html)
Follow DevChat on [Facebook](https://www.facebook.com/DevChattv/? __tn__ =%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)
### **Picks**
 **David Kubira:**
- Nerf Guns
**Eric Barry:**
- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=en-US) Chrome extension
**Xavier Noria:** [Time Trap](https://rubygems.org/gems/timetrap)

### Transcript


