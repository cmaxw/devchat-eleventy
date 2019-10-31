---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 074: Inky Displays With Lars Wikman and Emilio Nyaray'
date: 2019-10-22T10:00:21.186Z
episode_number: '074'
duration: '52:47'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_074_Lars_Wikman.mp3'
tags:
  - elixir_mix
  - podcast
  - elixir
  - erlang
  - functional programming
  - BEAM
  - Mark Ericksen
  - Josh Adams
  - Michael Ries
  - Lars Wickman
  - Emilio Nyaray
question1: What is an Inky?
answer1: 'Inky is an E-Ink display that works with Nerves and Elixir. '
question2: What is an E-Ink display?
answer2: >-
  An E-Ink display is digital display technology that is intended to simulate
  paper. It has very low power consumption and very little glare.
question3: How resilient are E-Ink displays?
answer3: >-
  The pixels in an E-ink display have a low refresh rate. With the lack of
  constant change, an E-Ink display can be suddenly turned off and come right
  back to where it was.
question4: What are some profiling tools that exist for Erlang?
answer4: 'There are profiling tools by the names of eprof, fprof, and cprof.'
---
This episode of Elixir mix opens with Lars Wikman and Emilio Nyaray sharing how they came to be working together on a project called Inky. Inky is an E-Ink display that works with Nerves and Elixir. The project started when Lars wanted to use the Inky device from Nerves but didn’t want to install Python to do it. Emilio wanted to join because he found it fascinating to be able to control this device with Elixir. Lars and Emilio share some details of how this project came about and how it works. 

The inky comes in multiple sizes with the smaller pHAT display being about the size of a business card and the Inky wHAT being closer to the size of a Raspberry Pi. Lars shares that one of the biggest gotchas with these displays is the refresh rate. Once the pixels are changed the device can be turned off and still remain the same because they are physically changing. The panelists highlight that very little troubleshooting time had to go in to the Nerves portion of the project. Lars describes how he began looking at using Nerves just after it was announced and how he decided to use it in this project. He also shares how he wants to take on a project to put together a cross stitch of a bigger display that can change each day. One way to do this is by putting multiple pHATs together but Lars would prefer to use a wHAT.

The conversation then moves to Emilio sharing his journey to the Inky project. He has been working with Erlang professionally for a year. Ever since he worked with a startup in 2012-2013 where they used Erlang, he has had a strong desire to work with functional programming. This desire eventually lead him to work with Elixir and Phoenix to write a timesheet application as a consultant. When he got in to working with Nerves he borrowed a touchscreen at work and was blown away by how it worked. Emilio also details an audio controller interface side project that he is currently working on. The panelists then talk about the elixir community, what they love about it, the friendliness of the small community, and some individuals that have had an impact on them.

The discussion then moves on to the profiling tools eprof, fprof, and cprof. These tools are built into the Erlang Ecosystem. Eprof is a time profiling tool. Fprof is a time profiling tool as well, but it uses trace to file for minimal performance impact. Cprof is a simple call count profiling tool. Emilio shares how he came to be familiar with these, how he used them, and the benefits he saw in his application from using these tools. These profiling tools are also available in Elixir. The panelists also discuss eflame which is a flame graph profiling tool that is very easy to use. Emilio and Lars detail how they used a low dependency approach to be able to fake a display on the desktop for Inky and develop on the desktop. 

**Panelists**



*   Mark Ericksen
*   Josh Adams
*   Michael Ries

**Guest**



*   Lars Wikman
*   Emilio Nyaray

**Sponsors**



*   [Sentry.io](https://sentry.io/) use code “devchat” for two months free on Sentry’s small plan
*   [Adventures in .NET](https://devchat.tv/adventures-in-dotnet/)
*   [Ruby Rogues](https://devchat.tv/ruby-rogues/)

**Links**



*   [Lars’ writing on Inky](https://underjord.io/an-eink-display-with-nerves-elixir.html)
*   [Nerves](https://nerves-project.org/)
*   [E-Ink](https://www.eink.com/)	
*   [Inky pHAT](https://shop.pimoroni.com/products/inky-phat)
*   [Inky wHAT](https://shop.pimoroni.com/products/inky-what)
*   [Raspberry Pie](https://www.raspberrypi.org/)
*   [Arduino](https://www.arduino.cc/)
*   [Elixir Forum E-Ink Display](https://elixirforum.com/t/e-ink-display-inky-library-shout-out-showcase/23736)
*   [Phoenix](https://phoenixframework.org/)
*   [Elixir Circuits](https://github.com/elixir-circuits)
*   [Mysensors.org](https://www.mysensors.org/)
*   [Connor Rigby Github](https://github.com/ConnorRigby)
*   [Instinct.vet](https://www.instinct.vet/)
*   [Opensoundcontrol.org](http://opensoundcontrol.org/)
*   [Joe Arms Controlling Sound With OSC](https://joearms.github.io/published/2016-01-29-Controlling-Sound-with-OSC-Messages.html)
*   [Codesync.global](https://codesync.global/)
*   [Boyd Multerer Github](https://github.com/boydm)
*   [Erlang eprof documentation](http://erlang.org/doc/man/eprof.html)
*   [Erlang fprof documentation](http://erlang.org/doc/man/fprof.html)
*   [Erlang cprof documentation](http://erlang.org/doc/man/cprof.html)
*   [Eflame Github](https://github.com/proger/eflame)
*   [Lars Wikman: @lawik on twitter](https://twitter.com/lawik?lang=en)
*   [Emilio Nyaray: @nyaray on twitter](https://twitter.com/nyaray)
*   [Emilio Nyaray Github](https://github.com/nyaray)

**Picks**

**Josh Adams**



*   [autofs](https://wiki.archlinux.org/index.php/Autofs)
*   [Kodi.tv](https://kodi.tv)

**Michael Ries**



*   [Jehu Garcia youtube](https://www.youtube.com/user/jehugarcia)

**Mark Ericksen**



*   [FizzBuzz Enterprise Edition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition)
*   [Logitech G29 Driving Force](https://www.amazon.com/gp/product/B00Z0UWWYC/)

**Lars Wikman**



*   [Scenic Layout-O-Matic](https://github.com/BWheatie/scenic_layout_o_matic)
*   [Nerves Input Event Library](https://github.com/letoteteam/input_event)
