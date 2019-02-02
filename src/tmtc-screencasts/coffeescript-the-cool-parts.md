---
layout: layouts/post.njk
title: >
  CoffeeScript: The Cool Parts
date: 2011-05-13 03:56:16
episode_number:
duration:
audio_url:
podcast: tmtc-screencasts
tags:
  - tmtc_screencasts
  - podcast
---

<iframe width="560" height="315" src="http://www.youtube.com/embed/43P0kWswWWI" frameborder="0" allowfullscreen></iframe>CoffeeScript offers more than nice syntax for setting and managing data and functions. It also offers Classes, Inheritance, access to a 'super' method, Ruby-style string interpolation, easy variable and function bindings, and chained comparisons. Here's the code I showed in the video:

    class Vehicle constructor: (@name) -\> move: (miles) -\> console.log @name + " drove " + miles + " miles." class VWBug extends Vehicle move: -\> console.log "Cruisin'..." super 100 class Truck extends Vehicle move: -\> console.log "Haulin'..." super 50 mater = new Truck "Mater" herbie = new VWBug "Herbie" mater.move() herbie.move()

    a1c = "7.6" healthy = 7.0 \> a1c \> 5.0 console.log "A1C within healthy range: #{a1c}"

    Account = (customer, cart) -\> @customer = customer @cart = cart $('.shopping\_cart').click (event) =\> @customer.purchase @cart

If you're new to CoffeeScript, make sure you check out the [CoffeeScript Cookbook](http://coffeescriptcookbook.com) and [CoffeeScript Basics](http://teachmetocode.com/screencasts/coffeescript-basics-a-teach-me-to-code-tutorial/).[Download](http://traffic.libsyn.com/tmtc/CoffeescriptTheCoolParts.m4v) 150.3 MB[Download (iPod & iPhone)](http://traffic.libsyn.com/tmtc/CoffeescriptTheCoolPartsiPhone.m4v) 87.1 MB
