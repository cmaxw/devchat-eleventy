---
layout: layouts/post.njk
title: >
  Followers and Following
date: 2011-12-03 06:48:16
episode_number:
duration:
audio_url:
podcast: tmtc-screencasts
tags:
  - tmtc_screencasts
  - podcast
---

<object width="560" height="315" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true">

<param name="allowscriptaccess" value="always">
<param name="src" value="https://www.youtube.com/v/SCTxn5VXTg8?version=3&amp;hl=en_US">
<param name="allowfullscreen" value="true">
<embed width="560" height="315" type="application/x-shockwave-flash" src="https://www.youtube.com/v/SCTxn5VXTg8?version=3&amp;hl=en_US" allowfullscreen="true" allowscriptaccess="always"></embed></object>In order to get someone a timeline in JotRod, we need followers and following lists to compile the Jots from. This means that we need to add a new ColumnFamily called Followers and another one called Following. We don't have the joins capability from relational databases to do this for us. I'm going to hijack the User model's database connection to create the ColumnFamilies. (We don't have migrations, yet.) Here's what I ran in the rails console:

    cf\_def = CassandraThrift::CfDef.new(:keyspace =\> "JotRod", :name =\> "Followers") User.connection.add\_column\_family(cf\_def) cf\_def = CassandraThrift::CfDef.new(:keyspace =\> "JotRod", :name =\> "Following") User.connection.add\_column\_family(cf\_def)

Now that we have the ColumnFamilies, I want to have syntax like this to define the relationships on the User model:

    list :followers, :User list :following, :User

This should provide the following API: #followers - returns an array of users as specified from the Followers ColumnFamily #followers\<\<(user) &nbsp;- adds the user to the User object's followers list if it's not already there and a similar API for following.[Sandra's repository](https://github.com/charlesmaxwood/sandra)[JotRod's repository](https://github.com/charlesmaxwood/jotrod)[Download](https://traffic.libsyn.com/tmtc/FollowersAndFollowing-720.mov) 680 MB[Download (iPod & iPhone)](https://traffic.libsyn.com/tmtc/FollowersAndFollowing-iPhone.m4v) 165 MB[Take the 2011 Readers Survey](https://teachmetocode.com/survey)
