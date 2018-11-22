require 'nokogiri'
require 'date'
require 'fileutils'

doc = File.open('devchattv.wordpress.xml') do |f|
  Nokogiri::XML(f)
end

FORBIDDEN_TYPES = %w[ads acf-field-group acf-field wpcw_course wc_user_membership wc_membership_plan tve_lead_shortcode
tve_lead_group tve_lead_2s_lightbox tribe_organizer tribe_venue tve_form_type tribe_events shop_order_refund tcb_lightbox
shop_coupon shop_order product nav_menu_item hosts forum devchattv_show course_unit conferences conference-talks blog 
attachment]

doc.search("item").each do |episode|
  post_type = episode.xpath("wp:post_type").inner_text
  unless FORBIDDEN_TYPES.include?(post_type)
    title = episode.xpath("title").inner_text
    date = DateTime.parse(episode.xpath("pubDate").inner_text)
    content = episode.xpath("content:encoded").inner_text
    link = episode.xpath("link").inner_text

    meta = {}
    postmetas = episode.xpath("wp:postmeta")
    postmetas.each do |postmeta|
      key = postmeta.xpath("wp:meta_key").inner_text
      value = postmeta.xpath("wp:meta_value").inner_text
      meta[key] = value unless key =~ /\A_.*/
    end

    file_contents = <<-EOF
---
layout: layouts/post.njk
title: >
      #{title}
date: #{date.strftime("%Y-%m-%d %H:%M:%S")}
episode_number: #{meta['episode_number']}
duration: #{meta['duration']}
audio_url: #{meta['audio_url']}
tags: #{post_type}
---

#{content}

<h3>Transcript</h3>

#{meta['transcript']}
EOF

    unless File.directory?(post_type)
      FileUtils.mkdir_p(post_type)
    end

    file_path = link.sub(/https?:\/\/devchat.tv\//, '').chomp('/') + ".html"
    file = File.new(file_path, 'w')
    file.puts(file_contents)

  end
end
