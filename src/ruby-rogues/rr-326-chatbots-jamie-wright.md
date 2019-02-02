---
layout: layouts/post.njk
title: >
  RR 326: Chatbots with Jamie Wright
date: 2017-09-05 05:00:20
episode_number: 326
duration: 42:59
audio_url: https://media.devchat.tv/ruby-rogues/RR_326_Chatbots_with_Jamie_Wright.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

In this episode of the Ruby Rogues podcast Dave Kimura, Eric Berry, and Charles Max Wood discuss chatbots with Jamie Wright. Jamie will be speaking at [Ruby Dev Summit](http://rubydevsummit.com) in October.

#### [01:25] Jamie Wright introduction

Jamie is a professional nerd and independent contractor. He's been coding for 20 years mostly in Ruby. He's starting to get into Elixir. One of his first projects was a text adventure game, which got him started with conversational UI's. He saw [Hubot](https://hubot.github.com/) on [Campfire](https://basecamp.com/retired/campfire). He started tweaking that. He made a timetracking bot that used [Freshbooks](http://gofreshbooks.com/devchat) and [Harvest](http://getharvest.com). Then Slack came out and he created [Tatsu](http://tatsu.io).

#### [05:00] Tatsu features

You can schedule it and it'll ask automated questions. He's working on having it integrate with github, Harvest, Google Calendar, etc. If there's a blocker, you should be able to create private conversations with the people who are blocked and add that to the standup. When you sign up it adds a video link into your slack. Eric thinks this is pretty clever. In Slack, the default action people should take when a bot is installed should be to DM the person who installed it.

#### [08:50] What it takes to write a bot and the challenges involved

Writing bots is "fun as hell." Chatbots suck. We have the opportunity to improve an entire piece of the industry. Many bots are command based bots. You say something and it responds. Conversational UI's are really hard because they don't have any context or shared understanding of the world.

#### [12:18] Chatbot libraries - Getting Started

Every large company is working on one. There are also lots of natural language processing services that you can use as well. Before you start, you need to know your use case. Where will your users be? What services do you want to provide? At work? Probably slack. Among friends? Facebook Node has botkit. It's the most popular chatbot platform in the world. Start with botkit, use the examples, then come back to Ruby. Dave brings up building a chatbot for Slack that connected to [VersionOne](http://versionone.com). Data retrieval bots are another great place to start. From there, you start answering the question of where things go.

#### [18:51] The panel's experience with chatbots

Tatsu has been around for about 2 years and has existed pre-Slack. Eric uses a Slackbot to get information about users who cancel or decline messages. Chuck has done automatic posting to Slack with [Zapier](http://zapier.com). Chuck also mentions serverless with AWS Lambda. Chatbots are a lot like webapps. They're text in, text out and process things in very similar ways. Dave also brings up SMS bots as well with [Twilio](http://twilio.com). Jamie has thought about creating a web based standup bot for when Slack is down. Slack is a single point of failure for your bot if that's where it lives. Slack gives you a lot of UI elements that you don't get in SMS.

#### [24:51] Do you wish that Slack were more like IRC

From an end-user perspective, no. But Jamie does wish they'd revisit threading replies and separating conversations in the same channel. It only took a handful of developers to build Slack.

#### [27:20] What gems do you use in Ruby?

[slack-ruby-client by dblock](https://github.com/slack-ruby/slack-ruby-client)[slack-ruby-bot by dblock](https://github.com/slack-ruby/slack-ruby-bot)[eventmachine](https://github.com/eventmachine/eventmachine)

#### [29:30] Does Slack push to an endpoint? or do you poll Slack?

You can call an api endpoint on Slack that gives you a websocket endpoint. The events API sends webhook events to your server. It's easier to program against, but it can be slower. It may also be restricted on certain API's

#### [30:55][github fantasy league](https://github.com/jwright/github-fantasy-league)

Based on a [Peepcode video with Aaron Patterson](https://www.pluralsight.com/courses/play-by-play-aaron-patterson). You got a score based on your activity in Github. Jamie recorded videos for a talk at Codemash. It never actually became a thing, but it was a fun idea. Jamie got into Ruby by going to a Ruby Koans talk by Jim Weirich.

#### Jamie's links

- [github.com/jwright](http://github.com/jwright)
- [twitter.com/jwright](http://twitter.com/jwright)
- [brilliantfantastic.com](http://brilliantfantastic.com)
  This is what we put into the chat room after the Dr. Who reference... ![](https://devchat.tv/wp-content/uploads/2017/09/^3BF6E5FB510664B5537A726B07D95F6602C6D85E43DCD656FF^tfile_urlpv.gif) ![](https://devchat.tv/wp-content/uploads/2017/09/^B9E9CAA4093BDBD2B45380882901EB97F8F6DE517CE3137A94^tfile_urlpv.gif)

#### Picks

Eric

- [Rollbar](http://rollbar.com)
  Dave
- [Mattermost](https://about.mattermost.com/)
  Chuck
- [Zoho CRM](http://crm.zoho.com)
  Jamie
- [Digit](http://digit.co)

### Transcript
