---
layout: layouts/post.njk
title: >
  Cassandra Basic Schema and Ruby Gem
date: 2011-07-24 17:42:23
episode_number:
duration:
audio_url:
podcast: tmtc-screencasts
tags:
  - tmtc_screencasts
  - podcast
---

<object width="640" height="390" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true">

<param name="allowscriptaccess" value="always">
<param name="src" value="https://www.youtube.com/v/6Ogc8q1bJDA?version=3&amp;hl=en_US&amp;rel=0">
<param name="allowfullscreen" value="true">
<embed width="640" height="390" type="application/x-shockwave-flash" src="https://www.youtube.com/v/6Ogc8q1bJDA?version=3&amp;hl=en_US&amp;rel=0" allowfullscreen="true" allowscriptaccess="always"></embed></object>You can get cassandra at [cassandra.apache.org](https://cassandra.apache.org/) and the ruby gem by running:

    gem install cassandra

I did run into a problem with the trift_client gem when installing. If you get a Load Error, run this.

    sudo chmod 644 /usr/local/lib/ruby/gems/1.8/gems/thrift\_client-0.6.3/lib/thrift\_client/\*.rb sudo chmod 755 /usr/local/lib/ruby/gems/1.8/gems/thrift\_client-0.6.3/lib/thrift\_client/connection

Here are some of the Cassandra commands from the video:

    #connects to the cassandra server using the Twitter keyspace store = Cassandra.new(“Twitter”) # create a new column family in the Twitter keyspace called Users cf\_def = CassandraThrift::CfDef.new(:keyspace =\> “Twitter”, :name =\> “Users”) store.add\_column\_family(cf\_def) # add or create a row to the column family store.insert(“Users”, “cmaxw”, {“name” =\> “Charles Max Wood”, “description” =\> “Awesome coder”}) # remove a column from a row store.remove(“Users”, “cmaxw”, “description”)

[Download](https://traffic.libsyn.com/tmtc/Cassandra.m4v)17.2 MB[Download (iPod & iPhone)](https://traffic.libsyn.com/tmtc/Cassandra_-_iPhone.m4v) 20.9 MB[Take the 2011 Readers Survey](https://spreadsheets.google.com/a/contemporaryva.com/spreadsheet/viewform?ndplr=1&formkey=dE5mV3JCYnFWbDg5UDlZRE92VlBrYWc6MQ#gid=0)
