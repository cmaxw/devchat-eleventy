---
layout: layouts/post.njk
title: >
  RR 318 Metaprogramming with Jordan Hudgens
date: 2017-07-11 04:00:38
episode_number: 318
duration: 45:35
audio_url: https://media.devchat.tv//ruby-rogues/RR_318_%20MetaProgramming_with_Jordan_Hudgens.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## **RR 318 Metaprogramming with Jordan Hudgens**

Today's Ruby Rogues podcast features Metaprogramming with Jordan Hudgens. We have panelists Jerome Hardaway, Brian Hogan, Dave Kimura and Charles Max Wood. Tune in and learn more about metaprogramming!**[00:02:00] – Introduction to Jordan Hudgens**Jordan is the Lead Instructor at [Bottega](https://bottega.tech/). Bottega has locations in Salt Lake City, Utah and in Phoenix, Arizona. They’re a full-stack development code school.**[00:02:55] – Metaprogramming**Metaprogramming was one of those scary concepts. At the code school, when the students learn about metaprogramming and how it works, you can tell that it’s definitely a pretty exciting thing. Its formal definition is it’s a code that writes code. It can dynamically, at run-time, render other methods available to the program.**[00:04:10] – Use cases for metaprogramming**The best use case that Jordan has ever seen is implemented in Rails and that’s code that can run database queries such as User.find_by_email. By passing the email, it will go and find the user with that particular email. Now, there is no method in active record or in the user model that is called find_by_email. That’s something that is created at run-time. Another one is something that Jordan has implemented and that’s a phone parser gem. It essentially parses and validates a phone number. It also has a country code lookup. With all the countries in the world, that would be very time-consuming. But within 8 lines of code, it could do what a hundred lines could do without metaprogramming.**[00:06:50] – Performance implications**Jordan never had performance issues because the generation of methods is not something that’s incredibly memory intensive. You might run into that but it would be a poor choice to do in terms of readability. In Brian’s experience, it comes down to the type of metaprogramming you do. If you have a bunch of logic somewhere and method_missing, that’s going to be a performance bottleneck. And if you’re generating a bunch of methods when the application starts up, it might increase the start-up time of the application. But after that, the performance of the application seems to not have any fluctuation at all. There are 2 main types Jordan works with. First is method_missing. Method_missing could have a little bit of performance hit because of how Ruby works. The system is going to look at every single method. The second type is define_method. In define_method, you’re really just creating a large dynamic set of methods at runtime. When you start up the Rails server, it’s going to build all those methods but it’s not going to be when you’re calling it. Whereas in method_missing, it has a different type of lookup process.**[00:11:55] – Method collisions on monkey patching**That’s one of the reasons why monkey patching can have a bad reputation. You don’t know who else may be overriding those set of methods or opening up that class. Jordan’s personal approach is trying to separate things out as much as humanly possible. If there’s something that can be done in the lib directory, you can place that functionality inside of a separate module. And if you’re creating a gem, you have to be sensitive to other gems in that space or even the Rails core.**[00:17:25] – How to be good citizens to other developers**Metaprogramming has a lot of potentials to do great things but it also has a potential to cause a number of problems in the application. For Jordan’s students, what he usually does is walk them through some examples of metaprogramming where it can be done poorly. But then, he will follow it up with showing exactly when this is done right. He shows examples of poorly written classes that have dozen nearly identical methods. And then, he also shows how they could take all those methods, put the names in an array, and show how to leverage things like define_method to generate them. He also shows them how doing monkey patching can cause issues, how they can actually open up the string class and change one of the basic functionalities. Show that when they override that, that affects the entire rest of the application.**[00:24:45] – Worst examples of metaprogramming**Jordan ran into this hive of metaprogramming. When he opened up one of its classes, he had no idea what that class did. It was method_missing all over the place. Usually, there are 4 or 5 lines of code inside of that. It’s relatively straightforward and makes logical sense when you read it. This was nothing like that. They had multiple conditionals inside of the method_missing. One other hard thing about it is it does not have any test whatsoever. You need some test to make sure you’re capturing that functionality and to check if changes broke anything. You can’t also decipher what the inputs and outputs are.**[00:28:35] – Testing**Follow as much as real world examples. For example, in the phone parser gem, you can see some tests in there for that. You can also pass in the input that you plan to give. See if that matches the output. Jordan tells his students that respond_to_missing is as important to putting method_missing in there**[00:35:25] – Resources to get started**[Paolo Perrotta’s book Metaprogramming Ruby](https://www.amazon.com/Metaprogramming-Ruby-Program-Like-Pros/dp/1934356476) is one of the standards for metaprogramming in Ruby. He also gave some fantastic examples. He created a story about a new developer who goes into a company and learns how to implement metaprogramming from senior devs. It’s very entertaining and it also covers all the different aspects to think of metaprogramming, when to use it and when it could be a very bad idea to use it.

### **Picks**

**Jerome Hardaway**

- [Don’t Know Metaprogramming in Ruby? By Gavin Morrice](https://rubylearning.com/blog/2010/11/23/dont-know-metaprogramming-in-ruby/)
  **Dave Kimura**
- [Sherlock TV Series on BBC](https://www.bbc.co.uk/programmes/b018ttws)
  **Brian Hogan**
- [iOS application: Workflow](https://itunes.apple.com/us/app/workflow/id915249334?mt=8)
- [Overwatch](https://playoverwatch.com/en-us/)
  **Charles Max Wood**
- [Ruby Dev Summit](https://rubydevsummit.com/)
- Angular Dev Summit
- [Focuster](https://www.focuster.com/)
  **Jordan Hudgens**
- [Petergate](https://rubygems.org/gems/petergate/versions/1.6.3)
- [Comprehensive Ruby Programming by Jordan Hudgens](https://www.amazon.com/Comprehensive-Ruby-Programming-Jordan-Hudgens/dp/1787280640)
- [Twitter @jordanhudgens](https://twitter.com/jordanhudgens?lang=en)
- [Instagram @jordanhudgens](https://preprod.instagram.com/jordanhudgens/)
- [Blog crondose.com](https://www.crondose.com/author/crondose/)

### Transcript
