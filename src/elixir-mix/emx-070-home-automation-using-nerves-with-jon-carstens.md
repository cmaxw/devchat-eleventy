---
layout: layouts/post.njk
podcast: elixir-mix
title: 'EMx 070: Home Automation Using Nerves with Jon Carstens'
date: 2019-09-24T10:00:17.605Z
episode_number: '070'
duration: '38:03'
audio_url: 'https://media.devchat.tv/elixir-mix/EMx_070_Jon_Carstens.mp3'
tags:
  - elixir_mix
  - podcast
---
In this episode of Elixir Mix the panel interviews Jon Carstens about his work with Nerves. Michael Ries gives a little background on Jon, as they have worked together and Jon helps run the remote nerves meet up that Michael attends.  Jon recently started working with Frank Hunleth at Smart Rent. Jon tells the panel what an adventure it is working at Smart Rent.

The panel asks Jon about the parts of the Nerves ecosystem he has been working in. He explains how he has been working with NervesHub to manage collections or groups of devices. He has also been working with ShoeHorn controlling app start order and erlang heart stop module. Making sure that they can remote reboot devices. 

Jon talks more about what Smart Rent does. He explains that there are lots of brands and types of smart home devices, not all of which can connect to the internet. At Smart Rent, they connect various brands and devices using their own custom-built hub. Smart Rent has many benefits tenants and even more for property managers. Property managers can use Smart Rent to manage vacant properties, monitor for leaks, break-ins, fire, and dangerous temperatures. They can even set up open houses remotely, changing the temperature to comfortable levels, turning on and off lights, and unlocking and locking the doors for walkthroughs of the properties. 

Justin Schneck gave a keynote at ElixirConf 2019 where he showed of an IEX console Nerves device. The panel asks Jon about his role in building the devices. Jon explains how he was tasked with the project. He explains how the console works using an IO. The hardest part, Jon explains, was getting the ASCII characters right. He spent hours working on it, he shares the libraries and tools he used to help him get it right. 

The panel asks how the IEX server sessions work. Jon explains what would happen if you tried to SSH into an IEX session running through NervesHub on a device and other examples of how it all works. The panel discusses the benefits of debugging devices using the IEX console. Jon explains that it has been extremely beneficial in debugging remote devices. 

While the IEX console is very useful, Jon warns that it is not very pretty. The IEX console was designed by backend developers and he points out some of the things that could use a little love. The panel asks about contributing to this project and invites listeners to contribute on the Nerves GitHub pages.  

To finish, the panel asks Jon about his lightning talk. Jon launches into the story of his at-home Nerves projects. It all started when they replaced their old ceiling fan for one with a remote. The problem was that the frustrating design coupled with his remote thieving kids, the fan became an annoyance, to say the least. 

Jon discovered that the remote-operated using a radio frequency. He learned all he could about radio frequencies and how they worked. He warns listeners not to broadcast radio frequencies to far from their homes because there will be legal ramifications. Using a raspberry pi and a jumper cable, Jon built a device that now controls all devices in his home that operate using radio frequencies. He shares the tools he used to record the frequencies from the remotes and the library he built of the frequencies. Jon shares his dream of running all remote-controlled devices either through his phone or his voice. His next project is infrared.


**Panelists**

- Mark Ericksen
- Eric Oestrich
- Michael Ries

**Guest**

- Jon Carstens

**Sponsors**

- [Sentry](http://sentry.io/)– use the code “devchat” for two months free on Sentry’s small plan
- [Adventures in DevOps](https://devchat.tv/adventures-in-devops/)
- [My Ruby Story](https://devchat.tv/my-ruby-story/)
- [CacheFly](https://www.cachefly.com/)

**Links**

- [https://www.realflight.com/index.php](https://www.realflight.com/index.php)
- [http://www.wings3d.com/](http://www.wings3d.com/)
- [https://www.flightgear.org/](https://www.flightgear.org/)
- [https://github.com/nerves-project/shoehorn](https://github.com/nerves-project/shoehorn)
- [http://erlang.org/doc/man/heart.html](http://erlang.org/doc/man/heart.html)
- [https://www.nerves-hub.org/](https://www.nerves-hub.org/)
- [https://smartrent.com/](https://smartrent.com/)
- [https://beagleboard.org/black/](https://beagleboard.org/black/)
- [ElixirConf 2019 - Day 2 Morning Keynote - Justin Schneck](https://youtu.be/fRP_dVton7o?t=2228)
- [https://github.com/nerves-hub/nerves\_hub\_web](https://github.com/nerves-hub/nerves_hub_web)
- [https://learnyousomeerlang.com/building-otp-applications](https://learnyousomeerlang.com/building-otp-applications)
- [https://github.com/nerves-hub/nerves\_hub/blob/master/lib/nerves\_hub/console\_channel.ex](https://github.com/nerves-hub/nerves_hub/blob/master/lib/nerves_hub/console_channel.ex)
- [https://www.npmjs.com/package/ansi-to-html](https://www.npmjs.com/package/ansi-to-html)
- [https://github.com/stephlow/ansi\_to\_html](https://github.com/stephlow/ansi_to_html)
- [https://twitter.com/JonCarstens/status/1169660675137912832](https://twitter.com/JonCarstens/status/1169660675137912832)
- [https://github.com/nerves-hub/nerves\_hub\_web](https://github.com/nerves-hub/nerves_hub_web)
- [https://embedded-elixir.com/post/2019-08-29-nerves-at-434-mhz/](https://embedded-elixir.com/post/2019-08-29-nerves-at-434-mhz/)
- [ElixirConf 2019 - Lighting Talk - Nerves @ 433 MHZ](https://youtu.be/PEheIY6gGhY)
- [Jon Carstens: Dadgineering with Elixir+Nerves](https://www.youtube.com/watch?v=SJc4YYYloTQ)
- [https://github.com/jjcarstens/replex](https://github.com/jjcarstens/replex)
- [https://github.com/F5OEO/rpitx](https://github.com/F5OEO/rpitx)
- [https://osmocom.org/projects/rtl-sdr/wiki/Rtl-sdr](https://osmocom.org/projects/rtl-sdr/wiki/Rtl-sdr)
- [https://github.com/jjcarstens](https://github.com/jjcarstens)
- [https://www.facebook.com/Elixir-Mix](https://www.facebook.com/Elixir-Mix)
- [https://twitter.com/elixir\_mix](https://twitter.com/elixir_mix)

**Picks**

**Mark Ericksen:**

- [Ecto 3.2 released](https://github.com/elixir-ecto/ecto/blob/master/CHANGELOG.md)
- [PostgreSQL CTE information](http://www.postgresqltutorial.com/postgresql-cte/)

**Eric Oestrich:**

- [https://github.com/oestrich/grapevine-ansi](https://github.com/oestrich/grapevine-ansi)
- [https://www.realflight.com/index.php](https://www.realflight.com/index.php)

**Michael Ries:**

- [http://www.wings3d.com/](http://www.wings3d.com/)
- [Flite Test Sea Duck Electric Airplane Kit](https://store.flitetest.com/flite-test-sea-duck-electric-airplane-kit-1422mm-flt-1040/p673704)

**Jon Carstens:**

- [Off to Be the Wizard](https://www.goodreads.com/book/show/18616975-off-to-be-the-wizard)
