---
layout: layouts/post.njk
title: >
  Building a Star-Rating System in Ruby on Rails with jQuery
date: 2011-07-05 19:37:28
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
<param name="src" value="https://www.youtube.com/v/4fSJTjATUfo?version=3&amp;hl=en_US&amp;rel=0">
<param name="allowfullscreen" value="true">
<embed width="640" height="390" type="application/x-shockwave-flash" src="https://www.youtube.com/v/4fSJTjATUfo?version=3&amp;hl=en_US&amp;rel=0" allowfullscreen="true" allowscriptaccess="always"></embed></object>
### Specification

- Clicking a star rating turns on the stars to the left of the star I clicked.
- Clicking a star submits the star rating.
- When I refresh the page, the star ratings should be persistent.
  We’ll be using Rails’ functions including:
- form_for
- hidden_field
- Rails Helpers
  We’ll be using jQuery functions including:
- click
- each
- ajax
  \<code\> \<% form_id = "movie\_#{movie.id}\_rating" %\> \<%= form_for movie.ratings.last || movie.ratings.build, :html =\> {:id =\> form_id , :class =\> "star_rating_form"} do |f| %\> \<%= f.hidden_field :movie_id %\> \<%= f.hidden_field :stars, :id =\> form_id + "\_stars" %\> \<% end %\> \<% (1..5).each do |i| %\> \<li id="\<%= form_id %\>\_\<%= i %\>" data-stars="\<%= i %\>" data-form-id="\<%= form_id %\>"\>\</li\> \<% end %\> \</code\> \<code\> var set_stars = function(form_id, stars) { for(i=1; i \<= 5; i++){ if(i \<= stars){ $('#' + form\_id + '\_' + i).addClass("on"); } else { $('#' + form_id + '\_' + i).removeClass("on"); } } } $(function() { $('.rating_star').click(function() { var star = $(this); var form\_id = star.attr("data-form-id"); var stars = star.attr("data-stars"); $('#' + form_id + '\_stars').val(stars); $.ajax({ type: "post", url: $('#' + form_id).attr('action'), data: $('#' + form\_id).serialize() }) }); $('.star_rating_form').each(function() { var form_id = $(this).attr('id'); set\_stars(form\_id, $('#' + form_id + '\_stars').val()); }); }); \</code\>
