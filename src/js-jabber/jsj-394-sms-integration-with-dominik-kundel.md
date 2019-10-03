---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 394: SMS Integration with Dominik Kundel'
date: 2019-09-24T10:00:01.644Z
episode_number: '394'
duration: '28:40'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_394_Dominik_Kundel.mp3'
image: /images/uploads/javascript_jabber_thumb.jpg
tags:
  - js_jabber
  - podcast
  - Charles Max Wood
  - Dominik Kundel
  - JavaScript Jabber
  - Twilio
  - telephony
  - SMS
---
Dominik Kundel works as developer evangelist at Twilio. Dominik talks about the history of Twilio, which actually started with integrating phone calls into apps and then moved to SMS integration. 

Today Charles and Dominik are talking about how the SMS message approach can augment your user experience. Since many people are not familiar with implementing SMS, Dominik talks about how Twilio can help. Twilio created was a supernetwork where they work with carriers and gateways around the world to ensure that they provide reliable services. They also focus heavily on making sure that the developer experience is great.

Uber and Lyft are two of the companies that use Twilio, and Dominik shares some of the interesting things that they’ve accomplished. He is particularly excited about phone number masking to support privacy. Uber and Lyft use phone number masking so that your driver doesn’t see your real number and you don’t see theirs. Instead, each of you sees a Twilio number. This use case is becoming more common. 

Twilio recently introduced Flex, which Dominik explains is their contact center solution. Flex is designed to keep with their philosophy of everything should be programmable and configurable, and take it on to a software shipment. This is their first time shipping software instead of just APIs. Flex is highly customizable and flexible, allows you to build React plugins that let you change anything you want.

Charles asks Dominik about some of the gotchas in telephony. One major issues is spam calls, which Twilio is trying to work with some providers on a ‘verified by Twilio’ list. This list lets companies get verified, and they’re working on ways to let you know the reason why they’re calling without having to answer your phone. This can be difficult because each country has different regulations.

Dominik talks about what it would take for someone who wanted to build an SMS gateway themselves. They would have to work with carriers and learn SMS protocols. It’s important to note that SMS and phone calls have different protocols

Dominik talks about some of the unique use cases they’ve seen their system. Some examples are contextual communications, account verifications, and codex creation. There are other fun examples, such as a drone controlled via text message, a fake boyfriend app, and a dog that was taught to take selfies that are sent to his owner. 

Charles asks about ways to get started with Twilio. If you want to explore this and don’t know where to get started, try Twilio Quest, a game to teach you how to use Twilio. There is also documentation, which is good if you know exactly what you want to achieve, or if you just want to explore possibilities then download Twilio Quest. 

They delve into a more specific use case for Twilio to send text to subscibers of DevChatTV. Dominik talks about ways of dealing with sending notifications to people outside of the US. You can send with a US number to any country code, or you can personalize it, so that people in the UK receive it from a UK number and so on through automatic geocode matching. They talk about Twilio’s billing. 

Finally, they talk about security within telephony in light of recent hacks. They discuss the security of two factor authentication.Two factor authentication and security, especially in light of recent hacks. Dominik talks about the API called Authy, where you can implement different ways of doing two factor authentication, such as push notifications, time based one time password, sms, and phone calls. For most people in the world two factor authentication is very safe, unless you’re a very important person, then you’re more at risk for targeted attacks. They conclude by talking about Twilio’s acquisition of Sendgrid.


### **Panelists**



*   Charles Max Wood

With special guest: Dominik Kundel


## **Sponsors**



*   [iPhreaks Show](https://devchat.tv/iphreaks/)
*   [Sentry](http://sentry.io/) use the code “devchat” for 2 months free on Sentry’s small plan
*   [Ruby Rogues](https://devchat.tv/ruby-rogues/)

**Links**



*   [Twilio](https://www.twilio.com/)
*   [Flex](https://flex.com/)
*   [React](https://reactjs.org/)
*   [Rust](https://www.rust-lang.org/)
*   [Twilio Quest](https://www.twilio.com/quest)
*   [Twilio docs](https://www.twilio.com/docs)
*   [Twilio Completes Acquisition of Sendgrid](https://www.twilio.com/press/releases/twilio-completes-acquisition-sendgrid)
*   [Authy](https://authy.com/)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)


### **Picks**

**Charles Max Wood:**



*   [Superfans by Pat Flynn](https://patflynn.com/superfans/)
*   [Neilpatel.com ](https://neilpatel.com/) 

**Dominik Kundel:**



*   Enable a setting called javascript.implicit
*   Follow him @dkundel

<!-- Docs to Markdown version 1.0β17 -->
