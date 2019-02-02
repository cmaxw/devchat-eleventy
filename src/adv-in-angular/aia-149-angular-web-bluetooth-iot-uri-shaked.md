---
layout: layouts/post.njk
title: >
  AiA 149: Angular, Web Bluetooth, and IoT with Uri Shaked
date: 2017-07-25 05:29:18
episode_number: 149
duration: 41:52
audio_url: https://media.devchat.tv//adventures-in-angular/AiA_149_Angular%2C_Web_Bluetooth%2C_and_IoT_with_Uri_Shaked.mp3
podcast: adv-in-angular
tags:
  - adv_in_angular
  - podcast
---

## AiA 149: Angular, Web Bluetooth, and IoT with Uri Shaked

In this episode, Shai Reznik, Ward Bell, Lukas Ruebbelke, and Charles Max Wood talk to Uri Shaked about using Angular with Web Bluetooth and IoT.**[00:02:27] – Introduction to Uri Shaked**Uri is an Angular GDE from Israel. His Angular Story episode is here.**[00:03:21] – Introduction to Hardware with Angular**Angular allows you to build web applications that scale quickly. For hardware devices, you need some kind of interface. Instead of a button, you have a mobile app or web application. This is one place where Angular comes into play. Building control panels, etc. You can do this with pure JavaScript or native mobile apps as well.**[00:05:20] – Does it run on the IoT device? or on the web?**It can do both. You can run Angular on a webserver on a Raspberry Pi or you can use Web Bluetooth to connect to the IoT device.**[00:06:45] – What are the advantages of using web technologies?**There's no hardware setup. And using Angular Material or Ionic, the UI looks right without spending a ton of time. RxJS allows you to gather sensor data from accelerometers, heart rate monitors, etc. connected via bluetooth.**[00:09:20] – The physical web**An IoT device that broadcasts its own URL. You can then interface with the device simply by scanning for and browsing to the device. One example is walking into a room, scanning, and then controlling the lights without installing an app.**[00:10:34] – Security**Security is optional on Bluetooth Low Energy. Bluetooth devices used to pair using pin codes and they got set to 0000 or 1234 by default. So now BLE devices don't require it. Some devices add security on top of bluetooth or use the pairing mechanism. Security is an ongoing concern with IoT in general. The devices that Uri has played with don't implement security. Uri actually had an audience member hack into the smart bulb he was using during a demo.**[00:15:08] – How do you manage your connection to the device through Angular?**Uri uses async/await to manage the promises based functions that allow you to connect to the device. He wraps all of this in a service. The bluetooth terminology used for the functions that manage the device are also called services. Don't get them confused.**[00:16:48] – What's the most useful thing you can do with this?**Connecting to an EEG headset that measures brainwaves. Uri wants to allow headset owners to perform EEG experiments in the browser. Otherwise, they have to set up a bluetooth dongle and install python and some libraries to make it work. He'd like to make it simple enough to browse to a webpage and click "Connect." He'd like to show the user pictures and then guess which one you're looking at.**[00:19:58] – What is the most useless thing you've build with this?**Uri 3D-printed a robot and installed an accelerometer into it and connected it to a WebGL based system to show the orientation of the robot.**[00:22:32] – How do you get started?**You need a browser and a bluetooth device. A smart lightbulb or a robot. You can use your smartphone to simulate a bluetooth device. Uri wrote an Android app that simulates a smart light bulb. Then you can connect the app to your computer's browser and control the smart bulb app from your computer.**[00:25:00] – Ward has a proposal for Uri**[Connect lights in your t-shirt to an arduino device and control it from your phone.&nbsp;](https://medium.com/@urish/how-to-connect-your-t-shirt-to-slack-using-arduino-90761201d70f)Web Bluetooth is much simpler than native APIs for Android or iOS.**[00:29:45] – Commercial applications**Physical web applications and connecting to remote tools and sensors. Smart counters for your electric meter.[Jen Looper's blog post on web bluetooth and beacons.](http://developer.telerik.com/content-types/tutorials/get-ready-web-bluetooth/)[The Louvre uses beacons.](http://senseable.mit.edu/louvre/)**[00:33:00] – The physical web**Uri ran a beacon that broadcast his personal site. He took his trash out and one of his neighbors kept getting a notification about his website on his phone.

### Picks

**Lukas Ruebbelke**

- [Antifragile](http://amzn.to/2h7XUQB)
- [Chef's Table on Netflix](https://www.netflix.com/title/80007945)
  **Shai Reznik**
- [59 Seconds](http://amzn.to/2uDIqIR)
- Volunteering - Ari Lerner teaching prisoners to code
  **Ward Bell**
- [The "other" Uri Shaked](https://www.eng.tau.ac.il/~shaked/)
- [Smart Coffee Machine](https://qz.com/901823/the-easy-way-your-smart-coffee-machine-could-get-hacked-and-ruin-your-life/)
- [YouTube video on telling if someone is lying](https://www.youtube.com/watch?v=pni_kDv9BsU)
  **Uri Shaked**
- Ward's yet-to-be-made shirt
- [AngularUP Conference](http://angular-up.com/)
- [WebAssembly](http://webassembly.org/)
  **Charles Max Wood**
- [Data Skeptic podcast](https://dataskeptic.com/)
  Links
- [@urishaked](http://twitter.com/urishaked)
- [urish.org](http://urish.org)

### Transcript
